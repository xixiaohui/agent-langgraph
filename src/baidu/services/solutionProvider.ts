import type { BaiduClient } from "../client.js";

// ── Shared types ──────────────────────────────────────────

export interface FilterBy {
  /** 筛选字段名 */
  field: string;
  /** 操作符, 固定为in */
  op: string;
  /** 筛选目标值 */
  values: string[];
}

export interface IMToolType {
  /** 已授权咨询工具主键ID */
  id: number;
  /** 咨询工具类型 */
  imType?: number;
  /** 一级接待组ID */
  siteId: number;
  /** 方案类型, 固定为consult */
  siteName?: string;
  /** 二级接待组ID */
  groupId: number;
  /** 二级接待组名称 */
  groupName?: string;
}

export interface NewConsultItem {
  /** 咨询方案ID */
  solutionId: number;
  /** 方案类型, 固定为consult */
  solutionType: string;
  /** 咨询方案名称 */
  solutionName: string;
  /** 咨询页面url */
  imlpUrl: string;
  /** 使用的咨询工具信息 */
  imTool: IMToolType;
  /** 欢迎语 */
  salutatory?: string;
}

export interface PhoneItem {
  /** 客户ucId的base64加密值 */
  useridInBase64: string;
  /** 电话方案ID */
  solutionId: number;
  /** 方案类型, 固定为phone */
  solutionType: string;
  /** 电话方案类型: 0-智能方案, 1-普通方案 */
  phoneSolutionType: string;
  /** 电话方案名称 */
  solutionName: string;
  /** 真实号码 */
  realPhoneNum: string;
  /** 真实号码类型: 0-400, 1-手机号, 2-固话, 3-其他 */
  realPhoneType: number;
}

// ── getNewConsult ─────────────────────────────────────────

export interface GetNewConsultParams {
  /** 分页: [offset, pageSize], 默认[0,10000] */
  limit?: number[];
  /** 使用方Id, 搜索API使用19002 */
  consumerId: number;
  /** 字段筛选, 目前只支持筛选咨询方案ID(solutionId) */
  fieldFilters?: FilterBy[];
}

export interface GetNewConsultResult {
  /** 总个数 */
  totalCount: number;
  /** 咨询方案数据 */
  listData: NewConsultItem[];
}

/** 查询客户在营销通中的所有咨询方案 */
export function getNewConsult(
  client: BaiduClient,
  params: GetNewConsultParams,
) {
  return client.call<GetNewConsultParams, { data: Partial<GetNewConsultResult> }>(
    "SolutionProviderService",
    "getNewConsult",
    params,
  );
}

// ── getPhone ──────────────────────────────────────────────

export interface GetPhoneParams {
  /** 分页: [offset, pageSize], 默认[0,10000] */
  limit?: number[];
  /** 使用方Id, 搜索API使用19002, 本地业务使用16001/30001 */
  consumerId: number;
  /** 字段筛选, 支持phoneSolutionType和solutionId */
  fieldFilters?: FilterBy[];
}

export interface GetPhoneResult {
  /** 总个数 */
  totalCount: number;
  /** 电话方案数据 */
  listData: PhoneItem[];
}

/** 查询客户在营销通中的所有有效的电话方案 */
export function getPhone(
  client: BaiduClient,
  params: GetPhoneParams,
) {
  return client.call<GetPhoneParams, { data: Partial<GetPhoneResult> }>(
    "SolutionProviderService",
    "getPhone",
    params,
  );
}
