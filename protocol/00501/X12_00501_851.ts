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
  DocumentType: 851,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BLS",
    },
    {
      ID: "MSG",
      Min: 0,
      Max: 100,
    },
    {
      ID: "CUR",
      Min: 0,
    },
    {
      ID: "N9",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "TXI",
      Min: 0,
      Max: 7,
    },
    {
      ID: "TAX",
      Min: 0,
      Max: 5,
    },
    {
      ID: "PAM",
      Min: 0,
      Max: 100,
    },
    {
      ID: "ITA",
      Min: 0,
      Max: 35,
    },
    {
      ID: "DTM",
      Min: 0,
      Max: 10,
    },
    {
      ID: "N1Loop1",
      Max: 100000,
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
          ID: "N9",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PER",
          Min: 0,
          Max: 3,
        },
      ],
    },
    {
      ID: "LS1Loop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "LS1",
        },
        {
          ID: "LIN",
          Min: 0,
        },
        {
          ID: "PO3",
          Min: 0,
          Max: 25,
        },
        {
          ID: "PID",
          Min: 0,
          Max: 1000,
        },
        {
          ID: "CUR",
          Min: 0,
        },
        {
          ID: "CTP",
          Min: 0,
          Max: 5,
        },
        {
          ID: "N9",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "TXI",
          Min: 0,
          Max: 7,
        },
        {
          ID: "TAX",
          Min: 0,
          Max: 5,
        },
        {
          ID: "PAM",
          Min: 0,
          Max: 25,
        },
        {
          ID: "ITA",
          Min: 0,
          Max: 35,
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 10,
        },
        {
          ID: "AMT",
          Min: 0,
          Max: 5,
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
              ID: "N9",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PER",
              Min: 0,
              Max: 3,
            },
            {
              ID: "TXI",
              Min: 0,
              Max: 10,
            },
          ],
        },
      ],
    },
    {
      ID: "CTT",
    },
    {
      ID: "AMT",
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
