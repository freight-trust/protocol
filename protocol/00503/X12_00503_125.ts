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
  DocumentType: 125,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BMM",
    },
    {
      ID: "G62",
    },
    {
      ID: "N7",
    },
    {
      ID: "VC",
      Min: 0,
      Max: 21,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
