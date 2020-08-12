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
  DocumentType: 133,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "ERP",
    },
    {
      ID: "N1Loop1",
      Max: "unbounded",
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
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "COM",
          Min: 0,
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "HLLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "HL",
        },
        {
          ID: "SCT",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "OPX",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DEG",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "ISI",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "LQ",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "EDF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTP",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "N1Loop2",
          Max: "unbounded",
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
              ID: "PPA",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "COM",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "YNQLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "YNQ",
            },
            {
              ID: "QTY",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PCT",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "FOSLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "FOS",
            },
            {
              ID: "DEG",
              Min: 0,
            },
            {
              ID: "AMT",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "SPLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "SP",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "NM1",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "SLALoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "SLA",
            },
            {
              ID: "FOS",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "N1Loop3",
              Min: 0,
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
          ],
        },
        {
          ID: "ENMLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "ENM",
            },
            {
              ID: "FOS",
              Min: 0,
            },
            {
              ID: "QTY",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "NTE",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "ATVLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "ATV",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
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
