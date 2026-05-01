const fs = require("fs");
const data = JSON.parse(fs.readFileSync(".tmp-figma/about-us.json", "utf8"));
const node = data.nodes["91:135"].document;
function walk(n, depth = 0) {
  const indent = "  ".repeat(depth);
  const name = n.name ?? "?";
  const type = n.type ?? "?";
  const bb = n.absoluteBoundingBox ?? {};
  const w = Math.round(bb.width ?? 0);
  const h = Math.round(bb.height ?? 0);
  const pad = type.padEnd(12);
  const id = (n.id ?? "").padEnd(14);
  console.log(`${indent}${id} ${pad} ${String(w).padStart(5)}x${String(h).padEnd(5)} ${name}`);
  for (const c of n.children ?? []) walk(c, depth + 1);
}
walk(node);
