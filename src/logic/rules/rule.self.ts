   interface SelfRule {
        /**
         * Get/set the element number that the rule will apply to
         *
         * @instance
         * @public
         * @memberof SelfRule
         * @function ElementNumber
         * @type number
         */
        ElementNumber: number;
        /**
         * Get/set the possible values that will trigger the rule
         *
         * @instance
         * @public
         * @memberof SelfRule
         * @function ElementValues
         * @type System.Collections.Generic.HashSet$1
         */
        ElementValues: System.Collections.Generic.HashSet$1<string> | null;
        /**
         * Get/set the rule operator
         *
         * @instance
         * @public
         * @memberof SelfRule
         * @function RuleOperator
         * @type RuleOperator
         */
        RuleOperator: RuleOperator;
        /**
         * Get/set the elements that must be used when the rule is applied
         *
         * @instance
         * @public
         * @memberof SelfRule
         * @function UsedElementCollection
         * @type System.Collections.ObjectModel.Collection$1
         */
        UsedElementCollection: System.Collections.ObjectModel.Collection$1<number> | null;
        /**
         * Get/set the elements that must not be used when the rule is applied
         *
         * @instance
         * @public
         * @memberof SelfRule
         * @function NotUsedElementCollection
         * @type System.Collections.ObjectModel.Collection$1
         */
        NotUsedElementCollection: System.Collections.ObjectModel.Collection$1<number> | null;
        /**
         * Returns the not used elements as a string with element number delimited by
         a space
         *
         * @instance
         * @public
         * @this SelfRule
         * @memberof SelfRule
         * @return  {string}
         */
        getNotUsedOrdinalsString(): string | null;
        /**
         * Returns the not used elements as a string with element number delimited by
         a the separator character
         *
         * @instance
         * @public
         * @this SelfRule
         * @memberof SelfRule
         * @param   {number}    separator
         * @return  {string}                 separator character
         */
        getNotUsedOrdinalsString$1(separator: number): string | null;
        /**
         * Returns the used elements as a string with element number delimited by
         a space
         *
         * @instance
         * @public
         * @this SelfRule
         * @memberof SelfRule
         * @return  {string}
         */
        getUsedOrdinalsString(): string | null;
        /**
         * Returns the used elements as a string with element number delimited by
         a the separator character
         *
         * @instance
         * @public
         * @this SelfRule
         * @memberof SelfRule
         * @param   {number}    separator
         * @return  {string}                 separator character
         */
        getUsedOrdinalsString$1(separator: number): string | null;
        /**
         * Returns a comma separated list of the element values that will trigger
         the rule
         *
         * @instance
         * @public
         * @this SelfRule
         * @memberof SelfRule
         * @return  {string}
         */
        getCommaSeparatedElementValues(): string | null;
    }
    interface SelfRuleFunc extends Function {
        prototype: SelfRule;
        /**
         * Creates a new SelfRule object
         *
         * @instance
         * @public
         * @this SelfRule
         * @memberof SelfRule
         * @return  {void}
         */
        new (): SelfRule;
    }
    declare var SelfRule: SelfRuleFunc;
