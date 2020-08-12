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
  DocumentType: 404,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "ZC1",
      Min: 0,
    },
    {
      ID: "BX",
      Min: 0,
    },
    {
      ID: "BNX",
      Min: 0,
    },
    {
      ID: "M3",
    },
    {
      ID: "N9",
      Max: 30,
    },
    {
      ID: "CM",
      Min: 0,
      Max: 2,
    },
    {
      ID: "M1",
      Min: 0,
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
          ID: "EM",
          Min: 0,
        },
        {
          ID: "VCLoop1",
          Min: 0,
          Max: 36,
          Loop: [
            {
              ID: "VC",
            },
            {
              ID: "N1Loop1",
              Min: 0,
              Max: 2,
              Loop: [
                {
                  ID: "N1",
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
                  ID: "H3",
                  Min: 0,
                },
              ],
            },
          ],
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
          ID: "IC",
          Min: 0,
        },
        {
          ID: "IM",
          Min: 0,
        },
        {
          ID: "M12",
          Min: 0,
          Max: 2,
        },
        {
          ID: "E1Loop1",
          Min: 0,
          Max: 2,
          Loop: [
            {
              ID: "E1",
            },
            {
              ID: "E4",
            },
            {
              ID: "E5",
              Max: 13,
            },
            {
              ID: "PI",
              Min: 0,
            },
          ],
        },
        {
          ID: "GA",
          Min: 0,
          Max: 15,
        },
        {
          ID: "REFLoop1",
          Min: 0,
          Max: 99,
          Loop: [
            {
              ID: "REF",
            },
            {
              ID: "N9",
              Min: 0,
              Max: 10,
            },
            {
              ID: "N10",
              Min: 0,
              Max: 15,
            },
            {
              ID: "SMD",
              Min: 0,
            },
            {
              ID: "VC",
              Min: 0,
              Max: 36,
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
                  ID: "PILoop1",
                  Min: 0,
                  Max: 30,
                  Loop: [
                    {
                      ID: "PI",
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
              ID: "N1Loop2",
              Min: 0,
              Max: 15,
              Loop: [
                {
                  ID: "N1",
                },
                {
                  ID: "N3",
                  Min: 0,
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
                  ID: "BL",
                  Min: 0,
                  Max: 12,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "NA",
      Min: 0,
      Max: 10,
    },
    {
      ID: "F9",
    },
    {
      ID: "D9",
    },
    {
      ID: "N1Loop3",
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
          ID: "REF",
          Min: 0,
          Max: 2,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 2,
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
          ID: "S2",
          Min: 0,
          Max: 2,
        },
        {
          ID: "S9",
          Min: 0,
        },
        {
          ID: "N1",
          Min: 0,
        },
        {
          ID: "N2",
          Min: 0,
        },
        {
          ID: "N3",
          Min: 0,
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
      ID: "R2",
      Max: 13,
    },
    {
      ID: "R9",
      Min: 0,
    },
    {
      ID: "E1Loop2",
      Min: 0,
      Max: 2,
      Loop: [
        {
          ID: "E1",
        },
        {
          ID: "E4",
        },
        {
          ID: "E5",
          Max: 13,
        },
        {
          ID: "PI",
          Min: 0,
        },
      ],
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
      Max: 25,
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "L5",
          Max: 15,
        },
        {
          ID: "L0Loop2",
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
              ID: "PILoop2",
              Min: 0,
              Max: 30,
              Loop: [
                {
                  ID: "PI",
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
          ID: "X1",
          Min: 0,
          Max: 6,
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
      ],
    },
    {
      ID: "L3",
      Min: 0,
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
          ID: "LH1Loop1",
          Min: 0,
          Max: 1000,
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
              Max: 20,
            },
            {
              ID: "LEP",
              Min: 0,
              Max: 3,
            },
            {
              ID: "LH4",
              Min: 0,
              Max: 4,
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
            {
              ID: "N1Loop4",
              Min: 0,
              Max: 10,
              Loop: [
                {
                  ID: "N1",
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
              ],
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
      ID: "PER",
      Min: 0,
      Max: 5,
    },
    {
      ID: "LH2",
      Min: 0,
      Max: 6,
    },
    {
      ID: "LHR",
      Min: 0,
    },
    {
      ID: "LH6",
      Min: 0,
      Max: 5,
    },
    {
      ID: "XH",
      Min: 0,
    },
    {
      ID: "X7",
      Min: 0,
      Max: 10,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
