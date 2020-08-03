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
  DocumentType: 142,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "N9",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "N1Loop1",
      Max: 4,
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
          Max: 3,
        },
        {
          ID: "N4",
          Min: 0,
        },
        {
          ID: "REF",
          Min: 0,
          Max: 2,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 2,
        },
      ],
    },
    {
      ID: "LXLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "N9Loop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "N9",
            },
            {
              ID: "MSG",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "LINLoop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "LIN",
            },
            {
              ID: "PID",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "LOC",
              Min: 0,
            },
            {
              ID: "QTY",
              Min: 0,
              Max: "unbounded",
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
              ID: "PER",
              Min: 0,
            },
            {
              ID: "PSC",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "SSS",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "LMLoop1",
          Min: 0,
          Max: 3,
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
              Max: 3,
            },
            {
              ID: "N4",
              Min: 0,
            },
            {
              ID: "N9",
              Min: 0,
              Max: 2,
            },
            {
              ID: "PER",
              Min: 0,
              Max: 2,
            },
          ],
        },
        {
          ID: "PRRLoop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "PRR",
            },
            {
              ID: "LIN",
              Min: 0,
            },
            {
              ID: "LOC",
              Min: 0,
            },
            {
              ID: "QTY",
              Min: 0,
            },
            {
              ID: "DTM",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "MSG",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "RC",
              Min: 0,
            },
            {
              ID: "PER",
              Min: 0,
            },
            {
              ID: "PSC",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "SSS",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "CIDLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "CID",
                },
                {
                  ID: "TMD",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "MEALoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "MEA",
                    },
                    {
                      ID: "DTM",
                      Min: 0,
                    },
                    {
                      ID: "LIN",
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
          ID: "REPLoop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "REP",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "N1",
              Min: 0,
              Max: 2,
            },
            {
              ID: "PER",
              Min: 0,
            },
            {
              ID: "RC",
              Min: 0,
            },
            {
              ID: "DTM",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "LIN",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "ITA",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "MSG",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PRT",
              Min: 0,
            },
            {
              ID: "LMLoop2",
              Min: 0,
              Max: 3,
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
            {
              ID: "MEALoop2",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "MEA",
                },
                {
                  ID: "DTM",
                  Min: 0,
                },
                {
                  ID: "LIN",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "IT1Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "IT1",
                },
                {
                  ID: "LIN",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "N1",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "N9",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "PRT",
                  Min: 0,
                },
                {
                  ID: "DTM",
                  Min: 0,
                },
                {
                  ID: "ITA",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "CUR",
                  Min: 0,
                },
              ],
            },
          ],
        },
        {
          ID: "AMTLoop1",
          Min: 0,
          Loop: [
            {
              ID: "AMT",
            },
            {
              ID: "TXI",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "CUR",
              Min: 0,
            },
          ],
        },
      ],
    },
    {
      ID: "TDSLoop1",
      Min: 0,
      Loop: [
        {
          ID: "TDS",
        },
        {
          ID: "TXI",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "CUR",
          Min: 0,
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
