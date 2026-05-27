import type { BaiduClient } from "../client.js";

// ── Shared Types ──────────────────────────────────────────

/** 单元与app的绑定信息（仅应用推广营销目标时填写） */
export interface AdgroupAppBindType {
  /** 设备类型：1-Android, 3-iOS */
  platform: number;
  /** Android的APP包Id */
  channelId?: number;
  /** iOS包唯一标识 */
  appStoreId?: number;
}

// ── deleteAdgroup (删除单元) ──────────────────────────────

export interface DeleteAdgroupParams {
  /** 单元ID集合，长度限制：[1, 10000] */
  adgroupIds: number[];
  /** 广告类型 */
  adType?: number;
}

/**
 * 删除推广单元。
 * 返回被删除的单元信息（可为空数组）。
 */
export function deleteAdgroup(
  client: BaiduClient,
  params: DeleteAdgroupParams,
) {
  return client.call<
    DeleteAdgroupParams,
    { data: Partial<AdgroupInfo>[] }
  >("AdgroupService", "deleteAdgroup", params);
}

// ── updateAdgroup (更新单元) ──────────────────────────────

/** 更新推广单元时的单元字段 */
export interface UpdateAdgroupType {
  /** 推广单元ID */
  adgroupId: number;
  /** 单元名称，最大30个字节（1个中文按2个字节，英文/数字按1个字节） */
  adgroupName?: string;
  /** 单元出价，取值范围：(0, 999.99] && <= 所属计划预算 */
  maxPrice?: number;
  /**
   * 推广单元启用/暂停
   * - true: 暂停
   * - false: 启用
   */
  pause?: boolean;
  /**
   * 应用商店直投（仅支持应用推广营销目标）
   * - 0: 关闭
   * - 1: 开启
   */
  appShopDirectStatus?: number;
  /** 单元短语否定关键词，单个否词最长40字节，最多200个 */
  negativeWords?: string[];
  /** 单元精确否定关键词，单个否词最长40字节，最多200个 */
  exactNegativeWords?: string[];
  /**
   * 自动配图开关
   * - 0: 开启
   * - 1: 关闭
   */
  segmentRecommendStatus?: number;
  /**
   * 自动文案优化
   * - true: 开启
   * - false: 关闭
   */
  creativeTextOptimizationStatus?: boolean;
  /** 虚拟商品组id（计划类型为商品计划时必填） */
  productSetId?: number;
  /** 推广单元商品出价（计划类型为商品计划时必填，优先级高于maxPrice） */
  paPrice?: number;
  /** 单元层级监控url（仅计划类型为商品计划时支持） */
  monitorUrl?: string;
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
  /**
   * 自动定向
   * - true: 开启
   * - false: 关闭
   */
  adgroupAutoTargetingStatus?: boolean;
}

export interface UpdateAdgroupParams {
  /** 更新推广单元字段，集合长度限制：[1, 5000] */
  adgroupTypes: UpdateAdgroupType[];
}

/**
 * 更新推广单元。
 */
export function updateAdgroup(
  client: BaiduClient,
  params: UpdateAdgroupParams,
) {
  return client.call<
    UpdateAdgroupParams,
    { data: Partial<AdgroupInfo>[] }
  >("AdgroupService", "updateAdgroup", params);
}

// ── getAdgroup (查询单元) ─────────────────────────────────

export type AdgroupField =
  | "adgroupId"
  | "campaignId"
  | "adgroupName"
  | "maxPrice"
  | "pause"
  | "negativeWords"
  | "exactNegativeWords"
  | "status"
  | "appShopDirectStatus"
  | "adType"
  | "segmentRecommendStatus"
  | "creativeTextOptimizationStatus"
  | "productSetId"
  | "paPrice"
  | "monitorUrl"
  | "pcFinalUrl"
  | "pcTrackParam"
  | "pcTrackTemplate"
  | "mobileFinalUrl"
  | "mobileTrackParam"
  | "mobileTrackTemplate"
  | "adgroupAutoTargetingStatus";

export interface GetAdgroupParams {
  /** 查询推广单元字段 */
  adgroupFields: AdgroupField[];
  /**
   * 查询id集合
   * - idType=5时，类型为单元ID，不超过5000个
   * - idType=3时，类型为计划ID，不超过100个
   */
  ids?: number[];
  /**
   * 查询层级
   * - 3: 计划ID
   * - 5: 单元ID
   */
  idType?: number;
  /**
   * 是否查询单元影子
   * - 0: 只查询单元本身
   * - 1: 只查询单元影子
   */
  getTemp?: number;
}

/** 推广单元详细信息（查询/更新/新增返回） */
export interface AdgroupInfo {
  /** 推广单元ID */
  adgroupId: number;
  /** 推广计划ID */
  campaignId: number;
  /** 单元名称 */
  adgroupName: string;
  /** 单元出价 */
  maxPrice: number;
  /** 推广单元启用/暂停 */
  pause: boolean;
  /** 单元短语否定关键词 */
  negativeWords: string[];
  /** 单元精确否定关键词 */
  exactNegativeWords: string[];
  /**
   * 单元状态
   * - 31: 有效
   * - 32: 暂停推广
   * - 33: 推广计划暂停
   * 等
   */
  status: number;
  /**
   * 应用商店直投
   * - 0: 关闭
   * - 1: 开启
   */
  appShopDirectStatus: number;
  /**
   * 广告类型
   * - 0: 普通单元
   * - 14: 商品单元
   */
  adType: number;
  /**
   * 自动配图开关
   * - 0: 开启
   * - 1: 关闭
   */
  segmentRecommendStatus: number;
  /** 自动文案优化 */
  creativeTextOptimizationStatus: boolean;
  /** 虚拟商品组id */
  productSetId: number;
  /** 推广单元商品出价 */
  paPrice: number;
  /** 单元层级监控url */
  monitorUrl: string;
  /** 计算机最终访问网址 */
  pcFinalUrl: string;
  /** 计算机监控后缀 */
  pcTrackParam: string;
  /** 计算机第三方追踪模板 */
  pcTrackTemplate: string;
  /** 移动最终访问网址 */
  mobileFinalUrl: string;
  /** 移动监控后缀 */
  mobileTrackParam: string;
  /** 移动第三方追踪模板 */
  mobileTrackTemplate: string;
  /** 自动定向 */
  adgroupAutoTargetingStatus: boolean;
}

/**
 * 查询推广单元。
 * 根据指定的计划ID或单元ID获取推广单元信息。
 */
export function getAdgroup(
  client: BaiduClient,
  params: GetAdgroupParams,
) {
  return client.call<GetAdgroupParams, { data: Partial<AdgroupInfo>[] }>(
    "AdgroupService",
    "getAdgroup",
    params,
  );
}

// ── addAdgroup (添加单元) ─────────────────────────────────

/** 新增推广单元时的单元字段 */
export interface AddAdgroupType {
  /** 推广计划ID */
  campaignId: number;
  /** 单元名称，最大30个字节（1个中文按2个字节，英文/数字按1个字节） */
  adgroupName: string;
  /** 单元出价，取值范围：(0, 999.99] && <= 所属计划预算 */
  maxPrice: number;
  /**
   * 推广单元启用/暂停
   * - true: 暂停
   * - false: 启用
   */
  pause?: boolean;
  /** 单元短语否定关键词，单个否词最长40字节，最多200个 */
  negativeWords?: string[];
  /** 单元精确否定关键词，单个否词最长40字节，最多200个 */
  exactNegativeWords?: string[];
  /**
   * 广告类型
   * - 0: 普通单元
   * - 14: 商品单元
   */
  adType?: number;
  /**
   * 应用商店直投（仅支持应用推广营销目标）
   * - 0: 关闭
   * - 1: 开启
   */
  appShopDirectStatus?: number;
  /**
   * 自动配图开关
   * - 0: 开启
   * - 1: 关闭
   */
  segmentRecommendStatus?: number;
  /**
   * 自动文案优化
   * - true: 开启
   * - false: 关闭
   */
  creativeTextOptimizationStatus?: boolean;
  /** 虚拟商品组id（计划类型为商品计划时必填） */
  productSetId?: number;
  /** 推广单元商品出价（计划类型为商品计划时必填，优先级高于maxPrice） */
  paPrice?: number;
  /**
   * 自动定向
   * - true: 开启
   * - false: 关闭
   */
  adgroupAutoTargetingStatus?: boolean;
  /** 单元层级监控url（仅计划类型为商品计划时支持） */
  monitorUrl?: string;
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
  /** 单元与app的绑定信息（仅应用推广营销目标时填写） */
  adgroupAppBinds?: AdgroupAppBindType;
}

export interface AddAdgroupParams {
  /** 新增推广单元物料，集合长度限制：[1, 5000] */
  adgroupTypes: AddAdgroupType[];
}

/**
 * 新增推广单元。
 */
export function addAdgroup(
  client: BaiduClient,
  params: AddAdgroupParams,
) {
  return client.call<
    AddAdgroupParams,
    { data: Partial<AdgroupInfo>[] }
  >("AdgroupService", "addAdgroup", params);
}
