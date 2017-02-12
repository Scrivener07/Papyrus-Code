'use strict';
import { ExtensionContext } from 'vscode';
import { Extension } from './extension';
import { HelloFeature } from './features/hello';
import { WordCounterFeature } from './features/wordCounter';
import { PreviewFeature } from './features/preview';
import { CompileFeature } from './features/compile';


export function activate(context: ExtensionContext) {
	new HelloFeature(context);
	new WordCounterFeature(context);
	new PreviewFeature(context);
	new CompileFeature(context);

    console.log('The extension '+Extension.Name+' is now active.');
}


export function deactivate() {
    console.log('The extension '+Extension.Name+' is now deactivated.');
}
