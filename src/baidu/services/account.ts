import type { BaiduClient } from "../client.js";

// ── Shared Types ──────────────────────────────────────

export interface RegionPriceFactor {
  regionId: number;
  /**
   * 出价系数，取值范围：[0.1, 10.0]
   */
  priceFactor: number;
}

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
  /** 0 - 不设置预算, 1 - 日预算 */
  budgetType: number;
  budgetOfflineTime: string;
  cost: number;
  excludeIp: string;
  openDomains: string;
  payment: number;
  regDomain: string;
  regionTarget: number[];
  /** 1-开户金未到, 2-正常生效, 3-余额为零, 4-未通过审核, 6-审核中, 7-被禁用, 11-预算不足 */
  userStat: number;
  /** 1-三星, 2-二星, 3-一星, 4-未生效 */
  userLevel: number;
  regionPriceFactor: RegionPriceFactor[];
  /** 0 - 该地区内或搜索意图在该地区的所有用户, 1 - 该地区内的所有用户 */
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

// ── updateAccountInfo ─────────────────────────────────

export interface AccountUpdateInfo {
  /** 账户预算，日预算取值范围：[50, 10000000] */
  budget?: number;
  /** 推广地域列表，可选地域名称见地域编码 */
  regionTarget?: number[];
  /** IP排除列表，支持IPv4和IPv6 */
  excludeIp?: string[];
  /** 0 - 不设置预算, 1 - 日预算 */
  budgetType?: number;
  /** 分地域出价系数 */
  regionPriceFactor?: RegionPriceFactor[];
  /** 0 - 该地区内或搜索意图在该地区的所有用户, 1 - 该地区内的所有用户 */
  geoLocationStatus?: number;
  /** true - 启用, false - 关闭 */
  excludeQueryRegionStatus?: boolean;
  /** 创意组件-文字链监控代码，默认值："product=xinxizhenlie_longsublink"，字符限制255 */
  longMonitorSublink?: string;
  /** 通用点击监测地址，长度限制1024 */
  accountMonitorUrl?: string;
}

export interface UpdateAccountInfoParams {
  accountInfo: AccountUpdateInfo;
}

/**
 * 更新username对应的账户信息，如果是来自MCC Token的请求，则更新target对应的账户信息。
 */
export function updateAccountInfo(
  client: BaiduClient,
  params: UpdateAccountInfoParams,
) {
  return client.call<UpdateAccountInfoParams, { data: Partial<AccountUpdateInfo>[] }>(
    "AccountService",
    "updateAccountInfo",
    params,
  );
}
