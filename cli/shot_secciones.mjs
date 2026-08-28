#!/usr/bin/env node
/**
 * DIBUJA las secciones del Section Designer y las saca a PNG.
 *
 *   node cli/shot_secciones.mjs
 *
 * Los numeros dicen si el area sale; NO dicen si la pieza esta donde se queria.
 * Un canal girado 90 grados o un espejo al reves dan un area correcta y una
 * seccion que no es la del plano. Eso solo se caza MIRANDO el dibujo — por eso
 * esto existe y por eso hay que abrir los PNG.
 *
 * Sale:
 *   cli/shots/secciones/<nombre>.png           la seccion entera
 *   cli/shots/secciones/frames/<n>_<k>.png     pieza a pieza, para ver como se
 *                                              compone (los frames, no un GIF:
 *                                              un GIF no se puede revisar)
 */
import puppeteer from "puppeteer";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots", "secciones");
const FR = join(OUT, "frames");
mkdirSync(FR, { recursive: true });

const SD = await empaquetar(
  `export * from "${R}/examples/src/shared/sectionDesigner";\n`, "sd-shot");

// El acero y la madera del modelo real, para que los colores signifiquen algo.
const E_ACERO = 2.0e8, E_HORM = 2.1e7, E_MADERA = 1.1e7;

const CASOS = [
  {
    n: "01_rectangulo",
    titulo: "Rectangulo 30x60 — hormigon",
    piezas: [{ forma: { tipo: "rect", d: 0.6, b: 0.3 }, E: E_HORM }],
  },
  {
    n: "02_tubo",
    titulo: "Tubo 200x200x10 — el hueco RESTA",
    piezas: [{ forma: { tipo: "tube", d: 0.2, b: 0.2, tf: 0.01, tw: 0.01 }, E: E_ACERO }],
  },
  {
    n: "03_perfil_I",
    titulo: "Perfil I 400x200x15x10",
    piezas: [{ forma: { tipo: "isection", d: 0.4, b: 0.2, tf: 0.015, tw: 0.01 }, E: E_ACERO }],
  },
  {
    n: "04_cft",
    titulo: "CFT 300x300x10 — tubo de acero relleno de hormigon",
    piezas: [
      { forma: { tipo: "rect", d: 0.28, b: 0.28 }, E: E_HORM },
      { forma: { tipo: "tube", d: 0.3, b: 0.3, tf: 0.01, tw: 0.01 }, E: E_ACERO },
    ],
  },
  {
    // La de verdad del modelo real: `DOBLE C_250X50X5mm+MADERA`, cuatro piezas.
    n: "05_doble_C_madera",
    titulo: "DOBLE C 250x50x5 + MADERA — la del modelo real",
    piezas: [
      { forma: { tipo: "channel", d: 0.25, b: 0.05, tf: 0.005, tw: 0.005 },
        xc: -0.0875, mirror: true, E: E_ACERO },
      { forma: { tipo: "channel", d: 0.25, b: 0.05, tf: 0.005, tw: 0.005 },
        xc: 0.0875, E: E_ACERO },
      { forma: { tipo: "rect", d: 0.24, b: 0.045 }, xc: -0.09, E: E_MADERA },
      { forma: { tipo: "rect", d: 0.24, b: 0.045 }, xc: 0.09, E: E_MADERA },
    ],
  },
  {
    n: "06_pilote_armado",
    titulo: "Pilote D40 con 8 barras — la armadura son puntos con area",
    piezas: [
      { forma: { tipo: "circle", d: 0.4 }, E: E_HORM },
      ...Array.from({ length: 8 }, (_, i) => {
        const a = (2 * Math.PI * i) / 8;
        return { forma: { tipo: "rebar", area: 2.01e-4 },
                 xc: 0.15 * Math.cos(a), yc: 0.15 * Math.sin(a), E: E_ACERO };
      }),
    ],
  },
];

const nav = await puppeteer.launch({
  headless: "new", args: ["--no-sandbox", "--disable-setuid-sandbox"] });
const pag = await nav.newPage();

async function aPng(svg, ruta, w = 460, h = 460) {
  await pag.setViewport({ width: w, height: h });
  await pag.setContent(`<body style="margin:0">${svg}</body>`, { waitUntil: "domcontentloaded" });
  await pag.screenshot({ path: ruta });
}

console.log("seccion                     piezas      A [cm2]        I33 [m4]      I22 [m4]");
console.log("-".repeat(84));
for (const c of CASOS) {
  const p = SD.propiedadesSD(c.piezas, E_ACERO);
  console.log(c.n.padEnd(28) + String(c.piezas.length).padStart(4) +
    (p.A * 1e4).toFixed(2).padStart(13) + p.Iz.toExponential(4).padStart(16) +
    p.Iy.toExponential(4).padStart(15));
  const opt = { titulo: c.titulo, Eref: E_ACERO, refNombre: "acero" };
  await aPng(SD.dibujarSVG(c.piezas, opt), join(OUT, c.n + ".png"));
  // Y los frames, para ver COMO se compone.
  const fr = SD.fotogramasSVG(c.piezas, opt);
  for (let i = 0; i < fr.length; i++)
    await aPng(fr[i], join(FR, `${c.n}_${String(i + 1).padStart(2, "0")}.png`));
}
await nav.close();
console.log(`\n-> ${OUT}   ← MIRAR los PNG`);
console.log(`-> ${FR}   (pieza a pieza)`);
