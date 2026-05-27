export { BaiduClient } from "./client.js";
export type {
  BaiduAuth,
  BaiduClientConfig,
  BaiduRequest,
  BaiduResponse,
  BaiduResponseHeader,
} from "./types.js";

// Services
export * as AccountService from "./services/account.js";
export * as CampaignService from "./services/campaign.js";
export * as BusinessPointService from "./services/businessPoint.js";
export * as AdgroupService from "./services/adgroup.js";
export * as KeywordService from "./services/keyword.js";
export * as NegativeKeywordService from "./services/negativeKeyword.js";
export * as NegativeKeywordPacketService from "./services/negativeKeywordPacket.js";
export * as AutoExpansionService from "./services/autoExpansion.js";
export * as CrowdFunctionService from "./services/crowdFunction.js";
export * as CrowdService from "./services/crowd.js";
export * as CrowdBindService from "./services/crowdBind.js";
export * as CrowdAppInfoService from "./services/crowdAppInfo.js";
export * as CreativeService from "./services/creative.js";
export * as LeadAdsService from "./services/leadAds.js";
export * as AdgroupAppService from "./services/adgroupApp.js";
export * as DpaCreativeService from "./services/dpaCreative.js";
export * as DpaApiCreativeService from "./services/dpaApiCreative.js";
export * as AdvancedSegmentService from "./services/advancedSegment.js";
export * as AdvancedSegmentBindService from "./services/advancedSegmentBind.js";
export * as SolutionProviderService from "./services/solutionProvider.js";
export * as ImageManagementService from "./services/imageManagement.js";
export * as AppProcessService from "./services/appProcess.js";
export * as DanubeCreativeGroupService from "./services/danubeCreativeGroup.js";
export * as OcpcService from "./services/ocpc.js";
export * as FcOcpcService from "./services/fcOcpc.js";
export * as CampaignEstimatedService from "./services/campaignEstimated.js";
export * as PriceStrategyService from "./services/priceStrategy.js";
export * as FcTransTraceService from "./services/fcTransTrace.js";
export * as SearchService from "./services/search.js";
export * as BulkJobService from "./services/bulkJob.js";

// Agent tools
export {
  BAIDU_TOOLS,
  baiduGetAccountInfo,
  baiduUpdateAccountInfo,
  baiduGetCampaign,
  baiduDeleteCampaign,
  baiduUpdateCampaign,
  baiduAddCampaign,
  baiduGetBindBusinessPointList,
  baiduDeleteAdgroup,
  baiduUpdateAdgroup,
  baiduGetAdgroup,
  baiduAddAdgroup,
  baiduDeleteWord,
  baiduUpdateWord,
  baiduGetWord,
  baiduAddWord,
  baiduUpdateNegativeKeyword,
  baiduDeleteNegativeKeyword,
  baiduGetNegativeKeyword,
  baiduAddNegativeKeyword,
  baiduUpdateNegativeKeywordPacket,
  baiduDeleteNegativeKeywordPacket,
  baiduGetNegativeKeywordPacket,
  baiduGetNegativeKeywordPacketCount,
  baiduAddNegativeKeywordPacket,
  baiduGetAutoExpansion,
  baiduGetCrowdEstimate,
  baiduDeleteCrowd,
  baiduAddCrowd,
  baiduUpdateCrowd,
  baiduGetCrowd,
  baiduDeleteBind,
  baiduAddBind,
  baiduUpdateBind,
  baiduGetBind,
  baiduGetAppInfo,
  baiduDeleteCreative,
  baiduAddCreative,
  baiduUpdateCreative,
  baiduGetCreative,
  baiduUpdateStrategies,
  baiduDeleteStrategies,
  baiduGetStrategies,
  baiduGetMaterials,
  baiduAddStrategies,
  baiduDeleteAdgroupAppBind,
  baiduGetAdgroupAppBind,
  baiduAddAdgroupAppBind,
  baiduDeleteCreativeGroup,
  baiduDeleteCreatives,
  baiduAddCreatives,
  baiduUpdateCreativeGroup,
  baiduUpdateCreatives,
  baiduGetCreativeGroup,
  baiduGetCreatives,
  baiduAddCreativeGroup,
  baiduGetFormatTemplates,
  baiduBatSetRange,
  baiduDeleteDpaCreative,
  baiduAddDpaCreative,
  baiduUpdateDpaCreative,
  baiduGetDpaCreative,
  baiduDeleteSegment,
  baiduUpdateSegment,
  baiduGetSegment,
  baiduAddSegment,
  baiduDeleteSegmentBind,
  baiduUpdateSegmentBind,
  baiduGetSegmentBind,
  baiduAddSegmentBind,
  baiduGetNewConsult,
  baiduGetPhone,
  baiduUploadImage,
  baiduGetAppList,
  baiduDeleteDanubeCreativeGroup,
  baiduCopyDanubeCreativeGroup,
  baiduAddDanubeCreativeGroup,
  baiduUpdateDanubeCreativeGroup,
  baiduGetDanubeCreativeGroup,
  baiduDeleteTargetPackage,
  baiduAddTargetPackage,
  baiduUpdateTargetPackage,
  baiduGetTargetPackageList,
  baiduGetSuggestCPAs,
  baiduGetProjectBidReference,
  baiduDeletePriceStrategy,
  baiduUpdatePriceStrategy,
  baiduGetPriceStrategy,
  baiduAddPriceStrategy,
  baiduGetFcTransTraceList,
  baiduAddFcTransTrace,
  baiduUpdateFcTransTrace,
  baiduDeleteFcTransTrace,
  baiduGetIdsByTabs,
  baiduGetMaterialInfoBySearch,
  baiduGetKeywordIdBySearch,
  baiduGetCreativeIdBySearch,
  baiduGetCountById,
  baiduGetAllObjects,
  baiduGetAllChangedObjects,
  baiduGetFileStatus,
  baiduGetFilePath,
  baiduCancelDownload,
  baiduGetChangedIds,
  baiduGetChangedScale,
} from "./tools.js";
