import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { finnhubGet } from "./finnhub-client";

export const finnhubStockPriceTool = tool(
  async ({ symbol }) => {
    console.log(`[finnhub_get_stock_price] 调用开始, symbol=${symbol}`);
    try {
      const quote = await finnhubGet("/quote", { symbol });

      if (quote.c === undefined || quote.c === null) {
        throw new Error("未获取到有效的股票报价");
      }

      console.log(`[finnhub_get_stock_price] 调用成功, symbol=${symbol}, price=${quote.c}`);

      return JSON.stringify({
        symbol,
        price: quote.c,
        change: quote.d,
        changePercent: quote.dp,
        open: quote.o,
        high: quote.h,
        low: quote.l,
        previousClose: quote.pc,
      });
    } catch (error) {
      console.error(`[finnhub_get_stock_price] 调用失败, symbol=${symbol}, error=${error}`);
      return JSON.stringify({
        error: "获取股票数据失败",
        details: String(error),
      });
    }
  },
  {
    name: "finnhub_get_stock_price",
    description:
      "获取美股实时报价（Finnhub数据源）。输入股票代码即可查询最新价格、涨跌幅、开盘价、最高最低价等。示例：AAPL, TSLA, NVDA",

    schema: z.object({
      symbol: z.string().describe("美股股票代码（ticker symbol），如 AAPL、TSLA"),
    }),
  }
);
