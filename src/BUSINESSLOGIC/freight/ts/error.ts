import { Errors } from "./errors";

export interface Error {
  /**
   * The HTTP request method type
   */
  httpMethod: string;
  /**
   * The request URI.
   */
  requestUri: string;
  errors: Errors;
  /**
   * The HTTP status code
   */
  statusCode: string;
  /**
   * The textual representation of the response status.
   */
  statusCodeText: string;
  /**
   * The date and time (in ISO 8601 format) the error occured.
   */
  errorDateTime: string;
}
