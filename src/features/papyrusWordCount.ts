'use strict';
import {
    window,
    commands,
    Disposable,
    StatusBarAlignment,
    StatusBarItem,
    TextDocument,
    ExtensionContext
} from 'vscode';


export class WordCountFeature {
    private readonly _Context: ExtensionContext;


    constructor(context: ExtensionContext) {
        console.log('WordCountFeature.constructor');
        this._Context = context;

        // Count words in document
        let wordCounter = new WordCounter();
        let wordCounterController = new WordCounterController(wordCounter);
        context.subscriptions.push(wordCounterController);
        context.subscriptions.push(wordCounter);

        // Count words in selection
        let papyrusCount = commands.registerCommand('extension.papyrusCount', () => {
            console.log('Command `extension.papyrusCount`');
            var editor = window.activeTextEditor;
            if (!editor) {
                return; // No open text editor
            }

            var selection = editor.selection;
            var text = editor.document.getText(selection);
            window.showInformationMessage('Papyrus, Selected Characters: ' + text.length);
        });
        context.subscriptions.push(papyrusCount);
    }
}



export class WordCounterController {
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



export class WordCounter {
    private readonly _LanguageId:string;
    private _statusBarItem:StatusBarItem;


    constructor() {
        this._LanguageId = "papyrus";
        this._statusBarItem = undefined;
    }


    public updateWordCount() {
        console.log('WordCounter.updateWordCount');
        // Create as needed
        if (!this._statusBarItem) {
            console.log('WordCounter, created a new StatusBarItem');
            this._statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
        }

        // Get the current text editor
        let editor = window.activeTextEditor;
        if (!editor) {
            console.log('WordCounter, hiding because there is no active text editor.');
            this._statusBarItem.hide();
            return;
        }

        let doc = editor.document;

        if (doc.languageId === this._LanguageId) {
            let wordCount = this._getWordCount(doc);

            // Update the status bar
            this._statusBarItem.text = wordCount !== 1 ? `$(pencil) ${wordCount} Words` : '$(pencil) 1 Word';
            this._statusBarItem.show();
            console.log('WordCounter, Updated count from the current document.');
        } else {
            console.log('WordCounter, hiding because the documents languageId is not equal to '+this._LanguageId+'.');
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
