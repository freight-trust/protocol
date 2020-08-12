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
  DocumentType: 130,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "ERP",
    },
    {
      ID: "REF",
      Max: 10,
    },
    {
      ID: "DMG",
      Min: 0,
    },
    {
      ID: "LUI",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "IND",
      Min: 0,
      Max: 2,
    },
    {
      ID: "DTP",
      Min: 0,
    },
    {
      ID: "RAP",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "PCL",
      Min: 0,
      Max: 30,
    },
    {
      ID: "NTE",
      Min: 0,
      Max: 100,
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
      ID: "IN1Loop1",
      Max: 15,
      Loop: [
        {
          ID: "IN1",
        },
        {
          ID: "EMS",
          Min: 0,
          Max: 5,
        },
        {
          ID: "IN2",
          Max: 10,
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
          ],
        },
        {
          ID: "PER",
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
        },
        {
          ID: "SSTLoop1",
          Min: 0,
          Max: 500,
          Loop: [
            {
              ID: "SST",
            },
            {
              ID: "SSE",
              Min: 0,
              Max: 1000,
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
          ],
        },
        {
          ID: "ATVLoop1",
          Min: 0,
          Max: 100,
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
      ],
    },
    {
      ID: "SUMLoop1",
      Min: 0,
      Max: 5,
      Loop: [
        {
          ID: "SUM",
        },
        {
          ID: "NTE",
          Min: 0,
          Max: 50,
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
          ID: "HS",
          Min: 0,
          Max: 10,
        },
        {
          ID: "IMM",
          Min: 0,
          Max: 1000,
        },
        {
          ID: "HCLoop1",
          Min: 0,
          Max: 1000,
          Loop: [
            {
              ID: "HC",
            },
            {
              ID: "N1",
              Min: 0,
            },
            {
              ID: "N2",
              Min: 0,
            },
            {
              ID: "PER",
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
          ],
        },
        {
          ID: "SPLoop1",
          Min: 0,
          Max: 30,
          Loop: [
            {
              ID: "SP",
            },
            {
              ID: "PER",
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
              ID: "NTE",
              Min: 0,
            },
            {
              ID: "OPSLoop1",
              Min: 0,
              Max: 10,
              Loop: [
                {
                  ID: "OPS",
                },
                {
                  ID: "OPX",
                  Min: 0,
                  Max: 2,
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
          ],
        },
        {
          ID: "SESLoop1",
          Min: 0,
          Max: 1000,
          Loop: [
            {
              ID: "SES",
            },
            {
              ID: "SSE",
              Min: 0,
            },
            {
              ID: "NTE",
              Min: 0,
              Max: 50,
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
              ID: "SUMLoop2",
              Min: 0,
              Max: 5,
              Loop: [
                {
                  ID: "SUM",
                },
                {
                  ID: "NTE",
                  Min: 0,
                  Max: 5,
                },
              ],
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
                  ID: "REF",
                  Min: 0,
                  Max: 5,
                },
                {
                  ID: "CSU",
                  Min: 0,
                },
                {
                  ID: "LUI",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "RAP",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "NTE",
                  Min: 0,
                  Max: 50,
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
                  ID: "MKSLoop1",
                  Min: 0,
                  Max: 10,
                  Loop: [
                    {
                      ID: "MKS",
                    },
                    {
                      ID: "LUI",
                      Min: 0,
                    },
                  ],
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
                  Max: 5,
                },
                {
                  ID: "FOS",
                  Min: 0,
                  Max: 30,
                },
                {
                  ID: "N1",
                  Min: 0,
                  Max: 10,
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
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
