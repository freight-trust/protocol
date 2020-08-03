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
  DocumentType: 269,
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
      Max: 2,
      Loop: [
        {
          ID: "N1",
        },
        {
          ID: "N2",
          Min: 0,
        },
        {
          ID: "N3",
          Min: 0,
        },
        {
          ID: "N4",
          Min: 0,
        },
        {
          ID: "PER",
          Min: 0,
        },
      ],
    },
    {
      ID: "TRNLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "TRN",
        },
        {
          ID: "CLP",
          Min: 0,
        },
        {
          ID: "DTP",
          Min: 0,
          Max: 2,
        },
        {
          ID: "AAA",
          Min: 0,
        },
        {
          ID: "NM1Loop1",
          Min: 0,
          Max: 4,
          Loop: [
            {
              ID: "NM1",
            },
            {
              ID: "N2",
              Min: 0,
            },
            {
              ID: "N3",
              Min: 0,
            },
            {
              ID: "N4",
              Min: 0,
            },
            {
              ID: "REF",
              Min: 0,
              Max: 9,
            },
            {
              ID: "PER",
              Min: 0,
            },
            {
              ID: "DTP",
              Min: 0,
            },
          ],
        },
        {
          ID: "SVCLoop1",
          Min: 0,
          Max: 999,
          Loop: [
            {
              ID: "SVC",
            },
            {
              ID: "DTP",
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
