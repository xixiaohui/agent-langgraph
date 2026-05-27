import type { BaiduClient } from "../client.js";

// ── Shared Types ──────────────────────────────────────

export interface ScheduleType {
  /** 以小时为单位，取值范围：[0,23] */
  startHour: number;
  /** 以小时为单位，取值范围：[1,24] */
  endHour: number;
  /** 1-星期一, 2-星期二, 3-星期三, 4-星期四, 5-星期五, 6-星期六, 7-星期日 */
  weekDay: number;
}

export interface OfflineTimeType {
  time: string;
  /** 1 - 上线, 0 - 下线 */
  flag: number;
}

export interface RegionPriceFactor {
  regionId: number;
  /** 出价系数，updateCampaign 取值范围 [0.1, 1.0]，addCampaign 取值范围 [0.1, 10.0] */
  priceFactor: number;
}

export interface SchedulePriceFactor {
  /**
   * 时间段编号，3位整数，第一位表示星期(1-7)，第二三位表示小时(00-23)。
   * 例如：100 表示周一 00:00-01:00，622 表示周六 22:00-23:00。
   */
  timeId: number;
  /** 出价系数，取值范围：[0.1, 10.0] */
  priceFactor: number;
}

export interface StorePageInfoType {
  /** 门店id */
  storeId: number;
  /** 落地页id */
  pageId: number;
  /** 落地页url，只读 */
  url: string;
  /** 0-梧桐, 1-h5+小程序, 2-医美, 3-旺铺 */
  pageType: number;
  /** 监控代码 */
  monitorCode: string;
}

// ── getCampaign (查询计划) ──────────────────────────────

export type CampaignField =
  | "campaignId"
  | "campaignName"
  | "budget"
  | "budgetOfflineTime"
  | "exactNegativeWords"
  | "regionTarget"
  | "negativeWords"
  | "pause"
  | "schedule"
  | "status"
  | "marketingTargetId"
  | "adType"
  | "businessPointId"
  | "businessPointName"
  | "smartRegion"
  | "paDevice"
  | "os"
  | "regionPriceFactor"
  | "schedulePriceFactors"
  | "shopType"
  | "equipmentType"
  | "campaignBidType"
  | "campaignBid"
  | "campaignOcpcBidType"
  | "campaignOcpcBid"
  | "campaignCvSources"
  | "campaignTransTypes"
  | "campaignDeepTransTypes"
  | "storePageInfos"
  | "transAsset"
  | "transAssetId"
  | "geoLocationStatus"
  | "createTime";

export interface GetCampaignParams {
  campaignFields: CampaignField[];
  campaignIds?: number[];
  /** 0 - 普通计划, 14 - 商品计划；不传默认返回全部 */
  adType?: number;
}

export interface CampaignInfo {
  campaignId: number;
  campaignName: string;
  budget: number;
  regionTarget: number[];
  negativeWords: string[];
  exactNegativeWords: string[];
  schedule: ScheduleType[];
  budgetOfflineTime: OfflineTimeType[];
  pause: boolean;
  status: number;
  /** 0 - 普通计划, 14 - 商品计划 */
  adType: number;
  businessPointId: number;
  businessPointName: string;
  smartRegion: boolean;
  paDevice: number;
  os: string[];
  regionPriceFactor: RegionPriceFactor[];
  schedulePriceFactors: SchedulePriceFactor[];
  marketingTargetId: number;
  shopType: number;
  /** 1-计算机, 2-移动, 3-不限 */
  equipmentType: number;
  /** 0 - 点击, 1 - 转化 */
  campaignBidType: number;
  campaignBid: number;
  /**
   * 0 - cpc, 1 - 目标转化成本, 2 - 增强模式, 3 - 放量模式。
   * campaignBidType=0 时仅支持 0,2；campaignBidType=1 时仅支持 1,3。
   */
  campaignOcpcBidType: number;
  campaignOcpcBid: number;
  campaignTransTypes: number[];
  campaignDeepTransTypes: number[];
  campaignCvSources: number[];
  storePageInfos: StorePageInfoType[];
  transAsset: number;
  transAssetId: number;
  /** 0 - 该地区内或搜索意图在该地区的所有用户, 1 - 该地区内的所有用户 */
  geoLocationStatus: number;
}

/**
 * 根据指定的计划ID获取推广计划（ID可批量，最多100个）。
 * 传入空的 campaignIds 则返回整个账户的计划。
 */
export function getCampaign(
  client: BaiduClient,
  params: GetCampaignParams,
) {
  return client.call<GetCampaignParams, { data: Partial<CampaignInfo>[] }>(
    "CampaignService",
    "getCampaign",
    params,
  );
}

// ── deleteCampaign (删除计划) ───────────────────────────

export interface DeleteCampaignParams {
  /** 计划ID集合，长度限制：[1, 100] */
  campaignIds: number[];
}

/**
 * 删除指定的计划（可批量，最多100个）。
 */
export function deleteCampaign(
  client: BaiduClient,
  params: DeleteCampaignParams,
) {
  return client.call<DeleteCampaignParams, { data: Record<string, never>[] }>(
    "CampaignService",
    "deleteCampaign",
    params,
  );
}

// ── updateCampaign (更新计划) ───────────────────────────

export interface UpdateCampaignItem {
  /** 计划ID（必填） */
  campaignId: number;
  /** 计划名称，最大30个字节（1中文=2字节） */
  campaignName?: string;
  /** 计划每日预算，取值范围：[50, Min(10000000, 账户预算)]，null表示不限定预算 */
  budget?: number;
  /** 计划推广地域，null表示使用账户推广地域 */
  regionTarget?: number[];
  /** 短语否定关键词列表，空数组[]表示不设置 */
  negativeWords?: string[];
  /** 精确否定关键词列表，空数组[]表示不设置 */
  exactNegativeWords?: string[];
  /** 计划推广暂停时段 */
  schedule?: ScheduleType[];
  /** true-暂停, false-启用 */
  pause?: boolean;
  /** 推广业务ID */
  businessPointId?: number;
  /** 分地域出价系数 */
  regionPriceFactor?: RegionPriceFactor[];
  /** 分时段出价系数 */
  schedulePriceFactors?: SchedulePriceFactor[];
  /**
   * 电商店铺类型：1-度小店, 3-第三方店铺, 31-淘宝/天猫, 32-京东, 33-拼多多, 34-苏宁。
   * 营销目标为"电商店铺推广"时必填。
   */
  shopType?: number;
  /**
   * 推广设备：1-计算机, 2-移动, 3-不限。
   * marketingTargetId=0 可取 1,2,3；marketingTargetId=1 可取 2,3；marketingTargetId=2 可取 2,3。
   */
  equipmentType?: number;
  /** 计划点击出价，单位：元/点击，取值范围：[0.01, 999.99] */
  campaignBid?: number;
  /**
   * 计划出价模式：0-cpc, 1-目标转化成本, 2-增强模式, 3-放量模式。
   * campaignBidType=0 时仅支持 0,2；campaignBidType=1 时仅支持 1,3。
   */
  campaignOcpcBidType?: number;
  /** 转化计划出价，单位：元/转化，取值范围：[0.1, 9999]。campaignOcpcBidType=1 时必填。 */
  campaignOcpcBid?: number;
  /**
   * 计划目标转化，枚举值：1-咨询按钮点击, 2-电话按钮点击, 3-表单提交成功, 4-APP激活,
   * 5-表单按钮点击, 6-下载/预约按钮点击, 7-购买按钮点击, 9-电商订单, 10-服务购买成功,
   * 12-预约按钮点击, 13-表单有效请求, 14-订单提交成功, 15-加入购物车按钮点击,
   * 16-表单调起按钮点击, 17-三句话咨询, 18-留线索, 19-一句话咨询, 20-关键页面浏览,
   * 25-APP注册, 26-APP付费, 27-客户自定义, 28-次日留存, 30-电话拨通 等。
   */
  campaignTransTypes?: number[];
  /**
   * 计划深度转化，枚举值：9-电商订单, 10-服务购买成功, 14-订单提交成功, 18-留线索,
   * 25-APP注册, 26-APP付费, 28-次日留存, 30-电话拨通, 42-授信, 49-登录, 50-预约,
   * 52-深度使用, 56-到店, 72-聊到相关业务, 73-回访-电话接通, 74-回访-信息确认,
   * 75-回访-发现意向, 76-回访-高潜成交, 77-回访-成单客户, 79-微信加粉成功, 89-放款 等。
   */
  campaignDeepTransTypes?: number[];
  /**
   * 数据来源：1000-不限, 1-网页JS布码, 2-线索API, 3-咨询工具授权, 4-基木鱼/度小店,
   * 5-应用API, 6-电话数据授权, 7-百度智能小程序SDK, 8-应用SDK, 9-爱番番, 10-百度APP,
   * 23-百度统计网站导入, 24-百度统计小程序导入。
   */
  campaignCvSources?: number[];
  /** 本地计划设置的门店落地页信息，营销目标为本地推广时必填且不能为空 */
  storePageInfos?: StorePageInfoType[];
  /**
   * 转化资产类型：0-不限, 2-指定资产。
   */
  transAsset?: number;
  /**
   * 推广地域地理位置选项：0-该地区内或搜索意图在该地区的所有用户,
   * 1-该地区内的所有用户。
   */
  geoLocationStatus?: number;
}

export interface UpdateCampaignParams {
  /** 更新推广计划物料，长度限制：[1, 100] */
  campaignTypes: UpdateCampaignItem[];
}

/**
 * 根据指定的计划ID更新推广计划的属性（可批量，最多100个）。
 */
export function updateCampaign(
  client: BaiduClient,
  params: UpdateCampaignParams,
) {
  return client.call<UpdateCampaignParams, { data: Partial<CampaignInfo>[] }>(
    "CampaignService",
    "updateCampaign",
    params,
  );
}

// ── addCampaign (添加计划) ──────────────────────────────

export interface AddCampaignItem {
  /** 计划名称（必填），最大30个字节（1中文=2字节） */
  campaignName: string;
  /** 计划每日预算，取值范围：[50, Min(10000000, 账户预算)]，null表示不限定预算 */
  budget?: number;
  /**
   * 计划出价方式：0-点击, 1-转化。默认值：0。该字段不支持修改。
   */
  campaignBidType?: number;
  /**
   * 营销目标类型（必填）：0-网站链接, 1-应用推广, 2-本地推广, 4-电商店铺推广, 5-商品目录。
   */
  marketingTargetId: number;
  /** 投放广告类型：0-普通计划, 14-商品计划。默认值：0 */
  adType?: number;
  /** 计划推广地域，null表示使用账户推广地域 */
  regionTarget?: number[];
  /** 短语否定关键词列表，空数组[]表示不设置 */
  negativeWords?: string[];
  /** 精确否定关键词列表，空数组[]表示不设置 */
  exactNegativeWords?: string[];
  /** 计划推广暂停时段 */
  schedule?: ScheduleType[];
  /** true-暂停, false-启用。默认值：false */
  pause?: boolean;
  /** 推广业务ID */
  businessPointId?: number;
  /** 商品计划：智能地域开关。默认值：false */
  smartRegion?: boolean;
  /**
   * 商品计划：计划的投放设备。0-全部, 1-移动, 2-计算机。默认值：0。
   * 商品目录新建计划 equipmentType 与 paDevice 需保持一致。
   */
  paDevice?: number;
  /** 商品计划：计划的投放设备平台。IPHONE-苹果手机, ANDROID-安卓手机, OTHERS-其他。默认全选。 */
  os?: string[];
  /** 分地域出价系数，默认为账户投放地域，出价系数为1 */
  regionPriceFactor?: RegionPriceFactor[];
  /** 分时段出价系数，默认为全时段投放，出价系数为1 */
  schedulePriceFactors?: SchedulePriceFactor[];
  /**
   * 电商店铺类型：1-度小店, 3-第三方店铺, 31-淘宝/天猫, 32-京东, 33-拼多多, 34-苏宁。
   * 营销目标为"电商店铺推广"时必填。
   */
  shopType?: number;
  /**
   * 推广设备：1-计算机, 2-移动, 3-不限。默认值：3。
   */
  equipmentType?: number;
  /** 计划点击出价，单位：元/点击，取值范围：[0.01, 999.99]。campaignBidType=0 时可选。 */
  campaignBid?: number;
  /**
   * 计划出价模式：0-cpc, 1-目标转化成本, 2-增强模式, 3-放量模式。
   * campaignBidType=0 时默认 0；campaignBidType=1 时默认 1；修改时 0 仅支持 0,2；1 仅支持 1,3。
   */
  campaignOcpcBidType?: number;
  /** 转化计划出价，单位：元/转化，取值范围：[0.1, 9999]。campaignOcpcBidType=1 时必填。 */
  campaignOcpcBid?: number;
  /**
   * 计划目标转化，枚举值：1-咨询按钮点击, 2-电话按钮点击, 3-表单提交成功, 4-APP激活,
   * 5-表单按钮点击, 6-下载/预约按钮点击, 7-购买按钮点击, 9-电商订单, 10-服务购买成功,
   * 12-预约按钮点击, 13-表单有效请求, 14-订单提交成功, 15-加入购物车按钮点击,
   * 16-表单调起按钮点击, 17-三句话咨询, 18-留线索, 19-一句话咨询, 20-关键页面浏览,
   * 25-APP注册, 26-APP付费, 27-客户自定义, 28-次日留存, 30-电话拨通 等。
   */
  campaignTransTypes?: number[];
  /**
   * 计划深度转化，枚举值：9-电商订单, 10-服务购买成功, 14-订单提交成功, 18-留线索,
   * 25-APP注册, 26-APP付费, 28-次日留存, 30-电话拨通, 42-授信, 49-登录, 50-预约,
   * 52-深度使用, 56-到店, 72-聊到相关业务, 73-回访-电话接通, 74-回访-信息确认,
   * 75-回访-发现意向, 76-回访-高潜成交, 77-回访-成单客户, 79-微信加粉成功, 89-放款 等。
   */
  campaignDeepTransTypes?: number[];
  /**
   * 数据来源：1000-不限, 1-网页JS布码, 2-线索API, 3-咨询工具授权, 4-基木鱼/度小店,
   * 5-应用API, 6-电话数据授权, 7-百度智能小程序SDK, 8-应用SDK, 9-爱番番, 10-百度APP,
   * 23-百度统计网站导入, 24-百度统计小程序导入。默认不限。
   */
  campaignCvSources?: number[];
  /** 本地计划设置的门店落地页信息，营销目标为本地推广时必填且不能为空 */
  storePageInfos?: StorePageInfoType[];
  /**
   * 转化资产类型：0-不限, 2-指定资产。
   */
  transAsset?: number;
  /**
   * 推广地域地理位置选项：0-该地区内或搜索意图在该地区的所有用户,
   * 1-该地区内的所有用户。
   */
  geoLocationStatus?: number;
}

export interface AddCampaignParams {
  /** 新增推广计划物料，长度限制：[1, 100] */
  campaignTypes: AddCampaignItem[];
}

/**
 * 新增推广计划（可批量，最多100个），新增时可设置计划的属性设置。
 */
export function addCampaign(
  client: BaiduClient,
  params: AddCampaignParams,
) {
  return client.call<AddCampaignParams, { data: Partial<CampaignInfo>[] }>(
    "CampaignService",
    "addCampaign",
    params,
  );
}
