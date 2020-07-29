import { BillOfLadingNumber } from "./billOfLadingNumber";
import { BookingReference } from "./bookingReference";
import { CallbackUrl } from "./callbackUrl";
import { EquipmentReference } from "./equipmentReference";
import { EventTypeList } from "./eventTypeList";

/**
 * The object used by the POST event-subscriptions endpoint
 */
export interface EventSubscriptionBody {
  callbackUrl: CallbackUrl;
  eventType?: EventTypeList;
  bookingReference?: BookingReference;
  billOfLadingNumber?: BillOfLadingNumber;
  equipmentReference?: EquipmentReference;
}
