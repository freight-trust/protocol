/* (C) 2020 - FreightTrust and Clearing Corporation
 * SPDX: MPL-2.0
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

namespace FreightTrust.EDI.X12004010 {

  /// <summary>
  /// Loop for Carton (Package) Detail
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Group(typeof(CD3))]
  public class Loop_CD3_210 {

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
    /// Reference Identification
    /// </summary>
    [DataMember]
    [ListCount(20)]
    [Pos(2)]
    public List<N9> N9 {
      get;
      set;
    }
    /// <summary>
    /// Special Services
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(3)]
    public List<H6> H6 {
      get;
      set;
    }
    /// <summary>
    /// Charge Detail
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(4)]
    public List<L9> L9 {
      get;
      set;
    }
    /// <summary>
    /// Proof of Delivery
    /// </summary>
    [DataMember]
    [Pos(5)]
    public POD POD {
      get;
      set;
    }
    /// <summary>
    /// Date/Time
    /// </summary>
    [DataMember]
    [Pos(6)]
    public G62 G62 {
      get;
      set;
    }
  }

  /// <summary>
  /// Loop for Assigned Number
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Group(typeof(LX))]
  public class Loop_LX_210 {

    /// <summary>
    /// Assigned Number
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public LX LX {
      get;
      set;
    }
    /// <summary>
    /// Reference Identification
    /// </summary>
    [DataMember]
    [ListCount(5)]
    [Pos(2)]
    public List<N9> N9 {
      get;
      set;
    }
    /// <summary>
    /// Proof of Delivery
    /// </summary>
    [DataMember]
    [Pos(3)]
    public POD POD {
      get;
      set;
    }
    /// <summary>
    /// Description, Marks and Numbers
    /// </summary>
    [DataMember]
    [ListCount(30)]
    [Pos(4)]
    public List<L5> L5 {
      get;
      set;
    }
    /// <summary>
    /// Hazardous Material
    /// </summary>
    [DataMember]
    [ListCount(3)]
    [Pos(5)]
    public List<H1> H1 {
      get;
      set;
    }
    /// <summary>
    /// Additional Hazardous Material Description
    /// </summary>
    [DataMember]
    [ListCount(2)]
    [Pos(6)]
    public List<H2> H2 {
      get;
      set;
    }
    /// <summary>
    /// Line Item - Quantity and Weight
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(7)]
    public List<L0> L0 {
      get;
      set;
    }
    /// <summary>
    /// Rate and Charges
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(8)]
    public List<L1> L1 {
      get;
      set;
    }
    /// <summary>
    /// Measurement
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(9)]
    public List<L4> L4 {
      get;
      set;
    }
    /// <summary>
    /// Tariff Reference
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(10)]
    public List<L7> L7 {
      get;
      set;
    }
    /// <summary>
    /// Remarks
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(11)]
    public List<K1> K1 {
      get;
      set;
    }
    /// <summary>
    /// Loop for Shipment Purchase Order Detail
    /// </summary>
    [DataMember]
    [ListCount(999999)]
    [Pos(12)]
    public List<Loop_SPO_210> SPOLoop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Name
    /// </summary>
    [DataMember]
    [ListCount(999999)]
    [Pos(13)]
    public List<Loop_N1_210_3> N1Loop {
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
  public class Loop_N1_210 {

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
    /// Reference Identification
    /// </summary>
    [DataMember]
    [ListCount(5)]
    [Pos(5)]
    public List<N9> N9 {
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
  public class Loop_N1_210_2 {

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
    /// Reference Identification
    /// </summary>
    [DataMember]
    [ListCount(5)]
    [Pos(5)]
    public List<N9> N9 {
      get;
      set;
    }
    /// <summary>
    /// Loop for Equipment Details
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(6)]
    public List<Loop_N7_210> N7Loop {
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
  public class Loop_N1_210_3 {

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
    /// Reference Identification
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(5)]
    public List<N9> N9 {
      get;
      set;
    }
    /// <summary>
    /// Loop for Carton (Package) Detail
    /// </summary>
    [DataMember]
    [ListCount(999999)]
    [Pos(6)]
    public List<Loop_CD3_210> CD3Loop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Shipment Purchase Order Detail
    /// </summary>
    [DataMember]
    [ListCount(999999)]
    [Pos(7)]
    public List<Loop_SPO_210> SPOLoop {
      get;
      set;
    }
  }

  /// <summary>
  /// Loop for Equipment Details
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Group(typeof(N7))]
  public class Loop_N7_210 {

    /// <summary>
    /// Equipment Details
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public N7 N7 {
      get;
      set;
    }
    /// <summary>
    /// Seal Numbers
    /// </summary>
    [DataMember]
    [ListCount(2)]
    [Pos(2)]
    public List<M7> M7 {
      get;
      set;
    }
  }

  /// <summary>
  /// Loop for Stop Off Details
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Group(typeof(S5))]
  public class Loop_S5_210 {

    /// <summary>
    /// Stop Off Details
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public S5 S5 {
      get;
      set;
    }
    /// <summary>
    /// Reference Identification
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(2)]
    public List<N9> N9 {
      get;
      set;
    }
    /// <summary>
    /// Date/Time
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(3)]
    public List<G62> G62 {
      get;
      set;
    }
    /// <summary>
    /// Special Handling Instructions
    /// </summary>
    [DataMember]
    [ListCount(6)]
    [Pos(4)]
    public List<H3> H3 {
      get;
      set;
    }
    /// <summary>
    /// Loop for Shipment Purchase Order Detail
    /// </summary>
    [DataMember]
    [ListCount(999999)]
    [Pos(5)]
    public List<Loop_SPO_210> SPOLoop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Name
    /// </summary>
    [DataMember]
    [ListCount(2)]
    [Pos(6)]
    public List<Loop_N1_210_2> N1Loop {
      get;
      set;
    }
  }

  /// <summary>
  /// Loop for Shipment Purchase Order Detail
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Group(typeof(SPO))]
  public class Loop_SPO_210 {

    /// <summary>
    /// Shipment Purchase Order Detail
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public SPO SPO {
      get;
      set;
    }
    /// <summary>
    /// Destination Quantity
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(2)]
    public List<SDQ> SDQ {
      get;
      set;
    }
  }

  /// <summary>
  /// Motor Carrier Freight Details and Invoice
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Message("X12", "004010", "210")]
  public class TS210 : EdiMessage {

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
    /// Beginning Segment for Carrier's Invoice
    /// </summary>
    [DataMember]
    [Required]
    [Pos(2)]
    public B3 B3 {
      get;
      set;
    }
    /// <summary>
    /// Bank ID
    /// </summary>
    [DataMember]
    [Pos(3)]
    public C2 C2 {
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
    /// Terms of Sale/Deferred Terms of Sale
    /// </summary>
    [DataMember]
    [Pos(5)]
    public ITD ITD {
      get;
      set;
    }
    /// <summary>
    /// Reference Identification
    /// </summary>
    [DataMember]
    [ListCount(300)]
    [Pos(6)]
    public List<N9> N9 {
      get;
      set;
    }
    /// <summary>
    /// Date/Time
    /// </summary>
    [DataMember]
    [ListCount(6)]
    [Pos(7)]
    public List<G62> G62 {
      get;
      set;
    }
    /// <summary>
    /// Route Information - Motor
    /// </summary>
    [DataMember]
    [ListCount(12)]
    [Pos(8)]
    public List<R3> R3 {
      get;
      set;
    }
    /// <summary>
    /// Special Handling Instructions
    /// </summary>
    [DataMember]
    [ListCount(6)]
    [Pos(9)]
    public List<H3> H3 {
      get;
      set;
    }
    /// <summary>
    /// Remarks
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(10)]
    public List<K1> K1 {
      get;
      set;
    }
    /// <summary>
    /// Loop for Name
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(11)]
    public List<Loop_N1_210> N1Loop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Equipment Details
    /// </summary>
    [DataMember]
    [ListCount(10)]
    [Pos(12)]
    public List<Loop_N7_210> N7Loop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Shipment Purchase Order Detail
    /// </summary>
    [DataMember]
    [ListCount(999999)]
    [Pos(13)]
    public List<Loop_SPO_210> SPOLoop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Stop Off Details
    /// </summary>
    [DataMember]
    [ListCount(999)]
    [Pos(14)]
    public List<Loop_S5_210> S5Loop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Assigned Number
    /// </summary>
    [DataMember]
    [ListCount(9999)]
    [Pos(15)]
    public List<Loop_LX_210> LXLoop {
      get;
      set;
    }
    /// <summary>
    /// Total Weight and Charges
    /// </summary>
    [DataMember]
    [Pos(16)]
    public L3 L3 {
      get;
      set;
    }
    /// <summary>
    /// Transaction Set Trailer
    /// </summary>
    [DataMember]
    [Pos(17)]
    public SE SE {
      get;
      set;
    }
  }
}
