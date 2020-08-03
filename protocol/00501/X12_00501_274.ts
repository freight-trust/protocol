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
  DocumentType: 274,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BHT",
    },
    {
      ID: "DTM",
      Min: 0,
    },
    {
      ID: "PER",
      Min: 0,
    },
    {
      ID: "HLLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "HL",
        },
        {
          ID: "TRN",
          Min: 0,
        },
        {
          ID: "NM1Loop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "NM1",
            },
            {
              ID: "N2",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PER",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DMG",
              Min: 0,
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 20,
            },
            {
              ID: "API",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DEG",
              Min: 0,
              Max: 9,
            },
            {
              ID: "IND",
              Min: 0,
            },
            {
              ID: "LUI",
              Min: 0,
              Max: 9,
            },
            {
              ID: "DTP",
              Min: 0,
              Max: 9,
            },
            {
              ID: "MTX",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "QTY",
              Min: 0,
              Max: 99,
            },
            {
              ID: "WS",
              Min: 0,
              Max: 99,
            },
            {
              ID: "CRC",
              Min: 0,
              Max: 9,
            },
            {
              ID: "HSD",
              Min: 0,
              Max: 99,
            },
            {
              ID: "BCI",
              Min: 0,
              Max: 9,
            },
            {
              ID: "PDI",
              Min: 0,
            },
            {
              ID: "HAD",
              Min: 0,
            },
            {
              ID: "NX1Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "NX1",
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
                {
                  ID: "PER",
                  Min: 0,
                },
              ],
            },
            {
              ID: "LQLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "LQ",
                },
                {
                  ID: "N1",
                  Min: 0,
                  Max: 2,
                },
                {
                  ID: "TPB",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "QTY",
                  Min: 0,
                },
                {
                  ID: "YNQ",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "HPLLoop1",
              Min: 0,
              Max: 99,
              Loop: [
                {
                  ID: "HPL",
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "REFLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "REF",
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: 9,
                },
              ],
            },
            {
              ID: "EMSLoop1",
              Min: 0,
              Max: 9,
              Loop: [
                {
                  ID: "EMS",
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: 9,
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
