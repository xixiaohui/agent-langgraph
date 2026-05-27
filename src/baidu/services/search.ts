import type { BaiduClient } from "../client.js";

// ── Shared Types ──────────────────────────────────────

/** 物料搜索信息 */
export interface MaterialSearchInfo {
  /** 物料信息 */
  materialInfos: string[];
}

/** 物料数量信息 */
export interface CountInfo {
  /** 物料ID */
  id: number;
  /** 物料数量 */
  count: number;
}

// ── getIdsByTabs ──────────────────────────────────────

export interface GetIdsByTabsParams {
  /** 标签ID (集合长度1-30, 每个ID取值1-30) */
  tabIds: number[];
  /**
   * 物料ID类型
   * 11-关键词层级 7-创意层级
   */
  idType: number;
  /** 分页数 (默认1, 每页最多10000条) */
  page?: number;
}

export interface GetIdsByTabsResult {
  /** 物料ID */
  ids: number[];
  /** 是否还有更多 */
  hasMore: boolean;
}

/**
 * 筛选特定标签下的关键词/创意ID
 */
export function getIdsByTabs(
  client: BaiduClient,
  params: GetIdsByTabsParams,
) {
  return client.call<GetIdsByTabsParams, { data: Partial<GetIdsByTabsResult>[] }>(
    "SearchService",
    "getIdsByTabs",
    params,
  );
}

// ── getMaterialInfoBySearch ───────────────────────────

export interface GetMaterialInfoBySearchParams {
  /** 查询字面 (最大40字节) */
  searchWord: string;
  /** 起始序号 (默认1) */
  startNum?: number;
  /** 结束序号 (默认100, 单次最多10000) */
  endNum?: number;
  /**
   * 查询类型
   * 0-模糊 1-精确
   */
  searchType: number;
  /**
   * 查询层级
   * 0-计划 1-单元 2-关键词
   */
  searchLevel: number;
  /** 查询字段 (不同层级支持不同字段) */
  materialFields?: string[];
}

export interface GetMaterialInfoBySearchResult {
  /**
   * 是否还有更多
   * 1-有 0-无
   */
  moreMaterial: number;
  /** 物料信息列表 */
  materialSearchInfos: MaterialSearchInfo[];
}

/**
 * 查询包含指定字面的计划、单元、关键词等信息
 */
export function getMaterialInfoBySearch(
  client: BaiduClient,
  params: GetMaterialInfoBySearchParams,
) {
  return client.call<GetMaterialInfoBySearchParams, { data: Partial<GetMaterialInfoBySearchResult>[] }>(
    "SearchService",
    "getMaterialInfoBySearch",
    params,
  );
}

// ── getKeywordIdBySearch ──────────────────────────────

export interface GetKeywordIdBySearchParams {
  /** 计划ID (空=所有计划) */
  campaignIds?: number[];
  /** 分页数 (默认1, 每页最多10000) */
  page?: number;
  /** PC质量度 [1,10] */
  pcQuality?: number[];
  /** 移动质量度 [1,10] */
  mobileQuality?: number[];
  /**
   * 关键词状态
   * 40-有效 41-有效 42-暂停 43-审核不通过 等
   */
  status?: number[];
}

export interface GetKeywordIdBySearchResult {
  /** 关键词ID */
  keywordIds: number[];
  /** 是否还有更多 */
  hasMore: boolean;
}

/**
 * 根据质量度、状态筛选关键词ID
 */
export function getKeywordIdBySearch(
  client: BaiduClient,
  params: GetKeywordIdBySearchParams,
) {
  return client.call<GetKeywordIdBySearchParams, { data: Partial<GetKeywordIdBySearchResult>[] }>(
    "SearchService",
    "getKeywordIdBySearch",
    params,
  );
}

// ── getCreativeIdBySearch ─────────────────────────────

export interface GetCreativeIdBySearchParams {
  /** 筛选的计划ID (空=所有计划) */
  campaignIds?: number[];
  /** 分页数 (默认1, 每页最多10000) */
  page?: number;
  /**
   * 创意状态
   * 51-有效 52-暂停 53-审核不通过 54-待激活
   * 55-审核中 56-部分无效 57-有效-移动URL审核中
   */
  status: number[];
}

export interface GetCreativeIdBySearchResult {
  /** 创意ID */
  creativeIds: number[];
  /** 是否还有更多 */
  hasMore: boolean;
}

/**
 * 根据审核状态筛选创意id
 */
export function getCreativeIdBySearch(
  client: BaiduClient,
  params: GetCreativeIdBySearchParams,
) {
  return client.call<GetCreativeIdBySearchParams, { data: Partial<GetCreativeIdBySearchResult>[] }>(
    "SearchService",
    "getCreativeIdBySearch",
    params,
  );
}

// ── getCountById ──────────────────────────────────────

export interface GetCountByIdParams {
  /**
   * 查询层级
   * 0-计划 1-单元
   */
  idType?: number;
  /**
   * 计数类型
   * 0-单元 1-关键词 2-创意 3-计划
   */
  countType: number;
  /** 查询ID (集合长度0-1000) */
  ids?: number[];
}

export interface GetCountByIdResult {
  /** 物料数量信息 */
  countInfos: CountInfo[];
}

/**
 * 查询指定id序列下对应状态的物料数量
 */
export function getCountById(
  client: BaiduClient,
  params: GetCountByIdParams,
) {
  return client.call<GetCountByIdParams, { data: Partial<GetCountByIdResult>[] }>(
    "SearchService",
    "getCountById",
    params,
  );
}
