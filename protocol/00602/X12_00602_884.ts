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
  DocumentType: 884,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BMP",
    },
    {
      ID: "N1",
      Max: 5,
    },
    {
      ID: "G61",
      Min: 0,
      Max: 3,
    },
    {
      ID: "NTE",
      Min: 0,
      Max: 10,
    },
    {
      ID: "QTY",
      Min: 0,
    },
    {
      ID: "BAL",
      Min: 0,
    },
    {
      ID: "N9Loop1",
      Min: 0,
      Max: 999,
      Loop: [
        {
          ID: "N9",
        },
        {
          ID: "AMT",
          Min: 0,
        },
        {
          ID: "N1",
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
