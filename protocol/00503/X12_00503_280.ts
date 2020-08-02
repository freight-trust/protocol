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
  DocumentType: 280,
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
          Max: "unbounded",
        },
        {
          ID: "PER",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "PWKLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "PWK",
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "CRC",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "MEA",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PER",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "IN1Loop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "IN1",
            },
            {
              ID: "IN2",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "ICH",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DTM",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "NX1Loop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "NX1",
            },
            {
              ID: "NX2",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "N4",
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
          ],
        },
        {
          ID: "EFILoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "EFI",
            },
            {
              ID: "BIN",
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
