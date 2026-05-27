import type { BaiduClient } from "../client.js";

// ── Shared Types ──────────────────────────────────────

/** 策略和计划的绑定信息 */
export interface PriceStrategyCampaignType {
  /** 出价策略和计划绑定id */
  strategyCampaignId: number;
  /** 出价策略id */
  strategyId: number;
  /** 计划id */
  campaignId: number;
  /** 计划名称 */
  campaignName: string;
  /**
   * 是否删除
   * true-删除 false-不删除
   */
  isDelete: boolean;
}

/**
 * 出价策略对象
 *
 * strategyType 出价策略类型:
 *   0-优化排名
 *
 * targetRank 排名目标:
 *   0-上方位首位 1-上方位
 *
 * strategyLevel 策略层级:
 *   3-计划层级
 */
export interface PriceStrategyType {
  /** 出价策略ID (新增时无需填写) */
  strategyId?: number;
  /** 出价策略名称 (2-20个字符) */
  strategyName: string;
  /** 出价策略类型 */
  strategyType: number;
  /** 排名目标 */
  targetRank: number;
  /** 出价系数范围 [1.01, 10.00] */
  priceFactor: number;
  /**
   * 是否开启出价策略
   * true-关闭 false-开启
   */
  isPause: boolean;
  /** 策略层级 */
  strategyLevel?: number;
  /** 策略和计划的绑定信息 */
  priceStrategyCampaignTypes: PriceStrategyCampaignType[];
}

// ── deletePriceStrategy ───────────────────────────────

export interface DeletePriceStrategyParams {
  /** 待删除出价策略ID列表 (1-100) */
  strategyIds: number[];
}

/**
 * 删除出价策略
 */
export function deletePriceStrategy(
  client: BaiduClient,
  params: DeletePriceStrategyParams,
) {
  return client.call<DeletePriceStrategyParams, { data: Partial<PriceStrategyType>[] }>(
    "PriceStrategyService",
    "deletePriceStrategy",
    params,
  );
}

// ── updatePriceStrategy ───────────────────────────────

export interface UpdatePriceStrategyParams {
  /** 出价策略对象 */
  priceStrategyTypes: PriceStrategyType[];
}

/**
 * 更新出价策略
 */
export function updatePriceStrategy(
  client: BaiduClient,
  params: UpdatePriceStrategyParams,
) {
  return client.call<UpdatePriceStrategyParams, { data: Partial<PriceStrategyType>[] }>(
    "PriceStrategyService",
    "updatePriceStrategy",
    params,
  );
}

// ── getPriceStrategy ──────────────────────────────────

/** 查询字段枚举 */
export type PriceStrategyField =
  | "isPause"
  | "targetRank"
  | "strategyId"
  | "strategyName"
  | "strategyType"
  | "priceFactor"
  | "priceStrategyCampaignTypes";

export interface GetPriceStrategyParams {
  /** 查询字段 */
  fields: PriceStrategyField[];
  /**
   * 出价策略类型
   * 0-优化排名
   */
  strategyTypes: number[];
  /** 策略id集合 */
  ids: number[];
  /** 查询层级 (32-出价策略层级) */
  idType?: number;
  /** 策略绑定层级 (3-计划层级) */
  strategyLevels?: number;
}

/**
 * 查询出价策略
 */
export function getPriceStrategy(
  client: BaiduClient,
  params: GetPriceStrategyParams,
) {
  return client.call<GetPriceStrategyParams, { data: Partial<PriceStrategyType>[] }>(
    "PriceStrategyService",
    "getPriceStrategy",
    params,
  );
}

// ── addPriceStrategy ──────────────────────────────────

export interface AddPriceStrategyParams {
  /** 出价策略对象 */
  priceStrategyTypes: PriceStrategyType[];
}

/**
 * 新增出价策略
 */
export function addPriceStrategy(
  client: BaiduClient,
  params: AddPriceStrategyParams,
) {
  return client.call<AddPriceStrategyParams, { data: Partial<PriceStrategyType>[] }>(
    "PriceStrategyService",
    "addPriceStrategy",
    params,
  );
}
