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
  DocumentType: 210,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "B3",
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
      ID: "L11",
      Min: 0,
      Max: 300,
    },
    {
      ID: "G62",
      Min: 0,
      Max: 6,
    },
    {
      ID: "R3",
      Min: 0,
      Max: 12,
    },
    {
      ID: "H3",
      Min: 0,
      Max: 6,
    },
    {
      ID: "K1",
      Min: 0,
      Max: 10,
    },
    {
      ID: "N1Loop1",
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
          Max: 5,
        },
      ],
    },
    {
      ID: "N7Loop1",
      Min: 0,
      Max: 10,
      Loop: [
        {
          ID: "N7",
        },
        {
          ID: "M7",
          Min: 0,
          Max: 2,
        },
      ],
    },
    {
      ID: "OIDLoop1",
      Min: 0,
      Max: 999999,
      Loop: [
        {
          ID: "OID",
        },
        {
          ID: "SDQ",
          Min: 0,
          Max: 10,
        },
      ],
    },
    {
      ID: "S5Loop1",
      Min: 0,
      Max: 999,
      Loop: [
        {
          ID: "S5",
        },
        {
          ID: "L11",
          Min: 0,
          Max: 10,
        },
        {
          ID: "G62",
          Min: 0,
          Max: 10,
        },
        {
          ID: "H3",
          Min: 0,
          Max: 6,
        },
        {
          ID: "OIDLoop2",
          Min: 0,
          Max: 999999,
          Loop: [
            {
              ID: "OID",
            },
            {
              ID: "SDQ",
              Min: 0,
              Max: 10,
            },
          ],
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
              ID: "L11",
              Min: 0,
              Max: 5,
            },
            {
              ID: "N7Loop2",
              Min: 0,
              Max: 10,
              Loop: [
                {
                  ID: "N7",
                },
                {
                  ID: "M7",
                  Min: 0,
                  Max: 2,
                },
              ],
            },
          ],
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
          ID: "L11",
          Min: 0,
          Max: 20,
        },
        {
          ID: "L5",
          Min: 0,
          Max: 30,
        },
        {
          ID: "H1",
          Min: 0,
          Max: 3,
        },
        {
          ID: "H2",
          Min: 0,
          Max: 2,
        },
        {
          ID: "L0",
          Min: 0,
          Max: 10,
        },
        {
          ID: "L1",
          Min: 0,
          Max: 50,
        },
        {
          ID: "L4",
          Min: 0,
          Max: 10,
        },
        {
          ID: "L7",
          Min: 0,
          Max: 10,
        },
        {
          ID: "K1",
          Min: 0,
          Max: 10,
        },
        {
          ID: "OIDLoop3",
          Min: 0,
          Max: 999999,
          Loop: [
            {
              ID: "OID",
            },
            {
              ID: "SDQ",
              Min: 0,
              Max: 10,
            },
          ],
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
              ID: "CD3Loop1",
              Min: 0,
              Max: 999999,
              Loop: [
                {
                  ID: "CD3",
                },
                {
                  ID: "L11",
                  Min: 0,
                  Max: 20,
                },
                {
                  ID: "H6",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "L9",
                  Min: 0,
                  Max: 50,
                },
                {
                  ID: "POD",
                  Min: 0,
                },
                {
                  ID: "G62",
                  Min: 0,
                },
              ],
            },
            {
              ID: "OIDLoop4",
              Min: 0,
              Max: 999999,
              Loop: [
                {
                  ID: "OID",
                },
                {
                  ID: "SDQ",
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
      ID: "L3",
      Min: 0,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
