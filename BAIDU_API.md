# 百度营销搜索广告投放 API 参考

> 来源: https://dev2.baidu.com/content?sceneType=0&pageId=100305&nodeId=21&subhead=
> 抓取日期: 2026-05-22
> 基础 URL: `https://api.baidu.com/json/sms/service/`

## 目录

1. [账户](#1-账户)
2. [计划](#2-计划)
3. [单元](#3-单元)
4. [关键词](#4-关键词)
5. [否定关键词2.0](#5-否定关键词20小流量)
6. [自动扩量](#6-自动扩量)
7. [人群定向](#7-人群定向)
8. [创意](#8-创意)
9. [创意组件](#9-创意组件)
10. [高级样式](#10-高级样式)
11. [oCPC投放管理](#11-ocpc投放管理)
12. [优化排名出价策略](#12-优化排名出价策略)
13. [转化追踪](#13-转化追踪)
14. [物料查询服务](#14-物料查询服务)
15. [批量和增量服务](#15-批量和增量服务)

---

## 1. 账户

账户服务，用于查询/更新账户所有属性，包括：账户余额、预算、地域、注册域名等。

| API名称 | 接口地址 | 说明 |
|---------|---------|------|
| 查询账户 | `/json/sms/service/AccountService/getAccountInfo` | 获取username对应的账户信息；如果是来自MCC Token的请求，则返回target对应的账户信息 |
| 更新账户 | `/json/sms/service/AccountService/updateAccountInfo` | 更新username对应的账户信息，如果是来自MCC Token的请求，则更新target对应的账户信息 |

## 2. 计划

用于计划层级物料管理——新增/删除/修改/查询计划，属性包括：计划名称、计划预算、计划状态、计划地域、否定关键词、计划投放设备等。

| API名称 | 接口地址 | 说明 |
|---------|---------|------|
| 查询计划 | `/json/sms/service/CampaignService/getCampaign` | 根据指定的计划ID获取推广计划(ID可批量) |
| 添加计划 | `/json/sms/service/CampaignService/addCampaign` | 新增推广计划，新增时可设置计划的属性设置 |
| 更新计划 | `/json/sms/service/CampaignService/updateCampaign` | 根据指定的计划ID更新推广计划的属性 |
| 删除计划 | `/json/sms/service/CampaignService/deleteCampaign` | 删除推广计划 |
| 查询计划已使用的推广业务 | `/json/sms/service/BusinessPointService/getBindBusinessPointList` | 查询计划已使用的推广业务 |

## 3. 单元

用于单元层级物料管理，新增/删除/修改/查询单元，属性包括：单元名称、单元出价、单元否定关键词、单元计算机/移动出价比例、图片素材配图开关等。

| API名称 | 接口地址 | 说明 |
|---------|---------|------|
| 查询单元 | `/json/sms/service/AdgroupService/getAdgroup` | 查询推广单元 |
| 添加单元 | `/json/sms/service/AdgroupService/addAdgroup` | 新增推广单元 |
| 更新单元 | `/json/sms/service/AdgroupService/updateAdgroup` | 更新推广单元 |
| 删除单元 | `/json/sms/service/AdgroupService/deleteAdgroup` | 删除推广单元 |

## 4. 关键词

用于关键词层级物料管理，新增/删除/修改/查询关键词，属性包括：关键词出价、访问url、小程序url、匹配方式、关键词状态、关键词标签、关键词指导价等。

| API名称 | 接口地址 | 说明 |
|---------|---------|------|
| 查询关键词 | `/json/sms/service/KeywordService/getWord` | 根据指定的单元ID、关键词ID获取关键词信息 |
| 添加关键词 | `/json/sms/service/KeywordService/addWord` | 新增关键词及商品目录模板词（可批量），一次请求最多新建10000个关键词 |
| 更新关键词 | `/json/sms/service/KeywordService/updateWord` | 更新关键词及商品目录模板词（可批量） |
| 删除关键词 | `/json/sms/service/KeywordService/deleteWord` | 删除指定的关键词及商品目录模板词（可批量） |

## 5. 否定关键词2.0（小流量）

| API名称 | 接口地址 | 说明 |
|---------|---------|------|
| 查询否定关键词 | `/json/sms/service/NegativeKeywordService/getNegativeKeyword` | 查询否定关键词，支持按照账户、计划、单元、否定关键词层级查询 |
| 添加否定关键词 | `/json/sms/service/NegativeKeywordService/addNegativeKeyword` | 添加否定关键词，支持添加计划/单元层级否定关键词、添加计划-否词包绑定等 |
| 修改否定关键词 | `/json/sms/service/NegativeKeywordService/updateNegativeKeyword` | 修改否定关键词，支持修改否定关键词的匹配模式 |
| 删除否定关键词 | `/json/sms/service/NegativeKeywordService/deleteNegativeKeyword` | 删除否定关键词，支持删除计划/单元层级否定关键词、删除计划-否词包绑定 |
| 查询否定关键词包 | `/json/sms/service/NegativeKeywordPacketService/getNegativeKeywordPacket` | 查询否词包 |
| 添加否定关键词包 | `/json/sms/service/NegativeKeywordPacketService/addNegativeKeywordPacket` | 添加否词包 |
| 更新否定关键词包 | `/json/sms/service/NegativeKeywordPacketService/updateNegativeKeywordPacket` | 更新否词包 |
| 删除否定关键词包 | `/json/sms/service/NegativeKeywordPacketService/deleteNegativeKeywordPacket` | 删除否词包 |
| 查询否定关键词包数量 | `/json/sms/service/NegativeKeywordPacketService/getNegativeKeywordPacketCount` | 查询否词包数量 |

## 6. 自动扩量

| API名称 | 接口地址 | 说明 |
|---------|---------|------|
| 查询自动扩量物料 | `/json/sms/service/AutoExpansionService/getAutoExpansion` | 获取自动扩量物料列表，支持按照计划id、自动扩量id等条件查询 |

## 7. 人群定向

用于人群的新建管理和绑定投放等。

| API名称 | 接口地址 | 说明 |
|---------|---------|------|
| 查询人群 | `/json/sms/service/CrowdService/getCrowd` | 查询人群信息（一次最多查询1000个人群） |
| 新增人群 | `/json/sms/service/CrowdService/addCrowd` | 新增人群，支持一次新增多个人群，每个账户下最多支持1000个人群（一次最多新增1000个） |
| 更新人群 | `/json/sms/service/CrowdService/updateCrowd` | 修改人群，批量修改人群属性设置（一次最大支持1000个） |
| 删除人群 | `/json/sms/service/CrowdService/deleteCrowd` | 删除人群，支持一次删除多个人群（一次最多1000） |
| 查询人群绑定 | `/json/sms/service/CrowdBindService/getBind` | 获取人群绑定列表，通过不同层级获取人群绑定列表，一次最多查询到10000条绑定 |
| 添加人群绑定 | `/json/sms/service/CrowdBindService/addBind` | 新增人群绑定（可批量），一个人群最多绑定300个计划，1000个创意。一次请求最多添加10000条绑定 |
| 更新人群绑定 | `/json/sms/service/CrowdBindService/updateBind` | 修改人群绑定（可批量），一次请求最多修改10000条绑定 |
| 删除人群绑定 | `/json/sms/service/CrowdBindService/deleteBind` | 删除人群绑定（可批量），一次最多删除10000条绑定 |
| 查询APP信息 | `/json/sms/service/CrowdAppInfoService/getAppInfo` | 查询App信息 |
| 人群覆盖预估 | `/json/sms/service/CrowdFunction/getCrowdEstimate` | 人群覆盖预估 |

## 8. 创意

用于创意层级物料管理，包括新增/删除/修改/查询创意，创意图片素材的绑定管理等。

| API名称 | 接口地址 | 说明 |
|---------|---------|------|
| 查询基础创意 | `/json/sms/service/CreativeService/getCreative` | 查询推广创意 |
| 添加基础创意 | `/json/sms/service/CreativeService/addCreative` | 新增推广创意 |
| 更新基础创意 | `/json/sms/service/CreativeService/updateCreative` | 修改推广创意 |
| 删除基础创意 | `/json/sms/service/CreativeService/deleteCreative` | 删除推广创意 |
| 查询图片素材 | `/json/sms/service/ImageSegmentService/getImageSegment` | 图片素材查询 |
| 添加图片素材 | `/json/sms/service/ImageSegmentService/addImageSegment` | 图片素材添加 |
| 更新图片素材 | `/json/sms/service/ImageSegmentService/updateImageSegment` | 图片素材更新 |
| 删除图片素材 | `/json/sms/service/ImageSegmentService/deleteImageSegment` | 删除素材信息。如果将已绑定的素材进行删除，则该素材与单元的绑定关系一同删除 |
| 查询图片素材绑定 | `/json/sms/service/AdgroupImageSegmentBindService/getAdgroupImageSegmentBind` | 通过单元id查询单元下绑定的素材图片信息 |
| 添加图片素材绑定 | `/json/sms/service/AdgroupImageSegmentBindService/addAdgroupImageSegmentBind` | 添加单元和素材绑定 |
| 删除图片素材绑定 | `/json/sms/service/AdgroupImageSegmentBindService/deleteAdgroupImageSegmentBind` | 素材和单元解绑 |

## 9. 创意组件

用于高级创意组件、商品创意和APP绑定投放管理等。

| API名称 | 接口地址 | 说明 |
|---------|---------|------|
| 查询组件 | `/json/sms/service/AdvancedSegmentService/getSegment` | 根据指定的查询层级，获取组件物料列表 |
| 添加组件 | `/json/sms/service/AdvancedSegmentService/addSegment` | 新增组件（可批量），图片URL必须通过图片上传接口转为百度格式的图片链接才能投放 |
| 更新组件 | `/json/sms/service/AdvancedSegmentService/updateSegment` | 更新组件（可批量） |
| 删除组件 | `/json/sms/service/AdvancedSegmentService/deleteSegment` | 删除指定的物料（可批量） |
| 组件图片上传 | `/json/sms/service/ImageManagementService/uploadImage` | 通过输入原图base64形式的内容上传图片，转为百度格式的图片链接 |
| 查询组件绑定 | `/json/sms/service/AdvancedSegmentBindService/getSegmentBind` | 根据指定的层级，获取物料绑定信息 |
| 添加组件绑定 | `/json/sms/service/AdvancedSegmentBindService/addSegmentBind` | 新增绑定关系（可批量），仅适用于绑定到单元层级 |
| 更新组件绑定 | `/json/sms/service/AdvancedSegmentBindService/updateSegmentBind` | 更新物料绑定状态（可批量），仅支持绑定关系状态修改 |
| 删除组件绑定 | `/json/sms/service/AdvancedSegmentBindService/deleteSegmentBind` | 删除指定的物料绑定（可批量） |
| 查询电话方案 | `/json/sms/service/SolutionProviderService/getPhone` | 查询客户在营销通中的所有有效的电话方案 |
| 查询咨询方案 | `/json/sms/service/SolutionProviderService/getNewConsult` | 查询客户在营销通中的所有咨询方案 |
| 查询营销类组件方案 | `/json/sms/service/LeadAdsService/getStrategies` | 查询推广方案 |
| 添加营销类组件方案 | `/json/sms/service/LeadAdsService/addStrategies` | 添加营销类组件方案 |
| 修改营销类组件方案 | `/json/sms/service/LeadAdsService/updateStrategies` | 修改营销类组件方案 |
| 删除营销类组件方案 | `/json/sms/service/LeadAdsService/deleteStrategies` | 删除营销类组件方案 |
| 查询营销类组件物料 | `/json/sms/service/LeadAdsService/getMaterials` | 查询物料 |
| 获取样式模板(商品) | `/json/sms/service/DpaApiCreativeService/getDpaMaterialTypes` | 根据商品单元ID查询样式模板列表 |
| 查询商品计划高级创意 | `/json/sms/service/DpaApiCreativeService/getDpaCreative` | 根据商品单元ID查询创意列表 |
| 新增商品计划高级创意 | `/json/sms/service/DpaApiCreativeService/addDpaCreative` | 新增商品计划高级创意，每个单元下每种样式只能新增一个 |
| 更新商品计划高级创意 | `/json/sms/service/DpaApiCreativeService/updateDpaCreative` | 为多个单元批量更新创意 |
| 删除商品计划高级创意 | `/json/sms/service/DpaApiCreativeService/deleteDpaCreative` | 根据商品单元ID或创意ID删除商品单元中的创意 |
| 查询创意组 | `/json/sms/service/DpaCreativeService/getCreativeGroup` | 根据创意组ID查询创意组 |
| 添加创意组 | `/json/sms/service/DpaCreativeService/addCreativeGroup` | 新增创意组，每个账户下最多支持1000个创意组 |
| 更新创意组 | `/json/sms/service/DpaCreativeService/updateCreativeGroup` | 更新创意组 |
| 删除创意组 | `/json/sms/service/DpaCreativeService/deleteCreativeGroup` | 根据创意组ID删除创意组，会同时删除创意组下的创意等从属信息 |
| 查询创意组物料 | `/json/sms/service/DpaCreativeService/getCreatives` | 获取创意列表 |
| 新增创意组物料 | `/json/sms/service/DpaCreativeService/addCreatives` | 新增创意 |
| 更新创意组物料 | `/json/sms/service/DpaCreativeService/updateCreatives` | 更新创意 |
| 删除创意组物料 | `/json/sms/service/DpaCreativeService/deleteCreatives` | 根据创意组ID和样式ID删除创意组下的样式 |
| 设置绑定 | `/json/sms/service/DpaCreativeService/batSetRange` | 批量设置创意组投放范围，暂不支持跨账户 |
| 获取样式模板(商品组) | `/json/sms/service/DpaCreativeService/getFormatTemplates` | 根据商品组ID获取样式模板 |
| 获取APP素材 | `/json/sms/service/AppProcessService/getAppList` | 获取可投放的APP信息 |
| 查询APP绑定 | `/json/sms/service/AdgroupAppService/getAdgroupAppBind` | 根据查询或筛选条件获取app绑定关系详情 |
| 添加APP绑定 | `/json/sms/service/AdgroupAppService/addAdgroupAppBind` | 新增（更新）单元与APP的绑定，如果单元已有绑定同类型APP会自动更新 |
| 删除APP绑定 | `/json/sms/service/AdgroupAppService/deleteAdgroupAppBind` | 删除指定的App绑定（可批量） |

## 10. 高级样式

用于高级样式（Danube）创意组管理。

| API名称 | 接口地址 | 说明 |
|---------|---------|------|
| 获取高级样式所需常量 | `/json/sms/service/DanubeCreativeGroupService/getDanubeConstants` | 获取高级样式所需常量 |
| 查询创意组 | `/json/sms/service/DanubeCreativeGroupService/getDanubeCreativeGroup` | 查询创意组 |
| 新建创意组 | `/json/sms/service/DanubeCreativeGroupService/addDanubeCreativeGroup` | 新建创意组 |
| 更新创意组 | `/json/sms/service/DanubeCreativeGroupService/updateDanubeCreativeGroup` | 修改创意组 |
| 删除创意组 | `/json/sms/service/DanubeCreativeGroupService/deleteDanubeCreativeGroup` | 删除创意组 |
| 复制创意组 | `/json/sms/service/DanubeCreativeGroupService/copyDanubeCreativeGroup` | 复制创意组 |

## 11. oCPC投放管理

用于进行oCPC投放包的管理和绑定投放等。

| API名称 | 接口地址 | 说明 |
|---------|---------|------|
| 查询oCPC出价策略 | `/json/sms/service/OcpcService/getTargetPackageList` | 获取oCPC出价策略列表 |
| 新增oCPC出价策略 | `/json/sms/service/OcpcService/addTargetPackage` | 添加oCPC出价策略 |
| 更新oCPC出价策略 | `/json/sms/service/OcpcService/updateTargetPackage` | 编辑oCPC出价策略 |
| 删除oCPC出价策略 | `/json/sms/service/OcpcService/deleteTargetPackage` | 根据oCPC出价策略ID删除oCPC出价策略 |
| 获取目标转化建议出价 | `/json/sms/service/FcOcpcService/getSuggestCPAs` | 获取建议CPA，包括行业CPA推荐值、历史生效范围CPA推荐值、ecpc建议最高出价系数 |
| 获取目标转化建议出价和胜出率 | `/json/sms/service/CampaignEstimatedService/getProjectBidReference` | 获取项目建议目标转化出价和胜出率，支持10个行业 |

## 12. 优化排名出价策略

为客户提供出价策略的API对接能力，帮助客户系统化调整和应用出价策略。

| API名称 | 接口地址 | 说明 |
|---------|---------|------|
| 查询优化排名出价策略 | `/json/sms/service/PriceStrategyService/getPriceStrategy` | 查询出价策略 |
| 添加优化排名出价策略 | `/json/sms/service/PriceStrategyService/addPriceStrategy` | 新增出价策略 |
| 更新优化排名出价策略 | `/json/sms/service/PriceStrategyService/updatePriceStrategy` | 更新出价策略 |
| 删除优化排名出价策略 | `/json/sms/service/PriceStrategyService/deletePriceStrategy` | 删除出价策略 |

## 13. 转化追踪

| API名称 | 接口地址 | 说明 |
|---------|---------|------|
| 查询转化追踪 | `/json/sms/service/FcTransTraceApiService/getFcTransTraceList` | 查询转化追踪 |
| 新建转化追踪 | `/json/sms/service/FcTransTraceApiService/addFcTransTrace` | 新增转化追踪 |
| 更新转化追踪 | `/json/sms/service/FcTransTraceApiService/updateFcTransTrace` | 修改转化追踪 |
| 删除转化追踪 | `/json/sms/service/FcTransTraceApiService/deleteFcTransTrace` | 删除转化追踪 |

## 14. 物料查询服务

综合查询服务，包括关键词、标签和创意的搜索。

| API名称 | 接口地址 | 说明 |
|---------|---------|------|
| 按标签查询物料id | `/json/sms/service/SearchService/getIdsByTabs` | 筛选特定标签下的关键词/创意ID，返回结果为关键词/创意ID |
| 条件查询物料信息 | `/json/sms/service/SearchService/getMaterialInfoBySearch` | 提供一个待搜索的字面，可以查询到包含该字面的计划、单元、关键词等信息 |
| 条件查询关键词id | `/json/sms/service/SearchService/getKeywordIdBySearch` | 根据PC质量度、移动质量度、关键词状态进行多条件筛选，支持分页（每页最多10000条） |
| 条件查询创意id | `/json/sms/service/SearchService/getCreativeIdBySearch` | 根据审核状态筛选出符合结果的创意id |
| 按id返回物料数量 | `/json/sms/service/SearchService/getCountById` | 提供一个待搜索的id序列，返回对应状态的单元/关键词数量，id数量不超过1000 |

## 15. 批量和增量服务

适用于批量下载获取物料信息，使用此服务可以将大批量请求安排为异步批量请求，并可以获取文件状态、结果等信息。

| API名称 | 接口地址 | 说明 |
|---------|---------|------|
| 整账户下载 | `/json/sms/service/BulkJobService/getAllObjects` | 获取指定账户下的完整数据（计划、单元、关键词、创意、素材） |
| 增量下载 | `/json/sms/service/BulkJobService/getAllChangedObjects` | 获取完整账户下或指定计划ID下的有变化的物料信息（异步接口） |
| 查询文件状态 | `/json/sms/service/BulkJobService/getFileStatus` | 查询请求的文件是否已生成 |
| 获取文件下载地址 | `/json/sms/service/BulkJobService/getFilePath` | 返回请求的文件下载地址 |
| 取消下载 | `/json/sms/service/BulkJobService/cancelDownload` | 取消一个下载任务 |
| 获取有变化物料id | `/json/sms/service/BulkJobService/getChangedItemId` | 获取从指定时间到当前时间段内有变化的物料id，默认限制不超过两万条 |
| 获取物料变化规模 | `/json/sms/service/BulkJobService/getChangedScale` | 获取完整账户或指定计划下的变化物料规模 |

---

## 服务速查表

| 服务 | 路径前缀 |
|------|---------|
| AccountService | `/json/sms/service/AccountService/` |
| CampaignService | `/json/sms/service/CampaignService/` |
| BusinessPointService | `/json/sms/service/BusinessPointService/` |
| AdgroupService | `/json/sms/service/AdgroupService/` |
| KeywordService | `/json/sms/service/KeywordService/` |
| NegativeKeywordService | `/json/sms/service/NegativeKeywordService/` |
| NegativeKeywordPacketService | `/json/sms/service/NegativeKeywordPacketService/` |
| AutoExpansionService | `/json/sms/service/AutoExpansionService/` |
| CrowdService | `/json/sms/service/CrowdService/` |
| CrowdBindService | `/json/sms/service/CrowdBindService/` |
| CrowdAppInfoService | `/json/sms/service/CrowdAppInfoService/` |
| CrowdFunction | `/json/sms/service/CrowdFunction/` |
| CreativeService | `/json/sms/service/CreativeService/` |
| ImageSegmentService | `/json/sms/service/ImageSegmentService/` |
| AdgroupImageSegmentBindService | `/json/sms/service/AdgroupImageSegmentBindService/` |
| AdvancedSegmentService | `/json/sms/service/AdvancedSegmentService/` |
| AdvancedSegmentBindService | `/json/sms/service/AdvancedSegmentBindService/` |
| ImageManagementService | `/json/sms/service/ImageManagementService/` |
| SolutionProviderService | `/json/sms/service/SolutionProviderService/` |
| LeadAdsService | `/json/sms/service/LeadAdsService/` |
| DpaApiCreativeService | `/json/sms/service/DpaApiCreativeService/` |
| DpaCreativeService | `/json/sms/service/DpaCreativeService/` |
| AppProcessService | `/json/sms/service/AppProcessService/` |
| AdgroupAppService | `/json/sms/service/AdgroupAppService/` |
| DanubeCreativeGroupService | `/json/sms/service/DanubeCreativeGroupService/` |
| OcpcService | `/json/sms/service/OcpcService/` |
| FcOcpcService | `/json/sms/service/FcOcpcService/` |
| CampaignEstimatedService | `/json/sms/service/CampaignEstimatedService/` |
| PriceStrategyService | `/json/sms/service/PriceStrategyService/` |
| FcTransTraceApiService | `/json/sms/service/FcTransTraceApiService/` |
| SearchService | `/json/sms/service/SearchService/` |
| BulkJobService | `/json/sms/service/BulkJobService/` |

## LangGraph 工具封装建议

建议按模块创建 LangGraph Tool，每个Tool封装一个服务：

```python
# 示例：封装 AccountService
class BaiduAccountTool(BaseTool):
    """百度营销账户管理工具"""
    name = "baidu_account"
    description = "查询/更新百度营销账户信息"

    def _run(self, action: str, **kwargs) -> dict:
        base_url = "https://api.baidu.com/json/sms/service/AccountService"
        endpoints = {
            "get": f"{base_url}/getAccountInfo",
            "update": f"{base_url}/updateAccountInfo",
        }
        # ... 封装请求逻辑
```

### 通用调用模式

所有接口遵循相同的调用模式：
- **请求方式**: POST
- **Content-Type**: application/json
- **认证**: 通过 OAuth2.0 access_token
- **基础URL**: `https://api.baidu.com/json/sms/service/{ServiceName}/{methodName}`

```python
import requests

def call_baidu_api(service: str, method: str, access_token: str, params: dict) -> dict:
    url = f"https://api.baidu.com/json/sms/service/{service}/{method}"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {access_token}"
    }
    resp = requests.post(url, json=params, headers=headers)
    return resp.json()
```
