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
  DocumentType: 926,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "F11Loop1",
      Max: 500,
      Loop: [
        {
          ID: "F11",
        },
        {
          ID: "F14",
          Min: 0,
          Max: 99,
        },
        {
          ID: "TRN",
          Min: 0,
        },
        {
          ID: "F13",
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
