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
  DocumentType: 250,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "L11",
      Min: 0,
      Max: 10,
    },
    {
      ID: "SSD",
      Min: 0,
      Max: 999999,
    },
    {
      ID: "PRFLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "PRF",
        },
        {
          ID: "L11",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "FOB",
          Min: 0,
        },
        {
          ID: "G05",
          Min: 0,
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 10,
        },
        {
          ID: "H3",
          Min: 0,
          Max: 6,
        },
        {
          ID: "N1Loop1",
          Min: 0,
          Max: "unbounded",
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
              Max: 2,
            },
            {
              ID: "N4",
              Min: 0,
            },
            {
              ID: "L11",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "G05",
              Min: 0,
            },
            {
              ID: "DTM",
              Min: 0,
              Max: 10,
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
