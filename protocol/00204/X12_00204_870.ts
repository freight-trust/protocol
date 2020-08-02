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
  DocumentType: 870,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BSR",
    },
    {
      ID: "NTE",
      Min: 0,
      Max: 100,
    },
    {
      ID: "REF",
      Min: 0,
      Max: 12,
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Max: 200,
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
      ],
    },
    {
      ID: "DTM",
      Min: 0,
      Max: 10,
    },
    {
      ID: "HLLoop1",
      Max: 1000,
      Loop: [
        {
          ID: "HL",
        },
        {
          ID: "PRF",
          Min: 0,
        },
        {
          ID: "ISRLoop1",
          Min: 0,
          Max: 104,
          Loop: [
            {
              ID: "ISR",
            },
            {
              ID: "PID",
              Min: 0,
            },
            {
              ID: "QTY",
              Min: 0,
              Max: 4,
            },
          ],
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
          Max: 10,
        },
        {
          ID: "N1Loop2",
          Min: 0,
          Max: 200,
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
          ],
        },
        {
          ID: "PO1Loop1",
          Min: 0,
          Max: 1000,
          Loop: [
            {
              ID: "PO1",
            },
            {
              ID: "SLN",
              Min: 0,
              Max: 100,
            },
            {
              ID: "PO3",
              Min: 0,
            },
            {
              ID: "PID",
              Min: 0,
              Max: 1000,
            },
            {
              ID: "MEA",
              Min: 0,
              Max: 40,
            },
            {
              ID: "PKG",
              Min: 0,
              Max: 25,
            },
            {
              ID: "ISRLoop2",
              Min: 0,
              Max: 104,
              Loop: [
                {
                  ID: "ISR",
                },
                {
                  ID: "PID",
                  Min: 0,
                },
                {
                  ID: "QTY",
                  Min: 0,
                  Max: 4,
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "N1",
                  Min: 0,
                },
                {
                  ID: "TD1",
                  Min: 0,
                },
                {
                  ID: "TD5",
                  Min: 0,
                },
                {
                  ID: "TD3",
                  Min: 0,
                },
                {
                  ID: "TD4",
                  Min: 0,
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: 12,
                },
              ],
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
