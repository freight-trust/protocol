   interface TokenDefinition {
        /**
         * @instance
         * @public
         * @readonly
         * @memberof TokenDefinition
         * @type RegexMatcher
         */
        Matcher: RegexMatcher | null;
        /**
         * @instance
         * @public
         * @readonly
         * @memberof TokenDefinition
         * @type System.Object
         */
        Token: any | null;
    }
    interface TokenDefinitionFunc extends Function {
        prototype: TokenDefinition;
        /**
         * @instance
         * @public
         * @this TokenDefinition
         * @memberof TokenDefinition
         * @param   {string}           regex    
         * @param   {System.Object}    token
         * @return  {void}
         */
        new (regex: string | null, token: any | null): TokenDefinition;
    }
    declare var TokenDefinition: TokenDefinitionFunc;