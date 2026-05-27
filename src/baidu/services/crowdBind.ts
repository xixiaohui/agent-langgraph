import type { BaiduClient } from "../client.js";

// ── Shared Types ─────────────────────────────────────

export interface CrowdBindType {
  /** 绑定Id (updateBind时必填) */
  bindId?: number;
  /** 绑定目标层级: 1-计划, 200-创意(已下线) */
  targetType?: number;
  /** 绑定目标ID */
  targetId?: number;
  /** 人群绑定出价系数，范围[1.0, 10.0] */
  crowdPriceRatio?: number;
  /** 人群ID */
  crowdId?: number;
}

// ── BindInfo (response) ──────────────────────────────

export interface BindInfo {
  bindId: number;
  /** 绑定目标层级: 1-计划, 200-创意(已下线) */
  targetType: number;
  targetId: number;
  crowdPriceRatio: number;
  campaignId: number;
  crowdId: number;
}

// ── CrowdBindFields ──────────────────────────────────

export type CrowdBindField =
  | "bindId"
  | "targetType"
  | "targetId"
  | "crowdPriceRatio"
  | "campaignId"
  | "crowdId";

// ── deleteBind ───────────────────────────────────────

export interface DeleteBindParams {
  /** 绑定ID集合，一次最多删除10000条 */
  bindIds: number[];
}

/** 删除人群绑定(可批量)，一次最多删除10000条绑定 */
export function deleteBind(
  client: BaiduClient,
  params: DeleteBindParams,
) {
  return client.call<DeleteBindParams, { data: Partial<BindInfo>[] }>(
    "CrowdBindService",
    "deleteBind",
    params,
  );
}

// ── addBind ──────────────────────────────────────────

export interface AddBindParams {
  /** 新增绑定数据 */
  crowdBindTypes: CrowdBindType[];
}

/** 新增人群绑定(可批量)，一次最多添加10000条绑定 */
export function addBind(
  client: BaiduClient,
  params: AddBindParams,
) {
  return client.call<AddBindParams, { data: Partial<BindInfo>[] }>(
    "CrowdBindService",
    "addBind",
    params,
  );
}

// ── updateBind ───────────────────────────────────────

export interface UpdateBindParams {
  /** 修改绑定数据 */
  crowdBindTypes: CrowdBindType[];
}

/** 修改人群绑定(可批量)，一次最多修改10000条绑定 */
export function updateBind(
  client: BaiduClient,
  params: UpdateBindParams,
) {
  return client.call<UpdateBindParams, { data: Partial<BindInfo>[] }>(
    "CrowdBindService",
    "updateBind",
    params,
  );
}

// ── getBind ──────────────────────────────────────────

export interface GetBindParams {
  /** 请求字段 */
  crowdBindFields: CrowdBindField[];
  /** 绑定层级: 1-计划, 200-创意(已下线)，仅当idType为30时有效 */
  targetType?: number;
  /** 层级主键集合 */
  ids: number[];
  /** 查询层级: 3-计划层级, 7-创意层级(已下线), 29-人群绑定层级, 30-人群id层级 */
  idType: number;
}

/** 获取人群绑定列表，一次最多查询10000条绑定 */
export function getBind(
  client: BaiduClient,
  params: GetBindParams,
) {
  return client.call<GetBindParams, { data: Partial<BindInfo>[] }>(
    "CrowdBindService",
    "getBind",
    params,
  );
}
