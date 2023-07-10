/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface RequestResponse {
  requestId?: string;
}

export const requestResponseSchema: Schema<RequestResponse> = object({
  requestId: ['requestId', optional(string())],
});
