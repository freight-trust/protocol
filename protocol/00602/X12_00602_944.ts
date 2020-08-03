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
  DocumentType: 944,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "W17",
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
      ID: "W08",
      Min: 0,
    },
    {
      ID: "W18",
      Min: 0,
      Max: 10,
    },
    {
      ID: "G08",
      Min: 0,
      Max: 2,
    },
    {
      ID: "TD1",
      Min: 0,
      Max: 5,
    },
    {
      ID: "LXLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "MAN",
          Min: 0,
        },
        {
          ID: "PAL",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "N9",
          Min: 0,
          Max: 5,
        },
        {
          ID: "W07Loop1",
          Min: 0,
          Max: 9999,
          Loop: [
            {
              ID: "W07",
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
            {
              ID: "W13Loop1",
              Min: 0,
              Max: 50,
              Loop: [
                {
                  ID: "W13",
                },
                {
                  ID: "N9",
                  Min: 0,
                  Max: 200,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "W14",
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
