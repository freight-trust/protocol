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
  DocumentType: 466,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "REN",
    },
    {
      ID: "DK",
      Min: 0,
    },
    {
      ID: "PR1",
      Min: 0,
    },
    {
      ID: "PR2",
      Min: 0,
    },
    {
      ID: "PI",
      Min: 0,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
