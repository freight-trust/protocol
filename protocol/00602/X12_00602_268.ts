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
  DocumentType: 268,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "C3",
      Min: 0,
    },
    {
      ID: "DTP",
      Min: 0,
      Max: 9,
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
          ID: "REF",
          Min: 0,
          Max: 9,
        },
        {
          ID: "DTP",
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
              ID: "SPA",
              Min: 0,
              Max: 3,
            },
            {
              ID: "LIN",
              Min: 0,
              Max: 9,
            },
            {
              ID: "III",
              Min: 0,
              Max: 9,
            },
          ],
        },
        {
          ID: "PO1Loop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "PO1",
            },
            {
              ID: "SPA",
              Min: 0,
              Max: 3,
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 3,
            },
            {
              ID: "III",
              Min: 0,
              Max: 9,
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
              ID: "N3",
              Min: 0,
              Max: 3,
            },
            {
              ID: "N4",
              Min: 0,
            },
            {
              ID: "SPA",
              Min: 0,
              Max: 3,
            },
            {
              ID: "DTP",
              Min: 0,
              Max: 9,
            },
            {
              ID: "LIN",
              Min: 0,
              Max: 9,
            },
            {
              ID: "PAM",
              Min: 0,
              Max: 9,
            },
            {
              ID: "III",
              Min: 0,
              Max: 9,
            },
          ],
        },
        {
          ID: "CONLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "CON",
            },
            {
              ID: "REF",
              Min: 0,
              Max: 9,
            },
            {
              ID: "LIN",
              Min: 0,
              Max: 9,
            },
            {
              ID: "DTP",
              Min: 0,
              Max: 9,
            },
            {
              ID: "SPA",
              Min: 0,
              Max: 3,
            },
            {
              ID: "AMT",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PAM",
              Min: 0,
              Max: 9,
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
                  ID: "DMG",
                  Min: 0,
                },
                {
                  ID: "BEN",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "ASI",
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
                  ID: "LIN",
                  Min: 0,
                  Max: 3,
                },
                {
                  ID: "SPA",
                  Min: 0,
                  Max: 3,
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "AM1",
                  Min: 0,
                  Max: 9,
                },
              ],
            },
            {
              ID: "IT1Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "IT1",
                },
                {
                  ID: "REF",
                  Min: 0,
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "AM1",
                  Min: 0,
                  Max: 99,
                },
                {
                  ID: "SPA",
                  Min: 0,
                  Max: 3,
                },
                {
                  ID: "MSG",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "ACTLoop2",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "ACT",
                    },
                    {
                      ID: "LIN",
                      Min: 0,
                      Max: 9,
                    },
                    {
                      ID: "SPA",
                      Min: 0,
                      Max: 3,
                    },
                    {
                      ID: "AM1",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                      Max: 9,
                    },
                    {
                      ID: "MSG",
                      Min: 0,
                      Max: 9,
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
                      ID: "SPA",
                      Min: 0,
                      Max: 3,
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
                      ID: "DTM",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "G86",
                      Min: 0,
                    },
                    {
                      ID: "EFILoop1",
                      Max: "unbounded",
                      Loop: [
                        {
                          ID: "EFI",
                        },
                        {
                          ID: "BIN",
                          Min: 0,
                        },
                      ],
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
                  ID: "AM1",
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "RPALoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "RPA",
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                      Max: 3,
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
