/* (C) 2020 - FreightTrust and Clearing Corporation
 * SPDX: MPL-2.0
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
 
namespace FreightTrust.EDI.X12004010
{

    /// <summary>
    /// Loop for Bill of Lading Line Item Number
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(AT1))]
    public class Loop_AT1_211
    {
        
        /// <summary>
        /// Bill of Lading Line Item Number
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public AT1 AT1 { get; set; }
        /// <summary>
        /// Business Instructions and Reference Number
        /// </summary>
        [DataMember]
        [ListCount(100)]
        [Pos(2)]
        public List<L11> L11 { get; set; }
        /// <summary>
        /// Bill of Lading Rates and Charges
        /// </summary>
        [DataMember]
        [Pos(3)]
        public AT3 AT3 { get; set; }
        /// <summary>
        /// Bill of Lading Description
        /// </summary>
        [DataMember]
        [ListCount(99)]
        [Pos(4)]
        public List<AT4> AT4 { get; set; }
        /// <summary>
        /// Loop for Bill of Lading Line Item Detail
        /// </summary>
        [DataMember]
        [Pos(5)]
        public Loop_AT2_211 AT2Loop { get; set; }
        /// <summary>
        /// Loop for Assigned Number
        /// </summary>
        [DataMember]
        [ListCount(999999)]
        [Pos(6)]
        public List<Loop_LX_211> LXLoop { get; set; }
        /// <summary>
        /// Loop for Contact
        /// </summary>
        [DataMember]
        [ListCount(2)]
        [Pos(7)]
        public List<Loop_G61_211> G61Loop { get; set; }
    }
    
    /// <summary>
    /// Loop for Bill of Lading Line Item Detail
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(AT2))]
    public class Loop_AT2_211
    {
        
        /// <summary>
        /// Bill of Lading Line Item Detail
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public AT2 AT2 { get; set; }
        /// <summary>
        /// Marks and Numbers
        /// </summary>
        [DataMember]
        [ListCount(999999)]
        [Pos(2)]
        public List<MAN> MAN { get; set; }
        /// <summary>
        /// Shipment Purchase Order Detail
        /// </summary>
        [DataMember]
        [ListCount(999999)]
        [Pos(3)]
        public List<SPO> SPO { get; set; }
    }
    
    /// <summary>
    /// Loop for Contact
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(G61))]
    public class Loop_G61_211
    {
        
        /// <summary>
        /// Contact
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public G61 G61 { get; set; }
        /// <summary>
        /// Business Instructions and Reference Number
        /// </summary>
        [DataMember]
        [ListCount(5)]
        [Pos(2)]
        public List<L11> L11 { get; set; }
        /// <summary>
        /// Hazardous Certification
        /// </summary>
        [DataMember]
        [ListCount(6)]
        [Pos(3)]
        public List<LH6> LH6 { get; set; }
        /// <summary>
        /// Loop for Hazardous Identification Information
        /// </summary>
        [DataMember]
        [Required]
        [ListCount(25)]
        [Pos(4)]
        public List<Loop_LH1_211> LH1Loop { get; set; }
    }
    
    /// <summary>
    /// Loop for Hazardous Identification Information
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(LH1))]
    public class Loop_LH1_211
    {
        
        /// <summary>
        /// Hazardous Identification Information
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public LH1 LH1 { get; set; }
        /// <summary>
        /// Hazardous Classification Information
        /// </summary>
        [DataMember]
        [ListCount(4)]
        [Pos(2)]
        public List<LH2> LH2 { get; set; }
        /// <summary>
        /// Hazardous Material Shipping Name
        /// </summary>
        [DataMember]
        [ListCount(10)]
        [Pos(3)]
        public List<LH3> LH3 { get; set; }
        /// <summary>
        /// Freeform Hazardous Material Information
        /// </summary>
        [DataMember]
        [ListCount(20)]
        [Pos(4)]
        public List<LFH> LFH { get; set; }
        /// <summary>
        /// EPA Required Data
        /// </summary>
        [DataMember]
        [ListCount(3)]
        [Pos(5)]
        public List<LEP> LEP { get; set; }
        /// <summary>
        /// Canadian Dangerous Requirements
        /// </summary>
        [DataMember]
        [Pos(6)]
        public LH4 LH4 { get; set; }
        /// <summary>
        /// Transborder Hazardous Requirements
        /// </summary>
        [DataMember]
        [ListCount(3)]
        [Pos(7)]
        public List<LHT> LHT { get; set; }
        /// <summary>
        /// Business Instructions and Reference Number
        /// </summary>
        [DataMember]
        [ListCount(5)]
        [Pos(8)]
        public List<L11> L11 { get; set; }
    }
    
    /// <summary>
    /// Loop for Assigned Number
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(LX))]
    public class Loop_LX_211
    {
        
        /// <summary>
        /// Assigned Number
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public LX LX { get; set; }
        /// <summary>
        /// Marks and Numbers
        /// </summary>
        [DataMember]
        [ListCount(999999)]
        [Pos(2)]
        public List<MAN> MAN { get; set; }
        /// <summary>
        /// Shipment Purchase Order Detail
        /// </summary>
        [DataMember]
        [ListCount(999999)]
        [Pos(3)]
        public List<SPO> SPO { get; set; }
    }
    
    /// <summary>
    /// Loop for Name
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(N1))]
    public class Loop_N1_211
    {
        
        /// <summary>
        /// Name
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public N1 N1 { get; set; }
        /// <summary>
        /// Additional Name Information
        /// </summary>
        [DataMember]
        [Pos(2)]
        public N2 N2 { get; set; }
        /// <summary>
        /// Address Information
        /// </summary>
        [DataMember]
        [ListCount(2)]
        [Pos(3)]
        public List<N3> N3 { get; set; }
        /// <summary>
        /// Geographic Location
        /// </summary>
        [DataMember]
        [Pos(4)]
        public N4 N4 { get; set; }
        /// <summary>
        /// Contact
        /// </summary>
        [DataMember]
        [ListCount(3)]
        [Pos(5)]
        public List<G61> G61 { get; set; }
    }
    
    /// <summary>
    /// Motor Carrier Bill of Lading
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Message("X12", "004010", "211")]
    public class TS211 : EdiMessage
    {
        
        /// <summary>
        /// Transaction Set Header
        /// </summary>
        [DataMember]
        [Pos(1)]
        public ST ST { get; set; }
        /// <summary>
        /// Beginning Segment for the Motor Carrier Bill of Lading
        /// </summary>
        [DataMember]
        [Required]
        [Pos(2)]
        public BOL BOL { get; set; }
        /// <summary>
        /// Set Purpose
        /// </summary>
        [DataMember]
        [Required]
        [Pos(3)]
        public B2A B2A { get; set; }
        /// <summary>
        /// Interline Information
        /// </summary>
        [DataMember]
        [ListCount(12)]
        [Pos(4)]
        public List<MS3> MS3 { get; set; }
        /// <summary>
        /// Equipment or Container Owner and Type
        /// </summary>
        [DataMember]
        [Pos(5)]
        public MS2 MS2 { get; set; }
        /// <summary>
        /// Business Instructions and Reference Number
        /// </summary>
        [DataMember]
        [ListCount(100)]
        [Pos(6)]
        public List<L11> L11 { get; set; }
        /// <summary>
        /// Date/Time
        /// </summary>
        [DataMember]
        [ListCount(6)]
        [Pos(7)]
        public List<G62> G62 { get; set; }
        /// <summary>
        /// Bill of Lading Handling Requirements
        /// </summary>
        [DataMember]
        [ListCount(50)]
        [Pos(8)]
        public List<AT5> AT5 { get; set; }
        /// <summary>
        /// Remarks
        /// </summary>
        [DataMember]
        [ListCount(10)]
        [Pos(9)]
        public List<K1> K1 { get; set; }
        /// <summary>
        /// Loop for Name
        /// </summary>
        [DataMember]
        [ListCount(10)]
        [Pos(10)]
        public List<Loop_N1_211> N1Loop { get; set; }
        /// <summary>
        /// Loop for Bill of Lading Line Item Number
        /// </summary>
        [DataMember]
        [Required]
        [ListCount(9999)]
        [Pos(11)]
        public List<Loop_AT1_211> AT1Loop { get; set; }
        /// <summary>
        /// Transaction Set Trailer
        /// </summary>
        [DataMember]
        [Pos(12)]
        public SE SE { get; set; }
    }
}
