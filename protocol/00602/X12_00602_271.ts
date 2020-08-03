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
  DocumentType: 271,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BHT",
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
          Max: 9,
        },
        {
          ID: "AAA",
          Min: 0,
          Max: 9,
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
              ID: "REF",
              Min: 0,
              Max: 9,
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
              Max: 3,
            },
            {
              ID: "AAA",
              Min: 0,
              Max: 9,
            },
            {
              ID: "PRV",
              Min: 0,
            },
            {
              ID: "DMG",
              Min: 0,
            },
            {
              ID: "INS",
              Min: 0,
            },
            {
              ID: "HI",
              Min: 0,
            },
            {
              ID: "DTP",
              Min: 0,
              Max: 9,
            },
            {
              ID: "LUI",
              Min: 0,
              Max: 9,
            },
            {
              ID: "MPI",
              Min: 0,
              Max: 9,
            },
            {
              ID: "EBLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "EB",
                },
                {
                  ID: "HSD",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: 20,
                },
                {
                  ID: "AAA",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "VEH",
                  Min: 0,
                },
                {
                  ID: "PID",
                  Min: 0,
                },
                {
                  ID: "PDR",
                  Min: 0,
                },
                {
                  ID: "PDP",
                  Min: 0,
                },
                {
                  ID: "LIN",
                  Min: 0,
                },
                {
                  ID: "EM",
                  Min: 0,
                },
                {
                  ID: "SD1",
                  Min: 0,
                },
                {
                  ID: "PKD",
                  Min: 0,
                },
                {
                  ID: "MSG",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "IIILoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "III",
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                      Max: 5,
                    },
                    {
                      ID: "AMT",
                      Min: 0,
                      Max: 5,
                    },
                    {
                      ID: "PCT",
                      Min: 0,
                      Max: 5,
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
                          ID: "AMT",
                          Min: 0,
                          Max: 5,
                        },
                        {
                          ID: "PCT",
                          Min: 0,
                          Max: 5,
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
                      ID: "NM1Loop2",
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
                          ID: "PRV",
                          Min: 0,
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
