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
  DocumentType: 110,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "B3",
    },
    {
      ID: "B3A",
      Min: 0,
    },
    {
      ID: "C2",
      Min: 0,
    },
    {
      ID: "C3",
      Min: 0,
    },
    {
      ID: "ITD",
      Min: 0,
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Max: 3,
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
          ID: "N9",
          Min: 0,
          Max: 30,
        },
        {
          ID: "PER",
          Min: 0,
        },
      ],
    },
    {
      ID: "LXLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "N1Loop2",
          Min: 0,
          Max: 2,
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
              ID: "N9",
              Min: 0,
              Max: 30,
            },
            {
              ID: "PER",
              Min: 0,
            },
          ],
        },
        {
          ID: "P1",
          Min: 0,
        },
        {
          ID: "R1",
          Min: 0,
        },
        {
          ID: "POD",
          Min: 0,
        },
        {
          ID: "V9",
          Min: 0,
        },
        {
          ID: "RMT",
          Min: 0,
          Max: 10,
        },
        {
          ID: "G47",
          Min: 0,
        },
        {
          ID: "NTE",
          Min: 0,
          Max: 10,
        },
        {
          ID: "L5Loop1",
          Max: 4,
          Loop: [
            {
              ID: "L5",
            },
            {
              ID: "L0",
              Min: 0,
            },
            {
              ID: "L4",
              Min: 0,
              Max: 4,
            },
            {
              ID: "L10",
              Min: 0,
              Max: 4,
            },
            {
              ID: "SL1",
              Min: 0,
            },
            {
              ID: "L1Loop1",
              Min: 0,
              Max: 30,
              Loop: [
                {
                  ID: "L1",
                },
                {
                  ID: "C3",
                  Min: 0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "L3",
    },
    {
      ID: "ACS",
      Min: 0,
    },
    {
      ID: "NTE",
      Min: 0,
      Max: 5,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
