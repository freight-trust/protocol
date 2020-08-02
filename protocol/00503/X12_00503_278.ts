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
  DocumentType: 278,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BHT",
    },
    {
      ID: "HLLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "HL",
        },
        {
          ID: "TRN",
          Min: 0,
          Max: 9,
        },
        {
          ID: "AAA",
          Min: 0,
          Max: 9,
        },
        {
          ID: "UM",
          Min: 0,
        },
        {
          ID: "HCR",
          Min: 0,
        },
        {
          ID: "REF",
          Min: 0,
          Max: 9,
        },
        {
          ID: "DTP",
          Min: 0,
          Max: 9,
        },
        {
          ID: "HI",
          Min: 0,
        },
        {
          ID: "SV1",
          Min: 0,
        },
        {
          ID: "SV2",
          Min: 0,
        },
        {
          ID: "SV3",
          Min: 0,
        },
        {
          ID: "TOO",
          Min: 0,
          Max: 32,
        },
        {
          ID: "DN2",
          Min: 0,
          Max: 35,
        },
        {
          ID: "HSD",
          Min: 0,
        },
        {
          ID: "CRC",
          Min: 0,
          Max: 9,
        },
        {
          ID: "CL1",
          Min: 0,
        },
        {
          ID: "CR1",
          Min: 0,
        },
        {
          ID: "CR2",
          Min: 0,
        },
        {
          ID: "CR4",
          Min: 0,
        },
        {
          ID: "CR5",
          Min: 0,
        },
        {
          ID: "CR6",
          Min: 0,
        },
        {
          ID: "CR7",
          Min: 0,
        },
        {
          ID: "CR8",
          Min: 0,
        },
        {
          ID: "PWK",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "MSG",
          Min: 0,
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
              ID: "REF",
              Min: 0,
              Max: 9,
            },
            {
              ID: "N2",
              Min: 0,
            },
            {
              ID: "N3",
              Min: 0,
            },
            {
              ID: "N4",
              Min: 0,
            },
            {
              ID: "PER",
              Min: 0,
              Max: 3,
            },
            {
              ID: "AAA",
              Min: 0,
              Max: 9,
            },
            {
              ID: "PRV",
              Min: 0,
            },
            {
              ID: "DMG",
              Min: 0,
            },
            {
              ID: "INS",
              Min: 0,
            },
            {
              ID: "DTP",
              Min: 0,
              Max: 9,
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
