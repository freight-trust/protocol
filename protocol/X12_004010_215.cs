/* (C) 2020 - FreightTrust and Clearing Corporation
 * SPDX: MPL-2.0
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

namespace FreightTrust.EDI.X12004010
{


/// <summary>
/// Loop for International Manifest Information
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(AT6))]
public class Loop_AT6_215
{

    /// <summary>
    /// International Manifest Information
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public AT6 AT6 {
        get;
        set;
    }
    /// <summary>
    /// Shipment Rates and Charges
    /// </summary>
    [DataMember]
    [Pos(2)]
    public MS5 MS5 {
        get;
        set;
    }
    /// <summary>
    /// Baseline Item Data (Invoice)
    /// </summary>
    [DataMember]
    [Pos(3)]
    public IT1 IT1 {
        get;
        set;
    }
    /// <summary>
    /// Charge
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(4)]
    public List<CGS> CGS {
        get;
        set;
    }
    /// <summary>
    /// Business Instructions and Reference Number
    /// </summary>
    [DataMember]
    [Pos(5)]
    public L11 L11 {
        get;
        set;
    }
    /// <summary>
    /// Product/Item Description
    /// </summary>
    [DataMember]
    [ListCount(1000)]
    [Pos(6)]
    public List<PID> PID {
        get;
        set;
    }
    /// <summary>
    /// Tax Information
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(7)]
    public List<TXI> TXI {
        get;
        set;
    }
    /// <summary>
    /// Shipment or Package Dimensions
    /// </summary>
    [DataMember]
    [Pos(8)]
    public MS4 MS4 {
        get;
        set;
    }
    /// <summary>
    /// Description, Marks and Numbers
    /// </summary>
    [DataMember]
    [Pos(9)]
    public L5 L5 {
        get;
        set;
    }
    /// <summary>
    /// Loop for Subline Item Detail
    /// </summary>
    [DataMember]
    [ListCount(999999)]
    [Pos(10)]
    public List<Loop_SLN_215> SLNLoop {
        get;
        set;
    }
}

/// <summary>
/// Loop for Carton (Package) Detail
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(CD3))]
public class Loop_CD3_215
{

    /// <summary>
    /// Carton (Package) Detail
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public CD3 CD3 {
        get;
        set;
    }
    /// <summary>
    /// Marks and Numbers
    /// </summary>
    [DataMember]
    [ListCount(100)]
    [Pos(2)]
    public List<MAN> MAN {
        get;
        set;
    }
    /// <summary>
    /// Shipment or Package Dimensions
    /// </summary>
    [DataMember]
    [Pos(3)]
    public MS4 MS4 {
        get;
        set;
    }
    /// <summary>
    /// Business Instructions and Reference Number
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(4)]
    public List<L11> L11 {
        get;
        set;
    }
    /// <summary>
    /// Description, Marks and Numbers
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(5)]
    public List<L5> L5 {
        get;
        set;
    }
    /// <summary>
    /// Ancillary Charges
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(6)]
    public List<ACS> ACS {
        get;
        set;
    }
    /// <summary>
    /// Note/Special Instruction
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(7)]
    public List<NTE> NTE {
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
public class Loop_N1_215
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
    [Pos(2)]
    public N2 N2 {
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
    [ListCount(2)]
    [Pos(4)]
    public List<N4> N4 {
        get;
        set;
    }
    /// <summary>
    /// Business Instructions and Reference Number
    /// </summary>
    [DataMember]
    [Required]
    [ListCount(10)]
    [Pos(5)]
    public List<L11> L11 {
        get;
        set;
    }
    /// <summary>
    /// Administrative Communications Contact
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(6)]
    public List<PER> PER {
        get;
        set;
    }
    /// <summary>
    /// Export License
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(7)]
    public List<X1> X1 {
        get;
        set;
    }
    /// <summary>
    /// Import License
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(8)]
    public List<X2> X2 {
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
public class Loop_N1_215_2
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
    [Pos(2)]
    public N2 N2 {
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
    /// Business Instructions and Reference Number
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(5)]
    public List<L11> L11 {
        get;
        set;
    }
    /// <summary>
    /// Contact
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(6)]
    public List<G61> G61 {
        get;
        set;
    }
    /// <summary>
    /// Export License
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(7)]
    public List<X1> X1 {
        get;
        set;
    }
    /// <summary>
    /// Import License
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(8)]
    public List<X2> X2 {
        get;
        set;
    }
    /// <summary>
    /// Port or Terminal
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(9)]
    public List<R4> R4 {
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
public class Loop_SLN_215
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
    /// Business Instructions and Reference Number
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(2)]
    public List<L11> L11 {
        get;
        set;
    }
    /// <summary>
    /// Product/Item Description
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(3)]
    public List<PID> PID {
        get;
        set;
    }
    /// <summary>
    /// Commodity
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(4)]
    public List<TC2> TC2 {
        get;
        set;
    }
    /// <summary>
    /// Tax Information
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(5)]
    public List<TXI> TXI {
        get;
        set;
    }
    /// <summary>
    /// Note/Special Instruction
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(6)]
    public List<NTE> NTE {
        get;
        set;
    }
}

/// <summary>
/// Loop for Consolidated Shipment Manifest Data
/// </summary>
[Serializable()]
[DataContract()]
[Group(typeof(SMD))]
public class Loop_SMD_215
{

    /// <summary>
    /// Consolidated Shipment Manifest Data
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public SMD SMD {
        get;
        set;
    }
    /// <summary>
    /// Business Instructions and Reference Number
    /// </summary>
    [DataMember]
    [ListCount(20)]
    [Pos(2)]
    public List<L11> L11 {
        get;
        set;
    }
    /// <summary>
    /// Description, Marks and Numbers
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(3)]
    public List<L5> L5 {
        get;
        set;
    }
    /// <summary>
    /// Shipment Quantity and Weight
    /// </summary>
    [DataMember]
    [Pos(4)]
    public MS6 MS6 {
        get;
        set;
    }
    /// <summary>
    /// Shipment Rates and Charges
    /// </summary>
    [DataMember]
    [ListCount(5)]
    [Pos(5)]
    public List<MS5> MS5 {
        get;
        set;
    }
    /// <summary>
    /// Shipment or Package Dimensions
    /// </summary>
    [DataMember]
    [Pos(6)]
    public MS4 MS4 {
        get;
        set;
    }
    /// <summary>
    /// Ancillary Charges
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(7)]
    public List<ACS> ACS {
        get;
        set;
    }
    /// <summary>
    /// Note/Special Instruction
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(8)]
    public List<NTE> NTE {
        get;
        set;
    }
    /// <summary>
    /// Loop for Name
    /// </summary>
    [DataMember]
    [Required]
    [ListCount(10)]
    [Pos(9)]
    public List<Loop_N1_215_2> N1Loop {
        get;
        set;
    }
    /// <summary>
    /// Loop for Carton (Package) Detail
    /// </summary>
    [DataMember]
    [Required]
    [ListCount(999999)]
    [Pos(10)]
    public List<Loop_CD3_215> CD3Loop {
        get;
        set;
    }
    /// <summary>
    /// Loop for International Manifest Information
    /// </summary>
    [DataMember]
    [ListCount(999999)]
    [Pos(11)]
    public List<Loop_AT6_215> AT6Loop {
        get;
        set;
    }
}

/// <summary>
/// Motor Carrier Pick-up Manifest
/// </summary>
[Serializable()]
[DataContract()]
[Message("X12", "004010", "215")]
public class TS215 : EdiMessage
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
    /// Set Purpose
    /// </summary>
    [DataMember]
    [Required]
    [Pos(2)]
    public B2A B2A {
        get;
        set;
    }
    /// <summary>
    /// Transportation Carrier Identification
    /// </summary>
    [DataMember]
    [Pos(3)]
    public BLR BLR {
        get;
        set;
    }
    /// <summary>
    /// Currency
    /// </summary>
    [DataMember]
    [Pos(4)]
    public C3 C3 {
        get;
        set;
    }
    /// <summary>
    /// Business Instructions and Reference Number
    /// </summary>
    [DataMember]
    [Required]
    [ListCount(10)]
    [Pos(5)]
    public List<L11> L11 {
        get;
        set;
    }
    /// <summary>
    /// Date/Time
    /// </summary>
    [DataMember]
    [ListCount(6)]
    [Pos(6)]
    public List<G62> G62 {
        get;
        set;
    }
    /// <summary>
    /// Loop for Name
    /// </summary>
    [DataMember]
    [Required]
    [Pos(7)]
    public Loop_N1_215 N1Loop {
        get;
        set;
    }
    /// <summary>
    /// Loop for Consolidated Shipment Manifest Data
    /// </summary>
    [DataMember]
    [Required]
    [ListCount(999999)]
    [Pos(8)]
    public List<Loop_SMD_215> SMDLoop {
        get;
        set;
    }
    /// <summary>
    /// Transaction Set Trailer
    /// </summary>
    [DataMember]
    [Pos(9)]
    public SE SE {
        get;
        set;
    }
}
}
