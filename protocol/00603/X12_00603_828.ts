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
  DocumentType: 828,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BAU",
    },
    {
      ID: "N1",
      Min: 0,
    },
    {
      ID: "N2",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "N3",
      Min: 0,
      Max: "unbounded",
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
      Max: "unbounded",
    },
    {
      ID: "DADLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "DAD",
        },
        {
          ID: "NM1",
          Min: 0,
        },
        {
          ID: "N2",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "N3",
          Min: 0,
          Max: "unbounded",
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
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "CTT",
    },
    {
      ID: "AMT",
      Min: 0,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
