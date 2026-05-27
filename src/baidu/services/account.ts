import type { BaiduClient } from "../client.js";

// ── getAccountInfo ────────────────────────────────────

export type AccountField =
  | "userId"
  | "balance"
  | "pcBalance"
  | "budget"
  | "budgetType"
  | "budgetOfflineTime"
  | "cost"
  | "excludeIp"
  | "openDomains"
  | "payment"
  | "regDomain"
  | "regionTarget"
  | "userStat"
  | "userLevel"
  | "regionPriceFactor"
  | "geoLocationStatus"
  | "excludeQueryRegionStatus"
  | "longMonitorSublink"
  | "accountMonitorUrl"
  | "cid"
  | "liceName";

export interface GetAccountInfoParams {
  accountFields: AccountField[];
}

export interface AccountInfo {
  userId: number;
  balance: number;
  pcBalance: number;
  budget: number;
  budgetType: number;
  budgetOfflineTime: string;
  cost: number;
  excludeIp: string;
  openDomains: string;
  payment: number;
  regDomain: string;
  regionTarget: number[];
  userStat: number;
  userLevel: number;
  regionPriceFactor: Array<{
    regionId: number;
    priceFactor: number;
  }>;
  geoLocationStatus: number;
  excludeQueryRegionStatus: number;
  longMonitorSublink: string;
  accountMonitorUrl: string;
  cid: number;
  liceName: string;
}

/**
 * Query account info fields. The return type only includes the fields
 * actually requested, but for simplicity we type it as the full structure.
 */
export function getAccountInfo(
  client: BaiduClient,
  params: GetAccountInfoParams,
) {
  return client.call<GetAccountInfoParams, { data: Partial<AccountInfo>[] }>(
    "AccountService",
    "getAccountInfo",
    params,
  );
}
