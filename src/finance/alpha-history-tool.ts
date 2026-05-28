/* eslint-disable @typescript-eslint/no-explicit-any */
import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { alphaVantage } from "./alpha-vantage-client";

const FUNCTION_MAP: Record<string, string> = {
  "1d": "TIME_SERIES_DAILY",
  "1wk": "TIME_SERIES_WEEKLY",
  "1mo": "TIME_SERIES_MONTHLY",
};

const KEY_MAP: Record<string, string> = {
  "1d": "Time Series (Daily)",
  "1wk": "Weekly Time Series",
  "1mo": "Monthly Time Series",
};

export const alphaHistoryTool = tool(
  async ({ symbol, period }) => {
    console.log(`[get_stock_history] 调用开始, symbol=${symbol}, period=${period}`);
    try {
      const fn = FUNCTION_MAP[period];
      const data = await alphaVantage({
        function: fn,
        symbol,
        outputsize: "compact",
      });

      const seriesKey = KEY_MAP[period];
      const series = data[seriesKey];
      if (!series) {
        throw new Error(`未获取到 ${seriesKey} 数据`);
      }

      const prices = Object.entries(series)
        .slice(0, 30)
        .map(([date, item]: [string, any]) => ({
          date,
          open: item["1. open"],
          high: item["2. high"],
          low: item["3. low"],
          close: item["4. close"],
          volume: item["5. volume"],
        }));

      console.log(`[get_stock_history] 调用成功, symbol=${symbol}, period=${period}, count=${prices.length}`);

      return JSON.stringify({
        symbol,
        interval: period,
        prices,
      });
    } catch (error) {
      console.error(`[get_stock_history] 调用失败, symbol=${symbol}, period=${period}, error=${error}`);
      return JSON.stringify({
        error: "获取历史数据失败",
        details: String(error),
      });
    }
  },
  {
    name: "get_stock_history",
    description:
      "获取股票历史OHLC价格数据及K线数据。可查询日线(1d)、周线(1wk)、月线(1mo)，返回最近30条记录",

    schema: z.object({
      symbol: z.string().describe("股票代码（ticker symbol），如 AAPL、TSLA"),
      period: z
        .enum(["1d", "1wk", "1mo"])
        .describe("K线周期：1d=日线, 1wk=周线, 1mo=月线"),
    }),
  }
);
