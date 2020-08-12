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
  DocumentType: 138,
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
    },
    {
      ID: "N1Loop1",
      Max: 2,
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
          ID: "PER",
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
          Max: 5,
        },
        {
          ID: "SSE",
          Min: 0,
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
          ID: "LUI",
          Min: 0,
          Max: 5,
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
          Max: 5,
        },
        {
          ID: "RQS",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "SCA",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "EMSLoop1",
          Min: 0,
          Max: 10,
          Loop: [
            {
              ID: "EMS",
            },
            {
              ID: "N1",
              Min: 0,
            },
            {
              ID: "DTP",
              Min: 0,
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
              Max: 5,
            },
            {
              ID: "MSG",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "RAPLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "RAP",
                },
                {
                  ID: "EMS",
                  Min: 0,
                },
              ],
            },
            {
              ID: "SCALoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "SCA",
                },
                {
                  ID: "FOS",
                  Min: 0,
                },
              ],
            },
            {
              ID: "N1Loop2",
              Min: 0,
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
                  ID: "PER",
                  Min: 0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "DEGLoop1",
      Min: 0,
      Max: 5,
      Loop: [
        {
          ID: "DEG",
        },
        {
          ID: "FOS",
          Min: 0,
          Max: 5,
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
          ID: "SUM",
          Min: 0,
        },
        {
          ID: "FOS",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "RQS",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "N1Loop3",
          Min: 0,
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
              ID: "COM",
              Min: 0,
              Max: 5,
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
          ID: "SSE",
          Min: 0,
        },
        {
          ID: "FOS",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DEGLoop2",
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
          ID: "EMS",
          Min: 0,
        },
        {
          ID: "DTP",
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
