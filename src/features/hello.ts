'use strict';
import { window, ExtensionContext } from 'vscode';
import { Feature, Commands } from '../extension';

export class Hello extends Feature {

	constructor(context: ExtensionContext) {
		super(context);
		this.RegisterCommand(Commands.SayHello);
	}


	protected OnCommand(commandName: string) {
		if (commandName == Commands.SayHello) {
			window.showInformationMessage('Papyrus, Hello World!');
		} else {
			window.showWarningMessage('The `'+commandName+'` command is unhandled.');
		}
	}


	public dispose() {
	}

}
