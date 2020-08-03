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
  DocumentType: 170,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "N1",
    },
    {
      ID: "PER",
      Min: 0,
    },
    {
      ID: "THELoop1",
      Max: 9999,
      Loop: [
        {
          ID: "THE",
        },
        {
          ID: "LXLoop1",
          Max: 10,
          Loop: [
            {
              ID: "LX",
            },
            {
              ID: "REF",
              Max: 10,
            },
            {
              ID: "DTMLoop1",
              Max: 7,
              Loop: [
                {
                  ID: "DTM",
                },
                {
                  ID: "BOX",
                  Max: 250,
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
