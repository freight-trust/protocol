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
  DocumentType: 121,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BVS",
    },
    {
      ID: "N7",
      Min: 0,
    },
    {
      ID: "V1",
      Min: 0,
    },
    {
      ID: "G62",
      Min: 0,
      Max: 3,
    },
    {
      ID: "VCLoop1",
      Max: 9999,
      Loop: [
        {
          ID: "VC",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 3,
        },
        {
          ID: "DEL",
          Min: 0,
        },
        {
          ID: "CGS",
          Min: 0,
        },
        {
          ID: "REF",
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
