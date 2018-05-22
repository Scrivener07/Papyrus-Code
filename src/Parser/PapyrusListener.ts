// Generated from ./src/Parser/Papyrus.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { PapyrusFileContext } from './PapyrusParser';
import { TypeDefinitionContext } from './PapyrusParser';
import { LiteralDefinitionContext } from './PapyrusParser';
import { ValueDefinitionContext } from './PapyrusParser';
import { NamespaceContext } from './PapyrusParser';
import { ObjectNameContext } from './PapyrusParser';
import { ScriptHeaderContext } from './PapyrusParser';
import { ScriptFlagsContext } from './PapyrusParser';
import { BlockDeclarationContext } from './PapyrusParser';
import { PropertyDeclarationContext } from './PapyrusParser';
import { FullPropertyDeclarationContext } from './PapyrusParser';
import { FullPropertyFlagsContext } from './PapyrusParser';
import { AutoPropertyDeclarationContext } from './PapyrusParser';
import { AutoPropertyFlagsContext } from './PapyrusParser';
import { EventOrFunctionDeclarationContext } from './PapyrusParser';
import { FunctionFlagsContext } from './PapyrusParser';
import { FunctionBlockContext } from './PapyrusParser';
import { ExpressionBlockContext } from './PapyrusParser';
import { ExpressionListContext } from './PapyrusParser';
import { ExpressionContext } from './PapyrusParser';
import { PrimaryContext } from './PapyrusParser';
import { VariableDeclarationContext } from './PapyrusParser';
import { StructDeclarationContext } from './PapyrusParser';
import { StateDeclarationContext } from './PapyrusParser';
import { GroupDeclarationContext } from './PapyrusParser';
import { GroupFlagsContext } from './PapyrusParser';
import { CustomEventDeclarationContext } from './PapyrusParser';
import { ImportDeclarationContext } from './PapyrusParser';


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PapyrusParser`.
 */
export interface PapyrusListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PapyrusParser.papyrusFile`.
	 * @param ctx the parse tree
	 */
	enterPapyrusFile?: (ctx: PapyrusFileContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.papyrusFile`.
	 * @param ctx the parse tree
	 */
	exitPapyrusFile?: (ctx: PapyrusFileContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.typeDefinition`.
	 * @param ctx the parse tree
	 */
	enterTypeDefinition?: (ctx: TypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.typeDefinition`.
	 * @param ctx the parse tree
	 */
	exitTypeDefinition?: (ctx: TypeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.literalDefinition`.
	 * @param ctx the parse tree
	 */
	enterLiteralDefinition?: (ctx: LiteralDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.literalDefinition`.
	 * @param ctx the parse tree
	 */
	exitLiteralDefinition?: (ctx: LiteralDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.valueDefinition`.
	 * @param ctx the parse tree
	 */
	enterValueDefinition?: (ctx: ValueDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.valueDefinition`.
	 * @param ctx the parse tree
	 */
	exitValueDefinition?: (ctx: ValueDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.namespace`.
	 * @param ctx the parse tree
	 */
	enterNamespace?: (ctx: NamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.namespace`.
	 * @param ctx the parse tree
	 */
	exitNamespace?: (ctx: NamespaceContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.objectName`.
	 * @param ctx the parse tree
	 */
	enterObjectName?: (ctx: ObjectNameContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.objectName`.
	 * @param ctx the parse tree
	 */
	exitObjectName?: (ctx: ObjectNameContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.scriptHeader`.
	 * @param ctx the parse tree
	 */
	enterScriptHeader?: (ctx: ScriptHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.scriptHeader`.
	 * @param ctx the parse tree
	 */
	exitScriptHeader?: (ctx: ScriptHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.scriptFlags`.
	 * @param ctx the parse tree
	 */
	enterScriptFlags?: (ctx: ScriptFlagsContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.scriptFlags`.
	 * @param ctx the parse tree
	 */
	exitScriptFlags?: (ctx: ScriptFlagsContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.blockDeclaration`.
	 * @param ctx the parse tree
	 */
	enterBlockDeclaration?: (ctx: BlockDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.blockDeclaration`.
	 * @param ctx the parse tree
	 */
	exitBlockDeclaration?: (ctx: BlockDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.fullPropertyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFullPropertyDeclaration?: (ctx: FullPropertyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.fullPropertyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFullPropertyDeclaration?: (ctx: FullPropertyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.fullPropertyFlags`.
	 * @param ctx the parse tree
	 */
	enterFullPropertyFlags?: (ctx: FullPropertyFlagsContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.fullPropertyFlags`.
	 * @param ctx the parse tree
	 */
	exitFullPropertyFlags?: (ctx: FullPropertyFlagsContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.autoPropertyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAutoPropertyDeclaration?: (ctx: AutoPropertyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.autoPropertyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAutoPropertyDeclaration?: (ctx: AutoPropertyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.autoPropertyFlags`.
	 * @param ctx the parse tree
	 */
	enterAutoPropertyFlags?: (ctx: AutoPropertyFlagsContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.autoPropertyFlags`.
	 * @param ctx the parse tree
	 */
	exitAutoPropertyFlags?: (ctx: AutoPropertyFlagsContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.eventOrFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEventOrFunctionDeclaration?: (ctx: EventOrFunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.eventOrFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEventOrFunctionDeclaration?: (ctx: EventOrFunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.functionFlags`.
	 * @param ctx the parse tree
	 */
	enterFunctionFlags?: (ctx: FunctionFlagsContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.functionFlags`.
	 * @param ctx the parse tree
	 */
	exitFunctionFlags?: (ctx: FunctionFlagsContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.functionBlock`.
	 * @param ctx the parse tree
	 */
	enterFunctionBlock?: (ctx: FunctionBlockContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.functionBlock`.
	 * @param ctx the parse tree
	 */
	exitFunctionBlock?: (ctx: FunctionBlockContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.expressionBlock`.
	 * @param ctx the parse tree
	 */
	enterExpressionBlock?: (ctx: ExpressionBlockContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.expressionBlock`.
	 * @param ctx the parse tree
	 */
	exitExpressionBlock?: (ctx: ExpressionBlockContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.structDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStructDeclaration?: (ctx: StructDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.structDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStructDeclaration?: (ctx: StructDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.stateDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStateDeclaration?: (ctx: StateDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.stateDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStateDeclaration?: (ctx: StateDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.groupDeclaration`.
	 * @param ctx the parse tree
	 */
	enterGroupDeclaration?: (ctx: GroupDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.groupDeclaration`.
	 * @param ctx the parse tree
	 */
	exitGroupDeclaration?: (ctx: GroupDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.groupFlags`.
	 * @param ctx the parse tree
	 */
	enterGroupFlags?: (ctx: GroupFlagsContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.groupFlags`.
	 * @param ctx the parse tree
	 */
	exitGroupFlags?: (ctx: GroupFlagsContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.customEventDeclaration`.
	 * @param ctx the parse tree
	 */
	enterCustomEventDeclaration?: (ctx: CustomEventDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.customEventDeclaration`.
	 * @param ctx the parse tree
	 */
	exitCustomEventDeclaration?: (ctx: CustomEventDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PapyrusParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PapyrusParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;
}

