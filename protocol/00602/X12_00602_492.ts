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
  DocumentType: 492,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "DK",
    },
    {
      ID: "PRI",
    },
    {
      ID: "DM",
      Min: 0,
    },
    {
      ID: "SCLoop1",
      Min: 0,
      Max: 10,
      Loop: [
        {
          ID: "SC",
        },
        {
          ID: "DM",
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
