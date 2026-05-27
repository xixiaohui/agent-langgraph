import type { BaiduClient } from "../client.js";

// ── Shared types ──────────────────────────────────────────

export interface DpaBasicCreativeType {
  /** 通用标题, 长度[1,1024] */
  title?: string;
  /** 通用描述, 长度[1,1024] */
  desc?: string;
  /** pc链接, 长度[0,1024] */
  pcLinkUrl?: string;
  /** 无线端链接, 长度[0,1024] */
  wirelessLinkUrl?: string;
  /** 无线小程序链接, 长度[0,1024] */
  wirelessLinkUrlBoxApp?: string;
  /** 无线deeplink链接, 长度[0,1024] */
  wirelessLinkUrlDeepLink?: string;
}

export interface DpaHuituCreativeField {
  name?: string;
  value?: string;
}

export interface DpaHuituCreative {
  groupId?: number;
  templateId?: number;
  mtId?: number;
  fields?: DpaHuituCreativeField[];
}

export interface DpaProductCreativeType {
  creativeId?: number;
  /** 样式ID */
  mtId?: number;
  /** 样式模板ID */
  templateId?: number;
  /** 创意状态: ENABLED-生效, DISABLED-搁置, DELETED-删除, EDIT-编辑 */
  status?: string;
  /** 样式英文名称 */
  enName?: string;
  /** Key-value形式的物料数据 */
  data?: Record<string, string>;
  huituCreative?: DpaHuituCreative;
  /** 模板组ID */
  groupId?: number;
  /** 行业ID */
  schemaId?: number;
  /** 模板版本 */
  version?: number;
  /** 慧图创意字段 */
  fields?: DpaHuituCreativeField[];
}

export interface DpaCreativeType {
  userId?: number;
  campaignId?: number;
  adgroupId?: number;
  basicCreative?: DpaBasicCreativeType;
  productCreatives?: DpaProductCreativeType[];
  /** 创意通用展示URL, 长度[1,1024] */
  showUrl?: string;
  /** 下标 */
  index?: number;
  /** 监控url, 长度[0,1024] */
  monitorUrl?: string;
}

export interface DpaCreativeTypeInput {
  userId: number;
  campaignId: number;
  adgroupId: number;
  basicCreative: DpaBasicCreativeType;
  productCreatives: DpaProductCreativeType[];
  showUrl: string;
  index?: number;
  monitorUrl?: string;
}

// ── deleteDpaCreative ─────────────────────────────────────

export interface DeleteDpaCreativeParams {
  /** 创意ID, 集合长度[0,100], 与adgroupIds二选一, 优先按creativeIds删除 */
  creativeIds?: number[];
  /** 商品单元ID, 集合长度[0,100] */
  adgroupIds?: number[];
}

export interface DeleteDpaCreativeResult {
  creativeIds: number[];
  adgroupIds: number[];
}

/** 根据商品单元ID或创意ID删除商品单元中的创意 */
export function deleteDpaCreative(
  client: BaiduClient,
  params: DeleteDpaCreativeParams,
) {
  return client.call<DeleteDpaCreativeParams, { data: Partial<DeleteDpaCreativeResult>[] }>(
    "DpaApiCreativeService",
    "deleteDpaCreative",
    params,
  );
}

// ── addDpaCreative ────────────────────────────────────────

export interface AddDpaCreativeParams {
  /** 商品单元创意, 集合长度[1,100] */
  dpaCreativeTypes: DpaCreativeTypeInput[];
}

/** 新增商品计划高级创意, 每个单元下每种样式只能新增一个 */
export function addDpaCreative(
  client: BaiduClient,
  params: AddDpaCreativeParams,
) {
  return client.call<AddDpaCreativeParams, { data: Partial<DpaCreativeType>[] }>(
    "DpaApiCreativeService",
    "addDpaCreative",
    params,
  );
}

// ── updateDpaCreative ─────────────────────────────────────

export interface UpdateDpaCreativeParams {
  /** 创意类型, 集合长度[1,100] */
  dpaCreativeTypes: DpaCreativeTypeInput[];
}

/** 为多个单元批量更新创意 */
export function updateDpaCreative(
  client: BaiduClient,
  params: UpdateDpaCreativeParams,
) {
  return client.call<UpdateDpaCreativeParams, { data: Partial<DpaCreativeType>[] }>(
    "DpaApiCreativeService",
    "updateDpaCreative",
    params,
  );
}

// ── getDpaCreative ────────────────────────────────────────

export interface GetDpaCreativeParams {
  /** 商品单元ID, 集合长度[0,100] */
  ids: number[];
}

/** 根据商品单元ID查询创意列表 */
export function getDpaCreative(
  client: BaiduClient,
  params: GetDpaCreativeParams,
) {
  return client.call<GetDpaCreativeParams, { data: Partial<DpaCreativeType>[] }>(
    "DpaApiCreativeService",
    "getDpaCreative",
    params,
  );
}
