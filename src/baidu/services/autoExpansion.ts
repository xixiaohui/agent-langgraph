import type { BaiduClient } from "../client.js";

// ── Field list for getAutoExpansion ─────────────────────

export type AutoExpansionField =
  | "autoExpansionId"
  | "autoExpansionName"
  | "adType"
  | "campaignId"
  | "adgroupId"
  | "price"
  | "businessStatus"
  | "pause"
  | "campaignName"
  | "adgroupName";

// ── getAutoExpansion ────────────────────────────────────

export interface GetAutoExpansionParams {
  /** 排序字段 */
  orderBy?: string;
  /** 自动扩量请求字段列表 (必填) */
  autoExpansionTypeFields: AutoExpansionField[];
  /** 层级主键集合 */
  ids?: number[];
  /**
   * 查询层级
   * - 2: 账户层级
   * - 3: 计划层级
   * - 17: 自动扩量层级
   */
  idType?: number;
  /** 自动扩量ID */
  autoExpansionId?: number;
  /** 自动扩量名称 */
  autoExpansionName?: string;
  /**
   * 所属计划-计划类型
   * - 0: 普通计划
   * - 14: 商品计划
   */
  adType?: number;
  /** 计划ID */
  campaignId?: number;
  /** 单元ID */
  adgroupId?: number;
  /**
   * 自动扩量状态
   * - 0: 有效
   * - 1: 暂停
   */
  businessStatus?: number;
  /** 启用/暂停自动扩量 (true-暂停, false-启用) */
  pause?: boolean;
  /** 计划名称 */
  campaignName?: string;
  /** 单元名称 */
  adgroupName?: string;
}

// ── Response types ──────────────────────────────────────

/** 自动扩量信息 (返回) */
export interface AutoExpansionInfo {
  /** 自动扩量ID */
  autoExpansionId: number;
  /** 自动扩量名称 */
  autoExpansionName: string;
  /**
   * 所属计划-计划类型
   * - 0: 普通计划
   * - 6: 网址定向计划
   * - 14: 商品计划
   */
  adType: number;
  /** 计划ID */
  campaignId: number;
  /** 单元ID */
  adgroupId: number;
  /** 出价 */
  price: number;
  /**
   * 自动扩量状态
   * - 0: 有效
   * - 1: 暂停
   */
  businessStatus: number;
  /** 启用/暂停自动扩量 (true-暂停, false-启用) */
  pause: boolean;
  /** 计划名称 */
  campaignName: string;
  /** 单元名称 */
  adgroupName: string;
}

// ── Functions ───────────────────────────────────────────

/**
 * 获取自动扩量物料列表，支持按照计划id、自动扩量id等条件查询
 */
export function getAutoExpansion(
  client: BaiduClient,
  params: GetAutoExpansionParams,
) {
  return client.call<
    GetAutoExpansionParams,
    { data: Partial<AutoExpansionInfo>[] }
  >("AutoExpansionService", "getAutoExpansion", params);
}
