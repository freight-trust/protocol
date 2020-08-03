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
  DocumentType: 832,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BCT",
    },
    {
      ID: "NTE",
      Min: 0,
      Max: 100,
    },
    {
      ID: "CTP",
      Min: 0,
      Max: 25,
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
      ID: "CTB",
      Min: 0,
      Max: 25,
    },
    {
      ID: "CUR",
      Min: 0,
      Max: 5,
    },
    {
      ID: "SSS",
      Min: 0,
      Max: 25,
    },
    {
      ID: "ITD",
      Min: 0,
      Max: 2,
    },
    {
      ID: "LDT",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "ITA",
      Min: 0,
      Max: 5,
    },
    {
      ID: "FOB",
      Min: 0,
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
      ],
    },
    {
      ID: "LINLoop1",
      Max: 700000,
      Loop: [
        {
          ID: "LIN",
        },
        {
          ID: "SLN",
          Min: 0,
          Max: 100,
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 10,
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
          ID: "CTB",
          Min: 0,
          Max: 25,
        },
        {
          ID: "PID",
          Min: 0,
          Max: 200,
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
          ID: "PO4",
          Min: 0,
        },
        {
          ID: "TD4",
          Min: 0,
        },
        {
          ID: "SSS",
          Min: 0,
          Max: 25,
        },
        {
          ID: "ITD",
          Min: 0,
          Max: 2,
        },
        {
          ID: "LDT",
          Min: 0,
        },
        {
          ID: "ITA",
          Min: 0,
          Max: 5,
        },
        {
          ID: "FOB",
          Min: 0,
        },
        {
          ID: "CTPLoop1",
          Min: 0,
          Max: 25,
          Loop: [
            {
              ID: "CTP",
            },
            {
              ID: "DTM",
              Min: 0,
              Max: 10,
            },
            {
              ID: "LDT",
              Min: 0,
            },
            {
              ID: "CUR",
              Min: 0,
              Max: 5,
            },
            {
              ID: "PO4",
              Min: 0,
            },
            {
              ID: "CTB",
              Min: 0,
              Max: 5,
            },
          ],
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
