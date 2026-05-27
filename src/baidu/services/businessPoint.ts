import type { BaiduClient } from "../client.js";

// ── getBindBusinessPointList (查询计划已使用的推广业务) ──

export interface BusinessPointListType {
  /** 业务类目ID */
  businessPointId: number;
  /** 业务类目名称 */
  businessPointName: string;
}

export interface GetBindBusinessPointListParams {
  /** 是否需要将完整路径填充到响应的 paths 字段，true-需要，false-不需要 */
  needPath?: boolean;
}

export interface BusinessPointInfo {
  /** 推广业务类目完整链路 */
  paths: BusinessPointListType[][];
  /** 业务类目ID */
  businessPointId: number;
  /** 业务类目名称 */
  businessPointName: string;
}

/**
 * 查询计划已使用的推广业务。
 */
export function getBindBusinessPointList(
  client: BaiduClient,
  params?: GetBindBusinessPointListParams,
) {
  return client.call<GetBindBusinessPointListParams, { data: Partial<BusinessPointInfo>[] }>(
    "BusinessPointService",
    "getBindBusinessPointList",
    params ?? {},
  );
}
