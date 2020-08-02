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
  DocumentType: 275,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
      Min: 0,
    },
    {
      ID: "DTM",
      Min: 0,
      Max: 3,
    },
    {
      ID: "TRN",
      Min: 0,
      Max: 5,
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
          ID: "IN1",
          Min: 0,
        },
        {
          ID: "DMG",
          Min: 0,
          Max: 3,
        },
        {
          ID: "PRV",
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
          Max: 5,
        },
        {
          ID: "DTP",
          Min: 0,
        },
        {
          ID: "NX1Loop1",
          Min: 0,
          Max: 5,
          Loop: [
            {
              ID: "NX1",
            },
            {
              ID: "N3",
              Min: 0,
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
      ID: "LXLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "TRN",
          Min: 0,
        },
        {
          ID: "STC",
          Min: 0,
        },
        {
          ID: "NM1",
          Min: 0,
        },
        {
          ID: "PRV",
          Min: 0,
        },
        {
          ID: "PER",
          Min: 0,
        },
        {
          ID: "REF",
          Min: 0,
          Max: 5,
        },
        {
          ID: "DTPLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "DTP",
            },
            {
              ID: "CAT",
              Min: 0,
            },
            {
              ID: "PID",
              Min: 0,
            },
            {
              ID: "EFILoop1",
              Min: 0,
              Loop: [
                {
                  ID: "EFI",
                },
                {
                  ID: "BIN",
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
