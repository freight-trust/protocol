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
  DocumentType: 452,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGP",
    },
    {
      ID: "N1",
      Min: 0,
    },
    {
      ID: "N9",
      Min: 0,
      Max: 5,
    },
    {
      ID: "DTP",
      Min: 0,
      Max: 2,
    },
    {
      ID: "NTE",
      Min: 0,
      Max: 999999,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
