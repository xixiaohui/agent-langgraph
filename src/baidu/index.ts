export { BaiduClient } from "./client.js";
export type {
  BaiduAuth,
  BaiduClientConfig,
  BaiduRequest,
  BaiduResponse,
  BaiduResponseHeader,
} from "./types.js";

// Services — add new service re-exports here as you add APIs
export * as AccountService from "./services/account.js";

// Agent tools
export { BAIDU_TOOLS, baiduGetAccountInfo } from "./tools.js";
