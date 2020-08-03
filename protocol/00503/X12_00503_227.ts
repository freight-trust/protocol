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
  DocumentType: 227,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BLR",
    },
    {
      ID: "N1Loop1",
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
          Max: 2,
        },
        {
          ID: "N4",
          Min: 0,
        },
        {
          ID: "G61",
          Min: 0,
          Max: 3,
        },
        {
          ID: "NTE",
          Min: 0,
          Max: 3,
        },
        {
          ID: "N7Loop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "N7",
            },
            {
              ID: "M7",
              Min: 0,
              Max: 2,
            },
            {
              ID: "G62",
              Min: 0,
            },
            {
              ID: "TRL",
              Min: 0,
            },
            {
              ID: "L11",
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
