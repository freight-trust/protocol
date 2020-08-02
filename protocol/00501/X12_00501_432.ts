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
  DocumentType: 432,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "BLR",
    },
    {
      ID: "N9",
      Min: 0,
      Max: 10,
    },
    {
      ID: "DTM",
      Min: 0,
      Max: 6,
    },
    {
      ID: "QTY",
      Min: 0,
    },
    {
      ID: "LXLoop1",
      Min: 0,
      Max: 10,
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "LQ",
          Min: 0,
          Max: 8,
        },
        {
          ID: "DRT",
          Min: 0,
          Max: 6,
        },
        {
          ID: "CICLoop1",
          Max: 1500,
          Loop: [
            {
              ID: "CIC",
            },
            {
              ID: "DRT",
              Min: 0,
              Max: 12,
            },
            {
              ID: "QTY",
              Min: 0,
            },
          ],
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
