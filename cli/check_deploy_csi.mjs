// Prueba en el deploy PUBLICO los botones de CSI: "📤 Exportar E2K" (ETABS), "📤 Exportar S2K" (SAP2000),
// "📤 Exportar F2K" / "📤 Exportar F2K cimentación COMPLETA" (SAFE). No descarga a disco: intercepta el blob
// (URL.createObjectURL) y anula el <a download>. Guarda cada fichero en cli/shots/deploy/csi/<id>.<ext>,
// cuenta tablas (POINT/LINE/AREA, Joint/Frame/Area, Point/Line/Area de SAFE) y registra pageerror,
// console.error (sin el ruido de Google Analytics) y los alert().
//   node cli/check_deploy_csi.mjs id [id ...]
import puppeteer from "puppeteer";
import { mkdirSync, writeFileSync } from "node:fs";

const BASE = "https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/";
const ids = process.argv.slice(2).length ? process.argv.slice(2)
  : ["edificio-dual", "test-m-dual", "mezanine", "galpon", "plantillas", "zapata-aislada", "zapata-viga-amarre",
     "guerra-ej1-zapata-cuadrada", "safe-bench-losa-cimentacion", "cli-modeler"];
const OUT = "cli/shots/deploy/csi";
mkdirSync(OUT, { recursive: true });
const esRuidoGA = (s) => /google-analytics|google\.com\/g\/collect|ERR_ADDRESS_INVALID/.test(s);

const cuenta = (texto, ext) => {
  const c = (re) => (texto.match(re) || []).length;
  if (ext === "e2k") return { points: c(/^\s*POINT\s+"/gm), lines: c(/^\s*LINE\s+"/gm), areas: c(/^\s*AREA\s+"/gm),
    springs: c(/SPRINGPROP/g), stories: c(/^\s*STORY\s+"/gm), combos: c(/^\s*COMBO\s+"/gm) };
  if (ext === "s2k") return { joints: c(/^\s*Joint=/gm) - c(/^\s*Joint=.*Restraint/gm), frames: c(/^\s*Frame=\S+\s+JointI=/gm),
    areas: c(/^\s*Area=\S+\s+NumJoints=/gm), springs: c(/^\s*Joint=\S+\s+CoordSys=\S+\s+U1=/gm), tablas: c(/^TABLE:/gm) };
  if (ext === "f2k") return { points: c(/^\s*Point=\S+\s+GlobalX=/gm), lines: c(/^\s*Line=\S+\s+PointI=/gm),
    areas: c(/^\s*Area=\S+\s+NumPoints=/gm), springs: c(/^\s*UniqueName=\S+.*\sSpring=/gm), muellesPunto: c(/^\s*Point=\S+.*Stiffness/gm), tablas: c(/^TABLE:/gm) };
  return {};
};

const nav = await puppeteer.launch({ headless: "new", args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
const resumen = [];
for (const id of ids) {
  const p = await nav.newPage(); await p.setViewport({ width: 1500, height: 1000 });
  const errs = [], cons = [], alerts = [];
  p.on("pageerror", (e) => errs.push(String(e.message).slice(0, 200)));
  p.on("console", (m) => { if (m.type() === "error" && !esRuidoGA(m.text())) cons.push(m.text().slice(0, 200)); });
  p.on("dialog", async (d) => { alerts.push(d.message().slice(0, 300)); await d.dismiss(); });
  await p.evaluateOnNewDocument(() => {
    window.__dl = [];
    const orig = URL.createObjectURL.bind(URL);
    URL.createObjectURL = (blob) => {
      const u = orig(blob);
      try { blob.text().then((t) => window.__dl.push({ url: u, size: blob.size, text: t })); } catch {}
      return u;
    };
    const click = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function () {
      if (this.download) { window.__dl.push({ url: this.href, filename: this.download }); return; }
      return click.call(this);
    };
  });
  const fila = { id, pageerror: errs, console: cons, alerts, exports: {} };
  try {
    await p.goto(`${BASE}?t=${id}`, { waitUntil: "networkidle2", timeout: 120000 });
    await new Promise((r) => setTimeout(r, 7000));
    fila.titulo = await p.evaluate(() => document.querySelector(".tp-rotv_t")?.textContent?.trim());
    fila.botones = await p.evaluate(() => [...document.querySelectorAll(".tp-btnv_b")].map((b) => b.textContent.trim()).filter((t) => /E2K|S2K|F2K/.test(t)));
    for (const titulo of fila.botones) {
      if (!titulo.startsWith("📤")) continue;             // los 📥 abren un <input file>: no se prueban aqui
      const n0 = await p.evaluate(() => window.__dl.length);
      const t0 = Date.now();
      const clicked = await p.evaluate((t) => { const b = [...document.querySelectorAll(".tp-btnv_b")].find((x) => x.textContent.trim() === t); if (!b) return false; b.click(); return true; }, titulo);
      if (!clicked) { fila.exports[titulo] = { error: "boton no encontrado" }; continue; }
      let dl = null;
      for (let i = 0; i < 60; i++) {                       // hasta 15 s (el F2K completo es async)
        await new Promise((r) => setTimeout(r, 250));
        dl = await p.evaluate((n) => { const d = window.__dl.slice(n); const tx = d.find((x) => x.text); const nm = d.find((x) => x.filename); return tx ? { size: tx.size, text: tx.text, filename: nm?.filename } : null; }, n0);
        if (dl) break;
      }
      const ms = Date.now() - t0;
      if (!dl) { fila.exports[titulo] = { error: "sin fichero en 15 s", ms }; continue; }
      const ext = (dl.filename || "").split(".").pop() || (titulo.includes("E2K") ? "e2k" : titulo.includes("S2K") ? "s2k" : "f2k");
      const sufijo = titulo.includes("COMPLETA") ? "_cim" : "";
      writeFileSync(`${OUT}/${id}${sufijo}.${ext}`, dl.text);
      fila.exports[titulo] = { filename: dl.filename, bytes: dl.size, ms, ...cuenta(dl.text, ext), primera: dl.text.split("\n")[0].slice(0, 80) };
    }
    await p.screenshot({ path: `${OUT}/${id}.png` });
  } catch (e) { fila.error = String(e).slice(0, 200); }
  console.log(JSON.stringify(fila, null, 1));
  resumen.push(fila);
  await p.close();
}
writeFileSync(`${OUT}/_resumen.json`, JSON.stringify(resumen, null, 1));
await nav.close();
