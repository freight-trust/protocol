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
  DocumentType: 490,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "REN",
    },
    {
      ID: "DK",
    },
    {
      ID: "GH",
    },
    {
      ID: "PI",
      Min: 0,
      Max: 8,
    },
    {
      ID: "TT",
      Min: 0,
      Max: 999,
    },
    {
      ID: "GY",
      Min: 0,
      Max: 999,
    },
    {
      ID: "CD",
      Min: 0,
      Max: 999,
    },
    {
      ID: "PR",
      Min: 0,
      Max: 999,
    },
    {
      ID: "PTLoop1",
      Min: 0,
      Max: 999,
      Loop: [
        {
          ID: "PT",
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
          ID: "PER",
          Min: 0,
          Max: 2,
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
