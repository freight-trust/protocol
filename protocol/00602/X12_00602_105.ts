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
  DocumentType: 105,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "PWK",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "CUR",
      Min: 0,
    },
    {
      ID: "LUI",
      Min: 0,
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
          ID: "PDL",
          Min: 0,
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTM",
          Min: 0,
        },
        {
          ID: "CUR",
          Min: 0,
        },
      ],
    },
    {
      ID: "NM1Loop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "NM1",
        },
        {
          ID: "N2",
          Min: 0,
          Max: "unbounded",
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
          ID: "DTM",
          Min: 0,
          Max: "unbounded",
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
          ],
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
              ID: "NX1",
              Min: 0,
              Max: 2,
            },
            {
              ID: "N2",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "N3",
              Min: 0,
              Max: 2,
            },
            {
              ID: "N4",
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
            {
              ID: "QTY",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PCT",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "LUI",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "TPB",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PWK",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "AMTLoop2",
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
                {
                  ID: "CUR",
                  Min: 0,
                },
              ],
            },
            {
              ID: "NX2Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "NX2",
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
                  ID: "CUR",
                  Min: 0,
                },
              ],
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
                  ID: "MTX",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "NX2",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
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
                  ID: "LQLoop1",
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "LQ",
                    },
                    {
                      ID: "LIN",
                      Min: 0,
                      Max: "unbounded",
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
                      ID: "NX2",
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
                      ID: "PDL",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "PWK",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "CUR",
                      Min: 0,
                    },
                    {
                      ID: "CDS",
                      Min: 0,
                    },
                    {
                      ID: "MTX",
                      Min: 0,
                      Max: "unbounded",
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
                          ID: "AMT",
                          Min: 0,
                        },
                        {
                          ID: "DTM",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "CUR",
                          Min: 0,
                        },
                      ],
                    },
                  ],
                },
              ],
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
