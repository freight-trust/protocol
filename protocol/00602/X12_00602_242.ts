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
  Release: "00602",
  DocumentType: 242,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "IRP",
      Min: 0,
    },
    {
      ID: "DTP",
      Min: 0,
      Max: 10,
    },
    {
      ID: "REF",
      Min: 0,
      Max: 10,
    },
    {
      ID: "MSG",
      Min: 0,
    },
    {
      ID: "HLLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "HL",
        },
        {
          ID: "IIS",
          Min: 0,
        },
        {
          ID: "N1",
          Min: 0,
        },
        {
          ID: "REF",
          Min: 0,
          Max: 10,
        },
        {
          ID: "QTY",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "STSLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "STS",
            },
            {
              ID: "N1",
              Min: 0,
            },
            {
              ID: "REF",
              Min: 0,
              Max: 10,
            },
            {
              ID: "QTY",
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
