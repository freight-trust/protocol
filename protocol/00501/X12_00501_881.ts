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
  Release: "00501",
  DocumentType: 881,
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
      Max: 5,
    },
    {
      ID: "PER",
      Min: 0,
      Max: 3,
    },
    {
      ID: "N1Loop1",
      Max: 5,
      Loop: [
        {
          ID: "N1",
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
      ],
    },
    {
      ID: "G01Loop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "G01",
        },
        {
          ID: "QTY",
          Max: 4,
        },
        {
          ID: "AMT",
          Max: 2,
        },
        {
          ID: "G72Loop1",
          Min: 0,
          Max: 10,
          Loop: [
            {
              ID: "G72",
            },
            {
              ID: "G73",
              Min: 0,
            },
          ],
        },
        {
          ID: "N1Loop2",
          Max: "unbounded",
          Loop: [
            {
              ID: "N1",
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
              ID: "N9",
              Min: 0,
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
                  ID: "QTY",
                  Min: 0,
                  Max: 2,
                },
                {
                  ID: "AMT",
                  Min: 0,
                },
                {
                  ID: "G72",
                  Min: 0,
                },
                {
                  ID: "LQLoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "LQ",
                    },
                    {
                      ID: "AMT",
                      Min: 0,
                    },
                    {
                      ID: "LIN",
                      Min: 0,
                    },
                    {
                      ID: "QTY",
                      Min: 0,
                    },
                    {
                      ID: "G72",
                      Min: 0,
                    },
                    {
                      ID: "G73",
                      Min: 0,
                      Max: 5,
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
      ID: "LXLoop1",
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "QTY",
        },
        {
          ID: "AMT",
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
