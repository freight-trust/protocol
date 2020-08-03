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
  DocumentType: 272,
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
      Max: 10,
    },
    {
      ID: "N9Loop1",
      Min: 0,
      Max: "unbounded",
      Loop: [
        {
          ID: "N9",
        },
        {
          ID: "MSG",
          Min: 0,
          Max: "unbounded",
        },
      ],
    },
    {
      ID: "NM1Loop1",
      Min: 0,
      Max: 15,
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
          Max: 15,
        },
        {
          ID: "PER",
          Min: 0,
          Max: 5,
        },
      ],
    },
    {
      ID: "LIDLoop1",
      Max: "unbounded",
      Loop: [
        {
          ID: "LID",
        },
        {
          ID: "LQ",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "DTP",
          Min: 0,
          Max: 10,
        },
        {
          ID: "BCI",
          Min: 0,
        },
        {
          ID: "SI",
          Min: 0,
          Max: 2,
        },
        {
          ID: "YNQ",
          Min: 0,
          Max: "unbounded",
        },
        {
          ID: "LIELoop1",
          Min: 0,
          Max: 2,
          Loop: [
            {
              ID: "LIE",
            },
            {
              ID: "N3",
              Min: 0,
            },
            {
              ID: "N4",
              Min: 0,
            },
          ],
        },
        {
          ID: "N9Loop2",
          Min: 0,
          Max: "unbounded",
          Loop: [
            {
              ID: "N9",
            },
            {
              ID: "MSG",
              Min: 0,
              Max: "unbounded",
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
              ID: "DTP",
              Min: 0,
            },
            {
              ID: "N9",
              Min: 0,
              Max: 5,
            },
            {
              ID: "N4",
              Min: 0,
            },
            {
              ID: "NM1",
              Min: 0,
            },
            {
              ID: "PER",
              Min: 0,
            },
          ],
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
              ID: "NM1Loop2",
              Min: 0,
              Max: 10,
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
                  Max: 15,
                },
                {
                  ID: "PER",
                  Min: 0,
                  Max: 5,
                },
                {
                  ID: "LIELoop2",
                  Min: 0,
                  Loop: [
                    {
                      ID: "LIE",
                    },
                    {
                      ID: "N3",
                      Min: 0,
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
              ID: "LE",
              Min: 1,
              Max: 1,
            },
          ],
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
              ID: "VEHLoop1",
              Min: 0,
              Loop: [
                {
                  ID: "VEH",
                },
                {
                  ID: "VAT",
                  Min: 0,
                  Max: 100,
                },
                {
                  ID: "N9",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "DVI",
                  Min: 0,
                },
                {
                  ID: "VRC",
                  Min: 0,
                },
                {
                  ID: "DAM",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "LIELoop3",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "LIE",
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
                  ID: "PDR",
                  Min: 0,
                },
                {
                  ID: "PDP",
                  Min: 0,
                },
                {
                  ID: "K2",
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
                },
                {
                  ID: "LIE",
                  Min: 0,
                },
                {
                  ID: "DTP",
                  Min: 0,
                },
                {
                  ID: "LIN",
                  Min: 0,
                },
                {
                  ID: "EM",
                  Min: 0,
                },
                {
                  ID: "SD1",
                  Min: 0,
                },
                {
                  ID: "PKD",
                  Min: 0,
                },
                {
                  ID: "K1",
                  Min: 0,
                },
                {
                  ID: "V1",
                  Min: 0,
                },
                {
                  ID: "R1",
                  Min: 0,
                },
                {
                  ID: "R4",
                  Min: 0,
                  Max: 5,
                },
                {
                  ID: "LSLoop2",
                  Min: 0,
                  Loop: [
                    {
                      ID: "LS",
                      Min: 1,
                      Max: 1,
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
                          ID: "AMT",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "QTY",
                          Min: 0,
                        },
                        {
                          ID: "LIE",
                          Min: 0,
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
            {
              ID: "NX1Loop1",
              Min: 0,
              Max: "unbounded",
              Loop: [
                {
                  ID: "NX1",
                },
                {
                  ID: "NM1",
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
                  Max: 10,
                },
                {
                  ID: "PER",
                  Min: 0,
                  Max: 10,
                },
                {
                  ID: "ICH",
                  Min: 0,
                },
                {
                  ID: "CRC",
                  Min: 0,
                  Max: "unbounded",
                },
                {
                  ID: "BCI",
                  Min: 0,
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
                      ID: "DTP",
                      Min: 0,
                      Max: 5,
                    },
                    {
                      ID: "AMT",
                      Min: 0,
                      Max: "unbounded",
                    },
                    {
                      ID: "PCT",
                      Min: 0,
                      Max: 5,
                    },
                    {
                      ID: "QTY",
                      Min: 0,
                      Max: 5,
                    },
                    {
                      ID: "LSLoop3",
                      Min: 0,
                      Loop: [
                        {
                          ID: "LS",
                          Min: 1,
                          Max: 1,
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
                              ID: "AMT",
                              Min: 0,
                              Max: "unbounded",
                            },
                            {
                              ID: "PCT",
                              Min: 0,
                              Max: 5,
                            },
                            {
                              ID: "QTY",
                              Min: 0,
                              Max: 5,
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
                {
                  ID: "LSLoop4",
                  Min: 0,
                  Loop: [
                    {
                      ID: "LS",
                      Min: 1,
                      Max: 1,
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
                          Max: 10,
                        },
                        {
                          ID: "PER",
                          Min: 0,
                          Max: 10,
                        },
                        {
                          ID: "ICH",
                          Min: 0,
                        },
                        {
                          ID: "CRC",
                          Min: 0,
                          Max: "unbounded",
                        },
                        {
                          ID: "BCI",
                          Min: 0,
                        },
                        {
                          ID: "IIILoop1",
                          Min: 0,
                          Max: "unbounded",
                          Loop: [
                            {
                              ID: "III",
                            },
                            {
                              ID: "DTP",
                              Min: 0,
                              Max: 5,
                            },
                            {
                              ID: "AMT",
                              Min: 0,
                              Max: "unbounded",
                            },
                            {
                              ID: "PCT",
                              Min: 0,
                              Max: 5,
                            },
                            {
                              ID: "QTY",
                              Min: 0,
                              Max: 5,
                            },
                            {
                              ID: "LQLoop3",
                              Min: 0,
                              Max: "unbounded",
                              Loop: [
                                {
                                  ID: "LQ",
                                },
                                {
                                  ID: "AMT",
                                  Min: 0,
                                  Max: "unbounded",
                                },
                                {
                                  ID: "PCT",
                                  Min: 0,
                                  Max: 5,
                                },
                                {
                                  ID: "QTY",
                                  Min: 0,
                                  Max: 5,
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
            {
              ID: "PINLoop1",
              Min: 0,
              Max: 5,
              Loop: [
                {
                  ID: "PIN",
                },
                {
                  ID: "BCI",
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
                  ID: "PWKLoop2",
                  Min: 0,
                  Max: "unbounded",
                  Loop: [
                    {
                      ID: "PWK",
                    },
                    {
                      ID: "DTP",
                      Min: 0,
                    },
                    {
                      ID: "N9",
                      Min: 0,
                      Max: 5,
                    },
                    {
                      ID: "N4",
                      Min: 0,
                    },
                    {
                      ID: "NM1",
                      Min: 0,
                    },
                    {
                      ID: "PER",
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
