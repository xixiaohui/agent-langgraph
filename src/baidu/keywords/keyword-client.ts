import { BaiduClient } from "../client.js";

export function getKeywordClient(): BaiduClient {
  const userName = process.env.BAIDU_USERNAME;
  const accessToken = process.env.BAIDU_ACCESS_TOKEN;
  if (!userName || !accessToken) {
    throw new Error("Missing BAIDU_USERNAME or BAIDU_ACCESS_TOKEN environment variables");
  }
  return new BaiduClient({
    baseUrl: "https://api.baidu.com",
    auth: { userName, accessToken },
  });
}

/** 推荐词返回字段 */
export interface WordType {
  word: string;
  competition: number;
  PV: number;
  pcPV: number;
  mobilePV: number;
  showReasons: string[];
  show: number;
  click: number;
  competitionPc: number;
  competitionWise: number;
  groupName: string;
  recommendPricePc: number;
  recommendPriceMobile: number;
}
