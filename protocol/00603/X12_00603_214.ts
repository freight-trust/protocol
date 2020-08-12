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
  DocumentType: 214,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "B10",
    },
    {
      ID: "MS3",
      Min: 0,
      Max: 12,
    },
    {
      ID: "LXLoop1",
      Max: 999999,
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "L11",
          Min: 0,
          Max: 999,
        },
        {
          ID: "MAN",
          Min: 0,
          Max: 9999,
        },
        {
          ID: "Q7",
          Min: 0,
          Max: 10,
        },
        {
          ID: "K1",
          Min: 0,
          Max: 10,
        },
        {
          ID: "AT5",
          Min: 0,
          Max: 10,
        },
        {
          ID: "AT8",
          Min: 0,
          Max: 10,
        },
        {
          ID: "AT7Loop1",
          Max: 10,
          Loop: [
            {
              ID: "AT7",
            },
            {
              ID: "MS1",
              Min: 0,
            },
            {
              ID: "MS2",
              Min: 0,
              Max: 2,
            },
            {
              ID: "K1",
              Min: 0,
            },
            {
              ID: "M7",
              Min: 0,
            },
          ],
        },
        {
          ID: "N1Loop1",
          Min: 0,
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
            {
              ID: "G62",
              Min: 0,
            },
            {
              ID: "L11",
              Min: 0,
              Max: 10,
            },
          ],
        },
        {
          ID: "OIDLoop1",
          Min: 0,
          Max: 999999,
          Loop: [
            {
              ID: "OID",
            },
            {
              ID: "SDQ",
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
