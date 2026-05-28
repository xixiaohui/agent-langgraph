import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { finnhubGet } from "./finnhub-client";

export const finnhubFinancialsTool = tool(
  async ({ symbol }) => {
    console.log(`[finnhub_financials] 调用开始, symbol=${symbol}`);
    try {
      const data = await finnhubGet("/stock/metric", { symbol, metric: "all" });

      if (!data.metric) {
        throw new Error("未获取到财务指标数据");
      }

      const m = data.metric;

      console.log(`[finnhub_financials] 调用成功, symbol=${symbol}`);

      return JSON.stringify({
        symbol,
        metrics: {
          // 估值指标
          pe: m.peBasicExclExtraTTM ?? m.peTTM ?? m.peExclExtraAnnual,
          pb: m.pbAnnual ?? m.pbQuarterly,
          ps: m.psTTM,
          peg: m.pegRatio,
          // 盈利能力
          eps: m.epsBasicExclExtraItemsTTM,
          grossMargin: m.grossMarginTTM ?? m.grossMarginAnnual,
          operatingMargin: m.operatingMarginTTM ?? m.operatingMarginAnnual,
          netMargin: m.netProfitMarginTTM ?? m.netProfitMarginAnnual,
          roe: m.roeTTM ?? m.roeAnnual,
          roa: m.roaTTM ?? m.roaAnnual,
          // 增长
          revenueGrowth: m.revenueGrowthTTMYoy ?? m.revenueGrowth3Y,
          epsGrowth: m.epsGrowthTTMYoy ?? m.epsGrowth3Y,
          // 估值范围
          week52High: m["52WeekHigh"],
          week52Low: m["52WeekLow"],
          week52HighDate: m["52WeekHighDate"],
          // 风险指标
          beta: m.beta,
          // 股息
          dividendYield: m.dividendYieldIndicatedAnnual ?? m.dividendYieldTTM,
          // 市值 & 成交量
          marketCap: m.marketCapitalization,
          enterpriseValue: m.enterpriseValue,
          avgVolume10Day: m["10DayAverageTradingVolume"],
          // 偿债能力
          currentRatio: m.currentRatioAnnual ?? m.currentRatioQuarterly,
          debtToEquity: m.totalDebtToEquityAnnual ?? m.totalDebtToEquityQuarterly,
          // 现金
          cashPerShare: m.cashPerSharePerShareTTM ?? m.cashPerSharePerShareAnnual,
          bookValue: m.bookValuePerShareAnnual ?? m.bookValuePerShareQuarterly,
        },
      });
    } catch (error) {
      console.error(`[finnhub_financials] 调用失败, symbol=${symbol}, error=${error}`);
      return JSON.stringify({ error: "获取财务指标失败", details: String(error) });
    }
  },
  {
    name: "finnhub_get_financials",
    description:
      "获取美股公司全面财务指标（Finnhub数据源）。包括估值(PE/PB/PS)、盈利能力(利润率/ROE/ROA)、增长率、Beta、股息率、52周高低点、市值等关键指标",
    schema: z.object({
      symbol: z.string().describe("美股股票代码（ticker symbol），如 AAPL、TSLA"),
    }),
  }
);

export const finnhubEarningsTool = tool(
  async ({ symbol, limit }) => {
    console.log(`[finnhub_earnings] 调用开始, symbol=${symbol}, limit=${limit}`);
    try {
      const params: Record<string, string> = { symbol };
      if (limit) params.limit = String(limit);

      const data = await finnhubGet("/stock/earnings", params);

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error("未获取到盈利数据");
      }

      console.log(`[finnhub_earnings] 调用成功, symbol=${symbol}, count=${data.length}`);

      const earnings = data.map((item: any) => ({
        period: item.period,
        quarter: item.quarter,
        year: item.year,
        actual: item.actual,
        estimate: item.estimate,
        surprise: item.surprise,
        surprisePercent: item.surprisePercent,
      }));

      return JSON.stringify({ symbol, earnings });
    } catch (error) {
      console.error(`[finnhub_earnings] 调用失败, symbol=${symbol}, error=${error}`);
      return JSON.stringify({ error: "获取盈利数据失败", details: String(error) });
    }
  },
  {
    name: "finnhub_get_earnings",
    description:
      "获取美股公司历史季度盈利惊喜数据（Finnhub数据源）。对比实际EPS与分析师预期，免费版返回最近4个季度",
    schema: z.object({
      symbol: z.string().describe("美股股票代码（ticker symbol），如 AAPL、TSLA"),
      limit: z.number().min(1).max(20).default(4).describe("返回季度数，默认4，最大20"),
    }),
  }
);
