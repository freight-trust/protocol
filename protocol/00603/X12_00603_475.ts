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
  DocumentType: 475,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "R9Loop1",
      Max: 50,
      Loop: [
        {
          ID: "R9",
        },
        {
          ID: "PER",
          Min: 0,
        },
        {
          ID: "DTM",
          Max: 10,
        },
        {
          ID: "RDD",
          Min: 0,
          Max: 5,
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
