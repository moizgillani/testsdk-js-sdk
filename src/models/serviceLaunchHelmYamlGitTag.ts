/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface ServiceLaunchHelmYamlGitTag {
  tagName?: string;
  valuesYamlPaths?: string[];
}

export const serviceLaunchHelmYamlGitTagSchema: Schema<ServiceLaunchHelmYamlGitTag> = object(
  {
    tagName: ['tagName', optional(string())],
    valuesYamlPaths: ['valuesYamlPaths', optional(array(string()))],
  }
);
