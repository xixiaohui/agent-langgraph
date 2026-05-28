import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { alphaVantage } from "./alpha-vantage-client";

export const alphaCompanyTool = tool(
  async ({ symbol }) => {
    console.log(`[get_company_info] 调用开始, symbol=${symbol}`);
    try {
      const data = await alphaVantage({
        function: "OVERVIEW",
        symbol,
      });

      console.log(`[get_company_info] 调用成功, symbol=${symbol}`);

      return JSON.stringify({
        symbol: data.Symbol,
        company: data.Name,
        sector: data.Sector,
        industry: data.Industry,
        description: data.Description,
        exchange: data.Exchange,
        currency: data.Currency,
        country: data.Country,
        marketCap: data.MarketCapitalization,
        pe: data.PERatio,
        beta: data.Beta,
        employees: data.FullTimeEmployees,
        website: data.Address,
        dividendYield: data.DividendYield,
        week52High: data["52WeekHigh"],
        week52Low: data["52WeekLow"],
        movingAvg50: data["50DayMovingAverage"],
        movingAvg200: data["200DayMovingAverage"],
      });
    } catch (error) {
      console.error(`[get_company_info] 调用失败, symbol=${symbol}, error=${error}`);
      return JSON.stringify({
        error: "获取公司信息失败",
        details: String(error),
      });
    }
  },
  {
    name: "get_company_info",
    description:
      "获取公司概况信息。查询公司的行业板块、估值指标（市盈率、Beta）、员工规模、业务描述等基本面数据",

    schema: z.object({
      symbol: z.string().describe("股票代码（ticker symbol），如 AAPL、TSLA"),
    }),
  }
);
