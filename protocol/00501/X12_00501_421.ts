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
  DocumentType: 421,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "IS1",
    },
    {
      ID: "N9",
      Max: 5,
    },
    {
      ID: "ISC",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "N8",
      Min: 0,
    },
    {
      ID: "IS2",
      Max: "unbounded",
    },
    {
      ID: "F9",
      Min: 0,
    },
    {
      ID: "D9",
      Min: 0,
    },
    {
      ID: "N1",
      Min: 0,
      Max: 10,
    },
    {
      ID: "R2",
      Min: 0,
      Max: 13,
    },
    {
      ID: "L5",
      Min: 0,
      Max: 5,
    },
    {
      ID: "H3",
      Min: 0,
      Max: 6,
    },
    {
      ID: "H5",
      Min: 0,
    },
    {
      ID: "IC",
      Min: 0,
    },
    {
      ID: "IMA",
      Min: 0,
    },
    {
      ID: "PS",
      Min: 0,
    },
    {
      ID: "REF",
      Min: 0,
      Max: 10,
    },
    {
      ID: "N8A",
      Min: 0,
      Max: 25,
    },
    {
      ID: "S1Loop1",
      Min: 0,
      Max: 12,
      Loop: [
        {
          ID: "S1",
        },
        {
          ID: "S9",
          Min: 0,
        },
      ],
    },
    {
      ID: "LSLoop1",
      Min: 0,
      Loop: [
        {
          ID: "LS",
          Min: 1,
          Max: 1,
        },
        {
          ID: "LH1Loop1",
          Min: 0,
          Max: 1000,
          Loop: [
            {
              ID: "LH1",
            },
            {
              ID: "LH2",
              Min: 0,
              Max: 4,
            },
            {
              ID: "LH3",
              Min: 0,
              Max: 10,
            },
            {
              ID: "LFH",
              Min: 0,
              Max: 20,
            },
            {
              ID: "LEP",
              Min: 0,
              Max: 3,
            },
            {
              ID: "LH4",
              Min: 0,
              Max: 4,
            },
            {
              ID: "LHT",
              Min: 0,
              Max: 3,
            },
            {
              ID: "LHR",
              Min: 0,
              Max: 5,
            },
            {
              ID: "PER",
              Min: 0,
              Max: 5,
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
                  ID: "N3",
                  Min: 0,
                  Max: 2,
                },
                {
                  ID: "N4",
                  Min: 0,
                },
                {
                  ID: "PER",
                  Min: 0,
                  Max: 2,
                },
              ],
            },
          ],
        },
        {
          ID: "LE",
          Min: 1,
          Max: 1,
        },
      ],
    },
    {
      ID: "PER",
      Min: 0,
      Max: 5,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
