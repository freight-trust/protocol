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
  DocumentType: 362,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "CUR",
    },
    {
      ID: "REF",
      Max: 9,
    },
    {
      ID: "N1",
    },
    {
      ID: "N2",
      Min: 0,
    },
    {
      ID: "DTP",
      Min: 0,
    },
    {
      ID: "L5Loop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "L5",
        },
        {
          ID: "REF",
          Max: 20,
        },
        {
          ID: "DTP",
          Max: 9,
        },
        {
          ID: "V1",
        },
        {
          ID: "N1",
          Min: 0,
          Max: 9,
        },
        {
          ID: "R1",
          Min: 0,
        },
        {
          ID: "QTY",
          Min: 0,
        },
        {
          ID: "PCT",
          Min: 0,
        },
        {
          ID: "R4Loop1",
          Max: 5,
          Loop: [
            {
              ID: "R4",
            },
            {
              ID: "NX2",
              Min: 0,
              Max: 20,
            },
          ],
        },
        {
          ID: "AMTLoop1",
          Max: 9,
          Loop: [
            {
              ID: "AMT",
            },
            {
              ID: "CUR",
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
                  ID: "PCT",
                  Min: 0,
                },
                {
                  ID: "DTP",
                  Min: 0,
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
