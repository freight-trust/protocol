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
  Release: "00603",
  DocumentType: 536,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BR",
    },
    {
      ID: "N9",
      Min: 0,
      Max: 20,
    },
    {
      ID: "G62",
      Min: 0,
      Max: 10,
    },
    {
      ID: "LMLoop1",
      Min: 0,
      Max: 20,
      Loop: [
        {
          ID: "LM",
        },
        {
          ID: "LQ",
          Max: 100,
        },
      ],
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Max: 20,
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
          ID: "G61",
          Min: 0,
          Max: 10,
        },
      ],
    },
    {
      ID: "HLLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "HL",
        },
        {
          ID: "LIN",
          Min: 0,
        },
        {
          ID: "CS",
          Min: 0,
        },
        {
          ID: "QTY",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "RCD",
          Min: 0,
        },
        {
          ID: "N9",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "CON",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "G62",
          Min: 0,
          Max: 50,
        },
        {
          ID: "CTP",
          Min: 0,
          Max: 10,
        },
        {
          ID: "G69",
          Min: 0,
          Max: 30,
        },
        {
          ID: "DD",
          Min: 0,
          Max: 100,
        },
        {
          ID: "LDT",
          Min: 0,
          Max: 3,
        },
        {
          ID: "MEA",
          Min: 0,
          Max: 5,
        },
        {
          ID: "PKG",
          Min: 0,
          Max: 5,
        },
        {
          ID: "PWK",
          Min: 0,
        },
        {
          ID: "MSG",
          Min: 0,
          Max: 10,
        },
        {
          ID: "LMLoop2",
          Min: 0,
          Max: 20,
          Loop: [
            {
              ID: "LM",
            },
            {
              ID: "LQ",
              Max: 100,
            },
          ],
        },
        {
          ID: "N1Loop2",
          Min: 0,
          Max: 50,
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
              ID: "G61",
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
