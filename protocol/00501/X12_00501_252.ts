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
  DocumentType: 252,
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
      ID: "N1Loop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "N1",
        },
        {
          ID: "N2",
          Min: 0,
          Max: 3,
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
          ID: "N9",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "ENTLoop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "ENT",
            },
            {
              ID: "ASI",
            },
            {
              ID: "DTP",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "YNQ",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
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
              ID: "AM1",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "AMT",
              Min: 0,
            },
            {
              ID: "MSG",
              Min: 0,
              Max: "unbounded",
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
                  Max: 3,
                },
                {
                  ID: "EMS",
                  Min: 0,
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "N9Loop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "N9",
                    },
                    {
                      ID: "AM1",
                      Min: 0,
                    },
                  ],
                },
                {
                  ID: "N3Loop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "N3",
                    },
                    {
                      ID: "N4",
                      Min: 0,
                    },
                    {
                      ID: "COM",
                      Min: 0,
                      Max: 9,
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                      Max: "unbounded",
                    },
                  ],
                },
              ],
            },
            {
              ID: "LXLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "LX",
                },
                {
                  ID: "N9",
                  Min: 0,
                },
                {
                  ID: "N4",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "REFLoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "REF",
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
              ID: "UCLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "UC",
                },
                {
                  ID: "III",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "EMS",
                  Min: 0,
                },
                {
                  ID: "NM1",
                  Min: 0,
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
                  Max: 9,
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "CDS",
                  Min: 0,
                },
                {
                  ID: "CED",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "TST",
                  Min: 0,
                },
                {
                  ID: "SRE",
                  Min: 0,
                },
                {
                  ID: "MSG",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "LICLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "LIC",
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "AM1",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "LINLoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "LIN",
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                      Max: "unbounded",
                    },
                  ],
                },
              ],
            },
            {
              ID: "ACTLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "ACT",
                },
                {
                  ID: "SPALoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "SPA",
                    },
                    {
                      ID: "N4",
                      Min: 0,
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "YNQ",
                      Min: 0,
                    },
                    {
                      ID: "AM1",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "REF",
                      Min: 0,
                      Max: 3,
                    },
                    {
                      ID: "MSG",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "LINLoop2",
                      Min: 0,
                      Max: "unbounded",
                      Loop: [
                        {
                          ID: "LIN",
                        },
                        {
                          ID: "DTP",
                          Min: 0,
                          Max: "unbounded",
                        },
                      ],
                    },
                  ],
                },
              ],
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
                  ID: "NM1",
                  Min: 0,
                },
                {
                  ID: "N4",
                  Min: 0,
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "EFILoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "EFI",
                    },
                    {
                      ID: "BIN",
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
