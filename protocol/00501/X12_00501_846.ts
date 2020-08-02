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
  DocumentType: 846,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BIA",
    },
    {
      ID: "CUR",
      Min: 0,
    },
    {
      ID: "DTM",
      Min: 0,
      Max: 10,
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
      ID: "MEA",
      Min: 0,
      Max: 20,
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Max: 5,
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
      ID: "LINLoop1",
      Max: 10000,
      Loop: [
        {
          ID: "LIN",
        },
        {
          ID: "PID",
          Min: 0,
          Max: 200,
        },
        {
          ID: "MEA",
          Min: 0,
          Max: 40,
        },
        {
          ID: "PKG",
          Min: 0,
          Max: 25,
        },
        {
          ID: "DTM",
          Min: 0,
          Max: 10,
        },
        {
          ID: "CTP",
          Min: 0,
          Max: 25,
        },
        {
          ID: "CUR",
          Min: 0,
        },
        {
          ID: "SAC",
          Min: 0,
          Max: 25,
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
          ID: "SDQ",
          Min: 0,
          Max: 500,
        },
        {
          ID: "MAN",
          Min: 0,
        },
        {
          ID: "UIT",
          Min: 0,
          Max: 5,
        },
        {
          ID: "CS",
          Min: 0,
        },
        {
          ID: "DD",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "G53",
          Min: 0,
        },
        {
          ID: "PCT",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "LDT",
          Min: 0,
          Max: 12,
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
          ID: "SLNLoop1",
          Min: 0,
          Max: 1000,
          Loop: [
            {
              ID: "SLN",
            },
            {
              ID: "PID",
              Min: 0,
              Max: 200,
            },
            {
              ID: "MEA",
              Min: 0,
              Max: 40,
            },
            {
              ID: "PKG",
              Min: 0,
              Max: 25,
            },
            {
              ID: "MANLoop1",
              Min: 0,
              Max: 100,
              Loop: [
                {
                  ID: "MAN",
                },
                {
                  ID: "MEA",
                  Min: 0,
                  Max: 40,
                },
              ],
            },
          ],
        },
        {
          ID: "QTYLoop1",
          Min: 0,
          Max: 99,
          Loop: [
            {
              ID: "QTY",
            },
            {
              ID: "UIT",
              Min: 0,
              Max: 12,
            },
            {
              ID: "MEA",
              Min: 0,
              Max: 25,
            },
            {
              ID: "LDT",
              Min: 0,
              Max: 12,
            },
            {
              ID: "DTM",
              Min: 0,
              Max: 10,
            },
            {
              ID: "SCHLoop1",
              Min: 0,
              Max: 25,
              Loop: [
                {
                  ID: "SCH",
                },
                {
                  ID: "MEA",
                  Min: 0,
                  Max: 25,
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
                  ID: "LQ",
                  Max: 100,
                },
              ],
            },
            {
              ID: "LSLoop1",
              Min: 0,
              Loop: [
                {
                  ID: "LS",
                  Min: 1,
                  Max: 1,
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
                      ID: "N1",
                      Min: 0,
                    },
                    {
                      ID: "LMLoop4",
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
                  ],
                },
                {
                  ID: "LE",
                  Min: 1,
                  Max: 1,
                },
              ],
            },
          ],
        },
        {
          ID: "N1Loop2",
          Min: 0,
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
              ID: "REF",
              Min: 0,
              Max: 12,
            },
            {
              ID: "PER",
              Min: 0,
              Max: 3,
            },
          ],
        },
      ],
    },
    {
      ID: "CTT",
      Min: 0,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
