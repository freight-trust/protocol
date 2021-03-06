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
  DocumentType: 266,
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
      Max: "unbounded",
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
          Max: 2,
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
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
          ID: "API",
          Min: 0,
          Max: 2,
        },
        {
          ID: "DTP",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "QTY",
          Min: 0,
          Max: 2,
        },
        {
          ID: "AMT",
          Min: 0,
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
          ID: "N9Loop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "N9",
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
                  Max: 2,
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "APILoop1",
              Max: "unbounded",
              Loop: [
                {
                  ID: "API",
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
                  ID: "DTP",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "CRC",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "QTY",
                  Min: 0,
                },
                {
                  ID: "AMT",
                  Min: 0,
                },
                {
                  ID: "INT",
                  Min: 0,
                },
                {
                  ID: "PCT",
                  Min: 0,
                },
                {
                  ID: "NTE",
                  Min: 0,
                  Max: 100,
                },
                {
                  ID: "VEH",
                  Min: 0,
                },
                {
                  ID: "PID",
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
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
