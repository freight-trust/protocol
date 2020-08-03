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
  Release: "00602",
  DocumentType: 831,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "DTM",
      Min: 0,
      Max: 2,
    },
    {
      ID: "N9",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "TRN",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "QTY",
      Min: 0,
      Max: 10,
    },
    {
      ID: "AMTLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "AMT",
        },
        {
          ID: "QTY",
          Min: 0,
        },
      ],
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
