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
  DocumentType: 352,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "M10",
    },
    {
      ID: "P4Loop1",
      Max: 20,
      Loop: [
        {
          ID: "P4",
        },
        {
          ID: "M14Loop1",
          Max: 9999,
          Loop: [
            {
              ID: "M14",
            },
            {
              ID: "K1",
              Min: 0,
              Max: 4,
            },
          ],
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
