'use strict';
import * as vscode from 'vscode';
import { window, commands, ExtensionContext, Terminal } from 'vscode';

// http://www.creationkit.com/fallout4/index.php?title=Papyrus_Compiler_Reference
// http://www.creationkit.com/fallout4/index.php?title=Papyrus_Projects

export class PapyrusCompileFeature {
	private readonly Context: ExtensionContext;
	private readonly CommandCompile: string;

	private PapyrusTerminal: Terminal;
	private readonly TerminalName: string;


	constructor(context: ExtensionContext) {
		console.log('PapyrusCompileFeature.constructor');
		this.Context = context;
		this.TerminalName = 'Papyrus Terminal';
		this.CommandCompile = "papyrus.compile";
		this.Register();
	}


	private Register() {
		console.log('PapyrusCompileFeature.Register');
		this.PapyrusTerminal = window.createTerminal(this.TerminalName);
		let CommandCompile = commands.registerCommand(this.CommandCompile, () => { this.Compile() });
		this.Context.subscriptions.push(CommandCompile);
	}


	private Compile() {
		let editor = window.activeTextEditor;
		if (!editor) {
			window.showWarningMessage('No active text editor for the papyrus compile command.');
			return;
		}

		let commandLine = this.GetArguments(editor.document.fileName);
		console.log(this.TerminalName + ': ' + commandLine);

		this.PapyrusTerminal.show();
		this.PapyrusTerminal.sendText(commandLine);
	}


	// compiler may accept a script file, directory, or project
	private GetArguments(targetFile: string): string {
		let configuration = vscode.workspace.getConfiguration('papyrus');
		if (!configuration) {
			window.showWarningMessage('No papyrus configuration.');
			return;
		}

		const compiler = '\"' + configuration.get('compiler.executableFile') + '\"';
		const target = '\"' + targetFile + '\"';
		const imports = this.GetImport(configuration.get('compiler.importsList') as Array<string>);
		const output = '-output=\"' + configuration.get('compiler.outputDirectory') + '\"';
		const flags = '-flags=Institute_Papyrus_Flags.flg';

		return compiler + ' ' + target + ' ' + imports + ' ' + output + ' ' + flags;
	}


	private GetImport(array: Array<string>): string {
		let value = '';
		for (let element of array) {
			if (value == '') {
				value += element;
			}
			else {
				value += ';' + element;
			}
		}
		return '-import=\"' + value + '\"';
	}




}
