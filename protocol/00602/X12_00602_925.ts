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
  DocumentType: 925,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "F10Loop1",
      Max: 99,
      Loop: [
        {
          ID: "F10",
        },
        {
          ID: "F02",
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
