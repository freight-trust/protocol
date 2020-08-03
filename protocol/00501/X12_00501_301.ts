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
  DocumentType: 301,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "B1",
    },
    {
      ID: "G61",
      Min: 0,
      Max: 3,
    },
    {
      ID: "Y6",
      Min: 0,
      Max: 2,
    },
    {
      ID: "Y3",
    },
    {
      ID: "Y4Loop1",
      Min: 0,
      Max: 10,
      Loop: [
        {
          ID: "Y4",
        },
        {
          ID: "W09",
          Min: 0,
        },
      ],
    },
    {
      ID: "N9",
      Min: 0,
      Max: 100,
    },
    {
      ID: "R2A",
      Min: 0,
      Max: 25,
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Max: 4,
      Loop: [
        {
          ID: "N1",
        },
        {
          ID: "N2",
          Min: 0,
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
          ID: "G61",
          Min: 0,
          Max: 3,
        },
      ],
    },
    {
      ID: "R4Loop1",
      Max: 20,
      Loop: [
        {
          ID: "R4",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 15,
        },
      ],
    },
    {
      ID: "W09",
      Min: 0,
    },
    {
      ID: "H3",
      Min: 0,
      Max: 6,
    },
    {
      ID: "EA",
      Min: 0,
      Max: 5,
    },
    {
      ID: "LXLoop1",
      Max: 999,
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "N7",
          Min: 0,
        },
        {
          ID: "W09",
          Min: 0,
        },
        {
          ID: "K1",
          Min: 0,
          Max: 10,
        },
        {
          ID: "L0",
          Min: 0,
        },
        {
          ID: "L5",
          Min: 0,
        },
        {
          ID: "L4",
          Min: 0,
        },
        {
          ID: "L1",
          Min: 0,
        },
        {
          ID: "H1Loop1",
          Min: 0,
          Max: 10,
          Loop: [
            {
              ID: "H1",
            },
            {
              ID: "H2",
              Min: 0,
              Max: 10,
            },
          ],
        },
        {
          ID: "LH1Loop1",
          Min: 0,
          Max: 100,
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
              Max: 25,
            },
            {
              ID: "LEP",
              Min: 0,
              Max: 3,
            },
            {
              ID: "LH4",
              Min: 0,
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
          ],
        },
      ],
    },
    {
      ID: "V1",
      Min: 0,
      Max: 2,
    },
    {
      ID: "V9",
      Min: 0,
      Max: 10,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
