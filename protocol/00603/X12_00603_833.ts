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
  DocumentType: 833,
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
      Max: 100,
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
          ID: "REF",
          Min: 0,
          Max: 12,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 3,
        },
        {
          ID: "N4Loop1",
          Min: 0,
          Max: 5,
          Loop: [
            {
              ID: "N4",
            },
            {
              ID: "N3",
              Min: 0,
              Max: 2,
            },
          ],
        },
      ],
    },
    {
      ID: "CROLoop1",
      Max: 200,
      Loop: [
        {
          ID: "CRO",
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PER",
          Min: 0,
          Max: 3,
        },
        {
          ID: "K2",
          Min: 0,
          Max: 10,
        },
        {
          ID: "LRQ",
          Min: 0,
        },
        {
          ID: "DTP",
          Min: 0,
        },
        {
          ID: "N1Loop2",
          Min: 0,
          Max: 20,
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
              Max: 12,
            },
            {
              ID: "PER",
              Min: 0,
              Max: 3,
            },
            {
              ID: "PWK",
              Min: 0,
            },
          ],
        },
        {
          ID: "NX1Loop1",
          Min: 0,
          Max: 20,
          Loop: [
            {
              ID: "NX1",
            },
            {
              ID: "NX2",
              Min: 0,
              Max: 10,
            },
            {
              ID: "DTP",
              Min: 0,
            },
            {
              ID: "QTY",
              Min: 0,
            },
          ],
        },
        {
          ID: "LXLoop1",
          Max: 2,
          Loop: [
            {
              ID: "LX",
            },
            {
              ID: "REF",
              Min: 0,
              Max: 12,
            },
            {
              ID: "PER",
              Min: 0,
              Max: 3,
            },
            {
              ID: "AIN",
              Min: 0,
              Max: 10,
            },
            {
              ID: "PPY",
              Min: 0,
              Max: 10,
            },
            {
              ID: "CAI",
              Min: 0,
              Max: 20,
            },
            {
              ID: "CIV",
              Min: 0,
              Max: 20,
            },
            {
              ID: "YNQ",
              Min: 0,
              Max: 12,
            },
            {
              ID: "DTP",
              Min: 0,
            },
            {
              ID: "QTY",
              Min: 0,
              Max: 20,
            },
            {
              ID: "AMTLoop1",
              Min: 0,
              Max: 10,
              Loop: [
                {
                  ID: "AMT",
                },
                {
                  ID: "MSG",
                  Min: 0,
                },
              ],
            },
            {
              ID: "REALoop1",
              Min: 0,
              Max: 20,
              Loop: [
                {
                  ID: "REA",
                },
                {
                  ID: "FPT",
                  Min: 0,
                },
                {
                  ID: "AMT",
                  Min: 0,
                  Max: 6,
                },
                {
                  ID: "NX1",
                  Min: 0,
                },
                {
                  ID: "NX2",
                  Min: 0,
                  Max: 30,
                },
              ],
            },
            {
              ID: "IN1Loop1",
              Max: 30,
              Loop: [
                {
                  ID: "IN1",
                },
                {
                  ID: "IN2",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "DMG",
                  Min: 0,
                },
                {
                  ID: "N10",
                  Min: 0,
                },
                {
                  ID: "ACT",
                  Min: 0,
                },
              ],
            },
            {
              ID: "NX1Loop2",
              Max: 10,
              Loop: [
                {
                  ID: "NX1",
                },
                {
                  ID: "NX2",
                  Max: 30,
                },
                {
                  ID: "ARS",
                  Min: 0,
                },
                {
                  ID: "DTP",
                  Min: 0,
                },
                {
                  ID: "N10",
                  Min: 0,
                },
              ],
            },
            {
              ID: "N1Loop3",
              Min: 0,
              Max: 500,
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
                  Max: 12,
                },
                {
                  ID: "PER",
                  Min: 0,
                  Max: 3,
                },
                {
                  ID: "YNQ",
                  Min: 0,
                  Max: 3,
                },
                {
                  ID: "EMPLoop1",
                  Min: 0,
                  Max: 20,
                  Loop: [
                    {
                      ID: "EMP",
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                      Max: 2,
                    },
                    {
                      ID: "QTY",
                      Min: 0,
                      Max: 2,
                    },
                    {
                      ID: "EMSLoop1",
                      Min: 0,
                      Max: 10,
                      Loop: [
                        {
                          ID: "EMS",
                        },
                        {
                          ID: "DTP",
                          Min: 0,
                        },
                        {
                          ID: "QTY",
                          Min: 0,
                        },
                        {
                          ID: "AIN",
                          Min: 0,
                          Max: 10,
                        },
                      ],
                    },
                  ],
                },
                {
                  ID: "FAALoop1",
                  Min: 0,
                  Max: 100,
                  Loop: [
                    {
                      ID: "FAA",
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                    },
                    {
                      ID: "AIN",
                      Min: 0,
                      Max: 5,
                    },
                    {
                      ID: "IN1Loop2",
                      Min: 0,
                      Max: 10,
                      Loop: [
                        {
                          ID: "IN1",
                        },
                        {
                          ID: "IN2",
                          Min: 0,
                          Max: 10,
                        },
                        {
                          ID: "FPT",
                          Min: 0,
                        },
                      ],
                    },
                  ],
                },
                {
                  ID: "CDALoop1",
                  Min: 0,
                  Max: 100,
                  Loop: [
                    {
                      ID: "CDA",
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                    },
                    {
                      ID: "PPY",
                      Min: 0,
                      Max: 5,
                    },
                    {
                      ID: "IN1Loop3",
                      Min: 0,
                      Max: 10,
                      Loop: [
                        {
                          ID: "IN1",
                        },
                        {
                          ID: "IN2",
                          Min: 0,
                          Max: 10,
                        },
                        {
                          ID: "FPT",
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
