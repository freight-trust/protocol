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
  Release: "00501",
  DocumentType: 440,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BW",
    },
    {
      ID: "G4",
      Min: 0,
    },
    {
      ID: "G5",
      Max: 255,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
