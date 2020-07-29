interface LoopSchema {
  /**
   * @instance
   * @public
   * @memberof LoopSchema
   * @function IsSegmentLoop
   * @type boolean
   */
  IsSegmentLoop: boolean;
  /**
   * Gets or sets the description.
   *
   * @instance
   * @public
   * @memberof LoopSchema
   * @function Description
   * @type string
   */
  Description: string | null;
  /**
   * Gets or sets the parent.
   *
   * @instance
   * @public
   * @memberof LoopSchema
   * @function Parent
   * @type LoopSchema
   */
  Parent: LoopSchema | null;
  /**
   * Gets or sets the loop ID.
   *
   * @instance
   * @public
   * @memberof LoopSchema
   * @function LoopID
   * @type string
   */
  LoopID: string | null;
  /**
   * Gets or sets a value indicating whether this {@link } is occurred.
   *
   * @instance
   * @public
   * @memberof LoopSchema
   * @function Occurred
   * @type boolean
   */
  Occurred: boolean;
  /**
   * Gets or sets the min.
   *
   * @instance
   * @public
   * @memberof LoopSchema
   * @function Min
   * @type number
   */
  Min: number;
  /**
   * Gets or sets the max.
   *
   * @instance
   * @public
   * @memberof LoopSchema
   * @function Max
   * @type number
   */
  Max: number;
  /**
   * Gets or sets a value indicating whether this {@link } is indefinite.
   *
   * @instance
   * @public
   * @memberof LoopSchema
   * @function Indefinite
   * @type boolean
   */
  Indefinite: boolean;
  /**
   * Gets or sets the usage.
   *
   * @instance
   * @public
   * @memberof LoopSchema
   * @function Usage
   * @type Usage
   */
  Usage: Usage;
  /**
   * Gets or sets the loops.
   *
   * @instance
   * @public
   * @memberof LoopSchema
   * @function Loops
   * @type System.Collections.ObjectModel.Collection$1
   */
  Loops: System.Collections.ObjectModel.Collection$1<LoopSchema> | null;
  /**
   * Gets or sets the segments.
   *
   * @instance
   * @public
   * @memberof LoopSchema
   * @function Segments
   * @type System.Collections.ObjectModel.Collection$1
   */
  Segments: System.Collections.ObjectModel.Collection$1<SegmentSchema> | null;
  /**
   * Gets the last segment.
   *
   * @instance
   * @public
   * @readonly
   * @memberof LoopSchema
   * @function LastSegment
   * @type SegmentSchema
   */
  LastSegment: SegmentSchema | null;
  /**
   * Gets the next segment.
   *
   * @instance
   * @public
   * @this LoopSchema
   * @memberof LoopSchema
   * @param   {number}           currentIndex    Index of the current.
   * @return  {SegmentSchema}
   */
  getNextSegment(currentIndex: number): SegmentSchema | null;
}
