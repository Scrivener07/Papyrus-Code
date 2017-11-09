'use strict';
import { Feature } from './feature';
import { Hello } from './features/hello';
import { WordCounter } from './features/wordCounter';
import { Preview } from './features/preview';
import { Compiler } from './features/compiler';
import { Explorer } from './features/explorer';
import { commands, Disposable, ExtensionContext } from 'vscode';


let hello: Feature;
let wordCounter: Feature;
let preview: Feature;
let compiler: Feature;
let explorer: Feature;


export function activate(context: ExtensionContext)
{
	hello = new Hello(context);
	wordCounter = new WordCounter(context);
	preview = new Preview(context);
	compiler = new Compiler(context);
	explorer = new Explorer(context);
	console.log('The extension ' + Extension.Name + ' is now active.');
}


export function deactivate()
{
	hello.dispose();
	wordCounter.dispose();
	preview.dispose();
	compiler.dispose();
	explorer.dispose();
	console.log('The extension ' + Extension.Name + ' is now deactivated.');
}



export class Extension
{
	static readonly Name: string = 'papyrus-code';
}


export class Properties
{
	static readonly SectionName: string = 'papyrus';
	static readonly GameInstall: string = 'game.install';
	static readonly GameUser: string = 'game.user';
	static readonly CompilerExecutable: string = 'compiler.executable';
	static readonly CompilerOutput: string = 'compiler.output';
	static readonly CompilerImports: string = 'compiler.imports';
}


export class Commands
{
	static readonly Compile: string = 'papyrus.compile';
	static readonly GameInstallReveal: string = 'papyrus.game.install.reveal';
	static readonly GameUserReveal: string = "papyrus.game.user.reveal";
	static readonly SayHello: string = 'papyrus.sayHello';
	static readonly CountSelection: string = 'papyrus.countSelection';
	static readonly ShowPreviewCommand: string = 'papyrus.showPreview';
	static readonly ShowPreviewToSideCommand: string = 'papyrus.showPreviewToSide';
}


export class Papyrus
{
	static readonly LanguageID: string = 'papyrus';
}


export class PapyrusAssembly
{
	static readonly LanguageID: string = 'papyrus-assembly';
}


export class PapyrusProject
{
	static readonly LanguageID: string = 'papyrus-project';
}
