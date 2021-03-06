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
  DocumentType: 286,
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
          ID: "N9",
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
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "SPILoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "SPI",
        },
        {
          ID: "HLLoop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "HL",
            },
            {
              ID: "LMLoop1",
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
                      ID: "MEA",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "QTY",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "PDL",
                      Min: 0,
                    },
                    {
                      ID: "AMT",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "YNQ",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "VEH",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "DVI",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "TC2",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "N12",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "H1",
                      Min: 0,
                      Max: "unbounded",
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
                          ID: "N9",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "PER",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "EMS",
                          Min: 0,
                        },
                        {
                          ID: "DTM",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "MEA",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "QTY",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "YNQ",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "TD5",
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
