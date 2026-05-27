import type { BaiduClient } from "../client.js";

// ── getCrowdEstimate ────────────────────────────────────

export interface GetCrowdEstimateParams {
  /**
   * 性别
   * - 0: 不限
   * - 1: 男
   * - 2: 女
   */
  sex?: number;
  /**
   * 年龄
   * - 0: 不限
   * - 1: 18岁以下
   * - 2: 18-24岁
   * - 4: 25-34岁
   * - 8: 35-44岁
   * - 16: 44岁以上
   */
  age?: number[];
  /** 兴趣人群ID列表 */
  inPeople?: number[];
  /** 表名 */
  tableName?: string;
  /** 要查询的keys */
  keys?: string[];
}

// ── Response types ──────────────────────────────────────

/** 人群覆盖预估信息 (返回) */
export interface CrowdEstimateInfo {
  /** 预估覆盖率，百分数 (如21表示覆盖率为21%) */
  coverage: number | null;
}

// ── Functions ───────────────────────────────────────────

/**
 * 人群覆盖预估
 */
export function getCrowdEstimate(
  client: BaiduClient,
  params: GetCrowdEstimateParams,
) {
  return client.call<
    GetCrowdEstimateParams,
    { data: Partial<CrowdEstimateInfo>[] }
  >("CrowdFunction", "getCrowdEstimate", params);
}
