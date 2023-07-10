/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ClusterSpec {
  blueprintRef?: string;
  overrideSelector?: string;
  shareMode?: string;
}

export const clusterSpecSchema: Schema<ClusterSpec> = object({
  blueprintRef: ['blueprintRef', optional(string())],
  overrideSelector: ['overrideSelector', optional(string())],
  shareMode: ['shareMode', optional(string())],
});
