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
  DocumentType: 874,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "DTM",
      Min: 0,
    },
    {
      ID: "III",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "N1Loop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "N1",
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
          Max: "unbounded",
        },
        {
          ID: "PER",
          Min: 0,
          Max: 3,
        },
      ],
    },
    {
      ID: "N9Loop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "N9",
        },
        {
          ID: "DTM",
          Min: 0,
        },
        {
          ID: "LCD",
          Min: 0,
        },
        {
          ID: "CS",
          Min: 0,
        },
        {
          ID: "N1",
          Min: 0,
        },
        {
          ID: "III",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "SLNLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "SLN",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "III",
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
