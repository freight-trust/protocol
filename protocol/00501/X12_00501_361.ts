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
  DocumentType: 361,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "N1",
    },
    {
      ID: "CILoop1",
      Max: 9999,
      Loop: [
        {
          ID: "CI",
        },
        {
          ID: "K1",
          Min: 0,
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
