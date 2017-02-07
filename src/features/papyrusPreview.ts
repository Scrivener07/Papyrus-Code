'use strict';
import { window, commands, ExtensionContext } from 'vscode';

export class PapyrusPreviewFeature {
	private readonly Context: ExtensionContext;
	private readonly CommandShowPreview: string;
	private readonly CommandShowPreviewToSide: string;


	constructor(context: ExtensionContext) {
		console.log('PapyrusPreviewFeature.constructor');
		this.Context = context;
		this.CommandShowPreview = "papyrus.showPreview";
		this.CommandShowPreviewToSide = "papyrus.showPreviewToSide";
		this.Register();
	}


	private Register() {
		let papyrusPreview = commands.registerCommand(this.CommandShowPreview, this.ShowPreview);
		this.Context.subscriptions.push(papyrusPreview);

		let papyrusPreviewToSide = commands.registerCommand(this.CommandShowPreviewToSide, this.ShowPreviewToSide);
		this.Context.subscriptions.push(papyrusPreviewToSide);
	}


	private ShowPreview() {
		console.log('PapyrusPreviewFeature.ShowPreview');
		window.showInformationMessage('Papyrus, Show Preview');
	}


	private ShowPreviewToSide() {
		console.log('PapyrusPreviewFeature.ShowPreviewToSide');
		window.showInformationMessage('Papyrus, Show Preview To Side');
	}

}
