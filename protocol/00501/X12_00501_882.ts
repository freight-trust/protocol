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
  DocumentType: 882,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "G47",
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
      ID: "N9",
      Min: 0,
      Max: 10,
    },
    {
      ID: "G61",
      Min: 0,
      Max: 8,
    },
    {
      ID: "G23",
      Min: 0,
      Max: 20,
    },
    {
      ID: "G48Loop1",
      Max: 9999,
      Loop: [
        {
          ID: "G48",
        },
        {
          ID: "G72Loop1",
          Min: 0,
          Max: 99,
          Loop: [
            {
              ID: "G72",
            },
            {
              ID: "G73",
              Min: 0,
              Max: 10,
            },
          ],
        },
        {
          ID: "G23",
          Min: 0,
          Max: 20,
        },
        {
          ID: "G25",
          Min: 0,
        },
        {
          ID: "G31",
          Min: 0,
        },
        {
          ID: "G33",
        },
      ],
    },
    {
      ID: "G49",
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
