import { alphaStockPriceTool } from "./alpha-stock-tool";
import { alphaHistoryTool } from "./alpha-history-tool";
import { alphaCompanyTool } from "./alpha-company-tool";

export const financeTools = [
  // Alpha Vantage 数据源
  alphaStockPriceTool,
  alphaHistoryTool,
  alphaCompanyTool,

];
