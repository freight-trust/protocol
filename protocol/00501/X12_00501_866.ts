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
  DocumentType: 866,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BSS",
    },
    {
      ID: "UIT",
      Min: 0,
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
          ID: "FOB",
          Min: 0,
        },
      ],
    },
    {
      ID: "DTMLoop1",
      Max: 100,
      Loop: [
        {
          ID: "DTM",
        },
        {
          ID: "UIT",
          Min: 0,
        },
        {
          ID: "QTY",
          Min: 0,
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "LINLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "LIN",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "QTY",
              Min: 0,
            },
            {
              ID: "PID",
              Min: 0,
            },
            {
              ID: "OQS",
              Min: 0,
            },
            {
              ID: "SLNLoop1",
              Min: 0,
              Max: 100,
              Loop: [
                {
                  ID: "SLN",
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
                },
                {
                  ID: "PER",
                  Min: 0,
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
                      ID: "QTY",
                      Min: 0,
                    },
                    {
                      ID: "MEA",
                      Min: 0,
                      Max: 10,
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
