/**
 * Baidu Marketing API - Agent Tools
 *
 * Each tool wraps a Baidu API call so the AI agent can invoke it.
 * One tool per exported service function.
 */

import { tool } from "langchain";
import { z } from "zod";
import { BaiduClient } from "./client.js";

// ── Client factory ────────────────────────────────────

function getClient(): BaiduClient {
  const userName = process.env.BAIDU_USERNAME;
  const accessToken = process.env.BAIDU_ACCESS_TOKEN;
  if (!userName || !accessToken) {
    throw new Error(
      "Missing BAIDU_USERNAME or BAIDU_ACCESS_TOKEN environment variables",
    );
  }
  return new BaiduClient({
    baseUrl: "https://api.baidu.com",
    auth: { userName, accessToken },
  });
}

// ── AccountService tools ──────────────────────────────

const accountFieldSchema = z.enum([
  "userId",
  "balance",
  "pcBalance",
  "budget",
  "budgetType",
  "budgetOfflineTime",
  "cost",
  "excludeIp",
  "openDomains",
  "payment",
  "regDomain",
  "regionTarget",
  "userStat",
  "userLevel",
  "regionPriceFactor",
  "geoLocationStatus",
  "excludeQueryRegionStatus",
  "longMonitorSublink",
  "accountMonitorUrl",
  "cid",
  "liceName",
]);

export const baiduGetAccountInfo = tool(
  async ({ accountFields }) => {
    const client = getClient();
    const res = await client.call<
      { accountFields: string[] },
      { data: Array<Record<string, unknown>> }
    >("AccountService", "getAccountInfo", { accountFields });
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_account_info",
    description:
      "查询百度营销账户信息。可查询余额、预算、消耗、用户等级、推广地域等字段。" +
      "常用字段: userId(用户ID), balance(账户余额), budget(预算), cost(消耗), userStat(账户状态), userLevel(用户等级), payment(投资回报)。" +
      "不确定需要哪些字段时，可多选几个常用字段一并查询。",
    schema: z.object({
      accountFields: z
        .array(accountFieldSchema)
        .describe("需要查询的账户字段列表，例如 ['userId', 'balance', 'cost']"),
    }),
  },
);

export const baiduUpdateAccountInfo = tool(
  async ({ budget, regionTarget, excludeIp, budgetType, regionPriceFactor, geoLocationStatus, excludeQueryRegionStatus, longMonitorSublink, accountMonitorUrl }) => {
    const client = getClient();
    const accountInfo: Record<string, unknown> = {};
    if (budget !== undefined) accountInfo.budget = budget;
    if (regionTarget !== undefined) accountInfo.regionTarget = regionTarget;
    if (excludeIp !== undefined) accountInfo.excludeIp = excludeIp;
    if (budgetType !== undefined) accountInfo.budgetType = budgetType;
    if (regionPriceFactor !== undefined) accountInfo.regionPriceFactor = regionPriceFactor;
    if (geoLocationStatus !== undefined) accountInfo.geoLocationStatus = geoLocationStatus;
    if (excludeQueryRegionStatus !== undefined) accountInfo.excludeQueryRegionStatus = excludeQueryRegionStatus;
    if (longMonitorSublink !== undefined) accountInfo.longMonitorSublink = longMonitorSublink;
    if (accountMonitorUrl !== undefined) accountInfo.accountMonitorUrl = accountMonitorUrl;
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AccountService", "updateAccountInfo", { accountInfo },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_account_info",
    description: "更新百度营销账户信息。可修改预算、推广地域、IP排除、分地域出价系数、地理位置选项等。",
    schema: z.object({
      budget: z.number().optional().describe("账户预算，日预算取值范围：[50, 10000000]"),
      regionTarget: z.array(z.number()).optional().describe("推广地域列表"),
      excludeIp: z.array(z.string()).optional().describe("IP排除列表，支持IPv4和IPv6"),
      budgetType: z.number().optional().describe("0-不设置预算, 1-日预算"),
      regionPriceFactor: z.array(z.object({
        regionId: z.number().describe("地域ID"),
        priceFactor: z.number().describe("出价系数，范围[0.1, 10.0]"),
      })).optional().describe("分地域出价系数"),
      geoLocationStatus: z.number().optional().describe("0-该地区内或搜索意图在该地区的所有用户, 1-该地区内的所有用户"),
      excludeQueryRegionStatus: z.boolean().optional().describe("true-启用, false-关闭排除查询地域"),
      longMonitorSublink: z.string().optional().describe("创意组件-文字链监控代码"),
      accountMonitorUrl: z.string().optional().describe("通用点击监测地址，长度限制1024"),
    }),
  },
);

// ── CampaignService tools ─────────────────────────────

const campaignFieldSchema = z.enum([
  "campaignId",
  "campaignName",
  "budget",
  "budgetOfflineTime",
  "exactNegativeWords",
  "regionTarget",
  "negativeWords",
  "pause",
  "schedule",
  "status",
  "marketingTargetId",
  "adType",
  "businessPointId",
  "businessPointName",
  "smartRegion",
  "paDevice",
  "os",
  "regionPriceFactor",
  "schedulePriceFactors",
  "shopType",
  "equipmentType",
  "campaignBidType",
  "campaignBid",
  "campaignOcpcBidType",
  "campaignOcpcBid",
  "campaignCvSources",
  "campaignTransTypes",
  "campaignDeepTransTypes",
  "storePageInfos",
  "transAsset",
  "transAssetId",
  "geoLocationStatus",
  "createTime",
]);

export const baiduGetCampaign = tool(
  async ({ campaignFields, campaignIds, adType }) => {
    const client = getClient();
    const res = await client.call<
      {
        campaignFields: string[];
        campaignIds?: number[];
        adType?: number;
      },
      { data: Array<Record<string, unknown>> }
    >("CampaignService", "getCampaign", {
      campaignFields,
      campaignIds,
      adType,
    });
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_campaign",
    description:
      "查询百度营销推广计划。根据计划ID获取推广计划详情（可批量，最多100个）。" +
      "常用字段: campaignId(计划ID), campaignName(计划名称), budget(每日预算), status(计划状态), pause(暂停状态), adType(计划类型)。" +
      "不传campaignIds则返回账户下全部计划。",
    schema: z.object({
      campaignFields: z
        .array(campaignFieldSchema)
        .describe("需要查询的计划字段列表，例如 ['campaignId', 'campaignName', 'budget', 'status']"),
      campaignIds: z
        .array(z.number())
        .max(100)
        .optional()
        .describe("推广计划ID列表，最多100个。不传则返回全部计划"),
      adType: z
        .number()
        .optional()
        .describe("投放广告类型: 0-普通计划, 14-商品计划。不传默认返回全部"),
    }),
  },
);

export const baiduDeleteCampaign = tool(
  async ({ campaignIds }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CampaignService", "deleteCampaign", { campaignIds },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_campaign",
    description: "删除指定的推广计划（可批量，最多100个）。",
    schema: z.object({
      campaignIds: z.array(z.number()).min(1).max(100).describe("计划ID集合，长度限制：[1, 100]"),
    }),
  },
);

export const baiduUpdateCampaign = tool(
  async ({ campaignTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CampaignService", "updateCampaign", { campaignTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_campaign",
    description: "根据指定的计划ID更新推广计划的属性（可批量，最多100个）。",
    schema: z.object({
      campaignTypes: z.array(z.object({
        campaignId: z.number().describe("计划ID（必填）"),
        campaignName: z.string().optional().describe("计划名称，最大30个字节"),
        budget: z.number().optional().describe("计划每日预算，取值范围：[50, 10000000]"),
        regionTarget: z.array(z.number()).optional().describe("计划推广地域"),
        negativeWords: z.array(z.string()).optional().describe("短语否定关键词列表"),
        exactNegativeWords: z.array(z.string()).optional().describe("精确否定关键词列表"),
        pause: z.boolean().optional().describe("true-暂停, false-启用"),
        businessPointId: z.number().optional().describe("推广业务ID"),
        regionPriceFactor: z.array(z.object({
          regionId: z.number().describe("地域ID"),
          priceFactor: z.number().describe("出价系数"),
        })).optional().describe("分地域出价系数"),
        schedulePriceFactors: z.array(z.object({
          timeId: z.number().describe("时间段编号"),
          priceFactor: z.number().describe("出价系数"),
        })).optional().describe("分时段出价系数"),
        shopType: z.number().optional().describe("电商店铺类型"),
        equipmentType: z.number().optional().describe("推广设备: 1-计算机, 2-移动, 3-不限"),
        campaignBid: z.number().optional().describe("计划点击出价"),
        campaignOcpcBidType: z.number().optional().describe("计划出价模式: 0-cpc, 1-目标转化成本, 2-增强模式, 3-放量模式"),
        campaignOcpcBid: z.number().optional().describe("转化计划出价"),
        campaignTransTypes: z.array(z.number()).optional().describe("计划目标转化"),
        campaignDeepTransTypes: z.array(z.number()).optional().describe("计划深度转化"),
        campaignCvSources: z.array(z.number()).optional().describe("数据来源"),
        storePageInfos: z.array(z.record(z.string(), z.unknown())).optional().describe("门店落地页信息"),
        transAsset: z.number().optional().describe("转化资产类型: 0-不限, 2-指定资产"),
        geoLocationStatus: z.number().optional().describe("推广地域地理位置选项"),
      })).min(1).max(100).describe("更新推广计划物料列表"),
    }),
  },
);

export const baiduAddCampaign = tool(
  async ({ campaignTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CampaignService", "addCampaign", { campaignTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_campaign",
    description: "新增推广计划（可批量，最多100个），新增时可设置计划的属性。",
    schema: z.object({
      campaignTypes: z.array(z.object({
        campaignName: z.string().describe("计划名称（必填），最大30个字节"),
        marketingTargetId: z.number().describe("营销目标类型（必填）: 0-网站链接, 1-应用推广, 2-本地推广, 4-电商店铺推广, 5-商品目录"),
        budget: z.number().optional().describe("计划每日预算"),
        campaignBidType: z.number().optional().describe("计划出价方式: 0-点击, 1-转化。默认0"),
        adType: z.number().optional().describe("投放广告类型: 0-普通计划, 14-商品计划"),
        regionTarget: z.array(z.number()).optional().describe("计划推广地域"),
        negativeWords: z.array(z.string()).optional().describe("短语否定关键词列表"),
        exactNegativeWords: z.array(z.string()).optional().describe("精确否定关键词列表"),
        pause: z.boolean().optional().describe("true-暂停, false-启用"),
        businessPointId: z.number().optional().describe("推广业务ID"),
        smartRegion: z.boolean().optional().describe("商品计划-智能地域开关"),
        paDevice: z.number().optional().describe("商品计划-投放设备: 0-全部, 1-移动, 2-计算机"),
        os: z.array(z.string()).optional().describe("商品计划-设备平台: IPHONE, ANDROID, OTHERS"),
        regionPriceFactor: z.array(z.object({
          regionId: z.number().describe("地域ID"),
          priceFactor: z.number().describe("出价系数"),
        })).optional().describe("分地域出价系数"),
        schedulePriceFactors: z.array(z.object({
          timeId: z.number().describe("时间段编号"),
          priceFactor: z.number().describe("出价系数"),
        })).optional().describe("分时段出价系数"),
        shopType: z.number().optional().describe("电商店铺类型"),
        equipmentType: z.number().optional().describe("推广设备"),
        campaignBid: z.number().optional().describe("计划点击出价"),
        campaignOcpcBidType: z.number().optional().describe("计划出价模式"),
        campaignOcpcBid: z.number().optional().describe("转化计划出价"),
        campaignTransTypes: z.array(z.number()).optional().describe("计划目标转化"),
        campaignDeepTransTypes: z.array(z.number()).optional().describe("计划深度转化"),
        campaignCvSources: z.array(z.number()).optional().describe("数据来源"),
        storePageInfos: z.array(z.record(z.string(), z.unknown())).optional().describe("门店落地页信息"),
        transAsset: z.number().optional().describe("转化资产类型"),
        geoLocationStatus: z.number().optional().describe("推广地域地理位置选项"),
      })).min(1).max(100).describe("新增推广计划物料列表"),
    }),
  },
);

// ── BusinessPointService tools ────────────────────────

export const baiduGetBindBusinessPointList = tool(
  async ({ needPath }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "BusinessPointService", "getBindBusinessPointList", { needPath },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_bind_business_point_list",
    description: "查询计划已使用的推广业务。",
    schema: z.object({
      needPath: z.boolean().optional().describe("是否需要将完整路径填充到响应的paths字段"),
    }),
  },
);

// ── AdgroupService tools ──────────────────────────────

export const baiduDeleteAdgroup = tool(
  async ({ adgroupIds, adType }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AdgroupService", "deleteAdgroup", { adgroupIds, adType },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_adgroup",
    description: "删除推广单元（可批量，最多10000个）。",
    schema: z.object({
      adgroupIds: z.array(z.number()).min(1).max(10000).describe("单元ID集合"),
      adType: z.number().optional().describe("广告类型"),
    }),
  },
);

export const baiduUpdateAdgroup = tool(
  async ({ adgroupTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AdgroupService", "updateAdgroup", { adgroupTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_adgroup",
    description: "更新推广单元（可批量，最多5000个）。",
    schema: z.object({
      adgroupTypes: z.array(z.object({
        adgroupId: z.number().describe("推广单元ID"),
        adgroupName: z.string().optional().describe("单元名称，最大30个字节"),
        maxPrice: z.number().optional().describe("单元出价"),
        pause: z.boolean().optional().describe("true-暂停, false-启用"),
        appShopDirectStatus: z.number().optional().describe("应用商店直投: 0-关闭, 1-开启"),
        negativeWords: z.array(z.string()).optional().describe("单元短语否定关键词"),
        exactNegativeWords: z.array(z.string()).optional().describe("单元精确否定关键词"),
        segmentRecommendStatus: z.number().optional().describe("自动配图开关: 0-开启, 1-关闭"),
        creativeTextOptimizationStatus: z.boolean().optional().describe("自动文案优化"),
        productSetId: z.number().optional().describe("虚拟商品组ID"),
        paPrice: z.number().optional().describe("推广单元商品出价"),
        monitorUrl: z.string().optional().describe("单元层级监控URL"),
        pcFinalUrl: z.string().optional().describe("计算机最终访问网址"),
        pcTrackParam: z.string().optional().describe("计算机监控后缀"),
        pcTrackTemplate: z.string().optional().describe("计算机第三方追踪模板"),
        mobileFinalUrl: z.string().optional().describe("移动最终访问网址"),
        mobileTrackParam: z.string().optional().describe("移动监控后缀"),
        mobileTrackTemplate: z.string().optional().describe("移动第三方追踪模板"),
        adgroupAutoTargetingStatus: z.boolean().optional().describe("自动定向: true-开启, false-关闭"),
      })).min(1).max(5000).describe("更新推广单元字段列表"),
    }),
  },
);

const adgroupFieldSchema = z.enum([
  "adgroupId",
  "campaignId",
  "adgroupName",
  "maxPrice",
  "pause",
  "negativeWords",
  "exactNegativeWords",
  "status",
  "appShopDirectStatus",
  "adType",
  "segmentRecommendStatus",
  "creativeTextOptimizationStatus",
  "productSetId",
  "paPrice",
  "monitorUrl",
  "pcFinalUrl",
  "pcTrackParam",
  "pcTrackTemplate",
  "mobileFinalUrl",
  "mobileTrackParam",
  "mobileTrackTemplate",
  "adgroupAutoTargetingStatus",
]);

export const baiduGetAdgroup = tool(
  async ({ adgroupFields, ids, idType, getTemp }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AdgroupService", "getAdgroup", { adgroupFields, ids, idType, getTemp },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_adgroup",
    description: "查询推广单元。根据指定的计划ID或单元ID获取推广单元信息。",
    schema: z.object({
      adgroupFields: z.array(adgroupFieldSchema).describe("需要查询的单元字段列表"),
      ids: z.array(z.number()).optional().describe("查询ID集合。idType=5时类型为单元ID(最多5000个), idType=3时类型为计划ID(最多100个)"),
      idType: z.number().optional().describe("查询层级: 3-计划ID, 5-单元ID"),
      getTemp: z.number().optional().describe("是否查询单元影子: 0-只查询单元本身, 1-只查询单元影子"),
    }),
  },
);

export const baiduAddAdgroup = tool(
  async ({ adgroupTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AdgroupService", "addAdgroup", { adgroupTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_adgroup",
    description: "新增推广单元（可批量，最多5000个）。",
    schema: z.object({
      adgroupTypes: z.array(z.object({
        campaignId: z.number().describe("推广计划ID（必填）"),
        adgroupName: z.string().describe("单元名称（必填），最大30个字节"),
        maxPrice: z.number().describe("单元出价（必填）"),
        pause: z.boolean().optional().describe("true-暂停, false-启用"),
        negativeWords: z.array(z.string()).optional().describe("单元短语否定关键词"),
        exactNegativeWords: z.array(z.string()).optional().describe("单元精确否定关键词"),
        adType: z.number().optional().describe("广告类型: 0-普通单元, 14-商品单元"),
        appShopDirectStatus: z.number().optional().describe("应用商店直投"),
        segmentRecommendStatus: z.number().optional().describe("自动配图开关"),
        creativeTextOptimizationStatus: z.boolean().optional().describe("自动文案优化"),
        productSetId: z.number().optional().describe("虚拟商品组ID"),
        paPrice: z.number().optional().describe("推广单元商品出价"),
        adgroupAutoTargetingStatus: z.boolean().optional().describe("自动定向"),
        monitorUrl: z.string().optional().describe("单元层级监控URL"),
        pcFinalUrl: z.string().optional().describe("计算机最终访问网址"),
        pcTrackParam: z.string().optional().describe("计算机监控后缀"),
        pcTrackTemplate: z.string().optional().describe("计算机第三方追踪模板"),
        mobileFinalUrl: z.string().optional().describe("移动最终访问网址"),
        mobileTrackParam: z.string().optional().describe("移动监控后缀"),
        mobileTrackTemplate: z.string().optional().describe("移动第三方追踪模板"),
      })).min(1).max(5000).describe("新增推广单元物料列表"),
    }),
  },
);

// ── KeywordService tools ──────────────────────────────

export const baiduDeleteWord = tool(
  async ({ keywordIds }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "KeywordService", "deleteWord", { keywordIds },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_word",
    description: "删除指定的关键词及商品目录模板词（可批量，最多10000个）。",
    schema: z.object({
      keywordIds: z.array(z.number()).min(1).max(10000).describe("关键词ID集合"),
    }),
  },
);

export const baiduUpdateWord = tool(
  async ({ keywordTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "KeywordService", "updateWord", { keywordTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_word",
    description: "更新关键词及商品目录模板词（可批量，最多10000个）。",
    schema: z.object({
      keywordTypes: z.array(z.object({
        keywordId: z.number().describe("关键词ID"),
        keyword: z.string().optional().describe("关键词字面，最大40字节"),
        price: z.number().optional().describe("关键词竞价价格"),
        matchType: z.number().optional().describe("匹配模式"),
        apiInefficient: z.number().optional().describe("是否低效关键词: 0-非低效, 1-低效"),
        pause: z.boolean().optional().describe("true-暂停, false-启用"),
        pcDestinationUrl: z.string().optional().describe("计算机访问网址"),
        mobileDestinationUrl: z.string().optional().describe("移动访问网址"),
        phraseType: z.number().optional().describe("细分匹配模式"),
        tabs: z.array(z.number()).optional().describe("关键词物料标签"),
        deeplink: z.string().optional().describe("应用调起网址"),
        ulink: z.string().optional().describe("iOS应用调起"),
        miniProgramUrl: z.string().optional().describe("小程序访问网址"),
        pcFinalUrl: z.string().optional().describe("计算机最终访问网址"),
        pcTrackParam: z.string().optional().describe("计算机监控后缀"),
        pcTrackTemplate: z.string().optional().describe("计算机第三方追踪模板"),
        mobileFinalUrl: z.string().optional().describe("移动最终访问网址"),
        mobileTrackParam: z.string().optional().describe("移动监控后缀"),
        mobileTrackTemplate: z.string().optional().describe("移动第三方追踪模板"),
        mainReason: z.string().optional().describe("推广下线主要原因ID"),
        detailReason: z.string().optional().describe("推广下线具体原因"),
      })).min(1).max(10000).describe("更新关键词对象数组"),
    }),
  },
);

const wordFieldSchema = z.enum([
  "keywordId",
  "campaignId",
  "adgroupId",
  "keyword",
  "price",
  "pause",
  "matchType",
  "phraseType",
  "status",
  "apiInefficient",
  "pcDestinationUrl",
  "mobileDestinationUrl",
  "tabs",
  "leftPriceGuide",
  "mPriceGuide",
  "deeplink",
  "ulink",
  "miniProgramUrl",
  "quality",
  "estimatedClickRate",
  "businessRelationship",
  "landPageExperience",
  "createTime",
  "offlineReasons",
  "pcFinalUrl",
  "pcTrackParam",
  "pcTrackTemplate",
  "mobileFinalUrl",
  "mobileTrackParam",
  "mobileTrackTemplate",
  "mainReason",
  "detailReason",
]);

export const baiduGetWord = tool(
  async ({ wordFields, ids, idType, getTemp }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "KeywordService", "getWord", { wordFields, ids, idType, getTemp },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_word",
    description: "根据指定的单元ID或关键词ID获取关键词信息。",
    schema: z.object({
      wordFields: z.array(wordFieldSchema).describe("需要返回的关键词属性字段列表"),
      ids: z.array(z.number()).optional().describe("查询ID集合。idType=5时类型为单元ID(最多50个), idType=11时类型为关键词ID(最多10000个)"),
      idType: z.number().optional().describe("查询层级: 5-单元ID, 11-关键词ID"),
      getTemp: z.number().optional().describe("是否查询关键词影子: 0-只查关键词本身, 1-只查关键词影子"),
    }),
  },
);

export const baiduAddWord = tool(
  async ({ keywordTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "KeywordService", "addWord", { keywordTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_word",
    description: "新增关键词及商品目录模板词（可批量，最多10000个）。",
    schema: z.object({
      keywordTypes: z.array(z.object({
        adgroupId: z.number().describe("推广单元ID（必填）"),
        keyword: z.string().describe("关键词字面（必填），最大40字节"),
        matchType: z.number().describe("匹配模式（必填）"),
        phraseType: z.number().describe("细分匹配模式（必填）"),
        price: z.number().optional().describe("关键词竞价价格"),
        pcDestinationUrl: z.string().optional().describe("计算机访问网址"),
        mobileDestinationUrl: z.string().optional().describe("移动访问网址"),
        apiInefficient: z.number().optional().describe("是否低效关键词"),
        tabs: z.array(z.number()).optional().describe("关键词物料标签"),
        deeplink: z.string().optional().describe("应用调起网址"),
        ulink: z.string().optional().describe("iOS应用调起"),
        miniProgramUrl: z.string().optional().describe("小程序访问网址"),
        pcFinalUrl: z.string().optional().describe("计算机最终访问网址"),
        pcTrackParam: z.string().optional().describe("计算机监控后缀"),
        pcTrackTemplate: z.string().optional().describe("计算机第三方追踪模板"),
        mobileFinalUrl: z.string().optional().describe("移动最终访问网址"),
        mobileTrackParam: z.string().optional().describe("移动监控后缀"),
        mobileTrackTemplate: z.string().optional().describe("移动第三方追踪模板"),
        mainReason: z.string().optional().describe("推广下线主要原因ID"),
        detailReason: z.string().optional().describe("推广下线具体原因"),
      })).min(1).max(10000).describe("新增关键词对象数组"),
    }),
  },
);

// ── NegativeKeywordService tools ──────────────────────

export const baiduUpdateNegativeKeyword = tool(
  async ({ negativeKeywordTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "NegativeKeywordService", "updateNegativeKeyword", { negativeKeywordTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_negative_keyword",
    description: "修改否定关键词的匹配模式。",
    schema: z.object({
      negativeKeywordTypes: z.array(z.object({
        negativeKeywordId: z.number().describe("否定关键词ID（必填）"),
        negativeMatchType: z.number().describe("匹配模式（必填）: 0-短语匹配, 63-精确匹配"),
      })).min(1).max(5000).describe("待操作的否定关键词列表"),
    }),
  },
);

export const baiduDeleteNegativeKeyword = tool(
  async ({ negativeKeywordIds }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "NegativeKeywordService", "deleteNegativeKeyword", { negativeKeywordIds },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_negative_keyword",
    description: "删除计划/单元层级否定关键词、删除计划-否词包绑定。",
    schema: z.object({
      negativeKeywordIds: z.array(z.number()).min(1).max(5000).describe("需要删除的否词ID列表"),
    }),
  },
);

export const baiduGetNegativeKeyword = tool(
  async ({ negativeKeywordTypeFields, orderBy, fieldFilters, limit, desc }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "NegativeKeywordService", "getNegativeKeyword", { negativeKeywordTypeFields, orderBy, fieldFilters, limit, desc },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_negative_keyword",
    description: "查询否定关键词，支持按照账户、计划、单元、否定关键词层级查询。",
    schema: z.object({
      negativeKeywordTypeFields: z.array(z.enum([
        "negativeKeyword", "negativeKeywordId", "campaignId", "adgroupId",
        "campaignName", "adgroupName", "negativeMatchType", "negativeKeywordPacketId",
        "level", "addTime", "modTime",
      ])).describe("需要查询的字段列表"),
      orderBy: z.string().optional().describe("排序字段"),
      fieldFilters: z.array(z.object({
        field: z.string().describe("筛选字段"),
        op: z.string().describe("比较符号，如in"),
        values: z.array(z.string()).describe("筛选值"),
      })).optional().describe("过滤条件"),
      limit: z.array(z.number()).optional().describe("分页: [k]取前k条, [m,n]从m+1条开始取n条"),
      desc: z.boolean().optional().describe("正序/倒序，默认true(倒序)"),
    }),
  },
);

export const baiduAddNegativeKeyword = tool(
  async ({ negativeKeywordTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "NegativeKeywordService", "addNegativeKeyword", { negativeKeywordTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_negative_keyword",
    description: "添加计划/单元层级否定关键词、添加计划-否词包绑定。",
    schema: z.object({
      negativeKeywordTypes: z.array(z.object({
        negativeKeyword: z.string().optional().describe("否定关键词（添加计划/单元否词时必填）"),
        campaignId: z.number().optional().describe("计划ID"),
        adgroupId: z.number().optional().describe("单元ID"),
        negativeMatchType: z.number().optional().describe("匹配模式: 0-短语匹配, 63-精确匹配"),
        negativeKeywordPacketId: z.number().optional().describe("否词包ID（计划-否词包绑定时必填）"),
      })).min(1).max(5000).describe("待操作的否定关键词列表"),
    }),
  },
);

// ── NegativeKeywordPacketService tools ────────────────

export const baiduUpdateNegativeKeywordPacket = tool(
  async ({ updateNegativeKeywordPacketTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "NegativeKeywordPacketService", "updateNegativeKeywordPacket", { updateNegativeKeywordPacketTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_negative_keyword_packet",
    description: "更新否词包，支持添加/修改/删除包内否词。",
    schema: z.object({
      updateNegativeKeywordPacketTypes: z.array(z.object({
        negativeKeywordPacketId: z.number().describe("否词包ID（必填）"),
        negativeKeywordPacketName: z.string().optional().describe("否词包名称"),
        addNegativeKeywordTypes: z.array(z.object({
          negativeKeyword: z.string().describe("否定关键词（必填）"),
          negativeMatchType: z.number().describe("匹配模式: 0-短语, 63-精确"),
        })).optional().describe("新增的否词信息"),
        updateNegativeKeywordTypes: z.array(z.object({
          negativeKeywordId: z.number().describe("否定关键词ID（必填）"),
          negativeMatchType: z.number().describe("匹配模式（必填）"),
        })).optional().describe("修改的否词信息"),
        deleteNegativeKeywordIds: z.array(z.number()).optional().describe("删除的否词ID列表"),
      })).min(1).max(100).describe("待更新的否词包信息列表"),
    }),
  },
);

export const baiduDeleteNegativeKeywordPacket = tool(
  async ({ negativeKeywordPacketIds }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "NegativeKeywordPacketService", "deleteNegativeKeywordPacket", { negativeKeywordPacketIds },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_negative_keyword_packet",
    description: "删除否词包（可批量，最多100个）。",
    schema: z.object({
      negativeKeywordPacketIds: z.array(z.number()).min(1).max(100).describe("需要删除的否定关键词包ID列表"),
    }),
  },
);

export const baiduGetNegativeKeywordPacket = tool(
  async ({ negativeKeywordPacketIds, negativeKeywordPacketTypeFields, orderBy, fieldFilters, limit, desc }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "NegativeKeywordPacketService", "getNegativeKeywordPacket", {
        negativeKeywordPacketIds, negativeKeywordPacketTypeFields, orderBy, fieldFilters, limit, desc,
      },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_negative_keyword_packet",
    description: "查询否词包信息。",
    schema: z.object({
      negativeKeywordPacketIds: z.array(z.number()).optional().describe("否词包ID列表，最多100个"),
      negativeKeywordPacketTypeFields: z.array(z.enum([
        "negativeKeywordPacketId", "negativeKeywordPacketName", "totalNegativeKeywordCount",
        "normalNegativeKeywordCount", "exactNegativeKeywordCount", "negativeKeywords",
        "bindCampaignIds", "bindCampaignCount", "bindCampaignNames",
      ])).describe("需要查询的字段列表"),
      orderBy: z.string().optional().describe("排序字段"),
      fieldFilters: z.array(z.object({
        field: z.string().describe("筛选字段"),
        op: z.string().describe("比较符号"),
        values: z.array(z.string()).describe("筛选值"),
      })).optional().describe("过滤条件"),
      limit: z.array(z.number()).optional().describe("分页参数"),
      desc: z.boolean().optional().describe("正序/倒序"),
    }),
  },
);

export const baiduGetNegativeKeywordPacketCount = tool(
  async ({ items }) => {
    const client = getClient();
    const res = await client.call<any, { data: number[] }>(
      "NegativeKeywordPacketService", "getNegativeKeywordPacketCount", { items },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_negative_keyword_packet_count",
    description: "查询否词包数量。",
    schema: z.object({
      items: z.array(z.object({
        negativeKeywordPacketIds: z.number().optional().describe("否词包ID"),
        fieldFilters: z.array(z.object({
          field: z.string().describe("筛选字段"),
          op: z.string().describe("比较符号"),
          values: z.array(z.string()).describe("筛选值"),
        })).optional().describe("筛选条件"),
      })).min(1).max(1).describe("查询条件"),
    }),
  },
);

export const baiduAddNegativeKeywordPacket = tool(
  async ({ negativeKeywordPacketTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "NegativeKeywordPacketService", "addNegativeKeywordPacket", { negativeKeywordPacketTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_negative_keyword_packet",
    description: "添加否词包（可批量，最多100个）。",
    schema: z.object({
      negativeKeywordPacketTypes: z.array(z.object({
        negativeKeywordPacketName: z.string().describe("否词包名称（必填），最大30字节"),
        negativeKeywords: z.array(z.object({
          negativeKeyword: z.string().describe("否定关键词（必填）"),
          negativeMatchType: z.number().describe("匹配模式（必填）: 0-短语, 63-精确"),
        })).describe("否词包内的否词信息"),
      })).min(1).max(100).describe("待操作的否词包列表"),
    }),
  },
);

// ── AutoExpansionService tools ────────────────────────

export const baiduGetAutoExpansion = tool(
  async ({ autoExpansionTypeFields, ids, idType, autoExpansionId, autoExpansionName, adType, campaignId, adgroupId, businessStatus, pause, campaignName, adgroupName, orderBy }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AutoExpansionService", "getAutoExpansion", {
        autoExpansionTypeFields, ids, idType, autoExpansionId, autoExpansionName, adType,
        campaignId, adgroupId, businessStatus, pause, campaignName, adgroupName, orderBy,
      },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_auto_expansion",
    description: "获取自动扩量物料列表，支持按计划ID、自动扩量ID等条件查询。",
    schema: z.object({
      autoExpansionTypeFields: z.array(z.enum([
        "autoExpansionId", "autoExpansionName", "adType", "campaignId", "adgroupId",
        "price", "businessStatus", "pause", "campaignName", "adgroupName",
      ])).describe("需要查询的字段列表"),
      ids: z.array(z.number()).optional().describe("层级主键集合"),
      idType: z.number().optional().describe("查询层级: 2-账户, 3-计划, 17-自动扩量"),
      autoExpansionId: z.number().optional().describe("自动扩量ID"),
      autoExpansionName: z.string().optional().describe("自动扩量名称"),
      adType: z.number().optional().describe("计划类型: 0-普通, 14-商品"),
      campaignId: z.number().optional().describe("计划ID"),
      adgroupId: z.number().optional().describe("单元ID"),
      businessStatus: z.number().optional().describe("自动扩量状态: 0-有效, 1-暂停"),
      pause: z.boolean().optional().describe("true-暂停, false-启用"),
      campaignName: z.string().optional().describe("计划名称"),
      adgroupName: z.string().optional().describe("单元名称"),
      orderBy: z.string().optional().describe("排序字段"),
    }),
  },
);

// ── CrowdFunction tools ───────────────────────────────

export const baiduGetCrowdEstimate = tool(
  async ({ sex, age, inPeople, tableName, keys }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CrowdFunction", "getCrowdEstimate", { sex, age, inPeople, tableName, keys },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_crowd_estimate",
    description: "人群覆盖预估。根据性别、年龄、兴趣人群等条件预估人群覆盖情况。",
    schema: z.object({
      sex: z.number().optional().describe("性别: 0-不限, 1-男, 2-女"),
      age: z.array(z.number()).optional().describe("年龄: 0-不限, 1-18岁以下, 2-18~24, 4-25~34, 8-35~44, 16-44岁以上"),
      inPeople: z.array(z.number()).optional().describe("兴趣人群ID列表"),
      tableName: z.string().optional().describe("表名"),
      keys: z.array(z.string()).optional().describe("要查询的keys"),
    }),
  },
);

// ── CrowdService tools ────────────────────────────────

export const baiduDeleteCrowd = tool(
  async ({ crowdIds }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CrowdService", "deleteCrowd", { crowdIds },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_crowd",
    description: "删除人群（可批量，最多1000个）。",
    schema: z.object({
      crowdIds: z.array(z.number()).min(1).max(1000).describe("需要删除的人群ID列表"),
    }),
  },
);

export const baiduAddCrowd = tool(
  async ({ crowdTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CrowdService", "addCrowd", { crowdTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_crowd",
    description: "新增人群（可批量，最多1000个）。",
    schema: z.object({
      crowdTypes: z.array(z.object({
        crowdName: z.string().describe("人群名称"),
        age: z.array(z.number()).optional().describe("年龄范围"),
        sex: z.number().optional().describe("性别: 0-不限, 1-男, 2-女"),
        inPeople: z.array(z.number()).optional().describe("兴趣ID列表"),
        searchWord: z.array(z.string()).optional().describe("搜索历史关键词"),
        browseUrl: z.array(z.string()).optional().describe("浏览历史URL"),
        idPack: z.array(z.number()).optional().describe("ID包"),
        crowdDirectType: z.number().optional().describe("人群定向方式: 0-基本属性, 3-自定义人群, 4-APP定向, 10-已转化用户"),
        effectType: z.number().optional().describe("人群生效类型: 0-溢价, 1-排除, 2-限定"),
        recentDays: z.number().optional().describe("转化时间窗口: 1-1天, 7-1周, 30-1个月, 90-3个月, 180-6个月"),
        customAge: z.array(z.number()).optional().describe("自定义年龄[min, max]"),
        os: z.array(z.number()).optional().describe("操作系统: 0-不限, 1-iOS, 2-Android, 4-计算机"),
        appBehaviour: z.number().optional().describe("应用行为: 0-不限, 1-应用分类, 2-应用自定义"),
        appIds: z.array(z.string()).optional().describe("应用ID列表"),
        phoneBrands: z.array(z.number()).optional().describe("手机品牌编码"),
      })).min(1).max(1000).describe("需要新增的人群信息列表"),
    }),
  },
);

export const baiduUpdateCrowd = tool(
  async ({ crowdTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CrowdService", "updateCrowd", { crowdTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_crowd",
    description: "修改人群属性设置（可批量，最多1000个）。",
    schema: z.object({
      crowdTypes: z.array(z.object({
        crowdId: z.number().describe("人群ID（必填）"),
        crowdName: z.string().optional().describe("人群名称"),
        age: z.array(z.number()).optional().describe("年龄"),
        sex: z.number().optional().describe("性别"),
        inPeople: z.array(z.number()).optional().describe("兴趣ID"),
        searchWord: z.array(z.string()).optional().describe("搜索历史"),
        browseUrl: z.array(z.string()).optional().describe("浏览历史"),
        idPack: z.array(z.number()).optional().describe("ID包"),
        crowdDirectType: z.number().optional().describe("人群定向方式"),
        effectType: z.number().optional().describe("人群生效类型"),
        recentDays: z.number().optional().describe("转化时间窗口"),
        customAge: z.array(z.number()).optional().describe("自定义年龄"),
        os: z.array(z.number()).optional().describe("操作系统"),
        appBehaviour: z.number().optional().describe("应用行为"),
        appIds: z.array(z.string()).optional().describe("应用ID"),
        phoneBrands: z.array(z.number()).optional().describe("手机品牌"),
      })).min(1).max(1000).describe("需要修改的人群信息列表"),
    }),
  },
);

export const baiduGetCrowd = tool(
  async ({ crowdFields, crowdDirectType, limit, desc }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CrowdService", "getCrowd", { crowdFields, crowdDirectType, limit, desc },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_crowd",
    description: "查询人群信息（一次最多查询1000个人群）。",
    schema: z.object({
      crowdFields: z.array(z.enum([
        "crowdId", "crowdName", "age", "customAge", "sex", "inPeople",
        "idPack", "crowdDirectType", "effectType", "createTime", "conversionLevel", "recentDays",
      ])).describe("需要查询的人群字段列表"),
      crowdDirectType: z.array(z.number()).optional().describe("定向方式筛选: 0-基本属性, 3-自定义人群, 4-APP定向, 10-已转化用户"),
      limit: z.array(z.number()).optional().describe("分页: [offset, limit] 或 [limit]"),
      desc: z.boolean().optional().describe("true-倒序, false-正序"),
    }),
  },
);

// ── CrowdBindService tools ────────────────────────────

export const baiduDeleteBind = tool(
  async ({ bindIds }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CrowdBindService", "deleteBind", { bindIds },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_bind",
    description: "删除人群绑定（可批量，最多10000条）。",
    schema: z.object({
      bindIds: z.array(z.number()).min(1).max(10000).describe("绑定ID集合"),
    }),
  },
);

export const baiduAddBind = tool(
  async ({ crowdBindTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CrowdBindService", "addBind", { crowdBindTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_bind",
    description: "新增人群绑定（可批量，最多10000条）。",
    schema: z.object({
      crowdBindTypes: z.array(z.object({
        targetType: z.number().optional().describe("绑定目标层级: 1-计划"),
        targetId: z.number().optional().describe("绑定目标ID"),
        crowdPriceRatio: z.number().optional().describe("人群绑定出价系数，范围[1.0, 10.0]"),
        crowdId: z.number().optional().describe("人群ID"),
      })).describe("新增绑定数据"),
    }),
  },
);

export const baiduUpdateBind = tool(
  async ({ crowdBindTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CrowdBindService", "updateBind", { crowdBindTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_bind",
    description: "修改人群绑定（可批量，最多10000条）。",
    schema: z.object({
      crowdBindTypes: z.array(z.object({
        bindId: z.number().optional().describe("绑定ID"),
        targetType: z.number().optional().describe("绑定目标层级"),
        targetId: z.number().optional().describe("绑定目标ID"),
        crowdPriceRatio: z.number().optional().describe("人群绑定出价系数"),
        crowdId: z.number().optional().describe("人群ID"),
      })).describe("修改绑定数据"),
    }),
  },
);

export const baiduGetBind = tool(
  async ({ crowdBindFields, targetType, ids, idType }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CrowdBindService", "getBind", { crowdBindFields, targetType, ids, idType },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_bind",
    description: "获取人群绑定列表，一次最多查询10000条绑定。",
    schema: z.object({
      crowdBindFields: z.array(z.enum([
        "bindId", "targetType", "targetId", "crowdPriceRatio", "campaignId", "crowdId",
      ])).describe("需要查询的字段列表"),
      targetType: z.number().optional().describe("绑定层级: 1-计划"),
      ids: z.array(z.number()).describe("层级主键集合"),
      idType: z.number().describe("查询层级: 3-计划, 29-绑定, 30-人群ID"),
    }),
  },
);

// ── CrowdAppInfoService tools ─────────────────────────

export const baiduGetAppInfo = tool(
  async ({ appIds, appNameLike, fields, limit, orderBy, desc }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CrowdAppInfoService", "getAppInfo", { appIds, appNameLike, fields, limit, orderBy, desc },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_app_info",
    description: "查询APP信息，支持按应用ID或名称模糊查询。",
    schema: z.object({
      appIds: z.array(z.string()).optional().describe("应用ID列表"),
      appNameLike: z.string().optional().describe("模糊查询的应用名称"),
      fields: z.array(z.enum(["id", "name"])).optional().describe("返回字段"),
      limit: z.array(z.number()).optional().describe("分页: [偏移量, 分页大小]，最大10000"),
      orderBy: z.string().optional().describe("排序字段: id或name"),
      desc: z.boolean().optional().describe("true-倒序, false-正序"),
    }),
  },
);

// ── CreativeService tools ─────────────────────────────

export const baiduDeleteCreative = tool(
  async ({ creativeIds }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CreativeService", "deleteCreative", { creativeIds },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_creative",
    description: "删除推广创意（可批量，最多3000个）。",
    schema: z.object({
      creativeIds: z.array(z.number()).min(1).max(3000).describe("创意ID集合"),
    }),
  },
);

export const baiduAddCreative = tool(
  async ({ creativeTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CreativeService", "addCreative", { creativeTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_creative",
    description: "新增推广创意（可批量，最多3000个）。",
    schema: z.object({
      creativeTypes: z.array(z.object({
        campaignId: z.number().describe("计划ID（必填）"),
        adgroupId: z.number().describe("推广单元ID（必填）"),
        title: z.string().optional().describe("创意标题"),
        description1: z.string().optional().describe("创意描述第一行"),
        description2: z.string().optional().describe("创意描述第二行"),
        pause: z.boolean().optional().describe("true-暂停, false-启用"),
        mobileDestinationUrl: z.string().optional().describe("移动访问网址"),
        mobileDisplayUrl: z.string().optional().describe("移动显示网址"),
        pcDestinationUrl: z.string().optional().describe("计算机访问网址"),
        pcDisplayUrl: z.string().optional().describe("计算机显示网址"),
        tabs: z.array(z.number()).optional().describe("标签"),
        deeplink: z.string().optional().describe("应用调起网址"),
        ulink: z.string().optional().describe("iOS应用调起"),
        miniProgramUrl: z.string().optional().describe("小程序访问网址"),
        pcFinalUrl: z.string().optional().describe("计算机最终访问网址"),
        pcTrackParam: z.string().optional().describe("计算机监控后缀"),
        pcTrackTemplate: z.string().optional().describe("计算机第三方追踪模板"),
        mobileFinalUrl: z.string().optional().describe("移动最终访问网址"),
        mobileTrackParam: z.string().optional().describe("移动监控后缀"),
        mobileTrackTemplate: z.string().optional().describe("移动第三方追踪模板"),
      })).min(1).max(3000).describe("新增推广创意物料列表"),
    }),
  },
);

export const baiduUpdateCreative = tool(
  async ({ creativeTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CreativeService", "updateCreative", { creativeTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_creative",
    description: "修改推广创意（可批量，最多3000个）。",
    schema: z.object({
      creativeTypes: z.array(z.object({
        creativeId: z.number().describe("创意ID（必填）"),
        title: z.string().optional().describe("创意标题"),
        description1: z.string().optional().describe("创意描述第一行"),
        description2: z.string().optional().describe("创意描述第二行"),
        pause: z.boolean().optional().describe("true-暂停, false-启用"),
        mobileDestinationUrl: z.string().optional().describe("移动访问网址"),
        mobileDisplayUrl: z.string().optional().describe("移动显示网址"),
        pcDestinationUrl: z.string().optional().describe("计算机访问网址"),
        pcDisplayUrl: z.string().optional().describe("计算机显示网址"),
        tabs: z.array(z.number()).optional().describe("标签"),
        deeplink: z.string().optional().describe("应用调起网址"),
        ulink: z.string().optional().describe("iOS应用调起"),
        miniProgramUrl: z.string().optional().describe("小程序访问网址"),
        pcFinalUrl: z.string().optional().describe("计算机最终访问网址"),
        pcTrackParam: z.string().optional().describe("计算机监控后缀"),
        pcTrackTemplate: z.string().optional().describe("计算机第三方追踪模板"),
        mobileFinalUrl: z.string().optional().describe("移动最终访问网址"),
        mobileTrackParam: z.string().optional().describe("移动监控后缀"),
        mobileTrackTemplate: z.string().optional().describe("移动第三方追踪模板"),
      })).min(1).max(3000).describe("更新推广创意字段列表"),
    }),
  },
);

export const baiduGetCreative = tool(
  async ({ creativeFields, ids, idType, getTemp }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CreativeService", "getCreative", { creativeFields, ids, idType, getTemp },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_creative",
    description: "查询推广创意。根据单元ID或创意ID获取创意信息。",
    schema: z.object({
      creativeFields: z.array(z.enum([
        "creativeId", "adgroupId", "title", "pause", "status", "description1", "description2",
        "pcDestinationUrl", "pcDisplayUrl", "mobileDestinationUrl", "mobileDisplayUrl",
        "tabs", "miniProgramUrl", "deeplink", "pcFinalUrl", "pcTrackParam",
        "pcTrackTemplate", "mobileFinalUrl", "mobileTrackParam", "mobileTrackTemplate",
        "createTime", "offlineReasons", "mainReason", "detailReason",
      ])).describe("需要查询的创意字段列表"),
      ids: z.array(z.number()).describe("查询ID集合"),
      idType: z.number().describe("查询ID类型: 5-单元ID, 7-创意ID"),
      getTemp: z.number().optional().describe("是否获取创意影子: 0-只查创意本身, 1-只查创意影子"),
    }),
  },
);

// ── LeadAdsService tools ──────────────────────────────

export const baiduUpdateStrategies = tool(
  async ({ items }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "LeadAdsService", "updateStrategies", { items },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_strategies",
    description: "修改营销类组件方案，最多10个。",
    schema: z.object({
      items: z.array(z.object({
        materialContent: z.string().describe("物料内容（JSON字符串）"),
        materialType: z.number().describe("物料类型: 2001-电话, 2111-咨询方案, 2108-咨询链接"),
        binds: z.array(z.object({
          targetType: z.number().describe("绑定层级: 0-账户, 1-计划"),
          targetId: z.number().describe("绑定层级ID"),
        })).describe("绑定数据"),
      })).max(10).describe("参数体列表"),
    }),
  },
);

export const baiduDeleteStrategies = tool(
  async ({ items }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "LeadAdsService", "deleteStrategies", { items },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_strategies",
    description: "删除营销类组件方案，最多10个。",
    schema: z.object({
      items: z.array(z.number()).max(10).describe("推广方案ID列表"),
    }),
  },
);

export const baiduGetStrategies = tool(
  async ({ userId, fieldFilters, isDesc, sortField, limit }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "LeadAdsService", "getStrategies", { userId, fieldFilters, isDesc, sortField, limit },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_strategies",
    description: "查询推广方案，一次最多100条。",
    schema: z.object({
      userId: z.number().optional().describe("用户ID"),
      fieldFilters: z.array(z.object({
        field: z.string().describe("筛选字段"),
        op: z.string().describe("比较符号"),
        values: z.array(z.string()).describe("筛选值"),
      })).describe("过滤属性"),
      isDesc: z.boolean().optional().describe("true-倒序, false-正序"),
      sortField: z.string().optional().describe("排序字段，如status"),
      limit: z.array(z.number()).optional().describe("分页: [offset, limit]"),
    }),
  },
);

export const baiduGetMaterials = tool(
  async ({ fieldFilters }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "LeadAdsService", "getMaterials", { fieldFilters },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_materials",
    description: "查询物料信息。",
    schema: z.object({
      fieldFilters: z.array(z.object({
        field: z.string().describe("筛选字段"),
        op: z.string().describe("比较符号"),
        values: z.array(z.string()).describe("筛选值"),
      })).describe("过滤属性"),
    }),
  },
);

export const baiduAddStrategies = tool(
  async ({ items }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "LeadAdsService", "addStrategies", { items },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_strategies",
    description: "添加营销类组件方案，最多10个。",
    schema: z.object({
      items: z.array(z.object({
        materialContent: z.string().describe("物料内容（JSON字符串）"),
        materialType: z.number().describe("物料类型: 2001-电话, 2111-咨询方案, 2108-咨询链接"),
        binds: z.array(z.object({
          targetType: z.number().describe("绑定层级: 0-账户, 1-计划"),
          targetId: z.number().describe("绑定层级ID"),
        })).describe("绑定数据"),
      })).max(10).describe("参数体列表"),
    }),
  },
);

// ── AdgroupAppService tools ───────────────────────────

export const baiduDeleteAdgroupAppBind = tool(
  async ({ delBindIds }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AdgroupAppService", "deleteAdgroupAppBind", { delBindIds },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_adgroup_app_bind",
    description: "删除指定的APP绑定（可批量，最多2000个）。",
    schema: z.object({
      delBindIds: z.array(z.number()).min(1).max(2000).describe("删除绑定ID信息"),
    }),
  },
);

export const baiduGetAdgroupAppBind = tool(
  async ({ idType, ids, name, platform, status, orderBy, desc, limit }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AdgroupAppService", "getAdgroupAppBind", { idType, ids, name, platform, status, orderBy, desc, limit },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_adgroup_app_bind",
    description: "根据查询或筛选条件获取APP绑定关系详情。",
    schema: z.object({
      idType: z.number().describe("查询层级: 2-用户, 3-计划, 5-单元, 8-BIND"),
      ids: z.array(z.number()).describe("查询ID集合"),
      name: z.string().optional().describe("APP名称"),
      platform: z.array(z.number()).optional().describe("操作系统: 1-安卓, 3-iOS, 5-鸿蒙"),
      status: z.array(z.number()).optional().describe("状态"),
      orderBy: z.string().optional().describe("排序字段"),
      desc: z.boolean().optional().describe("true-倒序, false-正序"),
      limit: z.array(z.number()).optional().describe("分页: [offset, pageSize]"),
    }),
  },
);

export const baiduAddAdgroupAppBind = tool(
  async ({ addBinds }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AdgroupAppService", "addAdgroupAppBind", { addBinds },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_adgroup_app_bind",
    description: "新增（更新）单元与APP的绑定，最多2000个。",
    schema: z.object({
      addBinds: z.array(z.object({
        channelId: z.number().optional().describe("Android包唯一标识"),
        appStoreId: z.number().optional().describe("iOS包唯一标识"),
        platform: z.number().describe("操作系统: 1-安卓, 3-iOS, 5-鸿蒙"),
        adgroupId: z.number().describe("推广单元ID"),
      })).min(1).max(2000).describe("新增APP绑定对象数组"),
    }),
  },
);

// ── DpaCreativeService tools ──────────────────────────

export const baiduDeleteCreativeGroup = tool(
  async ({ creativeGroupId }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DpaCreativeService", "deleteCreativeGroup", { creativeGroupId },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_creative_group",
    description: "根据创意组ID删除创意组，会同时删除创意组下的创意等从属信息。",
    schema: z.object({
      creativeGroupId: z.array(z.number()).min(1).max(100).describe("创意组ID集合"),
    }),
  },
);

export const baiduDeleteCreatives = tool(
  async ({ creativeGroupId, formatId }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DpaCreativeService", "deleteCreatives", { creativeGroupId, formatId },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_creatives",
    description: "根据创意组ID和样式ID删除创意组下的样式（创意）。",
    schema: z.object({
      creativeGroupId: z.number().describe("创意组ID"),
      formatId: z.array(z.number()).min(1).max(100).describe("样式ID集合"),
    }),
  },
);

export const baiduAddCreatives = tool(
  async ({ creativeGroupId, creativeTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DpaCreativeService", "addCreatives", { creativeGroupId, creativeTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_creatives",
    description: "新增创意（DPA商品目录创意）。",
    schema: z.object({
      creativeGroupId: z.number().describe("创意组ID"),
      creativeTypes: z.array(z.object({
        formatId: z.number().optional().describe("样式ID"),
        templateId: z.number().optional().describe("模板ID"),
        templateFields: z.string().optional().describe("JSON形式的物料数据"),
      })).min(1).max(100).describe("创意对象列表"),
    }),
  },
);

export const baiduUpdateCreativeGroup = tool(
  async ({ creativeGroupType }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DpaCreativeService", "updateCreativeGroup", { creativeGroupType },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_creative_group",
    description: "更新创意组。",
    schema: z.object({
      creativeGroupType: z.object({
        creativeGroupId: z.number().describe("创意组ID（必填）"),
        creativeGroupName: z.string().optional().describe("创意组名称"),
        productSetId: z.number().optional().describe("商品组ID"),
        catalogId: z.number().optional().describe("商品目录ID"),
        pause: z.boolean().optional().describe("是否暂停"),
        monitorUrl: z.string().optional().describe("监控URL"),
      }).describe("创意组信息"),
    }),
  },
);

export const baiduUpdateCreatives = tool(
  async ({ creativeGroupId, creativeTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DpaCreativeService", "updateCreatives", { creativeGroupId, creativeTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_creatives",
    description: "更新创意（DPA商品目录创意）。",
    schema: z.object({
      creativeGroupId: z.number().describe("创意组ID"),
      creativeTypes: z.array(z.object({
        creativeGroupId: z.number().optional().describe("创意组ID"),
        formatId: z.number().optional().describe("样式ID"),
        templateId: z.number().optional().describe("模板ID"),
        templateFields: z.string().optional().describe("JSON形式的物料数据"),
      })).min(1).max(100).describe("创意对象列表"),
    }),
  },
);

export const baiduGetCreativeGroup = tool(
  async ({ creativeGroupId }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DpaCreativeService", "getCreativeGroup", { creativeGroupId },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_creative_group",
    description: "根据创意组ID查询创意组。",
    schema: z.object({
      creativeGroupId: z.array(z.number()).min(1).max(100).describe("创意组ID集合"),
    }),
  },
);

export const baiduGetCreatives = tool(
  async ({ creativeGroupId }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DpaCreativeService", "getCreatives", { creativeGroupId },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_creatives",
    description: "获取创意列表。",
    schema: z.object({
      creativeGroupId: z.number().optional().describe("创意组ID"),
    }),
  },
);

export const baiduAddCreativeGroup = tool(
  async ({ creativeGroupType }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DpaCreativeService", "addCreativeGroup", { creativeGroupType },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_creative_group",
    description: "新增创意组，每个账户下最多支持1000个创意组。",
    schema: z.object({
      creativeGroupType: z.object({
        creativeGroupName: z.string().optional().describe("创意组名称"),
        productSetId: z.number().optional().describe("商品组ID"),
        catalogId: z.number().optional().describe("商品目录ID（必填）"),
        pause: z.boolean().optional().describe("是否暂停"),
        monitorUrl: z.string().optional().describe("监控URL"),
      }).describe("创意组信息"),
    }),
  },
);

export const baiduGetFormatTemplates = tool(
  async ({ productSetId }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DpaCreativeService", "getFormatTemplates", { productSetId },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_format_templates",
    description: "根据商品组ID获取样式模板。",
    schema: z.object({
      productSetId: z.number().optional().describe("商品组ID"),
    }),
  },
);

export const baiduBatSetRange = tool(
  async ({ batRangeItems }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DpaCreativeService", "batSetRange", { batRangeItems },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_bat_set_range",
    description: "批量设置创意组投放范围，暂不支持跨账户。",
    schema: z.object({
      batRangeItems: z.array(z.object({
        creativeGroupId: z.number().describe("创意组ID"),
        rangeItems: z.array(z.object({
          campaignId: z.number().describe("计划ID"),
          adgroupId: z.number().describe("单元ID"),
          userId: z.number().describe("用户ID"),
        })).describe("投放范围"),
      })).min(1).max(100).describe("批量创意组绑定关系对象"),
    }),
  },
);

// ── DpaApiCreativeService tools ───────────────────────

export const baiduDeleteDpaCreative = tool(
  async ({ creativeIds, adgroupIds }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DpaApiCreativeService", "deleteDpaCreative", { creativeIds, adgroupIds },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_dpa_creative",
    description: "根据商品单元ID或创意ID删除商品单元中的创意。",
    schema: z.object({
      creativeIds: z.array(z.number()).optional().describe("创意ID，最多100个"),
      adgroupIds: z.array(z.number()).optional().describe("商品单元ID，最多100个"),
    }),
  },
);

export const baiduAddDpaCreative = tool(
  async ({ dpaCreativeTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DpaApiCreativeService", "addDpaCreative", { dpaCreativeTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_dpa_creative",
    description: "新增商品计划高级创意，每个单元下每种样式只能新增一个。",
    schema: z.object({
      dpaCreativeTypes: z.array(z.object({
        userId: z.number().describe("用户ID"),
        campaignId: z.number().describe("计划ID"),
        adgroupId: z.number().describe("单元ID"),
        basicCreative: z.object({
          title: z.string().optional().describe("通用标题"),
          desc: z.string().optional().describe("通用描述"),
          pcLinkUrl: z.string().optional().describe("PC链接"),
          wirelessLinkUrl: z.string().optional().describe("无线端链接"),
          wirelessLinkUrlBoxApp: z.string().optional().describe("无线小程序链接"),
          wirelessLinkUrlDeepLink: z.string().optional().describe("无线deeplink链接"),
        }).describe("基础创意信息"),
        productCreatives: z.array(z.record(z.string(), z.unknown())).describe("产品创意列表"),
        showUrl: z.string().describe("创意通用展示URL"),
        index: z.number().optional().describe("下标"),
        monitorUrl: z.string().optional().describe("监控URL"),
      })).min(1).max(100).describe("商品单元创意列表"),
    }),
  },
);

export const baiduUpdateDpaCreative = tool(
  async ({ dpaCreativeTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DpaApiCreativeService", "updateDpaCreative", { dpaCreativeTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_dpa_creative",
    description: "为多个单元批量更新创意。",
    schema: z.object({
      dpaCreativeTypes: z.array(z.object({
        userId: z.number().describe("用户ID"),
        campaignId: z.number().describe("计划ID"),
        adgroupId: z.number().describe("单元ID"),
        basicCreative: z.object({
          title: z.string().optional().describe("通用标题"),
          desc: z.string().optional().describe("通用描述"),
          pcLinkUrl: z.string().optional().describe("PC链接"),
          wirelessLinkUrl: z.string().optional().describe("无线端链接"),
          wirelessLinkUrlBoxApp: z.string().optional().describe("无线小程序链接"),
          wirelessLinkUrlDeepLink: z.string().optional().describe("无线deeplink链接"),
        }).optional().describe("基础创意信息"),
        productCreatives: z.array(z.record(z.string(), z.unknown())).describe("产品创意列表"),
        showUrl: z.string().optional().describe("创意通用展示URL"),
        index: z.number().optional().describe("下标"),
        monitorUrl: z.string().optional().describe("监控URL"),
      })).min(1).max(100).describe("创意类型列表"),
    }),
  },
);

export const baiduGetDpaCreative = tool(
  async ({ ids }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DpaApiCreativeService", "getDpaCreative", { ids },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_dpa_creative",
    description: "根据商品单元ID查询创意列表。",
    schema: z.object({
      ids: z.array(z.number()).min(0).max(100).describe("商品单元ID集合"),
    }),
  },
);

// ── AdvancedSegmentService tools ──────────────────────

export const baiduDeleteSegment = tool(
  async ({ items }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AdvancedSegmentService", "deleteSegment", { items },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_segment",
    description: "删除指定的组件物料（可批量）。",
    schema: z.object({
      items: z.array(z.number()).describe("组件ID列表"),
    }),
  },
);

export const baiduUpdateSegment = tool(
  async ({ items }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AdvancedSegmentService", "updateSegment", { items },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_segment",
    description: "更新组件物料（可批量）。",
    schema: z.object({
      items: z.array(z.object({
        segmentId: z.number().optional().describe("组件ID"),
        source: z.number().optional().describe("组件来源: 3-账户层级"),
        segmentType: z.number().optional().describe("组件类型"),
        pause: z.boolean().optional().describe("暂停状态"),
        auditContent: z.object({
          addfrom: z.number().optional().describe("来源"),
          items: z.array(z.object({
            picUrl: z.string().optional().describe("图片URL"),
            picText: z.string().optional().describe("图片文字"),
            rawPicUrl: z.string().optional().describe("原始图片URL"),
            targetUrl: z.string().optional().describe("目标URL"),
            desc: z.string().optional().describe("描述"),
            imageId: z.number().optional().describe("图片ID"),
          })).optional().describe("审核内容项"),
        }).optional().describe("审核内容"),
      })).describe("组件列表"),
    }),
  },
);

export const baiduGetSegment = tool(
  async ({ ids, idType }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AdvancedSegmentService", "getSegment", { ids, idType },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_segment",
    description: "根据指定的查询层级获取组件物料列表。",
    schema: z.object({
      ids: z.array(z.number()).describe("查询ID列表"),
      idType: z.number().optional().describe("查询层级"),
    }),
  },
);

export const baiduAddSegment = tool(
  async ({ items }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AdvancedSegmentService", "addSegment", { items },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_segment",
    description: "新增组件物料（可批量）。",
    schema: z.object({
      items: z.array(z.object({
        segmentId: z.number().optional().describe("组件ID"),
        source: z.number().optional().describe("组件来源"),
        segmentType: z.number().optional().describe("组件类型"),
        pause: z.boolean().optional().describe("暂停状态"),
        auditContent: z.object({
          addfrom: z.number().optional().describe("来源"),
          items: z.array(z.object({
            picUrl: z.string().optional().describe("图片URL"),
            picText: z.string().optional().describe("图片文字"),
            rawPicUrl: z.string().optional().describe("原始图片URL"),
            targetUrl: z.string().optional().describe("目标URL"),
            desc: z.string().optional().describe("描述"),
            imageId: z.number().optional().describe("图片ID"),
          })).optional().describe("审核内容项"),
        }).optional().describe("审核内容"),
      })).describe("组件列表"),
    }),
  },
);

// ── AdvancedSegmentBindService tools ──────────────────

export const baiduDeleteSegmentBind = tool(
  async ({ items }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AdvancedSegmentBindService", "deleteSegmentBind", { items },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_segment_bind",
    description: "删除指定的组件绑定（可批量）。",
    schema: z.object({
      items: z.array(z.number()).describe("绑定ID列表"),
    }),
  },
);

export const baiduUpdateSegmentBind = tool(
  async ({ items }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AdvancedSegmentBindService", "updateSegmentBind", { items },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_segment_bind",
    description: "更新组件绑定状态（可批量），仅支持绑定关系状态修改。",
    schema: z.object({
      items: z.array(z.object({
        bindId: z.number().optional().describe("绑定ID"),
        pause: z.boolean().optional().describe("暂停状态"),
      })).describe("绑定列表"),
    }),
  },
);

export const baiduGetSegmentBind = tool(
  async ({ ids, idType, segmentTypes, limit }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AdvancedSegmentBindService", "getSegmentBind", { ids, idType, segmentTypes, limit },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_segment_bind",
    description: "根据指定的层级获取组件绑定信息。",
    schema: z.object({
      ids: z.array(z.number()).describe("查询ID列表"),
      idType: z.number().describe("查询层级"),
      segmentTypes: z.array(z.number()).optional().describe("组件类型过滤"),
      limit: z.array(z.number()).optional().describe("分页: [offset, pageSize]"),
    }),
  },
);

export const baiduAddSegmentBind = tool(
  async ({ items }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AdvancedSegmentBindService", "addSegmentBind", { items },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_segment_bind",
    description: "新增组件绑定关系（可批量），仅适用于绑定到单元层级。",
    schema: z.object({
      items: z.array(z.object({
        bindSource: z.number().optional().describe("绑定来源: 0-API绑定"),
        bindLevel: z.number().optional().describe("绑定层级: 1-单元"),
        segmentType: z.number().describe("组件类型"),
        segmentId: z.number().describe("组件ID"),
        adgroupId: z.number().describe("推广单元ID"),
      })).describe("绑定列表"),
    }),
  },
);

// ── SolutionProviderService tools ─────────────────────

export const baiduGetNewConsult = tool(
  async ({ limit, consumerId, fieldFilters }) => {
    const client = getClient();
    const res = await client.call<any, { data: Record<string, unknown> }>(
      "SolutionProviderService", "getNewConsult", { limit, consumerId, fieldFilters },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_new_consult",
    description: "查询客户在营销通中的所有咨询方案。",
    schema: z.object({
      limit: z.array(z.number()).optional().describe("分页: [offset, pageSize]，默认[0, 10000]"),
      consumerId: z.number().describe("使用方ID，搜索API使用19002"),
      fieldFilters: z.array(z.object({
        field: z.string().describe("筛选字段名"),
        op: z.string().describe("操作符"),
        values: z.array(z.string()).describe("筛选目标值"),
      })).optional().describe("字段筛选，目前只支持筛选咨询方案ID(solutionId)"),
    }),
  },
);

export const baiduGetPhone = tool(
  async ({ limit, consumerId, fieldFilters }) => {
    const client = getClient();
    const res = await client.call<any, { data: Record<string, unknown> }>(
      "SolutionProviderService", "getPhone", { limit, consumerId, fieldFilters },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_phone",
    description: "查询客户在营销通中的所有有效的电话方案。",
    schema: z.object({
      limit: z.array(z.number()).optional().describe("分页: [offset, pageSize]，默认[0, 10000]"),
      consumerId: z.number().describe("使用方ID，搜索API使用19002，本地业务使用16001/30001"),
      fieldFilters: z.array(z.object({
        field: z.string().describe("筛选字段名"),
        op: z.string().describe("操作符"),
        values: z.array(z.string()).describe("筛选目标值"),
      })).optional().describe("字段筛选，支持phoneSolutionType和solutionId"),
    }),
  },
);

// ── ImageManagementService tools ──────────────────────

export const baiduUploadImage = tool(
  async ({ productLine, items, needMola, addImage }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "ImageManagementService", "uploadImage", { productLine, items, needMola, addImage },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_upload_image",
    description: "组件图片上传，将图片转为百度格式的图片链接。",
    schema: z.object({
      productLine: z.string().describe("产品线，例如FENGCHAO"),
      items: z.array(z.object({
        content: z.string().describe("图片base64内容"),
        imgmd5: z.string().describe("图片MD5"),
      })).describe("图片数据"),
      needMola: z.boolean().optional().describe("是否需要mola处理"),
      addImage: z.boolean().optional().describe("是否添加到图片库"),
    }),
  },
);

// ── AppProcessService tools ───────────────────────────

export const baiduGetAppList = tool(
  async ({ platforms, limit }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "AppProcessService", "getAppList", { platforms, limit },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_app_list",
    description: "获取可投放的APP信息。",
    schema: z.object({
      platforms: z.array(z.number()).optional().describe("操作系统: 1-安卓, 3-iOS"),
      limit: z.array(z.number()).optional().describe("分页: [offset, pageSize]"),
    }),
  },
);

// ── DanubeCreativeGroupService tools ──────────────────

export const baiduDeleteDanubeCreativeGroup = tool(
  async ({ creativeGroupIds }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DanubeCreativeGroupService", "deleteDanubeCreativeGroup", { creativeGroupIds },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_danube_creative_group",
    description: "删除高级样式创意组（可批量，最多1000个）。",
    schema: z.object({
      creativeGroupIds: z.array(z.number()).min(1).max(1000).describe("创意组ID集合"),
    }),
  },
);

export const baiduCopyDanubeCreativeGroup = tool(
  async ({ creativeGroupTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DanubeCreativeGroupService", "copyDanubeCreativeGroup", { creativeGroupTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_copy_danube_creative_group",
    description: "复制高级样式创意组，最多10个。",
    schema: z.object({
      creativeGroupTypes: z.array(z.record(z.string(), z.unknown())).max(10).describe("创意组信息列表"),
    }),
  },
);

export const baiduAddDanubeCreativeGroup = tool(
  async ({ creativeGroupTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DanubeCreativeGroupService", "addDanubeCreativeGroup", { creativeGroupTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_danube_creative_group",
    description: "新建高级样式创意组，最多10个。",
    schema: z.object({
      creativeGroupTypes: z.array(z.object({
        creativeGroupName: z.string().optional().describe("创意组名称"),
        bindingRange: z.array(z.object({
          userId: z.number().optional().describe("绑定账户ID"),
          campaignId: z.number().optional().describe("绑定计划ID"),
          adgroupId: z.number().optional().describe("绑定单元ID"),
        })).optional().describe("绑定范围"),
        materialTypes: z.array(z.number()).optional().describe("投放样式ID列表"),
        category: z.array(z.number()).optional().describe("行业"),
        pause: z.boolean().optional().describe("暂停状态"),
      })).max(10).describe("创意组信息列表"),
    }),
  },
);

export const baiduUpdateDanubeCreativeGroup = tool(
  async ({ creativeGroupTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DanubeCreativeGroupService", "updateDanubeCreativeGroup", { creativeGroupTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_danube_creative_group",
    description: "修改高级样式创意组，修改内容最多10个，修改状态最多1000个。",
    schema: z.object({
      creativeGroupTypes: z.array(z.object({
        creativeGroupId: z.number().optional().describe("创意组ID"),
        creativeGroupName: z.string().optional().describe("创意组名称"),
        bindingRange: z.array(z.object({
          userId: z.number().optional().describe("绑定账户ID"),
          campaignId: z.number().optional().describe("绑定计划ID"),
          adgroupId: z.number().optional().describe("绑定单元ID"),
        })).optional().describe("绑定范围"),
        materialTypes: z.array(z.number()).optional().describe("投放样式ID列表"),
        category: z.array(z.number()).optional().describe("行业"),
        pause: z.boolean().optional().describe("暂停状态"),
      })).describe("创意组信息列表"),
    }),
  },
);

export const baiduGetDanubeCreativeGroup = tool(
  async ({ pageNo, pageSize, fields, creativeGroupIds }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "DanubeCreativeGroupService", "getDanubeCreativeGroup", { pageNo, pageSize, fields, creativeGroupIds },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_danube_creative_group",
    description: "查询高级样式创意组。",
    schema: z.object({
      pageNo: z.number().optional().describe("页号，默认1"),
      pageSize: z.number().optional().describe("单页大小，默认10，最大100"),
      fields: z.array(z.string()).optional().describe("查询字段: materialTypes-创意样式, bindingRange-投放范围"),
      creativeGroupIds: z.array(z.number()).optional().describe("创意组ID，指定ID时不分页"),
    }),
  },
);

// ── OcpcService tools ─────────────────────────────────

export const baiduDeleteTargetPackage = tool(
  async ({ targetPackageIds }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "OcpcService", "deleteTargetPackage", { targetPackageIds },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_target_package",
    description: "根据oCPC出价策略ID删除oCPC出价策略。",
    schema: z.object({
      targetPackageIds: z.array(z.number()).min(1).max(100).describe("oCPC出价策略ID集合"),
    }),
  },
);

export const baiduAddTargetPackage = tool(
  async ({ targetPackageType }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "OcpcService", "addTargetPackage", { targetPackageType },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_target_package",
    description: "添加oCPC出价策略。",
    schema: z.object({
      targetPackageType: z.array(z.object({
        targetPackageName: z.string().describe("oCPC出价策略名称（必填）"),
        ocpcBidType: z.number().describe("出价模式: 1-目标转化成本, 2-增强模式"),
        ocpcBid: z.number().describe("目标转化出价"),
        scope: z.array(z.object({
          levelId: z.number().describe("计划ID"),
          level: z.number().describe("层级，固定为2"),
        })).describe("生效范围"),
        dataFlowData: z.array(z.object({
          dataFlow: z.number().describe("数据来源: 1-JS布码, 2-线索API, 3-咨询工具, 4-基木鱼/度小店, 5-应用API, 6-电话, 7-小程序SDK, 8-应用SDK"),
          transType: z.array(z.number()).describe("目标转化类型"),
        })).describe("数据来源及目标转化"),
        assistTransTypes: z.array(z.number()).optional().describe("深度转化类型"),
        ocpcDeepCpa: z.number().optional().describe("深度转化出价"),
        deepTransTypeMode: z.number().optional().describe("优化深度转化: 0-不使用, 1-优化转化行为, 2-优化ROI"),
        transAsset: z.number().optional().describe("转化资产类型"),
        transAssetId: z.number().optional().describe("转化资产ID"),
        assetType: z.array(z.number()).optional().describe("资产类型"),
        marketingTargetId: z.number().optional().describe("营销目标"),
        levelId: z.number().describe("关联层级ID（计划ID）"),
        level: z.number().describe("关联层级，固定为2"),
        dataFlow: z.number().describe("数据来源"),
        transType: z.array(z.number()).describe("目标转化"),
      })).min(1).max(20).describe("oCPC出价策略属性列表"),
    }),
  },
);

export const baiduUpdateTargetPackage = tool(
  async ({ targetPackageType }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "OcpcService", "updateTargetPackage", { targetPackageType },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_target_package",
    description: "编辑oCPC出价策略。",
    schema: z.object({
      targetPackageType: z.array(z.object({
        targetPackageId: z.number().describe("oCPC出价策略ID（必填）"),
        targetPackageName: z.string().optional().describe("策略名称"),
        ocpcBidType: z.number().optional().describe("出价模式"),
        ocpcBid: z.number().optional().describe("目标转化出价"),
        scope: z.array(z.object({
          levelId: z.number().describe("计划ID"),
          level: z.number().describe("层级"),
        })).optional().describe("生效范围"),
        dataFlowData: z.array(z.object({
          dataFlow: z.number().describe("数据来源"),
          transType: z.array(z.number()).describe("目标转化类型"),
        })).optional().describe("数据来源及目标转化"),
        assistTransTypes: z.array(z.number()).optional().describe("深度转化类型"),
        ocpcDeepCpa: z.number().optional().describe("深度转化出价"),
        deepTransTypeMode: z.number().optional().describe("优化深度转化"),
        transAsset: z.number().optional().describe("转化资产类型"),
        transAssetId: z.number().optional().describe("转化资产ID"),
        assetType: z.array(z.number()).optional().describe("资产类型"),
        marketingTargetId: z.number().optional().describe("营销目标"),
        levelId: z.number().describe("关联层级ID"),
        level: z.number().describe("关联层级"),
        dataFlow: z.number().describe("数据来源"),
        transType: z.array(z.number()).describe("目标转化"),
      })).min(1).max(20).describe("oCPC出价策略属性列表"),
    }),
  },
);

export const baiduGetTargetPackageList = tool(
  async ({ targetPackageTypeFields, ids, level }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "OcpcService", "getTargetPackageList", { targetPackageTypeFields, ids, level },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_target_package_list",
    description: "获取oCPC出价策略列表。",
    schema: z.object({
      targetPackageTypeFields: z.array(z.enum([
        "targetPackageId", "targetPackageName", "ocpcBid", "ocpcBidType",
        "scope", "dataFlowData", "assistTransTypes", "ocpcDeepCpa",
        "packageStatus", "deepTypeStat", "deepTransTypeMode", "transAsset", "transAssetId",
      ])).describe("需要返回的字段名列表"),
      ids: z.array(z.number()).describe("level=1时填写userId, level=2时填写策略ID数组"),
      level: z.number().describe("查询层级: 1-账户, 2-oCPC出价策略"),
    }),
  },
);

// ── FcOcpcService tools ───────────────────────────────

export const baiduGetSuggestCPAs = tool(
  async ({ fields, dataFlow, transTypes, campaignIds }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "FcOcpcService", "getSuggestCPAs", { fields, dataFlow, transTypes, campaignIds },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_suggest_cpas",
    description: "获取建议CPA，包括行业CPA推荐值、历史生效范围CPA推荐值、ecpc建议最高出价系数。",
    schema: z.object({
      fields: z.array(z.enum(["tradeSuggestCpa", "noThresholdSuggestCpa"])).describe("请求字段"),
      dataFlow: z.array(z.number()).describe("数据来源: 1-JS布码, 2-线索API, 3-咨询工具, 4-基木鱼/度小店, 5-应用API, 6-电话, 7-小程序SDK, 8-应用SDK"),
      transTypes: z.array(z.number()).describe("转化类型"),
      campaignIds: z.array(z.number()).describe("生效范围，计划ID集合"),
    }),
  },
);

// ── CampaignEstimatedService tools ────────────────────

export const baiduGetProjectBidReference = tool(
  async ({ estimatedBidType, planIdList, projectIdList, transtype }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "CampaignEstimatedService", "getProjectBidReference", { estimatedBidType, planIdList, projectIdList, transtype },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_project_bid_reference",
    description: "获取项目建议目标转化出价和胜出率。支持机械设备、商务服务等10个行业。",
    schema: z.object({
      estimatedBidType: z.number().describe("场景: 1-新建场景, 2-修改场景"),
      planIdList: z.array(z.number()).optional().describe("计划ID集合（新建场景传此字段）"),
      projectIdList: z.array(z.number()).optional().describe("项目ID集合（修改场景传此字段）"),
      transtype: z.array(z.number()).describe("转化类型"),
    }),
  },
);

// ── PriceStrategyService tools ────────────────────────

export const baiduDeletePriceStrategy = tool(
  async ({ strategyIds }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "PriceStrategyService", "deletePriceStrategy", { strategyIds },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_price_strategy",
    description: "删除出价策略。",
    schema: z.object({
      strategyIds: z.array(z.number()).min(1).max(100).describe("待删除出价策略ID列表"),
    }),
  },
);

export const baiduUpdatePriceStrategy = tool(
  async ({ priceStrategyTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "PriceStrategyService", "updatePriceStrategy", { priceStrategyTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_price_strategy",
    description: "更新出价策略。",
    schema: z.object({
      priceStrategyTypes: z.array(z.object({
        strategyId: z.number().describe("出价策略ID（必填）"),
        strategyName: z.string().optional().describe("出价策略名称"),
        strategyType: z.number().optional().describe("出价策略类型: 0-优化排名"),
        targetRank: z.number().optional().describe("排名目标: 0-上方位首位, 1-上方位"),
        priceFactor: z.number().optional().describe("出价系数，范围[1.01, 10.00]"),
        isPause: z.boolean().describe("true-关闭, false-开启"),
        strategyLevel: z.number().optional().describe("策略层级: 3-计划层级"),
        priceStrategyCampaignTypes: z.array(z.object({
          strategyCampaignId: z.number().optional().describe("绑定ID"),
          strategyId: z.number().optional().describe("策略ID"),
          campaignId: z.number().optional().describe("计划ID"),
          campaignName: z.string().optional().describe("计划名称"),
          isDelete: z.boolean().optional().describe("是否删除"),
        })).optional().describe("策略和计划的绑定信息"),
      })).describe("出价策略对象列表"),
    }),
  },
);

export const baiduGetPriceStrategy = tool(
  async ({ fields, strategyTypes, ids, idType, strategyLevels }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "PriceStrategyService", "getPriceStrategy", { fields, strategyTypes, ids, idType, strategyLevels },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_price_strategy",
    description: "查询出价策略。",
    schema: z.object({
      fields: z.array(z.enum([
        "isPause", "targetRank", "strategyId", "strategyName", "strategyType",
        "priceFactor", "priceStrategyCampaignTypes",
      ])).describe("查询字段列表"),
      strategyTypes: z.array(z.number()).describe("出价策略类型: 0-优化排名"),
      ids: z.array(z.number()).describe("策略ID集合"),
      idType: z.number().optional().describe("查询层级: 32-出价策略层级"),
      strategyLevels: z.number().optional().describe("策略绑定层级: 3-计划层级"),
    }),
  },
);

export const baiduAddPriceStrategy = tool(
  async ({ priceStrategyTypes }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "PriceStrategyService", "addPriceStrategy", { priceStrategyTypes },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_price_strategy",
    description: "新增出价策略。",
    schema: z.object({
      priceStrategyTypes: z.array(z.object({
        strategyName: z.string().describe("出价策略名称（必填）"),
        strategyType: z.number().describe("出价策略类型（必填）: 0-优化排名"),
        targetRank: z.number().describe("排名目标（必填）: 0-上方位首位, 1-上方位"),
        priceFactor: z.number().describe("出价系数（必填），范围[1.01, 10.00]"),
        isPause: z.boolean().describe("是否关闭: true-关闭, false-开启"),
        strategyLevel: z.number().optional().describe("策略层级: 3-计划层级"),
        priceStrategyCampaignTypes: z.array(z.object({
          strategyCampaignId: z.number().optional().describe("绑定ID"),
          strategyId: z.number().optional().describe("策略ID"),
          campaignId: z.number().optional().describe("计划ID"),
          campaignName: z.string().optional().describe("计划名称"),
          isDelete: z.boolean().optional().describe("是否删除"),
        })).optional().describe("策略和计划的绑定信息"),
      })).describe("出价策略对象列表"),
    }),
  },
);

// ── FcTransTraceApiService tools ──────────────────────

export const baiduGetFcTransTraceList = tool(
  async ({ transName, traceTargetList, transModeList, transStatusList, limit }) => {
    const client = getClient();
    const res = await client.call<any, { data: Record<string, unknown> }>(
      "FcTransTraceApiService", "getFcTransTraceList", {
        transName, traceTargetList, transModeList, transStatusList, limit,
      },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_fc_trans_trace_list",
    description: "查询转化追踪列表。",
    schema: z.object({
      transName: z.string().optional().describe("转化追踪名称"),
      traceTargetList: z.array(z.number()).optional().describe("追踪目标: 1-网站, 2-APP, 3-小程序"),
      transModeList: z.array(z.number()).optional().describe("接入方式: 4-线索API, 6-咨询工具授权, 7-网站JS布码, 8-应用API, 9-电话, 10-小程序SDK, 11-应用SDK, 23-百度统计网站, 24-百度统计小程序"),
      transStatusList: z.array(z.number()).optional().describe("转化配置状态: 0-联调成功, 1-失败, 2-等待, 3-无需联调"),
      limit: z.array(z.number()).optional().describe("分页: [偏移量, 最大数目]"),
    }),
  },
);

export const baiduAddFcTransTrace = tool(
  async ({ transMode, transName, transType, appType, monitorUrl, campaignIds }) => {
    const client = getClient();
    const res = await client.call<any, { data: number }>(
      "FcTransTraceApiService", "addFcTransTrace", {
        transMode, transName, transType, appType, monitorUrl, campaignIds,
      },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_add_fc_trans_trace",
    description: "新增转化追踪（仅支持应用API和应用SDK）。",
    schema: z.object({
      transMode: z.number().describe("接入方式: 8-应用API, 11-应用SDK"),
      transName: z.string().describe("转化名称（必填），长度1-50"),
      transType: z.array(z.number()).describe("转化类型"),
      appType: z.number().optional().describe("应用类型: 0-iOS和Android, 1-仅iOS, 2-仅Android"),
      monitorUrl: z.string().optional().describe("监测地址（transMode=8时必填）"),
      campaignIds: z.array(z.number()).optional().describe("绑定的计划ID"),
    }),
  },
);

export const baiduUpdateFcTransTrace = tool(
  async ({ transId, transMode, transName, transType, monitorUrl }) => {
    const client = getClient();
    const res = await client.call<any, { data: number }>(
      "FcTransTraceApiService", "updateFcTransTrace", {
        transId, transMode, transName, transType, monitorUrl,
      },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_update_fc_trans_trace",
    description: "修改转化追踪。",
    schema: z.object({
      transId: z.number().describe("转化追踪ID（必填）"),
      transMode: z.number().describe("接入方式（必填）"),
      transName: z.string().describe("转化名称（必填），长度1-50"),
      transType: z.array(z.number()).optional().describe("转化类型"),
      monitorUrl: z.string().optional().describe("监测地址"),
    }),
  },
);

export const baiduDeleteFcTransTrace = tool(
  async ({ trans }) => {
    const client = getClient();
    const res = await client.call<any, { data: number[] }>(
      "FcTransTraceApiService", "deleteFcTransTrace", { trans },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_delete_fc_trans_trace",
    description: "删除转化追踪（可批量，最多100个）。",
    schema: z.object({
      trans: z.array(z.object({
        transId: z.number().describe("转化追踪ID"),
        transMode: z.number().describe("接入方式"),
      })).min(1).max(100).describe("要删除的转化追踪列表"),
    }),
  },
);

// ── SearchService tools ───────────────────────────────

export const baiduGetIdsByTabs = tool(
  async ({ tabIds, idType, page }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "SearchService", "getIdsByTabs", { tabIds, idType, page },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_ids_by_tabs",
    description: "筛选特定标签下的关键词/创意ID。",
    schema: z.object({
      tabIds: z.array(z.number()).min(1).max(30).describe("标签ID，每个ID取值1-30"),
      idType: z.number().describe("物料ID类型: 11-关键词层级, 7-创意层级"),
      page: z.number().optional().describe("分页数，默认1，每页最多10000条"),
    }),
  },
);

export const baiduGetMaterialInfoBySearch = tool(
  async ({ searchWord, startNum, endNum, searchType, searchLevel, materialFields }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "SearchService", "getMaterialInfoBySearch", { searchWord, startNum, endNum, searchType, searchLevel, materialFields },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_material_info_by_search",
    description: "查询包含指定字面的计划、单元、关键词等信息。",
    schema: z.object({
      searchWord: z.string().describe("查询字面，最大40字节"),
      startNum: z.number().optional().describe("起始序号，默认1"),
      endNum: z.number().optional().describe("结束序号，默认100"),
      searchType: z.number().describe("查询类型: 0-模糊, 1-精确"),
      searchLevel: z.number().describe("查询层级: 0-计划, 1-单元, 2-关键词"),
      materialFields: z.array(z.string()).optional().describe("查询字段"),
    }),
  },
);

export const baiduGetKeywordIdBySearch = tool(
  async ({ campaignIds, page, pcQuality, mobileQuality, status }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "SearchService", "getKeywordIdBySearch", { campaignIds, page, pcQuality, mobileQuality, status },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_keyword_id_by_search",
    description: "根据质量度、状态筛选关键词ID。",
    schema: z.object({
      campaignIds: z.array(z.number()).optional().describe("计划ID，空=所有计划"),
      page: z.number().optional().describe("分页数，默认1，每页最多10000"),
      pcQuality: z.array(z.number()).optional().describe("PC质量度，范围1-10"),
      mobileQuality: z.array(z.number()).optional().describe("移动质量度，范围1-10"),
      status: z.array(z.number()).optional().describe("关键词状态: 40-有效, 41-有效, 42-暂停, 43-审核不通过等"),
    }),
  },
);

export const baiduGetCreativeIdBySearch = tool(
  async ({ campaignIds, page, status }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "SearchService", "getCreativeIdBySearch", { campaignIds, page, status },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_creative_id_by_search",
    description: "根据审核状态筛选创意ID。",
    schema: z.object({
      campaignIds: z.array(z.number()).optional().describe("筛选的计划ID，空=所有计划"),
      page: z.number().optional().describe("分页数，默认1，每页最多10000"),
      status: z.array(z.number()).describe("创意状态: 51-有效, 52-暂停, 53-审核不通过, 54-待激活, 55-审核中, 56-部分无效, 57-有效-移动URL审核中"),
    }),
  },
);

export const baiduGetCountById = tool(
  async ({ idType, countType, ids }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "SearchService", "getCountById", { idType, countType, ids },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_count_by_id",
    description: "查询指定ID序列下对应状态的物料数量。",
    schema: z.object({
      idType: z.number().optional().describe("查询层级: 0-计划, 1-单元"),
      countType: z.number().describe("计数类型: 0-单元, 1-关键词, 2-创意, 3-计划"),
      ids: z.array(z.number()).optional().describe("查询ID，最多1000个"),
    }),
  },
);

// ── BulkJobService tools ──────────────────────────────

export const baiduGetAllObjects = tool(
  async (params) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "BulkJobService", "getAllObjects", params,
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_all_objects",
    description: "获取指定账户/计划下的完整数据，可定制需要返回的层级文件及数据列。",
    schema: z.object({
      campaignIds: z.array(z.number()).optional().describe("指定计划ID，空=全账户"),
      includeTemp: z.boolean().optional().describe("是否包含修改未生效物料，默认true"),
      format: z.number().optional().describe("压缩格式: 0-zip, 1-Gzip"),
      accountFields: z.array(z.string()).optional().describe("账户层级数据列"),
      campaignFields: z.array(z.string()).optional().describe("计划层级数据列"),
      adgroupFields: z.array(z.string()).optional().describe("单元层级数据列"),
      keywordFields: z.array(z.string()).optional().describe("关键词层级数据列"),
      creativeFields: z.array(z.string()).optional().describe("创意层级数据列"),
      segmentFields: z.array(z.string()).optional().describe("图片素材数据列"),
      businessLabelFields: z.array(z.string()).optional().describe("词包数据列"),
      autoExpansionFields: z.array(z.string()).optional().describe("自动扩量数据列"),
    }),
  },
);

export const baiduGetAllChangedObjects = tool(
  async (params) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "BulkJobService", "getAllChangedObjects", params,
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_all_changed_objects",
    description: "获取指定时间后有变化的物料信息。",
    schema: z.object({
      startTime: z.string().describe("更新的起始时间（最早可查上个月1号）"),
      campaignIds: z.array(z.number()).optional().describe("指定计划ID范围"),
      includeTemp: z.boolean().optional().describe("是否包含影子物料"),
      format: z.number().optional().describe("文件格式: 0-zip, 1-Gzip"),
      campaignFields: z.array(z.string()).optional().describe("计划层级数据列"),
      adgroupFields: z.array(z.string()).optional().describe("单元层级数据列"),
      keywordFields: z.array(z.string()).optional().describe("关键词层级数据列"),
      creativeFields: z.array(z.string()).optional().describe("创意层级数据列"),
    }),
  },
);

export const baiduGetFileStatus = tool(
  async ({ fileId }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "BulkJobService", "getFileStatus", { fileId },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_file_status",
    description: "查询下载文件是否已生成。",
    schema: z.object({
      fileId: z.string().describe("下载任务ID"),
    }),
  },
);

export const baiduGetFilePath = tool(
  async ({ fileId }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "BulkJobService", "getFilePath", { fileId },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_file_path",
    description: "返回文件下载地址。",
    schema: z.object({
      fileId: z.string().describe("处理任务ID"),
    }),
  },
);

export const baiduCancelDownload = tool(
  async ({ fileId }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "BulkJobService", "cancelDownload", { fileId },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_cancel_download",
    description: "取消一个下载任务。",
    schema: z.object({
      fileId: z.string().describe("处理任务ID"),
    }),
  },
);

export const baiduGetChangedIds = tool(
  async ({ startTime, itemType, ids, pageNo, pageSize }) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "BulkJobService", "getChangedItemId", { startTime, itemType, ids, pageNo, pageSize },
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_changed_ids",
    description: "获取从指定时间到当前时间段内有变化的物料ID。",
    schema: z.object({
      startTime: z.string().describe("起始时间（一个月内）"),
      itemType: z.number().describe("物料类型: 1-搜索计划, 2-搜索单元, 3-搜索创意, 4-搜索关键词"),
      ids: z.array(z.number()).optional().describe("计划ID数组"),
      pageNo: z.number().optional().describe("分页页码，从1开始"),
      pageSize: z.number().optional().describe("分页大小，不超过20000"),
    }),
  },
);

export const baiduGetChangedScale = tool(
  async (params) => {
    const client = getClient();
    const res = await client.call<any, { data: Array<Record<string, unknown>> }>(
      "BulkJobService", "getChangedScale", params,
    );
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_changed_scale",
    description: "获取变化物料规模，帮助决定后续更新策略。",
    schema: z.object({
      startTime: z.string().describe("起始时间（最早可查上个月1号）"),
      campaignIds: z.array(z.number()).optional().describe("指定计划ID范围"),
      changedCampaignScale: z.boolean().optional().describe("统计计划变化，默认true"),
      changedAdgroupScale: z.boolean().optional().describe("统计单元变化，默认true"),
      changedKeywordScale: z.boolean().optional().describe("统计关键词变化，默认true"),
      changedCreativeScale: z.boolean().optional().describe("统计创意变化，默认true"),
      changedAutoExpansionScale: z.boolean().optional().describe("统计自动扩量变化，默认true"),
    }),
  },
);

// ── All Baidu tools ───────────────────────────────────

export const BAIDU_TOOLS = [
  baiduGetAccountInfo,
  baiduUpdateAccountInfo,
  baiduGetCampaign,
  baiduDeleteCampaign,
  baiduUpdateCampaign,
  baiduAddCampaign,
  baiduGetBindBusinessPointList,
  baiduDeleteAdgroup,
  baiduUpdateAdgroup,
  baiduGetAdgroup,
  baiduAddAdgroup,
  baiduDeleteWord,
  baiduUpdateWord,
  baiduGetWord,
  baiduAddWord,
  baiduUpdateNegativeKeyword,
  baiduDeleteNegativeKeyword,
  baiduGetNegativeKeyword,
  baiduAddNegativeKeyword,
  baiduUpdateNegativeKeywordPacket,
  baiduDeleteNegativeKeywordPacket,
  baiduGetNegativeKeywordPacket,
  baiduGetNegativeKeywordPacketCount,
  baiduAddNegativeKeywordPacket,
  baiduGetAutoExpansion,
  baiduGetCrowdEstimate,
  baiduDeleteCrowd,
  baiduAddCrowd,
  baiduUpdateCrowd,
  baiduGetCrowd,
  baiduDeleteBind,
  baiduAddBind,
  baiduUpdateBind,
  baiduGetBind,
  baiduGetAppInfo,
  baiduDeleteCreative,
  baiduAddCreative,
  baiduUpdateCreative,
  baiduGetCreative,
  baiduUpdateStrategies,
  baiduDeleteStrategies,
  baiduGetStrategies,
  baiduGetMaterials,
  baiduAddStrategies,
  baiduDeleteAdgroupAppBind,
  baiduGetAdgroupAppBind,
  baiduAddAdgroupAppBind,
  baiduDeleteCreativeGroup,
  baiduDeleteCreatives,
  baiduAddCreatives,
  baiduUpdateCreativeGroup,
  baiduUpdateCreatives,
  baiduGetCreativeGroup,
  baiduGetCreatives,
  baiduAddCreativeGroup,
  baiduGetFormatTemplates,
  baiduBatSetRange,
  baiduDeleteDpaCreative,
  baiduAddDpaCreative,
  baiduUpdateDpaCreative,
  baiduGetDpaCreative,
  baiduDeleteSegment,
  baiduUpdateSegment,
  baiduGetSegment,
  baiduAddSegment,
  baiduDeleteSegmentBind,
  baiduUpdateSegmentBind,
  baiduGetSegmentBind,
  baiduAddSegmentBind,
  baiduGetNewConsult,
  baiduGetPhone,
  baiduUploadImage,
  baiduGetAppList,
  baiduDeleteDanubeCreativeGroup,
  baiduCopyDanubeCreativeGroup,
  baiduAddDanubeCreativeGroup,
  baiduUpdateDanubeCreativeGroup,
  baiduGetDanubeCreativeGroup,
  baiduDeleteTargetPackage,
  baiduAddTargetPackage,
  baiduUpdateTargetPackage,
  baiduGetTargetPackageList,
  baiduGetSuggestCPAs,
  baiduGetProjectBidReference,
  baiduDeletePriceStrategy,
  baiduUpdatePriceStrategy,
  baiduGetPriceStrategy,
  baiduAddPriceStrategy,
  baiduGetFcTransTraceList,
  baiduAddFcTransTrace,
  baiduUpdateFcTransTrace,
  baiduDeleteFcTransTrace,
  baiduGetIdsByTabs,
  baiduGetMaterialInfoBySearch,
  baiduGetKeywordIdBySearch,
  baiduGetCreativeIdBySearch,
  baiduGetCountById,
  baiduGetAllObjects,
  baiduGetAllChangedObjects,
  baiduGetFileStatus,
  baiduGetFilePath,
  baiduCancelDownload,
  baiduGetChangedIds,
  baiduGetChangedScale,
];
