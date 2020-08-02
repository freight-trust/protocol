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
  DocumentType: 108,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "BLR",
    },
    {
      ID: "G62",
      Min: 0,
      Max: 10,
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
          ID: "PER",
          Min: 0,
          Max: 5,
        },
      ],
    },
    {
      ID: "CA1Loop1",
      Max: 99999,
      Loop: [
        {
          ID: "CA1",
        },
        {
          ID: "LC1",
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
