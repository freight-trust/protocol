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
  DocumentType: 143,
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
      Max: 2,
    },
    {
      ID: "REF",
      Min: 0,
      Max: "unbounded",
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
          Max: 2,
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
          Max: 2,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 2,
        },
      ],
    },
    {
      ID: "LINLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "LIN",
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
          ID: "LOC",
          Min: 0,
        },
        {
          ID: "CID",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 2,
        },
        {
          ID: "QTY",
          Min: 0,
        },
        {
          ID: "PWK",
          Min: 0,
        },
        {
          ID: "N1Loop2",
          Min: 0,
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
              Max: 3,
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
              ID: "PER",
              Min: 0,
              Max: 2,
            },
            {
              ID: "QTY",
              Min: 0,
            },
          ],
        },
        {
          ID: "PRRLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "PRR",
            },
            {
              ID: "MSG",
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
                  ID: "MSG",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "REPLoop1",
              Max: "unbounded",
              Loop: [
                {
                  ID: "REP",
                },
                {
                  ID: "MSG",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "QTY",
                  Min: 0,
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
                      ID: "MSG",
                      Min: 0,
                      Max: "unbounded",
                    },
                  ],
                },
              ],
            },
            {
              ID: "PRTLoop1",
              Min: 0,
              Loop: [
                {
                  ID: "PRT",
                },
                {
                  ID: "N1",
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
                  Max: 3,
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
                  ID: "PER",
                  Min: 0,
                  Max: 2,
                },
              ],
            },
            {
              ID: "ITALoop1",
              Min: 0,
              Loop: [
                {
                  ID: "ITA",
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
          ID: "SLNLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "SLN",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "LOC",
              Min: 0,
            },
            {
              ID: "DTM",
              Min: 0,
              Max: 2,
            },
            {
              ID: "N1Loop3",
              Min: 0,
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
                  Max: 3,
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
                  ID: "PER",
                  Min: 0,
                  Max: 2,
                },
              ],
            },
            {
              ID: "PRRLoop2",
              Max: "unbounded",
              Loop: [
                {
                  ID: "PRR",
                },
                {
                  ID: "MSG",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "REPLoop2",
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "REP",
                    },
                    {
                      ID: "MSG",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "QTY",
                      Min: 0,
                    },
                  ],
                },
                {
                  ID: "PRTLoop2",
                  Min: 0,
                  Loop: [
                    {
                      ID: "PRT",
                    },
                    {
                      ID: "N1",
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
                      Max: 3,
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
                      ID: "PER",
                      Min: 0,
                      Max: 2,
                    },
                  ],
                },
                {
                  ID: "ITALoop2",
                  Min: 0,
                  Loop: [
                    {
                      ID: "ITA",
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
