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
  DocumentType: 224,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "CF1",
    },
    {
      ID: "CF2Loop1",
      Max: 9999,
      Loop: [
        {
          ID: "CF2",
        },
        {
          ID: "L11",
          Min: 0,
          Max: 99,
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
