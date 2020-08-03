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
  DocumentType: 151,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BTA",
    },
    {
      ID: "BTI",
    },
    {
      ID: "DTM",
      Min: 0,
      Max: 10,
    },
    {
      ID: "REF",
      Min: 0,
      Max: 10,
    },
    {
      ID: "AMT",
      Min: 0,
      Max: 10,
    },
    {
      ID: "QTY",
      Min: 0,
      Max: 10,
    },
    {
      ID: "PBILoop1",
      Min: 0,
      Max: 1000,
      Loop: [
        {
          ID: "PBI",
        },
        {
          ID: "TIA",
          Min: 0,
          Max: 2,
        },
      ],
    },
    {
      ID: "TFSLoop1",
      Min: 0,
      Max: 100000,
      Loop: [
        {
          ID: "TFS",
        },
        {
          ID: "REF",
          Min: 0,
          Max: 10,
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 10,
        },
        {
          ID: "PBILoop2",
          Min: 0,
          Max: 1000,
          Loop: [
            {
              ID: "PBI",
            },
            {
              ID: "TIA",
              Min: 0,
              Max: 2,
            },
          ],
        },
        {
          ID: "FGSLoop1",
          Min: 0,
          Max: 100000,
          Loop: [
            {
              ID: "FGS",
            },
            {
              ID: "REF",
              Min: 0,
              Max: 10,
            },
            {
              ID: "DTM",
              Min: 0,
              Max: 10,
            },
            {
              ID: "PBILoop3",
              Min: 0,
              Max: 1000,
              Loop: [
                {
                  ID: "PBI",
                },
                {
                  ID: "TIA",
                  Min: 0,
                  Max: 2,
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
