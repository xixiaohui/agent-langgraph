import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { finnhubGet } from "./finnhub-client";

const RESOLUTION_MAP: Record<string, string> = {
  "1d": "D",
  "1wk": "W",
  "1mo": "M",
};

export const finnhubHistoryTool = tool(
  async ({ symbol, period }) => {
    console.log(`[finnhub_get_stock_history] 调用开始, symbol=${symbol}, period=${period}`);
    try {
      const now = Math.floor(Date.now() / 1000);
      const oneYearAgo = now - 365 * 24 * 60 * 60;
      const resolution = RESOLUTION_MAP[period];

      const data = await finnhubGet("/stock/candle", {
        symbol,
        resolution,
        from: String(oneYearAgo),
        to: String(now),
      });

      if (data.s !== "ok") {
        throw new Error(data.s === "no_data" ? "无历史数据" : "获取历史数据失败");
      }

      const prices = data.t
        .map((ts: number, i: number) => ({
          date: new Date(ts * 1000).toISOString().slice(0, 10),
          open: data.o[i],
          high: data.h[i],
          low: data.l[i],
          close: data.c[i],
          volume: data.v[i],
        }))
        .slice(-30);

      console.log(`[finnhub_get_stock_history] 调用成功, symbol=${symbol}, period=${period}, count=${prices.length}`);

      return JSON.stringify({
        symbol,
        interval: period,
        prices,
      });
    } catch (error) {
      console.error(`[finnhub_get_stock_history] 调用失败, symbol=${symbol}, period=${period}, error=${error}`);
      return JSON.stringify({
        error: "获取历史数据失败",
        details: String(error),
      });
    }
  },
  {
    name: "finnhub_get_stock_history",
    description:
      "获取美股历史OHLC价格数据及K线数据（Finnhub数据源）。可查询日线(1d)、周线(1wk)、月线(1mo)，返回最近30条记录",

    schema: z.object({
      symbol: z.string().describe("美股股票代码（ticker symbol），如 AAPL、TSLA"),
      period: z
        .enum(["1d", "1wk", "1mo"])
        .describe("K线周期：1d=日线, 1wk=周线, 1mo=月线"),
    }),
  }
);
