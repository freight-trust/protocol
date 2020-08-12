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
  DocumentType: 835,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BPR",
    },
    {
      ID: "NTE",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "TRN",
      Min: 0,
    },
    {
      ID: "CUR",
      Min: 0,
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
          Max: "unbounded",
        },
        {
          ID: "N3",
          Min: 0,
          Max: "unbounded",
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
          ID: "RDM",
          Min: 0,
        },
        {
          ID: "DTM",
          Min: 0,
        },
      ],
    },
    {
      ID: "LXLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "TS3",
          Min: 0,
        },
        {
          ID: "TS2",
          Min: 0,
        },
        {
          ID: "CLPLoop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "CLP",
            },
            {
              ID: "CAS",
              Min: 0,
              Max: 99,
            },
            {
              ID: "RAS",
              Min: 0,
              Max: 99,
            },
            {
              ID: "NM1",
              Max: "unbounded",
            },
            {
              ID: "MIA",
              Min: 0,
            },
            {
              ID: "MOA",
              Min: 0,
            },
            {
              ID: "REF",
              Min: 0,
              Max: 99,
            },
            {
              ID: "DTM",
              Min: 0,
              Max: 9,
            },
            {
              ID: "PER",
              Min: 0,
              Max: 3,
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 20,
            },
            {
              ID: "QTY",
              Min: 0,
              Max: 20,
            },
            {
              ID: "SVCLoop1",
              Min: 0,
              Max: 999,
              Loop: [
                {
                  ID: "SVC",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "CAS",
                  Min: 0,
                  Max: 99,
                },
                {
                  ID: "RAS",
                  Min: 0,
                  Max: 99,
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: 99,
                },
                {
                  ID: "AMT",
                  Min: 0,
                  Max: 20,
                },
                {
                  ID: "QTY",
                  Min: 0,
                  Max: 20,
                },
                {
                  ID: "LQ",
                  Min: 0,
                  Max: 99,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "PLB",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
