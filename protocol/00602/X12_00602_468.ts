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
  Release: "00602",
  DocumentType: 468,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "REN",
    },
    {
      ID: "DKLoop1",
      Max: 100,
      Loop: [
        {
          ID: "DK",
        },
        {
          ID: "PI",
          Min: 0,
        },
        {
          ID: "JL",
          Min: 0,
        },
        {
          ID: "K1",
          Min: 0,
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
