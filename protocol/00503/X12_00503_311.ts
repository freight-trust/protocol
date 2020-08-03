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
  DocumentType: 311,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "B2A",
    },
    {
      ID: "Y6",
      Min: 0,
      Max: 2,
    },
    {
      ID: "N9",
      Max: 10,
    },
    {
      ID: "V1",
      Min: 0,
    },
    {
      ID: "V2",
      Min: 0,
    },
    {
      ID: "V3",
      Min: 0,
    },
    {
      ID: "DTM",
      Min: 0,
      Max: 2,
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
      ],
    },
    {
      ID: "R4",
      Max: 10,
    },
    {
      ID: "K1",
      Min: 0,
      Max: 5,
    },
    {
      ID: "LXLoop1",
      Max: 999,
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "Y2",
          Min: 0,
          Max: 10,
        },
        {
          ID: "EDLoop1",
          Min: 0,
          Max: 999,
          Loop: [
            {
              ID: "ED",
            },
            {
              ID: "M7",
              Min: 0,
              Max: 5,
            },
            {
              ID: "NA",
              Min: 0,
            },
            {
              ID: "L4",
              Min: 0,
            },
            {
              ID: "G2",
              Min: 0,
            },
          ],
        },
        {
          ID: "L0Loop1",
          Min: 0,
          Max: 120,
          Loop: [
            {
              ID: "L0",
            },
            {
              ID: "L5",
              Max: 999,
            },
            {
              ID: "L4",
              Min: 0,
            },
            {
              ID: "X1",
              Min: 0,
              Max: 5,
            },
            {
              ID: "X2",
              Min: 0,
              Max: 5,
            },
          ],
        },
      ],
    },
    {
      ID: "L3",
      Min: 0,
    },
    {
      ID: "K1",
      Min: 0,
      Max: 2,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
