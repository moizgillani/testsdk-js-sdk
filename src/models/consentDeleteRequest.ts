/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface ConsentDeleteRequest {
  /** Account identifier. */
  accountName?: string;
  /** Device ID list. */
  deviceList?: string[];
}

export const consentDeleteRequestSchema: Schema<ConsentDeleteRequest> = object({
  accountName: ['accountName', optional(string())],
  deviceList: ['deviceList', optional(array(string()))],
});
