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

export class WordCounter extends Feature {
    private readonly CountSelectionCommand: string = 'papyrus.countSelection';
    private statusBarItem: StatusBarItem;


    constructor(context: ExtensionContext) {
        super(context);

        this.statusBarItem = undefined;

        let wordCounterController = new WordCounterController(this);
        this.AddDisposable(wordCounterController);

        this.RegisterCommand(this.CountSelectionCommand);
    }


    protected OnCommand(commandName: string) {
        if (commandName == this.CountSelectionCommand) {
            let editor = window.activeTextEditor;
            if (!editor) {
                return; // No open text editor
            }

            let selection = editor.selection;
            let text = editor.document.getText(selection);
            window.showInformationMessage('Papyrus, Selected Characters: ' + text.length);
        } else {
			window.showWarningMessage('The `'+commandName+'` command is unhandled.');
		}
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
            console.log('WordCounter, hiding because the documents languageId is not equal to `' + Papyrus.LanguageID + '` or `' + PapyrusProject.LanguageID + '`.');
            this.statusBarItem.hide();
        }
    }


    private GetWordCount(document: TextDocument): number {
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
        this.statusBarItem.dispose();
    }

}



class WordCounterController {
    private WordCounter: WordCounter;
    private disposable: Disposable;


    constructor(wordCounter: WordCounter) {
        this.WordCounter = wordCounter;
        this.WordCounter.OnUpdateWordCount();

        // subscribe to selection change and editor activation events
        let subscriptions: Disposable[] = [];
        window.onDidChangeTextEditorSelection(this.OnEvent, this, subscriptions);
        window.onDidChangeActiveTextEditor(this.OnEvent, this, subscriptions);

        // create a combined disposable from both event subscriptions
        this.disposable = Disposable.from(...subscriptions);
    }


    private OnEvent() {
        console.log('WordCounterController.OnEvent');
        this.WordCounter.OnUpdateWordCount();
    }


    public dispose() {
        console.log('WordCounterController.dispose');
        this.disposable.dispose();
    }

}
