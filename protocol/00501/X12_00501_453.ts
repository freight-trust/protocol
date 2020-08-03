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
  DocumentType: 453,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "SSC",
    },
    {
      ID: "DTP",
      Max: 2,
    },
    {
      ID: "N1",
      Min: 0,
      Max: 999999,
    },
    {
      ID: "R2",
      Min: 0,
      Max: 13,
    },
    {
      ID: "OD",
      Min: 0,
    },
    {
      ID: "PI",
      Min: 0,
      Max: 10,
    },
    {
      ID: "PR",
      Min: 0,
      Max: 99,
    },
    {
      ID: "CT",
      Min: 0,
      Max: 99,
    },
    {
      ID: "APR",
      Min: 0,
      Max: 99,
    },
    {
      ID: "SHR",
      Min: 0,
      Max: 99,
    },
    {
      ID: "SRLoop1",
      Min: 0,
      Max: 7,
      Loop: [
        {
          ID: "SR",
        },
        {
          ID: "LXLoop1",
          Min: 0,
          Max: 999999,
          Loop: [
            {
              ID: "LX",
            },
            {
              ID: "ISD",
              Min: 0,
              Max: 15,
            },
            {
              ID: "ISC",
              Min: 0,
              Max: 999999,
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
