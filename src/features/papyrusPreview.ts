'use strict';
import { window, commands, ExtensionContext } from 'vscode';

export class PapyrusPreviewFeature {
	private readonly _Context: ExtensionContext;


	constructor(context: ExtensionContext) {
		console.log('PapyrusPreviewFeature.constructor');
		this._Context = context;

		// Papyrus Preview
		let papyrusPreview = commands.registerCommand('papyrus.showPreview', () => {
			console.log('Command `papyrus.showPreview`');
			window.showInformationMessage('Papyrus, Show Preview');
		});
		context.subscriptions.push(papyrusPreview);


		let papyrusPreviewToSide = commands.registerCommand('papyrus.showPreviewToSide', () => {
			console.log('Command `papyrus.showPreviewToSide`');
			window.showInformationMessage('Papyrus, Show Preview To Side');
		});
		context.subscriptions.push(papyrusPreviewToSide);
	}

}
