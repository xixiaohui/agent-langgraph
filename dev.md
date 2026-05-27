# 百度搜索广告 API 工具封装 — 执行步骤

> 参考 `zhibaokoudai.md` 中的 API 文档，按以下步骤将新 API 封装为 Agent 工具。

---

## 步骤 1：分析 API 文档

在 `zhibaokoudai.md` 中找到目标 API，提取以下信息：

- **ServiceName** — 请求地址中的服务名，例如 `CampaignService`
- **MethodName** — 请求地址中的方法名，例如 `getCampaign`
- **输入字段** — 参数名、类型、是否必填、枚举值、取值范围
- **返回字段** — 字段名、类型、说明

## 步骤 2：创建/扩展 Service 文件

在 `src/baidu/services/` 下创建 `{serviceName}.ts`（如 `campaign.ts`），以 kebab-case 命名。

### 2.1 定义类型

```typescript
import type { BaiduClient } from "../client.js";

// 字段枚举（用于输入字段的联合类型）
export type XxxField = "fieldA" | "fieldB" | ...;

// 输入参数接口
export interface GetXxxParams {
  xxxFields: XxxField[];
  // 其他可选参数...
}

// 返回数据结构接口
export interface XxxInfo {
  fieldA: string;
  fieldB: number;
  // ...
}
```

### 2.2 导出方法

```typescript
export function getXxx(client: BaiduClient, params: GetXxxParams) {
  return client.call<GetXxxParams, { data: Partial<XxxInfo>[] }>(
    "XxxService",     // 服务名（来自 API 请求地址）
    "getXxx",         // 方法名（来自 API 请求地址）
    params,
  );
}
```

**注意：**
- 泛型 `GetXxxParams` 为请求体类型
- 返回泛型使用 `{ data: Partial<XxxInfo>[] }` 包裹数组
- 方法命名与 API MethodName 保持一致（驼峰）

## 步骤 3：添加 Agent Tool

在 `src/baidu/tools.ts` 中添加工具。

### 3.1 定义 Zod Schema

```typescript
const xxxFieldSchema = z.enum([
  "fieldA",
  "fieldB",
  // ...列出所有可用字段
]);
```

### 3.2 创建 Tool

```typescript
export const baiduGetXxx = tool(
  async ({ xxxFields, ...otherParams }) => {
    const client = getClient();
    const res = await client.call<
      { xxxFields: string[]; ... },
      { data: Array<Record<string, unknown>> }
    >("XxxService", "getXxx", { xxxFields, ...otherParams });
    return JSON.stringify(res.body, null, 2);
  },
  {
    name: "baidu_get_xxx",                        // snake_case 命名
    description: "中文简述。常用字段: ...",         // 中文描述，列出常用字段
    schema: z.object({
      xxxFields: z.array(xxxFieldSchema)
        .describe("字段说明"),
      // 其他参数...
    }),
  },
);
```

### 3.3 注册到工具列表

```typescript
export const BAIDU_TOOLS = [
  baiduGetAccountInfo,
  baiduGetCampaign,
  baiduGetXxx,  // 添加到这里
];
```

## 步骤 4：更新 Index 导出

在 `src/baidu/index.ts` 中：

```typescript
// 添加 service 导出
export * as XxxService from "./services/xxx.js";

// 添加 tool 导出
export { BAIDU_TOOLS, ..., baiduGetXxx } from "./tools.js";
```

## 步骤 5：验证

```bash
# TypeScript 编译检查
npx tsc --noEmit

# 检查导出是否正确
node -e "import('./src/baidu/index.js').then(m => console.log(Object.keys(m)))"
```

---

## 文件结构参考

```
src/baidu/
├── types.ts          # 共享类型（BaiduAuth, BaiduRequest, BaiduResponse, BaiduClientConfig）
├── client.ts         # BaiduClient 通用调用类
├── tools.ts          # Agent 工具定义（tool + zod schema）
├── index.ts          # 统一导出
└── services/
    ├── account.ts    # AccountService — getAccountInfo
    └── campaign.ts   # CampaignService — getCampaign（本次新增）
```

## 模式总结

| 层级 | 文件 | 职责 |
|:---|:---|:---|
| Service | `services/{name}.ts` | 类型定义 + 纯函数，接收 `BaiduClient` 调用 API |
| Tool | `tools.ts` | 用 `tool()` + zod 封装为 Agent 可调用的工具，处理 env 获取凭证 |
| Index | `index.ts` | 统一 re-export 所有 service 和 tool |
