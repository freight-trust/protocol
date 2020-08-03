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
  Release: "00204",
  DocumentType: 858,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "ZC",
      Min: 0,
    },
    {
      ID: "BX",
    },
    {
      ID: "BNX",
      Min: 0,
    },
    {
      ID: "M3",
      Min: 0,
    },
    {
      ID: "N9",
      Min: 0,
      Max: 30,
    },
    {
      ID: "Y6",
      Min: 0,
      Max: 4,
    },
    {
      ID: "Y7",
      Min: 0,
    },
    {
      ID: "C3",
      Min: 0,
    },
    {
      ID: "ITD",
      Min: 0,
    },
    {
      ID: "G62",
      Min: 0,
      Max: 10,
    },
    {
      ID: "PER",
      Min: 0,
      Max: 3,
    },
    {
      ID: "NA",
      Min: 0,
      Max: 30,
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
      ID: "R1",
      Min: 0,
    },
    {
      ID: "R2",
      Min: 0,
      Max: 13,
    },
    {
      ID: "R4",
      Min: 0,
      Max: 5,
    },
    {
      ID: "L4",
      Min: 0,
    },
    {
      ID: "H3",
      Min: 0,
      Max: 20,
    },
    {
      ID: "H6",
      Min: 0,
      Max: 6,
    },
    {
      ID: "E1",
      Min: 0,
    },
    {
      ID: "E4",
      Min: 0,
    },
    {
      ID: "E5",
      Min: 0,
      Max: 13,
    },
    {
      ID: "M1",
      Min: 0,
    },
    {
      ID: "M2",
      Min: 0,
    },
    {
      ID: "L7",
      Min: 0,
      Max: 30,
    },
    {
      ID: "NTE",
      Min: 0,
      Max: 30,
    },
    {
      ID: "XH",
      Min: 0,
    },
    {
      ID: "GA",
      Min: 0,
    },
    {
      ID: "H1Loop1",
      Min: 0,
      Max: 3,
      Loop: [
        {
          ID: "H1",
        },
        {
          ID: "H2",
          Min: 0,
          Max: 2,
        },
      ],
    },
    {
      ID: "N7Loop1",
      Min: 0,
      Max: 600,
      Loop: [
        {
          ID: "N7",
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
          ID: "REF",
          Min: 0,
          Max: 5,
        },
        {
          ID: "IC",
          Min: 0,
        },
        {
          ID: "VC",
          Min: 0,
          Max: 21,
        },
      ],
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Max: 10,
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
      ID: "S5Loop1",
      Min: 0,
      Max: 5,
      Loop: [
        {
          ID: "S5",
        },
        {
          ID: "G62",
          Min: 0,
          Max: 6,
        },
        {
          ID: "N9",
          Min: 0,
          Max: 10,
        },
        {
          ID: "H6",
          Min: 0,
          Max: 6,
        },
        {
          ID: "N1Loop2",
          Min: 0,
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
      ],
    },
    {
      ID: "LXLoop1",
      Max: 999,
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "L5",
          Min: 0,
          Max: 10,
        },
        {
          ID: "L0",
          Min: 0,
          Max: 10,
        },
        {
          ID: "L1",
          Min: 0,
          Max: 10,
        },
        {
          ID: "L4",
          Min: 0,
          Max: 10,
        },
        {
          ID: "L7",
          Min: 0,
          Max: 10,
        },
        {
          ID: "LH",
          Min: 0,
        },
        {
          ID: "N9",
          Min: 0,
          Max: 10,
        },
        {
          ID: "X1",
          Min: 0,
          Max: 6,
        },
        {
          ID: "X2",
          Min: 0,
        },
        {
          ID: "H1Loop2",
          Min: 0,
          Max: 3,
          Loop: [
            {
              ID: "H1",
            },
            {
              ID: "H2",
              Min: 0,
              Max: 2,
            },
          ],
        },
      ],
    },
    {
      ID: "L3",
      Min: 0,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
