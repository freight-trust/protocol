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
  DocumentType: 873,
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
    },
    {
      ID: "DTM",
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
          ID: "PER",
          Min: 0,
          Max: 3,
        },
      ],
    },
    {
      ID: "DTMLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "DTM",
        },
        {
          ID: "N9",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "LQ",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "LCD",
          Min: 0,
        },
        {
          ID: "MEA",
          Min: 0,
        },
        {
          ID: "QTY",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "AMT",
          Min: 0,
        },
        {
          ID: "CSLoop1",
          Min: 0,
          Loop: [
            {
              ID: "CS",
            },
            {
              ID: "N1",
              Min: 0,
              Max: "unbounded",
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
              ID: "LQ",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "N9",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "QTY",
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
                  ID: "LCD",
                  Min: 0,
                },
                {
                  ID: "N9",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "LQ",
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
