/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { HookTypeEnum, hookTypeEnumSchema } from './hookTypeEnum';
import { Repository, repositorySchema } from './repository';
import {
  SourceCodeTypeEnum,
  sourceCodeTypeEnumSchema,
} from './sourceCodeTypeEnum';
import { UploadTypeEnum, uploadTypeEnumSchema } from './uploadTypeEnum';
import {
  WorkloadRevisionTypeEnum,
  workloadRevisionTypeEnumSchema,
} from './workloadRevisionTypeEnum';

/** `installationWf` attribute of a service. */
export interface InstallationWf {
  hookType?: HookTypeEnum;
  /** Allowed values are: GIT files (PULL_FROM_REPO), MANUAL_UPLOAD. */
  uploadType?: UploadTypeEnum;
  /** Repository ID of an existing repository. */
  repositoryId?: string;
  /** Users can create a repository to maintain service artifacts. Repository would be either a Git or HELM repository. */
  repository?: Repository;
  /** Source code type can be JAVA or GO. */
  sourceCodeType?: SourceCodeTypeEnum;
  /** Revision type can be a BRANCH or TAG. */
  revisionType?: WorkloadRevisionTypeEnum;
  /** Branch or tag name. */
  name?: string;
  /** The workflow path. */
  path?: string;
}

export const installationWfSchema: Schema<InstallationWf> = object({
  hookType: ['hookType', optional(hookTypeEnumSchema)],
  uploadType: ['uploadType', optional(uploadTypeEnumSchema)],
  repositoryId: ['repositoryId', optional(string())],
  repository: ['repository', optional(lazy(() => repositorySchema))],
  sourceCodeType: ['sourceCodeType', optional(sourceCodeTypeEnumSchema)],
  revisionType: ['revisionType', optional(workloadRevisionTypeEnumSchema)],
  name: ['name', optional(string())],
  path: ['path', optional(string())],
});