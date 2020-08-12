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
  DocumentType: 437,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BJF",
    },
    {
      ID: "DTM",
      Min: 0,
      Max: 10,
    },
    {
      ID: "JCT",
      Min: 0,
    },
    {
      ID: "JSLoop1",
      Min: 0,
      Max: 2,
      Loop: [
        {
          ID: "JS",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 3,
        },
        {
          ID: "SID",
          Min: 0,
          Max: 20,
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
