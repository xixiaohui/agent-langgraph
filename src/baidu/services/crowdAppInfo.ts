import type { BaiduClient } from "../client.js";

// ── AppInfoFields ────────────────────────────────────

export type AppInfoField = "id" | "name";

// ── AppInfo (response) ───────────────────────────────

export interface AppInfo {
  /** 应用ID */
  id: string;
  /** 应用名称 */
  name: string;
  /** 频次 */
  frequency: number;
  /** 应用分类 */
  category: string;
}

// ── getAppInfo ───────────────────────────────────────

export interface GetAppInfoParams {
  /** 应用ID */
  appIds?: string[];
  /** 模糊查询的应用名称 */
  appNameLike?: string;
  /** 返回字段: id-应用ID, name-应用名称 */
  fields?: AppInfoField[];
  /** 分页参数 [偏移量, 分页大小]，最大10000 */
  limit?: number[];
  /** 排序字段: id-应用ID, name-应用名称 */
  orderBy?: string;
  /** true-倒序, false-正序 */
  desc?: boolean;
}

/** 查询App信息 */
export function getAppInfo(
  client: BaiduClient,
  params: GetAppInfoParams,
) {
  return client.call<GetAppInfoParams, { data: Partial<AppInfo>[] }>(
    "CrowdAppInfoService",
    "getAppInfo",
    params,
  );
}
