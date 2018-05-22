// Generated from ./src/Parser/Papyrus.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { PapyrusListener } from './PapyrusListener';
import { PapyrusVisitor } from './PapyrusVisitor';


export class PapyrusParser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly T__4=5;
	public static readonly T__5=6;
	public static readonly T__6=7;
	public static readonly T__7=8;
	public static readonly T__8=9;
	public static readonly T__9=10;
	public static readonly T__10=11;
	public static readonly T__11=12;
	public static readonly T__12=13;
	public static readonly T__13=14;
	public static readonly T__14=15;
	public static readonly T__15=16;
	public static readonly T__16=17;
	public static readonly T__17=18;
	public static readonly T__18=19;
	public static readonly T__19=20;
	public static readonly T__20=21;
	public static readonly T__21=22;
	public static readonly T__22=23;
	public static readonly T__23=24;
	public static readonly T__24=25;
	public static readonly K_AS=26;
	public static readonly K_AUTO=27;
	public static readonly K_AUTOREADONLY=28;
	public static readonly K_BETAONLY=29;
	public static readonly K_BOOLEAN=30;
	public static readonly K_COLLAPSED=31;
	public static readonly K_COLLAPSEDONBASE=32;
	public static readonly K_COLLAPSEDONREF=33;
	public static readonly K_CONDITIONAL=34;
	public static readonly K_CONST=35;
	public static readonly K_CUSTOMEVENT=36;
	public static readonly K_CUSTOMEVENTNAME=37;
	public static readonly K_DEBUGONLY=38;
	public static readonly K_DEFAULT=39;
	public static readonly K_ELSE=40;
	public static readonly K_ELSEIF=41;
	public static readonly K_ENDEVENT=42;
	public static readonly K_ENDFUNCTION=43;
	public static readonly K_ENDGROUP=44;
	public static readonly K_ENDIF=45;
	public static readonly K_ENDPROPERTY=46;
	public static readonly K_ENDSTATE=47;
	public static readonly K_ENDSTRUCT=48;
	public static readonly K_ENDWHILE=49;
	public static readonly K_EVENT=50;
	public static readonly K_EXTENDS=51;
	public static readonly K_FALSE=52;
	public static readonly K_FLOAT=53;
	public static readonly K_FUNCTION=54;
	public static readonly K_GLOBAL=55;
	public static readonly K_GROUP=56;
	public static readonly K_HIDDEN=57;
	public static readonly K_IF=58;
	public static readonly K_IMPORT=59;
	public static readonly K_IS=60;
	public static readonly K_INTEGER=61;
	public static readonly K_LENGTH=62;
	public static readonly K_MANDATORY=63;
	public static readonly K_NATIVE=64;
	public static readonly K_NEW=65;
	public static readonly K_NONE=66;
	public static readonly K_PARENT=67;
	public static readonly K_PROPERTY=68;
	public static readonly K_RETURN=69;
	public static readonly K_SCRIPTNAME=70;
	public static readonly K_SCRIPTEVENTNAME=71;
	public static readonly K_SELF=72;
	public static readonly K_STATE=73;
	public static readonly K_STRING=74;
	public static readonly K_STRUCT=75;
	public static readonly K_STRUCTVARNAME=76;
	public static readonly K_TRUE=77;
	public static readonly K_VAR=78;
	public static readonly K_WHILE=79;
	public static readonly L_FLOAT=80;
	public static readonly L_INT=81;
	public static readonly L_STRING=82;
	public static readonly L_ARRAY=83;
	public static readonly IDENTIFIER=84;
	public static readonly COMMENT_DOC=85;
	public static readonly COMMENT_MULTI=86;
	public static readonly COMMENT_SINGLE=87;
	public static readonly WHITESPACE=88;
	public static readonly LINETERMINATOR=89;
	public static readonly RULE_papyrusFile = 0;
	public static readonly RULE_typeDefinition = 1;
	public static readonly RULE_literalDefinition = 2;
	public static readonly RULE_valueDefinition = 3;
	public static readonly RULE_namespace = 4;
	public static readonly RULE_objectName = 5;
	public static readonly RULE_scriptHeader = 6;
	public static readonly RULE_scriptFlags = 7;
	public static readonly RULE_blockDeclaration = 8;
	public static readonly RULE_propertyDeclaration = 9;
	public static readonly RULE_fullPropertyDeclaration = 10;
	public static readonly RULE_fullPropertyFlags = 11;
	public static readonly RULE_autoPropertyDeclaration = 12;
	public static readonly RULE_autoPropertyFlags = 13;
	public static readonly RULE_eventOrFunctionDeclaration = 14;
	public static readonly RULE_functionFlags = 15;
	public static readonly RULE_functionBlock = 16;
	public static readonly RULE_expressionBlock = 17;
	public static readonly RULE_expressionList = 18;
	public static readonly RULE_expression = 19;
	public static readonly RULE_primary = 20;
	public static readonly RULE_variableDeclaration = 21;
	public static readonly RULE_structDeclaration = 22;
	public static readonly RULE_stateDeclaration = 23;
	public static readonly RULE_groupDeclaration = 24;
	public static readonly RULE_groupFlags = 25;
	public static readonly RULE_customEventDeclaration = 26;
	public static readonly RULE_importDeclaration = 27;
	public static readonly ruleNames: string[] = [
		"papyrusFile", "typeDefinition", "literalDefinition", "valueDefinition", 
		"namespace", "objectName", "scriptHeader", "scriptFlags", "blockDeclaration", 
		"propertyDeclaration", "fullPropertyDeclaration", "fullPropertyFlags", 
		"autoPropertyDeclaration", "autoPropertyFlags", "eventOrFunctionDeclaration", 
		"functionFlags", "functionBlock", "expressionBlock", "expressionList", 
		"expression", "primary", "variableDeclaration", "structDeclaration", "stateDeclaration", 
		"groupDeclaration", "groupFlags", "customEventDeclaration", "importDeclaration"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "':'", "'.'", "'='", "'('", "')'", "','", "'!'", "'*'", "'/'", 
		"'%'", "'+'", "'-'", "'<='", "'>='", "'>'", "'<'", "'=='", "'!='", "'&&'", 
		"'||'", "'+='", "'-='", "'*='", "'/='", "'%='"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "K_AS", "K_AUTO", 
		"K_AUTOREADONLY", "K_BETAONLY", "K_BOOLEAN", "K_COLLAPSED", "K_COLLAPSEDONBASE", 
		"K_COLLAPSEDONREF", "K_CONDITIONAL", "K_CONST", "K_CUSTOMEVENT", "K_CUSTOMEVENTNAME", 
		"K_DEBUGONLY", "K_DEFAULT", "K_ELSE", "K_ELSEIF", "K_ENDEVENT", "K_ENDFUNCTION", 
		"K_ENDGROUP", "K_ENDIF", "K_ENDPROPERTY", "K_ENDSTATE", "K_ENDSTRUCT", 
		"K_ENDWHILE", "K_EVENT", "K_EXTENDS", "K_FALSE", "K_FLOAT", "K_FUNCTION", 
		"K_GLOBAL", "K_GROUP", "K_HIDDEN", "K_IF", "K_IMPORT", "K_IS", "K_INTEGER", 
		"K_LENGTH", "K_MANDATORY", "K_NATIVE", "K_NEW", "K_NONE", "K_PARENT", 
		"K_PROPERTY", "K_RETURN", "K_SCRIPTNAME", "K_SCRIPTEVENTNAME", "K_SELF", 
		"K_STATE", "K_STRING", "K_STRUCT", "K_STRUCTVARNAME", "K_TRUE", "K_VAR", 
		"K_WHILE", "L_FLOAT", "L_INT", "L_STRING", "L_ARRAY", "IDENTIFIER", "COMMENT_DOC", 
		"COMMENT_MULTI", "COMMENT_SINGLE", "WHITESPACE", "LINETERMINATOR"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PapyrusParser._LITERAL_NAMES, PapyrusParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return PapyrusParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "Papyrus.g4"; }

	@Override
	public get ruleNames(): string[] { return PapyrusParser.ruleNames; }

	@Override
	public get serializedATN(): string { return PapyrusParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(PapyrusParser._ATN, this);
	}
	@RuleVersion(0)
	public papyrusFile(): PapyrusFileContext {
		let _localctx: PapyrusFileContext = new PapyrusFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PapyrusParser.RULE_papyrusFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.scriptHeader();
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (PapyrusParser.K_AUTO - 27)) | (1 << (PapyrusParser.K_BOOLEAN - 27)) | (1 << (PapyrusParser.K_EVENT - 27)) | (1 << (PapyrusParser.K_FLOAT - 27)) | (1 << (PapyrusParser.K_FUNCTION - 27)) | (1 << (PapyrusParser.K_GROUP - 27)))) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (PapyrusParser.K_INTEGER - 61)) | (1 << (PapyrusParser.K_STATE - 61)) | (1 << (PapyrusParser.K_STRING - 61)) | (1 << (PapyrusParser.K_STRUCT - 61)) | (1 << (PapyrusParser.K_VAR - 61)) | (1 << (PapyrusParser.IDENTIFIER - 61)))) !== 0)) {
				{
				{
				this.state = 57;
				this.blockDeclaration();
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public typeDefinition(): TypeDefinitionContext;
	public typeDefinition(_p: number): TypeDefinitionContext;
	@RuleVersion(0)
	public typeDefinition(_p?: number): TypeDefinitionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeDefinitionContext = new TypeDefinitionContext(this._ctx, _parentState);
		let _prevctx: TypeDefinitionContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, PapyrusParser.RULE_typeDefinition, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PapyrusParser.K_BOOLEAN:
				{
				this.state = 64;
				this.match(PapyrusParser.K_BOOLEAN);
				}
				break;
			case PapyrusParser.K_FLOAT:
				{
				this.state = 65;
				this.match(PapyrusParser.K_FLOAT);
				}
				break;
			case PapyrusParser.K_INTEGER:
				{
				this.state = 66;
				this.match(PapyrusParser.K_INTEGER);
				}
				break;
			case PapyrusParser.K_STRING:
				{
				this.state = 67;
				this.match(PapyrusParser.K_STRING);
				}
				break;
			case PapyrusParser.K_VAR:
				{
				this.state = 68;
				this.match(PapyrusParser.K_VAR);
				}
				break;
			case PapyrusParser.IDENTIFIER:
				{
				this.state = 69;
				this.namespace();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 76;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,2,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeDefinitionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, PapyrusParser.RULE_typeDefinition);
					this.state = 72;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 73;
					this.match(PapyrusParser.L_ARRAY);
					}
					} 
				}
				this.state = 78;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,2,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literalDefinition(): LiteralDefinitionContext {
		let _localctx: LiteralDefinitionContext = new LiteralDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PapyrusParser.RULE_literalDefinition);
		let _la: number;
		try {
			this.state = 84;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PapyrusParser.K_FALSE:
			case PapyrusParser.K_TRUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 79;
				_la = this._input.LA(1);
				if ( !(_la===PapyrusParser.K_FALSE || _la===PapyrusParser.K_TRUE) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case PapyrusParser.L_FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 80;
				this.match(PapyrusParser.L_FLOAT);
				}
				break;
			case PapyrusParser.L_INT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 81;
				this.match(PapyrusParser.L_INT);
				}
				break;
			case PapyrusParser.L_STRING:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 82;
				this.match(PapyrusParser.L_STRING);
				}
				break;
			case PapyrusParser.K_NONE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 83;
				this.match(PapyrusParser.K_NONE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public valueDefinition(): ValueDefinitionContext {
		let _localctx: ValueDefinitionContext = new ValueDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, PapyrusParser.RULE_valueDefinition);
		let _la: number;
		try {
			this.state = 92;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PapyrusParser.K_FALSE:
			case PapyrusParser.K_TRUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 86;
				_la = this._input.LA(1);
				if ( !(_la===PapyrusParser.K_FALSE || _la===PapyrusParser.K_TRUE) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case PapyrusParser.L_FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 87;
				this.match(PapyrusParser.L_FLOAT);
				}
				break;
			case PapyrusParser.L_INT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 88;
				this.match(PapyrusParser.L_INT);
				}
				break;
			case PapyrusParser.L_STRING:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 89;
				this.match(PapyrusParser.L_STRING);
				}
				break;
			case PapyrusParser.K_NONE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 90;
				this.match(PapyrusParser.K_NONE);
				}
				break;
			case PapyrusParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 91;
				this.match(PapyrusParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public namespace(): NamespaceContext {
		let _localctx: NamespaceContext = new NamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PapyrusParser.RULE_namespace);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.match(PapyrusParser.IDENTIFIER);
			this.state = 99;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 95;
					this.match(PapyrusParser.T__0);
					this.state = 96;
					this.match(PapyrusParser.IDENTIFIER);
					}
					} 
				}
				this.state = 101;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public objectName(): ObjectNameContext {
		let _localctx: ObjectNameContext = new ObjectNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PapyrusParser.RULE_objectName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,6,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 102;
					this.namespace();
					this.state = 103;
					this.match(PapyrusParser.T__1);
					}
					} 
				}
				this.state = 109;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,6,this._ctx);
			}
			this.state = 110;
			this.match(PapyrusParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public scriptHeader(): ScriptHeaderContext {
		let _localctx: ScriptHeaderContext = new ScriptHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PapyrusParser.RULE_scriptHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.match(PapyrusParser.K_SCRIPTNAME);
			this.state = 113;
			this.namespace();
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===PapyrusParser.K_EXTENDS) {
				{
				this.state = 114;
				this.match(PapyrusParser.K_EXTENDS);
				this.state = 115;
				this.namespace();
				}
			}

			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===PapyrusParser.K_BETAONLY || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (PapyrusParser.K_CONDITIONAL - 34)) | (1 << (PapyrusParser.K_CONST - 34)) | (1 << (PapyrusParser.K_DEBUGONLY - 34)) | (1 << (PapyrusParser.K_DEFAULT - 34)) | (1 << (PapyrusParser.K_HIDDEN - 34)) | (1 << (PapyrusParser.K_NATIVE - 34)))) !== 0)) {
				{
				{
				this.state = 118;
				this.scriptFlags();
				}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public scriptFlags(): ScriptFlagsContext {
		let _localctx: ScriptFlagsContext = new ScriptFlagsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PapyrusParser.RULE_scriptFlags);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			_la = this._input.LA(1);
			if ( !(_la===PapyrusParser.K_BETAONLY || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (PapyrusParser.K_CONDITIONAL - 34)) | (1 << (PapyrusParser.K_CONST - 34)) | (1 << (PapyrusParser.K_DEBUGONLY - 34)) | (1 << (PapyrusParser.K_DEFAULT - 34)) | (1 << (PapyrusParser.K_HIDDEN - 34)) | (1 << (PapyrusParser.K_NATIVE - 34)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public blockDeclaration(): BlockDeclarationContext {
		let _localctx: BlockDeclarationContext = new BlockDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PapyrusParser.RULE_blockDeclaration);
		try {
			this.state = 132;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,9,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 126;
				this.eventOrFunctionDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 127;
				this.propertyDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 128;
				this.variableDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 129;
				this.structDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 130;
				this.groupDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 131;
				this.stateDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public propertyDeclaration(): PropertyDeclarationContext {
		let _localctx: PropertyDeclarationContext = new PropertyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PapyrusParser.RULE_propertyDeclaration);
		try {
			this.state = 136;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,10,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 134;
				this.fullPropertyDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 135;
				this.autoPropertyDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public fullPropertyDeclaration(): FullPropertyDeclarationContext {
		let _localctx: FullPropertyDeclarationContext = new FullPropertyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, PapyrusParser.RULE_fullPropertyDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.typeDefinition(0);
			this.state = 139;
			this.match(PapyrusParser.K_PROPERTY);
			this.state = 140;
			this.objectName();
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===PapyrusParser.K_HIDDEN || _la===PapyrusParser.K_MANDATORY) {
				{
				{
				this.state = 141;
				this.fullPropertyFlags();
				}
				}
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (PapyrusParser.K_BOOLEAN - 30)) | (1 << (PapyrusParser.K_EVENT - 30)) | (1 << (PapyrusParser.K_FLOAT - 30)) | (1 << (PapyrusParser.K_FUNCTION - 30)) | (1 << (PapyrusParser.K_INTEGER - 30)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (PapyrusParser.K_STRING - 74)) | (1 << (PapyrusParser.K_VAR - 74)) | (1 << (PapyrusParser.IDENTIFIER - 74)))) !== 0)) {
				{
				{
				this.state = 147;
				this.eventOrFunctionDeclaration();
				}
				}
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 153;
			this.match(PapyrusParser.K_ENDPROPERTY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public fullPropertyFlags(): FullPropertyFlagsContext {
		let _localctx: FullPropertyFlagsContext = new FullPropertyFlagsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, PapyrusParser.RULE_fullPropertyFlags);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			_la = this._input.LA(1);
			if ( !(_la===PapyrusParser.K_HIDDEN || _la===PapyrusParser.K_MANDATORY) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public autoPropertyDeclaration(): AutoPropertyDeclarationContext {
		let _localctx: AutoPropertyDeclarationContext = new AutoPropertyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PapyrusParser.RULE_autoPropertyDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.typeDefinition(0);
			this.state = 158;
			this.match(PapyrusParser.K_PROPERTY);
			this.state = 159;
			this.objectName();
			this.state = 169;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,14,this._ctx) ) {
			case 1:
				{
				this.state = 160;
				this.match(PapyrusParser.T__2);
				this.state = 161;
				this.valueDefinition();
				this.state = 162;
				this.match(PapyrusParser.K_AUTOREADONLY);
				}
				break;

			case 2:
				{
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===PapyrusParser.T__2) {
					{
					this.state = 164;
					this.match(PapyrusParser.T__2);
					this.state = 165;
					this.valueDefinition();
					}
				}

				this.state = 168;
				this.match(PapyrusParser.K_AUTO);
				}
				break;
			}
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (PapyrusParser.K_CONDITIONAL - 34)) | (1 << (PapyrusParser.K_CONST - 34)) | (1 << (PapyrusParser.K_HIDDEN - 34)) | (1 << (PapyrusParser.K_MANDATORY - 34)))) !== 0)) {
				{
				{
				this.state = 171;
				this.autoPropertyFlags();
				}
				}
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public autoPropertyFlags(): AutoPropertyFlagsContext {
		let _localctx: AutoPropertyFlagsContext = new AutoPropertyFlagsContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, PapyrusParser.RULE_autoPropertyFlags);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			_la = this._input.LA(1);
			if ( !(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (PapyrusParser.K_CONDITIONAL - 34)) | (1 << (PapyrusParser.K_CONST - 34)) | (1 << (PapyrusParser.K_HIDDEN - 34)) | (1 << (PapyrusParser.K_MANDATORY - 34)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public eventOrFunctionDeclaration(): EventOrFunctionDeclarationContext {
		let _localctx: EventOrFunctionDeclarationContext = new EventOrFunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, PapyrusParser.RULE_eventOrFunctionDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 206;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PapyrusParser.K_BOOLEAN:
			case PapyrusParser.K_FLOAT:
			case PapyrusParser.K_FUNCTION:
			case PapyrusParser.K_INTEGER:
			case PapyrusParser.K_STRING:
			case PapyrusParser.K_VAR:
			case PapyrusParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===PapyrusParser.K_BOOLEAN || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (PapyrusParser.K_FLOAT - 53)) | (1 << (PapyrusParser.K_INTEGER - 53)) | (1 << (PapyrusParser.K_STRING - 53)) | (1 << (PapyrusParser.K_VAR - 53)) | (1 << (PapyrusParser.IDENTIFIER - 53)))) !== 0)) {
					{
					this.state = 179;
					this.typeDefinition(0);
					}
				}

				this.state = 182;
				this.match(PapyrusParser.K_FUNCTION);
				this.state = 186;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,17,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 183;
						this.functionBlock();
						}
						} 
					}
					this.state = 188;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,17,this._ctx);
				}
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===PapyrusParser.K_BETAONLY || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (PapyrusParser.K_DEBUGONLY - 38)) | (1 << (PapyrusParser.K_GLOBAL - 38)) | (1 << (PapyrusParser.K_HIDDEN - 38)) | (1 << (PapyrusParser.K_NATIVE - 38)))) !== 0)) {
					{
					{
					this.state = 189;
					this.functionFlags();
					}
					}
					this.state = 194;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===PapyrusParser.K_ENDFUNCTION) {
					{
					this.state = 195;
					this.match(PapyrusParser.K_ENDFUNCTION);
					}
				}

				}
				break;
			case PapyrusParser.K_EVENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 198;
				this.match(PapyrusParser.K_EVENT);
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PapyrusParser.T__3) | (1 << PapyrusParser.T__6) | (1 << PapyrusParser.K_BOOLEAN))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (PapyrusParser.K_ELSE - 40)) | (1 << (PapyrusParser.K_ELSEIF - 40)) | (1 << (PapyrusParser.K_FALSE - 40)) | (1 << (PapyrusParser.K_FLOAT - 40)) | (1 << (PapyrusParser.K_IF - 40)) | (1 << (PapyrusParser.K_INTEGER - 40)) | (1 << (PapyrusParser.K_NEW - 40)) | (1 << (PapyrusParser.K_NONE - 40)) | (1 << (PapyrusParser.K_PARENT - 40)) | (1 << (PapyrusParser.K_RETURN - 40)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (PapyrusParser.K_SELF - 72)) | (1 << (PapyrusParser.K_STRING - 72)) | (1 << (PapyrusParser.K_TRUE - 72)) | (1 << (PapyrusParser.K_VAR - 72)) | (1 << (PapyrusParser.K_WHILE - 72)) | (1 << (PapyrusParser.L_FLOAT - 72)) | (1 << (PapyrusParser.L_INT - 72)) | (1 << (PapyrusParser.L_STRING - 72)) | (1 << (PapyrusParser.IDENTIFIER - 72)))) !== 0)) {
					{
					{
					this.state = 199;
					this.functionBlock();
					}
					}
					this.state = 204;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 205;
				this.match(PapyrusParser.K_ENDEVENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionFlags(): FunctionFlagsContext {
		let _localctx: FunctionFlagsContext = new FunctionFlagsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, PapyrusParser.RULE_functionFlags);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			_la = this._input.LA(1);
			if ( !(_la===PapyrusParser.K_BETAONLY || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (PapyrusParser.K_DEBUGONLY - 38)) | (1 << (PapyrusParser.K_GLOBAL - 38)) | (1 << (PapyrusParser.K_HIDDEN - 38)) | (1 << (PapyrusParser.K_NATIVE - 38)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionBlock(): FunctionBlockContext {
		let _localctx: FunctionBlockContext = new FunctionBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, PapyrusParser.RULE_functionBlock);
		let _la: number;
		try {
			let _alt: number;
			this.state = 250;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PapyrusParser.T__3:
			case PapyrusParser.T__6:
			case PapyrusParser.K_BOOLEAN:
			case PapyrusParser.K_FALSE:
			case PapyrusParser.K_FLOAT:
			case PapyrusParser.K_INTEGER:
			case PapyrusParser.K_NEW:
			case PapyrusParser.K_NONE:
			case PapyrusParser.K_PARENT:
			case PapyrusParser.K_SELF:
			case PapyrusParser.K_STRING:
			case PapyrusParser.K_TRUE:
			case PapyrusParser.K_VAR:
			case PapyrusParser.L_FLOAT:
			case PapyrusParser.L_INT:
			case PapyrusParser.L_STRING:
			case PapyrusParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 210;
				this.expressionBlock();
				}
				break;
			case PapyrusParser.K_IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 211;
				this.match(PapyrusParser.K_IF);
				this.state = 212;
				this.expressionBlock();
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PapyrusParser.T__3) | (1 << PapyrusParser.T__6) | (1 << PapyrusParser.K_BOOLEAN))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (PapyrusParser.K_ELSE - 40)) | (1 << (PapyrusParser.K_ELSEIF - 40)) | (1 << (PapyrusParser.K_FALSE - 40)) | (1 << (PapyrusParser.K_FLOAT - 40)) | (1 << (PapyrusParser.K_IF - 40)) | (1 << (PapyrusParser.K_INTEGER - 40)) | (1 << (PapyrusParser.K_NEW - 40)) | (1 << (PapyrusParser.K_NONE - 40)) | (1 << (PapyrusParser.K_PARENT - 40)) | (1 << (PapyrusParser.K_RETURN - 40)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (PapyrusParser.K_SELF - 72)) | (1 << (PapyrusParser.K_STRING - 72)) | (1 << (PapyrusParser.K_TRUE - 72)) | (1 << (PapyrusParser.K_VAR - 72)) | (1 << (PapyrusParser.K_WHILE - 72)) | (1 << (PapyrusParser.L_FLOAT - 72)) | (1 << (PapyrusParser.L_INT - 72)) | (1 << (PapyrusParser.L_STRING - 72)) | (1 << (PapyrusParser.IDENTIFIER - 72)))) !== 0)) {
					{
					{
					this.state = 213;
					this.functionBlock();
					}
					}
					this.state = 218;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 219;
				this.match(PapyrusParser.K_ENDIF);
				}
				break;
			case PapyrusParser.K_ELSEIF:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 221;
				this.match(PapyrusParser.K_ELSEIF);
				this.state = 222;
				this.expressionBlock();
				this.state = 226;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,23,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 223;
						this.functionBlock();
						}
						} 
					}
					this.state = 228;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,23,this._ctx);
				}
				}
				break;
			case PapyrusParser.K_ELSE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 229;
				this.match(PapyrusParser.K_ELSE);
				this.state = 233;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,24,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 230;
						this.functionBlock();
						}
						} 
					}
					this.state = 235;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,24,this._ctx);
				}
				}
				break;
			case PapyrusParser.K_WHILE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 236;
				this.match(PapyrusParser.K_WHILE);
				this.state = 237;
				this.expressionBlock();
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PapyrusParser.T__3) | (1 << PapyrusParser.T__6) | (1 << PapyrusParser.K_BOOLEAN))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (PapyrusParser.K_ELSE - 40)) | (1 << (PapyrusParser.K_ELSEIF - 40)) | (1 << (PapyrusParser.K_FALSE - 40)) | (1 << (PapyrusParser.K_FLOAT - 40)) | (1 << (PapyrusParser.K_IF - 40)) | (1 << (PapyrusParser.K_INTEGER - 40)) | (1 << (PapyrusParser.K_NEW - 40)) | (1 << (PapyrusParser.K_NONE - 40)) | (1 << (PapyrusParser.K_PARENT - 40)) | (1 << (PapyrusParser.K_RETURN - 40)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (PapyrusParser.K_SELF - 72)) | (1 << (PapyrusParser.K_STRING - 72)) | (1 << (PapyrusParser.K_TRUE - 72)) | (1 << (PapyrusParser.K_VAR - 72)) | (1 << (PapyrusParser.K_WHILE - 72)) | (1 << (PapyrusParser.L_FLOAT - 72)) | (1 << (PapyrusParser.L_INT - 72)) | (1 << (PapyrusParser.L_STRING - 72)) | (1 << (PapyrusParser.IDENTIFIER - 72)))) !== 0)) {
					{
					{
					this.state = 238;
					this.functionBlock();
					}
					}
					this.state = 243;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 244;
				this.match(PapyrusParser.K_ENDWHILE);
				}
				break;
			case PapyrusParser.K_RETURN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 246;
				this.match(PapyrusParser.K_RETURN);
				this.state = 248;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,26,this._ctx) ) {
				case 1:
					{
					this.state = 247;
					this.expressionBlock();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expressionBlock(): ExpressionBlockContext {
		let _localctx: ExpressionBlockContext = new ExpressionBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, PapyrusParser.RULE_expressionBlock);
		try {
			this.state = 257;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,28,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 252;
				this.match(PapyrusParser.T__3);
				this.state = 253;
				this.expression(0);
				this.state = 254;
				this.match(PapyrusParser.T__4);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 256;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, PapyrusParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.expression(0);
			this.state = 264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===PapyrusParser.T__5) {
				{
				{
				this.state = 260;
				this.match(PapyrusParser.T__5);
				this.state = 261;
				this.expression(0);
				}
				}
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	@RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 38;
		this.enterRecursionRule(_localctx, 38, PapyrusParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PapyrusParser.T__3:
			case PapyrusParser.K_BOOLEAN:
			case PapyrusParser.K_FALSE:
			case PapyrusParser.K_FLOAT:
			case PapyrusParser.K_INTEGER:
			case PapyrusParser.K_NONE:
			case PapyrusParser.K_PARENT:
			case PapyrusParser.K_SELF:
			case PapyrusParser.K_STRING:
			case PapyrusParser.K_TRUE:
			case PapyrusParser.K_VAR:
			case PapyrusParser.L_FLOAT:
			case PapyrusParser.L_INT:
			case PapyrusParser.L_STRING:
			case PapyrusParser.IDENTIFIER:
				{
				this.state = 268;
				this.primary();
				}
				break;
			case PapyrusParser.T__6:
				{
				this.state = 269;
				this.match(PapyrusParser.T__6);
				this.state = 270;
				this.expression(11);
				}
				break;
			case PapyrusParser.K_NEW:
				{
				this.state = 271;
				this.match(PapyrusParser.K_NEW);
				this.state = 272;
				this.expression(10);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 321;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,33,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 319;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,32,this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PapyrusParser.RULE_expression);
						this.state = 275;
						if (!(this.precpred(this._ctx, 9))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						this.state = 276;
						_la = this._input.LA(1);
						if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PapyrusParser.T__7) | (1 << PapyrusParser.T__8) | (1 << PapyrusParser.T__9))) !== 0)) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 277;
						this.expression(10);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PapyrusParser.RULE_expression);
						this.state = 278;
						if (!(this.precpred(this._ctx, 8))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						this.state = 279;
						_la = this._input.LA(1);
						if ( !(_la===PapyrusParser.T__10 || _la===PapyrusParser.T__11) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 280;
						this.expression(9);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PapyrusParser.RULE_expression);
						this.state = 281;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 282;
						_la = this._input.LA(1);
						if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PapyrusParser.T__12) | (1 << PapyrusParser.T__13) | (1 << PapyrusParser.T__14) | (1 << PapyrusParser.T__15))) !== 0)) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 283;
						this.expression(8);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PapyrusParser.RULE_expression);
						this.state = 284;
						if (!(this.precpred(this._ctx, 5))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						this.state = 285;
						_la = this._input.LA(1);
						if ( !(_la===PapyrusParser.T__16 || _la===PapyrusParser.T__17) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 286;
						this.expression(6);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PapyrusParser.RULE_expression);
						this.state = 287;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 288;
						this.match(PapyrusParser.T__18);
						this.state = 289;
						this.expression(5);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PapyrusParser.RULE_expression);
						this.state = 290;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 291;
						this.match(PapyrusParser.T__19);
						this.state = 292;
						this.expression(4);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PapyrusParser.RULE_expression);
						this.state = 293;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 294;
						_la = this._input.LA(1);
						if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PapyrusParser.T__2) | (1 << PapyrusParser.T__20) | (1 << PapyrusParser.T__21) | (1 << PapyrusParser.T__22) | (1 << PapyrusParser.T__23) | (1 << PapyrusParser.T__24))) !== 0)) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 295;
						this.expression(3);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PapyrusParser.RULE_expression);
						this.state = 296;
						if (!(this.precpred(this._ctx, 16))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						this.state = 297;
						this.match(PapyrusParser.T__1);
						this.state = 298;
						this.match(PapyrusParser.IDENTIFIER);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PapyrusParser.RULE_expression);
						this.state = 299;
						if (!(this.precpred(this._ctx, 15))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						this.state = 300;
						this.match(PapyrusParser.T__1);
						this.state = 301;
						this.match(PapyrusParser.K_SELF);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PapyrusParser.RULE_expression);
						this.state = 302;
						if (!(this.precpred(this._ctx, 14))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						this.state = 303;
						this.match(PapyrusParser.T__1);
						this.state = 304;
						this.match(PapyrusParser.K_PARENT);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PapyrusParser.RULE_expression);
						this.state = 305;
						if (!(this.precpred(this._ctx, 13))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						this.state = 306;
						this.match(PapyrusParser.L_ARRAY);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PapyrusParser.RULE_expression);
						this.state = 307;
						if (!(this.precpred(this._ctx, 12))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						this.state = 308;
						this.match(PapyrusParser.T__3);
						this.state = 310;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PapyrusParser.T__3) | (1 << PapyrusParser.T__6) | (1 << PapyrusParser.K_BOOLEAN))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (PapyrusParser.K_FALSE - 52)) | (1 << (PapyrusParser.K_FLOAT - 52)) | (1 << (PapyrusParser.K_INTEGER - 52)) | (1 << (PapyrusParser.K_NEW - 52)) | (1 << (PapyrusParser.K_NONE - 52)) | (1 << (PapyrusParser.K_PARENT - 52)) | (1 << (PapyrusParser.K_SELF - 52)) | (1 << (PapyrusParser.K_STRING - 52)) | (1 << (PapyrusParser.K_TRUE - 52)) | (1 << (PapyrusParser.K_VAR - 52)) | (1 << (PapyrusParser.L_FLOAT - 52)) | (1 << (PapyrusParser.L_INT - 52)) | (1 << (PapyrusParser.L_STRING - 52)))) !== 0) || _la===PapyrusParser.IDENTIFIER) {
							{
							this.state = 309;
							this.expressionList();
							}
						}

						this.state = 312;
						this.match(PapyrusParser.T__4);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PapyrusParser.RULE_expression);
						this.state = 313;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 314;
						_la = this._input.LA(1);
						if ( !(_la===PapyrusParser.K_AS || _la===PapyrusParser.K_IS) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 315;
						this.typeDefinition(0);
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PapyrusParser.RULE_expression);
						this.state = 316;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 317;
						this.match(PapyrusParser.T__1);
						this.state = 318;
						this.match(PapyrusParser.K_LENGTH);
						}
						break;
					}
					} 
				}
				this.state = 323;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,33,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, PapyrusParser.RULE_primary);
		try {
			this.state = 335;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PapyrusParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 324;
				this.match(PapyrusParser.T__3);
				this.state = 325;
				this.expression(0);
				this.state = 326;
				this.match(PapyrusParser.T__4);
				}
				break;
			case PapyrusParser.K_SELF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 328;
				this.match(PapyrusParser.K_SELF);
				}
				break;
			case PapyrusParser.K_PARENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 329;
				this.match(PapyrusParser.K_PARENT);
				}
				break;
			case PapyrusParser.K_FALSE:
			case PapyrusParser.K_NONE:
			case PapyrusParser.K_TRUE:
			case PapyrusParser.L_FLOAT:
			case PapyrusParser.L_INT:
			case PapyrusParser.L_STRING:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 330;
				this.literalDefinition();
				}
				break;
			case PapyrusParser.K_BOOLEAN:
			case PapyrusParser.K_FLOAT:
			case PapyrusParser.K_INTEGER:
			case PapyrusParser.K_STRING:
			case PapyrusParser.K_VAR:
			case PapyrusParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 331;
				this.typeDefinition(0);
				this.state = 333;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,34,this._ctx) ) {
				case 1:
					{
					this.state = 332;
					this.objectName();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, PapyrusParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.typeDefinition(0);
			this.state = 338;
			this.objectName();
			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===PapyrusParser.T__2) {
				{
				this.state = 339;
				this.match(PapyrusParser.T__2);
				this.state = 340;
				this.valueDefinition();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public structDeclaration(): StructDeclarationContext {
		let _localctx: StructDeclarationContext = new StructDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, PapyrusParser.RULE_structDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this.match(PapyrusParser.K_STRUCT);
			this.state = 344;
			this.objectName();
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===PapyrusParser.K_BOOLEAN || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (PapyrusParser.K_FLOAT - 53)) | (1 << (PapyrusParser.K_INTEGER - 53)) | (1 << (PapyrusParser.K_STRING - 53)) | (1 << (PapyrusParser.K_VAR - 53)) | (1 << (PapyrusParser.IDENTIFIER - 53)))) !== 0)) {
				{
				{
				this.state = 345;
				this.variableDeclaration();
				}
				}
				this.state = 350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 351;
			this.match(PapyrusParser.K_ENDSTRUCT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public stateDeclaration(): StateDeclarationContext {
		let _localctx: StateDeclarationContext = new StateDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, PapyrusParser.RULE_stateDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===PapyrusParser.K_AUTO) {
				{
				this.state = 353;
				this.match(PapyrusParser.K_AUTO);
				}
			}

			this.state = 356;
			this.match(PapyrusParser.K_STATE);
			this.state = 357;
			this.objectName();
			this.state = 361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (PapyrusParser.K_AUTO - 27)) | (1 << (PapyrusParser.K_BOOLEAN - 27)) | (1 << (PapyrusParser.K_EVENT - 27)) | (1 << (PapyrusParser.K_FLOAT - 27)) | (1 << (PapyrusParser.K_FUNCTION - 27)) | (1 << (PapyrusParser.K_GROUP - 27)))) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (PapyrusParser.K_INTEGER - 61)) | (1 << (PapyrusParser.K_STATE - 61)) | (1 << (PapyrusParser.K_STRING - 61)) | (1 << (PapyrusParser.K_STRUCT - 61)) | (1 << (PapyrusParser.K_VAR - 61)) | (1 << (PapyrusParser.IDENTIFIER - 61)))) !== 0)) {
				{
				{
				this.state = 358;
				this.blockDeclaration();
				}
				}
				this.state = 363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 364;
			this.match(PapyrusParser.K_ENDSTATE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public groupDeclaration(): GroupDeclarationContext {
		let _localctx: GroupDeclarationContext = new GroupDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, PapyrusParser.RULE_groupDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(PapyrusParser.K_GROUP);
			this.state = 367;
			this.objectName();
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (PapyrusParser.K_COLLAPSED - 31)) | (1 << (PapyrusParser.K_COLLAPSEDONBASE - 31)) | (1 << (PapyrusParser.K_COLLAPSEDONREF - 31)))) !== 0)) {
				{
				{
				this.state = 368;
				this.groupFlags();
				}
				}
				this.state = 373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===PapyrusParser.K_BOOLEAN || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (PapyrusParser.K_FLOAT - 53)) | (1 << (PapyrusParser.K_INTEGER - 53)) | (1 << (PapyrusParser.K_STRING - 53)) | (1 << (PapyrusParser.K_VAR - 53)) | (1 << (PapyrusParser.IDENTIFIER - 53)))) !== 0)) {
				{
				{
				this.state = 374;
				this.autoPropertyDeclaration();
				}
				}
				this.state = 379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 380;
			this.match(PapyrusParser.K_ENDGROUP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public groupFlags(): GroupFlagsContext {
		let _localctx: GroupFlagsContext = new GroupFlagsContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, PapyrusParser.RULE_groupFlags);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			_la = this._input.LA(1);
			if ( !(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (PapyrusParser.K_COLLAPSED - 31)) | (1 << (PapyrusParser.K_COLLAPSEDONBASE - 31)) | (1 << (PapyrusParser.K_COLLAPSEDONREF - 31)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public customEventDeclaration(): CustomEventDeclarationContext {
		let _localctx: CustomEventDeclarationContext = new CustomEventDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, PapyrusParser.RULE_customEventDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.match(PapyrusParser.K_CUSTOMEVENT);
			this.state = 385;
			this.objectName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, PapyrusParser.RULE_importDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this.match(PapyrusParser.K_IMPORT);
			this.state = 388;
			this.objectName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.typeDefinition_sempred(_localctx as TypeDefinitionContext, predIndex);

		case 19:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private typeDefinition_sempred(_localctx: TypeDefinitionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 9);

		case 2:
			return this.precpred(this._ctx, 8);

		case 3:
			return this.precpred(this._ctx, 7);

		case 4:
			return this.precpred(this._ctx, 5);

		case 5:
			return this.precpred(this._ctx, 4);

		case 6:
			return this.precpred(this._ctx, 3);

		case 7:
			return this.precpred(this._ctx, 2);

		case 8:
			return this.precpred(this._ctx, 16);

		case 9:
			return this.precpred(this._ctx, 15);

		case 10:
			return this.precpred(this._ctx, 14);

		case 11:
			return this.precpred(this._ctx, 13);

		case 12:
			return this.precpred(this._ctx, 12);

		case 13:
			return this.precpred(this._ctx, 6);

		case 14:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03[\u0189\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x03\x02\x03\x02\x07\x02=\n\x02\f\x02\x0E\x02@\v\x02\x03\x03"+
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03I\n\x03\x03\x03"+
		"\x03\x03\x07\x03M\n\x03\f\x03\x0E\x03P\v\x03\x03\x04\x03\x04\x03\x04\x03"+
		"\x04\x03\x04\x05\x04W\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03"+
		"\x05\x05\x05_\n\x05\x03\x06\x03\x06\x03\x06\x07\x06d\n\x06\f\x06\x0E\x06"+
		"g\v\x06\x03\x07\x03\x07\x03\x07\x07\x07l\n\x07\f\x07\x0E\x07o\v\x07\x03"+
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x05\bw\n\b\x03\b\x07\bz\n\b\f\b\x0E"+
		"\b}\v\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x87\n\n"+
		"\x03\v\x03\v\x05\v\x8B\n\v\x03\f\x03\f\x03\f\x03\f\x07\f\x91\n\f\f\f\x0E"+
		"\f\x94\v\f\x03\f\x07\f\x97\n\f\f\f\x0E\f\x9A\v\f\x03\f\x03\f\x03\r\x03"+
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03"+
		"\x0E\x05\x0E\xA9\n\x0E\x03\x0E\x05\x0E\xAC\n\x0E\x03\x0E\x07\x0E\xAF\n"+
		"\x0E\f\x0E\x0E\x0E\xB2\v\x0E\x03\x0F\x03\x0F\x03\x10\x05\x10\xB7\n\x10"+
		"\x03\x10\x03\x10\x07\x10\xBB\n\x10\f\x10\x0E\x10\xBE\v\x10\x03\x10\x07"+
		"\x10\xC1\n\x10\f\x10\x0E\x10\xC4\v\x10\x03\x10\x05\x10\xC7\n\x10\x03\x10"+
		"\x03\x10\x07\x10\xCB\n\x10\f\x10\x0E\x10\xCE\v\x10\x03\x10\x05\x10\xD1"+
		"\n\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\xD9\n\x12"+
		"\f\x12\x0E\x12\xDC\v\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12"+
		"\xE3\n\x12\f\x12\x0E\x12\xE6\v\x12\x03\x12\x03\x12\x07\x12\xEA\n\x12\f"+
		"\x12\x0E\x12\xED\v\x12\x03\x12\x03\x12\x03\x12\x07\x12\xF2\n\x12\f\x12"+
		"\x0E\x12\xF5\v\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xFB\n\x12\x05"+
		"\x12\xFD\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0104\n"+
		"\x13\x03\x14\x03\x14\x03\x14\x07\x14\u0109\n\x14\f\x14\x0E\x14\u010C\v"+
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0114\n\x15"+
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15"+
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15"+
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15"+
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15"+
		"\u0139\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07"+
		"\x15\u0142\n\x15\f\x15\x0E\x15\u0145\v\x15\x03\x16\x03\x16\x03\x16\x03"+
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0150\n\x16\x05\x16"+
		"\u0152\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0158\n\x17\x03\x18"+
		"\x03\x18\x03\x18\x07\x18\u015D\n\x18\f\x18\x0E\x18\u0160\v\x18\x03\x18"+
		"\x03\x18\x03\x19\x05\x19\u0165\n\x19\x03\x19\x03\x19\x03\x19\x07\x19\u016A"+
		"\n\x19\f\x19\x0E\x19\u016D\v\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A"+
		"\x07\x1A\u0174\n\x1A\f\x1A\x0E\x1A\u0177\v\x1A\x03\x1A\x07\x1A\u017A\n"+
		"\x1A\f\x1A\x0E\x1A\u017D\v\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C"+
		"\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x02\x02\x04\x04(\x1E"+
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14"+
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02"+
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02\x02\x0E\x04\x0266OO\x07\x02\x1F"+
		"\x1F$%();;BB\x04\x02;;AA\x05\x02$%;;AA\x07\x02\x1F\x1F((99;;BB\x03\x02"+
		"\n\f\x03\x02\r\x0E\x03\x02\x0F\x12\x03\x02\x13\x14\x04\x02\x05\x05\x17"+
		"\x1B\x04\x02\x1C\x1C>>\x03\x02!#\u01B9\x02:\x03\x02\x02\x02\x04H\x03\x02"+
		"\x02\x02\x06V\x03\x02\x02\x02\b^\x03\x02\x02\x02\n`\x03\x02\x02\x02\f"+
		"m\x03\x02\x02\x02\x0Er\x03\x02\x02\x02\x10~\x03\x02\x02\x02\x12\x86\x03"+
		"\x02\x02\x02\x14\x8A\x03\x02\x02\x02\x16\x8C\x03\x02\x02\x02\x18\x9D\x03"+
		"\x02\x02\x02\x1A\x9F\x03\x02\x02\x02\x1C\xB3\x03\x02\x02\x02\x1E\xD0\x03"+
		"\x02\x02\x02 \xD2\x03\x02\x02\x02\"\xFC\x03\x02\x02\x02$\u0103\x03\x02"+
		"\x02\x02&\u0105\x03\x02\x02\x02(\u0113\x03\x02\x02\x02*\u0151\x03\x02"+
		"\x02\x02,\u0153\x03\x02\x02\x02.\u0159\x03\x02\x02\x020\u0164\x03\x02"+
		"\x02\x022\u0170\x03\x02\x02\x024\u0180\x03\x02\x02\x026\u0182\x03\x02"+
		"\x02\x028\u0185\x03\x02\x02\x02:>\x05\x0E\b\x02;=\x05\x12\n\x02<;\x03"+
		"\x02\x02\x02=@\x03\x02\x02\x02><\x03\x02\x02\x02>?\x03\x02\x02\x02?\x03"+
		"\x03\x02\x02\x02@>\x03\x02\x02\x02AB\b\x03\x01\x02BI\x07 \x02\x02CI\x07"+
		"7\x02\x02DI\x07?\x02\x02EI\x07L\x02\x02FI\x07P\x02\x02GI\x05\n\x06\x02"+
		"HA\x03\x02\x02\x02HC\x03\x02\x02\x02HD\x03\x02\x02\x02HE\x03\x02\x02\x02"+
		"HF\x03\x02\x02\x02HG\x03\x02\x02\x02IN\x03\x02\x02\x02JK\f\x03\x02\x02"+
		"KM\x07U\x02\x02LJ\x03\x02\x02\x02MP\x03\x02\x02\x02NL\x03\x02\x02\x02"+
		"NO\x03\x02\x02\x02O\x05\x03\x02\x02\x02PN\x03\x02\x02\x02QW\t\x02\x02"+
		"\x02RW\x07R\x02\x02SW\x07S\x02\x02TW\x07T\x02\x02UW\x07D\x02\x02VQ\x03"+
		"\x02\x02\x02VR\x03\x02\x02\x02VS\x03\x02\x02\x02VT\x03\x02\x02\x02VU\x03"+
		"\x02\x02\x02W\x07\x03\x02\x02\x02X_\t\x02\x02\x02Y_\x07R\x02\x02Z_\x07"+
		"S\x02\x02[_\x07T\x02\x02\\_\x07D\x02\x02]_\x07V\x02\x02^X\x03\x02\x02"+
		"\x02^Y\x03\x02\x02\x02^Z\x03\x02\x02\x02^[\x03\x02\x02\x02^\\\x03\x02"+
		"\x02\x02^]\x03\x02\x02\x02_\t\x03\x02\x02\x02`e\x07V\x02\x02ab\x07\x03"+
		"\x02\x02bd\x07V\x02\x02ca\x03\x02\x02\x02dg\x03\x02\x02\x02ec\x03\x02"+
		"\x02\x02ef\x03\x02\x02\x02f\v\x03\x02\x02\x02ge\x03\x02\x02\x02hi\x05"+
		"\n\x06\x02ij\x07\x04\x02\x02jl\x03\x02\x02\x02kh\x03\x02\x02\x02lo\x03"+
		"\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02np\x03\x02\x02\x02om\x03"+
		"\x02\x02\x02pq\x07V\x02\x02q\r\x03\x02\x02\x02rs\x07H\x02\x02sv\x05\n"+
		"\x06\x02tu\x075\x02\x02uw\x05\n\x06\x02vt\x03\x02\x02\x02vw\x03\x02\x02"+
		"\x02w{\x03\x02\x02\x02xz\x05\x10\t\x02yx\x03\x02\x02\x02z}\x03\x02\x02"+
		"\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02|\x0F\x03\x02\x02\x02}{\x03\x02"+
		"\x02\x02~\x7F\t\x03\x02\x02\x7F\x11\x03\x02\x02\x02\x80\x87\x05\x1E\x10"+
		"\x02\x81\x87\x05\x14\v\x02\x82\x87\x05,\x17\x02\x83\x87\x05.\x18\x02\x84"+
		"\x87\x052\x1A\x02\x85\x87\x050\x19\x02\x86\x80\x03\x02\x02\x02\x86\x81"+
		"\x03\x02\x02\x02\x86\x82\x03\x02\x02\x02\x86\x83\x03\x02\x02\x02\x86\x84"+
		"\x03\x02\x02\x02\x86\x85\x03\x02\x02\x02\x87\x13\x03\x02\x02\x02\x88\x8B"+
		"\x05\x16\f\x02\x89\x8B\x05\x1A\x0E\x02\x8A\x88\x03\x02\x02\x02\x8A\x89"+
		"\x03\x02\x02\x02\x8B\x15\x03\x02\x02\x02\x8C\x8D\x05\x04\x03\x02\x8D\x8E"+
		"\x07F\x02\x02\x8E\x92\x05\f\x07\x02\x8F\x91\x05\x18\r\x02\x90\x8F\x03"+
		"\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03"+
		"\x02\x02\x02\x93\x98\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x95\x97\x05"+
		"\x1E\x10\x02\x96\x95\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03"+
		"\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9B\x03\x02\x02\x02\x9A\x98\x03"+
		"\x02\x02\x02\x9B\x9C\x070\x02\x02\x9C\x17\x03\x02\x02\x02\x9D\x9E\t\x04"+
		"\x02\x02\x9E\x19\x03\x02\x02\x02\x9F\xA0\x05\x04\x03\x02\xA0\xA1\x07F"+
		"\x02\x02\xA1\xAB\x05\f\x07\x02\xA2\xA3\x07\x05\x02\x02\xA3\xA4\x05\b\x05"+
		"\x02\xA4\xA5\x07\x1E\x02\x02\xA5\xAC\x03\x02\x02\x02\xA6\xA7\x07\x05\x02"+
		"\x02\xA7\xA9\x05\b\x05\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02\x02"+
		"\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAC\x07\x1D\x02\x02\xAB\xA2\x03\x02\x02"+
		"\x02\xAB\xA8\x03\x02\x02\x02\xAC\xB0\x03\x02\x02\x02\xAD\xAF\x05\x1C\x0F"+
		"\x02\xAE\xAD\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02"+
		"\x02\xB0\xB1\x03\x02\x02\x02\xB1\x1B\x03\x02\x02\x02\xB2\xB0\x03\x02\x02"+
		"\x02\xB3\xB4\t\x05\x02\x02\xB4\x1D\x03\x02\x02\x02\xB5\xB7\x05\x04\x03"+
		"\x02\xB6\xB5\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x03\x02\x02"+
		"\x02\xB8\xBC\x078\x02\x02\xB9\xBB\x05\"\x12\x02\xBA\xB9\x03\x02\x02\x02"+
		"\xBB\xBE\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02"+
		"\xBD\xC2\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC1\x05 \x11\x02"+
		"\xC0\xBF\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02"+
		"\xC2\xC3\x03\x02\x02\x02\xC3\xC6\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02"+
		"\xC5\xC7\x07-\x02\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02"+
		"\xC7\xD1\x03\x02\x02\x02\xC8\xCC\x074\x02\x02\xC9\xCB\x05\"\x12\x02\xCA"+
		"\xC9\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC"+
		"\xCD\x03\x02\x02\x02\xCD\xCF\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF"+
		"\xD1\x07,\x02\x02\xD0\xB6\x03\x02\x02\x02\xD0\xC8\x03\x02\x02\x02\xD1"+
		"\x1F\x03\x02\x02\x02\xD2\xD3\t\x06\x02\x02\xD3!\x03\x02\x02\x02\xD4\xFD"+
		"\x05$\x13\x02\xD5\xD6\x07<\x02\x02\xD6\xDA\x05$\x13\x02\xD7\xD9\x05\""+
		"\x12\x02\xD8\xD7\x03\x02\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA\xD8\x03\x02"+
		"\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC\xDA\x03\x02"+
		"\x02\x02\xDD\xDE\x07/\x02\x02\xDE\xFD\x03\x02\x02\x02\xDF\xE0\x07+\x02"+
		"\x02\xE0\xE4\x05$\x13\x02\xE1\xE3\x05\"\x12\x02\xE2\xE1\x03\x02\x02\x02"+
		"\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02"+
		"\xE5\xFD\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xEB\x07*\x02\x02"+
		"\xE8\xEA\x05\"\x12\x02\xE9\xE8\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02"+
		"\xEB\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xFD\x03\x02\x02\x02"+
		"\xED\xEB\x03\x02\x02\x02\xEE\xEF\x07Q\x02\x02\xEF\xF3\x05$\x13\x02\xF0"+
		"\xF2\x05\"\x12\x02\xF1\xF0\x03\x02\x02\x02\xF2\xF5\x03\x02\x02\x02\xF3"+
		"\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF6\x03\x02\x02\x02\xF5"+
		"\xF3\x03\x02\x02\x02\xF6\xF7\x073\x02\x02\xF7\xFD\x03\x02\x02\x02\xF8"+
		"\xFA\x07G\x02\x02\xF9\xFB\x05$\x13\x02\xFA\xF9\x03\x02\x02\x02\xFA\xFB"+
		"\x03\x02\x02\x02\xFB\xFD\x03\x02\x02\x02\xFC\xD4\x03\x02\x02\x02\xFC\xD5"+
		"\x03\x02\x02\x02\xFC\xDF\x03\x02\x02\x02\xFC\xE7\x03\x02\x02\x02\xFC\xEE"+
		"\x03\x02\x02\x02\xFC\xF8\x03\x02\x02\x02\xFD#\x03\x02\x02\x02\xFE\xFF"+
		"\x07\x06\x02\x02\xFF\u0100\x05(\x15\x02\u0100\u0101\x07\x07\x02\x02\u0101"+
		"\u0104\x03\x02\x02\x02\u0102\u0104\x05(\x15\x02\u0103\xFE\x03\x02\x02"+
		"\x02\u0103\u0102\x03\x02\x02\x02\u0104%\x03\x02\x02\x02\u0105\u010A\x05"+
		"(\x15\x02\u0106\u0107\x07\b\x02\x02\u0107\u0109\x05(\x15\x02\u0108\u0106"+
		"\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02"+
		"\u010A\u010B\x03\x02\x02\x02\u010B\'\x03\x02\x02\x02\u010C\u010A\x03\x02"+
		"\x02\x02\u010D\u010E\b\x15\x01\x02\u010E\u0114\x05*\x16\x02\u010F\u0110"+
		"\x07\t\x02\x02\u0110\u0114\x05(\x15\r\u0111\u0112\x07C\x02\x02\u0112\u0114"+
		"\x05(\x15\f\u0113\u010D\x03\x02\x02\x02\u0113\u010F\x03\x02\x02\x02\u0113"+
		"\u0111\x03\x02\x02\x02\u0114\u0143\x03\x02\x02\x02\u0115\u0116\f\v\x02"+
		"\x02\u0116\u0117\t\x07\x02\x02\u0117\u0142\x05(\x15\f\u0118\u0119\f\n"+
		"\x02\x02\u0119\u011A\t\b\x02\x02\u011A\u0142\x05(\x15\v\u011B\u011C\f"+
		"\t\x02\x02\u011C\u011D\t\t\x02\x02\u011D\u0142\x05(\x15\n\u011E\u011F"+
		"\f\x07\x02\x02\u011F\u0120\t\n\x02\x02\u0120\u0142\x05(\x15\b\u0121\u0122"+
		"\f\x06\x02\x02\u0122\u0123\x07\x15\x02\x02\u0123\u0142\x05(\x15\x07\u0124"+
		"\u0125\f\x05\x02\x02\u0125\u0126\x07\x16\x02\x02\u0126\u0142\x05(\x15"+
		"\x06\u0127\u0128\f\x04\x02\x02\u0128\u0129\t\v\x02\x02\u0129\u0142\x05"+
		"(\x15\x05\u012A\u012B\f\x12\x02\x02\u012B\u012C\x07\x04\x02\x02\u012C"+
		"\u0142\x07V\x02\x02\u012D\u012E\f\x11\x02\x02\u012E\u012F\x07\x04\x02"+
		"\x02\u012F\u0142\x07J\x02\x02\u0130\u0131\f\x10\x02\x02\u0131\u0132\x07"+
		"\x04\x02\x02\u0132\u0142\x07E\x02\x02\u0133\u0134\f\x0F\x02\x02\u0134"+
		"\u0142\x07U\x02\x02\u0135\u0136\f\x0E\x02\x02\u0136\u0138\x07\x06\x02"+
		"\x02\u0137\u0139\x05&\x14\x02\u0138\u0137\x03\x02\x02\x02\u0138\u0139"+
		"\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u0142\x07\x07\x02\x02"+
		"\u013B\u013C\f\b\x02\x02\u013C\u013D\t\f\x02\x02\u013D\u0142\x05\x04\x03"+
		"\x02\u013E\u013F\f\x03\x02\x02\u013F\u0140\x07\x04\x02\x02\u0140\u0142"+
		"\x07@\x02\x02\u0141\u0115\x03\x02\x02\x02\u0141\u0118\x03\x02\x02\x02"+
		"\u0141\u011B\x03\x02\x02\x02\u0141\u011E\x03\x02\x02\x02\u0141\u0121\x03"+
		"\x02\x02\x02\u0141\u0124\x03\x02\x02\x02\u0141\u0127\x03\x02\x02\x02\u0141"+
		"\u012A\x03\x02\x02\x02\u0141\u012D\x03\x02\x02\x02\u0141\u0130\x03\x02"+
		"\x02\x02\u0141\u0133\x03\x02\x02\x02\u0141\u0135\x03\x02\x02\x02\u0141"+
		"\u013B\x03\x02\x02\x02\u0141\u013E\x03\x02\x02\x02\u0142\u0145\x03\x02"+
		"\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144"+
		")\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0146\u0147\x07\x06\x02"+
		"\x02\u0147\u0148\x05(\x15\x02\u0148\u0149\x07\x07\x02\x02\u0149\u0152"+
		"\x03\x02\x02\x02\u014A\u0152\x07J\x02\x02\u014B\u0152\x07E\x02\x02\u014C"+
		"\u0152\x05\x06\x04\x02\u014D\u014F\x05\x04\x03\x02\u014E\u0150\x05\f\x07"+
		"\x02\u014F\u014E\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0152"+
		"\x03\x02\x02\x02\u0151\u0146\x03\x02\x02\x02\u0151\u014A\x03\x02\x02\x02"+
		"\u0151\u014B\x03\x02\x02\x02\u0151\u014C\x03\x02\x02\x02\u0151\u014D\x03"+
		"\x02\x02\x02\u0152+\x03\x02\x02\x02\u0153\u0154\x05\x04\x03\x02\u0154"+
		"\u0157\x05\f\x07\x02\u0155\u0156\x07\x05\x02\x02\u0156\u0158\x05\b\x05"+
		"\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158-\x03"+
		"\x02\x02\x02\u0159\u015A\x07M\x02\x02\u015A\u015E\x05\f\x07\x02\u015B"+
		"\u015D\x05,\x17\x02\u015C\u015B\x03\x02\x02\x02\u015D\u0160\x03\x02\x02"+
		"\x02\u015E\u015C\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0161"+
		"\x03\x02\x02\x02\u0160\u015E\x03\x02\x02\x02\u0161\u0162\x072\x02\x02"+
		"\u0162/\x03\x02\x02\x02\u0163\u0165\x07\x1D\x02\x02\u0164\u0163\x03\x02"+
		"\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166"+
		"\u0167\x07K\x02\x02\u0167\u016B\x05\f\x07\x02\u0168\u016A\x05\x12\n\x02"+
		"\u0169\u0168\x03\x02\x02\x02\u016A\u016D\x03\x02\x02\x02\u016B\u0169\x03"+
		"\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016E\x03\x02\x02\x02\u016D"+
		"\u016B\x03\x02\x02\x02\u016E\u016F\x071\x02\x02\u016F1\x03\x02\x02\x02"+
		"\u0170\u0171\x07:\x02\x02\u0171\u0175\x05\f\x07\x02\u0172\u0174\x054\x1B"+
		"\x02\u0173\u0172\x03\x02\x02\x02\u0174\u0177\x03\x02\x02\x02\u0175\u0173"+
		"\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u017B\x03\x02\x02\x02"+
		"\u0177\u0175\x03\x02\x02\x02\u0178\u017A\x05\x1A\x0E\x02\u0179\u0178\x03"+
		"\x02\x02\x02\u017A\u017D\x03\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B"+
		"\u017C\x03\x02\x02\x02\u017C\u017E\x03\x02\x02\x02\u017D\u017B\x03\x02"+
		"\x02\x02\u017E\u017F\x07.\x02\x02\u017F3\x03\x02\x02\x02\u0180\u0181\t"+
		"\r\x02\x02\u01815\x03\x02\x02\x02\u0182\u0183\x07&\x02\x02\u0183\u0184"+
		"\x05\f\x07\x02\u01847\x03\x02\x02\x02\u0185\u0186\x07=\x02\x02\u0186\u0187"+
		"\x05\f\x07\x02\u01879\x03\x02\x02\x02,>HNV^emv{\x86\x8A\x92\x98\xA8\xAB"+
		"\xB0\xB6\xBC\xC2\xC6\xCC\xD0\xDA\xE4\xEB\xF3\xFA\xFC\u0103\u010A\u0113"+
		"\u0138\u0141\u0143\u014F\u0151\u0157\u015E\u0164\u016B\u0175\u017B";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PapyrusParser.__ATN) {
			PapyrusParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PapyrusParser._serializedATN));
		}

		return PapyrusParser.__ATN;
	}

}

export class PapyrusFileContext extends ParserRuleContext {
	public scriptHeader(): ScriptHeaderContext {
		return this.getRuleContext(0, ScriptHeaderContext);
	}
	public blockDeclaration(): BlockDeclarationContext[];
	public blockDeclaration(i: number): BlockDeclarationContext;
	public blockDeclaration(i?: number): BlockDeclarationContext | BlockDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockDeclarationContext);
		} else {
			return this.getRuleContext(i, BlockDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_papyrusFile; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterPapyrusFile) listener.enterPapyrusFile(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitPapyrusFile) listener.exitPapyrusFile(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitPapyrusFile) return visitor.visitPapyrusFile(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeDefinitionContext extends ParserRuleContext {
	public K_BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_BOOLEAN, 0); }
	public K_FLOAT(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_FLOAT, 0); }
	public K_INTEGER(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_INTEGER, 0); }
	public K_STRING(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_STRING, 0); }
	public K_VAR(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_VAR, 0); }
	public namespace(): NamespaceContext | undefined {
		return this.tryGetRuleContext(0, NamespaceContext);
	}
	public typeDefinition(): TypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, TypeDefinitionContext);
	}
	public L_ARRAY(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.L_ARRAY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_typeDefinition; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterTypeDefinition) listener.enterTypeDefinition(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitTypeDefinition) listener.exitTypeDefinition(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitTypeDefinition) return visitor.visitTypeDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class LiteralDefinitionContext extends ParserRuleContext {
	public K_TRUE(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_TRUE, 0); }
	public K_FALSE(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_FALSE, 0); }
	public L_FLOAT(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.L_FLOAT, 0); }
	public L_INT(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.L_INT, 0); }
	public L_STRING(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.L_STRING, 0); }
	public K_NONE(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_NONE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_literalDefinition; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterLiteralDefinition) listener.enterLiteralDefinition(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitLiteralDefinition) listener.exitLiteralDefinition(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitLiteralDefinition) return visitor.visitLiteralDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class ValueDefinitionContext extends ParserRuleContext {
	public K_TRUE(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_TRUE, 0); }
	public K_FALSE(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_FALSE, 0); }
	public L_FLOAT(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.L_FLOAT, 0); }
	public L_INT(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.L_INT, 0); }
	public L_STRING(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.L_STRING, 0); }
	public K_NONE(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_NONE, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_valueDefinition; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterValueDefinition) listener.enterValueDefinition(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitValueDefinition) listener.exitValueDefinition(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitValueDefinition) return visitor.visitValueDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class NamespaceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PapyrusParser.IDENTIFIER);
		} else {
			return this.getToken(PapyrusParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_namespace; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterNamespace) listener.enterNamespace(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitNamespace) listener.exitNamespace(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitNamespace) return visitor.visitNamespace(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(PapyrusParser.IDENTIFIER, 0); }
	public namespace(): NamespaceContext[];
	public namespace(i: number): NamespaceContext;
	public namespace(i?: number): NamespaceContext | NamespaceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamespaceContext);
		} else {
			return this.getRuleContext(i, NamespaceContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_objectName; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterObjectName) listener.enterObjectName(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitObjectName) listener.exitObjectName(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitObjectName) return visitor.visitObjectName(this);
		else return visitor.visitChildren(this);
	}
}


export class ScriptHeaderContext extends ParserRuleContext {
	public K_SCRIPTNAME(): TerminalNode { return this.getToken(PapyrusParser.K_SCRIPTNAME, 0); }
	public namespace(): NamespaceContext[];
	public namespace(i: number): NamespaceContext;
	public namespace(i?: number): NamespaceContext | NamespaceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamespaceContext);
		} else {
			return this.getRuleContext(i, NamespaceContext);
		}
	}
	public K_EXTENDS(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_EXTENDS, 0); }
	public scriptFlags(): ScriptFlagsContext[];
	public scriptFlags(i: number): ScriptFlagsContext;
	public scriptFlags(i?: number): ScriptFlagsContext | ScriptFlagsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScriptFlagsContext);
		} else {
			return this.getRuleContext(i, ScriptFlagsContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_scriptHeader; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterScriptHeader) listener.enterScriptHeader(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitScriptHeader) listener.exitScriptHeader(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitScriptHeader) return visitor.visitScriptHeader(this);
		else return visitor.visitChildren(this);
	}
}


export class ScriptFlagsContext extends ParserRuleContext {
	public K_CONDITIONAL(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_CONDITIONAL, 0); }
	public K_CONST(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_CONST, 0); }
	public K_DEBUGONLY(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_DEBUGONLY, 0); }
	public K_BETAONLY(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_BETAONLY, 0); }
	public K_HIDDEN(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_HIDDEN, 0); }
	public K_NATIVE(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_NATIVE, 0); }
	public K_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_DEFAULT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_scriptFlags; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterScriptFlags) listener.enterScriptFlags(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitScriptFlags) listener.exitScriptFlags(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitScriptFlags) return visitor.visitScriptFlags(this);
		else return visitor.visitChildren(this);
	}
}


export class BlockDeclarationContext extends ParserRuleContext {
	public eventOrFunctionDeclaration(): EventOrFunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EventOrFunctionDeclarationContext);
	}
	public propertyDeclaration(): PropertyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PropertyDeclarationContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public structDeclaration(): StructDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StructDeclarationContext);
	}
	public groupDeclaration(): GroupDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GroupDeclarationContext);
	}
	public stateDeclaration(): StateDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StateDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_blockDeclaration; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterBlockDeclaration) listener.enterBlockDeclaration(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitBlockDeclaration) listener.exitBlockDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitBlockDeclaration) return visitor.visitBlockDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class PropertyDeclarationContext extends ParserRuleContext {
	public fullPropertyDeclaration(): FullPropertyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FullPropertyDeclarationContext);
	}
	public autoPropertyDeclaration(): AutoPropertyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AutoPropertyDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_propertyDeclaration; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterPropertyDeclaration) listener.enterPropertyDeclaration(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitPropertyDeclaration) listener.exitPropertyDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitPropertyDeclaration) return visitor.visitPropertyDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class FullPropertyDeclarationContext extends ParserRuleContext {
	public typeDefinition(): TypeDefinitionContext {
		return this.getRuleContext(0, TypeDefinitionContext);
	}
	public K_PROPERTY(): TerminalNode { return this.getToken(PapyrusParser.K_PROPERTY, 0); }
	public objectName(): ObjectNameContext {
		return this.getRuleContext(0, ObjectNameContext);
	}
	public K_ENDPROPERTY(): TerminalNode { return this.getToken(PapyrusParser.K_ENDPROPERTY, 0); }
	public fullPropertyFlags(): FullPropertyFlagsContext[];
	public fullPropertyFlags(i: number): FullPropertyFlagsContext;
	public fullPropertyFlags(i?: number): FullPropertyFlagsContext | FullPropertyFlagsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FullPropertyFlagsContext);
		} else {
			return this.getRuleContext(i, FullPropertyFlagsContext);
		}
	}
	public eventOrFunctionDeclaration(): EventOrFunctionDeclarationContext[];
	public eventOrFunctionDeclaration(i: number): EventOrFunctionDeclarationContext;
	public eventOrFunctionDeclaration(i?: number): EventOrFunctionDeclarationContext | EventOrFunctionDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventOrFunctionDeclarationContext);
		} else {
			return this.getRuleContext(i, EventOrFunctionDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_fullPropertyDeclaration; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterFullPropertyDeclaration) listener.enterFullPropertyDeclaration(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitFullPropertyDeclaration) listener.exitFullPropertyDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitFullPropertyDeclaration) return visitor.visitFullPropertyDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class FullPropertyFlagsContext extends ParserRuleContext {
	public K_HIDDEN(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_HIDDEN, 0); }
	public K_MANDATORY(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_MANDATORY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_fullPropertyFlags; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterFullPropertyFlags) listener.enterFullPropertyFlags(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitFullPropertyFlags) listener.exitFullPropertyFlags(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitFullPropertyFlags) return visitor.visitFullPropertyFlags(this);
		else return visitor.visitChildren(this);
	}
}


export class AutoPropertyDeclarationContext extends ParserRuleContext {
	public typeDefinition(): TypeDefinitionContext {
		return this.getRuleContext(0, TypeDefinitionContext);
	}
	public K_PROPERTY(): TerminalNode { return this.getToken(PapyrusParser.K_PROPERTY, 0); }
	public objectName(): ObjectNameContext {
		return this.getRuleContext(0, ObjectNameContext);
	}
	public valueDefinition(): ValueDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ValueDefinitionContext);
	}
	public K_AUTOREADONLY(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_AUTOREADONLY, 0); }
	public K_AUTO(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_AUTO, 0); }
	public autoPropertyFlags(): AutoPropertyFlagsContext[];
	public autoPropertyFlags(i: number): AutoPropertyFlagsContext;
	public autoPropertyFlags(i?: number): AutoPropertyFlagsContext | AutoPropertyFlagsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AutoPropertyFlagsContext);
		} else {
			return this.getRuleContext(i, AutoPropertyFlagsContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_autoPropertyDeclaration; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterAutoPropertyDeclaration) listener.enterAutoPropertyDeclaration(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitAutoPropertyDeclaration) listener.exitAutoPropertyDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitAutoPropertyDeclaration) return visitor.visitAutoPropertyDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class AutoPropertyFlagsContext extends ParserRuleContext {
	public K_CONDITIONAL(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_CONDITIONAL, 0); }
	public K_CONST(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_CONST, 0); }
	public K_HIDDEN(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_HIDDEN, 0); }
	public K_MANDATORY(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_MANDATORY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_autoPropertyFlags; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterAutoPropertyFlags) listener.enterAutoPropertyFlags(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitAutoPropertyFlags) listener.exitAutoPropertyFlags(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitAutoPropertyFlags) return visitor.visitAutoPropertyFlags(this);
		else return visitor.visitChildren(this);
	}
}


export class EventOrFunctionDeclarationContext extends ParserRuleContext {
	public K_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_FUNCTION, 0); }
	public typeDefinition(): TypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, TypeDefinitionContext);
	}
	public functionBlock(): FunctionBlockContext[];
	public functionBlock(i: number): FunctionBlockContext;
	public functionBlock(i?: number): FunctionBlockContext | FunctionBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionBlockContext);
		} else {
			return this.getRuleContext(i, FunctionBlockContext);
		}
	}
	public functionFlags(): FunctionFlagsContext[];
	public functionFlags(i: number): FunctionFlagsContext;
	public functionFlags(i?: number): FunctionFlagsContext | FunctionFlagsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionFlagsContext);
		} else {
			return this.getRuleContext(i, FunctionFlagsContext);
		}
	}
	public K_ENDFUNCTION(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_ENDFUNCTION, 0); }
	public K_EVENT(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_EVENT, 0); }
	public K_ENDEVENT(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_ENDEVENT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_eventOrFunctionDeclaration; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterEventOrFunctionDeclaration) listener.enterEventOrFunctionDeclaration(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitEventOrFunctionDeclaration) listener.exitEventOrFunctionDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitEventOrFunctionDeclaration) return visitor.visitEventOrFunctionDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionFlagsContext extends ParserRuleContext {
	public K_HIDDEN(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_HIDDEN, 0); }
	public K_NATIVE(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_NATIVE, 0); }
	public K_GLOBAL(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_GLOBAL, 0); }
	public K_DEBUGONLY(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_DEBUGONLY, 0); }
	public K_BETAONLY(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_BETAONLY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_functionFlags; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterFunctionFlags) listener.enterFunctionFlags(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitFunctionFlags) listener.exitFunctionFlags(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitFunctionFlags) return visitor.visitFunctionFlags(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionBlockContext extends ParserRuleContext {
	public expressionBlock(): ExpressionBlockContext | undefined {
		return this.tryGetRuleContext(0, ExpressionBlockContext);
	}
	public K_IF(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_IF, 0); }
	public K_ENDIF(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_ENDIF, 0); }
	public functionBlock(): FunctionBlockContext[];
	public functionBlock(i: number): FunctionBlockContext;
	public functionBlock(i?: number): FunctionBlockContext | FunctionBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionBlockContext);
		} else {
			return this.getRuleContext(i, FunctionBlockContext);
		}
	}
	public K_ELSEIF(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_ELSEIF, 0); }
	public K_ELSE(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_ELSE, 0); }
	public K_WHILE(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_WHILE, 0); }
	public K_ENDWHILE(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_ENDWHILE, 0); }
	public K_RETURN(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_RETURN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_functionBlock; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterFunctionBlock) listener.enterFunctionBlock(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitFunctionBlock) listener.exitFunctionBlock(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitFunctionBlock) return visitor.visitFunctionBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionBlockContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_expressionBlock; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterExpressionBlock) listener.enterExpressionBlock(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitExpressionBlock) listener.exitExpressionBlock(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitExpressionBlock) return visitor.visitExpressionBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_expressionList; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterExpressionList) listener.enterExpressionList(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitExpressionList) listener.exitExpressionList(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitExpressionList) return visitor.visitExpressionList(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionContext extends ParserRuleContext {
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.IDENTIFIER, 0); }
	public K_SELF(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_SELF, 0); }
	public K_PARENT(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_PARENT, 0); }
	public L_ARRAY(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.L_ARRAY, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public K_NEW(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_NEW, 0); }
	public typeDefinition(): TypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, TypeDefinitionContext);
	}
	public K_AS(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_AS, 0); }
	public K_IS(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_IS, 0); }
	public K_LENGTH(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_LENGTH, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_expression; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterExpression) listener.enterExpression(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitExpression) listener.exitExpression(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitExpression) return visitor.visitExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class PrimaryContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public K_SELF(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_SELF, 0); }
	public K_PARENT(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_PARENT, 0); }
	public literalDefinition(): LiteralDefinitionContext | undefined {
		return this.tryGetRuleContext(0, LiteralDefinitionContext);
	}
	public typeDefinition(): TypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, TypeDefinitionContext);
	}
	public objectName(): ObjectNameContext | undefined {
		return this.tryGetRuleContext(0, ObjectNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_primary; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterPrimary) listener.enterPrimary(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitPrimary) listener.exitPrimary(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitPrimary) return visitor.visitPrimary(this);
		else return visitor.visitChildren(this);
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public typeDefinition(): TypeDefinitionContext {
		return this.getRuleContext(0, TypeDefinitionContext);
	}
	public objectName(): ObjectNameContext {
		return this.getRuleContext(0, ObjectNameContext);
	}
	public valueDefinition(): ValueDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ValueDefinitionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_variableDeclaration; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterVariableDeclaration) listener.enterVariableDeclaration(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitVariableDeclaration) listener.exitVariableDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) return visitor.visitVariableDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class StructDeclarationContext extends ParserRuleContext {
	public K_STRUCT(): TerminalNode { return this.getToken(PapyrusParser.K_STRUCT, 0); }
	public objectName(): ObjectNameContext {
		return this.getRuleContext(0, ObjectNameContext);
	}
	public K_ENDSTRUCT(): TerminalNode { return this.getToken(PapyrusParser.K_ENDSTRUCT, 0); }
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_structDeclaration; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterStructDeclaration) listener.enterStructDeclaration(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitStructDeclaration) listener.exitStructDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitStructDeclaration) return visitor.visitStructDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class StateDeclarationContext extends ParserRuleContext {
	public K_STATE(): TerminalNode { return this.getToken(PapyrusParser.K_STATE, 0); }
	public objectName(): ObjectNameContext {
		return this.getRuleContext(0, ObjectNameContext);
	}
	public K_ENDSTATE(): TerminalNode { return this.getToken(PapyrusParser.K_ENDSTATE, 0); }
	public K_AUTO(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_AUTO, 0); }
	public blockDeclaration(): BlockDeclarationContext[];
	public blockDeclaration(i: number): BlockDeclarationContext;
	public blockDeclaration(i?: number): BlockDeclarationContext | BlockDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockDeclarationContext);
		} else {
			return this.getRuleContext(i, BlockDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_stateDeclaration; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterStateDeclaration) listener.enterStateDeclaration(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitStateDeclaration) listener.exitStateDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitStateDeclaration) return visitor.visitStateDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class GroupDeclarationContext extends ParserRuleContext {
	public K_GROUP(): TerminalNode { return this.getToken(PapyrusParser.K_GROUP, 0); }
	public objectName(): ObjectNameContext {
		return this.getRuleContext(0, ObjectNameContext);
	}
	public K_ENDGROUP(): TerminalNode { return this.getToken(PapyrusParser.K_ENDGROUP, 0); }
	public groupFlags(): GroupFlagsContext[];
	public groupFlags(i: number): GroupFlagsContext;
	public groupFlags(i?: number): GroupFlagsContext | GroupFlagsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupFlagsContext);
		} else {
			return this.getRuleContext(i, GroupFlagsContext);
		}
	}
	public autoPropertyDeclaration(): AutoPropertyDeclarationContext[];
	public autoPropertyDeclaration(i: number): AutoPropertyDeclarationContext;
	public autoPropertyDeclaration(i?: number): AutoPropertyDeclarationContext | AutoPropertyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AutoPropertyDeclarationContext);
		} else {
			return this.getRuleContext(i, AutoPropertyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_groupDeclaration; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterGroupDeclaration) listener.enterGroupDeclaration(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitGroupDeclaration) listener.exitGroupDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitGroupDeclaration) return visitor.visitGroupDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class GroupFlagsContext extends ParserRuleContext {
	public K_COLLAPSED(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_COLLAPSED, 0); }
	public K_COLLAPSEDONBASE(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_COLLAPSEDONBASE, 0); }
	public K_COLLAPSEDONREF(): TerminalNode | undefined { return this.tryGetToken(PapyrusParser.K_COLLAPSEDONREF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_groupFlags; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterGroupFlags) listener.enterGroupFlags(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitGroupFlags) listener.exitGroupFlags(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitGroupFlags) return visitor.visitGroupFlags(this);
		else return visitor.visitChildren(this);
	}
}


export class CustomEventDeclarationContext extends ParserRuleContext {
	public K_CUSTOMEVENT(): TerminalNode { return this.getToken(PapyrusParser.K_CUSTOMEVENT, 0); }
	public objectName(): ObjectNameContext {
		return this.getRuleContext(0, ObjectNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_customEventDeclaration; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterCustomEventDeclaration) listener.enterCustomEventDeclaration(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitCustomEventDeclaration) listener.exitCustomEventDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitCustomEventDeclaration) return visitor.visitCustomEventDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public K_IMPORT(): TerminalNode { return this.getToken(PapyrusParser.K_IMPORT, 0); }
	public objectName(): ObjectNameContext {
		return this.getRuleContext(0, ObjectNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return PapyrusParser.RULE_importDeclaration; }
	@Override
	public enterRule(listener: PapyrusListener): void {
		if (listener.enterImportDeclaration) listener.enterImportDeclaration(this);
	}
	@Override
	public exitRule(listener: PapyrusListener): void {
		if (listener.exitImportDeclaration) listener.exitImportDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: PapyrusVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) return visitor.visitImportDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


