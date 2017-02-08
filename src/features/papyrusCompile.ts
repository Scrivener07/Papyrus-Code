'use strict';
import * as vscode from 'vscode';
import { window, commands, ExtensionContext, Terminal } from 'vscode';

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

		// The context of `this` is lost in the callback.
		// Use arrow functions in typescript to preserve the context!
		let CommandCompile = commands.registerCommand(this.CommandCompile, ()=>{this.Compile()});
		this.Context.subscriptions.push(CommandCompile);
	}


	private Compile() {
		let editor = window.activeTextEditor;
		if (!editor) {
			window.showWarningMessage('No active text editor for the papyrus compile command.');
			return; // No open text editor
		}

		const compilerPath = '\"D:\\Games\\Steam\\SteamApps\\common\\Fallout 4\\Papyrus Compiler\\PapyrusCompiler.exe\"';
		const targetpath = '\"' + editor.document.fileName + '\"';
		const flags = '-flags=Institute_Papyrus_Flags.flg';
		const output = '-output=\"D:\\Games\\Steam\\SteamApps\\common\\Fallout 4\\Output\"';
		const imports = '-import=\"D:\\Games\\Steam\\SteamApps\\common\\Fallout 4\\Data\\Scripts\\Source\\Base\"';

		let cmd = compilerPath + ' ' + targetpath + ' ' + flags + ' ' + output + ' ' + imports;
		console.log(this.TerminalName + ': ' + cmd);

		this.PapyrusTerminal.show();
		this.PapyrusTerminal.sendText(cmd)
	}

}
