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
  DocumentType: 806,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BPP",
    },
    {
      ID: "REF",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "N1Loop1",
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
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PER",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "CALLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "CAL",
        },
        {
          ID: "QTY",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "RSCLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "RSC",
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "QTY",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "AMT",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PCT",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "RPA",
          Min: 0,
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "TIDLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "TID",
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "QTY",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "AMT",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PCT",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "N1",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PER",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PID",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "MTXLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "MTX",
            },
            {
              ID: "DTM",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "NM1",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "RSCLoop2",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "RSC",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DTM",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "QTY",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "AMT",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PCT",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "RPA",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PAM",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "MLSLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "MLS",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DTM",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "QTY",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "AMT",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PCT",
              Min: 0,
              Max: "unbounded",
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
