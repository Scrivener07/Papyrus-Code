'use strict';
import * as vscode from 'vscode';
import {
    window,
    workspace,
    commands,
    Disposable,
    ExtensionContext,
    StatusBarAlignment,
    StatusBarItem,
    TextDocument
} from 'vscode';


export function activate(context: ExtensionContext) {
    console.log('The extension "papyrus-code" is now active.');

    let wordCounter = new WordCounter();
    let controller = new WordCounterController(wordCounter);
    context.subscriptions.push(controller);
    context.subscriptions.push(wordCounter);


    let papyrusHello = commands.registerCommand('extension.papyrusHello', () => {
        console.log('Command papyrusHello');
        window.showInformationMessage('Hello World!');
    });
    context.subscriptions.push(papyrusHello);


    let papyrusCount = commands.registerCommand('extension.papyrusCount', () => {
        console.log('Command papyrusCount');
        var editor = window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        var selection = editor.selection;
        var text = editor.document.getText(selection);
        window.showInformationMessage('Selected characters: ' + text.length);
    });
    context.subscriptions.push(papyrusCount);
}


export function deactivate() {
    console.log('The extension "papyrus-code" is now deactivated.');
}



export class WordCounter {
    private _statusBarItem: StatusBarItem;


    public updateWordCount() {
        console.log('WordCounter.updateWordCount');
        // Create as needed
        if (!this._statusBarItem) {
            this._statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
        }

        // Get the current text editor
        let editor = window.activeTextEditor;
        if (!editor) {
            this._statusBarItem.hide();
            return;
        }

        let doc = editor.document;

        if (doc.languageId === "papyrus") {
            let wordCount = this._getWordCount(doc);

            // Update the status bar
            this._statusBarItem.text = wordCount !== 1 ? `$(pencil) ${wordCount} Words` : '$(pencil) 1 Word';
            this._statusBarItem.show();
        } else {
            this._statusBarItem.hide();
        }
    }


    public _getWordCount(doc: TextDocument): number {
        console.log('WordCounter._getWordCount');
        let docContent = doc.getText();

        // Parse out unwanted whitespace so the split is accurate
        docContent = docContent.replace(/(< ([^>]+)<)/g, '').replace(/\s+/g, ' ');
        docContent = docContent.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        let wordCount = 0;
        if (docContent != "") {
            wordCount = docContent.split(" ").length;
        }

        return wordCount;
    }


    public dispose() {
        console.log('WordCounter.dispose');
        this._statusBarItem.dispose();
    }

}



class WordCounterController {
    private _wordCounter: WordCounter;
    private _disposable: Disposable;


    constructor(wordCounter: WordCounter) {
        console.log('WordCounterController.constructor');
        this._wordCounter = wordCounter;
        this._wordCounter.updateWordCount();

        // subscribe to selection change and editor activation events
        let subscriptions: Disposable[] = [];
        window.onDidChangeTextEditorSelection(this._onEvent, this, subscriptions);
        window.onDidChangeActiveTextEditor(this._onEvent, this, subscriptions);

        // create a combined disposable from both event subscriptions
        this._disposable = Disposable.from(...subscriptions);
    }


    private _onEvent() {
        console.log('WordCounterController._onEvent');
        this._wordCounter.updateWordCount();
    }


    public dispose() {
        console.log('WordCounterController.dispose');
        this._disposable.dispose();
    }

}
