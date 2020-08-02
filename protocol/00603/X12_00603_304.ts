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
  Release: "00603",
  DocumentType: 304,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "B2",
    },
    {
      ID: "B2A",
      Min: 0,
    },
    {
      ID: "Y6",
      Min: 0,
      Max: 2,
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
      ID: "G3",
      Min: 0,
    },
    {
      ID: "N9",
      Min: 0,
      Max: 100,
    },
    {
      ID: "YNQ",
      Min: 0,
      Max: 10,
    },
    {
      ID: "V1",
      Min: 0,
      Max: 2,
    },
    {
      ID: "V3",
      Min: 0,
    },
    {
      ID: "M0",
      Min: 0,
    },
    {
      ID: "CUR",
      Min: 0,
    },
    {
      ID: "M1Loop1",
      Min: 0,
      Max: 5,
      Loop: [
        {
          ID: "M1",
        },
        {
          ID: "CUR",
          Min: 0,
        },
      ],
    },
    {
      ID: "M2",
      Min: 0,
    },
    {
      ID: "C2",
      Min: 0,
    },
    {
      ID: "ITD",
      Min: 0,
    },
    {
      ID: "DTM",
      Min: 0,
      Max: 20,
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Max: 100,
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
          ID: "G61",
          Min: 0,
          Max: 3,
        },
      ],
    },
    {
      ID: "R4Loop1",
      Min: 0,
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
      ID: "R2A",
      Min: 0,
      Max: 25,
    },
    {
      ID: "R2",
      Min: 0,
      Max: 13,
    },
    {
      ID: "K1",
      Min: 0,
      Max: 12,
    },
    {
      ID: "L11",
      Min: 0,
      Max: 99,
    },
    {
      ID: "H3",
      Min: 0,
      Max: 6,
    },
    {
      ID: "L5",
      Min: 0,
      Max: 999,
    },
    {
      ID: "X1",
      Min: 0,
      Max: 25,
    },
    {
      ID: "X2",
      Min: 0,
      Max: 5,
    },
    {
      ID: "C8Loop1",
      Min: 0,
      Max: 20,
      Loop: [
        {
          ID: "C8",
        },
        {
          ID: "C8C",
          Min: 0,
          Max: 5,
        },
        {
          ID: "SUP",
          Min: 0,
          Max: 10,
        },
      ],
    },
    {
      ID: "LXLoop1",
      Min: 0,
      Max: 999,
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "Y2",
          Min: 0,
          Max: 10,
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
              ID: "L4",
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
              ID: "M7A",
              Min: 0,
              Max: 100,
            },
            {
              ID: "W09",
              Min: 0,
            },
            {
              ID: "LH6",
              Min: 0,
              Max: 6,
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
                  ID: "CUR",
                  Min: 0,
                },
              ],
            },
            {
              ID: "L7",
              Min: 0,
            },
            {
              ID: "X1",
              Min: 0,
              Max: 25,
            },
            {
              ID: "X2",
              Min: 0,
              Max: 5,
            },
            {
              ID: "N9",
              Min: 0,
              Max: 100,
            },
            {
              ID: "H1Loop1",
              Min: 0,
              Max: 10,
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
          ID: "L11",
          Min: 0,
          Max: 100,
        },
        {
          ID: "K1",
          Min: 0,
          Max: 10,
        },
        {
          ID: "PO4Loop1",
          Min: 0,
          Max: 100,
          Loop: [
            {
              ID: "PO4",
            },
            {
              ID: "MEA",
              Min: 0,
              Max: 5,
            },
            {
              ID: "MAN",
              Min: 0,
              Max: 5,
            },
            {
              ID: "N9",
              Min: 0,
              Max: 5,
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
              ID: "MEA",
              Min: 0,
              Max: 10,
            },
            {
              ID: "N9",
              Min: 0,
              Max: 100,
            },
            {
              ID: "PO4Loop2",
              Min: 0,
              Max: 100,
              Loop: [
                {
                  ID: "PO4",
                },
                {
                  ID: "MEA",
                  Min: 0,
                  Max: 5,
                },
                {
                  ID: "MAN",
                  Min: 0,
                  Max: 5,
                },
                {
                  ID: "N9",
                  Min: 0,
                  Max: 5,
                },
              ],
            },
            {
              ID: "QTY",
              Min: 0,
              Max: 5,
            },
            {
              ID: "L4",
              Min: 0,
            },
            {
              ID: "LH6",
              Min: 0,
              Max: 6,
            },
            {
              ID: "PALLoop1",
              Min: 0,
              Max: 3,
              Loop: [
                {
                  ID: "PAL",
                },
                {
                  ID: "QTY",
                  Min: 0,
                },
              ],
            },
            {
              ID: "CTPLoop1",
              Min: 0,
              Loop: [
                {
                  ID: "CTP",
                },
                {
                  ID: "CUR",
                  Min: 0,
                },
              ],
            },
            {
              ID: "L5",
              Min: 0,
              Max: 999,
            },
            {
              ID: "LIN",
              Min: 0,
            },
            {
              ID: "L12",
              Min: 0,
              Max: 20,
            },
            {
              ID: "YNQ",
              Min: 0,
              Max: 10,
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
                  ID: "CUR",
                  Min: 0,
                },
              ],
            },
            {
              ID: "L7",
              Min: 0,
            },
            {
              ID: "SACLoop1",
              Min: 0,
              Max: 10,
              Loop: [
                {
                  ID: "SAC",
                },
                {
                  ID: "CUR",
                  Min: 0,
                },
              ],
            },
            {
              ID: "L9Loop1",
              Min: 0,
              Max: 10,
              Loop: [
                {
                  ID: "L9",
                },
                {
                  ID: "CUR",
                  Min: 0,
                },
              ],
            },
            {
              ID: "X1",
              Min: 0,
              Max: 25,
            },
            {
              ID: "X2",
              Min: 0,
              Max: 5,
            },
            {
              ID: "C8Loop2",
              Min: 0,
              Max: 20,
              Loop: [
                {
                  ID: "C8",
                },
                {
                  ID: "C8C",
                  Min: 0,
                  Max: 5,
                },
                {
                  ID: "SUP",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
            {
              ID: "H1Loop2",
              Min: 0,
              Max: 10,
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
            {
              ID: "N1Loop2",
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
                  ID: "G61",
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
      ID: "L3Loop1",
      Min: 0,
      Loop: [
        {
          ID: "L3",
        },
        {
          ID: "CUR",
          Min: 0,
        },
        {
          ID: "MEA",
          Min: 0,
          Max: 5,
        },
        {
          ID: "PWK",
          Min: 0,
          Max: 50,
        },
        {
          ID: "SUP",
          Min: 0,
          Max: 999,
        },
        {
          ID: "L1Loop3",
          Min: 0,
          Max: 20,
          Loop: [
            {
              ID: "L1",
            },
            {
              ID: "CUR",
              Min: 0,
            },
          ],
        },
        {
          ID: "TDSLoop1",
          Min: 0,
          Loop: [
            {
              ID: "TDS",
            },
            {
              ID: "CUR",
              Min: 0,
            },
          ],
        },
        {
          ID: "SACLoop2",
          Min: 0,
          Max: 10,
          Loop: [
            {
              ID: "SAC",
            },
            {
              ID: "CUR",
              Min: 0,
            },
          ],
        },
        {
          ID: "L9Loop2",
          Min: 0,
          Max: 10,
          Loop: [
            {
              ID: "L9",
            },
            {
              ID: "CUR",
              Min: 0,
            },
          ],
        },
        {
          ID: "ISS",
          Min: 0,
          Max: 5,
        },
        {
          ID: "V9",
          Min: 0,
          Max: 10,
        },
        {
          ID: "K1",
          Min: 0,
          Max: 999,
        },
        {
          ID: "L11",
          Min: 0,
          Max: 24,
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
