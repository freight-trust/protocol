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
  DocumentType: 812,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BCD",
    },
    {
      ID: "CUR",
      Min: 0,
    },
    {
      ID: "N9",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "PER",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "ITD",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "DTM",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "FOB",
      Min: 0,
    },
    {
      ID: "SHD",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "SAC",
      Min: 0,
      Max: 25,
    },
    {
      ID: "N1Loop1",
      Max: 200,
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
          ID: "N9",
          Min: 0,
          Max: 12,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 3,
        },
        {
          ID: "AMT",
          Min: 0,
          Max: 10,
        },
      ],
    },
    {
      ID: "LMLoop1",
      Min: 0,
      Max: 10,
      Loop: [
        {
          ID: "LM",
        },
        {
          ID: "LQ",
          Max: 100,
        },
      ],
    },
    {
      ID: "FA1Loop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "FA1",
        },
        {
          ID: "FA2",
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "CDDLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "CDD",
        },
        {
          ID: "LIN",
          Min: 0,
        },
        {
          ID: "PO4",
          Min: 0,
        },
        {
          ID: "N9",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 5,
        },
        {
          ID: "SACLoop1",
          Min: 0,
          Max: 25,
          Loop: [
            {
              ID: "SAC",
            },
            {
              ID: "DTM",
              Min: 0,
              Max: 5,
            },
          ],
        },
        {
          ID: "LMLoop2",
          Min: 0,
          Max: 10,
          Loop: [
            {
              ID: "LM",
            },
            {
              ID: "LQ",
              Max: 100,
            },
          ],
        },
        {
          ID: "N11Loop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "N11",
            },
            {
              ID: "AMT",
              Min: 0,
              Max: 10,
            },
            {
              ID: "PCT",
              Min: 0,
              Max: 2,
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
                  ID: "AMT",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "PCT",
                  Min: 0,
                  Max: 2,
                },
              ],
            },
          ],
        },
        {
          ID: "FA1Loop2",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "FA1",
            },
            {
              ID: "FA2",
              Max: "unbounded",
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
