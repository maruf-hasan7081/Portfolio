import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

let body = html.match(/<body[^>]*>([\s\S]*)<\/body>/)[1];

body = body.replace(
  /[\s\S]*?<\/header>\s*<!-- Mobile menu -->[\s\S]*?<\/header>\s*/,
  (m) => m.split("<!-- Mobile menu -->")[0] + "\n",
);

body = body.replace(/<script>[\s\S]*?<\/script>/, "");
body = body.replace(/<!--[\s\S]*?-->/g, "");

const attrs = [
  ["class", "className"],
  ["tabindex", "tabIndex"],
  ["frameborder", "frameBorder"],
  ["for", "htmlFor"],
];

for (const [from, to] of attrs) {
  body = body.replace(new RegExp(`\\b${from}=`, "g"), `${to}=`);
}

body = body.replace(/src="\.\/media\//g, 'src="/media/');
body = body.replace(/href="\.\/media\//g, 'href="/media/');

const voidTags = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];
for (const tag of voidTags) {
  body = body.replace(new RegExp(`<${tag}([^>]*?)(?<!\\/)>`, "gi"), `<${tag}$1 />`);
}

body = body.trim();

const out = `'use client';

export default function PortfolioContent() {
  return (
    <>
${body.split("\n").map((line) => "      " + line).join("\n")}
    </>
  );
}
`;

fs.mkdirSync(path.join(root, "components"), { recursive: true });
fs.writeFileSync(path.join(root, "components", "PortfolioContent.jsx"), out);
console.log("Wrote components/PortfolioContent.jsx");