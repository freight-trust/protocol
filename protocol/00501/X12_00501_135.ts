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
  DocumentType: 135,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "DEF",
      Min: 0,
    },
    {
      ID: "DTP",
      Min: 0,
      Max: 5,
    },
    {
      ID: "GR",
      Min: 0,
    },
    {
      ID: "LXLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "LQ",
          Min: 0,
        },
        {
          ID: "SAD",
          Min: 0,
        },
        {
          ID: "AMT",
          Min: 0,
          Max: 15,
        },
        {
          ID: "DTP",
          Min: 0,
          Max: 15,
        },
        {
          ID: "YNQ",
          Min: 0,
          Max: 5,
        },
        {
          ID: "QTY",
          Min: 0,
          Max: 5,
        },
        {
          ID: "REF",
          Min: 0,
          Max: 2,
        },
      ],
    },
    {
      ID: "ENTLoop1",
      Max: 6,
      Loop: [
        {
          ID: "ENT",
        },
        {
          ID: "NTE",
          Min: 0,
          Max: 5,
        },
        {
          ID: "ENR",
          Min: 0,
        },
        {
          ID: "FNA",
          Min: 0,
        },
        {
          ID: "AMT",
          Min: 0,
          Max: 15,
        },
        {
          ID: "MEA",
          Min: 0,
          Max: 2,
        },
        {
          ID: "SCT",
          Min: 0,
          Max: 8,
        },
        {
          ID: "DTP",
          Min: 0,
        },
        {
          ID: "Y6",
          Min: 0,
        },
        {
          ID: "IDB",
          Min: 0,
          Max: 10,
        },
        {
          ID: "N1Loop1",
          Min: 0,
          Max: 2,
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
              ID: "REF",
              Min: 0,
              Max: 10,
            },
            {
              ID: "PER",
              Min: 0,
              Max: 2,
            },
          ],
        },
        {
          ID: "PLILoop1",
          Min: 0,
          Max: 10,
          Loop: [
            {
              ID: "PLI",
            },
            {
              ID: "N1",
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
          ],
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
              ID: "DMG",
              Min: 0,
            },
            {
              ID: "DMA",
              Min: 0,
            },
            {
              ID: "LXLoop2",
              Min: 0,
              Max: 4,
              Loop: [
                {
                  ID: "LX",
                },
                {
                  ID: "N1",
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
                  ID: "DTP",
                  Min: 0,
                  Max: 3,
                },
                {
                  ID: "PER",
                  Min: 0,
                  Max: 2,
                },
              ],
            },
          ],
        },
        {
          ID: "LMLoop1",
          Min: 0,
          Loop: [
            {
              ID: "LM",
            },
            {
              ID: "LQ",
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
