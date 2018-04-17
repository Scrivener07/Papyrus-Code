'use strict';
import * as vscode from 'vscode';
import * as FileSystem from 'fs';
import * as Path from 'path';
import { tmpdir } from 'os';
import { Extension } from './extension';
import { Feature } from './feature';
import { execSync } from 'child_process';

// ???? Horrible Practice ????
var Terminal: vscode.Terminal;

export function activate(context: vscode.ExtensionContext) {
	Extension.Subscribe(context, new Build(context));
	Extension.Log('Papyrus is activated.');

	vscode.window.onDidCloseTerminal((terminal) => {
		if (terminal.name == Extension.Configuration.TERMINAL_NAME) {
			Terminal = undefined;
		}
	});
}

export function deactivate() {
	Extension.Log('Papyrus is now deactivated.');
}

function GameifyPath(gamePath: string, filePath: string): string {
	if (filePath.toLowerCase().includes(gamePath.toLowerCase()) == false) {
		filePath = Path.join(gamePath, filePath);
	}

	return filePath;
}

export class Build extends Feature {
	constructor(context: vscode.ExtensionContext) {
		super();
		this.RegisterCommand(context, Extension.Commands.Compile);
		this.RegisterCommand(context, Extension.Commands.CompileRelease);
		this.RegisterCommand(context, Extension.Commands.CompileFinal);
		this.RegisterCommand(context, Extension.Commands.CompileFile);
		this.RegisterCommand(context, Extension.Commands.CompileFolder);
		this.RegisterCommand(context, Extension.Commands.CompileDefault);
		this.RegisterCommand(context, Extension.Commands.CreateProject);
	}

	protected OnCommand(commandName: string): void {
		let configuration = vscode.workspace.getConfiguration(Extension.Configuration.Section);
		if (configuration == undefined) {
			this.WarnConfigurationMissing(Extension.Configuration.Section);
			return;
		}

		else {
			let compiler = new Compiler();
			if (this.InitGameDir(compiler, configuration) == false) {
				return
			}

			if (commandName == Extension.Commands.Compile) {
				if (this.Configure(compiler, configuration, undefined, false, false, false)) {
					this.Compile(compiler);
				}
			}

			else if (commandName == Extension.Commands.CompileRelease) {
				if (this.Configure(compiler, configuration, undefined, true, true, false)) {
					this.Compile(compiler);
				}
			}

			else if (commandName == Extension.Commands.CompileFinal) {
				if (this.Configure(compiler, configuration, undefined, true, true, true)) {
					this.Compile(compiler);
				}
			}

			else if (commandName == Extension.Commands.CompileFile) {
				var selection: Array<string> = new Array();
				var defaultPath: vscode.Uri = vscode.Uri.file(Path.join(compiler.gamePath, "Data\\Scripts"));
				// Data\Scripts is hardcoded, so provided gamePath is correct, we have no problems.

				vscode.window.showOpenDialog({
					canSelectFiles: true,
					canSelectMany: true,
					defaultUri: defaultPath,
					filters: {
						'Papyrus Source': ['psc'],
						'Papyrus Project': ['ppj']
					}
				}).then(files => {
					if (files) {
						for (let i = 0; i < files.length; i++) {
							selection.push(files[i].fsPath);
						}

						if (this.Configure(compiler, configuration, selection, false, false, false)) {
							this.Compile(compiler);
						}
					}
				});
			}

			else if (commandName == Extension.Commands.CompileFolder) {
				var selection: Array<string> = new Array();
				var defaultPath: vscode.Uri = vscode.Uri.file(Path.join(compiler.gamePath, "Data\\Scripts"));

				vscode.window.showOpenDialog({
					canSelectFolders: true,
					canSelectMany: true,
					defaultUri: defaultPath
				}).then(files => {
					if (files) {
						for (let i = 0; i < files.length; i++) {
							selection.push(files[i].fsPath);
						}

						if (this.Configure(compiler, configuration, selection, false, false, false)) {
							this.Compile(compiler);
						}
					}
				});
			}

			else if (commandName == Extension.Commands.CompileDefault) {
				let compileTarget: Array<string> = new Array(); compileTarget.push(configuration.get(Extension.Configuration.F4_CompileTarget) as string);

				if ((compileTarget[0] == undefined) || (compileTarget[0] == '')) {
					this.WarnConfigurationMissing(Extension.Configuration.Section, Extension.Configuration.F4_CompileTarget);
					return;
				}

				else if (FileSystem.existsSync(compileTarget[0]) == false) {
					let compileTargetTemp: string = GameifyPath(compiler.gamePath, compileTarget[0]);
					if (FileSystem.existsSync(compileTargetTemp) == false) {
						this.WarnResourceMissing(compileTarget[0]);
						return;
					}

					else {
						compileTarget[0] = compileTargetTemp
					}
				}

				if (this.Configure(compiler, configuration, compileTarget, false, false, false)) {
					this.Compile(compiler);
				}
			}

			else if (commandName == Extension.Commands.CreateProject) {
				var selection: Array<string> = new Array();
				var defaultPath: vscode.Uri = vscode.Uri.file(Path.join(compiler.gamePath, "Data\\Scripts"));

				vscode.window.showOpenDialog({
					canSelectFiles: true,
					canSelectMany: true,
					defaultUri: defaultPath,
					filters: {
						'Papyrus Source': ['psc']
					}
				}).then(files => {
					if (files) {
						for (let i = 0; i < files.length; i++) {
							selection.push(files[i].fsPath);
						}

						if (this.Configure(compiler, configuration, selection, false, false, false)) {
							this.SaveProject(compiler);
						}
					}
				});
			}
		}
	}

	private Configure(compiler: Compiler, configuration: vscode.WorkspaceConfiguration, target: Array<string>, optimize: boolean, release: boolean, final: boolean): boolean {
		compiler.Asm = configuration.get(Extension.Configuration.F4_AsmOptions) as string;
		if (compiler.Asm == undefined) {
			this.WarnConfigurationMissing(Extension.Configuration.Section, Extension.Configuration.F4_AsmOptions);
			return false;
		}

		compiler.Directory = configuration.get(Extension.Configuration.F4_CompilerDirectory) as string;
		if (compiler.Directory == undefined) {
			this.WarnConfigurationMissing(Extension.Configuration.Section, Extension.Configuration.F4_CompilerDirectory);
			return false;
		}

		compiler.Directory = Path.join(GameifyPath(compiler.gamePath, compiler.Directory), 'PapyrusCompiler.exe');
		if (FileSystem.existsSync(compiler.Directory) == false) {
			this.WarnResourceMissing(compiler.Directory);
			return false;
		}

		compiler.Imports = configuration.get(Extension.Configuration.F4_ImportDirectories) as Array<string>;
		if (compiler.Imports == undefined) {
			this.WarnConfigurationMissing(Extension.Configuration.Section, Extension.Configuration.F4_ImportDirectories);
			return false;
		}
		else {
			for (let path of compiler.Imports) {
				path = GameifyPath(compiler.gamePath, path);
				if (FileSystem.existsSync(path) == false){
					this.WarnResourceMissing(path);
					return false;
				}
			}
		}

		if (target != undefined) {
			compiler.Scripts = target;
		} else {
			compiler.Scripts = new Array();
			compiler.Scripts.push(vscode.window.activeTextEditor.document.fileName);
		}

		var tempFolders: Array<string> = new Array();
		var tempScripts: Array<string> = new Array();

		for (let i = 0; i < compiler.Scripts.length; i++) {
			let fileExt = Path.extname(compiler.Scripts[i]);

			if (fileExt == ".psc") {
				if ((compiler.Imports.findIndex(check => check == Path.dirname(compiler.Scripts[i])) == -1) && (compiler.Scripts[i].substring(compiler.Scripts[i].indexOf("Data\\Scripts")).split("\\").length < 6)) {
					// DO add missing import folders, DONOT add namespaces as imports.
					compiler.Imports.unshift(Path.dirname(compiler.Scripts[i]));
				}

				tempScripts.push(compiler.Scripts[i]);

			} else if (fileExt == ".ppj") {
				if (compiler.Scripts.length != 1) {
					vscode.window.showErrorMessage("Only one Project can be compiled at once!", { title: "Ok" });
					return false;
				}

				compiler.Project = true;
				return true;

			} else if (FileSystem.lstatSync(compiler.Scripts[i]).isDirectory()) {
				if (compiler.Scripts[i].substring(compiler.Scripts[i].indexOf("Data\\Scripts")).split("\\").length >= 6) {
					vscode.window.showErrorMessage("Namespaces cannot be selected when using \"Compile Folder\".", { title: "Ok" });
					return false;
				}

				if (compiler.Imports.findIndex(check => check == compiler.Scripts[i]) == -1) {
					compiler.Imports.unshift(compiler.Scripts[i]);
				}

				tempFolders.push(compiler.Scripts[i]);
			}
		}

		compiler.Scripts = tempScripts;
		compiler.Folders = tempFolders;

		compiler.Output = configuration.get(Extension.Configuration.F4_OutputDirectory) as string;
		if (compiler.Output == undefined) {
			this.WarnConfigurationMissing(Extension.Configuration.Section, Extension.Configuration.F4_OutputDirectory);
			return false;
		}

		compiler.Output = GameifyPath(compiler.gamePath, compiler.Output);
		if (FileSystem.existsSync(compiler.Output) == false) {
			this.WarnResourceMissing(compiler.Output);
			return false;
		}

		compiler.Optimize = optimize;
		compiler.Release = release;
		compiler.Final = final;
		return true;
	}

	private InitGameDir(compiler: Compiler, configuration: vscode.WorkspaceConfiguration): boolean {
		compiler.gamePath = configuration.get(Extension.Configuration.F4_GameDirectory) as string;
		if (compiler.gamePath == undefined) {
			this.WarnConfigurationMissing(Extension.Configuration.Section, Extension.Configuration.F4_GameDirectory);
			return false;

		} else if (FileSystem.existsSync(compiler.gamePath) == false) {
			this.WarnResourceMissing(compiler.gamePath);
			return false;
		}

		if (FileSystem.existsSync(Path.join(compiler.gamePath, "Fallout4.exe")) == false) {
			vscode.window.showErrorMessage("Fallout 4 is not installed in the configured game directory");
			return false;
		}

		if (FileSystem.existsSync(Path.join(compiler.gamePath, "f4se_loader.exe")) == false) {
			vscode.window.showInformationMessage("F4SE is not installed!");
		}

		return true;
	}

	private Compile(compiler: Compiler): void {
		if (Terminal == undefined) {
			Terminal = vscode.window.createTerminal(Extension.Configuration.TERMINAL_NAME, "cmd.exe");
		}

		Terminal.sendText("cls"); Terminal.show();
		Terminal.sendText(compiler.Parameters);
	}

	private SaveProject(compiler: Compiler): void {
		vscode.window.showSaveDialog({
			defaultUri: undefined,
			filters: {
				'Papyrus Project': ['ppj']
			}
		}).then(file => {
			if (file) {
				FileSystem.writeFileSync(file.fsPath, compiler.ProjectXML);
				vscode.window.showTextDocument(file);
			}
		});
	}

	private WarnConfigurationMissing(sectionName: string, optionName?: string): void {
		let message;
		if (optionName) {
			message = 'Missing configuration: ' + sectionName + '.' + optionName;
		}

		else {
			message = 'Missing configuration section: ' + sectionName;
		}

		vscode.window.showErrorMessage(message, { title: "Ok" });
		Extension.Log(this.ToString(), message);
	}

	private WarnResourceMissing(resource: string): void {
		let message = 'File or Folder does not exist: ' + resource;
		vscode.window.showErrorMessage(message, { title: "Ok" });
		Extension.Log(this.ToString(), message);
	}

	private WarnCannotCompile(unsupportedFile: string): void {
		let message = 'File type ' + unsupportedFile + ' is unsupported. Cannot compile.';
		vscode.window.showWarningMessage(message);
		Extension.Log(this.ToString(), message);
	}

	public ToString(): string {
		return "Papyrus Build";
	}
}

class Compiler {
	public Directory: string;
	public Output: string;
	public Flags: string = Compiler.FLAGS_DEFAULT;
	public Asm: string;
	public Project: boolean = false;
	public Optimize: boolean = false;
	public Release: boolean = false;
	public Final: boolean = false;
	public Imports: Array<string>;
	public Folders: Array<string>;
	public Scripts: Array<string>;
	public gamePath: string;

	private static readonly FLAGS_DEFAULT: string = 'Institute_Papyrus_Flags.flg';

	public get ProjectXML(): string {
		var XMLWriter = require('xml-writer'); let xm = new XMLWriter(true); xm.startDocument();
		xm.startElement('PapyrusProject').writeAttribute('xmlns', 'PapyrusProject.xsd').writeAttribute('Output', this.Output).writeAttribute('Flags', this.Flags).writeAttribute('Asm', this.Asm);
		xm.writeAttribute('Optimize', this.Optimize.toString()).writeAttribute('Release', this.Release.toString()).writeAttribute('Final', this.Final.toString());

		xm.startElement('Imports')
		for (let i = 0; i < this.Imports.length; i++) {
			this.Imports[i] = GameifyPath(this.gamePath, this.Imports[i]);
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

	public get Parameters(): string {
		if (this.Project) {
			return "\"" + this.Directory + "\" \"" + this.Scripts[0] + "\"";
		}

		else {
			let tempDir: string = Path.join(tmpdir(), "Papyrus-Code");
			if (FileSystem.existsSync(tempDir) == false) { FileSystem.mkdirSync(tempDir); }

			let filePath: string = Path.join(tempDir, "\\PapyrusCodeTemp.ppj");
			FileSystem.writeFileSync(filePath, this.ProjectXML);

			return "\"" + this.Directory + "\" \"" + filePath + "\"";
		}
	}
}
