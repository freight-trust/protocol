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
  Release: "00501",
  DocumentType: 896,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
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
        },
        {
          ID: "N4",
          Min: 0,
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
      Max: 10,
    },
    {
      ID: "NTE",
      Min: 0,
      Max: 20,
    },
    {
      ID: "G43",
      Min: 0,
      Max: 200,
    },
    {
      ID: "ID1Loop1",
      Max: 999,
      Loop: [
        {
          ID: "ID1",
        },
        {
          ID: "ID2",
          Min: 0,
        },
        {
          ID: "ID3",
          Min: 0,
          Max: 50,
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
