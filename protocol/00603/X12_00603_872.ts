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
  DocumentType: 872,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "N1",
      Max: 5,
    },
    {
      ID: "NM1Loop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "NM1",
        },
        {
          ID: "REF",
          Min: 0,
          Max: 12,
        },
        {
          ID: "LRQLoop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "LRQ",
            },
            {
              ID: "LN1",
            },
            {
              ID: "PRD",
              Min: 0,
            },
            {
              ID: "MIC",
              Min: 0,
              Max: 5,
            },
            {
              ID: "PER",
              Min: 0,
              Max: 5,
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PEX",
              Min: 0,
              Max: 20,
            },
            {
              ID: "RES",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "CDILoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "CDI",
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
                      ID: "VDI",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "YNQ",
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
                      ID: "BUY",
                      Min: 0,
                    },
                  ],
                },
              ],
            },
            {
              ID: "SCMLoop1",
              Min: 0,
              Max: 10,
              Loop: [
                {
                  ID: "SCM",
                },
                {
                  ID: "SCS",
                  Min: 0,
                  Max: 5,
                },
                {
                  ID: "DTP",
                  Min: 0,
                },
              ],
            },
            {
              ID: "NX1Loop1",
              Min: 0,
              Max: 5,
              Loop: [
                {
                  ID: "NX1",
                },
                {
                  ID: "NX2",
                  Max: 30,
                },
                {
                  ID: "PASLoop1",
                  Max: 5,
                  Loop: [
                    {
                      ID: "PAS",
                    },
                    {
                      ID: "N1",
                      Min: 0,
                      Max: 2,
                    },
                    {
                      ID: "MSG",
                      Min: 0,
                      Max: 10,
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
                          ID: "AMT",
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
              ID: "IN1Loop1",
              Min: 0,
              Max: 12,
              Loop: [
                {
                  ID: "IN1",
                },
                {
                  ID: "IN2",
                  Max: 10,
                },
                {
                  ID: "YNQ",
                  Min: 0,
                  Max: 5,
                },
                {
                  ID: "DMG",
                  Min: 0,
                },
                {
                  ID: "MSG",
                  Min: 0,
                },
                {
                  ID: "N10",
                  Min: 0,
                },
                {
                  ID: "BFS",
                  Min: 0,
                },
                {
                  ID: "SCMLoop2",
                  Min: 0,
                  Max: 10,
                  Loop: [
                    {
                      ID: "SCM",
                    },
                    {
                      ID: "SCS",
                      Min: 0,
                      Max: 5,
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                    },
                  ],
                },
                {
                  ID: "NX1Loop2",
                  Min: 0,
                  Max: 10,
                  Loop: [
                    {
                      ID: "NX1",
                    },
                    {
                      ID: "NX2",
                      Max: 30,
                    },
                    {
                      ID: "N10",
                      Min: 0,
                    },
                  ],
                },
              ],
            },
            {
              ID: "REALoop1",
              Min: 0,
              Loop: [
                {
                  ID: "REA",
                },
                {
                  ID: "AMT",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
            {
              ID: "MCDLoop1",
              Min: 0,
              Loop: [
                {
                  ID: "MCD",
                },
                {
                  ID: "AMT",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
            {
              ID: "PRJLoop1",
              Min: 0,
              Loop: [
                {
                  ID: "PRJ",
                },
                {
                  ID: "PER",
                  Min: 0,
                  Max: 10,
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
