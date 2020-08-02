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
  DocumentType: 423,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "DTM",
      Min: 0,
      Max: 3,
    },
    {
      ID: "LQ",
      Min: 0,
    },
    {
      ID: "QTY",
      Min: 0,
      Max: 3,
    },
    {
      ID: "N1Loop1",
      Max: 5,
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
        },
        {
          ID: "N4",
          Min: 0,
        },
        {
          ID: "PER",
          Min: 0,
        },
      ],
    },
    {
      ID: "LXLoop1",
      Min: 0,
      Max: 150,
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "XD",
          Min: 0,
        },
        {
          ID: "N7Loop1",
          Min: 0,
          Max: 500,
          Loop: [
            {
              ID: "N7",
            },
            {
              ID: "YNQ",
              Min: 0,
              Max: 10,
            },
            {
              ID: "DTM",
              Min: 0,
              Max: 10,
            },
            {
              ID: "XD",
              Min: 0,
            },
            {
              ID: "R2",
              Min: 0,
            },
            {
              ID: "N1",
              Min: 0,
            },
            {
              ID: "N4",
              Min: 0,
            },
            {
              ID: "L5",
              Min: 0,
              Max: 5,
            },
            {
              ID: "D9",
              Min: 0,
            },
            {
              ID: "F9",
              Min: 0,
            },
            {
              ID: "PER",
              Min: 0,
              Max: 2,
            },
            {
              ID: "LH2",
              Min: 0,
              Max: 2,
            },
            {
              ID: "LH6",
              Min: 0,
              Max: 6,
            },
            {
              ID: "QTY",
              Min: 0,
              Max: 2,
            },
            {
              ID: "N9",
              Min: 0,
              Max: 10,
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
                  ID: "N1Loop2",
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
