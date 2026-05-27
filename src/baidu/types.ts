/**
 * Baidu Marketing API - Shared Types
 *
 * Request envelope:  { header: AuthHeader, body: MethodParams }
 * Response envelope: { header: ResHeader, body: MethodResult }
 */

// ── Auth ──────────────────────────────────────────────

export interface BaiduAuth {
  userName: string;
  accessToken: string;
}

// ── Request / Response Envelopes ──────────────────────

export interface BaiduRequest<T = unknown> {
  header: BaiduAuth;
  body: T;
}

export interface BaiduResponseHeader {
  status: number;
  failures?: Array<{ code: number; message: string; position: string }>;
  rquota?: number;
}

export interface BaiduResponse<T = unknown> {
  header: BaiduResponseHeader;
  body: T;
}

// ── Client Config ─────────────────────────────────────

export interface BaiduClientConfig {
  baseUrl: string;
  auth: BaiduAuth;
}
