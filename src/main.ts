'use strict';
import * as vscode from 'vscode';
import { window, workspace, commands, ExtensionContext } from 'vscode';
import { PapyrusHelloFeature } from './features/hello';
import { PapyrusWordCountFeature } from './features/wordCount';
import { PapyrusPreviewFeature } from './features/preview';
import { PapyrusCompileFeature } from './features/compile';


export function activate(context: ExtensionContext) {
	new PapyrusHelloFeature(context);
	new PapyrusWordCountFeature(context);
	new PapyrusPreviewFeature(context);
	new PapyrusCompileFeature(context);

    console.log('The extension "papyrus-code" is now active.');
}


export function deactivate() {
    console.log('The extension "papyrus-code" is now deactivated.');
}
