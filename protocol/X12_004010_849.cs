/* (C) 2020 - FreightTrust and Clearing Corporation
 * SPDX: MPL-2.0
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
 
namespace FreightTrust.EDI.X12004010
{

    /// <summary>
    /// Loop for Contract Number Detail
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(CON))]
    public class Loop_CON_849
    {
        
        /// <summary>
        /// Contract Number Detail
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public CON CON { get; set; }
        /// <summary>
        /// Request Validation
        /// </summary>
        [DataMember]
        [ListCount(10)]
        [Pos(2)]
        public List<AAA> AAA { get; set; }
        /// <summary>
        /// Reference Identification
        /// </summary>
        [DataMember]
        [ListCount(12)]
        [Pos(3)]
        public List<REF> REF { get; set; }
        /// <summary>
        /// Administrative Communications Contact
        /// </summary>
        [DataMember]
        [ListCount(3)]
        [Pos(4)]
        public List<PER> PER { get; set; }
        /// <summary>
        /// Date/Time Reference
        /// </summary>
        [DataMember]
        [ListCount(10)]
        [Pos(5)]
        public List<DTM> DTM { get; set; }
        /// <summary>
        /// Loop for Name
        /// </summary>
        [DataMember]
        [ListCount(50)]
        [Pos(6)]
        public List<Loop_N1_849> N1Loop { get; set; }
        /// <summary>
        /// Loop for Product Adjustment Detail
        /// </summary>
        [DataMember]
        [ListCount(1000)]
        [Pos(7)]
        public List<Loop_PAD_849> PADLoop { get; set; }
    }
    
    /// <summary>
    /// Loop for Name
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(N1))]
    public class Loop_N1_849
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
        [ListCount(2)]
        [Pos(2)]
        public List<N2> N2 { get; set; }
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
        /// Reference Identification
        /// </summary>
        [DataMember]
        [ListCount(12)]
        [Pos(5)]
        public List<REF> REF { get; set; }
        /// <summary>
        /// Administrative Communications Contact
        /// </summary>
        [DataMember]
        [ListCount(3)]
        [Pos(6)]
        public List<PER> PER { get; set; }
    }
    
    /// <summary>
    /// Loop for Product Adjustment Detail
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(PAD))]
    public class Loop_PAD_849
    {
        
        /// <summary>
        /// Product Adjustment Detail
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public PAD PAD { get; set; }
        /// <summary>
        /// Item Identification
        /// </summary>
        [DataMember]
        [Pos(2)]
        public LIN LIN { get; set; }
        /// <summary>
        /// Request Validation
        /// </summary>
        [DataMember]
        [ListCount(10)]
        [Pos(3)]
        public List<AAA> AAA { get; set; }
        /// <summary>
        /// Product/Item Description
        /// </summary>
        [DataMember]
        [ListCount(200)]
        [Pos(4)]
        public List<PID> PID { get; set; }
        /// <summary>
        /// Measurements
        /// </summary>
        [DataMember]
        [ListCount(40)]
        [Pos(5)]
        public List<MEA> MEA { get; set; }
        /// <summary>
        /// Unit Detail
        /// </summary>
        [DataMember]
        [ListCount(5)]
        [Pos(6)]
        public List<UIT> UIT { get; set; }
        /// <summary>
        /// Quantity
        /// </summary>
        [DataMember]
        [ListCount(5)]
        [Pos(7)]
        public List<QTY> QTY { get; set; }
        /// <summary>
        /// Monetary Amount
        /// </summary>
        [DataMember]
        [ListCount(2)]
        [Pos(8)]
        public List<AMT> AMT { get; set; }
        /// <summary>
        /// Receiving Conditions
        /// </summary>
        [DataMember]
        [Pos(9)]
        public RCD RCD { get; set; }
        /// <summary>
        /// Reference Identification
        /// </summary>
        [DataMember]
        [ListCount(12)]
        [Pos(10)]
        public List<REF> REF { get; set; }
        /// <summary>
        /// Date/Time Reference
        /// </summary>
        [DataMember]
        [ListCount(10)]
        [Pos(11)]
        public List<DTM> DTM { get; set; }
        /// <summary>
        /// Currency
        /// </summary>
        [DataMember]
        [Pos(12)]
        public CUR CUR { get; set; }
        /// <summary>
        /// Special Services
        /// </summary>
        [DataMember]
        [Pos(13)]
        public SSS SSS { get; set; }
    }
    
    /// <summary>
    /// Response to Product Transfer Account Adjustment
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Message("X12", "004010", "849")]
    public class TS849 : EdiMessage
    {
        
        /// <summary>
        /// Transaction Set Header
        /// </summary>
        [DataMember]
        [Pos(1)]
        public ST ST { get; set; }
        /// <summary>
        /// Beginning Segment for Response to Product Transfer Account Adjustment
        /// </summary>
        [DataMember]
        [Required]
        [Pos(2)]
        public BRC BRC { get; set; }
        /// <summary>
        /// Currency
        /// </summary>
        [DataMember]
        [Pos(3)]
        public CUR CUR { get; set; }
        /// <summary>
        /// Request Validation
        /// </summary>
        [DataMember]
        [ListCount(10)]
        [Pos(4)]
        public List<AAA> AAA { get; set; }
        /// <summary>
        /// Note/Special Instruction
        /// </summary>
        [DataMember]
        [ListCount(10)]
        [Pos(5)]
        public List<NTE> NTE { get; set; }
        /// <summary>
        /// Reference Identification
        /// </summary>
        [DataMember]
        [ListCount(12)]
        [Pos(6)]
        public List<REF> REF { get; set; }
        /// <summary>
        /// Administrative Communications Contact
        /// </summary>
        [DataMember]
        [ListCount(3)]
        [Pos(7)]
        public List<PER> PER { get; set; }
        /// <summary>
        /// Date/Time Reference
        /// </summary>
        [DataMember]
        [ListCount(10)]
        [Pos(8)]
        public List<DTM> DTM { get; set; }
        /// <summary>
        /// Loop for Name
        /// </summary>
        [DataMember]
        [ListCount(50)]
        [Pos(9)]
        public List<Loop_N1_849> N1Loop { get; set; }
        /// <summary>
        /// Loop for Contract Number Detail
        /// </summary>
        [DataMember]
        [ListCount(10000)]
        [Pos(10)]
        public List<Loop_CON_849> CONLoop { get; set; }
        /// <summary>
        /// Transaction Totals
        /// </summary>
        [DataMember]
        [Required]
        [Pos(11)]
        public CTT CTT { get; set; }
        /// <summary>
        /// Monetary Amount
        /// </summary>
        [DataMember]
        [ListCount(5)]
        [Pos(12)]
        public List<AMT> AMT { get; set; }
        /// <summary>
        /// Transaction Set Trailer
        /// </summary>
        [DataMember]
        [Pos(13)]
        public SE SE { get; set; }
    }
}
