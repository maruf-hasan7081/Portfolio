import fallback from "./portfolioFallback.json";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

/** @returns {Promise<import('./portfolioFallback.json')>} */
export async function getPortfolio() {
  try {
    const res = await fetch(`${API_BASE}/api/v1/portfolio/`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`API ${res.status}`);
    const data = await res.json();
    if (!data?.profile) throw new Error("Invalid portfolio payload");
    return data;
  } catch {
    return fallback;
  }
}

export { API_BASE };