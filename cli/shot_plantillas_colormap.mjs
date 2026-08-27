#!/usr/bin/env node
/**
 * El COLORMAP de las cascaras, plantilla a plantilla, en PNG.
 *
 *   node cli/shot_plantillas_colormap.mjs [campo ...]
 *
 * Que se comprueba: que el degradado se PINTA de verdad sobre losas y muros y
 * que la barra de color sale con sus numeros. Un colormap roto no se ve en
 * ningun JSON —los numeros salen bien igual— y solo aparece mirando el PNG:
 * puede quedar todo de un color (rango degenerado), en gris (campo vacio) o
 * sin barra (leyenda no montada).
 *
 * Se capturan las plantillas que TIENEN area: portico+losa, losa plana, losa
 * con vigas de borde y la dual (que ademas trae MUROS, que es el otro elemento
 * de area y se pinta en vertical).
 *
 * Sale: cli/shots/plantillas-colormap/<tipo>_<nombre>_<campo>.png  ← MIRARLAS
 */
import puppeteer from "puppeteer";
import { readFileSync, writeFileSync, existsSync, statSync, mkdirSync } from "fs";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots", "plantillas-colormap");
mkdirSync(OUT, { recursive: true });
const BASE = "/hekatan-struct-lineal/";
const raiz = join(__dirname, "..", "website", "src", "examples");
const MIME = { ".html":"text/html", ".js":"text/javascript", ".css":"text/css",
  ".wasm":"application/wasm", ".json":"application/json", ".svg":"image/svg+xml",
  ".png":"image/png", ".ico":"image/x-icon", ".woff2":"font/woff2" };
const srv = createServer((q, r) => {
  let p = decodeURIComponent((q.url || "/").split("?")[0]);
  if (p.startsWith(BASE)) p = p.slice(BASE.length - 1);
  let f = join(raiz, p);
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, "index.html");
  if (!existsSync(f)) { r.writeHead(404); return r.end("404"); }
  r.writeHead(200, { "content-type": MIME[extname(f)] || "application/octet-stream" });
  r.end(readFileSync(f));
});
await new Promise((r) => srv.listen(4708, r));

// Solo las que tienen elementos de AREA: el colormap de cascara no existe sin
// cascaras, y capturar un portico desnudo solo llenaria la carpeta de ruido.
const CON_AREA = [[2, "portico-losa"], [4, "losa-plana"],
                  [5, "losa-vigas-borde"], [6, "dual-muros"]];
// TODOS los campos del desplegable, con su etiqueta estilo ETABS (el mapa
// LABEL2INTERNAL de `examples/src/workspace/main.ts`). Se barren todos a
// proposito: un campo puede pintar y el de al lado salir plano, y eso solo se
// ve mirandolos.
const TODOS = [
  ["membraneXX", "F11"], ["membraneYY", "F22"], ["membraneXY", "F12"],
  ["membranePrincipalMax", "FMax"], ["membranePrincipalMin", "FMin"],
  ["vonMises", "FVM"],
  ["tranverseShearX", "V13"], ["tranverseShearY", "V23"],
  ["transverseShearMax", "VMax"],
  ["bendingXX", "M11"], ["bendingYY", "M22"], ["bendingXY", "M12"],
  ["bendingPrincipalMax", "MMax"], ["bendingPrincipalMin", "MMin"],
  ["displacementX", "Ux"], ["displacementY", "Uy"], ["displacementZ", "Uz"],
];
const pedidos = process.argv.slice(2);
const CAMPOS = pedidos.length ? TODOS.filter(([i, l]) => pedidos.includes(i) || pedidos.includes(l))
                              : TODOS;

const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader","--use-angle=swiftshader"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1400, height: 900 });
const errs = []; pag.on("pageerror", (e) => errs.push(e.message));
await pag.goto(`http://localhost:4708${BASE}workspace/?t=plantillas`,
               { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 12000));

const informe = [];
for (const [t, nombre] of CON_AREA) {
  const ok = await pag.evaluate((tt) => {
    const q = window.__hekatanParams?.();
    if (!q) return "sin __hekatanParams()";
    q.tipo = tt;
    window.__hekatanRebuild?.(); window.__hekatanAutoFit?.();
    return "ok";
  }, t);
  if (ok !== "ok") { console.error(ok); break; }
  await new Promise((r) => setTimeout(r, 6000));

  for (const [campo, etiqueta] of CAMPOS) {
    const est = await pag.evaluate((c) => {
      // El gancho primero; si el build es viejo, trepando por los padres del
      // canvas, que es donde vive `__settings` (main.ts lo cuelga del viewerElm).
      let s = window.__hekatanSettings?.();
      if (!s) {
        let n = document.querySelector("canvas");
        while (n && !n.__settings) n = n.parentElement;
        s = n?.__settings;
      }
      if (!s) return { err: "sin settings del viewer" };
      // ⚠️ Cada ajuste es un State de van.js, no un valor: hay que escribir
      // `.val`. Asignando el string directo se REEMPLAZA el State, la
      // reactividad se rompe y la vista se queda como estaba — sin error, y
      // con el desplegable ensenando el campo viejo. Es lo que pasó la primera
      // vez: tres capturas «de tres campos» que eran la misma imagen.
      const poner = (k, v) => { if (s[k] && "val" in s[k]) s[k].val = v; else s[k] = v; };
      poner("shellResults", c);
      poner("deformedShape", true);
      return { ok: true, campo: s.shellResults?.val ?? s.shellResults };
    }, campo);
    await new Promise((r) => setTimeout(r, 2500));

    // La LEYENDA se lee DESPUES de que el viewer repinte: su texto trae la
    // unidad y los extremos del rango, y ahi se ve si el campo tiene datos o
    // sale plano (todos los marcadores iguales, o vacio).
    const ley = await pag.evaluate(() => {
      const l = document.getElementById("legend");
      if (!l) return { estado: "NO EXISTE" };
      const r = l.getBoundingClientRect();
      const nums = [...l.querySelectorAll("p")].map((p) => p.textContent.trim());
      // .la tapa un pane? Se cruzan los RECTANGULOS.
      // ⚠️ NO vale `elementFromPoint`: la barra lleva `pointer-events: none`
      // (para no comerse el gesto de orbitar), asi que ese metodo devuelve
      // SIEMPRE lo que hay debajo y daba "tapada" hasta cuando se veia
      // perfectamente. Falso positivo en los 68 campos.
      const solapa = (a, b) => a && b && a.x < b.x + b.width && b.x < a.x + a.width &&
                                        a.y < b.y + b.height && b.y < a.y + a.height;
      const zi = (e) => parseInt(getComputedStyle(e).zIndex || "0", 10) || 0;
      const zl = zi(l);
      const encima = ["parameters", "settings"].map((id) => document.getElementById(id))
        .filter((p) => p && p.getBoundingClientRect().width > 0 &&
                       zi(p) >= zl && solapa(r, p.getBoundingClientRect()));
      return { estado: r.width <= 0 ? "oculta"
                     : encima.length ? "TAPADA por #" + encima[0].id : "visible",
               unidad: nums[0] ?? "", min: nums[nums.length - 1] ?? "", max: nums[1] ?? "",
               plano: nums.length > 2 && new Set(nums.slice(1)).size === 1 };
    });

    // ⚠️ NO se cuenta el numero de colores del lienzo. Un canvas WebGL sin
    // `preserveDrawingBuffer` sale NEGRO al copiarlo con `drawImage`, asi que
    // ese conteo daba 1 pasara lo que pasara: un numero que parecia una medida
    // y no medía nada. Lo que se comprueba aqui es que el campo pedido quedo
    // ACTIVO y que la leyenda existe; el degradado se mira en el PNG.

    const f = join(OUT, `${t}_${nombre}_${etiqueta}_${campo}.png`);
    await pag.screenshot({ path: f });
    informe.push({ tipo: t, nombre, campo, etiqueta, activo: est.campo, ...ley, err: est.err });
    const aviso = ley.estado !== "visible" ? "  <- " + ley.estado
                : ley.plano ? "  <- RANGO PLANO (todo un color)"
                : (est.campo !== campo ? "  <- no se activo" : "");
    console.log(`  ${t} ${nombre.padEnd(18)} ${etiqueta.padEnd(5)} ${campo.padEnd(21)} ` +
                `${String(ley.unidad).padEnd(10)} ${String(ley.min).padStart(9)} .. ${String(ley.max).padStart(9)}` +
                aviso + (est.err ? "  " + est.err : ""));
  }
}
console.log(`\npageerror: ${errs.length}`);
if (errs.length) errs.slice(0, 5).forEach((e) => console.log("  " + e));
writeFileSync(join(OUT, "_informe.json"), JSON.stringify(informe, null, 1));
const malos = informe.filter((r) => r.estado !== "visible" || r.plano || r.err);
console.log(malos.length ? `
${malos.length} campos con aviso (de ${informe.length})`
                         : `
los ${informe.length} campos pintan y con barra visible`);
console.log(`-> ${OUT}   <- MIRAR los PNG`);
await nav.close(); srv.close();
