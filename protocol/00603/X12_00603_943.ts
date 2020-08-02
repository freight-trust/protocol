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
  DocumentType: 943,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "W06",
    },
    {
      ID: "N1Loop1",
      Max: 10,
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
          ID: "PER",
          Min: 0,
          Max: 5,
        },
      ],
    },
    {
      ID: "N9",
      Min: 0,
      Max: 10,
    },
    {
      ID: "G61",
      Min: 0,
      Max: 3,
    },
    {
      ID: "G62",
      Min: 0,
      Max: 5,
    },
    {
      ID: "NTE",
      Min: 0,
      Max: 20,
    },
    {
      ID: "W27",
    },
    {
      ID: "W28",
      Min: 0,
    },
    {
      ID: "W10",
      Min: 0,
    },
    {
      ID: "W04Loop1",
      Max: 9999,
      Loop: [
        {
          ID: "W04",
        },
        {
          ID: "G69",
          Min: 0,
          Max: 5,
        },
        {
          ID: "N9",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "W20",
          Min: 0,
          Max: 2,
        },
      ],
    },
    {
      ID: "W03",
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
