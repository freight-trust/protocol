type Commodity struct {

	// Item Number
	ItemNumber int64 `json:"itemNumber"`

	// Commodity Description
	CommodityDescription string `json:"commodityDescription"`

	// Commodity Harmonized Code
	CommodityHarmonizedCode string `json:"commodityHarmonizedCode,omitempty"`

	// Commodity Quantity
	CommodityQuantity int64 `json:"commodityQuantity,omitempty"`

	// Commodity Gross Weight. Specify units in Kg or Lb
	CommodityWeight string `json:"commodityWeight,omitempty"`
}
