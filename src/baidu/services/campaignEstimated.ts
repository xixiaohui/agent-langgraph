import type { BaiduClient } from "../client.js";

// ── getProjectBidReference ────────────────────────────

/** 目标转化出价和胜出率诊断建议 */
export interface DiagnosicAdviceType {
  /** 行业信息 */
  hitDims: HitDimsType;
  /** 目标转化出价和胜出率 */
  levelDataList: LevelData[];
}

/** 行业信息 */
export interface HitDimsType {
  /** 行业 */
  hitTrade: string;
  /** 业务点 */
  hitCategory: string;
}

/** 目标转化出价和胜出率 */
export interface LevelData {
  /** 胜出率 */
  bidQuantileRank: number;
  /** 目标转化出价 */
  bidQuantileValue: number;
  /** 出价分位数对应的出价 */
  effectClick: number;
}

/**
 * diffLevel 不同业务点间的差异:
 *   1-差异小 2-差异大
 */
export interface ProjectBidReferenceInfo {
  /** 是否处于深层阶段 */
  inDeepStage: number;
  /** 是否为多业务点 */
  multiCategory: number;
  /** 当前近一周cv */
  currentWeekCv: number;
  /**
   * 不同业务点间的差异
   * 1-差异小 2-差异大
   */
  diffLevel: number;
  /** 目标转化出价和胜出率 */
  diagnosicAdvice: DiagnosicAdviceType[];
}

export interface GetProjectBidReferenceParams {
  /**
   * 场景
   * 1-新建场景 2-修改场景
   */
  estimatedBidType: number;
  /** 计划id集合 (新建场景传此字段) */
  planIdList?: number[];
  /** 项目id集合 (修改场景传此字段) */
  projectIdList?: number[];
  /** 转化类型 */
  transtype: number[];
}

/**
 * 获取项目建议目标转化出价和胜出率
 * 支持机械设备、商务服务、化工能源、电子电工、房产家居、
 * 生活服务、网络服务、软件、教育培训、物流等10个行业
 */
export function getProjectBidReference(
  client: BaiduClient,
  params: GetProjectBidReferenceParams,
) {
  return client.call<GetProjectBidReferenceParams, { data: Partial<ProjectBidReferenceInfo>[] }>(
    "CampaignEstimatedService",
    "getProjectBidReference",
    params,
  );
}
