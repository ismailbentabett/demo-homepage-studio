// Playwright helpers for cards, thumbnails and scroll videos (deliver.mjs, build-library.mjs).
import fs from "node:fs";
import { pathToFileURL } from "node:url";

let chromium;
export async function launchBrowser() {
  try {
    ({ chromium } = await import("playwright"));
    return await chromium.launch();
  } catch (e) {
    throw new Error(`Could not start Chromium (${e.message.split("\n")[0]}). Run: npx playwright install chromium`);
  }
}

export const fileUrl = (file) => pathToFileURL(file).href;

// Open a page at a viewport, wait for fonts and the intro to settle.
export async function openPage(browser, file, { width, height, reducedMotion = "reduce", recordVideo, settleMs = 1200 }) {
  if (!fs.existsSync(file)) throw new Error(`${file} does not exist. Build the site first (node tools/build.mjs <id>).`);
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
    reducedMotion,
    ...(recordVideo ? { recordVideo } : {}),
  });
  const page = await context.newPage();
  await page.goto(fileUrl(file), { waitUntil: "load", timeout: 30_000 });
  await page.evaluate(() => document.fonts?.ready).catch(() => {});
  await page.waitForTimeout(settleMs);
  return { context, page };
}

// Screenshot of the top of a page (the first screen) as a PNG buffer.
export async function firstScreen(browser, file, width, height) {
  const { context, page } = await openPage(browser, file, { width, height });
  try {
    return await page.screenshot({ type: "png", clip: { x: 0, y: 0, width, height } });
  } finally {
    await context.close();
  }
}
