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
  DocumentType: 993,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "AK1",
    },
    {
      ID: "AK2",
      Min: 0,
    },
    {
      ID: "SPE",
      Min: 0,
    },
    {
      ID: "APE",
      Min: 0,
    },
    {
      ID: "S4ALoop1",
      Min: 0,
      Max: 2,
      Loop: [
        {
          ID: "S4A",
        },
        {
          ID: "SVA",
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
