'use strict';
import { ExtensionContext } from 'vscode';
import { Extension } from './extension';
import { Hello } from './features/hello';
import { WordCounter } from './features/wordCounter';
import { Preview } from './features/preview';
import { Compiler } from './features/compiler';


export function activate(context: ExtensionContext) {
	new Hello(context);
	new WordCounter(context);
	new Preview(context);
	new Compiler(context);

    console.log('The extension '+Extension.Name+' is now active.');
}


export function deactivate() {
    console.log('The extension '+Extension.Name+' is now deactivated.');
}
