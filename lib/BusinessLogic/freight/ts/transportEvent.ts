
import { Event } from './event';
import { EventClassifierCode } from './eventClassifierCode';
import { EventDateTime } from './eventDateTime';
import { EventID } from './eventID';
import { EventTypeCode } from './eventTypeCode';
import { FacilityCode } from './facilityCode';
import { FacilityTypeCode } from './facilityTypeCode';
import { ModeOfTransportCode } from './modeOfTransportCode';
import { OtherFacility } from './otherFacility';
import { TransportLegReference } from './transportLegReference';
import { TransportReference } from './transportReference';
import { UNLocationCode } from './uNLocationCode';

/**
 * The transport event entity is a specialization of the event entity to support specification of data that only applies to a transport event.
 */
export interface TransportEvent extends Event { 
    eventType?: TransportEvent.EventTypeEnum;
    transportReference: TransportReference;
    transportLegReference: TransportLegReference;
    facilityTypeCode: FacilityTypeCode;
    uNLocationCode: UNLocationCode;
    facilityCode: FacilityCode;
    otherFacility?: OtherFacility;
    modeOfTransportCode?: ModeOfTransportCode;
}
export namespace TransportEvent {
    export type EventTypeEnum = 'TRANSPORT';
    export const EventTypeEnum = {
        TRANSPORT: 'TRANSPORT' as EventTypeEnum
    };
}