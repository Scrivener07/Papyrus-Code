'use strict';
import { Feature } from '../feature';
import { Properties, Commands } from '../extension';
import { window, commands, workspace, ExtensionContext, Disposable, Terminal } from 'vscode';

export class Explorer extends Feature
{
	private TerminalReference: Terminal;
	private readonly TerminalName: string = 'Explorer Terminal';


	constructor(context: ExtensionContext)
	{
		super(context);
		this.TerminalReference = undefined;
		this.RegisterCommand(Commands.GameInstallReveal);
		this.RegisterCommand(Commands.GameUserReveal);
	}


	protected OnCommand(commandName: string)
	{
		let configuration = workspace.getConfiguration(Properties.SectionName);
		if (!configuration)
		{
			window.showWarningMessage('The `' + commandName + '` command has no .`' + Properties.SectionName + '` configuration.');
			return;
		}

		if (commandName == Commands.GameInstallReveal)
		{
			window.showInformationMessage(Commands.GameInstallReveal);
			let folder = configuration.get(Properties.GameInstall) as string
			this.Reveal(folder);
		}
		else if (commandName == Commands.GameUserReveal)
		{
			window.showInformationMessage(Commands.GameUserReveal);
			let folder = configuration.get(Properties.GameUser) as string
			this.Reveal(folder);
		}
		else
		{
			window.showWarningMessage('The `' + commandName + '` command is unhandled.');
		}
	}


	private Reveal(folder: string)
	{
		if (!this.TerminalReference)
		{
			this.TerminalReference = window.createTerminal(this.TerminalName);
		}
		this.TerminalReference.sendText('start' + ' \"\" \"' + folder + '\"');
	}


	public dispose()
	{
		this.TerminalReference.dispose();
	}

}
