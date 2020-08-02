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
  DocumentType: 185,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "DTP",
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
          ID: "REF",
          Min: 0,
          Max: 5,
        },
        {
          ID: "PER",
          Min: 0,
          Max: "unbounded",
        },
      ],
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
    {
      ID: "LXLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "ASI",
          Min: 0,
        },
        {
          ID: "DTP",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "NTE",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "N1",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PCT",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "ASM",
          Min: 0,
          Max: "unbounded",
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
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "PIDLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "PID",
            },
            {
              ID: "MEA",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "QTY",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "AMT",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "ASM",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "LQLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "LQ",
                },
                {
                  ID: "QTY",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "AMT",
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
      ID: "LSLoop1",
      Min: 0,
      Loop: [
        {
          ID: "LS",
          Min: 1,
          Max: 1,
        },
        {
          ID: "ASMLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "ASM",
            },
            {
              ID: "REF",
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
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
