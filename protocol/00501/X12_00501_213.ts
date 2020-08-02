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
  Release: "00501",
  DocumentType: 213,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "B11",
    },
    {
      ID: "C3",
      Min: 0,
    },
    {
      ID: "REF",
      Min: 0,
      Max: 10,
    },
    {
      ID: "L10",
      Min: 0,
      Max: 5,
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Max: 5,
      Loop: [
        {
          ID: "N1",
        },
        {
          ID: "N2",
          Min: 0,
        },
        {
          ID: "N3",
          Min: 0,
          Max: 2,
        },
        {
          ID: "N4",
          Min: 0,
        },
        {
          ID: "G61",
          Min: 0,
          Max: 2,
        },
        {
          ID: "REF",
          Min: 0,
          Max: 10,
        },
      ],
    },
    {
      ID: "K2",
      Min: 0,
      Max: 2,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
