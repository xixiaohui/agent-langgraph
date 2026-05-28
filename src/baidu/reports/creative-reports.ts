import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { BaiduClient } from "../client.js";
import { getReportData } from "./report-client.js";

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

const commonSchema = {
  startDate: z.string().describe("起始日期，格式 YYYY-MM-DD，如 2025-05-01"),
  endDate: z.string().describe("结束日期，格式 YYYY-MM-DD，如 2025-05-28"),
  timeUnit: z.enum(["HOUR", "DAY", "WEEK", "MONTH", "SUMMARY"]).default("DAY").describe("时间单位"),
  userIds: z.array(z.number()).optional().describe("用户ID列表"),
  columns: z.array(z.string()).default([]).describe("查询列，传空则使用默认常用列"),
  sorts: z.array(z.object({
    column: z.string(),
    sortRule: z.enum(["ASC", "DESC"]),
  })).optional().describe("排序规则"),
  filters: z.array(z.object({
    column: z.string(),
    operator: z.enum(["GT", "GTE", "LT", "LTE", "EQ", "NOT_EQ", "IN", "NOT_IN"]),
    values: z.array(z.string()),
  })).optional().describe("筛选条件"),
  startRow: z.number().default(0).describe("起始行号"),
  rowCount: z.number().default(200).describe("获取行数"),
  needSum: z.boolean().default(false).describe("是否需要总计行"),
};

// ═══════════════════════════════════════════════════════════════
// 创意组件报告 (6438125)
// ═══════════════════════════════════════════════════════════════

export const baiduCreativeReport = tool(
  async ({ startDate, endDate, timeUnit, userIds, columns, sorts, filters, startRow, rowCount, needSum }) => {
    const client = getClient();
    console.log(`[baidu_creative_report] 调用开始, startDate=${startDate}, endDate=${endDate}`);
    try {
      const reportColumns = columns.length > 0 ? columns : [
        "date",
        "secondComponentType",
        "campaignNameStatus",
        "adGroupNameStatus",
        "impression",
        "click",
        "cost",
        "ctr",
        "cpc",
        "conversion",
      ];
      const data = await getReportData(client, {
        reportType: 6438125,
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
      console.error(`[baidu_creative_report] 调用失败, error=${error}`);
      return JSON.stringify({ error: "获取创意组件报告失败", details: String(error) });
    }
  },
  {
    name: "baidu_creative_report",
    description:
      "查询百度营销创意组件报告（新版API reportType=6438125）。按创意组件维度查看展现、点击、消费、CTR、CPC等。" +
      "核心属性: secondComponentType(组件类型)。用于优化创意素材效果。",
    schema: z.object(commonSchema),
  },
);

// ═══════════════════════════════════════════════════════════════
// 高级样式报告 (1150477)
// ═══════════════════════════════════════════════════════════════

export const baiduAdvancedStyleReport = tool(
  async ({ startDate, endDate, timeUnit, userIds, columns, sorts, filters, startRow, rowCount, needSum }) => {
    const client = getClient();
    console.log(`[baidu_advanced_style_report] 调用开始, startDate=${startDate}, endDate=${endDate}`);
    try {
      const reportColumns = columns.length > 0 ? columns : [
        "date",
        "mtName",
        "mtStyle",
        "campaignName",
        "adGroupName",
        "impression",
        "click",
        "cost",
        "ctr",
        "cpc",
        "conversion",
      ];
      const data = await getReportData(client, {
        reportType: 1150477,
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
      console.error(`[baidu_advanced_style_report] 调用失败, error=${error}`);
      return JSON.stringify({ error: "获取高级样式报告失败", details: String(error) });
    }
  },
  {
    name: "baidu_advanced_style_report",
    description:
      "查询百度营销高级样式报告（新版API reportType=1150477）。按高级样式(mtName/mtStyle)维度查看效果数据。" +
      "核心属性: mtName(模板名称), mtStyle(模板样式), mcId(营销组件ID)。filters可筛选 mcId IN [30] 等。",
    schema: z.object(commonSchema),
  },
);

// ═══════════════════════════════════════════════════════════════
// 落地页报告 (5381679)
// ═══════════════════════════════════════════════════════════════

export const baiduLandingPageReport = tool(
  async ({ startDate, endDate, timeUnit, userIds, columns, sorts, filters, startRow, rowCount, needSum }) => {
    const client = getClient();
    console.log(`[baidu_landing_page_report] 调用开始, startDate=${startDate}, endDate=${endDate}`);
    try {
      const reportColumns = columns.length > 0 ? columns : [
        "date",
        "landingPageUrl",
        "campaignNameStatus",
        "adGroupNameStatus",
        "wInfoNameStatus",
        "queryWord",
        "click",
        "cost",
        "cpc",
        "ocpcConversionsDetail1",
        "ocpcConversionsDetail5",
        "ocpcConversionsDetail2",
      ];
      const data = await getReportData(client, {
        reportType: 5381679,
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
      console.error(`[baidu_landing_page_report] 调用失败, error=${error}`);
      return JSON.stringify({ error: "获取落地页报告失败", details: String(error) });
    }
  },
  {
    name: "baidu_landing_page_report",
    description:
      "查询百度营销落地页报告（新版API reportType=5381679）。按落地页URL维度查看点击、消费及转化数据。" +
      "核心属性: landingPageUrl(落地页), queryWord(搜索词), device(设备)。支持丰富的ocpcConversionsDetail*系列转化指标。" +
      "转化指标参考: Detail1=咨询, Detail2=电话, Detail5=表单, Detail35=微信等。",
    schema: z.object(commonSchema),
  },
);

// ═══════════════════════════════════════════════════════════════
// 搜索视频报告 (1025056)
// ═══════════════════════════════════════════════════════════════

export const baiduVideoReport = tool(
  async ({ startDate, endDate, timeUnit, userIds, columns, sorts, filters, startRow, rowCount, needSum }) => {
    const client = getClient();
    console.log(`[baidu_video_report] 调用开始, startDate=${startDate}, endDate=${endDate}`);
    try {
      const reportColumns = columns.length > 0 ? columns : [
        "date",
        "videoNameStatus",
        "videoInfo",
        "impression",
        "click",
        "cost",
        "ctr",
        "cpc",
        "conversion",
      ];
      const data = await getReportData(client, {
        reportType: 1025056,
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
      console.error(`[baidu_video_report] 调用失败, error=${error}`);
      return JSON.stringify({ error: "获取搜索视频报告失败", details: String(error) });
    }
  },
  {
    name: "baidu_video_report",
    description:
      "查询百度营销搜索视频报告（新版API reportType=1025056）。按视频素材维度查看展现、点击、消费等效果数据。",
    schema: z.object(commonSchema),
  },
);
