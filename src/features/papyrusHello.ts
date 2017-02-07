'use strict';
import { window, commands, ExtensionContext } from 'vscode';

export class PapyrusHelloFeature {
	private readonly _Context: ExtensionContext;


	constructor(context: ExtensionContext) {
		console.log('PapyrusHelloFeature.constructor');
		this._Context = context;

		// Hello World!
		let papyrusHello = commands.registerCommand('extension.papyrusHello', () => {
			console.log('Command `extension.papyrusHello`');
			window.showInformationMessage('Papyrus, Hello World!');
		});
		context.subscriptions.push(papyrusHello);
	}

}
