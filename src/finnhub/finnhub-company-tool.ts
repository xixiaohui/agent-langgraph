import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { finnhubGet } from "./finnhub-client";

export const finnhubCompanyTool = tool(
  async ({ symbol }) => {
    console.log(`[finnhub_get_company_info] 调用开始, symbol=${symbol}`);
    try {
      const profile = await finnhubGet("/stock/profile2", { symbol });

      if (!profile.ticker) {
        throw new Error("未找到该公司信息");
      }

      console.log(`[finnhub_get_company_info] 调用成功, symbol=${symbol}, name=${profile.name}`);

      return JSON.stringify({
        symbol: profile.ticker,
        company: profile.name,
        country: profile.country,
        currency: profile.currency,
        exchange: profile.exchange,
        industry: profile.finnhubIndustry,
        ipo: profile.ipo,
        marketCap: profile.marketCapitalization,
        shareOutstanding: profile.shareOutstanding,
        website: profile.weburl,
        logo: profile.logo,
      });
    } catch (error) {
      console.error(`[finnhub_get_company_info] 调用失败, symbol=${symbol}, error=${error}`);
      return JSON.stringify({
        error: "获取公司信息失败",
        details: String(error),
      });
    }
  },
  {
    name: "finnhub_get_company_info",
    description:
      "获取美股公司基本信息（Finnhub数据源）。查询公司的行业分类、市值、上市日期、官网等概况数据",

    schema: z.object({
      symbol: z.string().describe("美股股票代码（ticker symbol），如 AAPL、TSLA"),
    }),
  }
);
