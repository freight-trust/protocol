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
  DocumentType: 284,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "NM1Loop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "NM1",
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
      ID: "HLLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "HL",
        },
        {
          ID: "PWK",
          Min: 0,
        },
        {
          ID: "N9",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "YNQ",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "TC2",
          Min: 0,
        },
        {
          ID: "H1",
          Min: 0,
        },
        {
          ID: "LH2",
          Min: 0,
        },
        {
          ID: "LH3",
          Min: 0,
        },
        {
          ID: "PO4",
          Min: 0,
        },
        {
          ID: "MAN",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "LQLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "LQ",
            },
            {
              ID: "N9",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "YNQ",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "MEA",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "III",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "QTY",
              Min: 0,
            },
            {
              ID: "LOD",
              Min: 0,
            },
            {
              ID: "SRE",
              Min: 0,
            },
            {
              ID: "VEH",
              Min: 0,
            },
            {
              ID: "DVI",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "AMTLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "AMT",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
          ],
        },
        {
          ID: "NM1Loop2",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "NM1",
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
              Max: "unbounded",
            },
            {
              ID: "EMS",
              Min: 0,
            },
            {
              ID: "DMG",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DMA",
              Min: 0,
            },
            {
              ID: "DTM",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "YNQ",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "LIELoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "LIE",
                },
                {
                  ID: "MEA",
                  Min: 0,
                },
              ],
            },
          ],
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
              ID: "REF",
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
