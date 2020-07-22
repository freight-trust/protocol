  interface SimpleLogicProcessor {
    }
    interface SimpleLogicProcessorFunc extends Function {
        prototype: SimpleLogicProcessor;
        new (): SimpleLogicProcessor;
        /**
         * Takes an element value and based on a rule operator performs a logical operation - Self Rules
         *
         * @static
         * @public
         * @this SimpleLogicProcessor
         * @memberof SimpleLogicProcessor
         * @param   {string}                                  elementValue         
         * @param   {System.Collections.Generic.HashSet$1}    conditionalValues    
         * @param   {RuleOperator}                            op
         * @return  {boolean}                                                      true if condition met, false otherwise
         */
        checkCondition$1(elementValue: string | null, conditionalValues: System.Collections.Generic.HashSet$1<string> | null, op: RuleOperator): boolean;
        /**
         * @static
         * @public
         * @this SimpleLogicProcessor
         * @memberof SimpleLogicProcessor
         * @param   {string}          elementValue        
         * @param   {string}          conditionalValue    
         * @param   {RuleOperator}    op
         * @return  {boolean}
         */
        checkCondition$2(elementValue: string | null, conditionalValue: string | null, op: RuleOperator): boolean;
        /**
         * Performs a local operation of elements found in a segment based on the rule operator and element values - Self Rules
         *
         * @static
         * @public
         * @this SimpleLogicProcessor
         * @memberof SimpleLogicProcessor
         * @param   {number}                                     elementNumber    Oridinal# of Element
         * @param   {System.Collections.Generic.HashSet$1}       elementValues    Possible values for element
         * @param   {System.Collections.Generic.Dictionary$2}    foundElements    Found elements in the segment
         * @param   {RuleOperator}                               op               rule operator
         * @return  {boolean}                                                     true if condition met, false otherwise
         */
        checkCondition(elementNumber: number, elementValues: System.Collections.Generic.HashSet$1<string> | null, foundElements: System.Collections.Generic.Dictionary$2<number,string> | null, op: RuleOperator): boolean;
    }
    declare var SimpleLogicProcessor: SimpleLogicProcessorFunc;