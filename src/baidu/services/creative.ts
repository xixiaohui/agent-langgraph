import type { BaiduClient } from "../client.js";

// ── Shared Types ─────────────────────────────────────

export interface CreativeType {
  /** 创意ID (updateCreative时必填) */
  creativeId?: number;
  /** 计划ID (addCreative时必填) */
  campaignId?: number;
  /** 推广单元ID (addCreative时必填) */
  adgroupId?: number;
  /** 创意标题 */
  title?: string;
  /** 创意描述第一行 */
  description1?: string;
  /** 创意描述第二行 */
  description2?: string;
  /** 暂停/启用: true-暂停, false-启用 */
  pause?: boolean;
  /** 移动访问网址 */
  mobileDestinationUrl?: string;
  /** 移动显示网址 */
  mobileDisplayUrl?: string;
  /** 计算机访问网址 */
  pcDestinationUrl?: string;
  /** 计算机显示网址 */
  pcDisplayUrl?: string;
  /** 标签，每个标签ID取值范围0-30 */
  tabs?: number[];
  /** 应用调起网址 */
  deeplink?: string;
  /** ios应用调起 */
  ulink?: string;
  /** 小程序访问网址 */
  miniProgramUrl?: string;
  /** 计算机最终访问网址 */
  pcFinalUrl?: string;
  /** 计算机监控后缀 */
  pcTrackParam?: string;
  /** 计算机第三方追踪模板 */
  pcTrackTemplate?: string;
  /** 移动最终访问网址 */
  mobileFinalUrl?: string;
  /** 移动监控后缀 */
  mobileTrackParam?: string;
  /** 移动第三方追踪模板 */
  mobileTrackTemplate?: string;
}

// ── CreativeInfo (response) ──────────────────────────

export interface OfflineReason {
  mainReason?: string;
  detailReason?: string;
}

export interface CreativeInfo {
  creativeId: number;
  campaignId: number;
  adgroupId: number;
  title: string;
  description1: string;
  description2: string;
  pause: boolean;
  /** 创意状态 */
  status: number;
  mobileDestinationUrl: string;
  mobileDisplayUrl: string;
  pcDestinationUrl: string;
  pcDisplayUrl: string;
  offlineReasons: OfflineReason[];
  tabs: number[];
  deeplink: string;
  miniProgramUrl: string;
  createTime: string;
  pcFinalUrl: string;
  pcTrackParam: string;
  pcTrackTemplate: string;
  mobileFinalUrl: string;
  mobileTrackParam: string;
  mobileTrackTemplate: string;
  /** 推广下线主要原因ID，值为"3"时代表审核不通过 */
  mainReason: string;
  /** 推广下线具体原因 */
  detailReason: string;
}

// ── CreativeFields ───────────────────────────────────

export type CreativeField =
  | "creativeId"
  | "adgroupId"
  | "title"
  | "pause"
  | "status"
  | "description1"
  | "description2"
  | "pcDestinationUrl"
  | "pcDisplayUrl"
  | "mobileDestinationUrl"
  | "mobileDisplayUrl"
  | "tabs"
  | "miniProgramUrl"
  | "deeplink"
  | "pcFinalUrl"
  | "pcTrackParam"
  | "pcTrackTemplate"
  | "mobileFinalUrl"
  | "mobileTrackParam"
  | "mobileTrackTemplate"
  | "createTime"
  | "offlineReasons"
  | "mainReason"
  | "detailReason";

// ── deleteCreative ───────────────────────────────────

export interface DeleteCreativeParams {
  /** 创意ID集合，长度限制：[1, 3000] */
  creativeIds: number[];
}

/** 删除推广创意 */
export function deleteCreative(
  client: BaiduClient,
  params: DeleteCreativeParams,
) {
  return client.call<DeleteCreativeParams, { data: Partial<CreativeInfo>[] }>(
    "CreativeService",
    "deleteCreative",
    params,
  );
}

// ── addCreative ──────────────────────────────────────

export interface AddCreativeParams {
  /** 新增推广创意物料，长度限制：[1, 3000] */
  creativeTypes: CreativeType[];
}

/** 新增推广创意 */
export function addCreative(
  client: BaiduClient,
  params: AddCreativeParams,
) {
  return client.call<AddCreativeParams, { data: Partial<CreativeInfo>[] }>(
    "CreativeService",
    "addCreative",
    params,
  );
}

// ── updateCreative ───────────────────────────────────

export interface UpdateCreativeParams {
  /** 更新推广创意字段，长度限制：[1, 3000] */
  creativeTypes: CreativeType[];
}

/** 修改推广创意 */
export function updateCreative(
  client: BaiduClient,
  params: UpdateCreativeParams,
) {
  return client.call<UpdateCreativeParams, { data: Partial<CreativeInfo>[] }>(
    "CreativeService",
    "updateCreative",
    params,
  );
}

// ── getCreative ──────────────────────────────────────

export interface GetCreativeParams {
  /** 查询推广创意字段 */
  creativeFields: CreativeField[];
  /** 查询id集合 */
  ids: number[];
  /** 查询id类型: 5-单元ID, 7-创意ID */
  idType: number;
  /** 是否获取创意影子: 0-只查询创意本身, 1-只查询创意影子 */
  getTemp?: number;
}

/** 查询推广创意 */
export function getCreative(
  client: BaiduClient,
  params: GetCreativeParams,
) {
  return client.call<GetCreativeParams, { data: Partial<CreativeInfo>[] }>(
    "CreativeService",
    "getCreative",
    params,
  );
}
