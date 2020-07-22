    interface CommonStrings {
    }
    interface CommonStringsFunc extends Function {
        prototype: CommonStrings;
        new (): CommonStrings;
        /**
         * @static
         * @public
         * @memberof CommonStrings
         * @constant
         * @default "EQ"
         * @type string
         */
        EQ: string | null;
        /**
         * @static
         * @public
         * @memberof CommonStrings
         * @constant
         * @default "NE"
         * @type string
         */
        NE: string | null;
        /**
         * @static
         * @public
         * @memberof CommonStrings
         * @constant
         * @default "GT"
         * @type string
         */
        GT: string | null;
        /**
         * @static
         * @public
         * @memberof CommonStrings
         * @constant
         * @default "GE"
         * @type string
         */
        GE: string | null;
        /**
         * @static
         * @public
         * @memberof CommonStrings
         * @constant
         * @default "LT"
         * @type string
         */
        LT: string | null;
        /**
         * @static
         * @public
         * @memberof CommonStrings
         * @constant
         * @default "LE"
         * @type string
         */
        LE: string | null;
        /**
         * @static
         * @public
         * @memberof CommonStrings
         * @constant
         * @default "EXISTS"
         * @type string
         */
        EXISTS: string | null;
        /**
         * @static
         * @public
         * @memberof CommonStrings
         * @constant
         * @default "NEXIST"
         * @type string
         */
        NEXIST: string | null;
        /**
         * @static
         * @public
         * @memberof CommonStrings
         * @constant
         * @default "USAGE"
         * @type string
         */
        USAGE: string | null;
        /**
         * @static
         * @public
         * @memberof CommonStrings
         * @constant
         * @default "LOCALCODE"
         * @type string
         */
        LOCALCODE: string | null;
        /**
         * @static
         * @public
         * @memberof CommonStrings
         * @constant
         * @default "Maximum usage reached. Please visit www.rdpcrystal.com/pricing"
         * @type string
         */
        EXPIRED: string | null;
        /**
         * @static
         * @public
         * @memberof CommonStrings
         * @constant
         * @default "You cannot save with the trial version of EDI Rules Creator"
         * @type string
         */
        CANNOTSAVE: string | null;
    }
    declare var CommonStrings: CommonStringsFunc;