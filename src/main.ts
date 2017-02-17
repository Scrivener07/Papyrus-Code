'use strict';
import { ExtensionContext } from 'vscode';
import { Extension, Feature } from './extension';
import { Hello } from './features/hello';
import { WordCounter } from './features/wordCounter';
import { Preview } from './features/preview';
import { Compiler } from './features/compiler';
import { Explorer } from './features/explorer';

let hello: Feature;
let wordCounter: Feature;
let preview: Feature;
let compiler: Feature;
let explorer: Feature;

export function activate(context: ExtensionContext) {
	hello = new Hello(context);
	wordCounter = new WordCounter(context);
	preview = new Preview(context);
	compiler = new Compiler(context);
	explorer = new Explorer(context);
    console.log('The extension '+Extension.Name+' is now active.');
}


export function deactivate() {
	hello.dispose();
	wordCounter.dispose();
	preview.dispose();
	compiler.dispose();
	explorer.dispose();
    console.log('The extension '+Extension.Name+' is now deactivated.');
}
