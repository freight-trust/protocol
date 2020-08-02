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
  DocumentType: 715,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "GR2",
    },
    {
      ID: "V1",
      Min: 0,
    },
    {
      ID: "N4",
      Min: 0,
    },
    {
      ID: "GR4Loop1",
      Max: 100,
      Loop: [
        {
          ID: "GR4",
        },
        {
          ID: "REF",
          Min: 0,
          Max: 5,
        },
        {
          ID: "N7Loop1",
          Min: 0,
          Max: 9999,
          Loop: [
            {
              ID: "N7",
            },
            {
              ID: "GR5",
              Min: 0,
              Max: 10,
            },
            {
              ID: "V1",
              Min: 0,
            },
            {
              ID: "N4",
              Min: 0,
            },
            {
              ID: "R4",
              Min: 0,
              Max: 10,
            },
            {
              ID: "REF",
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
