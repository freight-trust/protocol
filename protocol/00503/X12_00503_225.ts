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
  Release: "00503",
  DocumentType: 225,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "SCP",
    },
    {
      ID: "L11",
      Min: 0,
      Max: 5,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
