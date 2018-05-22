grammar Papyrus;

papyrusFile
    :   scriptHeader blockDeclaration*
    ;

typeDefinition
    :   K_BOOLEAN
    |   K_FLOAT
    |   K_INTEGER
    |   K_STRING
    |   K_VAR
    |   namespace
    |   typeDefinition L_ARRAY
    |   K_CUSTOMEVENTNAME // Used by ScriptObject.SendCustomEvent
    ;

literalDefinition
    :   (K_TRUE | K_FALSE)
    |   L_FLOAT
    |   L_INT
    |   L_STRING
    |   K_NONE
    ;

valueDefinition
    :   (K_TRUE | K_FALSE)
    |   L_FLOAT
    |   L_INT
    |   L_STRING
    |   K_NONE
    |   IDENTIFIER
    ;

namespace
    :   IDENTIFIER (':' IDENTIFIER)*
    ;

objectName
    : (namespace '.')* IDENTIFIER
    ;

/** File */
scriptHeader
    :   K_SCRIPTNAME namespace (K_EXTENDS namespace)? scriptFlags*
    ;

scriptFlags
    :   K_CONDITIONAL
    |   K_CONST
    |   K_DEBUGONLY
    |   K_BETAONLY
    |   K_HIDDEN
    |   K_NATIVE
    |   K_DEFAULT
    ;

blockDeclaration
    :   eventOrFunctionDeclaration
    |   propertyDeclaration
    |   variableDeclaration
    |   structDeclaration
    |   groupDeclaration
    |   stateDeclaration
    |   importDeclaration
    |   customEventDeclaration
    ;

/** Property */
propertyDeclaration
    :   fullPropertyDeclaration
    |   autoPropertyDeclaration
    ;

fullPropertyDeclaration
    :   typeDefinition K_PROPERTY objectName fullPropertyFlags* eventOrFunctionDeclaration* K_ENDPROPERTY
    ;

fullPropertyFlags
    :   K_HIDDEN
    |   K_MANDATORY
    ;

autoPropertyDeclaration
    : typeDefinition K_PROPERTY objectName ('=' valueDefinition K_AUTOREADONLY | ('=' valueDefinition)? K_AUTO) autoPropertyFlags*
    ;

autoPropertyFlags
    :   K_CONDITIONAL
    |   K_CONST
    |   K_HIDDEN
    |   K_MANDATORY
    ;

/** Function */
eventOrFunctionDeclaration
    :   typeDefinition? K_FUNCTION functionBlock* functionFlags* K_ENDFUNCTION?
    |   K_EVENT functionBlock* K_ENDEVENT
    ;

functionFlags
    :   K_HIDDEN
    |   K_NATIVE
    |   K_GLOBAL
    |   K_DEBUGONLY
    |   K_BETAONLY
    ;

functionBlock
    : expressionBlock
    | K_IF expressionBlock functionBlock* K_ENDIF
    | K_ELSEIF expressionBlock functionBlock*
    | K_ELSE functionBlock*
    | K_WHILE expressionBlock functionBlock* K_ENDWHILE
    | K_RETURN expressionBlock?
    ;

expressionBlock
    : '(' expression ')'
    | expression
    ;

expressionList
    : expression (',' expression)*
    ;

expression
    : primary
    | expression '.' IDENTIFIER
    | expression '.' K_SELF
    | expression '.' K_PARENT
    | expression L_ARRAY
    | expression '(' expressionList? ')'
    | '!' expression
    | K_NEW expression
    | expression ('*' | '/' | '%') expression
    | expression ('+' | '-') expression
    | expression ('<=' | '>=' | '>' | '<') expression
    | expression (K_AS | K_IS) typeDefinition
    | expression ('==' | '!=') expression
    | expression '&&' expression
    | expression '||' expression
    | expression ('=' | '+=' | '-=' | '*=' | '/=' | '%=') expression
    | expression '.' K_LENGTH // Special handling for Array.Length
    ;

primary
    : '(' expression ')'
    | K_SELF
    | K_PARENT
    | literalDefinition
    | typeDefinition objectName?
    ;

/** Variables */
variableDeclaration
    :   typeDefinition objectName ('=' valueDefinition)?
    ;

/** Struct */
structDeclaration
    :   K_STRUCT objectName variableDeclaration* K_ENDSTRUCT
    ;

/** State */
stateDeclaration
    :   K_AUTO? K_STATE objectName blockDeclaration* K_ENDSTATE
    ;

/** Group */
groupDeclaration
    :   K_GROUP objectName groupFlags* autoPropertyDeclaration* K_ENDGROUP
    ;

groupFlags
    : K_COLLAPSED
    | K_COLLAPSEDONBASE
    | K_COLLAPSEDONREF
    ;

/** Custom Events */
customEventDeclaration
    : K_CUSTOMEVENT objectName
    ;

/** Import */
importDeclaration
    : K_IMPORT objectName
    ;

/** Keywords */
K_AS
   : A S
   ;

K_AUTO
   : A U T O
   ;

K_AUTOREADONLY
   : A U T O R E A D O N L Y
   ;

K_BETAONLY
   : B E T A O N L Y
   ;

K_BOOLEAN
   : B O O L
   ;

K_COLLAPSED
   : C O L L A P S E D
   ;

K_COLLAPSEDONBASE
   : C O L L A P S E D O N B A S E
   ;

K_COLLAPSEDONREF
   : C O L L A P S E D O N R E F
   ;

K_CONDITIONAL
   : C O N D I T I O N A L
   ;

K_CONST
   : C O N S T
   ;

K_CUSTOMEVENT
   : C U S T O M E V E N T
   ;

K_CUSTOMEVENTNAME
   : C U S T O M E V E N T N A M E
   ;

K_DEBUGONLY
   : D E B U G O N L Y
   ;

K_DEFAULT
   : D E F A U L T
   ;

K_ELSE
   : E L S E
   ;

K_ELSEIF
   : E L S E I F
   ;

K_ENDEVENT
   : E N D E V E N T
   ;

K_ENDFUNCTION
   : E N D F U N C T I O N
   ;

K_ENDGROUP
   : E N D G R O U P
   ;

K_ENDIF
   : E N D I F
   ;

K_ENDPROPERTY
   : E N D P R O P E R T Y
   ;

K_ENDSTATE
   : E N D S T A T E
   ;

K_ENDSTRUCT
   : E N D S T R U C T
   ;

K_ENDWHILE
   : E N D W H I L E
   ;

K_EVENT
   : E V E N T
   ;

K_EXTENDS
   : E X T E N D S
   ;

K_FALSE
   : F A L S E
   ;

K_FLOAT
   : F L O A T
   ;

K_FUNCTION
   : F U N C T I O N
   ;

K_GLOBAL
   : G L O B A L -> skip
   ; // "temp" fix for certain functions completely destroying the system

K_GROUP
   : G R O U P
   ;

K_HIDDEN
   : H I D D E N
   ;

K_IF
   : I F
   ;

K_IMPORT
   : I M P O R T
   ;

K_IS
   : I S
   ;

K_INTEGER
   : I N T
   ;

K_LENGTH
   : L E N G T H
   ;

K_MANDATORY
   : M A N D A T O R Y
   ;

K_NATIVE
   : N A T I V E
   ;

K_NEW
   : N E W
   ;

K_NONE
   : N O N E
   ;

K_PARENT
   : P A R E N T
   ;

K_PROPERTY
   : P R O P E R T Y
   ;

K_RETURN
   : R E T U R N
   ;

K_SCRIPTNAME
   : S C R I P T N A M E
   ;

K_SCRIPTEVENTNAME
   : S C R I P T E V E N T N A M E
   ;

K_SELF
   : S E L F
   ;

K_STATE
   : S T A T E
   ;

K_STRING
   : S T R I N G
   ;

K_STRUCT
   : S T R U C T
   ;

K_STRUCTVARNAME
   : S T R U C T V A R N A M E
   ;

K_TRUE
   : T R U E
   ;

K_VAR
   : V A R
   ;

K_WHILE
   : W H I L E
   ;

/** Literal Definitions */
L_FLOAT
    :   '-'? [0-9]+ '.' [0-9]+
    ;

L_INT
    :   '-'? [0-9]+
    |   '0' X [a-fA-F0-9]+
    ;

L_STRING
    :   '"' ( '""' | ~["\r\n] )* '"'
    ;

L_ARRAY
    :   '[' L_INT? ']'
    ;

/** Basic Rules */
IDENTIFIER
    :   [a-zA-Z_][a-zA-Z0-9_]*
    ;

COMMENT_DOC
    :   '{' .*? '}' -> skip
    ;

COMMENT_MULTI
    :   ';/' .*? '/;' -> skip
    ;

COMMENT_SINGLE
    :   ';' ~[\r\n]* -> skip
    ;

/** Hidden */
WHITESPACE
    :   [ \t\r\n] -> skip
    ;

LINETERMINATOR
    :   '\\' '\r'? '\n' -> channel(HIDDEN)
    ;


/** Fragments */
fragment A
   : ('a' | 'A')
   ;


fragment B
   : ('b' | 'B')
   ;


fragment C
   : ('c' | 'C')
   ;


fragment D
   : ('d' | 'D')
   ;


fragment E
   : ('e' | 'E')
   ;


fragment F
   : ('f' | 'F')
   ;


fragment G
   : ('g' | 'G')
   ;


fragment H
   : ('h' | 'H')
   ;


fragment I
   : ('i' | 'I')
   ;


fragment J
   : ('j' | 'J')
   ;


fragment K
   : ('k' | 'K')
   ;


fragment L
   : ('l' | 'L')
   ;


fragment M
   : ('m' | 'M')
   ;


fragment N
   : ('n' | 'N')
   ;


fragment O
   : ('o' | 'O')
   ;


fragment P
   : ('p' | 'P')
   ;


fragment Q
   : ('q' | 'Q')
   ;


fragment R
   : ('r' | 'R')
   ;


fragment S
   : ('s' | 'S')
   ;


fragment T
   : ('t' | 'T')
   ;


fragment U
   : ('u' | 'U')
   ;


fragment V
   : ('v' | 'V')
   ;


fragment W
   : ('w' | 'W')
   ;


fragment X
   : ('x' | 'X')
   ;


fragment Y
   : ('y' | 'Y')
   ;


fragment Z
   : ('z' | 'Z')
   ;
