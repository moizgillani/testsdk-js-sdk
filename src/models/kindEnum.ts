/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for KindEnum
 */
export enum KindEnum {
  Imei = 'imei',
  Eid = 'eid',
  Esn = 'esn',
  Iccid = 'iccid',
}

/**
 * Schema for KindEnum
 */
export const kindEnumSchema: Schema<KindEnum> = stringEnum(KindEnum);
