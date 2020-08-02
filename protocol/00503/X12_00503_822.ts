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
  DocumentType: 822,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "DTM",
      Max: 3,
    },
    {
      ID: "CUR",
      Min: 0,
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Loop: [
        {
          ID: "N1",
        },
        {
          ID: "N2",
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
          ID: "PER",
          Min: 0,
          Max: 3,
        },
      ],
    },
    {
      ID: "RTELoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "RTE",
        },
        {
          ID: "DTM",
          Min: 0,
        },
      ],
    },
    {
      ID: "ENTLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "ENT",
        },
        {
          ID: "N1Loop2",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "N1",
            },
            {
              ID: "N2",
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
              ID: "PER",
              Min: 0,
              Max: 3,
            },
          ],
        },
        {
          ID: "ACTLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "ACT",
            },
            {
              ID: "CUR",
              Min: 0,
            },
            {
              ID: "ADJ",
              Min: 0,
              Max: 1000,
            },
            {
              ID: "RTELoop2",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "RTE",
                },
                {
                  ID: "DTM",
                  Min: 0,
                },
              ],
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
                  ID: "BLN",
                  Max: "unbounded",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: 5,
                },
              ],
            },
            {
              ID: "SERLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "SER",
                },
                {
                  ID: "CTP",
                  Min: 0,
                  Max: 99,
                },
                {
                  ID: "DTM",
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
