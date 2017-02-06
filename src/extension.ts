'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {window, commands, Disposable, ExtensionContext, StatusBarAlignment, StatusBarItem, TextDocument} from 'vscode';



// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
    console.log('The extension "papyrus-code" is now active.');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let papyrusHello = commands.registerCommand('extension.papyrusHello', () => {
         console.log('Command papyrusHello');
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
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

        // Display a message box to the user
        window.showInformationMessage('Selected characters: ' + text.length);
    });
    context.subscriptions.push(papyrusCount);


    // create a new word counter
    let wordCounter = new WordCounter();
    var statusCounter = commands.registerCommand('extension.statusCounter', () => {
        console.log('Command statusCounter');
        wordCounter.updateWordCount();
    });
    // Add to a list of disposables which are disposed when this extension is deactivated.
    context.subscriptions.push(wordCounter);
    context.subscriptions.push(statusCounter);

}

// this method is called when your extension is deactivated
export function deactivate() {
    console.log('The extension "papyrus-code" is now deactivated.');
}



class WordCounter {
    private _statusBarItem: StatusBarItem;


    public updateWordCount() {

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

        // Only update status if an Papyrus file
        if (doc.languageId === "papyrus") {
            let wordCount = this._getWordCount(doc);

            // Update the status bar
            this._statusBarItem.text = wordCount !== 1 ? `${wordCount} Words` : '1 Word';
            this._statusBarItem.show();
        } else {
            this._statusBarItem.hide();
        }
    }


    public _getWordCount(doc: TextDocument): number {

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


    dispose() {
        this._statusBarItem.dispose();
    }
}
