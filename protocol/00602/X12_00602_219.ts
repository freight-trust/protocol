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
  DocumentType: 219,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "B9",
    },
    {
      ID: "B9A",
      Max: 7,
    },
    {
      ID: "AT5",
      Min: 0,
      Max: 6,
    },
    {
      ID: "L11",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "MS3",
      Min: 0,
      Max: 99,
    },
    {
      ID: "ITA",
      Min: 0,
      Max: 20,
    },
    {
      ID: "NTE",
      Min: 0,
      Max: 10,
    },
    {
      ID: "N7Loop1",
      Min: 0,
      Max: 99,
      Loop: [
        {
          ID: "N7",
        },
        {
          ID: "N7A",
          Min: 0,
        },
        {
          ID: "N7B",
          Min: 0,
        },
        {
          ID: "MEA",
          Min: 0,
        },
      ],
    },
    {
      ID: "S5Loop1",
      Min: 0,
      Max: 99,
      Loop: [
        {
          ID: "S5",
        },
        {
          ID: "G62",
          Min: 0,
          Max: 3,
        },
        {
          ID: "L11",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "ITA",
          Min: 0,
          Max: 20,
        },
        {
          ID: "N1Loop1",
          Min: 0,
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
              ID: "PER",
              Min: 0,
              Max: 3,
            },
          ],
        },
        {
          ID: "G61Loop1",
          Min: 0,
          Max: 99,
          Loop: [
            {
              ID: "G61",
            },
            {
              ID: "L11",
              Min: 0,
              Max: 10,
            },
            {
              ID: "LH6",
              Min: 0,
              Max: 10,
            },
            {
              ID: "LH1Loop1",
              Min: 0,
              Max: 25,
              Loop: [
                {
                  ID: "LH1",
                },
                {
                  ID: "LH2",
                  Min: 0,
                  Max: 5,
                },
                {
                  ID: "LH3",
                  Min: 0,
                  Max: 6,
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
                },
                {
                  ID: "LHT",
                  Min: 0,
                  Max: 3,
                },
              ],
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
              ID: "LCT",
              Min: 0,
            },
            {
              ID: "MAN",
              Min: 0,
              Max: 10,
            },
            {
              ID: "AT5",
              Min: 0,
              Max: 6,
            },
            {
              ID: "AMT",
              Min: 0,
            },
            {
              ID: "CUR",
              Min: 0,
            },
            {
              ID: "L11",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "G61Loop2",
              Min: 0,
              Max: 99,
              Loop: [
                {
                  ID: "G61",
                },
                {
                  ID: "L11",
                  Min: 0,
                  Max: 5,
                },
                {
                  ID: "LH6",
                  Min: 0,
                  Max: 6,
                },
                {
                  ID: "LH1Loop2",
                  Min: 0,
                  Max: 25,
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
                    },
                    {
                      ID: "LHT",
                      Min: 0,
                      Max: 3,
                    },
                  ],
                },
              ],
            },
            {
              ID: "LADLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "LAD",
                },
                {
                  ID: "PO4",
                  Min: 0,
                },
                {
                  ID: "G69",
                  Min: 0,
                  Max: 99,
                },
                {
                  ID: "AT5",
                  Min: 0,
                  Max: 6,
                },
                {
                  ID: "AMT",
                  Min: 0,
                },
                {
                  ID: "CUR",
                  Min: 0,
                },
                {
                  ID: "L11",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "PER",
                  Min: 0,
                },
                {
                  ID: "G61Loop3",
                  Min: 0,
                  Max: 99,
                  Loop: [
                    {
                      ID: "G61",
                    },
                    {
                      ID: "L11",
                      Min: 0,
                      Max: 5,
                    },
                    {
                      ID: "LH6",
                      Min: 0,
                      Max: 6,
                    },
                    {
                      ID: "LH1Loop3",
                      Min: 0,
                      Max: 25,
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
                        },
                        {
                          ID: "LHT",
                          Min: 0,
                          Max: 3,
                        },
                      ],
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
      ID: "L3",
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
