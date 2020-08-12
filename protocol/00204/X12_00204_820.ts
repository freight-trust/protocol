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
  Release: "00204",
  DocumentType: 820,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BPS",
    },
    {
      ID: "NTE",
      Min: 0,
      Max: 100,
    },
    {
      ID: "CUR",
      Min: 0,
    },
    {
      ID: "REF",
      Max: 5,
    },
    {
      ID: "DTM",
      Max: 10,
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Max: 200,
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
      ID: "LSLoop1",
      Loop: [
        {
          ID: "LS",
          Min: 1,
          Max: 1,
        },
        {
          ID: "N1Loop2",
          Max: 10000,
          Loop: [
            {
              ID: "N1",
            },
            {
              ID: "RMTLoop1",
              Max: 10000,
              Loop: [
                {
                  ID: "RMT",
                },
                {
                  ID: "CUR",
                  Min: 0,
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: 5,
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
          ID: "LE",
          Min: 1,
          Max: 1,
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
