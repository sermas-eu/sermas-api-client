import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UiPrivacyService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any
   * @throws ApiError
   */
  public uiPrivacyControllerUpdatePrivacyPolicy(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/ui/privacy',
    });
  }
}
