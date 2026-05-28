# 百度营销API - 关键词规划师

> 来源: https://dev2.baidu.com/content?sceneType=0&pageId=100216&nodeId=289&subhead=
> 抓取日期: 2026-05-28

---

## 一、服务简介

关键词规划师服务，可以使用种子词等多个条件进行实时拓词，或者使用异步文件方式实现拓词。位于导航树 `工具 > 搜索推广工具 > 关键词规划师`。

### API 清单

| 序号 | 接口名称 | 请求地址 | 调用方式 |
|------|----------|----------|----------|
| 1 | 获取账户主动推荐词 | `KRService/getKRCustom` | 同步 |
| 2 | 获取种子词条件下的推荐词 | `KRService/getKRByQuery` | 同步 |
| 3 | 查询关键词流量 | `PvSearchFunction/getPvSearch` | 同步 |
| 4 | 根据种子词获取拓展词 | `KRService/getKRFileIdByWords` | 异步(step1) |

**异步拓词完整流程**: 根据种子词获取拓展词 → 查询文件状态 → 获取文件下载URL

---

## 二、公共数据对象

### SeedFilter 筛选条件

| 字段 | 类型 | 说明 | 限制 |
|------|------|------|------|
| device | Integer | 设备类型 | 默认值: 0。枚举值: 0-全部设备, 1-计算机设备, 2-移动设备 |
| maxNum | Long | 返回结果最大条数（按相关性排序） | 默认值: 300, 取值范围: [1, 1000] |
| negativeWords | String[] | 不包含关键词 | 长度限制: [0, 10], 每个关键词最大64字节 |
| positiveWord | String | 包含关键词 | 仅允许单个关键词，最大64字节 |
| regionExtend | Boolean | 不推荐未选地域词 | 默认: false。true-不推荐未选地域词, false-推荐未选地域词 |
| removeDuplicate | Boolean | 不推荐账户内已购词 | 默认: false。true-不推荐, false-推荐 |
| searchRegions | Long[] | 指定地域列表 | 默认全部地域，地域代码详见省市地域代码 |
| removeCampaignDuplicate | Boolean | 不推荐计划内已购词 | 默认: false。true-不推荐, false-推荐 |

### 推荐词返回字段 (WordType)

| 字段 | 类型 | 说明 |
|------|------|------|
| word | String | 推荐词字面 |
| competition | Long | 竞争激烈程度: 1-高, 2-中, 3-低 |
| PV | Long | 月均搜索量 |
| pcPV | Long | 月均计算机搜索量 |
| mobilePV | Long | 月均移动搜索量 |
| showReasons | String[] | 特色标签: 行业激增词、视频搭配热词、落地页相关词、转化潜力词、黑马词、高频热搜词 |
| show | Long | 预估月均展现 |
| click | Long | 预估月均点击 |
| competitionPc | Integer | 计算机竞争激烈程度: 1-高, 2-中, 3-低 |
| competitionWise | Integer | 移动竞争激烈程度: 1-高, 2-中, 3-低 |
| groupName | String | 关键词分组名 |
| recommendPricePc | Double | 计算机指导价 (元) |
| recommendPriceMobile | Double | 移动指导价 (元) |

---

## 三、API 详细文档

### 3.1 获取账户主动推荐词

- **请求地址**: `https://api.baidu.com/json/sms/service/KRService/getKRCustom`
- **方法说明**: 主动推词接口，根据客户的业务内容（计划/单元ID），返回相关的推荐词

#### 输入信息

| 字段 | 类型 | 说明 | 限制 |
|------|------|------|------|
| idType | Integer | 指定输入ID的类型 | 枚举值: 3-计划id, 5-单元id |
| id | Long | 输入的计划/单元ID | 输入ID为null时，idType可在3,5之间任填 |
| seedFilter | SeedFilter | 筛选条件 | 见公共数据对象 |

#### 返回信息

返回 `WordType[]` 数组，字段见公共数据对象。

#### 请求示例

```json
{
  "idType": 3,
  "id": 123,
  "seedFilter": {
    "device": 0,
    "maxNum": 300,
    "negativeWords": ["牛肉"],
    "positiveWord": "婚纱摄影",
    "searchRegions": [12478, 13000],
    "regionExtend": false,
    "removeDuplicate": false,
    "removeCampaignDuplicate": false
  }
}
```

#### 返回示例

```json
{
  "body": {
    "data": [
      {
        "word": "婚纱摄影",
        "competition": 1,
        "PV": 100,
        "pcPV": 13,
        "mobilePV": 15,
        "showReasons": [],
        "show": 200,
        "click": 52,
        "competitionPc": 1,
        "competitionWise": 2,
        "groupName": "其他",
        "recommendPricePc": 1.12,
        "recommendPriceMobile": 1.18
      }
    ]
  }
}
```

---

### 3.2 获取种子词条件下的推荐词

- **请求地址**: `https://api.baidu.com/json/sms/service/KRService/getKRByQuery`
- **方法说明**: 根据输入的种子词返回推荐的扩展词，一次调用仅允许请求一个种子词

#### 输入信息

| 字段 | 类型 | 说明 | 限制 |
|------|------|------|------|
| query **(必填)** | String | 指定的种子词 | 长度不超过64字节 |
| seedFilter | SeedFilter | 筛选条件 | 见公共数据对象 |

#### 返回信息

返回 `WordType[]` 数组，字段见公共数据对象。

#### 请求示例

```json
{
  "seedFilter": {
    "device": 0,
    "maxNum": 300,
    "negativeWords": ["123"],
    "positiveWord": "婚纱摄影",
    "regionExtend": false,
    "removeDuplicate": false,
    "removeCampaignDuplicate": false
  },
  "query": "婚纱摄影"
}
```

#### 返回示例

```json
{
  "body": {
    "data": [
      {
        "word": "婚纱摄影",
        "competition": 1,
        "PV": 43616,
        "pcPV": 16589,
        "mobilePV": 27027,
        "showReasons": ["高频热搜词"],
        "show": 1192,
        "click": 215,
        "competitionPc": 1,
        "competitionWise": 1,
        "groupName": "摄影词",
        "recommendPricePc": 6.62,
        "recommendPriceMobile": 3.44
      }
    ]
  }
}
```

---

### 3.3 查询关键词流量

- **请求地址**: `https://api.baidu.com/json/sms/service/PvSearchFunction/getPvSearch`
- **方法说明**: 查询指定关键词的近期搜索量数据等信息

#### 输入信息

| 字段 | 类型 | 说明 | 限制 |
|------|------|------|------|
| bidWordSource **(必填)** | String | 要进行估算的词的来源 | 枚举值: wordList-词列表 |
| device | Integer | 设备 | 默认: 0。枚举值: 0-全部, 1-仅移动, 2-仅计算机 |
| orderBy | String | 排序字段 | 枚举值: price(指导价), matchType(匹配模式), averageMonthPv(月均搜索量), averageMonthPvMobile(月均移动搜索量), averageMonthPvPc(月均计算机搜索量), show(预估月均展现), click(预估月均点击), pcPrice(计算机指导价), mobilePrice(移动指导价) |
| order | String | 排序规则 | 默认: desc。枚举值: asc-升序, desc-降序 |
| keywordList **(必填)** | PvSearchRequestWordItem[] | 关键词列表 | 长度限制: [1, 1000] |

**PvSearchRequestWordItem**:

| 字段 | 类型 | 说明 | 限制 |
|------|------|------|------|
| keywordName | String | 关键词字面 | 最大40字节 |
| matchType | Integer | 匹配模式 | 与phraseType配合: matchType=1且phraseType=1-精确匹配, matchType=2且phraseType=1-短语匹配, matchType=2且phraseType=3-智能匹配 |
| phraseType | Integer | 细分匹配模式 | 与matchType配合使用 |

#### 返回信息

| 字段 | 类型 | 说明 |
|------|------|------|
| logid | Long | 关键词预估的唯一标识 |
| data | PvSearchResponseWordItem[] | 关键词流量查询信息列表 |
| actualWordList | String[] | 实际进行预估的词（因黄反和次数限制，不是所有传入词都会预估） |
| errorItems | PvSearchResponseErrorItem[] | 错误原因 |

**PvSearchResponseWordItem**:

| 字段 | 类型 | 说明 |
|------|------|------|
| keywordName | String | 关键词字面 |
| price | Double | 指导价 |
| matchType | Integer | 匹配模式 |
| phraseType | Integer | 细分匹配模式 |
| kwc | Long | 竞价激烈程度: 1-高, 2-中, 3-低 |
| showReasons | String[] | 举荐理由: 高频热搜词/黑马词/转化潜力词/落地页相关词/视频搭配热词/行业激增词 |
| averageMonthPv | Long | 月均搜索量 |
| averageMonthPvPc | Long | 月均计算机搜索量 |
| averageMonthPvMobile | Long | 月均移动搜索量 |
| show | Long | 预估月均展现 |
| click | Long | 预估月均点击 |
| pcPrice | Double | 关键词计算机指导价 |
| mobilePrice | Double | 关键词移动指导价 |

**PvSearchResponseErrorItem**:

| 字段 | 类型 | 说明 |
|------|------|------|
| code | Integer | 错误码 |
| message | String | 错误信息 |

#### 请求示例

```json
{
  "bidWordSource": "wordList",
  "device": 0,
  "orderBy": "price",
  "order": "desc",
  "keywordList": [
    {
      "keywordName": "奶茶",
      "matchType": 1,
      "phraseType": 1
    }
  ]
}
```

#### 返回示例

```json
{
  "data": {
    "data": [
      {
        "keywordName": "奶茶",
        "pv": 46466,
        "matchType": 1,
        "show": 5613,
        "averageMonthPvPc": 32054,
        "averageMonthPvMobile": 167096,
        "mobilePrice": 0.6,
        "click": 884,
        "averageMonthPv": 199150,
        "kwc": 1,
        "pcPrice": 0.59,
        "price": 0.6,
        "showReasons": ["高频热搜词"]
      }
    ],
    "actualWordList": ["奶茶"],
    "errorItems": [],
    "logid": "1803076835192217837"
  }
}
```

---

### 3.4 根据种子词获取拓展词 (异步)

- **请求地址**: `https://api.baidu.com/json/sms/service/KRService/getKRFileIdByWords`
- **方法说明**: 异步接口，根据输入的种子词返回推荐的扩展词，一次调用允许请求最多1000个种子词。返回fileId后需配合文件状态查询和文件下载接口使用。

#### 异步流程

```
Step 1: 根据种子词获取拓展词 → 获取 fileId
Step 2: 查询文件状态 → 监控任务进度
Step 3: 获取文件下载URL → 下载结果文件
```

#### 输入信息

| 字段 | 类型 | 说明 | 限制 |
|------|------|------|------|
| seedWords **(必填)** | String[] | 种子词列表 | 长度限制: [1, 1000]，单个最大64字节 |
| seedFilter | SeedFilter | 筛选条件 | 见公共数据对象 |

#### 返回信息

| 字段 | 类型 | 说明 |
|------|------|------|
| fileId | String | 任务ID，用于后续查询状态和下载文件 |

#### 请求示例

```json
{
  "seedWords": ["婚纱摄影"],
  "seedFilter": {
    "device": 0,
    "maxNum": 300,
    "negativeWords": ["123"],
    "positiveWord": "婚纱摄影",
    "regionExtend": false,
    "removeDuplicate": false,
    "removeCampaignDuplicate": false
  }
}
```

#### 返回示例

```json
{
  "body": {
    "data": [
      {
        "fileId": "f96f4a5f822551745d507afd8bff2xxx"
      }
    ]
  }
}
```

---

## 四、关键词规划师API速查表

| 接口名称 | 服务路径 | 方法 | 类型 |
|----------|----------|------|------|
| 获取账户主动推荐词 | `KRService/getKRCustom` | 同步 | 根据计划/单元ID推荐词 |
| 获取种子词条件下的推荐词 | `KRService/getKRByQuery` | 同步 | 根据单个种子词拓词 |
| 查询关键词流量 | `PvSearchFunction/getPvSearch` | 同步 | 批量查询关键词搜索量/指导价 |
| 根据种子词获取拓展词 | `KRService/getKRFileIdByWords` | 异步 | 批量种子词拓词(最多1000个) |

---

## 五、目录结构

```
工具 > 搜索推广工具 > 关键词规划师
├── 数据对象 (SeedFilter 定义)
├── 获取账户主动推荐词 (getKRCustom)
├── 获取种子词条件下的推荐词 (getKRByQuery)
├── 查询关键词流量 (getPvSearch)
└── 异步种子词拓词服务
    └── 根据种子词获取拓展词 (getKRFileIdByWords)
        → 查询文件状态 (通用异步接口)
        → 获取文件下载URL (通用异步接口)
```

---

> **注意**: 异步拓词流程中的"查询文件状态"和"获取文件下载URL"为通用异步任务接口，与异步报告共用，不在关键词规划师专属页面中。使用关键词规划师服务时请确保内容符合《中华人民共和国广告法》等法律法规。
