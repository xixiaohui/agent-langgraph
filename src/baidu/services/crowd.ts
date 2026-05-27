import type { BaiduClient } from "../client.js";

// ── Shared Types ─────────────────────────────────────

export interface CrowdDeviceProperty {
  /** 0-不限, 1-IOS, 2-Android, 4-计算机 */
  os?: number[];
  /** 0-不限, 1-应用分类, 2-应用自定义 */
  appBehaviour?: number;
  /** 应用类型ID或应用ID */
  appIds?: string[];
  /** 手机品牌编码 */
  phoneBrands?: number[];
}

export interface CrowdType {
  /** 人群id (updateCrowd时必填) */
  crowdId?: number;
  /** 人群名称 */
  crowdName?: string;
  /** 年龄: 0-不限, 1-小于18, 2-19到24, 4-25到34, 8-35到44, 32-45到54, 64-54以上 */
  age?: number[];
  /** 性别: 0-不限, 1-男, 2-女 */
  sex?: number;
  /** 兴趣id */
  inPeople?: number[];
  /** 搜索历史 */
  searchWord?: string[];
  /** 浏览历史 */
  browseUrl?: string[];
  /** ID包 */
  idPack?: number[];
  /** 人群定向方式: 0-基本属性, 3-自定义人群, 4-APP定向, 10-已转化用户 */
  crowdDirectType?: number;
  /** 人群生效类型: 0-溢价人群, 1-排除人群, 2-限定人群(addCrowd) */
  effectType?: number;
  /** 设备属性 */
  deviceProperty?: CrowdDeviceProperty;
  /** 转化时间窗口: 1-1天, 7-1周, 30-1个月, 90-3个月, 180-6个月 */
  recentDays?: number;
  /** 自定义年龄 [min, max] */
  customAge?: number[];
  /** 操作系统: 0-不限, 1-IOS, 2-Android, 4-计算机 */
  os?: number[];
  /** 应用行为: 0-不限, 1-应用分类, 2-应用自定义 */
  appBehaviour?: number;
  /** 应用类型ID或应用ID */
  appIds?: string[];
  /** 手机品牌编码 */
  phoneBrands?: number[];
}

// ── CrowdInfo (response) ─────────────────────────────

export interface CrowdInfo {
  crowdId: number;
  userId: number;
  crowdName: string;
  age: number[];
  sex: number;
  inPeople: number[];
  searchWord: string[];
  browseUrl: string[];
  campaignIds: number[];
  creativeIds: number[];
  idPack: number[];
  crowdDirectType: number;
  effectType: number;
  createTime: string;
  deviceProperty: CrowdDeviceProperty;
  recentDays: number;
  customAge: number[];
}

// ── CrowdFields ──────────────────────────────────────

export type CrowdField =
  | "crowdId"
  | "crowdName"
  | "age"
  | "customAge"
  | "sex"
  | "inPeople"
  | "idPack"
  | "crowdDirectType"
  | "effectType"
  | "createTime"
  | "conversionLevel"
  | "recentDays";

// ── deleteCrowd ──────────────────────────────────────

export interface DeleteCrowdParams {
  /** 需要删除的人群id列表，集合长度限制：[1, 1000] */
  crowdIds: number[];
}

/** 删除人群：支持一次删除多个人群（一次最多1000） */
export function deleteCrowd(
  client: BaiduClient,
  params: DeleteCrowdParams,
) {
  return client.call<DeleteCrowdParams, { data: Partial<CrowdInfo>[] }>(
    "CrowdService",
    "deleteCrowd",
    params,
  );
}

// ── addCrowd ─────────────────────────────────────────

export interface AddCrowdParams {
  /** 需要新增的人群信息，集合长度限制：[1, 1000] */
  crowdTypes: CrowdType[];
}

/** 新增人群：支持一次新增多个人群（一次最多1000） */
export function addCrowd(
  client: BaiduClient,
  params: AddCrowdParams,
) {
  return client.call<AddCrowdParams, { data: Partial<CrowdInfo>[] }>(
    "CrowdService",
    "addCrowd",
    params,
  );
}

// ── updateCrowd ──────────────────────────────────────

export interface UpdateCrowdParams {
  /** 需要修改的人群信息，集合长度限制：[1, 1000] */
  crowdTypes: CrowdType[];
}

/** 修改人群：批量修改人群属性设置（一次最大支持1000个） */
export function updateCrowd(
  client: BaiduClient,
  params: UpdateCrowdParams,
) {
  return client.call<UpdateCrowdParams, { data: Partial<CrowdInfo>[] }>(
    "CrowdService",
    "updateCrowd",
    params,
  );
}

// ── getCrowd ─────────────────────────────────────────

export interface GetCrowdParams {
  /** 请求字段 */
  crowdFields: CrowdField[];
  /** 定向方式筛选: 0-基本属性, 3-自定义人群, 4-APP定向, 10-已转化用户 */
  crowdDirectType?: number[];
  /** 分页: [offset, limit] 或 [limit] */
  limit?: number[];
  /** true-倒序, false-正序 */
  desc?: boolean;
}

/** 查询人群信息（一次最多查询1000个人群） */
export function getCrowd(
  client: BaiduClient,
  params: GetCrowdParams,
) {
  return client.call<GetCrowdParams, { data: Partial<CrowdInfo>[] }>(
    "CrowdService",
    "getCrowd",
    params,
  );
}
