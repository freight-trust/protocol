/* (C) 2020 - FreightTrust and Clearing Corporation
 * SPDX: MPL-2.0
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

namespace FreightTrust.EDI.X12004010 {

  /// <summary>
  /// Loop for Type of Financial Accounting Data
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Group(typeof(FA1))]
  public class Loop_FA1_810 {

    /// <summary>
    /// Type of Financial Accounting Data
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public FA1 FA1 {
      get;
      set;
    }
    /// <summary>
    /// Accounting Data
    /// </summary>
    [DataMember]
    [Required]
    [Pos(2)]
    public List<FA2> FA2 {
      get;
      set;
    }
  }

  /// <summary>
  /// Loop for Invoice Shipment Summary
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Group(typeof(ISS))]
  public class Loop_ISS_810 {

    /// <summary>
    /// Invoice Shipment Summary
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public ISS ISS {
      get;
      set;
    }
    /// <summary>
    /// Product/Item Description
    /// </summary>
    [DataMember]
    [Pos(2)]
    public PID PID {
      get;
      set;
    }
  }

  /// <summary>
  /// Loop for Baseline Item Data (Invoice)
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Group(typeof(IT1))]
  public class Loop_IT1_810 {

    /// <summary>
    /// Baseline Item Data (Invoice)
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public IT1 IT1 {
      get;
      set;
    }
    /// <summary>
    /// Conditions Indicator
    /// </summary>
    [DataMember]
    [Pos(2)]
    public CRC CRC {
      get;
      set;
    }
    /// <summary>
    /// Quantity
    /// </summary>
    [DataMember]
    [ListCount(5)]
    [Pos(3)]
    public List<QTY> QTY {
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
    /// Additional Item Data
    /// </summary>
    [DataMember]
    [ListCount(5)]
    [Pos(5)]
    public List<IT3> IT3 {
      get;
      set;
    }
    /// <summary>
    /// Tax Information
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(6)]
    public List<TXI> TXI {
      get;
      set;
    }
    /// <summary>
    /// Pricing Information
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(7)]
    public List<CTP> CTP {
      get;
      set;
    }
    /// <summary>
    /// Period Amount
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(8)]
    public List<PAM> PAM {
      get;
      set;
    }
    /// <summary>
    /// Measurements
    /// </summary>
    [DataMember]
    [ListCount(40)]
    [Pos(9)]
    public List<MEA> MEA {
      get;
      set;
    }
    /// <summary>
    /// Loop for Product/Item Description
    /// </summary>
    [DataMember]
    [ListCount(1000)]
    [Pos(10)]
    public List<Loop_PID_810> PIDLoop {
      get;
      set;
    }
    /// <summary>
    /// Paperwork
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(11)]
    public List<PWK> PWK {
      get;
      set;
    }
    /// <summary>
    /// Marking, Packaging, Loading
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(12)]
    public List<PKG> PKG {
      get;
      set;
    }
    /// <summary>
    /// Item Physical Details
    /// </summary>
    [DataMember]
    [Pos(13)]
    public PO4 PO4 {
      get;
      set;
    }
    /// <summary>
    /// Terms of Sale/Deferred Terms of Sale
    /// </summary>
    [DataMember]
    [ListCount(2)]
    [Pos(14)]
    public List<ITD> ITD {
      get;
      set;
    }
    /// <summary>
    /// Reference Identification
    /// </summary>
    [DataMember]
    [Pos(15)]
    public List<REF> REF {
      get;
      set;
    }
    /// <summary>
    /// Yes/No Question
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(16)]
    public List<YNQ> YNQ {
      get;
      set;
    }
    /// <summary>
    /// Administrative Communications Contact
    /// </summary>
    [DataMember]
    [ListCount(5)]
    [Pos(17)]
    public List<PER> PER {
      get;
      set;
    }
    /// <summary>
    /// Destination Quantity
    /// </summary>
    [DataMember]
    [ListCount(500)]
    [Pos(18)]
    public List<SDQ> SDQ {
      get;
      set;
    }
    /// <summary>
    /// Date/Time Reference
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(19)]
    public List<DTM> DTM {
      get;
      set;
    }
    /// <summary>
    /// Carrier Detail
    /// </summary>
    [DataMember]
    [Pos(20)]
    public List<CAD> CAD {
      get;
      set;
    }
    /// <summary>
    /// Tariff Reference
    /// </summary>
    [DataMember]
    [Pos(21)]
    public List<L7> L7 {
      get;
      set;
    }
    /// <summary>
    /// Requested Service Schedule
    /// </summary>
    [DataMember]
    [Pos(22)]
    public SR SR {
      get;
      set;
    }
    /// <summary>
    /// Loop for Service, Promotion, Allowance, or Charge Information
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(23)]
    public List<Loop_SAC_810> SACLoop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Subline Item Detail
    /// </summary>
    [DataMember]
    [ListCount(1000)]
    [Pos(24)]
    public List<Loop_SLN_810> SLNLoop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Name
    /// </summary>
    [DataMember]
    [ListCount(200)]
    [Pos(25)]
    public List<Loop_N1_810> N1Loop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Code Source Information
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(26)]
    public List<Loop_LM_810> LMLoop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Vessel Identification
    /// </summary>
    [DataMember]
    [Pos(27)]
    public List<Loop_V1_810> V1Loop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Type of Financial Accounting Data
    /// </summary>
    [DataMember]
    [Pos(28)]
    public List<Loop_FA1_810> FA1Loop {
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
  public class Loop_LM_810 {

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
  public class Loop_N1_810 {

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
    /// Demographic Information
    /// </summary>
    [DataMember]
    [Pos(7)]
    public DMG DMG {
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
  public class Loop_N9_810 {

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
    /// Message Text
    /// </summary>
    [DataMember]
    [Required]
    [ListCount(10)]
    [Pos(2)]
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
  public class Loop_PID_810 {

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
  /// Loop for Service, Promotion, Allowance, or Charge Information
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Group(typeof(SAC))]
  public class Loop_SAC_810 {

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
    /// Tax Information
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(2)]
    public List<TXI> TXI {
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
  public class Loop_SLN_810 {

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
    /// Date/Time Reference
    /// </summary>
    [DataMember]
    [Pos(2)]
    public DTM DTM {
      get;
      set;
    }
    /// <summary>
    /// Reference Identification
    /// </summary>
    [DataMember]
    [Pos(3)]
    public List<REF> REF {
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
    /// Service, Promotion, Allowance, or Charge Information
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(5)]
    public List<SAC> SAC {
      get;
      set;
    }
    /// <summary>
    /// Commodity
    /// </summary>
    [DataMember]
    [ListCount(2)]
    [Pos(6)]
    public List<TC2> TC2 {
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
  }

  /// <summary>
  /// Loop for Vessel Identification
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Group(typeof(V1))]
  public class Loop_V1_810 {

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
  /// Invoice
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Message("X12", "004010", "810")]
  public class TS810 : EdiMessage {

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
    /// Beginning Segment for Invoice
    /// </summary>
    [DataMember]
    [Required]
    [Pos(2)]
    public BIG BIG {
      get;
      set;
    }
    /// <summary>
    /// Note/Special Instruction
    /// </summary>
    [DataMember]
    [ListCount(100)]
    [Pos(3)]
    public List<NTE> NTE {
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
    /// Yes/No Question
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(6)]
    public List<YNQ> YNQ {
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
    /// Loop for Name
    /// </summary>
    [DataMember]
    [ListCount(200)]
    [Pos(8)]
    public List<Loop_N1_810> N1Loop {
      get;
      set;
    }
    /// <summary>
    /// Terms of Sale/Deferred Terms of Sale
    /// </summary>
    [DataMember]
    [Pos(9)]
    public List<ITD> ITD {
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
    /// F.O.B. Related Instructions
    /// </summary>
    [DataMember]
    [Pos(11)]
    public FOB FOB {
      get;
      set;
    }
    /// <summary>
    /// Product/Item Description
    /// </summary>
    [DataMember]
    [ListCount(200)]
    [Pos(12)]
    public List<PID> PID {
      get;
      set;
    }
    /// <summary>
    /// Measurements
    /// </summary>
    [DataMember]
    [ListCount(40)]
    [Pos(13)]
    public List<MEA> MEA {
      get;
      set;
    }
    /// <summary>
    /// Paperwork
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(14)]
    public List<PWK> PWK {
      get;
      set;
    }
    /// <summary>
    /// Marking, Packaging, Loading
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(15)]
    public List<PKG> PKG {
      get;
      set;
    }
    /// <summary>
    /// Tariff Reference
    /// </summary>
    [DataMember]
    [Pos(16)]
    public L7 L7 {
      get;
      set;
    }
    /// <summary>
    /// Balance Detail
    /// </summary>
    [DataMember]
    [Pos(17)]
    public List<BAL> BAL {
      get;
      set;
    }
    /// <summary>
    /// Installment Information
    /// </summary>
    [DataMember]
    [Pos(18)]
    public INC INC {
      get;
      set;
    }
    /// <summary>
    /// Period Amount
    /// </summary>
    [DataMember]
    [Pos(19)]
    public List<PAM> PAM {
      get;
      set;
    }
    /// <summary>
    /// Loop for Code Source Information
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(20)]
    public List<Loop_LM_810> LMLoop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Reference Identification
    /// </summary>
    [DataMember]
    [Pos(21)]
    public Loop_N9_810 N9Loop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Vessel Identification
    /// </summary>
    [DataMember]
    [Pos(22)]
    public List<Loop_V1_810> V1Loop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Type of Financial Accounting Data
    /// </summary>
    [DataMember]
    [Pos(23)]
    public List<Loop_FA1_810> FA1Loop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Baseline Item Data (Invoice)
    /// </summary>
    [DataMember]
    [ListCount(200000)]
    [Pos(24)]
    public List<Loop_IT1_810> IT1Loop {
      get;
      set;
    }
    /// <summary>
    /// Total Monetary Value Summary
    /// </summary>
    [DataMember]
    [Required]
    [Pos(25)]
    public TDS TDS {
      get;
      set;
    }
    /// <summary>
    /// Tax Information
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(26)]
    public List<TXI> TXI {
      get;
      set;
    }
    /// <summary>
    /// Carrier Detail
    /// </summary>
    [DataMember]
    [Pos(27)]
    public CAD CAD {
      get;
      set;
    }
    /// <summary>
    /// Monetary Amount
    /// </summary>
    [DataMember]
    [Pos(28)]
    public List<AMT> AMT {
      get;
      set;
    }
    /// <summary>
    /// Loop for Service, Promotion, Allowance, or Charge Information
    /// </summary>
    [DataMember]
    [ListCount(25)]
    [Pos(29)]
    public List<Loop_SAC_810> SACLoop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Invoice Shipment Summary
    /// </summary>
    [DataMember]
    [Pos(30)]
    public List<Loop_ISS_810> ISSLoop {
      get;
      set;
    }
    /// <summary>
    /// Transaction Totals
    /// </summary>
    [DataMember]
    [Pos(31)]
    public CTT CTT {
      get;
      set;
    }
    /// <summary>
    /// Transaction Set Trailer
    /// </summary>
    [DataMember]
    [Pos(32)]
    public SE SE {
      get;
      set;
    }
  }
}
