// Generated from ./src/Parser/Papyrus.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PapyrusParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PapyrusVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PapyrusParser.papyrusFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPapyrusFile?: (ctx: PapyrusFileContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.typeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDefinition?: (ctx: TypeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.literalDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralDefinition?: (ctx: LiteralDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.valueDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueDefinition?: (ctx: ValueDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.namespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespace?: (ctx: NamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.objectName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectName?: (ctx: ObjectNameContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.scriptHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScriptHeader?: (ctx: ScriptHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.scriptFlags`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScriptFlags?: (ctx: ScriptFlagsContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.blockDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockDeclaration?: (ctx: BlockDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.fullPropertyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullPropertyDeclaration?: (ctx: FullPropertyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.fullPropertyFlags`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullPropertyFlags?: (ctx: FullPropertyFlagsContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.autoPropertyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAutoPropertyDeclaration?: (ctx: AutoPropertyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.autoPropertyFlags`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAutoPropertyFlags?: (ctx: AutoPropertyFlagsContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.eventOrFunctionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventOrFunctionDeclaration?: (ctx: EventOrFunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.functionFlags`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionFlags?: (ctx: FunctionFlagsContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.functionBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBlock?: (ctx: FunctionBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.expressionBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionBlock?: (ctx: ExpressionBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.structDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDeclaration?: (ctx: StructDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.stateDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateDeclaration?: (ctx: StateDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.groupDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupDeclaration?: (ctx: GroupDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.groupFlags`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupFlags?: (ctx: GroupFlagsContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.customEventDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCustomEventDeclaration?: (ctx: CustomEventDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PapyrusParser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;
}

