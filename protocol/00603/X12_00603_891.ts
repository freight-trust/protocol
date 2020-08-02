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
  DocumentType: 891,
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
      ID: "PER",
      Min: 0,
      Max: 3,
    },
    {
      ID: "ENTLoop1",
      Max: 100,
      Loop: [
        {
          ID: "ENT",
        },
        {
          ID: "N9Loop1",
          Min: 0,
          Max: 100,
          Loop: [
            {
              ID: "N9",
            },
            {
              ID: "AMT",
              Min: 0,
            },
            {
              ID: "ADXLoop1",
              Min: 0,
              Max: 1000,
              Loop: [
                {
                  ID: "ADX",
                },
                {
                  ID: "AMT",
                  Min: 0,
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: 10,
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
