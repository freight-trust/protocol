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
  DocumentType: 867,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BPT",
    },
    {
      ID: "NTE",
      Min: 0,
      Max: 25,
    },
    {
      ID: "CUR",
      Min: 0,
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
      ID: "N1Loop1",
      Min: 0,
      Max: 5,
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
      ID: "PTDLoop1",
      Max: 10000,
      Loop: [
        {
          ID: "PTD",
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
          ID: "N1Loop2",
          Min: 0,
          Max: 5,
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
          ID: "QTYLoop1",
          Min: 0,
          Max: 200,
          Loop: [
            {
              ID: "QTY",
            },
            {
              ID: "LIN",
              Min: 0,
            },
            {
              ID: "UIT",
              Min: 0,
              Max: 12,
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 12,
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
              ID: "PWK",
              Min: 0,
              Max: 25,
            },
            {
              ID: "PKG",
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
              ID: "CUR",
              Min: 0,
            },
          ],
        },
        {
          ID: "MAN",
          Min: 0,
        },
      ],
    },
    {
      ID: "CTT",
    },
    {
      ID: "AMT",
      Min: 0,
      Max: 12,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
