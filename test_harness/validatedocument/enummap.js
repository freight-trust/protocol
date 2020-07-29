//Other validation rules files are located in the RDPCrystalInstallation\Validation Rules directory
function EnumMap() {
  this.SnipLevelTypes = {
    0: "DoesNotApply",
    1: "Integrity",
    2: "Requirement",
    3: "Balance",
    4: "Situational",
    5: "CodeSet",
  };

  this.MessageTypes = {
    0: "None",
    1: "CompositeElementMissing",
    2: "CompositeElementDataFormatInvalid",
    3: "CompositeElementNotUsed",
    4: "CompositeElementRecommended",
    5: "CompositeElementNotRecommended",
    6: "CompositeElementLessThanMinimumLength",
    7: "CompositeElementGreaterThanMaximumLength",
    8: "CompositeElementHasWrongValue",
    9: "CompositeElementValueAlreadyEntered",
    10: "DuplicateSegment",
    11: "DuplicateLoop",
    12: "ElementHasWrongValue",
    13: "InternalElementHasWrongValue",
    14: "ElementLessThanMinimumLength",
    15: "ElementGreaterThanMaximumLength",
    16: "ElementValueAlreadyEntered",
    17: "ElementDataFormatInvalid",
    18: "ElementNotUsed",
    19: "ElementRecommended",
    20: "ElementNotRecommended",
    21: "ElementMissing",
    22: "EmptyTrailingElements",
    23: "EmptyTrailingCompositeElement",
    24: "ExtraElementFound",
    25: "ExtraCompositeElementFound",
    26: "ExtraDataAtEndOfFile",
    27: "LoopMissing",
    28: "LoopNotUsed",
    29: "LoopNotRecommended",
    30: "LoopRecommended",
    31: "MalformedSegment",
    32: "InvalidIntegerValue",
    33: "InvalidDateValue",
    34: "InvalidTimeValue",
    35: "InvalidAlphabeticValue",
    36: "InvalidPositiveNumberValue",
    37: "InvalidNegativeNumberValue",
    38: "InvalidDecimalValue",
    39: "SegmentNotRecommended",
    40: "SegmentNotUsed",
    41: "SegmentNotInDictionary",
    42: "SegmentRecommended",
    43: "SegmentMissing",
    44: "SummaryValueMismatch",
    45: "UnrecognizedLoop",
    46: "UnrecognizedSegment",
    47: "IllegalCharactorInFile",
    48: "MalformedEDIFile",
    49: "MaximumErrorLimitReached",
    50: "UnexpectedError",
  };
}

module.exports = EnumMap;
