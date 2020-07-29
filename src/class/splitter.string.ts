interface StringSplitter {
  /**
   * The string buffer container
   *
   * @instance
   * @public
   * @memberof StringSplitter
   * @type Array.<string>
   */
  buffer: string[] | null;
  /**
         * Returns a string array that contains the substrings in this instance that are delimited by
         elements of a specified string or Unicode character array. This method is unsafe and can throw
         IndexOutOfRange exception if we overflow the buffer
         *
         * @instance
         * @public
         * @this StringSplitter
         * @memberof StringSplitter
         * @param   {string}    value
         * @param   {number}    separator
         * @return  {number}                 The number of results found
         */
  split(value: string | null, separator: number): number;
  /**
         * Returns a string array that contains the substrings in this instance that are delimited by
         a specified string or Unicode character array.
         *
         * @instance
         * @public
         * @this StringSplitter
         * @memberof StringSplitter
         * @param   {string}    value
         * @param   {string}    separator
         * @return  {number}                 The number of results found
         */
  split$4(value: string | null, separator: string | null): number;
  /**
         * Returns a string array that contains the substrings in this instance that are delimited by
         elements of a specified string or Unicode character array. This method is unsafe and can throw
         IndexOutOfRange exception if we overflow the buffer
         *
         * @instance
         * @public
         * @this StringSplitter
         * @memberof StringSplitter
         * @throws IndexOutOfRange
         * @param   {string}            value
         * @param   {Array.<number>}    separators
         * @return  {number}                          The number of results found
         */
  split$2(value: string | null, separators: number[] | null): number;
  /**
         * Returns a string array that contains the substrings in this instance that are delimited by
         elements of a specified string or Unicode character array. This method is unsafe and can throw
         IndexOutOfRange exception if we overflow the buffer
         *
         * @instance
         * @public
         * @this StringSplitter
         * @memberof StringSplitter
         * @throws IndexOutOfRange
         * @param   {string}                       value
         * @param   {number}                       separator
         * @param   {System.StringSplitOptions}    options
         * @return  {number}                                    The number of results found
         */
  split$1(
    value: string | null,
    separator: number,
    options: System.StringSplitOptions
  ): number;
  /**
         * Returns a string array that contains the substrings in this instance that are delimited by
         a specified string or Unicode character array.
         *
         * @instance
         * @public
         * @this StringSplitter
         * @memberof StringSplitter
         * @param   {string}                       value
         * @param   {string}                       separator
         * @param   {System.StringSplitOptions}    options
         * @return  {number}                                    The number of results found
         */
  split$5(
    value: string | null,
    separator: string | null,
    options: System.StringSplitOptions
  ): number;
  /**
         * Returns a string array that contains the substrings in this instance that are delimited by
         elements of a specified string or Unicode character array. This method is unsafe and can throw
         IndexOutOfRange exception if we overflow the buffer
         *
         * @instance
         * @public
         * @this StringSplitter
         * @memberof StringSplitter
         * @throws IndexOutOfRange
         * @param   {string}                       value
         * @param   {Array.<number>}               separators
         * @param   {System.StringSplitOptions}    options
         * @return  {number}                                     The number of results found
         */
  split$3(
    value: string | null,
    separators: number[] | null,
    options: System.StringSplitOptions
  ): number;
  /**
         * Returns a string array that contains the substrings in this instance that are delimited by
         elements of a specified string or Unicode character array.
         This method is safe and will
         automatically adjust the buffer if needed
         *
         * @instance
         * @public
         * @this StringSplitter
         * @memberof StringSplitter
         * @param   {string}    value
         * @param   {number}    separator
         * @return  {number}                 The number of results found
         */
  safeSplit(value: string | null, separator: number): number;
  /**
   * Split the string
   *
   * @instance
   * @public
   * @this StringSplitter
   * @memberof StringSplitter
   * @param   {string}    value        The number of results found
   * @param   {string}    separator
   * @return  {number}
   */
  safeSplit$4(value: string | null, separator: string | null): number;
  /**
         * Returns a string array that contains the substrings in this instance that are delimited by
         elements of a specified string or Unicode character array. This method is unsafe and can throw
         IndexOutOfRange exception if we overflow the buffer
         *
         * @instance
         * @public
         * @this StringSplitter
         * @memberof StringSplitter
         * @param   {string}            value
         * @param   {Array.<number>}    separators
         * @return  {number}                          The number of results found
         */
  safeSplit$2(value: string | null, separators: number[] | null): number;
  /**
         * Returns a string array that contains the substrings in this instance that are delimited by
         elements of a specified string or Unicode character array.
         This method is safe and will
         automatically adjust the buffer if needed
         *
         * @instance
         * @public
         * @this StringSplitter
         * @memberof StringSplitter
         * @param   {string}                       value
         * @param   {number}                       separator
         * @param   {System.StringSplitOptions}    options
         * @return  {number}                                    The number of results found
         */
  safeSplit$1(
    value: string | null,
    separator: number,
    options: System.StringSplitOptions
  ): number;
  /**
   * Split the string
   *
   * @instance
   * @public
   * @this StringSplitter
   * @memberof StringSplitter
   * @param   {string}                       value        The number of results found
   * @param   {string}                       separator
   * @param   {System.StringSplitOptions}    options
   * @return  {number}
   */
  safeSplit$5(
    value: string | null,
    separator: string | null,
    options: System.StringSplitOptions
  ): number;
  /**
         * Returns a string array that contains the substrings in this instance that are delimited by
         elements of a specified string or Unicode character array. This method is unsafe and can throw
         IndexOutOfRange exception if we overflow the buffer
         *
         * @instance
         * @public
         * @this StringSplitter
         * @memberof StringSplitter
         * @throws IndexOutOfRange
         * @param   {string}                       value
         * @param   {Array.<number>}               separators
         * @param   {System.StringSplitOptions}    options
         * @return  {number}                                     The number of results found
         */
  safeSplit$3(
    value: string | null,
    separators: number[] | null,
    options: System.StringSplitOptions
  ): number;
}
