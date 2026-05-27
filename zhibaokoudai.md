# 百度搜索广告投放 API 文档

> 整理自 [百度营销开发者中心](https://dev2.baidu.com)
> 爬取日期: 2026-05-27

---

## 账户

### 更新账户

**请求地址:** `https://api.baidu.com/json/sms/service/AccountService/updateAccountInfo`

**方法说明:** 更新username对应的账户信息，如果是来自MCC Token的请求，则更新target对应的账户信息。

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| accountInfo 必填 | AccountType | 更新账户信息 | - |
| budget | Double | 账户预算 | 默认值：0当设置为日预算时，取值范围：[50, 10000000] |
| regionTarget | Integer[] | 推广地域列表 | 可选地域名称见地域编码 |
| excludeIp | String[] | IP排除列表 | 支持添加/删除ipv4和ipv6类型ip, 例如：2001:0DB8:0000:0023:0008:0800:200C:417A |
| budgetType | Integer | 预算类型 | 取值范围：枚举值，列表如下0 - 不设置预算1 - 日预算与budget配合使用，修改预算时必填 |
| regionPriceFactor | RegionPriceFactor[] | 分地域出价系数 | - |
| geoLocationStatus | Integer | 推广地域地理位置选项 | 取值范围：枚举值，列表如下0 - 该地区内或搜索意图在该地区的所有用户（包含：正在该地区的用户、长时间内居住或者工作在该地区的用户、在搜索词中对该地区表现出明确兴趣的用户）1 - 该地区内的所有用户（包含：正在该地区的用户、长时间内居住或者工作在该地区的用户）原账户层级的“搜索意图地域词扩展”已升级为计划地域设置中的推广地域地理位置选项 |
| excludeQueryRegionStatus | Boolean | 搜索意图地域词排除 | 取值范围：枚举值，列表如下true - 启用false - 关闭 |
| longMonitorSublink | String | 创意组件-文字链监控代码 | 可填充监控代码默认值："product=xinxizhenlie_longsublink"，如需自定义，请直接录入监控代码（字符限制255） |
| accountMonitorUrl | String | 通用点击监测地址 | 当前通用点击检测地址长度限制1024 |
| time | Date | 下线/上线时间点 | - |
| flag | Integer | 下线/上线状态 | 取值范围：枚举值，列表如下1 - 上线0 - 下线 |
| regionId | Integer | 地域ID | 可选地域ID见地域编码 |
| priceFactor | Double | 出价系数 | 取值范围：[0.1, 10.0] |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| budget | Double | 账户预算 | 默认值：0当设置为日预算时，取值范围：[50, 10000000] |
| regionTarget | Integer[] | 推广地域列表 | 可选地域名称见地域编码 |
| excludeIp | String[] | IP排除列表 | 支持添加/删除ipv4和ipv6类型ip, 例如：2001:0DB8:0000:0023:0008:0800:200C:417A |
| budgetType | Integer | 预算类型 | 取值范围：枚举值，列表如下0 - 不设置预算1 - 日预算与budget配合使用，修改预算时必填 |
| regionPriceFactor | RegionPriceFactor[] | 分地域出价系数 | - |
| geoLocationStatus | Integer | 推广地域地理位置选项 | 取值范围：枚举值，列表如下0 - 该地区内或搜索意图在该地区的所有用户（包含：正在该地区的用户、长时间内居住或者工作在该地区的用户、在搜索词中对该地区表现出明确兴趣的用户）1 - 该地区内的所有用户（包含：正在该地区的用户、长时间内居住或者工作在该地区的用户、在搜索词中对该地区表现出明确兴趣的用户） |
| excludeQueryRegionStatus | Boolean | 搜索意图地域词排除 | 取值范围：枚举值，列表如下true - 启用false - 关闭 |
| longMonitorSublink | String | 创意组件-文字链监控代码 | 可填充监控代码默认值："product=xinxizhenlie_longsublink"，如需自定义，请直接录入监控代码（字符限制255） |
| accountMonitorUrl | String | 通用点击监测地址 | 当前通用点击检测地址长度限制1024 |
| time | Date | 下线/上线时间点 | - |
| flag | Integer | 下线/上线状态 | 取值范围：枚举值，列表如下1 - 上线0 - 下线 |
| regionId | Integer | 地域ID | 可选地域ID见地域编码 |
| priceFactor | Double | 出价系数 | 取值范围：[0.1, 10.0] |

<details>
<summary>请求示例</summary>

```json
{
  "accountInfo" : {
    "budget" : 0.0,
    "regionTarget" : [ 1 ],
    "excludeIp" : [ "example string" ],
    "budgetType" : 0,
    "regionPriceFactor" : [ {
      "regionId" : 1,
      "priceFactor" : 10.0
    } ],
    "geoLocationStatus" : 0,
    "excludeQueryRegionStatus" : true,
    "longMonitorSublink" : "example string",
    "accountMonitorUrl" : "example string"
  }
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "budget" : 0.0,
    "regionTarget" : [ 1 ],
    "excludeIp" : [ "example string" ],
    "budgetType" : 0,
    "regionPriceFactor" : [ {
      "regionId" : 1,
      "priceFactor" : 10.0
    } ],
    "geoLocationStatus" : 0,
    "excludeQueryRegionStatus" : true,
    "longMonitorSublink" : "example string",
    "accountMonitorUrl" : "example string"
  } ]
}
```

</details>

---

### 查询账户

**请求地址:** `https://api.baidu.com/json/sms/service/AccountService/getAccountInfo`

**方法说明:** 获取username对应的账户信息；如果是来自MCC Token的请求，则返回target对应的账户信息。

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| accountFields 必填 | String[] | 指定需要返回的属性 | 取值范围：枚举值，列表如下userId - 账户IDbalance - 账户余额pcBalance - 框架-基准资金包余额budget - 账户预算budgetType - 预算类型budgetOfflineTime - 到达预算下线时段cost - 账户累积消费excludeIp - IP排除列表openDomains - 账户开放域名列表payment - 账户投资总额regDomain - 账户注册域名regionTarget - 推广地域列表userStat - 用户状态userLev... |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| userId | Long | 账户ID | - |
| balance | Double | 账户余额 | 账户余额，对应财务平台"推广共享资金"字段 |
| pcBalance | Double | 框架-基准资金包余额 | 仅部分直销框架客户需要关注（此部分客户的账户可用余额为pcBalance+balance） |
| cost | Double | 账户累积消费，历史字段不建议参考，以数据报告为准 | - |
| payment | Double | 账户投资总额，历史字段不建议参考，以数据报告为准 | - |
| budget | Double | 账户预算 | 默认值：0当设置为日预算时，取值范围：[50, 10000000] |
| regionTarget | Integer[] | 推广地域列表 | 可选地域名称见地域编码 |
| excludeIp | String[] | IP排除列表 | 支持添加/删除ipv4和ipv6类型ip, 例如：2001:0DB8:0000:0023:0008:0800:200C:417A |
| openDomains | String[] | 账户开放域名列表(开放域名是在已有注册域名的基础上，再添加用户可以推广的域名，系统默认用户只能推广注册域名，物料URL需要和注册域名及开放域名的主域一致即可) | 该字段只读，不支持更新操作 |
| budgetType | Integer | 预算类型 | 取值范围：枚举值，列表如下0 - 不设置预算1 - 日预算与budget配合使用，修改预算时必填 |
| regDomain | String | 账户注册域名 | - |
| userStat | Integer | 用户状态 | 取值范围：枚举值，列表如下1 - 开户金未到2 - 正常生效3 - 余额为零4 - 未通过审核6 - 审核中7 - 被禁用11 - 预算不足 |
| budgetOfflineTime | OfflineTimeType[] | 到达预算下线时段 | 数组元素个数限制：最近有过下线时段的7个自然日的下线和上线时段（这7个自然日中若某日期距当前已超过30天，则不返回）；null：无到达预算下线时段；注：时间为date类型，格式示例”Jul 10, 2015 11:00:00 AM” |
| userLevel | Integer | 客户权益-账户等级 | 取值范围：枚举值，列表如下1 - 三星客户2 - 二星客户3 - 一星客户4 - 未生效客户 |
| regionPriceFactor | RegionPriceFactor[] | 分地域出价系数 | - |
| cid | Long | 账户主体id | - |
| liceName | String | 账户主体名称 | - |
| geoLocationStatus | Integer | 推广地域地理位置选项 | 取值范围：枚举值，列表如下0 - 该地区内或搜索意图在该地区的所有用户（包含：正在该地区的用户、长时间内居住或者工作在该地区的用户、在搜索词中对该地区表现出明确兴趣的用户）1 - 该地区内的所有用户（包含：正在该地区的用户、长时间内居住或者工作在该地区的用户）原账户层级的“搜索意图地域词扩展”已升级为计划地域设置中的推广地域地理位置选项 |
| excludeQueryRegionStatus | Boolean | 搜索意图地域词排除 | 取值范围：枚举值，列表如下true - 启用false - 关闭 |
| longMonitorSublink | String | 创意组件-文字链监控代码 | 可填充监控代码默认值："product=xinxizhenlie_longsublink"，如需自定义，请直接录入监控代码（字符限制255） |
| accountMonitorUrl | String | 通用点击监测地址 | 当前通用点击检测地址长度限制1024 |
| time | Date | 下线/上线时间点 | - |
| flag | Integer | 下线/上线状态 | 取值范围：枚举值，列表如下1 - 上线0 - 下线 |
| regionId | Integer | 地域ID | 可选地域ID见地域编码 |
| priceFactor | Double | 出价系数 | 取值范围：[0.1, 10.0] |

<details>
<summary>请求示例</summary>

```json
{
  "accountFields" : [ "userId", "balance", "pcBalance", "budget", "budgetType", "budgetOfflineTime", "cost", "excludeIp", "openDomains", "payment", "regDomain", "regionTarget", "userStat", "userLevel", "regionPriceFactor", "geoLocationStatus", "excludeQueryRegionStatus", "longMonitorSublink", "accountMonitorUrl", "cid", "liceName" ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "budget" : 0.0,
    "regionTarget" : [ 1 ],
    "excludeIp" : [ "example string" ],
    "budgetType" : 0,
    "regionPriceFactor" : [ {
      "regionId" : 1,
      "priceFactor" : 10.0
    } ],
    "geoLocationStatus" : 0,
    "excludeQueryRegionStatus" : true,
    "longMonitorSublink" : "example string",
    "accountMonitorUrl" : "example string"
    "cid" : "example string"
    "liceName" : "example string"
  } ]
}
```

</details>

---

## 计划

### 删除计划

**请求地址:** `https://api.baidu.com/json/sms/service/CampaignService/deleteCampaign`

**方法说明:** 删除指定的计划(可批量)

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| campaignIds | Long[] | 计划ID集合 | 集合长度限制：[1, 100] |

<details>
<summary>请求示例</summary>

```json
{
        "campaignIds": [
            149248725,
            149248783
        ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
        "data": []
}
```

</details>

---

### 更新计划

**请求地址:** `https://api.baidu.com/json/sms/service/CampaignService/updateCampaign`

**方法说明:** 根据指定的计划ID更新推广计划的属性

2023年2月28日起，出价策略与推广计划转化目标设置规则升级，[详情点击了解](https://dev2.baidu.com/notice?noticeId=457)

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| campaignTypes 必填 | CampaignType[] | 更新推广计划字段 | 集合长度限制：[1, 100] |
| campaignId  必填 | Long | 计划ID | - |
| campaignName | String | 计划名称 | 长度限制：最大30个字节（1个中文按2个字节计算，英文、数字按1个字节计算） |
| budget | Double | 计划每日预算 | 取值范围：[50, Min(10000000, 账户预算)]默认为null：不限定预算 |
| regionTarget | Integer[] | 计划推广地域 | 默认为null：不限定推广地域，使用账户推广地域；可选地域对应代码见[地域代码](https://dev2.baidu.com/content?sceneType=0&pageId=100215&nodeId=325&subhead=)。 |
| negativeWords | String[] | 短语否定关键词列表 | 空数组[]-不设置短语否定关键词；根据用户等级（账户对象userLevel字段）上限不等：未生效客户(4)：200；一星客户(3)：200； 二星客户(2): 400；三星客户(1): 500；注：商品计划尚未支持此字段 |
| exactNegativeWords | String[] | 精确否定关键词列表 | 空数组[]-不设置精确否定关键词；根据用户等级（账户对象userLevel字段）上限不等：未生效客户(4)：200；一星客户(3)：400；二星客户(2)：700；三星客户(1)：900；注：商品计划尚未支持此字段 |
| schedule | ScheduleType[] | 计划推广暂停时段 | 默认不设置，表示无推广暂停时段限制；数组元素个数限制：每天可设置最多12个推广暂停时间，每周可设置最多84个推广暂停时间；在updateCampaign接口中，如果该字段设置为空数组,即"schedule":[]，表示清空原有暂停时段设置" |
| pause | Boolean | 暂停状态 | 默认值：false取值范围：枚举值，列表如下true - 暂停false - 启用(商品计划该字段新建时默认值为false) |
| businessPointId | Long | 推广业务ID | [查询推广业务方法](https://dev2.baidu.com/content?sceneType=0&pageId=101009&nodeId=712&subhead=) |
| regionPriceFactor | RegionPriceFactor[] | 分地域出价系数 | 选填，默认为账户投放地域，出价系数为1 |
| schedulePriceFactors | SchedulePriceFactor[] | 分时段出价系数 | 选填，默认为全时段投放，出价系数为1 |
| shopType | Integer | 电商店铺类型 | 取值范围：枚举值，列表如下1 - 度小店3 - 第三方店铺31 - 淘宝（含天猫）32 - 京东33 - 拼多多34 - 苏宁**当营销目标为"电商店铺推广"时必填，其他营销目标不支持** |
| equipmentType | Integer | 推广设备 | 默认值：3取值范围：枚举值，列表如下1 - 计算机2 - 移动3 - 不限marketingTargetId=0，equipmentType可取1,2,3marketingTargetId=1，equipmentType可取2,3marketingTargetId=2，equipmentType可取2,3marketingTargetId=4，shopType=1，equipmentType可取2,3marketingTargetId=4，shopType=3,31,32,33,34，equip... |
| campaignBid | Double | 计划点击出价 | 默认值：0取值范围：[0.01, 999.99]单位：元/点击不填写会使用单元出价campaignBidType=0时api选填campaignBidType=1时不支持该字段 |
| campaignOcpcBidType | Integer | 计划出价模式 | 取值范围：枚举值，列表如下0 - cpc1 - 目标转化成本2 - 增强模式3 - 放量模式campaignBidType=0时，默认值0: cpccampaignBidType=1时，默认值1: 目标转化成本当campaignBidType=0，修改时仅支持0,2当campaignBidType=1，修改时仅支持1,3 |
| campaignOcpcBid | Double | 转化计划出价 | 默认值：0取值范围：[0.1, 9999]单位：元/转化**campaignOcpcBidType=1时必填，否则禁止填写** |
| campaignTransTypes | Integer[] | 计划目标转化 | 取值范围：枚举值，列表如下1 - 咨询按钮点击2 - 电话按钮点击3 - 表单提交成功4 - APP激活5 - 表单按钮点击6 - 下载（预约）按钮点击7 - 购买按钮点击9 - 电商订单10 - 服务购买成功12 - 预约按钮点击13 - 表单有效请求14 - 订单提交成功15 - 加入购物车按钮点击16 - 表单调起按钮点击17 - 三句话咨询18 - 留线索19 - 一句话咨询20 - 关键页面浏览25 - APP注册26 - APP付费27 - 客户自定义28 - 次日留存30 - 电话... |
| campaignDeepTransTypes | Integer[] | 计划深度转化 | 取值范围：枚举值，列表如下9 - 电商订单10 - 服务购买成功14 - 订单提交成功18 - 留线索25 - APP注册26 - APP付费28 - 次日留存30 - 电话拨通42 - 授信49 - 登录50 - 预约52 - 深度使用56 - 到店72 - 聊到相关业务（小流量）73 - 回访-电话接通（小流量）74 - 回访-信息确认（小流量）75 - 回访-发现意向（小流量）76 - 回访-高潜成交（小流量）77 - 回访-成单客户（小流量）79 - 微信加粉成功89 - 放款**cam... |
| campaignCvSources | Integer[] | 数据来源 | 取值范围：枚举值，列表如下1000 - 不限1 - 网页JS布码2 - 线索API3 - 咨询工具授权4 - 基木鱼/度小店5 - 应用API6 - 电话数据授权7 - 百度智能小程序SDK8 - 应用SDK9 - 爱番番10 - 百度APP23 - 百度统计网站导入24 - 百度统计小程序导入非必填选项，默认为不限web端在增强模式，目标转化成本，放量模式下可选，会根据客户联调或可用数据做过滤，且在投放设备包括pc时有文案提示仅展示客户联调或可用数据接入方式 |
| storePageInfos | StorePageInfoType[] | 本地计划设置的门店落地页信息 | 营销目标为本地推广时必填且不能为空 |
| transAsset | Integer | 转化资产类型 | 取值范围：枚举值，列表如下0 - 不限2 - 指定资产 |
| geoLocationStatus | Integer | 推广地域地理位置选项 | 取值范围：枚举值，列表如下0 - 该地区内或搜索意图在该地区的所有用户（包含：正在该地区的用户、长时间内居住或者工作在该地区的用户、在搜索词中对该地区表现出明确兴趣的用户）1 - 该地区内的所有用户（包含：正在该地区的用户、长时间内居住或者工作在该地区的用户） |
| startHour | Long | 开始时间 | 以小时为单位，取值范围：[0,23] |
| endHour | Long | 结束时间 | 以小时为单位，取值范围：[1,24] |
| weekDay | Long | 星期几 | 取值范围：枚举值，列表如下1 - 星期一2 - 星期二3 - 星期三4 - 星期四5 - 星期五6 - 星期六7 - 星期日 |
| time | Date | 下线/上线时间点 | - |
| flag | Integer | 下线/上线状态 | 取值范围：枚举值，列表如下1 - 上线0 - 下线 |
| regionId | Integer | 地域ID | 可选地域ID见地域编码 |
| priceFactor | Double | 出价系数 | 取值范围：[0.1, 1.0] |
| timeId | Integer | 时间段编号 | 取值为3位整数，从左至右:第一位表示每周的星期几，取值为 1-7第二三位表示小时编号，取值范围为 00-23不设置的小时内将不投放例如：设置每周一的0点到1点投放时，该值取100；每周六的22点到23点投放时，该值取622 |
| priceFactor | Double | 出价系数 | 取值范围：[0.1, 10.0] |
| storeId | Long | 门店id | 必填 |
| pageId | Long | 落地页id | 必填 |
| url | String | 落地页url | 只读 |
| pageType | Integer | 落地页类型 0 梧桐 1 h5+小程序 2 医美 3 旺铺 | 必填 |
| monitorCode | String | 监控代码 | 选填 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| campaignId | Long | 计划ID |  |
| campaignName | String | 计划名称 |  |
| budget | Double | 计划每日预算 |  |
| regionTarget | Integer[] | 计划推广地域 |  |
| negativeWords | String[] | 短语否定关键词列表 |  |
| exactNegativeWords | String[] | 精确否定关键词列表 |  |
| schedule | ScheduleType[] | 计划推广暂停时段 |  |
| pause | Boolean | 暂停状态 |  |
| businessPointId | Long | 推广业务ID |  |
| regionPriceFactor | RegionPriceFactor[] | 分地域出价系数 |  |
| schedulePriceFactors | SchedulePriceFactor[] | 分时段出价系数 |  |
| shopType | Integer | 电商店铺类型 |  |
| equipmentType | Integer | 推广设备 |  |
| campaignBid | Double | 计划点击出价 |  |
| campaignOcpcBidType | Integer | 计划出价模式 |  |
| campaignOcpcBid | Double | 转化计划出价 |  |
| campaignTransTypes | Integer[] | 计划目标转化 |  |
| campaignDeepTransTypes | Integer[] | 计划深度转化 |  |
| campaignCvSources | Integer[] | 数据来源 |  |
| storePageInfos | StorePageInfoType[] | 本地计划设置的门店落地页信息 |  |
| transAsset | Integer | 转化资产类型 |  |
| transAssetId | Long | 转化资产ID |  |
| geoLocationStatus | Integer | 推广地域地理位置选项 |  |
| startHour | Long | 开始时间 |  |
| endHour | Long | 结束时间 |  |
| weekDay | Long | 星期几 |  |
| time | Date | 下线/上线时间点 |  |
| flag | Integer | 下线/上线状态 |  |
| regionId | Integer | 地域ID |  |
| priceFactor | Double | 出价系数 |  |
| timeId | Integer | 时间段编号 |  |
| priceFactor | Double | 出价系数 |  |
| storeId | Long | 门店id |  |
| pageId | Long | 落地页id |  |
| url | String | 落地页url |  |
| pageType | Integer | 落地页类型 0 梧桐 1 h5+小程序 2 医美 3 旺铺 |  |
| monitorCode | String | 监控代码 |  |

<details>
<summary>请求示例</summary>

```json
{
    "campaignTypes": [
        {
            "campaignId": 87654321,
            "regionTarget": [
                1000
            ],
            "campaignOcpcBidType": 1,
            "priceRatio": 1,
            "campaignOcpcBid": 6.5,
            "exactNegativeWords": [
                "精确否词测试"
            ],
            "equipmentType": 2,
            "regionPriceFactor": [
                {
                    "regionId": 1000,
                    "priceFactor": 1
                }
            ],
            "campaignDeepTransTypes": [
                72
            ],
            "budget": 100,
            "schedulePriceFactors": [
                {
                    "timeId": 710,
                    "priceFactor": 1
                },
                {
                    "time
```

</details>

<details>
<summary>返回示例</summary>

```json
{
	"data": [{
		"regionTarget": [
			1000
		],
		"schedulePriceFactors": [{
				"timeId": 710,
				"priceFactor": 1
			},
			{
				"timeId": 110,
				"priceFactor": 1
			},
			{
				"timeId": 210,
				"priceFactor": 1
			},
			{
				"timeId": 310,
				"priceFactor": 1
			},
			{
				"timeId": 410,
				"priceFactor": 1
			},
			{
				"timeId": 510,
				"priceFactor": 1
			},
			{
				"timeId": 610,
				"priceFactor": 1
			}
		],
		"businessPointId": 123456,
		"campaignId": 87654321,
		"campaignOcpcBidType": 1,
		"marketingTargetId": 4,
		"campaignOcpcBid": 6.5,
		"exactNegativeWords": [
			"精确否词测试"
		],
		"pause": false,
		"equipmentType": 2,
		"campaignTransTypes": [
			90
		],
		"schedule": [{
				"endHour": 10,
				"startHour": 0,
				"weekDay": 1
			},
			{
				"endHour": 10,
				"start
```

</details>

---

### 查询计划

**请求地址:** `https://api.baidu.com/json/sms/service/CampaignService/getCampaign`

**方法说明:** 根据指定的计划ID获取推广计划(ID可批量)

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| campaignFields 必填 | String[] | 需要查询的计划属性 | 取值范围：枚举值，列表如下campaignId - 计划IDcampaignName - 计划名称budget - 计划每日预算budgetOfflineTime - 预算下线时间exactNegativeWords - 精确否定关键词列表regionTarget - 计划推广地域negativeWords - 短语否定关键词列表pause - 暂停状态schedule - 计划推广暂停时段status - 计划状态marketingTargetId - 营销目标类型adType - 计划类型b... |
| campaignIds | Long[] | 查询推广计划ID集合 | 集合长度限制：[0, 100]输入空返回整个账户的计划ID |
| adType | Integer | 投放广告类型 | 取值范围：枚举值，列表如下0 - 普通计划14 - 商品计划不传默认返回全部 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| campaignId | Long | 计划ID |  |
| campaignName | String | 计划名称 |  |
| budget | Double | 计划每日预算 |  |
| regionTarget | Integer[] | 计划推广地域 |  |
| negativeWords | String[] | 短语否定关键词列表 |  |
| exactNegativeWords | String[] | 精确否定关键词列表 |  |
| schedule | ScheduleType[] | 计划推广暂停时段 |  |
| budgetOfflineTime | OfflineTimeType[] | 预算下线时间 |  |
| pause | Boolean | 暂停状态 |  |
| status | Integer | 计划状态 |  |
| adType | Integer | 计划类型 |  |
| businessPointId | Long | 推广业务ID |  |
| businessPointName | String | 推广业务字面 |  |
| smartRegion | Boolean | 商品计划: 智能地域开关 |  |
| paDevice | Integer | 商品计划: 计划的投放设备 |  |
| os | String[] | 商品计划: 计划的投放设备平台 |  |
| regionPriceFactor | RegionPriceFactor[] | 分地域出价系数 |  |
| schedulePriceFactors | SchedulePriceFactor[] | 分时段出价系数 |  |
| marketingTargetId | Integer | 营销目标类型 |  |
| shopType | Integer | 电商店铺类型 |  |
| equipmentType | Integer | 推广设备 |  |
| campaignBidType | Integer | 计划出价方式 |  |
| campaignBid | Double | 计划点击出价 |  |
| campaignOcpcBidType | Integer | 计划出价模式 |  |
| campaignOcpcBid | Double | 转化计划出价 |  |
| campaignTransTypes | Integer[] | 计划目标转化 |  |
| campaignDeepTransTypes | Integer[] | 计划深度转化 |  |
| campaignCvSources | Integer[] | 数据来源 |  |
| storePageInfos | StorePageInfoType[] | 本地计划设置的门店落地页信息 |  |
| transAsset | Integer | 转化资产类型 |  |
| transAssetId | Long | 转化资产ID |  |
| geoLocationStatus | Integer | 推广地域地理位置选项 |  |
| startHour | Long | 开始时间 |  |
| endHour | Long | 结束时间 |  |
| weekDay | Long | 星期几 |  |
| time | Date | 下线/上线时间点 |  |
| flag | Integer | 下线/上线状态 |  |
| regionId | Integer | 地域ID |  |
| priceFactor | Double | 出价系数 |  |
| timeId | Integer | 时间段编号 |  |
| priceFactor | Double | 出价系数 |  |
| storeId | Long | 门店id |  |
| pageId | Long | 落地页id |  |
| url | String | 落地页url |  |
| pageType | Integer | 落地页类型 0 梧桐 1 h5+小程序 2 医美 3 旺铺 |  |
| monitorCode | String | 监控代码 |  |

<details>
<summary>请求示例</summary>

```json
{
  "campaignFields" : [ "campaignId", "campaignName", "budget", "budgetOfflineTime", "exactNegativeWords", "regionTarget", "negativeWords", "pause", "schedule", "status", "marketingTargetId", "adType", "businessPointId", "businessPointName", "smartRegion", "regionPriceFactor", "schedulePriceFactors", "shopType", "createTime", "equipmentType", "campaignBidType", "campaignBid", "campaignOcpcBidType", "campaignOcpcBid", "campaignCvSources", "campaignTransTypes", "campaignDeepTransTypes","transAsset", "transAssetId", "geoLocationStatus"],
  "campaignIds" : [86415412],
  "adType" : 0
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [{
    "campaignId": 86415412,
    "campaignName": "测试计划",
    "budget": 50.0,
    "regionTarget": [1000],
    "negativeWords": ["短语否词"],
    "exactNegativeWords": ["精确否词"],
    "schedule": [
        {
           "startHour": 0,
           "endHour": 10,
           "weekDay": 1
        },
        {
           "startHour": 11,
           "endHour": 24,
           "weekDay": 1
        }
    ],
    "budgetOfflineTime": [{
           "time": "Jul 10, 2022 11:00:00 AM",
           "flag": 1
    }],
    "pause": false,
    "status" : 22,
    "adType": 0,
    "businessPointId": 1234,
    "businessPointName": "测试业务",
    "smartRegion": false,
    "regionPriceFactor": [{
           "regionId": 1000,
           "priceFactor": 1
    }],
    "schedulePriceFactors" : [{
           "timeId"
```

</details>

---

### 查询计划已使用的推广业务

**请求地址:** `https://api.baidu.com/json/sms/service/BusinessPointService/getBindBusinessPointList`

**方法说明:** 查询计划已使用的推广业务

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| needPath | Boolean | 是否需要将完整路径填充到响应的paths字段 | true-需要，false-不需要 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| paths | BusinessPointListType[][] | 推广业务类目完整链路 | - |
| businessPointId | Long | 业务类目ID | - |
| businessPointName | String | 业务类目名称 | - |

<details>
<summary>请求示例</summary>

```json
{
  "needPath" : false
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "paths" : [ [ {
      "businessPointId" : 1,
      "businessPointName" : "example string"
    } ] ]
  } ]
}
```

</details>

---

### 添加计划

**请求地址:** `https://api.baidu.com/json/sms/service/CampaignService/addCampaign`

**方法说明:** 新增推广计划，新增时可设置计划的属性设置。

2023年2月28日起，出价策略与推广计划转化目标设置规则升级，[详情点击了解](https://dev2.baidu.com/notice?noticeId=457)

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| campaignTypes 必填 | CampaignType[] | 新增推广计划物料 | 集合长度限制：[1, 100] |
| adType | Integer | 投放广告类型 | 默认值：0取值范围：枚举值，列表如下0 - 普通计划14 - 商品计划 |
| campaignName  必填 | String | 计划名称 | 长度限制：最大30个字节（1个中文按2个字节计算，英文、数字按1个字节计算） |
| budget | Double | 计划每日预算 | 取值范围：[50, Min(10000000, 账户预算)]默认为null：不限定预算 |
| regionTarget | Integer[] | 计划推广地域 | 默认为null：不限定推广地域，使用账户推广地域；可选地域对应代码见[地域代码](https://dev2.baidu.com/content?sceneType=0&pageId=100215&nodeId=325&subhead=)。 |
| negativeWords | String[] | 短语否定关键词列表 | 空数组[]-不设置短语否定关键词；根据用户等级（账户对象userLevel字段）上限不等：未生效客户(4)：200；一星客户(3)：200； 二星客户(2): 400；三星客户(1): 500；注：商品计划尚未支持此字段 |
| exactNegativeWords | String[] | 精确否定关键词列表 | 空数组[]-不设置精确否定关键词；根据用户等级（账户对象userLevel字段）上限不等：未生效客户(4)：200；一星客户(3)：400；二星客户(2)：700；三星客户(1)：900；注：商品计划尚未支持此字段 |
| schedule | ScheduleType[] | 计划推广暂停时段 | 默认不设置，表示无推广暂停时段限制；数组元素个数限制：每天可设置最多12个推广暂停时间，每周可设置最多84个推广暂停时间；在updateCampaign接口中，如果该字段设置为空数组,即"schedule":[]，表示清空原有暂停时段设置" |
| pause | Boolean | 暂停状态 | 默认值：false取值范围：枚举值，列表如下true - 暂停false - 启用(商品计划该字段新建时默认值为false) |
| businessPointId | Long | 推广业务ID | [查询推广业务方法](https://dev2.baidu.com/content?sceneType=0&pageId=101009&nodeId=712&subhead=) |
| smartRegion | Boolean | 商品计划: 智能地域开关 | 默认值：false取值范围：枚举值，列表如下true - 开启false - 关闭 |
| paDevice | Integer | 商品计划: 计划的投放设备 | 默认值：0取值范围：枚举值，列表如下0 - 全部1 - 移动2 - 计算机商品目录新建计划equipmentType与paDevice投放设备类型保持一致**商品目录更新计划不支持修改equipmentType与paDevice** |
| os | String[] | 商品计划: 计划的投放设备平台 | 默认值：全选取值范围：枚举值，列表如下IPHONE - 苹果手机ANDROID - 安卓手机OTHERS - 其他类型 |
| regionPriceFactor | RegionPriceFactor[] | 分地域出价系数 | 选填，默认为账户投放地域，出价系数为1 |
| schedulePriceFactors | SchedulePriceFactor[] | 分时段出价系数 | 选填，默认为全时段投放，出价系数为1 |
| marketingTargetId  必填 | Integer | 营销目标类型 | 取值范围：枚举值，列表如下0 - 网站链接1 - 应用推广2 - 本地推广4 - 电商店铺推广5 - 商品目录 |
| shopType | Integer | 电商店铺类型 | 取值范围：枚举值，列表如下1 - 度小店3 - 第三方店铺31 - 淘宝（含天猫）32 - 京东33 - 拼多多34 - 苏宁**当营销目标为"电商店铺推广"时必填，其他营销目标不支持** |
| equipmentType | Integer | 推广设备 | 默认值：3取值范围：枚举值，列表如下1 - 计算机2 - 移动3 - 不限marketingTargetId=0，equipmentType可取1,2,3marketingTargetId=1，equipmentType可取2,3marketingTargetId=2，equipmentType可取2,3marketingTargetId=4，shopType=1，equipmentType可取2,3marketingTargetId=4，shopType=3,31,32,33,34，equip... |
| campaignBidType | Integer | 计划出价方式 | 默认值：0取值范围：枚举值，列表如下0 - 点击1 - 转化**该字段不支持修改** |
| campaignBid | Double | 计划点击出价 | 默认值：0取值范围：[0.01, 999.99]单位：元/点击不填写会使用单元出价campaignBidType=0时api选填**campaignBidType=1时不支持该字段** |
| campaignOcpcBidType | Integer | 计划出价模式 | 取值范围：枚举值，列表如下0 - cpc1 - 目标转化成本2 - 增强模式3 - 放量模式campaignBidType=0时，默认值0: cpccampaignBidType=1时，默认值1: 目标转化成本当campaignBidType=0，修改时仅支持0,2当campaignBidType=1，修改时仅支持1,3 |
| campaignOcpcBid | Double | 转化计划出价 | 默认值：0取值范围：[0.1, 9999]单位：元/转化**campaignOcpcBidType=1时必填，否则禁止填写** |
| campaignTransTypes | Integer[] | 计划目标转化 | 取值范围：枚举值，列表如下1 - 咨询按钮点击2 - 电话按钮点击3 - 表单提交成功4 - APP激活5 - 表单按钮点击6 - 下载（预约）按钮点击7 - 购买按钮点击9 - 电商订单10 - 服务购买成功12 - 预约按钮点击13 - 表单有效请求14 - 订单提交成功15 - 加入购物车按钮点击16 - 表单调起按钮点击17 - 三句话咨询18 - 留线索19 - 一句话咨询20 - 关键页面浏览25 - APP注册26 - APP付费27 - 客户自定义28 - 次日留存30 - 电话... |
| campaignDeepTransTypes | Integer[] | 计划深度转化 | 取值范围：枚举值，列表如下9 - 电商订单10 - 服务购买成功14 - 订单提交成功18 - 留线索25 - APP注册26 - APP付费28 - 次日留存30 - 电话拨通42 - 授信49 - 登录50 - 预约52 - 深度使用56 - 到店72 - 聊到相关业务（小流量）73 - 回访-电话接通（小流量）74 - 回访-信息确认（小流量）75 - 回访-发现意向（小流量）76 - 回访-高潜成交（小流量）77 - 回访-成单客户（小流量）79 - 微信加粉成功89 - 放款**cam... |
| campaignCvSources | Integer[] | 数据来源 | 取值范围：枚举值，列表如下1000 - 不限1 - 网页JS布码2 - 线索API3 - 咨询工具授权4 - 基木鱼/度小店5 - 应用API6 - 电话数据授权7 - 百度智能小程序SDK8 - 应用SDK9 - 爱番番10 - 百度APP23 - 百度统计网站导入24 - 百度统计小程序导入非必填选项，默认为不限web端在增强模式，目标转化成本，放量模式下可选，会根据客户联调或可用数据做过滤，且在投放设备包括pc时有文案提示仅展示客户联调或可用数据接入方式 |
| storePageInfos | StorePageInfoType[] | 本地计划设置的门店落地页信息 | 营销目标为本地推广时必填且不能为空 |
| transAsset | Integer | 转化资产类型 | 取值范围：枚举值，列表如下0 - 不限2 - 指定资产 |
| geoLocationStatus | Integer | 推广地域地理位置选项 | 取值范围：枚举值，列表如下0 - 该地区内或搜索意图在该地区的所有用户（包含：正在该地区的用户、长时间内居住或者工作在该地区的用户、在搜索词中对该地区表现出明确兴趣的用户）1 - 该地区内的所有用户（包含：正在该地区的用户、长时间内居住或者工作在该地区的用户） |
| startHour | Long | 开始时间 | 以小时为单位，取值范围：[0,23] |
| endHour | Long | 结束时间 | 以小时为单位，取值范围：[1,24] |
| weekDay | Long | 星期几 | 取值范围：枚举值，列表如下1 - 星期一2 - 星期二3 - 星期三4 - 星期四5 - 星期五6 - 星期六7 - 星期日 |
| time | Date | 下线/上线时间点 | - |
| flag | Integer | 下线/上线状态 | 取值范围：枚举值，列表如下1 - 上线0 - 下线 |
| regionId | Integer | 地域ID | 可选地域ID见地域编码 |
| priceFactor | Double | 出价系数 | 取值范围：[0.1, 1.0] |
| timeId | Integer | 时间段编号 | 取值为3位整数，从左至右:第一位表示每周的星期几，取值为 1-7第二三位表示小时编号，取值范围为 00-23不设置的小时内将不投放例如：设置每周一的0点到1点投放时，该值取100；每周六的22点到23点投放时，该值取622 |
| priceFactor | Double | 出价系数 | 取值范围：[0.1, 10.0] |
| storeId | Long | 门店id | 必填 |
| pageId | Long | 落地页id | 必填 |
| url | String | 落地页url | 只读 |
| pageType | Integer | 落地页类型 0 梧桐 1 h5+小程序 2 医美 3 旺铺 | 必填 |
| monitorCode | String | 监控代码 | 选填 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| campaignName | String | 计划名称 |  |
| budget | Double | 计划每日预算 |  |
| regionTarget | Integer[] | 计划推广地域 |  |
| negativeWords | String[] | 短语否定关键词列表 |  |
| exactNegativeWords | String[] | 精确否定关键词列表 |  |
| schedule | ScheduleType[] | 计划推广暂停时段 |  |
| pause | Boolean | 暂停状态 |  |
| businessPointId | Long | 推广业务ID |  |
| smartRegion | Boolean | 商品计划: 智能地域开关 |  |
| paDevice | Integer | 商品计划: 计划的投放设备 |  |
| os | String[] | 商品计划: 计划的投放设备平台 |  |
| regionPriceFactor | RegionPriceFactor[] | 分地域出价系数 |  |
| schedulePriceFactors | SchedulePriceFactor[] | 分时段出价系数 |  |
| marketingTargetId | Integer | 营销目标类型 |  |
| shopType | Integer | 电商店铺类型 |  |
| equipmentType | Integer | 推广设备 |  |
| campaignBidType | Integer | 计划出价方式 |  |
| campaignBid | Double | 计划点击出价 |  |
| campaignOcpcBidType | Integer | 计划出价模式 |  |
| campaignOcpcBid | Double | 转化计划出价 |  |
| campaignTransTypes | Integer[] | 计划目标转化 |  |
| campaignDeepTransTypes | Integer[] | 计划深度转化 |  |
| campaignCvSources | Integer[] | 数据来源 |  |
| storePageInfos | StorePageInfoType[] | 本地计划设置的门店落地页信息 |  |
| transAsset | Integer | 转化资产类型 |  |
| transAssetId | Long | 转化资产ID |  |
| geoLocationStatus | Integer | 推广地域地理位置选项 |  |
| startHour | Long | 开始时间 |  |
| endHour | Long | 结束时间 |  |
| weekDay | Long | 星期几 |  |
| time | Date | 下线/上线时间点 |  |
| flag | Integer | 下线/上线状态 |  |
| regionId | Integer | 地域ID |  |
| priceFactor | Double | 出价系数 |  |
| timeId | Integer | 时间段编号 |  |
| priceFactor | Double | 出价系数 |  |
| storeId | Long | 门店id |  |
| pageId | Long | 落地页id |  |
| url | String | 落地页url |  |
| pageType | Integer | 落地页类型 0 梧桐 1 h5+小程序 2 医美 3 旺铺 |  |
| monitorCode | String | 监控代码 |  |

<details>
<summary>请求示例</summary>

```json
{
    "campaignTypes": [
        {
            "campaignName": "测试计划",
            "budget": 100,
            "regionTarget": [
                1000
            ],
            "negativeWords": [
                "短语否词"
            ],
            "exactNegativeWords": [
                "精确否词"
            ],
            "status": 22,
            "pause": false,
            "adType": 0,
            "regionPriceFactor": [
                {
                    "regionId": 1000,
                    "priceFactor": 1
                }
            ],
            "schedulePriceFactors": [
                {
                    "timeId": 710,
                    "priceFactor": 1
                },
                {
                    "timeId": 110,
                    "priceFactor": 1
                
```

</details>

<details>
<summary>返回示例</summary>

```json
{
	"data": [{
		"campaignBidType": 1,
		"regionTarget": [
			1000
		],
		"campaignOcpcBidType": 1,
		"marketingTargetId": 4,
		"campaignOcpcBid": 5.6,
		"exactNegativeWords": [
			"精确否词"
		],
		"equipmentType": 3,
		"pcPriceRatio": 1,
		"adType": 0,
		"regionPriceFactor": [{
			"regionId": 1000,
			"priceFactor": 1
		}],
		"campaignDeepTransTypes": [
			72
		],
		"budget": 50,
		"schedulePriceFactors": [{
				"timeId": 710,
				"priceFactor": 1
			},
			{
				"timeId": 110,
				"priceFactor": 1
			},
			{
				"timeId": 210,
				"priceFactor": 1
			},
			{
				"timeId": 310,
				"priceFactor": 1
			},
			{
				"timeId": 410,
				"priceFactor": 1
			},
			{
				"timeId": 510,
				"priceFactor": 1
			},
			{
				"timeId": 610,
				"priceFactor": 1
			}
		],
		"businessPointId": 123456,
		"cam
```

</details>

---

## 单元

### 删除单元

**请求地址:** `https://api.baidu.com/json/sms/service/AdgroupService/deleteAdgroup`

**方法说明:** 删除推广单元

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| adgroupIds | Long[] | 单元ID集合 | 集合长度限制：[1, 10000] |

<details>
<summary>请求示例</summary>

```json
{
        "adgroupIds" : [5780331267]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
        "data": []
}
```

</details>

---

### 更新单元

**请求地址:** `https://api.baidu.com/json/sms/service/AdgroupService/updateAdgroup`

**方法说明:** 更新推广单元

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| adgroupTypes | AdgroupType[] | 更新推广单元字段 | 集合长度限制：[1, 5000] |
| adgroupId | Long | 推广单元ID | - |
| adgroupName | String | 单元名称 | 最大30个字节（1个中文按2个字节计算，英文、数字按1个字节计算） |
| maxPrice | Double | 单元出价 | 取值范围：(0,999.99] &&<= 所属计划预算 |
| pause | Boolean | 推广单元启用/暂停 | 取值范围：枚举值，列表如下true - 暂停false - 启用 |
| appShopDirectStatus | Integer | 应用商店直投 | 仅支持应用推广营销目标默认值：关闭取值范围：枚举值，列表如下0 - 关闭1 - 开启 |
| negativeWords | String[] | 单元短语否定关键词 | 单个否词最长40字节(1个中文按2个字节计算，英文、数字按1个字节计算)，数组元素个数最多200个 |
| exactNegativeWords | String[] | 单元精确否定关键词 | 单个否词最长40字节(1个中文按2个字节计算，英文、数字按1个字节计算)，数组元素个数最多200个 |
| segmentRecommendStatus | Integer | 自动配图开关 | 默认值：0取值范围：枚举值，列表如下0 - 开启1 - 关闭 |
| creativeTextOptimizationStatus | Boolean | 自动文案优化 | 默认值：true取值范围：枚举值，列表如下true - 开启false - 关闭 |
| productSetId | Long | 虚拟商品组id | 计划类型为商品计划时必填，使用DpaProductSetService服务创建商品组 |
| paPrice | Double | 推广单元商品出价 | 计划类型为商品计划时必填，优先级高于maxPrice。商品组中每个商品每次展现并被点击的最高费用取值范围：(0,999.99] |
| monitorUrl | String | 单元层级监控url | 仅计划类型为商品计划时支持。单元层级监控url，附加到所有样式中作为监控url。 |
| pcFinalUrl | String | 计算机最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackParam | String | 计算机监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackTemplate | String | 计算机第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileFinalUrl | String | 移动最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackParam | String | 移动监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackTemplate | String | 移动第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| adgroupAutoTargetingStatus | Boolean | 自动定向 | 默认值：true取值范围：枚举值，列表如下true - 开启false - 关闭 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| adgroupId | Long | 推广单元ID |  |
| adgroupName | String | 单元名称 |  |
| maxPrice | Double | 单元出价 |  |
| pause | Boolean | 推广单元启用/暂停 |  |
| appShopDirectStatus | Integer | 应用商店直投 |  |
| negativeWords | String[] | 单元短语否定关键词 |  |
| exactNegativeWords | String[] | 单元精确否定关键词 |  |
| segmentRecommendStatus | Integer | 自动配图开关 |  |
| creativeTextOptimizationStatus | Boolean | 自动文案优化 |  |
| productSetId | Long | 虚拟商品组id |  |
| paPrice | Double | 推广单元商品出价 |  |
| monitorUrl | String | 单元层级监控url |  |
| pcFinalUrl | String | 计算机最终访问网址，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| pcTrackParam | String | 计算机监控后缀，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| pcTrackTemplate | String | 计算机第三方追踪模板，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| mobileFinalUrl | String | 移动最终访问网址，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| mobileTrackParam | String | 移动监控后缀，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| mobileTrackTemplate | String | 移动第三方追踪模板，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| adgroupAutoTargetingStatus | Boolean | 自动定向 |  |

<details>
<summary>请求示例</summary>

```json
{
        "adgroupTypes": [
            {
                "adgroupId": 5780936386,
                "adgroupName": "xx单元名",
                "maxPrice": 6.6,
                "pause": true,
                "appShopDirectStatus": 1,
                "negativeWords": [
                    "短语否词1"
                ],
                "exactNegativeWords": [
                    "精确否词1"
                ],
                "pcFinalUrl": "https://sjh.baidu.com/site/wjz0c/11111111",
                "pcTrackParam": "555",
                "pcTrackTemplate": "https://mrcrm.com?a={lpurl}"
                "segmentRecommendStatus": 1
            }
        ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
        "data": [
            {
                "adgroupId": 5780936386,
                "campaignId": 149248725,
                "adgroupName": "xx单元名",
                "maxPrice": 6.6,
                "pause": true,                
                "appShopDirectStatus": 1,
                "negativeWords": [
                    "短语否词1"
                ],
                "exactNegativeWords": [
                    "精确否词1"
                ],
                "pcFinalUrl": "https://sjh.baidu.com/site/wjz0c/11111111",
                "pcTrackParam": "555",
                "pcTrackTemplate": "https://mrcrm.com?a={lpurl}"
                "segmentRecommendStatus": 1
            }
        ]
}
```

</details>

---

### 查询单元

**请求地址:** `https://api.baidu.com/json/sms/service/AdgroupService/getAdgroup`

**方法说明:** 查询推广单元

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| ids | Long[] | 查询id集合 | idType=5时，类型为单元ID，不超过5000个；idType=3时，类型为计划ID，不超过100个 |
| adgroupFields | String[] | 查询推广单元字段 | 取值范围：枚举值，列表如下adgroupId - 推广单元IDcampaignId - 推广计划IDadgroupName - 单元名称pause - 推广单元启用/暂停appShopDirectStatus - 应用商店直投maxPrice - 单元出价negativeWords - 单元短语否定关键词exactNegativeWords - 单元精确否定关键词status - 单元状态segmentRecommendStatus - 自动配图开关creativeTextOptimizatio... |
| idType | Integer | 查询层级 | 取值范围：枚举值，列表如下3 - 计划ID5 - 单元ID |
| getTemp | Integer | 是否查询单元影子 | 默认值：00 - 只查询单元本身，1 - 只查询单元影子；想要获得单元的全集，需要调用该方法两次，分别为getTemp=0和getTemp=1；影子说明：用户先向系统提交了单元A，并且A已审核通过，之后再对A进行影响审核状态的修改（修改pcFinalUrl、pcTrackParam、pcTrackTemplate、mobileFinalUrl、mobileTrackParam、mobileTrackTemplate等字段），修改后的单元为A’（A’即为影子，仅对审核通过的物料进行修改才会产生影子... |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| adgroupId | Long | 推广单元ID |  |
| campaignId | Long | 推广计划ID |  |
| adgroupName | String | 单元名称 |  |
| maxPrice | Double | 单元出价 |  |
| pause | Boolean | 推广单元启用/暂停 |  |
| negativeWords | String[] | 单元短语否定关键词 |  |
| exactNegativeWords | String[] | 单元精确否定关键词 |  |
| status | Integer | 单元状态 |  |
| appShopDirectStatus | Integer | 应用商店直投 |  |
| adType | Integer | 广告类型 |  |
| segmentRecommendStatus | Integer | 自动配图开关 |  |
| creativeTextOptimizationStatus | Boolean | 自动文案优化 |  |
| productSetId | Long | 虚拟商品组id |  |
| paPrice | Double | 推广单元商品出价 |  |
| monitorUrl | String | 单元层级监控url |  |
| pcFinalUrl | String | 计算机最终访问网址，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| pcTrackParam | String | 计算机监控后缀，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| pcTrackTemplate | String | 计算机第三方追踪模板，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| mobileFinalUrl | String | 移动最终访问网址，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| mobileTrackParam | String | 移动监控后缀，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| mobileTrackTemplate | String | 移动第三方追踪模板，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| adgroupAutoTargetingStatus | Boolean | 自动定向 |  |

<details>
<summary>请求示例</summary>

```json
{
        "ids": [
            149248725
        ],
        "idType": 3,
        "adgroupFields": [
            "adgroupId",
            "campaignId",
            "adgroupName",
            "pause",
            "appShopDirectStatus",
            "maxPrice",
            "negativeWords",
            "exactNegativeWords",
            "status",
            "pcFinalUrl",
            "pcTrackParam",
            "pcTrackTemplate",
            "segmentRecommendStatus"
        ]
    }
```

</details>

<details>
<summary>返回示例</summary>

```json
{
        "data": [
            {
                "adgroupId": 5780936386,
                "campaignId": 149248725,
                "adgroupName": "xx单元名称",
                "maxPrice": 6.8,
                "pause": true,
                "appShopDirectStatus":0
                "negativeWords": [
                    "短语否词1",
                    "短语否词2"
                ],
                "exactNegativeWords": [
                    "精确否词2",
                    "精确否词1"
                ],
                "status": 32,
                "matchPriceStatus": 1,
                "adType": 0,
                "pcFinalUrl": "https://sjh.baidu.com/site/wjz0c/11111111",
                "pcTrackParam": "555",
                "pcTrackTemplate": "https://mrcrm.com?a={lpurl}"
                "segmentRecommendSt
```

</details>

---

### 添加单元

**请求地址:** `https://api.baidu.com/json/sms/service/AdgroupService/addAdgroup`

**方法说明:** 新增推广单元

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| adgroupTypes | AdgroupType[] | 新增推广单元物料 | 集合长度限制：[1, 5000] |
| campaignId | Long | 推广计划ID | - |
| adgroupName | String | 单元名称 | 最大30个字节（1个中文按2个字节计算，英文、数字按1个字节计算） |
| maxPrice | Double | 单元出价 | 取值范围：(0,999.99] &&<= 所属计划预算 |
| pause | Boolean | 推广单元启用/暂停 | 取值范围：枚举值，列表如下true - 暂停false - 启用 |
| negativeWords | String[] | 单元短语否定关键词 | 单个否词最长40字节(1个中文按2个字节计算，英文、数字按1个字节计算)，数组元素个数最多200个 |
| exactNegativeWords | String[] | 单元精确否定关键词 | 单个否词最长40字节(1个中文按2个字节计算，英文、数字按1个字节计算)，数组元素个数最多200个 |
| adType | Integer | 广告类型 | 取值范围：枚举值，列表如下0 - 普通单元14 - 商品单元 |
| appShopDirectStatus | Integer | 应用商店直投 | 仅支持应用推广营销目标默认值：关闭取值范围：枚举值，列表如下0 - 关闭1 - 开启 |
| segmentRecommendStatus | Integer | 自动配图开关 | 默认值：0取值范围：枚举值，列表如下0 - 开启1 - 关闭 |
| creativeTextOptimizationStatus | Boolean | 自动文案优化 | 默认值：true取值范围：枚举值，列表如下true - 开启false - 关闭 |
| productSetId | Long | 虚拟商品组id | 计划类型为商品计划时必填，使用DpaProductSetService服务创建商品组 |
| paPrice | Double | 推广单元商品出价 | 计划类型为商品计划时必填，优先级高于maxPrice。商品组中每个商品每次展现并被点击的最高费用取值范围：(0,999.99] |
| adgroupAutoTargetingStatus | Boolean | 自动定向 | 默认值：true取值范围：枚举值，列表如下true - 开启false - 关闭 |
| monitorUrl | String | 单元层级监控url | 仅计划类型为商品计划时支持。单元层级监控url，附加到所有样式中作为监控url。 |
| pcFinalUrl | String | 计算机最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackParam | String | 计算机监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackTemplate | String | 计算机第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileFinalUrl | String | 移动最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackParam | String | 移动监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackTemplate | String | 移动第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| adgroupAppBinds | AdgroupAppBindInfo | 单元与app的绑定信息 | 仅营销目标为应用推广时填写，其他营销目标不支持。 |
| adType | Integer | 投放广告类型 | 取值范围：枚举值，列表如下0 - 普通单元14 - 商品单元 |
| androidBindType | AndroidAppBindType | Android App绑定信息 | - |
| iosBindType | IosAppBindType | IOS App绑定信息 | - |
| platform | Integer | 设备类型 | 1 |
| channelId | Long | Android的APP包Id, Android的APP唯一标识 | [获取APP素材](https://dev2.baidu.com/content?sceneType=0&pageId=100025&nodeId=61&subhead=) |
| platform | Integer | 设备类型 | 3 |
| appStoreId | Long | IOS包唯一标识 | [获取APP素材](https://dev2.baidu.com/content?sceneType=0&pageId=100025&nodeId=61&subhead=) |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| campaignId | Long | 推广计划ID |  |
| adgroupName | String | 单元名称 |  |
| maxPrice | Double | 单元出价 |  |
| pause | Boolean | 推广单元启用/暂停 |  |
| negativeWords | String[] | 单元短语否定关键词 |  |
| exactNegativeWords | String[] | 单元精确否定关键词 |  |
| adType | Integer | 广告类型 |  |
| appShopDirectStatus | Integer | 应用商店直投 |  |
| segmentRecommendStatus | Integer | 自动配图开关 |  |
| creativeTextOptimizationStatus | Boolean | 自动文案优化 |  |
| productSetId | Long | 虚拟商品组id |  |
| paPrice | Double | 推广单元商品出价 |  |
| monitorUrl | String | 单元层级监控url |  |
| pcFinalUrl | String | 计算机最终访问网址，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| pcTrackParam | String | 计算机监控后缀，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| pcTrackTemplate | String | 计算机第三方追踪模板，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| mobileFinalUrl | String | 移动最终访问网址，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| mobileTrackParam | String | 移动监控后缀，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| mobileTrackTemplate | String | 移动第三方追踪模板，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |  |
| adgroupAutoTargetingStatus | Boolean | 自动定向 |  |

<details>
<summary>请求示例</summary>

```json
{
        "adgroupTypes": [
            {
                "campaignId": 149248725,
                "adgroupName": "xx单元名称",
                "maxPrice": 6.8,
                "pause": true,
                "appShopDirectStatus": 1,
                "negativeWords": [
                    "短语否词1",
                    "短语否词2"
                ],
                "exactNegativeWords": [
                    "精确否词1",
                    "精确否词2"
                ],
                "pcFinalUrl": "https://sjh.baidu.com/site/wjz0c/11111111",
                "pcTrackParam": "555",
                "pcTrackTemplate": "https://mrcrm.com?a={lpurl}"
                "segmentRecommendStatus": 0
            }
        ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
        "data": [
            {
                "adgroupId": 5780933290,
                "campaignId": 149248725,
                "adgroupName": "xx单元名称",
                "maxPrice": 6.8,
                "pause": true,
                "appShopDirectStatus": 1,
                "negativeWords": [
                    "短语否词1",
                    "短语否词2"
                ],
                "exactNegativeWords": [
                    "精确否词2",
                    "精确否词1"
                ],
                "pcFinalUrl": "https://sjh.baidu.com/site/wjz0c/11111111",
                "pcTrackParam": "555",
                "pcTrackTemplate": "https://mrcrm.com?a={lpurl}",
                "segmentRecommendStatus": 0
            }
        ]
}
```

</details>

---

## 关键词

### 删除关键词

**请求地址:** `https://api.baidu.com/json/sms/service/KeywordService/deleteWord`

**方法说明:** 删除指定的关键词及商品目录模板词（可批量）

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| keywordIds 必填 | Long[] | 关键词ID集合 | 集合长度限制：[1, 10000]建议分批多次请求 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| campaignId | Long | 推广计划ID | - |
| keywordId | Long | 关键词ID | - |
| adgroupId | Long | 推广单元ID | - |
| keyword | String | 关键词字面 | 长度限制：最大40个字节，1个中文按2个字节计算，英文、数字按1个字节计算；修改时，仅支持在匹配模式为"智能匹配-核心词"时，修改{}圈选的核心词范围，不支持字面修改；如“鲜花配送”可改为“{鲜花}配送；营销目标为“商品目录”时可在两个#之间填写商品中心的商品属性来新建模板词，模板词中的商品属性会自动替换为所有绑定的商品的对应属性来批量生成关键词，如#name#配送 |
| price | Double | 关键词竞价价格 | 取值范围：(0, 999.99]需要小于等于所属计划预算。当使用单元出价时，查询该字段将不会返回；修改时设置0表示取消该关键词出价，此时采用所属单元出价 |
| matchType | Integer | 匹配模式 | 与phraseType配合使用，列表如下:matchType=1且phraseType=1：精确匹配；matchType=2且phraseType=1：短语匹配；matchType=2且phraseType=3：智能匹配 |
| pause | Boolean | 启用/暂停关键词 | 默认值：false取值范围：枚举值，列表如下true - 暂停false - 启用 |
| status | Integer | 关键词状态 | 取值范围：枚举值，列表如下40 - 有效-移动url审核中41 - 有效42 - 暂停推广43 - 不宜推广44 - 展现受限：搜索无效45 - 待激活46 - 审核中47 - 搜索量过低48 - 部分无效49 - 展现受限：计算机搜索无效50 - 展现受限：移动搜索无效58 - 展现受限备注：部分无效：投放设备为全部设备时，移动物料审核未过，计算机物料审核通过时，显示的是“部分无效”；搜索无效：当计算机出价低于计算机最低展现价格，则显示“计算机搜索无效”，当移动出价低于移动最低展现价格，则显示... |
| pcDestinationUrl | String | 计算机访问网址 | 域名需和账户网站URL域名相同，长度限制：最大1024字节;修改时设置为""（空字符串），表示取消URL设置 |
| mobileDestinationUrl | String | 移动访问网址 | 域名需和账户网站URL域名相同，长度限制：最大1024字节；修改时设置为""（空字符串），表示取消URL设置 |
| phraseType | Integer | 细分匹配模式 | 与matchType配合使用，列表如下:matchType=1且phraseType=1：精确匹配；matchType=2且phraseType=1：短语匹配；matchType=2且phraseType=3：智能匹配 |
| offlineReasons | OfflineReason[] | 物料推广下线原因 | 当有多个推广下线原因时，数组会有多个元素，每个代表一种原因 |
| tabs | Integer[] | 关键词物料标签数组 | 取值范围：[0, 31]说明：同一关键词支持添加多个标签，最多添加31个。举例：关键词“鲜花“同时标记了1、2、3个标签，则用[1,2,3]表示特殊说明：0表示无标签，31表示重点关键词标签 |
| leftPriceGuide | Double | 计算机指导价 | 取值范围：[0, 999.99)说明：当历史数据不足时会返回- |
| mPriceGuide | Double | 移动指导价 | 取值范围：[0, 999.99)说明：当历史数据不足时会返回- |
| deeplink | String | 应用调起网址 | - |
| miniProgramUrl | String | 小程序访问网址 | 长度不超过1024字节 |
| quality | Integer | 质量度 | 取值范围：[0, 10]只读 |
| estimatedClickRate | Integer | 预估点击率 | 取值范围：枚举值，列表如下0 - 数据积累中1 - 低于平均2 - 平均水平3 - 高于平均 |
| businessRelationship | Integer | 创意相关性 | 取值范围：枚举值，列表如下0 - 数据积累中1 - 低于平均2 - 平均水平3 - 高于平均 |
| landPageExperience | Integer | 落地页体验 | 取值范围：枚举值，列表如下0 - 数据积累中1 - 低于平均2 - 平均水平3 - 高于平均 |
| createTime | String | 关键词创建时间 | 选填，只读 |
| mobileFinalUrl | String | 关键词移动最终访问网址 | - |
| mobileTrackParam | String | 关键词移动监控后缀 | - |
| mobileTrackTemplate | String | 关键词移动第三方追踪模板 | - |
| pcFinalUrl | String | 关键词计算机最终访问网址 | - |
| pcTrackParam | String | 关键词计算机监控后缀 | - |
| pcTrackTemplate | String | 关键词计算机第三方追踪模板 | - |
| mainReason | String | 推广下线主要原因ID，值为”3”时，代表审核不通过 | - |
| detailReason | String | 推广下线具体原因，当mainReason为“3”时，本字段代表审核不通过的具体原因结构说明：detailReason为json字符串，解析后为嵌套数组，内层数组第一个元素为具体拒绝理由处理说明：字符串先解析成外层json数组，取外层数组第一个元素json数组作为内层数组，取内层数组的第一个元素字符串示例："[["您提交的物料涉及不合规内容，可能涉及以下问题（物料文字不合规:前面有名词但不是主语），请修改提交内容",""]]"; | - |

<details>
<summary>请求示例</summary>

```json
{
  "keywordIds" : [ 1 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "campaignId" : 1,
    "keywordId" : 1,
    "adgroupId" : 1,
    "keyword" : "example string",
    "price" : 999.99,
    "matchType" : 1,
    "pause" : false,
    "status" : 40,
    "pcDestinationUrl" : "example string",
    "mobileDestinationUrl" : "example string",
    "phraseType" : 1,
    "offlineReasons" : [ {
      "mainReason" : "example string",
      "detailReason" : "example string"
    } ],
    "tabs" : [ 31 ],
    "leftPriceGuide" : 0.0,
    "mPriceGuide" : 0.0,
    "deeplink" : "example string",
    "miniProgramUrl" : "example string",
    "quality" : 10,
    "estimatedClickRate" : 0,
    "businessRelationship" : 0,
    "landPageExperience" : 0,
    "createTime" : "example string",
    "mobileFinalUrl" : "example string",
    "mobileTrackParam" : "example s
```

</details>

---

### 更新关键词

**请求地址:** `https://api.baidu.com/json/sms/service/KeywordService/updateWord`

**方法说明:** 更新关键词及商品目录模板词（可批量）

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| keywordTypes 必填 | KeywordType[] | 新增关键词对象数组 | 参见KeywordType说明 单次请求不超过10000 建议分批多次请求 |
| keywordId  必填 | Long | 关键词ID | - |
| keyword | String | 关键词字面 | 长度限制：最大40个字节，1个中文按2个字节计算，英文、数字按1个字节计算；修改时，仅支持在匹配模式为"智能匹配-核心词"时，修改{}圈选的核心词范围，不支持字面修改；如“鲜花配送”可改为“{鲜花}配送；营销目标为“商品目录”时可在两个#之间写商品中心的商品属性来新建模板词，模板词中的商品属性会自动替换为所有绑定的商品的对应属性来批量生成关键词，如#name#配送 |
| price | Double | 关键词竞价价格 | 取值范围：(0, 999.99]需要小于等于所属计划预算。当使用单元出价时，查询该字段将不会返回；修改时设置0表示取消该关键词出价，此时采用所属单元出价 |
| matchType | Integer | 匹配模式 | 与phraseType配合使用，列表如下:matchType=1且phraseType=1：精确匹配；matchType=2且phraseType=1：短语匹配；matchType=2且phraseType=3：智能匹配 |
| apiInefficient | Integer | 是否低效关键词 | 0表示非低效词（显示否），1表示低效词（显示是） |
| pause | Boolean | 启用/暂停关键词 | 默认值：false取值范围：枚举值，列表如下true - 暂停false - 启用 |
| pcDestinationUrl | String | 计算机访问网址 | 域名需和账户网站URL域名相同，长度限制：最大1024字节;修改时设置为""（空字符串），表示取消URL设置;营销目标为“本地推广”下不支持该字段 |
| mobileDestinationUrl | String | 移动访问网址 | 域名需和账户网站URL域名相同，长度限制：最大1024字节；修改时设置为""（空字符串），表示取消URL设置;营销目标为“本地推广”下不支持该字段 |
| phraseType | Integer | 细分匹配模式 | 与matchType配合使用，列表如下:matchType=1且phraseType=1：精确匹配；matchType=2且phraseType=1：短语匹配；matchType=2且phraseType=3：智能匹配 |
| tabs | Integer[] | 关键词物料标签数组 | 取值范围：[0, 31]说明：同一关键词支持添加多个标签，最多添加31个。举例：关键词“鲜花“同时标记了1、2、3个标签，则用[1,2,3]表示特殊说明：0表示无标签，31表示重点关键词标签 |
| deeplink | String | 应用调起网址 | 长度限制：[0, 2048]该字段属于小流量功能，需要使用请向营销顾问申请（不在小流量名单中调用将报错） |
| ulink | String | ios应用调起 | 长度限制4096字符**该字段属于小流量功能，需要使用请向营销顾问申请（不在小流量名单中调用将报错）**当前仅支持营销目标-网站链接、应用推广、电商店铺（非基木鱼、非健康商城交易平台）的关键词层级 |
| miniProgramUrl | String | 小程序访问网址 | 长度不超过1024字节 |
| pcFinalUrl | String | 计算机最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackParam | String | 计算机监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackTemplate | String | 计算机第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileFinalUrl | String | 移动最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackParam | String | 移动监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackTemplate | String | 移动第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mainReason | String | 推广下线主要原因ID，值为”3”时，代表审核不通过 | - |
| detailReason | String | 推广下线具体原因，当mainReason为“3”时，本字段代表审核不通过的具体原因结构说明：detailReason为json字符串，解析后为嵌套数组，内层数组第一个元素为具体拒绝理由处理说明：字符串先解析成外层json数组，取外层数组第一个元素json数组作为内层数组，取内层数组的第一个元素字符串示例："[["您提交的物料涉及不合规内容，可能涉及以下问题（物料文字不合规:前面有名词但不是主语），请修改提交内容",""]]"; | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| keywordId | Long | 关键词ID | - |
| keyword | String | 关键词字面 | 长度限制：最大40个字节，1个中文按2个字节计算，英文、数字按1个字节计算；修改时，仅支持在匹配模式为"智能匹配-核心词"时，修改{}圈选的核心词范围，不支持字面修改；如“鲜花配送”可改为“{鲜花}配送；营销目标为“商品目录”时可在两个#之间写商品中心的商品属性来新建模板词，模板词中的商品属性会自动替换为所有绑定的商品的对应属性来批量生成关键词，如#name#配送 |
| price | Double | 关键词竞价价格 | 取值范围：(0, 999.99]需要小于等于所属计划预算。当使用单元出价时，查询该字段将不会返回；修改时设置0表示取消该关键词出价，此时采用所属单元出价 |
| matchType | Integer | 匹配模式 | 与phraseType配合使用，列表如下:matchType=1且phraseType=1：精确匹配；matchType=2且phraseType=1：短语匹配；matchType=2且phraseType=3：智能匹配 |
| pause | Boolean | 启用/暂停关键词 | 默认值：false取值范围：枚举值，列表如下true - 暂停false - 启用 |
| pcDestinationUrl | String | 计算机访问网址 | 域名需和账户网站URL域名相同，长度限制：最大1024字节;修改时设置为""（空字符串），表示取消URL设置;营销目标为“本地推广”下不支持该字段 |
| mobileDestinationUrl | String | 移动访问网址 | 域名需和账户网站URL域名相同，长度限制：最大1024字节；修改时设置为""（空字符串），表示取消URL设置;营销目标为“本地推广”下不支持该字段 |
| phraseType | Integer | 细分匹配模式 | 与matchType配合使用，列表如下:matchType=1且phraseType=1：精确匹配；matchType=2且phraseType=1：短语匹配；matchType=2且phraseType=3：智能匹配 |
| tabs | Integer[] | 关键词物料标签数组 | 取值范围：[0, 31]说明：同一关键词支持添加多个标签，最多添加31个。举例：关键词“鲜花“同时标记了1、2、3个标签，则用[1,2,3]表示特殊说明：0表示无标签，31表示重点关键词标签 |
| deeplink | String | 应用调起网址 | - |
| miniProgramUrl | String | 小程序访问网址 | 长度不超过1024字节 |
| pcFinalUrl | String | 计算机最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackParam | String | 计算机监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackTemplate | String | 计算机第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileFinalUrl | String | 移动最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackParam | String | 移动监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackTemplate | String | 移动第三方追踪模板 | - |
| mainReason | String | 推广下线主要原因ID，值为”3”时，代表审核不通过 | - |
| detailReason | String | 推广下线具体原因，当mainReason为“3”时，本字段代表审核不通过的具体原因结构说明：detailReason为json字符串，解析后为嵌套数组，内层数组第一个元素为具体拒绝理由处理说明：字符串先解析成外层json数组，取外层数组第一个元素json数组作为内层数组，取内层数组的第一个元素字符串示例："[["您提交的物料涉及不合规内容，可能涉及以下问题（物料文字不合规:前面有名词但不是主语），请修改提交内容",""]]"; | - |

<details>
<summary>请求示例</summary>

```json
{
  "keywordTypes" : [ {
    "campaignId" : 154101754,
    "keywordId" : 260133434998,
    "adgroupId" : 5781621943,
    "keyword" : "xx关键词名称",
    "price" : 9.8,
    "matchType" : 2,
    "pause" : true,
    "status" : 42,
    "pcDestinationUrl" : "https://aisite.wejianzhan.com/site/abcd.com/46aasd1b-d206-4dfc-999a-7b8b487aab",
    "mobileDestinationUrl" : "https://aisite.wejianzhan.com/site/abcd.com/46aasd1b-d206-4dfc-999a-7b8b487aab",
    "phraseType" : 3,
    "offlineReasons" : [ {
      "mainReason" : "example string",
      "detailReason" : "example string"
    } ],
    "tabs" : [ 1 ],
    "leftPriceGuide" : 1.58,
    "mPriceGuide" : 0.24,
    "deeplink" : "example string",
    "miniProgramUrl" : "example string",
    "quality" : 10,
    "estimatedClickRate" : 0,
    "businessRelation
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "campaignId" : 154101754,
    "keywordId" : 260133434998,
    "adgroupId" : 5781621943,
    "keyword" : "xx关键词名称",
    "price" : 9.8,
    "matchType" : 2,
    "pause" : true,
    "status" : 42,
    "pcDestinationUrl" : "https://aisite.wejianzhan.com/site/abcd.com/46aasd1b-d206-4dfc-999a-7b8b487aab",
    "mobileDestinationUrl" : "https://aisite.wejianzhan.com/site/abcd.com/46aasd1b-d206-4dfc-999a-7b8b487aab",
    "phraseType" : 3,
    "offlineReasons" : [ {
      "mainReason" : "example string",
      "detailReason" : "example string"
    } ],
    "tabs" : [ 1 ],
    "leftPriceGuide" : 1.58,
    "mPriceGuide" : 0.24,
    "deeplink" : "example string",
    "miniProgramUrl" : "example string",
    "quality" : 10,
    "estimatedClickRate" : 0,
    "businessRelationship" : 
```

</details>

---

### 查询关键词

**请求地址:** `https://api.baidu.com/json/sms/service/KeywordService/getWord`

**方法说明:** 根据指定的单元ID、关键词ID获取关键词信息

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| wordFields 必填 | String[] | 指定需要返回的关键词属性 | 取值范围：枚举值，列表如下keywordId - 关键词IDcampaignId - 推广计划IDadgroupId - 推广单元IDkeyword - 关键词字面price - 关键词竞价价格pause - 启用/暂停关键词matchType - 匹配模式phraseType - 细分匹配模式status - 关键词状态apiInefficient - 是否低效关键词pcDestinationUrl - 计算机访问网址mobileDestinationUrl - 移动访问网址tabs - 关键... |
| ids | Long[] | 查询id集合 | idType=5为单元ID，不超过50个；idType=11为关键词ID，不超过10000个 |
| idType | Integer | 查询id类型 | 取值范围：枚举值，列表如下5 - 单元ID11 - 关键词ID |
| getTemp | Integer | 是否查询关键词影子 | 默认值：00 - 只查询关键词本身，1 - 只查询关键词影子；想要获得关键词的全集，需要调用该方法两次，分别为getTemp=0和getTemp=1；影子说明：用户先向系统提交了关键词A，并且A已审核通过，之后再对A进行影响审核状态的修改（例如修改关键词url），修改后的关键词为A’（A’即为影子，仅对审核通过的物料进行修改才会产生影子），在A’通过审核生效之前，线上的生效创意仍然为A。 此时：getTemp为0查询到的是A，getTemp为1查询到的是A’ |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| campaignId | Long | 推广计划ID | - |
| keywordId | Long | 关键词ID | - |
| adgroupId | Long | 推广单元ID | - |
| keyword | String | 关键词字面 | 长度限制：最大40个字节，1个中文按2个字节计算，英文、数字按1个字节计算；修改时，仅支持在匹配模式为"智能匹配-核心词"时，修改{}圈选的核心词范围，不支持字面修改；如“鲜花配送”可改为“{鲜花}配送 |
| price | Double | 关键词竞价价格 | 取值范围：(0, 999.99]需要小于等于所属计划预算。当使用单元出价时，查询该字段将不会返回；修改时设置0表示取消该关键词出价，此时采用所属单元出价 |
| matchType | Integer | 匹配模式 | 与phraseType配合使用，列表如下:matchType=1且phraseType=1：精确匹配;matchType=2且phraseType=1：短语匹配;matchType=2且phraseType=3：智能匹配 |
| pause | Boolean | 启用/暂停关键词 | 默认值：false取值范围：枚举值，列表如下true - 暂停false - 启用 |
| status | Integer | 关键词状态 | 取值范围：枚举值，列表如下40 - 有效-移动url审核中41 - 有效42 - 暂停推广43 - 不宜推广44 - 展现受限：搜索无效45 - 待激活46 - 审核中47 - 搜索量过低48 - 部分无效49 - 展现受限：计算机搜索无效50 - 展现受限：移动搜索无效58 - 展现受限备注：部分无效：投放设备为全部设备时，移动物料审核未过，计算机物料审核通过时，显示的是“部分无效”；搜索无效：当计算机出价低于计算机最低展现价格，则显示“计算机搜索无效”，当移动出价低于移动最低展现价格，则显示... |
| pcDestinationUrl | String | 计算机访问网址 | 域名需和账户网站URL域名相同，长度限制：最大1024字节;修改时设置为""（空字符串），表示取消URL设置 |
| mobileDestinationUrl | String | 移动访问网址 | 域名需和账户网站URL域名相同，长度限制：最大1024字节；修改时设置为""（空字符串），表示取消URL设置 |
| phraseType | Integer | 细分匹配模式 | 与matchType配合使用，列表如下:matchType=1且phraseType=1：精确匹配;matchType=2且phraseType=1：短语匹配;matchType=2且phraseType=3：智能匹配 |
| offlineReasons | OfflineReason[] | 物料推广下线原因 | 当有多个推广下线原因时，数组会有多个元素，每个代表一种原因 |
| tabs | Integer[] | 关键词物料标签数组 | 取值范围：[0, 31]说明：同一关键词支持添加多个标签，最多添加31个。举例：关键词“鲜花“同时标记了1、2、3个标签，则用[1,2,3]表示特殊说明：0表示无标签，31表示重点关键词标签 |
| leftPriceGuide | Double | 计算机指导价 | 取值范围：[0, 999.99)说明：当历史数据不足时会返回- |
| mPriceGuide | Double | 移动指导价 | 取值范围：[0, 999.99)说明：当历史数据不足时会返回- |
| deeplink | String | 应用调起网址 | - |
| ulink | String | ios应用调起 | 长度限制4096字符**该字段属于小流量功能，需要使用请向营销顾问申请（不在小流量名单中调用将报错）**当前仅支持营销目标-网站链接、应用推广、电商店铺（非基木鱼、非健康商城交易平台）的关键词层级 |
| miniProgramUrl | String | 小程序访问网址 | 长度不超过1024字节 |
| quality | Integer | 质量度 | 取值范围：[0, 10]只读 |
| estimatedClickRate | Integer | 预估点击率 | 取值范围：枚举值，列表如下0 - 数据积累中1 - 低于平均2 - 平均水平3 - 高于平均 |
| businessRelationship | Integer | 创意相关性 | 取值范围：枚举值，列表如下0 - 数据积累中1 - 低于平均2 - 平均水平3 - 高于平均 |
| landPageExperience | Integer | 落地页体验 | 取值范围：枚举值，列表如下0 - 数据积累中1 - 低于平均2 - 平均水平3 - 高于平均 |
| createTime | String | 关键词创建时间 | 选填，只读 |
| mobileFinalUrl | String | 关键词移动最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackParam | String | 关键词移动监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackTemplate | String | 关键词移动第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcFinalUrl | String | 关键词计算机最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackParam | String | 关键词计算机监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackTemplate | String | 关键词计算机第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mainReason | String | 推广下线主要原因ID，值为”3”时，代表审核不通过 | - |
| detailReason | String | 推广下线具体原因，当mainReason为“3”时，本字段代表审核不通过的具体原因结构说明：detailReason为json字符串，解析后为嵌套数组，内层数组第一个元素为具体拒绝理由处理说明：字符串先解析成外层json数组，取外层数组第一个元素json数组作为内层数组，取内层数组的第一个元素字符串示例："[["您提交的物料涉及不合规内容，可能涉及以下问题（物料文字不合规:前面有名词但不是主语），请修改提交内容",""]]"; | - |

<details>
<summary>请求示例</summary>

```json
{
  "wordFields" : [ "keywordId", "campaignId", "adgroupId", "keyword", "price", "pause", "matchType", "phraseType", "status", "pcDestinationUrl", "mobileDestinationUrl", "tabs", "leftPriceGuide", "mPriceGuide", "miniProgramUrl", "offlineReasons",  "createTime", "deeplink", "quality", "estimatedClickRate", "businessRelationship", "landPageExperience", "pcFinalUrl", "pcTrackParam", "pcTrackTemplate" ],
  "ids" : [ 1 ],
  "idType" : 3,
  "getTemp" : 0
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "campaignId" : 1,
    "keywordId" : 1,
    "adgroupId" : 1,
    "keyword" : "example string",
    "price" : 999.99,
    "matchType" : 1,
    "pause" : false,
    "status" : 40,
    "pcDestinationUrl" : "example string",
    "mobileDestinationUrl" : "example string",
    "phraseType" : 1,
    "offlineReasons" : [ {
      "mainReason" : "example string",
      "detailReason" : "example string"
    } ],
    "tabs" : [ 31 ],
    "leftPriceGuide" : 0.0,
    "mPriceGuide" : 0.0,
    "deeplink" : "example string",
    "miniProgramUrl" : "example string",
    "quality" : 10,
    "estimatedClickRate" : 0,
    "businessRelationship" : 0,
    "landPageExperience" : 0,
    "createTime" : "example string",
    "pcFinalUrl" : "example string",
    "pcTrackParam" : "example string",

```

</details>

---

### 添加关键词

**请求地址:** `https://api.baidu.com/json/sms/service/KeywordService/addWord`

**方法说明:** 新增关键词及商品目录模板词(绑定在商品目录营销目标计划单元下的关键词)（可批量)，一次请求最多新建10000个关键词
> 针对添加关键词遇到的审核问题，可通过[预审接口](https://dev2.baidu.com/content?sceneType=0&pageId=101429&nodeId=850&subhead=)进行物料进行预审检查，提前获取审核结果。通过预审的物料可以最大程度避免之后因审核问题物料下线

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| keywordTypes 必填 | KeywordType[] | 新增关键词对象数组 | 集合长度限制：[1, 10000]建议分批多次请求 |
| adgroupId  必填 | Long | 推广单元ID | - |
| keyword  必填 | String | 关键词字面 | 长度限制：最大40个字节，1个中文按2个字节计算，英文、数字按1个字节计算；修改时，仅支持在匹配模式为"智能匹配-核心词"时，修改{}圈选的核心词范围，不支持字面修改；如“鲜花配送”可改为“{鲜花}配送；营销目标为“商品目录”时可在两个#之间写商品中心的商品属性来新建模板词，模板词中的商品属性会自动替换为所有绑定的商品的对应属性来批量生成关键词，如#name#配送 |
| price | Double | 关键词竞价价格 | 取值范围：(0, 999.99]需要小于等于所属计划预算。当使用单元出价时，查询该字段将不会返回；修改时设置0表示取消该关键词出价，此时采用所属单元出价 |
| matchType  必填 | Integer | 匹配模式 | 与phraseType配合使用，列表如下:matchType=1且phraseType=1：精确匹配；matchType=2且phraseType=1：短语匹配；matchType=2且phraseType=3：智能匹配 |
| pcDestinationUrl | String | 计算机访问网址 | 域名需和账户网站URL域名相同，长度限制：最大1024字节;修改时设置为""（空字符串），表示取消URL设置;营销目标为“本地推广”下不支持该字段 |
| mobileDestinationUrl | String | 移动访问网址 | 域名需和账户网站URL域名相同，长度限制：最大1024字节；修改时设置为""（空字符串），表示取消URL设置;营销目标为“本地推广”下不支持该字段 |
| phraseType  必填 | Integer | 细分匹配模式 | 与matchType配合使用，列表如下:matchType=1且phraseType=1：精确匹配；matchType=2且phraseType=1：短语匹配；matchType=2且phraseType=3：智能匹配 |
| apiInefficient | Integer | 是否低效关键词 | 0表示非低效词（显示否），1表示低效词（显示是） |
| tabs | Integer[] | 关键词物料标签数组 | 取值范围：[0, 31]说明：同一关键词支持添加多个标签，最多添加31个。举例：关键词“鲜花“同时标记了1、2、3个标签，则用[1,2,3]表示特殊说明：0表示无标签，31表示重点关键词标签 |
| deeplink | String | 应用调起网址 | 长度限制：[0, 2048]该字段属于小流量功能，需要使用请向营销顾问申请（不在小流量名单中调用将报错） |
| ulink | String | ios应用调起 | 长度限制4096字符**该字段属于小流量功能，需要使用请向营销顾问申请（不在小流量名单中调用将报错）**当前仅支持营销目标-网站链接、应用推广、电商店铺（非基木鱼、非健康商城交易平台）的关键词层级 |
| miniProgramUrl | String | 小程序访问网址 | 长度不超过1024字节 |
| pcFinalUrl | String | 计算机最终访问网址 | 选填，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackParam | String | 计算机监控后缀 | 选填，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackTemplate | String | 计算机第三方追踪模板 | 选填，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileFinalUrl | String | 移动最终访问网址 | 选填，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackParam | String | 移动监控后缀 | 选填，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackTemplate | String | 移动第三方追踪模板 | 选填，该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mainReason | String | 推广下线主要原因ID，值为”3”时，代表审核不通过 | - |
| detailReason | String | 推广下线具体原因，当mainReason为“3”时，本字段代表审核不通过的具体原因结构说明：detailReason为json字符串，解析后为嵌套数组，内层数组第一个元素为具体拒绝理由处理说明：字符串先解析成外层json数组，取外层数组第一个元素json数组作为内层数组，取内层数组的第一个元素字符串示例："[["您提交的物料涉及不合规内容，可能涉及以下问题（物料文字不合规:前面有名词但不是主语），请修改提交内容",""]]"; | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| adgroupId | Long | 推广单元ID | - |
| keyword | String | 关键词字面 | 长度限制：最大40个字节，1个中文按2个字节计算，英文、数字按1个字节计算；修改时，仅支持在匹配模式为"智能匹配-核心词"时，修改{}圈选的核心词范围，不支持字面修改；如“鲜花配送”可改为“{鲜花}配送；营销目标为“商品目录”时可在两个#之间写商品中心的商品属性来新建模板词，模板词中的商品属性会自动替换为所有绑定的商品的对应属性来批量生成关键词，如#name#配送 |
| price | Double | 关键词竞价价格 | 取值范围：(0, 999.99]需要小于等于所属计划预算。当使用单元出价时，查询该字段将不会返回；修改时设置0表示取消该关键词出价，此时采用所属单元出价 |
| matchType | Integer | 匹配模式 | 与phraseType配合使用，列表如下:matchType=1且phraseType=1：精确匹配；matchType=2且phraseType=1：短语匹配；matchType=2且phraseType=3：智能匹配 |
| pcDestinationUrl | String | 计算机访问网址 | 域名需和账户网站URL域名相同，长度限制：最大1024字节;修改时设置为""（空字符串），表示取消URL设置;营销目标为“本地推广”下不支持该字段 |
| mobileDestinationUrl | String | 移动访问网址 | 域名需和账户网站URL域名相同，长度限制：最大1024字节；修改时设置为""（空字符串），表示取消URL设置;营销目标为“本地推广”下不支持该字段 |
| phraseType | Integer | 细分匹配模式 | 与matchType配合使用，列表如下:matchType=1且phraseType=1：精确匹配；matchType=2且phraseType=1：短语匹配；matchType=2且phraseType=3：智能匹配 |
| tabs | Integer[] | 关键词物料标签数组 | 取值范围：[0, 31]说明：同一关键词支持添加多个标签，最多添加31个。举例：关键词“鲜花“同时标记了1、2、3个标签，则用[1,2,3]表示特殊说明：0表示无标签，31表示重点关键词标签 |
| deeplink | String | 应用调起网址 | - |
| miniProgramUrl | String | 小程序访问网址 | 长度不超过1024字节 |
| pcFinalUrl | String | 计算机最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackParam | String | 计算机监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackTemplate | String | 计算机第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileFinalUrl | String | 移动最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackParam | String | 移动监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackTemplate | String | 移动第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mainReason | String | 推广下线主要原因ID，值为”3”时，代表审核不通过 | - |
| detailReason | String | 推广下线具体原因，当mainReason为“3”时，本字段代表审核不通过的具体原因结构说明：detailReason为json字符串，解析后为嵌套数组，内层数组第一个元素为具体拒绝理由处理说明：字符串先解析成外层json数组，取外层数组第一个元素json数组作为内层数组，取内层数组的第一个元素字符串示例："[["您提交的物料涉及不合规内容，可能涉及以下问题（物料文字不合规:前面有名词但不是主语），请修改提交内容",""]]"; | - |

<details>
<summary>请求示例</summary>

```json
{
  "keywordTypes" : [ {
    "campaignId" : 154101754,
    "keywordId" : 260133434998,
    "adgroupId" : 5781621943,
    "keyword" : "xx关键词名称",
    "price" : 9.8,
    "matchType" : 2,
    "pause" : true,
    "status" : 42,
    "pcDestinationUrl" : "https://aisite.wejianzhan.com/site/abcd.com/46aasd1b-d206-4dfc-999a-7b8b487aab",
    "mobileDestinationUrl" : "https://aisite.wejianzhan.com/site/abcd.com/46aasd1b-d206-4dfc-999a-7b8b487aab",
    "phraseType" : 3,
    "offlineReasons" : [ {
      "mainReason" : "example string",
      "detailReason" : "example string"
    } ],
    "tabs" : [ 1 ],
    "leftPriceGuide" : 1.58,
    "mPriceGuide" : 0.24,
    "deeplink" : "example string",
    "miniProgramUrl" : "example string",
    "quality" : 10,
    "estimatedClickRate" : 0,
    "businessRelation
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "campaignId" : 154101754,
    "keywordId" : 260133434998,
    "adgroupId" : 5781621943,
    "keyword" : "xx关键词名称",
    "price" : 9.8,
    "matchType" : 2,
    "pause" : true,
    "status" : 42,
    "pcDestinationUrl" : "https://aisite.wejianzhan.com/site/abcd.com/46aasd1b-d206-4dfc-999a-7b8b487aab",
    "mobileDestinationUrl" : "https://aisite.wejianzhan.com/site/abcd.com/46aasd1b-d206-4dfc-999a-7b8b487aab",
    "phraseType" : 3,
    "offlineReasons" : [ {
      "mainReason" : "example string",
      "detailReason" : "example string"
    } ],
    "tabs" : [ 1 ],
    "leftPriceGuide" : 1.58,
    "mPriceGuide" : 0.24,
    "deeplink" : "example string",
    "miniProgramUrl" : "example string",
    "quality" : 10,
    "estimatedClickRate" : 0,
    "businessRelationship" : 
```

</details>

---

## 否定关键词2.0

### 修改否定关键词

**请求地址:** `https://api.baidu.com/json/sms/service/NegativeKeywordService/updateNegativeKeyword`

**方法说明:** 修改否定关键词接口，支持修改否定关键词的匹配模式

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| negativeKeywordTypes 必填 | NegativeKeywordType[] | 待操作的否定关键词列表 | 集合长度限制：[1, 5000] 长度限制与账户权益星级相关：1星：2000；2星：4000；3星：5000 |
| negativeKeywordId  必填 | Long | 否定关键词ID | 查询结果中，当level=3时，该ID表示计划独立否词ID；当level=5时，该ID表示单元独立否词ID；当level=33时，该ID表示计划与否词包的绑定ID |
| negativeMatchType | Integer | 匹配模式 | 取值范围：枚举值，列表如下0 - 短语匹配63 - 精确匹配添加计划/单元否词时必填。查询结果中仅当level=3和5时有意义，当level=33时固定返回0 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| negativeKeywordId | Long | 否定关键词ID | 查询结果中，当level=3时，该ID表示计划独立否词ID；当level=5时，该ID表示单元独立否词ID；当level=33时，该ID表示计划与否词包的绑定ID |
| negativeMatchType | Integer | 匹配模式 | 取值范围：枚举值，列表如下0 - 短语匹配63 - 精确匹配添加计划/单元否词时必填。查询结果中仅当level=3和5时有意义，当level=33时固定返回0 |

<details>
<summary>请求示例</summary>

```json
{
  "negativeKeywordTypes" : [ {
    "negativeKeywordId" : 14234,
    "negativeMatchType" : 0
  } ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "negativeKeywordId" : 14234,
    "negativeKeyword" : "example string",
    "level" : 3,
    "campaignId" : 1,
    "campaignName" : "example string",
    "negativeMatchType" : 0
  } ]
}
```

</details>

---

### 删除否定关键词

**请求地址:** `https://api.baidu.com/json/sms/service/NegativeKeywordService/deleteNegativeKeyword`

**方法说明:** 删除否定关键词接口，支持删除计划/单元层级否定关键词、删除计划-否词包绑定

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| negativeKeywordIds 必填 | Long[] | 需要删除的否词ID列表。支持计划否词ID、单元否词ID、计划-否词包绑定ID | 集合长度限制：[1, 5000]长度限制与账户权益星级相关：1星：2000；2星：4000；3星：5000 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| negativeKeywordId | Long | 否定关键词ID | 查询结果中，当level=3时，该ID表示计划独立否词ID；当level=5时，该ID表示单元独立否词ID；当level=33时，该ID表示计划与否词包的绑定ID |
| negativeKeyword | String | 否定关键词 | 添加计划/单元否词时必填。长度限制：最大40个字节，1个中文按2个字节计算，英文、数字按1个字节计算；添加计划-否词包绑定时禁止填写查询结果中，当level=3时，表示计划独立否词字面；当level=5时，表示单元独立否词字面；当level=33时，表示与计划绑定的否词包名称 |
| level | Integer | 所属层级 | 取值范围：枚举值，列表如下3 - 计划层级否词5 - 单元层级否词33 - 否词包与计划的绑定关系 |
| campaignId | Long | 计划ID | 添加计划否词、计划-否词包绑定时必填 |
| campaignName | String | 计划名称 | - |
| adgroupId | Long | 单元ID | 添加单元否词时必填；单元不支持绑定否词包 |
| adgroupName | String | 单元名称 | - |
| negativeMatchType | Integer | 匹配模式 | 取值范围：枚举值，列表如下0 - 短语匹配63 - 精确匹配添加计划/单元否词时必填。查询结果中仅当level=3和5时有意义，当level=33时固定返回0 |
| negativeKeywordPacketId | Long | 否词包ID | 添加计划-否词包绑定时必填。查询结果中仅当level=33时有意义，当level=3和5时固定返回0 |

<details>
<summary>请求示例</summary>

```json
{
  "negativeKeywordIds" : [ 1 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "negativeKeywordId" : 1,
    "negativeKeyword" : "example string",
    "level" : 3,
    "campaignId" : 1,
    "campaignName" : "example string",
    "adgroupId" : 1,
    "adgroupName" : "example string",
    "negativeMatchType" : 0,
    "negativeKeywordPacketId" : 1
  } ]
}
```

</details>

---

### 删除否定关键词包

**请求地址:** `https://api.baidu.com/json/sms/service/NegativeKeywordPacketService/deleteNegativeKeywordPacket`

**方法说明:** 删除否词包接口

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| negativeKeywordPacketIds 必填 | Long[] | 需要删除的否定关键包ID列表 | 集合长度限制：[1, 100] |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| negativeKeywordPacketId | Long | 否词包ID | - |
| negativeKeywordPacketName | String | 否词包名称 | 长度限制：最大30个字节，1个中文按2个字节计算，英文、数字按1个字节计算 |
| totalNegativeKeywordCount | Long | 否词包内否词总数 | - |
| normalNegativeKeywordCount | Long | 否词包内短语匹配否词总数 | - |
| exactNegativeKeywordCount | Long | 否词包内精确匹配否词总数 | - |
| negativeKeywords | NegativeKeywordType[] | 否词包内的否词信息 | 集合长度限制：[1, 5000]长度限制与账户权益星级相关：1星：2000；2星：4000；3星：5000 |
| bindCampaignIds | Long[] | 否词包绑定的计划信息 | - |
| bindCampaignCount | Integer | 否词包绑定的计划数量 | - |
| bindCampaignNames | String[] | 否词包绑定的计划名称 | - |
| negativeKeywordId | Long | 否定关键词ID | 查询结果中，当level=3时，该ID表示计划独立否词ID；当level=5时，该ID表示单元独立否词ID；当level=33时，该ID表示计划与否词包的绑定ID |
| negativeKeyword | String | 否定关键词 | 添加计划/单元否词时必填。长度限制：最大40个字节，1个中文按2个字节计算，英文、数字按1个字节计算；添加计划-否词包绑定时禁止填写查询结果中，当level=3时，表示计划独立否词字面；当level=5时，表示单元独立否词字面；当level=33时，表示与计划绑定的否词包名称 |
| level | Integer | 所属层级 | 取值范围：枚举值，列表如下3 - 计划层级否词5 - 单元层级否词33 - 否词包与计划的绑定关系 |
| campaignId | Long | 计划ID | 添加计划否词、计划-否词包绑定时必填 |
| campaignName | String | 计划名称 | - |
| adgroupId | Long | 单元ID | 添加单元否词时必填；单元不支持绑定否词包 |
| adgroupName | String | 单元名称 | - |
| negativeMatchType | Integer | 匹配模式 | 取值范围：枚举值，列表如下0 - 短语匹配63 - 精确匹配添加计划/单元否词时必填。查询结果中仅当level=3和5时有意义，当level=33时固定返回0 |
| negativeKeywordPacketId | Long | 否词包ID | 添加计划-否词包绑定时必填。查询结果中仅当level=33时有意义，当level=3和5时固定返回0 |

<details>
<summary>请求示例</summary>

```json
{
  "negativeKeywordPacketIds" : [ 1 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "negativeKeywordPacketId" : 1,
    "negativeKeywordPacketName" : "example string",
    "totalNegativeKeywordCount" : 1,
    "normalNegativeKeywordCount" : 1,
    "exactNegativeKeywordCount" : 1,
    "negativeKeywords" : [ {
      "negativeKeywordId" : 1,
      "negativeKeyword" : "example string",
      "level" : 3,
      "campaignId" : 1,
      "campaignName" : "example string",
      "adgroupId" : 1,
      "adgroupName" : "example string",
      "negativeMatchType" : 0,
      "negativeKeywordPacketId" : 1
    } ],
    "bindCampaignIds" : [ 1 ],
    "bindCampaignCount" : 1,
    "bindCampaignNames" : [ "example string" ]
  } ]
}
```

</details>

---

### 更新否定关键词包

**请求地址:** `https://api.baidu.com/json/sms/service/NegativeKeywordPacketService/updateNegativeKeywordPacket`

**方法说明:** 更新否词包接口

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| updateNegativeKeywordPacketTypes 必填 | UpdateNegativeKeywordPacketType[] | 待更新的否词包信息列表 | 集合长度限制：[1, 100] |
| negativeKeywordPacketId  必填 | Long | 否词包ID | - |
| negativeKeywordPacketName | String | 否词包名称 | 长度限制：最大30个字节，1个中文按2个字节计算，英文、数字按1个字节计算 |
| addNegativeKeywordTypes | NegativeKeywordType[] | 否词包内本次新增的否词信息 | 集合长度限制：[1, 5000] 长度限制与账户权益星级相关：1星：2000；2星：4000；3星：5000 |
| updateNegativeKeywordTypes | NegativeKeywordType[] | 否词包内本次修改的否词信息 | 集合长度限制：[1, 5000] 长度限制与账户权益星级相关：1星：2000；2星：4000；3星：5000 |
| deleteNegativeKeywordIds | Long[] | 否词包内本次删除的否词ID | 集合长度限制：[1, 5000]长度限制与账户权益星级相关：1星：2000；2星：4000；3星：5000 |
| negativeKeywordId | Long | 否定关键词ID | 修改或删除否词包内否词时必填查询结果中，当level=3时，该ID表示计划独立否词ID；当level=5时，该ID表示单元独立否词ID；当level=33时，该ID表示计划与否词包的绑定ID |
| negativeKeyword | String | 否定关键词 | 添加否词包内否词时必填。长度限制：最大40个字节，1个中文按2个字节计算，英文、数字按1个字节计算；添加计划-否词包绑定时禁止填写查询结果中，当level=3时，表示计划独立否词字面；当level=5时，表示单元独立否词字面；当level=33时，表示与计划绑定的否词包名称 |
| negativeMatchType | Integer | 匹配模式 | 取值范围：枚举值，列表如下0 - 短语匹配63 - 精确匹配添加否词包否词时必填。查询结果中仅当level=3和5时有意义，当level=33时固定返回0 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| negativeKeywordPacketId | Long | 否词包ID | - |
| negativeKeywordPacketName | String | 否词包名称 | 长度限制：最大30个字节，1个中文按2个字节计算，英文、数字按1个字节计算 |
| negativeKeywords | NegativeKeywordType[] | 否词包内的否词信息 | 集合长度限制：[1, 5000]长度限制与账户权益星级相关：1星：2000；2星：4000；3星：5000 |
| negativeKeywordId | Long | 否定关键词ID | 修改或删除否词包内否词时必填查询结果中，当level=3时，该ID表示计划独立否词ID；当level=5时，该ID表示单元独立否词ID；当level=33时，该ID表示计划与否词包的绑定ID |
| negativeKeyword | String | 否定关键词 | 添加否词包内否词时必填。长度限制：最大40个字节，1个中文按2个字节计算，英文、数字按1个字节计算；添加计划-否词包绑定时禁止填写查询结果中，当level=3时，表示计划独立否词字面；当level=5时，表示单元独立否词字面；当level=33时，表示与计划绑定的否词包名称 |
| negativeMatchType | Integer | 匹配模式 | 取值范围：枚举值，列表如下0 - 短语匹配63 - 精确匹配添加否词包否词时必填。查询结果中仅当level=3和5时有意义，当level=33时固定返回0 |

<details>
<summary>请求示例</summary>

```json
{
	"updateNegativeKeywordPacketTypes": [{
		"negativeKeywordPacketId": 414212,
		"negativeKeywordPacketName": "mod-name",
		"addNegativeKeywordTypes": [{
			"negativeKeyword": "新否词1",
			"negativeMatchType": 0
		}],
		"updateNegativeKeywordTypes": [{
			"negativeKeywordId": 5811289,
			"negativeMatchType": 63
		}],
		"deleteNegativeKeywordIds": [
			5811290
		]
	}]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
	"data": [{
		"index": 414212,
		"negativeKeywordPacketId": 414212,
		"negativeKeywordPacketName": "mod-name",
		"totalNegativeKeywordCount": 4,
		"normalNegativeKeywordCount": 1,
		"exactNegativeKeywordCount": 3,
		"negativeKeywords": [{
				"negativeKeywordId": 5811289,
				"negativeKeyword": "否词包短否2",
				"negativeMatchType": 63,
				"negativeKeywordPacketId": 414212,
				"id": 5811289
			},
			{
				"negativeKeywordId": 5811291,
				"negativeKeyword": "否词包精否3",
				"negativeMatchType": 63,
				"negativeKeywordPacketId": 414212,
				"id": 5811291
			},
			{
				"negativeKeywordId": 5811292,
				"negativeKeyword": "否词包精否2",
				"negativeMatchType": 63,
				"negativeKeywordPacketId": 414212,
				"id": 5811292
			},
			{
				"negativeKeywordId": 6179801,
				"negativeKeyword": "新否词1",
		
```

</details>

---

### 查询否定关键词

**请求地址:** `https://api.baidu.com/json/sms/service/NegativeKeywordService/getNegativeKeyword`

**方法说明:** 查询否定关键词，支持按照账户、计划、单元、否定关键词层级查询

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| negativeKeywordTypeFields 必填 | String[] | 请求字段 | 取值范围：枚举值，列表如下negativeKeyword - 否定关键词negativeKeywordId - 否定关键词IDcampaignId - 计划IDadgroupId - 单元IDcampaignName - 计划名称adgroupName - 单元名称negativeMatchType - 匹配模式negativeKeywordPacketId - 否词包IDlevel - 所属层级addTime - 添加时间modTime - 修改时间 |
| orderBy | String | 排序字段 | 取值范围：枚举值，列表如下negativeKeyword - 否定关键词negativeKeywordId - 否定关键词IDnegativeMatchType - 匹配模式level - 所属层级 |
| fieldFilters | RowFilter[] | 过滤条件 | - |
| limit | Integer[] | 分页 | 默认值：limit=[5000]当传入一个数字[k]时，表示取前k条记录；当传入两个数字[m,n]时，表示从m+1条开始取，共取n条记录；例如：limit:[10]，表示取前十条记录；limit:[2,20]，表示从第三条记录开始取，共取20条记录 |
| desc | Boolean | 正序/倒序 | 默认值：truetrue-倒序，false-正序 |
| field | String | 筛选字段 | 取值范围：枚举值，列表如下negativeKeyword - 否定关键词campaignId - 计划IDadgroupId - 单元IDnegativeKeywordPacketId - 否词包IDlevel - 所属层级negativeMatchType - 匹配模式 |
| op | String | 比较符号 | 取值范围：枚举值，列表如下in - 完全匹配 |
| values | String[] | 筛选数据 | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| negativeKeywordId | Long | 否定关键词ID | 查询结果中，当level=3时，该ID表示计划独立否词ID；当level=5时，该ID表示单元独立否词ID；当level=33时，该ID表示计划与否词包的绑定ID |
| negativeKeyword | String | 否定关键词 | 添加计划/单元否词时必填。长度限制：最大40个字节，1个中文按2个字节计算，英文、数字按1个字节计算；添加计划-否词包绑定时禁止填写查询结果中，当level=3时，表示计划独立否词字面；当level=5时，表示单元独立否词字面；当level=33时，表示与计划绑定的否词包名称 |
| level | Integer | 所属层级 | 取值范围：枚举值，列表如下3 - 计划层级否词5 - 单元层级否词33 - 否词包与计划的绑定关系 |
| campaignId | Long | 计划ID | 添加计划否词、计划-否词包绑定时必填 |
| campaignName | String | 计划名称 | - |
| adgroupId | Long | 单元ID | 添加单元否词时必填；单元不支持绑定否词包 |
| adgroupName | String | 单元名称 | - |
| negativeMatchType | Integer | 匹配模式 | 取值范围：枚举值，列表如下0 - 短语匹配63 - 精确匹配添加计划/单元否词时必填。查询结果中仅当level=3和5时有意义，当level=33时固定返回0 |
| negativeKeywordPacketId | Long | 否词包ID | 添加计划-否词包绑定时必填。查询结果中仅当level=33时有意义，当level=3和5时固定返回0 |

<details>
<summary>请求示例</summary>

```json
{
	"negativeKeywordTypeFields": [
		"negativeKeyword",
		"campaignId",
		"adgroupId",
		"negativeKeywordPacketId",
		"negativeMatchType",
		"level"
	],
	"orderBy": "negativeKeyword",
	"fieldFilters": [{
		"field": "campaignId",
		"op": "in",
		"values": [
			291681626
		]
	}],
	"limit": [
		0,
		1000
	],
	"desc": true
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
        "data": [
            {
                "index": 5800302,
                "negativeKeyword": "计划精否99",
                "level": 3,
                "campaignId": 291681626,
                "adgroupId": 0,
                "negativeMatchType": 63,
                "negativeKeywordPacketId": 0
            }
        ]
}
```

</details>

---

### 查询否定关键词包

**请求地址:** `https://api.baidu.com/json/sms/service/NegativeKeywordPacketService/getNegativeKeywordPacket`

**方法说明:** 查询否词包

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| negativeKeywordPacketIds | Long[] | 否词包ID | 集合长度限制：[0, 100] |
| negativeKeywordPacketTypeFields 必填 | String[] | 请求字段 | 取值范围：枚举值，列表如下negativeKeywordPacketId - 否词包IDnegativeKeywordPacketName - 否词包名称totalNegativeKeywordCount - 否词包内否词总数normalNegativeKeywordCount - 否词包内短语匹配否词总数exactNegativeKeywordCount - 否词包内精确匹配否词总数negativeKeywords - 否词包内的否词信息bindCampaignIds - 否词包绑定的计划信息... |
| orderBy | String | 排序条件 | 取值范围：枚举值，列表如下negativeKeywordPacketId - 否词包IDtotalNegativeKeywordCount - 否词包内否词总数bindCampaignCount - 否词包绑定的计划数 |
| fieldFilters | RowFilter[] | 过滤条件支持对negativeKeywordPacketName（否词包名称）进行in（完全匹配）、like（模糊匹配）、nlike（模糊排除）操作 | - |
| limit | Integer[] | 分页 | 默认值：limit=[100]当传入一个数字[k]时，表示取前k条记录；当传入两个数字[m,n]时，表示从m+1条开始取，共取n条记录；例如：limit:[10]，表示取前十条记录；limit:[2,20]，表示从第三条记录开始取，共取20条记录 |
| desc | Boolean | 正序/倒序 | 默认值：truetrue-倒序，false-正序 |
| field | String | 筛选字段 | 取值范围：枚举值，列表如下negativeKeywordPacketName - 否词包名称 |
| op | String | 比较符号 | 取值范围：枚举值，列表如下in - 完全匹配like - 模糊匹配nlike - 模糊排除 |
| values | String[] | 筛选数据 | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| negativeKeywordPacketId | Long | 否词包ID | - |
| negativeKeywordPacketName | String | 否词包名称 | 长度限制：最大30个字节，1个中文按2个字节计算，英文、数字按1个字节计算 |
| totalNegativeKeywordCount | Long | 否词包内否词总数 | - |
| normalNegativeKeywordCount | Long | 否词包内短语匹配否词总数 | - |
| exactNegativeKeywordCount | Long | 否词包内精确匹配否词总数 | - |
| negativeKeywords | NegativeKeywordType[] | 否词包内的否词信息 | 集合长度限制：[1, 5000] |
| bindCampaignIds | Long[] | 否词包绑定的计划信息 | - |
| bindCampaignCount | Integer | 否词包绑定的计划数量 | - |
| bindCampaignNames | String[] | 否词包绑定的计划名称 | - |
| negativeKeywordId | Long | 否定关键词ID | 查询结果中，当level=3时，该ID表示计划独立否词ID；当level=5时，该ID表示单元独立否词ID；当level=33时，该ID表示计划与否词包的绑定ID |
| negativeKeyword | String | 否定关键词 | 添加计划/单元否词时必填。长度限制：最大40个字节，1个中文按2个字节计算，英文、数字按1个字节计算；添加计划-否词包绑定时禁止填写查询结果中，当level=3时，表示计划独立否词字面；当level=5时，表示单元独立否词字面；当level=33时，表示与计划绑定的否词包名称 |
| level | Integer | 所属层级 | 取值范围：枚举值，列表如下3 - 计划层级5 - 单元层级33 - 否词包层级 |
| campaignId | Long | 计划ID | 添加计划否词、计划-否词包绑定时必填 |
| campaignName | String | 计划名称 | - |
| adgroupId | Long | 单元ID | 添加单元否词时必填；单元不支持绑定否词包 |
| adgroupName | String | 单元名称 | - |
| negativeMatchType | Integer | 匹配模式 | 取值范围：枚举值，列表如下0 - 短语匹配63 - 精确匹配添加计划/单元否词时必填。查询结果中仅当level=3和5时有意义，当level=33时固定返回0 |
| negativeKeywordPacketId | Long | 否词包ID | 添加计划-否词包绑定时必填。查询结果中仅当level=33时有意义，当level=3和5时固定返回0 |

<details>
<summary>请求示例</summary>

```json
{
	"negativeKeywordPacketTypeFields": ["negativeKeywordPacketId", "negativeKeywordPacketName", "totalNegativeKeywordCount", "bindCampaignNames", "bindCampaignIds", "bindCampaignCount"],
	"orderBy": "bindCampaignCount",
	"desc": true,
	"limit": [0, 10]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "negativeKeywordPacketId" : 1,
    "negativeKeywordPacketName" : "example string",
    "totalNegativeKeywordCount" : 1,
    "normalNegativeKeywordCount" : 1,
    "exactNegativeKeywordCount" : 1,
    "negativeKeywords" : [ {
      "negativeKeywordId" : 1,
      "negativeKeyword" : "example string",
      "level" : 3,
      "campaignId" : 1,
      "campaignName" : "example string",
      "adgroupId" : 1,
      "adgroupName" : "example string",
      "negativeMatchType" : 0,
      "negativeKeywordPacketId" : 1
    } ],
    "bindCampaignIds" : [ 1 ],
    "bindCampaignCount" : 1,
    "bindCampaignNames" : [ "example string" ]
  } ]
}
```

</details>

---

### 查询否定关键词包数量

**请求地址:** `https://api.baidu.com/json/sms/service/NegativeKeywordPacketService/getNegativeKeywordPacketCount`

**方法说明:** 查询否词包数量

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| items 必填 | UpdateNegativeKeywordPacketType[] | 查询条件 | 只支持单个条件查询，集合长度限制：[1, 1] |
| negativeKeywordPacketIds | Long | 否词包ID | 集合长度限制：[1, 100] |
| fieldFilters | RowFilter[] | 筛选条件 | - |
| field | String | 字段名 | 取值范围：枚举值，列表如下negativeKeywordPacketName - 否词包名称 |
| op | String | 比较符号 | 取值范围：枚举值，列表如下in - 精确查询like - 模糊查询 |
| values | String[] | 筛选数据 | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| data | Long[] | - | - |

<details>
<summary>请求示例</summary>

```json
{
	"items": [{
		"fieldFilters": [{
			"field": "negativeKeywordPacketName",
			"op": "like",
			"values": [
				"否词包名称"
			]
		}]
	}]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ 23 ]
}
```

</details>

---

### 添加否定关键词

**请求地址:** `https://api.baidu.com/json/sms/service/NegativeKeywordService/addNegativeKeyword`

**方法说明:** 添加否定关键词接口，支持添加计划/单元层级否定关键词、添加计划-否词包绑定等

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| negativeKeywordTypes 必填 | NegativeKeywordType[] | 待操作的否定关键词列表 | 集合长度限制：[1, 5000] 长度限制与账户权益星级相关：1星：2000；2星：4000；3星：5000 |
| negativeKeyword | String | 否定关键词 | 添加计划/单元否词时必填。长度限制：最大40个字节，1个中文按2个字节计算，英文、数字按1个字节计算；添加计划-否词包绑定时禁止填写查询结果中，当level=3时，表示计划独立否词字面；当level=5时，表示单元独立否词字面；当level=33时，表示与计划绑定的否词包名称 |
| campaignId | Long | 计划ID | 添加计划否词、计划-否词包绑定时必填 |
| adgroupId | Long | 单元ID | 添加单元否词时必填；单元不支持绑定否词包 |
| negativeMatchType | Integer | 匹配模式 | 取值范围：枚举值，列表如下0 - 短语匹配63 - 精确匹配添加计划/单元否词时必填。查询结果中仅当level=3和5时有意义，当level=33时固定返回0 |
| negativeKeywordPacketId | Long | 否词包ID | 添加计划-否词包绑定时必填。查询结果中仅当level=33时有意义，当level=3和5时固定返回0 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| negativeKeyword | String | 否定关键词 | 添加计划/单元否词时必填。长度限制：最大40个字节，1个中文按2个字节计算，英文、数字按1个字节计算；添加计划-否词包绑定时禁止填写查询结果中，当level=3时，表示计划独立否词字面；当level=5时，表示单元独立否词字面；当level=33时，表示与计划绑定的否词包名称 |
| campaignId | Long | 计划ID | 添加计划否词、计划-否词包绑定时必填 |
| adgroupId | Long | 单元ID | 添加单元否词时必填；单元不支持绑定否词包 |
| negativeMatchType | Integer | 匹配模式 | 取值范围：枚举值，列表如下0 - 短语匹配63 - 精确匹配添加计划/单元否词时必填。查询结果中仅当level=3和5时有意义，当level=33时固定返回0 |
| negativeKeywordPacketId | Long | 否词包ID | 添加计划-否词包绑定时必填。查询结果中仅当level=33时有意义，当level=3和5时固定返回0 |

<details>
<summary>请求示例</summary>

```json
{
  "negativeKeywordTypes" : [ {
    "negativeKeyword" : "example string",
    "campaignId" : 1,
    "negativeMatchType" : 0
  } ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "negativeKeywordId" : 1,
    "negativeKeyword" : "example string",
    "level" : 3,
    "campaignId" : 1,
    "campaignName" : "example string",
    "negativeMatchType" : 0
  } ]
}
```

</details>

---

### 添加否定关键词包

**请求地址:** `https://api.baidu.com/json/sms/service/NegativeKeywordPacketService/addNegativeKeywordPacket`

**方法说明:** 添加否词包接口

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| negativeKeywordPacketTypes 必填 | NegativeKeywordPacketType[] | 待操作的否词包列表 | 集合长度限制：[1, 100] |
| negativeKeywordPacketName  必填 | String | 否词包名称 | 长度限制：最大30个字节，1个中文按2个字节计算，英文、数字按1个字节计算 |
| negativeKeywords  必填 | NegativeKeywordType[] | 否词包内的否词信息 | 集合长度限制：[1, 5000] 长度限制与账户权益星级相关：1星：2000；2星：4000；3星：5000 |
| negativeKeyword | String | 否定关键词 | 添加计划/单元/否词包否词时必填；添加计划-否词包绑定时禁止填写；长度限制：最大40个字节，1个中文按2个字节计算，英文、数字按1个字节计算；查询结果中，当level=3时，表示计划独立否词字面；当level=5时，表示单元独立否词字面；当level=33时，表示与计划绑定的否词包名称 |
| negativeMatchType | Integer | 匹配模式 | 取值范围：枚举值，列表如下0 - 短语匹配63 - 精确匹配添加计划/单元/否词包否词时必填。查询结果中仅当level=3和5时有意义，当level=33时固定返回0 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| negativeKeywordPacketName | String | 否词包名称 | 长度限制：最大30个字节，1个中文按2个字节计算，英文、数字按1个字节计算 |
| negativeKeywords | NegativeKeywordType[] | 否词包内的否词信息 | 集合长度限制：[1, 5000] 长度限制与账户权益星级相关：1星：2000；2星：4000；3星：5000 |
| negativeKeywordId | Long | 否定关键词ID | 查询结果中，当level=3时，该ID表示计划独立否词ID；当level=5时，该ID表示单元独立否词ID；当level=33时，该ID表示计划与否词包的绑定ID |
| negativeKeyword | String | 否定关键词 | 添加计划/单元/否词包否词时必填；添加计划-否词包绑定时禁止填写；长度限制：最大40个字节，1个中文按2个字节计算，英文、数字按1个字节计算；查询结果中，当level=3时，表示计划独立否词字面；当level=5时，表示单元独立否词字面；当level=33时，表示与计划绑定的否词包名称 |
| negativeMatchType | Integer | 匹配模式 | 取值范围：枚举值，列表如下0 - 短语匹配63 - 精确匹配添加计划/单元/否词包否词时必填。查询结果中仅当level=3和5时有意义，当level=33时固定返回0 |
| negativeKeywordPacketId | Long | 否词包ID | 添加计划-否词包绑定时必填。查询结果中仅当level=33时有意义，当level=3和5时固定返回0 |

<details>
<summary>请求示例</summary>

```json
{
	"negativeKeywordPacketTypes": [{
		"negativeKeywordPacketName": "packet1",
		"negativeKeywords": [{
			"negativeKeyword": "word1",
			"negativeMatchType": 63
		}]
	}]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
	"data": [{
		"index": 0,
		"negativeKeywordPacketId": 495606,
		"negativeKeywordPacketName": "example string",
		"totalNegativeKeywordCount": 1,
		"normalNegativeKeywordCount": 0,
		"exactNegativeKeywordCount": 1,
		"negativeKeywords": [{
			"negativeKeywordId": 6179969,
			"negativeKeyword": "word1",
			"negativeMatchType": 63,
			"negativeKeywordPacketId": 495606
			"id": 6179969
		}],
		"bindCampaignIds": [],
		"bindCampaignCount": 0,
		"id": 495606
	}],
	"expand": {}
}
```

</details>

---

## 自动扩量

### 查询自动扩量物料

**请求地址:** `https://api.baidu.com/json/sms/service/AutoExpansionService/getAutoExpansion`

**方法说明:** 获取自动扩量物料列表，支持按照计划id、自动扩量id等条件查询

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| orderBy | BusinessLabelTypeField | 排序字段 | 取值范围：BusinessLabelTypeField字段枚举值 |
| autoExpansionTypeFields | BusinessLabelTypeField[] | 自动扩量请求字段列表 | 每个字段取值必须属于BusinessLabelTypeField枚举 |
| ids | Long[] | 层级主键集合 | - |
| idType | Integer | 查询层级 | 枚举值，默认账户层级。列表如下：2 - 账户层级3 - 计划层级17 - 自动扩量层级 |
| autoExpansionId | Long | 自动扩量id | - |
| autoExpansionName | String | 自动扩量名称 | - |
| adType | Integer | 所属计划-计划类型 | 取值范围：枚举值，列表如下 0 - 普通计划 14 - 商品计划 |
| campaignId | Long | 计划id | - |
| adgroupId | Long | 单元id | - |
| businessStatus | Integer | 自动扩量状态 | 取值范围：枚举值，列表如下0 - 自动扩量状态-有效1 - 自动扩量状态-暂停 |
| pause | Boolean | 启用/暂停自动扩量 | 选填，true-暂停false-启用 |
| campaignName | String | 计划名称 | - |
| adgroupName | String | 单元名称 | - |
| autoExpansionId | Long | 自动扩量id | - |
| autoExpansionName | String | 自动扩量名称 | - |
| adType | Integer | 所属计划-计划类型 | 取值范围：枚举值，列表如下 0 - 普通计划 14 - 商品计划 |
| campaignId | Long | 计划id | - |
| adgroupId | Long | 单元id | - |
| businessStatus | Integer | 自动扩量状态 | 取值范围：枚举值，列表如下0 - 自动扩量状态-有效1 - 自动扩量状态-暂停 |
| pause | Boolean | 启用/暂停自动扩量 | 选填，true-暂停false-启用 |
| campaignName | String | 计划名称 | - |
| adgroupName | String | 单元名称 | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| autoExpansionId | Long | 自动扩量id |  |
| autoExpansionName | String | 自动扩量名称 |  |
| adType | Integer | 所属计划-计划类型 | 枚举值，列表如下： 0 - 普通计划 14 - 商品计划 6- 网址定向计划 |
| campaignId | Long | 计划id |  |
| adgroupId | Long | 单元id |  |
| price | Double | 出价 |  |
| businessStatus | Integer | 自动扩量状态 |  |
| pause | Boolean | 启用/暂停自动扩量 |  |
| campaignName | String | 计划名称 |  |
| adgroupName | String | 单元名称 |  |

<details>
<summary>请求示例</summary>

```json
{
	"orderBy": "autoExpansionId",
	"autoExpansionTypeFields": ["campaignId", "adgroupId", "price", "businessStatus", "pause", "campaignName", "adgroupName", "autoExpansionId", "autoExpansionName", "adType"],
	"ids": [1],
	"idType": 2
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
	"body": {
		"data": [{
			"campaignId": 1,
			"adgroupId": 1,
			"price": 1.1,
			"businessStatus": 0,
			"pause": false,
			"campaignName": "example string",
			"adgroupName": "example string",
			"autoExpansionId": 1,
			"autoExpansionName": "example string",
			"adType": 1
		}]
	}
}
```

</details>

---

## 人群定向

### 人群定向-应用分类和手机品牌

---

### 人群覆盖预估

**请求地址:** `https://api.baidu.com/json/sms/service/CrowdFunction/getCrowdEstimate`

**方法说明:** 人群覆盖预估

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| sex | Integer | 性别 | 取值范围：枚举值，列表如下0 - 不限1 - 男2 - 女 |
| age | Integer[] | 年龄 | 取值范围：枚举值，列表如下0 - 不限1 - 18岁以下2 - 18-24岁4 - 25-34岁8 - 35-44岁16 - 44岁以上 |
| inPeople | Long[] | 兴趣 | - |
| tableName | String | 表名 | - |
| keys | String[] | 要查询的keys | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| coverage | Number | 预估覆盖 | 百分数，如 21表示覆盖率为21% |

<details>
<summary>请求示例</summary>

```json
{
  "sex" : 0,
  "age" : [ 0, 1, 2, 4, 8, 16 ],
  "inPeople" : [ 1 ],
  "tableName" : "example string",
  "keys" : [ "example string" ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "coverage" : null
  } ]
}
```

</details>

---

### 删除人群

**请求地址:** `https://api.baidu.com/json/sms/service/CrowdService/deleteCrowd`

**方法说明:** 删除人群：支持一次删除多个人群（一次最多1000）

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| crowdIds 必填 | Long[] | 需要删除的人群id列表 | 集合长度限制：[1, 1000]不支持删除拉新人群和再营销人群 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| crowdId | Long | 人群id | - |
| crowdName | String | 人群名称 | 中文字符数不超过50，英文字符数不超过100 |
| age | Integer[] | 年龄 | 默认值：[0]取值范围：枚举值，列表如下0 - 年龄不限1 - 小于182 - 19到244 - 25到348 - 35到4432 - 45到5464 - 54以上可以选多个年龄段,与customAge二选一必填 |
| sex | Integer | 性别 | 默认值：0取值范围：枚举值，列表如下0 - 性别不限1 - 男2 - 女 |
| inPeople | Long[] | 兴趣 | 默认值：[] 不限兴趣id：人群兴趣枚举值详见：[人群兴趣数据对象附录](https://dev2.baidu.com/content?sceneType=0&pageId=100164&nodeId=370&subhead=) |
| searchWord | String[] | 搜索历史 | 每个词长度不超过40,个数不超过1000 |
| browseUrl | String[] | 浏览历史 | 每个网址不超过64字符,个数不超过1000 |
| campaignIds | Long[] | 人群绑定的计划id | - |
| creativeIds | Long[] | 人群绑定的创意id | - |
| idPack | Long[] | ID包 | 当crowdDirectType取值为3时，该字段添加时必填，可输入1个或多个观星盘人群ID（即groupId），且观星盘人群ID需满足以下条件：a) 分发渠道dsps为"fc"b) 人群状态groupStatus为"running"或"finished"例如：满足条件的观星盘人群ID为125990724和125990575，则idPack设置为:[125990724,125990575] |
| crowdDirectType | Integer | 人群定向方式 | 取值范围：枚举值，列表如下0 - 表示基本属性（原特征定向）3 - 自定义人群4 - APP定向10 - 已转化用户 |
| effectType | Integer | 人群生效类型 | 默认值：0取值范围：枚举值，列表如下0 - 溢价人群1 - 排除人群 |
| createTime | String | 人群创建时间 | - |
| deviceProperty | CrowdDeviceProperty | 设备属性 | - |
| recentDays | Integer | 转化时间窗口 | 默认值：7取值范围：枚举值，列表如下1 - 转化时间窗口-1天7 - 转化时间窗口-1周30 - 转化时间窗口-1个月90 - 转化时间窗口-3个月180 - 转化时间窗口-6个月 |
| customAge | Integer[] | 自定义年龄 | 数组长度为2，第一个值比第二个值小，自定义年龄范围>=10，年龄区间最低为18岁，最高为56岁及以上,56岁以上使用99表示, customAge和age在基础属性的时候二选一必填 |
| os | Integer[] | 操作系统 | 取值范围：枚举值，列表如下0 - 操作系统-不限1 - 操作系统-IOS2 - 操作系统-Android |
| appBehaviour | Integer | 应用行为 | 取值范围：枚举值，列表如下0 - 应用行为-不限1 - 应用行为-应用分类2 - 应用行为-应用自定义 |
| appIds | String[] | 应用类型ID/应用ID | 空时表示不限appBehaviour=1时表示应用类型ID，应用类型ID编码见：[人群定向-应用分类和手机品牌](https://dev2.baidu.com/content?sceneType=0&pageId=104068&nodeId=1136&subhead=)，appBehaviour=2时表示应用ID， 应用ID编码见：[查询APP信息](https://dev2.baidu.com/content?sceneType=0&pageId=103935&nodeId=1094&subh... |
| phoneBrands | Integer[] | 手机品牌 | 空时表示不限，手机品牌编码见：[人群定向-应用分类和手机品牌](https://dev2.baidu.com/content?sceneType=0&pageId=104068&nodeId=1136&subhead=) |

<details>
<summary>请求示例</summary>

```json
{
  "crowdIds" : [ 1 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "crowdId" : 1,
    "userId" : 1,
    "crowdName" : "example string",
    "age" : [ "[0]" ],
    "sex" : 0,
    "inPeople" : [ "[] 不限" ],
    "searchWord" : [ "example string" ],
    "browseUrl" : [ "example string" ],
    "campaignIds" : [ 1 ],
    "creativeIds" : [ 1 ],
    "idPack" : [ 1 ],
    "crowdDirectType" : 0,
    "effectType" : 0,
    "createTime" : "example string",
    "deviceProperty" : {
      "os" : [ 0, 1, 2 ],
      "appBehaviour" : 0,
      "appIds" : [ "example string" ],
      "phoneBrands" : [ 1 ]
    },
    "recentDays" : 7,
    "customAge" : [ "18,45" ]
  } ]
}
```

</details>

---

### 删除人群绑定

**请求地址:** `https://api.baidu.com/json/sms/service/CrowdBindService/deleteBind`

**方法说明:** 删除人群绑定(可批量)，一次最多删除10000条绑定，建议分批多次请求

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| bindIds 必填 | Long[] | 绑定ID集合 | Long类型 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| bindId | Long | 绑定Id | 删除时：拉新、再营销人群不支持删除；更新时：仅支持绑定类型为计划的情况 |
| targetType | Integer | 绑定目标层级 | 取值范围：枚举值，列表如下1 - 绑定目标层级-计划200 - 绑定目标层级-创意 **该绑定将于2021.11.23下线** |
| targetId | Long | 绑定目标ID | 如果targetType=1，此字段代表计划ID 如果targetType=200，此字段代表创意ID |
| crowdPriceRatio | Double | 人群绑定出价系数 | 取值范围：[1.0, 10.0]当targetType=1，且人群生效类型为定向人群(effectType=0)，在添加和修改绑定时必填排除人群(effectType=1)添加和修改绑定时不支持，查询时返回固定值0.1 |
| campaignId | Long | 计划ID | - |
| crowdId | Long | 人群ID | - |

<details>
<summary>请求示例</summary>

```json
{
  "bindIds" : [ 150088369 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "bindId" : 150088369,
    "targetType" : 1,
    "targetId" : 155275760,
    "crowdPriceRatio" : 1.12,
    "campaignId" : 155275760,
    "crowdId" : 2258041
  } ]
}
```

</details>

---

### 新增人群

**请求地址:** `https://api.baidu.com/json/sms/service/CrowdService/addCrowd`

**方法说明:** 新增人群：支持一次新增多个人群，每个账户下最多支持1000个人群。（一次最多新增1000个人群）。无效属性不返回，没有输入值的属性不返回

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| crowdTypes 必填 | CrowdType[] | 需要修改的人群信息 | - |
| crowdName  必填 | String | 人群名称 | 中文字符数不超过50，英文字符数不超过100 |
| age | Integer[] | 年龄 | 默认值：[0]取值范围：枚举值，列表如下0 - 年龄不限1 - 小于182 - 19到244 - 25到348 - 35到4432 - 45到5464 - 54以上可以选多个年龄段,与customAge二选一必填 |
| sex | Integer | 性别 | 默认值：0取值范围：枚举值，列表如下0 - 性别不限1 - 男2 - 女 |
| inPeople | Long[] | 兴趣 | 默认值：[] 不限兴趣id：人群兴趣枚举值详见文档最下方附录 |
| idPack | Long[] | ID包 | 当crowdDirectType取值为3时，该字段添加时必填，可输入1个或多个观星盘人群ID（即groupId），且观星盘人群ID需满足以下条件：a) 分发渠道dsps为"fc"b) 人群状态groupStatus为"running"或"finished"例如：满足条件的观星盘人群ID为125990724和125990575，则idPack设置为:[125990724,125990575] |
| crowdDirectType  必填 | Integer | 人群定向方式 | 取值范围：枚举值，列表如下0 - 表示基本属性（原特征定向）3 - 自定义人群4 - APP定向10 - 已转化用户 |
| effectType | Integer | 人群生效类型 | 默认值：0取值范围：枚举值，列表如下0 - 溢价人群1 - 排除人群2 - 限定人群 |
| deviceProperty | CrowdDeviceProperty | 设备属性 | - |
| recentDays | Integer | 转化时间窗口 | 默认值：7取值范围：枚举值，列表如下1 - 转化时间窗口-1天7 - 转化时间窗口-1周30 - 转化时间窗口-1个月90 - 转化时间窗口-3个月180 - 转化时间窗口-6个月 |
| customAge | Integer[] | 自定义年龄 | 自定义年龄数组长度为2，需要满足：1、第二个值比第一个值要>=10;2、自定义年龄区间为最低18岁，最高56岁及以上（使用99表示）。举例：[18,99]，[20,30]3、customAge和age在基础属性的时候二选一必填 |
| os | Integer[] | 操作系统 | 取值范围：枚举值，列表如下0 - 不限1 - IOS2 - Android4 - 计算机 |
| appBehaviour | Integer | 应用行为 | 取值范围：枚举值，列表如下0 - 不限1 - 应用分类2 - 应用自定义 |
| appIds | String[] | 应用类型ID/应用ID | 空时表示不限，appBehaviour=1时表示应用类型ID，应用类型ID编码见：[应用类型ID](https://dev2.baidu.com/content?sceneType=0&pageId=104068&nodeId=1136)appBehaviour=2时表示应用ID， 应用ID编码见：[查询APP信息](https://dev2.baidu.com/content?sceneType=0&pageId=103935&nodeId=1094&subhead=) |
| phoneBrands | Integer[] | 手机品牌 | 空时表示不限，手机品牌编码见：[手机品牌信息](https://dev2.baidu.com/content?sceneType=0&pageId=104068&nodeId=1136) |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| crowdName | String | 人群名称 | 中文字符数不超过50，英文字符数不超过100 |
| age | Integer[] | 年龄 | 默认值：[0]取值范围：枚举值，列表如下0 - 年龄不限1 - 小于182 - 19到244 - 25到348 - 35到4432 - 45到5464 - 54以上可以选多个年龄段,与customAge二选一必填 |
| sex | Integer | 性别 | 默认值：0取值范围：枚举值，列表如下0 - 性别不限1 - 男2 - 女 |
| inPeople | Long[] | 兴趣 | 默认值：[] 不限兴趣id：人群兴趣枚举值详见文档最下方附录 |
| idPack | Long[] | ID包 | 当crowdDirectType取值为3时，该字段添加时必填，可输入1个或多个观星盘人群ID（即groupId），且观星盘人群ID需满足以下条件：a) 分发渠道dsps为"fc"b) 人群状态groupStatus为"running"或"finished"例如：满足条件的观星盘人群ID为125990724和125990575，则idPack设置为:[125990724,125990575] |
| crowdDirectType | Integer | 人群定向方式 | 取值范围：枚举值，列表如下0 - 表示基本属性（原特征定向）3 - 自定义人群4 - APP定向10 - 已转化用户 |
| effectType | Integer | 人群生效类型 | 默认值：0取值范围：枚举值，列表如下0 - 溢价人群1 - 排除人群2 - 限定人群 |
| deviceProperty | CrowdDeviceProperty | 设备属性 | - |
| recentDays | Integer | 转化时间窗口 | 默认值：7取值范围：枚举值，列表如下1 - 转化时间窗口-1天7 - 转化时间窗口-1周30 - 转化时间窗口-1个月90 - 转化时间窗口-3个月180 - 转化时间窗口-6个月 |
| customAge | Integer[] | 自定义年龄 | 自定义年龄数组长度为2，需要满足： |
| os | Integer[] | 操作系统 | 取值范围：枚举值，列表如下0 - 不限1 - IOS2 - Android4 - 计算机 |
| appBehaviour | Integer | 应用行为 | 取值范围：枚举值，列表如下0 - 不限1 - 应用分类2 - 应用自定义 |
| appIds | String[] | 应用类型ID/应用ID | 空时表示不限，appBehaviour=1时表示应用类型ID，应用类型ID编码见：[应用类型ID](https://dev2.baidu.com/content?sceneType=0&pageId=104068&nodeId=1136)appBehaviour=2时表示应用ID， 应用ID编码见：[查询APP信息](https://dev2.baidu.com/content?sceneType=0&pageId=103935&nodeId=1094&subhead=) |
| phoneBrands | Integer[] | 手机品牌 | 空时表示不限，手机品牌编码见：[手机品牌信息](https://dev2.baidu.com/content?sceneType=0&pageId=104068&nodeId=1136) |

<details>
<summary>请求示例</summary>

```json
{
  "crowdTypes" : [ {
    "crowdId" : 1,
    "userId" : 1,
    "crowdName" : "example string",
    "age" : [ "[0]" ],
    "sex" : 0,
    "inPeople" : [ "[] 不限" ],
    "searchWord" : [ "example string" ],
    "browseUrl" : [ "example string" ],
    "campaignIds" : [ 1 ],
    "creativeIds" : [ 1 ],
    "idPack" : [ 1 ],
    "crowdDirectType" : 0,
    "effectType" : 0,
    "createTime" : "example string",
    "deviceProperty" : {
      "os" : [ 0, 1, 2 ],
      "appBehaviour" : 0,
      "appIds" : [ "example string" ],
      "phoneBrands" : [ 1 ]
    },
    "recentDays" : 7,
    "customAge" : [ "[18,45]" ]
  } ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "crowdId" : 1,
    "userId" : 1,
    "crowdName" : "example string",
    "age" : [ "[0]" ],
    "sex" : 0,
    "inPeople" : [ "[] 不限" ],
    "searchWord" : [ "example string" ],
    "browseUrl" : [ "example string" ],
    "campaignIds" : [ 1 ],
    "creativeIds" : [ 1 ],
    "idPack" : [ 1 ],
    "crowdDirectType" : 0,
    "effectType" : 0,
    "createTime" : "example string",
    "deviceProperty" : {
      "os" : [ 0, 1, 2 ],
      "appBehaviour" : 0,
      "appIds" : [ "example string" ],
      "phoneBrands" : [ 1 ]
    },
    "recentDays" : 7,
    "customAge" : [ "[18,45]" ]
  } ]
}
```

</details>

---

### 更新人群

**请求地址:** `https://api.baidu.com/json/sms/service/CrowdService/updateCrowd`

**方法说明:** 修改人群：批量修改人群属性设置（一次最大支持1000个）

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| crowdTypes 必填 | CrowdType[] | 需要修改的人群信息 | - |
| crowdId  必填 | Long | 人群id | - |
| crowdName | String | 人群名称 | 中文字符数不超过50，英文字符数不超过100 |
| age | Integer[] | 年龄 | 默认值：[0]取值范围：枚举值，列表如下0 - 年龄不限1 - 小于182 - 19到244 - 25到348 - 35到4432 - 45到5464 - 54以上可以选多个年龄段,与customAge二选一必填 |
| sex | Integer | 性别 | 默认值：0取值范围：枚举值，列表如下0 - 性别不限1 - 男2 - 女 |
| inPeople | Long[] | 兴趣 | 默认值：[] 不限兴趣id：人群兴趣枚举值详见文档最下方附录 |
| idPack | Long[] | ID包 | 当crowdDirectType取值为3时，该字段添加时必填，可输入1个或多个观星盘人群ID（即groupId），且观星盘人群ID需满足以下条件：a) 分发渠道dsps为"fc"b) 人群状态groupStatus为"running"或"finished"例如：满足条件的观星盘人群ID为125990724和125990575，则idPack设置为:[125990724,125990575] |
| crowdDirectType  必填 | Integer | 人群定向方式 | 取值范围：枚举值，列表如下0 - 表示基本属性（原特征定向）3 - 自定义人群4 - APP定向10 - 已转化用户 |
| deviceProperty | CrowdDeviceProperty | 设备属性 | - |
| recentDays | Integer | 转化时间窗口 | 默认值：7取值范围：枚举值，列表如下1 - 转化时间窗口-1天7 - 转化时间窗口-1周30 - 转化时间窗口-1个月90 - 转化时间窗口-3个月180 - 转化时间窗口-6个月 |
| customAge | Integer[] | 自定义年龄 | 自定义年龄数组长度为2，需要满足：1、第二个值比第一个值要>=10;2、自定义年龄区间为最低18岁，最高56岁及以上（使用99表示）。举例：[18,99]，[20,30]3、customAge和age在基础属性的时候二选一必填 |
| os | Integer[] | 操作系统 | 取值范围：枚举值，列表如下0 - 不限1 - IOS2 - Android4 - 计算机 |
| appBehaviour | Integer | 应用行为 | 取值范围：枚举值，列表如下0 - 不限1 - 应用分类2 - 应用自定义 |
| appIds | String[] | 应用类型ID/应用ID | 空时表示不限，appBehaviour=1时表示应用类型ID，应用类型ID编码见：[应用类型ID](https://dev2.baidu.com/content?sceneType=0&pageId=104068&nodeId=1136)appBehaviour=2时表示应用ID， 应用ID编码见：[查询APP信息](https://dev2.baidu.com/content?sceneType=0&pageId=103935&nodeId=1094&subhead=) |
| phoneBrands | Integer[] | 手机品牌 | 空时表示不限，手机品牌编码见：[手机品牌信息](https://dev2.baidu.com/content?sceneType=0&pageId=104068&nodeId=1136) |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| crowdId | Long | 人群id | - |
| crowdName | String | 人群名称 | 中文字符数不超过50，英文字符数不超过100 |
| age | Integer[] | 年龄 | 默认值：[0]取值范围：枚举值，列表如下0 - 年龄不限1 - 小于182 - 19到244 - 25到348 - 35到4432 - 45到5464 - 54以上可以选多个年龄段,与customAge二选一必填 |
| sex | Integer | 性别 | 默认值：0取值范围：枚举值，列表如下0 - 性别不限1 - 男2 - 女 |
| inPeople | Long[] | 兴趣 | 默认值：[] 不限兴趣id：人群兴趣枚举值详见文档最下方附录 |
| idPack | Long[] | ID包 | 当crowdDirectType取值为3时，该字段添加时必填，可输入1个或多个观星盘人群ID（即groupId），且观星盘人群ID需满足以下条件：a) 分发渠道dsps为"fc"b) 人群状态groupStatus为"running"或"finished"例如：满足条件的观星盘人群ID为125990724和125990575，则idPack设置为:[125990724,125990575] |
| crowdDirectType | Integer | 人群定向方式 | 取值范围：枚举值，列表如下0 - 表示基本属性（原特征定向）3 - 自定义人群4 - APP定向10 - 已转化用户 |
| deviceProperty | CrowdDeviceProperty | 设备属性 | - |
| recentDays | Integer | 转化时间窗口 | 默认值：7取值范围：枚举值，列表如下1 - 转化时间窗口-1天7 - 转化时间窗口-1周30 - 转化时间窗口-1个月90 - 转化时间窗口-3个月180 - 转化时间窗口-6个月 |
| customAge | Integer[] | 自定义年龄 | 自定义年龄数组长度为2，需要满足： |
| os | Integer[] | 操作系统 | 取值范围：枚举值，列表如下0 - 不限1 - IOS2 - Android4 - 计算机 |
| appBehaviour | Integer | 应用行为 | 取值范围：枚举值，列表如下0 - 不限1 - 应用分类2 - 应用自定义 |
| appIds | String[] | 应用类型ID/应用ID | 空时表示不限，appBehaviour=1时表示应用类型ID，应用类型ID编码见：[应用类型ID](https://dev2.baidu.com/content?sceneType=0&pageId=104068&nodeId=1136)appBehaviour=2时表示应用ID， 应用ID编码见：[查询APP信息](https://dev2.baidu.com/content?sceneType=0&pageId=103935&nodeId=1094&subhead=) |
| phoneBrands | Integer[] | 手机品牌 | 空时表示不限，手机品牌编码见：[手机品牌信息](https://dev2.baidu.com/content?sceneType=0&pageId=104068&nodeId=1136) |

<details>
<summary>请求示例</summary>

```json
{
  "crowdTypes" : [ {
    "crowdId" : 1,
    "userId" : 1,
    "crowdName" : "example string",
    "age" : [ "[0]" ],
    "sex" : 0,
    "inPeople" : [ "[] 不限" ],
    "searchWord" : [ "example string" ],
    "browseUrl" : [ "example string" ],
    "campaignIds" : [ 1 ],
    "creativeIds" : [ 1 ],
    "idPack" : [ 1 ],
    "crowdDirectType" : 0,
    "effectType" : 0,
    "createTime" : "example string",
    "deviceProperty" : {
      "os" : [ 0, 1, 2 ],
      "appBehaviour" : 0,
      "appIds" : [ "example string" ],
      "phoneBrands" : [ 1 ]
    },
    "recentDays" : 7,
    "customAge" : [ "[18,45]" ]
  } ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "crowdId" : 1,
    "userId" : 1,
    "crowdName" : "example string",
    "age" : [ "[0]" ],
    "sex" : 0,
    "inPeople" : [ "[] 不限" ],
    "searchWord" : [ "example string" ],
    "browseUrl" : [ "example string" ],
    "campaignIds" : [ 1 ],
    "creativeIds" : [ 1 ],
    "idPack" : [ 1 ],
    "crowdDirectType" : 0,
    "effectType" : 0,
    "createTime" : "example string",
    "deviceProperty" : {
      "os" : [ 0, 1, 2 ],
      "appBehaviour" : 0,
      "appIds" : [ "example string" ],
      "phoneBrands" : [ 1 ]
    },
    "recentDays" : 7,
    "customAge" : [ "[18,45]" ]
  } ]
}
```

</details>

---

### 更新人群绑定

**请求地址:** `https://api.baidu.com/json/sms/service/CrowdBindService/updateBind`

**方法说明:** 修改人群绑定(可批量)，一次请求最多修改10000条绑定，建议分批多次请求

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| crowdBindTypes | CrowdBindType[] | 修改传入数据数据结构crowdBindTypes | - |
| bindId  必填 | Long | 绑定Id | 删除时：拉新、再营销人群不支持删除；更新时：仅支持绑定类型为计划的情况 |
| targetType | Integer | 绑定目标层级 | 取值范围：枚举值，列表如下1 - 绑定目标层级-计划200 - 绑定目标层级-创意 **该绑定将于2021.11.23下线** |
| targetId | Long | 绑定目标ID | 如果targetType=1，此字段代表计划ID 如果targetType=200，此字段代表创意ID |
| crowdPriceRatio | Double | 人群绑定出价系数 | 取值范围：[1.0, 10.0]当targetType=1，且人群生效类型为定向人群(effectType=0)或人群生效类型为限定人群(effectType=2)，在添加和修改绑定时必填排除人群(effectType=1)添加和修改绑定时不支持，查询时返回固定值0.1 |
| crowdId | Long | 人群ID | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| bindId | Long | 绑定Id | 删除时：拉新、再营销人群不支持删除；更新时：仅支持绑定类型为计划的情况 |
| targetType | Integer | 绑定目标层级 | 取值范围：枚举值，列表如下1 - 绑定目标层级-计划200 - 绑定目标层级-创意 **该绑定将于2021.11.23下线** |
| targetId | Long | 绑定目标ID | 如果targetType=1，此字段代表计划ID 如果targetType=200，此字段代表创意ID |
| crowdPriceRatio | Double | 人群绑定出价系数 | 取值范围：[1.0, 10.0]当targetType=1，且人群生效类型为定向人群(effectType=0)，在添加和修改绑定时必填排除人群(effectType=1)添加和修改绑定时不支持，查询时返回固定值0.1 |
| crowdId | Long | 人群ID | - |

<details>
<summary>请求示例</summary>

```json
{
  "crowdBindTypes" : [ {
    "bindId" : 150088369,
    "crowdPriceRatio" : 1.12,
  } ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "bindId" : 150088369,
    "targetType" : 1,
    "targetId" : 155275760,
    "crowdPriceRatio" : 1.12,
    "crowdId" : 2258041
  } ]
}
```

</details>

---

### 查询APP信息

**请求地址:** `https://api.baidu.com/json/sms/service/CrowdAppInfoService/getAppInfo`

**方法说明:** 查询App信息

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| appIds | String[] | 应用ID | - |
| appNameLike | String | 模糊查询的应用名称 | - |
| fields | String[] | 返回字段 | 取值范围：枚举值，列表如下id - 应用ID name- 应用名称 |
| limit | Integer[] | 分页参数。数组含有两个元素:第一个元素是偏移量,从0开始;第二个元素是分页大小,最大10000 | - |
| orderBy | String | 排序字段 | 取值范围：枚举值，列表如下id - 应用ID name- 应用名称 |
| desc | Boolean | 正序/倒序 | 默认值：truetrue-倒序，false-正序 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| id | String | 应用ID | - |
| name | String | 应用名称 | - |
| frequency | Long | 频次 | - |
| category | String | 应用分类 | - |

<details>
<summary>请求示例</summary>

```json
{
  "appIds" : [ "example string" ],
  "appNameLike" : "example string",
  "fields" : [ "$VALUES" ],
  "limit" : [ 1 ],
  "orderBy" : "$VALUES",
  "desc" : true
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "id" : "example string",
    "name" : "example string",
    "frequency" : 1,
    "category" : "example string"
  } ]
}
```

</details>

---

### 查询人群

**请求地址:** `https://api.baidu.com/json/sms/service/CrowdService/getCrowd`

**方法说明:** 通过该接口能够查询人群信息（一次最多查询1000个人群）

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| crowdFields 必填 | String[] | 请求字段 | 取值范围：枚举值，列表如下crowdId - 人群IDcrowdName - 人群名称age - 指定年龄段customAge - 自定义年龄sex - 性别inPeople - 兴趣idPack - ID包crowdDirectType - 人群定向方式effectType - 投放方式createTime - 人群创建时间conversionLevel - 转化层级recentDays - 转化时间窗口 |
| crowdDirectType | Integer[] | 定向方式筛选 | 取值范围：枚举值，列表如下0 - 表示基本属性（原特征定向）3 - 自定义人群4 - APP定向10 - 已转化用户 |
| limit | Integer[] | 分页 | 默认值：limit=[20000]当传入一个数字[k]时，表示取前k条记录；当传入两个数字[m,n]时，表示从m+1条开始取，共取n条记录；例如：limit:[10]，表示取前十条记录；limit:[2,20]，表示从第三条记录开始取，共取20条记录 |
| desc | Boolean | 正序/倒序 | 默认值：truetrue-倒序，false-正序 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| crowdId | Long | 人群id | - |
| userId | Long | 账户id | - |
| crowdName | String | 人群名称 | 中文字符数不超过50，英文字符数不超过100 |
| age | Integer[] | 年龄 | 默认值：[0]取值范围：枚举值，列表如下0 - 年龄不限1 - 小于182 - 19到244 - 25到348 - 35到4432 - 45到5464 - 54以上可以选多个年龄段,与customAge二选一必填 |
| sex | Integer | 性别 | 默认值：0取值范围：枚举值，列表如下0 - 性别不限1 - 男2 - 女 |
| inPeople | Long[] | 兴趣 | 默认值：[] 不限兴趣id：人群兴趣枚举值详见：[人群兴趣数据对象附录](https://dev2.baidu.com/content?sceneType=0&pageId=100164&nodeId=370&subhead=) |
| searchWord | String[] | 搜索历史 | 每个词长度不超过40,个数不超过1000 |
| browseUrl | String[] | 浏览历史 | 每个网址不超过64字符,个数不超过1000 |
| campaignIds | Long[] | 人群绑定的计划id | - |
| creativeIds | Long[] | 人群绑定的创意id | - |
| idPack | Long[] | ID包 | 当crowdDirectType取值为3时，该字段添加时必填，可输入1个或多个观星盘人群ID（即groupId），且观星盘人群ID需满足以下条件：a) 分发渠道dsps为"fc"b) 人群状态groupStatus为"running"或"finished"例如：满足条件的观星盘人群ID为125990724和125990575，则idPack设置为:[125990724,125990575] |
| crowdDirectType | Integer | 人群定向方式 | 取值范围：枚举值，列表如下0 - 表示基本属性（原特征定向）3 - 自定义人群4 - APP定向10 - 已转化用户 |
| effectType | Integer | 人群生效类型 | 默认值：0取值范围：枚举值，列表如下0 - 溢价人群1 - 排除人群 |
| createTime | String | 人群创建时间 | - |
| deviceProperty | CrowdDeviceProperty | 设备属性 | - |
| recentDays | Integer | 转化时间窗口 | 默认值：7取值范围：枚举值，列表如下1 - 转化时间窗口-1天7 - 转化时间窗口-1周30 - 转化时间窗口-1个月90 - 转化时间窗口-3个月180 - 转化时间窗口-6个月 |
| customAge | Integer[] | 自定义年龄 | 自定义年龄数组长度为2，需要满足：1、第二个值比第一个值要>=10;2、自定义年龄区间为最低18岁，最高56岁及以上（使用99表示）。举例：[18,99]，[20,30]3、customAge和age在基础属性的时候二选一必填 |
| os | Integer[] | 操作系统 | 取值范围：枚举值，列表如下0 - 操作系统-不限1 - 操作系统-IOS2 - 操作系统-Android |
| appBehaviour | Integer | 应用行为 | 取值范围：枚举值，列表如下0 - 应用行为-不限1 - 应用行为-应用分类2 - 应用行为-应用自定义 |
| appIds | String[] | 应用类型ID/应用ID | 空时表示不限appBehaviour=1时表示应用类型ID，应用类型ID编码见：[人群定向-应用分类和手机品牌](https://dev2.baidu.com/content?sceneType=0&pageId=104068&nodeId=1136&subhead=)，appBehaviour=2时表示应用ID， 应用ID编码见：[查询APP信息](https://dev2.baidu.com/content?sceneType=0&pageId=103935&nodeId=1094&subh... |
| phoneBrands | Integer[] | 手机品牌 | 空时表示不限，手机品牌编码见：[人群定向-应用分类和手机品牌](https://dev2.baidu.com/content?sceneType=0&pageId=104068&nodeId=1136&subhead=) |

<details>
<summary>请求示例</summary>

```json
{
  "crowdFields" : [ "$VALUES" ],
  "crowdDirectType" : [ 0, 3, 4, 10 ],
  "limit" : [ "limit=[20000]" ],
  "desc" : true
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "crowdId" : 1,
    "userId" : 1,
    "crowdName" : "example string",
    "age" : [ "[0]" ],
    "sex" : 0,
    "inPeople" : [ "[] 不限" ],
    "searchWord" : [ "example string" ],
    "browseUrl" : [ "example string" ],
    "campaignIds" : [ 1 ],
    "creativeIds" : [ 1 ],
    "idPack" : [ 1 ],
    "crowdDirectType" : 0,
    "effectType" : 0,
    "createTime" : "example string",
    "deviceProperty" : {
      "os" : [ 0, 1, 2 ],
      "appBehaviour" : 0,
      "appIds" : [ "example string" ],
      "phoneBrands" : [ 1 ]
    },
    "recentDays" : 7,
    "customAge" : [ "18,45" ]
  } ]
}
```

</details>

---

### 查询人群绑定

**请求地址:** `https://api.baidu.com/json/sms/service/CrowdBindService/getBind`

**方法说明:** 获取人群绑定列表, 通过不同层级（如：计划、创意等）获取人群绑定列表，一次最多查询到10000条绑定（超过只取前10000条），建议分批多次请求

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| crowdBindFields 必填 | String[] | 请求字段 | 取值范围：枚举值，列表见crowdBindFields |
| targetType | Integer | 绑定层级 | 取值范围：枚举值，列表如下1 - 绑定目标层级-计划200 - 绑定目标层级-创意**该绑定将于2021.11.23下线** 仅当idType为30（人群层级）时有效。 |
| ids 必填 | Long[] | 层级主键集合 | 说明： idType为3：此值代表计划ID列表，筛选与所选计划相关的所有绑定 idType为7：此值代表创意ID列表，筛选与所选创意相关的所有绑定 idType为29：此值代表绑定ID列表，筛选与所选绑定关系 idType为30：此值代表人群ID列表，筛选与所选人群相关的所有绑定 |
| idType 必填 | Integer | 查询层级 | 取值范围：枚举值，列表如下3 - 计划层级7 - 创意层级 **该绑定将于2021.11.23下线** 29 - 人群绑定层级30 - 人群id层级 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| bindId | Long | 绑定Id | 删除时：拉新、再营销人群不支持删除；更新时：仅支持绑定类型为计划的情况 |
| targetType | Integer | 绑定目标层级 | 取值范围：枚举值，列表如下1 - 绑定目标层级-计划200 - 绑定目标层级-创意 **该绑定将于2021.11.23下线** |
| targetId | Long | 绑定目标ID | 如果targetType=1，此字段代表计划ID 如果targetType=200，此字段代表创意ID |
| crowdPriceRatio | Double | 人群绑定出价系数 | 取值范围：[1.0, 10.0]当targetType=1，且人群生效类型为定向人群(effectType=0)，在添加和修改绑定时必填排除人群(effectType=1)添加和修改绑定时不支持，查询时返回固定值0.1 |
| campaignId | Long | 计划ID | - |
| crowdId | Long | 人群ID | - |

<details>
<summary>请求示例</summary>

```json
{
  "crowdBindFields" : [ "targetType","bindId","targetId","crowdPriceRatio","campaignId","crowdId" ],
  "idType":3,
  "ids":[155275760]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "bindId" : 150087399,
    "targetType" : 1,
    "targetId" : 155275760,
    "crowdPriceRatio" : 1.12,
    "campaignId" : 155275760,
    "crowdId" : 2268849
  } ]
}
```

</details>

---

### 添加人群绑定

**请求地址:** `https://api.baidu.com/json/sms/service/CrowdBindService/addBind`

**方法说明:** 新增人群绑定(可批量)，一个人群最多绑定300个计划，1000个创意。一次请求最多添加10000条绑定，建议分批多次请求

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| crowdBindTypes | CrowdBindType[] | 修改传入数据数据结构crowdBindTypes | - |
| targetType  必填 | Integer | 绑定目标层级 | 取值范围：枚举值，列表如下1 - 绑定目标层级-计划200 - 绑定目标层级-创意  **该绑定将于2021.11.23下线** |
| targetId  必填 | Long | 绑定目标ID | 如果targetType=1，此字段代表计划ID 如果targetType=200，此字段代表创意ID |
| crowdPriceRatio | Double | 人群绑定出价系数 | 取值范围：[1.0, 10.0]当targetType=1，且人群生效类型为定向人群(effectType=0)或人群生效类型为限定人群(effectType=2)，在添加和修改绑定时必填 排除人群(effectType=1)添加和修改绑定时不支持，查询时返回固定值0.1 |
| crowdId  必填 | Long | 人群ID | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| targetType | Integer | 绑定目标层级 | 取值范围：枚举值，列表如下1 - 绑定目标层级-计划200 - 绑定目标层级-创意 **该绑定将于2021.11.23下线** |
| targetId | Long | 绑定目标ID | 如果targetType=1，此字段代表计划ID 如果targetType=200，此字段代表创意ID |
| crowdPriceRatio | Double | 人群绑定出价系数 | 取值范围：[1.0, 10.0]当targetType=1，且人群生效类型为定向人群(effectType=0)，在添加和修改绑定时必填排除人群(effectType=1)添加和修改绑定时不支持，查询时返回固定值0.1 |
| crowdId | Long | 人群ID | - |

<details>
<summary>请求示例</summary>

```json
{
  "crowdBindTypes" : [ {
    "targetType" : 1,
    "targetId" : 155275760,
    "crowdPriceRatio" : 1.1,
    "crowdId" : 2258041
  } ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "bindId" : 150088369,
    "targetType" : 1,
    "targetId" : 155275760,
    "crowdPriceRatio" : 1.1,
    "crowdId" : 2258041
  } ]
}
```

</details>

---

## 创意

### 删除基础创意

**请求地址:** `https://api.baidu.com/json/sms/service/CreativeService/deleteCreative`

**方法说明:** 删除推广创意

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeIds | Long[] | 创意ID集合 | 集合长度限制：[1, 3000]建议分批多次请求 |

<details>
<summary>请求示例</summary>

```json
{
        "creativeIds": [
            49306215638
        ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
        "data": []
}
```

</details>

---

### 更新基础创意

**请求地址:** `https://api.baidu.com/json/sms/service/CreativeService/updateCreative`

**方法说明:** 修改推广创意
创意内容需遵循整体平台统一的填写规范，详细规范请参考[帮助中心](https://yingxiao.baidu.com/home/help/details?id=56426)<br>

如填写创意标题/描述时，不允许含有以下特殊符号：
* 英文符号：<> {} ()_ [] 
* 中文符号：「」｛｝［］（）〈〉【】
* 空格


> 针对修改创意遇到的审核问题，可通过[预审接口](https://dev2.baidu.com/content?sceneType=0&pageId=101429&nodeId=850&subhead=)进行物料预审检查，提前获取审核结果。通过预审的物料可以最大程度避免之后因审核问题物料下线

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeTypes | CreativeType[] | 更新推广创意字段 | 集合长度限制：[1, 3000]建议分批多次请求 |
| creativeId | Long | 创意ID | - |
| title | String | 创意标题 | 长度限制：[9, 50]长度限制为字节数限制，1个中文按2个字节计算，英文、数字按1个字节计算，通配符不计入 |
| description1 | String | 创意描述第一行 | 长度限制：[9, 80]长度限制为字节数限制，1个中文按2个字节计算，英文、数字按1个字节计算，通配符不计入 |
| description2 | String | 创意描述第二行 | 长度限制：[0, 80]长度限制为字节数限制，1个中文按2个字节计算，英文、数字按1个字节计算，通配符不计入如果不填之前的值会被覆盖为空字符串"" |
| pause | Boolean | 暂停/启用创意 | 默认值：false取值范围：枚举值，列表如下true - 暂停false - 启用 |
| mobileDestinationUrl | String | 移动访问网址 | 长度限制：[1, 1024]网址域名需与账户注册域名相同，其他情况请参考业务限制 |
| mobileDisplayUrl | String | 移动显示网址 | 长度限制：[1, 36]取值限制为账户注册域名本身，可通过"查询搜索推广API现已支持品牌信息配置，详情请前往了解和使用[品牌信息](https://dev2.baidu.com/notice?noticeId=392)账户"接口获取，对应字段为regDomain |
| pcDestinationUrl | String | 计算机访问网址 | 长度限制：[1, 1024]网址域名需与账户注册域名相同，其他情况请参考业务限制 |
| pcDisplayUrl | String | 计算机显示网址 | 长度限制：[1, 36]取值限制为账户注册域名本身，可通过"搜索推广API现已支持品牌信息配置，详情请前往了解和使用[品牌信息](https://dev2.baidu.com/notice?noticeId=392)查询账户"接口获取，对应字段为regDomain |
| tabs | Integer[] | 标签 | 说明: 同一创意支持添加多个标签，最多可添加30个，每个标签ID的取值范围为0-30，0表示无标签。举例：创意同时标记了1、2、3号标签，则该字段取值为：[1,2,3] |
| deeplink | String | 应用调起网址 | 长度限制：[0, 2048]该字段属于小流量功能，需要使用请向营销顾问申请（不在小流量名单中调用将报错） |
| ulink | String | ios应用调起 | 长度限制4096字符**该字段属于小流量功能，需要使用请向营销顾问申请（不在小流量名单中调用将报错）**当前仅支持营销目标-商品目录的创意层级 |
| miniProgramUrl | String | 小程序访问网址 | 长度限制：[0, 1024] |
| pcFinalUrl | String | 计算机最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackParam | String | 计算机监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackTemplate | String | 计算机第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileFinalUrl | String | 移动最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackParam | String | 移动监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackTemplate | String | 移动第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mainReason | String | 推广下线主要原因ID，值为”3”时，代表审核不通过 | - |
| detailReason | String | 推广下线具体原因，当mainReason为“3”时，本字段代表审核不通过的具体原因结构说明：detailReason为json字符串，解析后为嵌套数组，内层数组第一个元素为具体拒绝理由处理说明：字符串先解析成外层json数组，取外层数组第一个元素json数组作为内层数组，取内层数组的第一个元素字符串示例："[["您提交的物料涉及不合规内容，可能涉及以下问题（物料文字不合规:前面有名词但不是主语），请修改提交内容",""]]"; | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeId | Long | 创意ID |  |
| title | String | 创意标题 |  |
| description1 | String | 创意描述第一行 |  |
| description2 | String | 创意描述第二行 |  |
| pause | Boolean | 暂停/启用创意 |  |
| mobileDestinationUrl | String | 移动访问网址 |  |
| mobileDisplayUrl | String | 移动显示网址 |  |
| pcDestinationUrl | String | 计算机访问网址 |  |
| pcDisplayUrl | String | 计算机显示网址 |  |
| tabs | Integer[] | 标签 |  |
| deeplink | String | 应用调起网址 |  |
| miniProgramUrl | String | 小程序访问网址 |  |
| pcFinalUrl | String | 计算机最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackParam | String | 计算机监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackTemplate | String | 计算机第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileFinalUrl | String | 移动最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackParam | String | 移动监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackTemplate | String | 移动第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mainReason | String | 推广下线主要原因ID，值为”3”时，代表审核不通过 |  |
| detailReason | String | 推广下线具体原因，当mainReason为“3”时，本字段代表审核不通过的具体原因结构说明：detailReason为json字符串，解析后为嵌套数组，内层数组第一个元素为具体拒绝理由处理说明：字符串先解析成外层json数组，取外层数组第一个元素json数组作为内层数组，取内层数组的第一个元素字符串示例："[["您提交的物料涉及不合规内容，可能涉及以下问题（物料文字不合规:前面有名词但不是主语），请修改提交内容",""]]"; |  |

<details>
<summary>请求示例</summary>

```json
{
        "creativeTypes": [
            {
                "creativeId": 49306215638,
                "title": "xx创意标题",
                "description1": "数据不完整? 让{数据}完整恢复",
                "description2": "恢复不成功不收费 {中毒}数据恢复 值得信赖",
                "mobileDestinationUrl": "https://aisite.wejianzhan.com/site/abcd.com/46aasd1b-d206-4dfc-999a-7b8b487aab",
                "mobileDisplayUrl": "abcd.com",
                "pcDestinationUrl": "https://aisite.wejianzhan.com/site/abcd.com/46aasd1b-d206-4dfc-999a-7b8b487aab",
                "pcDisplayUrl": "abcd.com",
                "pcFinalUrl": "https://sjh.baidu.com/site/wjz0c/11111111",
                "pcTrackParam": "555",
                "pcTrackTemplate": "https://mrcrm.com?a={lpurl}"
                "tabs": [
                    1,
         
```

</details>

<details>
<summary>返回示例</summary>

```json
{
        "data": [
            {
                "campaignId": 149248725,
                "creativeId": 49306215638,
                "adgroupId": 5780330358,
                "title": "xx创意标题",
                "description1": "数据不完整? 让{数据}完整恢复",
                "description2": "恢复不成功不收费 {中毒}数据恢复 值得信赖",
                "mobileDestinationUrl": "https://aisite.wejianzhan.com/site/abcd.com/46aasd1b-d206-4dfc-999a-7b8b487aab",
                "mobileDisplayUrl": "abcd.com",
                "pcDestinationUrl": "https://aisite.wejianzhan.com/site/abcd.com/46aasd1b-d206-4dfc-999a-7b8b487aab",
                "pcDisplayUrl": "abcd.com",
                "pcFinalUrl": "https://sjh.baidu.com/site/wjz0c/11111111",
                "pcTrackParam": "555",
                "pcTrackTemplate": "https://mrcrm.
```

</details>

---

### 查询基础创意

**请求地址:** `https://api.baidu.com/json/sms/service/CreativeService/getCreative`

**方法说明:** 查询推广创意

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeFields | String[] | 查询推广创意字段 | 取值范围：枚举值，列表如下creativeId - 创意IDadgroupId - 推广单元IDtitle - 创意标题pause - 暂停/启用创意status - 创意状态description1 - 创意描述第一行description2 - 创意描述第二行pcDestinationUrl - 计算机访问网址pcDisplayUrl - 计算机显示网址mobileDestinationUrl - 移动访问网址mobileDisplayUrl - 移动显示网址tabs - 标签miniPro... |
| ids | Long[] | 查询id集合 | 类型为单元ID时不超过1000个，类型为创意ID时不超过3000个，建议分批多次请求 |
| idType | Integer | 查询id类型 | 取值范围：枚举值，列表如下5 - 单元ID7 - 创意ID |
| getTemp | Integer | 是否获取创意影子 | 默认值：0取值范围：枚举值，列表如下0 - 只查询创意本身1 - 只查询创意影子影子说明：用户先向系统提交了创意A，并且A已审核通过，之后再对A进行影响审核状态的修改（例如修改创意文案/url），修改后的创意为A’（A’即为影子，仅对审核通过的物料进行修改才会产生影子），在A’通过审核生效之前，线上的生效创意仍然为A。此时：getTemp为0查询到的是AgetTemp为1查询到的是A’ |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeId | Long | 创意ID |  |
| adgroupId | Long | 推广单元ID |  |
| title | String | 创意标题 |  |
| description1 | String | 创意描述第一行 |  |
| description2 | String | 创意描述第二行 |  |
| pause | Boolean | 暂停/启用创意 |  |
| status | Integer | 创意状态 |  |
| mobileDestinationUrl | String | 移动访问网址 |  |
| mobileDisplayUrl | String | 移动显示网址 |  |
| pcDestinationUrl | String | 计算机访问网址 |  |
| pcDisplayUrl | String | 计算机显示网址 |  |
| offlineReasons | OfflineReason[] | 推广下线原因 |  |
| tabs | Integer[] | 标签 |  |
| deeplink | String | 应用调起网址 |  |
| miniProgramUrl | String | 小程序访问网址 |  |
| createTime | String | 关键词创建时间 | 选填，只读 |
| pcFinalUrl | String | 计算机最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackParam | String | 计算机监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackTemplate | String | 计算机第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileFinalUrl | String | 移动最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackParam | String | 移动监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackTemplate | String | 移动第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mainReason | String | 推广下线主要原因ID，值为”3”时，代表审核不通过 |  |
| detailReason | String | 推广下线具体原因，当mainReason为“3”时，本字段代表审核不通过的具体原因结构说明：detailReason为json字符串，解析后为嵌套数组，内层数组第一个元素为具体拒绝理由处理说明：字符串先解析成外层json数组，取外层数组第一个元素json数组作为内层数组，取内层数组的第一个元素字符串示例："[["您提交的物料涉及不合规内容，可能涉及以下问题（物料文字不合规:前面有名词但不是主语），请修改提交内容",""]]"; |  |

<details>
<summary>请求示例</summary>

```json
{
        "creativeFields": [
            "creativeId",
            "title",
            "description1",
            "description2",
            "adgroupId",
            "mobileDestinationUrl",
            "pcDestinationUrl",
            "pcDisplayUrl",
            "mobileDisplayUrl",
            "pcFinalUrl": "https://sjh.baidu.com/site/wjz0c/11111111",
            "pcTrackParam": "555",
            "pcTrackTemplate": "https://mrcrm.com?a={lpurl}"
            "tabs"
        ],
        "idType": 7,
        "ids": [
            49306215638
        ],
        "getTemp": 0
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
        "data": [
            {
                "creativeId": 49306215638,
                "adgroupId": 5780330358,
                "title": "xx创意标题",
                "description1": "针对数据不完整情况,我们有成熟的解决方案,让{数据}完整恢复",
                "description2": "恢复成功才收费 {中毒}数据恢复 值得信赖",
                "mobileDestinationUrl": "https://aisite.wejianzhan.com/site/abcd.com/46aasd1b-d206-4dfc-999a-7b8b487aab",
                "mobileDisplayUrl": "abcd.com",
                "pcDestinationUrl": "https://aisite.wejianzhan.com/site/abcd.com/46aasd1b-d206-4dfc-999a-7b8b487aab",
                "pcDisplayUrl": "abcd.com",
                "pcFinalUrl": "https://sjh.baidu.com/site/wjz0c/11111111",
                "pcTrackParam": "555",
                "pcTrackTemplate": "https://mrcrm.com?a={lpurl}"
             
```

</details>

---

### 添加基础创意

**请求地址:** `https://api.baidu.com/json/sms/service/CreativeService/addCreative`

**方法说明:** 新增推广创意<br>
创意内容需遵循整体平台统一的填写规范，详细规范请参考[帮助中心](https://yingxiao.baidu.com/home/help/details?id=56426)<br>

如填写创意标题/描述时，不允许含有以下特殊符号：
* 英文符号：[ <>_「」［］〈〉【】\[\]]+
* 中文符号：[‘’“”。＋，－？＿]+
* 空格

> 针对新增创意遇到的审核问题，可通过[预审接口](https://dev2.baidu.com/content?sceneType=0&pageId=101429&nodeId=850&subhead=)进行物料预审检查，提前获取审核结果。通过预审的物料可以最大程度避免之后因审核问题物料下线

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeTypes | CreativeType[] | 新增推广创意物料 | 集合长度限制：[1, 3000]建议分批多次请求 |
| campaignId | Long | 计划ID | - |
| adgroupId | Long | 推广单元ID | - |
| title | String | 创意标题 | 长度限制：[9, 50]长度限制为字节数限制，1个中文按2个字节计算，英文、数字按1个字节计算，通配符不计入 |
| description1 | String | 创意描述第一行 | 长度限制：[9, 80]长度限制为字节数限制，1个中文按2个字节计算，英文、数字按1个字节计算，通配符不计入 |
| description2 | String | 创意描述第二行 | 长度限制：[0, 80]长度限制为字节数限制，1个中文按2个字节计算，英文、数字按1个字节计算，通配符不计入 |
| mobileDestinationUrl | String | 移动访问网址 | 长度限制：[1, 1024]网址域名需与账户注册域名相同，其他情况请参考业务限制 |
| mobileDisplayUrl | String | 移动显示网址 | 长度限制：[1, 36]取值限制为账户注册域名本身，可通过"查询账户"接口获取，对应字段为regDomain 搜索推广API现已支持品牌信息配置，详情请前往了解和使用[品牌信息](https://dev2.baidu.com/notice?noticeId=392) |
| pcDestinationUrl | String | 计算机访问网址 | 长度限制：[1, 1024]网址域名需与账户注册域名相同，其他情况请参考业务限制 |
| pcDisplayUrl | String | 计算机显示网址 | 长度限制：[1, 36]取值限制为账户注册域名本身，可通过"查询账户"接口获取，对应字段为regDomain 搜索推广API现已支持品牌信息配置，详情请前往了解和使用[品牌信息](https://dev2.baidu.com/notice?noticeId=392) |
| tabs | Integer[] | 标签 | 说明: 同一创意支持添加多个标签，最多可添加30个，每个标签ID的取值范围为0-30，0表示无标签。举例：创意同时标记了1、2、3号标签，则该字段取值为：[1,2,3] |
| deeplink | String | 应用调起网址 | 长度限制：[0, 2048]该字段属于小流量功能，需要使用请向营销顾问申请（不在小流量名单中调用将报错） |
| ulink | String | ios应用调起 | 长度限制4096字符**该字段属于小流量功能，需要使用请向营销顾问申请（不在小流量名单中调用将报错）**当前仅支持营销目标-商品目录的创意层级 |
| miniProgramUrl | String | 小程序访问网址 | 长度限制：[0, 1024] |
| pcFinalUrl | String | 计算机最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackParam | String | 计算机监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackTemplate | String | 计算机第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileFinalUrl | String | 移动最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackParam | String | 移动监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackTemplate | String | 移动第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mainReason | String | 推广下线主要原因ID，值为”3”时，代表审核不通过 | - |
| detailReason | String | 推广下线具体原因，当mainReason为“3”时，本字段代表审核不通过的具体原因结构说明：detailReason为json字符串，解析后为嵌套数组，内层数组第一个元素为具体拒绝理由处理说明：字符串先解析成外层json数组，取外层数组第一个元素json数组作为内层数组，取内层数组的第一个元素字符串示例："[["您提交的物料涉及不合规内容，可能涉及以下问题（物料文字不合规:前面有名词但不是主语），请修改提交内容",""]]"; | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| campaignId | Long | 计划ID |  |
| adgroupId | Long | 推广单元ID |  |
| title | String | 创意标题 |  |
| description1 | String | 创意描述第一行 |  |
| description2 | String | 创意描述第二行 |  |
| mobileDestinationUrl | String | 移动访问网址 |  |
| mobileDisplayUrl | String | 移动显示网址 |  |
| pcDestinationUrl | String | 计算机访问网址 |  |
| pcDisplayUrl | String | 计算机显示网址 |  |
| tabs | Integer[] | 标签 |  |
| deeplink | String | 应用调起网址 |  |
| miniProgramUrl | String | 小程序访问网址 |  |
| pcFinalUrl | String | 计算机最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackParam | String | 计算机监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| pcTrackTemplate | String | 计算机第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileFinalUrl | String | 移动最终访问网址 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackParam | String | 移动监控后缀 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mobileTrackTemplate | String | 移动第三方追踪模板 | 该字段仅适用于以下营销目标：网站链接、电商店铺推广、应用推广 |
| mainReason | String | 推广下线主要原因ID，值为”3”时，代表审核不通过 |  |
| detailReason | String | 推广下线具体原因，当mainReason为“3”时，本字段代表审核不通过的具体原因结构说明：detailReason为json字符串，解析后为嵌套数组，内层数组第一个元素为具体拒绝理由处理说明：字符串先解析成外层json数组，取外层数组第一个元素json数组作为内层数组，取内层数组的第一个元素字符串示例："[["您提交的物料涉及不合规内容，可能涉及以下问题（物料文字不合规:前面有名词但不是主语），请修改提交内容",""]]"; |  |

<details>
<summary>请求示例</summary>

```json
{
        "creativeTypes": [
            {
                "campaignId":149248725,
                "adgroupId":5780330358,
                "title": "xx创意标题",
                "description1": "针对数据不完整情况,我们有成熟的解决方案,让{数据}完整恢复",
                "description2": "恢复成功才收费 {中毒}数据恢复 值得信赖",
                "mobileDestinationUrl": "https://aisite.wejianzhan.com/site/abcd.com/46aa6sssd1b-d206-4dfc-999a-7b8b487aab5d",
                "mobileDisplayUrl":"abcd.com",
                "pcDestinationUrl": "https://aisite.wejianzhan.com/site/abcd.com/46aa6sssd1b-d206-4dfc-999a-7b8b487aab5d",
                "pcDisplayUrl": "abcd.com",
                "pcFinalUrl": "https://sjh.baidu.com/site/wjz0c/11111111",
                "pcTrackParam": "555",
                "pcTrackTemplate": "https://mrcrm.com?a={lpurl}"
```

</details>

<details>
<summary>返回示例</summary>

```json
{
        "data": [
            {
                "campaignId": 149248725,
                "creativeId": 49305762515,
                "adgroupId": 5780330358,
                "title": "xx创意标题",
                "description1": "针对数据不完整情况,我们有成熟的解决方案,让{数据}完整恢复",
                "description2": "恢复成功才收费 {中毒}数据恢复 值得信赖",
                "mobileDestinationUrl": "https://aisite.wejianzhan.com/site/abcd.com/46aa6sssd1b-d206-4dfc-999a-7b8b487aab5d",
                "mobileDisplayUrl": "abcd.com",
                "pcDestinationUrl": "https://aisite.wejianzhan.com/site/abcd.com/46aa6sssd1b-d206-4dfc-999a-7b8b487aab5d",
                "pcDisplayUrl": "abcd.com",
                "pcFinalUrl": "https://sjh.baidu.com/site/wjz0c/11111111",
                "pcTrackParam": "555",
                "pcTrackTem
```

</details>

---

## 创意组件

### 修改营销类组件方案

**请求地址:** `https://api.baidu.com/json/sms/service/LeadAdsService/updateStrategies`

**方法说明:** 修改营销类组件方案

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| items | MaterialType[] | 参数体 | 列表长度不超过10 |
| materialContent | String | 物料内容 | 物料内容为json格式的字符串，内容如下：materialType = 2001表示电话，示例：{\"phoneType\":3,\"solutionId\":17190983} materialType = 2111表示咨询方案，示例："{\"solutionId\":2464853338}" materialType = 2108表示咨询链接, 示例："{\"url\":\"http://saidu.com/site/hehehe\"}" |
| materialType | Long | 物料类型 | 取值范围：枚举值，列表如下2001 - 营销-电话2111 - 营销-咨询方案2108 - 营销-咨询链接 |
| binds | BindType[] | 绑定数据 | - |
| targetType | Integer | 绑定层级，计划或账户 | 取值范围：枚举值，列表如下0 - 绑定类型-账户1 - 绑定类型-计划 |
| targetId | Long | 绑定层级的ID，计划ID或账户ID | 数据来源：https://dev2.baidu.com/content?sceneType=0&pageId=100260&nodeId=198&subhead= |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| strategyId | Long | 推广方案ID | - |
| userId | Long | 账户ID | - |
| materialId | Long | 物料ID | - |
| materialContent | String | 物料内容 | 物料内容为json格式的字符串，内容如下：materialType = 2001表示电话，示例："{\"phoneType\":3,\"solutionId\":17190983} "materialType = 2111表示咨询方案，示例："{\"solutionId\":24648564448}" materialType = 2108表示咨询链接, 示例："{\"url\":\"http://sggg.baidu.com/site/hehehe\"}" |
| materialType | Long | 物料类型 | 取值范围：枚举值，列表如下2001 - 营销-电话2111 - 营销-咨询方案2108 - 营销-咨询链接 |
| isPause | Integer | 起停状态 | 取值范围：枚举值，列表如下0 - 启用1 - 暂停 |
| status | Integer | 推广方案状态 | 取值范围：枚举值，列表如下1 - 有效2 - 暂停推广3 - 审核中/未审核4 - 审核不通过 |
| material | MaterialType | 物料数据 | - |
| binds | BindType[] | 绑定数据 | - |
| addTime | Date | 推广方案添加时间 | - |
| modTime | Date | 推广方案修改时间 | - |
| materialId | Long | 物料id | 修改时必填 |
| userId | Long | 账号id | - |
| materialName | String | 物料名称 | - |
| materialType | Long | 物料类型 | 取值范围：枚举值，列表如下2001 - 营销-电话2111 - 营销-咨询方案2108 - 营销-咨询链接 |
| auditContent | String | 待审核物料内容 | - |
| materialContent | String | 审核通过物料内容 | - |
| auditStatus | Integer | 审核状态 | 取值范围：枚举值，列表如下1 - 有效2 - 暂停推广3 - 审核中/未审核4 - 审核不通过 |
| reasons | String | 下线理由 | - |
| wholeReason | String | 风控返回的拒绝理由，json格式 | - |
| phoneType | Integer | 电话组件类型 | 使用电话组件返回电话组件类型：3表示智能电话，4表示普通电话 |
| bindId | Long | 绑定ID | - |
| userId | Long | 账户ID | - |
| strategyId | Long | 推广方案ID | - |
| materialType | Long | 绑定物料的物料类型 | 取值范围：枚举值，列表如下2001 - 营销-电话2111 - 营销-咨询方案2108 - 营销-咨询链接 |
| materialId | Long | 绑定物料的物料ID | - |
| targetType | Integer | 绑定层级 | 取值范围：枚举值，列表如下0 - 绑定类型-账户1 - 绑定类型-计划 |
| targetId | Long | 绑定层级的ID | 数据来源： |
| isPause | Integer | 起停状态 | 取值范围：枚举值，列表如下0 - 启用1 - 暂停 |
| campaignId | Long | 计划ID | - |
| delete | Boolean | 计划是否删除，只读 | 取值范围：枚举值，列表如下true - 删除false - 未删除 |

<details>
<summary>请求示例</summary>

```json
{
  "items" : [ { } ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "strategyId" : 3283393474,
    "userId" : 632121,
    "materialId" : 328339347,
    "materialContent" : "example string",
    "materialType" : 2001,
    "status" : 1,
    "material" : {
      "materialId" : 3311907533,
      "userId" : 632112,
      "materialName" : "xh---test-复制",
      "materialType" : 2001,
      "auditContent" : "\"{\\\"advicetype\\\":0,\\\"groupid\\\":0,\\\"imlpUrl\\\":\\\"https://aderer.baidu.com\\\",\\\"imname\\\":\\\"测试用\\\",\\\"siteid\\\":0,\\\"solutionId\\\":1335338}\"",
      "materialContent" : "\"{\\\"advicetype\\\":0,\\\"groupid\\\":0,\\\"iml
```

</details>

---

### 删除APP绑定

**请求地址:** `https://api.baidu.com/json/sms/service/AdgroupAppService/deleteAdgroupAppBind`

**方法说明:** 删除指定的App绑定（可批量）

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| delBindIds 必填 | Long[] | 删除绑定Id信息 | 单次请求不超过2000个 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| campaignId | Long | 推广计划id | - |
| adgroupId | Long | 推广单元id | - |
| name | String | app名称 | - |
| version | String | app版本 | - |
| platform | Integer | app操作系统 | 取值范围：枚举值，列表如下1 - 安卓3 - iOS 5 - 鸿蒙 |
| cbindId | Long | 绑定关系id | - |
| channelPackage | String | app渠道包名称 | - |
| status | Integer | 状态 | 第一位表示暂停位（0启动，1暂停）；第二位表示APP有效位（0有效，1无效）；第三位表示审核中（0非审核中，1审核中） |
| appSource | Integer | app来源 | 取值范围：枚举值，列表如下0 - 百度移动应用平台1 - 极速下载2 - 投放平台3 - 百度移动应用平台 |
| channelId | Long | Android包唯一标识 | - |
| appStoreId | Long | IOS包唯一标识 | - |
| packageName | String | app包名 | - |

<details>
<summary>请求示例</summary>

```json
{
  "delBindIds" : [ 1 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "campaignId" : 1,
    "adgroupId" : 1,
    "name" : "1",
    "version" : "1",
    "platform" : 1,
    "cbindId" : 1,
    "channelPackage" : "渠道包名称",
    "status" : 0,
    "appSource" : 0,
    "channelId" : 100000000,
    "appStoreId" : 1000000,
    "packageName" : "com.baidu.xxx"
  } ]
}
```

</details>

---

### 删除创意组(普通)

**请求地址:** `https://api.baidu.com/json/sms/service/DpaCreativeService/deleteCreativeGroup`

**方法说明:** 根据创意组ID删除创意组，删除创意组会同时删除创意组下的创意等从属信息。

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupId 必填 | Long[] | 创意组ids | 集合长度限制：[1, 100] |

<details>
<summary>请求示例</summary>

```json
{
  "creativeGroupId" : [ 123 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ { } ]
}
```

</details>

---

### 删除创意组物料

**请求地址:** `https://api.baidu.com/json/sms/service/DpaCreativeService/deleteCreatives`

**方法说明:** 根据创意组ID和样式ID删除创意组下的样式（创意）

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupId 必填 | Long | 创意组ID | - |
| formatId 必填 | Long[] | 样式ID | 集合长度限制：[1, 100] |

<details>
<summary>请求示例</summary>

```json
{
  "creativeGroupId" : 123,
  "formatId" : [ 11030 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ { } ]
}
```

</details>

---

### 删除商品计划高级创意

**请求地址:** `https://api.baidu.com/json/sms/service/DpaApiCreativeService/deleteDpaCreative`

**方法说明:** 根据商品单元ID或创意ID删除商品单元中的创意

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeIds | Long[] | 创意ID | 集合长度限制：[0, 100] |
| adgroupIds | Long[] | 商品单元ID | 集合长度限制：[0, 100]与creativeIds二选一，优先按照creativeIds删除 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeIds | Long[] | 删除成功的创意ID | - |
| adgroupIds | Long[] | 删除成功的商品单元ID | - |

<details>
<summary>请求示例</summary>

```json
{
  "creativeIds" : [ 123 ],
  "adgroupIds" : [ 456 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "creativeIds" : [ 123 ],
    "adgroupIds" : [  ]
  } ]
}
```

</details>

---

### 删除组件

**请求地址:** `https://api.baidu.com/json/sms/service/AdvancedSegmentService/deleteSegment`

**方法说明:** 删除指定的物料（可批量）

<details>
<summary>请求示例</summary>

```json
{
    "items": [9000678668, 9000678669]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{   
    "SegmentType": [{
        "SegmentId": 9000678668
  },
  {
        "SegmentId": 9000678669
   }]
}
```

</details>

---

### 删除组件绑定

**请求地址:** `https://api.baidu.com/json/sms/service/AdvancedSegmentBindService/deleteSegmentBind`

**方法说明:** 删除指定的物料绑定（可批量）

<details>
<summary>请求示例</summary>

```json
{
    "items": [9000678668, 9000678669]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
    "data": [
        "SegmentBindType":[{
               "bindid": 9000678668
         },
         {
               "bindid": 9000678669
         }] 
    ]
}
```

</details>

---

### 删除营销类组件方案

**请求地址:** `https://api.baidu.com/json/sms/service/LeadAdsService/deleteStrategies`

**方法说明:** 删除营销类组件方案

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| items | Long[] | 推广方案ID列表 | 列表长度不超过10 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| strategyId | Long | 推广方案ID | - |
| userId | Long | 账户ID | - |
| materialId | Long | 物料ID | - |
| materialContent | String | 物料内容 | 物料内容为json格式的字符串，内容如下：materialType = 2001表示电话，示例："{\"phoneType\":3,\"solutionId\":17190983} "materialType = 2111表示咨询方案，示例："{\"solutionId\":24648564448}" materialType = 2108表示咨询链接, 示例："{\"url\":\"http://sggg.baidu.com/site/hehehe\"}" |
| materialType | Long | 物料类型 | 取值范围：枚举值，列表如下2001 - 营销-电话2111 - 营销-咨询方案2108 - 营销-咨询链接 |
| isPause | Integer | 起停状态 | 取值范围：枚举值，列表如下0 - 启用1 - 暂停 |
| status | Integer | 推广方案状态 | 取值范围：枚举值，列表如下1 - 有效2 - 暂停推广3 - 审核中/未审核4 - 审核不通过 |
| material | MaterialType | 物料数据 | - |
| binds | BindType[] | 绑定数据 | - |
| addTime | Date | 推广方案添加时间 | - |
| modTime | Date | 推广方案修改时间 | - |
| materialId | Long | 物料id | 修改时必填 |
| userId | Long | 账号id | - |
| materialName | String | 物料名称 | - |
| materialType | Long | 物料类型 | 取值范围：枚举值，列表如下2001 - 营销-电话2111 - 营销-咨询方案2108 - 营销-咨询链接 |
| auditContent | String | 待审核物料内容 | - |
| materialContent | String | 审核通过物料内容 | - |
| auditStatus | Integer | 审核状态 | 取值范围：枚举值，列表如下1 - 有效2 - 暂停推广3 - 审核中/未审核4 - 审核不通过 |
| reasons | String | 下线理由 | - |
| wholeReason | String | 风控返回的拒绝理由，json格式 | - |
| phoneType | Integer | 电话组件类型 | 使用电话组件返回电话组件类型：3表示智能电话，4表示普通电话 |
| bindId | Long | 绑定ID | - |
| userId | Long | 账户ID | - |
| strategyId | Long | 推广方案ID | - |
| materialType | Long | 绑定物料的物料类型 | 取值范围：枚举值，列表如下2001 - 营销-电话2111 - 营销-咨询方案2108 - 营销-咨询链接 |
| materialId | Long | 绑定物料的物料ID | - |
| targetType | Integer | 绑定层级 | 取值范围：枚举值，列表如下0 - 绑定类型-账户1 - 绑定类型-计划 |
| targetId | Long | 绑定层级的ID | 数据来源： |
| isPause | Integer | 起停状态 | 取值范围：枚举值，列表如下0 - 启用1 - 暂停 |
| campaignId | Long | 计划ID | - |
| delete | Boolean | 计划是否删除，只读 | 取值范围：枚举值，列表如下true - 删除false - 未删除 |

<details>
<summary>请求示例</summary>

```json
{
  "items" : [ 1 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "strategyId" : 3283393474,
    "userId" : 632121,
    "materialId" : 328339347,
    "materialContent" : "example string",
    "materialType" : 2001,
    "status" : 1,
    "material" : {
      "materialId" : 3311907533,
      "userId" : 632112,
      "materialName" : "xh---test-复制",
      "materialType" : 2001,
      "auditContent" : "\"{\\\"advicetype\\\":0,\\\"groupid\\\":0,\\\"imlpUrl\\\":\\\"https://aderer.baidu.com\\\",\\\"imname\\\":\\\"测试用\\\",\\\"siteid\\\":0,\\\"solutionId\\\":1335338}\"",
      "materialContent" : "\"{\\\"advicetype\\\":0,\\\"groupid\\\":0,\\\"iml
```

</details>

---

### 新增创意组物料

**请求地址:** `https://api.baidu.com/json/sms/service/DpaCreativeService/addCreatives`

**方法说明:** 新增创意

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupId 必填 | long | 创意组ID | - |
| creativeTypes | CreativeType[] | 创意对象 | 集合长度限制：[1, 100] |
| creativeGroupId | long | 创意组ID | - |
| formatId | int | 样式ID | - |
| templateId | long | 模板ID | - |
| templateFields | String | 样式模板字段 | json形式的物料数据，如：{"image": "${loc}", "key_1": "${name}"}其中，image、key_1均为样式中的字段，来自样式模板，参考TemplateField |

<details>
<summary>请求示例</summary>

```json
{
  "creativeGroupId" : 123,
  "creativeTypes" : [ {
    "creativeGroupId" : 123,
    "formatId" : 11027,
    "templateId" : 938,
    "templateFields" : "{\"image\":\"${image}\",\"link_boxapp\":\"\",\"link\":\"${outerID}\",\"style_1\":\"\",\"link_deeplink\":\"\",\"value_2\":\"${attributes.investmentAmount}\",\"value_1\":\"${name}\",\"style_2\":\"\"}"
  } ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ { } ]
}
```

</details>

---

### 新增商品计划高级创意

**请求地址:** `https://api.baidu.com/json/sms/service/DpaApiCreativeService/addDpaCreative`

**方法说明:** 新增商品计划高级创意，每个单元下每种样式只能新增一个

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| dpaCreativeTypes 必填 | DpaCreativeType[] | 商品单元创意 | 集合长度限制：[1, 100] |
| userId  必填 | Long | 账户ID | - |
| campaignId  必填 | Long | 商品推广计划ID | - |
| adgroupId  必填 | Long | 商品推广单元ID | - |
| basicCreative  必填 | DpaBasicCreativeType | 通用基础创意 | 目前仅能填写一个 |
| productCreatives  必填 | DpaProductCreativeType[] | 商品创意 | - |
| showUrl  必填 | String | 创意通用展示URL | 长度限制：[1, 1024] |
| index | Integer | 下标 | - |
| monitorUrl | String | 监控url | 长度限制：[0, 1024] |
| title  必填 | String | 通用标题 | 长度限制：[1, 1024]1个中文按2个字符计算，英文、数字按1个字符计算 |
| desc  必填 | String | 通用描述 | 长度限制：[1, 1024]1个中文按2个字符计算，英文、数字按1个字符计算 |
| pcLinkUrl | String | pc链接 | 长度限制：[0, 1024]当计划设备类型为PC时必填 |
| wirelessLinkUrl | String | 无线端链接 | 长度限制：[0, 1024]当计划设备类型为无线时必填 |
| wirelessLinkUrlBoxApp | String | 无线小程序链接 | 长度限制：[0, 1024] |
| wirelessLinkUrlDeepLink | String | 无线deeplink链接 | 长度限制：[0, 1024] |
| mtId  必填 | Integer | 样式ID | 如更新productCreatives，必填 |
| templateId  必填 | Long | 样式模板ID | 如更新productCreatives，必填。分行业的样式模板，同一个样式在不同的行业下有不同的模板 |
| enName | String | 样式英文名称 | - |
| data | Map | 创意物料 | 如更新productCreatives，必填。Key-value形式的物料数据，如： { "image": "${loc}", "title": "${name}" } 其中，image、title均为样式中的字段，来自TemplateField中的field字段；value数据来源于[获取指定商品目录的字段列表](https://dev2.baidu.com/content?sceneType=0&pageId=103118&nodeId=253&subhead=)。 注意：创意物料为一个整体... |
| huituCreative | DpaHuituCreative | 慧图字段 | - |
| groupId | long | 模板组ID | - |
| templateId | long | 模板ID | - |
| mtId | long | 样式ID | - |
| fields | HuituCreativeField[] | 慧图创意字段 | - |
| name | String | 名称 | - |
| value | String | 内容 | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| userId | Long | 账户ID | - |
| campaignId | Long | 商品推广计划ID | - |
| adgroupId | Long | 商品推广单元ID | - |
| basicCreative | DpaBasicCreativeType | 通用基础创意 | 目前仅能填写一个 |
| productCreatives | DpaProductCreativeType[] | 商品创意 | - |
| showUrl | String | 创意通用展示URL | 长度限制：[1, 1024] |
| index | Integer | 下标 | - |
| monitorUrl | String | 监控url | 长度限制：[0, 1024] |
| title | String | 通用标题 | 长度限制：[1, 1024]1个中文按2个字符计算，英文、数字按1个字符计算 |
| desc | String | 通用描述 | 长度限制：[1, 1024]1个中文按2个字符计算，英文、数字按1个字符计算 |
| pcLinkUrl | String | pc链接 | 长度限制：[0, 1024]当计划设备类型为PC时必填 |
| wirelessLinkUrl | String | 无线端链接 | 长度限制：[0, 1024]当计划设备类型为无线时必填 |
| wirelessLinkUrlBoxApp | String | 无线小程序链接 | 长度限制：[0, 1024] |
| wirelessLinkUrlDeepLink | String | 无线deeplink链接 | 长度限制：[0, 1024] |
| mtId | Integer | 样式ID | 如更新productCreatives，必填 |
| templateId | Long | 样式模板ID | 如更新productCreatives，必填。分行业的样式模板，同一个样式在不同的行业下有不同的模板 |
| enName | String | 样式英文名称 | - |
| data | Map | 创意物料 | 如更新productCreatives，必填。Key-value形式的物料数据，如： { "image": "${loc}", "title": "${name}" } 其中，image、title均为样式中的字段，来自TemplateField中的field字段；value数据来源于[获取指定商品目录的字段列表](https://dev2.baidu.com/content?sceneType=0&pageId=103118&nodeId=253&subhead=)。 注意：创意物料为一个整体... |
| huituCreative | DpaHuituCreative | 慧图字段 | - |
| groupId | long | 模板组ID | - |
| templateId | long | 模板ID | - |
| mtId | long | 样式ID | - |
| fields | HuituCreativeField[] | 慧图创意字段 | - |
| name | String | 名称 | - |
| value | String | 内容 | - |

<details>
<summary>请求示例</summary>

```json
{
	"dpaCreativeTypes": [{
		"userId": 123,
		"campaignId": 123,
		"adgroupId": 123,
		"basicCreative": {
			"title": "热门抢购商品",
			"desc": "热门产品",
			"pcLinkUrl": "example string",
			"wirelessLinkUrl": "https://aisite.wejianzhan.com/site/baidu.com",
			"wirelessLinkUrlBoxApp": "https://aisite.wejianzhan.com/site/baidu.com",
			"wirelessLinkUrlDeepLink": "https://aisite.wejianzhan.com/site/baidu.com"
		},
		"productCreatives": [{
			"creativeId": 123,
			"mtId": 11055,
			"templateId": 0,
			"status": "ENABLED",
			"enName": "PRODUCT_FEATURED_WIRELESS_BIG_IMAGE",
			"data": {
				"candidateDesc
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "userId" : 123,
    "campaignId" : 123,
    "adgroupId" : 123,
    "basicCreative" : {
      "title" : "热门抢购商品",
      "desc" : "热门产品",
      "pcLinkUrl" : "example string",
      "wirelessLinkUrl" : "https://aisite.wejianzhan.com/site/baidu.com",
      "wirelessLinkUrlBoxApp" : "https://aisite.wejianzhan.com/site/baidu.com",
      "wirelessLinkUrlDeepLink" : "https://aisite.wejianzhan.com/site/baidu.com"
    },
    "productCreatives" : [ {
      "creativeId" : 123,
      "mtId" : 11055,
      "templateId" : 0,
      "status" : "ENABLED",
      "enName" : "PRODUCT_FEATURED
```

</details>

---

### 更新创意组(普通)

**请求地址:** `https://api.baidu.com/json/sms/service/DpaCreativeService/updateCreativeGroup`

**方法说明:** 更新创意组

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupType 必填 | CreativeGroupType | 创意组对象 | - |
| creativeGroupId  必填 | long | 创意组ID | - |
| creativeGroupName | String | 创意组名称 | 长度限制：[1, 64]与历史创意组名称不重复，1个中文按2个字符计算，英文、数字按1个字符计算 |
| productSetId | long | 商品组ID | 获取商品组ID参照[商品组管理](https://dev2.baidu.com/content?sceneType=0&pageId=103153&nodeId=252&subhead=) |
| catalogId | long | 商品目录ID | 商品目录管理请登录[百度商品中心](https://product.baidu.com/bmc/home/) |
| pause | boolean | 是否暂停，新增后自动设置为暂停 | 取值范围：枚举值，列表如下true - 暂停false - 开启 |
| monitorUrl | String | 监控url | 长度限制：[0, 1024]监控代码必须以半角?或&开头。通用监控后缀会自动拼接至创意url后面，请确保推广url中的监控参数和通用监控后缀中并无重复 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupId | long | 创意组ID | - |

<details>
<summary>请求示例</summary>

```json
{
  "creativeGroupType" : {
    "creativeGroupName" : "联盟",
    "productSetId" : 123,
    "catalogId" : 123,
    "pause" : "true",
    "monitorUrl" : "?utm_campaign={planid}"
  }
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "creativeGroupId" : 123
  } ]
}
```

</details>

---

### 更新创意组物料

**请求地址:** `https://api.baidu.com/json/sms/service/DpaCreativeService/updateCreatives`

**方法说明:** 更新创意

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupId 必填 | long | 创意组ID | - |
| creativeTypes 必填 | CreativeType[] | 创意对象 | 集合长度限制：[1, 100] |
| creativeGroupId | long | 创意组ID | - |
| formatId | int | 样式ID | - |
| templateId | long | 模板ID | - |
| templateFields | String | 样式模板字段 | json形式的物料数据，如：{"image": "${loc}", "key_1": "${name}"}其中，image、key_1均为样式中的字段，来自样式模板，参考TemplateField |

<details>
<summary>请求示例</summary>

```json
{
  "creativeGroupId" : 123,
  "creativeTypes" : [ {
    "creativeGroupId" : 123,
    "formatId" : 11027,
    "templateId" : 938,
    "templateFields" : "{\"image\":\"${image}\",\"link_boxapp\":\"\",\"link\":\"${outerID}\",\"style_1\":\"\",\"link_deeplink\":\"\",\"value_2\":\"${attributes.investmentAmount}\",\"value_1\":\"${name}\",\"style_2\":\"\"}"
  } ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ { } ]
}
```

</details>

---

### 更新商品计划高级创意

**请求地址:** `https://api.baidu.com/json/sms/service/DpaApiCreativeService/updateDpaCreative`

**方法说明:** 为多个单元批量更新创意

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| dpaCreativeTypes 必填 | DpaCreativeType[] | 创意类型 | 集合长度限制：[1, 100] |
| userId  必填 | Long | 账户ID | - |
| campaignId  必填 | Long | 商品推广计划ID | - |
| adgroupId  必填 | Long | 商品推广单元ID | - |
| basicCreative | DpaBasicCreativeType | 通用基础创意 | 目前仅能填写一个 |
| productCreatives | DpaProductCreativeType[] | 商品创意 | - |
| showUrl | String | 创意通用展示URL | 长度限制：[1, 1024] |
| index | Integer | 下标 | - |
| monitorUrl | String | 监控url | 长度限制：[0, 1024] |
| title | String | 通用标题 | 长度限制：[1, 1024]1个中文按2个字符计算，英文、数字按1个字符计算 |
| desc | String | 通用描述 | 长度限制：[1, 1024]1个中文按2个字符计算，英文、数字按1个字符计算 |
| pcLinkUrl | String | pc链接 | 长度限制：[0, 1024]当计划设备类型为PC时必填 |
| wirelessLinkUrl | String | 无线端链接 | 长度限制：[0, 1024]当计划设备类型为无线时必填 |
| wirelessLinkUrlBoxApp | String | 无线小程序链接 | 长度限制：[0, 1024] |
| wirelessLinkUrlDeepLink | String | 无线deeplink链接 | 长度限制：[0, 1024] |
| creativeId | Long | 创意ID | 如更新productCreatives，必填 |
| mtId | Integer | 样式ID | 如更新productCreatives，必填 |
| templateId | Long | 样式模板ID | 如更新productCreatives，必填。分行业的样式模板，同一个样式在不同的行业下有不同的模板 |
| enName | String | 样式英文名称 | - |
| data | Map | 创意物料 | 如更新productCreatives，必填。Key-value形式的物料数据，如： { "image": "${loc}", "title": "${name}" } 其中，image、title均为样式中的字段，来自TemplateField中的field字段；value数据来源于[获取指定商品目录的字段列表](https://dev2.baidu.com/content?sceneType=0&pageId=103118&nodeId=253&subhead=)。 注意：创意物料为一个整体... |
| huituCreative | DpaHuituCreative | 慧图字段 | - |
| groupId | long | 模板组ID | - |
| templateId | long | 模板ID | - |
| mtId | long | 样式ID | - |
| fields | HuituCreativeField[] | 慧图创意字段 | - |
| name | String | 名称 | - |
| value | String | 内容 | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| userId | Long | 账户ID | - |
| campaignId | Long | 商品推广计划ID | - |
| adgroupId | Long | 商品推广单元ID | - |
| basicCreative | DpaBasicCreativeType | 通用基础创意 | 目前仅能填写一个 |
| productCreatives | DpaProductCreativeType[] | 商品创意 | - |
| showUrl | String | 创意通用展示URL | 长度限制：[1, 1024] |
| index | Integer | 下标 | - |
| monitorUrl | String | 监控url | 长度限制：[0, 1024] |
| title | String | 通用标题 | 长度限制：[1, 1024]1个中文按2个字符计算，英文、数字按1个字符计算 |
| desc | String | 通用描述 | 长度限制：[1, 1024]1个中文按2个字符计算，英文、数字按1个字符计算 |
| pcLinkUrl | String | pc链接 | 长度限制：[0, 1024]当计划设备类型为PC时必填 |
| wirelessLinkUrl | String | 无线端链接 | 长度限制：[0, 1024]当计划设备类型为无线时必填 |
| wirelessLinkUrlBoxApp | String | 无线小程序链接 | 长度限制：[0, 1024] |
| wirelessLinkUrlDeepLink | String | 无线deeplink链接 | 长度限制：[0, 1024] |
| creativeId | Long | 创意ID | 如更新productCreatives，必填 |
| mtId | Integer | 样式ID | 如更新productCreatives，必填 |
| templateId | Long | 样式模板ID | 如更新productCreatives，必填。分行业的样式模板，同一个样式在不同的行业下有不同的模板 |
| enName | String | 样式英文名称 | - |
| data | Map | 创意物料 | 如更新productCreatives，必填。Key-value形式的物料数据，如： { "image": "${loc}", "title": "${name}" } 其中，image、title均为样式中的字段，来自TemplateField中的field字段；value数据来源于[获取指定商品目录的字段列表](https://dev2.baidu.com/content?sceneType=0&pageId=103118&nodeId=253&subhead=)。 注意：创意物料为一个整体... |
| huituCreative | DpaHuituCreative | 慧图字段 | - |
| groupId | long | 模板组ID | - |
| templateId | long | 模板ID | - |
| mtId | long | 样式ID | - |
| fields | HuituCreativeField[] | 慧图创意字段 | - |
| name | String | 名称 | - |
| value | String | 内容 | - |

<details>
<summary>请求示例</summary>

```json
{
  "dpaCreativeTypes" : [ {
    "userId" : 123,
    "campaignId" : 123,
    "adgroupId" : 123,
    "basicCreative" : {
      "title" : "热门抢购商品",
      "desc" : "热门产品",
      "pcLinkUrl" : "example string",
      "wirelessLinkUrl" : "https://aisite.wejianzhan.com/site/baidu.com",
      "wirelessLinkUrlBoxApp" : "https://aisite.wejianzhan.com/site/baidu.com",
      "wirelessLinkUrlDeepLink" : "https://aisite.wejianzhan.com/site/baidu.com"
    },
    "productCreatives" : [ {
      "creativeId" : 123,
      "mtId" : 11055,
      "templateId" : 0,
      "status" : "ENABLED",
      "enName" : "PROD
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "userId" : 123,
    "campaignId" : 123,
    "adgroupId" : 123,
    "basicCreative" : {
      "title" : "热门抢购商品",
      "desc" : "热门产品",
      "pcLinkUrl" : "example string",
      "wirelessLinkUrl" : "https://aisite.wejianzhan.com/site/baidu.com",
      "wirelessLinkUrlBoxApp" : "https://aisite.wejianzhan.com/site/baidu.com",
      "wirelessLinkUrlDeepLink" : "https://aisite.wejianzhan.com/site/baidu.com"
    },
    "productCreatives" : [ {
      "creativeId" : 123,
      "mtId" : 11055,
      "templateId" : 0,
      "status" : "ENABLED",
      "enName" : "PRODUCT_FEATURED
```

</details>

---

### 更新组件

**请求地址:** `https://api.baidu.com/json/sms/service/AdvancedSegmentService/updateSegment`

**方法说明:** 更新组件（可批量）。目前创意组件用到的图片URL及视频封面URL，必须通过 [图片管理接口](https://dev2.baidu.com/content?sceneType=0&pageId=100704&nodeId=535&subhead=) 转为百度格式的图片链接才能投放使用。<br>视频组件用到的视频URL，可通过[视频管理接口](https://dev2.baidu.com/content?sceneType=0&pageId=100378&nodeId=48&subhead=)获取；视频精彩片段URL，可通过[视频工具](https://dev2.baidu.com/content?sceneType=0&pageId=100646&nodeId=506&subhead=)获取

**更新创意组件使用的物料不能与其他组件的物料重复（同一个账户不能存在两个相同物料的创意组件）*

<details>
<summary>请求示例</summary>

```json
{
    "items": [
        {
            "segmentId": "9081244",
            "segmentType":310,
            "auditContent": {
                "items": [
                    {
                        "picUrl": "http://fc5tn.baidu.com/it/u=4056513044,4075758722&fm=203",
                        "picText": "",
                        "rawPicUrl": "https://cms-image.cdn.bcebos.com/3236773302%2C3923718207.jpg",
                        "targetUrl": "",
                        "desc": ""
                    },
                    {
                        "picUrl": "http://fc1tn.baidu.com/it/u=312539112
```

</details>

<details>
<summary>返回示例</summary>

```json
{
    "items": [
        {
            "segmentId": "9081244",
            "segmentType":310,
            "auditContent": {
                "items": [
                    {
                        "picUrl": "http://fc5tn.baidu.com/it/u=4056513044,4075758722&fm=203",
                        "picText": "",
                        "rawPicUrl": "https://cms-image.cdn.bcebos.com/3236773302%2C3923718207.jpg",
                        "targetUrl": "",
                        "desc": ""
                    },
                    {
                        "picUrl": "http://fc1tn.baidu.com/it/u=312539112
```

</details>

---

### 更新组件绑定

**请求地址:** `https://api.baidu.com/json/sms/service/AdvancedSegmentBindService/updateSegmentBind`

**方法说明:** 更新物料绑定状态（可批量），仅支持绑定关系状态修改，物料绑定关系修改请先删除后添加

<details>
<summary>请求示例</summary>

```json
{
    "items": [{
       "bindId": 123123,
       "pause": true
    }]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
    "SegmentBindType": [{
       "bindId": 123123,
       "pause": true
    }]
}
```

</details>

---

### 查询APP绑定

**请求地址:** `https://api.baidu.com/json/sms/service/AdgroupAppService/getAdgroupAppBind`

**方法说明:** 根据查询或筛选条件获取app绑定关系详情

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| idType 必填 | Integer | 查询id的层级 | 取值范围：枚举值，列表如下2 - 用户层级3 - 计划层级5 - 单元层级8 - BIND层级 |
| ids 必填 | Long[] | id列表 | - |
| name | String | app名称 | - |
| platform | Integer[] | app操作系统 | 取值范围：枚举值，列表如下1 - 安卓3 - iOS 5 - 鸿蒙 |
| status | Integer[] | 状态 | 第一位表示暂停位（0启动，1暂停）；第二位表示APP有效位（0有效，1无效）；第三位表示审核中（0非审核中，1审核中） |
| orderBy | String | 排序字段, 默认修改时间排序，支持platform,status | 取值范围：枚举值，列表如下platformstatus |
| desc | Boolean | 是否降序 | - |
| limit | Integer[] | 分页信息，第一个参数偏移量，第二个参数是页面大小 | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| campaignId | Long | 推广计划id | - |
| adgroupId | Long | 推广单元id | - |
| name | String | app名称 | - |
| version | String | app版本 | - |
| platform | Integer | app操作系统 | 取值范围：枚举值，列表如下1 - 安卓3 - iOS 5 - 鸿蒙 |
| cbindId | Long | 绑定关系id | - |
| channelPackage | String | app渠道包名称 | - |
| status | Integer | 状态 | 第一位表示暂停位（0启动，1暂停）；第二位表示APP有效位（0有效，1无效）；第三位表示审核中（0非审核中，1审核中） |
| appSource | Integer | app来源 | 取值范围：枚举值，列表如下0 - 百度移动应用平台1 - 极速下载2 - 投放平台3 - 百度移动应用平台 |
| channelId | Long | Android包唯一标识 | - |
| appStoreId | Long | IOS包唯一标识 | - |
| packageName | String | app包名 | - |

<details>
<summary>请求示例</summary>

```json
{
  "idType" : 5,
  "ids" : [ "[1]" ],
  "name" : "手机百度",
  "platform" : [ 1 ],
  "status" : [ 0 ],
  "orderBy" : "$VALUES",
  "desc" : false,
  "limit" : [ "[0,1000]" ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "campaignId" : 1,
    "adgroupId" : 1,
    "name" : "1",
    "version" : "1",
    "platform" : 1,
    "cbindId" : 1,
    "channelPackage" : "渠道包名称",
    "status" : 0,
    "appSource" : 0,
    "channelId" : 100000000,
    "appStoreId" : 1000000,
    "packageName" : "com.baidu.xxx"
  } ]
}
```

</details>

---

### 查询创意组(普通)

**请求地址:** `https://api.baidu.com/json/sms/service/DpaCreativeService/getCreativeGroup`

**方法说明:** 根据创意组ID查询创意组

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupId 必填 | Long[] | 创意组ids | 集合长度限制：[1, 100] |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupId | long | 创意组ID | - |
| creativeGroupName | String | 创意组名称 | 长度限制：[1, 64]与历史创意组名称不重复，1个中文按2个字符计算，英文、数字按1个字符计算 |
| productSetId | long | 商品组ID | 获取商品组ID参照[商品组管理](https://dev2.baidu.com/content?sceneType=0&pageId=103153&nodeId=252&subhead=) |
| catalogId | long | 商品目录ID | 商品目录管理请登录[百度商品中心](https://product.baidu.com/bmc/home/) |
| rangeItems | RangeItem[] | 绑定关系 | - |
| formatIds | Long[] | 创意ID | - |
| pause | boolean | 是否暂停，新增后自动设置为暂停 | 取值范围：枚举值，列表如下true - 暂停false - 开启 |
| monitorUrl | String | 监控url | 长度限制：[0, 1024]监控代码必须以半角?或&开头。通用监控后缀会自动拼接至创意url后面，请确保推广url中的监控参数和通用监控后缀中并无重复 |
| campaignId | long | 推广计划ID | 绑定到账户时，计划ID为0 |
| adgroupId | long | 推广单元ID | 绑定到账户或计划时，单元ID为0 |
| userId | long | 账户ID | - |

<details>
<summary>请求示例</summary>

```json
{
  "creativeGroupId" : [ 123 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "creativeGroupName" : "联盟",
    "productSetId" : 123,
    "catalogId" : 123,
    "rangeItems" : [ {
      "campaignId" : 123,
      "adgroupId" : 0,
      "userId" : 123
    } ],
    "formatIds" : [ 11027 ],
    "pause" : "true",
    "monitorUrl" : "?utm_campaign={planid}"
  } ]
}
```

</details>

---

### 查询创意组物料

**请求地址:** `https://api.baidu.com/json/sms/service/DpaCreativeService/getCreatives`

**方法说明:** 获取创意列表

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupId | long | 创意组ID | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupId | long | 创意组ID | - |
| formatId | int | 样式ID | - |
| templateId | long | 模板ID | - |
| templateFields | String | 样式模板字段 | json形式的物料数据，如：{"image": "${loc}", "key_1": "${name}"}其中，image、key_1均为样式中的字段，来自样式模板，参考TemplateField |

<details>
<summary>请求示例</summary>

```json
{
  "creativeGroupId" : 123
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "creativeGroupId" : 123,
    "formatId" : 11027,
    "templateId" : 938,
    "templateFields" : "{\"image\":\"${image}\",\"link_boxapp\":\"\",\"link\":\"${outerID}\",\"style_1\":\"\",\"link_deeplink\":\"\",\"value_2\":\"${attributes.investmentAmount}\",\"value_1\":\"${name}\",\"style_2\":\"\"}"
  } ]
}
```

</details>

---

### 查询咨询方案

**请求地址:** `https://api.baidu.com/json/sms/service/SolutionProviderService/getNewConsult`

**方法说明:** 查询客户在营销通中的所有咨询方案

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| limit | Integer[] | 分页limit，非必填，默认[0,10000] | - |
| consumerId | Integer | 使用方Id，必填 | 搜索API使用19002 |
| fieldFilters | FilterBy[] | 字段筛选，非必填 | 目前只支持筛选咨询方案ID |
| field | String | 筛选字段名 | 筛选咨询方案类型时传solutionId |
| op | String | 操作符 | 固定为in |
| values | String[] | 筛选目标值 | 当field=solutionId时，value可传需要查询的咨询方案ID |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| listData | NewConsultListProviderRes[] | 返回的咨询方案数据 | - |
| totalCount | Long | 总个数 | - |
| solutionId | Long | 咨询方案ID | - |
| solutionType | String | 方案类型 | 固定为consult |
| solutionName | String | 咨询方案名称 |  |
| ImlpUrl | String | 咨询页面url |  |
| ImTool | IMToolType | 使用的咨询工具信息 |  |
| salutatory | String | 欢迎语 |  |
| id | Long | 已授权咨询工具主键ID | - |
| siteId | String | 方案类型 | 固定为consult |
| solutionName | Long | 咨询工具一级接待组ID |  |
| siteName | String | 咨询工具一级接待组名称 |  |
| groupId | Long | 咨询工具二级接待组ID |  |
| groupName | String | 咨询工具二级接待组名称 |  |

<details>
<summary>请求示例</summary>

```json
{
	"limit": [0, 20],
	"consumerId": 19002,
	"fieldFilters": [{
		"field": "solutionId",
		"op": "in",
		"values": ["123", "223"]
	}]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
    "status": 0, // 0全部成功 1部分成功 2失败 3服务异常
    "errors": [],
    "data": {
        "totalCount": 12,
        "listData":[{
            "solutionId": 121, // 咨询方案id
            "solutionType": "consult", // 咨询方案类型
            "solutionName": "AAA的咨询页", // 咨询方案名称
            "imlpUrl": "http://ada.baidu.com...", // 咨询链接
            "imTool": {
                "id": 12, // 使用的已授权咨询工具Id
                "imType":1, // 咨询工具类型(需要对应的枚举单独提供)
                "siteId": 12, // 一级接待组id
                "siteName": "接待方案1", // 一级接待组名称
                "groupId": 123, // 二级接待组id
                "groupName": "
```

</details>

---

### 查询商品计划高级创意

**请求地址:** `https://api.baidu.com/json/sms/service/DpaApiCreativeService/getDpaCreative`

**方法说明:** 根据商品单元ID查询创意列表

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| ids | Long[] | 商品单元ID | 集合长度限制：[0, 100] |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| userId | Long | 账户ID | - |
| campaignId | Long | 商品推广计划ID | - |
| adgroupId | Long | 商品推广单元ID | - |
| basicCreative | DpaBasicCreativeType | 通用基础创意 | 目前仅能填写一个 |
| productCreatives | DpaProductCreativeType[] | 商品创意 | - |
| showUrl | String | 创意通用展示URL | 长度限制：[1, 1024] |
| monitorUrl | String | 监控url | 长度限制：[0, 1024] |
| title | String | 通用标题 | 长度限制：[1, 1024]1个中文按2个字符计算，英文、数字按1个字符计算 |
| desc | String | 通用描述 | 长度限制：[1, 1024]1个中文按2个字符计算，英文、数字按1个字符计算 |
| pcLinkUrl | String | pc链接 | 长度限制：[0, 1024]当计划设备类型为PC时必填 |
| wirelessLinkUrl | String | 无线端链接 | 长度限制：[0, 1024]当计划设备类型为无线时必填 |
| wirelessLinkUrlBoxApp | String | 无线小程序链接 | 长度限制：[0, 1024] |
| wirelessLinkUrlDeepLink | String | 无线deeplink链接 | 长度限制：[0, 1024] |
| creativeId | Long | 创意ID | 如更新productCreatives，必填 |
| mtId | Integer | 样式ID | 如更新productCreatives，必填 |
| templateId | Long | 样式模板ID | 如更新productCreatives，必填。分行业的样式模板，同一个样式在不同的行业下有不同的模板 |
| status | String | 创意状态 | 取值范围：枚举值，列表如下ENABLED - 生效DISABLED - 搁置DELETED - 删除EDIT - 编辑 |
| enName | String | 样式英文名称 | - |
| data | Map | 创意物料 | 如更新productCreatives，必填。Key-value形式的物料数据，如： { "image": "${loc}", "title": "${name}" } 其中，image、title均为样式中的字段，来自TemplateField中的field字段；value数据来源于[获取指定商品目录的字段列表](https://dev2.baidu.com/content?sceneType=0&pageId=103118&nodeId=253&subhead=)。 注意：创意物料为一个整体... |
| huituCreative | DpaHuituCreative | 慧图字段 | - |
| groupId | long | 模板组ID | - |
| schemaId | long | 行业ID | - |
| templateId | long | 模板ID | - |
| mtId | long | 样式ID | - |
| version | int | 模板版本 | - |
| fields | HuituCreativeField[] | 慧图创意字段 | - |
| status | String | 状态 | 取值范围：枚举值，列表如下ENABLED - 生效DISABLED - 搁置DELETED - 删除EDIT - 编辑 |
| name | String | 名称 | - |
| value | String | 内容 | - |
| color | String | 颜色 | - |

<details>
<summary>请求示例</summary>

```json
{
  "ids" : [ 123 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "userId" : 123,
    "campaignId" : 123,
    "adgroupId" : 123,
    "basicCreative" : {
      "title" : "热门抢购商品",
      "desc" : "热门产品",
      "pcLinkUrl" : "example string",
      "wirelessLinkUrl" : "https://aisite.wejianzhan.com/site/baidu.com",
      "wirelessLinkUrlBoxApp" : "https://aisite.wejianzhan.com/site/baidu.com",
      "wirelessLinkUrlDeepLink" : "https://aisite.wejianzhan.com/site/baidu.com"
    },
    "productCreatives" : [ {
      "creativeId" : 123,
      "mtId" : 11055,
      "templateId" : 0,
      "status" : "ENABLED",
      "enName" : "PRODUCT_FEATURED
```

</details>

---

### 查询电话方案

**请求地址:** `https://api.baidu.com/json/sms/service/SolutionProviderService/getPhone`

**方法说明:** 查询客户在营销通中的所有有效的电话方案，门店电话类型只有在本地业务中才能查到

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| limit | Integer[] | 分页limit，非必填，默认[0,10000] | - |
| consumerId | Integer | 使用方Id，必填 | 搜索API使用19002本地业务使用：16001，30001 |
| fieldFilters | FilterBy[] | 字段筛选，非必填 | 目前只支持筛选电话类型、电话方案ID |
| field | String | 筛选字段名 | 筛选电话类型时传phoneSolutionType，筛选电话方案类型时传solutionId |
| op | String | 操作符 | 固定为in |
| values | String[] | 筛选目标值 | 当field=phoneSolutionType时，value可传0或1，0表示智能电话，1表示普通电话当field=solutionId时，value可传需要查询的电话方案ID |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| listData | PhoneListProviderRes[] | 返回的电话方案数据 | - |
| totalCount | Long | 总个数 | - |
| useridInBase64 | String | 客户ucId的凤巢base64加密值 | - |
| solutionId | Long | 电话方案ID | - |
| solutionType | String | 方案类型 | 固定为phone |
| phoneSolutionType | String | 电话方案类型 | 0表示智能方案1表示普通方案 |
| solutionName | String | 电话方案名称 |  |
| realPhoneNum | String | 客户创建电话方案时设置的真实号码 | 例如 010236584 |
| realPhoneType | Integer | 真实号码类型 | 0表示400类型1表示手机号类型2表示固话类型3表示其他类型 |

<details>
<summary>请求示例</summary>

```json
{
     "header": {
        "token": "2b79376b02ab0ac7a1cd895da07f46b4", //线下token
        "userid": "630152" 
     },
     "body": {
            "limit": [0, 20],
            "consumerId": 19002,
            "fieldFilters": [{
                "field": "phoneSolutionType",
                "op": "in",
                "values": ["0", "1"]
            }, {
                "field": "solutionId",
                "op": "in",
                "values": ["123", "223"]
            }]
     }
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
    "header": {
        "desc": "success",
        "failures": [],
        "oprs": 1,
        "succ": 1,
        "status": 0,
        "oprtime": 0
    },
    "body": {
        "data": {
            "totalCount": 2,
            "listData": [{
                "useridInBase64": "PWnsnHRz",
                "solutionId": 123,
                "solutionType": "phone",
                "phoneSolutionType": "0",       
                "solutionName": "第2个电话",     
                "realPhoneNum": "03774215563",  
                "realPhoneType":2               
            },{
                "useridIn
```

</details>

---

### 查询组件

**请求地址:** `https://api.baidu.com/json/sms/service/AdvancedSegmentService/getSegment`

**方法说明:** 根据指定的查询层级，获取组件物料列表

<details>
<summary>请求示例</summary>

```json
{
    "ids": [
        21520075699
    ],
    "idType": 24
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
    "data": [
        {
            "totalCount": 1,
            "fields": [
                {
                    "segmentId": 21520075699,
                    "source": 3,
                    "segmentType": 321,
                    "auditContent": {
                        "picUrl": "http://fc2tn.baidu.com/it/u=485774527,1235893317&fm=202",
                        "imageId": "2557440761",
                        "rawPicUrl": "https://fc-ccimage.baidu.com/0/pic/4eda686ab3987fe34643f9ecfcdc26a7.png",
                        "desc": "java培训"
                    },
                    "pause":
```

</details>

---

### 查询组件绑定

**请求地址:** `https://api.baidu.com/json/sms/service/AdvancedSegmentBindService/getSegmentBind`

**方法说明:** 根据指定的层级，获取物料绑定信息

<details>
<summary>请求示例</summary>

```json
{
    "ids": [
        144921185
    ],
    "idType": 3,
    "segmentTypes": [
        320
    ],
    "limit": [
        0,
        100
    ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
    "data": [
        {
            "fields": [
                {
                    "bindId": 14033856524,
                    "adgroupId": 5429148313,
                    "segmentType": 320,
                    "bindSource": 0,
                    "isDelete": false,
                    "segmentId": 21520208704,
                    "campaignId": 144921185,
                    "campaignName": "谢谢",
                    "adgroupName": "对着v地址",
                    "id": 14033856524
                }
            ]
        }
    ]
}
```

</details>

---

### 查询营销类组件方案

**请求地址:** `https://api.baidu.com/json/sms/service/LeadAdsService/getStrategies`

**方法说明:** 查询推广方案

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| userId | Long | 用户ID | - |
| fieldFilters | RowFilter[] | 过滤属性 | 必填 |
| isDesc | Boolean | 是否倒排 | true倒排,false正排; |
| sortField | String | 排序字段 | 取值范围：枚举值，列表如下status - 状态 |
| limit | Integer[] | 分页字段 | 数组长度必须为2，传入两个数字[m,n]时，表示从m+1条开始取，共取n条记录；一次最多只能获取100条数据 |
| field | String | 筛选字段 | 取值范围：枚举值，列表如下materialType - 物料类型status - 状态targetType - 绑定类型查询时：materialType必填 |
| op | String | 比较符号 | 取值范围：枚举值，列表如下in - 包含 |
| values | String[] | 数据 | field=materialType，填写物料类型，咨询方案：2111；咨询链接：2108；智能/普通电话：2001 field=status，填写status的值，有效：1；暂停推广：2；审核中/未审核：3；审核不通过：4 field= targetType,填写投放范围的值，绑定账户：0，绑定计划：1 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| strategyId | Long | 推广方案ID | - |
| userId | Long | 账户ID | - |
| materialId | Long | 物料ID | - |
| materialContent | String | 物料内容 | 物料内容为json格式的字符串，内容如下：materialType = 2001表示电话，示例："{\"phoneType\":3,\"solutionId\":17190983} "materialType = 2111表示咨询方案，示例："{\"solutionId\":24648564448}" materialType = 2108表示咨询链接, 示例："{\"url\":\"http://sggg.baidu.com/site/hehehe\"}" |
| materialType | Long | 物料类型 | 取值范围：枚举值，列表如下2001 - 营销-电话2111 - 营销-咨询方案2108 - 营销-咨询链接 |
| isPause | Integer | 起停状态 | 取值范围：枚举值，列表如下0 - 启用1 - 暂停 |
| status | Integer | 推广方案状态 | 取值范围：枚举值，列表如下1 - 有效2 - 暂停推广3 - 审核中/未审核4 - 审核不通过 |
| material | MaterialType | 物料数据 | - |
| binds | BindType[] | 绑定数据 | - |
| addTime | Date | 推广方案添加时间 | - |
| modTime | Date | 推广方案修改时间 | - |
| materialId | Long | 物料id | 修改时必填 |
| userId | Long | 账号id | - |
| materialName | String | 物料名称 | - |
| materialType | Long | 物料类型 | 取值范围：枚举值，列表如下2001 - 营销-电话2111 - 营销-咨询方案2108 - 营销-咨询链接 |
| auditContent | String | 待审核物料内容 | - |
| materialContent | String | 审核通过物料内容 | - |
| auditStatus | Integer | 审核状态 | 取值范围：枚举值，列表如下1 - 有效2 - 暂停推广3 - 审核中/未审核4 - 审核不通过 |
| reasons | String | 下线理由 | - |
| wholeReason | String | 风控返回的拒绝理由，json格式 | - |
| phoneType | Integer | 电话组件类型 | 使用电话组件返回电话组件类型：3表示智能电话，4表示普通电话 |
| bindId | Long | 绑定ID | - |
| userId | Long | 账户ID | - |
| strategyId | Long | 推广方案ID | - |
| materialType | Long | 绑定物料的物料类型 | 取值范围：枚举值，列表如下2001 - 营销-电话2111 - 营销-咨询方案2108 - 营销-咨询链接 |
| materialId | Long | 绑定物料的物料ID | - |
| targetType | Integer | 绑定层级 | 取值范围：枚举值，列表如下0 - 绑定类型-账户1 - 绑定类型-计划 |
| targetId | Long | 绑定层级的ID | 数据来源： |
| isPause | Integer | 起停状态 | 取值范围：枚举值，列表如下0 - 启用1 - 暂停 |
| campaignId | Long | 计划ID | - |
| delete | Boolean | 计划是否删除，只读 | 取值范围：枚举值，列表如下true - 删除false - 未删除 |

<details>
<summary>请求示例</summary>

```json
{
  "fieldFilters" : [ {
    "field" : "materialType",
    "op" : "in",
    "values" : [ "example string" ]
  } ],
  "ids" : [ 1 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "strategyId" : 3283393474,
    "userId" : 632121,
    "materialId" : 328339347,
    "materialContent" : "example string",
    "materialType" : 2001,
    "status" : 1,
    "material" : {
      "materialId" : 3311907533,
      "userId" : 632112,
      "materialName" : "xh---test-复制",
      "materialType" : 2001,
      "auditContent" : "\"{\\\"advicetype\\\":0,\\\"groupid\\\":0,\\\"imlpUrl\\\":\\\"https://aderer.baidu.com\\\",\\\"imname\\\":\\\"测试用\\\",\\\"siteid\\\":0,\\\"solutionId\\\":1335338}\"",
      "materialContent" : "\"{\\\"advicetype\\\":0,\\\"groupid\\\":0,\\\"iml
```

</details>

---

### 查询营销类组件物料

**请求地址:** `https://api.baidu.com/json/sms/service/LeadAdsService/getMaterials`

**方法说明:** 查询物料

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| fieldFilters | RowFilter[] | 过滤属性 | 必填 |
| field | String | 筛选字段 | 取值范围：枚举值，列表如下materialType - 物料类型status - 状态targetType - 绑定类型查询时：materialType必填 |
| op | String | 比较符号 | 取值范围：枚举值，列表如下in - 包含 |
| values | String[] | 数据 | field=materialType，填写物料类型，咨询方案：2111；咨询链接：2108；智能/普通电话：2001 field=status，填写status的值，有效：1；暂停推广：2；审核中/未审核：3；审核不通过：4 field= targetType,填写投放范围的值，绑定账户：0，绑定计划：1 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| materialId | Long | 物料id | 修改时必填 |
| userId | Long | 账号id | - |
| materialName | String | 物料名称 | - |
| materialType | Long | 物料类型 | 取值范围：枚举值，列表如下2001 - 营销-电话2111 - 营销-咨询方案2108 - 营销-咨询链接 |
| auditContent | String | 待审核物料内容 | - |
| materialContent | String | 审核通过物料内容 | - |
| auditStatus | Integer | 审核状态 | 取值范围：枚举值，列表如下1 - 有效2 - 暂停推广3 - 审核中/未审核4 - 审核不通过 |
| reasons | String | 下线理由 | - |
| wholeReason | String | 风控返回的拒绝理由，json格式 | - |
| phoneType | Integer | 电话组件类型 | 使用电话组件返回电话组件类型：3表示智能电话，4表示普通电话 |

<details>
<summary>请求示例</summary>

```json
{
  "fieldFilters" : [ {
    "field" : "materialType",
    "op" : "in",
    "values" : [ "example string" ]
  } ],
  "ids" : [ 1 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "materialId" : 3311907533,
    "userId" : 632112,
    "materialName" : "xh---test-复制",
    "materialType" : 2001,
    "auditContent" : "\"{\\\"advicetype\\\":0,\\\"groupid\\\":0,\\\"imlpUrl\\\":\\\"https://aderer.baidu.com\\\",\\\"imname\\\":\\\"测试用\\\",\\\"siteid\\\":0,\\\"solutionId\\\":1335338}\"",
    "materialContent" : "\"{\\\"advicetype\\\":0,\\\"groupid\\\":0,\\\"imlpUrl\\\":\\\"https://aderer.baidu.com\\\",\\\"imname\\\":\\\"测试用\\\",\\\"siteid\\\":0,\\\"solutionId\\\":1335338}\"",
    "auditStatus" : 1,
    "reasons" : "[{\\\"id\\\":12041,\\\"text\\\":\\\"受行业投放限制，
```

</details>

---

### 添加APP绑定

**请求地址:** `https://api.baidu.com/json/sms/service/AdgroupAppService/addAdgroupAppBind`

**方法说明:** 新增（更新）单元与APP的绑定，如果单元已有绑定同类型APP，会自动更新，如单元1已经绑定Andrord应用a1，此时再绑定Android应用a2,自动将单元1更换绑定到a2. 目前仅允许为推广APP营销目标计划下的单元添加APP绑定，且绑定的APP必须来自急速下载（https://wutong.baidu.com ） 或者百度移动开放平台（http://app.baidu.com ）

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| addBinds 必填 | AppBindAddItem[] | 新增APP绑定对象数组 | 单次请求不超过2000个 |
| channelId | Long | Android包唯一标识 | channelId 和 appStoreId 必选一个 |
| appStoreId | Long | IOS包唯一标识 | channelId 和 appStoreId 必选一个 |
| platform  必填 | Integer | app操作系统 | 取值范围：枚举值，列表如下1 - 安卓3 - iOS 5 - 鸿蒙 |
| adgroupId  必填 | Long | 推广单元id | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| campaignId | Long | 推广计划id | - |
| adgroupId | Long | 推广单元id | - |
| name | String | app名称 | - |
| version | String | app版本 | - |
| platform | Integer | app操作系统 | 取值范围：枚举值，列表如下1 - 安卓3 - iOS 5 - 鸿蒙 |
| cbindId | Long | 绑定关系id | - |
| channelPackage | String | app渠道包名称 | - |
| status | Integer | 状态 | 第一位表示暂停位（0启动，1暂停）；第二位表示APP有效位（0有效，1无效）；第三位表示审核中（0非审核中，1审核中） |
| appSource | Integer | app来源 | 取值范围：枚举值，列表如下0 - 百度移动应用平台1 - 极速下载2 - 投放平台3 - 百度移动应用平台 |
| channelId | Long | Android包唯一标识 | - |
| appStoreId | Long | IOS包唯一标识 | - |
| packageName | String | app包名 | - |

<details>
<summary>请求示例</summary>

```json
{
  "addBinds" : [  {
    "channelId" : 100000000,
    "appStoreId" : 100000000,
    "platform" : 1,
    "adgroupId" : 1000000
  } ] 
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "campaignId" : 1,
    "adgroupId" : 1,
    "name" : "1",
    "version" : "1",
    "platform" : 1,
    "cbindId" : 1,
    "channelPackage" : "渠道包名称",
    "status" : 0,
    "appSource" : 0,
    "channelId" : 100000000,
    "appStoreId" : 1000000,
    "packageName" : "com.baidu.xxx"
  } ]
}
```

</details>

---

### 添加创意组(普通)

**请求地址:** `https://api.baidu.com/json/sms/service/DpaCreativeService/addCreativeGroup`

**方法说明:** 新增创意组，每个账户下最多支持1000个创意组

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupType 必填 | CreativeGroupType | 创意组对象 | - |
| creativeGroupName  必填 | String | 创意组名称 | 长度限制：[1, 64]与历史创意组名称不重复，1个中文按2个字符计算，英文、数字按1个字符计算 |
| productSetId | long | 商品组ID | 获取商品组ID参照[商品组管理](https://dev2.baidu.com/content?sceneType=0&pageId=103153&nodeId=252&subhead=) |
| catalogId  必填 | long | 商品目录ID | 商品目录管理请登录[百度商品中心](https://product.baidu.com/bmc/home/) |
| pause | boolean | 是否暂停，新增后自动设置为暂停 | 取值范围：枚举值，列表如下true - 暂停false - 开启 |
| monitorUrl | String | 监控url | 长度限制：[0, 1024]监控代码必须以半角?或&开头。通用监控后缀会自动拼接至创意url后面，请确保推广url中的监控参数和通用监控后缀中并无重复 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupId | long | 创意组ID | - |

<details>
<summary>请求示例</summary>

```json
{
  "creativeGroupType" : {
    "creativeGroupName" : "联盟",
    "productSetId" : 123,
    "catalogId" : 123,
    "pause" : "true",
    "monitorUrl" : "?utm_campaign={planid}"
  }
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "creativeGroupId" : 123
  } ]
}
```

</details>

---

### 添加组件

**请求地址:** `https://api.baidu.com/json/sms/service/AdvancedSegmentService/addSegment`

**方法说明:** 新增组件（可批量）,目前创意组件用到的图片URL及视频封面URL，必须通过 [图片上传接口](https://dev2.baidu.com/content?sceneType=0&pageId=102037&nodeId=522&subhead=)转为百度格式的图片链接才能投放使用。<br>视频组件用到的视频URL，可通过[视频管理接口](https://dev2.baidu.com/content?sceneType=0&pageId=100378&nodeId=48&subhead=)获取；视频精彩片段URL，可通过[视频工具](https://dev2.baidu.com/content?sceneType=0&pageId=100646&nodeId=506&subhead=)获取

<details>
<summary>请求示例</summary>

```json
{
    "items": [
        {
            "source": 3,
            "segmentType": 310,
            "auditContent": {
                "items": [
                    {
                        "picUrl": "http://fc5tn.baidu.com/it/u=4056513044,4075758722&fm=203",
                        "picText": "",
                        "rawPicUrl": "https://cms-image.cdn.bcebos.com/3236773302%2C3923718207.jpg",
                        "targetUrl": "",
                        "desc": ""
                    },
                    {
                        "picUrl": "http://fc1tn.baidu.com/it/u=3125391129,35390174
```

</details>

<details>
<summary>返回示例</summary>

```json
{
    "data": [
        {
            "segmentId": 21472972978,
            "source": 3,
            "segmentType": 310,
            "auditContent": {
                "addfrom": 0,
                "items": [
                    {
                        "picUrl": "https://fc5tn.baidu.com/it/u=4056513044,4075758722&fm=203",
                        "imageId": 2552385914,
                        "picText": "",
                        "rawPicUrl": "https://cms-image.cdn.bcebos.com/3236773302%2C3923718207.jpg",
                        "targetUrl": "",
                        "desc": ""
            
```

</details>

---

### 添加组件绑定

**请求地址:** `https://api.baidu.com/json/sms/service/AdvancedSegmentBindService/addSegmentBind`

**方法说明:** 新增绑定关系（可批量）<br>注1：该接口仅适用于绑定到单元层级。<br>注2：绑定到账户层级时，不需要调用此接口。仅需要在新增组件（addSegment）时指定source为3即可。<br>注3：品牌信息组件仅支持绑定到单元层级，不支持绑定到账户层级。

<details>
<summary>请求示例</summary>

```json
{
    "items": [
        {
            "bindSource": 0,
            "bindLevel": 1,
            "segmentType": 320,
            "segmentId": 21520208704,
            "adgroupId": 5423274748
        }
    ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
    "data": [
        {
            "bindId": 14034616684,
            "userId": 630152,
            "adgroupId": 5423274748,
            "segmentType": 320,
            "bindSource": 0,
            "isDelete": false,
            "bindSource": 0,
            "segmentId": 21520208704,
            "campaignId": 144709128,
            "pause": false,
            "campaignName": "0206",
            "adgroupName": "0206测试",
            "status": 63,
            "id": 14034616684
        }
    ]
}
```

</details>

---

### 添加营销类组件方案

**请求地址:** `https://api.baidu.com/json/sms/service/LeadAdsService/addStrategies`

**方法说明:** 添加营销类组件方案

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| items | MaterialType[] | 参数体 | 列表长度不超过10 |
| materialContent | String | 物料内容 | 物料内容为json格式的字符串，内容如下：materialType = 2001表示电话，示例：{\"phoneType\":3,\"solutionId\":17190983} materialType = 2111表示咨询方案，示例："{\"solutionId\":2464853338}" materialType = 2108表示咨询链接, 示例："{\"url\":\"http://saidu.com/site/hehehe\"}" |
| materialType | Long | 物料类型 | 取值范围：枚举值，列表如下2001 - 营销-电话2111 - 营销-咨询方案2108 - 营销-咨询链接 |
| binds | BindType[] | 绑定数据 | - |
| targetType | Integer | 绑定层级，计划或账户 | 取值范围：枚举值，列表如下0 - 绑定类型-账户1 - 绑定类型-计划 |
| targetId | Long | 绑定层级的ID，计划ID或账户ID | 数据来源：https://dev2.baidu.com/content?sceneType=0&pageId=100260&nodeId=198&subhead= |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| strategyId | Long | 推广方案ID | - |
| userId | Long | 账户ID | - |
| materialId | Long | 物料ID | - |
| materialContent | String | 物料内容 | 物料内容为json格式的字符串，内容如下：materialType = 2001表示电话，示例："{\"phoneType\":3,\"solutionId\":17190983} "materialType = 2111表示咨询方案，示例："{\"solutionId\":24648564448}" materialType = 2108表示咨询链接, 示例："{\"url\":\"http://sggg.baidu.com/site/hehehe\"}" |
| materialType | Long | 物料类型 | 取值范围：枚举值，列表如下2001 - 营销-电话2111 - 营销-咨询方案2108 - 营销-咨询链接 |
| status | Integer | 推广方案状态 | 取值范围：枚举值，列表如下1 - 有效2 - 暂停推广3 - 审核中/未审核4 - 审核不通过 |
| material | MaterialType | 物料数据 | - |
| binds | BindType[] | 绑定数据 | - |
| addTime | Date | 推广方案添加时间 | - |
| modTime | Date | 推广方案修改时间 | - |
| materialId | Long | 物料id | 修改时必填 |
| userId | Long | 账号id | - |
| materialName | String | 物料名称 | - |
| materialType | Long | 物料类型 | 取值范围：枚举值，列表如下2001 - 营销-电话2111 - 营销-咨询方案2108 - 营销-咨询链接 |
| auditContent | String | 待审核物料内容 | - |
| materialContent | String | 审核通过物料内容 | - |
| auditStatus | Integer | 审核状态 | 取值范围：枚举值，列表如下1 - 有效2 - 暂停推广3 - 审核中/未审核4 - 审核不通过 |
| reasons | String | 下线理由 | - |
| wholeReason | String | 风控返回的拒绝理由，json格式 | - |
| phoneType | Integer | 电话组件类型 | 使用电话组件返回电话组件类型：3表示智能电话，4表示普通电话 |
| bindId | Long | 绑定ID | - |
| userId | Long | 账户ID | - |
| strategyId | Long | 推广方案ID | - |
| materialType | Long | 绑定物料的物料类型 | 取值范围：枚举值，列表如下2001 - 营销-电话2111 - 营销-咨询方案2108 - 营销-咨询链接 |
| materialId | Long | 绑定物料的物料ID | - |
| targetType | Integer | 绑定层级 | 取值范围：枚举值，列表如下0 - 绑定类型-账户1 - 绑定类型-计划 |
| targetId | Long | 绑定层级的ID | 数据来源： |
| isPause | Integer | 起停状态 | 取值范围：枚举值，列表如下0 - 启用1 - 暂停 |
| campaignId | Long | 计划ID | - |
| delete | Boolean | 计划是否删除，只读 | 取值范围：枚举值，列表如下true - 删除false - 未删除 |

<details>
<summary>请求示例</summary>

```json
{
  "items" : [ { } ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "strategyId" : 3283393474,
    "userId" : 632121,
    "materialId" : 328339347,
    "materialContent" : "example string",
    "materialType" : 2001,
    "status" : 1,
    "material" : {
      "materialId" : 3311907533,
      "userId" : 632112,
      "materialName" : "xh---test-复制",
      "materialType" : 2001,
      "auditContent" : "\"{\\\"advicetype\\\":0,\\\"groupid\\\":0,\\\"imlpUrl\\\":\\\"https://aderer.baidu.com\\\",\\\"imname\\\":\\\"测试用\\\",\\\"siteid\\\":0,\\\"solutionId\\\":1335338}\"",
      "materialContent" : "\"{\\\"advicetype\\\":0,\\\"groupid\\\":0,\\\"iml
```

</details>

---

### 组件图片上传

**请求地址:** `https://api.baidu.com/json/sms/service/ImageManagementService/uploadImage`

**方法说明:** 目前创意组件的图片，必须通过该接口转为百度格式的图片链接才能投放。客户可通过输入原图的base64形式的内容，上传图片。

<details>
<summary>请求示例</summary>

```json
{
	"body": {
		"productLine": "FENGCHAO",
		"items": [{
			"content": "base64",
			"imgmd5": "md5"
		}],
		"needMola": true,
		"addImage": false
	}
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
	"header": {
		"desc": "success",
		"failures": [],
		"oprs": 1,
		"succ": 1,
		"oprtime": 0,
		"status": 0
	},
	"body": {
		"data": [{
			"imageid": 1,
			"height": 1024,
			"width": 1024,
			"size": 1,
			"url": "https://xxxcom/0/pic/4e3b7650a7ddf4a13e44432f5dbfb556jpg",
			"molaUrl": "https://xxxcom/0/pic/4e3b7650a7ddf4a13e44432f5dbfb556jpg",
			"sign": "4e3b7650a7ddf4a13e44432f5dbfb556"
		}]
	}
}
```

</details>

---

### 获取APP素材

**请求地址:** `https://api.baidu.com/json/sms/service/AppProcessService/getAppList`

**方法说明:** 获取可投放的APP信息

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| platforms | Integer[] | app操作系统 | 取值范围：枚举值，列表如下1 - 安卓3 - iOS |
| limit | Integer[] | 分页信息，第一个参数偏移量，第二个参数是页面大小 | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| appInfoList | AppInfoItem[] | 应用列表 | - |
| totalCount | Integer | 应用总数 | - |
| name | String | app名称 | - |
| version | String | app版本 | - |
| platform | Integer | app操作系统 | 取值范围：枚举值，列表如下1 - 安卓3 - iOS |
| versionId | Long | app版本Id | - |
| appId | Long | app唯一标识 | - |
| packageName | String | app包名 | - |
| status | Integer | app状态 | 取值范围：枚举值，列表如下0 - 有效1 - 无效2 - 审核中 |
| appSource | Integer | app来源 | 取值范围：枚举值，列表如下0 - 百度移动应用平台1 - 极速下载2 - 投放平台3 - 百度移动应用平台 |
| channelId | Long | Android包唯一标识 | - |
| appStoreId | Long | IOS包唯一标识 | - |
| icon | String | app图标 | - |
| downloadUrl | String | app下载地址 | - |
| channelName | String | app渠道包名称 | - |

<details>
<summary>请求示例</summary>

```json
{
  "platforms" : [ 1, 3 ],
  "limit" : [ 1 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "appInfoList" : [ {
      "name" : "手机百度",
      "version" : "V2.2.2.2",
      "platform" : 1,
      "versionId" : 1,
      "appId" : 1,
      "packageName" : "com.baidu.xxx",
      "status" : 0,
      "appSource" : 3,
      "channelId" : 1000000000,
      "appStoreId" : 1000000,
      "icon" : "https://xxx",
      "downloadUrl" : "https://xxx",
      "channelName" : "渠道包名称"
    } ],
    "totalCount" : 1
  } ]
}
```

</details>

---

### 获取样式模板

**请求地址:** `https://api.baidu.com/json/sms/service/DpaCreativeService/getFormatTemplates`

**方法说明:** 根据商品组ID获取样式模板。商品组ID获取途径：查询创意组信息，通过商品目录获取商品组列表（参照[商品组管理](https://dev2.baidu.com/content?sceneType=0&pageId=103153&nodeId=252&subhead=)）。

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| productSetId | long | 商品组ID | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| formatId | int | 样式ID | - |
| formatName | String | 样式名称 | - |
| templateId | long | 模板ID | - |
| templateFields | TemplateField[] | 样式模板字段 | - |
| field | String | 字段名 | - |
| defaultValue | String | 字段默认值 | - |
| datasource | String[] | 可选商品字段列表 | 样式可选字段的值来源商品组字段列表，如：${attributes.nvwa_discount}",attributes.nvwa_discount为商品组字段名，使用${}是为了区分商品组字段与普通字符串，请严格按照${xxx}的形式提交创意 |
| type | String | 字段类型 | 取值范围：枚举值，列表如下URL - 链接TEXT - 文本IMAGE - 图片 |

<details>
<summary>请求示例</summary>

```json
{
  "productSetId" : 123
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "formatId" : 11027,
    "formatName" : "普通计划-商品橱窗-无线端",
    "templateId" : 779,
    "templateFields" : [ {
      "field" : "link_boxapp",
      "defaultValue" : "example string",
      "datasource" : [ "\"${attributes.mpUrl}\",\"${attributes.mpUrl_hotUrl}\",\"${attributes.mpUrl_searchUrl}\",\"\"" ],
      "type" : "URL"
    } ]
  } ]
}
```

</details>

---

### 设置绑定

**请求地址:** `https://api.baidu.com/json/sms/service/DpaCreativeService/batSetRange`

**方法说明:** 批量设置创意组投放范围，暂不支持跨账户

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| batRangeItems 必填 | SetRangeRequest[] | 批量创意组绑定关系对象 | 集合长度限制：[1, 100] |
| creativeGroupId  必填 | long | 创意组ID | - |
| rangeItems  必填 | RangeItem[] | 创意组绑定关系 | 集合长度限制：[1, 100] |
| campaignId  必填 | long | 推广计划ID | 绑定到账户时，计划ID为0 |
| adgroupId  必填 | long | 推广单元ID | 绑定到账户或计划时，单元ID为0 |
| userId  必填 | long | 账户ID | - |

<details>
<summary>请求示例</summary>

```json
{
  "batRangeItems" : [ {
    "creativeGroupId" : 1,
    "rangeItems" : [ {
      "campaignId" : 123,
      "adgroupId" : 0,
      "userId" : 123
    } ]
  } ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ { } ]
}
```

</details>

---

## 高级样式

### 删除创意组(高级样式)

**请求地址:** `https://api.baidu.com/json/sms/service/DanubeCreativeGroupService/deleteDanubeCreativeGroup`

**方法说明:** 删除创意组

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupIds 必填 | Long[] | 创意组ID | 集合长度限制：[1, 1000] |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupId | Long | 创意组ID | - |
| creativeGroupName | String | 创意组名称 | 长度限制：[1, 20]长度限制单位为字节，1个中文占用2个字节，1个英文或数字占用1个字节 |
| bindingRange | DanubeWebPlanRangeItemType[] | 绑定范围 | 支持绑定账户、计划、单元绑定账户时，只能绑定本账户，且不能设置计划和单元绑定绑定计划时，不能同时绑定该计划下的单元绑定单元时，需要填写所属计划ID最多绑定100个计划和1000个单元取值示例：绑定账户：[{"userId": 5962578}]绑定一个计划：[{"campaignId": 91100082}] 绑定一个单元：[{"adgroupId": 4502837792}] |
| materialTypes | Integer[] | 投放样式 | 取值范围：枚举值，列表如下3011 - 导航（计算机端）3015 - 图加导航（计算机端）1046 - 搜索头条（计算机端）3196 - 行行通（计算机端）3051 - 站内直达高级版（移动端）3017 - 综合导航（移动端）3010 - 文本导航（移动端）3008 - 站内直达（移动端）3041 - 搜索头条（移动端）3004 - 行行通（移动端）3007 - 站内直达（计算机端）11051 - 多品活动大图（计算机端）11050 - 单品活动大图（计算机端）3228 - 高级图文（计算机端）... |
| bindingLevel | String | 绑定层级 | 取值范围：枚举值，列表如下USER - 账户层级PLAN - 计划或单元层级只读 |
| category | Long[] | 行业 | 取值规则：按照所选行业，由总体行业至细分行业依次填写行业ID，例如：行业选择"安全安保">"安保服务"时，设置为[2880, 2881]全部行业信息可通过常量查询接口查询 |
| creativeComponents | DanubeCreativeComponent | 样式-组件信息 | 每种样式的构成组件和组件填写要求不同，目前支持的组件类型：category - 子链组件image - 图片组件selectList - 选择列表组件textList - 文字组件plas - 橱窗组件list - 列表组件支持的样式类型和各样式对组件的填写要求可通过高级样式内容填写文档查看 |
| device | Integer | 投放设备 | 取值范围：枚举值，列表如下0 - 全部1 - 移动2 - 计算机只读 |
| status | Integer | 状态 | 取值范围：枚举值，列表如下0 - 启用1 - 暂停2 - 删除3 - 审核不通过4 - 审核中只读 |
| userId | Long | 绑定账户ID | 只允许填本账户ID |
| campaignId | Long | 绑定计划ID | 查询时返回值0表示未设置 |
| adgroupId | Long | 绑定单元ID | 查询时返回值0表示未设置 |
| selectList | DanubeSelectListCreative[] | 选择列表组件 | - |
| plas | DanubePlasCreative[] | 橱窗组件 | - |
| category | DanubeCategoryCreative[] | 子链组件 | - |
| image | DanubeImageCreative[] | 图片组件 | - |
| textList | DanubeTextListCreative[] | 文字组件 | - |
| list | DanubeListCreative[] | 列表组件 | - |
| content | SelectList[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| key | String | 标签 | - |
| value | String | 属性值 | - |
| id | String | 组件ID | 只读 |
| content | Plas[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| name | String | 商品名称 | - |
| desc | String | 商品描述 | - |
| url | String | 商品链接 | - |
| swanUrl | String | 小程序链接 | - |
| deepLink | String | 调起链接 | - |
| image | Image[] | 商品图片 | - |
| id | String | 组件ID | 只读 |
| url | String | 图片链接 | 只读 |
| cutTop | Double | 图片裁剪上方坐标 | 只读 |
| cutLeft | Double | 图片裁剪左方坐标 | 只读 |
| cutWidth | Double | 图片裁剪宽度 | 只读 |
| cutHeight | Double | 图片裁剪高度 | 只读 |
| viewWidth | Double | 图片view宽度 | 只读 |
| viewHeight | Double | 图片view高度 | 只读 |
| originWidth | Double | 图片原始宽度 | 只读 |
| originHeight | Double | 图片原始高度 | 只读 |
| imageId | Long | 图片ID | 添加或修改图片组件时必填，查询创意组时将返回图片信息，不返回该字段可根据资产管理-图片管理-查询图片接口查询图片ID，对应结果中的imageId字段 |
| id | String | 组件ID | 只读 |
| content | Category | 组件内容 | 添加或修改子链组件时必填对于不同样式，组件内容填写规则有所不用，详情参考高级样式组件内容填写文档 |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| industry | String | 标签行业 | - |
| subLinks | SubLink[] | 子链 | - |
| label | String | 标签 | - |
| textLink | TextLink[] | 子链 | - |
| id | String | 组件ID | 只读 |
| moreLink | boolean | 是否是固定子链 | 默认值：false取值范围：枚举值，列表如下true - 是false - 否 |
| text | String | 子链名称 | - |
| linkUrl | String | 子链URL | - |
| swanUrl | String | 小程序链接 | - |
| deepLink | String | 调起链接 | - |
| id | String | 组件ID | 只读 |
| content | Image[] | 组件内容 | 添加或修改图片组件时必填对于不同样式，组件内容填写规则有所不用，详情参考高级样式组件内容填写文档 |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| content | String[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| content | ListType | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| industry | String | 行业 | - |
| labels | String[] | 标签 | - |
| slogan | String | 点击跳转 | - |
| rows | ListRowType[] | 商品列 | - |
| maxCharNumByColumn | Integer[] | 每列的行数要求 | - |
| productName | String | 商品名称 | - |
| productUrl | String | 商品链接 | - |
| targetUrl | String | 跳转链接 | - |
| labels | String[] | 标签 | labels列表长度和ListType中labels列表长度保持一致 |
| swanUrl | String | 小程序url | - |
| deepLink | String | deeplink | - |
| id | String | 组件ID | 只读 |

<details>
<summary>请求示例</summary>

```json
{
  "creativeGroupIds" : [ 1 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "creativeGroupName" : "example string",
    "bindingRange" : [ {
      "userId" : 1,
      "campaignId" : 1,
      "adgroupId" : 1
    } ],
    "materialTypes" : [ 3011, 3015, 1046, 3196, 3051, 3017, 3010, 3008, 3041, 3004, 3007, 11051, 11050, 3228, 3002, 3009, 11019, 3148, 1061, 3149, 1051, 1060, 3124, 3120, 3036, 3198, 3138, 3037, 3035, 9050, 3003, 3128 ],
    "bindingLevel" : "USER",
    "category" : [ 1 ],
    "creativeComponents" : {
      "selectList" : [ {
        "content" : [ {
          "key" : "example string",
          "value" : "example string",
          "id
```

</details>

---

### 复制创意组(高级样式)

**请求地址:** `https://api.baidu.com/json/sms/service/DanubeCreativeGroupService/copyDanubeCreativeGroup`

**方法说明:** 复制创意组

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupTypes 必填 | DanubeCreativeGroupType[] | 创意组信息 | 数组长度限制：新增创意组、复制创意组、修改创意组内容时最多支持10个，修改创意组状态时最多支持1000个 |
| creativeGroupId  必填 | Long | 创意组ID | - |
| bindingRange  必填 | DanubeWebPlanRangeItemType[] | 绑定范围 | 支持绑定账户、计划、单元绑定账户时，只能绑定本账户，且不能设置计划和单元绑定绑定计划时，不能同时绑定该计划下的单元绑定单元时，需要填写所属计划ID最多绑定100个计划和1000个单元取值示例：绑定账户：[{"userId": 5962578}]绑定一个计划：[{"campaignId": 91100082}] 绑定一个单元：[{"adgroupId": 4502837792}] |
| userId | Long | 绑定账户ID | 只允许填本账户ID |
| campaignId | Long | 绑定计划ID | 查询时返回值0表示未设置 |
| adgroupId | Long | 绑定单元ID | 查询时返回值0表示未设置 |
| selectList | DanubeSelectListCreative[] | 选择列表组件 | - |
| plas | DanubePlasCreative[] | 橱窗组件 | - |
| category | DanubeCategoryCreative[] | 子链组件 | - |
| image | DanubeImageCreative[] | 图片组件 | - |
| textList | DanubeTextListCreative[] | 文字组件 | - |
| list | DanubeListCreative[] | 列表组件 | - |
| content | SelectList[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| key | String | 标签 | - |
| value | String | 属性值 | - |
| id | String | 组件ID | 只读 |
| content | Plas[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| name | String | 商品名称 | - |
| desc | String | 商品描述 | - |
| url | String | 商品链接 | - |
| swanUrl | String | 小程序链接 | - |
| deepLink | String | 调起链接 | - |
| image | Image[] | 商品图片 | - |
| id | String | 组件ID | 只读 |
| url | String | 图片链接 | 只读 |
| cutTop | Double | 图片裁剪上方坐标 | 只读 |
| cutLeft | Double | 图片裁剪左方坐标 | 只读 |
| cutWidth | Double | 图片裁剪宽度 | 只读 |
| cutHeight | Double | 图片裁剪高度 | 只读 |
| viewWidth | Double | 图片view宽度 | 只读 |
| viewHeight | Double | 图片view高度 | 只读 |
| originWidth | Double | 图片原始宽度 | 只读 |
| originHeight | Double | 图片原始高度 | 只读 |
| imageId | Long | 图片ID | 添加或修改图片组件时必填，查询创意组时将返回图片信息，不返回该字段可根据资产管理-图片管理-查询图片接口查询图片ID，对应结果中的imageId字段 |
| id | String | 组件ID | 只读 |
| content | Category | 组件内容 | 添加或修改子链组件时必填对于不同样式，组件内容填写规则有所不用，详情参考高级样式组件内容填写文档 |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| industry | String | 标签行业 | - |
| subLinks | SubLink[] | 子链 | - |
| label | String | 标签 | - |
| textLink | TextLink[] | 子链 | - |
| id | String | 组件ID | 只读 |
| content | Image[] | 组件内容 | 添加或修改图片组件时必填对于不同样式，组件内容填写规则有所不用，详情参考高级样式组件内容填写文档 |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| content | String[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| content | ListType | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| industry | String | 行业 | - |
| labels | String[] | 标签 | - |
| slogan | String | 点击跳转 | - |
| rows | ListRowType[] | 商品列 | - |
| maxCharNumByColumn | Integer[] | 每列的行数要求 | - |
| productName | String | 商品名称 | - |
| productUrl | String | 商品链接 | - |
| targetUrl | String | 跳转链接 | - |
| labels | String[] | 标签 | labels列表长度和ListType中labels列表长度保持一致 |
| swanUrl | String | 小程序url | - |
| deepLink | String | deeplink | - |
| id | String | 组件ID | 只读 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupId | Long | 创意组ID | - |
| bindingRange | DanubeWebPlanRangeItemType[] | 绑定范围 | 支持绑定账户、计划、单元绑定账户时，只能绑定本账户，且不能设置计划和单元绑定绑定计划时，不能同时绑定该计划下的单元绑定单元时，需要填写所属计划ID最多绑定100个计划和1000个单元取值示例：绑定账户：[{"userId": 5962578}]绑定一个计划：[{"campaignId": 91100082}] 绑定一个单元：[{"adgroupId": 4502837792}] |
| userId | Long | 绑定账户ID | 只允许填本账户ID |
| campaignId | Long | 绑定计划ID | 查询时返回值0表示未设置 |
| adgroupId | Long | 绑定单元ID | 查询时返回值0表示未设置 |
| selectList | DanubeSelectListCreative[] | 选择列表组件 | - |
| plas | DanubePlasCreative[] | 橱窗组件 | - |
| category | DanubeCategoryCreative[] | 子链组件 | - |
| image | DanubeImageCreative[] | 图片组件 | - |
| textList | DanubeTextListCreative[] | 文字组件 | - |
| list | DanubeListCreative[] | 列表组件 | - |
| content | SelectList[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| key | String | 标签 | - |
| value | String | 属性值 | - |
| id | String | 组件ID | 只读 |
| content | Plas[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| name | String | 商品名称 | - |
| desc | String | 商品描述 | - |
| url | String | 商品链接 | - |
| swanUrl | String | 小程序链接 | - |
| deepLink | String | 调起链接 | - |
| image | Image[] | 商品图片 | - |
| id | String | 组件ID | 只读 |
| url | String | 图片链接 | 只读 |
| cutTop | Double | 图片裁剪上方坐标 | 只读 |
| cutLeft | Double | 图片裁剪左方坐标 | 只读 |
| cutWidth | Double | 图片裁剪宽度 | 只读 |
| cutHeight | Double | 图片裁剪高度 | 只读 |
| viewWidth | Double | 图片view宽度 | 只读 |
| viewHeight | Double | 图片view高度 | 只读 |
| originWidth | Double | 图片原始宽度 | 只读 |
| originHeight | Double | 图片原始高度 | 只读 |
| imageId | Long | 图片ID | 添加或修改图片组件时必填，查询创意组时将返回图片信息，不返回该字段可根据资产管理-图片管理-查询图片接口查询图片ID，对应结果中的imageId字段 |
| id | String | 组件ID | 只读 |
| content | Category | 组件内容 | 添加或修改子链组件时必填对于不同样式，组件内容填写规则有所不用，详情参考高级样式组件内容填写文档 |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| industry | String | 标签行业 | - |
| subLinks | SubLink[] | 子链 | - |
| label | String | 标签 | - |
| textLink | TextLink[] | 子链 | - |
| id | String | 组件ID | 只读 |
| moreLink | boolean | 是否是固定子链 | 默认值：false取值范围：枚举值，列表如下true - 是false - 否 |
| text | String | 子链名称 | - |
| linkUrl | String | 子链URL | - |
| swanUrl | String | 小程序链接 | - |
| deepLink | String | 调起链接 | - |
| id | String | 组件ID | 只读 |
| content | Image[] | 组件内容 | 添加或修改图片组件时必填对于不同样式，组件内容填写规则有所不用，详情参考高级样式组件内容填写文档 |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| content | String[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| content | ListType | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| industry | String | 行业 | - |
| labels | String[] | 标签 | - |
| slogan | String | 点击跳转 | - |
| rows | ListRowType[] | 商品列 | - |
| maxCharNumByColumn | Integer[] | 每列的行数要求 | - |
| productName | String | 商品名称 | - |
| productUrl | String | 商品链接 | - |
| targetUrl | String | 跳转链接 | - |
| labels | String[] | 标签 | labels列表长度和ListType中labels列表长度保持一致 |
| swanUrl | String | 小程序url | - |
| deepLink | String | deeplink | - |
| id | String | 组件ID | 只读 |

<details>
<summary>请求示例</summary>

```json
{
  "creativeGroupTypes" : [ {
    "creativeGroupName" : "example string",
    "bindingRange" : [ {
      "userId" : 1,
      "campaignId" : 1,
      "adgroupId" : 1
    } ],
    "materialTypes" : [ 3011, 3015, 1046, 3196, 3051, 3017, 3010, 3008, 3041, 3004, 3007, 11051, 11050, 3228, 3002, 3009, 11019, 3148, 1061, 3149, 1051, 1060, 3124, 3120, 3036, 3198, 3138, 3037, 3035, 9050, 3003, 3128 ],
    "bindingLevel" : "USER",
    "category" : [ 1 ],
    "creativeComponents" : {
      "selectList" : [ {
        "content" : [ {
          "key" : "example string",
          "value" : "example string",
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "creativeGroupName" : "example string",
    "bindingRange" : [ {
      "userId" : 1,
      "campaignId" : 1,
      "adgroupId" : 1
    } ],
    "materialTypes" : [ 3011, 3015, 1046, 3196, 3051, 3017, 3010, 3008, 3041, 3004, 3007, 11051, 11050, 3228, 3002, 3009, 11019, 3148, 1061, 3149, 1051, 1060, 3124, 3120, 3036, 3198, 3138, 3037, 3035, 9050, 3003, 3128 ],
    "bindingLevel" : "USER",
    "category" : [ 1 ],
    "creativeComponents" : {
      "selectList" : [ {
        "content" : [ {
          "key" : "example string",
          "value" : "example string",
          "id
```

</details>

---

### 新建创意组(高级样式)

**请求地址:** `https://api.baidu.com/json/sms/service/DanubeCreativeGroupService/addDanubeCreativeGroup`

**方法说明:** 新建创意组

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupTypes 必填 | DanubeCreativeGroupType[] | 创意组信息 | 数组长度限制：新增创意组、复制创意组、修改创意组内容时最多支持10个，修改创意组状态时最多支持1000个 |
| creativeGroupName  必填 | String | 创意组名称 | 长度限制：[1, 20]长度限制单位为字节，1个中文占用2个字节，1个英文或数字占用1个字节 |
| bindingRange  必填 | DanubeWebPlanRangeItemType[] | 绑定范围 | 支持绑定账户、计划、单元绑定账户时，只能绑定本账户，且不能设置计划和单元绑定绑定计划时，不能同时绑定该计划下的单元绑定单元时，需要填写所属计划ID最多绑定100个计划和1000个单元取值示例：绑定账户：[{"userId": 5962578}]绑定一个计划：[{"campaignId": 91100082}] 绑定一个单元：[{"adgroupId": 4502837792}] |
| materialTypes  必填 | Integer[] | 投放样式 | 取值范围：枚举值，列表如下3011 - 导航（计算机端）3015 - 图加导航（计算机端）1046 - 搜索头条（计算机端）3196 - 行行通（计算机端）3051 - 站内直达高级版（移动端）3017 - 综合导航（移动端）3010 - 文本导航（移动端）3008 - 站内直达（移动端）3041 - 搜索头条（移动端）3004 - 行行通（移动端）3007 - 站内直达（计算机端）11051 - 多品活动大图（计算机端）11050 - 单品活动大图（计算机端）3228 - 高级图文（计算机端）... |
| category  必填 | Long[] | 行业 | 取值规则：按照所选行业，由总体行业至细分行业依次填写行业ID，例如：行业选择"安全安保">"安保服务"时，设置为[2880, 2881]全部行业信息可通过常量查询接口查询 |
| creativeComponents  必填 | DanubeCreativeComponent | 样式-组件信息 | 每种样式的构成组件和组件填写要求不同，目前支持的组件类型：category - 子链组件image - 图片组件selectList - 选择列表组件textList - 文字组件plas - 橱窗组件list - 列表组件支持的样式类型和各样式对组件的填写要求可通过高级样式内容填写文档查看 |
| userId | Long | 绑定账户ID | 只允许填本账户ID |
| campaignId | Long | 绑定计划ID | 查询时返回值0表示未设置 |
| adgroupId | Long | 绑定单元ID | 查询时返回值0表示未设置 |
| selectList | DanubeSelectListCreative[] | 选择列表组件 | - |
| plas | DanubePlasCreative[] | 橱窗组件 | - |
| category | DanubeCategoryCreative[] | 子链组件 | - |
| image | DanubeImageCreative[] | 图片组件 | - |
| textList | DanubeTextListCreative[] | 文字组件 | - |
| list | DanubeListCreative[] | 列表组件 | - |
| content | SelectList[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| key | String | 标签 | - |
| value | String | 属性值 | - |
| id | String | 组件ID | 只读 |
| content | Plas[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| name | String | 商品名称 | - |
| desc | String | 商品描述 | - |
| url | String | 商品链接 | - |
| swanUrl | String | 小程序链接 | - |
| deepLink | String | 调起链接 | - |
| image | Image[] | 商品图片 | - |
| id | String | 组件ID | 只读 |
| url | String | 图片链接 | 只读 |
| cutTop | Double | 图片裁剪上方坐标 | 只读 |
| cutLeft | Double | 图片裁剪左方坐标 | 只读 |
| cutWidth | Double | 图片裁剪宽度 | 只读 |
| cutHeight | Double | 图片裁剪高度 | 只读 |
| viewWidth | Double | 图片view宽度 | 只读 |
| viewHeight | Double | 图片view高度 | 只读 |
| originWidth | Double | 图片原始宽度 | 只读 |
| originHeight | Double | 图片原始高度 | 只读 |
| imageId | Long | 图片ID | 添加或修改图片组件时必填，查询创意组时将返回图片信息，不返回该字段可根据资产管理-图片管理-查询图片接口查询图片ID，对应结果中的imageId字段 |
| id | String | 组件ID | 只读 |
| content | Category | 组件内容 | 添加或修改子链组件时必填对于不同样式，组件内容填写规则有所不用，详情参考高级样式组件内容填写文档 |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| industry | String | 标签行业 | - |
| subLinks | SubLink[] | 子链 | - |
| label | String | 标签 | - |
| textLink | TextLink[] | 子链 | - |
| id | String | 组件ID | 只读 |
| content | Image[] | 组件内容 | 添加或修改图片组件时必填对于不同样式，组件内容填写规则有所不用，详情参考高级样式组件内容填写文档 |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| content | String[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| content | ListType | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| industry | String | 行业 | - |
| labels | String[] | 标签 | - |
| slogan | String | 点击跳转 | - |
| rows | ListRowType[] | 商品列 | - |
| maxCharNumByColumn | Integer[] | 每列的行数要求 | - |
| productName | String | 商品名称 | - |
| productUrl | String | 商品链接 | - |
| targetUrl | String | 跳转链接 | - |
| labels | String[] | 标签 | labels列表长度和ListType中labels列表长度保持一致 |
| swanUrl | String | 小程序url | - |
| deepLink | String | deeplink | - |
| id | String | 组件ID | 只读 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupName | String | 创意组名称 | 长度限制：[1, 20]长度限制单位为字节，1个中文占用2个字节，1个英文或数字占用1个字节 |
| bindingRange | DanubeWebPlanRangeItemType[] | 绑定范围 | 支持绑定账户、计划、单元绑定账户时，只能绑定本账户，且不能设置计划和单元绑定绑定计划时，不能同时绑定该计划下的单元绑定单元时，需要填写所属计划ID最多绑定100个计划和1000个单元取值示例：绑定账户：[{"userId": 5962578}]绑定一个计划：[{"campaignId": 91100082}] 绑定一个单元：[{"adgroupId": 4502837792}] |
| materialTypes | Integer[] | 投放样式 | 取值范围：枚举值，列表如下3011 - 导航（计算机端）3015 - 图加导航（计算机端）1046 - 搜索头条（计算机端）3196 - 行行通（计算机端）3051 - 站内直达高级版（移动端）3017 - 综合导航（移动端）3010 - 文本导航（移动端）3008 - 站内直达（移动端）3041 - 搜索头条（移动端）3004 - 行行通（移动端）3007 - 站内直达（计算机端）11051 - 多品活动大图（计算机端）11050 - 单品活动大图（计算机端）3228 - 高级图文（计算机端）... |
| category | Long[] | 行业 | 取值规则：按照所选行业，由总体行业至细分行业依次填写行业ID，例如：行业选择"安全安保">"安保服务"时，设置为[2880, 2881]全部行业信息可通过常量查询接口查询 |
| creativeComponents | DanubeCreativeComponent | 样式-组件信息 | 每种样式的构成组件和组件填写要求不同，目前支持的组件类型：category - 子链组件image - 图片组件selectList - 选择列表组件textList - 文字组件plas - 橱窗组件list - 列表组件支持的样式类型和各样式对组件的填写要求可通过高级样式内容填写文档查看 |
| userId | Long | 绑定账户ID | 只允许填本账户ID |
| campaignId | Long | 绑定计划ID | 查询时返回值0表示未设置 |
| adgroupId | Long | 绑定单元ID | 查询时返回值0表示未设置 |
| selectList | DanubeSelectListCreative[] | 选择列表组件 | - |
| plas | DanubePlasCreative[] | 橱窗组件 | - |
| category | DanubeCategoryCreative[] | 子链组件 | - |
| image | DanubeImageCreative[] | 图片组件 | - |
| textList | DanubeTextListCreative[] | 文字组件 | - |
| list | DanubeListCreative[] | 列表组件 | - |
| content | SelectList[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| key | String | 标签 | - |
| value | String | 属性值 | - |
| id | String | 组件ID | 只读 |
| content | Plas[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| name | String | 商品名称 | - |
| desc | String | 商品描述 | - |
| url | String | 商品链接 | - |
| swanUrl | String | 小程序链接 | - |
| deepLink | String | 调起链接 | - |
| image | Image[] | 商品图片 | - |
| id | String | 组件ID | 只读 |
| url | String | 图片链接 | 只读 |
| cutTop | Double | 图片裁剪上方坐标 | 只读 |
| cutLeft | Double | 图片裁剪左方坐标 | 只读 |
| cutWidth | Double | 图片裁剪宽度 | 只读 |
| cutHeight | Double | 图片裁剪高度 | 只读 |
| viewWidth | Double | 图片view宽度 | 只读 |
| viewHeight | Double | 图片view高度 | 只读 |
| originWidth | Double | 图片原始宽度 | 只读 |
| originHeight | Double | 图片原始高度 | 只读 |
| imageId | Long | 图片ID | 添加或修改图片组件时必填，查询创意组时将返回图片信息，不返回该字段可根据资产管理-图片管理-查询图片接口查询图片ID，对应结果中的imageId字段 |
| id | String | 组件ID | 只读 |
| content | Category | 组件内容 | 添加或修改子链组件时必填对于不同样式，组件内容填写规则有所不用，详情参考高级样式组件内容填写文档 |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| industry | String | 标签行业 | - |
| subLinks | SubLink[] | 子链 | - |
| label | String | 标签 | - |
| textLink | TextLink[] | 子链 | - |
| id | String | 组件ID | 只读 |
| moreLink | boolean | 是否是固定子链 | 默认值：false取值范围：枚举值，列表如下true - 是false - 否 |
| text | String | 子链名称 | - |
| linkUrl | String | 子链URL | - |
| swanUrl | String | 小程序链接 | - |
| deepLink | String | 调起链接 | - |
| id | String | 组件ID | 只读 |
| content | Image[] | 组件内容 | 添加或修改图片组件时必填对于不同样式，组件内容填写规则有所不用，详情参考高级样式组件内容填写文档 |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| content | String[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| content | ListType | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| industry | String | 行业 | - |
| labels | String[] | 标签 | - |
| slogan | String | 点击跳转 | - |
| rows | ListRowType[] | 商品列 | - |
| maxCharNumByColumn | Integer[] | 每列的行数要求 | - |
| productName | String | 商品名称 | - |
| productUrl | String | 商品链接 | - |
| targetUrl | String | 跳转链接 | - |
| labels | String[] | 标签 | labels列表长度和ListType中labels列表长度保持一致 |
| swanUrl | String | 小程序url | - |
| deepLink | String | deeplink | - |
| id | String | 组件ID | 只读 |

<details>
<summary>请求示例</summary>

```json
{
  "creativeGroupTypes" : [ {
    "creativeGroupName" : "example string",
    "bindingRange" : [ {
      "userId" : 1,
      "campaignId" : 1,
      "adgroupId" : 1
    } ],
    "materialTypes" : [ 3011, 3015, 1046, 3196, 3051, 3017, 3010, 3008, 3041, 3004, 3007, 11051, 11050, 3228, 3002, 3009, 11019, 3148, 1061, 3149, 1051, 1060, 3124, 3120, 3036, 3198, 3138, 3037, 3035, 9050, 3003, 3128 ],
    "bindingLevel" : "USER",
    "category" : [ 1 ],
    "creativeComponents" : {
      "selectList" : [ {
        "content" : [ {
          "key" : "example string",
          "value" : "example string",
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "creativeGroupName" : "example string",
    "bindingRange" : [ {
      "userId" : 1,
      "campaignId" : 1,
      "adgroupId" : 1
    } ],
    "materialTypes" : [ 3011, 3015, 1046, 3196, 3051, 3017, 3010, 3008, 3041, 3004, 3007, 11051, 11050, 3228, 3002, 3009, 11019, 3148, 1061, 3149, 1051, 1060, 3124, 3120, 3036, 3198, 3138, 3037, 3035, 9050, 3003, 3128 ],
    "bindingLevel" : "USER",
    "category" : [ 1 ],
    "creativeComponents" : {
      "selectList" : [ {
        "content" : [ {
          "key" : "example string",
          "value" : "example string",
          "id
```

</details>

---

### 更新创意组(高级样式)

**请求地址:** `https://api.baidu.com/json/sms/service/DanubeCreativeGroupService/updateDanubeCreativeGroup`

**方法说明:** 修改创意组

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupTypes 必填 | DanubeCreativeGroupType[] | 创意组信息 | 数组长度限制：新增创意组、复制创意组、修改创意组内容时最多支持10个，修改创意组状态时最多支持1000个 |
| creativeGroupId  必填 | Long | 创意组ID | - |
| creativeGroupName | String | 创意组名称 | 长度限制：[1, 20]长度限制单位为字节，1个中文占用2个字节，1个英文或数字占用1个字节 |
| bindingRange | DanubeWebPlanRangeItemType[] | 绑定范围 | 支持绑定账户、计划、单元绑定账户时，只能绑定本账户，且不能设置计划和单元绑定绑定计划时，不能同时绑定该计划下的单元绑定单元时，需要填写所属计划ID最多绑定100个计划和1000个单元取值示例：绑定账户：[{"userId": 5962578}]绑定一个计划：[{"campaignId": 91100082}] 绑定一个单元：[{"adgroupId": 4502837792}] |
| materialTypes | Integer[] | 投放样式 | 取值范围：枚举值，列表如下3011 - 导航（计算机端）3015 - 图加导航（计算机端）1046 - 搜索头条（计算机端）3196 - 行行通（计算机端）3051 - 站内直达高级版（移动端）3017 - 综合导航（移动端）3010 - 文本导航（移动端）3008 - 站内直达（移动端）3041 - 搜索头条（移动端）3004 - 行行通（移动端）3007 - 站内直达（计算机端）11051 - 多品活动大图（计算机端）11050 - 单品活动大图（计算机端）3228 - 高级图文（计算机端）... |
| creativeComponents | DanubeCreativeComponent | 样式-组件信息 | 每种样式的构成组件和组件填写要求不同，目前支持的组件类型：category - 子链组件image - 图片组件selectList - 选择列表组件textList - 文字组件plas - 橱窗组件list - 列表组件支持的样式类型和各样式对组件的填写要求可通过高级样式内容填写文档查看 |
| pause | Boolean | 暂停状态 | 取值范围：枚举值，列表如下true - 暂停false - 启用 |
| userId | Long | 绑定账户ID | 只允许填本账户ID |
| campaignId | Long | 绑定计划ID | 查询时返回值0表示未设置 |
| adgroupId | Long | 绑定单元ID | 查询时返回值0表示未设置 |
| selectList | DanubeSelectListCreative[] | 选择列表组件 | - |
| plas | DanubePlasCreative[] | 橱窗组件 | - |
| category | DanubeCategoryCreative[] | 子链组件 | - |
| image | DanubeImageCreative[] | 图片组件 | - |
| textList | DanubeTextListCreative[] | 文字组件 | - |
| list | DanubeListCreative[] | 列表组件 | - |
| content | SelectList[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| key | String | 标签 | - |
| value | String | 属性值 | - |
| id | String | 组件ID | 只读 |
| content | Plas[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| name | String | 商品名称 | - |
| desc | String | 商品描述 | - |
| url | String | 商品链接 | - |
| swanUrl | String | 小程序链接 | - |
| deepLink | String | 调起链接 | - |
| image | Image[] | 商品图片 | - |
| id | String | 组件ID | 只读 |
| url | String | 图片链接 | 只读 |
| cutTop | Double | 图片裁剪上方坐标 | 只读 |
| cutLeft | Double | 图片裁剪左方坐标 | 只读 |
| cutWidth | Double | 图片裁剪宽度 | 只读 |
| cutHeight | Double | 图片裁剪高度 | 只读 |
| viewWidth | Double | 图片view宽度 | 只读 |
| viewHeight | Double | 图片view高度 | 只读 |
| originWidth | Double | 图片原始宽度 | 只读 |
| originHeight | Double | 图片原始高度 | 只读 |
| imageId | Long | 图片ID | 添加或修改图片组件时必填，查询创意组时将返回图片信息，不返回该字段可根据资产管理-图片管理-查询图片接口查询图片ID，对应结果中的imageId字段 |
| id | String | 组件ID | 只读 |
| content | Category | 组件内容 | 添加或修改子链组件时必填对于不同样式，组件内容填写规则有所不用，详情参考高级样式组件内容填写文档 |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| industry | String | 标签行业 | - |
| subLinks | SubLink[] | 子链 | - |
| label | String | 标签 | - |
| textLink | TextLink[] | 子链 | - |
| id | String | 组件ID | 只读 |
| content | Image[] | 组件内容 | 添加或修改图片组件时必填对于不同样式，组件内容填写规则有所不用，详情参考高级样式组件内容填写文档 |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| content | String[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| content | ListType | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| industry | String | 行业 | - |
| labels | String[] | 标签 | - |
| slogan | String | 点击跳转 | - |
| rows | ListRowType[] | 商品列 | - |
| maxCharNumByColumn | Integer[] | 每列的行数要求 | - |
| productName | String | 商品名称 | - |
| productUrl | String | 商品链接 | - |
| targetUrl | String | 跳转链接 | - |
| labels | String[] | 标签 | labels列表长度和ListType中labels列表长度保持一致 |
| swanUrl | String | 小程序url | - |
| deepLink | String | deeplink | - |
| id | String | 组件ID | 只读 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeGroupId | Long | 创意组ID | - |
| creativeGroupName | String | 创意组名称 | 长度限制：[1, 20]长度限制单位为字节，1个中文占用2个字节，1个英文或数字占用1个字节 |
| bindingRange | DanubeWebPlanRangeItemType[] | 绑定范围 | 支持绑定账户、计划、单元绑定账户时，只能绑定本账户，且不能设置计划和单元绑定绑定计划时，不能同时绑定该计划下的单元绑定单元时，需要填写所属计划ID最多绑定100个计划和1000个单元取值示例：绑定账户：[{"userId": 5962578}]绑定一个计划：[{"campaignId": 91100082}] 绑定一个单元：[{"adgroupId": 4502837792}] |
| materialTypes | Integer[] | 投放样式 | 取值范围：枚举值，列表如下3011 - 导航（计算机端）3015 - 图加导航（计算机端）1046 - 搜索头条（计算机端）3196 - 行行通（计算机端）3051 - 站内直达高级版（移动端）3017 - 综合导航（移动端）3010 - 文本导航（移动端）3008 - 站内直达（移动端）3041 - 搜索头条（移动端）3004 - 行行通（移动端）3007 - 站内直达（计算机端）11051 - 多品活动大图（计算机端）11050 - 单品活动大图（计算机端）3228 - 高级图文（计算机端）... |
| creativeComponents | DanubeCreativeComponent | 样式-组件信息 | 每种样式的构成组件和组件填写要求不同，目前支持的组件类型：category - 子链组件image - 图片组件selectList - 选择列表组件textList - 文字组件plas - 橱窗组件list - 列表组件支持的样式类型和各样式对组件的填写要求可通过高级样式内容填写文档查看 |
| pause | Boolean | 暂停状态 | 取值范围：枚举值，列表如下true - 暂停false - 启用 |
| userId | Long | 绑定账户ID | 只允许填本账户ID |
| campaignId | Long | 绑定计划ID | 查询时返回值0表示未设置 |
| adgroupId | Long | 绑定单元ID | 查询时返回值0表示未设置 |
| selectList | DanubeSelectListCreative[] | 选择列表组件 | - |
| plas | DanubePlasCreative[] | 橱窗组件 | - |
| category | DanubeCategoryCreative[] | 子链组件 | - |
| image | DanubeImageCreative[] | 图片组件 | - |
| textList | DanubeTextListCreative[] | 文字组件 | - |
| list | DanubeListCreative[] | 列表组件 | - |
| content | SelectList[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| key | String | 标签 | - |
| value | String | 属性值 | - |
| id | String | 组件ID | 只读 |
| content | Plas[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| name | String | 商品名称 | - |
| desc | String | 商品描述 | - |
| url | String | 商品链接 | - |
| swanUrl | String | 小程序链接 | - |
| deepLink | String | 调起链接 | - |
| image | Image[] | 商品图片 | - |
| id | String | 组件ID | 只读 |
| url | String | 图片链接 | 只读 |
| cutTop | Double | 图片裁剪上方坐标 | 只读 |
| cutLeft | Double | 图片裁剪左方坐标 | 只读 |
| cutWidth | Double | 图片裁剪宽度 | 只读 |
| cutHeight | Double | 图片裁剪高度 | 只读 |
| viewWidth | Double | 图片view宽度 | 只读 |
| viewHeight | Double | 图片view高度 | 只读 |
| originWidth | Double | 图片原始宽度 | 只读 |
| originHeight | Double | 图片原始高度 | 只读 |
| imageId | Long | 图片ID | 添加或修改图片组件时必填，查询创意组时将返回图片信息，不返回该字段可根据资产管理-图片管理-查询图片接口查询图片ID，对应结果中的imageId字段 |
| id | String | 组件ID | 只读 |
| content | Category | 组件内容 | 添加或修改子链组件时必填对于不同样式，组件内容填写规则有所不用，详情参考高级样式组件内容填写文档 |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| industry | String | 标签行业 | - |
| subLinks | SubLink[] | 子链 | - |
| label | String | 标签 | - |
| textLink | TextLink[] | 子链 | - |
| id | String | 组件ID | 只读 |
| moreLink | boolean | 是否是固定子链 | 默认值：false取值范围：枚举值，列表如下true - 是false - 否 |
| text | String | 子链名称 | - |
| linkUrl | String | 子链URL | - |
| swanUrl | String | 小程序链接 | - |
| deepLink | String | 调起链接 | - |
| id | String | 组件ID | 只读 |
| content | Image[] | 组件内容 | 添加或修改图片组件时必填对于不同样式，组件内容填写规则有所不用，详情参考高级样式组件内容填写文档 |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| content | String[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| content | ListType | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| industry | String | 行业 | - |
| labels | String[] | 标签 | - |
| slogan | String | 点击跳转 | - |
| rows | ListRowType[] | 商品列 | - |
| maxCharNumByColumn | Integer[] | 每列的行数要求 | - |
| productName | String | 商品名称 | - |
| productUrl | String | 商品链接 | - |
| targetUrl | String | 跳转链接 | - |
| labels | String[] | 标签 | labels列表长度和ListType中labels列表长度保持一致 |
| swanUrl | String | 小程序url | - |
| deepLink | String | deeplink | - |
| id | String | 组件ID | 只读 |

<details>
<summary>请求示例</summary>

```json
{
  "creativeGroupTypes" : [ {
    "creativeGroupName" : "example string",
    "bindingRange" : [ {
      "userId" : 1,
      "campaignId" : 1,
      "adgroupId" : 1
    } ],
    "materialTypes" : [ 3011, 3015, 1046, 3196, 3051, 3017, 3010, 3008, 3041, 3004, 3007, 11051, 11050, 3228, 3002, 3009, 11019, 3148, 1061, 3149, 1051, 1060, 3124, 3120, 3036, 3198, 3138, 3037, 3035, 9050, 3003, 3128 ],
    "bindingLevel" : "USER",
    "category" : [ 1 ],
    "creativeComponents" : {
      "selectList" : [ {
        "content" : [ {
          "key" : "example string",
          "value" : "example string",
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "creativeGroupName" : "example string",
    "bindingRange" : [ {
      "userId" : 1,
      "campaignId" : 1,
      "adgroupId" : 1
    } ],
    "materialTypes" : [ 3011, 3015, 1046, 3196, 3051, 3017, 3010, 3008, 3041, 3004, 3007, 11051, 11050, 3228, 3002, 3009, 11019, 3148, 1061, 3149, 1051, 1060, 3124, 3120, 3036, 3198, 3138, 3037, 3035, 9050, 3003, 3128 ],
    "bindingLevel" : "USER",
    "category" : [ 1 ],
    "creativeComponents" : {
      "selectList" : [ {
        "content" : [ {
          "key" : "example string",
          "value" : "example string",
          "id
```

</details>

---

### 查询创意组(高级样式)

**请求地址:** `https://api.baidu.com/json/sms/service/DanubeCreativeGroupService/getDanubeCreativeGroup`

**方法说明:** 查询创意组

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| pageNo | Integer | 页号 | 默认值：1 |
| pageSize | Integer | 单页大小 | 默认值：10最大值：100 |
| fields | String[] | 查询字段 | 取值范围：枚举值，列表如下materialTypes - 创意样式bindingRange - 投放范围该字段为空时默认查询全部信息除设置的查询字段外，以下字段固定返回：creativeGroupName, creativeGroupId, bindingLevel, device, status, pause |
| creativeGroupIds | Long[] | 创意组ID | 集合长度限制：[0, 100]指定创意组ID查询时，不支持分页 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| totalCount | Integer | 物料列表的总数 | - |
| fields | DanubeCreativeGroupType[] | 物料结果 | - |
| creativeGroupId | Long | 创意组ID | - |
| creativeGroupName | String | 创意组名称 | 长度限制：[1, 20]长度限制单位为字节，1个中文占用2个字节，1个英文或数字占用1个字节 |
| bindingRange | DanubeWebPlanRangeItemType[] | 绑定范围 | 支持绑定账户、计划、单元绑定账户时，只能绑定本账户，且不能设置计划和单元绑定绑定计划时，不能同时绑定该计划下的单元绑定单元时，需要填写所属计划ID最多绑定100个计划和1000个单元取值示例：绑定账户：[{"userId": 5962578}]绑定一个计划：[{"campaignId": 91100082}] 绑定一个单元：[{"adgroupId": 4502837792}] |
| materialTypes | Integer[] | 投放样式 | 取值范围：枚举值，列表如下3011 - 导航（计算机端）3015 - 图加导航（计算机端）1046 - 搜索头条（计算机端）3196 - 行行通（计算机端）3051 - 站内直达高级版（移动端）3017 - 综合导航（移动端）3010 - 文本导航（移动端）3008 - 站内直达（移动端）3041 - 搜索头条（移动端）3004 - 行行通（移动端）3007 - 站内直达（计算机端）11051 - 多品活动大图（计算机端）11050 - 单品活动大图（计算机端）3228 - 高级图文（计算机端）... |
| bindingLevel | String | 绑定层级 | 取值范围：枚举值，列表如下USER - 账户层级PLAN - 计划或单元层级只读 |
| category | Long[] | 行业 | 取值规则：按照所选行业，由总体行业至细分行业依次填写行业ID，例如：行业选择"安全安保">"安保服务"时，设置为[2880, 2881]全部行业信息可通过常量查询接口查询 |
| creativeComponents | DanubeCreativeComponent | 样式-组件信息 | 每种样式的构成组件和组件填写要求不同，目前支持的组件类型：category - 子链组件image - 图片组件selectList - 选择列表组件textList - 文字组件plas - 橱窗组件list - 列表组件支持的样式类型和各样式对组件的填写要求可通过高级样式内容填写文档查看 |
| device | Integer | 投放设备 | 取值范围：枚举值，列表如下0 - 全部1 - 移动2 - 计算机只读 |
| status | Integer | 状态 | 取值范围：枚举值，列表如下0 - 启用1 - 暂停2 - 删除3 - 审核不通过4 - 审核中只读 |
| pause | Boolean | 暂停状态 | 取值范围：枚举值，列表如下true - 暂停false - 启用 |
| userId | Long | 绑定账户ID | 只允许填本账户ID |
| campaignId | Long | 绑定计划ID | 查询时返回值0表示未设置 |
| adgroupId | Long | 绑定单元ID | 查询时返回值0表示未设置 |
| selectList | DanubeSelectListCreative[] | 选择列表组件 | - |
| plas | DanubePlasCreative[] | 橱窗组件 | - |
| category | DanubeCategoryCreative[] | 子链组件 | - |
| image | DanubeImageCreative[] | 图片组件 | - |
| textList | DanubeTextListCreative[] | 文字组件 | - |
| list | DanubeListCreative[] | 列表组件 | - |
| content | SelectList[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| key | String | 标签 | - |
| value | String | 属性值 | - |
| id | String | 组件ID | 只读 |
| content | Plas[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| name | String | 商品名称 | - |
| desc | String | 商品描述 | - |
| url | String | 商品链接 | - |
| swanUrl | String | 小程序链接 | - |
| deepLink | String | 调起链接 | - |
| image | Image[] | 商品图片 | - |
| id | String | 组件ID | 只读 |
| url | String | 图片链接 | 只读 |
| cutTop | Double | 图片裁剪上方坐标 | 只读 |
| cutLeft | Double | 图片裁剪左方坐标 | 只读 |
| cutWidth | Double | 图片裁剪宽度 | 只读 |
| cutHeight | Double | 图片裁剪高度 | 只读 |
| viewWidth | Double | 图片view宽度 | 只读 |
| viewHeight | Double | 图片view高度 | 只读 |
| originWidth | Double | 图片原始宽度 | 只读 |
| originHeight | Double | 图片原始高度 | 只读 |
| imageId | Long | 图片ID | 添加或修改图片组件时必填，查询创意组时将返回图片信息，不返回该字段可根据资产管理-图片管理-查询图片接口查询图片ID，对应结果中的imageId字段 |
| id | String | 组件ID | 只读 |
| content | Category | 组件内容 | 添加或修改子链组件时必填对于不同样式，组件内容填写规则有所不用，详情参考高级样式组件内容填写文档 |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| industry | String | 标签行业 | - |
| subLinks | SubLink[] | 子链 | - |
| label | String | 标签 | - |
| textLink | TextLink[] | 子链 | - |
| id | String | 组件ID | 只读 |
| content | Image[] | 组件内容 | 添加或修改图片组件时必填对于不同样式，组件内容填写规则有所不用，详情参考高级样式组件内容填写文档 |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| content | String[] | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| content | ListType | 组件内容 | - |
| mtId | Integer | 样式ID | 添加或修改样式组件内容时必填 |
| cnName | String | 样式中文名 | 只读 |
| enName | String | 样式英文名 | 只读 |
| style | String | 样式系列 | 取值范围：枚举值，列表如下NAVIGATION - 导航IMAGE_TEXT - 图文HOLOGRAPHY - 全息PLA - 橱窗LIST - 列表只读 |
| industry | String | 行业 | - |
| labels | String[] | 标签 | - |
| slogan | String | 点击跳转 | - |
| rows | ListRowType[] | 商品列 | - |
| maxCharNumByColumn | Integer[] | 每列的行数要求 | - |
| productName | String | 商品名称 | - |
| productUrl | String | 商品链接 | - |
| targetUrl | String | 跳转链接 | - |
| labels | String[] | 标签 | labels列表长度和ListType中labels列表长度保持一致 |
| swanUrl | String | 小程序url | - |
| deepLink | String | deeplink | - |
| id | String | 组件ID | 只读 |

<details>
<summary>请求示例</summary>

```json
{
  "pageNo" : 1,
  "pageSize" : 10,
  "fields" : [ "materialTypes", "bindingRange" ],
  "creativeGroupIds" : [ 1 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "totalCount" : 1,
    "fields" : [ {
      "creativeGroupName" : "example string",
      "bindingRange" : [ {
        "userId" : 1,
        "campaignId" : 1,
        "adgroupId" : 1
      } ],
      "materialTypes" : [ 3011, 3015, 1046, 3196, 3051, 3017, 3010, 3008, 3041, 3004, 3007, 11051, 11050, 3228, 3002, 3009, 11019, 3148, 1061, 3149, 1051, 1060, 3124, 3120, 3036, 3198, 3138, 3037, 3035, 9050, 3003, 3128 ],
      "bindingLevel" : "USER",
      "category" : [ 1 ],
      "creativeComponents" : {
        "selectList" : [ {
          "content" : [ {
            "key" : "e
```

</details>

---

### 高级样式列表

---

## oCPC投放管理

### 删除oCPC出价策略

**请求地址:** `https://api.baidu.com/json/sms/service/OcpcService/deleteTargetPackage`

**方法说明:** 根据oCPC出价策略ID删除oCPC出价策略

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| targetPackageIds 必填 | Long[] | oCPC出价策略ID集合 | 取值范围：[1, 100] |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| targetPackageId | Long | oCPC出价策略ID | 新增oCPC出价策略时，不填 |
| targetPackageName | String | oCPC出价策略名称 | 长度限制：[1, 20] |
| ocpcBidType | Integer | 优化模式 | 取值范围：枚举值，列表如下1 - 目标转化成本控制2 - 点击出价系数控制 |
| ocpcBid | Double | 目标转化出价（元/转化） | 取值范围：[0.01, 9999.00]单位（元）；优化模式ocpcBidType选1时该字段必填 |
| scope | TargetPackageBindInfo[] | 生效范围 | 标识该oCPC出价策略绑定的计划 |
| dataFlowData | TargetPackageDataflowInfo[] | 数据来源以及目标转化 | 说明1：以下数据源需要在搜索推广平台网页端-工具中心-转化追踪页面，进行新建；新建成功后，才能在oCPC投放中使用相应的数据源及转化类型； 1 - 网页JS布码 2 - 线索API 3 - 咨询工具授权 5 - 应用API 6 - 电话数据授权 7 - 百度智能小程序SDK 8 - 应用SDK说明2：基木鱼的转化类型需要在基木鱼平台进行新建，新建成功后，才能在oCPC投放中使用相应的数据源及转化类型说明3：度小店的转化类型需要在度小店平台进行新建，新建成功后，才能在oCPC投放中使用相应的数据源... |
| assistTransTypes | Integer[] | 深度转化类型 | 取值范围：枚举值，列表如下9 - 电商订单10 - 购买成功14 - 订单提交成功18 - 留线索25 - APP注册26 - APP付费28 - 次日留存30 - 电话拨通42 - 小额贷款授信49 - 注册激活后登录50 - 预约51 - 有意向客户52 - 深度使用72 - 聊到相关业务深度转化类型的投放逻辑与网页端一致，可参考网页端规则说明 |
| packageStatus | Integer | 出价策略状态 | 取值范围：枚举值，列表如下0 - 未生效1 - 投放中2 - 投放中（学习中）3 - 投放中（学习失败）4 - 投放中（学习结束） |
| ocpcDeepCpa | Double | 深度转化出价 | 取值范围：[0.01, 9999.00]当深度转化出价等于0时，深度出价方式为自动出价; 当深度转化出价大于0时，深度出价方式为自定义双出价 |
| deepTypeStat | Integer | 深度转化状态 | 取值范围：枚举值，列表如下1 - 未生效2 - 自动优化生效3 - 双出价生效4 - 双出价生效 |
| deepTransTypeMode | Integer | 优化深度转化 | 取值范围：枚举值，列表如下0 - 不使用1 - 优化转化行为2 - 优化ROI |
| levelId | Long | oCPC出价策略关联层级的ID | 计划ID |
| level | Integer | oCPC关联的层级 | level=2，当前仅支持计划层级 |
| dataFlow | Integer | 数据来源 | 取值范围：枚举值，列表如下1 - 网页JS布码2 - 线索API3 - 咨询工具授权4 - 基木鱼/度小店5 - 应用API6 - 电话数据授权7 - 百度智能小程序SDK8 - 应用SDK |
| transType | Integer[] | 目标转化 | 取值范围：枚举值，列表如下1 - 咨询按钮点击2 - 电话按钮点击3 - 表单提交成功4 - APP激活5 - 表单按钮点击6 - 下载（预约）按钮点击7 - 购买按钮点击8 - 短信咨询按钮点击9 - 电商订单10 - 购买成功12 - 预约按钮点击13 - 表单有效请求14 - 订单提交成功15 - 加入购物车按钮点击16 - 表单调起按钮点击17 - 三句话咨询18 - 留线索19 - 一句话咨询20 - 深度页面访问25 - APP注册26 - APP付费27 - 客户自定义28 - 次... |

<details>
<summary>请求示例</summary>

```json
{
  "targetPackageIds" : [ 100 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "targetPackageId" : 1,
    "targetPackageName" : "example string",
    "ocpcBidType" : 1,
    "ocpcBid" : 9999.0,
    "scope" : [ {
      "levelId" : 1,
      "level" : 1
    } ],
    "dataFlowData" : [ {
      "dataFlow" : 1,
      "transType" : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 40, 41, 42, 43, 46, 49, 50, 51, 52, 57, 61, 67, 68, 72, 99 ]
    } ],
    "assistTransTypes" : [ 9, 10, 14, 18, 25, 26, 28, 30, 42, 49, 50, 51, 52, 72 ],
    "packageStatus" : 0,
    "ocpcDeepCpa" : 9999.0,
    "deepTyp
```

</details>

---

### 新增oCPC出价策略

**请求地址:** `https://api.baidu.com/json/sms/service/OcpcService/addTargetPackage`

**方法说明:** 添加oCPC出价策略

2023年2月28日起，出价策略与推广计划转化目标设置规则升级，[详情点击了解](https://dev2.baidu.com/notice?noticeId=457)

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| targetPackageType 必填 | TargetPackageType[] | oCPC出价策略属性 | 取值范围：[1, 20] |
| targetPackageName  必填 | String | oCPC出价策略名称 | 长度限制：[1, 20] |
| ocpcBidType   必填 | Integer | 出价模式（原优化模式） | 取值范围：枚举值，列表如下1 - 目标转化成本（原目标转化成本控制）2 - 增强模式（原点击出价系数控制） |
| ocpcBid | Double | 目标转化出价（元/转化） | 取值范围：[0.01, 9999.00]单位（元）；优化模式ocpcBidType选1时该字段必填 |
| scope  必填 | TargetPackageBindInfo[] | 生效范围 | 标识该oCPC出价策略绑定的计划 |
| dataFlowData  必填 | TargetPackageDataflowInfo[] | 数据来源以及目标转化 | 说明1：以下数据源需要在搜索推广平台网页端-工具中心-转化追踪页面，进行新建；新建成功后，才能在oCPC投放中使用相应的数据源及转化类型； 1 - 网页JS布码 2 - 线索API 3 - 咨询工具授权 5 - 应用API 6 - 电话数据授权 7 - 百度智能小程序SDK 8 - 应用SDK说明2：基木鱼的转化类型需要在基木鱼平台进行新建，新建成功后，才能在oCPC投放中使用相应的数据源及转化类型说明3：度小店的转化类型需要在度小店平台进行新建，新建成功后，才能在oCPC投放中使用相应的数据源... |
| assistTransTypes | Integer[] | 深度转化类型 | 取值范围：枚举值，列表如下9 - 电商订单10 - 购买成功14 - 订单提交成功18 - 留线索25 - APP注册26 - APP付费28 - 次日留存30 - 电话拨通42 - 小额贷款授信49 - 注册激活后登录50 - 预约52 - 深度使用72 - 聊到相关业务深度转化类型的投放逻辑与网页端一致，可参考网页端规则说明 |
| ocpcDeepCpa | Double | 深度转化出价 | 取值范围：[0.01, 9999.00]当深度转化出价等于0时，深度出价方式为自动出价; 当深度转化出价大于0时，深度出价方式为自定义双出价 |
| deepTransTypeMode | Integer | 优化深度转化 | 取值范围：枚举值，列表如下0 - 不使用1 - 优化转化行为2 - 优化ROI |
| transAsset | Integer | 转化资产类型 | 取值范围：枚举值，列表如下0 - 不限1 - 资产类型2 - 指定资产 |
| transAssetId | Integer | 转化资产ID | 当transAsset=2时，transAssetId必填 |
| assetType | Integer[] | 资产类型 | 取值范围：枚举值，列表如下1 - 应用APP2 - 自建站3 - 基木鱼4 - 百度健康商城5 - 百度APP6 - 爱采购 |
| marketingTargetId | Integer | 营销目标 | 允许绑定的计划类型取值范围：枚举值，列表如下1 - 应用推广2 - 本地门店4 - 电商店铺5 - 商品目录7 - 销售线索 **对应可选的计划类型、转化目标与网页端一致，可参考网页端规则说明当前为选填项，默认为销售线索，2024年6月会升级为必填** |
| crowdDefinedOcpcBidRatio | ProjectCrowdDefinedBidRatio[] | 项目精细化出价-自定义人群 |  |
| ocpcBidRatioType 使用精细化出价必填 | Integer | 项目精细化出价类型 | 项目精细化出价类型:6 - 自定义人群 |
| crowdDirect  使用项目精细化出价-自定义人群必填 | Long | 选中人群id | 选中人群id |
| ratio 使用项目精细化出价-自定义人群必填 | Double | ocpcBid溢价系数 | ocpcBid溢价系数 |
| levelId  必填 | Long | oCPC出价策略关联层级的ID | 计划ID |
| level  必填 | Integer | oCPC关联的层级 | level=2，当前仅支持计划层级 |
| dataFlow  必填 | Integer | 数据来源 | 取值范围：枚举值，列表如下1 - 网页JS布码2 - 线索API3 - 咨询工具授权4 - 基木鱼/度小店5 - 应用API6 - 电话数据授权7 - 百度智能小程序SDK8 - 应用SDK |
| transType  必填 | Integer[] | 目标转化 | 取值范围：枚举值，列表如下1 - 咨询按钮点击2 - 电话按钮点击3 - 表单提交成功4 - APP激活5 - 表单按钮点击6 - 下载（预约）按钮点击7 - 购买按钮点击8 - 短信咨询按钮点击9 - 电商订单10 - 购买成功12 - 预约按钮点击13 - 表单有效请求14 - 订单提交成功15 - 加入购物车按钮点击16 - 表单调起按钮点击17 - 三句话咨询18 - 留线索19 - 一句话咨询20 - 深度页面访问25 - APP注册26 - APP付费27 - 客户自定义28 - 次... |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| targetPackageName | String | oCPC出价策略名称 | 长度限制：[1, 20] |
| ocpcBidType | Integer | 优化模式 | 取值范围：枚举值，列表如下1 - 目标转化成本控制2 - 点击出价系数控制 |
| ocpcBid | Double | 目标转化出价（元/转化） | 取值范围：[0.01, 9999.00]单位（元）；优化模式ocpcBidType选1时该字段必填 |
| scope | TargetPackageBindInfo[] | 生效范围 | 标识该oCPC出价策略绑定的计划 |
| dataFlowData | TargetPackageDataflowInfo[] | 数据来源以及目标转化 | 说明1：以下数据源需要在搜索推广平台网页端-工具中心-转化追踪页面，进行新建；新建成功后，才能在oCPC投放中使用相应的数据源及转化类型； 1 - 网页JS布码 2 - 线索API 3 - 咨询工具授权 5 - 应用API 6 - 电话数据授权 7 - 百度智能小程序SDK 8 - 应用SDK说明2：基木鱼的转化类型需要在基木鱼平台进行新建，新建成功后，才能在oCPC投放中使用相应的数据源及转化类型说明3：度小店的转化类型需要在度小店平台进行新建，新建成功后，才能在oCPC投放中使用相应的数据源... |
| assistTransTypes | Integer[] | 深度转化类型 | 取值范围：枚举值，列表如下9 - 电商订单10 - 购买成功14 - 订单提交成功18 - 留线索25 - APP注册26 - APP付费28 - 次日留存30 - 电话拨通42 - 小额贷款授信49 - 注册激活后登录50 - 预约52 - 深度使用72 - 聊到相关业务深度转化类型的投放逻辑与网页端一致，可参考网页端规则说明 |
| ocpcDeepCpa | Double | 深度转化出价 | 取值范围：[0.01, 9999.00]当深度转化出价等于0时，深度出价方式为自动出价; 当深度转化出价大于0时，深度出价方式为自定义双出价 |
| deepTransTypeMode | Integer | 优化深度转化 | 取值范围：枚举值，列表如下0 - 不使用1 - 优化转化行为2 - 优化ROI |
| transAsset | Integer | 转化资产类型 | 取值范围：枚举值，列表如下0 - 不限1 - 资产类型2 - 指定资产 |
| transAssetId | Integer | 转化资产ID |  |
| assetType | Integer[] | 资产类型 | 取值范围：枚举值，列表如下1 - 应用APP2 - 自建站3 - 基木鱼4 - 百度健康商城5 - 百度APP6 - 爱采购 |
| marketingTargetId | Integer | 营销目标 | 允许绑定的计划类型取值范围：枚举值，列表如下1 - 应用推广2 - 本地门店4 - 电商店铺5 - 商品目录7 - 销售线索 **对应可选的计划类型、转化目标与网页端一致，可参考网页端规则说明当前为选填项，默认为销售线索，2024年6月会升级为必填** |
| levelId | Long | oCPC出价策略关联层级的ID | 计划ID |
| level | Integer | oCPC关联的层级 | level=2，当前仅支持计划层级 |
| dataFlow | Integer | 数据来源 | 取值范围：枚举值，列表如下1 - 网页JS布码2 - 线索API3 - 咨询工具授权4 - 基木鱼/度小店5 - 应用API6 - 电话数据授权7 - 百度智能小程序SDK8 - 应用SDK |
| transType | Integer[] | 目标转化 | 取值范围：枚举值，列表如下1 - 咨询按钮点击2 - 电话按钮点击3 - 表单提交成功4 - APP激活5 - 表单按钮点击6 - 下载（预约）按钮点击7 - 购买按钮点击8 - 短信咨询按钮点击9 - 电商订单10 - 购买成功12 - 预约按钮点击13 - 表单有效请求14 - 订单提交成功15 - 加入购物车按钮点击16 - 表单调起按钮点击17 - 三句话咨询18 - 留线索19 - 一句话咨询20 - 深度页面访问25 - APP注册26 - APP付费27 - 客户自定义28 - 次... |

<details>
<summary>请求示例</summary>

```json
{
  "targetPackageType" : [ 
   {"targetPackageName" : "example string",
    "ocpcBidType" : 1,
    "ocpcBid" : 9999.0,
    "scope" : [ {
      "levelId" : 1,
      "level" : 1
    } ],
    "dataFlowData" : [ {
      "dataFlow" : 1,
      "transType" : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 40, 41, 42, 43, 46, 49, 50, 52, 57, 61, 67, 68, 72, 99 ]
    } ],
    "astat" : 0,
    "assistTransTypes" : [ 9, 10, 14, 18, 25, 26, 28, 30, 42, 49, 50, 52, 72 ],
    "packageStatus" : 0,
    "ocpcDeepCpa" : 9999.0,
    "deepTransType
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "targetPackageId" : 1,
    "targetPackageName" : "example string",
    "ocpcBidType" : 1,
    "ocpcBid" : 9999.0,
    "scope" : [ {
      "levelId" : 1,
      "level" : 1
    } ],
    "dataFlowData" : [ {
      "dataFlow" : 1,
      "transType" : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 40, 41, 42, 43, 46, 49, 50, 52, 57, 61, 67, 68, 72, 99 ]
    } ],
    "astat" : 0,
    "assistTransTypes" : [ 9, 10, 14, 18, 25, 26, 28, 30, 42, 49, 50, 52, 72 ],
    "packageStatus" : 0,
    "ocpcDeepCpa" : 9999.0,
   
```

</details>

---

### 更新oCPC出价策略

**请求地址:** `https://api.baidu.com/json/sms/service/OcpcService/updateTargetPackage`

**方法说明:** 编辑oCPC出价策略

2023年2月28日起，出价策略与推广计划转化目标设置规则升级，[详情点击了解](https://dev2.baidu.com/notice?noticeId=457)

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| targetPackageType 必填 | TargetPackageType[] | oCPC出价策略属性 | 取值范围：[1, 20] |
| targetPackageId  必填 | Long | oCPC出价策略ID | 新增oCPC出价策略时，不填 |
| targetPackageName | String | oCPC出价策略名称 | 长度限制：[1, 20] |
| ocpcBidType | Integer | 出价模式（原优化模式） | 取值范围：枚举值，列表如下1 - 目标转化成本（原目标转化成本控制）2 - 增强模式（原点击出价系数控制） |
| ocpcBid | Double | 目标转化出价（元/转化） | 取值范围：[0.01, 9999.00]单位（元）；优化模式ocpcBidType选1时该字段必填 |
| scope | TargetPackageBindInfo[] | 生效范围 | 标识该oCPC出价策略绑定的计划 |
| dataFlowData | TargetPackageDataflowInfo[] | 数据来源以及目标转化 | 说明1：以下数据源需要在搜索推广平台网页端-工具中心-转化追踪页面，进行新建；新建成功后，才能在oCPC投放中使用相应的数据源及转化类型； 1 - 网页JS布码 2 - 线索API 3 - 咨询工具授权 5 - 应用API 6 - 电话数据授权 7 - 百度智能小程序SDK 8 - 应用SDK说明2：基木鱼的转化类型需要在基木鱼平台进行新建，新建成功后，才能在oCPC投放中使用相应的数据源及转化类型说明3：度小店的转化类型需要在度小店平台进行新建，新建成功后，才能在oCPC投放中使用相应的数据源... |
| ocpcDeepCpa | Double | 深度转化出价 | 取值范围：[0.01, 9999.00]当深度转化出价等于0时，深度出价方式为自动出价; 当深度转化出价大于0时，深度出价方式为自定义双出价 |
| deepTransTypeMode | Integer | 优化深度转化 | 取值范围：枚举值，列表如下0 - 不使用1 - 优化转化行为2 - 优化ROI |
| transAsset | Integer | 转化资产类型 | 取值范围：枚举值，列表如下0 - 不限1 - 资产类型2 - 指定资产 |
| transAssetId | Integer | 转化资产ID | 当transAsset=2时，transAssetId必填 |
| assetType | Integer[] | 资产类型 | 取值范围：枚举值，列表如下1 - 应用APP2 - 自建站3 - 基木鱼4 - 百度健康商城5 - 百度APP6 - 爱采购 |
| crowdDefinedOcpcBidRatio | ProjectCrowdDefinedBidRatio[] | 项目精细化出价-自定义人群 |  |
| ocpcBidRatioType 使用精细化出价必填 | Integer | 项目精细化出价类型 | 项目精细化出价类型:6 - 自定义人群 |
| crowdDirect  使用自定义人群必填 | Long | 选中人群id | 选中人群id |
| ratio 使用自定义人群必填 | Double | ocpcBid溢价系数 | ocpcBid溢价系数 |
| levelId  必填 | Long | oCPC出价策略关联层级的ID | 计划ID |
| level  必填 | Integer | oCPC关联的层级 | level=2，当前仅支持计划层级 |
| dataFlow  必填 | Integer | 数据来源 | 取值范围：枚举值，列表如下1 - 网页JS布码2 - 线索API3 - 咨询工具授权4 - 基木鱼/度小店5 - 应用API6 - 电话数据授权7 - 百度智能小程序SDK8 - 应用SDK |
| transType  必填 | Integer[] | 目标转化 | 取值范围：枚举值，列表如下1 - 咨询按钮点击2 - 电话按钮点击3 - 表单提交成功4 - APP激活5 - 表单按钮点击6 - 下载（预约）按钮点击7 - 购买按钮点击8 - 短信咨询按钮点击9 - 电商订单10 - 购买成功12 - 预约按钮点击13 - 表单有效请求14 - 订单提交成功15 - 加入购物车按钮点击16 - 表单调起按钮点击17 - 三句话咨询18 - 留线索19 - 一句话咨询20 - 深度页面访问25 - APP注册26 - APP付费27 - 客户自定义28 - 次... |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| targetPackageId | Long | oCPC出价策略ID | 新增oCPC出价策略时，不填 |
| targetPackageName | String | oCPC出价策略名称 | 长度限制：[1, 20] |
| ocpcBidType | Integer | 优化模式 | 取值范围：枚举值，列表如下1 - 目标转化成本控制2 - 点击出价系数控制 |
| ocpcBid | Double | 目标转化出价（元/转化） | 取值范围：[0.01, 9999.00]单位（元）；优化模式ocpcBidType选1时该字段必填 |
| scope | TargetPackageBindInfo[] | 生效范围 | 标识该oCPC出价策略绑定的计划 |
| ocpcDeepCpa | Double | 深度转化出价 | 取值范围：[0.01, 9999.00]当深度转化出价等于0时，深度出价方式为自动出价; 当深度转化出价大于0时，深度出价方式为自定义双出价 |
| deepTransTypeMode | Integer | 优化深度转化 | 取值范围：枚举值，列表如下0 - 不使用1 - 优化转化行为2 - 优化ROI |
| transAsset | Integer | 转化资产类型 | 取值范围：枚举值，列表如下0 - 不限1 - 资产类型2 - 指定资产 |
| transAssetId | Integer | 转化资产ID |  |
| assetType | Integer[] | 资产类型 | 取值范围：枚举值，列表如下1 - 应用APP2 - 自建站3 - 基木鱼4 - 百度健康商城5 - 百度APP6 - 爱采购 |
| levelId | Long | oCPC出价策略关联层级的ID | 计划ID |
| level | Integer | oCPC关联的层级 | level=2，当前仅支持计划层级 |
| dataFlow | Integer | 数据来源 | 取值范围：枚举值，列表如下1 - 网页JS布码2 - 线索API3 - 咨询工具授权4 - 基木鱼/度小店5 - 应用API6 - 电话数据授权7 - 百度智能小程序SDK8 - 应用SDK |
| transType | Integer[] | 目标转化 | 取值范围：枚举值，列表如下1 - 咨询按钮点击2 - 电话按钮点击3 - 表单提交成功4 - APP激活5 - 表单按钮点击6 - 下载（预约）按钮点击7 - 购买按钮点击8 - 短信咨询按钮点击9 - 电商订单10 - 购买成功12 - 预约按钮点击13 - 表单有效请求14 - 订单提交成功15 - 加入购物车按钮点击16 - 表单调起按钮点击17 - 三句话咨询18 - 留线索19 - 一句话咨询20 - 深度页面访问25 - APP注册26 - APP付费27 - 客户自定义28 - 次... |

<details>
<summary>请求示例</summary>

```json
{
  "targetPackageType" : [
   {"targetPackageName" : "example string",
    "ocpcBidType" : 1,
    "ocpcBid" : 9999.0,
    "scope" : [ {
      "levelId" : 1,
      "level" : 1
    } ],
    "dataFlowData" : [ {
      "dataFlow" : 1,
      "transType" : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 40, 41, 42, 43, 46, 49, 50, 52, 57, 61, 67, 68, 72, 99 ]
    } ],
    "assistTransTypes" : [ 9, 10, 14, 18, 25, 26, 28, 30, 42, 49, 50, 52, 72 ],
    "packageStatus" : 0,
    "ocpcDeepCpa" : 9999.0,
    "deepTypeStat" : 1,
    "deepTra
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "targetPackageId" : 1,
    "targetPackageName" : "example string",
    "ocpcBidType" : 1,
    "ocpcBid" : 9999.0,
    "scope" : [ {
      "levelId" : 1,
      "level" : 1
    } ],
    "dataFlowData" : [ {
      "dataFlow" : 1,
      "transType" : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 40, 41, 42, 43, 46, 49, 50, 52, 57, 61, 67, 68, 72, 99 ]
    } ],
    "assistTransTypes" : [ 9, 10, 14, 18, 25, 26, 28, 30, 42, 49, 50, 52, 72 ],
    "packageStatus" : 0,
    "ocpcDeepCpa" : 9999.0,
    "deepTypeStat" :
```

</details>

---

### 查询oCPC出价策略

**请求地址:** `https://api.baidu.com/json/sms/service/OcpcService/getTargetPackageList`

**方法说明:** 获取oCPC出价策略列表

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| targetPackageTypeFields | String[] | 不请求的属性没有返回值，请求的字段名为TargetPackageType中的属性名 | 取值范围：枚举值，列表如下targetPackageId - oCPC出价策略IDtargetPackageName - oCPC出价策略名称ocpcBid - 目标转化出价（元/转化）ocpcBidType - 出价模式（原优化模式）scope - 生效范围dataFlowData - 数据来源以及目标转化assistTransTypes - 深度转化类型ocpcDeepCpa - 深度转化出价packageStatus - 出价策略状态deepTypeStat - 深度转化状态deepTra... |
| ids | Long[] | 查询层级level为1，此值填写userId，返回userId下所有的oCPC出价策略信息; 查询层级level为2，此值填写oCPC出价策略ID数组 | - |
| level | Integer | 查询层级 | 取值范围：枚举值，列表如下1 - 账户2 - oCPC出价策略 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| targetPackageId | Long | oCPC出价策略ID | 新增oCPC出价策略时，不填 |
| targetPackageName | String | oCPC出价策略名称 | 长度限制：[1, 20] |
| ocpcBidType | Integer | 出价模式（原优化模式） | 取值范围：枚举值，列表如下1 - 目标转化成本（原目标转化成本控制）2 - 增强模式（原点击出价系数控制） |
| ocpcBid | Double | 目标转化出价（元/转化） | 取值范围：[0.01, 9999.00]单位（元）；优化模式ocpcBidType选1时该字段必填 |
| scope | TargetPackageBindInfo[] | 生效范围 | 标识该oCPC出价策略绑定的计划 |
| dataFlowData | TargetPackageDataflowInfo[] | 数据来源以及目标转化 | 说明1：以下数据源需要在搜索推广平台网页端-工具中心-转化追踪页面，进行新建；新建成功后，才能在oCPC投放中使用相应的数据源及转化类型； 1 - 网页JS布码 2 - 线索API 3 - 咨询工具授权 5 - 应用API 6 - 电话数据授权 7 - 百度智能小程序SDK 8 - 应用SDK说明2：基木鱼的转化类型需要在基木鱼平台进行新建，新建成功后，才能在oCPC投放中使用相应的数据源及转化类型说明3：度小店的转化类型需要在度小店平台进行新建，新建成功后，才能在oCPC投放中使用相应的数据源... |
| assistTransTypes | Integer[] | 深度转化类型 | 取值范围：枚举值，列表如下9 - 电商订单10 - 购买成功14 - 订单提交成功18 - 留线索25 - APP注册26 - APP付费28 - 次日留存30 - 电话拨通42 - 小额贷款授信49 - 注册激活后登录50 - 预约52 - 深度使用72 - 聊到相关业务深度转化类型的投放逻辑与网页端一致，可参考网页端规则说明 |
| packageStatus | Integer | 出价策略状态 | 取值范围：枚举值，列表如下0 - 未生效1 - 投放中2 - 投放中（学习中）3 - 投放中（学习失败）4 - 投放中（学习结束） |
| ocpcDeepCpa | Double | 深度转化出价 | 取值范围：[0.01, 9999.00]当深度转化出价等于0时，深度出价方式为自动出价; 当深度转化出价大于0时，深度出价方式为自定义双出价 |
| deepTypeStat | Integer | 深度转化状态 | 取值范围：枚举值，列表如下1 - 未生效2 - 自动优化生效3 - 双出价生效4 - 双出价生效 |
| deepTransTypeMode | Integer | 优化深度转化 | 取值范围：枚举值，列表如下0 - 不使用1 - 优化转化行为2 - 优化ROI |
| transAsset | Integer | 转化资产类型 | 取值范围：枚举值，列表如下0 - 不限1 - 资产类型2 - 指定资产 |
| transAssetId | Long | 转化资产ID |  |
| assetType | Integer[] | 资产类型 | 取值范围：枚举值，列表如下1 - 应用APP2 - 自建站3 - 基木鱼4 - 百度健康商城5 - 百度APP6 - 爱采购 |
| crowdDefinedOcpcBidRatio | ProjectCrowdDefinedBidRatio[] | 项目精细化出价-自定义人群 |  |
| ocpcBidRatioType 使用精细化出价必填 | Integer | 项目精细化出价类型 | 项目精细化出价类型:6 - 自定义人群 |
| crowdDirect  使用项目精细化出价-自定义人群必填 | Long | 选中人群id | 选中人群id |
| ratio 使用项目精细化出价-自定义人群必填 | Double | ocpcBid溢价系数 | ocpcBid溢价系数 |
| levelId | Long | oCPC出价策略关联层级的ID | 计划ID |
| level | Integer | oCPC关联的层级 | level=2，当前仅支持计划层级 |
| dataFlow | Integer | 数据来源 | 取值范围：枚举值，列表如下1 - 网页JS布码2 - 线索API3 - 咨询工具授权4 - 基木鱼/度小店5 - 应用API6 - 电话数据授权7 - 百度智能小程序SDK8 - 应用SDK |
| transType | Integer[] | 目标转化 | 取值范围：枚举值，列表如下1 - 咨询按钮点击2 - 电话按钮点击3 - 表单提交成功4 - APP激活5 - 表单按钮点击6 - 下载（预约）按钮点击7 - 购买按钮点击8 - 短信咨询按钮点击10 - 购买成功14 - 订单提交成功17 - 三句话咨询18 - 留线索20 - 深度页面访问25 - APP注册26 - APP付费27 - 客户自定义28 - 次日留存30 - 电话拨通35 - 微信复制按钮点击41 - 申请小额贷款42 - 小额贷款授信46 - 加入购物车49 - 注册激活后... |

<details>
<summary>请求示例</summary>

```json
{
  "targetPackageTypeFields" : [ "targetPackageId", "targetPackageName", "ocpcBid", "ocpcBidType", "scope", "dataFlowData",  "assistTransTypes", "ocpcDeepCpa", "packageStatus", "deepTypeStat", "deepTransTypeMode", "transAsset", "transAssetId" ],
  "ids" : [ 1 ],
  "level" : 1
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "targetPackageId" : 1,
    "targetPackageName" : "example string",
    "ocpcBidType" : 1,
    "ocpcBid" : 9999.0,
    "scope" : [ {
      "levelId" : 1,
      "level" : 1
    } ],
    "dataFlowData" : [ {
      "dataFlow" : 1,
      "transType" : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 40, 41, 42, 43, 46, 49, 50,, 52, 57, 61, 67, 68, 72, 99 ]
    } ],
    "assistTransTypes" : [ 9, 10, 14, 18, 25, 26, 28, 30, 42, 49, 50,  52, 72 ],
    "packageStatus" : 0,
    "ocpcDeepCpa" : 9999.0,
    "deepTypeStat"
```

</details>

---

### 获取目标转化建议出价

**请求地址:** `https://api.baidu.com/json/sms/service/FcOcpcService/getSuggestCPAs`

**方法说明:** 获取建议CPA，包括行业CPA推荐值、历史生效范围CPA推荐值、ecpc建议最高出价系数

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| fields | String[] | 请求字段 | 取值范围：枚举值，列表如下tradeSuggestCpa - 基于客户所在行业投放效果数据推荐CPAnoThresholdSuggestCpa - 基于计划过去一周效果数据推荐CPA |
| dataFlow | Integer[] | 数据来源 | 取值范围：枚举值，列表如下1 - 网页JS布码2 - 线索API3 - 咨询工具授权4 - 基木鱼/度小店5 - 应用API6 - 电话数据授权7 - 百度智能小程序SDK8 - 应用SDK |
| transTypes | Integer[] | 转化类型 | 取值范围：枚举值，列表如下1 - 咨询按钮点击2 - 电话按钮点击3 - 表单提交成功4 - APP激活5 - 表单按钮点击6 - 下载（预约）按钮点击7 - 购买按钮点击8 - 短信咨询按钮点击9 - 电商订单10 - 购买成功12 - 预约按钮点击13 - 表单有效请求14 - 订单提交成功15 - 加入购物车按钮点击16 - 表单调起按钮点击17 - 三句话咨询18 - 留线索19 - 一句话咨询20 - 关键页面浏览25 - APP注册26 - APP付费27 - 客户自定义28 - 次... |
| campaignIds | Long[] | 生效范围，计划ID集合 | 数据来源：[查询计划接口](https://dev2.baidu.com/content?sceneType=0&pageId=100260&nodeId=198&subhead=) |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| tradeSuggestCpa | Double | 基于客户所在行业投放效果数据推荐CPA | - |
| noThresholdSuggestCpa | Double | 基于计划过去一周效果数据推荐CPA | - |

<details>
<summary>请求示例</summary>

```json
{
  "fields" : [ "tradeSuggestCpa", "noThresholdSuggestCpa", ],
  "dataFlow" : [ 1, 2, 3, 4, 5, 6, 7, 8 ],
  "transTypes" : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 40, 41, 42, 43, 46, 49, 50, 51, 52, 56, 57, 61, 67, 68, 72, 99 ],
  "campaignIds" : [ 1 ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "data" : [ {
    "tradeSuggestCpa" : 1.100000023841858,
    "noThresholdSuggestCpa" : 1.100000023841858
  } ]
}
```

</details>

---

### 获取目标转化建议出价和胜出率

**请求地址:** `https://api.baidu.com/json/sms/service/CampaignEstimatedService/getProjectBidReference`

**方法说明:** 获取项目建议目标转化出价和胜出率，目前只支持机械设备、商务服务、化工能源、电子电工、房产家居、生活服务、网络服务、软件、教育培训、物流等10个行业。

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| estimatedBidType | Integer | 场景 | 取值范围：枚举值，列表如下1- 新建场景2- 修改场景 |
| planIdList | Long [] | 计划id集合 | 新建场景，传计划id |
| projectIdList | Long [] | 项目id集合 | 修改场景，传项目id |
| transtype | Integer[] | 转化类型 | 取值范围：枚举值，列表如下1 - 咨询按钮点击2 - 电话按钮点击3 - 表单提交成功4 - APP激活5 - 表单按钮点击6 - 下载（预约）按钮点击7 - 购买按钮点击8 - 短信咨询按钮点击9 - 电商订单10 - 购买成功12 - 预约按钮点击13 - 表单有效请求14 - 订单提交成功15 - 加入购物车按钮点击16 - 表单调起按钮点击17 - 三句话咨询18 - 留线索19 - 一句话咨询20 - 关键页面浏览25 - APP注册26 - APP付费27 - 客户自定义28 - 次... |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| inDeepStage | Double | 是否处于深层阶段 | - |
| multiCategory | Double | 是否为多业务点 | - |
| currentWeekCv | Double | 当前近一周cv | - |
| diffLevel | Integer | 不同业务点间的差异 | 取值范围：枚举值，列表如下1- 差异小2- 差异大 |
| diagnosicAdvice | DiagnosicAdviceType[] | 目标转化出价和胜出率 | - |
| hitDims | HitDimsType[] | 行业信息 | - |
| levelDataList | LevelData[] | 目标转化出价和胜出率 |  |
| hitTrade | String | 行业 | - |
| hitCategory | String | 业务点 |  |
| bidQuantileRank | Double | 胜出率 | - |
| bidQuantileValue | Double | 目标转化出价 | - |
| effectClick | Double | 出价分位数对应的出价 | - |

<details>
<summary>请求示例</summary>

```json
{
    "estimatedBidType": 2,
    "planIdList": [
        1663918861
    ],
    "transtype": "26"
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
    "data": [
        {
            "inDeepStage": false,
            "multiCategory": true,
            "currentWeekCv": 0.0,
            "diffLevel": 1,
            "diagnosicAdvice": [
                {
                    "hitDims": {
                        "hitTrade": "便民回收",
                        "hitCategory": "电脑回收"
                    },
                    "levelDataList": [
                        {
                            "bidQuantileRank": 0.1,
                            "bidQuantileValue": 53.0,
                            "effectClick": 0.0
                        },
 
```

</details>

---

## 优化排名出价策略

### 删除优化排名出价策略

**请求地址:** `https://api.baidu.com/json/sms/service/PriceStrategyService/deletePriceStrategy`

**方法说明:** 删除出价策略

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| strategyIds | Long[] | 待删除出价策略ID列表 | 长度限制：[1, 100] |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| strategyId | Long | 出价策略ID |  |
| strategyName | String | 出价策略名称 |  |
| strategyType | Integer | 出价策略类型 |  |
| targetRank | Integer | 排名目标 |  |
| priceFactor | Double | 出价系数范围 |  |
| isPause | Boolean | 是否开启出价策略，默认开启 |  |

<details>
<summary>请求示例</summary>

```json
{
  "strategyIds" : [123456]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
  "body" : {
    "data" : [ {
      "strategyName" : "出价策略",
      "strategyType" : 0,
      "targetRank" : 0,
      "priceFactor" : 7.32,
    } ]
  }
}
```

</details>

---

### 更新优化排名出价策略

**请求地址:** `https://api.baidu.com/json/sms/service/PriceStrategyService/updatePriceStrategy`

**方法说明:** 更新出价策略

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| priceStrategyTypes | PriceStrategyType[] | 出价策略对象 | - |
| strategyId  必填 | Long | 出价策略ID | - |
| strategyName | String | 出价策略名称 | 最小2个字符，最大20个字符 |
| targetRank | Integer | 排名目标 | 取值范围：枚举值，列表如下0 - 上方位首位1 - 上方位 |
| priceFactor | Double | 出价系数范围 | 取值范围：[1.01, 10.00] |
| isPause | Boolean | 是否开启出价策略，默认开启 | 取值范围：枚举值，列表如下true - 关闭出价策略false - 开启出价策略 |
| priceStrategyCampaignTypes | PriceStrategyCampaignType [] | 策略和计划的绑定信息 |  |
| strategyCampaignId | Long | 出价策略和计划绑定id |  |
| strategyId | Long | 出价策略id |  |
| campaignId | Long | 计划id |  |
| campaignName | String | 计划名称 |  |
| isDelete | Boolean | 是否删除 | 取值范围：枚举值，列表如下true-删除false-不删除 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| strategyId | Long | 出价策略ID |  |
| strategyName | String | 出价策略名称 |  |
| targetRank | Integer | 排名目标 |  |
| priceFactor | Double | 出价系数范围 |  |
| isPause | Boolean | 是否开启出价策略，默认开启 |  |
| priceStrategyCampaignTypes | PriceStrategyCampaignType [] | 策略和计划的绑定信息 |  |
| strategyCampaignId | Long | 出价策略和计划绑定id |  |
| strategyId | Long | 出价策略id |  |
| campaignName | String | 计划名称 |  |
| isDelete | Boolean | 是否删除 | 取值范围：枚举值，列表如下true-删除false-不删除 |

<details>
<summary>请求示例</summary>

```json
{
    "priceStrategyTypes": [
        {
            "strategyId": 5340027,
            "strategyName": "出价策略111",
            "strategyType": 0,
            "targetRank": 0,
            "priceFactor": 8.88,
            "isPause": true,
            "priceStrategyCampaignTypes": [
                {
                    "campaignId": 1688937794
                }
            ]
        }
    ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
    "data": [
        {
            "index": 5340027,
            "userId": 630152,
            "strategyId": 5340027,
            "strategyName": "出价策略111",
            "strategyType": 0,
            "targetRank": 0,
            "priceFactor": 8.88,
            "targetUrl": "",
            "subType": 0,
            "isPause": true,
            "strategyLevel": 3,
            "priceStrategyCampaignTypes": [
                {
                    "strategyCampaignId": 849856898,
                    "strategyId": 5340027,
                    "campaignId": 1688937794,
                    "isDele
```

</details>

---

### 查询优化排名出价策略

**请求地址:** `https://api.baidu.com/json/sms/service/PriceStrategyService/getPriceStrategy`

**方法说明:** 查询出价策略

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| fields | String[] | 查询字段 | 取值范围：枚举值，列表如下isPause - 状态 targetRank - 排名目标strategyId - 策略IDstrategyName - 策略名称strategyType - 策略类型priceFactor - 出价系数priceStrategyCampaignTypes - 策略绑定的计划 |
| strategyTypes 必填 | Integer[] | 出价策略类型 | 取值范围：枚举值，列表如下0 - 优化排名 |
| ids  必填 | Long[] | 策略id集合 | - |
| idType | Integer | 查询层级 | 32 - 出价策略层级 |
| strategyLevels | Integer | 策略绑定层级 | 3 - 计划层级 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| strategyId | Long | 出价策略ID |  |
| strategyName | String | 出价策略名称 |  |
| strategyType | Integer | 出价策略类型 取值范围：枚举值，列表如下0-优化排名 |  |
| targetRank | Integer | 排名目标 取值范围：枚举值，列表如下0-上方位首位1-上方位 |  |
| priceFactor | Double | 出价系数范围 |  |
| isPause | Boolean | 是否开启出价策略，默认开启 |  |
| priceStrategyCampaignTypes | PriceStrategyCampaignType [] | 计划和策略的绑定关系 |  |
| strategyCampaignId | Long | 出价策略和计划绑定id |  |
| strategyId | Long | 出价策略id |  |
| campaignId | Long | 计划id |  |
| campaignName | String | 计划名称 |  |
| isDelete | Boolean | 是否删除 | 取值范围：枚举值，列表如下true-删除false-不删除 |

<details>
<summary>请求示例</summary>

```json
{
  "fields" : ["strategyType","priceFactor","targetRank","strategyName","priceStrategyCampaignTypes","isPause"],
  "strategyTypes" : [ "0" ],
  "ids" : [5320696],
  "strategyLevels" : [3],
  "idType" : 32
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
    "data": [
        {
            "index": 5320696,
            "userId": 630152,
            "strategyId": 5320696,
            "strategyName": "品牌盯排名",
            "strategyType": 0,
            "targetRank": 0,
            "priceFactor": 4.0,
            "isPause": false,
            "priceStrategyCampaignTypes": [
                {
                    "strategyCampaignId": 849840275,
                    "strategyId": 5320696,
                    "campaignId": 1655811642,
                    "campaignName": "移动-黄金回收BEF",
                    "isDelete": false,
                    "id": 8
```

</details>

---

### 添加优化排名出价策略

**请求地址:** `https://api.baidu.com/json/sms/service/PriceStrategyService/addPriceStrategy`

**方法说明:** 新增出价策略

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| priceStrategyTypes | PriceStrategyType[] | 出价策略对象 | - |
| strategyName  必填 | String | 出价策略名称 | 最小2个字符，最大20个字符 |
| strategyType  必填 | Integer | 出价策略类型 | 取值范围：枚举值，列表如下0 - 优化排名 |
| targetRank | Integer | 排名目标 | 取值范围：枚举值，列表如下0 - 上方位首位1 - 上方位 |
| priceFactor  必填 | Double | 出价系数范围 | 取值范围：[1.01, 10.00] |
| strategyLevel  必填 | Integer | 策略层级 | 取值范围：3 - 计划层级 |
| priceStrategyCampaignTypes  必填 | PriceStrategyCampaignType [] | 策略和计划的绑定信息 |  |
| strategyCampaignId | Long | 出价策略和计划绑定id |  |
| strategyId | Long | 出价策略id |  |
| campaignId  必填 | Long | 计划id |  |
| campaignName | String | 计划名称 |  |
| isDelete | Boolean | 是否删除 | 取值范围：枚举值，列表如下true-删除false-不删除 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| id | Long | 策略id |  |
| userId | Long | userid |  |
| strategyId | Long | 策略id |  |
| strategyName | String | 出价策略名称 |  |
| strategyType | Integer | 出价策略类型 |  |
| targetRank | Integer | 排名目标 |  |
| priceFactor | Double | 出价系数范围 |  |
| isPause | Boolean | 是否开启出价策略 |  |
| strategyLevel | Integer | 出价策略的层级 |  |
| priceStrategyCampaignTypes | PriceStrategyCampaignType [] | 策略和计划的绑定信息 |  |

<details>
<summary>请求示例</summary>

```json
{
    "priceStrategyTypes": [
        {
            "strategyName": "133",
            "targetRank": 0,
            "priceFactor": "1.2",
            "strategyLevel": "3",
            "strategyType": "0",
            "priceStrategyCampaignTypes": [
                {
                    "campaignId": 1655573547
                }
            ]
        }
    ]
}
```

</details>

<details>
<summary>返回示例</summary>

```json
{
    "data": [
        {
            "index": 0,
            "userId": 630152,
            "strategyId": 5340027,
            "strategyName": "133",
            "strategyType": 0,
            "targetRank": 0,
            "priceFactor": 1.2,
            "subType": 0,
            "isPause": false,
            "strategyLevel": 3,
            "priceStrategyCampaignTypes": [
                {
                    "strategyCampaignId": 849856814,
                    "strategyId": 5340027,
                    "campaignId": 1655573547,
                    "isDelete": false,
                    "id": 8
```

</details>

---

## 转化追踪

### 查询转化追踪

**请求地址:** `https://api.baidu.com/json/sms/service/FcTransTraceApiService/getFcTransTraceList`

**方法说明:** 查询转化追踪

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| transName | String | 转化追踪名称 | - |
| traceTargetList | Integer[] | 追踪目标 | 1-网站 2-APP 3-小程序 |
| transModeList | Integer[] | 接入方式 | 4-线索API 6-咨询工具授权 7-网站JS布码 8-应用API 9-电话数据授权 10-百度智能小程序SDK 11-应用SDK 23-百度统计网站导入 24-百度统计小程序导入 |
| transStatusList | Integer[] | 转化配置状态 | 0-联调成功 1-联调失败 2-联调等待 3-无需联调 |
| limit | Integer[] | 分页查询 | [偏移量, 最大数目] |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| fields | FcTransTraceType[] | 返回查询的转化追踪 | - |
| totalCount | Integer | 总条数 | - |

<details>
<summary>请求示例</summary>

```json
{"transName":"example string","traceTargetList":[1,2,3],"transModeList":[4,6,7,8,9,10,11,23,24],"transStatusList":[0,1,2,3],"limit":[1]}
```

</details>

<details>
<summary>返回示例</summary>

```json
{"data":{"fields":[{...}],"totalCount":0}}
```

</details>

---

### 新建转化追踪

**请求地址:** `https://api.baidu.com/json/sms/service/FcTransTraceApiService/addFcTransTrace`

**方法说明:** 新增转化追踪，仅支持transMode=8(应用API)与transMode=11(应用SDK)

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| transMode 必填 | Integer | 接入方式 | 仅支持8-应用API, 11-应用SDK |
| transName 必填 | String | 转化名称 | 长度[1,50]，不可重复 |
| transType 必填 | Integer[] | 转化类型 | transMode=8时可选4,25,26,27,28,52; transMode=11时可选4,25,26,28 |
| appType | Integer | 应用类型 | 0-iOS和Android 1-仅iOS 2-仅Android |
| monitorUrl | String | 监测地址 | transMode=8必填, 须含{{CALLBACK_URL}} |
| campaignIds | Long[] | 绑定的计划id | transMode=8,11时必填 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| data | Long | 转化追踪ID | - |

<details>
<summary>请求示例</summary>

```json
{"transMode":8,"transName":"example","transType":[4],"appType":0,"monitorUrl":"https://...","campaignIds":[1]}
```

</details>

<details>
<summary>返回示例</summary>

```json
{"data":1}
```

</details>

---

### 更新转化追踪

**请求地址:** `https://api.baidu.com/json/sms/service/FcTransTraceApiService/updateFcTransTrace`

**方法说明:** 修改转化追踪

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| transId 必填 | Long | 转化追踪ID | - |
| transMode 必填 | Integer | 接入方式 | - |
| transName 必填 | String | 转化名称 | 长度[1,50]，不可重复 |
| transType | Integer[] | 转化类型 | 被oCPC使用时仅支持新增 |
| monitorUrl | String | 监测地址 | 被oCPC使用时不可修改 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| data | Long | - | - |

<details>
<summary>请求示例</summary>

```json
{"transId":1,"transMode":8,"transName":"example","transType":[4],"monitorUrl":"https://..."}
```

</details>

<details>
<summary>返回示例</summary>

```json
{"data":1}
```

</details>

---

### 删除转化追踪

**请求地址:** `https://api.baidu.com/json/sms/service/FcTransTraceApiService/deleteFcTransTrace`

**方法说明:** 删除转化追踪

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| trans 必填 | FcTransIdAndTransMode[] | 要删除的转化追踪 | 集合长度[1,100] |
| transId | Long | 转化追踪id | - |
| transMode | Integer | 接入方式 | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| data | Long[] | 结果 | - |

<details>
<summary>请求示例</summary>

```json
{"trans":[{"transId":1,"transMode":8}]}
```

</details>

<details>
<summary>返回示例</summary>

```json
{"data":[]}
```

</details>

---

## 物料查询服务

### 按标签查询物料id

**请求地址:** `https://api.baidu.com/json/sms/service/SearchService/getIdsByTabs`

**方法说明:** 筛选特定标签下的关键词/创意ID

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| tabIds 必填 | Integer[] | 标签ID | 集合长度[1,30]，每个ID取值1-30 |
| idType 必填 | Integer | 物料ID类型 | 11-关键词层级 7-创意层级 |
| page | Integer | 分页数 | 默认1，每页最多10000条 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| ids | Long[] | 物料ID | - |
| hasMore | Boolean | 是否还有更多 | - |

<details>
<summary>请求示例</summary>

```json
{"tabIds":[1],"idType":7,"page":1}
```

</details>

<details>
<summary>返回示例</summary>

```json
{"data":[{"ids":[123],"hasMore":true}]}
```

</details>

---

### 条件查询物料信息

**请求地址:** `https://api.baidu.com/json/sms/service/SearchService/getMaterialInfoBySearch`

**方法说明:** 查询包含指定字面的计划、单元、关键词等信息

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| searchWord 必填 | String | 查询字面 | 最大40字节 |
| startNum | Integer | 起始序号 | 默认1 |
| endNum | Integer | 结束序号 | 默认100，单次最多10000 |
| searchType 必填 | Integer | 查询类型 | 0-模糊 1-精确 |
| searchLevel 必填 | Integer | 查询层级 | 0-计划 1-单元 2-关键词 |
| materialFields | String[] | 查询字段 | 不同层级支持不同字段 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| moreMaterial | Integer | 是否还有更多 | 1-有 0-无 |
| materialSearchInfos | MaterialSearchInfo[] | 物料信息列表 | - |

<details>
<summary>请求示例</summary>

```json
{"searchWord":"123","searchType":0,"searchLevel":2}
```

</details>

<details>
<summary>返回示例</summary>

```json
{"data":[{"moreMaterial":0,"materialSearchInfos":[{"materialInfos":["154866294"]}]}]}
```

</details>

---

### 条件查询关键词id

**请求地址:** `https://api.baidu.com/json/sms/service/SearchService/getKeywordIdBySearch`

**方法说明:** 根据质量度、状态筛选关键词ID

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| campaignIds | Long[] | 计划ID | 空=所有计划 |
| page | Integer | 分页数 | 默认1，每页最多10000 |
| pcQuality | Integer[] | PC质量度 | 取值范围[1,10] |
| mobileQuality | Integer[] | 移动质量度 | 取值范围[1,10] |
| status | Integer[] | 关键词状态 | 40-有效 41-有效 42-暂停 43-审核不通过等 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| keywordIds | Long[] | 关键词ID | - |
| hasMore | Boolean | 是否还有更多 | - |

<details>
<summary>请求示例</summary>

```json
{"pcQuality":[6],"mobileQuality":[6],"status":[40,41,42]}
```

</details>

<details>
<summary>返回示例</summary>

```json
{"data":[{"keywordIds":[123],"hasMore":false}]}
```

</details>

---

### 条件查询创意id

**请求地址:** `https://api.baidu.com/json/sms/service/SearchService/getCreativeIdBySearch`

**方法说明:** 根据审核状态筛选创意id

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| campaignIds | Long[] | 筛选的计划ID | 空=所有计划 |
| page | Integer | 分页数 | 默认1，每页最多10000 |
| status 必填 | Integer[] | 创意状态 | 51-有效 52-暂停 53-审核不通过 54-待激活 55-审核中 56-部分无效 57-有效-移动URL审核中 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| creativeIds | Long[] | 创意ID | - |
| hasMore | Boolean | 是否还有更多 | - |

<details>
<summary>请求示例</summary>

```json
{"status":[51,52,53,54,55,56,57]}
```

</details>

<details>
<summary>返回示例</summary>

```json
{"data":[{"creativeIds":[123],"hasMore":false}]}
```

</details>

---

### 按id返回物料数量

**请求地址:** `https://api.baidu.com/json/sms/service/SearchService/getCountById`

**方法说明:** 查询指定id序列下对应状态的物料数量

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| idType | Integer | 查询层级 | 0-计划 1-单元 |
| countType 必填 | Integer | 计数类型 | 0-单元 1-关键词 2-创意 3-计划 |
| ids | Long[] | 查询ID | 集合长度[0,1000] |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| countInfos | CountInfo[] | 物料数量信息 | - |
| id | Long | 物料ID | - |
| count | Long | 物料数量 | - |

<details>
<summary>请求示例</summary>

```json
{"idType":0,"countType":1,"ids":[123]}
```

</details>

<details>
<summary>返回示例</summary>

```json
{"data":[{"countInfos":[{"id":123,"count":100}]}]}
```

</details>

---

## 批量和增量服务

### 整账户下载

**请求地址:** `https://api.baidu.com/json/sms/service/BulkJobService/getAllObjects`

**方法说明:** 获取指定账户/计划下的完整数据，可定制需要返回的层级文件及数据列

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| campaignIds | long[] | 指定计划id | 为空=全账户 |
| includeTemp | boolean | 是否包含修改未生效物料 | 默认true |
| format | int | 压缩格式 | 0-zip 1-Gzip |
| accountFields | String[] | 账户层级数据列 | null/[]不返回; all获取所有 |
| campaignFields | String[] | 计划层级数据列 | 同上 |
| adgroupFields | String[] | 单元层级数据列 | 同上 |
| keywordFields | String[] | 关键词层级数据列 | 同上 |
| creativeFields | String[] | 创意层级数据列 | 同上 |
| segmentFields | String[] | 图片素材数据列 | 同上 |
| businessLabelFields | String[] | 词包数据列 | 同上 |
| autoExpansionFields | String[] | 自动扩量数据列 | 同上 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| fileId | String | 下载文件id | - |

<details>
<summary>请求示例</summary>

```json
{"includeTemp":true,"format":0,"accountFields":["all"],"campaignFields":["all"],"adgroupFields":["all"]}
```

</details>

<details>
<summary>返回示例</summary>

```json
{"data":[{"fileId":"50354fe4d3..."}]}
```

</details>

---

### 增量下载

**请求地址:** `https://api.baidu.com/json/sms/service/BulkJobService/getAllChangedObjects`

**方法说明:** 获取指定时间后有变化的物料信息

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| startTime 必填 | datetime | 更新的起始时间 | 最早可查上个月1号 |
| campaignIds | long[] | 指定计划id范围 | 为空=全账户 |
| includeTemp | boolean | 是否包含影子物料 | 默认true |
| format | int | 文件格式 | 0-zip 1-Gzip |
| campaignFields | String[] | 计划层级数据列 | null/[]不返回; all获取所有 |
| adgroupFields | String[] | 单元层级数据列 | 同上 |
| keywordFields | String[] | 关键词层级数据列 | 同上 |
| creativeFields | String[] | 创意层级数据列 | 同上 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| fileId | String | 下载文件id | - |

<details>
<summary>请求示例</summary>

```json
{"startTime":1605801600000,"format":0,"campaignFields":["all"],"adgroupFields":["all"],"keywordFields":["all"]}
```

</details>

<details>
<summary>返回示例</summary>

```json
{"data":[{"fileId":"1e031f7c..."}]}
```

</details>

---

### 查询文件状态

**请求地址:** `https://api.baidu.com/json/sms/service/BulkJobService/getFileStatus`

**方法说明:** 查询下载文件是否已生成

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| fileId 必填 | string | 下载任务id | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| isGenerated | int | 文件状态 | 1-等待中 2-处理中 3-处理成功 5-部分失败 |

<details>
<summary>请求示例</summary>

```json
{"fileId":"775ad3e26d1d..."}
```

</details>

<details>
<summary>返回示例</summary>

```json
{"data":[{"isGenerated":2}]}
```

</details>

---

### 获取文件下载地址

**请求地址:** `https://api.baidu.com/json/sms/service/BulkJobService/getFilePath`

**方法说明:** 返回文件下载地址

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| fileId 必填 | String | 处理任务id | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| filePaths | FilePathType | 各层级文件下载路径及MD5 | - |

<details>
<summary>请求示例</summary>

```json
{"fileId":"0e2a529384d4..."}
```

</details>

<details>
<summary>返回示例</summary>

```json
{"data":[{"accountFilePath":"https://...","campaignFilePath":"https://..."}]}
```

</details>

---

### 取消下载

**请求地址:** `https://api.baidu.com/json/sms/service/BulkJobService/cancelDownload`

**方法说明:** 取消一个下载任务

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| fileId 必填 | String | 处理任务id | - |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| isCanceled | Integer | 处理结果 | 3-处理成功 |

<details>
<summary>请求示例</summary>

```json
{"fileId":"0e2a529384d4..."}
```

</details>

<details>
<summary>返回示例</summary>

```json
{"data":[{"isCanceled":3}]}
```

</details>

---

### 获取有变化物料id

**请求地址:** `https://api.baidu.com/json/sms/service/BulkJobService/getChangedItemId`

**方法说明:** 获取从指定时间到当前时间段内有变化的物料id

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| startTime 必填 | datetime | 起始时间 | 一个月内 |
| itemType 必填 | Integer | 物料类型 | 1-搜索计划 2-搜索单元 3-搜索创意 4-搜索关键词 2001-信息流计划等 |
| ids | long[] | 计划id数组 | 为空=全账户 |
| pageNo | int | 分页页码 | 从1开始 |
| pageSize | int | 分页大小 | 不超过20000 |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| endTime | datetime | 当前时间点 | - |
| changedItemIds | ChangedItemIdType[] | 变化物料信息 | - |
| totalCount | int | 总数 | 仅分页时返回 |

<details>
<summary>请求示例</summary>

```json
{"startTime":"2022-07-16 00:00:00","itemType":1,"pageNo":1,"pageSize":100}
```

</details>

<details>
<summary>返回示例</summary>

```json
{"data":[{"endTime":"Aug 9, 2022 8:31:46 PM","changedItemIds":[...],"totalCount":648}]}
```

</details>

---

### 获取物料变化规模

**请求地址:** `https://api.baidu.com/json/sms/service/BulkJobService/getChangedScale`

**方法说明:** 获取变化物料规模，帮助决定后续更新策略

**输入信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| startTime 必填 | datetime | 起始时间 | 最早可查上个月1号 |
| campaignIds | long[] | 指定计划id范围 | 为空=全账户 |
| changedCampaignScale | boolean | 统计计划变化 | 默认true |
| changedAdgroupScale | boolean | 统计单元变化 | 默认true |
| changedKeywordScale | boolean | 统计关键词变化 | 默认true |
| changedCreativeScale | boolean | 统计创意变化 | 默认true |
| changedAutoExpansionScale | boolean | 统计自动扩量变化 | 默认true |

**返回信息:**

| 字段 | 类型 | 说明 | 限制 |
|:---|:---|:---|:---|
| changedCampaignScale | long[] | 计划变化规模 [变化数, 现有数] | - |
| changedAdgroupScale | long[] | 单元变化规模 [变化数, 现有数] | - |
| changedKeywordScale | long[] | 关键词变化规模 [变化数, 现有数] | - |
| changedCreativeScale | long[] | 创意变化规模 [变化数, 现有数] | - |
| changedAutoExpansionScale | long[] | 自动扩量变化规模 [变化数, 现有数] | - |

<details>
<summary>请求示例</summary>

```json
{"startTime":"2020-11-20 10:29:20","changedCreativeScale":true,"changedKeywordScale":true}
```

</details>

<details>
<summary>返回示例</summary>

```json
{"data":[{"changedKeywordScale":[100,200],"changedCreativeScale":[200,220]}]}
```

</details>

---

