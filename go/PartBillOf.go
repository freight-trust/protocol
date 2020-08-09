type PartBillOf struct {

	// The Carrier Booking Number
	CarrierBookingNumber string `json:"carrierBookingNumber,omitempty"`

	// Bill of Lading Number
	BillOfLadingNumber string `json:"billOfLadingNumber,omitempty"`

	// Generated ID for the consignment
	ConsignmentId string `json:"consignmentId,omitempty"`
}