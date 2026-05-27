/**
 * Baidu Marketing API — Agent Tools
 *
 * Each tool wraps a Baidu API call so the AI agent can invoke it.
 * Add new tools here as you add more services/methods.
 */

import { tool } from "langchain";
import { z } from "zod";
import { BaiduClient } from "./client.js";

// ── Client factory ────────────────────────────────────

function getClient(): BaiduClient {
  const userName = process.env.BAIDU_USERNAME;
  const accessToken = process.env.BAIDU_ACCESS_TOKEN;
  if (!userName || !accessToken) {
    throw new Error(
      "Missing BAIDU_USERNAME or BAIDU_ACCESS_TOKEN environment variables",
    );
  }
  return new BaiduClient({
    baseUrl: "https://api.baidu.com",
    auth: { userName, accessToken },
  });
}

// ── AccountService tools ──────────────────────────────

const accountFieldSchema = z.enum([
  "userId",
  "balance",
  "pcBalance",
  "budget",
  "budgetType",
  "budgetOfflineTime",
  "cost",
  "excludeIp",
  "openDomains",
  "payment",
  "regDomain",
  "regionTarget",
  "userStat",
  "userLevel",
  "regionPriceFactor",
  "geoLocationStatus",
  "excludeQueryRegionStatus",
  "longMonitorSublink",
  "accountMonitorUrl",
  "cid",
  "liceName",
]);

export const baiduGetAccountInfo = tool(
  async ({ accountFields }) => {
    const client = getClient();
    const res = await client.call<
      { accountFields: string[] },
      { data: Array<Record<string, unknown>> }
    >("AccountService", "getAccountInfo", { accountFields });
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_account_info",
    description:
      "查询百度营销账户信息。可查询余额、预算、消耗、用户等级、推广地域等字段。" +
      "常用字段: userId(用户ID), balance(账户余额), budget(预算), cost(消耗), userStat(账户状态), userLevel(用户等级), payment(投资回报)。" +
      "不确定需要哪些字段时，可多选几个常用字段一并查询。",
    schema: z.object({
      accountFields: z
        .array(accountFieldSchema)
        .describe("需要查询的账户字段列表，例如 ['userId', 'balance', 'cost']"),
    }),
  },
);

// ── All Baidu tools ───────────────────────────────────

export const BAIDU_TOOLS = [baiduGetAccountInfo];
