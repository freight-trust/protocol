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
  DocumentType: 191,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
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
          Max: 3,
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
          ID: "DTP",
          Min: 0,
          Max: 3,
        },
        {
          ID: "YNQ",
          Min: 0,
          Max: 5,
        },
        {
          ID: "ENR",
          Min: 0,
        },
        {
          ID: "IN1Loop1",
          Min: 0,
          Max: 10,
          Loop: [
            {
              ID: "IN1",
            },
            {
              ID: "IN2",
              Min: 0,
              Max: 5,
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
              Max: 2,
            },
            {
              ID: "DTP",
              Min: 0,
            },
            {
              ID: "YNQ",
              Min: 0,
              Max: 5,
            },
          ],
        },
        {
          ID: "REFLoop1",
          Max: 100,
          Loop: [
            {
              ID: "REF",
            },
            {
              ID: "SLI",
              Min: 0,
            },
            {
              ID: "GR",
              Min: 0,
            },
            {
              ID: "DEF",
              Min: 0,
              Max: 100,
            },
            {
              ID: "YNQ",
              Min: 0,
              Max: 1000,
            },
            {
              ID: "DB",
              Min: 0,
              Max: 10,
            },
            {
              ID: "DTP",
              Min: 0,
              Max: 500,
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 500,
            },
            {
              ID: "IN1Loop2",
              Min: 0,
              Max: 10,
              Loop: [
                {
                  ID: "IN1",
                },
                {
                  ID: "IN2",
                  Min: 0,
                  Max: 5,
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
                  Max: 2,
                },
                {
                  ID: "YNQ",
                  Min: 0,
                  Max: 5,
                },
              ],
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
