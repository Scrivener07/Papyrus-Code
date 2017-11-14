'use strict';
import * as vscode from 'vscode';
import Disposable = vscode.Disposable;
import ExtensionContext = vscode.ExtensionContext;
import Window = vscode.window;
import Workspace = vscode.workspace;
import WorkspaceConfiguration = vscode.WorkspaceConfiguration;
import Terminal = vscode.Terminal;
import Commands = vscode.commands;
import TextDocument = vscode.TextDocument;
import StatusBarItem = vscode.StatusBarItem;
import StatusBarAlignment = vscode.StatusBarAlignment;


export function activate(context: ExtensionContext)
{
	Extension.Log('The extension ' + Extension.Name + ' is activating..');

	let compiler = new Extension.Papyrus.Build(context);
	let explorer = new Extension.Explorer(context);

	let hello = new Extension.Experimental.Hello(context);
	let wordCounter = new Extension.Experimental.WordCounter(context);
	let preview = new Extension.Experimental.Preview(context);

	Extension.Log('The extension ' + Extension.Name + ' is now active.');
}


export function deactivate()
{
	Extension.Log('The extension ' + Extension.Name + ' is now deactivated.');
}


export namespace Extension
{
	export const Name: string = "papyrus-code";
	export const DisplayName: string = "Papyrus Code";


	export function Log(prefix: string, text?: string)
	{
		if (text)
		{
			prefix = "(" + prefix + ") " + text;
		}
		console.log('[' + Extension.Name + '] ' + prefix);
	}


	export function Subscribe(context: ExtensionContext, subscription: any)
	{
		context.subscriptions.push(subscription);
	}


	export namespace Commands
	{
		export const Compile: string = 'papyrus.compile';
		export const GameInstallReveal: string = 'papyrus.game.install.reveal';
		export const GameUserReveal: string = "papyrus.game.user.reveal";
		export const SayHello: string = 'papyrus.sayHello';
		export const CountSelection: string = 'papyrus.countSelection';
		export const ShowPreviewCommand: string = 'papyrus.showPreview';
		export const ShowPreviewToSideCommand: string = 'papyrus.showPreviewToSide';
	}


	export namespace Configuration
	{
		export const Section: string = 'papyrus';
		export const GameInstall: string = 'game.install';
		export const GameUser: string = 'game.user';
		export const CompilerExecutable: string = 'compiler.executable';
		export const CompilerOutput: string = 'compiler.output';
		export const CompilerImports: string = 'compiler.imports';
	}


	export abstract class Feature
	{
		constructor(context: ExtensionContext)
		{
			Subscribe(context, this);
		}


		/** Registers a VS Code command for the `OnCommand` event. */
		protected RegisterCommand(context: ExtensionContext, commandName: string)
		{
			Subscribe(context, vscode.commands.registerCommand(commandName, () => { this.OnCommand(commandName) }));
			Log(this.ToString(), 'Registered for the `' + commandName + '` command event.');
		}


		/** Handles the `OnCommand` event for VS Code command registerations. */
		protected OnCommand(commandName: string)
		{
			Log(this.ToString(), 'Has not implemented `OnCommand` for the `' + commandName + '` command.');
		}


		public abstract ToString(): string;
	}


	export class Explorer extends Feature
	{
		private ExplorerTerminal: Terminal;
		private readonly TerminalName: string = 'Explorer Terminal';


		constructor(context: ExtensionContext)
		{
			super(context);
			this.ExplorerTerminal = undefined;
			this.RegisterCommand(context, Commands.GameInstallReveal);
			this.RegisterCommand(context, Commands.GameUserReveal);
		}


		protected OnCommand(commandName: string)
		{
			let configuration: WorkspaceConfiguration = Workspace.getConfiguration(Configuration.Section);
			if (!configuration)
			{
				Log(this.ToString(), 'The `' + commandName + '` command has no .`' + Configuration.Section + '` configuration.');
				return;
			}

			if (commandName == Commands.GameInstallReveal)
			{
				Log(this.ToString(), Commands.GameInstallReveal);
				let folder: string = configuration.get(Configuration.GameInstall) as string
				this.Reveal(folder);
			}
			else if (commandName == Commands.GameUserReveal)
			{
				Log(this.ToString(), Commands.GameUserReveal);
				let folder: string = configuration.get(Configuration.GameUser) as string
				this.Reveal(folder);
			}
			else
			{
				Log(this.ToString(), 'The `' + commandName + '` command is unhandled.');
			}
		}


		private Reveal(folder: string)
		{
			if (!this.ExplorerTerminal)
			{
				this.ExplorerTerminal = Window.createTerminal(this.TerminalName);
			}
			this.ExplorerTerminal.sendText('start' + ' \"\" \"' + folder + '\"');
		}


		public ToString(): string
		{
			return "Windows Explorer";
		}


		public dispose()
		{
			this.ExplorerTerminal.dispose();
		}
	}


	export namespace Papyrus
	{
		export const LanguageID: string = 'papyrus';

		/**A VS Code feature for compiling papyrus source files.*/
		export class Build extends Feature
		{
			// http://www.creationkit.com/fallout4/index.php?title=Papyrus_Compiler_Reference
			// http://www.creationkit.com/fallout4/index.php?title=Papyrus_Projects

			private PapyrusTerminal: Terminal;


			constructor(context: ExtensionContext)
			{
				super(context);
				this.PapyrusTerminal = undefined;
				this.RegisterCommand(context, Extension.Commands.Compile);
				Extension.Subscribe(context, vscode.window.onDidCloseTerminal(() => { this.OnTerminalClosed(); }));
			}


			protected OnCommand(commandName: string): void
			{
				if (commandName == Extension.Commands.Compile)
				{
					let editor = Window.activeTextEditor;
					if (!editor)
					{
						Extension.Log(this.ToString(), 'No active text editor for the papyrus compile command.');
						return;
					}

					let configuration = Workspace.getConfiguration(Extension.Configuration.Section);
					if (!configuration)
					{
						Extension.Log(this.ToString(), 'The `' + Extension.Commands.Compile + '` command has no .`' + Extension.Configuration.Section + '` configuration.');
						return;
					}

					let compiler = new Compiler();
					compiler.Executable = configuration.get(Extension.Configuration.CompilerExecutable) as string;
					compiler.Target = editor.document.fileName;
					compiler.Imports = configuration.get(Extension.Configuration.CompilerImports) as Array<string>;
					compiler.Output = configuration.get(Extension.Configuration.CompilerOutput) as string;
					Extension.Log(this.ToString(), 'Created compiler with parameters.\n' + compiler.Parameters + "\n");

					if (this.PapyrusTerminal == undefined)
					{
						this.PapyrusTerminal = Window.createTerminal("Papyrus");
						Extension.Log(this.ToString(), "Created the " + this.PapyrusTerminal.name + " terminal.");
					}

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


			public Execute(terminal: Terminal): boolean
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

	}


	export namespace PapyrusAssembly
	{
		export const LanguageID: string = 'papyrus-assembly';
	}


	export namespace PapyrusProject
	{
		export const LanguageID: string = 'papyrus-project';
	}


	export namespace Experimental
	{

		export class Hello extends Feature
		{
			constructor(context: ExtensionContext)
			{
				super(context);
				this.RegisterCommand(context, Commands.SayHello);
			}


			protected OnCommand(commandName: string)
			{
				if (commandName == Commands.SayHello)
				{
					Log(this.ToString(), 'Papyrus, Hello World!');
				}
				else
				{
					Log(this.ToString(), 'The `' + commandName + '` command is unhandled.');
				}
			}


			public ToString(): string
			{
				return "Hello World";
			}


			public dispose()
			{
				// nothing to dispose
			}
		}

		export class Preview extends Feature
		{
			constructor(context: ExtensionContext)
			{
				super(context);
				this.RegisterCommand(context, Commands.ShowPreviewCommand);
				this.RegisterCommand(context, Commands.ShowPreviewToSideCommand);
			}


			protected OnCommand(commandName: string)
			{
				if (commandName == Commands.ShowPreviewCommand)
				{
					Log(this.ToString(), 'Show Preview');
				}
				else if (commandName == Commands.ShowPreviewToSideCommand)
				{
					Log(this.ToString(), 'Show Preview To Side');
				} else
				{
					Log(this.ToString(), 'The `' + commandName + '` command is unhandled.');
				}
			}


			public ToString(): string
			{
				return "Preview Test";
			}


			public dispose()
			{
				// nothing to dispose
			}

		}


		export class WordCounter extends Feature
		{
			private statusBarItem: StatusBarItem;


			constructor(context: ExtensionContext)
			{
				super(context);
				this.statusBarItem = undefined;
				Extension.Subscribe(context, new WordCounterController(this));
				this.RegisterCommand(context, Extension.Commands.CountSelection);
			}


			protected OnCommand(commandName: string)
			{
				if (commandName == Extension.Commands.CountSelection)
				{
					let editor = Window.activeTextEditor;
					if (!editor)
					{
						return; // No open text editor
					}

					let selection = editor.selection;
					let text = editor.document.getText(selection);
					Extension.Log(this.ToString(), 'Selected Characters: ' + text.length);
				}
				else
				{
					Extension.Log(this.ToString(), 'The `' + commandName + '` command is unhandled.');
				}
			}


			public OnUpdateWordCount()
			{
				Extension.Log(this.ToString(), 'OnUpdateWordCount');
				// Create as needed
				if (!this.statusBarItem)
				{
					Extension.Log(this.ToString(), 'Created a new StatusBarItem');
					this.statusBarItem = Window.createStatusBarItem(StatusBarAlignment.Left);
				}

				// Get the current text editor
				let editor = Window.activeTextEditor;
				if (!editor)
				{
					Extension.Log(this.ToString(), 'Hiding because there is no active text editor.');
					this.statusBarItem.hide();
					return;
				}

				let document = editor.document;

				if (document.languageId == Extension.Papyrus.LanguageID || document.languageId == Extension.PapyrusProject.LanguageID)
				{
					let wordCount = this.GetWordCount(document);

					// Update the status bar
					this.statusBarItem.text = wordCount !== 1 ? `$(pencil) ${wordCount} Words` : '$(pencil) 1 Word';
					this.statusBarItem.show();
					Extension.Log(this.ToString(), 'Updated count from the current document.');
				}
				else
				{
					Extension.Log(this.ToString(), 'Hiding because the documents languageId is not equal to `' + Extension.Papyrus.LanguageID + '` or `' + Extension.PapyrusProject.LanguageID + '`.');
					this.statusBarItem.hide();
				}
			}


			private GetWordCount(document: TextDocument): number
			{
				Extension.Log(this.ToString(), 'GetWordCount');
				let text = document.getText();

				// Parse out unwanted whitespace so the split is accurate
				text = text.replace(/(< ([^>]+)<)/g, '').replace(/\s+/g, ' ');
				text = text.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
				let wordCount = 0;
				if (text != "")
				{
					wordCount = text.split(" ").length;
				}

				return wordCount;
			}


			public ToString(): string
			{
				return "Word Counter";
			}


			public dispose()
			{
				this.statusBarItem.dispose();
			}

		}


		class WordCounterController
		{
			private WordCounter: WordCounter;
			private disposable: Disposable;


			constructor(wordCounter: WordCounter)
			{
				this.WordCounter = wordCounter;
				this.WordCounter.OnUpdateWordCount();

				// subscribe to selection change and editor activation events
				let subscriptions: Disposable[] = [];
				Window.onDidChangeTextEditorSelection(this.OnEvent, this, subscriptions);
				Window.onDidChangeActiveTextEditor(this.OnEvent, this, subscriptions);

				// create a combined disposable from both event subscriptions
				this.disposable = Disposable.from(...subscriptions);
			}


			private OnEvent()
			{
				Extension.Log("WordCounterController", 'OnEvent');
				this.WordCounter.OnUpdateWordCount();
			}


			public dispose()
			{
				Extension.Log("WordCounterController", 'dispose');
				this.disposable.dispose();
			}

		}


	}
}
