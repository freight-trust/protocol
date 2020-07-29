import { EquipmentEvent } from "./equipmentEvent";
import { ShipmentEvent } from "./shipmentEvent";
import { TransportEquipmentEvent } from "./transportEquipmentEvent";
import { TransportEvent } from "./transportEvent";

export type InlineResponse200 =
  | TransportEvent
  | ShipmentEvent
  | EquipmentEvent
  | TransportEquipmentEvent;
