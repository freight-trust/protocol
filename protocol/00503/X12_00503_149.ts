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
  DocumentType: 149,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "DTM",
      Max: "unbounded",
    },
    {
      ID: "TDS",
      Min: 0,
    },
    {
      ID: "REF",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "MSG",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "N1Loop1",
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
      Max: "unbounded",
      Loop: [
        {
          ID: "TFS",
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
        {
          ID: "TIA",
          Min: 0,
          Max: "unbounded",
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
          ID: "FGSLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "FGS",
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
            {
              ID: "TIA",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "MSG",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PCT",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "AMTLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "AMT",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
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
