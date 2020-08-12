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
  DocumentType: 127,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BVB",
    },
    {
      ID: "G62",
    },
    {
      ID: "VC",
      Min: 0,
      Max: 99,
    },
    {
      ID: "SFC",
      Min: 0,
      Max: 20,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
