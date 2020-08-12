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
  Release: "00204",
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
      ID: "REF",
      Min: 0,
      Max: 12,
    },
    {
      ID: "PER",
      Min: 0,
      Max: 3,
    },
    {
      ID: "RTE",
      Min: 0,
    },
    {
      ID: "CUR",
      Min: 0,
    },
    {
      ID: "N1Loop1",
      Max: 500,
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
          ID: "REF",
          Min: 0,
          Max: 12,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 3,
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 5,
        },
        {
          ID: "CUR",
          Min: 0,
        },
        {
          ID: "RTE",
          Min: 0,
          Max: 12,
        },
        {
          ID: "ACTLoop1",
          Min: 0,
          Max: 500,
          Loop: [
            {
              ID: "ACT",
            },
            {
              ID: "BALLoop1",
              Min: 0,
              Max: 100,
              Loop: [
                {
                  ID: "BAL",
                },
                {
                  ID: "AMT",
                  Min: 0,
                  Max: 25,
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
              Max: 1000,
              Loop: [
                {
                  ID: "SER",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: 5,
                },
              ],
            },
            {
              ID: "ADJLoop1",
              Min: 0,
              Max: 1000,
              Loop: [
                {
                  ID: "ADJ",
                },
                {
                  ID: "PID",
                  Min: 0,
                  Max: 2,
                },
              ],
            },
            {
              ID: "RTE",
              Min: 0,
              Max: 12,
            },
          ],
        },
      ],
    },
    {
      ID: "CTT",
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
