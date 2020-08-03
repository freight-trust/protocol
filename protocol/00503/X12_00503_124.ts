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
  Release: "00503",
  DocumentType: 124,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "DTM",
      Min: 0,
    },
    {
      ID: "C3",
      Min: 0,
    },
    {
      ID: "SUPLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "SUP",
        },
        {
          ID: "MSG",
          Min: 0,
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "NM1Loop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "NM1",
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
          Max: "unbounded",
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
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
          ID: "TXI",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "YNQ",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "AP1",
          Min: 0,
        },
        {
          ID: "SUPLoop2",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "SUP",
            },
            {
              ID: "MSG",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "LMLoop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "LM",
            },
            {
              ID: "LQ",
            },
            {
              ID: "CTP",
              Min: 0,
            },
            {
              ID: "TXI",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "SAC",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "VEHLoop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "VEH",
            },
            {
              ID: "PID",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "BCI",
              Min: 0,
            },
            {
              ID: "AMT",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "LID",
              Min: 0,
            },
            {
              ID: "LQ",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DAM",
              Min: 0,
            },
            {
              ID: "CRC",
              Min: 0,
            },
            {
              ID: "DVI",
              Min: 0,
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
              ID: "III",
              Min: 0,
            },
            {
              ID: "DTP",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "VATLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "VAT",
                },
                {
                  ID: "AMT",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: "unbounded",
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
                      Max: "unbounded",
                    },
                    {
                      ID: "REF",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "F13",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "AMT",
                      Min: 0,
                      Max: "unbounded",
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
              ID: "LMLoop2",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "LM",
                },
                {
                  ID: "LQ",
                },
                {
                  ID: "AMTLoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "AMT",
                    },
                    {
                      ID: "QTY",
                      Min: 0,
                    },
                    {
                      ID: "TXI",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "REF",
                      Min: 0,
                      Max: "unbounded",
                    },
                  ],
                },
              ],
            },
            {
              ID: "N9Loop1",
              Max: "unbounded",
              Loop: [
                {
                  ID: "N9",
                },
                {
                  ID: "LQ",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "ID",
                  Min: 0,
                },
                {
                  ID: "DP",
                  Min: 0,
                },
                {
                  ID: "MSG",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "AMT",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "PCT",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "DLLoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "DL",
                    },
                    {
                      ID: "AMT",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "QTY",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "PCT",
                      Min: 0,
                      Max: "unbounded",
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
