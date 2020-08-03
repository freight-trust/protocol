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
  DocumentType: 468,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "DK",
    },
    {
      ID: "JLLoop1",
      Max: 7,
      Loop: [
        {
          ID: "JL",
        },
        {
          ID: "K1",
          Max: 100,
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
