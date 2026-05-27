import type { BaiduClient } from "../client.js";

// ── Shared Types ─────────────────────────────────────

export interface RowFilter {
  /** 筛选字段: materialType, status, targetType */
  field: string;
  /** 比较符号: in */
  op: string;
  /** 筛选值 */
  values: string[];
}

export interface BindType {
  /** 绑定层级: 0-账户, 1-计划 */
  targetType: number;
  /** 绑定层级ID (计划ID或账户ID) */
  targetId: number;
}

export interface MaterialType {
  /** 物料内容 (JSON string) */
  materialContent: string;
  /** 物料类型: 2001-电话, 2111-咨询方案, 2108-咨询链接 */
  materialType: number;
  /** 绑定数据 */
  binds: BindType[];
}

// ── MaterialInfo (material sub-object in response) ───

export interface MaterialInfo {
  /** 物料id */
  materialId: number;
  /** 账号id */
  userId: number;
  /** 物料名称 */
  materialName: string;
  /** 物料类型: 2001-电话, 2111-咨询方案, 2108-咨询链接 */
  materialType: number;
  /** 待审核物料内容 */
  auditContent: string;
  /** 审核通过物料内容 */
  materialContent: string;
  /** 审核状态: 1-有效, 2-暂停推广, 3-审核中/未审核, 4-审核不通过 */
  auditStatus: number;
  /** 下线理由 */
  reasons: string;
  /** 风控返回的拒绝理由 */
  wholeReason: string;
  /** 电话组件类型: 3-智能电话, 4-普通电话 */
  phoneType: number;
}

// ── StrategyInfo (response) ──────────────────────────

export interface BindInfo {
  /** 绑定ID */
  bindId: number;
  /** 账户ID */
  userId: number;
  /** 推广方案ID */
  strategyId: number;
  /** 绑定物料的物料类型: 2001-电话, 2111-咨询方案, 2108-咨询链接 */
  materialType: number;
  /** 绑定物料的物料ID */
  materialId: number;
  /** 绑定层级: 0-账户, 1-计划 */
  targetType: number;
  /** 绑定层级ID */
  targetId: number;
  /** 起停状态: 0-启用, 1-暂停 */
  isPause: number;
  /** 计划ID */
  campaignId: number;
  /** 计划是否删除 */
  delete: boolean;
}

export interface StrategyInfo {
  /** 推广方案ID */
  strategyId: number;
  /** 账户ID */
  userId: number;
  /** 物料ID */
  materialId: number;
  /** 物料内容 */
  materialContent: string;
  /** 物料类型: 2001-电话, 2111-咨询方案, 2108-咨询链接 */
  materialType: number;
  /** 起停状态: 0-启用, 1-暂停 */
  isPause: number;
  /** 推广方案状态: 1-有效, 2-暂停推广, 3-审核中/未审核, 4-审核不通过 */
  status: number;
  /** 物料数据 */
  material: MaterialInfo;
  /** 绑定数据 */
  binds: BindInfo[];
  /** 推广方案添加时间 */
  addTime: string;
  /** 推广方案修改时间 */
  modTime: string;
}

// ── updateStrategies ─────────────────────────────────

export interface UpdateStrategiesParams {
  /** 参数体，列表长度不超过10 */
  items: MaterialType[];
}

/** 修改营销类组件方案 */
export function updateStrategies(
  client: BaiduClient,
  params: UpdateStrategiesParams,
) {
  return client.call<UpdateStrategiesParams, { data: Partial<StrategyInfo>[] }>(
    "LeadAdsService",
    "updateStrategies",
    params,
  );
}

// ── deleteStrategies ─────────────────────────────────

export interface DeleteStrategiesParams {
  /** 推广方案ID列表，列表长度不超过10 */
  items: number[];
}

/** 删除营销类组件方案 */
export function deleteStrategies(
  client: BaiduClient,
  params: DeleteStrategiesParams,
) {
  return client.call<DeleteStrategiesParams, { data: Partial<StrategyInfo>[] }>(
    "LeadAdsService",
    "deleteStrategies",
    params,
  );
}

// ── getStrategies ────────────────────────────────────

export interface GetStrategiesParams {
  /** 用户ID */
  userId?: number;
  /** 过滤属性 */
  fieldFilters: RowFilter[];
  /** 是否倒排: true-倒序, false-正序 */
  isDesc?: boolean;
  /** 排序字段: status */
  sortField?: string;
  /** 分页 [offset, limit]，一次最多100条 */
  limit?: number[];
}

/** 查询推广方案 */
export function getStrategies(
  client: BaiduClient,
  params: GetStrategiesParams,
) {
  return client.call<GetStrategiesParams, { data: Partial<StrategyInfo>[] }>(
    "LeadAdsService",
    "getStrategies",
    params,
  );
}

// ── getMaterials ─────────────────────────────────────

export interface GetMaterialsParams {
  /** 过滤属性 */
  fieldFilters: RowFilter[];
}

/** 查询物料 */
export function getMaterials(
  client: BaiduClient,
  params: GetMaterialsParams,
) {
  return client.call<GetMaterialsParams, { data: Partial<MaterialInfo>[] }>(
    "LeadAdsService",
    "getMaterials",
    params,
  );
}

// ── addStrategies ────────────────────────────────────

export interface AddStrategiesParams {
  /** 参数体，列表长度不超过10 */
  items: MaterialType[];
}

/** 添加营销类组件方案 */
export function addStrategies(
  client: BaiduClient,
  params: AddStrategiesParams,
) {
  return client.call<AddStrategiesParams, { data: Partial<StrategyInfo>[] }>(
    "LeadAdsService",
    "addStrategies",
    params,
  );
}
