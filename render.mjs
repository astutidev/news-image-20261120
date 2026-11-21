// Build tool: renders page.html into entry.png at exactly 1024x1024.
// Uses the locally installed Playwright and Chromium build.
import { chromium } from "/home/hatch/workspace/makefun/shot-tools/node_modules/playwright/index.mjs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({
  executablePath:
    "/home/hatch/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome",
  args: ["--no-sandbox", "--force-color-profile=srgb"],
});
const page = await browser.newPage({
  viewport: { width: 1024, height: 1024 },
  deviceScaleFactor: 1,
});
await page.goto("file://" + join(here, "page.html"), {
  waitUntil: "networkidle",
});
await page.screenshot({ path: join(here, "entry.png") });
await browser.close();
console.log("wrote entry.png");
