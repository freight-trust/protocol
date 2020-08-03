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
  DocumentType: 832,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BCT",
    },
    {
      ID: "CTP",
      Min: 0,
      Max: 100,
    },
    {
      ID: "REF",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "YNQ",
      Min: 0,
      Max: 10,
    },
    {
      ID: "PER",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "DTM",
      Min: 0,
      Max: 10,
    },
    {
      ID: "CTB",
      Min: 0,
      Max: 25,
    },
    {
      ID: "CUR",
      Min: 0,
      Max: 5,
    },
    {
      ID: "ITD",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "LDT",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "SAC",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "TD1",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "TD5",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "TD3",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "TD4",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "FOB",
      Min: 0,
    },
    {
      ID: "PKG",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "TXI",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "AAA",
      Min: 0,
    },
    {
      ID: "MTX",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "PWK",
      Min: 0,
      Max: 25,
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
          Max: "unbounded",
        },
        {
          ID: "REF",
          Min: 0,
          Max: 12,
        },
        {
          ID: "PKG",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PER",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 10,
        },
        {
          ID: "MTX",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "SPI",
          Min: 0,
        },
      ],
    },
    {
      ID: "LMLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "LM",
        },
        {
          ID: "LQ",
          Max: "unbounded",
        },
      ],
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
          ID: "DTM",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "MTX",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PWK",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "EFI",
          Min: 0,
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "G93Loop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "G93",
        },
        {
          ID: "SAC",
          Min: 0,
        },
        {
          ID: "N1",
          Min: 0,
        },
        {
          ID: "G26",
          Min: 0,
        },
      ],
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
          ID: "PO1",
          Min: 0,
        },
        {
          ID: "G53",
          Min: 0,
        },
        {
          ID: "SI",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 10,
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "YNQ",
          Min: 0,
          Max: 10,
        },
        {
          ID: "PER",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "CRD",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "CTB",
          Min: 0,
          Max: 25,
        },
        {
          ID: "PID",
          Min: 0,
          Max: 200,
        },
        {
          ID: "MEA",
          Min: 0,
          Max: 200,
        },
        {
          ID: "PKG",
          Min: 0,
          Max: 25,
        },
        {
          ID: "PO4",
          Min: 0,
        },
        {
          ID: "TD1",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "TD5",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "TD3",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "TD4",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "ITD",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "LDT",
          Min: 0,
        },
        {
          ID: "SAC",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "FOB",
          Min: 0,
        },
        {
          ID: "AAA",
          Min: 0,
        },
        {
          ID: "TC2",
          Min: 0,
          Max: 2,
        },
        {
          ID: "TXI",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "MTX",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "G55",
          Min: 0,
        },
        {
          ID: "G54",
          Min: 0,
        },
        {
          ID: "TRTLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "TRT",
            },
            {
              ID: "TRD",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "CTPLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "CTP",
            },
            {
              ID: "DTM",
              Min: 0,
              Max: 10,
            },
            {
              ID: "G36",
              Min: 0,
            },
            {
              ID: "LDT",
              Min: 0,
            },
            {
              ID: "CUR",
              Min: 0,
              Max: 5,
            },
            {
              ID: "PO4",
              Min: 0,
            },
            {
              ID: "CTB",
              Min: 0,
              Max: 5,
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "G43",
              Min: 0,
              Max: 9999,
            },
            {
              ID: "SAC",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "G26",
              Min: 0,
              Max: 99,
            },
            {
              ID: "TXI",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "ITD",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "G40Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "G40",
                },
                {
                  ID: "SAC",
                  Min: 0,
                },
                {
                  ID: "G93",
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
                  ID: "LMLoop2",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "LM",
                    },
                    {
                      ID: "LQ",
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
                  Max: 2,
                },
              ],
            },
            {
              ID: "N1Loop3",
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
                  Max: "unbounded",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "MTX",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "PKG",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "PAL",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "SPI",
                  Min: 0,
                },
              ],
            },
            {
              ID: "G39Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "G39",
                },
                {
                  ID: "CTP",
                  Min: 0,
                },
              ],
            },
            {
              ID: "PKLLoop1",
              Min: 0,
              Max: 20,
              Loop: [
                {
                  ID: "PKL",
                },
                {
                  ID: "CTP",
                  Min: 0,
                },
                {
                  ID: "PKG",
                  Min: 0,
                  Max: 2,
                },
                {
                  ID: "G53",
                  Min: 0,
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "LFGLoop1",
              Min: 0,
              Loop: [
                {
                  ID: "LFG",
                },
                {
                  ID: "CRCLoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "CRC",
                    },
                    {
                      ID: "QTY",
                      Min: 0,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          ID: "LMLoop3",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "LM",
            },
            {
              ID: "LQLoop1",
              Max: "unbounded",
              Loop: [
                {
                  ID: "LQ",
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "EFI",
                  Min: 0,
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "PIDLoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "PID",
                    },
                    {
                      ID: "MEA",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "MTX",
                      Min: 0,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          ID: "SLNLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "SLN",
            },
            {
              ID: "SI",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PID",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DTM",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "CTP",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PAM",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PO4",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PKG",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "QTY",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "MEA",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "SAC",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "MTX",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "LMLoop4",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "LM",
                },
                {
                  ID: "LQ",
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "N1Loop4",
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
                  Max: "unbounded",
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: 12,
                },
                {
                  ID: "PER",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
          ],
        },
        {
          ID: "N9Loop2",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "N9",
            },
            {
              ID: "DTM",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "MTX",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PWK",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "EFI",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
      ],
    },
    {
      ID: "CTT",
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
