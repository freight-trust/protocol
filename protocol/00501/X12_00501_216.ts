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
  DocumentType: 216,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "PUN",
    },
    {
      ID: "G61",
      Min: 0,
    },
    {
      ID: "TEM",
      Min: 0,
    },
    {
      ID: "PRF",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "AT5",
      Min: 0,
      Max: 10,
    },
    {
      ID: "K2",
      Min: 0,
    },
    {
      ID: "N1Loop1",
      Max: 2,
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
