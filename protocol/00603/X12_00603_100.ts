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
  Release: "00603",
  DocumentType: 100,
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
      Max: "unbounded",
    },
    {
      ID: "NM1Loop1",
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
          Max: "unbounded",
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
          ID: "COM",
          Min: 0,
          Max: 9,
        },
        {
          ID: "III",
          Min: 0,
          Max: 9,
        },
        {
          ID: "MSG",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PERLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "PER",
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
          ],
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
              ID: "LIN",
              Min: 0,
              Max: 9,
            },
            {
              ID: "DTP",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "NM1",
              Min: 0,
              Max: "unbounded",
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
                  ID: "DTP",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "III",
                  Min: 0,
                  Max: "unbounded",
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
                  ID: "SILoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "SI",
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
                  ],
                },
              ],
            },
            {
              ID: "AM1Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "AM1",
                },
                {
                  ID: "MSG",
                  Min: 0,
                  Max: "unbounded",
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
                  ID: "III",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "N4Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "N4",
                },
                {
                  ID: "SPA",
                  Min: 0,
                  Max: 3,
                },
                {
                  ID: "AM1Loop2",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "AM1",
                    },
                    {
                      ID: "MSG",
                      Min: 0,
                      Max: "unbounded",
                    },
                  ],
                },
                {
                  ID: "PO1Loop2",
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
                      ID: "III",
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
