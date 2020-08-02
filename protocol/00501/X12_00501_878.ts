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
  DocumentType: 878,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
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
          Max: 2,
        },
        {
          ID: "N4",
          Min: 0,
        },
      ],
    },
    {
      ID: "G21Loop1",
      Max: 999,
      Loop: [
        {
          ID: "G21",
        },
        {
          ID: "G69",
          Min: 0,
          Max: 5,
        },
        {
          ID: "CTP",
          Min: 0,
        },
        {
          ID: "G72",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PID",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "N1Loop2",
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
              ID: "G62",
              Min: 0,
              Max: 10,
            },
            {
              ID: "G22",
              Min: 0,
            },
            {
              ID: "CTP",
              Min: 0,
            },
            {
              ID: "G72",
              Min: 0,
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
