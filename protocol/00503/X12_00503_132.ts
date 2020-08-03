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
  DocumentType: 132,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
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
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "YNQ",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DMG",
          Min: 0,
        },
        {
          ID: "III",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "LUI",
          Min: 0,
          Max: "unbounded",
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
        {
          ID: "NM1Loop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "NM1",
            },
            {
              ID: "N2",
              Min: 0,
              Max: 2,
            },
            {
              ID: "N3Loop1",
              Min: 0,
              Max: 5,
              Loop: [
                {
                  ID: "N3",
                },
                {
                  ID: "N4",
                  Min: 0,
                },
                {
                  ID: "COM",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
          ],
        },
        {
          ID: "CQLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "CQ",
            },
            {
              ID: "FOS",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DTP",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "REF",
              Min: 0,
              Max: 10,
            },
            {
              ID: "ISI",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "YNQ",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DEGLoop1",
              Min: 0,
              Max: 5,
              Loop: [
                {
                  ID: "DEG",
                },
                {
                  ID: "FOS",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "QTY",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "CRSLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "CRS",
                },
                {
                  ID: "CSU",
                  Min: 0,
                },
              ],
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
                  ID: "N3",
                  Min: 0,
                  Max: 2,
                },
                {
                  ID: "N4",
                  Min: 0,
                },
                {
                  ID: "COM",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
          ],
        },
        {
          ID: "EMSLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "EMS",
            },
            {
              ID: "ISI",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "ESI",
              Min: 0,
            },
            {
              ID: "LQ",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DTP",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "QTY",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "YNQ",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "ELV",
              Min: 0,
              Max: 15,
            },
            {
              ID: "AIN",
              Min: 0,
              Max: 25,
            },
            {
              ID: "CN1",
              Min: 0,
            },
            {
              ID: "CON",
              Min: 0,
            },
            {
              ID: "N9Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "N9",
                },
              ],
            },
            {
              ID: "PCTLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "PCT",
                },
              ],
            },
            {
              ID: "N1Loop3",
              Min: 0,
              Loop: [
                {
                  ID: "N1",
                },
                {
                  ID: "N4",
                  Min: 0,
                },
              ],
            },
            {
              ID: "SESLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "SES",
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "WLDLoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "WLD",
                    },
                    {
                      ID: "N1",
                      Min: 0,
                    },
                    {
                      ID: "QTY",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "REF",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "PCT",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "YNQ",
                      Min: 0,
                      Max: "unbounded",
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
