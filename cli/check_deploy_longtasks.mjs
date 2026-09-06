// Mide cuánto BLOQUEA el hilo cada paso (PerformanceObserver longtask) y lista las URLs que fallan.
//   node cli/check_deploy_longtasks.mjs id
import puppeteer from "puppeteer";
const id = process.argv[2] ?? "edificio-dual";
const nav = await puppeteer.launch({ headless: "new", args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
const p = await nav.newPage(); await p.setViewport({ width: 1500, height: 1000 });
const fails = []; p.on("requestfailed", (r) => fails.push(r.failure()?.errorText + " " + r.url().slice(0, 100)));
await p.evaluateOnNewDocument(() => { window.__lt = []; try { new PerformanceObserver((l) => { for (const e of l.getEntries()) window.__lt.push(Math.round(e.duration)); }).observe({ entryTypes: ["longtask"] }); } catch {} });
await p.goto(`https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=${id}`, { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));
const take = async (paso) => { const lt = await p.evaluate(() => { const a = window.__lt.slice(); window.__lt = []; return a; }); console.log(JSON.stringify({ paso, longtasks_ms: lt, total_ms: lt.reduce((a, b) => a + b, 0) })); };
await take("carga");
const setNum = async (label, val) => p.evaluate((label, val) => { const row = [...document.querySelectorAll(".tp-lblv")].find((e) => e.querySelector(".tp-lblv_l")?.textContent.trim() === label); const inp = row?.querySelector("input"); if (!inp) return "no"; inp.value = String(val); inp.dispatchEvent(new Event("change", { bubbles: true })); return "ok"; }, label, val);
await p.evaluate(() => { const b = [...document.querySelectorAll("button")].find((e) => e.textContent.includes("Correr modal")); b?.click(); }); await new Promise((r) => setTimeout(r, 4000)); await take("correr modal");
for (const [l, v] of [["N. Pisos", 5], ["N. Pisos", 8], ["Vanos X", 4]]) { await setNum(l, v); await new Promise((r) => setTimeout(r, 25000)); await take(`${l}=${v}`); }
console.log(JSON.stringify({ requestfailed: [...new Set(fails)].slice(0, 8) }));
await nav.close();
