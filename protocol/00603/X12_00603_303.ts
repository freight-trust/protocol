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
  DocumentType: 303,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "B1",
    },
    {
      ID: "Y6",
      Min: 0,
      Max: 2,
    },
    {
      ID: "Y5",
    },
    {
      ID: "V9",
      Min: 0,
      Max: 10,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
