'use strict';
import * as vscode from 'vscode';
import * as FileSystem from 'fs';
import * as Path from 'path';
import { Extension } from './extension';
import { Feature } from './feature';

export function activate(context: vscode.ExtensionContext)
{
	Extension.Subscribe(context, new Build(context));
	Extension.Log('Papyrus is activated.');
}

export function deactivate()
{
	Extension.Log('Papyrus is now deactivated.');
}


/**
 * A VS Code feature for compiling papyrus files.
*/
export class Build extends Feature
{
	constructor(context: vscode.ExtensionContext)
	{
		super();
		this.RegisterCommand(context, Extension.Commands.Compile);
	}


	protected OnCommand(commandName: string): void
	{
		let configuration = vscode.workspace.getConfiguration(Extension.Configuration.Section);
		if (configuration == undefined)
		{
			this.WarnConfigurationMissing(Extension.Configuration.Section);
			return;
		}
		else
		{
			let compiler = new Compiler();
			if (this.Configure(compiler, configuration))
			{
				this.Run(compiler);
			}
		}
	}


	private Configure(compiler: Compiler, configuration: vscode.WorkspaceConfiguration): boolean
	{
		compiler.Executable = configuration.get(Extension.Configuration.CompilerExecutable) as string;
		if (compiler.Executable == undefined)
		{
			this.WarnConfigurationMissing(Extension.Configuration.Section, Extension.Configuration.CompilerExecutable);
			return false;
		}
		else if (FileSystem.existsSync(compiler.Executable) == false)
		{
			this.WarnResourceMissing(compiler.Executable);
			return false;
		}

		compiler.Target = configuration.get(Extension.Configuration.CompilerTarget) as string;
		if (compiler.Target == undefined)
		{
			this.WarnConfigurationMissing(Extension.Configuration.Section, Extension.Configuration.CompilerTarget);
			return false;
		}
		else if (FileSystem.existsSync(compiler.Target) == false)
		{
			this.WarnResourceMissing(compiler.Target);
			return false;
		}

		if (Path.extname(compiler.Target) == ".ppj")
		{
			return true;
		}
		else
		{
			compiler.Output = configuration.get(Extension.Configuration.CompilerOutput) as string;
			if (compiler.Output == undefined)
			{
				this.WarnConfigurationMissing(Extension.Configuration.Section, Extension.Configuration.CompilerOutput);
				return false;
			}
			else if (FileSystem.existsSync(compiler.Output) == false)
			{
				this.WarnResourceMissing(compiler.Output);
				return false;
			}

			compiler.Imports = configuration.get(Extension.Configuration.CompilerImports) as Array<string>;
			if (compiler.Imports == undefined)
			{
				this.WarnConfigurationMissing(Extension.Configuration.Section, Extension.Configuration.CompilerImports);
				return false;
			}
			else
			{
				for (let path of compiler.Imports)
				{
					if (FileSystem.existsSync(path) == false)
					{
						this.WarnResourceMissing(path);
						return false;
					}
				}
			}

			if (FileSystem.lstatSync(compiler.Target).isDirectory())
			{
				compiler.All = true;
				compiler.Imports.unshift(compiler.Target);
			}
			return true;
		}
	}


	private Run(compiler: Compiler): void
	{
		let terminal: vscode.Terminal = vscode.window.createTerminal("Papyrus");
		terminal.show();
		terminal.sendText(compiler.Parameters);
	}


	private WarnConfigurationMissing(sectionName: string, optionName?: string): void
	{
		let message;
		if (optionName)
		{
			message = 'Missing configuration. ' + sectionName + '.' + optionName;
		} else
		{
			message = 'Missing configuration section. ' + sectionName;
		}
		vscode.window.showWarningMessage(message);
		Extension.Log(this.ToString(), message);
	}


	private WarnResourceMissing(resource: string): void
	{
		let message = 'Missing resource. ' + resource;
		vscode.window.showWarningMessage(message);
		Extension.Log(this.ToString(), message);
	}


	public ToString(): string
	{
		return "Papyrus Build";
	}
}


class Compiler
{
	public Executable: string;
	public Target: string;
	public Output: string;
	public Imports: Array<string>;
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

	private get ExecutableFile(): string
	{
		return '\"' + this.Executable + '\"';
	}

	private get TargetPath(): string
	{
		return ' \"' + this.Target + '\"';
	}

	private get OutputDirectory(): string
	{
		if (this.Output == undefined)
		{
			return '';
		}
		else
		{
			return ' ' + Compiler.OUTPUT + '\"' + this.Output + '\"';
		}
	}

	private get ImportList(): string
	{
		if (this.Imports == undefined)
		{
			return '';
		}
		else
		{
			return ' ' + Compiler.IMPORT + '\"' + this.Imports.join(';') + '\"';
		}
	}

	private get FlagsFile(): string
	{
		if (this.Imports == undefined)
		{
			// If no imports, then no flags
			return '';
		}
		else if (this.Flags == undefined)
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
