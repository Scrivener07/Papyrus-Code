'use strict';
import { window, commands, ExtensionContext } from 'vscode';
import { Feature } from '../feature';

export class Preview extends Feature {
	private readonly ShowPreviewCommand: string = 'papyrus.showPreview';
	private readonly ShowPreviewToSideCommand: string = 'papyrus.showPreviewToSide';


	constructor(context: ExtensionContext) {
		super(context);
		this.RegisterCommand(this.ShowPreviewCommand);
		this.RegisterCommand(this.ShowPreviewToSideCommand);
	}


	protected OnCommand(commandName: string) {
		if (commandName == this.ShowPreviewCommand) {
			window.showInformationMessage('Papyrus, Show Preview');
		}
		else if (commandName == this.ShowPreviewToSideCommand) {
			window.showInformationMessage('Papyrus, Show Preview To Side');
		} else {
			window.showWarningMessage('The `'+commandName+'` command is unhandled.');
		}
	}


	public dispose() {
		// nothing to dispose
	}

}
