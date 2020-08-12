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
  DocumentType: 424,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BSW",
    },
    {
      ID: "CUR",
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Max: 5,
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
        {
          ID: "CILoop1",
          Min: 0,
          Max: 20,
          Loop: [
            {
              ID: "CI",
            },
            {
              ID: "DTM",
              Min: 0,
            },
            {
              ID: "AMT",
              Min: 0,
            },
            {
              ID: "MEA",
              Min: 0,
              Max: 2,
            },
            {
              ID: "SWCLoop1",
              Min: 0,
              Max: 999,
              Loop: [
                {
                  ID: "SWC",
                },
                {
                  ID: "EDLoop1",
                  Min: 0,
                  Max: 9999,
                  Loop: [
                    {
                      ID: "ED",
                    },
                    {
                      ID: "DTM",
                      Min: 0,
                      Max: 5,
                    },
                    {
                      ID: "SWD",
                      Min: 0,
                    },
                    {
                      ID: "SWR",
                      Min: 0,
                      Max: 2,
                    },
                    {
                      ID: "NM1",
                      Min: 0,
                    },
                    {
                      ID: "F9",
                      Min: 0,
                    },
                    {
                      ID: "D9",
                      Min: 0,
                    },
                    {
                      ID: "NTE",
                      Min: 0,
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
