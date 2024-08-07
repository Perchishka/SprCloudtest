import { APIRequestContext, APIResponse } from "@playwright/test";
import { Method, WithResposeFields } from "../helpers/types";

export abstract class BaseApi {
  private request: APIRequestContext;
  protected url!: string;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async create<T>(data: T): Promise<{
    body: WithResposeFields<T>;
    status: boolean;
    statusCode: number;
  }> {
    const response = await this.request.post(this.url, {
      data,
    });
    return this.parseResponse(response);
  }

  async update<T>(
    id: number,
    method: Method,
    data: T
  ): Promise<{
    body: WithResposeFields<T>;
    status: boolean;
    statusCode: number;
  }> {
    const response = await this.request[method](this.url + `/${id}`, {
      data,
    });
    return this.parseResponse(response);
  }

  async delete(id: number): Promise<{
    status: boolean;
    statusCode: number;
  }> {
    const response = await this.request.delete(this.url + `/${id}`);
    return this.parseResponse(response);
  }

  async parseResponse(response: APIResponse) {
    let body;
    if (response.status() != 204) {
      body = await response.json();
    }
    const status = response.ok();
    const statusCode = response.status();
    return { body: body, status, statusCode };
  }
}
