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
  DocumentType: 845,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BPA",
    },
    {
      ID: "CUR",
      Min: 0,
    },
    {
      ID: "NTE",
      Min: 0,
      Max: 10,
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
    {
      ID: "DTM",
      Min: 0,
      Max: 10,
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Max: 10000,
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
        {
          ID: "DTM",
          Min: 0,
          Max: 10,
        },
      ],
    },
    {
      ID: "CONLoop1",
      Max: 10000,
      Loop: [
        {
          ID: "CON",
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
          ID: "DTM",
          Min: 0,
          Max: 10,
        },
        {
          ID: "CTB",
          Min: 0,
          Max: 10,
        },
        {
          ID: "ITD",
          Min: 0,
          Max: "unbounded",
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
            {
              ID: "DTM",
              Min: 0,
              Max: 2,
            },
            {
              ID: "CTB",
              Min: 0,
              Max: 25,
            },
          ],
        },
        {
          ID: "PADLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "PAD",
            },
            {
              ID: "CTB",
              Min: 0,
              Max: 10,
            },
            {
              ID: "PID",
              Min: 0,
              Max: 200,
            },
            {
              ID: "MEA",
              Min: 0,
              Max: 40,
            },
            {
              ID: "UIT",
              Min: 0,
              Max: 20,
            },
            {
              ID: "QTY",
              Min: 0,
              Max: 5,
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 5,
            },
            {
              ID: "CUR",
              Min: 0,
            },
            {
              ID: "SSS",
              Min: 0,
            },
            {
              ID: "SHP",
              Min: 0,
            },
            {
              ID: "DTM",
              Min: 0,
              Max: 2,
            },
            {
              ID: "LINLoop1",
              Min: 0,
              Loop: [
                {
                  ID: "LIN",
                },
                {
                  ID: "G53",
                  Min: 0,
                },
                {
                  ID: "SLN",
                  Min: 0,
                  Max: 100,
                },
              ],
            },
            {
              ID: "N1Loop3",
              Min: 0,
              Max: 10000,
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
                  ID: "DTM",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "CTB",
                  Min: 0,
                  Max: 25,
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
                  ID: "CTB",
                  Min: 0,
                  Max: 25,
                },
                {
                  ID: "N1Loop4",
                  Min: 0,
                  Max: 10000,
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
                      ID: "DTM",
                      Min: 0,
                      Max: 10,
                    },
                    {
                      ID: "CTB",
                      Min: 0,
                      Max: 25,
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
      ID: "CTT",
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
