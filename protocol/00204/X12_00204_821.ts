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
  Release: "00204",
  DocumentType: 821,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "N1Loop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "N1",
        },
        {
          ID: "PER",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "ACTLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "ACT",
            },
            {
              ID: "CUR",
              Min: 0,
            },
            {
              ID: "BAL",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "FIRLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "FIR",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "TRN",
              Min: 0,
            },
            {
              ID: "AVA",
              Min: 0,
              Max: "unbounded",
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
