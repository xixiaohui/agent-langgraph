import type { BaiduClient } from "../client.js";

// ── Shared response type ──────────────────────────────────

export interface AppBindInfo {
  campaignId: number;
  adgroupId: number;
  name: string;
  version: string;
  /** app操作系统: 1-安卓, 3-iOS, 5-鸿蒙 */
  platform: number;
  cbindId: number;
  channelPackage: string;
  /**
   * 位0=暂停(0启1停), 位1=APP有效(0有效1无效), 位2=审核(0非审核1审核中)
   */
  status: number;
  /** app来源: 0-百度移动应用平台, 1-极速下载, 2-投放平台, 3-百度移动应用平台 */
  appSource: number;
  channelId: number;
  appStoreId: number;
  packageName: string;
}

// ── deleteAdgroupAppBind ──────────────────────────────────

export interface DeleteAdgroupAppBindParams {
  /** 删除绑定Id信息, 单次不超过2000个 */
  delBindIds: number[];
}

/** 删除指定的App绑定(可批量) */
export function deleteAdgroupAppBind(
  client: BaiduClient,
  params: DeleteAdgroupAppBindParams,
) {
  return client.call<DeleteAdgroupAppBindParams, { data: Partial<AppBindInfo>[] }>(
    "AdgroupAppService",
    "deleteAdgroupAppBind",
    params,
  );
}

// ── getAdgroupAppBind ─────────────────────────────────────

export interface GetAdgroupAppBindParams {
  /** 查询id的层级: 2-用户, 3-计划, 5-单元, 8-BIND */
  idType: number;
  ids: number[];
  name?: string;
  /** app操作系统: 1-安卓, 3-iOS, 5-鸿蒙 */
  platform?: number[];
  status?: number[];
  /** 排序字段: platform, status */
  orderBy?: string;
  desc?: boolean;
  /** 分页: [offset, pageSize] */
  limit?: number[];
}

/** 根据查询或筛选条件获取app绑定关系详情 */
export function getAdgroupAppBind(
  client: BaiduClient,
  params: GetAdgroupAppBindParams,
) {
  return client.call<GetAdgroupAppBindParams, { data: Partial<AppBindInfo>[] }>(
    "AdgroupAppService",
    "getAdgroupAppBind",
    params,
  );
}

// ── addAdgroupAppBind ─────────────────────────────────────

export interface AppBindAddItem {
  /** Android包唯一标识, channelId和appStoreId必选一个 */
  channelId?: number;
  /** IOS包唯一标识, channelId和appStoreId必选一个 */
  appStoreId?: number;
  /** app操作系统: 1-安卓, 3-iOS, 5-鸿蒙 */
  platform: number;
  adgroupId: number;
}

export interface AddAdgroupAppBindParams {
  /** 新增APP绑定对象数组, 单次不超过2000个 */
  addBinds: AppBindAddItem[];
}

/** 新增(更新)单元与APP的绑定 */
export function addAdgroupAppBind(
  client: BaiduClient,
  params: AddAdgroupAppBindParams,
) {
  return client.call<AddAdgroupAppBindParams, { data: Partial<AppBindInfo>[] }>(
    "AdgroupAppService",
    "addAdgroupAppBind",
    params,
  );
}
