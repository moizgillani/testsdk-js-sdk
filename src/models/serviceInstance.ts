/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { ClusterInfra, clusterInfraSchema } from './clusterInfra';
import { ClusterMetadata, clusterMetadataSchema } from './clusterMetadata';
import {
  DeploymentTypeEnum,
  deploymentTypeEnumSchema,
} from './deploymentTypeEnum';
import {
  EdgeServiceLaunchParams,
  edgeServiceLaunchParamsSchema,
} from './edgeServiceLaunchParams';
import {
  EdgeServiceWorkload,
  edgeServiceWorkloadSchema,
} from './edgeServiceWorkload';
import {
  EdsDiscoveryIntent,
  edsDiscoveryIntentSchema,
} from './edsDiscoveryIntent';
import { RegionItem, regionItemSchema } from './regionItem';
import { Revision, revisionSchema } from './revision';
import { VirtualMachine, virtualMachineSchema } from './virtualMachine';
import { WorkloadTypeEnum, workloadTypeEnumSchema } from './workloadTypeEnum';

export interface ServiceInstance {
  /** Instance UUID generated by OF. */
  id?: string;
  /** User display name for Service Instance Id. */
  name: string;
  /** Name of the Service. */
  serviceName?: string;
  /** Auto derived time of creation. */
  createdAt?: string;
  /** Last modified time. */
  modifiedAt?: string;
  labels?: EdgeServiceLaunchParams;
  /** Name of the service Instance Project(Project Name). */
  projectName?: string;
  revision: Revision;
  /** Name space inside cluster. */
  nameSpace?: string;
  /** Default MEC platform for deploying service. */
  deploymentType?: DeploymentTypeEnum;
  solutionRegulations?: RegionItem[];
  edsDiscoveryIntent?: EdsDiscoveryIntent;
  /** Default service type. */
  workLoadType?: WorkloadTypeEnum;
  clusterInfo?: ClusterMetadata;
  virtualMachineInfo?: VirtualMachine;
  workload?: EdgeServiceWorkload[];
  rafayClusterInfra?: ClusterInfra;
  /** Id of particular customer. */
  customerId?: string;
  /** Id of a user. */
  userId?: string;
}

export const serviceInstanceSchema: Schema<ServiceInstance> = object({
  id: ['id', optional(string())],
  name: ['name', string()],
  serviceName: ['serviceName', optional(string())],
  createdAt: ['createdAt', optional(string())],
  modifiedAt: ['modifiedAt', optional(string())],
  labels: ['labels', optional(lazy(() => edgeServiceLaunchParamsSchema))],
  projectName: ['projectName', optional(string())],
  revision: ['revision', lazy(() => revisionSchema)],
  nameSpace: ['nameSpace', optional(string())],
  deploymentType: ['deploymentType', optional(deploymentTypeEnumSchema)],
  solutionRegulations: [
    'solutionRegulations',
    optional(array(lazy(() => regionItemSchema))),
  ],
  edsDiscoveryIntent: [
    'edsDiscoveryIntent',
    optional(lazy(() => edsDiscoveryIntentSchema)),
  ],
  workLoadType: ['workLoadType', optional(workloadTypeEnumSchema)],
  clusterInfo: ['clusterInfo', optional(lazy(() => clusterMetadataSchema))],
  virtualMachineInfo: [
    'virtualMachineInfo',
    optional(lazy(() => virtualMachineSchema)),
  ],
  workload: [
    'workload',
    optional(array(lazy(() => edgeServiceWorkloadSchema))),
  ],
  rafayClusterInfra: [
    'rafayClusterInfra',
    optional(lazy(() => clusterInfraSchema)),
  ],
  customerId: ['customerId', optional(string())],
  userId: ['userId', optional(string())],
});
