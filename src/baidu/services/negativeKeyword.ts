import type { BaiduClient } from "../client.js";

// ── Shared types ───────────────────────────────────────

export interface NegativeKeywordType {
  /** 否定关键词ID (修改或删除否词包内否词时必填) */
  negativeKeywordId?: number;
  /** 否定关键词 (添加计划/单元否词时必填，长度限制最大40字节) */
  negativeKeyword?: string;
  /** 否词包ID (添加计划-否词包绑定时必填) */
  negativeKeywordPacketId?: number;
  /**
   * 匹配模式
   * - 0: 短语匹配
   * - 63: 精确匹配
   */
  negativeMatchType?: number;
}

export interface RowFilter {
  /** 筛选字段 */
  field: string;
  /**
   * 比较符号
   * - in: 完全匹配
   */
  op: string;
  /** 筛选数据 */
  values: string[];
}

// ── Field list for getNegativeKeyword ───────────────────

export type NegativeKeywordField =
  | "negativeKeyword"
  | "negativeKeywordId"
  | "campaignId"
  | "adgroupId"
  | "campaignName"
  | "adgroupName"
  | "negativeMatchType"
  | "negativeKeywordPacketId"
  | "level"
  | "addTime"
  | "modTime";

// ── updateNegativeKeyword ───────────────────────────────

export interface UpdateNegativeKeywordParams {
  /** 待操作的否定关键词列表 (必填, 长度限制 [1, 5000]) */
  negativeKeywordTypes: Array<{
    /** 否定关键词ID (必填) */
    negativeKeywordId: number;
    /**
     * 匹配模式 (必填)
     * - 0: 短语匹配
     * - 63: 精确匹配
     */
    negativeMatchType: number;
  }>;
}

// ── deleteNegativeKeyword ───────────────────────────────

export interface DeleteNegativeKeywordParams {
  /** 需要删除的否词ID列表 (必填, 长度限制 [1, 5000]) */
  negativeKeywordIds: number[];
}

// ── addNegativeKeyword ──────────────────────────────────

export interface AddNegativeKeywordParams {
  /** 待操作的否定关键词列表 (必填, 长度限制 [1, 5000]) */
  negativeKeywordTypes: Array<{
    /** 否定关键词 (添加计划/单元否词时必填) */
    negativeKeyword?: string;
    /** 计划ID (添加计划否词、计划-否词包绑定时必填) */
    campaignId?: number;
    /** 单元ID (添加单元否词时必填，单元不支持绑定否词包) */
    adgroupId?: number;
    /**
     * 匹配模式 (添加计划/单元否词时必填)
     * - 0: 短语匹配
     * - 63: 精确匹配
     */
    negativeMatchType?: number;
    /** 否词包ID (添加计划-否词包绑定时必填) */
    negativeKeywordPacketId?: number;
  }>;
}

// ── getNegativeKeyword ──────────────────────────────────

export interface GetNegativeKeywordParams {
  /** 请求字段 (必填) */
  negativeKeywordTypeFields: NegativeKeywordField[];
  /** 排序字段 */
  orderBy?: string;
  /** 过滤条件 */
  fieldFilters?: RowFilter[];
  /**
   * 分页，默认 [5000]
   * - [k] 表示取前k条
   * - [m, n] 表示从m+1条开始取，共取n条
   */
  limit?: number[];
  /** 正序/倒序，默认 true (倒序) */
  desc?: boolean;
}

// ── Response types ──────────────────────────────────────

/** 否定关键词信息 (返回) */
export interface NegativeKeywordInfo {
  /** 否定关键词ID */
  negativeKeywordId: number;
  /** 否定关键词 */
  negativeKeyword: string;
  /**
   * 所属层级
   * - 3: 计划层级否词
   * - 5: 单元层级否词
   * - 33: 否词包与计划的绑定关系
   */
  level: number;
  /** 计划ID */
  campaignId: number;
  /** 计划名称 */
  campaignName: string;
  /** 单元ID */
  adgroupId: number;
  /** 单元名称 */
  adgroupName: string;
  /**
   * 匹配模式 (仅当level=3或5时有意义，当level=33时固定返回0)
   * - 0: 短语匹配
   * - 63: 精确匹配
   */
  negativeMatchType: number;
  /** 否词包ID (仅当level=33时有意义，当level=3和5时固定返回0) */
  negativeKeywordPacketId: number;
}

// ── Functions ───────────────────────────────────────────

/**
 * 修改否定关键词接口，支持修改否定关键词的匹配模式
 */
export function updateNegativeKeyword(
  client: BaiduClient,
  params: UpdateNegativeKeywordParams,
) {
  return client.call<
    UpdateNegativeKeywordParams,
    { data: Partial<NegativeKeywordInfo>[] }
  >("NegativeKeywordService", "updateNegativeKeyword", params);
}

/**
 * 删除否定关键词接口，支持删除计划/单元层级否定关键词、删除计划-否词包绑定
 */
export function deleteNegativeKeyword(
  client: BaiduClient,
  params: DeleteNegativeKeywordParams,
) {
  return client.call<
    DeleteNegativeKeywordParams,
    { data: Partial<NegativeKeywordInfo>[] }
  >("NegativeKeywordService", "deleteNegativeKeyword", params);
}

/**
 * 查询否定关键词，支持按照账户、计划、单元、否定关键词层级查询
 */
export function getNegativeKeyword(
  client: BaiduClient,
  params: GetNegativeKeywordParams,
) {
  return client.call<
    GetNegativeKeywordParams,
    { data: Partial<NegativeKeywordInfo>[] }
  >("NegativeKeywordService", "getNegativeKeyword", params);
}

/**
 * 添加否定关键词接口，支持添加计划/单元层级否定关键词、添加计划-否词包绑定等
 */
export function addNegativeKeyword(
  client: BaiduClient,
  params: AddNegativeKeywordParams,
) {
  return client.call<
    AddNegativeKeywordParams,
    { data: Partial<NegativeKeywordInfo>[] }
  >("NegativeKeywordService", "addNegativeKeyword", params);
}
