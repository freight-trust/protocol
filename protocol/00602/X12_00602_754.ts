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
  DocumentType: 754,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "PER",
      Min: 0,
      Max: 5,
    },
    {
      ID: "N1Loop1",
      Max: 5,
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
      ID: "LXLoop1",
      Max: 9999,
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "L11",
          Min: 0,
          Max: 5,
        },
        {
          ID: "BLR",
          Min: 0,
        },
        {
          ID: "SMD",
          Min: 0,
          Max: 5,
        },
        {
          ID: "OID",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "G62",
          Min: 0,
          Max: 2,
        },
        {
          ID: "MSI",
          Min: 0,
        },
        {
          ID: "QTYLoop1",
          Min: 0,
          Max: 25,
          Loop: [
            {
              ID: "QTY",
            },
            {
              ID: "AT9",
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
