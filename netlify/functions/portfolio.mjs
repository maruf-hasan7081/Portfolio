import portfolio from "../../lib/portfolioFallback.json" with { type: "json" };

export default async () =>
  new Response(JSON.stringify(portfolio), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=60",
    },
  });