/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ConnectivityManagementResultError,
} from '../errors/connectivityManagementResultError';
import { LogInRequest, logInRequestSchema } from '../models/logInRequest';
import { LogInResult, logInResultSchema } from '../models/logInResult';
import { LogOutRequest, logOutRequestSchema } from '../models/logOutRequest';
import {
  SessionResetPasswordRequest,
  sessionResetPasswordRequestSchema,
} from '../models/sessionResetPasswordRequest';
import {
  SessionResetPasswordResult,
  sessionResetPasswordResultSchema,
} from '../models/sessionResetPasswordResult';
import { optional } from '../schema';
import { BaseController } from './baseController';

export class SessionManagementController extends BaseController {
  /**
   * Initiates a Connectivity Management session and returns a VZ-M2M session token that is required in
   * subsequent API requests.
   *
   * @param body         Request to initiate a session.
   * @return Response from the API call
   */
  async startConnectivityManagementSession(
    body?: LogInRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LogInResult>> {
    const req = this.createRequest('POST', '/v1/session/login');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, optional(logInRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(logInResultSchema, requestOptions);
  }

  /**
   * Ends a Connectivity Management session.
   *
   * @return Response from the API call
   */
  async endConnectivityManagementSession(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LogOutRequest>> {
    const req = this.createRequest('POST', '/v1/session/logout');
    req.baseUrl('M2M');
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(logOutRequestSchema, requestOptions);
  }

  /**
   * The new password is effective immediately. Passwords do not expire, but Verizon recommends changing
   * your password every 90 days.
   *
   * @param body         Request with current password that needs to be reset.
   * @return Response from the API call
   */
  async resetConnectivityManagementPassword(
    body: SessionResetPasswordRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SessionResetPasswordResult>> {
    const req = this.createRequest('PUT', '/v1/session/password/actions/reset');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, sessionResetPasswordRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(sessionResetPasswordResultSchema, requestOptions);
  }
}