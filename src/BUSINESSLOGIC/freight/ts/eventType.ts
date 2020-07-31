/**
 * The Event Type of the object.
 */
export type EventType =
  | "EQUIPMENT"
  | "SHIPMENT"
  | "TRANSPORT"
  | "TRANSPORTEQUIPMENT";

export const EventType = {
  EQUIPMENT: "EQUIPMENT" as EventType,
  SHIPMENT: "SHIPMENT" as EventType,
  TRANSPORT: "TRANSPORT" as EventType,
  TRANSPORTEQUIPMENT: "TRANSPORTEQUIPMENT" as EventType,
};
