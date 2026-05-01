import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const sourcePath = path.join(projectRoot, "public", "src", "Container.svg");
const outputDir = path.join(projectRoot, "public", "images", "hero");

fs.mkdirSync(outputDir, { recursive: true });

const svg = fs.readFileSync(sourcePath, "utf8");

// Match every <image id="..." ... xlink:href="data:image/png;base64,..."/> entry
const imageRegex = /<image\s+id="([^"]+)"[^>]*xlink:href="data:image\/png;base64,([^"]+)"\s*\/>/g;

const replaced = svg.replace(imageRegex, (_, id, base64) => {
  const fileName = `${id.replace(/[^a-zA-Z0-9_-]/g, "_")}.png`;
  const filePath = path.join(outputDir, fileName);
  const buffer = Buffer.from(base64, "base64");
  fs.writeFileSync(filePath, buffer);
  console.log(`Wrote ${filePath} (${(buffer.length / 1024).toFixed(1)} KB)`);
  return `<image id="${id}" width="${getDim(svg, id, "width")}" height="${getDim(svg, id, "height")}" preserveAspectRatio="none" xlink:href="/images/hero/${fileName}"/>`;
});

function getDim(svg, id, attr) {
  const re = new RegExp(`<image\\s+id="${id}"[^>]*${attr}="(\\d+)"`);
  const m = svg.match(re);
  return m ? m[1] : "";
}

const outputSvg = path.join(projectRoot, "public", "images", "hero-bottles.svg");
fs.writeFileSync(outputSvg, replaced, "utf8");
console.log(`Wrote ${outputSvg} (${(replaced.length / 1024).toFixed(1)} KB)`);
