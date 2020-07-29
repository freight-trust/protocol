interface SemanticRuleFunc extends Function {
  prototype: SemanticRule;
  /**
   * Creates a new SemanticRule object
   *
   * @instance
   * @public
   * @this SemanticRule
   * @memberof SemanticRule
   * @return  {void}
   */
  new (): SemanticRule;
}
declare var SemanticRule: SemanticRuleFunc;
