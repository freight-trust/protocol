import { BillOfLadingNumber } from "./billOfLadingNumber";
import { BookingReference } from "./bookingReference";
import { CallbackUrl } from "./callbackUrl";
import { EquipmentReference } from "./equipmentReference";
import { EventSubscriptionBody } from "./eventSubscriptionBody";
import { EventTypeList } from "./eventTypeList";
import { SubscriptionID } from "./subscriptionID";

export interface EventSubscription extends SubscriptionID {
  callbackUrl: CallbackUrl;
  eventType?: EventTypeList;
  bookingReference?: BookingReference;
  billOfLadingNumber?: BillOfLadingNumber;
  equipmentReference?: EquipmentReference;
}
