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
  DocumentType: 158,
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
      Max: 2,
    },
    {
      ID: "DTPLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "DTP",
        },
        {
          ID: "LXLoop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "LX",
            },
            {
              ID: "NX2",
              Max: "unbounded",
            },
            {
              ID: "PPA",
              Min: 0,
            },
            {
              ID: "TA",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "ASI",
              Min: 0,
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
