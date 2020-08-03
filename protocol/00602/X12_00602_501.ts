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
  DocumentType: 501,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "NTE",
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
          ID: "DTP",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "LMLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "LM",
            },
            {
              ID: "LQ",
              Max: "unbounded",
            },
          ],
        },
      ],
    },
    {
      ID: "CRTLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "CRT",
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
              ID: "DTP",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "SPR",
              Min: 0,
              Max: "unbounded",
            },
          ],
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
              ID: "PER",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DTPLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "DTP",
                },
                {
                  ID: "QTY",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "LMLoop2",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "LM",
                },
                {
                  ID: "LQ",
                  Max: "unbounded",
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: "unbounded",
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
                  ID: "QTYLoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "QTY",
                    },
                    {
                      ID: "MEA",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "PCT",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "NTE",
                      Min: 0,
                      Max: "unbounded",
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
              ID: "REFLoop2",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "REF",
                },
                {
                  ID: "QTYLoop2",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "QTY",
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "AMT",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "NTE",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "LMLoop3",
                      Min: 0,
                      Max: "unbounded",
                      Loop: [
                        {
                          ID: "LM",
                        },
                        {
                          ID: "LQ",
                          Max: "unbounded",
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
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
