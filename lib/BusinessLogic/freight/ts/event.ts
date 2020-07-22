
import { EventClassifierCode } from './eventClassifierCode';
import { EventDateTime } from './eventDateTime';
import { EventID } from './eventID';
import { EventType } from './eventType';
import { EventTypeCode } from './eventTypeCode';

/**
 * The event entity is described as a generalization of all the specific event categories. An event always takes place in relation to a shipment and can additionally be linked to a transport or an equipment
 */
export interface Event { 
    eventID: EventID;
    eventType: EventType;
    eventDateTime: EventDateTime;
    eventClassifierCode: EventClassifierCode;
    eventTypeCode: EventTypeCode;
}