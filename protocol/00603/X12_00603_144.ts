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
  DocumentType: 144,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "GR",
    },
    {
      ID: "LV",
      Min: 0,
      Max: 25,
    },
    {
      ID: "DB",
      Min: 0,
      Max: 10,
    },
    {
      ID: "DTP",
      Min: 0,
      Max: 10,
    },
    {
      ID: "IDB",
      Min: 0,
    },
    {
      ID: "REF",
      Min: 0,
      Max: 5,
    },
    {
      ID: "ENTLoop1",
      Max: 10,
      Loop: [
        {
          ID: "ENT",
        },
        {
          ID: "IN2",
          Min: 0,
          Max: 5,
        },
        {
          ID: "DMG",
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
