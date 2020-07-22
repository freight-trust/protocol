 interface SemanticsProcessor {
    }
    interface SemanticsProcessorFunc extends Function {
        prototype: SemanticsProcessor;
        new (): SemanticsProcessor;
        /**
         * @static
         * @public
         * @this SemanticsProcessor
         * @memberof SemanticsProcessor
         * @param   {string}                                     ruleString    
         * @param   {System.Collections.Generic.Dictionary$2}    codeLists
         * @return  {SemanticRule}
         */
        extractSemanticRule(ruleString: string | null, codeLists: System.Collections.Generic.Dictionary$2<string,CodeList> | null): SemanticRule | null;
        /**
         * @static
         * @private
         * @this SemanticsProcessor
         * @memberof SemanticsProcessor
         * @param   {SemanticRule}    rule               
         * @param   {string}          elseUsageString
         * @return  {void}
         */
        /**
         * @static
         * @private
         * @this SemanticsProcessor
         * @memberof SemanticsProcessor
         * @param   {SemanticRule}    rule           
         * @param   {string}          usageString
         * @return  {void}
         */
        /**
         * @static
         * @private
         * @this SemanticsProcessor
         * @memberof SemanticsProcessor
         * @param   {SemanticRule}    rule            
         * @param   {string}          condOperator
         * @return  {void}
         */
        /**
         * @static
         * @private
         * @this SemanticsProcessor
         * @memberof SemanticsProcessor
         * @param   {string}             elementPostionString
         * @return  {ElementPosition}
         */
    }
    declare var SemanticsProcessor: SemanticsProcessorFunc;
