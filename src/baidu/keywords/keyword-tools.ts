/* eslint-disable @typescript-eslint/no-explicit-any */
import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { getKeywordClient } from "./keyword-client.js";

const seedFilterSchema = z.object({
  device: z.number().default(0).describe("设备: 0=全部, 1=计算机, 2=移动"),
  maxNum: z.number().min(1).max(1000).default(300).describe("返回最大条数，按相关性排序"),
  negativeWords: z.array(z.string()).max(10).optional().describe("排除的关键词"),
  positiveWord: z.string().optional().describe("必须包含的关键词，仅允许单个"),
  searchRegions: z.array(z.number()).optional().describe("指定地域ID列表，默认全部地域"),
  regionExtend: z.boolean().default(false).describe("true=不推荐未选地域词"),
  removeDuplicate: z.boolean().default(false).describe("true=不推荐账户内已购词"),
  removeCampaignDuplicate: z.boolean().default(false).describe("true=不推荐计划内已购词"),
}).optional().describe("筛选条件。不传使用默认值");

// ═══════════════════════════════════════════════════════════════
// 获取账户主动推荐词 (getKRCustom)
// ═══════════════════════════════════════════════════════════════

export const baiduKeywordCustom = tool(
  async ({ idType, id, seedFilter }) => {
    const client = getKeywordClient();
    console.log(`[baidu_keyword_custom] 调用开始, idType=${idType}, id=${id ?? "null"}`);
    try {
      const params: Record<string, unknown> = { idType, seedFilter };
      if (id !== undefined) params.id = id;

      const res = await client.call<any, { data: unknown[] }>(
        "KRService", "getKRCustom", params,
      );

      console.log(`[baidu_keyword_custom] 调用成功, count=${res.body.data?.length ?? 0}`);
      return JSON.stringify(res.body, null, 2);
    } catch (error) {
      console.error(`[baidu_keyword_custom] 调用失败, error=${error}`);
      return JSON.stringify({ error: "获取账户主动推荐词失败", details: String(error) });
    }
  },
  {
    name: "baidu_keyword_custom",
    description:
      "百度关键词规划师-获取账户主动推荐词。根据计划或单元ID返回相关推荐关键词。" +
      "idType=3按计划推荐, idType=5按单元推荐, id传null时按账户推荐。" +
      "每个推荐词包含: 关键词字面、竞争度(1高/2中/3低)、月均搜索量(PV/pcPV/mobilePV)、" +
      "预估展现/点击、特色标签(行业激增词/黑马词等)、计算机/移动指导价。",
    schema: z.object({
      idType: z.number().describe("输入ID类型: 3=计划ID, 5=单元ID"),
      id: z.number().optional().describe("计划/单元ID。不传则按账户级别推荐"),
      seedFilter: seedFilterSchema,
    }),
  },
);

// ═══════════════════════════════════════════════════════════════
// 获取种子词条件下的推荐词 (getKRByQuery)
// ═══════════════════════════════════════════════════════════════

export const baiduKeywordByQuery = tool(
  async ({ query, seedFilter }) => {
    const client = getKeywordClient();
    console.log(`[baidu_keyword_by_query] 调用开始, query=${query}`);
    try {
      const res = await client.call<any, { data: unknown[] }>(
        "KRService", "getKRByQuery", { query, seedFilter },
      );

      console.log(`[baidu_keyword_by_query] 调用成功, count=${res.body.data?.length ?? 0}`);
      return JSON.stringify(res.body, null, 2);
    } catch (error) {
      console.error(`[baidu_keyword_by_query] 调用失败, error=${error}`);
      return JSON.stringify({ error: "获取种子词推荐词失败", details: String(error) });
    }
  },
  {
    name: "baidu_keyword_by_query",
    description:
      "百度关键词规划师-根据种子词获取推荐词。输入一个种子词，返回相关扩展关键词列表（单次只允许一个种子词）。" +
      "推荐词包含: 月均搜索量(PC/移动分设备)、竞争激烈程度、预估展现/点击、指导价等。" +
      "适用于以词拓词场景，例如输入'婚纱摄影'获取相关长尾词。",
    schema: z.object({
      query: z.string().max(64).describe("种子词，长度不超过64字节。例如'婚纱摄影'"),
      seedFilter: seedFilterSchema,
    }),
  },
);

// ═══════════════════════════════════════════════════════════════
// 查询关键词流量 (getPvSearch)
// ═══════════════════════════════════════════════════════════════

export const baiduKeywordPvSearch = tool(
  async ({ keywordList, device, orderBy, order }) => {
    const client = getKeywordClient();
    console.log(`[baidu_keyword_pv_search] 调用开始, count=${keywordList.length}`);
    try {
      const res = await client.call<any, {
        data: unknown[];
        actualWordList: string[];
        errorItems: unknown[];
        logid: string;
      }>(
        "PvSearchFunction", "getPvSearch", {
          bidWordSource: "wordList",
          device,
          orderBy,
          order,
          keywordList,
        },
      );

      console.log(`[baidu_keyword_pv_search] 调用成功, actualCount=${res.body.actualWordList?.length ?? 0}`);
      return JSON.stringify(res.body, null, 2);
    } catch (error) {
      console.error(`[baidu_keyword_pv_search] 调用失败, error=${error}`);
      return JSON.stringify({ error: "查询关键词流量失败", details: String(error) });
    }
  },
  {
    name: "baidu_keyword_pv_search",
    description:
      "百度关键词规划师-查询关键词流量。批量查询指定关键词的月均搜索量、指导价、预估展现/点击等数据，最多1000个词。" +
      "每个词需要指定: keywordName(关键词字面), matchType(匹配模式), phraseType(细分匹配模式)。" +
      "返回: averageMonthPv(月均搜索量/分设备), price(指导价/分设备), kwc(竞争度:1高/2中/3低), showReasons(举荐理由)。",
    schema: z.object({
      keywordList: z.array(z.object({
        keywordName: z.string().max(40).describe("关键词字面，如'奶茶'"),
        matchType: z.number().describe("匹配模式: 1配合phraseType=1为精确, 2配合phraseType=1为短语, 2配合phraseType=3为智能"),
        phraseType: z.number().describe("细分匹配模式: 1配合matchType=1精确, 1配合matchType=2短语, 3配合matchType=2智能"),
      })).min(1).max(1000).describe("关键词列表，最多1000个"),
      device: z.number().default(0).describe("设备: 0=全部, 1=仅移动, 2=仅计算机"),
      orderBy: z.enum(["price", "matchType", "averageMonthPv", "averageMonthPvMobile", "averageMonthPvPc", "show", "click", "pcPrice", "mobilePrice"]).default("price").describe("排序字段"),
      order: z.enum(["asc", "desc"]).default("desc").describe("排序规则"),
    }),
  },
);

// ═══════════════════════════════════════════════════════════════
// 根据种子词获取拓展词-异步 (getKRFileIdByWords)
// ═══════════════════════════════════════════════════════════════

export const baiduKeywordFileExpand = tool(
  async ({ seedWords, seedFilter }) => {
    const client = getKeywordClient();
    console.log(`[baidu_keyword_file_expand] 调用开始, seedWordCount=${seedWords.length}`);
    try {
      const res = await client.call<any, { data: Array<{ fileId: string }> }>(
        "KRService", "getKRFileIdByWords", { seedWords, seedFilter },
      );

      const fileId = res.body.data?.[0]?.fileId ?? "";
      console.log(`[baidu_keyword_file_expand] 调用成功, fileId=${fileId}`);
      return JSON.stringify({
        fileId,
        message: "异步任务已提交。请使用 baidu_get_file_status 查询任务状态，完成后用 baidu_download_file 下载结果文件。",
        hint: "Step2: baidu_get_file_status(fileId); Step3: baidu_download_file(fileId)",
        raw: res.body,
      }, null, 2);
    } catch (error) {
      console.error(`[baidu_keyword_file_expand] 调用失败, error=${error}`);
      return JSON.stringify({ error: "获取异步拓展词任务失败", details: String(error) });
    }
  },
  {
    name: "baidu_keyword_file_expand",
    description:
      "百度关键词规划师-根据种子词批量获取拓展词（异步）。最多支持1000个种子词，返回fileId用于后续查询状态和下载。" +
      "异步流程: Step1调用此工具获取fileId → Step2用baidu_get_file_status查状态 → Step3用baidu_download_file下载结果。" +
      "适用于大批量拓词场景。",
    schema: z.object({
      seedWords: z.array(z.string().max(64)).min(1).max(1000).describe("种子词列表，单个最大64字节，最多1000个。如['婚纱摄影','个人写真']"),
      seedFilter: seedFilterSchema,
    }),
  },
);
