   interface DataTypeChecker {
    }
    interface DataTypeCheckerFunc extends Function {
        prototype: DataTypeChecker;
        new (): DataTypeChecker;
        /**
         * @static
         * @public
         * @memberof DataTypeChecker
         * @default "^((\\d{2}((0[13578]|1[02])(0[1-9]|[12]\\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\\d|30)|02(0[1-9]|1\\d|2[0-8])))|([02468][048]|[13579][26])0229)$"
         * @type string
         */
        DateYYMMDD: string | null;
        /**
         * @static
         * @public
         * @memberof DataTypeChecker
         * @default "^(((\\d{4}((0[13578]|1[02])(0[1-9]|[12]\\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\\d|30)|02(0[1-9]|1\\d|2[0-8])))|((\\d{2}[02468][048]|\\d{2}[13579][26]))0229)){0,8}$"
         * @type string
         */
        DateCCYYMMDD: string | null;
        /**
         * @static
         * @public
         * @memberof DataTypeChecker
         * @default "^([01]\\d|2[0123])([0-5]\\d){1}$"
         * @type string
         */
        TimeHHMM: string | null;
        /**
         * @static
         * @public
         * @memberof DataTypeChecker
         * @default "^([0-1][0-9]|2[0-3])([0-5][0-9])([0-5][0-9])$"
         * @type string
         */
        TimeHHMMSS: string | null;
        /**
         * @static
         * @public
         * @memberof DataTypeChecker
         * @default "^([0-1][0-9]|2[0-3])([0-5][0-9])([0-5][0-9])([0-9])$"
         * @type string
         */
        TimeHHMMSSD: string | null;
        /**
         * @static
         * @public
         * @memberof DataTypeChecker
         * @default "^([0-1][0-9]|2[0-3])([0-5][0-9])([0-5][0-9])([0-9][0-9])$"
         * @type string
         */
        TimeHHMMSSDD: string | null;
        /**
         * @static
         * @public
         * @this DataTypeChecker
         * @memberof DataTypeChecker
         * @param   {string}     strNumber
         * @return  {boolean}
         */
        isWholeNumber(strNumber: string | null): boolean;
        /**
         * @static
         * @public
         * @this DataTypeChecker
         * @memberof DataTypeChecker
         * @param   {string}     strNumber
         * @return  {boolean}
         */
        isNegativeWholeNumber(strNumber: string | null): boolean;
        /**
         * @static
         * @public
         * @this DataTypeChecker
         * @memberof DataTypeChecker
         * @param   {string}     strNumber
         * @return  {boolean}
         */
        isRealNumber(strNumber: string | null): boolean;
        /**
         * @static
         * @public
         * @this DataTypeChecker
         * @memberof DataTypeChecker
         * @param   {string}     strDate
         * @return  {boolean}
         */
        isValidDate(strDate: string | null): boolean;
        /**
         * @static
         * @public
         * @this DataTypeChecker
         * @memberof DataTypeChecker
         * @param   {string}     strDate
         * @return  {boolean}
         */
        isValidTime(strDate: string | null): boolean;
        /**
         * @static
         * @public
         * @this DataTypeChecker
         * @memberof DataTypeChecker
         * @param   {string}     strNumber
         * @return  {boolean}
         */
        isInteger(strNumber: string | null): boolean;
        /**
         * @static
         * @public
         * @this DataTypeChecker
         * @memberof DataTypeChecker
         * @param   {string}     strToCheck
         * @return  {boolean}
         */
        isAlpha(strToCheck: string | null): boolean;
        /**
         * @static
         * @public
         * @this DataTypeChecker
         * @memberof DataTypeChecker
         * @param   {string}     strToCheck
         * @return  {boolean}
         */
        isAlphaNumeric(strToCheck: string | null): boolean;
    }
    declare var DataTypeChecker: DataTypeCheckerFunc;