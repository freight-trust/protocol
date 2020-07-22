  interface Tokens {
    }
    interface TokensFunc extends Function {
        prototype: Tokens;
        new (): Tokens;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        COMMA: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        SEMICOLON: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        SPACE: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        EQUAL: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        EQUALS: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        END: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        IFSTATEMENT: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        ELSEIFSTATEMENT: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        IF: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        ELSEIF: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        ELSE: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        NULL: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        SYMBOL: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        SEGPOS: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        ELEMPOS: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        STRINGLIST: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        INTEGERINDEXLIST: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        INTEGERLIST: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        INDEXER: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        INT: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        FLOAT: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        CONDITION: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        GREATERTHAN: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        GREATERTHANOREQUALTO: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        LESSTHAN: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        LESSTHANOREQUALTO: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        NOTEQUAL: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        NOTEQUAL_CASE_INSENSITIVE: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        EQUAL_CASE_INSENSITIVE: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        CONTAINS_CASE_INSENSITIVE: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        NOTCONTAINS_CASE_INSENSITIVE: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        STARTSWITH_CASE_INSENSITIVE: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        NOTSTARTSWITH_CASE_INSENSITIVE: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        ENDSWITH_CASE_INSENSITIVE: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        NOTENDSWITH_CASE_INSENSITIVE: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        CONTAINS: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        NOTCONTAINS: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        STARTSWITH: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        NOTSTARTSWITH: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        ENDSWITH: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        NOTENDSWITH: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        LENGTHEQUAL: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        LENGTHNOTEQUAL: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        LENGTHLESSTHAN: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        LENGTHGREATERTHAN: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        AND: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        OR: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        LEFT: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        LEFTBRACKET: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        RIGHT: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        RIGHTBRACKET: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        DOT: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        THEN: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        LOCALCODE: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        ERROR: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        USAGE: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        ELEMENTLIST: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        REQUIRED: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        NOTUSED: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        OPTIONAL: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        RECOMMENDED: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        NOTRECOMMENDED: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        DEFAULT: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        SegmentNotUsed: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        SegmentRecommended: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        SegmentMissing: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        SegmentNotRecommended: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        ElementHasWrongValue: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        ElementNotUsed: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        ElementRecommended: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        ElementNotRecommended: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        ElementMissing: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        CompositeElementHasWrongValue: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        CompositeElementNotUsed: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        CompositeElementRecommended: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        CompositeElementNotRecommended: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        CompositeElementMissing: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        STRING: TokenDefinition | null;
        /**
         * @static
         * @public
         * @memberof Tokens
         * @type TokenDefinition
         */
        CODECONDITION: TokenDefinition | null;
    }
    declare var Tokens: TokensFunc;