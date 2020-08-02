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
  DocumentType: 217,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BLR",
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Max: 999999,
      Loop: [
        {
          ID: "N1",
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
          ID: "L11",
          Min: 0,
        },
        {
          ID: "G61",
          Min: 0,
        },
      ],
    },
    {
      ID: "LSLoop1",
      Min: 0,
      Loop: [
        {
          ID: "LS",
          Min: 1,
          Max: 1,
        },
        {
          ID: "N1Loop2",
          Min: 0,
          Max: 999999,
          Loop: [
            {
              ID: "N1",
            },
            {
              ID: "GY",
              Min: 0,
              Max: 9999,
            },
            {
              ID: "N4",
              Min: 0,
              Max: 9999,
            },
            {
              ID: "LS",
              Min: 0,
            },
            {
              ID: "LXLoop1",
              Min: 0,
              Max: 999999,
              Loop: [
                {
                  ID: "LX",
                },
                {
                  ID: "N1",
                  Min: 0,
                  Max: 3,
                },
                {
                  ID: "GY",
                  Min: 0,
                  Max: 9999,
                },
                {
                  ID: "N4",
                  Min: 0,
                  Max: 9999,
                },
                {
                  ID: "SV",
                },
                {
                  ID: "RST",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
            {
              ID: "LE",
              Min: 0,
            },
          ],
        },
        {
          ID: "LE",
          Min: 1,
          Max: 1,
        },
      ],
    },
    {
      ID: "LXLoop2",
      Min: 0,
      Max: 999999,
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "N1",
          Min: 0,
          Max: 2,
        },
        {
          ID: "GY",
          Min: 0,
          Max: 9999,
        },
        {
          ID: "N4",
          Min: 0,
          Max: 9999,
        },
        {
          ID: "SV",
          Min: 0,
        },
        {
          ID: "RST",
          Min: 0,
          Max: 10,
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
