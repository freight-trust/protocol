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
  DocumentType: 120,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BVP",
    },
    {
      ID: "G62Loop1",
      Max: 99,
      Loop: [
        {
          ID: "G62",
        },
        {
          ID: "VCLoop1",
          Max: 999,
          Loop: [
            {
              ID: "VC",
            },
            {
              ID: "VC1",
              Min: 0,
            },
            {
              ID: "DTM",
              Min: 0,
            },
            {
              ID: "N1",
              Min: 0,
            },
            {
              ID: "N2",
              Min: 0,
              Max: 2,
            },
            {
              ID: "N3",
              Min: 0,
              Max: 2,
            },
            {
              ID: "N4",
              Min: 0,
            },
            {
              ID: "REF",
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
