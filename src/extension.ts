'use strict';
import * as vscode from 'vscode';
import * as Papyrus from './papyrus';

export function activate(context: vscode.ExtensionContext)
{
	Papyrus.activate(context);
	Extension.Log('The extension ' + Extension.Name + ' is now active.');
}

export function deactivate()
{
	Papyrus.deactivate();
	Extension.Log('The extension ' + Extension.Name + ' is now deactivated.');
}

export namespace Extension
{
	export const Name: string = "papyrus-code";
	export const DisplayName: string = "Papyrus Code";

	export function Log(prefix: string, text?: string)
	{
		if (text)
		{
			prefix = "(" + prefix + ") " + text;
		}
		console.log('[' + Name + '] ' + prefix);
	}

	export function Subscribe(context: vscode.ExtensionContext, subscription: any)
	{
		context.subscriptions.push(subscription);
	}

	export namespace Commands
	{
		export const Compile: string = 'papyrus.compile';
	}

	export namespace Configuration
	{
		export const Section: string = 'papyrus';
		export const GameInstall: string = 'game.install';
		export const GameUser: string = 'game.user';
		export const CompilerExecutable: string = 'compiler.executable';
		export const CompilerOutput: string = 'compiler.output';
		export const CompilerImports: string = 'compiler.imports';
	}
}