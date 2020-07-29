/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from "@angular/core";
// import { HttpClient, HttpHeaders, HttpParams,
//         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from "/encoder";

import { Observable } from "rxjs";

import { BillOfLadingNumber } from "./ts/billOfLadingNumber";
import { BookingReference } from "./ts/bookingReference";
import { EquipmentReference } from "./ts/equipmentReference";
import { EventTypeList } from "./ts/eventTypeList";
import { Events } from "./ts/events";
import { InlineResponse200 } from "./ts/inlineResponse200";

import { BASE_PATH, COLLECTION_FORMATS } from "/variables";
import { Configuration } from "/configuration";

@Injectable()
export class EventsService {
  //   protected basePath = 'https://services.freighttrust.com/base';
  //   public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  /*
  //  constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
  private canConsumeForm(consumes: string[]): boolean {
    const form = "multipart/form-data";
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  /**
   * Find events by eventID.
   * Returns event with the specified eventID.
   * @param eventID The ID of the event to receive
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public eventsEventIDGet(
    eventID: string,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<InlineResponse200>;
  public eventsEventIDGet(
    eventID: string,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<InlineResponse200>>;
  public eventsEventIDGet(
    eventID: string,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<InlineResponse200>>;
  public eventsEventIDGet(
    eventID: string,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (eventID === null || eventID === undefined) {
      throw new Error(
        "Required parameter eventID was null or undefined when calling eventsEventIDGet."
      );
    }

    //   let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ["application/json"];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      //         headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    /**
        return this.httpClient.request<InlineResponse200>('get',`${this.basePath}/events/${encodeURIComponent(String(eventID))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find events by type, Booking Reference, Bill of Lading or Equipment Reference.
     * Returns all events filtered by the parameters.
     * @param eventType The type of event(s) to filter by.
     * @param bookingReference The identifier for a shipment, which is issued by and unique within each of the carriers.
     * @param billOfLadingNumber Bill of lading number is an identifier that links to a shipment. Bill of Lading is the legal document issued to the customer, which confirms the carrier&#x27;s receipt of the cargo from the customer acknowledging goods being shipped and specifying the terms of delivery.
     * @param equipmentReference The unique identifier for the equipment, which should follow the BIC ISO Container Identification Number where possible.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    // public eventsGet(eventType?: EventTypeList, bookingReference?: BookingReference, billOfLadingNumber?: BillOfLadingNumber, equipmentReference?: EquipmentReference, observe?: 'body', reportProgress?: boolean): Observable<Events>;
    //   public eventsGet(eventType?: EventTypeList, bookingReference?: BookingReference, billOfLadingNumber?: BillOfLadingNumber, equipmentReference?: EquipmentReference, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Events>>;
    //   public eventsGet(eventType?: EventTypeList, bookingReference?: BookingReference, billOfLadingNumber?: BillOfLadingNumber, equipmentReference?: EquipmentReference, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Events>>;
    // public eventsGet(eventType?: EventTypeList, bookingReference?: BookingReference, billOfLadingNumber?: BillOfLadingNumber, equipmentReference?: EquipmentReference, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

    /*
        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (eventType !== undefined && eventType !== null) {
            queryParameters = queryParameters.set('eventType', <any>eventType);
        }
        if (bookingReference !== undefined && bookingReference !== null) {
            queryParameters = queryParameters.set('bookingReference', <any>bookingReference);
        }
        if (billOfLadingNumber !== undefined && billOfLadingNumber !== null) {
            queryParameters = queryParameters.set('billOfLadingNumber', <any>billOfLadingNumber);
        }
        if (equipmentReference !== undefined && equipmentReference !== null) {
            queryParameters = queryParameters.set('equipmentReference', <any>equipmentReference);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Events>('get',`${this.basePath}/events`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
*/
  }
}
