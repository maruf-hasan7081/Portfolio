import fallback from "./portfolioFallback.json";

function resolveApiBase() {
  const env = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
  if (env) return env;
  const deployUrl = process.env.URL?.replace(/\/$/, "");
  if (deployUrl) return deployUrl;
  if (process.env.DEPLOY_PRIME_URL) {
    return process.env.DEPLOY_PRIME_URL.replace(/\/$/, "");
  }
  return "http://127.0.0.1:8000";
}

const API_BASE = resolveApiBase();

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