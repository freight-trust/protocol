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
  DocumentType: 148,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BHT",
    },
    {
      ID: "CUR",
      Min: 0,
    },
    {
      ID: "QTY",
      Min: 0,
    },
    {
      ID: "REF",
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
        {
          ID: "PER",
          Min: 0,
          Max: 3,
        },
        {
          ID: "ACT",
          Min: 0,
          Max: 9,
        },
        {
          ID: "DTP",
          Min: 0,
          Max: 9,
        },
        {
          ID: "DMG",
          Min: 0,
        },
        {
          ID: "REF",
          Min: 0,
          Max: 9,
        },
        {
          ID: "QTY",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "CRC",
          Min: 0,
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "HLLoop1",
      Max: 999999,
      Loop: [
        {
          ID: "HL",
        },
        {
          ID: "CRI",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "ACT",
          Min: 0,
          Max: 2,
        },
        {
          ID: "DTP",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "CUR",
          Min: 0,
        },
        {
          ID: "AMT",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "FC",
          Min: 0,
          Max: 2,
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
          ID: "QTY",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "CRC",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "VEH",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "NM1Loop2",
          Min: 0,
          Max: 999,
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
              Max: 2,
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
              ID: "ACT",
              Min: 0,
              Max: 9,
            },
            {
              ID: "DTP",
              Min: 0,
              Max: 9,
            },
            {
              ID: "DMG",
              Min: 0,
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "QTY",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "CRC",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "ESILoop1",
          Min: 0,
          Max: 99,
          Loop: [
            {
              ID: "ESI",
            },
            {
              ID: "EMT",
              Min: 0,
            },
            {
              ID: "TPB",
              Min: 0,
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
              ID: "QTY",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "NM1",
              Min: 0,
            },
            {
              ID: "PER",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "CRC",
              Min: 0,
              Max: 9,
            },
            {
              ID: "LXLoop1",
              Min: 0,
              Max: 99,
              Loop: [
                {
                  ID: "LX",
                },
                {
                  ID: "AIN",
                  Min: 0,
                },
                {
                  ID: "CUR",
                  Min: 0,
                },
                {
                  ID: "TXI",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "WS",
                  Min: 0,
                  Max: 99,
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "QTY",
                  Min: 0,
                  Max: 9,
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
          ID: "LNLoop1",
          Min: 0,
          Max: 999,
          Loop: [
            {
              ID: "LN",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "VEHLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "VEH",
                },
                {
                  ID: "N4",
                  Min: 0,
                },
                {
                  ID: "PID",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "AMTLoop1",
              Min: 0,
              Max: 99,
              Loop: [
                {
                  ID: "AMT",
                },
                {
                  ID: "PCT",
                  Min: 0,
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "NM1Loop3",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "NM1",
                },
                {
                  ID: "DMG",
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
              ID: "LXLoop2",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "LX",
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
                      ID: "IMP",
                      Min: 0,
                      Max: 6,
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "CRC",
                      Min: 0,
                      Max: 9,
                    },
                    {
                      ID: "QTY",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "REF",
                      Min: 0,
                      Max: "unbounded",
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
                  ],
                },
                {
                  ID: "NM1Loop4",
                  Min: 0,
                  Max: 999,
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
                    {
                      ID: "ACT",
                      Min: 0,
                      Max: 9,
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "DMG",
                      Min: 0,
                    },
                    {
                      ID: "REF",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "CRC",
                      Min: 0,
                      Max: "unbounded",
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
          ID: "CFILoop1",
          Min: 0,
          Max: 999,
          Loop: [
            {
              ID: "CFI",
            },
            {
              ID: "CUR",
              Min: 0,
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 9,
            },
            {
              ID: "DTP",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "QTY",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "REL",
              Min: 0,
              Max: 30,
            },
            {
              ID: "REF",
              Min: 0,
              Max: 9,
            },
            {
              ID: "CRC",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "AD1Loop1",
              Min: 0,
              Max: 999,
              Loop: [
                {
                  ID: "AD1",
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
              ],
            },
            {
              ID: "NM1Loop5",
              Min: 0,
              Max: 999,
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
                {
                  ID: "ACT",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "DMG",
                  Min: 0,
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: 9,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "GRI",
      Min: 0,
      Max: 99,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
