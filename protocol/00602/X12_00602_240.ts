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
  DocumentType: 240,
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
      ID: "LXLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "N1Loop2",
          Min: 0,
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
              ID: "NM1",
              Min: 0,
            },
            {
              ID: "NTE",
              Min: 0,
            },
          ],
        },
        {
          ID: "EFILoop1",
          Min: 0,
          Loop: [
            {
              ID: "EFI",
            },
            {
              ID: "BIN",
            },
          ],
        },
        {
          ID: "L11Loop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "L11",
            },
            {
              ID: "MS2",
              Min: 0,
              Max: "unbounded",
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
                  ID: "MANLoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "MAN",
                    },
                    {
                      ID: "L11",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "AT7",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "CD3",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "NM1",
                      Min: 0,
                    },
                    {
                      ID: "Q7",
                      Min: 0,
                      Max: "unbounded",
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
            {
              ID: "EFILoop2",
              Min: 0,
              Loop: [
                {
                  ID: "EFI",
                },
                {
                  ID: "BIN",
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
