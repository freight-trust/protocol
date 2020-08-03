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
  Release: "00503",
  DocumentType: 150,
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
    },
    {
      ID: "N2",
      Min: 0,
      Max: 2,
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
    {
      ID: "DTP",
      Min: 0,
    },
    {
      ID: "TFSLoop1",
      Max: 1000,
      Loop: [
        {
          ID: "TFS",
        },
        {
          ID: "DTP",
          Min: 0,
        },
        {
          ID: "MTX",
          Min: 0,
        },
        {
          ID: "TRSLoop1",
          Max: 100000,
          Loop: [
            {
              ID: "TRS",
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
              ID: "N1Loop1",
              Min: 0,
              Max: 1000,
              Loop: [
                {
                  ID: "N1",
                },
                {
                  ID: "DTP",
                  Min: 0,
                },
              ],
            },
          ],
        },
        {
          ID: "FGSLoop1",
          Max: 1000,
          Loop: [
            {
              ID: "FGS",
            },
            {
              ID: "DTP",
              Min: 0,
            },
            {
              ID: "TRSLoop2",
              Max: 100000,
              Loop: [
                {
                  ID: "TRS",
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
                  ID: "N1Loop2",
                  Min: 0,
                  Max: 1000,
                  Loop: [
                    {
                      ID: "N1",
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                    },
                  ],
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
