/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Will provide the current status of the action. */
export interface CurrentStatus {
  /** Will provide the current status of the action. */
  status?: string;
}

export const currentStatusSchema: Schema<CurrentStatus> = object({
  status: ['status', optional(string())],
});
