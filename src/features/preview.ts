'use strict';
import { window, commands, ExtensionContext } from 'vscode';
import { Feature } from '../feature';

export class PreviewFeature extends Feature {
	private readonly ShowPreviewCommand: string = 'papyrus.showPreview';
	private readonly ShowPreviewToSideCommand: string = 'papyrus.showPreviewToSide';


	constructor(context: ExtensionContext) {
		super(context);

		let papyrusPreview = commands.registerCommand(this.ShowPreviewCommand, this.ShowPreview);
		this.Context.subscriptions.push(papyrusPreview);

		let papyrusPreviewToSide = commands.registerCommand(this.ShowPreviewToSideCommand, this.ShowPreviewToSide);
		this.Context.subscriptions.push(papyrusPreviewToSide);
	}



	private ShowPreview() {
		console.log('PreviewFeature.ShowPreview');
		window.showInformationMessage('Papyrus, Show Preview');
	}


	private ShowPreviewToSide() {
		console.log('PreviewFeature.ShowPreviewToSide');
		window.showInformationMessage('Papyrus, Show Preview To Side');
	}


	public dispose() {
	}


}
