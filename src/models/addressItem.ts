/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface AddressItem {
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  zip4?: string;
}

export const addressItemSchema: Schema<AddressItem> = object({
  addressLine1: ['addressLine1', optional(string())],
  addressLine2: ['addressLine2', optional(string())],
  city: ['city', optional(string())],
  state: ['state', optional(string())],
  country: ['country', optional(string())],
  zip: ['zip', optional(string())],
  zip4: ['zip4', optional(string())],
});
