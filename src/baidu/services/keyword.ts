import type { BaiduClient } from "../client.js";

// ── Shared Types ──────────────────────────────────────────

/** 物料推广下线原因 */
export interface OfflineReason {
  /** 推广下线主要原因ID，值为"3"时代表审核不通过 */
  mainReason: string;
  /** 推广下线具体原因（可能为JSON字符串） */
  detailReason: string;
}

// ── deleteWord (删除关键词) ───────────────────────────────

export interface DeleteWordParams {
  /** 关键词ID集合，长度限制：[1, 10000] */
  keywordIds: number[];
}

/**
 * 删除指定的关键词及商品目录模板词（可批量）。
 */
export function deleteWord(
  client: BaiduClient,
  params: DeleteWordParams,
) {
  return client.call<
    DeleteWordParams,
    { data: Partial<KeywordInfo>[] }
  >("KeywordService", "deleteWord", params);
}

// ── updateWord (更新关键词) ───────────────────────────────

/** 更新关键词时的关键词字段 */
export interface UpdateWordType {
  /** 关键词ID */
  keywordId: number;
  /** 关键词字面，最大40个字节 */
  keyword?: string;
  /** 关键词竞价价格，取值范围：(0, 999.99]，设为0表示取消出价、采用单元出价 */
  price?: number;
  /**
   * 匹配模式（与phraseType配合使用）
   * - matchType=1且phraseType=1: 精确匹配
   * - matchType=2且phraseType=1: 短语匹配
   * - matchType=2且phraseType=3: 智能匹配
   */
  matchType?: number;
  /**
   * 是否低效关键词
   * - 0: 非低效词
   * - 1: 低效词
   */
  apiInefficient?: number;
  /**
   * 启用/暂停关键词
   * - true: 暂停
   * - false: 启用
   */
  pause?: boolean;
  /** 计算机访问网址，最大1024字节 */
  pcDestinationUrl?: string;
  /** 移动访问网址，最大1024字节 */
  mobileDestinationUrl?: string;
  /**
   * 细分匹配模式（与matchType配合使用）
   * - matchType=1且phraseType=1: 精确匹配
   * - matchType=2且phraseType=1: 短语匹配
   * - matchType=2且phraseType=3: 智能匹配
   */
  phraseType?: number;
  /** 关键词物料标签数组，取值范围：[0, 31]，0表示无标签，31表示重点关键词标签 */
  tabs?: number[];
  /** 应用调起网址，长度限制：[0, 2048] */
  deeplink?: string;
  /** iOS应用调起，长度限制4096字符 */
  ulink?: string;
  /** 小程序访问网址，不超过1024字节 */
  miniProgramUrl?: string;
  /** 计算机最终访问网址 */
  pcFinalUrl?: string;
  /** 计算机监控后缀 */
  pcTrackParam?: string;
  /** 计算机第三方追踪模板 */
  pcTrackTemplate?: string;
  /** 移动最终访问网址 */
  mobileFinalUrl?: string;
  /** 移动监控后缀 */
  mobileTrackParam?: string;
  /** 移动第三方追踪模板 */
  mobileTrackTemplate?: string;
  /** 推广下线主要原因ID */
  mainReason?: string;
  /** 推广下线具体原因 */
  detailReason?: string;
}

export interface UpdateWordParams {
  /** 更新关键词对象数组，单次请求不超过10000 */
  keywordTypes: UpdateWordType[];
}

/**
 * 更新关键词及商品目录模板词（可批量）。
 */
export function updateWord(
  client: BaiduClient,
  params: UpdateWordParams,
) {
  return client.call<
    UpdateWordParams,
    { data: Partial<KeywordInfo>[] }
  >("KeywordService", "updateWord", params);
}

// ── getWord (查询关键词) ──────────────────────────────────

export type WordField =
  | "keywordId"
  | "campaignId"
  | "adgroupId"
  | "keyword"
  | "price"
  | "pause"
  | "matchType"
  | "phraseType"
  | "status"
  | "apiInefficient"
  | "pcDestinationUrl"
  | "mobileDestinationUrl"
  | "tabs"
  | "leftPriceGuide"
  | "mPriceGuide"
  | "deeplink"
  | "ulink"
  | "miniProgramUrl"
  | "quality"
  | "estimatedClickRate"
  | "businessRelationship"
  | "landPageExperience"
  | "createTime"
  | "offlineReasons"
  | "pcFinalUrl"
  | "pcTrackParam"
  | "pcTrackTemplate"
  | "mobileFinalUrl"
  | "mobileTrackParam"
  | "mobileTrackTemplate"
  | "mainReason"
  | "detailReason";

export interface GetWordParams {
  /** 指定需要返回的关键词属性 */
  wordFields: WordField[];
  /**
   * 查询id集合
   * - idType=5: 单元ID，不超过50个
   * - idType=11: 关键词ID，不超过10000个
   */
  ids?: number[];
  /**
   * 查询id类型
   * - 5: 单元ID
   * - 11: 关键词ID
   */
  idType?: number;
  /**
   * 是否查询关键词影子
   * - 0: 只查询关键词本身
   * - 1: 只查询关键词影子
   */
  getTemp?: number;
}

/** 关键词详细信息 */
export interface KeywordInfo {
  /** 推广计划ID */
  campaignId: number;
  /** 关键词ID */
  keywordId: number;
  /** 推广单元ID */
  adgroupId: number;
  /** 关键词字面 */
  keyword: string;
  /** 关键词竞价价格 */
  price: number;
  /**
   * 匹配模式（与phraseType配合使用）
   * - matchType=1且phraseType=1: 精确匹配
   * - matchType=2且phraseType=1: 短语匹配
   * - matchType=2且phraseType=3: 智能匹配
   */
  matchType: number;
  /**
   * 启用/暂停关键词
   * - true: 暂停
   * - false: 启用
   */
  pause: boolean;
  /**
   * 关键词状态
   * - 40: 有效-移动url审核中
   * - 41: 有效
   * - 42: 暂停推广
   * - 43: 不宜推广
   * - 44: 展现受限：搜索无效
   * - 45: 待激活
   * - 46: 审核中
   * - 47: 搜索量过低
   * - 48: 部分无效
   * - 49: 展现受限：计算机搜索无效
   * - 50: 展现受限：移动搜索无效
   * - 58: 展现受限
   */
  status: number;
  /** 计算机访问网址 */
  pcDestinationUrl: string;
  /** 移动访问网址 */
  mobileDestinationUrl: string;
  /**
   * 细分匹配模式（与matchType配合使用）
   * - matchType=1且phraseType=1: 精确匹配
   * - matchType=2且phraseType=1: 短语匹配
   * - matchType=2且phraseType=3: 智能匹配
   */
  phraseType: number;
  /** 物料推广下线原因 */
  offlineReasons: OfflineReason[];
  /** 关键词物料标签数组，0表示无标签，31表示重点关键词标签 */
  tabs: number[];
  /** 计算机指导价 */
  leftPriceGuide: number;
  /** 移动指导价 */
  mPriceGuide: number;
  /** 应用调起网址 */
  deeplink: string;
  /** iOS应用调起 */
  ulink: string;
  /** 小程序访问网址 */
  miniProgramUrl: string;
  /** 质量度，取值范围：[0, 10]，只读 */
  quality: number;
  /**
   * 预估点击率
   * - 0: 数据积累中
   * - 1: 低于平均
   * - 2: 平均水平
   * - 3: 高于平均
   */
  estimatedClickRate: number;
  /**
   * 创意相关性
   * - 0: 数据积累中
   * - 1: 低于平均
   * - 2: 平均水平
   * - 3: 高于平均
   */
  businessRelationship: number;
  /**
   * 落地页体验
   * - 0: 数据积累中
   * - 1: 低于平均
   * - 2: 平均水平
   * - 3: 高于平均
   */
  landPageExperience: number;
  /** 关键词创建时间 */
  createTime: string;
  /** 关键词计算机最终访问网址 */
  pcFinalUrl: string;
  /** 关键词计算机监控后缀 */
  pcTrackParam: string;
  /** 关键词计算机第三方追踪模板 */
  pcTrackTemplate: string;
  /** 关键词移动最终访问网址 */
  mobileFinalUrl: string;
  /** 关键词移动监控后缀 */
  mobileTrackParam: string;
  /** 关键词移动第三方追踪模板 */
  mobileTrackTemplate: string;
  /** 推广下线主要原因ID */
  mainReason: string;
  /** 推广下线具体原因 */
  detailReason: string;
  /**
   * 是否低效关键词
   * - 0: 非低效词
   * - 1: 低效词
   */
  apiInefficient: number;
}

/**
 * 根据指定的单元ID或关键词ID获取关键词信息。
 */
export function getWord(
  client: BaiduClient,
  params: GetWordParams,
) {
  return client.call<GetWordParams, { data: Partial<KeywordInfo>[] }>(
    "KeywordService",
    "getWord",
    params,
  );
}

// ── addWord (添加关键词) ──────────────────────────────────

/** 新增关键词时的关键词字段 */
export interface AddWordType {
  /** 推广单元ID */
  adgroupId: number;
  /** 关键词字面，最大40个字节 */
  keyword: string;
  /**
   * 匹配模式（与phraseType配合使用）
   * - matchType=1且phraseType=1: 精确匹配
   * - matchType=2且phraseType=1: 短语匹配
   * - matchType=2且phraseType=3: 智能匹配
   */
  matchType: number;
  /**
   * 细分匹配模式（与matchType配合使用）
   * - matchType=1且phraseType=1: 精确匹配
   * - matchType=2且phraseType=1: 短语匹配
   * - matchType=2且phraseType=3: 智能匹配
   */
  phraseType: number;
  /** 关键词竞价价格，取值范围：(0, 999.99] */
  price?: number;
  /** 计算机访问网址，最大1024字节 */
  pcDestinationUrl?: string;
  /** 移动访问网址，最大1024字节 */
  mobileDestinationUrl?: string;
  /**
   * 是否低效关键词
   * - 0: 非低效词
   * - 1: 低效词
   */
  apiInefficient?: number;
  /** 关键词物料标签数组，取值范围：[0, 31] */
  tabs?: number[];
  /** 应用调起网址，长度限制：[0, 2048] */
  deeplink?: string;
  /** iOS应用调起，长度限制4096字符 */
  ulink?: string;
  /** 小程序访问网址，不超过1024字节 */
  miniProgramUrl?: string;
  /** 计算机最终访问网址 */
  pcFinalUrl?: string;
  /** 计算机监控后缀 */
  pcTrackParam?: string;
  /** 计算机第三方追踪模板 */
  pcTrackTemplate?: string;
  /** 移动最终访问网址 */
  mobileFinalUrl?: string;
  /** 移动监控后缀 */
  mobileTrackParam?: string;
  /** 移动第三方追踪模板 */
  mobileTrackTemplate?: string;
  /** 推广下线主要原因ID */
  mainReason?: string;
  /** 推广下线具体原因 */
  detailReason?: string;
}

export interface AddWordParams {
  /** 新增关键词对象数组，集合长度限制：[1, 10000] */
  keywordTypes: AddWordType[];
}

/**
 * 新增关键词及商品目录模板词（可批量）。
 */
export function addWord(
  client: BaiduClient,
  params: AddWordParams,
) {
  return client.call<
    AddWordParams,
    { data: Partial<KeywordInfo>[] }
  >("KeywordService", "addWord", params);
}
