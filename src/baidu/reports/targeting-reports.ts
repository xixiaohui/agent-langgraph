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
// 关键词报告 (2602783)
// ═══════════════════════════════════════════════════════════════

export const baiduKeywordReport = tool(
  async ({ startDate, endDate, timeUnit, userIds, columns, sorts, filters, startRow, rowCount, needSum }) => {
    const client = getClient();
    console.log(`[baidu_keyword_report] 调用开始, startDate=${startDate}, endDate=${endDate}`);
    try {
      const reportColumns = columns.length > 0 ? columns : [
        "date",
        "campaignNameStatus",
        "adGroupNameStatus",
        "wInfoNameStatus",
        "wInfoId",
        "bidNew",
        "qualityEnum",
        "impression",
        "click",
        "cost",
        "ctr",
        "cpc",
        "avgRank",
        "conversion",
        "bridgeConversion",
      ];
      const data = await getReportData(client, {
        reportType: 2602783,
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
      console.error(`[baidu_keyword_report] 调用失败, error=${error}`);
      return JSON.stringify({ error: "获取关键词报告失败", details: String(error) });
    }
  },
  {
    name: "baidu_keyword_report",
    description:
      "查询百度营销关键词报告（新版API reportType=2602783）。按关键词维度查看展现、点击、消费、CTR、CPC、平均排名等。" +
      "属性列含: wInfoNameStatus(关键词名称), bidNew(出价), qualityEnum(质量度1-9), estimatedClickRate(预估点击率), mixWmatchEnum(匹配模式)等。" +
      "质量度: 1-9分; 匹配模式: 0=智能, 16=智能-核心词, 17=短语, 48=精确, 127=分匹配出价",
    schema: z.object(commonSchema),
  },
);

// ═══════════════════════════════════════════════════════════════
// 搜索词报告 (1900005)
// ═══════════════════════════════════════════════════════════════

export const baiduSearchTermReport = tool(
  async ({ startDate, endDate, timeUnit, userIds, columns, sorts, filters, startRow, rowCount, needSum }) => {
    const client = getClient();
    console.log(`[baidu_search_term_report] 调用开始, startDate=${startDate}, endDate=${endDate}`);
    try {
      const reportColumns = columns.length > 0 ? columns : [
        "date",
        "queryWord",
        "campaignNameStatus",
        "adGroupNameStatus",
        "wInfoNameStatus",
        "impression",
        "click",
        "cost",
        "ctr",
        "cpc",
        "conversion",
      ];
      const data = await getReportData(client, {
        reportType: 1900005,
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
      console.error(`[baidu_search_term_report] 调用失败, error=${error}`);
      return JSON.stringify({ error: "获取搜索词报告失败", details: String(error) });
    }
  },
  {
    name: "baidu_search_term_report",
    description:
      "查询百度营销搜索词报告（新版API reportType=1900005）。查看用户实际搜索了哪些词触发了广告，含展现、点击、消费、CTR、CPC。" +
      "核心属性: queryWord(搜索词), wInfoNameStatus(匹配关键词), campaignNameStatus, adGroupNameStatus。",
    schema: z.object(commonSchema),
  },
);
