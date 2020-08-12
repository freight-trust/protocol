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
  DocumentType: 999,
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
          ID: "IK3Loop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "IK3",
            },
            {
              ID: "CTX",
              Min: 0,
              Max: 10,
            },
            {
              ID: "IK4Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "IK4",
                },
                {
                  ID: "CTX",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
          ],
        },
        {
          ID: "IK5",
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
