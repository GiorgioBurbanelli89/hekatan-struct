#!/usr/bin/env node
/**
 * LA BARRA DE COLOR, ejemplo por ejemplo.
 *
 *   node cli/shot_colormap_todos.mjs [id ...]
 *
 * Un colormap roto NO se ve en ningun JSON: los numeros del analisis salen
 * bien igual. Solo aparece mirando el PNG. Y hay cuatro maneras distintas de
 * que este roto, asi que se miden las cuatro y ademas se recorta la barra a un
 * PNG para poder verla:
 *
 *   · NO SALE          la leyenda no se monta (campo sin datos)
 *   · TAPADA           la barra cae debajo del panel de Settings o del de
 *                      parametros: se dibuja, pero no se ve
 *   · SIN NUMEROS      la barra sale y sus etiquetas no, o salen cortadas
 *   · RANGO MUERTO     min == max: todo de un color, y no dice nada
 *
 * Lo de «contar colores del canvas» NO vale: un canvas WebGL sin
 * `preserveDrawingBuffer` sale NEGRO al copiarlo, y el conteo da 1 pase lo que
 * pase. Por eso se mide la LEYENDA (que es HTML) y se mira el recorte.
 *
 * Sale:  cli/shots/colormap/<id>_<campo>.png   ← MIRARLOS
 *        cli/shots/colormap/_informe.json
 */
import puppeteer from "puppeteer";
import { readFileSync, writeFileSync, existsSync, statSync, mkdirSync } from "node:fs";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join, extname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots", "colormap");
mkdirSync(OUT, { recursive: true });
const BASE = "/hekatan-struct-lineal/";
const raiz = join(__dirname, "..", "website", "src", "examples");
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
               ".json": "application/json", ".wasm": "application/wasm",
               ".png": "image/png", ".svg": "image/svg+xml" };

const srv = createServer((q, r) => {
  let p = decodeURIComponent((q.url || "/").split("?")[0]);
  if (p.startsWith(BASE)) p = p.slice(BASE.length - 1);
  let f = join(raiz, p);
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, "index.html");
  if (!existsSync(f)) { r.writeHead(404); return r.end("404"); }
  r.writeHead(200, { "content-type": MIME[extname(f)] || "application/octet-stream" });
  r.end(readFileSync(f));
});
await new Promise((r) => srv.listen(4712, r));

const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox",
         "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1500, height: 950 });

// La lista sale del propio workspace: asi no hay una copia que se quede vieja.
await pag.goto(`http://localhost:4712${BASE}workspace/?t=plantillas`,
               { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 6000));
const todos = await pag.evaluate(() => (window.__hekatanExamples ?? []).map((e) => e.id));

const IDS = process.argv.slice(2).length ? process.argv.slice(2) : todos;
if (!IDS.length) {
  console.error("no hay lista de ejemplos: el workspace no expone __hekatanExamples");
  await nav.close(); srv.close(); process.exit(2);
}

const informe = [];
console.log("ejemplo                        campo            barra  numeros  rango                 veredicto");
console.log("-".repeat(112));

import { readdirSync } from "node:fs";
const yaHecho = new Set(readdirSync(OUT).filter(f => f.endsWith(".png"))
  .map(f => f.replace(/_[^_]+\.png$/, "")));
for (const id of IDS) {
  if (process.env.REANUDAR && yaHecho.has(id)) { console.log(id.padEnd(30) + "(ya capturado)"); continue; }
  let fila;
  try {
    await pag.goto(`http://localhost:4712${BASE}workspace/?t=${id}`,
                   { waitUntil: "networkidle2", timeout: 120000 });
    await new Promise((r) => setTimeout(r, 3200));
    fila = await pag.evaluate(() => {
      const s = window.__hekatanSettings?.();
      const st = window.__hekatanStates;
      const els = st?.elements?.val ?? [];
      const nAreas = els.filter((e) => e.length > 2).length;
      if (!nAreas) return { sinArea: true };
      // El campo que el propio ejemplo elige; si no, von Mises.
      const campo = (s?.shellResults?.val && s.shellResults.val !== "none")
        ? s.shellResults.val : "vonMises";
      if (s?.shellResults) s.shellResults.val = campo;
      return { campo, nAreas };
    });
    if (fila.sinArea) continue;
    await new Promise((r) => setTimeout(r, 1100));

    const med = await pag.evaluate(() => {
      const leg = document.querySelector("#legend");
      if (!leg || leg.hidden) return { hay: false };
      const r = leg.getBoundingClientRect();
      // Los numeros de la barra.
      const textos = [...leg.querySelectorAll("*")]
        .map((e) => (e.childElementCount ? "" : (e.textContent || "").trim()))
        .filter(Boolean);
      const nums = textos.map(parseFloat).filter((v) => Number.isFinite(v));
      // .La tapa algun panel? Se cruzan los RECTANGULOS: `elementFromPoint` no
      // sirve, la leyenda lleva `pointer-events: none` y devuelve lo de debajo.
      const solapa = (a, b) => !(a.right < b.left || a.left > b.right ||
                                 a.bottom < b.top || a.top > b.bottom);
      const tapada = ["#settings", "#parameters", ".tp-dfwv"]
        .flatMap((q) => [...document.querySelectorAll(q)])
        .filter((p) => {
          const pr = p.getBoundingClientRect();
          if (!(pr.width && pr.height) || !solapa(r, pr)) return false;
          const zl = +getComputedStyle(leg).zIndex || 0;
          const zp = +getComputedStyle(p).zIndex || 0;
          return zp >= zl;
        }).length;
      // .Se sale de la ventana?
      const fuera = r.left < 0 || r.top < 0 ||
                    r.right > innerWidth + 1 || r.bottom > innerHeight + 1;
      return { hay: true, rect: { x: r.x, y: r.y, w: r.width, h: r.height },
               nNums: nums.length, min: nums.length ? Math.min(...nums) : null,
               max: nums.length ? Math.max(...nums) : null, tapada, fuera };
    });

    const problemas = [];
    if (!med.hay) problemas.push("NO SALE");
    else {
      if (med.tapada) problemas.push("TAPADA");
      if (med.fuera) problemas.push("SE SALE");
      if (med.nNums < 2) problemas.push("SIN NUMEROS");
      if (med.nNums >= 2 && med.min === med.max) problemas.push("RANGO MUERTO");
      else if (med.nNums >= 2 && Math.abs(med.max - med.min) < 1e-12)
        problemas.push("rango ~0 (esperado en un patch test)");
    }
    if (med.hay) {
      const r = med.rect;
      await pag.screenshot({ path: join(OUT, `${id}_${fila.campo}.png`),
        clip: { x: Math.max(0, r.x - 12), y: Math.max(0, r.y - 12),
                width: Math.min(1500 - r.x + 12, r.w + 130), height: r.h + 24 } });
    }
    console.log(id.padEnd(30) + String(fila.campo).padEnd(17) +
      (med.hay ? "  si  " : "  NO  ") + String(med.nNums ?? 0).padStart(8) + "  " +
      (med.hay && med.nNums ? `${med.min} .. ${med.max}` : "—").padEnd(22) +
      (problemas.length ? problemas.join(" · ") : "ok"));
    informe.push({ id, campo: fila.campo, nAreas: fila.nAreas, ...med, problemas });
  } catch (e) {
    console.log(id.padEnd(30) + "ERROR  " + String(e?.message || e).slice(0, 60));
    informe.push({ id, error: String(e?.message || e).slice(0, 120) });
  }
}

writeFileSync(join(OUT, "_informe.json"), JSON.stringify(informe, null, 1));
const malos = informe.filter((f) => f.problemas?.length || f.error);
console.log(`\n${informe.length} ejemplos con area · ${malos.length} con algo que mirar`);
console.log(`-> ${OUT}   ← MIRAR los recortes`);
await nav.close(); srv.close();
