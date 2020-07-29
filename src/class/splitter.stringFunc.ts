interface StringSplitterFunc extends Function {
  prototype: StringSplitter;
  /**
   * Create a new StringSplitter object with the given buffer size
   *
   * @instance
   * @public
   * @this StringSplitter
   * @memberof StringSplitter
   * @param   {number}    bufferSize
   * @return  {void}
   */
  new (bufferSize: number): StringSplitter;
}
declare var StringSplitter: StringSplitterFunc;
