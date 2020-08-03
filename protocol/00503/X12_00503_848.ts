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
  Release: "00503",
  DocumentType: 848,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BMS",
    },
    {
      ID: "NTE",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "REF",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "DTM",
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
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PER",
          Min: 0,
          Max: "unbounded",
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
          Max: "unbounded",
        },
        {
          ID: "MSSLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "MSS",
            },
            {
              ID: "MEA",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "MSG",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "SD1Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "SD1",
                },
                {
                  ID: "MEA",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "PKG",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "TD4",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "MSG",
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
                      ID: "MEA",
                      Max: "unbounded",
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
                  ID: "CID",
                  Min: 0,
                },
                {
                  ID: "MEA",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "STA",
                  Min: 0,
                },
                {
                  ID: "TMD",
                  Min: 0,
                },
                {
                  ID: "MSG",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "SD1Loop2",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "SD1",
                    },
                    {
                      ID: "MEA",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "PKG",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "TD4",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "MSG",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "CIDLoop2",
                      Min: 0,
                      Max: "unbounded",
                      Loop: [
                        {
                          ID: "CID",
                        },
                        {
                          ID: "MEA",
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
