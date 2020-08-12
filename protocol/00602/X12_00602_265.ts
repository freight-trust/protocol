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
  DocumentType: 265,
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
      Max: 5,
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
          ID: "REF",
          Min: 0,
          Max: 12,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 3,
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
          ID: "REF",
          Max: 12,
        },
        {
          ID: "PDS",
          Max: 20,
        },
        {
          ID: "PDE",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "NX1",
          Min: 0,
        },
        {
          ID: "NX2",
          Min: 0,
          Max: 30,
        },
        {
          ID: "PRD",
          Min: 0,
        },
        {
          ID: "LRQ",
          Min: 0,
        },
        {
          ID: "LN1",
          Min: 0,
        },
        {
          ID: "MSG",
          Min: 0,
          Max: 100,
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
              Max: 30,
            },
            {
              ID: "DMG",
              Min: 0,
            },
            {
              ID: "FPT",
              Min: 0,
            },
            {
              ID: "N4Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "N4",
                },
                {
                  ID: "N3",
                  Min: 0,
                  Max: 2,
                },
                {
                  ID: "PER",
                  Min: 0,
                  Max: 4,
                },
              ],
            },
          ],
        },
        {
          ID: "MCDLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "MCD",
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 50,
            },
          ],
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
              ID: "REF",
              Min: 0,
              Max: 12,
            },
            {
              ID: "PER",
              Min: 0,
              Max: 3,
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 2,
            },
          ],
        },
        {
          ID: "TISLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "TIS",
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 30,
            },
          ],
        },
        {
          ID: "PWKLoop1",
          Min: 0,
          Max: 5,
          Loop: [
            {
              ID: "PWK",
            },
            {
              ID: "N1",
              Min: 0,
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
              ID: "REF",
              Min: 0,
              Max: 12,
            },
            {
              ID: "PER",
              Min: 0,
              Max: 3,
            },
          ],
        },
      ],
    },
    {
      ID: "LSLoop1",
      Min: 0,
      Loop: [
        {
          ID: "LS",
          Min: 1,
          Max: 1,
        },
        {
          ID: "TISLoop2",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "TIS",
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 30,
            },
            {
              ID: "MSG",
              Min: 0,
              Max: 100,
            },
          ],
        },
        {
          ID: "LE",
          Min: 1,
          Max: 1,
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
