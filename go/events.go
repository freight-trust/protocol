type Events struct {

	// Field for actionable flows
	Action string `json:"action,omitempty"`

	// Bill of lading number
	BillOfLadingNumber string `json:"billOfLadingNumber,omitempty"`

	// Booking Data
	BookingData *BookingData `json:"bookingData,omitempty"`

	// Countries where the cargo has remained on board
	CargoRemainingOnboardCountries []string `json:"cargoRemainingOnboardCountries,omitempty"`

	// Carrier Booking number
	CarrierBookingNumber string `json:"carrierBookingNumber,omitempty"`

	// Certificate type
	CertificateType string `json:"certificateType,omitempty"`

	// Consignee id
	ConsigneeId string `json:"consigneeId,omitempty"`

	// Consignee type
	ConsigneeIdType string `json:"consigneeIdType,omitempty"`

	// Generated ID for the consignment.
	ConsignmentId string `json:"consignmentId,omitempty"`

	// Reference to an existing consignment.
	ConsignmentRef string `json:"consignmentRef,omitempty"`

	// User-supplied ID for this event
	CorrelationId string `json:"correlationId,omitempty"`

	// Dangerous goods type
	DangerousGoodsType string `json:"dangerousGoodsType,omitempty"`

	// The event data
	Data []Data `json:"data,omitempty"`

	// Org Name identifying who this document is being transferred to, if this is a Document event with the action 'transferred' or 'surrendered'
	DestinationOrgName string `json:"destinationOrgName,omitempty"`

	// Document
	Doc *DocumentV2 `json:"doc,omitempty"`

	// Internal document
	Document *Document `json:"document,omitempty"`

	// Internal document identifier
	DocumentId string `json:"documentId,omitempty"`

	// Document Type
	DocumentType string `json:"documentType,omitempty"`

	// The version of the document
	DocumentVersion int32 `json:"documentVersion,omitempty"`

	// Internal documents list
	Documents []Document `json:"documents,omitempty"`

	// Electronic Bill of Lading Provider
	EBLProvider string `json:"eBLProvider,omitempty"`

	// The port where the transport equipment is discharged from a vessel for the last time (Final port of discharge).
	EntryPort *Port `json:"entryPort,omitempty"`

	// The unique identifier found on the transport equipment.
	EquipmentNumber string `json:"equipmentNumber,omitempty"`

	// The container Type based on ISO size type
	EquipmentType string `json:"equipmentType,omitempty"`

	// Event Name
	EventName string `json:"eventName,omitempty"`

	// When the event occurred, as the number of milliseconds since Epoch
	EventOccurrenceTime int64 `json:"eventOccurrenceTime,omitempty"`

	// When the event occurred, in common ISO 8601 format yyyy-MM-dd'T'HH:mm:ss.SSSZ.
	EventOccurrenceTime8601 string `json:"eventOccurrenceTime8601,omitempty"`

	// Event Priority
	EventPriority int32 `json:"eventPriority,omitempty"`

	// GPS coordinates of where the event originated from (mobile device only)
	EventSubmissionGpsLocation string `json:"eventSubmissionGpsLocation,omitempty"`

	// Time of submission
	EventSubmissionTime int64 `json:"eventSubmissionTime"`

	// The unique ID for the event
	EventTransactionId string `json:"eventTransactionId,omitempty"`

	// Event Type
	EventType string `json:"eventType,omitempty"`

	// The port where the transport equipment is first loaded on the vessel
	ExitPort *Port `json:"exitPort,omitempty"`

	// The first port of entry country
	FirstPortOfEntryCountry string `json:"firstPortOfEntryCountry,omitempty"`

	// Is the container full or empty
	FullStatus string `json:"fullStatus,omitempty"`

	// Harmonized System 6 Code
	HarmonizedCodes []string `json:"harmonizedCodes,omitempty"`

	// The location where the event occurred (or will occur)
	Location *Location `json:"location,omitempty"`

	// Net weight (including unit of measurement)
	NetWeight string `json:"netWeight,omitempty"`

	// New Slot Number
	NewSlotNumber string `json:"newSlotNumber,omitempty"`

	// Typical SCAC code
	OperatorCode string `json:"operatorCode,omitempty"`

	// Operator name
	OperatorName string `json:"operatorName,omitempty"`

	// The Originator ID
	OriginatorId string `json:"originatorId"`

	// The Originator Name
	OriginatorName string `json:"originatorName"`

	// Packing List Number
	PackingListNumber string `json:"packingListNumber,omitempty"`

	// Whether or not the event pertains to a \"part bill of lading\"
	PartBill bool `json:"partBill,omitempty"`

	// Original consignment for a \"part bill of lading\"
	PartBillOf *PartBillOf `json:"partBillOf,omitempty"`

	// Reason Code
	ReasonCode string `json:"reasonCode,omitempty"`

	// Reason for survey
	ReasonForSurvey string `json:"reasonForSurvey,omitempty"`

	// List of customer created references to this trade object
	References []TradeObjectReference `json:"references,omitempty"`

	// Seal number
	SealNumber string `json:"sealNumber,omitempty"`

	// Seal type
	SealType string `json:"sealType,omitempty"`

	// Seals
	Seals []Seal `json:"seals,omitempty"`

	// The name of the organization that sent the event
	SenderOrgName string `json:"senderOrgName"`

	// Shipper id
	ShipperId string `json:"shipperId,omitempty"`

	// Shipper id type
	ShipperIdType string `json:"shipperIdType,omitempty"`

	// Split from Consignment
	SplitFromConsignment *SplitFromConsignment `json:"splitFromConsignment,omitempty"`

	// The terminal which this consignment is touching
	Terminal *Terminal `json:"terminal,omitempty"`

	// The description of the terminal which this consignment is touching
	TerminalDescription string `json:"terminalDescription,omitempty"`

	// Export countries where a transport equipment has moved across international borders to another country over land
	TransitExportCountries []string `json:"transitExportCountries,omitempty"`

	// Import countries where a transport equipment has moved across international borders to another country over land
	TransitImportCountries []string `json:"transitImportCountries,omitempty"`

	// Generated ID for the transport equipment.
	TransportEquipmentId string `json:"transportEquipmentId,omitempty"`

	// Reference to an existing transport equipment.  Value should be very unique and created by a user.
	TransportEquipmentRef string `json:"transportEquipmentRef,omitempty"`

	// A timestamp used to group planned events that make up a Transport Plan, in common ISO 8601 format yyyy-MM-dd'T'HH:mm:ss.SSSZ.
	TransportPlanIssuanceTime8601 string `json:"transportPlanIssuanceTime8601,omitempty"`

	// The transportation phase
	TransportationPhase string `json:"transportationPhase,omitempty"`

	// Descriptions of ports where off loading the transport equipment from one vessel at an intermediate destination and loading onto another vessel to be further carried to the final port of discharge
	TransshipmentPortDescriptions []string `json:"transshipmentPortDescriptions,omitempty"`

	// Ports where off loading the transport equipment from one vessel at an intermediate destination and loading onto another vessel to be further carried to the final port of discharge
	TransshipmentPorts []Port `json:"transshipmentPorts,omitempty"`

	// ID of truck, rail, barge, or vessel
	VehicleId string `json:"vehicleId,omitempty"`

	// Name of truck, rail, barge, or vessel
	VehicleName string `json:"vehicleName,omitempty"`

	// Verified Gross Mass (VGM)
	VerifiedGrossMass string `json:"verifiedGrossMass,omitempty"`

	// Voyage number
	VoyageId string `json:"voyageId,omitempty"`

	// Waypoint ID
	WaypointId string `json:"waypointId,omitempty"`
}
