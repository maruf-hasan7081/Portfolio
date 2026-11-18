import personal from "../../lib/personalInfoFallback.json" with { type: "json" };

export default async (req) => {
  const path = new URL(req.url).pathname;
  const slug = path.split("/").filter(Boolean).pop() || personal.slug;
  if (slug !== personal.slug) {
    return new Response(JSON.stringify({ detail: "Not found." }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify(personal), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=60",
    },
  });
};