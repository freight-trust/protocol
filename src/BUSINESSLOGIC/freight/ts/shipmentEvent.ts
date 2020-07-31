import { Event } from "./event";
import { EventClassifierCode } from "./eventClassifierCode";
import { EventDateTime } from "./eventDateTime";
import { EventID } from "./eventID";
import { EventTypeCode } from "./eventTypeCode";
import { ShipmentInformationTypeCode } from "./shipmentInformationTypeCode";

/**
 * The shipment event entity is a specialization of the event entity to support specification of data that only applies to a shipment event.
 */
export interface ShipmentEvent extends Event {
  eventType?: ShipmentEvent.EventTypeEnum;
  shipmentInformationTypeCode: ShipmentInformationTypeCode;
}
export namespace ShipmentEvent {
  export type EventTypeEnum = "SHIPMENT";
  export const EventTypeEnum = {
    SHIPMENT: "SHIPMENT" as EventTypeEnum,
  };
}
