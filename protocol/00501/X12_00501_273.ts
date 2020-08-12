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
  DocumentType: 273,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "CUR",
      Min: 0,
    },
    {
      ID: "UD",
      Min: 0,
    },
    {
      ID: "NM1Loop1",
      Min: 0,
      Max: 2,
      Loop: [
        {
          ID: "NM1",
        },
        {
          ID: "N3",
          Min: 0,
          Max: 3,
        },
        {
          ID: "N4",
          Min: 0,
        },
        {
          ID: "REF",
          Min: 0,
          Max: 9,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 3,
        },
      ],
    },
    {
      ID: "ACTLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "ACT",
        },
        {
          ID: "PER",
          Min: 0,
          Max: 3,
        },
        {
          ID: "UD",
          Min: 0,
        },
        {
          ID: "DTP",
          Min: 0,
          Max: 19,
        },
        {
          ID: "BLI",
          Min: 0,
        },
        {
          ID: "AMT",
          Min: 0,
          Max: 9,
        },
        {
          ID: "LIN",
          Min: 0,
        },
        {
          ID: "REF",
          Min: 0,
          Max: 9,
        },
        {
          ID: "K3",
          Min: 0,
          Max: 3,
        },
        {
          ID: "LXLoop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "LX",
            },
            {
              ID: "BLI",
              Min: 0,
            },
            {
              ID: "INV",
              Min: 0,
              Max: 9,
            },
            {
              ID: "UD",
              Min: 0,
            },
            {
              ID: "M1",
              Min: 0,
            },
            {
              ID: "DTP",
              Min: 0,
              Max: 9,
            },
            {
              ID: "RPA",
              Min: 0,
            },
            {
              ID: "K3",
              Min: 0,
              Max: 3,
            },
            {
              ID: "BENLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "BEN",
                },
                {
                  ID: "NM1",
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
                  ID: "DTP",
                  Min: 0,
                },
              ],
            },
            {
              ID: "ENTLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "ENT",
                },
                {
                  ID: "NM1",
                  Min: 0,
                },
                {
                  ID: "N2",
                  Min: 0,
                  Max: 2,
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "N3",
                  Min: 0,
                  Max: 3,
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
                  ID: "DMG",
                  Min: 0,
                },
                {
                  ID: "DMA",
                  Min: 0,
                },
                {
                  ID: "REL",
                  Min: 0,
                },
                {
                  ID: "UD",
                  Min: 0,
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "QTY",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "K3",
                  Min: 0,
                  Max: 3,
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
                      ID: "V9",
                      Min: 0,
                    },
                    {
                      ID: "SPA",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                      Max: 9,
                    },
                    {
                      ID: "K3",
                      Min: 0,
                      Max: 3,
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
                          ID: "N3",
                          Min: 0,
                          Max: 3,
                        },
                        {
                          ID: "N4",
                          Min: 0,
                        },
                        {
                          ID: "G61",
                          Min: 0,
                          Max: 9,
                        },
                      ],
                    },
                  ],
                },
                {
                  ID: "BENLoop2",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "BEN",
                    },
                    {
                      ID: "NM1",
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
                      ID: "DTP",
                      Min: 0,
                    },
                  ],
                },
                {
                  ID: "BLILoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "BLI",
                    },
                    {
                      ID: "INV",
                      Min: 0,
                      Max: 9,
                    },
                    {
                      ID: "UD",
                      Min: 0,
                    },
                    {
                      ID: "UDA",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "M1",
                      Min: 0,
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                      Max: 9,
                    },
                    {
                      ID: "QTY",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "RPA",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "K3",
                      Min: 0,
                      Max: 3,
                    },
                    {
                      ID: "BENLoop3",
                      Min: 0,
                      Max: "unbounded",
                      Loop: [
                        {
                          ID: "BEN",
                        },
                        {
                          ID: "NM1",
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
                          ID: "DTP",
                          Min: 0,
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
          ID: "MSGLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "MSG",
            },
            {
              ID: "DTP",
              Min: 0,
            },
            {
              ID: "NM1",
              Min: 0,
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
