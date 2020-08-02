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
  DocumentType: 815,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "CSM",
    },
    {
      ID: "CSB",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "CSCLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "CSC",
        },
        {
          ID: "DTP",
          Min: 0,
          Max: 9,
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
