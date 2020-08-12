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
  DocumentType: 251,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "SPI",
    },
    {
      ID: "DTM",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "CUR",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "MTX",
      Min: 0,
      Max: "unbounded",
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
          ID: "DTM",
          Min: 0,
          Max: "unbounded",
        },
      ],
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
          Max: "unbounded",
        },
        {
          ID: "G61",
          Min: 0,
          Max: 5,
        },
      ],
    },
    {
      ID: "PPLLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "PPL",
        },
        {
          ID: "REFLoop2",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "REF",
            },
            {
              ID: "DTM",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "PDLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "PD",
            },
            {
              ID: "PDD",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "PLLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "PL",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "AMT",
              Min: 0,
            },
            {
              ID: "PCT",
              Min: 0,
            },
            {
              ID: "QTY",
              Min: 0,
            },
            {
              ID: "NTE",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PDLoop2",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "PD",
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
                  ID: "PDD",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "MTX",
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
          ID: "PO1Loop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "PO1",
            },
            {
              ID: "PID",
              Min: 0,
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
              ID: "AMTLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "AMT",
                },
                {
                  ID: "PCT",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "MTX",
                  Min: 0,
                  Max: "unbounded",
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
                  ID: "QTY",
                },
                {
                  ID: "AMT",
                  Min: 0,
                  Max: 2,
                },
                {
                  ID: "NTE",
                  Min: 0,
                  Max: 5,
                },
                {
                  ID: "REF",
                  Min: 0,
                },
                {
                  ID: "DTM",
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
                      Max: 2,
                    },
                    {
                      ID: "N4",
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
