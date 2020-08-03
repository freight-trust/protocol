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
  DocumentType: 313,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "B4",
    },
    {
      ID: "N9",
      Min: 0,
      Max: 25,
    },
    {
      ID: "N1",
      Min: 0,
      Max: 2,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
