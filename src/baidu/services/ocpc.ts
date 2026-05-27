import type { BaiduClient } from "../client.js";

// ── Shared Types ──────────────────────────────────────

/** 生效范围 - 标识oCPC出价策略绑定的计划 */
export interface TargetPackageBindInfo {
  /** 计划ID */
  levelId: number;
  /** oCPC关联的层级 (level=2 计划层级) */
  level: number;
}

/** 数据来源以及目标转化 */
export interface TargetPackageDataflowInfo {
  /**
   * 数据来源
   * 1-网页JS布码 2-线索API 3-咨询工具授权 4-基木鱼/度小店
   * 5-应用API 6-电话数据授权 7-百度智能小程序SDK 8-应用SDK
   */
  dataFlow: number;
  /** 目标转化类型 */
  transType: number[];
}

/** 项目精细化出价-自定义人群 */
export interface ProjectCrowdDefinedBidRatio {
  /** 项目精细化出价类型: 6-自定义人群 */
  ocpcBidRatioType: number;
  /** 选中人群id */
  crowdDirect: number;
  /** ocpcBid溢价系数 */
  ratio: number;
}

/**
 * oCPC出价策略属性
 *
 * ocpcBidType 出价模式:
 *   1-目标转化成本(原目标转化成本控制)
 *   2-增强模式(原点击出价系数控制)
 *
 * packageStatus 出价策略状态:
 *   0-未生效 1-投放中 2-投放中(学习中) 3-投放中(学习失败) 4-投放中(学习结束)
 *
 * deepTypeStat 深度转化状态:
 *   1-未生效 2-自动优化生效 3-双出价生效 4-双出价生效
 *
 * deepTransTypeMode 优化深度转化:
 *   0-不使用 1-优化转化行为 2-优化ROI
 *
 * transAsset 转化资产类型:
 *   0-不限 1-资产类型 2-指定资产
 *
 * assetType 资产类型:
 *   1-应用APP 2-自建站 3-基木鱼 4-百度健康商城 5-百度APP 6-爱采购
 *
 * marketingTargetId 营销目标:
 *   1-应用推广 2-本地门店 4-电商店铺 5-商品目录 7-销售线索
 *
 * dataFlow 数据来源:
 *   1-网页JS布码 2-线索API 3-咨询工具授权 4-基木鱼/度小店
 *   5-应用API 6-电话数据授权 7-百度智能小程序SDK 8-应用SDK
 */
export interface TargetPackageType {
  /** oCPC出价策略ID (新增时可不填) */
  targetPackageId?: number;
  /** oCPC出价策略名称 (长度限制 1-20) */
  targetPackageName: string;
  /** 出价模式 */
  ocpcBidType: number;
  /** 目标转化出价（元/转化） [0.01, 9999.00] */
  ocpcBid: number;
  /** 生效范围 */
  scope: TargetPackageBindInfo[];
  /** 数据来源以及目标转化 */
  dataFlowData: TargetPackageDataflowInfo[];
  /**
   * 深度转化类型
   * 9-电商订单 10-购买成功 14-订单提交成功 18-留线索
   * 25-APP注册 26-APP付费 28-次日留存 30-电话拨通
   * 42-小额贷款授信 49-注册激活后登录 50-预约
   * 51-有意向客户 52-深度使用 72-聊到相关业务
   */
  assistTransTypes?: number[];
  /** 出价策略状态 */
  packageStatus?: number;
  /** 深度转化出价 [0.01, 9999.00] (0=自动出价) */
  ocpcDeepCpa?: number;
  /** 深度转化状态 */
  deepTypeStat?: number;
  /** 优化深度转化 */
  deepTransTypeMode?: number;
  /** 转化资产类型 */
  transAsset?: number;
  /** 转化资产ID (transAsset=2时必填) */
  transAssetId?: number;
  /** 资产类型 */
  assetType?: number[];
  /** 营销目标 */
  marketingTargetId?: number;
  /** 项目精细化出价-自定义人群 */
  crowdDefinedOcpcBidRatio?: ProjectCrowdDefinedBidRatio[];
  /** oCPC出价策略关联层级ID (计划ID) */
  levelId: number;
  /** oCPC关联的层级 (level=2) */
  level: number;
  /** 数据来源 */
  dataFlow: number;
  /** 目标转化 */
  transType: number[];
}

// ── deleteTargetPackage ───────────────────────────────

export interface DeleteTargetPackageParams {
  /** oCPC出价策略ID集合 (1-100) */
  targetPackageIds: number[];
}

/** Delete returns the deleted target package info */
export type DeleteTargetPackageResult = Partial<TargetPackageType>;

/**
 * 根据oCPC出价策略ID删除oCPC出价策略
 */
export function deleteTargetPackage(
  client: BaiduClient,
  params: DeleteTargetPackageParams,
) {
  return client.call<DeleteTargetPackageParams, { data: Partial<TargetPackageType>[] }>(
    "OcpcService",
    "deleteTargetPackage",
    params,
  );
}

// ── addTargetPackage ──────────────────────────────────

export interface AddTargetPackageParams {
  /** oCPC出价策略属性 (1-20) */
  targetPackageType: TargetPackageType[];
}

/**
 * 添加oCPC出价策略
 */
export function addTargetPackage(
  client: BaiduClient,
  params: AddTargetPackageParams,
) {
  return client.call<AddTargetPackageParams, { data: Partial<TargetPackageType>[] }>(
    "OcpcService",
    "addTargetPackage",
    params,
  );
}

// ── updateTargetPackage ───────────────────────────────

export interface UpdateTargetPackageParams {
  /** oCPC出价策略属性 (1-20) */
  targetPackageType: TargetPackageType[];
}

/**
 * 编辑oCPC出价策略
 */
export function updateTargetPackage(
  client: BaiduClient,
  params: UpdateTargetPackageParams,
) {
  return client.call<UpdateTargetPackageParams, { data: Partial<TargetPackageType>[] }>(
    "OcpcService",
    "updateTargetPackage",
    params,
  );
}

// ── getTargetPackageList ──────────────────────────────

/** 查询时请求的字段名 */
export type TargetPackageField =
  | "targetPackageId"
  | "targetPackageName"
  | "ocpcBid"
  | "ocpcBidType"
  | "scope"
  | "dataFlowData"
  | "assistTransTypes"
  | "ocpcDeepCpa"
  | "packageStatus"
  | "deepTypeStat"
  | "deepTransTypeMode"
  | "transAsset"
  | "transAssetId";

export interface GetTargetPackageListParams {
  /** 需要返回的字段名 */
  targetPackageTypeFields: TargetPackageField[];
  /**
   * level=1时填写userId，返回所有oCPC出价策略
   * level=2时填写oCPC出价策略ID数组
   */
  ids: number[];
  /**
   * 查询层级
   * 1-账户 2-oCPC出价策略
   */
  level: number;
}

/**
 * 获取oCPC出价策略列表
 */
export function getTargetPackageList(
  client: BaiduClient,
  params: GetTargetPackageListParams,
) {
  return client.call<GetTargetPackageListParams, { data: Partial<TargetPackageType>[] }>(
    "OcpcService",
    "getTargetPackageList",
    params,
  );
}
