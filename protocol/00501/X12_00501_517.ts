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
  DocumentType: 517,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BR",
    },
    {
      ID: "G62",
      Min: 0,
      Max: 10,
    },
    {
      ID: "LMLoop1",
      Min: 0,
      Max: 10,
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
          Max: 5,
        },
      ],
    },
    {
      ID: "QTYLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "QTY",
        },
        {
          ID: "N9",
          Min: 0,
          Max: 30,
        },
        {
          ID: "G62",
          Min: 0,
          Max: 30,
        },
        {
          ID: "DD",
          Min: 0,
          Max: 100,
        },
        {
          ID: "GF",
          Min: 0,
        },
        {
          ID: "LMLoop2",
          Min: 0,
          Max: 10,
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
              Max: 5,
            },
          ],
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
