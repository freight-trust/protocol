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
  DocumentType: 880,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "G01",
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
      ID: "CAD",
      Min: 0,
      Max: 5,
    },
    {
      ID: "G23",
      Min: 0,
      Max: 20,
    },
    {
      ID: "G25",
      Min: 0,
    },
    {
      ID: "MTX",
      Min: 0,
      Max: 5,
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
      ID: "G72Loop1",
      Min: 0,
      Max: 100,
      Loop: [
        {
          ID: "G72",
        },
        {
          ID: "G73",
          Min: 0,
          Max: 10,
        },
      ],
    },
    {
      ID: "G17Loop1",
      Min: 0,
      Max: 9999,
      Loop: [
        {
          ID: "G17",
        },
        {
          ID: "G69",
          Min: 0,
          Max: 5,
        },
        {
          ID: "G19",
          Min: 0,
          Max: 10,
        },
        {
          ID: "G20",
          Min: 0,
        },
        {
          ID: "N9",
          Min: 0,
          Max: 5,
        },
        {
          ID: "G23",
          Min: 0,
          Max: 20,
        },
        {
          ID: "G25",
          Min: 0,
        },
        {
          ID: "G72Loop2",
          Min: 0,
          Max: 100,
          Loop: [
            {
              ID: "G72",
            },
            {
              ID: "G73",
              Min: 0,
              Max: 10,
            },
          ],
        },
      ],
    },
    {
      ID: "ENTLoop1",
      Min: 0,
      Max: 500,
      Loop: [
        {
          ID: "ENT",
        },
        {
          ID: "N2",
          Min: 0,
        },
        {
          ID: "N3",
          Min: 0,
        },
        {
          ID: "N4",
          Min: 0,
        },
        {
          ID: "N9",
          Min: 0,
          Max: 5,
        },
        {
          ID: "REFLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "REF",
            },
            {
              ID: "QTY",
              Min: 0,
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 2,
            },
            {
              ID: "G72",
              Min: 0,
            },
            {
              ID: "G17Loop2",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "G17",
                },
                {
                  ID: "G19",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "G31",
    },
    {
      ID: "G33",
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
