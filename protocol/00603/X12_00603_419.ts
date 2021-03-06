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
  DocumentType: 419,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "E6Loop1",
      Max: 150,
      Loop: [
        {
          ID: "E6",
        },
        {
          ID: "W3",
          Min: 0,
        },
        {
          ID: "W5",
          Min: 0,
          Max: 4,
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
