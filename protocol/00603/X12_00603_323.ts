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
  Release: "00603",
  DocumentType: 323,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "V1",
    },
    {
      ID: "K1",
      Min: 0,
      Max: 2,
    },
    {
      ID: "R4Loop1",
      Max: 999,
      Loop: [
        {
          ID: "R4",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 15,
        },
        {
          ID: "V9",
          Max: 5,
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
