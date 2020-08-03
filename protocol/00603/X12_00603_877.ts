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
  DocumentType: 877,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "N1",
      Max: 3,
    },
    {
      ID: "DTM",
    },
    {
      ID: "ENTLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "ENT",
        },
        {
          ID: "LINLoop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "LIN",
            },
            {
              ID: "G28Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "G28",
                },
                {
                  ID: "G69",
                  Min: 0,
                },
              ],
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
