'use strict';
import * as vscode from 'vscode';
import * as Papyrus from './papyrus';

export function activate(context: vscode.ExtensionContext) {
    Papyrus.activate(context);
}

export function deactivate() {
    Papyrus.deactivate();
}

export namespace Extension {
    export const Name: string = 'papyrus-code';
    export const OutputChannel: vscode.OutputChannel = vscode.window.createOutputChannel('Papyrus-Code');

    export function Log(prefix: string, text?: string) {
        if (text) { prefix = '(' + prefix + ') ' + text; }
        console.log('[' + Name + '] ' + prefix);
    }

    export function Subscribe(context: vscode.ExtensionContext, subscription: any) {
        context.subscriptions.push(subscription);
    }

    export namespace Configuration {
        export const Section:               string = 'papyrus';
        export const CompileTarget:         string = 'compiler.target';

        export const FO4_GameDirectory:     string = 'fo4.directory';
        export const FO4_CompilerDirectory: string = 'fo4.compiler.directory';
        export const FO4_ImportDirectories: string = 'fo4.compiler.imports';
        export const FO4_OutputDirectory:   string = 'fo4.compiler.output';
        export const FO4_AsmOptions:        string = 'fo4.compiler.asm';

        export const SKY_GameDirectory:     string = 'sky.directory';
        export const SKY_CompilerDirectory: string = 'sky.compiler.directory';
        export const SKY_ImportDirectories: string = 'sky.compiler.imports';
        export const SKY_OutputDirectory:   string = 'sky.compiler.output';
        export const SKY_AsmOptions:        string = 'sky.compiler.asm';

        export const SSE_GameDirectory:     string = 'sse.directory';
        export const SSE_CompilerDirectory: string = 'sse.compiler.directory';
        export const SSE_ImportDirectories: string = 'sse.compiler.imports';
        export const SSE_OutputDirectory:   string = 'sse.compiler.output';
        export const SSE_AsmOptions:        string = 'sse.compiler.asm';
    }

    export namespace Command {
        export const Compile:           string = 'papyrus.compile';
        export const CompileRelease:    string = 'papyrus.compilerelease';
        export const CompileFinal:      string = 'papyrus.compilefinal';
        export const CompileFile:       string = 'papyrus.compilefile';
        export const CompileFolder:     string = 'papyrus.compilefolder';
        export const CompileTarget:     string = 'papyrus.compiletarget';
        export const CreateProject:     string = 'papyrus.createproject';
    }

    export namespace Language {
        export const Papyrus_FO4:       string = 'papyrus-fo4';
        export const Papyrus_SKY:       string = 'papyrus-sky';
        export const Papyrus_SSE:       string = 'papyrus-sse';
        export const PapyrusProject:    string = 'papyrus-project';
    }
}