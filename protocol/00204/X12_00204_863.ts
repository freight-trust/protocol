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
  Release: "00204",
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
      Max: 100,
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
      ID: "MEA",
      Min: 0,
      Max: 20,
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
          ID: "PER",
          Min: 0,
          Max: 3,
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
          ID: "MEA",
          Min: 0,
          Max: 20,
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
          ID: "CIDLoop1",
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
            },
            {
              ID: "MEA",
              Min: 0,
              Max: 50,
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
              ID: "LXLoop1",
              Min: 0,
              Loop: [
                {
                  ID: "LX",
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
                      Max: 10,
                    },
                    {
                      ID: "REF",
                      Min: 0,
                      Max: 10,
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
