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
  DocumentType: 426,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "ZR",
    },
    {
      ID: "N9",
      Min: 0,
      Max: 30,
    },
    {
      ID: "DTM",
      Max: 5,
    },
    {
      ID: "CUR",
      Min: 0,
    },
    {
      ID: "NTE",
      Min: 0,
      Max: 2,
    },
    {
      ID: "PER",
      Min: 0,
      Max: 20,
    },
    {
      ID: "BX",
      Min: 0,
    },
    {
      ID: "BNXLoop1",
      Min: 0,
      Loop: [
        {
          ID: "BNX",
        },
        {
          ID: "N9",
          Min: 0,
          Max: 30,
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 5,
        },
        {
          ID: "N7Loop1",
          Max: 500,
          Loop: [
            {
              ID: "N7",
            },
            {
              ID: "VC",
              Min: 0,
              Max: 36,
            },
            {
              ID: "IC",
              Min: 0,
            },
            {
              ID: "G4",
              Min: 0,
            },
            {
              ID: "M7",
              Min: 0,
              Max: 5,
            },
            {
              ID: "N5",
              Min: 0,
            },
            {
              ID: "GA",
              Min: 0,
              Max: 15,
            },
          ],
        },
        {
          ID: "N8",
          Max: 499,
        },
        {
          ID: "N8A",
          Min: 0,
          Max: 499,
        },
        {
          ID: "V9",
          Min: 0,
        },
        {
          ID: "F9",
        },
        {
          ID: "D9",
        },
        {
          ID: "N1Loop1",
          Max: 15,
          Loop: [
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
              Max: 3,
            },
            {
              ID: "BL",
              Min: 0,
              Max: 12,
            },
          ],
        },
        {
          ID: "S1Loop1",
          Min: 0,
          Max: 12,
          Loop: [
            {
              ID: "S1",
            },
            {
              ID: "S9",
              Min: 0,
            },
          ],
        },
        {
          ID: "PI",
          Min: 0,
          Max: 12,
        },
        {
          ID: "R2Loop1",
          Max: 13,
          Loop: [
            {
              ID: "R2",
            },
            {
              ID: "R2BLoop1",
              Min: 0,
              Max: 4,
              Loop: [
                {
                  ID: "R2B",
                },
                {
                  ID: "R2C",
                  Min: 0,
                  Max: 20,
                },
                {
                  ID: "R2D",
                  Min: 0,
                  Max: 5,
                },
              ],
            },
          ],
        },
        {
          ID: "R9",
          Min: 0,
        },
        {
          ID: "H3",
          Min: 0,
          Max: 20,
        },
        {
          ID: "PS",
          Min: 0,
          Max: 5,
        },
        {
          ID: "LXLoop1",
          Min: 0,
          Max: 25,
          Loop: [
            {
              ID: "LX",
            },
            {
              ID: "L5",
              Min: 0,
              Max: 15,
            },
            {
              ID: "L0Loop1",
              Min: 0,
              Max: 25,
              Loop: [
                {
                  ID: "L0",
                },
                {
                  ID: "MEA",
                  Min: 0,
                  Max: 3,
                },
                {
                  ID: "L1",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: 2,
                },
                {
                  ID: "PI",
                  Min: 0,
                },
                {
                  ID: "CD",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
          ],
        },
        {
          ID: "T1Loop1",
          Min: 0,
          Max: 64,
          Loop: [
            {
              ID: "T1",
            },
            {
              ID: "T2",
              Min: 0,
              Max: 30,
            },
            {
              ID: "T3",
              Min: 0,
              Max: 12,
            },
            {
              ID: "T6",
              Min: 0,
            },
            {
              ID: "T8",
              Min: 0,
              Max: 99,
            },
          ],
        },
        {
          ID: "L3",
          Min: 0,
        },
        {
          ID: "L1A",
          Min: 0,
          Max: 13,
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
