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
  DocumentType: 883,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BMA",
    },
    {
      ID: "N1",
      Max: 10,
    },
    {
      ID: "G62",
    },
    {
      ID: "G43",
      Min: 0,
      Max: 1000,
    },
    {
      ID: "G95",
      Min: 0,
      Max: 99,
    },
    {
      ID: "G61",
      Min: 0,
      Max: 3,
    },
    {
      ID: "LINLoop1",
      Min: 0,
      Max: 9999,
      Loop: [
        {
          ID: "LIN",
        },
        {
          ID: "UITLoop1",
          Max: 99,
          Loop: [
            {
              ID: "UIT",
            },
            {
              ID: "QTY",
              Min: 0,
              Max: 2,
            },
            {
              ID: "G62",
              Min: 0,
              Max: 10,
            },
          ],
        },
      ],
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Max: 999,
      Loop: [
        {
          ID: "N1",
        },
        {
          ID: "AMT",
          Min: 0,
        },
        {
          ID: "G62",
          Min: 0,
          Max: 10,
        },
        {
          ID: "G95",
          Min: 0,
          Max: 5,
        },
        {
          ID: "LINLoop2",
          Min: 0,
          Max: 9999,
          Loop: [
            {
              ID: "LIN",
            },
            {
              ID: "AMT",
              Min: 0,
            },
          ],
        },
      ],
    },
    {
      ID: "LXLoop1",
      Min: 0,
      Max: 9999,
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "LIN",
        },
        {
          ID: "AMT",
          Min: 0,
        },
        {
          ID: "N1Loop2",
          Min: 0,
          Max: 999,
          Loop: [
            {
              ID: "N1",
            },
            {
              ID: "AMT",
              Min: 0,
            },
            {
              ID: "G62",
              Min: 0,
              Max: 10,
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
