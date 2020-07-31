import { EmptyIndicatorCode } from "./emptyIndicatorCode";
import { EquipmentReference } from "./equipmentReference";
import { Event } from "./event";
import { EventClassifierCode } from "./eventClassifierCode";
import { EventDateTime } from "./eventDateTime";
import { EventID } from "./eventID";
import { EventTypeCode } from "./eventTypeCode";
import { FacilityCode } from "./facilityCode";
import { FacilityTypeCode } from "./facilityTypeCode";
import { ModeOfTransportCode } from "./modeOfTransportCode";
import { OtherFacility } from "./otherFacility";
import { TransportLegReference } from "./transportLegReference";
import { TransportReference } from "./transportReference";
import { UNLocationCode } from "./uNLocationCode";

/**
 * The transport equipment event entity is a specialization of the event entity to support specification of data that applies to both transport and equipment events.
 */
export interface TransportEquipmentEvent extends Event {
  eventType?: TransportEquipmentEvent.EventTypeEnum;
  transportReference: TransportReference;
  transportLegReference: TransportLegReference;
  equipmentReference?: EquipmentReference;
  facilityTypeCode: FacilityTypeCode;
  uNLocationCode: UNLocationCode;
  facilityCode: FacilityCode;
  otherFacility?: OtherFacility;
  emptyIndicatorCode: EmptyIndicatorCode;
  modeOfTransportCode?: ModeOfTransportCode;
}
export namespace TransportEquipmentEvent {
  export type EventTypeEnum = "TRANSPORTEQUIPMENT";
  export const EventTypeEnum = {
    TRANSPORTEQUIPMENT: "TRANSPORTEQUIPMENT" as EventTypeEnum,
  };
}
