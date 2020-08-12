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
  DocumentType: 187,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "MSG",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "REF",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "PER",
      Min: 0,
      Max: 3,
    },
    {
      ID: "DTP",
      Min: 0,
      Max: 10,
    },
    {
      ID: "N1Loop1",
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
      ],
    },
    {
      ID: "HLLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "HL",
        },
        {
          ID: "LXLoop1",
          Min: 0,
          Loop: [
            {
              ID: "LX",
            },
            {
              ID: "VEH",
              Min: 0,
            },
            {
              ID: "VAT",
              Min: 0,
              Max: 20,
            },
            {
              ID: "DVI",
              Min: 0,
            },
            {
              ID: "SI",
              Min: 0,
              Max: 8,
            },
            {
              ID: "PID",
              Min: 0,
              Max: 10,
            },
            {
              ID: "MEA",
              Min: 0,
              Max: 10,
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 5,
            },
            {
              ID: "AD1",
              Min: 0,
              Max: 20,
            },
            {
              ID: "DTP",
              Min: 0,
              Max: 20,
            },
            {
              ID: "TXI",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "QTYLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "QTY",
                },
                {
                  ID: "SI",
                  Min: 0,
                },
              ],
            },
            {
              ID: "EFILoop1",
              Min: 0,
              Max: 5,
              Loop: [
                {
                  ID: "EFI",
                },
                {
                  ID: "BIN",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
          ],
        },
        {
          ID: "NM1Loop1",
          Min: 0,
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
              ID: "DMG",
              Min: 0,
            },
            {
              ID: "DMA",
              Min: 0,
            },
            {
              ID: "MEA",
              Min: 0,
              Max: 10,
            },
            {
              ID: "NX2",
              Min: 0,
            },
            {
              ID: "REF",
              Min: 0,
              Max: 10,
            },
            {
              ID: "PER",
              Min: 0,
              Max: "unbounded",
            },
          ],
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
              ID: "SI",
              Min: 0,
              Max: 2,
            },
            {
              ID: "PID",
              Min: 0,
              Max: 10,
            },
            {
              ID: "MEA",
              Min: 0,
              Max: 10,
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DTP",
              Min: 0,
              Max: 10,
            },
            {
              ID: "MSG",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 10,
            },
            {
              ID: "AD1",
              Min: 0,
              Max: 20,
            },
            {
              ID: "CRC",
              Min: 0,
              Max: 50,
            },
            {
              ID: "PCT",
              Min: 0,
              Max: 10,
            },
            {
              ID: "PDP",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PDR",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PDS",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "SUPLoop1",
              Max: "unbounded",
              Loop: [
                {
                  ID: "SUP",
                },
                {
                  ID: "MEA",
                  Min: 0,
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "AMT",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "AD1",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "QTYLoop2",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "QTY",
                },
                {
                  ID: "SI",
                  Min: 0,
                },
              ],
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
                  Max: 10,
                },
                {
                  ID: "AD1",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "PCT",
                  Min: 0,
                  Max: 10,
                },
              ],
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
                  ID: "DMG",
                  Min: 0,
                },
                {
                  ID: "DMA",
                  Min: 0,
                },
                {
                  ID: "NX2",
                  Min: 0,
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "PER",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "ITALoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "ITA",
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: 5,
                },
                {
                  ID: "CUR",
                  Min: 0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "TDS",
    },
    {
      ID: "ITALoop2",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "ITA",
        },
        {
          ID: "DTP",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "CUR",
          Min: 0,
        },
      ],
    },
    {
      ID: "BALLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "BAL",
        },
        {
          ID: "DTP",
          Min: 0,
          Max: "unbounded",
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
          ID: "BALLoop2",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "BAL",
            },
            {
              ID: "DTP",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "ITALoop3",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "ITA",
            },
            {
              ID: "DTP",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "CUR",
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
