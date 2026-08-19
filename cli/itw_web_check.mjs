import puppeteer from "puppeteer";
const BASES = {
  host:   "http://localhost:4711/hekatan-struct-lineal/workspace/",
  deploy: "https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/",
};
const IDS = ["itw-patch-test","itw-cantilever","itw-cook","itw-hemisferio"];
const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader","--use-angle=swiftshader"] });
for (const [nombre, base] of Object.entries(BASES)) {
  console.log("\n===== " + nombre + " =====");
  for (const id of IDS) {
    const p = await nav.newPage();
    await p.setViewport({ width: 1500, height: 1000 });
    const logs = [], errs = [];
    p.on("console", m => { const t = m.text(); if (t.startsWith("[ITW")) logs.push(t); });
    p.on("pageerror", e => errs.push(e.message.slice(0,110)));
    try {
      await p.goto(base + "?t=" + id, { waitUntil: "networkidle0", timeout: 90000 });
      await new Promise(r => setTimeout(r, 4000));
      if (id === "itw-cook") await p.screenshot({ path: `cli/shots/itw_${nombre}.png` });
    } catch (e) { errs.push("goto: " + String(e).slice(0,90)); }
    console.log(`  ${id.padEnd(16)} ${logs[0] || "(sin log)"}${errs.length ? "  ERR: " + errs[0] : ""}`);
    await p.close();
  }
}
await nav.close();
