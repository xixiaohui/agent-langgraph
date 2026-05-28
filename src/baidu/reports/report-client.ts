import { BaiduClient } from "../client.js";

interface ReportRequest {
  reportType: number;
  startDate: string;
  endDate: string;
  timeUnit: "HOUR" | "DAY" | "WEEK" | "MONTH" | "SUMMARY";
  columns: string[];
  userIds?: number[];
  sorts?: { column: string; sortRule: "ASC" | "DESC" }[];
  filters?: { column: string; operator: string; values: string[] }[];
  startRow?: number;
  rowCount?: number;
  needSum?: boolean;
}

interface ReportResponse {
  rows: Array<Record<string, string>>;
  summary?: Record<string, string>;
  rowCount: number;
  totalRowCount: number;
}

export async function getReportData(client: BaiduClient, params: ReportRequest): Promise<ReportResponse> {
  console.log(`[baidu_report] 调用开始, reportType=${params.reportType}, timeUnit=${params.timeUnit}, startDate=${params.startDate}, endDate=${params.endDate}`);

  const res = await client.call<ReportRequest, ReportResponse>(
    "OpenApiReportService",
    "getReportData",
    params,
  );

  console.log(`[baidu_report] 调用成功, reportType=${params.reportType}, rowCount=${res.body.rowCount}, total=${res.body.totalRowCount}`);
  return res.body;
}

/**
 * 常用的效果指标列（不含转化），适用于大多数报告
 */
export const COMMON_PERFORMANCE_COLUMNS = [
  "impression",
  "click",
  "cost",
  "ctr",
  "cpc",
];

/**
 * 常用的转化指标列
 */
export const COMMON_CONVERSION_COLUMNS = [
  "conversion",
  "bridgeConversion",
];

/**
 * 常用的属性列（不同报告层级不同，这里放共享的）
 */
export const COMMON_DATE_COLUMNS = ["date"];
