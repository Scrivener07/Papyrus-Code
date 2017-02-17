'use strict';
import {
	commands,
	Disposable,
	ExtensionContext
} from 'vscode';


export class Extension {
	static readonly Name: string = 'papyrus-code';
}

export class Properties {
	static readonly SectionName: string = 'papyrus';
	static readonly GameInstall: string = 'game.install';
	static readonly GameUser: string = 'game.user';
	static readonly CompilerExecutable: string = 'compiler.executable';
	static readonly CompilerOutput: string = 'compiler.output';
	static readonly CompilerImports: string = 'compiler.imports';
}

export class Commands {
	static readonly Compile: string = 'papyrus.compile';
	static readonly GameInstallReveal: string = 'papyrus.game.install.reveal';
	static readonly GameUserReveal: string = "papyrus.game.user.reveal";
	static readonly SayHello: string = 'papyrus.sayHello';
	static readonly CountSelection: string = 'papyrus.countSelection';
	static readonly ShowPreviewCommand: string = 'papyrus.showPreview';
	static readonly ShowPreviewToSideCommand: string = 'papyrus.showPreviewToSide';

}

export class Papyrus {
	static readonly LanguageID: string = 'papyrus';
}

export class PapyrusAssembly {
	static readonly LanguageID: string = 'papyrus-assembly';
}

export class PapyrusProject {
	static readonly LanguageID: string = 'papyrus-project';
}


export abstract class Feature {

	/** An extension context is a collection of utilities private to an extension. http://usejsdoc.org/*/
	protected readonly Context: ExtensionContext;


	constructor(context: ExtensionContext) {
		this.Context = context;
		this.AddDisposable(this);
	}


	// Commands
	//---------------------------------------------

	/** Registers a VS Code command for the `OnCommand` event. */
	protected RegisterCommand(commandName: string) {
		let command = commands.registerCommand(commandName, () => { this.OnCommand(commandName) });
		this.AddDisposable(command);
	}

	/** Handles the `OnCommand` event for VS Code command registerations. */
	protected OnCommand(commandName: string) {
		console.log('The feature has not implemented `OnCommand` for the `'+commandName+'` command.');
	}


	// Disposable
	//---------------------------------------------

	protected AddDisposable(subscription: Disposable) {
		this.Context.subscriptions.push(subscription);
	}

	public abstract dispose(): void;

}
