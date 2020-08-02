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
  DocumentType: 264,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "MIS",
      Min: 0,
    },
    {
      ID: "N1Loop1",
      Max: 2,
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
        },
        {
          ID: "N4",
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
      ID: "LXLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 2,
        },
        {
          ID: "N1",
          Min: 0,
        },
        {
          ID: "N2",
          Min: 0,
        },
        {
          ID: "N3",
          Min: 0,
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
        {
          ID: "QTY",
          Min: 0,
          Max: 2,
        },
        {
          ID: "AMT",
          Min: 0,
          Max: 2,
        },
        {
          ID: "DTPLoop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "DTP",
            },
            {
              ID: "REF",
              Max: 10,
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
                },
                {
                  ID: "N3",
                  Min: 0,
                },
                {
                  ID: "N4",
                  Min: 0,
                },
                {
                  ID: "PER",
                  Min: 0,
                  Max: 2,
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: 4,
                },
              ],
            },
            {
              ID: "LSLoop1",
              Min: 0,
              Loop: [
                {
                  ID: "LS",
                  Min: 1,
                  Max: 1,
                },
                {
                  ID: "RECLoop1",
                  Min: 0,
                  Loop: [
                    {
                      ID: "REC",
                    },
                    {
                      ID: "N3",
                      Min: 0,
                    },
                    {
                      ID: "N4",
                      Min: 0,
                    },
                    {
                      ID: "DFI",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "QTY",
                      Min: 0,
                    },
                    {
                      ID: "AMT",
                      Min: 0,
                      Max: 10,
                    },
                    {
                      ID: "INT",
                      Min: 0,
                    },
                    {
                      ID: "SOM",
                      Min: 0,
                      Max: 10,
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                      Max: 14,
                    },
                    {
                      ID: "MRC",
                      Min: 0,
                      Max: 2,
                    },
                    {
                      ID: "MSG",
                      Min: 0,
                      Max: 11,
                    },
                    {
                      ID: "YNQ",
                      Min: 0,
                      Max: 2,
                    },
                    {
                      ID: "PER",
                      Min: 0,
                      Max: "unbounded",
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
      ],
    },
    {
      ID: "QTY",
      Min: 0,
      Max: 2,
    },
    {
      ID: "AMT",
      Min: 0,
      Max: 2,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
