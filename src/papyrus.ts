'use strict';
import * as vscode from 'vscode';
import { existsSync, lstatSync, mkdirSync, writeFileSync } from 'fs';
import { join, extname, dirname } from 'path';
import { spawn } from 'child_process';
import { tmpdir } from 'os';

import { Extension } from './extension';

export function activate(context: vscode.ExtensionContext) {
    Extension.Subscribe(context, new PapyrusCode(context));
    Extension.Log('The extension ' + Extension.Name + ' is now enabled.');
}

export function deactivate() {
    Extension.Log('The extension ' + Extension.Name + ' is now disabled.');
}

class PapyrusConfig {
    private hardcodedGameMode: boolean = false;
    private gameMode: number = -1;

    public GameMode() : number {
        if (this.hardcodedGameMode) { return this.gameMode; }

        if (vscode.window.activeTextEditor != undefined) {
            switch (vscode.window.activeTextEditor.document.languageId) {
                case 'papyrus-fo4':
                    return 0;

                case 'papyrus-sky':
                    return 1;

                case 'papyrus-sse':
                    return 2;

                case 'papyrus-project':
                    return 3;
            }
        }

        return -1;
    }

    public GetGameMode(fileName: string) : number {
        let result = -1;
        if      (fileName.includes('Fallout 4'))                { result = 0; }
        else if (fileName.includes('Skyrim Special Edition'))   { result = 2; }
        else if (fileName.includes('Skyrim'))                   { result = 1; }
        return result;
    }

    public SetGameMode(gameMode: number | undefined) : void {
        this.hardcodedGameMode = (gameMode != undefined);
        this.gameMode = (gameMode != undefined) ? gameMode : -1;
    }

    public Exists() : boolean {
        let config = vscode.workspace.getConfiguration(Extension.Configuration.Section);
        return (config != undefined);
    }

    public GameDirectory() : string {
        let config = vscode.workspace.getConfiguration(Extension.Configuration.Section);
        let value = undefined;

        switch (this.GameMode()) {
            case 0:
                value = config.get(Extension.Configuration.FO4_GameDirectory);
                return (value == undefined) ? '' : value as string;

            case 1:
                value = config.get(Extension.Configuration.SKY_GameDirectory);
                return (value == undefined) ? '' : value as string;

            case 2:
                value = config.get(Extension.Configuration.SSE_GameDirectory);
                return (value == undefined) ? '' : value as string;

            default:
                return '';
        }
    }

    public CompileTarget() : string {
        let config = vscode.workspace.getConfiguration(Extension.Configuration.Section);
        let value = config.get(Extension.Configuration.CompileTarget);
        return (value == undefined) ? '' : value as string;
    }

    public CompilerDirectory() : string {
        let config = vscode.workspace.getConfiguration(Extension.Configuration.Section);
        let value = undefined;

        switch (this.GameMode()) {
            case 0:
                value = config.get(Extension.Configuration.FO4_CompilerDirectory);
                return (value == undefined) ? '' : value as string;

            case 1:
                value = config.get(Extension.Configuration.SKY_CompilerDirectory);
                return (value == undefined) ? '' : value as string;

            case 2:
                value = config.get(Extension.Configuration.SSE_CompilerDirectory);
                return (value == undefined) ? '' : value as string;

            default:
                return '';
        }
    }

    public ImportDirectories() : Array<string> {
        let config = vscode.workspace.getConfiguration(Extension.Configuration.Section);
        let value = undefined;

        switch (this.GameMode()) {
            case 0:
                value = config.get(Extension.Configuration.FO4_ImportDirectories);
                return (value == undefined) ? [''] : value as Array<string>;

            case 1:
                value = config.get(Extension.Configuration.SKY_ImportDirectories);
                return (value == undefined) ? [''] : value as Array<string>;

            case 2:
                value = config.get(Extension.Configuration.SSE_ImportDirectories);
                return (value == undefined) ? [''] : value as Array<string>;

            default:
                return [''];
        }
    }

    public OutputDirectory() : string {
        let config = vscode.workspace.getConfiguration(Extension.Configuration.Section);
        let value = undefined;

        switch (this.GameMode()) {
            case 0:
                value = config.get(Extension.Configuration.FO4_OutputDirectory);
                return (value == undefined) ? '' : value as string;

            case 1:
                value = config.get(Extension.Configuration.SKY_OutputDirectory);
                return (value == undefined) ? '' : value as string;

            case 2:
                value = config.get(Extension.Configuration.SSE_OutputDirectory);
                return (value == undefined) ? '' : value as string;

            default:
                return '';
        }
    }

    public AsmOptions() : string {
        let config = vscode.workspace.getConfiguration(Extension.Configuration.Section);
        let value = undefined;

        switch (this.GameMode()) {
            case 0:
                value = config.get(Extension.Configuration.FO4_AsmOptions);
                return (value == undefined) ? '' : value as string;

            case 1:
                value = config.get(Extension.Configuration.SKY_AsmOptions);
                return (value == undefined) ? '' : value as string;

            case 2:
                value = config.get(Extension.Configuration.SSE_AsmOptions);
                return (value == undefined) ? '' : value as string;

            default:
                return '';
        }
    }

    public Flags() : string {
        switch (this.GameMode()) {
            case 0:
                return 'Institute_Papyrus_Flags.flg';

            case 1:
            case 2:
                return 'TESV_Papyrus_Flags.flg';

            default:
                return '';
        }
    }
}

class PapyrusCode {
    private Configuration: PapyrusConfig = new PapyrusConfig();

    constructor(context: vscode.ExtensionContext) {
        this.RegisterCommand(context, Extension.Command.Compile,           () => { this.Compile(false, false, false); });
        this.RegisterCommand(context, Extension.Command.CompileRelease,    () => { this.Compile(true, true, false); });
        this.RegisterCommand(context, Extension.Command.CompileFinal,      () => { this.Compile(true, true, true); });
        this.RegisterCommand(context, Extension.Command.CompileFile,       () => { this.CompileFile(); });
        this.RegisterCommand(context, Extension.Command.CompileFolder,     () => { this.CompileFolder(); });
        this.RegisterCommand(context, Extension.Command.CompileTarget,     () => { this.CompileTarget(); });
        this.RegisterCommand(context, Extension.Command.CreateProject,     () => { this.CreateProjectFile(); });
    }

    protected RegisterCommand(context: vscode.ExtensionContext, commandName: string, callback: () => any) : void {
        Extension.Subscribe(context, vscode.commands.registerTextEditorCommand(commandName, callback));
    }

    private errorConfigMissing(sectionName: string, optionName?: string): void {
        let message = (optionName) ? 'Missing Config: ' + sectionName + '.' + optionName : 'Missing Config Section: ' + sectionName;
        vscode.window.showErrorMessage(message, { title: 'Ok' });
    }

    private Compile(Optimize: boolean, Release: boolean, Final: boolean) : void {
        if (!this.Configuration.Exists()) {
            this.errorConfigMissing(Extension.Configuration.Section);
            return;
        }

        if (vscode.window.activeTextEditor != undefined) {
            if (!vscode.window.activeTextEditor.document.languageId.includes('papyrus')) {
                vscode.window.showErrorMessage('Active file is not a Papyrus script.');
                return;
            }

            vscode.window.activeTextEditor.document.save();
            let Compiler = new PapyrusCompiler(this.Configuration, Optimize, Release, Final,
                new Array<string>(vscode.window.activeTextEditor.document.fileName));

            Compiler.Run();
        }
        else {
            vscode.window.showErrorMessage('There is no active file to compile!');
        }
    }

    private CompileFile() {
        var selection: Array<string> = new Array<string>();
        vscode.window.showOpenDialog({
            canSelectFiles: true,
            canSelectMany: true,
            defaultUri: undefined,
            filters: {
                'Papyrus Source': ['psc'],
                'Papyrus Project': ['ppj']
            }
        }).then(files => {
            if (files) {
                for (let i = 0; i < files.length; i++) {
                    selection.push(files[i].fsPath);
                }

                let Compiler = new PapyrusCompiler(this.Configuration, false, false, false, selection, this.Configuration.GetGameMode(selection[0]));
                Compiler.Run();
            }
        });
    }

    private CompileFolder() {
        var selection: Array<string> = new Array();
        vscode.window.showOpenDialog({
            canSelectFolders: true,
            canSelectMany: true,
            defaultUri: undefined
        }).then(files => {
            if (files) {
                for (let i = 0; i < files.length; i++) {
                    selection.push(files[i].fsPath);
                }

                let Compiler = new PapyrusCompiler(this.Configuration, false, false, false, selection, this.Configuration.GetGameMode(selection[0]));
                Compiler.Run();
            }
        });
    }

    private CompileTarget() {
        if (!this.Configuration.Exists()) {
            this.errorConfigMissing(Extension.Configuration.Section);
            return;
        }

        let compileTarget = this.Configuration.CompileTarget();
        if (compileTarget != '') {
            let Compiler = new PapyrusCompiler(this.Configuration, false, false, false,
                new Array<string>(compileTarget), this.Configuration.GetGameMode(compileTarget));
            Compiler.Run();
        }
        else {
            vscode.window.showErrorMessage('There is no target file to compile!');
        }
    }

    private CreateProjectFile() {
        var selection: Array<string> = new Array();
        vscode.window.showOpenDialog({
            canSelectFiles: true,
            canSelectMany: true,
            defaultUri: undefined,
            filters: {
                'Papyrus Source': ['psc']
            }
        }).then(files => {
            if (files) {
                for (let i = 0; i < files.length; i++) {
                    selection.push(files[i].fsPath);
                }

                let projectGameMode = this.Configuration.GetGameMode(selection[0]);
                if (projectGameMode != 0) {
                    vscode.window.showWarningMessage('Papyrus Project files are only supported by Fallout 4\'s Papyrus Compiler.');
                    return;
                }

                let Compiler = new PapyrusCompiler(this.Configuration, false, false, false, selection, projectGameMode);

                vscode.window.showSaveDialog({
                    defaultUri: undefined,
                    filters: {
                        'Papyrus Project': ['ppj']
                    }
                }).then(file => {
                    if (file) {
                        writeFileSync(file.fsPath, Compiler.ProjectXML);
                        vscode.window.showTextDocument(file);
                    }
                });
            }
        });
    }
}

class PapyrusCompiler {
    public Path:        string;
    public Directory:   string;
    public Output:      string;
    public Flags:       string;
    public Asm:         string;
    public Project:     boolean = false;
    public Optimize:    boolean = false;
    public Release:     boolean = false;
    public Final:       boolean = false;
    public Imports:     Array<string>;
    public Scripts:     Array<string>;
    public Folders:     Array<string> = new Array<string>();
    public GameMode:    number;

    constructor(Configuration: PapyrusConfig, Optimize: boolean, Release: boolean, Final: boolean, Scripts?: Array<string>, GameMode?: number) {
        Configuration.SetGameMode(GameMode);
        this.GameMode   = Configuration.GameMode();
        this.Path       = Configuration.GameDirectory();
        this.Directory  = this.GameifyPath(Configuration.CompilerDirectory());
        this.Output     = this.GameifyPath(Configuration.OutputDirectory());
        this.Flags      = Configuration.Flags();
        this.Asm        = Configuration.AsmOptions();
        this.Optimize   = Optimize;
        this.Release    = Release;
        this.Final      = Final;
        this.Imports    = this.SortImports(Configuration.ImportDirectories());
        this.Scripts    = this.SortScripts(Scripts);
    }

    private GameifyPath(filePath: string) : string {
        return (filePath.toLowerCase().includes(this.Path.toLowerCase())) ? filePath : join(this.Path, filePath);
    }

    private isPathNamespace(filePath: string) : boolean {
        switch (this.GameMode) {
            case 0:
                filePath = filePath.substring(dirname(filePath).length);
                if (filePath.split('\\').length > 3) {
                    return true;
                }

            case 1:
            case 2:
            default:
                return false;
        }
    }

    private SortImports(imports: Array<string>) : Array<string> {
        let result = new Array<string>();

        imports.forEach((path) => {
            path = this.GameifyPath(path);

            if (existsSync(path)) {
                if (lstatSync(path).isDirectory()) {
                    if (result.findIndex((tPath) => (path == tPath)) == -1) {
                        if (!this.isPathNamespace(path)) {
                            result.push(path);
                        }
                        else {
                            vscode.window.showWarningMessage('Import path is a Namespace! It will be skipped.\n(' + path + ')');
                        }
                    }
                }
                else {
                    vscode.window.showWarningMessage('Import path is not a folder! It will be skipped.\n(' + path + ')');
                }
            }
            else {
                vscode.window.showWarningMessage('Import path does not exist! It will be skipped.\n(' + path + ')');
            }
        });

        return result;
    }

    private SortScripts(scripts: Array<string> | undefined) : Array<string> {
        if (scripts == undefined) { return new Array<string>(); }
        let result = new Array<string>();

        scripts.forEach((path) => {
            let fileExt = extname(path);
            path = this.GameifyPath(path);

            switch (fileExt) {
                case '.psc':
                    let pathFolder = dirname(path) + '\\';
                    if ((this.Imports.findIndex((tPath) => (tPath.toLowerCase() == pathFolder.toLowerCase())) == -1)) {
                        if (!this.isPathNamespace(pathFolder)) {
                            this.Imports.unshift(pathFolder);
                        }
                    }

                    result.push(path);
                    break;

                case '.ppj':
                    if (scripts.length != 1) {
                        vscode.window.showErrorMessage('Only one Papyrus Project file can be compiled at once.', { title: 'Ok' });
                        return new Array<string>();
                    }

                    this.Project = true;
                    break;

                default:
                    if (lstatSync(path).isDirectory()) {
                        if ((this.Imports.findIndex((tPath) => (tPath == path)) == -1)) {
                            this.Imports.unshift(path);
                        }

                        if (!this.isPathNamespace(path)) {
                            this.Folders.push(path);
                        }
                    }

                    break;
            }
        });

        return result;
    }

    private get isPathValid() : boolean {
        if (existsSync(this.Path)) {
            let executableName: string = '';
            switch (this.GameMode) {
                case 0:
                    executableName = 'Fallout4.exe';
                    break;

                case 1:
                    executableName = 'TESV.exe';
                    break;

                case 2:
                    executableName = 'SkyrimSE.exe';
                    break;

                default:
                    break;
            }

            if (existsSync(join(this.Path, executableName))) {
                return true;
            }
            else {
                vscode.window.showErrorMessage('The selected installation directory is missing: ' + executableName);
            }
        }
        else {
            vscode.window.showErrorMessage('The selected installation directory doesn\'t exist!');
        }

        return false;
    }

    private get isDirectoryValid() : boolean {
        if (existsSync(this.Directory)) {
            if (existsSync(join(this.Directory, 'PapyrusCompiler.exe'))) {
                return true;
            }
            else {
                vscode.window.showErrorMessage('The selected compiler directory is missing: PapyrusCompiler.exe');
            }
        }
        else {
            vscode.window.showErrorMessage('The selected compiler directory doesn\'t exist!');
        }

        return false;
    }

    private get isOutputValid() : boolean {
        if (!existsSync(this.Output)) {

            vscode.window.showInformationMessage('The selected compiler output directory was not found! Attempting to create it...');
            mkdirSync(this.Output);

            if (existsSync(this.Output)) {
                return true;
            }
            else {
                vscode.window.showErrorMessage('The selected compiler output directory could not be created!');
            }
        }

        return true;
    }

    private get isAsmValid() : boolean {
        switch (this.Asm.toLowerCase()) {
            case 'none':
            case 'keep':
            case 'only':
            case 'discard':
                return true;

            default:
                vscode.window.showErrorMessage('The selected compiler assembly option is invalid!');
                return false;
        }
    }

    private get areImportsValid() : boolean {
        if (this.Imports.length <= 0) {
            vscode.window.showErrorMessage('There are no imports specified!');
            return false;
        }

        return true;
    }

    private get areScriptsValid() : boolean {
        if ((this.Scripts.length <= 0) && (this.Folders.length <= 0)) {
            vscode.window.showErrorMessage('There are no scripts selected to be compiled!');
            return false;
        }

        return true;
    }

    private get isValid() : boolean {
        return (this.isPathValid && this.isDirectoryValid && this.isOutputValid && this.isAsmValid && this.areImportsValid && this.areScriptsValid);
    }

    public get ProjectXML(): string {
        var XMLWriter = require('xml-writer'); let xm = new XMLWriter(true); xm.startDocument();
        xm.startElement('PapyrusProject').writeAttribute('xmlns', 'PapyrusProject.xsd').writeAttribute('Output', this.Output).writeAttribute('Flags', this.Flags).writeAttribute('Asm', this.Asm);
        xm.writeAttribute('Optimize', this.Optimize.toString()).writeAttribute('Release', this.Release.toString()).writeAttribute('Final', this.Final.toString());

        xm.startElement('Imports')
        for (let i = 0; i < this.Imports.length; i++) {
            xm.startElement('Import').text(this.Imports[i]).endElement();
        } xm.endElement();

        if (this.Folders.length > 0) {
            xm.startElement('Folders')
            for (let i = 0; i < this.Folders.length; i++) {
                xm.startElement('Folder').text(this.Folders[i]).endElement();
            } xm.endElement();
        }

        if (this.Scripts.length > 0) {
            xm.startElement('Scripts')
            for (let i = 0; i < this.Scripts.length; i++) {
                xm.startElement('Script').text(this.Scripts[i]).endElement();
            } xm.endElement();
        }

        xm.endDocument();
        return xm.toString();
    }

    private get GetCompileArgs() : Array<string> {
        let result = new Array<string>();
        switch (this.GameMode) {
            case 0:
                if (this.Project) { result.push(this.Scripts[0]); }
                else {
                    let tempDir: string = join(tmpdir(), Extension.Name);
                    if (!existsSync(tempDir)) { mkdirSync(tempDir); }

                    let filePath: string = join(tempDir, '\\PapyrusCodeTemp.ppj');
                    writeFileSync(filePath, this.ProjectXML);

                    result.push(filePath);
                }

                break;

            case 1:
            case 2:
                if (this.Folders.length > 0) {
                    result.push(this.Folders[0]);
                    result.push('-all');
                }
                else {
                    result.push(this.Scripts.join(';'));
                }

                result.push('-f=' + this.Flags);
                result.push('-i=' + this.Imports.join(';'));
                result.push('-o=' + this.Output);

                switch (this.Asm) {
                    case 'None':
                        result.push('-noasm');
                        break;

                    case 'Keep':
                        result.push('-keepasm');
                        break;

                    case 'Only':
                        result.push('-asmonly');
                        break;

                    default:
                        break;
                }

                if (this.Optimize) {
                    result.push('-optimize');
                }

            default:
                break;
        }

        return result;
    }

    public Run() {
        if (this.isValid) {
            Extension.OutputChannel.clear();
            Extension.OutputChannel.show();

            if ((this.GameMode == 1) || (this.GameMode == 2)) {
                Extension.OutputChannel.appendLine('Papyrus Compiler Version 1.0.0.0 for Skyrim');
                Extension.OutputChannel.appendLine('Copyright (C) ZeniMax Media. All rights reserved.');
            }

            var pCompiler = spawn(join(this.Directory, 'PapyrusCompiler.exe'), this.GetCompileArgs);
            pCompiler.stdout.on('data', function(data) {
                Extension.OutputChannel.append(data.toString());
            });

            pCompiler.stderr.on('data', function(data) {
                Extension.OutputChannel.append(data.toString());
            });
        }
        else {
            // Compiler is not valid.
        }
    }
}