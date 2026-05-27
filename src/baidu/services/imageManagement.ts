import type { BaiduClient } from "../client.js";

// ── uploadImage ───────────────────────────────────────────

export interface ImageUploadItem {
  /** 图片base64内容 */
  content: string;
  /** 图片md5 */
  imgmd5: string;
}

export interface UploadImageParams {
  /** 产品线, 例如 "FENGCHAO" */
  productLine: string;
  /** 图片数据 */
  items: ImageUploadItem[];
  /** 是否需要mola处理 */
  needMola?: boolean;
  /** 是否添加到图片库 */
  addImage?: boolean;
}

export interface UploadImageResult {
  /** 图片ID */
  imageid: number;
  /** 图片高度 */
  height: number;
  /** 图片宽度 */
  width: number;
  /** 图片大小 */
  size: number;
  /** 图片URL */
  url: string;
  /** mola处理后的URL */
  molaUrl: string;
  /** 图片签名 */
  sign: string;
}

/** 组件图片上传, 将图片转为百度格式的图片链接 */
export function uploadImage(
  client: BaiduClient,
  params: UploadImageParams,
) {
  return client.call<UploadImageParams, { data: Partial<UploadImageResult>[] }>(
    "ImageManagementService",
    "uploadImage",
    params,
  );
}
