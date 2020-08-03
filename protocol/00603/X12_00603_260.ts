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
  DocumentType: 260,
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
      Max: 7,
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
        },
        {
          ID: "N4",
          Min: 0,
        },
        {
          ID: "REF",
          Min: 0,
        },
        {
          ID: "PER",
          Min: 0,
        },
      ],
    },
    {
      ID: "CSILoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "CSI",
        },
        {
          ID: "NM1",
          Max: 2,
        },
        {
          ID: "REF",
          Max: 6,
        },
        {
          ID: "N3",
        },
        {
          ID: "N4",
        },
        {
          ID: "DTP",
          Min: 0,
          Max: 2,
        },
        {
          ID: "INT",
          Min: 0,
          Max: 24,
        },
        {
          ID: "MIR",
          Min: 0,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 5,
        },
        {
          ID: "PCT",
          Min: 0,
        },
        {
          ID: "NTE",
          Min: 0,
          Max: 30,
        },
        {
          ID: "DFILoop1",
          Min: 0,
          Loop: [
            {
              ID: "DFI",
            },
            {
              ID: "DTP",
              Max: 19,
            },
            {
              ID: "AMT",
              Max: 4,
            },
          ],
        },
        {
          ID: "RECLoop1",
          Min: 0,
          Loop: [
            {
              ID: "REC",
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 6,
            },
            {
              ID: "DTP",
              Min: 0,
              Max: 4,
            },
            {
              ID: "FCLLoop1",
              Min: 0,
              Loop: [
                {
                  ID: "FCL",
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: 5,
                },
              ],
            },
          ],
        },
        {
          ID: "FISLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "FIS",
            },
            {
              ID: "DTP",
              Min: 0,
            },
            {
              ID: "MSG",
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
