import type { BaiduClient } from "../client.js";

// ── Shared types ──────────────────────────────────────────

export interface CreativeType {
  creativeGroupId?: number;
  /** 样式ID */
  formatId?: number;
  /** 模板ID */
  templateId?: number;
  /** json形式的物料数据 */
  templateFields?: string;
}

export interface CreativeGroupType {
  /** 创意组ID (更新时必填) */
  creativeGroupId?: number;
  /** 创意组名称, 长度[1,64] */
  creativeGroupName?: string;
  /** 商品组ID */
  productSetId?: number;
  /** 商品目录ID (新增时必填) */
  catalogId?: number;
  /** 是否暂停: true-暂停, false-开启 */
  pause?: boolean;
  /** 监控url, 长度[0,1024] */
  monitorUrl?: string;
}

export interface RangeItem {
  /** 绑定到账户时计划ID为0 */
  campaignId: number;
  /** 绑定到账户或计划时单元ID为0 */
  adgroupId: number;
  userId: number;
}

export interface SetRangeRequest {
  creativeGroupId: number;
  rangeItems: RangeItem[];
}

export interface CreativeGroupInfo {
  creativeGroupId: number;
  creativeGroupName: string;
  productSetId: number;
  catalogId: number;
  rangeItems: RangeItem[];
  formatIds: number[];
  pause: boolean;
  monitorUrl: string;
  campaignId: number;
  adgroupId: number;
  userId: number;
}

export interface TemplateField {
  field: string;
  defaultValue: string;
  datasource: string[];
  /** 字段类型: URL-链接, TEXT-文本, IMAGE-图片 */
  type: string;
}

export interface FormatTemplate {
  formatId: number;
  formatName: string;
  templateId: number;
  templateFields: TemplateField[];
}

// ── deleteCreativeGroup ───────────────────────────────────

export interface DeleteCreativeGroupParams {
  /** 创意组ids, 集合长度[1,100] */
  creativeGroupId: number[];
}

/** 根据创意组ID删除创意组, 会同时删除创意组下的创意等从属信息 */
export function deleteCreativeGroup(
  client: BaiduClient,
  params: DeleteCreativeGroupParams,
) {
  return client.call<DeleteCreativeGroupParams, { data: Record<string, never>[] }>(
    "DpaCreativeService",
    "deleteCreativeGroup",
    params,
  );
}

// ── deleteCreatives ───────────────────────────────────────

export interface DeleteCreativesParams {
  creativeGroupId: number;
  /** 样式ID, 集合长度[1,100] */
  formatId: number[];
}

/** 根据创意组ID和样式ID删除创意组下的样式(创意) */
export function deleteCreatives(
  client: BaiduClient,
  params: DeleteCreativesParams,
) {
  return client.call<DeleteCreativesParams, { data: Record<string, never>[] }>(
    "DpaCreativeService",
    "deleteCreatives",
    params,
  );
}

// ── addCreatives ──────────────────────────────────────────

export interface AddCreativesParams {
  creativeGroupId: number;
  /** 创意对象, 集合长度[1,100] */
  creativeTypes: CreativeType[];
}

/** 新增创意 */
export function addCreatives(
  client: BaiduClient,
  params: AddCreativesParams,
) {
  return client.call<AddCreativesParams, { data: Record<string, never>[] }>(
    "DpaCreativeService",
    "addCreatives",
    params,
  );
}

// ── updateCreativeGroup ───────────────────────────────────

export interface UpdateCreativeGroupParams {
  creativeGroupType: CreativeGroupType;
}

export interface UpdateCreativeGroupResult {
  creativeGroupId: number;
}

/** 更新创意组 */
export function updateCreativeGroup(
  client: BaiduClient,
  params: UpdateCreativeGroupParams,
) {
  return client.call<UpdateCreativeGroupParams, { data: Partial<UpdateCreativeGroupResult>[] }>(
    "DpaCreativeService",
    "updateCreativeGroup",
    params,
  );
}

// ── updateCreatives ───────────────────────────────────────

export interface UpdateCreativesParams {
  creativeGroupId: number;
  /** 创意对象, 集合长度[1,100] */
  creativeTypes: CreativeType[];
}

/** 更新创意 */
export function updateCreatives(
  client: BaiduClient,
  params: UpdateCreativesParams,
) {
  return client.call<UpdateCreativesParams, { data: Record<string, never>[] }>(
    "DpaCreativeService",
    "updateCreatives",
    params,
  );
}

// ── getCreativeGroup ──────────────────────────────────────

export interface GetCreativeGroupParams {
  /** 创意组ids, 集合长度[1,100] */
  creativeGroupId: number[];
}

/** 根据创意组ID查询创意组 */
export function getCreativeGroup(
  client: BaiduClient,
  params: GetCreativeGroupParams,
) {
  return client.call<GetCreativeGroupParams, { data: Partial<CreativeGroupInfo>[] }>(
    "DpaCreativeService",
    "getCreativeGroup",
    params,
  );
}

// ── getCreatives ──────────────────────────────────────────

export interface GetCreativesParams {
  creativeGroupId?: number;
}

/** 获取创意列表 */
export function getCreatives(
  client: BaiduClient,
  params: GetCreativesParams,
) {
  return client.call<GetCreativesParams, { data: Partial<CreativeType>[] }>(
    "DpaCreativeService",
    "getCreatives",
    params,
  );
}

// ── addCreativeGroup ──────────────────────────────────────

export interface AddCreativeGroupParams {
  creativeGroupType: CreativeGroupType;
}

/** 新增创意组, 每个账户下最多支持1000个创意组 */
export function addCreativeGroup(
  client: BaiduClient,
  params: AddCreativeGroupParams,
) {
  return client.call<AddCreativeGroupParams, { data: Partial<UpdateCreativeGroupResult>[] }>(
    "DpaCreativeService",
    "addCreativeGroup",
    params,
  );
}

// ── getFormatTemplates ────────────────────────────────────

export interface GetFormatTemplatesParams {
  /** 商品组ID */
  productSetId?: number;
}

/** 根据商品组ID获取样式模板 */
export function getFormatTemplates(
  client: BaiduClient,
  params: GetFormatTemplatesParams,
) {
  return client.call<GetFormatTemplatesParams, { data: Partial<FormatTemplate>[] }>(
    "DpaCreativeService",
    "getFormatTemplates",
    params,
  );
}

// ── batSetRange ───────────────────────────────────────────

export interface BatSetRangeParams {
  /** 批量创意组绑定关系对象, 集合长度[1,100] */
  batRangeItems: SetRangeRequest[];
}

/** 批量设置创意组投放范围, 暂不支持跨账户 */
export function batSetRange(
  client: BaiduClient,
  params: BatSetRangeParams,
) {
  return client.call<BatSetRangeParams, { data: Record<string, never>[] }>(
    "DpaCreativeService",
    "batSetRange",
    params,
  );
}
