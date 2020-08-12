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
  DocumentType: 813,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BTI",
    },
    {
      ID: "DTM",
      Max: 10,
    },
    {
      ID: "TIA",
      Min: 0,
      Max: 1000,
    },
    {
      ID: "REF",
      Min: 0,
      Max: 10,
    },
    {
      ID: "TRN",
      Min: 0,
      Max: 1000,
    },
    {
      ID: "BPR",
      Min: 0,
      Max: 1000,
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
          ID: "IN2",
          Min: 0,
          Max: 10,
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
          Max: 2,
        },
      ],
    },
    {
      ID: "TFSLoop1",
      Min: 0,
      Max: 100000,
      Loop: [
        {
          ID: "TFS",
        },
        {
          ID: "REF",
          Min: 0,
          Max: 10,
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 10,
        },
        {
          ID: "MSG",
          Min: 0,
          Max: 1000,
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
              ID: "IN2",
              Min: 0,
              Max: 10,
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
          ID: "TIALoop1",
          Min: 0,
          Max: 10000,
          Loop: [
            {
              ID: "TIA",
            },
            {
              ID: "DTM",
              Min: 0,
              Max: 10,
            },
            {
              ID: "MSG",
              Min: 0,
              Max: 1000,
            },
          ],
        },
        {
          ID: "FGSLoop1",
          Min: 0,
          Max: 100000,
          Loop: [
            {
              ID: "FGS",
            },
            {
              ID: "REF",
              Min: 0,
              Max: 10,
            },
            {
              ID: "DTM",
              Min: 0,
              Max: 10,
            },
            {
              ID: "N1Loop3",
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
                  ID: "IN2",
                  Min: 0,
                  Max: 10,
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
              ID: "TIALoop2",
              Min: 0,
              Max: 10000,
              Loop: [
                {
                  ID: "TIA",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "MSG",
                  Min: 0,
                  Max: 1000,
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
