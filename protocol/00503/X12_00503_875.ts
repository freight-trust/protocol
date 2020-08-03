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
  DocumentType: 875,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "G50",
    },
    {
      ID: "N9",
      Min: 0,
      Max: 50,
    },
    {
      ID: "G61",
      Min: 0,
      Max: 3,
    },
    {
      ID: "G62",
      Min: 0,
      Max: 10,
    },
    {
      ID: "NTE",
      Min: 0,
      Max: 20,
    },
    {
      ID: "G66",
      Min: 0,
    },
    {
      ID: "G23",
      Min: 0,
      Max: 20,
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
      ID: "G68Loop1",
      Max: 9999,
      Loop: [
        {
          ID: "G68",
        },
        {
          ID: "G69",
          Min: 0,
          Max: 5,
        },
        {
          ID: "G70",
          Min: 0,
          Max: 2,
        },
        {
          ID: "N9",
          Min: 0,
          Max: 10,
        },
        {
          ID: "G23",
          Min: 0,
          Max: 20,
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
        {
          ID: "N1Loop2",
          Min: 0,
          Max: 9999,
          Loop: [
            {
              ID: "N1",
            },
            {
              ID: "QTY",
              Min: 0,
            },
            {
              ID: "N9",
              Min: 0,
              Max: 10,
            },
          ],
        },
        {
          ID: "SLNLoop1",
          Min: 0,
          Max: 100,
          Loop: [
            {
              ID: "SLN",
            },
            {
              ID: "G72",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
      ],
    },
    {
      ID: "G76",
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
