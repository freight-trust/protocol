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
  DocumentType: 429,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "RU1",
      Min: 0,
      Max: 999,
    },
    {
      ID: "RU2Loop1",
      Min: 0,
      Max: 999,
      Loop: [
        {
          ID: "RU2",
        },
        {
          ID: "RU3",
          Min: 0,
        },
        {
          ID: "NTE",
          Min: 0,
          Max: 2,
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
