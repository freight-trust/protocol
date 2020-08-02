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
  DocumentType: 263,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "N1",
      Max: 2,
    },
    {
      ID: "LXLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "N1",
        },
        {
          ID: "REFLoop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "REF",
            },
            {
              ID: "N1",
            },
            {
              ID: "MIR",
            },
            {
              ID: "TXI",
              Min: 0,
              Max: 5,
            },
            {
              ID: "N9",
              Min: 0,
              Max: 10,
            },
            {
              ID: "MIC",
              Min: 0,
            },
            {
              ID: "G63Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "G63",
                },
                {
                  ID: "PCT",
                  Min: 0,
                },
              ],
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
