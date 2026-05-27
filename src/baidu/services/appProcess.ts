import type { BaiduClient } from "../client.js";

// ── Shared types ──────────────────────────────────────────

export interface AppInfoItem {
  /** app名称 */
  name: string;
  /** app版本 */
  version: string;
  /** app操作系统: 1-安卓, 3-iOS */
  platform: number;
  /** app版本Id */
  versionId: number;
  /** app唯一标识 */
  appId: number;
  /** app包名 */
  packageName: string;
  /** app状态: 0-有效, 1-无效, 2-审核中 */
  status: number;
  /** app来源: 0-百度移动应用平台, 1-极速下载, 2-投放平台, 3-百度移动应用平台 */
  appSource: number;
  /** Android包唯一标识 */
  channelId: number;
  /** IOS包唯一标识 */
  appStoreId: number;
  /** app图标 */
  icon: string;
  /** app下载地址 */
  downloadUrl: string;
  /** app渠道包名称 */
  channelName: string;
}

export interface AppListResult {
  /** 应用列表 */
  appInfoList: AppInfoItem[];
  /** 应用总数 */
  totalCount: number;
}

// ── getAppList ────────────────────────────────────────────

export interface GetAppListParams {
  /** app操作系统: 1-安卓, 3-iOS */
  platforms?: number[];
  /** 分页: [offset, pageSize] */
  limit?: number[];
}

/** 获取可投放的APP信息 */
export function getAppList(
  client: BaiduClient,
  params: GetAppListParams,
) {
  return client.call<GetAppListParams, { data: Partial<AppListResult>[] }>(
    "AppProcessService",
    "getAppList",
    params,
  );
}
