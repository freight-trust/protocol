'use strict';


/**
 * Generates functional/implementation and/or technical acknowledment(s) for the requested X12Interchange.
 *
 * body X12Interchange The X12Interchange object to acknowledge. (optional)
 * basicSyntax Boolean All data elements with alpha (A) or alphanumeric (AN) data types are validated against a syntax set of allowed characters. The default syntax set is the Extended, hence the default for this parameter is false. By setting this to true, validation will use the Basic syntax set. (optional)
 * syntaxSet String In case you need to validate against a syntax set, different than Basic and Extended, populate this filed with all of the allowed symbols, url-escaped. (optional)
 * detectDuplicates Boolean If you need to detect duplicates as in functional groups or transactions with the same reference number, set this flag to true. The default is false. (optional)
 * tranRefNumber Integer The default is 1. Set this to whatever the 997 or 999 X12Interchange.ST.TransactionSetControlNumber_02 needs to be. In case there are multiple acknowledgments (for multiple functional groups), this will be starting reference number and every subsequent acknowledgment will have the previous reference number incremented with 1. (optional)
 * interchangeRefNumber Integer The default is 1. Set this to whatever the 997 or 999 X12Interchange.ISA.InterchangeControlNumber_13 needs to be. (optional)
 * ackForValidTrans Boolean The default is false. Set this to true if you need AK2 loops included for all valid transaction as well. By default AK2 loops are generated only for invalid transactions. (optional)
 * batchAcks Boolean The default is true. Set this to false if you need to generate separate X12Interchange for each acknowledgment. By default all acknowledgments are batched in the same X12Interchange. (optional)
 * technicalAck String The default technical acknowledgment TA1 is generated according to X12Interchange.ISA.AcknowledgementRequested_14. You can either enforce it to always generate TA1s or supress it to never generate any TA1s. This will override the flag in X12Interchange.ISA.AcknowledgementRequested_14.              The available values are: default, enforce, suppress. (optional)
 * ack String The default value is 997. The type of acknowledgment being generated. Set this to 999 if you need to generate an implementation instead of functional acknowledgment. The available values are: 997, 999. (optional)
 * ak901isP Boolean The value of the AK9's first element. By default it is \"E\". Set this to true if you want this value to be \"P\" instead. (optional)
 * returns List
 **/
exports.x12AckPOST = function(body,basicSyntax,syntaxSet,detectDuplicates,tranRefNumber,interchangeRefNumber,ackForValidTrans,batchAcks,technicalAck,ack,ak901isP) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "DataElementDelimiter" : "DataElementDelimiter",
  "SegmentDelimiter" : "SegmentDelimiter",
  "TA1" : {
    "InterchangeDate_2" : "InterchangeDate_2",
    "InterchangeAcknowledgmentCode_4" : "InterchangeAcknowledgmentCode_4",
    "InterchangeTime_3" : "InterchangeTime_3",
    "InterchangeControlNumber_1" : "InterchangeControlNumber_1",
    "InterchangeNoteCode_5" : "InterchangeNoteCode_5"
  },
  "ISA" : {
    "InterchangeReceiverID_8" : "InterchangeReceiverID_8",
    "SenderIDQualifier_5" : "SenderIDQualifier_5",
    "AcknowledgementRequested_14" : "AcknowledgementRequested_14",
    "SecurityInformation_4" : "SecurityInformation_4",
    "InterchangeDate_9" : "InterchangeDate_9",
    "InterchangeControlStandardsIdentifier_11" : "InterchangeControlStandardsIdentifier_11",
    "ComponentElementSeparator_16" : "ComponentElementSeparator_16",
    "SecurityInformationQualifier_3" : "SecurityInformationQualifier_3",
    "AuthorizationInformationQualifier_1" : "AuthorizationInformationQualifier_1",
    "InterchangeControlNumber_13" : "InterchangeControlNumber_13",
    "InterchangeSenderID_6" : "InterchangeSenderID_6",
    "UsageIndicator_15" : "UsageIndicator_15",
    "ReceiverIDQualifier_7" : "ReceiverIDQualifier_7",
    "InterchangeTime_10" : "InterchangeTime_10",
    "AuthorizationInformation_2" : "AuthorizationInformation_2",
    "InterchangeControlVersionNumber_12" : "InterchangeControlVersionNumber_12"
  },
  "Groups" : [ {
    "Transactions" : [ { }, { } ],
    "GETrailers" : [ {
      "NumberOfIncludedSets_1" : "NumberOfIncludedSets_1",
      "GroupControlNumber_2" : "GroupControlNumber_2"
    }, {
      "NumberOfIncludedSets_1" : "NumberOfIncludedSets_1",
      "GroupControlNumber_2" : "GroupControlNumber_2"
    } ],
    "GS" : {
      "Time_5" : "Time_5",
      "ReceiverIDCode_3" : "ReceiverIDCode_3",
      "CodeIdentifyingInformationType_1" : "CodeIdentifyingInformationType_1",
      "VersionAndRelease_8" : "VersionAndRelease_8",
      "SenderIDCode_2" : "SenderIDCode_2",
      "Date_4" : "Date_4",
      "TransactionTypeCode_7" : "TransactionTypeCode_7",
      "GroupControlNumber_6" : "GroupControlNumber_6"
    }
  }, {
    "Transactions" : [ { }, { } ],
    "GETrailers" : [ {
      "NumberOfIncludedSets_1" : "NumberOfIncludedSets_1",
      "GroupControlNumber_2" : "GroupControlNumber_2"
    }, {
      "NumberOfIncludedSets_1" : "NumberOfIncludedSets_1",
      "GroupControlNumber_2" : "GroupControlNumber_2"
    } ],
    "GS" : {
      "Time_5" : "Time_5",
      "ReceiverIDCode_3" : "ReceiverIDCode_3",
      "CodeIdentifyingInformationType_1" : "CodeIdentifyingInformationType_1",
      "VersionAndRelease_8" : "VersionAndRelease_8",
      "SenderIDCode_2" : "SenderIDCode_2",
      "Date_4" : "Date_4",
      "TransactionTypeCode_7" : "TransactionTypeCode_7",
      "GroupControlNumber_6" : "GroupControlNumber_6"
    }
  } ],
  "IEATrailers" : [ {
    "InterchangeControlNumber_2" : "InterchangeControlNumber_2",
    "NumberOfIncludedGroups_1" : "NumberOfIncludedGroups_1"
  }, {
    "InterchangeControlNumber_2" : "InterchangeControlNumber_2",
    "NumberOfIncludedGroups_1" : "NumberOfIncludedGroups_1"
  } ],
  "Result" : {
    "Status" : "Status",
    "Details" : [ {
      "Status" : "Status",
      "Message" : "Message",
      "SegmentId" : "SegmentId",
      "TransactionIndex" : 1,
      "TransactionRef" : "TransactionRef",
      "Value" : "Value",
      "Index" : 6,
      "DataElementIndex" : 5
    }, {
      "Status" : "Status",
      "Message" : "Message",
      "SegmentId" : "SegmentId",
      "TransactionIndex" : 1,
      "TransactionRef" : "TransactionRef",
      "Value" : "Value",
      "Index" : 6,
      "DataElementIndex" : 5
    } ],
    "LastIndex" : 0
  }
}, {
  "DataElementDelimiter" : "DataElementDelimiter",
  "SegmentDelimiter" : "SegmentDelimiter",
  "TA1" : {
    "InterchangeDate_2" : "InterchangeDate_2",
    "InterchangeAcknowledgmentCode_4" : "InterchangeAcknowledgmentCode_4",
    "InterchangeTime_3" : "InterchangeTime_3",
    "InterchangeControlNumber_1" : "InterchangeControlNumber_1",
    "InterchangeNoteCode_5" : "InterchangeNoteCode_5"
  },
  "ISA" : {
    "InterchangeReceiverID_8" : "InterchangeReceiverID_8",
    "SenderIDQualifier_5" : "SenderIDQualifier_5",
    "AcknowledgementRequested_14" : "AcknowledgementRequested_14",
    "SecurityInformation_4" : "SecurityInformation_4",
    "InterchangeDate_9" : "InterchangeDate_9",
    "InterchangeControlStandardsIdentifier_11" : "InterchangeControlStandardsIdentifier_11",
    "ComponentElementSeparator_16" : "ComponentElementSeparator_16",
    "SecurityInformationQualifier_3" : "SecurityInformationQualifier_3",
    "AuthorizationInformationQualifier_1" : "AuthorizationInformationQualifier_1",
    "InterchangeControlNumber_13" : "InterchangeControlNumber_13",
    "InterchangeSenderID_6" : "InterchangeSenderID_6",
    "UsageIndicator_15" : "UsageIndicator_15",
    "ReceiverIDQualifier_7" : "ReceiverIDQualifier_7",
    "InterchangeTime_10" : "InterchangeTime_10",
    "AuthorizationInformation_2" : "AuthorizationInformation_2",
    "InterchangeControlVersionNumber_12" : "InterchangeControlVersionNumber_12"
  },
  "Groups" : [ {
    "Transactions" : [ { }, { } ],
    "GETrailers" : [ {
      "NumberOfIncludedSets_1" : "NumberOfIncludedSets_1",
      "GroupControlNumber_2" : "GroupControlNumber_2"
    }, {
      "NumberOfIncludedSets_1" : "NumberOfIncludedSets_1",
      "GroupControlNumber_2" : "GroupControlNumber_2"
    } ],
    "GS" : {
      "Time_5" : "Time_5",
      "ReceiverIDCode_3" : "ReceiverIDCode_3",
      "CodeIdentifyingInformationType_1" : "CodeIdentifyingInformationType_1",
      "VersionAndRelease_8" : "VersionAndRelease_8",
      "SenderIDCode_2" : "SenderIDCode_2",
      "Date_4" : "Date_4",
      "TransactionTypeCode_7" : "TransactionTypeCode_7",
      "GroupControlNumber_6" : "GroupControlNumber_6"
    }
  }, {
    "Transactions" : [ { }, { } ],
    "GETrailers" : [ {
      "NumberOfIncludedSets_1" : "NumberOfIncludedSets_1",
      "GroupControlNumber_2" : "GroupControlNumber_2"
    }, {
      "NumberOfIncludedSets_1" : "NumberOfIncludedSets_1",
      "GroupControlNumber_2" : "GroupControlNumber_2"
    } ],
    "GS" : {
      "Time_5" : "Time_5",
      "ReceiverIDCode_3" : "ReceiverIDCode_3",
      "CodeIdentifyingInformationType_1" : "CodeIdentifyingInformationType_1",
      "VersionAndRelease_8" : "VersionAndRelease_8",
      "SenderIDCode_2" : "SenderIDCode_2",
      "Date_4" : "Date_4",
      "TransactionTypeCode_7" : "TransactionTypeCode_7",
      "GroupControlNumber_6" : "GroupControlNumber_6"
    }
  } ],
  "IEATrailers" : [ {
    "InterchangeControlNumber_2" : "InterchangeControlNumber_2",
    "NumberOfIncludedGroups_1" : "NumberOfIncludedGroups_1"
  }, {
    "InterchangeControlNumber_2" : "InterchangeControlNumber_2",
    "NumberOfIncludedGroups_1" : "NumberOfIncludedGroups_1"
  } ],
  "Result" : {
    "Status" : "Status",
    "Details" : [ {
      "Status" : "Status",
      "Message" : "Message",
      "SegmentId" : "SegmentId",
      "TransactionIndex" : 1,
      "TransactionRef" : "TransactionRef",
      "Value" : "Value",
      "Index" : 6,
      "DataElementIndex" : 5
    }, {
      "Status" : "Status",
      "Message" : "Message",
      "SegmentId" : "SegmentId",
      "TransactionIndex" : 1,
      "TransactionRef" : "TransactionRef",
      "Value" : "Value",
      "Index" : 6,
      "DataElementIndex" : 5
    } ],
    "LastIndex" : 0
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Reads an X12 file and returns its contents translated to an array of X12Interchange objects.
 *
 * fileName byte[]  (optional)
 * ignoreNullValues Boolean Whether to ignore all null values in the response. The default is false. (optional)
 * continueOnError Boolean Whether to continue reading if a corrupt interchange is encountered. The default is false. (optional)
 * charSet String The encoding of the file contents. The default is utf-8. The available values are: unicodeFFFE, utf-32, utf-32BE, us-ascii, iso-8859-1, utf-7, utf-8, utf-16. (optional)
 * model String The model to use. By default, the API will infer the model based on the transaction and version identifiers. (optional)
 * returns List
 **/
exports.x12ReadPOST = function(fileName,ignoreNullValues,continueOnError,charSet,model) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "DataElementDelimiter" : "DataElementDelimiter",
  "SegmentDelimiter" : "SegmentDelimiter",
  "TA1" : {
    "InterchangeDate_2" : "InterchangeDate_2",
    "InterchangeAcknowledgmentCode_4" : "InterchangeAcknowledgmentCode_4",
    "InterchangeTime_3" : "InterchangeTime_3",
    "InterchangeControlNumber_1" : "InterchangeControlNumber_1",
    "InterchangeNoteCode_5" : "InterchangeNoteCode_5"
  },
  "ISA" : {
    "InterchangeReceiverID_8" : "InterchangeReceiverID_8",
    "SenderIDQualifier_5" : "SenderIDQualifier_5",
    "AcknowledgementRequested_14" : "AcknowledgementRequested_14",
    "SecurityInformation_4" : "SecurityInformation_4",
    "InterchangeDate_9" : "InterchangeDate_9",
    "InterchangeControlStandardsIdentifier_11" : "InterchangeControlStandardsIdentifier_11",
    "ComponentElementSeparator_16" : "ComponentElementSeparator_16",
    "SecurityInformationQualifier_3" : "SecurityInformationQualifier_3",
    "AuthorizationInformationQualifier_1" : "AuthorizationInformationQualifier_1",
    "InterchangeControlNumber_13" : "InterchangeControlNumber_13",
    "InterchangeSenderID_6" : "InterchangeSenderID_6",
    "UsageIndicator_15" : "UsageIndicator_15",
    "ReceiverIDQualifier_7" : "ReceiverIDQualifier_7",
    "InterchangeTime_10" : "InterchangeTime_10",
    "AuthorizationInformation_2" : "AuthorizationInformation_2",
    "InterchangeControlVersionNumber_12" : "InterchangeControlVersionNumber_12"
  },
  "Groups" : [ {
    "Transactions" : [ { }, { } ],
    "GETrailers" : [ {
      "NumberOfIncludedSets_1" : "NumberOfIncludedSets_1",
      "GroupControlNumber_2" : "GroupControlNumber_2"
    }, {
      "NumberOfIncludedSets_1" : "NumberOfIncludedSets_1",
      "GroupControlNumber_2" : "GroupControlNumber_2"
    } ],
    "GS" : {
      "Time_5" : "Time_5",
      "ReceiverIDCode_3" : "ReceiverIDCode_3",
      "CodeIdentifyingInformationType_1" : "CodeIdentifyingInformationType_1",
      "VersionAndRelease_8" : "VersionAndRelease_8",
      "SenderIDCode_2" : "SenderIDCode_2",
      "Date_4" : "Date_4",
      "TransactionTypeCode_7" : "TransactionTypeCode_7",
      "GroupControlNumber_6" : "GroupControlNumber_6"
    }
  }, {
    "Transactions" : [ { }, { } ],
    "GETrailers" : [ {
      "NumberOfIncludedSets_1" : "NumberOfIncludedSets_1",
      "GroupControlNumber_2" : "GroupControlNumber_2"
    }, {
      "NumberOfIncludedSets_1" : "NumberOfIncludedSets_1",
      "GroupControlNumber_2" : "GroupControlNumber_2"
    } ],
    "GS" : {
      "Time_5" : "Time_5",
      "ReceiverIDCode_3" : "ReceiverIDCode_3",
      "CodeIdentifyingInformationType_1" : "CodeIdentifyingInformationType_1",
      "VersionAndRelease_8" : "VersionAndRelease_8",
      "SenderIDCode_2" : "SenderIDCode_2",
      "Date_4" : "Date_4",
      "TransactionTypeCode_7" : "TransactionTypeCode_7",
      "GroupControlNumber_6" : "GroupControlNumber_6"
    }
  } ],
  "IEATrailers" : [ {
    "InterchangeControlNumber_2" : "InterchangeControlNumber_2",
    "NumberOfIncludedGroups_1" : "NumberOfIncludedGroups_1"
  }, {
    "InterchangeControlNumber_2" : "InterchangeControlNumber_2",
    "NumberOfIncludedGroups_1" : "NumberOfIncludedGroups_1"
  } ],
  "Result" : {
    "Status" : "Status",
    "Details" : [ {
      "Status" : "Status",
      "Message" : "Message",
      "SegmentId" : "SegmentId",
      "TransactionIndex" : 1,
      "TransactionRef" : "TransactionRef",
      "Value" : "Value",
      "Index" : 6,
      "DataElementIndex" : 5
    }, {
      "Status" : "Status",
      "Message" : "Message",
      "SegmentId" : "SegmentId",
      "TransactionIndex" : 1,
      "TransactionRef" : "TransactionRef",
      "Value" : "Value",
      "Index" : 6,
      "DataElementIndex" : 5
    } ],
    "LastIndex" : 0
  }
}, {
  "DataElementDelimiter" : "DataElementDelimiter",
  "SegmentDelimiter" : "SegmentDelimiter",
  "TA1" : {
    "InterchangeDate_2" : "InterchangeDate_2",
    "InterchangeAcknowledgmentCode_4" : "InterchangeAcknowledgmentCode_4",
    "InterchangeTime_3" : "InterchangeTime_3",
    "InterchangeControlNumber_1" : "InterchangeControlNumber_1",
    "InterchangeNoteCode_5" : "InterchangeNoteCode_5"
  },
  "ISA" : {
    "InterchangeReceiverID_8" : "InterchangeReceiverID_8",
    "SenderIDQualifier_5" : "SenderIDQualifier_5",
    "AcknowledgementRequested_14" : "AcknowledgementRequested_14",
    "SecurityInformation_4" : "SecurityInformation_4",
    "InterchangeDate_9" : "InterchangeDate_9",
    "InterchangeControlStandardsIdentifier_11" : "InterchangeControlStandardsIdentifier_11",
    "ComponentElementSeparator_16" : "ComponentElementSeparator_16",
    "SecurityInformationQualifier_3" : "SecurityInformationQualifier_3",
    "AuthorizationInformationQualifier_1" : "AuthorizationInformationQualifier_1",
    "InterchangeControlNumber_13" : "InterchangeControlNumber_13",
    "InterchangeSenderID_6" : "InterchangeSenderID_6",
    "UsageIndicator_15" : "UsageIndicator_15",
    "ReceiverIDQualifier_7" : "ReceiverIDQualifier_7",
    "InterchangeTime_10" : "InterchangeTime_10",
    "AuthorizationInformation_2" : "AuthorizationInformation_2",
    "InterchangeControlVersionNumber_12" : "InterchangeControlVersionNumber_12"
  },
  "Groups" : [ {
    "Transactions" : [ { }, { } ],
    "GETrailers" : [ {
      "NumberOfIncludedSets_1" : "NumberOfIncludedSets_1",
      "GroupControlNumber_2" : "GroupControlNumber_2"
    }, {
      "NumberOfIncludedSets_1" : "NumberOfIncludedSets_1",
      "GroupControlNumber_2" : "GroupControlNumber_2"
    } ],
    "GS" : {
      "Time_5" : "Time_5",
      "ReceiverIDCode_3" : "ReceiverIDCode_3",
      "CodeIdentifyingInformationType_1" : "CodeIdentifyingInformationType_1",
      "VersionAndRelease_8" : "VersionAndRelease_8",
      "SenderIDCode_2" : "SenderIDCode_2",
      "Date_4" : "Date_4",
      "TransactionTypeCode_7" : "TransactionTypeCode_7",
      "GroupControlNumber_6" : "GroupControlNumber_6"
    }
  }, {
    "Transactions" : [ { }, { } ],
    "GETrailers" : [ {
      "NumberOfIncludedSets_1" : "NumberOfIncludedSets_1",
      "GroupControlNumber_2" : "GroupControlNumber_2"
    }, {
      "NumberOfIncludedSets_1" : "NumberOfIncludedSets_1",
      "GroupControlNumber_2" : "GroupControlNumber_2"
    } ],
    "GS" : {
      "Time_5" : "Time_5",
      "ReceiverIDCode_3" : "ReceiverIDCode_3",
      "CodeIdentifyingInformationType_1" : "CodeIdentifyingInformationType_1",
      "VersionAndRelease_8" : "VersionAndRelease_8",
      "SenderIDCode_2" : "SenderIDCode_2",
      "Date_4" : "Date_4",
      "TransactionTypeCode_7" : "TransactionTypeCode_7",
      "GroupControlNumber_6" : "GroupControlNumber_6"
    }
  } ],
  "IEATrailers" : [ {
    "InterchangeControlNumber_2" : "InterchangeControlNumber_2",
    "NumberOfIncludedGroups_1" : "NumberOfIncludedGroups_1"
  }, {
    "InterchangeControlNumber_2" : "InterchangeControlNumber_2",
    "NumberOfIncludedGroups_1" : "NumberOfIncludedGroups_1"
  } ],
  "Result" : {
    "Status" : "Status",
    "Details" : [ {
      "Status" : "Status",
      "Message" : "Message",
      "SegmentId" : "SegmentId",
      "TransactionIndex" : 1,
      "TransactionRef" : "TransactionRef",
      "Value" : "Value",
      "Index" : 6,
      "DataElementIndex" : 5
    }, {
      "Status" : "Status",
      "Message" : "Message",
      "SegmentId" : "SegmentId",
      "TransactionIndex" : 1,
      "TransactionRef" : "TransactionRef",
      "Value" : "Value",
      "Index" : 6,
      "DataElementIndex" : 5
    } ],
    "LastIndex" : 0
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Validates an X12Interchange object according to the X12 standard rules for each version and transaction.
 *
 * body X12Interchange The X12Interchange object to validate. (optional)
 * basicSyntax Boolean All data elements with alpha (A) or alphanumeric (AN) data types are validated against a syntax set of allowed characters. The default syntax set is the Extended, hence the default for this parameter is false. By setting this to true, validation will use the Basic syntax set. (optional)
 * syntaxSet String In case you need to validate against a syntax set, different than Basic and Extended, populate this filed with all of the allowed symbols, url-escaped. (optional)
 * skipTrailer Boolean You are allowed to validate an X12Interchange with missing interchange, functional group or transaction trailers (IEA, GE, SE). This is because these will be automatically applied during the Write oprtaion so you don't have to worry about counting the items. By default it is expected that all trailers are present when you validate the X12Interchange and by default, this is set to false. To skip all trailer validation, set this to true. (optional)
 * structureOnly Boolean This is equivalent to HIPAA Snip level 1, where only the structure and control segments are validated. By default, this is set to false, however if you want to not validate things such as data types, number of repeteitions or dates, set this to true. (optional)
 * returns OperationResult
 **/
exports.x12ValidatePOST = function(body,basicSyntax,syntaxSet,skipTrailer,structureOnly) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "Status",
  "Details" : [ {
    "Status" : "Status",
    "Message" : "Message",
    "SegmentId" : "SegmentId",
    "TransactionIndex" : 1,
    "TransactionRef" : "TransactionRef",
    "Value" : "Value",
    "Index" : 6,
    "DataElementIndex" : 5
  }, {
    "Status" : "Status",
    "Message" : "Message",
    "SegmentId" : "SegmentId",
    "TransactionIndex" : 1,
    "TransactionRef" : "TransactionRef",
    "Value" : "Value",
    "Index" : 6,
    "DataElementIndex" : 5
  } ],
  "LastIndex" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Translates an X12Interchange object to a raw X12 interchange and returns it as a stream.
 *
 * body X12Interchange The X12Interchange object to translate to raw X12. (optional)
 * preserveWhitespace Boolean Whether to preserve blank data elements so the output contains multiple delimiters instead of omitting any excess delimiters. The default is false. (optional)
 * charSet String The encoding of the file contents. The default is utf-8. The available values are: unicodeFFFE, utf-32, utf-32BE, us-ascii, iso-8859-1, utf-7, utf-8, utf-16. (optional)
 * postfix String The postfix to be applied at the end of each segment, just after the segment separator. This is usually a carriage return (CR), line feed (LF) or both. By default, there is no postfix. (optional)
 * returns byte[]
 **/
exports.x12WritePOST = function(body,preserveWhitespace,charSet,postfix) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

