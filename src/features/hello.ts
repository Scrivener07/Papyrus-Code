'use strict';
import { window, commands, ExtensionContext } from 'vscode';
import { Feature } from '../feature';

export class Hello extends Feature {
	private readonly SayHelloCommand: string = 'papyrus.sayHello';


	constructor(context: ExtensionContext) {
		super(context);
		this.RegisterCommand(this.SayHelloCommand);
	}


	protected OnCommand(commandName: string) {
		if (commandName == this.SayHelloCommand) {
			window.showInformationMessage('Papyrus, Hello World!');
		} else {
			window.showWarningMessage('The `'+commandName+'` command is unhandled.');
		}
	}


	public dispose() {
	}

}
