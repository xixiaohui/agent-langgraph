import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { alphaVantage } from "./alpha-vantage-client";

export const alphaStockPriceTool = tool(
  async ({ symbol }) => {
    console.log(`[get_stock_price] 调用开始, symbol=${symbol}`);
    try {
      const data = await alphaVantage({
        function: "GLOBAL_QUOTE",
        symbol,
      });

      const quote = data["Global Quote"];
      if (!quote || !quote["05. price"]) {
        throw new Error("未获取到有效的股票报价");
      }

      console.log(`[get_stock_price] 调用成功, symbol=${symbol}, price=${quote["05. price"]}`);

      return JSON.stringify({
        symbol: quote["01. symbol"],
        price: quote["05. price"],
        change: quote["09. change"],
        changePercent: quote["10. change percent"],
        open: quote["02. open"],
        high: quote["03. high"],
        low: quote["04. low"],
        volume: quote["06. volume"],
        previousClose: quote["08. previous close"],
        latestTradingDay: quote["07. latest trading day"],
      });
    } catch (error) {
      console.error(`[get_stock_price] 调用失败, symbol=${symbol}, error=${error}`);
      return JSON.stringify({
        error: "获取股票数据失败",
        details: String(error),
      });
    }
  },
  {
    name: "get_stock_price",
    description:
      "获取股票实时价格信息。输入股票代码即可查询最新价格、涨跌幅、成交量等数据。示例：AAPL, TSLA, NVDA",

    schema: z.object({
      symbol: z.string().describe("股票代码（ticker symbol），如 AAPL、TSLA"),
    }),
  }
);
