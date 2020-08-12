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
  DocumentType: 436,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "LFI",
    },
    {
      ID: "N7",
    },
    {
      ID: "K3",
      Min: 0,
      Max: 3,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
