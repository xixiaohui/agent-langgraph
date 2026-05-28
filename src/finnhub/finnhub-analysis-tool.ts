import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { finnhubGet } from "./finnhub-client";

export const finnhubRecommendationTool = tool(
  async ({ symbol }) => {
    console.log(`[finnhub_recommendation] 调用开始, symbol=${symbol}`);
    try {
      const data = await finnhubGet("/stock/recommendation", { symbol });

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error("未获取到分析师评级数据");
      }

      console.log(`[finnhub_recommendation] 调用成功, symbol=${symbol}, periods=${data.length}`);

      const trends = data.map((item: any) => ({
        period: item.period,
        strongBuy: item.strongBuy,
        buy: item.buy,
        hold: item.hold,
        sell: item.sell,
        strongSell: item.strongSell,
      }));

      return JSON.stringify({ symbol, recommendationTrends: trends });
    } catch (error) {
      console.error(`[finnhub_recommendation] 调用失败, symbol=${symbol}, error=${error}`);
      return JSON.stringify({ error: "获取分析师评级失败", details: String(error) });
    }
  },
  {
    name: "finnhub_get_recommendation",
    description:
      "获取美股分析师评级趋势（Finnhub数据源）。返回各期强买/买入/持有/卖出/强卖的数量分布，用于判断市场情绪",
    schema: z.object({
      symbol: z.string().describe("美股股票代码（ticker symbol），如 AAPL、TSLA"),
    }),
  }
);

export const finnhubPeersTool = tool(
  async ({ symbol, grouping }) => {
    console.log(`[finnhub_peers] 调用开始, symbol=${symbol}, grouping=${grouping}`);
    try {
      const data = await finnhubGet("/stock/peers", { symbol, grouping });

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error("未获取到同行公司数据");
      }

      console.log(`[finnhub_peers] 调用成功, symbol=${symbol}, count=${data.length}`);

      return JSON.stringify({ symbol, grouping, peers: data });
    } catch (error) {
      console.error(`[finnhub_peers] 调用失败, symbol=${symbol}, error=${error}`);
      return JSON.stringify({ error: "获取同行公司失败", details: String(error) });
    }
  },
  {
    name: "finnhub_get_peers",
    description:
      "获取美股公司同行业竞争对手列表（Finnhub数据源）。返回同一国家/行业的可比公司股票代码列表",
    schema: z.object({
      symbol: z.string().describe("美股股票代码（ticker symbol），如 AAPL、TSLA"),
      grouping: z
        .enum(["sector", "industry", "subIndustry"])
        .default("subIndustry")
        .describe("分组粒度：sector=行业大类, industry=行业, subIndustry=子行业（默认）"),
    }),
  }
);

export const finnhubSymbolSearchTool = tool(
  async ({ query }) => {
    console.log(`[finnhub_symbol_search] 调用开始, query=${query}`);
    try {
      const data = await finnhubGet("/search", { q: query });

      if (!data.result || !Array.isArray(data.result)) {
        throw new Error("未找到匹配的股票");
      }

      console.log(`[finnhub_symbol_search] 调用成功, query=${query}, count=${data.count}`);

      const results = data.result.slice(0, 15).map((item: any) => ({
        symbol: item.symbol,
        displaySymbol: item.displaySymbol,
        description: item.description,
        type: item.type,
      }));

      return JSON.stringify({ query, count: data.count, results });
    } catch (error) {
      console.error(`[finnhub_symbol_search] 调用失败, query=${query}, error=${error}`);
      return JSON.stringify({ error: "搜索股票失败", details: String(error) });
    }
  },
  {
    name: "finnhub_symbol_search",
    description:
      "搜索美股/全球股票代码（Finnhub数据源）。可按公司名称、代码、ISIN等搜索匹配的股票。不确定代码时使用此工具查找",
    schema: z.object({
      query: z.string().describe("搜索关键词，可以是公司名称或股票代码，如 'Apple' 或 'AAPL'"),
    }),
  }
);

export const finnhubMarketStatusTool = tool(
  async ({ exchange }) => {
    console.log(`[finnhub_market_status] 调用开始, exchange=${exchange}`);
    try {
      const data = await finnhubGet("/stock/market-status", { exchange });

      console.log(`[finnhub_market_status] 调用成功, exchange=${exchange}, isOpen=${data.isOpen}`);

      return JSON.stringify({
        exchange: data.exchange,
        isOpen: data.isOpen,
        session: data.session,
        holiday: data.holiday,
        timezone: data.timezone,
        timestamp: data.t ? new Date(data.t * 1000).toISOString() : null,
      });
    } catch (error) {
      console.error(`[finnhub_market_status] 调用失败, exchange=${exchange}, error=${error}`);
      return JSON.stringify({ error: "获取市场状态失败", details: String(error) });
    }
  },
  {
    name: "finnhub_market_status",
    description:
      "查询全球交易所当前开/闭市状态（Finnhub数据源）。可查美股(US)、港股(HK)、A股(SH/SZ)等市场是否正在交易",
    schema: z.object({
      exchange: z
        .string()
        .default("US")
        .describe("交易所代码，如 US=美股, HK=港股, SH=上证, SZ=深证, JP=日股, LSE=伦敦"),
    }),
  }
);
