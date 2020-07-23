/* (C) 2020 - FreightTrust and Clearing Corporation
 * SPDX: MPL-2.0
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

namespace FreightTrust.EDI.X12004010
{


/// <summary>
/// Loop for Load Detail
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(CLD))]
public class Loop_CLD_856
{

    /// <summary>
    /// Load Detail
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public CLD CLD {
        get;
        set;
    }
    /// <summary>
    /// Reference Identification
    /// </summary>
    [DataMember]
    [ListCount(200)]
    [Pos(2)]
    public List<REF> REF {
        get;
        set;
    }
    /// <summary>
    /// Date or Time or Period
    /// </summary>
    [DataMember]
    [Pos(3)]
    public DTP DTP {
        get;
        set;
    }
}

/// <summary>
/// Loop for Hierarchical Level
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(HL))]
public class Loop_HL_856
{

    /// <summary>
    /// Hierarchical Level
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public HL HL {
        get;
        set;
    }
    /// <summary>
    /// Item Identification
    /// </summary>
    [DataMember]
    [Pos(2)]
    public LIN LIN {
        get;
        set;
    }
    /// <summary>
    /// Item Detail (Shipment)
    /// </summary>
    [DataMember]
    [Pos(3)]
    public SN1 SN1 {
        get;
        set;
    }
    /// <summary>
    /// Subline Item Detail
    /// </summary>
    [DataMember]
    [ListCount(1000)]
    [Pos(4)]
    public List<SLN> SLN {
        get;
        set;
    }
    /// <summary>
    /// Purchase Order Reference
    /// </summary>
    [DataMember]
    [Pos(5)]
    public PRF PRF {
        get;
        set;
    }
    /// <summary>
    /// Item Physical Details
    /// </summary>
    [DataMember]
    [Pos(6)]
    public PO4 PO4 {
        get;
        set;
    }
    /// <summary>
    /// Product/Item Description
    /// </summary>
    [DataMember]
    [ListCount(200)]
    [Pos(7)]
    public List<PID> PID {
        get;
        set;
    }
    /// <summary>
    /// Measurements
    /// </summary>
    [DataMember]
    [ListCount(40)]
    [Pos(8)]
    public List<MEA> MEA {
        get;
        set;
    }
    /// <summary>
    /// Paperwork
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(9)]
    public List<PWK> PWK {
        get;
        set;
    }
    /// <summary>
    /// Marking, Packaging, Loading
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(10)]
    public List<PKG> PKG {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Quantity and Weight)
    /// </summary>
    [DataMember]
    [ListCount(20)]
    [Pos(11)]
    public List<TD1> TD1 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Routing Sequence/Transit Time)
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(12)]
    public List<TD5> TD5 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Equipment)
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(13)]
    public List<TD3> TD3 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Special Handling, or Hazardous Materials, or Both)
    /// </summary>
    [DataMember]
    [ListCount(5)]
    [Pos(14)]
    public List<TD4> TD4 {
        get;
        set;
    }
    /// <summary>
    /// Trailer Shipment Details
    /// </summary>
    [DataMember]
    [Pos(15)]
    public TSD TSD {
        get;
        set;
    }
    /// <summary>
    /// Reference Identification
    /// </summary>
    [DataMember]
    [Pos(16)]
    public List<REF> REF {
        get;
        set;
    }
    /// <summary>
    /// Administrative Communications Contact
    /// </summary>
    [DataMember]
    [ListCount(3)]
    [Pos(17)]
    public List<PER> PER {
        get;
        set;
    }
    /// <summary>
    /// Loop for Hazardous Identification Information
    /// </summary>
    [DataMember]
    [ListCount(100)]
    [Pos(18)]
    public List<Loop_LH1_856> LH1Loop {
        get;
        set;
    }
    /// <summary>
    /// Loop for Load Detail
    /// </summary>
    [DataMember]
    [ListCount(200)]
    [Pos(19)]
    public List<Loop_CLD_856> CLDLoop {
        get;
        set;
    }
    /// <summary>
    /// Marks and Numbers
    /// </summary>
    [DataMember]
    [Pos(20)]
    public List<MAN> MAN {
        get;
        set;
    }
    /// <summary>
    /// Date/Time Reference
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(21)]
    public List<DTM> DTM {
        get;
        set;
    }
    /// <summary>
    /// F.O.B. Related Instructions
    /// </summary>
    [DataMember]
    [Pos(22)]
    public FOB FOB {
        get;
        set;
    }
    /// <summary>
    /// Pallet Information
    /// </summary>
    [DataMember]
    [Pos(23)]
    public PAL PAL {
        get;
        set;
    }
    /// <summary>
    /// Loop for Name
    /// </summary>
    [DataMember]
    [ListCount(200)]
    [Pos(24)]
    public List<Loop_N1_856> N1Loop {
        get;
        set;
    }
    /// <summary>
    /// Destination Quantity
    /// </summary>
    [DataMember]
    [ListCount(50)]
    [Pos(25)]
    public List<SDQ> SDQ {
        get;
        set;
    }
    /// <summary>
    /// Excess Transportation Detail
    /// </summary>
    [DataMember]
    [Pos(26)]
    public ETD ETD {
        get;
        set;
    }
    /// <summary>
    /// Currency
    /// </summary>
    [DataMember]
    [Pos(27)]
    public CUR CUR {
        get;
        set;
    }
    /// <summary>
    /// Loop for Service, Promotion, Allowance, or Charge Information
    /// </summary>
    [DataMember]
    [Pos(28)]
    public List<Loop_SAC_856> SACLoop {
        get;
        set;
    }
    /// <summary>
    /// Furnished Goods and Services
    /// </summary>
    [DataMember]
    [Pos(29)]
    public GF GF {
        get;
        set;
    }
    /// <summary>
    /// Yes/No Question
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(30)]
    public List<YNQ> YNQ {
        get;
        set;
    }
    /// <summary>
    /// Loop for Code Source Information
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(31)]
    public List<Loop_LM_856> LMLoop {
        get;
        set;
    }
    /// <summary>
    /// Loop for Vessel Identification
    /// </summary>
    [DataMember]
    [Pos(32)]
    public List<Loop_V1_856> V1Loop {
        get;
        set;
    }
}

/// <summary>
/// Loop for Hazardous Identification Information
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(LH1))]
public class Loop_LH1_856
{

    /// <summary>
    /// Hazardous Identification Information
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public LH1 LH1 {
        get;
        set;
    }
    /// <summary>
    /// Hazardous Classification Information
    /// </summary>
    [DataMember]
    [ListCount(4)]
    [Pos(2)]
    public List<LH2> LH2 {
        get;
        set;
    }
    /// <summary>
    /// Hazardous Material Shipping Name
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(3)]
    public List<LH3> LH3 {
        get;
        set;
    }
    /// <summary>
    /// Freeform Hazardous Material Information
    /// </summary>
    [DataMember]
    [ListCount(20)]
    [Pos(4)]
    public List<LFH> LFH {
        get;
        set;
    }
    /// <summary>
    /// EPA Required Data
    /// </summary>
    [DataMember]
    [Pos(5)]
    public List<LEP> LEP {
        get;
        set;
    }
    /// <summary>
    /// Canadian Dangerous Requirements
    /// </summary>
    [DataMember]
    [Pos(6)]
    public LH4 LH4 {
        get;
        set;
    }
    /// <summary>
    /// Transborder Hazardous Requirements
    /// </summary>
    [DataMember]
    [ListCount(3)]
    [Pos(7)]
    public List<LHT> LHT {
        get;
        set;
    }
    /// <summary>
    /// Hazardous Material Identifying Reference Numbers
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(8)]
    public List<LHR> LHR {
        get;
        set;
    }
    /// <summary>
    /// Administrative Communications Contact
    /// </summary>
    [DataMember]
    [ListCount(5)]
    [Pos(9)]
    public List<PER> PER {
        get;
        set;
    }
    /// <summary>
    /// Empty Equipment Hazardous Material Information
    /// </summary>
    [DataMember]
    [Pos(10)]
    public LHE LHE {
        get;
        set;
    }
}

/// <summary>
/// Loop for Code Source Information
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(LM))]
public class Loop_LM_856
{

    /// <summary>
    /// Code Source Information
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public LM LM {
        get;
        set;
    }
    /// <summary>
    /// Industry Code
    /// </summary>
    [DataMember]
    [Required]
    [ListCount(100)]
    [Pos(2)]
    public List<LQ> LQ {
        get;
        set;
    }
}

/// <summary>
/// Loop for Name
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(N1))]
public class Loop_N1_856
{

    /// <summary>
    /// Name
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public N1 N1 {
        get;
        set;
    }
    /// <summary>
    /// Additional Name Information
    /// </summary>
    [DataMember]
    [ListCount(2)]
    [Pos(2)]
    public List<N2> N2 {
        get;
        set;
    }
    /// <summary>
    /// Address Information
    /// </summary>
    [DataMember]
    [ListCount(2)]
    [Pos(3)]
    public List<N3> N3 {
        get;
        set;
    }
    /// <summary>
    /// Geographic Location
    /// </summary>
    [DataMember]
    [Pos(4)]
    public N4 N4 {
        get;
        set;
    }
    /// <summary>
    /// Reference Identification
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(5)]
    public List<REF> REF {
        get;
        set;
    }
    /// <summary>
    /// Administrative Communications Contact
    /// </summary>
    [DataMember]
    [ListCount(3)]
    [Pos(6)]
    public List<PER> PER {
        get;
        set;
    }
    /// <summary>
    /// F.O.B. Related Instructions
    /// </summary>
    [DataMember]
    [Pos(7)]
    public FOB FOB {
        get;
        set;
    }
}

/// <summary>
/// Loop for Service, Promotion, Allowance, or Charge Information
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(SAC))]
public class Loop_SAC_856
{

    /// <summary>
    /// Service, Promotion, Allowance, or Charge Information
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public SAC SAC {
        get;
        set;
    }
    /// <summary>
    /// Currency
    /// </summary>
    [DataMember]
    [Pos(2)]
    public CUR CUR {
        get;
        set;
    }
}

/// <summary>
/// Loop for Vessel Identification
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(V1))]
public class Loop_V1_856
{

    /// <summary>
    /// Vessel Identification
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public V1 V1 {
        get;
        set;
    }
    /// <summary>
    /// Port or Terminal
    /// </summary>
    [DataMember]
    [Pos(2)]
    public List<R4> R4 {
        get;
        set;
    }
    /// <summary>
    /// Date/Time Reference
    /// </summary>
    [DataMember]
    [Pos(3)]
    public List<DTM> DTM {
        get;
        set;
    }
}

/// <summary>
/// Ship Notice/Manifest
/// </summary>
[Serializable()]
[DataContract()]
[Message("X12", "004010", "856")]
public class TS856 : EdiMessage
{

    /// <summary>
    /// Transaction Set Header
    /// </summary>
    [DataMember]
    [Pos(1)]
    public ST ST {
        get;
        set;
    }
    /// <summary>
    /// Beginning Segment for Ship Notice
    /// </summary>
    [DataMember]
    [Required]
    [Pos(2)]
    public BSN BSN {
        get;
        set;
    }
    /// <summary>
    /// Date/Time Reference
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(3)]
    public List<DTM> DTM {
        get;
        set;
    }
    /// <summary>
    /// Loop for Hierarchical Level
    /// </summary>
    [DataMember]
    [Required]
    [ListCount(200000)]
    [Pos(4)]
    public List<Loop_HL_856> HLLoop {
        get;
        set;
    }
    /// <summary>
    /// Transaction Totals
    /// </summary>
    [DataMember]
    [Pos(5)]
    public CTT CTT {
        get;
        set;
    }
    /// <summary>
    /// Transaction Set Trailer
    /// </summary>
    [DataMember]
    [Pos(6)]
    public SE SE {
        get;
        set;
    }
}
}
