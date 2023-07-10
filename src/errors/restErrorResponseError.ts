/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of RestErrorResponse
 */
interface RestErrorResponse {
  errorCode?: string;
  errorMessage?: string;
}

export class RestErrorResponseError extends ApiError<RestErrorResponse> {}
