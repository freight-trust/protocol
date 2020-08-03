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
  DocumentType: 485,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "DK",
    },
    {
      ID: "PRI",
      Min: 0,
    },
    {
      ID: "SA",
    },
    {
      ID: "SCLoop1",
      Min: 0,
      Max: 8,
      Loop: [
        {
          ID: "SC",
        },
        {
          ID: "RALoop1",
          Min: 0,
          Max: 10,
          Loop: [
            {
              ID: "RA",
            },
            {
              ID: "FK",
              Min: 0,
              Max: 5,
            },
            {
              ID: "MCLoop1",
              Min: 0,
              Max: 64,
              Loop: [
                {
                  ID: "MC",
                },
                {
                  ID: "FK",
                  Min: 0,
                  Max: 5,
                },
              ],
            },
            {
              ID: "SW",
              Min: 0,
              Max: 3,
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
