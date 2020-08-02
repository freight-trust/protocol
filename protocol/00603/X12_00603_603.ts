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
  DocumentType: 603,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
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
        },
        {
          ID: "N4",
          Min: 0,
        },
        {
          ID: "PER",
          Min: 0,
        },
      ],
    },
    {
      ID: "N21Loop1",
      Max: 9999,
      Loop: [
        {
          ID: "N21",
        },
        {
          ID: "VEH",
          Min: 0,
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 10,
        },
        {
          ID: "MEA",
          Min: 0,
          Max: 20,
        },
        {
          ID: "N9",
          Min: 0,
          Max: 20,
        },
        {
          ID: "LQ",
          Min: 0,
          Max: 20,
        },
        {
          ID: "YNQ",
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
