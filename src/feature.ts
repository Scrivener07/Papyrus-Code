'use strict';
import {
	Disposable,
	ExtensionContext
} from 'vscode';


export abstract class Feature {
	protected readonly Context: ExtensionContext;


	constructor(context: ExtensionContext) {
		this.Context = context;
	}


	protected Subscription(subscription: Disposable) {
		this.Context.subscriptions.push(subscription);
	}


}
