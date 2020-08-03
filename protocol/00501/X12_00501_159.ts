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
  DocumentType: 159,
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
      Max: 2,
    },
    {
      ID: "LXLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "REF",
          Max: 10,
        },
        {
          ID: "THELoop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "THE",
            },
            {
              ID: "N9",
              Min: 0,
              Max: 20,
            },
            {
              ID: "N4",
              Min: 0,
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
              ID: "LUI",
              Min: 0,
            },
            {
              ID: "MEA",
              Min: 0,
            },
            {
              ID: "LQ",
              Min: 0,
            },
            {
              ID: "DTPLoop1",
              Max: "unbounded",
              Loop: [
                {
                  ID: "DTP",
                },
                {
                  ID: "QTY",
                  Min: 0,
                },
                {
                  ID: "LQ",
                  Min: 0,
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
                      ID: "PCT",
                      Min: 0,
                    },
                    {
                      ID: "AMT",
                      Min: 0,
                    },
                    {
                      ID: "QTY",
                      Min: 0,
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
              ID: "G63Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "G63",
                },
                {
                  ID: "QTY",
                  Min: 0,
                  Max: 2,
                },
                {
                  ID: "REF",
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
                      ID: "PCT",
                      Min: 0,
                    },
                    {
                      ID: "AMT",
                      Min: 0,
                    },
                    {
                      ID: "QTY",
                      Min: 0,
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
