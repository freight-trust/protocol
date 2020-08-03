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
  DocumentType: 561,
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
          Max: 100,
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
          ID: "G61",
          Min: 0,
        },
      ],
    },
    {
      ID: "HLLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "HL",
        },
        {
          ID: "CS",
          Min: 0,
        },
        {
          ID: "G62",
          Min: 0,
          Max: 2,
        },
        {
          ID: "ITD",
          Min: 0,
          Max: 5,
        },
        {
          ID: "PO1",
          Min: 0,
        },
        {
          ID: "SLN",
          Min: 0,
        },
        {
          ID: "N9",
          Min: 0,
          Max: 10,
        },
        {
          ID: "AMT",
          Min: 0,
        },
        {
          ID: "PCT",
          Min: 0,
          Max: 2,
        },
        {
          ID: "PID",
          Min: 0,
          Max: 10,
        },
        {
          ID: "FA1Loop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "FA1",
            },
            {
              ID: "FA2",
              Max: "unbounded",
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 2,
            },
            {
              ID: "N9",
              Min: 0,
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
              Max: 100,
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
              ID: "G61",
              Min: 0,
            },
          ],
        },
        {
          ID: "SCHLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "SCH",
            },
            {
              ID: "N1Loop3",
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
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "CTT",
      Min: 0,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
