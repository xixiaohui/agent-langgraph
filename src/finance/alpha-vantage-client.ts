const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
const BASE_URL = "https://www.alphavantage.co/query";

export async function alphaVantage(params: Record<string, string>) {
  const url = new URL(BASE_URL);
  url.searchParams.set("apikey", API_KEY || "demo");
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  const res = await fetch(url.toString());
  const data = await res.json();

  if (data["Error Message"]) {
    throw new Error(data["Error Message"]);
  }
  if (data.Note) {
    throw new Error(`Alpha Vantage API 限频: ${data.Note}`);
  }
  if (!data || Object.keys(data).length === 0) {
    throw new Error("未找到该股票数据，请检查代码是否正确");
  }

  return data;
}
