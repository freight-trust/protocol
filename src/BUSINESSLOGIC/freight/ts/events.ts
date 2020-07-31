import { EquipmentEvent } from "./equipmentEvent";
import { ShipmentEvent } from "./shipmentEvent";
import { TransportEquipmentEvent } from "./transportEquipmentEvent";
import { TransportEvent } from "./transportEvent";

/**
 * List of events for shipment journey.
 */
export interface Events {
  events: Array<
    TransportEvent | ShipmentEvent | EquipmentEvent | TransportEquipmentEvent
  >;
}
