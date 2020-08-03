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
  DocumentType: 821,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "B2A",
    },
    {
      ID: "DTM",
      Max: 4,
    },
    {
      ID: "TRN",
      Max: 2,
    },
    {
      ID: "N1",
      Min: 0,
      Max: 2,
    },
    {
      ID: "PER",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "REF",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "LMLoop1",
      Min: 0,
      Max: 10,
      Loop: [
        {
          ID: "LM",
        },
        {
          ID: "LQLoop1",
          Max: 100,
          Loop: [
            {
              ID: "LQ",
            },
            {
              ID: "DTM",
              Min: 0,
              Max: 3,
            },
          ],
        },
      ],
    },
    {
      ID: "FA1Loop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "FA1",
        },
        {
          ID: "FA2",
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "ENTLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "ENT",
        },
        {
          ID: "N1Loop1",
          Min: 0,
          Max: 2,
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
              ID: "PER",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "ACTLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "ACT",
            },
            {
              ID: "CUR",
              Min: 0,
            },
            {
              ID: "LMLoop2",
              Min: 0,
              Max: 10,
              Loop: [
                {
                  ID: "LM",
                },
                {
                  ID: "LQLoop2",
                  Max: 100,
                  Loop: [
                    {
                      ID: "LQ",
                    },
                    {
                      ID: "DTM",
                      Min: 0,
                      Max: 3,
                    },
                  ],
                },
              ],
            },
            {
              ID: "RTELoop1",
              Min: 0,
              Max: 13,
              Loop: [
                {
                  ID: "RTE",
                },
                {
                  ID: "DTM",
                  Min: 0,
                },
              ],
            },
            {
              ID: "BLNLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "BLN",
                },
                {
                  ID: "AVA",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "TSULoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "TSU",
                },
                {
                  ID: "AVA",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "FIRLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "FIR",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "MSG",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "AVA",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "TRN",
                  Min: 0,
                },
                {
                  ID: "N1",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "AMT",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "CTP",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "RTE",
                  Min: 0,
                  Max: "unbounded",
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
                      ID: "DTM",
                      Min: 0,
                    },
                    {
                      ID: "N9",
                      Min: 0,
                      Max: "unbounded",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          ID: "FA1Loop2",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "FA1",
            },
            {
              ID: "FA2",
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
