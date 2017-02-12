'use strict';
import {
	Disposable,
	ExtensionContext
} from 'vscode';


export abstract class Feature {
	protected readonly Context: ExtensionContext;


	constructor(context: ExtensionContext) {
		this.Context = context;
		this.Subscription(this);
	}


	protected Subscription(subscription: Disposable) {
		this.Context.subscriptions.push(subscription);
	}


	public abstract dispose(): void;

}
