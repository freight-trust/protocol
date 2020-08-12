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
  DocumentType: 324,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "V1",
    },
    {
      ID: "R4Loop1",
      Max: 20,
      Loop: [
        {
          ID: "R4",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 15,
        },
      ],
    },
    {
      ID: "N7Loop1",
      Max: 9999,
      Loop: [
        {
          ID: "N7",
        },
        {
          ID: "M7",
          Min: 0,
          Max: 5,
        },
        {
          ID: "ED",
          Min: 0,
        },
        {
          ID: "NA",
          Min: 0,
          Max: 2,
        },
        {
          ID: "V4",
        },
        {
          ID: "R4",
          Min: 0,
          Max: 9,
        },
        {
          ID: "W09",
          Min: 0,
        },
        {
          ID: "H3",
          Min: 0,
          Max: 6,
        },
        {
          ID: "H1",
          Min: 0,
          Max: 4,
        },
        {
          ID: "N9",
          Min: 0,
          Max: 10,
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
