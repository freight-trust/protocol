    interface SemanticRule {
        /**
         * The segment/element position that this rule is based on
         * Represents a rule that a segment or element must conform to
         * @instance
         * @public
         * @memberof SemanticRule
         * @function BaseSegmentPosition
         * @type ElementPosition
         */
        BaseSegmentPosition: ElementPosition | null;
        /**
         * The segment position of the segment/element that this rule is for
         *
         * @instance
         * @public
         * @memberof SemanticRule
         * @function DependentSegmentPosition
         * @type ElementPosition
         */
        DependentSegmentPosition: ElementPosition | null;
        /**
         * Get/set the default values that the base segment's element must have when rule is applied
         *
         * @instance
         * @public
         * @memberof SemanticRule
         * @function DefaultValues
         * @type System.Collections.Generic.HashSet$1
         */
        DefaultValues: System.Collections.Generic.HashSet$1<string> | null;
        /**
         * Get/set the accepted values that the base segment's element must contain when rule is applied
         *
         * @instance
         * @public
         * @memberof SemanticRule
         * @function AcceptedValues
         * @type System.Collections.Generic.HashSet$1
         */
        AcceptedValues: System.Collections.Generic.HashSet$1<string> | null;
        /**
         * Get/set the conditional values that the base segment's element should have when rule is applied.  The conditional values
         are values that the base segment's element must contain for the rule to be applied
         *
         * @instance
         * @public
         * @memberof SemanticRule
         * @function ConditionalValues
         * @type System.Collections.Generic.HashSet$1
         */
        ConditionalValues: System.Collections.Generic.HashSet$1<string> | null;
        /**
         * Get/Set the rule operator for rule
         *
         * @instance
         * @public
         * @memberof SemanticRule
         * @function RuleOperator
         * @type RuleOperator
         */
        RuleOperator: RuleOperator;
        /**
         * Get/set the usage of the segment or element who holds this rule
         *
         * @instance
         * @public
         * @memberof SemanticRule
         * @function Usage
         * @type Usage
         */
        Usage: Usage;
        /**
         * Get/set the usage of the segment or element usage when the rule condition evaluates to false
         *
         * @instance
         * @public
         * @memberof SemanticRule
         * @function ElseUsage
         * @type Usage
         */
        ElseUsage: Usage;
        /**
         * Returns a string representation of this object
         *
         * @instance
         * @public
         * @override
         * @this SemanticRule
         * @memberof SemanticRule
         * @return  {string}        string representation of this object
         */
        toString(): string | null;
    }