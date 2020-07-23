/* (C) 2020 - FreightTrust and Clearing Corporation
 * SPDX: MPL-2.0
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
 
namespace FreightTrust.EDI.X12004010
{


    /// <summary>
    /// Loop for Transaction Set Response Header
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(AK2))]
    public class Loop_AK2_997
    {
        
        /// <summary>
        /// Transaction Set Response Header
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public AK2 AK2 { get; set; }
        /// <summary>
        /// Loop for Data Segment Note
        /// </summary>
        [DataMember]
        [ListCount(999999)]
        [Pos(2)]
        public List<Loop_AK3_997> AK3Loop { get; set; }
        /// <summary>
        /// Transaction Set Response Trailer
        /// </summary>
        [DataMember]
        [Required]
        [Pos(3)]
        public AK5 AK5 { get; set; }
    }
    
    /// <summary>
    /// Loop for Data Segment Note
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Group(typeof(AK3))]
    public class Loop_AK3_997
    {
        
        /// <summary>
        /// Data Segment Note
        /// </summary>
        [DataMember]
        [Required]
        [Pos(1)]
        public AK3 AK3 { get; set; }
        /// <summary>
        /// Data Element Note
        /// </summary>
        [DataMember]
        [ListCount(99)]
        [Pos(2)]
        public List<AK4> AK4 { get; set; }
    }
    
    /// <summary>
    /// Functional Acknowledgment
    /// </summary>
    [Serializable()]
    [DataContract()]
    [Message("X12", "004010", "997")]
    public class TS997 : EdiMessage
    {
        
        /// <summary>
        /// Transaction Set Header
        /// </summary>
        [DataMember]
        [Pos(1)]
        public ST ST { get; set; }
        /// <summary>
        /// Functional Group Response Header
        /// </summary>
        [DataMember]
        [Required]
        [Pos(2)]
        public AK1 AK1 { get; set; }
        /// <summary>
        /// Loop for Transaction Set Response Header
        /// </summary>
        [DataMember]
        [ListCount(999999)]
        [Pos(3)]
        public List<Loop_AK2_997> AK2Loop { get; set; }
        /// <summary>
        /// Functional Group Response Trailer
        /// </summary>
        [DataMember]
        [Required]
        [Pos(4)]
        public AK9 AK9 { get; set; }
        /// <summary>
        /// Transaction Set Trailer
        /// </summary>
        [DataMember]
        [Pos(5)]
        public SE SE { get; set; }
    }
}
