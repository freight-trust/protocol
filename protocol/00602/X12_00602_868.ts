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
  DocumentType: 868,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "E01",
    },
    {
      ID: "DMI",
      Min: 0,
      Max: 100,
    },
    {
      ID: "E03",
      Min: 0,
      Max: 100,
    },
    {
      ID: "MSG",
      Min: 0,
      Max: 1000,
    },
    {
      ID: "E10Loop1",
      Min: 0,
      Max: 1000,
      Loop: [
        {
          ID: "E10",
        },
        {
          ID: "E13",
          Min: 0,
          Max: 1000,
        },
      ],
    },
    {
      ID: "E20Loop1",
      Min: 0,
      Max: 1000,
      Loop: [
        {
          ID: "E20",
        },
        {
          ID: "E22",
          Min: 0,
          Max: 100,
        },
        {
          ID: "E24",
          Min: 0,
          Max: 100,
        },
      ],
    },
    {
      ID: "E41Loop1",
      Min: 0,
      Max: 2000,
      Loop: [
        {
          ID: "E41",
        },
        {
          ID: "E22",
          Min: 0,
          Max: 100,
        },
        {
          ID: "E24",
          Min: 0,
          Max: 100,
        },
      ],
    },
    {
      ID: "E30Loop1",
      Min: 0,
      Max: 2000,
      Loop: [
        {
          ID: "E30",
        },
        {
          ID: "DAI",
          Min: 0,
          Max: 10,
        },
        {
          ID: "QTY",
          Min: 0,
        },
        {
          ID: "E34Loop1",
          Min: 0,
          Max: 100000,
          Loop: [
            {
              ID: "E34",
            },
            {
              ID: "DDI",
              Min: 0,
              Max: 20,
            },
            {
              ID: "DAI",
              Min: 0,
              Max: 5,
            },
          ],
        },
      ],
    },
    {
      ID: "E40Loop1",
      Min: 0,
      Max: 10000,
      Loop: [
        {
          ID: "E40",
        },
        {
          ID: "DMI",
          Min: 0,
          Max: 100,
        },
        {
          ID: "DDI",
          Min: 0,
          Max: 1000,
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
