'use strict';
import { window, commands, ExtensionContext } from 'vscode';
import { Feature } from '../feature';

export class HelloFeature extends Feature {
	private readonly SayHelloCommand: string = 'papyrus.sayHello';


	constructor(context: ExtensionContext) {
		super(context);

		let commandSayHello = commands.registerCommand(this.SayHelloCommand, this.SayHello);
		this.Subscription(commandSayHello);
	}


	private SayHello() {
		console.log('HelloFeature.SayHello');
		window.showInformationMessage('Papyrus, Hello World!');
	}


	public dispose() {
	}


}
