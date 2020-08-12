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
  DocumentType: 861,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BRA",
    },
    {
      ID: "NTE",
      Min: 0,
      Max: 100,
    },
    {
      ID: "CUR",
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
      Max: 10,
    },
    {
      ID: "PRF",
      Min: 0,
      Max: 25,
    },
    {
      ID: "TD1",
      Min: 0,
      Max: 2,
    },
    {
      ID: "TD5",
      Min: 0,
      Max: 12,
    },
    {
      ID: "TD3",
      Min: 0,
      Max: 12,
    },
    {
      ID: "TD4",
      Min: 0,
      Max: 5,
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
          Max: 100,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 3,
        },
        {
          ID: "FOB",
          Min: 0,
        },
      ],
    },
    {
      ID: "RCDLoop1",
      Min: 0,
      Max: 200000,
      Loop: [
        {
          ID: "RCD",
        },
        {
          ID: "SN1",
          Min: 0,
        },
        {
          ID: "CUR",
          Min: 0,
        },
        {
          ID: "LIN",
          Min: 0,
          Max: 100,
        },
        {
          ID: "PID",
          Min: 0,
          Max: 1000,
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
              ID: "PID",
              Min: 0,
              Max: 1000,
            },
          ],
        },
        {
          ID: "PO4",
          Min: 0,
          Max: 100,
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
          ID: "PRF",
          Min: 0,
          Max: 25,
        },
        {
          ID: "MEA",
          Min: 0,
          Max: 40,
        },
        {
          ID: "FOB",
          Min: 0,
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
              Max: 100,
            },
            {
              ID: "PER",
              Min: 0,
              Max: 3,
            },
            {
              ID: "FOB",
              Min: 0,
            },
          ],
        },
        {
          ID: "TD1",
          Min: 0,
          Max: 20,
        },
        {
          ID: "TD5",
          Min: 0,
          Max: 12,
        },
        {
          ID: "TD3",
          Min: 0,
          Max: 12,
        },
        {
          ID: "TD4",
          Min: 0,
          Max: 5,
        },
        {
          ID: "ITA",
          Min: 0,
          Max: 10,
        },
        {
          ID: "MAN",
          Min: 0,
          Max: 10,
        },
      ],
    },
    {
      ID: "CTT",
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
