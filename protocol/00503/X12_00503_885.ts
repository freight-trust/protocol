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
  DocumentType: 885,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "N1",
      Max: 3,
    },
    {
      ID: "DTM",
    },
    {
      ID: "PER",
      Min: 0,
      Max: 3,
    },
    {
      ID: "ENTLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "ENT",
        },
        {
          ID: "G53",
        },
        {
          ID: "DTM",
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
          ID: "PER",
          Min: 0,
          Max: 3,
        },
        {
          ID: "N1",
          Min: 0,
          Max: 100,
        },
        {
          ID: "N9",
          Min: 0,
          Max: 10,
        },
        {
          ID: "G13",
          Min: 0,
        },
        {
          ID: "G18",
          Min: 0,
          Max: 30,
        },
        {
          ID: "G29",
          Min: 0,
          Max: 10,
        },
        {
          ID: "G30",
          Min: 0,
          Max: 10,
        },
        {
          ID: "SPR",
          Min: 0,
        },
        {
          ID: "RDI",
          Min: 0,
          Max: "unbounded",
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
              Max: 10,
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
