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
  DocumentType: 276,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BHT",
    },
    {
      ID: "REF",
      Min: 0,
      Max: 10,
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
          Max: 2,
        },
        {
          ID: "PER",
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
          ID: "SBR",
          Min: 0,
        },
        {
          ID: "PAT",
          Min: 0,
        },
        {
          ID: "DMG",
          Min: 0,
        },
        {
          ID: "NM1Loop2",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "NM1",
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
              ID: "PER",
              Min: 0,
            },
          ],
        },
        {
          ID: "TRNLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "TRN",
            },
            {
              ID: "REF",
              Min: 0,
              Max: 9,
            },
            {
              ID: "AMT",
              Min: 0,
            },
            {
              ID: "DTP",
              Min: 0,
              Max: 2,
            },
            {
              ID: "SVCLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "SVC",
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "DTP",
                  Min: 0,
                },
                {
                  ID: "TOO",
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
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
