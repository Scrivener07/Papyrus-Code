'use strict';
import { window, commands, workspace, ExtensionContext, Terminal } from 'vscode';
import { Extension } from '../extension';
import { Feature } from '../feature';

// http://www.creationkit.com/fallout4/index.php?title=Papyrus_Compiler_Reference
// http://www.creationkit.com/fallout4/index.php?title=Papyrus_Projects

export class CompileFeature extends Feature {
	private readonly CompileCommand: string = "papyrus.compile";

	private PapyrusTerminal: Terminal;
	private readonly TerminalName: string = 'Papyrus Terminal';


	constructor(context: ExtensionContext) {
		super(context);

		this.PapyrusTerminal = window.createTerminal(this.TerminalName);
		this.Subscription(this.PapyrusTerminal);

		let CommandCompile = commands.registerCommand(this.CompileCommand, () => { this.Compile() });
		this.Subscription(CommandCompile);
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


	private GetArguments(targetFile: string): string {
		let configuration = workspace.getConfiguration(Extension.ConfigurationName);
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
