/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Device IMEI list. */
export interface V2LicenseDevice {
  /** Device IMEI. */
  deviceId: string;
  /** License assignment time. */
  assignmentTime?: string;
}

export const v2LicenseDeviceSchema: Schema<V2LicenseDevice> = object({
  deviceId: ['deviceId', string()],
  assignmentTime: ['assignmentTime', optional(string())],
});
