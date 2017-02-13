'use strict';
import {
	commands,
	Disposable,
	ExtensionContext
} from 'vscode';


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
