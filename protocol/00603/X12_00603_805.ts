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
  DocumentType: 805,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BCP",
    },
    {
      ID: "SPI",
    },
    {
      ID: "MTX",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "CUR",
      Min: 0,
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
          ID: "DTM",
          Min: 0,
          Max: 2,
        },
        {
          ID: "G61",
          Min: 0,
          Max: 2,
        },
      ],
    },
    {
      ID: "CBSLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "CBS",
        },
        {
          ID: "JIL",
          Min: 0,
        },
        {
          ID: "LIN",
          Min: 0,
        },
        {
          ID: "MTX",
          Min: 0,
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "CB1Loop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "CB1",
        },
        {
          ID: "MTX",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "N9",
          Min: 0,
          Max: "unbounded",
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
              ID: "DTM",
              Min: 0,
              Max: 2,
            },
            {
              ID: "G61",
              Min: 0,
            },
          ],
        },
      ],
    },
    {
      ID: "REFLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "REF",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "PL",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "HLLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "HL",
        },
        {
          ID: "REF",
          Min: 0,
        },
      ],
    },
    {
      ID: "PDLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "PD",
        },
        {
          ID: "SPI",
          Min: 0,
        },
        {
          ID: "REF",
          Min: 0,
          Max: 5,
        },
        {
          ID: "PDD",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "MTX",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "N1Loop3",
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
          ],
        },
      ],
    },
    {
      ID: "LXLoop1",
      Min: 0,
      Max: 2,
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "G61",
          Min: 0,
        },
        {
          ID: "AMT",
          Min: 0,
          Max: 4,
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
