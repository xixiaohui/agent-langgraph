import type { BaiduClient } from "../client.js";

// ── Shared Types ──────────────────────────────────────

/** 各层级文件下载路径及MD5 */
export interface FilePathType {
  /** 账户层级文件路径 */
  accountFilePath?: string;
  /** 计划层级文件路径 */
  campaignFilePath?: string;
  /** 单元层级文件路径 */
  adgroupFilePath?: string;
  /** 关键词层级文件路径 */
  keywordFilePath?: string;
  /** 创意层级文件路径 */
  creativeFilePath?: string;
  /** 图片素材文件路径 */
  segmentFilePath?: string;
  /** 词包文件路径 */
  businessLabelFilePath?: string;
  /** 自动扩量文件路径 */
  autoExpansionFilePath?: string;
}

/** 变化物料信息 */
export interface ChangedItemIdType {
  /** 物料ID */
  itemId: number;
  /** 物料类型 */
  itemType: number;
}

// ── getAllObjects ─────────────────────────────────────

export interface GetAllObjectsParams {
  /** 指定计划id (空=全账户) */
  campaignIds?: number[];
  /** 是否包含修改未生效物料 (默认true) */
  includeTemp?: boolean;
  /**
   * 压缩格式
   * 0-zip 1-Gzip
   */
  format?: number;
  /** 账户层级数据列 (null/[]不返回; "all"获取所有) */
  accountFields?: string[];
  /** 计划层级数据列 */
  campaignFields?: string[];
  /** 单元层级数据列 */
  adgroupFields?: string[];
  /** 关键词层级数据列 */
  keywordFields?: string[];
  /** 创意层级数据列 */
  creativeFields?: string[];
  /** 图片素材数据列 */
  segmentFields?: string[];
  /** 词包数据列 */
  businessLabelFields?: string[];
  /** 自动扩量数据列 */
  autoExpansionFields?: string[];
}

export interface GetAllObjectsResult {
  /** 下载文件id */
  fileId: string;
}

/**
 * 获取指定账户/计划下的完整数据，可定制需要返回的层级文件及数据列
 */
export function getAllObjects(
  client: BaiduClient,
  params: GetAllObjectsParams,
) {
  return client.call<GetAllObjectsParams, { data: Partial<GetAllObjectsResult>[] }>(
    "BulkJobService",
    "getAllObjects",
    params,
  );
}

// ── getAllChangedObjects ──────────────────────────────

export interface GetAllChangedObjectsParams {
  /** 更新的起始时间 (最早可查上个月1号) */
  startTime: string;
  /** 指定计划id范围 (空=全账户) */
  campaignIds?: number[];
  /** 是否包含影子物料 (默认true) */
  includeTemp?: boolean;
  /**
   * 文件格式
   * 0-zip 1-Gzip
   */
  format?: number;
  /** 计划层级数据列 */
  campaignFields?: string[];
  /** 单元层级数据列 */
  adgroupFields?: string[];
  /** 关键词层级数据列 */
  keywordFields?: string[];
  /** 创意层级数据列 */
  creativeFields?: string[];
}

/**
 * 获取指定时间后有变化的物料信息
 */
export function getAllChangedObjects(
  client: BaiduClient,
  params: GetAllChangedObjectsParams,
) {
  return client.call<GetAllChangedObjectsParams, { data: Partial<GetAllObjectsResult>[] }>(
    "BulkJobService",
    "getAllChangedObjects",
    params,
  );
}

// ── getFileStatus ─────────────────────────────────────

export interface GetFileStatusParams {
  /** 下载任务id */
  fileId: string;
}

export interface GetFileStatusResult {
  /**
   * 文件状态
   * 1-等待中 2-处理中 3-处理成功 5-部分失败
   */
  isGenerated: number;
}

/**
 * 查询下载文件是否已生成
 */
export function getFileStatus(
  client: BaiduClient,
  params: GetFileStatusParams,
) {
  return client.call<GetFileStatusParams, { data: Partial<GetFileStatusResult>[] }>(
    "BulkJobService",
    "getFileStatus",
    params,
  );
}

// ── getFilePath ───────────────────────────────────────

export interface GetFilePathParams {
  /** 处理任务id */
  fileId: string;
}

export interface GetFilePathResult {
  /** 各层级文件下载路径及MD5 */
  filePaths: FilePathType;
}

/**
 * 返回文件下载地址
 */
export function getFilePath(
  client: BaiduClient,
  params: GetFilePathParams,
) {
  return client.call<GetFilePathParams, { data: Partial<GetFilePathResult>[] }>(
    "BulkJobService",
    "getFilePath",
    params,
  );
}

// ── cancelDownload ────────────────────────────────────

export interface CancelDownloadParams {
  /** 处理任务id */
  fileId: string;
}

export interface CancelDownloadResult {
  /**
   * 处理结果
   * 3-处理成功
   */
  isCanceled: number;
}

/**
 * 取消一个下载任务
 */
export function cancelDownload(
  client: BaiduClient,
  params: CancelDownloadParams,
) {
  return client.call<CancelDownloadParams, { data: Partial<CancelDownloadResult>[] }>(
    "BulkJobService",
    "cancelDownload",
    params,
  );
}

// ── getChangedIds ─────────────────────────────────────

export interface GetChangedIdsParams {
  /** 起始时间 (一个月内) */
  startTime: string;
  /**
   * 物料类型
   * 1-搜索计划 2-搜索单元 3-搜索创意 4-搜索关键词
   * 2001-信息流计划 等
   */
  itemType: number;
  /** 计划id数组 (空=全账户) */
  ids?: number[];
  /** 分页页码 (从1开始) */
  pageNo?: number;
  /** 分页大小 (不超过20000) */
  pageSize?: number;
}

export interface GetChangedIdsResult {
  /** 当前时间点 */
  endTime: string;
  /** 变化物料信息 */
  changedItemIds: ChangedItemIdType[];
  /** 总数 (仅分页时返回) */
  totalCount?: number;
}

/**
 * 获取从指定时间到当前时间段内有变化的物料id
 */
export function getChangedIds(
  client: BaiduClient,
  params: GetChangedIdsParams,
) {
  return client.call<GetChangedIdsParams, { data: Partial<GetChangedIdsResult>[] }>(
    "BulkJobService",
    "getChangedItemId",
    params,
  );
}

// ── getChangedScale ───────────────────────────────────

export interface GetChangedScaleParams {
  /** 起始时间 (最早可查上个月1号) */
  startTime: string;
  /** 指定计划id范围 (空=全账户) */
  campaignIds?: number[];
  /** 统计计划变化 (默认true) */
  changedCampaignScale?: boolean;
  /** 统计单元变化 (默认true) */
  changedAdgroupScale?: boolean;
  /** 统计关键词变化 (默认true) */
  changedKeywordScale?: boolean;
  /** 统计创意变化 (默认true) */
  changedCreativeScale?: boolean;
  /** 统计自动扩量变化 (默认true) */
  changedAutoExpansionScale?: boolean;
}

export interface GetChangedScaleResult {
  /** 计划变化规模 [变化数, 现有数] */
  changedCampaignScale?: number[];
  /** 单元变化规模 [变化数, 现有数] */
  changedAdgroupScale?: number[];
  /** 关键词变化规模 [变化数, 现有数] */
  changedKeywordScale?: number[];
  /** 创意变化规模 [变化数, 现有数] */
  changedCreativeScale?: number[];
  /** 自动扩量变化规模 [变化数, 现有数] */
  changedAutoExpansionScale?: number[];
}

/**
 * 获取变化物料规模，帮助决定后续更新策略
 */
export function getChangedScale(
  client: BaiduClient,
  params: GetChangedScaleParams,
) {
  return client.call<GetChangedScaleParams, { data: Partial<GetChangedScaleResult>[] }>(
    "BulkJobService",
    "getChangedScale",
    params,
  );
}
