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
  DocumentType: 924,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "F01",
    },
    {
      ID: "F6X",
    },
    {
      ID: "F02",
      Min: 0,
    },
    {
      ID: "F12",
      Min: 0,
    },
    {
      ID: "F07",
      Max: 99,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
