/* (C) 2020 - FreightTrust and Clearing Corporation
 * SPDX: MPL-2.0
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
 
namespace FreightTrust.EDI.X12004010
{


    /// <summary>
    /// Loop for Account Identification
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(ACT))]
    public class Loop_ACT_821
    {
        
        /// <summary>
        /// Account Identification
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public ACT ACT { get; set; }
        /// <summary>
        /// Currency
        /// </summary>
        [DataMember]
        [Pos(2)]
        public CUR CUR { get; set; }
        /// <summary>
        /// Loop for Code Source Information
        /// </summary>
        [DataMember]
        [ListCount(10)]
        [Pos(3)]
        public List<Loop_LM_821> LMLoop { get; set; }
        /// <summary>
        /// Loop for Rate Information
        /// </summary>
        [DataMember]
        [ListCount(13)]
        [Pos(4)]
        public List<Loop_RTE_821> RTELoop { get; set; }
        /// <summary>
        /// Loop for Balance Information
        /// </summary>
        [DataMember]
        [Pos(5)]
        public List<Loop_BLN_821> BLNLoop { get; set; }
        /// <summary>
        /// Loop for Transaction Summary
        /// </summary>
        [DataMember]
        [Pos(6)]
        public List<Loop_TSU_821> TSULoop { get; set; }
        /// <summary>
        /// Loop for Financial Information
        /// </summary>
        [DataMember]
        [Pos(7)]
        public List<Loop_FIR_821> FIRLoop { get; set; }
    }
    
    /// <summary>
    /// Loop for Balance Information
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(BLN))]
    public class Loop_BLN_821
    {
        
        /// <summary>
        /// Balance Information
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public BLN BLN { get; set; }
        /// <summary>
        /// Funds Availability
        /// </summary>
        [DataMember]
        [Pos(2)]
        public List<AVA> AVA { get; set; }
    }
    
    /// <summary>
    /// Loop for Entity
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(ENT))]
    public class Loop_ENT_821
    {
        
        /// <summary>
        /// Entity
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public ENT ENT { get; set; }
        /// <summary>
        /// Loop for Name
        /// </summary>
        [DataMember]
        [ListCount(2)]
        [Pos(2)]
        public List<Loop_N1_821> N1Loop { get; set; }
        /// <summary>
        /// Loop for Account Identification
        /// </summary>
        [DataMember]
        [Pos(3)]
        public List<Loop_ACT_821> ACTLoop { get; set; }
        /// <summary>
        /// Loop for Type of Financial Accounting Data
        /// </summary>
        [DataMember]
        [Pos(4)]
        public List<Loop_FA1_821> FA1Loop { get; set; }
    }
    
    /// <summary>
    /// Loop for Type of Financial Accounting Data
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(FA1))]
    public class Loop_FA1_821
    {
        
        /// <summary>
        /// Type of Financial Accounting Data
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public FA1 FA1 { get; set; }
        /// <summary>
        /// Accounting Data
        /// </summary>
        [DataMember]
        [Required]
        [Pos(2)]
        public List<FA2> FA2 { get; set; }
    }
    
    /// <summary>
    /// Loop for Financial Information
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(FIR))]
    public class Loop_FIR_821
    {
        
        /// <summary>
        /// Financial Information
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public FIR FIR { get; set; }
        /// <summary>
        /// Date/Time Reference
        /// </summary>
        [DataMember]
        [Pos(2)]
        public List<DTM> DTM { get; set; }
        /// <summary>
        /// Reference Identification
        /// </summary>
        [DataMember]
        [Pos(3)]
        public List<REF> REF { get; set; }
        /// <summary>
        /// Message Text
        /// </summary>
        [DataMember]
        [Pos(4)]
        public List<MSG> MSG { get; set; }
        /// <summary>
        /// Funds Availability
        /// </summary>
        [DataMember]
        [Pos(5)]
        public List<AVA> AVA { get; set; }
        /// <summary>
        /// Trace
        /// </summary>
        [DataMember]
        [Pos(6)]
        public TRN TRN { get; set; }
        /// <summary>
        /// Name
        /// </summary>
        [DataMember]
        [Pos(7)]
        public List<N1> N1 { get; set; }
        /// <summary>
        /// Monetary Amount
        /// </summary>
        [DataMember]
        [Pos(8)]
        public List<AMT> AMT { get; set; }
        /// <summary>
        /// Pricing Information
        /// </summary>
        [DataMember]
        [Pos(9)]
        public List<CTP> CTP { get; set; }
        /// <summary>
        /// Rate Information
        /// </summary>
        [DataMember]
        [Pos(10)]
        public List<RTE> RTE { get; set; }
        /// <summary>
        /// Loop for Individual or Organizational Name
        /// </summary>
        [DataMember]
        [Pos(11)]
        public List<Loop_NM1_821> NM1Loop { get; set; }
    }
    
    /// <summary>
    /// Loop for Code Source Information
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(LM))]
    public class Loop_LM_821
    {
        
        /// <summary>
        /// Code Source Information
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public LM LM { get; set; }
        /// <summary>
        /// Loop for Industry Code
        /// </summary>
        [DataMember]
        [Required]
        [ListCount(100)]
        [Pos(2)]
        public List<Loop_LQ_821> LQLoop { get; set; }
    }
    
    /// <summary>
    /// Loop for Industry Code
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(LQ))]
    public class Loop_LQ_821
    {
        
        /// <summary>
        /// Industry Code
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public LQ LQ { get; set; }
        /// <summary>
        /// Date/Time Reference
        /// </summary>
        [DataMember]
        [ListCount(3)]
        [Pos(2)]
        public List<DTM> DTM { get; set; }
    }
    
    /// <summary>
    /// Loop for Name
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(N1))]
    public class Loop_N1_821
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
        public List<N2> N2 { get; set; }
        /// <summary>
        /// Address Information
        /// </summary>
        [DataMember]
        [Pos(3)]
        public List<N3> N3 { get; set; }
        /// <summary>
        /// Geographic Location
        /// </summary>
        [DataMember]
        [Pos(4)]
        public N4 N4 { get; set; }
        /// <summary>
        /// Administrative Communications Contact
        /// </summary>
        [DataMember]
        [Pos(5)]
        public List<PER> PER { get; set; }
    }
    
    /// <summary>
    /// Loop for Individual or Organizational Name
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(NM1))]
    public class Loop_NM1_821
    {
        
        /// <summary>
        /// Individual or Organizational Name
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public NM1 NM1 { get; set; }
        /// <summary>
        /// Additional Name Information
        /// </summary>
        [DataMember]
        [Pos(2)]
        public List<N2> N2 { get; set; }
        /// <summary>
        /// Address Information
        /// </summary>
        [DataMember]
        [Pos(3)]
        public List<N3> N3 { get; set; }
        /// <summary>
        /// Geographic Location
        /// </summary>
        [DataMember]
        [Pos(4)]
        public N4 N4 { get; set; }
        /// <summary>
        /// Date/Time Reference
        /// </summary>
        [DataMember]
        [Pos(5)]
        public DTM DTM { get; set; }
    }
    
    /// <summary>
    /// Loop for Rate Information
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(RTE))]
    public class Loop_RTE_821
    {
        
        /// <summary>
        /// Rate Information
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public RTE RTE { get; set; }
        /// <summary>
        /// Date/Time Reference
        /// </summary>
        [DataMember]
        [Pos(2)]
        public DTM DTM { get; set; }
    }
    
    /// <summary>
    /// Loop for Transaction Summary
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(TSU))]
    public class Loop_TSU_821
    {
        
        /// <summary>
        /// Transaction Summary
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public TSU TSU { get; set; }
        /// <summary>
        /// Funds Availability
        /// </summary>
        [DataMember]
        [Pos(2)]
        public List<AVA> AVA { get; set; }
    }
    
    /// <summary>
    /// Financial Information Reporting
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Message("X12", "004010", "821")]
    public class TS821 : EdiMessage
    {
        
        /// <summary>
        /// Transaction Set Header
        /// </summary>
        [DataMember]
        [Pos(1)]
        public ST ST { get; set; }
        /// <summary>
        /// Set Purpose
        /// </summary>
        [DataMember]
        [Required]
        [Pos(2)]
        public B2A B2A { get; set; }
        /// <summary>
        /// Date/Time Reference
        /// </summary>
        [DataMember]
        [Required]
        [ListCount(4)]
        [Pos(3)]
        public List<DTM> DTM { get; set; }
        /// <summary>
        /// Trace
        /// </summary>
        [DataMember]
        [Required]
        [ListCount(2)]
        [Pos(4)]
        public List<TRN> TRN { get; set; }
        /// <summary>
        /// Name
        /// </summary>
        [DataMember]
        [ListCount(2)]
        [Pos(5)]
        public List<N1> N1 { get; set; }
        /// <summary>
        /// Administrative Communications Contact
        /// </summary>
        [DataMember]
        [Pos(6)]
        public List<PER> PER { get; set; }
        /// <summary>
        /// Reference Identification
        /// </summary>
        [DataMember]
        [Pos(7)]
        public List<REF> REF { get; set; }
        /// <summary>
        /// Loop for Code Source Information
        /// </summary>
        [DataMember]
        [ListCount(10)]
        [Pos(8)]
        public List<Loop_LM_821> LMLoop { get; set; }
        /// <summary>
        /// Loop for Type of Financial Accounting Data
        /// </summary>
        [DataMember]
        [Pos(9)]
        public List<Loop_FA1_821> FA1Loop { get; set; }
        /// <summary>
        /// Loop for Entity
        /// </summary>
        [DataMember]
        [Required]
        [Pos(10)]
        public List<Loop_ENT_821> ENTLoop { get; set; }
        /// <summary>
        /// Transaction Set Trailer
        /// </summary>
        [DataMember]
        [Pos(11)]
        public SE SE { get; set; }
    }
}
