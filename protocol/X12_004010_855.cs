/* (C) 2020 - FreightTrust and Clearing Corporation
 * SPDX: MPL-2.0
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

namespace FreightTrust.EDI.X12004010
{


/// <summary>
/// Loop for Line Item Acknowledgment
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(ACK))]
public class Loop_ACK_855
{

    /// <summary>
    /// Line Item Acknowledgment
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public ACK ACK {
        get;
        set;
    }
    /// <summary>
    /// Date/Time Reference
    /// </summary>
    [DataMember]
    [Pos(2)]
    public DTM DTM {
        get;
        set;
    }
}

/// <summary>
/// Loop for Advertising Demographic Information
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(ADV))]
public class Loop_ADV_855
{

    /// <summary>
    /// Advertising Demographic Information
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public ADV ADV {
        get;
        set;
    }
    /// <summary>
    /// Date/Time Reference
    /// </summary>
    [DataMember]
    [Pos(2)]
    public List<DTM> DTM {
        get;
        set;
    }
    /// <summary>
    /// Text
    /// </summary>
    [DataMember]
    [Pos(3)]
    public List<MTX> MTX {
        get;
        set;
    }
}

/// <summary>
/// Loop for Transaction Totals
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(CTT))]
public class Loop_CTT_855
{

    /// <summary>
    /// Transaction Totals
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public CTT CTT {
        get;
        set;
    }
    /// <summary>
    /// Monetary Amount
    /// </summary>
    [DataMember]
    [Pos(2)]
    public AMT AMT {
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
public class Loop_N1_855
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
    /// Location ID Component
    /// </summary>
    [DataMember]
    [Pos(5)]
    public List<NX2> NX2 {
        get;
        set;
    }
    /// <summary>
    /// Reference Identification
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(6)]
    public List<REF> REF {
        get;
        set;
    }
    /// <summary>
    /// Administrative Communications Contact
    /// </summary>
    [DataMember]
    [Pos(7)]
    public List<PER> PER {
        get;
        set;
    }
    /// <summary>
    /// Service Characteristic Identification
    /// </summary>
    [DataMember]
    [Pos(8)]
    public List<SI> SI {
        get;
        set;
    }
    /// <summary>
    /// F.O.B. Related Instructions
    /// </summary>
    [DataMember]
    [Pos(9)]
    public FOB FOB {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Quantity and Weight)
    /// </summary>
    [DataMember]
    [ListCount(2)]
    [Pos(10)]
    public List<TD1> TD1 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Routing Sequence/Transit Time)
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(11)]
    public List<TD5> TD5 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Equipment)
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(12)]
    public List<TD3> TD3 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Special Handling, or Hazardous Materials, or Both)
    /// </summary>
    [DataMember]
    [ListCount(5)]
    [Pos(13)]
    public List<TD4> TD4 {
        get;
        set;
    }
    /// <summary>
    /// Marking, Packaging, Loading
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(14)]
    public List<PKG> PKG {
        get;
        set;
    }
    /// <summary>
    /// Message Text
    /// </summary>
    [DataMember]
    [Pos(15)]
    public List<MSG> MSG {
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
public class Loop_N1_855_2
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
    /// Location ID Component
    /// </summary>
    [DataMember]
    [Pos(5)]
    public List<NX2> NX2 {
        get;
        set;
    }
    /// <summary>
    /// Reference Identification
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(6)]
    public List<REF> REF {
        get;
        set;
    }
    /// <summary>
    /// Administrative Communications Contact
    /// </summary>
    [DataMember]
    [ListCount(3)]
    [Pos(7)]
    public List<PER> PER {
        get;
        set;
    }
    /// <summary>
    /// Service Characteristic Identification
    /// </summary>
    [DataMember]
    [Pos(8)]
    public List<SI> SI {
        get;
        set;
    }
    /// <summary>
    /// Date/Time Reference
    /// </summary>
    [DataMember]
    [Pos(9)]
    public DTM DTM {
        get;
        set;
    }
    /// <summary>
    /// F.O.B. Related Instructions
    /// </summary>
    [DataMember]
    [Pos(10)]
    public FOB FOB {
        get;
        set;
    }
    /// <summary>
    /// Line Item Schedule
    /// </summary>
    [DataMember]
    [ListCount(200)]
    [Pos(11)]
    public List<SCH> SCH {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Quantity and Weight)
    /// </summary>
    [DataMember]
    [ListCount(2)]
    [Pos(12)]
    public List<TD1> TD1 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Routing Sequence/Transit Time)
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(13)]
    public List<TD5> TD5 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Equipment)
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(14)]
    public List<TD3> TD3 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Special Handling, or Hazardous Materials, or Both)
    /// </summary>
    [DataMember]
    [ListCount(5)]
    [Pos(15)]
    public List<TD4> TD4 {
        get;
        set;
    }
    /// <summary>
    /// Quantity
    /// </summary>
    [DataMember]
    [Pos(16)]
    public List<QTY> QTY {
        get;
        set;
    }
    /// <summary>
    /// Marking, Packaging, Loading
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(17)]
    public List<PKG> PKG {
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
public class Loop_N1_855_3
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
    /// Location ID Component
    /// </summary>
    [DataMember]
    [Pos(5)]
    public List<NX2> NX2 {
        get;
        set;
    }
    /// <summary>
    /// Reference Identification
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(6)]
    public List<REF> REF {
        get;
        set;
    }
    /// <summary>
    /// Administrative Communications Contact
    /// </summary>
    [DataMember]
    [ListCount(3)]
    [Pos(7)]
    public List<PER> PER {
        get;
        set;
    }
    /// <summary>
    /// Service Characteristic Identification
    /// </summary>
    [DataMember]
    [Pos(8)]
    public List<SI> SI {
        get;
        set;
    }
}

/// <summary>
/// Loop for Reference Identification
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(N9))]
public class Loop_N9_855
{

    /// <summary>
    /// Reference Identification
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public N9 N9 {
        get;
        set;
    }
    /// <summary>
    /// Date/Time Reference
    /// </summary>
    [DataMember]
    [Pos(2)]
    public List<DTM> DTM {
        get;
        set;
    }
    /// <summary>
    /// Message Text
    /// </summary>
    [DataMember]
    [ListCount(1000)]
    [Pos(3)]
    public List<MSG> MSG {
        get;
        set;
    }
}

/// <summary>
/// Loop for Reference Identification
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(N9))]
public class Loop_N9_855_2
{

    /// <summary>
    /// Reference Identification
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public N9 N9 {
        get;
        set;
    }
    /// <summary>
    /// Date/Time Reference
    /// </summary>
    [DataMember]
    [Pos(2)]
    public List<DTM> DTM {
        get;
        set;
    }
    /// <summary>
    /// Message Text
    /// </summary>
    [DataMember]
    [Pos(3)]
    public List<MSG> MSG {
        get;
        set;
    }
}

/// <summary>
/// Loop for Product/Item Description
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(PID))]
public class Loop_PID_855
{

    /// <summary>
    /// Product/Item Description
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public PID PID {
        get;
        set;
    }
    /// <summary>
    /// Measurements
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(2)]
    public List<MEA> MEA {
        get;
        set;
    }
}

/// <summary>
/// Loop for Marking, Packaging, Loading
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(PKG))]
public class Loop_PKG_855
{

    /// <summary>
    /// Marking, Packaging, Loading
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public PKG PKG {
        get;
        set;
    }
    /// <summary>
    /// Measurements
    /// </summary>
    [DataMember]
    [Pos(2)]
    public List<MEA> MEA {
        get;
        set;
    }
}

/// <summary>
/// Loop for Baseline Item Data
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(PO1))]
public class Loop_PO1_855
{

    /// <summary>
    /// Baseline Item Data
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public PO1 PO1 {
        get;
        set;
    }
    /// <summary>
    /// Item Identification
    /// </summary>
    [DataMember]
    [Pos(2)]
    public List<LIN> LIN {
        get;
        set;
    }
    /// <summary>
    /// Service Characteristic Identification
    /// </summary>
    [DataMember]
    [Pos(3)]
    public List<SI> SI {
        get;
        set;
    }
    /// <summary>
    /// Currency
    /// </summary>
    [DataMember]
    [Pos(4)]
    public CUR CUR {
        get;
        set;
    }
    /// <summary>
    /// Additional Item Detail
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(5)]
    public List<PO3> PO3 {
        get;
        set;
    }
    /// <summary>
    /// Pricing Information
    /// </summary>
    [DataMember]
    [Pos(6)]
    public List<CTP> CTP {
        get;
        set;
    }
    /// <summary>
    /// Period Amount
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(7)]
    public List<PAM> PAM {
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
    /// Loop for Product/Item Description
    /// </summary>
    [DataMember]
    [ListCount(1000)]
    [Pos(9)]
    public List<Loop_PID_855> PIDLoop {
        get;
        set;
    }
    /// <summary>
    /// Paperwork
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(10)]
    public List<PWK> PWK {
        get;
        set;
    }
    /// <summary>
    /// Item Physical Details
    /// </summary>
    [DataMember]
    [Pos(11)]
    public List<PO4> PO4 {
        get;
        set;
    }
    /// <summary>
    /// Reference Identification
    /// </summary>
    [DataMember]
    [Pos(12)]
    public List<REF> REF {
        get;
        set;
    }
    /// <summary>
    /// Administrative Communications Contact
    /// </summary>
    [DataMember]
    [ListCount(3)]
    [Pos(13)]
    public List<PER> PER {
        get;
        set;
    }
    /// <summary>
    /// Loop for Service, Promotion, Allowance, or Charge Information
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(14)]
    public List<Loop_SAC_855> SACLoop {
        get;
        set;
    }
    /// <summary>
    /// Conditions of Sale
    /// </summary>
    [DataMember]
    [Pos(15)]
    public IT8 IT8 {
        get;
        set;
    }
    /// <summary>
    /// Sales Requirements
    /// </summary>
    [DataMember]
    [Pos(16)]
    public List<CSH> CSH {
        get;
        set;
    }
    /// <summary>
    /// Terms of Sale/Deferred Terms of Sale
    /// </summary>
    [DataMember]
    [ListCount(2)]
    [Pos(17)]
    public List<ITD> ITD {
        get;
        set;
    }
    /// <summary>
    /// Discount Detail
    /// </summary>
    [DataMember]
    [ListCount(20)]
    [Pos(18)]
    public List<DIS> DIS {
        get;
        set;
    }
    /// <summary>
    /// Installment Information
    /// </summary>
    [DataMember]
    [Pos(19)]
    public INC INC {
        get;
        set;
    }
    /// <summary>
    /// Tax Reference
    /// </summary>
    [DataMember]
    [Pos(20)]
    public List<TAX> TAX {
        get;
        set;
    }
    /// <summary>
    /// F.O.B. Related Instructions
    /// </summary>
    [DataMember]
    [Pos(21)]
    public List<FOB> FOB {
        get;
        set;
    }
    /// <summary>
    /// Destination Quantity
    /// </summary>
    [DataMember]
    [ListCount(500)]
    [Pos(22)]
    public List<SDQ> SDQ {
        get;
        set;
    }
    /// <summary>
    /// Date/Time Reference
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(23)]
    public List<DTM> DTM {
        get;
        set;
    }
    /// <summary>
    /// Lead Time
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(24)]
    public List<LDT> LDT {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Quantity and Weight)
    /// </summary>
    [DataMember]
    [Pos(25)]
    public TD1 TD1 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Routing Sequence/Transit Time)
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(26)]
    public List<TD5> TD5 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Equipment)
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(27)]
    public List<TD3> TD3 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Special Handling, or Hazardous Materials, or Both)
    /// </summary>
    [DataMember]
    [ListCount(5)]
    [Pos(28)]
    public List<TD4> TD4 {
        get;
        set;
    }
    /// <summary>
    /// Loop for Line Item Acknowledgment
    /// </summary>
    [DataMember]
    [ListCount(104)]
    [Pos(29)]
    public List<Loop_ACK_855> ACKLoop {
        get;
        set;
    }
    /// <summary>
    /// Marks and Numbers
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(30)]
    public List<MAN> MAN {
        get;
        set;
    }
    /// <summary>
    /// Monetary Amount
    /// </summary>
    [DataMember]
    [Pos(31)]
    public AMT AMT {
        get;
        set;
    }
    /// <summary>
    /// Restrictions/Conditions
    /// </summary>
    [DataMember]
    [Pos(32)]
    public List<CTB> CTB {
        get;
        set;
    }
    /// <summary>
    /// Tax Information
    /// </summary>
    [DataMember]
    [Pos(33)]
    public List<TXI> TXI {
        get;
        set;
    }
    /// <summary>
    /// Loop for Quantity
    /// </summary>
    [DataMember]
    [Pos(34)]
    public List<Loop_QTY_855> QTYLoop {
        get;
        set;
    }
    /// <summary>
    /// Loop for Marking, Packaging, Loading
    /// </summary>
    [DataMember]
    [ListCount(200)]
    [Pos(35)]
    public List<Loop_PKG_855> PKGLoop {
        get;
        set;
    }
    /// <summary>
    /// Loop for Line Item Schedule
    /// </summary>
    [DataMember]
    [ListCount(200)]
    [Pos(36)]
    public List<Loop_SCH_855> SCHLoop {
        get;
        set;
    }
    /// <summary>
    /// Loop for Reference Identification
    /// </summary>
    [DataMember]
    [ListCount(1000)]
    [Pos(37)]
    public List<Loop_N9_855> N9Loop {
        get;
        set;
    }
    /// <summary>
    /// Loop for Name
    /// </summary>
    [DataMember]
    [ListCount(200)]
    [Pos(38)]
    public List<Loop_N1_855_2> N1Loop {
        get;
        set;
    }
    /// <summary>
    /// Loop for Subline Item Detail
    /// </summary>
    [DataMember]
    [ListCount(1000)]
    [Pos(39)]
    public List<Loop_SLN_855> SLNLoop {
        get;
        set;
    }
}

/// <summary>
/// Loop for Quantity
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(QTY))]
public class Loop_QTY_855
{

    /// <summary>
    /// Quantity
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public QTY QTY {
        get;
        set;
    }
    /// <summary>
    /// Service Characteristic Identification
    /// </summary>
    [DataMember]
    [Pos(2)]
    public List<SI> SI {
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
public class Loop_SAC_855
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
/// Loop for Line Item Schedule
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(SCH))]
public class Loop_SCH_855
{

    /// <summary>
    /// Line Item Schedule
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public SCH SCH {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Quantity and Weight)
    /// </summary>
    [DataMember]
    [ListCount(2)]
    [Pos(2)]
    public List<TD1> TD1 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Routing Sequence/Transit Time)
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(3)]
    public List<TD5> TD5 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Equipment)
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(4)]
    public List<TD3> TD3 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Special Handling, or Hazardous Materials, or Both)
    /// </summary>
    [DataMember]
    [ListCount(5)]
    [Pos(5)]
    public List<TD4> TD4 {
        get;
        set;
    }
    /// <summary>
    /// Reference Identification
    /// </summary>
    [DataMember]
    [Pos(6)]
    public List<REF> REF {
        get;
        set;
    }
}

/// <summary>
/// Loop for Subline Item Detail
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(SLN))]
public class Loop_SLN_855
{

    /// <summary>
    /// Subline Item Detail
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public SLN SLN {
        get;
        set;
    }
    /// <summary>
    /// Message Text
    /// </summary>
    [DataMember]
    [Pos(2)]
    public List<MSG> MSG {
        get;
        set;
    }
    /// <summary>
    /// Service Characteristic Identification
    /// </summary>
    [DataMember]
    [Pos(3)]
    public List<SI> SI {
        get;
        set;
    }
    /// <summary>
    /// Product/Item Description
    /// </summary>
    [DataMember]
    [ListCount(1000)]
    [Pos(4)]
    public List<PID> PID {
        get;
        set;
    }
    /// <summary>
    /// Additional Item Detail
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(5)]
    public List<PO3> PO3 {
        get;
        set;
    }
    /// <summary>
    /// Pricing Information
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(6)]
    public List<CTP> CTP {
        get;
        set;
    }
    /// <summary>
    /// Period Amount
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(7)]
    public List<PAM> PAM {
        get;
        set;
    }
    /// <summary>
    /// Line Item Acknowledgment
    /// </summary>
    [DataMember]
    [ListCount(104)]
    [Pos(8)]
    public List<ACK> ACK {
        get;
        set;
    }
    /// <summary>
    /// Loop for Service, Promotion, Allowance, or Charge Information
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(9)]
    public List<Loop_SAC_855> SACLoop {
        get;
        set;
    }
    /// <summary>
    /// Date/Time Reference
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(10)]
    public List<DTM> DTM {
        get;
        set;
    }
    /// <summary>
    /// Item Physical Details
    /// </summary>
    [DataMember]
    [Pos(11)]
    public PO4 PO4 {
        get;
        set;
    }
    /// <summary>
    /// Tax Reference
    /// </summary>
    [DataMember]
    [ListCount(3)]
    [Pos(12)]
    public List<TAX> TAX {
        get;
        set;
    }
    /// <summary>
    /// Advertising Demographic Information
    /// </summary>
    [DataMember]
    [Pos(13)]
    public List<ADV> ADV {
        get;
        set;
    }
    /// <summary>
    /// Loop for Quantity
    /// </summary>
    [DataMember]
    [Pos(14)]
    public List<Loop_QTY_855> QTYLoop {
        get;
        set;
    }
    /// <summary>
    /// Loop for Reference Identification
    /// </summary>
    [DataMember]
    [Pos(15)]
    public List<Loop_N9_855_2> N9Loop {
        get;
        set;
    }
    /// <summary>
    /// Loop for Name
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(16)]
    public List<Loop_N1_855_3> N1Loop {
        get;
        set;
    }
}

/// <summary>
/// Purchase Order Acknowledgment
/// </summary>
[Serializable()]
[DataContract()]
[Message("X12", "004010", "855")]
public class TS855 : EdiMessage
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
    /// Beginning Segment for Purchase Order Acknowledgment
    /// </summary>
    [DataMember]
    [Required]
    [Pos(2)]
    public BAK BAK {
        get;
        set;
    }
    /// <summary>
    /// Currency
    /// </summary>
    [DataMember]
    [Pos(3)]
    public CUR CUR {
        get;
        set;
    }
    /// <summary>
    /// Reference Identification
    /// </summary>
    [DataMember]
    [Pos(4)]
    public List<REF> REF {
        get;
        set;
    }
    /// <summary>
    /// Administrative Communications Contact
    /// </summary>
    [DataMember]
    [ListCount(3)]
    [Pos(5)]
    public List<PER> PER {
        get;
        set;
    }
    /// <summary>
    /// Tax Reference
    /// </summary>
    [DataMember]
    [Pos(6)]
    public List<TAX> TAX {
        get;
        set;
    }
    /// <summary>
    /// F.O.B. Related Instructions
    /// </summary>
    [DataMember]
    [Pos(7)]
    public List<FOB> FOB {
        get;
        set;
    }
    /// <summary>
    /// Pricing Information
    /// </summary>
    [DataMember]
    [Pos(8)]
    public List<CTP> CTP {
        get;
        set;
    }
    /// <summary>
    /// Period Amount
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(9)]
    public List<PAM> PAM {
        get;
        set;
    }
    /// <summary>
    /// Sales Requirements
    /// </summary>
    [DataMember]
    [Pos(10)]
    public CSH CSH {
        get;
        set;
    }
    /// <summary>
    /// Loop for Service, Promotion, Allowance, or Charge Information
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(11)]
    public List<Loop_SAC_855> SACLoop {
        get;
        set;
    }
    /// <summary>
    /// Terms of Sale/Deferred Terms of Sale
    /// </summary>
    [DataMember]
    [ListCount(5)]
    [Pos(12)]
    public List<ITD> ITD {
        get;
        set;
    }
    /// <summary>
    /// Discount Detail
    /// </summary>
    [DataMember]
    [ListCount(20)]
    [Pos(13)]
    public List<DIS> DIS {
        get;
        set;
    }
    /// <summary>
    /// Installment Information
    /// </summary>
    [DataMember]
    [Pos(14)]
    public INC INC {
        get;
        set;
    }
    /// <summary>
    /// Date/Time Reference
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(15)]
    public List<DTM> DTM {
        get;
        set;
    }
    /// <summary>
    /// Lead Time
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(16)]
    public List<LDT> LDT {
        get;
        set;
    }
    /// <summary>
    /// Item Identification
    /// </summary>
    [DataMember]
    [ListCount(5)]
    [Pos(17)]
    public List<LIN> LIN {
        get;
        set;
    }
    /// <summary>
    /// Service Characteristic Identification
    /// </summary>
    [DataMember]
    [Pos(18)]
    public List<SI> SI {
        get;
        set;
    }
    /// <summary>
    /// Product/Item Description
    /// </summary>
    [DataMember]
    [ListCount(200)]
    [Pos(19)]
    public List<PID> PID {
        get;
        set;
    }
    /// <summary>
    /// Measurements
    /// </summary>
    [DataMember]
    [ListCount(40)]
    [Pos(20)]
    public List<MEA> MEA {
        get;
        set;
    }
    /// <summary>
    /// Paperwork
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(21)]
    public List<PWK> PWK {
        get;
        set;
    }
    /// <summary>
    /// Marking, Packaging, Loading
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(22)]
    public List<PKG> PKG {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Quantity and Weight)
    /// </summary>
    [DataMember]
    [ListCount(2)]
    [Pos(23)]
    public List<TD1> TD1 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Routing Sequence/Transit Time)
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(24)]
    public List<TD5> TD5 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Equipment)
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(25)]
    public List<TD3> TD3 {
        get;
        set;
    }
    /// <summary>
    /// Carrier Details (Special Handling, or Hazardous Materials, or Both)
    /// </summary>
    [DataMember]
    [ListCount(5)]
    [Pos(26)]
    public List<TD4> TD4 {
        get;
        set;
    }
    /// <summary>
    /// Marks and Numbers
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(27)]
    public List<MAN> MAN {
        get;
        set;
    }
    /// <summary>
    /// Tax Information
    /// </summary>
    [DataMember]
    [Pos(28)]
    public List<TXI> TXI {
        get;
        set;
    }
    /// <summary>
    /// Restrictions/Conditions
    /// </summary>
    [DataMember]
    [Pos(29)]
    public List<CTB> CTB {
        get;
        set;
    }
    /// <summary>
    /// Loop for Reference Identification
    /// </summary>
    [DataMember]
    [ListCount(1000)]
    [Pos(30)]
    public List<Loop_N9_855> N9Loop {
        get;
        set;
    }
    /// <summary>
    /// Loop for Name
    /// </summary>
    [DataMember]
    [ListCount(200)]
    [Pos(31)]
    public List<Loop_N1_855> N1Loop {
        get;
        set;
    }
    /// <summary>
    /// Loop for Advertising Demographic Information
    /// </summary>
    [DataMember]
    [Pos(32)]
    public List<Loop_ADV_855> ADVLoop {
        get;
        set;
    }
    /// <summary>
    /// Loop for Baseline Item Data
    /// </summary>
    [DataMember]
    [ListCount(100000)]
    [Pos(33)]
    public List<Loop_PO1_855> PO1Loop {
        get;
        set;
    }
    /// <summary>
    /// Loop for Transaction Totals
    /// </summary>
    [DataMember]
    [Pos(34)]
    public Loop_CTT_855 CTTLoop {
        get;
        set;
    }
    /// <summary>
    /// Transaction Set Trailer
    /// </summary>
    [DataMember]
    [Pos(35)]
    public SE SE {
        get;
        set;
    }
}
}
