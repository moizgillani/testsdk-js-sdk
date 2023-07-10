/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Errors related to service. */
export interface ServiceError {
  /** Category defined under which the error falls. */
  errorCategory?: string;
  /** Error Code is required. */
  errorCode?: string;
  /** Error description is required. */
  errorDesc?: string;
  /** Sub-category of the error defined. */
  errorSubcategory?: string;
}

export const serviceErrorSchema: Schema<ServiceError> = object({
  errorCategory: ['errorCategory', optional(string())],
  errorCode: ['errorCode', optional(string())],
  errorDesc: ['errorDesc', optional(string())],
  errorSubcategory: ['errorSubcategory', optional(string())],
});
