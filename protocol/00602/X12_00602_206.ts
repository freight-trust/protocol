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
  DocumentType: 206,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "DTP",
      Min: 0,
    },
    {
      ID: "MSG",
      Min: 0,
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Max: "unbounded",
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
          Max: 2,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 3,
        },
      ],
    },
    {
      ID: "SILoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "SI",
        },
        {
          ID: "N9",
          Min: 0,
          Max: 2,
        },
        {
          ID: "RLT",
          Min: 0,
        },
        {
          ID: "REC",
          Min: 0,
        },
        {
          ID: "LN",
          Min: 0,
        },
        {
          ID: "PWK",
          Min: 0,
          Max: 5,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 2,
        },
        {
          ID: "DTP",
          Min: 0,
          Max: 10,
        },
        {
          ID: "AMT",
          Min: 0,
          Max: 20,
        },
        {
          ID: "NTE",
          Min: 0,
          Max: 5,
        },
        {
          ID: "CTP",
          Min: 0,
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
              Max: 12,
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
              Max: 5,
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
              ID: "REA",
              Min: 0,
            },
            {
              ID: "III",
              Min: 0,
              Max: 5,
            },
            {
              ID: "REC",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DTP",
              Min: 0,
              Max: 2,
            },
            {
              ID: "YNQ",
              Min: 0,
              Max: 20,
            },
            {
              ID: "NTE",
              Min: 0,
              Max: 10,
            },
            {
              ID: "PWK",
              Min: 0,
              Max: 2,
            },
            {
              ID: "PER",
              Min: 0,
              Max: 2,
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 20,
            },
            {
              ID: "CTP",
              Min: 0,
            },
            {
              ID: "N1Loop2",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "N1",
                },
                {
                  ID: "N2",
                  Min: 0,
                  Max: 10,
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
                {
                  ID: "CRC",
                  Min: 0,
                },
                {
                  ID: "DFI",
                  Min: 0,
                  Max: 5,
                },
                {
                  ID: "YNQ",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "AMT",
                  Min: 0,
                  Max: 5,
                },
                {
                  ID: "NTE",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "OBI",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "AIN",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "QTY",
                  Min: 0,
                  Max: 3,
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
