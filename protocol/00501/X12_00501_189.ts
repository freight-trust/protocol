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
  DocumentType: 189,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "N1Loop1",
      Max: 2,
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
      ID: "REFLoop1",
      Max: 15,
      Loop: [
        {
          ID: "REF",
        },
        {
          ID: "DTP",
          Min: 0,
          Max: 2,
        },
        {
          ID: "N4",
          Min: 0,
        },
        {
          ID: "N1",
          Min: 0,
        },
      ],
    },
    {
      ID: "IN1Loop1",
      Max: 10,
      Loop: [
        {
          ID: "IN1",
        },
        {
          ID: "IN2",
          Max: 10,
        },
        {
          ID: "REF",
          Min: 0,
          Max: 10,
        },
        {
          ID: "DMG",
          Min: 0,
        },
        {
          ID: "IND",
          Min: 0,
        },
        {
          ID: "IMM",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "HC",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "LUI",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "III",
          Min: 0,
          Max: 10,
        },
        {
          ID: "NTE",
          Min: 0,
        },
        {
          ID: "N3Loop1",
          Min: 0,
          Max: 5,
          Loop: [
            {
              ID: "N3",
            },
            {
              ID: "N4",
              Min: 0,
            },
            {
              ID: "DTP",
              Min: 0,
              Max: 2,
            },
          ],
        },
        {
          ID: "COMLoop1",
          Min: 0,
          Max: 10,
          Loop: [
            {
              ID: "COM",
            },
            {
              ID: "DTP",
              Min: 0,
              Max: 2,
            },
          ],
        },
        {
          ID: "N1Loop2",
          Min: 0,
          Max: 5,
          Loop: [
            {
              ID: "N1",
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
              ID: "QTY",
              Min: 0,
            },
            {
              ID: "EMSLoop1",
              Min: 0,
              Max: 5,
              Loop: [
                {
                  ID: "EMS",
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: 2,
                },
                {
                  ID: "QTY",
                  Min: 0,
                },
                {
                  ID: "AMT",
                  Min: 0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "ATVLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "ATV",
        },
        {
          ID: "DTP",
          Min: 0,
          Max: 2,
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
          ID: "AMTLoop1",
          Min: 0,
          Max: 15,
          Loop: [
            {
              ID: "AMT",
            },
            {
              ID: "MSG",
              Min: 0,
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
      ID: "SSELoop1",
      Min: 0,
      Max: 5,
      Loop: [
        {
          ID: "SSE",
        },
        {
          ID: "DEG",
          Min: 0,
        },
        {
          ID: "FOS",
          Min: 0,
          Max: 5,
        },
      ],
    },
    {
      ID: "LQLoop1",
      Min: 0,
      Loop: [
        {
          ID: "LQ",
        },
        {
          ID: "PDL",
          Min: 0,
        },
      ],
    },
    {
      ID: "RSDLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "RSD",
        },
        {
          ID: "N4",
        },
        {
          ID: "DTP",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "QTY",
          Min: 0,
        },
        {
          ID: "REF",
          Min: 0,
        },
      ],
    },
    {
      ID: "RQSLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "RQS",
        },
        {
          ID: "MSG",
          Min: 0,
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "SSTLoop1",
      Min: 0,
      Max: 10,
      Loop: [
        {
          ID: "SST",
        },
        {
          ID: "SSE",
          Min: 0,
        },
        {
          ID: "N1",
          Min: 0,
          Max: 2,
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
          ID: "COM",
          Min: 0,
        },
        {
          ID: "SUM",
          Min: 0,
          Max: 5,
        },
        {
          ID: "MSG",
          Min: 0,
        },
        {
          ID: "SESLoop1",
          Min: 0,
          Max: 20,
          Loop: [
            {
              ID: "SES",
            },
            {
              ID: "CRSLoop1",
              Min: 0,
              Max: 50,
              Loop: [
                {
                  ID: "CRS",
                },
                {
                  ID: "NTE",
                  Min: 0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "TSTLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "TST",
        },
        {
          ID: "SBTLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "SBT",
            },
            {
              ID: "SRE",
              Min: 0,
              Max: 3,
            },
            {
              ID: "NTE",
              Min: 0,
              Max: 2,
            },
          ],
        },
      ],
    },
    {
      ID: "PCLLoop1",
      Min: 0,
      Max: 25,
      Loop: [
        {
          ID: "PCL",
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
          ID: "COM",
          Min: 0,
        },
        {
          ID: "SSE",
          Min: 0,
        },
        {
          ID: "SUM",
          Min: 0,
        },
        {
          ID: "MSG",
          Min: 0,
        },
        {
          ID: "SESLoop2",
          Min: 0,
          Max: 1000,
          Loop: [
            {
              ID: "SES",
            },
            {
              ID: "CRSLoop2",
              Min: 0,
              Max: 50,
              Loop: [
                {
                  ID: "CRS",
                },
                {
                  ID: "NTE",
                  Min: 0,
                },
              ],
            },
            {
              ID: "DEGLoop1",
              Min: 0,
              Max: 10,
              Loop: [
                {
                  ID: "DEG",
                },
                {
                  ID: "SUM",
                  Min: 0,
                },
                {
                  ID: "FOS",
                  Min: 0,
                  Max: 30,
                },
                {
                  ID: "NTE",
                  Min: 0,
                  Max: 30,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "LXLoop1",
      Min: 0,
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "MSG",
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "LTLoop1",
      Min: 0,
      Max: 15,
      Loop: [
        {
          ID: "LT",
        },
        {
          ID: "DTP",
          Min: 0,
        },
        {
          ID: "QTY",
          Min: 0,
        },
        {
          ID: "COM",
          Min: 0,
          Max: 5,
        },
        {
          ID: "N1",
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
          ID: "LTE",
          Min: 0,
          Max: 15,
        },
        {
          ID: "MSG",
          Min: 0,
          Max: "unbounded",
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
