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
  DocumentType: 101,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "DTMLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "DTM",
        },
        {
          ID: "N1",
          Max: "unbounded",
        },
        {
          ID: "N9Loop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "N9",
            },
            {
              ID: "LXLoop1",
              Max: "unbounded",
              Loop: [
                {
                  ID: "LX",
                },
                {
                  ID: "IN2",
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
                {
                  ID: "SPA",
                  Min: 0,
                },
                {
                  ID: "COM",
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
