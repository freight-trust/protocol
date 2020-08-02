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
  DocumentType: 839,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BCS",
    },
    {
      ID: "REF",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "DLV",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "AMT",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "PCT",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "DTM",
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
      ID: "CFTLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "CFT",
        },
        {
          ID: "CAL",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "BSDLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "BSD",
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
              ID: "AMT",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "QTY",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PAM",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PCT",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "RPA",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PER",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "MSG",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "CLILoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "CLI",
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
                  ID: "AMT",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "QTY",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "PAM",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "PCT",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "RPA",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "PER",
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
