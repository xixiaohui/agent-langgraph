import type { BaiduClient } from "../client.js";
import type { NegativeKeywordInfo, RowFilter } from "./negativeKeyword.js";

// ── Field list for getNegativeKeywordPacket ─────────────

export type NegativeKeywordPacketField =
  | "negativeKeywordPacketId"
  | "negativeKeywordPacketName"
  | "totalNegativeKeywordCount"
  | "normalNegativeKeywordCount"
  | "exactNegativeKeywordCount"
  | "negativeKeywords"
  | "bindCampaignIds"
  | "bindCampaignCount"
  | "bindCampaignNames";

// ── updateNegativeKeywordPacket ─────────────────────────

export interface NegativeKeywordPacketItem {
  /** 否定关键词包名称 (必填，长度限制最大30字节) */
  negativeKeywordPacketName?: string;
  /** 否词包内新增的否词信息 */
  addNegativeKeywordTypes?: Array<{
    /** 否定关键词 (必填) */
    negativeKeyword: string;
    /**
     * 匹配模式 (必填)
     * - 0: 短语匹配
     * - 63: 精确匹配
     */
    negativeMatchType: number;
  }>;
  /** 否词包内本次修改的否词信息 */
  updateNegativeKeywordTypes?: Array<{
    /** 否定关键词ID (必填) */
    negativeKeywordId: number;
    /**
     * 匹配模式 (必填)
     * - 0: 短语匹配
     * - 63: 精确匹配
     */
    negativeMatchType: number;
  }>;
  /** 否词包内本次删除的否词ID列表 */
  deleteNegativeKeywordIds?: number[];
}

export interface UpdateNegativeKeywordPacketParams {
  /** 待更新的否词包信息列表 (必填, 长度限制 [1, 100]) */
  updateNegativeKeywordPacketTypes: Array<
    NegativeKeywordPacketItem & {
      /** 否词包ID (必填) */
      negativeKeywordPacketId: number;
    }
  >;
}

// ── deleteNegativeKeywordPacket ─────────────────────────

export interface DeleteNegativeKeywordPacketParams {
  /** 需要删除的否定关键词包ID列表 (必填, 长度限制 [1, 100]) */
  negativeKeywordPacketIds: number[];
}

// ── getNegativeKeywordPacket ────────────────────────────

export interface GetNegativeKeywordPacketParams {
  /** 否词包ID列表 (长度限制 [0, 100]) */
  negativeKeywordPacketIds?: number[];
  /** 请求字段 (必填) */
  negativeKeywordPacketTypeFields: NegativeKeywordPacketField[];
  /** 排序字段 */
  orderBy?: string;
  /** 过滤条件，支持对 negativeKeywordPacketName 进行 in/like/nlike */
  fieldFilters?: RowFilter[];
  /**
   * 分页，默认 [100]
   * - [k] 表示取前k条
   * - [m, n] 表示从m+1条开始取，共取n条
   */
  limit?: number[];
  /** 正序/倒序，默认 true (倒序) */
  desc?: boolean;
}

// ── getNegativeKeywordPacketCount ───────────────────────

export interface GetNegativeKeywordPacketCountParams {
  /** 查询条件 (必填，只支持单个条件查询，集合长度限制 [1, 1]) */
  items: Array<{
    /** 否词包ID */
    negativeKeywordPacketIds?: number;
    /** 筛选条件 */
    fieldFilters?: RowFilter[];
  }>;
}

// ── addNegativeKeywordPacket ────────────────────────────

export interface AddNegativeKeywordPacketParams {
  /** 待操作的否词包列表 (必填, 长度限制 [1, 100]) */
  negativeKeywordPacketTypes: Array<{
    /** 否词包名称 (必填，长度限制最大30字节) */
    negativeKeywordPacketName: string;
    /** 否词包内的否词信息 (必填) */
    negativeKeywords: Array<{
      /** 否定关键词 (必填) */
      negativeKeyword: string;
      /**
       * 匹配模式 (必填)
       * - 0: 短语匹配
       * - 63: 精确匹配
       */
      negativeMatchType: number;
    }>;
  }>;
}

// ── Response types ──────────────────────────────────────

/** 否定关键词包信息 (返回) */
export interface NegativeKeywordPacketInfo {
  /** 否词包ID */
  negativeKeywordPacketId: number;
  /** 否词包名称 */
  negativeKeywordPacketName: string;
  /** 否词包内否词总数 */
  totalNegativeKeywordCount: number;
  /** 否词包内短语匹配否词总数 */
  normalNegativeKeywordCount: number;
  /** 否词包内精确匹配否词总数 */
  exactNegativeKeywordCount: number;
  /** 否词包内的否词信息 */
  negativeKeywords: Partial<NegativeKeywordInfo>[];
  /** 否词包绑定的计划ID列表 */
  bindCampaignIds: number[];
  /** 否词包绑定的计划数量 */
  bindCampaignCount: number;
  /** 否词包绑定的计划名称 */
  bindCampaignNames: string[];
}

// ── Functions ───────────────────────────────────────────

/**
 * 更新否词包接口
 */
export function updateNegativeKeywordPacket(
  client: BaiduClient,
  params: UpdateNegativeKeywordPacketParams,
) {
  return client.call<
    UpdateNegativeKeywordPacketParams,
    { data: Partial<NegativeKeywordPacketInfo>[] }
  >(
    "NegativeKeywordPacketService",
    "updateNegativeKeywordPacket",
    params,
  );
}

/**
 * 删除否词包接口
 */
export function deleteNegativeKeywordPacket(
  client: BaiduClient,
  params: DeleteNegativeKeywordPacketParams,
) {
  return client.call<
    DeleteNegativeKeywordPacketParams,
    { data: Partial<NegativeKeywordPacketInfo>[] }
  >(
    "NegativeKeywordPacketService",
    "deleteNegativeKeywordPacket",
    params,
  );
}

/**
 * 查询否词包
 */
export function getNegativeKeywordPacket(
  client: BaiduClient,
  params: GetNegativeKeywordPacketParams,
) {
  return client.call<
    GetNegativeKeywordPacketParams,
    { data: Partial<NegativeKeywordPacketInfo>[] }
  >(
    "NegativeKeywordPacketService",
    "getNegativeKeywordPacket",
    params,
  );
}

/**
 * 查询否词包数量
 */
export function getNegativeKeywordPacketCount(
  client: BaiduClient,
  params: GetNegativeKeywordPacketCountParams,
) {
  return client.call<
    GetNegativeKeywordPacketCountParams,
    { data: number[] }
  >(
    "NegativeKeywordPacketService",
    "getNegativeKeywordPacketCount",
    params,
  );
}

/**
 * 添加否词包接口
 */
export function addNegativeKeywordPacket(
  client: BaiduClient,
  params: AddNegativeKeywordPacketParams,
) {
  return client.call<
    AddNegativeKeywordPacketParams,
    { data: Partial<NegativeKeywordPacketInfo>[] }
  >("NegativeKeywordPacketService", "addNegativeKeywordPacket", params);
}
