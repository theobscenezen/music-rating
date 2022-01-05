import { RequestResult } from './RequestResult';

export class RestClient {
  defaultHeaders = { 'content-type': 'application/json' };

  /**
   * Perform a GET request to receive a response of the given type T
   *
   * @param url of the REST resource
   * @param headers: optional additional headers
   * @constructor type of response T
   */
  public async GET(url: string, headers = {}): Promise<RequestResult> {
    try {
      const response = await fetch(url, {
        headers: { ...this.defaultHeaders, ...headers },
        method: 'get',
      });
      return this.handleResponse(response);
    } catch (err: any) {
      return this.handleError(err);
    }
  }

  /**
   * Perform a POST request to create a new instance of the given payload and
   * receive a response of the given type T
   *
   * @param url of the REST resource
   * @param payload
   * @param headers: optional additional headers
   * @constructor type of response T
   */
  public async POST(url: string, payload: any, headers = {}): Promise<RequestResult> {
    try {
      const response = await fetch(url, {
        headers: { ...this.defaultHeaders, ...headers },
        method: 'post',
        body: JSON.stringify(payload),
      });
      return this.handleResponse(response);
    } catch (err: any) {
      return this.handleError(err);
    }
  }

  /**
   * Perform a PUT request to update an existing instance of the given payload and
   * receive a response of the given type T
   *
   * @param url of the REST resource
   * @param payload
   * @param headers: optional additional headers
   * @constructor type of response T
   */
  public async PUT(url: string, payload: any, headers = {}): Promise<RequestResult> {
    try {
      const response = await fetch(url, {
        headers: { ...this.defaultHeaders, ...headers },
        method: 'put',
        body: JSON.stringify(payload),
      });
      return this.handleResponse(response);
    } catch (err: any) {
      return this.handleError(err);
    }
  }

  /**
   * Perform a DELETE request to remove an instance
   *
   * @param url of the REST resource
   * @param headers: optional additional headers
   * @constructor type of response T
   */
  public async DELETE(url: string, headers = {}): Promise<RequestResult> {
    try {
      const response = await fetch(url, {
        headers: { ...this.defaultHeaders, ...headers },
        method: 'delete',
      });
      return this.handleResponse(response);
    } catch (err: any) {
      return this.handleError(err);
    }
  }

  /**
   * @param url
   * @param fileName
   * @param headers: optional additional headers
   * @constructor
   */
  public static async DOWNLOAD(url: string, fileName: string, headers = {}): Promise<void> {
    const result = await fetch(url, {
        headers,
        method: 'GET',
    });
    if ((result.status >= 200 && result.status < 300) && !result.redirected) {
      const blob = await result.blob();
      const fileUrl = window.URL.createObjectURL(blob);
      const downloadElement = document.createElement('a');
      downloadElement.href = fileUrl;
      downloadElement.download = fileName;
      downloadElement.click();
      downloadElement.remove();
    } else {
      throw new Error('Failed downloading resource');
    }
  }

  private handleError(error: Error) {
    return new RequestResult(null, error);
  }

  private async handleResponse(resp: Response) {
    if (((resp.status >= 200 && resp.status < 300) && !resp.redirected)) {
      const data = await resp.json();
      return new RequestResult(data, null);
    }
    if ((resp.status === 302 || resp.status === 200) && resp.redirected) {
      // clone the response to have access to the body stream even after json parse failed.
      try {
        const jsonResp = resp.clone();
        const data = await jsonResp.json();
        return new RequestResult(data, null);
      } catch (e) {
        const data = await resp.text();
        return new RequestResult(data, null);
      }
    }
    return new RequestResult(null, {
      message: 'Got bad response or redirect from REST API.',
      response: await resp.json(),
    });
  }
}
