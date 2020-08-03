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
  DocumentType: 195,
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
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "QTY",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "PWK",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "CRCLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "CRC",
        },
        {
          ID: "NTE",
          Min: 0,
          Max: "unbounded",
        },
      ],
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
          ID: "MSG",
          Min: 0,
          Max: "unbounded",
        },
      ],
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
          Max: 3,
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
          Max: 5,
        },
        {
          ID: "QTY",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "MEA",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "NTE",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "REFLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "REF",
            },
            {
              ID: "DTM",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "MSG",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "CRCLoop2",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "CRC",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "LMLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "LM",
            },
            {
              ID: "LQ",
              Max: "unbounded",
            },
            {
              ID: "QTY",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "MSG",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
      ],
    },
    {
      ID: "PO1Loop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "PO1",
        },
        {
          ID: "QTY",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "MEALoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "MEA",
            },
            {
              ID: "LIE",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "REFLoop2",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "REF",
            },
            {
              ID: "LIE",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "LMLoop2",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "LM",
            },
            {
              ID: "LQ",
              Max: "unbounded",
            },
            {
              ID: "MEA",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "MSG",
              Min: 0,
              Max: "unbounded",
            },
          ],
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
              Max: 3,
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
          ID: "CRCLoop3",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "CRC",
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
              ID: "LMLoop3",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "LM",
                },
                {
                  ID: "LQ",
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
                  Max: 3,
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
