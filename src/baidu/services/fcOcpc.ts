import type { BaiduClient } from "../client.js";

// ── getSuggestCPAs ────────────────────────────────────

export type SuggestCPAField = "tradeSuggestCpa" | "noThresholdSuggestCpa";

export interface SuggestCPAInfo {
  /** 基于客户所在行业投放效果数据推荐CPA */
  tradeSuggestCpa: number;
  /** 基于计划过去一周效果数据推荐CPA */
  noThresholdSuggestCpa: number;
}

export interface GetSuggestCPAsParams {
  /**
   * 请求字段
   * tradeSuggestCpa - 基于客户所在行业投放效果数据推荐CPA
   * noThresholdSuggestCpa - 基于计划过去一周效果数据推荐CPA
   */
  fields: SuggestCPAField[];
  /**
   * 数据来源
   * 1-网页JS布码 2-线索API 3-咨询工具授权 4-基木鱼/度小店
   * 5-应用API 6-电话数据授权 7-百度智能小程序SDK 8-应用SDK
   */
  dataFlow: number[];
  /** 转化类型 */
  transTypes: number[];
  /** 生效范围，计划ID集合 */
  campaignIds: number[];
}

/**
 * 获取建议CPA，包括行业CPA推荐值、历史生效范围CPA推荐值、ecpc建议最高出价系数
 */
export function getSuggestCPAs(
  client: BaiduClient,
  params: GetSuggestCPAsParams,
) {
  return client.call<GetSuggestCPAsParams, { data: Partial<SuggestCPAInfo>[] }>(
    "FcOcpcService",
    "getSuggestCPAs",
    params,
  );
}
