import { finnhubStockPriceTool } from "./finnhub-stock-tool";
import { finnhubHistoryTool } from "./finnhub-history-tool";
import { finnhubCompanyTool } from "./finnhub-company-tool";
import { finnhubCompanyNewsTool, finnhubMarketNewsTool } from "./finnhub-news-tool";
import { finnhubFinancialsTool, finnhubEarningsTool } from "./finnhub-financials-tool";
import {
  finnhubRecommendationTool,
  finnhubPeersTool,
  finnhubSymbolSearchTool,
  finnhubMarketStatusTool,
} from "./finnhub-analysis-tool";

export const finnhubTools = [
  // 行情与K线
  finnhubStockPriceTool,
  finnhubHistoryTool,
  // 公司基本面
  finnhubCompanyTool,
  finnhubFinancialsTool,
  finnhubEarningsTool,
  // 新闻
  finnhubCompanyNewsTool,
  finnhubMarketNewsTool,
  // 分析与搜索
  finnhubRecommendationTool,
  finnhubPeersTool,
  finnhubSymbolSearchTool,
  finnhubMarketStatusTool,
];
