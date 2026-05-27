import type { BaiduAuth, BaiduClientConfig, BaiduRequest, BaiduResponse } from "./types.js";

export class BaiduClient {
  private baseUrl: string;
  private auth: BaiduAuth;

  constructor(config: BaiduClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, "");
    this.auth = config.auth;
  }

  /**
   * Create a new client with different auth (e.g. per-account credentials).
   */
  withAuth(auth: Partial<BaiduAuth>): BaiduClient {
    return new BaiduClient({
      baseUrl: this.baseUrl,
      auth: { ...this.auth, ...auth },
    });
  }

  /**
   * Call any Baidu Marketing API endpoint.
   *
   * URL pattern: /json/sms/service/{ServiceName}/{MethodName}
   *
   * @example
   * const res = await client.call("AccountService", "getAccountInfo", {
   *   accountFields: ["userId", "balance"],
   * });
   */
  async call<TBody, TResult>(
    service: string,
    method: string,
    body: TBody,
  ): Promise<BaiduResponse<TResult>> {
    const url = `${this.baseUrl}/json/sms/service/${service}/${method}`;
    const payload: BaiduRequest<TBody> = {
      header: this.auth,
      body,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(
        `Baidu API HTTP ${res.status}: ${res.statusText}`,
      );
    }

    const json = (await res.json()) as BaiduResponse<TResult>;

    if (json.header.failures?.length) {
      const messages = json.header.failures
        .map((f) => `[${f.code}] ${f.message} at ${f.position}`)
        .join("; ");
      throw new Error(
        `Baidu API error (status=${json.header.status}): ${messages}`,
      );
    }

    return json;
  }
}
