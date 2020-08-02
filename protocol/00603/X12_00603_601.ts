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
  DocumentType: 601,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BA1Loop1",
      Max: 999,
      Loop: [
        {
          ID: "BA1",
        },
        {
          ID: "YNQ",
          Min: 0,
          Max: 10,
        },
        {
          ID: "V5",
          Min: 0,
        },
        {
          ID: "DTM",
          Min: 0,
        },
        {
          ID: "P5",
          Min: 0,
          Max: 2,
        },
        {
          ID: "REF",
          Min: 0,
          Max: 9,
        },
        {
          ID: "M12",
          Min: 0,
        },
        {
          ID: "VID",
          Min: 0,
          Max: 999,
        },
        {
          ID: "N1Loop1",
          Max: 10,
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
          ID: "L13Loop1",
          Min: 0,
          Max: 999,
          Loop: [
            {
              ID: "L13",
            },
            {
              ID: "MAN",
              Min: 0,
              Max: 999,
            },
            {
              ID: "X1",
              Min: 0,
            },
            {
              ID: "VEH",
              Min: 0,
              Max: 9999,
            },
            {
              ID: "N1Loop2",
              Min: 0,
              Max: 10,
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
