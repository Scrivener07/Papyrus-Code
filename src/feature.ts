'use strict';
import * as vscode from 'vscode';
import { Extension } from './extension';

export abstract class Feature
{
	constructor(context: vscode.ExtensionContext)
	{
		Extension.Subscribe(context, this);
	}

	protected Subscribe(context: vscode.ExtensionContext, subscription: any)
	{
		Extension.Subscribe(context, subscription);
	}

	/** Registers a VS Code command for the `OnCommand` event. */
	protected RegisterCommand(context: vscode.ExtensionContext, commandName: string)
	{
		Extension.Subscribe(context, vscode.commands.registerCommand(commandName, () => { this.OnCommand(commandName) }));
		Extension.Log(this.ToString(), 'Registered for the `' + commandName + '` command event.');
	}

	/** Handles the `OnCommand` event for VS Code command registerations. */
	protected OnCommand(commandName: string)
	{
		Extension.Log(this.ToString(), 'Has not implemented `OnCommand` for the `' + commandName + '` command.');
	}


	public abstract ToString(): string;
}
