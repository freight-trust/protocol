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
  DocumentType: 267,
  TransactionSet: [
    {
      ID: "ST",
      Min: 0,
    },
    {
      ID: "BGN",
    },
    {
      ID: "DTP",
      Min: 0,
      Max: "unbounded",
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
          ID: "N3",
          Min: 0,
          Max: 3,
        },
        {
          ID: "N4",
          Min: 0,
        },
        {
          ID: "REF",
          Min: 0,
          Max: 9,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 3,
        },
      ],
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
          Max: 3,
        },
        {
          ID: "N3",
          Min: 0,
          Max: 3,
        },
        {
          ID: "N4",
          Min: 0,
        },
        {
          ID: "N9",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTM",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "ACTLoop1",
          Max: "unbounded",
          Loop: [
            {
              ID: "ACT",
            },
            {
              ID: "ASI",
              Min: 0,
            },
            {
              ID: "PER",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "C3",
              Min: 0,
            },
            {
              ID: "LUI",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "DTP",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "BLI",
              Min: 0,
            },
            {
              ID: "LIN",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "PDL",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "AM1",
              Min: 0,
              Max: "unbounded",
            },
            {
              ID: "AMT",
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
              ID: "LQLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "LQ",
                },
                {
                  ID: "N4",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "LUI",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
            },
            {
              ID: "SILoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "SI",
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
                  ID: "REF",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "NM1",
                  Min: 0,
                },
                {
                  ID: "N4",
                  Min: 0,
                },
                {
                  ID: "MSG",
                  Min: 0,
                  Max: "unbounded",
                },
              ],
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
                  ID: "BLI",
                  Min: 0,
                },
                {
                  ID: "SPA",
                  Min: 0,
                },
                {
                  ID: "UD",
                  Min: 0,
                },
                {
                  ID: "AMT",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "AM1",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "PDL",
                  Min: 0,
                  Max: "unbounded",
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
                  ID: "MSG",
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
                      ID: "AM1",
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
                      ID: "LIN",
                      Min: 0,
                      Max: 2,
                    },
                    {
                      ID: "RPA",
                      Min: 0,
                      Max: "unbounded",
                    },
                  ],
                },
                {
                  ID: "BENLoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "BEN",
                    },
                    {
                      ID: "NM1",
                      Min: 0,
                    },
                    {
                      ID: "N2",
                      Min: 0,
                      Max: 3,
                    },
                    {
                      ID: "N3",
                      Min: 0,
                      Max: 3,
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
                      ID: "DTP",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "III",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "QTY",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "AMT",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "LUI",
                      Min: 0,
                    },
                    {
                      ID: "MSG",
                      Min: 0,
                      Max: "unbounded",
                    },
                  ],
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
                  ID: "NX1",
                  Min: 0,
                  Max: 2,
                },
                {
                  ID: "REF",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "LIN",
                  Min: 0,
                  Max: 9,
                },
                {
                  ID: "DMG",
                  Min: 0,
                },
                {
                  ID: "DMA",
                  Min: 0,
                },
                {
                  ID: "IND",
                  Min: 0,
                },
                {
                  ID: "LUI",
                  Min: 0,
                },
                {
                  ID: "ERI",
                  Min: 0,
                },
                {
                  ID: "DTP",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "AMT",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "AM1",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "RPA",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "YNQ",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "QTY",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "MSG",
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
                      ID: "N2",
                      Min: 0,
                      Max: 3,
                    },
                    {
                      ID: "REF",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "AM1",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "N3Loop1",
                      Min: 0,
                      Max: "unbounded",
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
                          Max: 9,
                        },
                        {
                          ID: "DTP",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "QTY",
                          Min: 0,
                        },
                      ],
                    },
                  ],
                },
                {
                  ID: "LQLoop2",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "LQ",
                    },
                    {
                      ID: "SPA",
                      Min: 0,
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "MSG",
                      Min: 0,
                      Max: "unbounded",
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
                          ID: "N3",
                          Min: 0,
                          Max: 3,
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
                          Max: 3,
                        },
                        {
                          ID: "LUI",
                          Min: 0,
                        },
                        {
                          ID: "DTP",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "MSG",
                          Min: 0,
                          Max: "unbounded",
                        },
                      ],
                    },
                  ],
                },
                {
                  ID: "BENLoop2",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "BEN",
                    },
                    {
                      ID: "NM1",
                      Min: 0,
                    },
                    {
                      ID: "N2",
                      Min: 0,
                      Max: 3,
                    },
                    {
                      ID: "N3",
                      Min: 0,
                      Max: 3,
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
                      ID: "DTP",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "III",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "QTY",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "AMT",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "LUI",
                      Min: 0,
                    },
                    {
                      ID: "MSG",
                      Min: 0,
                      Max: "unbounded",
                    },
                  ],
                },
                {
                  ID: "PIDLoop2",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "PID",
                    },
                    {
                      ID: "BLI",
                      Min: 0,
                      Max: 9,
                    },
                    {
                      ID: "SPA",
                      Min: 0,
                    },
                    {
                      ID: "AMT",
                      Min: 0,
                      Max: "unbounded",
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
                      ID: "YNQ",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "MSG",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "PDLLoop1",
                      Min: 0,
                      Max: "unbounded",
                      Loop: [
                        {
                          ID: "PDL",
                        },
                        {
                          ID: "REF",
                          Min: 0,
                          Max: "unbounded",
                        },
                      ],
                    },
                    {
                      ID: "INVLoop2",
                      Min: 0,
                      Max: "unbounded",
                      Loop: [
                        {
                          ID: "INV",
                        },
                        {
                          ID: "AM1",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "DTP",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "RPA",
                          Min: 0,
                          Max: "unbounded",
                        },
                      ],
                    },
                    {
                      ID: "BENLoop3",
                      Min: 0,
                      Max: "unbounded",
                      Loop: [
                        {
                          ID: "BEN",
                        },
                        {
                          ID: "NM1",
                          Min: 0,
                        },
                        {
                          ID: "N2",
                          Min: 0,
                          Max: 3,
                        },
                        {
                          ID: "N3",
                          Min: 0,
                          Max: 3,
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
                          ID: "DTP",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "III",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "QTY",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "AMT",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "LUI",
                          Min: 0,
                        },
                        {
                          ID: "MSG",
                          Min: 0,
                          Max: "unbounded",
                        },
                      ],
                    },
                  ],
                },
                {
                  ID: "UCLoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "UC",
                    },
                    {
                      ID: "HLLoop1",
                      Min: 0,
                      Max: "unbounded",
                      Loop: [
                        {
                          ID: "HL",
                        },
                        {
                          ID: "UQS",
                          Min: 0,
                        },
                        {
                          ID: "YNQ",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "NM1",
                          Min: 0,
                        },
                        {
                          ID: "N3",
                          Min: 0,
                          Max: 3,
                        },
                        {
                          ID: "N4",
                          Min: 0,
                        },
                        {
                          ID: "COM",
                          Min: 0,
                          Max: 9,
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
                          ID: "MSG",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "AM1",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "AMT",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "III",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "EC",
                          Min: 0,
                        },
                        {
                          ID: "EMS",
                          Min: 0,
                        },
                        {
                          ID: "EMP",
                          Min: 0,
                        },
                        {
                          ID: "PCT",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "SOI",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "LIN",
                          Min: 0,
                          Max: 2,
                        },
                        {
                          ID: "REF",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "ASL",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "TOA",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "TOV",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "VEH",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "CDS",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "CED",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "SIN",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "UCS",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "FH",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "SPA",
                          Min: 0,
                        },
                        {
                          ID: "MPI",
                          Min: 0,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              ID: "PWKLoop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "PWK",
                },
                {
                  ID: "NM1",
                  Min: 0,
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
                  ID: "DTP",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "SPA",
                  Min: 0,
                },
                {
                  ID: "EFILoop1",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "EFI",
                    },
                    {
                      ID: "BIN",
                    },
                  ],
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
                  ID: "PDLLoop2",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "PDL",
                    },
                    {
                      ID: "REF",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "LSLoop1",
                      Min: 0,
                      Loop: [
                        {
                          ID: "LS",
                          Min: 1,
                          Max: 1,
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
                              ID: "N1",
                              Min: 0,
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
                              ID: "LIN",
                              Min: 0,
                              Max: 2,
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
                              ID: "MSG",
                              Min: 0,
                              Max: "unbounded",
                            },
                            {
                              ID: "AM1Loop1",
                              Min: 0,
                              Max: "unbounded",
                              Loop: [
                                {
                                  ID: "AM1",
                                },
                                {
                                  ID: "INVLoop3",
                                  Min: 0,
                                  Max: "unbounded",
                                  Loop: [
                                    {
                                      ID: "INV",
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
                                      ID: "RPA",
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
                          ID: "LE",
                          Min: 1,
                          Max: 1,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              ID: "K2Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "K2",
                },
                {
                  ID: "DTP",
                  Min: 0,
                },
                {
                  ID: "NM1",
                  Min: 0,
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
