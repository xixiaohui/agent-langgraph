import type { BaiduClient } from "../client.js";

// ── Shared component types ────────────────────────────────

export interface DanubeWebPlanRangeItemType {
  /** 绑定账户ID (绑定到账户时只用此字段) */
  userId?: number;
  /** 绑定计划ID (查询时0表示未设置) */
  campaignId?: number;
  /** 绑定单元ID (查询时0表示未设置) */
  adgroupId?: number;
}

export interface DanubeImage {
  /** 组件ID (只读) */
  id?: string;
  /** 图片链接 (只读) */
  url?: string;
  /** 图片裁剪上方坐标 (只读) */
  cutTop?: number;
  /** 图片裁剪左方坐标 (只读) */
  cutLeft?: number;
  /** 图片裁剪宽度 (只读) */
  cutWidth?: number;
  /** 图片裁剪高度 (只读) */
  cutHeight?: number;
  /** view宽度 (只读) */
  viewWidth?: number;
  /** view高度 (只读) */
  viewHeight?: number;
  /** 原始宽度 (只读) */
  originWidth?: number;
  /** 原始高度 (只读) */
  originHeight?: number;
}

// ── SelectList component ──────────────────────────────────

export interface SelectList {
  /** 标签 */
  key?: string;
  /** 属性值 */
  value?: string;
  /** 组件ID (只读) */
  id?: string;
}

export interface DanubeSelectListCreative {
  content?: SelectList[];
  /** 样式ID */
  mtId?: number;
  /** 样式中文名 (只读) */
  cnName?: string;
  /** 样式英文名 (只读) */
  enName?: string;
  /** 样式系列: NAVIGATION-导航, IMAGE_TEXT-图文, HOLOGRAPHY-全息, PLA-橱窗, LIST-列表 (只读) */
  style?: string;
  /** 组件ID (只读) */
  id?: string;
}

// ── Plas component ────────────────────────────────────────

export interface Plas {
  /** 商品名称 */
  name?: string;
  /** 商品描述 */
  desc?: string;
  /** 商品链接 */
  url?: string;
  /** 小程序链接 */
  swanUrl?: string;
  /** 调起链接 */
  deepLink?: string;
  /** 商品图片 */
  image?: DanubeImage[];
  /** 组件ID (只读) */
  id?: string;
}

export interface DanubePlasCreative {
  content?: Plas[];
  mtId?: number;
  cnName?: string;
  enName?: string;
  style?: string;
  id?: string;
}

// ── Category component ────────────────────────────────────

export interface SubLink {
  /** 组件ID (只读) */
  id?: string;
  /** 是否是固定子链: true-是, false-否 */
  moreLink?: boolean;
  /** 子链名称 */
  text?: string;
  /** 子链URL */
  linkUrl?: string;
  /** 小程序链接 */
  swanUrl?: string;
  /** 调起链接 */
  deepLink?: string;
}

export interface Category {
  /** 子链 */
  subLinks?: SubLink[];
  /** 标签 */
  label?: string;
  /** 子链 */
  textLink?: SubLink[];
}

export interface DanubeCategoryCreative {
  content?: Category;
  mtId?: number;
  cnName?: string;
  enName?: string;
  style?: string;
  /** 标签行业 */
  industry?: string;
  id?: string;
}

// ── Image component ───────────────────────────────────────

export interface DanubeImageCreative {
  content?: DanubeImage[];
  mtId?: number;
  cnName?: string;
  enName?: string;
  style?: string;
  id?: string;
  /** 图片ID (添加或修改图片组件时必填) */
  imageId?: number;
}

// ── TextList component ────────────────────────────────────

export interface DanubeTextListCreative {
  content?: string[];
  mtId?: number;
  cnName?: string;
  enName?: string;
  style?: string;
  id?: string;
}

// ── List component ────────────────────────────────────────

export interface ListRowType {
  /** 商品名称 */
  productName?: string;
  /** 商品链接 */
  productUrl?: string;
  /** 跳转链接 */
  targetUrl?: string;
  /** 标签 */
  labels?: string[];
  /** 小程序url */
  swanUrl?: string;
  /** deeplink */
  deepLink?: string;
}

export interface ListType {
  /** 标签 */
  labels?: string[];
  /** 点击跳转 */
  slogan?: string;
  /** 商品列 */
  rows?: ListRowType[];
  /** 每列的行数要求 */
  maxCharNumByColumn?: number[];
  /** 行业 */
  industry?: string;
}

export interface DanubeListCreative {
  content?: ListType;
  mtId?: number;
  cnName?: string;
  enName?: string;
  style?: string;
  industry?: string;
  id?: string;
}

// ── Creative components container ─────────────────────────

export interface DanubeCreativeComponent {
  selectList?: DanubeSelectListCreative[];
  plas?: DanubePlasCreative[];
  category?: DanubeCategoryCreative[];
  image?: DanubeImageCreative[];
  textList?: DanubeTextListCreative[];
  list?: DanubeListCreative[];
}

// ── DanubeCreativeGroupType ──────────────────────────────

export interface DanubeCreativeGroupType {
  /** 创意组ID (更新时必填) */
  creativeGroupId?: number;
  /** 创意组名称, 长度[1,20]字节 */
  creativeGroupName?: string;
  /** 绑定范围 */
  bindingRange?: DanubeWebPlanRangeItemType[];
  /**
   * 投放样式
   * 3011-导航(计算机端), 3015-图加导航(计算机端), 1046-搜索头条(计算机端),
   * 3196-行行通(计算机端), 3051-站内直达高级版(移动端), 3017-综合导航(移动端),
   * 3010-文本导航(移动端), 3008-站内直达(移动端), 3041-搜索头条(移动端),
   * 3004-行行通(移动端), 3007-站内直达(计算机端), 11051-多品活动大图(计算机端),
   * 11050-单品活动大图(计算机端), 3228-高级图文(计算机端), ...
   */
  materialTypes?: number[];
  /** 绑定层级: USER-账户层级, PLAN-计划或单元层级 (只读) */
  bindingLevel?: string;
  /** 行业 */
  category?: number[];
  /** 样式-组件信息 */
  creativeComponents?: DanubeCreativeComponent;
  /** 投放设备: 0-全部, 1-移动, 2-计算机 (只读) */
  device?: number;
  /** 状态: 0-启用, 1-暂停, 2-删除, 3-审核不通过, 4-审核中 (只读) */
  status?: number;
  /** 暂停状态: true-暂停, false-启用 */
  pause?: boolean;
}

// ── DanubeCreativeGroupInfo (response) ──────────────────

export interface DanubeCreativeGroupInfo {
  creativeGroupId: number;
  creativeGroupName: string;
  bindingRange: DanubeWebPlanRangeItemType[];
  materialTypes: number[];
  bindingLevel: string;
  category: number[];
  creativeComponents: DanubeCreativeComponent;
  device: number;
  status: number;
  pause: boolean;
}

// ── deleteDanubeCreativeGroup ─────────────────────────────

export interface DeleteDanubeCreativeGroupParams {
  /** 创意组ID, 集合长度[1,1000] */
  creativeGroupIds: number[];
}

/** 删除高级样式创意组 */
export function deleteDanubeCreativeGroup(
  client: BaiduClient,
  params: DeleteDanubeCreativeGroupParams,
) {
  return client.call<DeleteDanubeCreativeGroupParams, { data: Partial<DanubeCreativeGroupInfo>[] }>(
    "DanubeCreativeGroupService",
    "deleteDanubeCreativeGroup",
    params,
  );
}

// ── copyDanubeCreativeGroup ───────────────────────────────

export interface CopyDanubeCreativeGroupParams {
  /** 创意组信息, 最多10个 */
  creativeGroupTypes: DanubeCreativeGroupType[];
}

/** 复制高级样式创意组 */
export function copyDanubeCreativeGroup(
  client: BaiduClient,
  params: CopyDanubeCreativeGroupParams,
) {
  return client.call<CopyDanubeCreativeGroupParams, { data: Partial<DanubeCreativeGroupInfo>[] }>(
    "DanubeCreativeGroupService",
    "copyDanubeCreativeGroup",
    params,
  );
}

// ── addDanubeCreativeGroup ────────────────────────────────

export interface AddDanubeCreativeGroupParams {
  /** 创意组信息, 最多10个 */
  creativeGroupTypes: DanubeCreativeGroupType[];
}

/** 新建高级样式创意组 */
export function addDanubeCreativeGroup(
  client: BaiduClient,
  params: AddDanubeCreativeGroupParams,
) {
  return client.call<AddDanubeCreativeGroupParams, { data: Partial<DanubeCreativeGroupInfo>[] }>(
    "DanubeCreativeGroupService",
    "addDanubeCreativeGroup",
    params,
  );
}

// ── updateDanubeCreativeGroup ─────────────────────────────

export interface UpdateDanubeCreativeGroupParams {
  /** 创意组信息, 修改内容最多10个, 修改状态最多1000个 */
  creativeGroupTypes: DanubeCreativeGroupType[];
}

/** 修改高级样式创意组 */
export function updateDanubeCreativeGroup(
  client: BaiduClient,
  params: UpdateDanubeCreativeGroupParams,
) {
  return client.call<UpdateDanubeCreativeGroupParams, { data: Partial<DanubeCreativeGroupInfo>[] }>(
    "DanubeCreativeGroupService",
    "updateDanubeCreativeGroup",
    params,
  );
}

// ── getDanubeCreativeGroup ────────────────────────────────

export interface GetDanubeCreativeGroupParams {
  /** 页号, 默认1 */
  pageNo?: number;
  /** 单页大小, 默认10, 最大100 */
  pageSize?: number;
  /** 查询字段: materialTypes-创意样式, bindingRange-投放范围, 为空查询全部 */
  fields?: string[];
  /** 创意组ID, 集合长度[0,100], 指定ID时不分页 */
  creativeGroupIds?: number[];
}

export interface GetDanubeCreativeGroupResult {
  /** 物料列表总数 */
  totalCount: number;
  /** 物料结果 */
  fields: DanubeCreativeGroupInfo[];
}

/** 查询高级样式创意组 */
export function getDanubeCreativeGroup(
  client: BaiduClient,
  params: GetDanubeCreativeGroupParams,
) {
  return client.call<GetDanubeCreativeGroupParams, { data: Partial<GetDanubeCreativeGroupResult>[] }>(
    "DanubeCreativeGroupService",
    "getDanubeCreativeGroup",
    params,
  );
}
