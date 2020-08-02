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
  DocumentType: 261,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "TRN",
      Min: 0,
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Max: 3,
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
        {
          ID: "REF",
          Min: 0,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 10,
        },
      ],
    },
    {
      ID: "LXLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "AM1",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTP",
          Min: 0,
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "LN1",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "AMT",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "QTY",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PWK",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "NTE",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "NM1Loop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "NM1",
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
              ID: "REF",
              Min: 0,
            },
            {
              ID: "PER",
              Min: 0,
              Max: 10,
            },
            {
              ID: "DTP",
              Min: 0,
              Max: 2,
            },
          ],
        },
        {
          ID: "NX1Loop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "NX1",
            },
            {
              ID: "NX2",
              Max: "unbounded",
            },
            {
              ID: "DTP",
              Max: 7,
            },
            {
              ID: "YNQ",
              Min: 0,
              Max: 16,
            },
            {
              ID: "REF",
              Min: 0,
              Max: 5,
            },
            {
              ID: "PDS",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PDE",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PEX",
              Min: 0,
              Max: 5,
            },
            {
              ID: "REC",
              Min: 0,
            },
            {
              ID: "REA",
              Min: 0,
            },
            {
              ID: "III",
              Min: 0,
              Max: 30,
            },
            {
              ID: "AM1",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "API",
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
              ID: "PCT",
              Min: 0,
              Max: 4,
            },
            {
              ID: "NTE",
              Min: 0,
              Max: 10,
            },
            {
              ID: "PWKLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "PWK",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: 2,
                },
              ],
            },
            {
              ID: "IN1Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "IN1",
                },
                {
                  ID: "IN2",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "III",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "PER",
                  Min: 0,
                  Max: 2,
                },
                {
                  ID: "DTM",
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
