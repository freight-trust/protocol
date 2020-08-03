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
  DocumentType: 312,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "B3",
    },
    {
      ID: "Y6",
      Min: 0,
      Max: 2,
    },
    {
      ID: "Q3",
    },
    {
      ID: "C3",
      Min: 0,
    },
    {
      ID: "G1",
      Min: 0,
    },
    {
      ID: "G2",
      Min: 0,
    },
    {
      ID: "R2",
      Min: 0,
      Max: 13,
    },
    {
      ID: "N9",
      Min: 0,
      Max: 15,
    },
    {
      ID: "V1",
      Max: 2,
    },
    {
      ID: "N1Loop1",
      Max: 10,
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
      ],
    },
    {
      ID: "R4Loop1",
      Max: 20,
      Loop: [
        {
          ID: "R4",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 15,
        },
      ],
    },
    {
      ID: "H3",
      Min: 0,
      Max: 6,
    },
    {
      ID: "L5",
      Min: 0,
    },
    {
      ID: "LXLoop1",
      Max: 999,
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "N7Loop1",
          Min: 0,
          Max: 999,
          Loop: [
            {
              ID: "N7",
            },
            {
              ID: "QTY",
              Min: 0,
            },
            {
              ID: "N12",
              Min: 0,
            },
            {
              ID: "M7",
              Min: 0,
              Max: 5,
            },
            {
              ID: "W09",
              Min: 0,
            },
            {
              ID: "L4",
              Min: 0,
            },
            {
              ID: "H1Loop1",
              Min: 0,
              Max: 2,
              Loop: [
                {
                  ID: "H1",
                },
                {
                  ID: "H2",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
            {
              ID: "LH1Loop1",
              Min: 0,
              Max: 100,
              Loop: [
                {
                  ID: "LH1",
                },
                {
                  ID: "LH2",
                  Min: 0,
                  Max: 4,
                },
                {
                  ID: "LH3",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "LFH",
                  Min: 0,
                  Max: 25,
                },
                {
                  ID: "LEP",
                  Min: 0,
                  Max: 3,
                },
                {
                  ID: "LH4",
                  Min: 0,
                },
                {
                  ID: "LHT",
                  Min: 0,
                  Max: 3,
                },
                {
                  ID: "LHR",
                  Min: 0,
                  Max: 5,
                },
                {
                  ID: "PER",
                  Min: 0,
                  Max: 5,
                },
              ],
            },
          ],
        },
        {
          ID: "L0Loop1",
          Min: 0,
          Max: 120,
          Loop: [
            {
              ID: "L0",
            },
            {
              ID: "L5",
              Min: 0,
              Max: 999,
            },
            {
              ID: "L1Loop1",
              Min: 0,
              Max: 20,
              Loop: [
                {
                  ID: "L1",
                },
                {
                  ID: "C3",
                  Min: 0,
                },
              ],
            },
            {
              ID: "L7",
              Min: 0,
            },
            {
              ID: "H1Loop2",
              Min: 0,
              Max: 2,
              Loop: [
                {
                  ID: "H1",
                },
                {
                  ID: "H2",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
            {
              ID: "LH1Loop2",
              Min: 0,
              Max: 100,
              Loop: [
                {
                  ID: "LH1",
                },
                {
                  ID: "LH2",
                  Min: 0,
                  Max: 4,
                },
                {
                  ID: "LH3",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "LFH",
                  Min: 0,
                  Max: 25,
                },
                {
                  ID: "LEP",
                  Min: 0,
                  Max: 3,
                },
                {
                  ID: "LH4",
                  Min: 0,
                },
                {
                  ID: "LHT",
                  Min: 0,
                  Max: 3,
                },
                {
                  ID: "LHR",
                  Min: 0,
                  Max: 5,
                },
                {
                  ID: "PER",
                  Min: 0,
                  Max: 5,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "V9",
      Min: 0,
      Max: 10,
    },
    {
      ID: "L3",
    },
    {
      ID: "L1Loop2",
      Min: 0,
      Max: 20,
      Loop: [
        {
          ID: "L1",
        },
        {
          ID: "C3",
          Min: 0,
        },
      ],
    },
    {
      ID: "K1",
      Min: 0,
      Max: 999,
    },
    {
      ID: "L11",
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
