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
  DocumentType: 126,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BVALoop1",
      Max: 99,
      Loop: [
        {
          ID: "BVA",
        },
        {
          ID: "V1",
          Min: 0,
        },
        {
          ID: "L7",
          Min: 0,
          Max: 5,
        },
        {
          ID: "VADLoop1",
          Max: 99,
          Loop: [
            {
              ID: "VAD",
            },
            {
              ID: "L7",
              Min: 0,
              Max: 5,
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
