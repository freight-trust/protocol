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
  DocumentType: 620,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "N1",
      Max: 2,
    },
    {
      ID: "REF",
      Min: 0,
    },
    {
      ID: "EXILoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "EXI",
        },
        {
          ID: "DTM",
          Max: 4,
        },
        {
          ID: "PER",
          Min: 0,
        },
        {
          ID: "NX2",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "PPA",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "MTX",
          Min: 0,
        },
        {
          ID: "MEA",
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
              ID: "MSG",
              Min: 0,
              Max: 2,
            },
            {
              ID: "PER",
              Min: 0,
              Max: 2,
            },
            {
              ID: "DTM",
              Min: 0,
            },
            {
              ID: "LIELoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "LIE",
                },
                {
                  ID: "PPA",
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
