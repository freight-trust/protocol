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
  DocumentType: 425,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "ZTLoop1",
      Max: 255,
      Loop: [
        {
          ID: "ZT",
        },
        {
          ID: "F9",
          Min: 0,
        },
        {
          ID: "D9",
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
