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
  DocumentType: 455,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BTC",
    },
    {
      ID: "DTP",
      Min: 0,
    },
    {
      ID: "ED",
      Min: 0,
      Max: 500000,
    },
    {
      ID: "BLR",
      Min: 0,
      Max: 5,
    },
    {
      ID: "N9",
      Min: 0,
    },
    {
      ID: "V9",
      Min: 0,
      Max: 99,
    },
    {
      ID: "LXLoop1",
      Min: 0,
      Max: 99,
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "PRM",
          Min: 0,
        },
        {
          ID: "N1",
          Min: 0,
        },
        {
          ID: "F9",
          Min: 0,
        },
        {
          ID: "D9",
          Min: 0,
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
