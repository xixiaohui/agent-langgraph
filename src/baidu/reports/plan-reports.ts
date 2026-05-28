import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { BaiduClient } from "../client.js";
import { getReportData, COMMON_PERFORMANCE_COLUMNS, COMMON_DATE_COLUMNS } from "./report-client.js";

function getClient(): BaiduClient {
  const userName = process.env.BAIDU_USERNAME;
  const accessToken = process.env.BAIDU_ACCESS_TOKEN;
  if (!userName || !accessToken) {
    throw new Error("Missing BAIDU_USERNAME or BAIDU_ACCESS_TOKEN environment variables");
  }
  return new BaiduClient({
    baseUrl: "https://api.baidu.com",
    auth: { userName, accessToken },
  });
}

const TIME_UNIT = z.enum(["HOUR", "DAY", "WEEK", "MONTH", "SUMMARY"]);
const SORT_RULE = z.enum(["ASC", "DESC"]);

const commonSchema = {
  startDate: z.string().describe("起始日期，格式 YYYY-MM-DD，如 2025-05-01"),
  endDate: z.string().describe("结束日期，格式 YYYY-MM-DD，如 2025-05-28"),
  timeUnit: TIME_UNIT.default("DAY").describe("时间单位：HOUR=小时, DAY=天, WEEK=周, MONTH=月, SUMMARY=汇总"),
  userIds: z.array(z.number()).optional().describe("查询的用户ID列表，不传则查询当前账户"),
  startRow: z.number().default(0).describe("起始行号，从0开始"),
  rowCount: z.number().default(200).describe("获取行数，默认200"),
  needSum: z.boolean().default(false).describe("是否需要返回总计行"),
  sorts: z.array(z.object({
    column: z.string().describe("排序字段名"),
    sortRule: SORT_RULE.describe("排序规则：ASC=升序, DESC=降序"),
  })).optional().describe("排序规则，最多2个"),
  filters: z.array(z.object({
    column: z.string().describe("筛选字段名"),
    operator: z.enum(["GT", "GTE", "LT", "LTE", "EQ", "NOT_EQ", "IN", "NOT_IN"]).describe("操作符"),
    values: z.array(z.string()).describe("筛选值列表"),
  })).optional().describe("筛选条件"),
};

// ═══════════════════════════════════════════════════════════════
// 账户报告 (2208157)
// ═══════════════════════════════════════════════════════════════

export const baiduAccountReport = tool(
  async ({ startDate, endDate, timeUnit, userIds, columns, sorts, filters, startRow, rowCount, needSum }) => {
    const client = getClient();
    console.log(`[baidu_account_report] 调用开始, startDate=${startDate}, endDate=${endDate}, timeUnit=${timeUnit}`);
    try {
      const reportColumns = columns.length > 0 ? columns : [
        ...COMMON_DATE_COLUMNS,
        "userName",
        "impression",
        "click",
        "cost",
        "ctr",
        "cpc",
        "conversion",
      ];
      const data = await getReportData(client, {
        reportType: 2208157,
        startDate, endDate, timeUnit,
        columns: reportColumns,
        userIds,
        sorts,
        filters,
        startRow,
        rowCount: rowCount ?? 200,
        needSum,
      });
      return JSON.stringify(data, null, 2);
    } catch (error) {
      console.error(`[baidu_account_report] 调用失败, error=${error}`);
      return JSON.stringify({ error: "获取账户报告失败", details: String(error) });
    }
  },
  {
    name: "baidu_account_report",
    description:
      "查询百度营销账户报告（新版API reportType=2208157）。获取账户级别的展现、点击、消费、CTR、CPC、转化等效果数据。" +
      "可按天/周/月汇总，支持按设备(device: 0=计算机,1=移动)、推广方式(marketingTargetEnum)等维度筛选。" +
      "建议columns: ['date','userName','impression','click','cost','ctr','cpc','conversion']",
    schema: z.object(commonSchema),
  },
);

// ═══════════════════════════════════════════════════════════════
// 计划报告 (2290316)
// ═══════════════════════════════════════════════════════════════

export const baiduCampaignReport = tool(
  async ({ startDate, endDate, timeUnit, userIds, columns, sorts, filters, startRow, rowCount, needSum }) => {
    const client = getClient();
    console.log(`[baidu_campaign_report] 调用开始, startDate=${startDate}, endDate=${endDate}`);
    try {
      const reportColumns = columns.length > 0 ? columns : [
        ...COMMON_DATE_COLUMNS,
        "campaignNameStatus",
        "campaignId",
        "impression",
        "click",
        "cost",
        "ctr",
        "cpc",
        "conversion",
      ];
      const data = await getReportData(client, {
        reportType: 2290316,
        startDate, endDate, timeUnit,
        columns: reportColumns,
        userIds,
        sorts,
        filters,
        startRow,
        rowCount: rowCount ?? 200,
        needSum,
      });
      return JSON.stringify(data, null, 2);
    } catch (error) {
      console.error(`[baidu_campaign_report] 调用失败, error=${error}`);
      return JSON.stringify({ error: "获取计划报告失败", details: String(error) });
    }
  },
  {
    name: "baidu_campaign_report",
    description:
      "查询百度营销计划报告（新版API reportType=2290316）。按推广计划维度查看展现、点击、消费、CTR、CPC等效果数据。" +
      "属性列含: campaignNameStatus(计划名称状态), campaignId, campaignName, campaignStatus, device, targetingType, provinceName 等。",
    schema: z.object(commonSchema),
  },
);

// ═══════════════════════════════════════════════════════════════
// 单元报告 (2284618)
// ═══════════════════════════════════════════════════════════════

export const baiduAdgroupReport = tool(
  async ({ startDate, endDate, timeUnit, userIds, columns, sorts, filters, startRow, rowCount, needSum }) => {
    const client = getClient();
    console.log(`[baidu_adgroup_report] 调用开始, startDate=${startDate}, endDate=${endDate}`);
    try {
      const reportColumns = columns.length > 0 ? columns : [
        ...COMMON_DATE_COLUMNS,
        "campaignNameStatus",
        "adGroupNameStatus",
        "adGroupId",
        "impression",
        "click",
        "cost",
        "ctr",
        "cpc",
        "conversion",
      ];
      const data = await getReportData(client, {
        reportType: 2284618,
        startDate, endDate, timeUnit,
        columns: reportColumns,
        userIds,
        sorts,
        filters,
        startRow,
        rowCount: rowCount ?? 200,
        needSum,
      });
      return JSON.stringify(data, null, 2);
    } catch (error) {
      console.error(`[baidu_adgroup_report] 调用失败, error=${error}`);
      return JSON.stringify({ error: "获取单元报告失败", details: String(error) });
    }
  },
  {
    name: "baidu_adgroup_report",
    description:
      "查询百度营销单元报告（新版API reportType=2284618）。按推广单元维度查看效果数据。" +
      "属性列含: campaignNameStatus(计划), adGroupNameStatus(单元名称状态), adGroupId, adGroupName, adGroupStatus 等。",
    schema: z.object(commonSchema),
  },
);

// ═══════════════════════════════════════════════════════════════
// OCPC报告-项目&出价策略 (970638)
// ═══════════════════════════════════════════════════════════════

export const baiduOcpcReport = tool(
  async ({ startDate, endDate, timeUnit, userIds, columns, sorts, filters, startRow, rowCount, needSum }) => {
    const client = getClient();
    console.log(`[baidu_ocpc_report] 调用开始, startDate=${startDate}, endDate=${endDate}`);
    try {
      const reportColumns = columns.length > 0 ? columns : [
        ...COMMON_DATE_COLUMNS,
        "packPlanNameStatus",
        "oCPCLevel",
        "oCPCBidType",
        "oCPCTypeName",
        "impression",
        "click",
        "cost",
        "filteredConversionsSum",
        "ocpcConversions",
        "transPrice",
      ];
      const data = await getReportData(client, {
        reportType: 970638,
        startDate, endDate, timeUnit,
        columns: reportColumns,
        userIds,
        sorts,
        filters,
        startRow,
        rowCount: rowCount ?? 200,
        needSum,
      });
      return JSON.stringify(data, null, 2);
    } catch (error) {
      console.error(`[baidu_ocpc_report] 调用失败, error=${error}`);
      return JSON.stringify({ error: "获取OCPC报告失败", details: String(error) });
    }
  },
  {
    name: "baidu_ocpc_report",
    description:
      "查询百度营销OCPC报告-项目&出价策略（新版API reportType=970638）。查看OCPC投放效果，含转化量、转化成本等。" +
      "建议columns含: packPlanNameStatus, oCPCLevel, oCPCBidType, oCPCTypeName, ocpcConversions, transPrice。",
    schema: z.object(commonSchema),
  },
);
