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
  DocumentType: 160,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BAX",
    },
    {
      ID: "AES",
    },
    {
      ID: "YNQ",
    },
    {
      ID: "N9",
      Min: 0,
      Max: 10,
    },
    {
      ID: "QTY",
      Min: 0,
      Max: 5,
    },
    {
      ID: "MEA",
      Min: 0,
      Max: 10,
    },
    {
      ID: "AEI",
      Min: 0,
      Max: 16,
    },
    {
      ID: "EILoop1",
      Max: 500,
      Loop: [
        {
          ID: "EI",
        },
        {
          ID: "QTY",
          Min: 0,
          Max: 20,
        },
        {
          ID: "MEA",
          Min: 0,
          Max: 20,
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 20,
        },
        {
          ID: "TSILoop1",
          Min: 0,
          Max: 25,
          Loop: [
            {
              ID: "TSI",
            },
            {
              ID: "YNQ",
              Min: 0,
              Max: 25,
            },
            {
              ID: "LQ",
              Min: 0,
              Max: 25,
            },
            {
              ID: "QTYLoop1",
              Min: 0,
              Max: 20,
              Loop: [
                {
                  ID: "QTY",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: 2,
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
