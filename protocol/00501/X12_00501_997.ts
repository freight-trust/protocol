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
  DocumentType: 997,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "AK1",
    },
    {
      ID: "AK2Loop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "AK2",
        },
        {
          ID: "AK3Loop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "AK3",
            },
            {
              ID: "AK4",
              Min: 0,
              Max: 99,
            },
          ],
        },
        {
          ID: "AK5",
        },
      ],
    },
    {
      ID: "AK9",
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
