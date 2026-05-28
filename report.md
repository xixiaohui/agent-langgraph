# 百度营销API - 数据报告之搜索报告 (完整版)

> 来源: https://dev2.baidu.com/content?sceneType=0&pageId=100740&nodeId=590&subhead=
> 抓取日期: 2026-05-28

---

## 一、概述

百度营销数据报告API提供实时获取搜索&信息流报告数据的能力。搜索报告分为 **新版API** 和 **老版API** 两套接口体系。

### 新版API

- **请求地址**: `https://api.baidu.com/json/sms/service/OpenApiReportService/getReportData`
- **请求方法**: POST
- **Content-Type**: application/json
- 通过 `reportType` 参数区分不同的报告类型（值为6-7位数字）

### 老版API

- **请求地址**: `https://api.baidu.com/json/sms/service/ReportService/getRealTimeData`
- **请求方法**: POST
- **Content-Type**: application/json
- 通过 `realTimeRequestType.reportType` 参数区分（值为个位数）

### 通用功能特性

- 支持通过 `reportType` 指定不同的报告类型
- 灵活指定请求字段，详见各报告 columns 字段说明
- 支持 `timeUnit` 多种时间单位：HOUR(小时)、DAY(天)、WEEK(周)、MONTH(月)、SUMMARY(时间段汇总)
- 支持通过 `sorts` 实现灵活的排序规则
- 支持通过 `filters` 实现强大的数据过滤能力
- 支持通过 `startRow` 和 `rowCount` 灵活分批获取数据
- 支持管家账户批量获取子账户数据
- 支持通过 `needSum` 实现数据汇总
- key-value格式的返回数据，方便解析

---

## 二、通用请求参数（新版API）

| 名称 | 类型 | 说明 |
|------|------|------|
| reportType | Integer | 报告类型，唯一标识一个报告 |
| userIds | Long[] | 查询的用户ID，可为空 |
| timeUnit | TimeUnit | HOUR/DAY/WEEK/MONTH/SUMMARY |
| startDate | Date | 起始日期，格式 2020-05-28 |
| endDate | Date | 结束日期，格式 2020-05-29 |
| columns | String[] | 查询的列（必填，至少一个转化指标） |
| sorts | Sort[] | 排序信息，最多2个排序规则 |
| filters | Filter[] | 筛选条件（非必填） |
| startRow | Integer | 起始行 |
| rowCount | Integer | 获取行数 |
| needSum | Boolean | 是否需要总计 |

### Filter 操作符

| 操作符 | 说明 |
|--------|------|
| GT / GTE | 大于 / 大于等于（仅数字类型） |
| LT / LTE | 小于 / 小于等于（仅数字类型） |
| EQ / NOT_EQ | 等于 / 不等于（单值） |
| IN / NOT_IN | 包含 / 不包含（最多500个值） |

### 通用请求示例

```json
{
  "reportType": 248654,
  "startDate": "2020-05-31",
  "endDate": "2020-06-02",
  "timeUnit": "DAY",
  "userIds": [123],
  "columns": ["date", "campaignId", "campaignNameStatus", "click", "cost", "cpc", "impression", "conversion"],
  "sorts": [{"column": "date", "sortRule": "ASC"}],
  "filters": [{"column": "device", "operator": "IN", "values": ["0", "1"]}],
  "startRow": 0,
  "rowCount": 100
}
```

---

## 三、通用响应结构

| 名称 | 类型 | 说明 |
|------|------|------|
| rows | Map[] | 数据行，key-value格式 |
| summary | Map | 汇总行 |
| rowCount | Integer | 当前返回行数 |
| totalRowCount | Integer | 符合条件总行数 |

---

## 四、新版API - 搜索报告完整列表

所有新版搜索报告共用同一请求地址：
`https://api.baidu.com/json/sms/service/OpenApiReportService/getReportData`

### 4.1 推广报告

#### 4.1.1 搜索整体账户报告
- **reportType**: `170026`
- **timeUnit**: DAY, WEEK, MONTH, SUMMARY

```json
{"reportType":170026,"startDate":"2021-01-01","endDate":"2021-01-07","timeUnit":"DAY","columns":["date","userName","cost","impression","click","ctr","cplConversions","cplConversionsCost","rfqConversions","rfqConversionsCost"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

**属性列**: date, userId, userName

**效果指标**: cost, impression, click, ctr, cpc, topPageViews, topFirstPageViews, topFirstPvWinA/P, topPvWinA/P, topPClicks, topPay

**转化指标**: 包含 cplConversions, rfqConversions 及完整的 ocpcConversionsDetail* 系列（100+指标），涵盖咨询、表单、电话、购买、应用激活/注册/付费/留存、金融(申请/授信/放款)、电商、微信、直播间等所有转化类型

---

#### 4.1.2 账户报告
- **reportType**: `2208157`
- **timeUnit**: HOUR, DAY, WEEK, MONTH, SUMMARY
- **最大时间区间**: 731天
- **QPS限制**: 50

```json
{"reportType":2208157,"startDate":"2021-01-01","endDate":"2021-01-07","timeUnit":"DAY","columns":["date","userName","impression","click","cost","ctr","cpc","conversion","bridgeConversion"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

**属性列**: date, userName, userId, businessPointId, businessPointName, wBudget, budgetEfficiency, device, marketingTargetEnum, targetingType, provinceName, provinceCityName

**效果指标**: impression, click, cost, ctr, cpc, topPageViews, topPClicks, topPay, topPvWinA, topPvWinP, topFirstPageViews, topFirstPvWinA, topFirstPvWinP

**device枚举**: 0:计算机, 1:移动设备  
**marketingTargetEnum**: 0:网站链接, 1:应用推广, 2:门店推广, 3:推广营销活动, 4:电商店铺推广, 5:商品目录  
**targetingType**: 0:关键词, 6:网址定向

---

#### 4.1.3 计划报告
- **reportType**: `2290316`
- **timeUnit**: HOUR, DAY, WEEK, MONTH, SUMMARY
- **最大时间区间**: 731天
- **QPS限制**: 50

```json
{"reportType":2290316,"startDate":"2021-01-01","endDate":"2021-01-07","timeUnit":"DAY","columns":["date","userName","campaignNameStatus","impression","click","cost","ctr","cpc","conversion","bridgeConversion"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

**属性列**: date, userName, userId, campaignNameStatus, businessPointId, businessPointName, transPrice, campaignId, campaignStatus, campaignName, device, targetingType, provinceName, provinceCityName

**效果指标**: impression, click, cost, ctr, cpc, topPvWinA, topPvWinP, topPageViews, topPClicks, topPay, topFirstPageViews, topFirstPvWinA, topFirstPvWinP

---

#### 4.1.4 单元报告
- **reportType**: `2284618`
- **timeUnit**: HOUR, DAY, WEEK, MONTH, SUMMARY
- **最大时间区间**: 731天
- **QPS限制**: 50

```json
{"reportType":2284618,"startDate":"2021-01-01","endDate":"2021-01-07","timeUnit":"DAY","columns":["date","userName","campaignNameStatus","adGroupNameStatus","impression","click","cost","ctr","cpc","conversion"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

**属性列**: date, userName, userId, campaignNameStatus, adGroupNameStatus, adGroupStatus, adGroupName, campaignId, adGroupId, campaignStatus, campaignName, device, targetingType, provinceName, provinceCityName

**效果指标**: 同计划报告

---

### 4.2 定向报告

#### 4.2.1 关键词报告
- **reportType**: `2602783`
- **timeUnit**: HOUR, DAY, WEEK, MONTH, SUMMARY

```json
{"reportType":2602783,"startDate":"2021-01-01","endDate":"2021-01-07","timeUnit":"DAY","columns":["date","userName","campaignNameStatus","adGroupNameStatus","wInfoNameStatus","impression","click","cost","ctr","cpc","conversion","bridgeConversion","bidNew","qualityEnum"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

**属性列**: date, userName, userId, campaignNameStatus, adGroupNameStatus, winfoIdTypeEnum, wInfoNameStatus, wInfoId, bidNew, mixWmatchEnum, qualityEnum, estimatedClickRate, businessRelationship, landPageExperience, adGroupStatus, adGroupName, campaignId, adGroupId, campaignStatus, campaignName, device, targetingType, provinceName, wMatchId, provinceCityName

**效果指标**: impression, click, cost, ctr, cpc, avgRank, topPageViews, topPClicks, topPay, topPvWinA, topPvWinP, topFirstPageViews, topFirstPvWinA, topFirstPvWinP

**winfoIdTypeEnum**: 0:关键词, 1:词包, 3:自动扩量  
**mixWmatchEnum**: 0:智能匹配, 127:分匹配出价, 16:智能匹配核心词, 17:短语匹配, 48:精确匹配  
**qualityEnum**: 1-9 (质量度等级)  
**estimatedClickRate**: 0:数据积累中, 1:低于平均, 2:平均水平, 3:高于平均

---

#### 4.2.2 搜索词报告
- **reportType**: `1900005`
- **timeUnit**: HOUR, DAY, WEEK, MONTH, SUMMARY

```json
{"reportType":1900005,"startDate":"2021-01-01","endDate":"2021-01-07","timeUnit":"DAY","columns":["date","impression","click","cost","ctr","cpc"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

---

#### 4.2.3 搜索商品报告
- **reportType**: `248654`
- **timeUnit**: DAY, WEEK, MONTH, SUMMARY

```json
{"reportType":248654,"startDate":"2021-01-01","endDate":"2021-01-07","timeUnit":"DAY","columns":["date","userName","campaignName","adGroupName","outerId","productNameStatus","shantouProductId","impression","click","cost","ctr","cpc"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

---

#### 4.2.4 人群报告
- **reportType**: `9718404`
- **timeUnit**: DAY, WEEK, MONTH, SUMMARY

```json
{"reportType":9718404,"startDate":"2021-01-01","endDate":"2021-01-07","timeUnit":"DAY","columns":["date","userName","audienceName","audienceStatusNew","campaignNameStatus","adGroupNameStatus","impression","click","cost","ctr","cpc"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

---

### 4.3 创意报告

#### 4.3.1 创意报告
- **reportType**: 待确认（与新API共用）
- **timeUnit**: DAY, WEEK, MONTH, SUMMARY

#### 4.3.2 创意组件报告
- **reportType**: `6438125`
- **timeUnit**: DAY, WEEK, MONTH, SUMMARY

```json
{"reportType":6438125,"startDate":"2021-01-01","endDate":"2021-01-07","timeUnit":"DAY","columns":["date","secondComponentType","campaignNameStatus","adGroupNameStatus","impression","click","cost","cpc","ctr"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

#### 4.3.3 高级样式报告
- **reportType**: `1150477`
- **timeUnit**: DAY, WEEK, MONTH, SUMMARY

```json
{"reportType":1150477,"startDate":"2021-01-01","endDate":"2021-01-07","timeUnit":"DAY","columns":["date","mtName","mtStyle","campaignName","adGroupName","impression","click","cost","ctr","cpc"],"sorts":[],"filters":[{"column":"mcId","operator":"IN","values":["30"]}],"startRow":0,"rowCount":200,"needSum":false}
```

#### 4.3.4 搜索图片报告
- **reportType**: `1025058`
- **timeUnit**: DAY, WEEK, MONTH, SUMMARY

```json
{"reportType":1025058,"startDate":"2021-01-01","endDate":"2021-01-07","timeUnit":"DAY","columns":["date","picUrl","picScale","impression","click","cost","ctr","cpc"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

#### 4.3.5 搜索视频报告
- **reportType**: `1025056`
- **timeUnit**: HOUR, DAY, WEEK, MONTH, SUMMARY

```json
{"reportType":1025056,"startDate":"2021-01-01","endDate":"2021-01-07","timeUnit":"DAY","columns":["date","videoNameStatus","videoInfo","impression","click","cost","ctr","cpc"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

**效果指标**: impression, click, cost, ctr, cpc

---

### 4.4 落地页报告

#### 4.4.1 落地页报告
- **reportType**: `5381679`
- **timeUnit**: DAY, WEEK, MONTH, SUMMARY

```json
{"reportType":5381679,"startDate":"2021-01-01","endDate":"2021-01-07","timeUnit":"DAY","columns":["date","landingPageUrl","click","cost","ocpcConversionsDetail1","ocpcConversionsDetail5","ocpcConversionsDetail2","ocpcConversionsDetail35"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

**属性列**: date, userId, userName, campaignId, campaignNameStatus, adGroupId, adGroupNameStatus, wInfoNameStatus, queryWord, landingPageUrl, device

**效果指标**: click, cost, cpc

#### 4.4.2 搜索访客明细报告
- **reportType**: `4017932`
- **timeUnit**: DAY, WEEK, MONTH, SUMMARY

```json
{"reportType":4017932,"startDate":"2021-01-01","endDate":"2021-01-07","timeUnit":"DAY","columns":["dateTime","cityName","queryWord","wInfoNameStatus","landingPageUrl","ip","antiCode","landingPageDurationSec"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

> 包含访客级别详细数据：IP、反作弊码、落地页停留时长等。

---

### 4.5 专项报告

#### 4.5.1 OCPC报告（项目&出价策略）
- **reportType**: `970638`

```json
{"reportType":970638,"startDate":"2021-01-01","endDate":"2021-01-07","timeUnit":"DAY","columns":["date","packPlanNameStatus","oCPCLevel","oCPCBidType","oCPCConf","oCPCTypeName","impression","click","cost","filteredConversionsSum","ocpcConversions","transPrice"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

#### 4.5.2 OCPC报告-计划层级
- **reportType**: `999241`

```json
{"reportType":999241,"startDate":"2021-01-01","endDate":"2021-01-07","timeUnit":"DAY","columns":["date","campaignNameStatus","oCPCLevel","oCPCBidType","oCPCTypeName","impression","click","cost","filteredConversionsSum","ocpcConversions","transPrice"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

#### 4.5.3 搜索实时报告-关键词实时排名
- **reportType**: `1237122`
- **timeUnit**: DAY

```json
{"reportType":1237122,"startDate":"2021-01-01","endDate":"2021-01-01","timeUnit":"DAY","columns":["campaignNameStatus","adgroupNameStatus","keywordNameStatus","homePageAvgRank","click","cost","cpc","bidNew","mixWmatchEnum"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

#### 4.5.4 搜索实时报告-推广计划实时消费
- **reportType**: `1212048`
- **timeUnit**: DAY

```json
{"reportType":1212048,"startDate":"2021-01-01","endDate":"2021-01-01","timeUnit":"DAY","columns":["campaignNameStatus","click","cost","cpc","offlineTime"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

#### 4.5.5 搜索门店报告
- **reportType**: `5932678`

```json
{"reportType":5932678,"startDate":"2021-07-19","endDate":"2021-07-25","timeUnit":"SUMMARY","columns":["date","userName","campaignNameStatus","adGroupNameStatus","storeNameStatus","impression","click","cost","cpc","ctr"],"sorts":[],"filters":[],"startRow":0,"rowCount":200,"needSum":false}
```

---

### 4.6 提示词广告报告

提示词广告报告是一组独立的子报告，包括：

| 子报告名称 | reportType |
|-----------|------------|
| 提示词报告-地域 | 待确认 |
| 提示词定向报告-年龄 | 待确认 |
| 提示词定向报告-性别 | 待确认 |
| 提示词转化指标 | 待确认 |
| 提示词视频报告 | 待确认 |
| 提示词基础报告-搜索 | 待确认 |
| 提示词基础报告-信息流 | 待确认 |
| 提示词基础报告-整体 | 待确认 |
| 提示词营销要点报告-搜索 | 待确认 |
| 提示词文案报告-搜索 | 待确认 |
| 提示词文案报告-信息流 | 待确认 |
| 提示词图片报告-搜索 | 待确认 |
| 提示词图片报告-信息流 | 待确认 |

---

## 五、老版API - 搜索报告

老版API使用不同的接口地址和参数格式：
`https://api.baidu.com/json/sms/service/ReportService/getRealTimeData`

### 老版API请求参数

```json
{
  "realTimeRequestType": {
    "performanceData": ["cost", "cpc", "click", "impression", "ctr", "cpm"],
    "startDate": "2021-04-12",
    "endDate": "2021-04-13",
    "levelOfDetails": 2,
    "statRange": 2,
    "reportType": 2,
    "unitOfTime": 5,
    "number": 1000
  }
}
```

### 老版API - reportType 对照表

| reportType | 报告名称 | 说明 |
|------------|----------|------|
| 2 | 账户报告 | 账户级别实时数据 |
| 3 | 一级地域报告 | 省级地域实时数据 |
| 5 | 二级地域报告 | 市级地域实时数据 |

### 老版API参数说明

| 参数 | 类型 | 说明 |
|------|------|------|
| performanceData | String[] | 必填，至少包含展现/点击/消费之一。可选: cost, cpc, impression, click, ctr, cpm, position, conversion |
| order | Boolean | 是否降序排列，默认false |
| startDate | dateTime | 统计开始时间，格式 2021-04-20，支持最近两年 |
| endDate | dateTime | 统计结束时间，时间跨度不超过367天 |
| levelOfDetails | Integer | 2:账户, 3:计划, 5:单元, 11:关键词 |
| reportType | Integer | 实时数据类型（见上表） |
| statRange | Integer | 统计范围，默认2。2:账户, 3:计划, 5:单元, 11:关键词 |
| statIds | Long[] | 统计范围下的ID集合 |
| unitOfTime | Integer | 1:年, 3:月, 4:周, 5:日, 8:时间段汇总 |
| device | Integer | 0:全部, 1:计算机, 2:移动 |
| number | Integer | 返回条数，最大10000，默认1000 |
| pageIndex | Integer | 分页页码 |

### 老版API搜索报告子页面清单

**推广报告**: 账户报告(reportType=2), 计划报告, 单元报告
**定向报告**: 关键词报告, 搜索词报告, 一级地域报告(reportType=3), 二级地域报告(reportType=5)
**创意报告**: 创意报告, 图片组件报告
**专项报告**: oCPC报告, 小程序-关键词报告, 无效点击报告-计费IP查询, 无效点击报告-实时计费IP查询, 无效点击报告-单元计费详情, 账户实时数据, 关键词实时数据
**异步数据报告**: 创建异步报告, 获取异步报告状态, 获取异步报告文件url
**商品报告**: 商品报告对象, 获取分样式报告, 商品组件分样式报告

---

## 六、搜索报告转化指标明细

所有搜索报告支持的转化指标分为以下几大类：

### 6.1 咨询转化
| 指标名 | 说明 |
|--------|------|
| ocpcConversionsDetail1 | 咨询按钮点击量 |
| ocpcConversionsDetail19 | 一句话咨询量 |
| ocpcConversionsDetail17 | 三句话咨询量 |
| ocpcConversionsDetail18 | 留线索量 |
| ocpcConversionsDetail43 | 小程序线索量 |
| ocpcConversionsDetail51 | 有意向客户量 |
| ocpcConversionsDetail92 | 有效咨询量 |

### 6.2 表单转化
| 指标名 | 说明 |
|--------|------|
| ocpcConversionsDetail5 | 表单按钮点击量 |
| ocpcConversionsDetail16 | 表单调起按钮点击量 |
| ocpcConversionsDetail3 | 表单提交成功量 |

### 6.3 电话转化
| 指标名 | 说明 |
|--------|------|
| ocpcConversionsDetail2 | 电话按钮点击量 |
| ocpcConversionsDetail30 | 电话拨通量 |

### 6.4 购买转化
| 指标名 | 说明 |
|--------|------|
| ocpcConversionsDetail7 | 购买按钮点击量 |
| ocpcConversionsDetail10 | 服务购买成功量 |
| ocpcConversionsDetail14 | 订单提交成功量 |

### 6.5 应用转化
| 指标名 | 说明 |
|--------|------|
| ocpcConversionsDetail4 | 激活人数 |
| ocpcConversionsDetail25 | 注册人数 |
| ocpcConversionsDetail26 | 付费人数 |
| ocpcConversionsDetail49 | 登录人数 |
| ocpcConversionsDetail28 | 次日留存人数 |
| ocpcConversionsDetail52 | 深度使用量 |

### 6.6 金融转化
| 指标名 | 说明 |
|--------|------|
| ocpcConversionsDetail117 | 进件量 |
| ocpcConversionsDetail41 | 申请量 |
| ocpcConversionsDetail42 | 授信量 |
| ocpcConversionsDetail89 | 放款量 |

### 6.7 电商转化
| 指标名 | 说明 |
|--------|------|
| ocpcConversionsDetail57 | 店铺调起量 |
| ocpcConversionsDetail15 | 加入购物车按钮点击量 |
| ocpcConversionsDetail46 | 加入购物车量 |
| ocpcConversionsDetail9 | 电商订单量 |
| ocpcConversionsDetail90 | 商品支付成功量 |

### 6.8 微信/社交转化
| 指标名 | 说明 |
|--------|------|
| ocpcConversionsDetail35 | 微信复制按钮点击量 |
| ocpcConversionsDetail67 | 微信调起按钮点击量 |
| ocpcConversionsDetail68 | 粉丝关注成功量 |
| ocpcConversionsDetail79 | 微信加粉成功量 |
| ocpcConversionsDetail112 | 微信小程序调起人数 |

### 6.9 直播间转化
| 指标名 | 说明 |
|--------|------|
| ocpcConversionsDetail83 | 直播间商品按钮点击 |
| ocpcConversionsDetail131 | 直播间服务购买成功 |
| ocpcConversionsDetail132 | 直播间表单提交成功 |
| ocpcConversionsDetail133 | 直播间微信加粉成功 |
| ocpcConversionsDetail134 | 直播间授信 |
| ocpcConversionsDetail135 | 直播间关注 |
| ocpcConversionsDetail136 | 直播间观看 |
| ocpcConversionsDetail137 | 直播间停留 |
| ocpcConversionsDetail138 | 直播间打赏 |
| ocpcConversionsDetail139 | 直播间留线索 |
| ocpcConversionsDetail152 | 直播间电话拨通量 |

### 6.10 转化时间归因指标
每个基础转化指标对应有 `ct` 前缀版本（转化时间归因）：
- 例如: `ocpcConversionsDetail1` → `ctOCPCConversionsDetail1`

### 6.11 衍生指标
每个转化指标通常配套:
- `[指标名]Cost` — 转化成本
- `[指标名]CVR` — 转化率
- `[指标名]TransWorth` — 转化价值
- `[指标名]Amount` — 转化金额
- `[指标名]ROI` — 投资回报率

---

## 七、新版API报告类型速查表

| reportType | 报告名称 | 分类 | timeUnit |
|------------|----------|------|----------|
| 170026 | 搜索整体账户报告 | 推广报告 | DAY/WEEK/MONTH/SUMMARY |
| 2208157 | 账户报告 | 推广报告 | HOUR/DAY/WEEK/MONTH/SUMMARY |
| 2290316 | 计划报告 | 推广报告 | HOUR/DAY/WEEK/MONTH/SUMMARY |
| 2284618 | 单元报告 | 推广报告 | HOUR/DAY/WEEK/MONTH/SUMMARY |
| 2602783 | 关键词报告 | 定向报告 | HOUR/DAY/WEEK/MONTH/SUMMARY |
| 1900005 | 搜索词报告 | 定向报告 | HOUR/DAY/WEEK/MONTH/SUMMARY |
| 248654 | 搜索商品报告 | 定向报告 | DAY/WEEK/MONTH/SUMMARY |
| 9718404 | 人群报告 | 定向报告 | DAY/WEEK/MONTH/SUMMARY |
| 6438125 | 创意组件报告 | 创意报告 | DAY/WEEK/MONTH/SUMMARY |
| 1150477 | 高级样式报告 | 创意报告 | DAY/WEEK/MONTH/SUMMARY |
| 1025056 | 搜索视频报告 | 创意报告 | HOUR/DAY/WEEK/MONTH/SUMMARY |
| 1025058 | 搜索图片报告 | 创意报告 | DAY/WEEK/MONTH/SUMMARY |
| 5381679 | 落地页报告 | 落地页报告 | DAY/WEEK/MONTH/SUMMARY |
| 4017932 | 搜索访客明细报告 | 落地页报告 | DAY/WEEK/MONTH/SUMMARY |
| 970638 | OCPC报告（项目&出价策略） | 专项报告 | DAY/WEEK/MONTH/SUMMARY |
| 999241 | OCPC报告-计划层级 | 专项报告 | DAY/WEEK/MONTH/SUMMARY |
| 1237122 | 搜索实时报告-关键词实时排名 | 专项报告 | DAY |
| 1212048 | 搜索实时报告-推广计划实时消费 | 专项报告 | DAY |
| 5932678 | 搜索门店报告 | 专项报告 | DAY/WEEK/MONTH/SUMMARY |

---

## 八、常见问题

1. 如何返回点击为0的数据？
2. 下载较多投放数据如何避免报错？
3. 时间单位选择小时，报告最多只能查询七天的数据吗？
4. 查询报告会看到数值 1.7976931348623158E303，是什么意思？
5. 如何获取已删除的计划报告？
6. 新数据报告-搜索访客明细报告传参 timeUnit 选择 HOUR 报错
7. 百度营销业务端账户报告细分选项如何实现？
8. 过滤条件可以实现模糊搜索吗？
9. 新报告接口-搜索词报告是否可以支持市级数据？
10. 数据时效性说明
11. 数据报告返回时为什么缺少日期字段？
12. 搜索异步报告能支持下载多久的数据？
13. 数据报告是否有延迟？
14. 如何获取账户实时投放数据？
15. 报告字段 timeUnit 的 DAY 和 SUMMARY 的区别是什么？

---

## 九、完整树形结构

```
数据报告
├── 一站式多渠道报告 (reportType: 1783967)
├── 搜索报告 (新版API)
│   ├── 搜索报告转化指标明细 (参考文档)
│   ├── 推广报告
│   │   ├── 搜索整体账户报告 (170026)
│   │   ├── 账户报告 (2208157)
│   │   ├── 计划报告 (2290316)
│   │   └── 单元报告 (2284618)
│   ├── 提示词广告报告 (13个子报告)
│   ├── 定向报告
│   │   ├── 关键词报告 (2602783)
│   │   ├── 搜索词报告 (1900005)
│   │   ├── 搜索商品报告 (248654)
│   │   └── 人群报告 (9718404)
│   ├── 创意报告
│   │   ├── 创意报告
│   │   ├── 创意组件报告 (6438125)
│   │   ├── 高级样式报告 (1150477)
│   │   ├── 商品组件报告
│   │   ├── 图片组件报告
│   │   ├── 搜索视频报告 (1025056)
│   │   ├── 自动配图报告
│   │   └── 搜索图片报告 (1025058)
│   ├── 落地页报告
│   │   ├── 落地页报告 (5381679)
│   │   └── 搜索访客明细报告 (4017932)
│   └── 专项报告
│       ├── OCPC报告（项目&出价策略）(970638)
│       ├── OCPC报告-计划层级 (999241)
│       ├── OCPC项目报告
│       ├── 服务直达计划报告
│       ├── 搜索实时报告-关键词实时排名 (1237122)
│       ├── 搜索实时报告-推广计划实时消费 (1212048)
│       ├── 无效点击-ip计费报告
│       ├── 无效点击-ip实时计费报告
│       ├── 小程序报告-搜索词
│       ├── 小程序报告-关键词
│       ├── 线索加油包报告
│       └── 搜索门店报告 (5932678)
├── 搜索报告（老报告接口）(ReportService/getRealTimeData)
│   ├── 报告对象
│   ├── 报告指标说明
│   ├── 推广报告 (账户/计划/单元)
│   ├── 定向报告 (关键词/搜索词/一级地域/二级地域)
│   ├── 创意报告 (创意/图片组件)
│   ├── 专项报告 (oCPC/小程序/无效点击/账户实时/关键词实时)
│   ├── 异步数据报告 (创建/获取状态/获取url)
│   └── 商品报告 (商品对象/分样式报告)
├── 信息流报告
├── 电商报告
└── 异步报告
```

---

> **注意**: 提示词广告报告的13个子页面和老版API的部分子页面因网站SPA导航限制未能逐一抓取。新版API创意报告本身和老版API中部分页面的reportType值待确认。
