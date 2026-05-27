import type { BaiduClient } from "../client.js";

// ── Shared types ──────────────────────────────────────────

export interface SegmentBindType {
  bindId?: number;
  pause?: boolean;
}

export interface SegmentBindField {
  bindId: number;
  adgroupId: number;
  segmentType: number;
  /** 绑定来源: 0-API绑定 */
  bindSource: number;
  isDelete: boolean;
  segmentId: number;
  campaignId: number;
  campaignName: string;
  adgroupName: string;
  id: number;
}

export interface SegmentBindGetResult {
  fields: SegmentBindField[];
}

export interface SegmentBindAddItem {
  /** 绑定来源: 0-API绑定 */
  bindSource?: number;
  /** 绑定层级: 1-单元 */
  bindLevel?: number;
  segmentType: number;
  segmentId: number;
  adgroupId: number;
}

export interface SegmentBindAddResult {
  bindId: number;
  userId: number;
  adgroupId: number;
  segmentType: number;
  bindSource: number;
  isDelete: boolean;
  segmentId: number;
  campaignId: number;
  pause: boolean;
  campaignName: string;
  adgroupName: string;
  /** 状态 */
  status: number;
  id: number;
}

// ── deleteSegmentBind ─────────────────────────────────────

export interface DeleteSegmentBindParams {
  /** 绑定ID列表 */
  items: number[];
}

/** 删除指定的物料绑定(可批量) */
export function deleteSegmentBind(
  client: BaiduClient,
  params: DeleteSegmentBindParams,
) {
  return client.call<DeleteSegmentBindParams, { data: Array<{ SegmentBindType: Partial<{ bindid: number }>[] }> }>(
    "AdvancedSegmentBindService",
    "deleteSegmentBind",
    params,
  );
}

// ── updateSegmentBind ─────────────────────────────────────

export interface UpdateSegmentBindParams {
  items: SegmentBindType[];
}

/** 更新物料绑定状态(可批量), 仅支持绑定关系状态修改 */
export function updateSegmentBind(
  client: BaiduClient,
  params: UpdateSegmentBindParams,
) {
  return client.call<UpdateSegmentBindParams, { data: { SegmentBindType: Partial<SegmentBindType>[] }[] }>(
    "AdvancedSegmentBindService",
    "updateSegmentBind",
    params,
  );
}

// ── getSegmentBind ────────────────────────────────────────

export interface GetSegmentBindParams {
  /** 查询ID列表 */
  ids: number[];
  /** 查询层级 */
  idType: number;
  /** 组件类型过滤 */
  segmentTypes?: number[];
  /** 分页: [offset, pageSize] */
  limit?: number[];
}

/** 根据指定的层级获取物料绑定信息 */
export function getSegmentBind(
  client: BaiduClient,
  params: GetSegmentBindParams,
) {
  return client.call<GetSegmentBindParams, { data: Partial<SegmentBindGetResult>[] }>(
    "AdvancedSegmentBindService",
    "getSegmentBind",
    params,
  );
}

// ── addSegmentBind ────────────────────────────────────────

export interface AddSegmentBindParams {
  items: SegmentBindAddItem[];
}

/** 新增绑定关系(可批量), 仅适用于绑定到单元层级 */
export function addSegmentBind(
  client: BaiduClient,
  params: AddSegmentBindParams,
) {
  return client.call<AddSegmentBindParams, { data: Partial<SegmentBindAddResult>[] }>(
    "AdvancedSegmentBindService",
    "addSegmentBind",
    params,
  );
}
