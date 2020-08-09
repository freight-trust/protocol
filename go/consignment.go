type ConsignmentV2 struct {

	// Service created identifier for this consignment
	ConsignmentId string `json:"consignmentId"`

	// Carrier booking number for this consignment
	CarrierBookingNumber string `json:"carrierBookingNumber,omitempty"`

	// Status of this consignment
	Status string `json:"status"`

	// Cutoffs for all transport equipments for this consignment.
	CutOffs []CutOff `json:"cutOffs,omitempty"`

	// Affiliated transport equipments' IDs
	TransportEquipmentIds []string `json:"transportEquipmentIds,omitempty"`

	// Affiliated transport equipments' reference numbers
	TransportEquipmentRefs []string `json:"transportEquipmentRefs,omitempty"`

	// Affiliated transport equipments' planned export countries
	ExportCountries []string `json:"exportCountries,omitempty"`

	// Affiliated transport equipments' planned import countries
	ImportCountries []string `json:"importCountries,omitempty"`

	// Affiliated transport equipments' planned entry ports
	EntryPorts []string `json:"entryPorts,omitempty"`

	// Affiliated transport equipments' planned exit ports
	ExitPorts []string `json:"exitPorts,omitempty"`

	// Affiliated transport equipments' harmonized system codes
	HarmonizedCodes []string `json:"harmonizedCodes,omitempty"`

	// Affiliated transport equipments' bill of lading numbers
	BillOfLadingNumbers []string `json:"billOfLadingNumbers,omitempty"`

	// Time this consignment was created
	CreationTime int64 `json:"creationTime"`

	// Affiliated transport equipments' planned terminals
	Terminals []string `json:"terminals,omitempty"`

	// Planned Vessel Arrival at the Entry Port in epoch milliseconds. If the consignment has already arrived at the entry port this will be null. Based on the event occurrence time of the latest estimatedVesselArrival event if they are available, or the latest plannedVesselArrival event otherwise
	PlannedVesselArrival int64 `json:"plannedVesselArrival,omitempty"`

	// Planned Vessel Departure from the Exit Port in epoch milliseconds. If the consignment has already left the exit port this will be null. Based on the event occurrence time of the latest estimatedVesselDeparture event if they are available, or the latest plannedVesselDeparture event otherwise
	PlannedVesselDeparture int64 `json:"plannedVesselDeparture,omitempty"`

	// Submission time of the event that created the consignment
	EventCreationTime int64 `json:"eventCreationTime,omitempty"`

	// Submission time of the event that most recently updated the consignment
	EventUpdateTime int64 `json:"eventUpdateTime,omitempty"`

	// Timestamp of when the consignment was created
	ConsignmentCreationTime int64 `json:"consignmentCreationTime,omitempty"`

	// Timestamp of when the consignment was most recently updated
	ConsignmentUpdateTime int64 `json:"consignmentUpdateTime,omitempty"`

	// Booking data
	BookingData *BookingData `json:"bookingData,omitempty"`

	// ID of the parent consignment for which this consignment subcontracts
	ParentConsignmentIds []string `json:"parentConsignmentIds,omitempty"`

	// IDs of the children consignments which subcontract this consignment
	SubcontractIds []string `json:"subcontractIds,omitempty"`

	// The list of caller party roles
	CallerRoles []string `json:"callerRoles,omitempty"`

	// The organization name of the creator of the consignment
	CreatedBy string `json:"createdBy"`

	// Split From Consignment
	SplitFromConsignment *SplitFromConsignment `json:"splitFromConsignment,omitempty"`

	// The information of a consignment this consignment was combined into
	CombinedIntoConsignment *CombinedConsignment `json:"combinedIntoConsignment,omitempty"`

	// The combined consignment information of consignments that were combined into this one
	CombinedConsignments []CombinedConsignment `json:"combinedConsignments,omitempty"`

	// Transport equipment in the system that was formerly associated
	FormerlyAssociatedTransportEquipment []FormerlyAssociatedTransportEquipment `json:"formerlyAssociatedTransportEquipment,omitempty"`

	// List of customer created references to this consignment
	References []DescriptiveTradeObjectReference `json:"references"`

	// True if all equipment for this consignment have been loaded onto the vessel and none have been offloaded, false otherwise.
	OnWater bool `json:"onWater"`

	// True if two different vehicle IDs are used in the vessel transport events sent to the consignment or its equipment, indicating its equipment will be transferred between vessels mid journey, false otherwise. If the consignment has no TEs then this will be false
	Transshipment bool `json:"transshipment"`

	// Difference in current plannedVesselArrival (the planned time of arrival at the entry port) from the plannedVesselArrival calculated when this consignment first received a transport plan. If the consignment has already arrived at the entry port, this value will be the difference between the occurrence time of the actualVesselArrival and the first plannedVesselArrival at the entry port. If there is no planned vessel arrival, this field will be null. Negative times indicate the vessel will arrive earlier than first planned, positive times indicate it will arrive later
	ChangeInVesselArrivalFromFirstPlan int64 `json:"changeInVesselArrivalFromFirstPlan,omitempty"`

	// transportPlanIssuanceTime on the latest set of planned events sent to this consignment, in milliseconds since epoch. If no plan has ever been sent to this consignment this field will be null
	LatestPlanIssuanceTime int64 `json:"latestPlanIssuanceTime,omitempty"`

	// Number of complete transport plans which have been sent to this consignment
	NumberPlansReceived int64 `json:"numberPlansReceived,omitempty"`

	// Reference to the first consignment created with the same booking in a \"part bill of lading\" scenario
	PartBillOf *PartBillOf `json:"partBillOf,omitempty"`
}
