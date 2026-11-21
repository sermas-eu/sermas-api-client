import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export type TDataPlatformModuleProxyControllerTriggerGet = {
  moduleId: string;
  operationId: string;
};
export type TDataPlatformModuleProxyControllerTriggerPost = {
  moduleId: string;
  operationId: string;
};
export type TDataPlatformModuleProxyControllerTriggerPut = {
  moduleId: string;
  operationId: string;
};
export type TDataPlatformModuleProxyControllerTriggerDelete = {
  moduleId: string;
  operationId: string;
};
export type TDataPlatformModuleProxyControllerTriggerPatch = {
  moduleId: string;
  operationId: string;
};
export type TDataPlatformModuleProxyControllerTriggerOptions = {
  moduleId: string;
  operationId: string;
};
export type TDataPlatformModuleProxyControllerTriggerHead = {
  moduleId: string;
  operationId: string;
};

export class PlatformModuleProxyService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any
   * @throws ApiError
   */
  public platformModuleProxyControllerTriggerGet(
    data: TDataPlatformModuleProxyControllerTriggerGet,
  ): CancelablePromise<any> {
    const { moduleId, operationId } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/module/{moduleId}/{operationId}',
      path: {
        moduleId,
        operationId,
      },
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public platformModuleProxyControllerTriggerPost(
    data: TDataPlatformModuleProxyControllerTriggerPost,
  ): CancelablePromise<any> {
    const { moduleId, operationId } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/module/{moduleId}/{operationId}',
      path: {
        moduleId,
        operationId,
      },
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public platformModuleProxyControllerTriggerPut(
    data: TDataPlatformModuleProxyControllerTriggerPut,
  ): CancelablePromise<any> {
    const { moduleId, operationId } = data;
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/module/{moduleId}/{operationId}',
      path: {
        moduleId,
        operationId,
      },
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public platformModuleProxyControllerTriggerDelete(
    data: TDataPlatformModuleProxyControllerTriggerDelete,
  ): CancelablePromise<any> {
    const { moduleId, operationId } = data;
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/module/{moduleId}/{operationId}',
      path: {
        moduleId,
        operationId,
      },
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public platformModuleProxyControllerTriggerPatch(
    data: TDataPlatformModuleProxyControllerTriggerPatch,
  ): CancelablePromise<any> {
    const { moduleId, operationId } = data;
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/module/{moduleId}/{operationId}',
      path: {
        moduleId,
        operationId,
      },
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public platformModuleProxyControllerTriggerOptions(
    data: TDataPlatformModuleProxyControllerTriggerOptions,
  ): CancelablePromise<any> {
    const { moduleId, operationId } = data;
    return this.httpRequest.request({
      method: 'OPTIONS',
      url: '/api/module/{moduleId}/{operationId}',
      path: {
        moduleId,
        operationId,
      },
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public platformModuleProxyControllerTriggerHead(
    data: TDataPlatformModuleProxyControllerTriggerHead,
  ): CancelablePromise<any> {
    const { moduleId, operationId } = data;
    return this.httpRequest.request({
      method: 'HEAD',
      url: '/api/module/{moduleId}/{operationId}',
      path: {
        moduleId,
        operationId,
      },
    });
  }
}
