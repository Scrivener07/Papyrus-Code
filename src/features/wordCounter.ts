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
import { Papyrus, PapyrusProject } from '../extension';
import { Feature } from '../feature';


export class WordCounterFeature extends Feature {
    private readonly CountSelectionCommand: string = 'papyrus.countSelection';


    constructor(context: ExtensionContext) {
        super(context);

        let wordCounter = new WordCounter();
        this.Subscription(wordCounter);

        let wordCounterController = new WordCounterController(wordCounter);
        this.Subscription(wordCounterController);

        let commandCountSelection = commands.registerCommand(this.CountSelectionCommand, this.CountSelection);
        this.Subscription(commandCountSelection);
    }


    private CountSelection() {
        console.log('WordCounterFeature.CountSelection');

        let editor = window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let selection = editor.selection;
        let text = editor.document.getText(selection);
        window.showInformationMessage('Papyrus, Selected Characters: ' + text.length);
    }


}



export class WordCounterController {
    private wordCounter: WordCounter;
    private disposable: Disposable;


    constructor(wordCounter: WordCounter) {
        this.wordCounter = wordCounter;
        this.wordCounter.OnUpdateWordCount();

        // subscribe to selection change and editor activation events
        let subscriptions: Disposable[] = [];
        window.onDidChangeTextEditorSelection(this.OnEvent, this, subscriptions);
        window.onDidChangeActiveTextEditor(this.OnEvent, this, subscriptions);

        // create a combined disposable from both event subscriptions
        this.disposable = Disposable.from(...subscriptions);
    }


    private OnEvent() {
        console.log('WordCounterController.onEvent');
        this.wordCounter.OnUpdateWordCount();
    }


    public dispose() {
        console.log('WordCounterController.dispose');
        this.disposable.dispose();
    }
}



class WordCounter {
    private statusBarItem: StatusBarItem;


    constructor() {
        this.statusBarItem = undefined;
    }


    public OnUpdateWordCount() {
        console.log('WordCounter.OnUpdateWordCount');
        // Create as needed
        if (!this.statusBarItem) {
            console.log('WordCounter, created a new StatusBarItem');
            this.statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
        }

        // Get the current text editor
        let editor = window.activeTextEditor;
        if (!editor) {
            console.log('WordCounter, hiding because there is no active text editor.');
            this.statusBarItem.hide();
            return;
        }

        let document = editor.document;

        if (document.languageId == Papyrus.LanguageID || document.languageId == PapyrusProject.LanguageID) {
            let wordCount = this.GetWordCount(document);

            // Update the status bar
            this.statusBarItem.text = wordCount !== 1 ? `$(pencil) ${wordCount} Words` : '$(pencil) 1 Word';
            this.statusBarItem.show();
            console.log('WordCounter, Updated count from the current document.');
        } else {
            console.log('WordCounter, hiding because the documents languageId is not equal to `' + Papyrus.LanguageID + '` or `' + PapyrusProject.LanguageID+'`.');
            this.statusBarItem.hide();
        }
    }


    public GetWordCount(document: TextDocument): number {
        console.log('WordCounter.GetWordCount');
        let text = document.getText();

        // Parse out unwanted whitespace so the split is accurate
        text = text.replace(/(< ([^>]+)<)/g, '').replace(/\s+/g, ' ');
        text = text.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        let wordCount = 0;
        if (text != "") {
            wordCount = text.split(" ").length;
        }

        return wordCount;
    }


    public dispose() {
        console.log('WordCounter.dispose');
        this.statusBarItem.dispose();
    }
}
