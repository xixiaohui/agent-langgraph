import {
  baiduAccountReport,
  baiduCampaignReport,
  baiduAdgroupReport,
  baiduOcpcReport,
} from "./plan-reports";
import {
  baiduKeywordReport,
  baiduSearchTermReport,
} from "./targeting-reports";
import {
  baiduCreativeReport,
  baiduAdvancedStyleReport,
  baiduLandingPageReport,
  baiduVideoReport,
} from "./creative-reports";

export const baiduReportTools = [
  // 推广报告
  baiduAccountReport,
  baiduCampaignReport,
  baiduAdgroupReport,
  // 定向报告
  baiduKeywordReport,
  baiduSearchTermReport,
  // 创意与落地页报告
  baiduCreativeReport,
  baiduAdvancedStyleReport,
  baiduLandingPageReport,
  baiduVideoReport,
  // 专项报告
  baiduOcpcReport,
];
