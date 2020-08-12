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
  DocumentType: 175,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "REF",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "CDSLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "CDS",
        },
        {
          ID: "SPI",
          Min: 0,
        },
        {
          ID: "MSG",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "LSLoop1",
          Loop: [
            {
              ID: "LS",
              Min: 1,
              Max: 1,
            },
            {
              ID: "CEDLoop1",
              Max: "unbounded",
              Loop: [
                {
                  ID: "CED",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "SPI",
                  Min: 0,
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "AMT",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "PAM",
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
                {
                  ID: "CDS",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "MSG",
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
                {
                  ID: "NM1Loop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "NM1",
                    },
                    {
                      ID: "SPI",
                      Min: 0,
                      Max: 2,
                    },
                    {
                      ID: "N2",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "N3",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "N4",
                      Min: 0,
                    },
                    {
                      ID: "REF",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "DTM",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "PER",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "DMG",
                      Min: 0,
                    },
                    {
                      ID: "MEA",
                      Min: 0,
                      Max: 3,
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
                          ID: "REF",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "III",
                          Min: 0,
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
                      ],
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
