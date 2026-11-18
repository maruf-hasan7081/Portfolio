export default async () =>
  new Response(JSON.stringify({ status: "ok", source: "netlify-functions" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });