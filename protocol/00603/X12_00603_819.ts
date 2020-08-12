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
  DocumentType: 819,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BOS",
    },
    {
      ID: "CUR",
      Min: 0,
    },
    {
      ID: "ITD",
      Min: 0,
      Max: "unbounded",
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
          ID: "MSG",
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
      ID: "JILLoop1",
      Max: 10000,
      Loop: [
        {
          ID: "JIL",
        },
        {
          ID: "PID",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "REF",
          Min: 0,
          Max: 12,
        },
        {
          ID: "MSG",
          Min: 0,
          Max: 12,
        },
        {
          ID: "MEA",
          Min: 0,
          Max: 10,
        },
        {
          ID: "ITA",
          Min: 0,
          Max: 10,
        },
        {
          ID: "PSA",
          Min: 0,
        },
        {
          ID: "DTM",
          Min: 0,
        },
        {
          ID: "JIDLoop1",
          Min: 0,
          Max: 1000,
          Loop: [
            {
              ID: "JID",
            },
            {
              ID: "PID",
              Min: 0,
              Max: "unbounded",
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
              ID: "MSG",
              Min: 0,
              Max: 12,
            },
            {
              ID: "MEA",
              Min: 0,
              Max: 5,
            },
          ],
        },
      ],
    },
    {
      ID: "AMT",
    },
    {
      ID: "QTY",
      Min: 0,
      Max: 5,
    },
    {
      ID: "TDS",
      Min: 0,
    },
    {
      ID: "PSALoop1",
      Min: 0,
      Max: 1000,
      Loop: [
        {
          ID: "PSA",
        },
        {
          ID: "N1",
          Min: 0,
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
          ID: "DTM",
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
