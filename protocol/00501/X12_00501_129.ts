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
  DocumentType: 129,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "VR",
    },
    {
      ID: "G62",
      Max: 3,
    },
    {
      ID: "RTLoop1",
      Max: 99,
      Loop: [
        {
          ID: "RT",
        },
        {
          ID: "RT1",
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
