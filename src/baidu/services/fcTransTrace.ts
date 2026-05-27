import type { BaiduClient } from "../client.js";

// ── Shared Types ──────────────────────────────────────

/** 转化追踪对象 */
export interface FcTransTraceType {
  transId: number;
  transMode: number;
  transName: string;
  transType: number[];
  appType: number;
  monitorUrl: string;
  campaignIds: number[];
}

/** 要删除的转化追踪标识 */
export interface FcTransIdAndTransMode {
  /** 转化追踪id */
  transId: number;
  /** 接入方式 */
  transMode: number;
}

// ── getFcTransTraceList ───────────────────────────────

export interface GetFcTransTraceListParams {
  /** 转化追踪名称 */
  transName?: string;
  /**
   * 追踪目标
   * 1-网站 2-APP 3-小程序
   */
  traceTargetList?: number[];
  /**
   * 接入方式
   * 4-线索API 6-咨询工具授权 7-网站JS布码 8-应用API
   * 9-电话数据授权 10-百度智能小程序SDK 11-应用SDK
   * 23-百度统计网站导入 24-百度统计小程序导入
   */
  transModeList?: number[];
  /**
   * 转化配置状态
   * 0-联调成功 1-联调失败 2-联调等待 3-无需联调
   */
  transStatusList?: number[];
  /** 分页查询 [偏移量, 最大数目] */
  limit?: number[];
}

export interface GetFcTransTraceListResult {
  /** 返回查询的转化追踪 */
  fields: FcTransTraceType[];
  /** 总条数 */
  totalCount: number;
}

/**
 * 查询转化追踪
 */
export function getFcTransTraceList(
  client: BaiduClient,
  params: GetFcTransTraceListParams,
) {
  return client.call<GetFcTransTraceListParams, { data: Partial<GetFcTransTraceListResult> }>(
    "FcTransTraceApiService",
    "getFcTransTraceList",
    params,
  );
}

// ── addFcTransTrace ───────────────────────────────────

export interface AddFcTransTraceParams {
  /**
   * 接入方式
   * 仅支持: 8-应用API, 11-应用SDK
   */
  transMode: number;
  /** 转化名称 (长度1-50，不可重复) */
  transName: string;
  /**
   * 转化类型
   * transMode=8时可选4,25,26,27,28,52
   * transMode=11时可选4,25,26,28
   */
  transType: number[];
  /**
   * 应用类型
   * 0-iOS和Android 1-仅iOS 2-仅Android
   */
  appType?: number;
  /** 监测地址 (transMode=8必填, 须含{{CALLBACK_URL}}) */
  monitorUrl?: string;
  /** 绑定的计划id (transMode=8,11时必填) */
  campaignIds?: number[];
}

/**
 * 新增转化追踪 (仅支持应用API和应用SDK)
 */
export function addFcTransTrace(
  client: BaiduClient,
  params: AddFcTransTraceParams,
) {
  return client.call<AddFcTransTraceParams, { data: number }>(
    "FcTransTraceApiService",
    "addFcTransTrace",
    params,
  );
}

// ── updateFcTransTrace ────────────────────────────────

export interface UpdateFcTransTraceParams {
  /** 转化追踪ID */
  transId: number;
  /** 接入方式 */
  transMode: number;
  /** 转化名称 (长度1-50，不可重复) */
  transName: string;
  /** 转化类型 (被oCPC使用时仅支持新增) */
  transType?: number[];
  /** 监测地址 (被oCPC使用时不可修改) */
  monitorUrl?: string;
}

/**
 * 修改转化追踪
 */
export function updateFcTransTrace(
  client: BaiduClient,
  params: UpdateFcTransTraceParams,
) {
  return client.call<UpdateFcTransTraceParams, { data: number }>(
    "FcTransTraceApiService",
    "updateFcTransTrace",
    params,
  );
}

// ── deleteFcTransTrace ────────────────────────────────

export interface DeleteFcTransTraceParams {
  /** 要删除的转化追踪 (集合长度1-100) */
  trans: FcTransIdAndTransMode[];
}

/**
 * 删除转化追踪
 */
export function deleteFcTransTrace(
  client: BaiduClient,
  params: DeleteFcTransTraceParams,
) {
  return client.call<DeleteFcTransTraceParams, { data: number[] }>(
    "FcTransTraceApiService",
    "deleteFcTransTrace",
    params,
  );
}
