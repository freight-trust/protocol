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
  Release: "00602",
  DocumentType: 317,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "N1Loop1",
      Max: 10,
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
        },
        {
          ID: "N9",
          Min: 0,
          Max: 9,
        },
      ],
    },
    {
      ID: "G62",
    },
    {
      ID: "N9",
      Max: 9,
    },
    {
      ID: "TD5",
    },
    {
      ID: "L0Loop1",
      Max: 9999,
      Loop: [
        {
          ID: "L0",
        },
        {
          ID: "L5",
          Min: 0,
          Max: 999,
        },
        {
          ID: "H1",
          Min: 0,
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
