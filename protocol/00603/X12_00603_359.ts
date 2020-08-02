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
  DocumentType: 359,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "CPM",
    },
    {
      ID: "PER",
      Min: 0,
    },
    {
      ID: "NM1Loop1",
      Min: 0,
      Max: 999,
      Loop: [
        {
          ID: "NM1",
        },
        {
          ID: "DMG",
          Min: 0,
        },
        {
          ID: "DMA",
          Min: 0,
        },
        {
          ID: "REF",
          Min: 0,
          Max: 2,
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
          ID: "AAA",
          Min: 0,
        },
      ],
    },
    {
      ID: "VEHLoop1",
      Min: 0,
      Max: 999,
      Loop: [
        {
          ID: "VEH",
        },
        {
          ID: "CII",
          Min: 0,
        },
        {
          ID: "AAA",
          Min: 0,
        },
      ],
    },
    {
      ID: "VIDLoop1",
      Min: 0,
      Max: 999,
      Loop: [
        {
          ID: "VID",
        },
        {
          ID: "CII",
          Min: 0,
        },
        {
          ID: "AAA",
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
