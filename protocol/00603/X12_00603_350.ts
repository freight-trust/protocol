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
  DocumentType: 350,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "M10",
      Min: 0,
    },
    {
      ID: "P4Loop1",
      Min: 0,
      Max: 20,
      Loop: [
        {
          ID: "P4",
        },
        {
          ID: "V9",
          Min: 0,
          Max: 20,
        },
        {
          ID: "VEH",
          Min: 0,
          Max: 10,
        },
        {
          ID: "NM1",
          Min: 0,
          Max: 9999,
        },
        {
          ID: "VIDLoop1",
          Min: 0,
          Max: 9999,
          Loop: [
            {
              ID: "VID",
            },
            {
              ID: "M7",
              Min: 0,
              Max: 5,
            },
            {
              ID: "M7A",
              Min: 0,
              Max: 22,
            },
          ],
        },
        {
          ID: "K1",
          Min: 0,
          Max: 4,
        },
        {
          ID: "X4Loop1",
          Min: 0,
          Max: 9999,
          Loop: [
            {
              ID: "X4",
            },
            {
              ID: "K1",
              Min: 0,
              Max: 4,
            },
            {
              ID: "N9",
              Min: 0,
              Max: 999,
            },
            {
              ID: "N7",
              Min: 0,
              Max: 999,
            },
          ],
        },
      ],
    },
    {
      ID: "BA1Loop1",
      Min: 0,
      Max: 999,
      Loop: [
        {
          ID: "BA1",
        },
        {
          ID: "X4Loop2",
          Min: 0,
          Max: 9999,
          Loop: [
            {
              ID: "X4",
            },
            {
              ID: "K1",
              Min: 0,
              Max: 4,
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
