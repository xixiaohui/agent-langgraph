import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { finnhubGet } from "./finnhub-client";

export const finnhubCompanyNewsTool = tool(
  async ({ symbol, days }) => {
    console.log(`[finnhub_company_news] 调用开始, symbol=${symbol}, days=${days}`);
    try {
      const now = new Date();
      const to = now.toISOString().slice(0, 10);
      const fromDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
      const from = fromDate.toISOString().slice(0, 10);

      const news = await finnhubGet("/company-news", { symbol, from, to });

      if (!Array.isArray(news)) {
        throw new Error("未获取到新闻数据");
      }

      console.log(`[finnhub_company_news] 调用成功, symbol=${symbol}, count=${news.length}`);

      const items = news.slice(0, 10).map((item: any) => ({
        headline: item.headline,
        summary: item.summary,
        source: item.source,
        url: item.url,
        datetime: new Date(item.datetime * 1000).toISOString(),
        category: item.category,
      }));

      return JSON.stringify({ symbol, count: items.length, news: items });
    } catch (error) {
      console.error(`[finnhub_company_news] 调用失败, symbol=${symbol}, error=${error}`);
      return JSON.stringify({ error: "获取公司新闻失败", details: String(error) });
    }
  },
  {
    name: "finnhub_company_news",
    description:
      "获取美股公司最新新闻（Finnhub数据源）。可指定天数范围，返回最近10条新闻标题、摘要、来源等。示例：AAPL, TSLA",
    schema: z.object({
      symbol: z.string().describe("美股股票代码（ticker symbol），如 AAPL、TSLA"),
      days: z.number().min(1).max(30).default(7).describe("获取最近多少天的新闻，默认7天，最大30天"),
    }),
  }
);

export const finnhubMarketNewsTool = tool(
  async ({ category, minId }) => {
    console.log(`[finnhub_market_news] 调用开始, category=${category}, minId=${minId}`);
    try {
      const params: Record<string, string> = { category };
      if (minId !== undefined && minId > 0) {
        params.minId = String(minId);
      }

      const news = await finnhubGet("/news", params);

      if (!Array.isArray(news)) {
        throw new Error("未获取到市场新闻");
      }

      console.log(`[finnhub_market_news] 调用成功, category=${category}, count=${news.length}`);

      const items = news.slice(0, 10).map((item: any) => ({
        id: item.id,
        headline: item.headline,
        summary: item.summary,
        source: item.source,
        url: item.url,
        datetime: new Date(item.datetime * 1000).toISOString(),
        related: item.related,
      }));

      return JSON.stringify({ category, count: items.length, news: items });
    } catch (error) {
      console.error(`[finnhub_market_news] 调用失败, category=${category}, error=${error}`);
      return JSON.stringify({ error: "获取市场新闻失败", details: String(error) });
    }
  },
  {
    name: "finnhub_market_news",
    description:
      "获取全球市场最新新闻（Finnhub数据源）。可按分类筛选：general=综合, forex=外汇, crypto=加密货币, merger=并购。返回最近10条",
    schema: z.object({
      category: z
        .enum(["general", "forex", "crypto", "merger"])
        .default("general")
        .describe("新闻分类：general=综合, forex=外汇, crypto=加密货币, merger=并购"),
      minId: z.number().optional().describe("新闻ID游标，传入上次返回的id可获取更早的新闻"),
    }),
  }
);
