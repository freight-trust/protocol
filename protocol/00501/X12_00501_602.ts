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
  DocumentType: 602,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "DK",
    },
    {
      ID: "PRI",
      Min: 0,
      Max: 12,
    },
    {
      ID: "SS",
      Min: 0,
    },
    {
      ID: "SA",
      Min: 0,
      Max: 5,
    },
    {
      ID: "NTE",
      Min: 0,
      Max: 5,
    },
    {
      ID: "CD",
      Min: 0,
      Max: 20,
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Max: 200,
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
          ID: "N9",
          Min: 0,
          Max: 12,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 200,
        },
      ],
    },
    {
      ID: "PRLoop1",
      Min: 0,
      Max: 100,
      Loop: [
        {
          ID: "PR",
        },
        {
          ID: "NTE",
          Min: 0,
          Max: 10,
        },
        {
          ID: "CD",
          Min: 0,
          Max: 10,
        },
      ],
    },
    {
      ID: "SBLoop1",
      Min: 0,
      Max: 99,
      Loop: [
        {
          ID: "SB",
        },
        {
          ID: "GY",
          Min: 0,
          Max: 999,
        },
        {
          ID: "SCLoop1",
          Min: 0,
          Max: 400,
          Loop: [
            {
              ID: "SC",
            },
            {
              ID: "GY",
              Min: 0,
              Max: 9999,
            },
            {
              ID: "CD",
              Min: 0,
              Max: 100,
            },
            {
              ID: "RALoop1",
              Min: 0,
              Max: 10,
              Loop: [
                {
                  ID: "RA",
                },
                {
                  ID: "RB",
                  Min: 0,
                  Max: 8,
                },
                {
                  ID: "FK",
                  Min: 0,
                  Max: 15,
                },
              ],
            },
            {
              ID: "RHLoop1",
              Min: 0,
              Max: 20,
              Loop: [
                {
                  ID: "RH",
                },
                {
                  ID: "N9",
                  Min: 0,
                  Max: 30,
                },
              ],
            },
          ],
        },
        {
          ID: "SRTLoop1",
          Min: 0,
          Max: 999,
          Loop: [
            {
              ID: "SRT",
            },
            {
              ID: "MIN",
              Min: 0,
              Max: 100,
            },
            {
              ID: "SRD",
              Min: 0,
              Max: 200,
            },
            {
              ID: "SRM",
              Min: 0,
              Max: 999,
            },
            {
              ID: "N9",
              Min: 0,
              Max: 10,
            },
            {
              ID: "LXLoop1",
              Min: 0,
              Max: 200,
              Loop: [
                {
                  ID: "LX",
                },
                {
                  ID: "SRD",
                  Min: 0,
                },
                {
                  ID: "SRMLoop1",
                  Min: 0,
                  Max: 100,
                  Loop: [
                    {
                      ID: "SRM",
                    },
                    {
                      ID: "SRA",
                      Min: 0,
                      Max: 5,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "MS",
      Min: 0,
      Max: 200,
    },
    {
      ID: "DM",
      Min: 0,
      Max: 5,
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
