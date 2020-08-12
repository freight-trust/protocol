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
  DocumentType: 431,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "SMB",
    },
    {
      ID: "N4",
      Max: 10,
    },
    {
      ID: "CD",
      Min: 0,
      Max: 10,
    },
    {
      ID: "SMS",
    },
    {
      ID: "SMA",
      Min: 0,
      Max: 10,
    },
    {
      ID: "N1",
      Min: 0,
    },
    {
      ID: "SMR",
      Min: 0,
      Max: 10,
    },
    {
      ID: "SMO",
      Min: 0,
      Max: 10,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
