{
        "Parser_Tokens": {
            "scope": "FreightLib",
            "module": "FreightLibrary",
            "statics": {

                "fields": {
                    "COMMA": null,
                    "SEMICOLON": null,
                    "SPACE": null,
                    "EQUAL": null,
                    "EQUALS": null,
                    "END": null,
                    "IFSTATEMENT": null,
                    "ELSEIFSTATEMENT": null,
                    "IF": null,
                    "ELSEIF": null,
                    "ELSE": null,
                    "NULL": null,
                    "SYMBOL": null,
                    "SEGPOS": null,
                    "ELEMPOS": null,
                    "STRINGLIST": null,
                    "INTEGERINDEXLIST": null,
                    "INTEGERLIST": null,
                    "INDEXER": null,
                    "INT": null,
                    "FLOAT": null,
                    "CONDITION": null,
                    "GREATERTHAN": null,
                    "GREATERTHANOREQUALTO": null,
                    "LESSTHAN": null,
                    "LESSTHANOREQUALTO": null,
                    "NOTEQUAL": null,
                    "NOTEQUAL_CASE_INSENSITIVE": null,
                    "EQUAL_CASE_INSENSITIVE": null,
                    "CONTAINS_CASE_INSENSITIVE": null,
                    "NOTCONTAINS_CASE_INSENSITIVE": null,
                    "STARTSWITH_CASE_INSENSITIVE": null,
                    "NOTSTARTSWITH_CASE_INSENSITIVE": null,
                    "ENDSWITH_CASE_INSENSITIVE": null,
                    "NOTENDSWITH_CASE_INSENSITIVE": null,
                    "CONTAINS": null,
                    "NOTCONTAINS": null,
                    "STARTSWITH": null,
                    "NOTSTARTSWITH": null,
                    "ENDSWITH": null,
                    "NOTENDSWITH": null,
                    "LENGTHEQUAL": null,
                    "LENGTHNOTEQUAL": null,
                    "LENGTHLESSTHAN": null,
                    "LENGTHGREATERTHAN": null,
                    "AND": null,
                    "OR": null,
                    "LEFT": null,
                    "LEFTBRACKET": null,
                    "RIGHT": null,
                    "RIGHTBRACKET": null,
                    "DOT": null,
                    "THEN": null,
                    "LOCALCODE": null,
                    "ERROR": null,
                    "USAGE": null,
                    "ELEMENTLIST": null,
                    "REQUIRED": null,
                    "NOTUSED": null,
                    "OPTIONAL": null,
                    "RECOMMENDED": null,
                    "NOTRECOMMENDED": null,
                    "DEFAULT": null,
                    "SegmentNotUsed": null,
                    "SegmentRecommended": null,
                    "SegmentMissing": null,
                    "SegmentNotRecommended": null,
                    "ElementHasWrongValue": null,
                    "ElementNotUsed": null,
                    "ElementRecommended": null,
                    "ElementNotRecommended": null,
                    "ElementMissing": null,
                    "CompositeElementHasWrongValue": null,
                    "CompositeElementNotUsed": null,
                    "CompositeElementRecommended": null,
                    "CompositeElementNotRecommended": null,
                    "CompositeElementMissing": null,
                    "STRING": null,
                    "CODECONDITION": null,
                },
                "ctors": {
                    "init": 'function' () {
                        COMMA = new FreightLib.TokenDefinition("\\,", "COMMA");
                        SEMICOLON = new FreightLib.TokenDefinition("\\:", "SEMICOLON");
                        SPACE = new FreightLib.TokenDefinition("\\s", "SPACE");
                        EQUAL = new FreightLib.TokenDefinition("\\=", "EQUAL");
                        EQUALS = new FreightLib.TokenDefinition("\\==", "EQUALS");
                        END = new FreightLib.TokenDefinition("end", "END");
                        IFSTATEMENT = new FreightLib.TokenDefinition("if.*?end$", "IFSTATEMENT");
                        ELSEIFSTATEMENT = new FreightLib.TokenDefinition("elseif.*?end", "ELSEIFSTATEMENT");
                        IF = new FreightLib.TokenDefinition("if", "IF");
                        ELSEIF = new FreightLib.TokenDefinition("elseif", "ELSEIF");
                        ELSE = new FreightLib.TokenDefinition("else", "ELSE");
                        NULL = new FreightLib.TokenDefinition("null", "NULL");
                        SYMBOL = new FreightLib.TokenDefinition("[*<>\\?\\-+/A-Za-z0-9->!]+", "SYMBOL");
                        SEGPOS = new FreightLib.TokenDefinition("SegPos\\[.*?\\]", "SEGPOS");
                        ELEMPOS = new FreightLib.TokenDefinition("ElemPos\\[.*?\\]", "ELEMPOS");
                        STRINGLIST = new FreightLib.TokenDefinition("\\[.*?\\]", "STRINGLIST");
                        INTEGERINDEXLIST = new FreightLib.TokenDefinition("\\[.*?\\]", "INTEGERINDEXLIST");
                        INTEGERLIST = new FreightLib.TokenDefinition("\\[.*?\\]", "INTEGERLIST");
                        INDEXER = new FreightLib.TokenDefinition("\\[.*?\\]", "INDEXER");
                        INT = new FreightLib.TokenDefinition("[-+]?\\d+", "INT");
                        FLOAT = new FreightLib.TokenDefinition("[-+]?\\d*\\.\\d+([eE][-+]?\\d+)?", "FLOAT");
                        CONDITION = new FreightLib.TokenDefinition("\\((?>\\((?<DEPTH>)|\\)(?<-DEPTH>)|.?)*(?(DEPTH)(?!))\\)|\\|", "CONDITION");
                        GREATERTHAN = new FreightLib.TokenDefinition("\\>", "GREATERTHAN");
                        GREATERTHANOREQUALTO = new FreightLib.TokenDefinition("\\>=", "GREATERTHANOREQUALTO");
                        LESSTHAN = new FreightLib.TokenDefinition("\\<", "LESSTHAN");
                        LESSTHANOREQUALTO = new FreightLib.TokenDefinition("\\<=", "LESSTHANOREQUALTO");
                        NOTEQUAL = new FreightLib.TokenDefinition("!=", "NOTEQUAL");
                        NOTEQUAL_CASE_INSENSITIVE = new FreightLib.TokenDefinition("!=i", "NOTEQUAL_CASE_INSENSITIVE");
                        EQUAL_CASE_INSENSITIVE = new FreightLib.TokenDefinition("\\==i", "EQUAL_CASE_INSENSITIVE");
                        CONTAINS_CASE_INSENSITIVE = new FreightLib.TokenDefinition("=ci", "CONTAINS_CASE_INSENSITIVE");
                        NOTCONTAINS_CASE_INSENSITIVE = new FreightLib.TokenDefinition("!ci", "NOTCONTAINS_CASE_INSENSITIVE");
                        STARTSWITH_CASE_INSENSITIVE = new FreightLib.TokenDefinition("=si", "STARTSWITH_CASE_INSENSITIVE");
                        NOTSTARTSWITH_CASE_INSENSITIVE = new FreightLib.TokenDefinition("!si", "NOTSTARTSWITH_CASE_INSENSITIVE");
                        ENDSWITH_CASE_INSENSITIVE = new FreightLib.TokenDefinition("=ei", "ENDSWITH_CASE_INSENSITIVE");
                        NOTENDSWITH_CASE_INSENSITIVE = new FreightLib.TokenDefinition("!ei", "NOTENDSWITH_CASE_INSENSITIVE");
                        CONTAINS = new FreightLib.TokenDefinition("=c", "CONTAINS");
                        NOTCONTAINS = new FreightLib.TokenDefinition("!c", "NOTCONTAINS");
                        STARTSWITH = new FreightLib.TokenDefinition("=s", "STARTSWITH");
                        NOTSTARTSWITH = new FreightLib.TokenDefinition("!s", "NOTSTARTSWITH");
                        ENDSWITH = new FreightLib.TokenDefinition("=e", "ENDSWITH");
                        NOTENDSWITH = new FreightLib.TokenDefinition("!e", "NOTENDSWITH");
                        LENGTHEQUAL = new FreightLib.TokenDefinition("=l", "LENGTHEQUAL");
                        LENGTHNOTEQUAL = new FreightLib.TokenDefinition("!l", "LENGTHNOTEQUAL");
                        LENGTHLESSTHAN = new FreightLib.TokenDefinition("\\<l", "LENGTHLESSTHAN");
                        LENGTHGREATERTHAN = new FreightLib.TokenDefinition("\\>l", "LENGTHGREATERTHAN");
                        AND = new FreightLib.TokenDefinition("and", "AND");
                        OR = new FreightLib.TokenDefinition("or", "OR");
                        LEFT = new FreightLib.TokenDefinition("\\(", "LEFT");
                        LEFTBRACKET = new FreightLib.TokenDefinition("\\[", "LEFTBRACKET");
                        RIGHT = new FreightLib.TokenDefinition("\\)", "RIGHT");
                        RIGHTBRACKET = new FreightLib.TokenDefinition("\\]", "RIGHTBRACKET");
                        DOT = new FreightLib.TokenDefinition("\\.", "DOT");
                        THEN = new FreightLib.TokenDefinition("then", "THEN");
                        LOCALCODE = new FreightLib.TokenDefinition("LocalCode\\[.*?\\]", "LOCALCODE");
                        ERROR = new FreightLib.TokenDefinition("Error\\[.*?\\]", "ERROR");
                        USAGE = new FreightLib.TokenDefinition("Usage\\[.*?\\]", "USAGE");
                        ELEMENTLIST = new FreightLib.TokenDefinition("ElemList\\[.*?\\]", "ELEMENTLIST");
                        REQUIRED = new FreightLib.TokenDefinition("Required", "REQUIRED");
                        NOTUSED = new FreightLib.TokenDefinition("NotUsed", "NOTUSED");
                        OPTIONAL = new FreightLib.TokenDefinition("Optional", "OPTIONAL");
                        RECOMMENDED = new FreightLib.TokenDefinition("Recommended", "RECOMMENDED");
                        NOTRECOMMENDED = new FreightLib.TokenDefinition("NotRecommended", "NOTRECOMMENDED");
                        DEFAULT = new FreightLib.TokenDefinition("Default", "DEFAULT");
                        SegmentNotUsed = new FreightLib.TokenDefinition("SegmentNotUsed", "SegmentNotUsed");
                        SegmentRecommended = new FreightLib.TokenDefinition("SegmentRecommended", "SegmentRecommended");
                        SegmentMissing = new FreightLib.TokenDefinition("SegmentMissing", "SegmentMissing");
                        SegmentNotRecommended = new FreightLib.TokenDefinition("SegmentNotRecommended", "SegmentNotRecommended");
                        ElementHasWrongValue = new FreightLib.TokenDefinition("ElementHasWrongValue", "ElementHasWrongValue");
                        ElementNotUsed = new FreightLib.TokenDefinition("ElementNotUsed", "ElementNotUsed");
                        ElementRecommended = new FreightLib.TokenDefinition("ElementRecommended", "ElementRecommended");
                        ElementNotRecommended = new FreightLib.TokenDefinition("ElementNotRecommended", "ElementNotRecommended");
                        ElementMissing = new FreightLib.TokenDefinition("ElementMissing", "ElementMissing");
                        CompositeElementHasWrongValue = new FreightLib.TokenDefinition("CompositeElementHasWrongValue", "CompositeElementHasWrongValue");
                        CompositeElementNotUsed = new FreightLib.TokenDefinition("CompositeElementNotUsed", "CompositeElementNotUsed");
                        CompositeElementRecommended = new FreightLib.TokenDefinition("CompositeElementRecommended", "CompositeElementRecommended");
                        CompositeElementNotRecommended = new FreightLib.TokenDefinition("CompositeElementNotRecommended", "CompositeElementNotRecommended");
                        CompositeElementMissing = new FreightLib.TokenDefinition("CompositeElementMissing", "CompositeElementMissing");
                        STRING = new FreightLib.TokenDefinition('".*?"', "STRING");
                        CODECONDITION = new FreightLib.TokenDefinition("CodeCondition\\[.*?\\]", "CODECONDITION");
                    }
                }
            }
        }

 };
