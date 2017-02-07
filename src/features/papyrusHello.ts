'use strict';
import { window, commands, ExtensionContext } from 'vscode';

export class PapyrusHelloFeature {
	private readonly Context: ExtensionContext;
	private readonly CommandSayHello: string;


	constructor(context: ExtensionContext) {
		console.log('PapyrusHelloFeature.constructor');
		this.Context = context;
		this.CommandSayHello = "papyrus.sayHello";
		this.Register();
	}


	private Register() {
		console.log('PapyrusHelloFeature.Register');
		let commandSayHello = commands.registerCommand(this.CommandSayHello, this.SayHello);
		this.Context.subscriptions.push(commandSayHello);
	}


	private SayHello() {
		console.log('PapyrusHelloFeature.SayHello');
		window.showInformationMessage('Papyrus, Hello World!');
	}

}
