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
  DocumentType: 862,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BSS",
    },
    {
      ID: "DTM",
      Min: 0,
      Max: 10,
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
        {
          ID: "FOB",
          Min: 0,
        },
      ],
    },
    {
      ID: "LINLoop1",
      Max: 10000,
      Loop: [
        {
          ID: "LIN",
        },
        {
          ID: "UIT",
        },
        {
          ID: "PKG",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PO4",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PRS",
          Min: 0,
        },
        {
          ID: "QTY",
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
        },
        {
          ID: "SDP",
          Min: 0,
        },
        {
          ID: "FSTLoop1",
          Min: 0,
          Max: 100,
          Loop: [
            {
              ID: "FST",
            },
            {
              ID: "DTM",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "SDQ",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "JITLoop1",
              Min: 0,
              Max: 96,
              Loop: [
                {
                  ID: "JIT",
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: 500,
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
          ID: "SHPLoop1",
          Min: 0,
          Max: 10,
          Loop: [
            {
              ID: "SHP",
            },
            {
              ID: "REF",
              Min: 0,
              Max: 12,
            },
          ],
        },
        {
          ID: "TD1",
          Min: 0,
        },
        {
          ID: "TD3",
          Min: 0,
        },
        {
          ID: "TD5",
          Min: 0,
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
