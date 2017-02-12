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

export class PapyrusWordCountFeature {
    private readonly Context: ExtensionContext;
    private readonly CommandCountSelection: string;


    constructor(context: ExtensionContext) {
        console.log('PapyrusWordCountFeature.constructor');
        this.Context = context;
        this.CommandCountSelection = "papyrus.countSelection";
        this.Register();
    }


    private Register() {
        console.log('PapyrusWordCountFeature.Register');

        let wordCounter = new PapyrusWordCounter();
        let wordCounterController = new PapyrusWordCounterController(wordCounter);
        this.Context.subscriptions.push(wordCounterController);
        this.Context.subscriptions.push(wordCounter);

        let commandCountSelection = commands.registerCommand(this.CommandCountSelection, this.CountSelection);
        this.Context.subscriptions.push(commandCountSelection);
    }


    private CountSelection() {
        console.log('PapyrusWordCountFeature.CountSelection');
        let editor = window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let selection = editor.selection;
        let text = editor.document.getText(selection);
        window.showInformationMessage('Papyrus, Selected Characters: ' + text.length);
    }

}



export class PapyrusWordCounterController {
    private _wordCounter: PapyrusWordCounter;
    private _disposable: Disposable;


    constructor(wordCounter: PapyrusWordCounter) {
        console.log('PapyrusWordCounterController.constructor');
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
        console.log('PapyrusWordCounterController._onEvent');
        this._wordCounter.updateWordCount();
    }


    public dispose() {
        console.log('PapyrusWordCounterController.dispose');
        this._disposable.dispose();
    }
}



export class PapyrusWordCounter {
    private readonly _LanguageId:string;
    private _statusBarItem:StatusBarItem;


    constructor() {
        this._LanguageId = "papyrus";
        this._statusBarItem = undefined;
    }


    public updateWordCount() {
        console.log('PapyrusWordCounter.updateWordCount');
        // Create as needed
        if (!this._statusBarItem) {
            console.log('PapyrusWordCounter, created a new StatusBarItem');
            this._statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
        }

        // Get the current text editor
        let editor = window.activeTextEditor;
        if (!editor) {
            console.log('PapyrusWordCounter, hiding because there is no active text editor.');
            this._statusBarItem.hide();
            return;
        }

        let doc = editor.document;

        if (doc.languageId === this._LanguageId) {
            let wordCount = this._getWordCount(doc);

            // Update the status bar
            this._statusBarItem.text = wordCount !== 1 ? `$(pencil) ${wordCount} Words` : '$(pencil) 1 Word';
            this._statusBarItem.show();
            console.log('PapyrusWordCounter, Updated count from the current document.');
        } else {
            console.log('PapyrusWordCounter, hiding because the documents languageId is not equal to '+this._LanguageId+'.');
            this._statusBarItem.hide();
        }
    }


    public _getWordCount(doc: TextDocument): number {
        console.log('PapyrusWordCounter._getWordCount');
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
        console.log('PapyrusWordCounter.dispose');
        this._statusBarItem.dispose();
    }
}
