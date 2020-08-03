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
  DocumentType: 820,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BPR",
    },
    {
      ID: "NTE",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "TRN",
      Min: 0,
    },
    {
      ID: "CUR",
      Min: 0,
    },
    {
      ID: "REF",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "DTM",
      Min: 0,
      Max: "unbounded",
    },
    {
      ID: "N1Loop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "N1",
        },
        {
          ID: "N2",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "N3",
          Min: 0,
          Max: "unbounded",
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
          ID: "PER",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "RDM",
          Min: 0,
        },
        {
          ID: "DTM",
          Min: 0,
        },
      ],
    },
    {
      ID: "ENTLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "ENT",
        },
        {
          ID: "FA1Loop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "FA1",
            },
            {
              ID: "FA2",
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "NM1Loop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "NM1",
            },
            {
              ID: "N2",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "N3",
              Min: 0,
              Max: "unbounded",
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
              ID: "PER",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "ADXLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "ADX",
            },
            {
              ID: "NTE",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PER",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DTM",
              Min: 0,
            },
            {
              ID: "REFLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "REF",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "IT1Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "IT1",
                },
                {
                  ID: "RPA",
                  Min: 0,
                },
                {
                  ID: "QTY",
                  Min: 0,
                },
                {
                  ID: "REFLoop2",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "REF",
                    },
                    {
                      ID: "DTM",
                      Min: 0,
                    },
                  ],
                },
                {
                  ID: "SACLoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "SAC",
                    },
                    {
                      ID: "TXI",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "DTM",
                      Min: 0,
                      Max: 10,
                    },
                  ],
                },
                {
                  ID: "SLNLoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "SLN",
                    },
                    {
                      ID: "REFLoop3",
                      Min: 0,
                      Max: "unbounded",
                      Loop: [
                        {
                          ID: "REF",
                        },
                        {
                          ID: "DTM",
                          Min: 0,
                          Max: "unbounded",
                        },
                      ],
                    },
                    {
                      ID: "SACLoop2",
                      Min: 0,
                      Max: "unbounded",
                      Loop: [
                        {
                          ID: "SAC",
                        },
                        {
                          ID: "TXI",
                          Min: 0,
                          Max: "unbounded",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              ID: "FA1Loop2",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "FA1",
                },
                {
                  ID: "FA2",
                  Max: "unbounded",
                },
              ],
            },
          ],
        },
        {
          ID: "RMRLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "RMR",
            },
            {
              ID: "NTE",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DTM",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "VEH",
              Min: 0,
            },
            {
              ID: "IT1Loop2",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "IT1",
                },
                {
                  ID: "RPA",
                  Min: 0,
                },
                {
                  ID: "QTY",
                  Min: 0,
                },
                {
                  ID: "REFLoop4",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "REF",
                    },
                    {
                      ID: "DTM",
                      Min: 0,
                    },
                  ],
                },
                {
                  ID: "SACLoop3",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "SAC",
                    },
                    {
                      ID: "TXI",
                      Min: 0,
                      Max: "unbounded",
                    },
                  ],
                },
                {
                  ID: "SLNLoop2",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "SLN",
                    },
                    {
                      ID: "REFLoop5",
                      Min: 0,
                      Max: "unbounded",
                      Loop: [
                        {
                          ID: "REF",
                        },
                        {
                          ID: "DTM",
                          Min: 0,
                          Max: "unbounded",
                        },
                      ],
                    },
                    {
                      ID: "SACLoop4",
                      Min: 0,
                      Max: "unbounded",
                      Loop: [
                        {
                          ID: "SAC",
                        },
                        {
                          ID: "TXI",
                          Min: 0,
                          Max: "unbounded",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              ID: "ADXLoop2",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "ADX",
                },
                {
                  ID: "NTE",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "PER",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "REFLoop6",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "REF",
                    },
                    {
                      ID: "DTM",
                      Min: 0,
                      Max: "unbounded",
                    },
                  ],
                },
                {
                  ID: "IT1Loop3",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "IT1",
                    },
                    {
                      ID: "RPA",
                      Min: 0,
                    },
                    {
                      ID: "QTY",
                      Min: 0,
                    },
                    {
                      ID: "REFLoop7",
                      Min: 0,
                      Max: "unbounded",
                      Loop: [
                        {
                          ID: "REF",
                        },
                        {
                          ID: "DTM",
                          Min: 0,
                        },
                      ],
                    },
                    {
                      ID: "SACLoop5",
                      Min: 0,
                      Max: "unbounded",
                      Loop: [
                        {
                          ID: "SAC",
                        },
                        {
                          ID: "TXI",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "DTM",
                          Min: 0,
                          Max: 10,
                        },
                      ],
                    },
                    {
                      ID: "SLNLoop3",
                      Min: 0,
                      Max: "unbounded",
                      Loop: [
                        {
                          ID: "SLN",
                        },
                        {
                          ID: "REFLoop8",
                          Min: 0,
                          Max: "unbounded",
                          Loop: [
                            {
                              ID: "REF",
                            },
                            {
                              ID: "DTM",
                              Min: 0,
                              Max: "unbounded",
                            },
                          ],
                        },
                        {
                          ID: "SACLoop6",
                          Min: 0,
                          Max: "unbounded",
                          Loop: [
                            {
                              ID: "SAC",
                            },
                            {
                              ID: "TXI",
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
              ID: "FA1Loop3",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "FA1",
                },
                {
                  ID: "FA2",
                  Max: "unbounded",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "TXPLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "TXP",
        },
        {
          ID: "TXI",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "DEDLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "DED",
        },
      ],
    },
    {
      ID: "LXLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "LX",
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "TRN",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "NM1Loop2",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "NM1",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "G53",
              Min: 0,
            },
            {
              ID: "AINLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "AIN",
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
              ],
            },
            {
              ID: "PENLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "PEN",
                },
                {
                  ID: "AMT",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "INVLoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "INV",
                    },
                    {
                      ID: "DTP",
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
      ID: "N9Loop1",
      Min: 0,
      Loop: [
        {
          ID: "N9",
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "AMTLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "AMT",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
          ],
        },
        {
          ID: "N1Loop2",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "N1",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
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
                  ID: "ATN",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "AIN",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "PYD",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "RYLLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "RYL",
        },
        {
          ID: "NM1Loop3",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "NM1",
            },
            {
              ID: "LOCLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "LOC",
                },
                {
                  ID: "PIDLoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "PID",
                    },
                    {
                      ID: "DTM",
                      Min: 0,
                    },
                    {
                      ID: "PCTLoop1",
                      Min: 0,
                      Max: "unbounded",
                      Loop: [
                        {
                          ID: "PCT",
                        },
                        {
                          ID: "QTY",
                          Min: 0,
                        },
                        {
                          ID: "AMTLoop2",
                          Min: 0,
                          Max: "unbounded",
                          Loop: [
                            {
                              ID: "AMT",
                            },
                            {
                              ID: "ADX",
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
              ID: "ASMLoop1",
              Min: 0,
              Loop: [
                {
                  ID: "ASM",
                },
                {
                  ID: "ADX",
                  Min: 0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "INSLoop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "INS",
        },
        {
          ID: "QTY",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "NM1",
          Min: 0,
        },
        {
          ID: "REF",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DMG",
          Min: 0,
        },
        {
          ID: "DTP",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "ADXLoop3",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "ADX",
            },
            {
              ID: "DTM",
              Min: 0,
            },
          ],
        },
        {
          ID: "HDLoop1",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "HD",
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
              ID: "RMRLoop2",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "RMR",
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "DTM",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "ADXLoop4",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "ADX",
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
          ],
        },
        {
          ID: "N1Loop3",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "N1",
            },
            {
              ID: "REF",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DTM",
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
