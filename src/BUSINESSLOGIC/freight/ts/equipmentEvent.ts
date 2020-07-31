import { EmptyIndicatorCode } from "./emptyIndicatorCode";
import { EquipmentReference } from "./equipmentReference";
import { Event } from "./event";
import { EventClassifierCode } from "./eventClassifierCode";
import { EventDateTime } from "./eventDateTime";
import { EventID } from "./eventID";
import { EventTypeCode } from "./eventTypeCode";
import { FacilityCode } from "./facilityCode";
import { FacilityTypeCode } from "./facilityTypeCode";
import { OtherFacility } from "./otherFacility";
import { UNLocationCode } from "./uNLocationCode";

/**
 * The equipment event entity is a specialization of the event entity to support specification of data that only applies to an equipment event.
 */
export interface EquipmentEvent extends Event {
  eventType?: EquipmentEvent.EventTypeEnum;
  equipmentReference?: EquipmentReference;
  facilityTypeCode: FacilityTypeCode;
  uNLocationCode: UNLocationCode;
  facilityCode: FacilityCode;
  otherFacility?: OtherFacility;
  emptyIndicatorCode: EmptyIndicatorCode;
}
export namespace EquipmentEvent {
  export type EventTypeEnum = "EQUIPMENT";
  export const EventTypeEnum = {
    EQUIPMENT: "EQUIPMENT" as EventTypeEnum,
  };
}
