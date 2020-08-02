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
  DocumentType: 319,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BA2",
    },
    {
      ID: "CD1",
      Max: 999,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
