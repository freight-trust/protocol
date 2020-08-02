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
  DocumentType: 824,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
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
          Max: 12,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 3,
        },
      ],
    },
    {
      ID: "OTILoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "OTI",
        },
        {
          ID: "REF",
          Min: 0,
          Max: 12,
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 2,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 3,
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
          ID: "NM1",
          Min: 0,
          Max: 9,
        },
        {
          ID: "TEDLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "TED",
            },
            {
              ID: "CTX",
              Min: 0,
              Max: 10,
            },
            {
              ID: "NTE",
              Min: 0,
              Max: 100,
            },
            {
              ID: "RED",
              Min: 0,
              Max: 100,
            },
          ],
        },
        {
          ID: "LMLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "LM",
            },
            {
              ID: "LQLoop1",
              Max: 100,
              Loop: [
                {
                  ID: "LQ",
                },
                {
                  ID: "RED",
                  Min: 0,
                  Max: 100,
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
