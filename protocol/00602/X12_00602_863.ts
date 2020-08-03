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
  DocumentType: 863,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BTR",
    },
    {
      ID: "NTE",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "REF",
      Min: 0,
      Max: 12,
    },
    {
      ID: "DTM",
      Min: 0,
      Max: 10,
    },
    {
      ID: "PID",
      Min: 0,
      Max: 200,
    },
    {
      ID: "PO4",
      Min: 0,
    },
    {
      ID: "TMD",
      Min: 0,
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
          ID: "REF",
          Min: 0,
          Max: 12,
        },
        {
          ID: "PERLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "PER",
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
      ID: "LINLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "LIN",
        },
        {
          ID: "PID",
          Min: 0,
          Max: 1000,
        },
        {
          ID: "PO4",
          Min: 0,
        },
        {
          ID: "TMD",
          Min: 0,
        },
        {
          ID: "PSD",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "SPS",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "QTY",
          Min: 0,
          Max: 10,
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 10,
        },
        {
          ID: "REF",
          Min: 0,
          Max: 1000,
        },
        {
          ID: "NTE",
          Min: 0,
          Max: "unbounded",
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
              ],
            },
          ],
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
              Max: 10,
            },
            {
              ID: "PER",
              Min: 0,
              Max: 3,
            },
            {
              ID: "QTY",
              Min: 0,
              Max: 10,
            },
          ],
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
              ID: "UIT",
              Min: 0,
            },
            {
              ID: "PSD",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "SPS",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DTM",
              Min: 0,
              Max: 10,
            },
            {
              ID: "REF",
              Min: 0,
              Max: 10,
            },
            {
              ID: "NTE",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "MEALoop3",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "MEA",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: 10,
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
            {
              ID: "STALoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "STA",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "LMLoop4",
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
              ID: "TMDLoop1",
              Min: 0,
              Max: 100,
              Loop: [
                {
                  ID: "TMD",
                },
                {
                  ID: "MEA",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
            {
              ID: "TSPLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "TSP",
                },
                {
                  ID: "MEA",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "LMLoop5",
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
    {
      ID: "HLLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "HL",
        },
        {
          ID: "LIN",
          Min: 0,
        },
        {
          ID: "PID",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PO4",
          Min: 0,
        },
        {
          ID: "CID",
          Min: 0,
        },
        {
          ID: "QTY",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "TMD",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PSD",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "TSP",
          Min: 0,
        },
        {
          ID: "MEA",
          Min: 0,
        },
        {
          ID: "SPS",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "STA",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "NTE",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "LMLoop6",
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
              ID: "PER",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "N9",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "UIT",
              Min: 0,
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
