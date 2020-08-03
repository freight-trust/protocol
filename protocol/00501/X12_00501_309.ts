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
  DocumentType: 309,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "M10",
    },
    {
      ID: "VEH",
      Min: 0,
      Max: 10,
    },
    {
      ID: "CII",
      Min: 0,
      Max: 3,
    },
    {
      ID: "NM1Loop1",
      Min: 0,
      Max: 999,
      Loop: [
        {
          ID: "NM1",
        },
        {
          ID: "DMG",
          Min: 0,
        },
        {
          ID: "DMA",
          Min: 0,
        },
        {
          ID: "REF",
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
      ],
    },
    {
      ID: "P4Loop1",
      Max: 20,
      Loop: [
        {
          ID: "P4",
        },
        {
          ID: "LXLoop1",
          Max: 9999,
          Loop: [
            {
              ID: "LX",
            },
            {
              ID: "M13",
              Min: 0,
            },
            {
              ID: "M11",
              Min: 0,
            },
            {
              ID: "N9",
              Min: 0,
              Max: 999,
            },
            {
              ID: "N1Loop1",
              Min: 0,
              Max: 20,
              Loop: [
                {
                  ID: "N1",
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
                  ID: "DTM",
                  Min: 0,
                },
                {
                  ID: "PER",
                  Min: 0,
                },
                {
                  ID: "X1",
                  Min: 0,
                },
              ],
            },
            {
              ID: "M12Loop1",
              Min: 0,
              Loop: [
                {
                  ID: "M12",
                },
                {
                  ID: "R4",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
            {
              ID: "VIDLoop1",
              Min: 0,
              Max: 999,
              Loop: [
                {
                  ID: "VID",
                },
                {
                  ID: "M7",
                  Min: 0,
                  Max: 5,
                },
                {
                  ID: "N10Loop1",
                  Min: 0,
                  Max: 999,
                  Loop: [
                    {
                      ID: "N10",
                    },
                    {
                      ID: "VC",
                      Min: 0,
                      Max: 999,
                    },
                    {
                      ID: "MAN",
                      Min: 0,
                      Max: 999,
                    },
                    {
                      ID: "H1Loop1",
                      Min: 0,
                      Max: 99,
                      Loop: [
                        {
                          ID: "H1",
                        },
                        {
                          ID: "H2",
                          Min: 0,
                          Max: 99,
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
