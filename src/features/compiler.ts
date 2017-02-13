'use strict';
import { window, commands, workspace, ExtensionContext, Disposable, Terminal } from 'vscode';
import { IDisposable, using } from '../common/system';
import { Extension } from '../extension';
import { Feature } from '../feature';
const path = require('path');


// http://www.creationkit.com/fallout4/index.php?title=Papyrus_Compiler_Reference
// http://www.creationkit.com/fallout4/index.php?title=Papyrus_Projects

/**A VS Code feature for compiling papyrus source files.*/
export class Compiler extends Feature {
	private readonly CompileCommand: string = "papyrus.compile";

	private TerminalReference: Terminal;
	private readonly TerminalName: string = 'Papyrus Terminal';


	constructor(context: ExtensionContext) {
		super(context);
		this.TerminalReference = undefined;
		this.RegisterCommand(this.CompileCommand);
	}


	protected OnCommand(commandName: string) {
		if (commandName == this.CompileCommand) {

			let editor = window.activeTextEditor;
			if (!editor) {
				window.showWarningMessage('No active text editor for the papyrus compile command.');
				return;
			}

			let configuration = workspace.getConfiguration(Extension.ConfigurationName);
			if (!configuration) {
				window.showWarningMessage('The `' + commandName + '` command has no .`' + Extension.ConfigurationName + '` configuration.');
				return;
			}

			if (!this.TerminalReference) {
				this.TerminalReference = window.createTerminal(this.TerminalName);
			}

			let compiler = new PapyrusCompiler();
			compiler.Executable = configuration.get('compiler.executableFile') as string;
			compiler.Target = editor.document.fileName;
			compiler.Imports = configuration.get('compiler.importsList') as Array<string>;
			compiler.Output = configuration.get('compiler.outputDirectory') as string;

			if (compiler.Execute(this.TerminalReference)) {
				window.showInformationMessage('The `' + commandName + '` command has executed.');
			}
			else {
				window.showWarningMessage('The `' + commandName + '` command could not be executed.');
			}
		}
		else {
			window.showWarningMessage('The `' + commandName + '` command is unhandled.');
		}
	}


	public dispose() {
		this.TerminalReference.dispose();
	}

}



/**
 * CompilerArguments
 * Release adds the "-r" and "-op" flags to the command, and release final uses the release flags plus the "-final" option.
 */
class PapyrusCompiler {
	public Executable: string;
	public Target: string;

	public Imports: Array<string>;
	public Output: string;
	public Flags: string = PapyrusCompiler.FLAGS_DEFAULT;
	public Optimize: boolean = false;
	public Release: boolean = false;
	public Final: boolean = false;
	public All: boolean = false;
	public Quiet: boolean = false;

	public get Parameters(): string {
		return this.ExecutableFile
		+ this.TargetPath
		+ this.ImportList
		+ this.OutputDirectory
		+ this.FlagsFile
		+ this.OptimizeMode
		+ this.ReleaseMode
		+ this.FinalMode
		+ this.AllMode
		+ this.QuietMode;
	}

	private static readonly IMPORT: string = '-import=';
	private static readonly OUTPUT: string = '-output=';
	private static readonly FLAGS: string = '-flags=';
	private static readonly FLAGS_DEFAULT: string = 'Institute_Papyrus_Flags.flg';
	private static readonly OPTIMIZE: string = '-optimize';
	private static readonly RELEASE: string = '-release';
	private static readonly FINAL: string = '-final';
	private static readonly ALL: string = '-all';
	private static readonly QUIET: string = '-quiet';



	public Execute(terminal: Terminal): boolean {
		if (!terminal) {
			return false;
		}
		else {
			console.log(terminal.name + ': ' + this.Parameters);
			terminal.show();
			terminal.sendText(this.Parameters);
			return true;
		}
	}


	private ArrayToString(array: Array<string>): string {
		let value = '';
		for (let element of array) {
			if (value == '') {
				value += element;
			}
			else {
				value += ';' + element;
			}
		}
		return value;
	}



	private get ExecutableFile(): string {
		return '\"' + this.Executable + '\"';
	}

	private get TargetPath(): string {
		return ' \"' + this.Target + '\"';
	}

	private get ImportList(): string {
		let values = this.ArrayToString(this.Imports);
		return ' ' + PapyrusCompiler.IMPORT + '\"' + values + '\"';
	}

	private get OutputDirectory(): string {
		return ' ' + PapyrusCompiler.OUTPUT + '\"' + this.Output + '\"';
	}

	private get FlagsFile(): string {
		if (this.Flags == undefined || this.Flags == '') {
			return ' ' + PapyrusCompiler.FLAGS + '\"' + PapyrusCompiler.FLAGS_DEFAULT + '\"';
		}
		else {
			return ' ' + PapyrusCompiler.FLAGS + '\"' + this.Flags + '\"';
		}
	}

	private get OptimizeMode(): string {
		if (this.Optimize) {
			return ' ' + PapyrusCompiler.OPTIMIZE;
		}
		else {
			return '';
		}
	}

	private get ReleaseMode(): string {
		if (this.Release) {
			return ' ' + PapyrusCompiler.RELEASE;
		}
		else {
			return '';
		}
	}

	private get FinalMode(): string {
		if (this.Final) {
			return ' ' + PapyrusCompiler.FINAL;
		}
		else {
			return '';
		}
	}

	private get AllMode(): string {
		if (this.All) {
			return ' ' + PapyrusCompiler.ALL;
		}
		else {
			return '';
		}
	}

	private get QuietMode(): string {
		if (this.Quiet) {
			return ' ' + PapyrusCompiler.QUIET;
		}
		else {
			return '';
		}
	}

}
