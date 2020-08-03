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
  DocumentType: 928,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BIX",
    },
    {
      ID: "TI",
      Min: 0,
    },
    {
      ID: "VCLoop1",
      Max: 36,
      Loop: [
        {
          ID: "VC",
        },
        {
          ID: "ID",
          Min: 0,
          Max: 99,
        },
      ],
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
