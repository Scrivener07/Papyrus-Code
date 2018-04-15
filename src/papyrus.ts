'use strict';
import * as vscode from 'vscode';
import { Extension } from './extension';
import { Feature } from './feature';

export function activate(context: vscode.ExtensionContext)
{
	let build = new Build(context);
	Extension.Log('Papyrus is activated.');
}

export function deactivate()
{
	Extension.Log('Papyrus is now deactivated.');
}

export namespace Source
{
	export const LanguageID: string = 'papyrus';
}

export namespace Project
{
	export const LanguageID: string = 'papyrus-project';
}

export namespace Assembly
{
	export const LanguageID: string = 'papyrus-assembly';
}

/**A VS Code feature for compiling papyrus source files.*/
export class Build extends Feature
{
	// http://www.creationkit.com/fallout4/index.php?title=Papyrus_Compiler_Reference
	// http://www.creationkit.com/fallout4/index.php?title=Papyrus_Projects

	private PapyrusTerminal: vscode.Terminal;


	constructor(context: vscode.ExtensionContext)
	{
		super(context);
		this.RegisterCommand(context, Extension.Commands.Compile);
		this.Subscribe(context, vscode.window.onDidCloseTerminal(() => { this.OnTerminalClosed(); }));
	}

	protected OnCommand(commandName: string): void
	{
		if (commandName == Extension.Commands.Compile)
		{
			let editor = vscode.window.activeTextEditor;
			if (!editor)
			{
				Extension.Log(this.ToString(), 'No active text editor for the papyrus compile command.');
				return;
			}

			let configuration = vscode.workspace.getConfiguration(Extension.Configuration.Section);
			if (!configuration)
			{
				this.WarnConfigurationMissing(Extension.Configuration.Section);
				return;
			}

			let bCompilerExecutable = configuration.get(Extension.Configuration.CompilerExecutable) as string;
			if (!bCompilerExecutable)
			{
				this.WarnConfigurationMissing(Extension.Configuration.Section, Extension.Configuration.CompilerExecutable);
				return;
			}

			let bCompilerOutput = configuration.get(Extension.Configuration.CompilerOutput) as string;
			if (!bCompilerOutput)
			{
				this.WarnConfigurationMissing(Extension.Configuration.Section, Extension.Configuration.CompilerOutput);
				return;
			}

			let bCompilerImports = configuration.get(Extension.Configuration.CompilerImports) as string;
			if (!bCompilerImports)
			{
				this.WarnConfigurationMissing(Extension.Configuration.Section, Extension.Configuration.CompilerImports);
				return;
			}

			let compiler = new Compiler();
			compiler.Executable = configuration.get(Extension.Configuration.CompilerExecutable) as string;
			compiler.Target = editor.document.fileName;
			compiler.Imports = configuration.get(Extension.Configuration.CompilerImports) as Array<string>;
			compiler.Output = configuration.get(Extension.Configuration.CompilerOutput) as string;
			Extension.Log(this.ToString(), 'Created compiler with parameters.\n' + compiler.Parameters + "\n");

			this.PapyrusTerminal = vscode.window.createTerminal("Papyrus");
			Extension.Log(this.ToString(), "Created the " + this.PapyrusTerminal.name + " terminal.");

			if (compiler.Execute(this.PapyrusTerminal))
			{
				Extension.Log(this.ToString(), 'The `' + Extension.Commands.Compile + '` command has executed.');
			}
			else
			{
				Extension.Log(this.ToString(), 'The `' + Extension.Commands.Compile + '` command could not be executed.');
			}
		}
		else
		{
			Extension.Log(this.ToString(), 'The `' + commandName + '` command is unhandled.');
		}
	}


	protected OnTerminalClosed(): void
	{
		Extension.Log(this.ToString(), "OnTerminalClosed");
	}


	private WarnConfigurationMissing(sectionName: string, optionName?: string)
	{
		let message;
		if (optionName) {
			message = 'Missing configuration. ' + sectionName + '.' + optionName;
		} else {
			message = 'Missing configuration section. ' + sectionName;
		}
		vscode.window.showWarningMessage(message);
		Extension.Log(this.ToString(), message);
	}


	public ToString(): string
	{
		return "Papyrus Build";
	}


	public dispose()
	{
		Extension.Log(this.ToString(), "Disposing this object.");
		this.PapyrusTerminal.dispose();
	}

}

/**
 * CompilerArguments
 * Release adds the "-r" and "-op" flags to the command, and release final uses the release flags plus the "-final" option.
 */
class Compiler
{
	public Executable: string;
	public Target: string;

	public Imports: Array<string>;
	public Output: string;
	public Flags: string = Compiler.FLAGS_DEFAULT;
	public Optimize: boolean = false;
	public Release: boolean = false;
	public Final: boolean = false;
	public All: boolean = false;
	public Quiet: boolean = false;

	private static readonly IMPORT: string = '-import=';
	private static readonly OUTPUT: string = '-output=';
	private static readonly FLAGS: string = '-flags=';
	private static readonly FLAGS_DEFAULT: string = 'Institute_Papyrus_Flags.flg';
	private static readonly OPTIMIZE: string = '-optimize';
	private static readonly RELEASE: string = '-release';
	private static readonly FINAL: string = '-final';
	private static readonly ALL: string = '-all';
	private static readonly QUIET: string = '-quiet';


	public Execute(terminal: vscode.Terminal): boolean
	{
		if (!terminal)
		{
			return false;
		}
		else
		{
			Extension.Log("Compiler Settings", terminal.name + ': ' + this.Parameters);
			terminal.show();
			terminal.sendText(this.Parameters);
			return true;
		}
	}


	public get Parameters(): string
	{
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


	private ArrayToString(array: Array<string>): string
	{
		let value = '';
		for (let element of array)
		{
			if (value == '')
			{
				value += element;
			}
			else
			{
				value += ';' + element;
			}
		}
		return value;
	}


	private get ExecutableFile(): string
	{
		return '\"' + this.Executable + '\"';
	}

	private get TargetPath(): string
	{
		return ' \"' + this.Target + '\"';
	}

	private get ImportList(): string
	{
		let values = this.ArrayToString(this.Imports);
		return ' ' + Compiler.IMPORT + '\"' + values + '\"';
	}

	private get OutputDirectory(): string
	{
		return ' ' + Compiler.OUTPUT + '\"' + this.Output + '\"';
	}

	private get FlagsFile(): string
	{
		if (!this.Flags || this.Flags == '')
		{
			return ' ' + Compiler.FLAGS + '\"' + Compiler.FLAGS_DEFAULT + '\"';
		}
		else
		{
			return ' ' + Compiler.FLAGS + '\"' + this.Flags + '\"';
		}
	}

	private get OptimizeMode(): string
	{
		if (this.Optimize)
		{
			return ' ' + Compiler.OPTIMIZE;
		}
		else
		{
			return '';
		}
	}

	private get ReleaseMode(): string
	{
		if (this.Release)
		{
			return ' ' + Compiler.RELEASE;
		}
		else
		{
			return '';
		}
	}

	private get FinalMode(): string
	{
		if (this.Final)
		{
			return ' ' + Compiler.FINAL;
		}
		else
		{
			return '';
		}
	}

	private get AllMode(): string
	{
		if (this.All)
		{
			return ' ' + Compiler.ALL;
		}
		else
		{
			return '';
		}
	}

	private get QuietMode(): string
	{
		if (this.Quiet)
		{
			return ' ' + Compiler.QUIET;
		}
		else
		{
			return '';
		}
	}
}
