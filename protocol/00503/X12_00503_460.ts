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
  DocumentType: 460,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "REN",
    },
    {
      ID: "DK",
    },
    {
      ID: "PI",
      Min: 0,
      Max: 8,
    },
    {
      ID: "PR",
      Min: 0,
      Max: 200,
    },
    {
      ID: "SS",
      Min: 0,
    },
    {
      ID: "SA",
      Min: 0,
    },
    {
      ID: "CD",
      Min: 0,
      Max: 150,
    },
    {
      ID: "RAB",
      Min: 0,
      Max: 48,
    },
    {
      ID: "PTLoop1",
      Min: 0,
      Max: 50,
      Loop: [
        {
          ID: "PT",
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
          Max: 2,
        },
      ],
    },
    {
      ID: "SBLoop1",
      Max: 50,
      Loop: [
        {
          ID: "SB",
        },
        {
          ID: "GY",
          Min: 0,
          Max: 150,
        },
        {
          ID: "SCLoop1",
          Max: 300,
          Loop: [
            {
              ID: "SC",
            },
            {
              ID: "GY",
              Min: 0,
              Max: 150,
            },
            {
              ID: "CD",
              Min: 0,
              Max: 150,
            },
            {
              ID: "RAB",
              Min: 0,
              Max: 48,
            },
            {
              ID: "LXLoop1",
              Max: 60,
              Loop: [
                {
                  ID: "LX",
                },
                {
                  ID: "RS",
                  Max: 2,
                },
                {
                  ID: "RD",
                  Min: 0,
                  Max: 25,
                },
                {
                  ID: "R9Loop1",
                  Min: 0,
                  Max: 2,
                  Loop: [
                    {
                      ID: "R9",
                    },
                    {
                      ID: "FK",
                      Min: 0,
                      Max: 13,
                    },
                    {
                      ID: "R2BLoop1",
                      Min: 0,
                      Max: 13,
                      Loop: [
                        {
                          ID: "R2B",
                        },
                        {
                          ID: "R2C",
                          Min: 0,
                          Max: 25,
                        },
                      ],
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
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
