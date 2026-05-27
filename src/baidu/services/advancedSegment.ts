import type { BaiduClient } from "../client.js";

// ── Shared types ──────────────────────────────────────────

export interface AuditContentItem {
  picUrl?: string;
  picText?: string;
  rawPicUrl?: string;
  targetUrl?: string;
  desc?: string;
  imageId?: number;
}

export interface AuditContent {
  /** 账户来源: 0-API添加 */
  addfrom?: number;
  items?: AuditContentItem[];
}

export interface SegmentItem {
  segmentId?: number;
  /** 组件来源: 3-账户层级 */
  source?: number;
  segmentType?: number;
  auditContent?: AuditContent;
  pause?: boolean;
}

export interface SegmentResultItem {
  segmentId: number;
  source: number;
  segmentType: number;
  auditContent: AuditContent;
}

export interface SegmentGetField {
  segmentId: number;
  source: number;
  segmentType: number;
  auditContent: AuditContent;
  pause?: boolean;
}

export interface SegmentGetResult {
  totalCount: number;
  fields: SegmentGetField[];
}

// ── deleteSegment ─────────────────────────────────────────

export interface DeleteSegmentParams {
  /** 组件ID列表 */
  items: number[];
}

/** 删除指定的物料(可批量) */
export function deleteSegment(
  client: BaiduClient,
  params: DeleteSegmentParams,
) {
  return client.call<DeleteSegmentParams, { data: { SegmentType: Array<{ SegmentId: number }> }[] }>(
    "AdvancedSegmentService",
    "deleteSegment",
    params,
  );
}

// ── updateSegment ─────────────────────────────────────────

export interface UpdateSegmentParams {
  items: SegmentItem[];
}

/** 更新组件(可批量) */
export function updateSegment(
  client: BaiduClient,
  params: UpdateSegmentParams,
) {
  return client.call<UpdateSegmentParams, { data: { items: Partial<SegmentResultItem>[] }[] }>(
    "AdvancedSegmentService",
    "updateSegment",
    params,
  );
}

// ── getSegment ────────────────────────────────────────────

export interface GetSegmentParams {
  /** 查询ID列表 */
  ids: number[];
  /** 查询层级 */
  idType?: number;
}

/** 根据指定的查询层级获取组件物料列表 */
export function getSegment(
  client: BaiduClient,
  params: GetSegmentParams,
) {
  return client.call<GetSegmentParams, { data: Partial<SegmentGetResult>[] }>(
    "AdvancedSegmentService",
    "getSegment",
    params,
  );
}

// ── addSegment ────────────────────────────────────────────

export interface AddSegmentParams {
  items: SegmentItem[];
}

/** 新增组件(可批量) */
export function addSegment(
  client: BaiduClient,
  params: AddSegmentParams,
) {
  return client.call<AddSegmentParams, { data: Partial<SegmentResultItem>[] }>(
    "AdvancedSegmentService",
    "addSegment",
    params,
  );
}
