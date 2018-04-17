'use strict';
import * as vscode from 'vscode';
import * as Papyrus from './papyrus';

export function activate(context: vscode.ExtensionContext) {
	Papyrus.activate(context);
	Extension.Log('The extension ' + Extension.Name + ' is now active.');
}

export function deactivate() {
	Papyrus.deactivate();
	Extension.Log('The extension ' + Extension.Name + ' is now deactivated.');
}

export namespace Extension {
	export const Name: string = "papyrus-code";
	export const DisplayName: string = "Papyrus Code";

	export function Log(prefix: string, text?: string) {
		if (text) {
			prefix = "(" + prefix + ") " + text;
		}
		console.log('[' + Name + '] ' + prefix);
	}

	export function Subscribe(context: vscode.ExtensionContext, subscription: any) {
		context.subscriptions.push(subscription);
	}

	export namespace Language {
		export const Papyrus: string = 'papyrus';
		export const PapyrusProject: string = 'papyrus-project';
		export const PapyrusAssembly: string = 'papyrus-assembly';
	}

	export namespace Commands {
		export const Compile: string = 'papyrus.compile';
		export const CompileRelease: string = 'papyrus.compilerelease';
		export const CompileFinal: string = 'papyrus.compilefinal';
		export const CompileFile: string = 'papyrus.compilefile';
		export const CompileFolder: string = 'papyrus.compilefolder';
		export const CompileDefault: string = 'papyrus.compiledefault';
		export const CreateProject: string = 'papyrus.createproject';
	}

	export namespace Configuration {
		export const Section: string = 'papyrus';
		export const F4_GameDirectory: string = 'fo4.directory';
		export const F4_CompileTarget: string = 'fo4.compiler.target';
		export const F4_CompilerDirectory: string = 'fo4.compiler.directory';
		export const F4_ImportDirectories: string = 'fo4.compiler.imports';
		export const F4_OutputDirectory: string = 'fo4.compiler.output';
		export const F4_AsmOptions: string = 'fo4.compiler.asm';
	}

	export namespace VarReadOnly {
		export const F4_FLAGS_DEFAULT: string = 'Institute_Papyrus_Flags.flg';
		export const F4_COMPILER: string = 'PapyrusCompiler.exe';
		export const F4_EXTENDER: string = 'f4se_launcher.exe';
		export const F4_EXECUTABLE: string = 'Fallout4.exe';

		export const PROJECT: string = '\\PapyrusCodeTemp.ppj';
		export const TERMINAL: string = 'Papyrus-Code';
		export const SHELL: string = 'cmd.exe';
	}
}
