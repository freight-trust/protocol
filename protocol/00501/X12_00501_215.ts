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
  DocumentType: 215,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "B1",
    },
    {
      ID: "C3",
      Min: 0,
    },
    {
      ID: "L11",
      Min: 0,
      Max: 10,
    },
    {
      ID: "G62",
      Min: 0,
      Max: 6,
    },
    {
      ID: "N1Loop1",
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
          ID: "L11",
          Min: 0,
          Max: 10,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 10,
        },
        {
          ID: "X1",
          Min: 0,
          Max: 10,
        },
        {
          ID: "X2",
          Min: 0,
          Max: 10,
        },
      ],
    },
    {
      ID: "SMDLoop1",
      Max: 999999,
      Loop: [
        {
          ID: "SMD",
        },
        {
          ID: "L11",
          Min: 0,
          Max: 20,
        },
        {
          ID: "L5",
          Min: 0,
          Max: 10,
        },
        {
          ID: "MS6",
          Min: 0,
          Max: 10,
        },
        {
          ID: "MS5",
          Min: 0,
          Max: 5,
        },
        {
          ID: "MS4",
          Min: 0,
        },
        {
          ID: "ACS",
          Min: 0,
          Max: 10,
        },
        {
          ID: "NTE",
          Min: 0,
          Max: 10,
        },
        {
          ID: "N1Loop2",
          Min: 0,
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
              ID: "L11",
              Min: 0,
              Max: 10,
            },
            {
              ID: "G61",
              Min: 0,
              Max: 10,
            },
            {
              ID: "X1",
              Min: 0,
              Max: 10,
            },
            {
              ID: "X2",
              Min: 0,
              Max: 10,
            },
            {
              ID: "R4",
              Min: 0,
              Max: 10,
            },
          ],
        },
        {
          ID: "CD3Loop1",
          Max: 999999,
          Loop: [
            {
              ID: "CD3",
            },
            {
              ID: "MAN",
              Min: 0,
              Max: 100,
            },
            {
              ID: "MS4",
              Min: 0,
            },
            {
              ID: "L11",
              Min: 0,
              Max: 10,
            },
            {
              ID: "L5",
              Min: 0,
              Max: 10,
            },
            {
              ID: "MS6",
              Min: 0,
              Max: 5,
            },
            {
              ID: "ACS",
              Min: 0,
              Max: 10,
            },
            {
              ID: "NTE",
              Min: 0,
              Max: 10,
            },
            {
              ID: "N1Loop3",
              Min: 0,
              Max: 999999,
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
                  ID: "L11",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "G61",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "X1",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "X2",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "R4",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
          ],
        },
        {
          ID: "AT6Loop1",
          Min: 0,
          Max: 999999,
          Loop: [
            {
              ID: "AT6",
            },
            {
              ID: "MS5",
              Min: 0,
            },
            {
              ID: "IT1",
              Min: 0,
            },
            {
              ID: "CGS",
              Min: 0,
              Max: 10,
            },
            {
              ID: "L11",
              Min: 0,
            },
            {
              ID: "PID",
              Min: 0,
              Max: 1000,
            },
            {
              ID: "TXI",
              Min: 0,
              Max: 10,
            },
            {
              ID: "MS4",
              Min: 0,
            },
            {
              ID: "L5",
              Min: 0,
            },
            {
              ID: "SLNLoop1",
              Min: 0,
              Max: 999999,
              Loop: [
                {
                  ID: "SLN",
                },
                {
                  ID: "L11",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "PID",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "N10",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "TXI",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "NTE",
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
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
