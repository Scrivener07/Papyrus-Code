'use strict';
import { window, ExtensionContext } from 'vscode';
import { Feature, Commands } from '../extension';

export class Preview extends Feature {

	constructor(context: ExtensionContext) {
		super(context);
		this.RegisterCommand(Commands.ShowPreviewCommand);
		this.RegisterCommand(Commands.ShowPreviewToSideCommand);
	}


	protected OnCommand(commandName: string) {
		if (commandName == Commands.ShowPreviewCommand) {
			window.showInformationMessage('Papyrus, Show Preview');
		}
		else if (commandName == Commands.ShowPreviewToSideCommand) {
			window.showInformationMessage('Papyrus, Show Preview To Side');
		} else {
			window.showWarningMessage('The `'+commandName+'` command is unhandled.');
		}
	}


	public dispose() {
		// nothing to dispose
	}

}
