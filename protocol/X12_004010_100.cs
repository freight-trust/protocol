namespace FreightTrust.EDI.X12004010 {
  /// <summary>
  /// Loop for Informational Values
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Group(typeof(AM1))]
  public class Loop_AM1_100 {

    /// <summary>
    /// Informational Values
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public AM1 AM1 {
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
  }

  /// <summary>
  /// Loop for Baseline Item Data
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Group(typeof(BLI))]
  public class Loop_BLI_100 {

    /// <summary>
    /// Baseline Item Data
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public BLI BLI {
      get;
      set;
    }
    /// <summary>
    /// Date or Time or Period
    /// </summary>
    [DataMember]
    [Pos(2)]
    public List<DTP> DTP {
      get;
      set;
    }
    /// <summary>
    /// Information
    /// </summary>
    [DataMember]
    [Pos(3)]
    public List<III> III {
      get;
      set;
    }
    /// <summary>
    /// Monetary Amount
    /// </summary>
    [DataMember]
    [Pos(4)]
    public List<AMT> AMT {
      get;
      set;
    }
    /// <summary>
    /// Quantity
    /// </summary>
    [DataMember]
    [Pos(5)]
    public List<QTY> QTY {
      get;
      set;
    }
    /// <summary>
    /// Loop for Service Characteristic Identification
    /// </summary>
    [DataMember]
    [Pos(6)]
    public List<Loop_SI_100> SILoop {
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
  public class Loop_N1_100 {

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
    public List<N2> N2 {
      get;
      set;
    }
    /// <summary>
    /// Address Information
    /// </summary>
    [DataMember]
    [ListCount(3)]
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
    /// Communication Contact Information
    /// </summary>
    [DataMember]
    [ListCount(9)]
    [Pos(5)]
    public List<COM> COM {
      get;
      set;
    }
    /// <summary>
    /// Information
    /// </summary>
    [DataMember]
    [ListCount(9)]
    [Pos(6)]
    public List<III> III {
      get;
      set;
    }
    /// <summary>
    /// Message Text
    /// </summary>
    [DataMember]
    [Pos(7)]
    public List<MSG> MSG {
      get;
      set;
    }
    /// <summary>
    /// Loop for Administrative Communications Contact
    /// </summary>
    [DataMember]
    [Pos(8)]
    public List<Loop_PER_100> PERLoop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Product/Item Description
    /// </summary>
    [DataMember]
    [Pos(9)]
    public List<Loop_PID_100> PIDLoop {
      get;
      set;
    }
  }

  /// <summary>
  /// Loop for Geographic Location
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Group(typeof(N4))]
  public class Loop_N4_100 {

    /// <summary>
    /// Geographic Location
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public N4 N4 {
      get;
      set;
    }
    /// <summary>
    /// Status of Product or Activity
    /// </summary>
    [DataMember]
    [ListCount(3)]
    [Pos(2)]
    public List<SPA> SPA {
      get;
      set;
    }
    /// <summary>
    /// Loop for Informational Values
    /// </summary>
    [DataMember]
    [Pos(3)]
    public List<Loop_AM1_100> AM1Loop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Baseline Item Data
    /// </summary>
    [DataMember]
    [Pos(4)]
    public List<Loop_PO1_100_2> PO1Loop {
      get;
      set;
    }
  }

  /// <summary>
  /// Loop for Individual or Organizational Name
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Group(typeof(NM1))]
  public class Loop_NM1_100 {

    /// <summary>
    /// Individual or Organizational Name
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public NM1 NM1 {
      get;
      set;
    }
    /// <summary>
    /// Address Information
    /// </summary>
    [DataMember]
    [ListCount(3)]
    [Pos(2)]
    public List<N3> N3 {
      get;
      set;
    }
    /// <summary>
    /// Geographic Location
    /// </summary>
    [DataMember]
    [Pos(3)]
    public N4 N4 {
      get;
      set;
    }
    /// <summary>
    /// Reference Identification
    /// </summary>
    [DataMember]
    [ListCount(9)]
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
  }

  /// <summary>
  /// Loop for Administrative Communications Contact
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Group(typeof(PER))]
  public class Loop_PER_100 {

    /// <summary>
    /// Administrative Communications Contact
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public PER PER {
      get;
      set;
    }
    /// <summary>
    /// Address Information
    /// </summary>
    [DataMember]
    [ListCount(3)]
    [Pos(2)]
    public List<N3> N3 {
      get;
      set;
    }
    /// <summary>
    /// Geographic Location
    /// </summary>
    [DataMember]
    [Pos(3)]
    public N4 N4 {
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
  public class Loop_PID_100 {

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
    /// Item Identification
    /// </summary>
    [DataMember]
    [ListCount(9)]
    [Pos(2)]
    public List<LIN> LIN {
      get;
      set;
    }
    /// <summary>
    /// Date or Time or Period
    /// </summary>
    [DataMember]
    [Pos(3)]
    public List<DTP> DTP {
      get;
      set;
    }
    /// <summary>
    /// Individual or Organizational Name
    /// </summary>
    [DataMember]
    [Pos(4)]
    public List<NM1> NM1 {
      get;
      set;
    }
    /// <summary>
    /// Loop for Baseline Item Data
    /// </summary>
    [DataMember]
    [Pos(5)]
    public List<Loop_BLI_100> BLILoop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Informational Values
    /// </summary>
    [DataMember]
    [Pos(6)]
    public List<Loop_AM1_100> AM1Loop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Baseline Item Data
    /// </summary>
    [DataMember]
    [Pos(7)]
    public List<Loop_PO1_100> PO1Loop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Geographic Location
    /// </summary>
    [DataMember]
    [Pos(8)]
    public List<Loop_N4_100> N4Loop {
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
  public class Loop_PO1_100 {

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
    [ListCount(9)]
    [Pos(2)]
    public List<LIN> LIN {
      get;
      set;
    }
    /// <summary>
    /// Status of Product or Activity
    /// </summary>
    [DataMember]
    [ListCount(3)]
    [Pos(3)]
    public List<SPA> SPA {
      get;
      set;
    }
    /// <summary>
    /// Information
    /// </summary>
    [DataMember]
    [Pos(4)]
    public List<III> III {
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
  public class Loop_PO1_100_2 {

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
    /// Status of Product or Activity
    /// </summary>
    [DataMember]
    [ListCount(3)]
    [Pos(2)]
    public List<SPA> SPA {
      get;
      set;
    }
    /// <summary>
    /// Information
    /// </summary>
    [DataMember]
    [Pos(3)]
    public List<III> III {
      get;
      set;
    }
  }

  /// <summary>
  /// Loop for Service Characteristic Identification
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Group(typeof(SI))]
  public class Loop_SI_100 {

    /// <summary>
    /// Service Characteristic Identification
    /// </summary>
    [DataMember]
    [Required]
    [Pos(1)]
    public SI SI {
      get;
      set;
    }
    /// <summary>
    /// Monetary Amount
    /// </summary>
    [DataMember]
    [Pos(2)]
    public List<AMT> AMT {
      get;
      set;
    }
    /// <summary>
    /// Quantity
    /// </summary>
    [DataMember]
    [Pos(3)]
    public List<QTY> QTY {
      get;
      set;
    }
  }

  /// <summary>
  /// Insurance Plan Description
  /// </summary>
  [Serializable()]
  [DataContract()]
  [Message("X12", "004010", "100")]
  public class TS100 : EdiMessage {

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
    /// Beginning Segment
    /// </summary>
    [DataMember]
    [Required]
    [Pos(2)]
    public BGN BGN {
      get;
      set;
    }
    /// <summary>
    /// Currency
    /// </summary>
    [DataMember]
    [Pos(3)]
    public C3 C3 {
      get;
      set;
    }
    /// <summary>
    /// Date or Time or Period
    /// </summary>
    [DataMember]
    [Pos(4)]
    public List<DTP> DTP {
      get;
      set;
    }
    /// <summary>
    /// Loop for Individual or Organizational Name
    /// </summary>
    [DataMember]
    [Required]
    [Pos(5)]
    public List<Loop_NM1_100> NM1Loop {
      get;
      set;
    }
    /// <summary>
    /// Loop for Name
    /// </summary>
    [DataMember]
    [Required]
    [Pos(6)]
    public List<Loop_N1_100> N1Loop {
      get;
      set;
    }
    /// <summary>
    /// Transaction Set Trailer
    /// </summary>
    [DataMember]
    [Pos(7)]
    public SE SE {
      get;
      set;
    }
  }
}
