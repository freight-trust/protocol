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
  DocumentType: 355,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "M10",
    },
    {
      ID: "K1",
      Min: 0,
      Max: 10,
    },
    {
      ID: "VEHLoop1",
      Min: 0,
      Loop: [
        {
          ID: "VEH",
        },
        {
          ID: "K1",
          Min: 0,
          Max: 10,
        },
        {
          ID: "M7Loop1",
          Min: 0,
          Loop: [
            {
              ID: "M7",
            },
            {
              ID: "K1",
              Min: 0,
              Max: 10,
            },
          ],
        },
        {
          ID: "CIILoop1",
          Min: 0,
          Loop: [
            {
              ID: "CII",
            },
            {
              ID: "K1",
              Min: 0,
              Max: 10,
            },
          ],
        },
      ],
    },
    {
      ID: "NM1Loop1",
      Min: 0,
      Max: 999,
      Loop: [
        {
          ID: "NM1",
        },
        {
          ID: "K1",
          Min: 0,
          Max: 10,
        },
        {
          ID: "DMGLoop1",
          Min: 0,
          Loop: [
            {
              ID: "DMG",
            },
            {
              ID: "K1",
              Min: 0,
              Max: 10,
            },
          ],
        },
        {
          ID: "REFLoop1",
          Min: 0,
          Loop: [
            {
              ID: "REF",
            },
            {
              ID: "K1",
              Min: 0,
              Max: 10,
            },
          ],
        },
        {
          ID: "N3Loop1",
          Min: 0,
          Loop: [
            {
              ID: "N3",
            },
            {
              ID: "K1",
              Min: 0,
              Max: 10,
            },
          ],
        },
        {
          ID: "N4Loop1",
          Min: 0,
          Loop: [
            {
              ID: "N4",
            },
            {
              ID: "K1",
              Min: 0,
              Max: 10,
            },
          ],
        },
      ],
    },
    {
      ID: "P4Loop1",
      Max: 20,
      Loop: [
        {
          ID: "P4",
        },
        {
          ID: "K1",
          Min: 0,
          Max: 10,
        },
        {
          ID: "LXLoop1",
          Min: 0,
          Max: 9999,
          Loop: [
            {
              ID: "LX",
            },
            {
              ID: "M13Loop1",
              Min: 0,
              Loop: [
                {
                  ID: "M13",
                },
                {
                  ID: "K1",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
            {
              ID: "M11Loop1",
              Min: 0,
              Loop: [
                {
                  ID: "M11",
                },
                {
                  ID: "K1",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
            {
              ID: "N9Loop1",
              Min: 0,
              Max: 999,
              Loop: [
                {
                  ID: "N9",
                },
                {
                  ID: "K1",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
            {
              ID: "N1Loop1",
              Min: 0,
              Max: 25,
              Loop: [
                {
                  ID: "N1",
                },
                {
                  ID: "K1",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "N3Loop2",
                  Min: 0,
                  Max: 2,
                  Loop: [
                    {
                      ID: "N3",
                    },
                    {
                      ID: "K1",
                      Min: 0,
                      Max: 10,
                    },
                  ],
                },
                {
                  ID: "N4Loop2",
                  Min: 0,
                  Loop: [
                    {
                      ID: "N4",
                    },
                    {
                      ID: "K1",
                      Min: 0,
                      Max: 10,
                    },
                  ],
                },
                {
                  ID: "PERLoop1",
                  Min: 0,
                  Loop: [
                    {
                      ID: "PER",
                    },
                    {
                      ID: "K1",
                      Min: 0,
                      Max: 10,
                    },
                  ],
                },
                {
                  ID: "X1Loop1",
                  Min: 0,
                  Loop: [
                    {
                      ID: "X1",
                    },
                    {
                      ID: "K1",
                      Min: 0,
                      Max: 10,
                    },
                  ],
                },
                {
                  ID: "DMGLoop2",
                  Min: 0,
                  Loop: [
                    {
                      ID: "DMG",
                    },
                    {
                      ID: "K1",
                      Min: 0,
                      Max: 10,
                    },
                  ],
                },
              ],
            },
            {
              ID: "M12Loop1",
              Min: 0,
              Max: 9999,
              Loop: [
                {
                  ID: "M12",
                },
                {
                  ID: "K1",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "R4Loop1",
                  Min: 0,
                  Max: 10,
                  Loop: [
                    {
                      ID: "R4",
                    },
                    {
                      ID: "K1",
                      Min: 0,
                      Max: 10,
                    },
                  ],
                },
                {
                  ID: "M21Loop1",
                  Min: 0,
                  Loop: [
                    {
                      ID: "M21",
                    },
                    {
                      ID: "K1",
                      Min: 0,
                      Max: 10,
                    },
                  ],
                },
              ],
            },
            {
              ID: "M14Loop1",
              Min: 0,
              Max: 9999,
              Loop: [
                {
                  ID: "M14",
                },
                {
                  ID: "K1",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
            {
              ID: "M15Loop1",
              Min: 0,
              Max: 9999,
              Loop: [
                {
                  ID: "M15",
                },
                {
                  ID: "K1",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
            {
              ID: "M20Loop1",
              Min: 0,
              Max: 9999,
              Loop: [
                {
                  ID: "M20",
                },
                {
                  ID: "K1",
                  Min: 0,
                  Max: 10,
                },
              ],
            },
            {
              ID: "VIDLoop1",
              Min: 0,
              Max: 999,
              Loop: [
                {
                  ID: "VID",
                },
                {
                  ID: "K1",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "M7Loop2",
                  Min: 0,
                  Loop: [
                    {
                      ID: "M7",
                    },
                    {
                      ID: "K1",
                      Min: 0,
                      Max: 10,
                    },
                  ],
                },
                {
                  ID: "MBLLoop1",
                  Min: 0,
                  Max: 9999,
                  Loop: [
                    {
                      ID: "MBL",
                    },
                    {
                      ID: "K1",
                      Min: 0,
                      Max: 10,
                    },
                    {
                      ID: "M13Loop2",
                      Min: 0,
                      Max: 999,
                      Loop: [
                        {
                          ID: "M13",
                        },
                        {
                          ID: "K1",
                          Min: 0,
                          Max: 10,
                        },
                      ],
                    },
                    {
                      ID: "X1Loop2",
                      Min: 0,
                      Loop: [
                        {
                          ID: "X1",
                        },
                        {
                          ID: "K1",
                          Min: 0,
                          Max: 10,
                        },
                      ],
                    },
                  ],
                },
                {
                  ID: "VCLoop1",
                  Min: 0,
                  Max: 36,
                  Loop: [
                    {
                      ID: "VC",
                    },
                    {
                      ID: "K1",
                      Min: 0,
                      Max: 10,
                    },
                  ],
                },
                {
                  ID: "N10Loop1",
                  Min: 0,
                  Max: 999,
                  Loop: [
                    {
                      ID: "N10",
                    },
                    {
                      ID: "K1",
                      Min: 0,
                      Max: 10,
                    },
                    {
                      ID: "H1Loop1",
                      Min: 0,
                      Max: 99,
                      Loop: [
                        {
                          ID: "H1",
                        },
                        {
                          ID: "K1",
                          Min: 0,
                          Max: 10,
                        },
                        {
                          ID: "H2Loop1",
                          Min: 0,
                          Max: 99,
                          Loop: [
                            {
                              ID: "H2",
                            },
                            {
                              ID: "K1",
                              Min: 0,
                              Max: 10,
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
      ],
    },
    {
      ID: "K3",
    },
    {
      ID: "SE",
      Min: 0,
    },
  ],
};
validate.errors = null;
module.exports = validate;
