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
  DocumentType: 325,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "B12",
    },
    {
      ID: "M7",
      Min: 0,
      Max: 5,
    },
    {
      ID: "W09",
      Min: 0,
    },
    {
      ID: "H3",
      Min: 0,
      Max: 6,
    },
    {
      ID: "V1",
    },
    {
      ID: "V9",
      Min: 0,
      Max: 2,
    },
    {
      ID: "L3",
      Min: 0,
    },
    {
      ID: "C3",
      Min: 0,
    },
    {
      ID: "R4",
      Max: 4,
    },
    {
      ID: "N9",
      Min: 0,
      Max: 10,
    },
    {
      ID: "MBLLoop1",
      Max: 999,
      Loop: [
        {
          ID: "MBL",
        },
        {
          ID: "L3",
          Min: 0,
        },
        {
          ID: "C3",
          Min: 0,
        },
        {
          ID: "R4",
          Min: 0,
          Max: 4,
        },
        {
          ID: "N9",
          Min: 0,
          Max: 10,
        },
        {
          ID: "N1Loop1",
          Min: 0,
          Max: 6,
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
          ID: "LINLoop1",
          Max: 999,
          Loop: [
            {
              ID: "LIN",
            },
            {
              ID: "SN1",
            },
            {
              ID: "PRF",
              Min: 0,
            },
            {
              ID: "TD1",
            },
            {
              ID: "H1Loop1",
              Min: 0,
              Max: 10,
              Loop: [
                {
                  ID: "H1",
                },
                {
                  ID: "H2",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
            {
              ID: "G20",
              Min: 0,
            },
            {
              ID: "MAN",
              Min: 0,
              Max: 10,
            },
            {
              ID: "UIT",
              Min: 0,
            },
            {
              ID: "N1",
              Min: 0,
            },
            {
              ID: "L8",
              Min: 0,
            },
            {
              ID: "C3",
              Min: 0,
            },
            {
              ID: "R4",
              Min: 0,
              Max: 4,
            },
            {
              ID: "N9",
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
