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
  DocumentType: 161,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BTS",
    },
    {
      ID: "V9",
      Max: 100,
    },
    {
      ID: "N9",
      Min: 0,
      Max: 3,
    },
    {
      ID: "H3",
      Min: 0,
      Max: 5,
    },
    {
      ID: "FAC",
      Min: 0,
      Max: 10,
    },
    {
      ID: "PWK",
      Min: 0,
    },
    {
      ID: "PER",
      Min: 0,
      Max: 5,
    },
    {
      ID: "NM1Loop1",
      Min: 0,
      Max: 10,
      Loop: [
        {
          ID: "NM1",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 3,
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
