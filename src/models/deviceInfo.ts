/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** The devices that you want to locate. The array cannot contain more than 20 devices. */
export interface DeviceInfo {
  /** Device identifier. */
  id: string;
  /** Device identifier kind. */
  kind: string;
  /** Device MDN. */
  mdn: string;
}

export const deviceInfoSchema: Schema<DeviceInfo> = object({
  id: ['id', string()],
  kind: ['kind', string()],
  mdn: ['mdn', string()],
});
