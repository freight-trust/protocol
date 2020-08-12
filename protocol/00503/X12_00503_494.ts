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
  DocumentType: 494,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "REN",
    },
    {
      ID: "DK",
    },
    {
      ID: "PI",
      Max: 8,
    },
    {
      ID: "PR",
      Min: 0,
      Max: 200,
    },
    {
      ID: "SS",
      Min: 0,
    },
    {
      ID: "SA",
    },
    {
      ID: "CD",
      Min: 0,
      Max: 150,
    },
    {
      ID: "GY",
      Min: 0,
      Max: 150,
    },
    {
      ID: "RAB",
      Min: 0,
      Max: 12,
    },
    {
      ID: "PT",
      Min: 0,
      Max: 50,
    },
    {
      ID: "LXLoop1",
      Min: 0,
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "N4",
          Min: 0,
        },
        {
          ID: "PI",
          Min: 0,
          Max: 15,
        },
      ],
    },
    {
      ID: "R9Loop1",
      Min: 0,
      Max: 10,
      Loop: [
        {
          ID: "R9",
        },
        {
          ID: "R2BLoop1",
          Min: 0,
          Max: 10,
          Loop: [
            {
              ID: "R2B",
            },
            {
              ID: "R2C",
              Min: 0,
              Max: 10,
            },
          ],
        },
      ],
    },
    {
      ID: "SCLLoop1",
      Min: 0,
      Max: 999,
      Loop: [
        {
          ID: "SCL",
        },
        {
          ID: "RD",
          Min: 0,
          Max: 6,
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
