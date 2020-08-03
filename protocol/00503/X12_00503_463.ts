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
  DocumentType: 463,
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
      Min: 0,
      Max: 300000,
      Loop: [
        {
          ID: "DK",
        },
        {
          ID: "LQLoop1",
          Min: 0,
          Max: 10,
          Loop: [
            {
              ID: "LQ",
            },
            {
              ID: "NTE",
              Min: 0,
              Max: 10,
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
