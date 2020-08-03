"use strict";
var validate = (function () {
  var refVal = [];
  return function validate(
    data,
    dataPath,
    parentData,
    parentDataProperty,
    rootData
  ) {
    "use strict";
    validate.errors = null;
    return true;
  };
})();
validate.schema = {
  Release: "00503",
  DocumentType: 829,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "PCR",
    },
    {
      ID: "TRN",
      Min: 0,
      Max: 2,
    },
    {
      ID: "DTM",
      Max: 10,
    },
    {
      ID: "REF",
      Min: 0,
      Max: 10,
    },
    {
      ID: "QTY",
      Min: 0,
      Max: 10,
    },
    {
      ID: "AMT",
      Min: 0,
      Max: 10,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
