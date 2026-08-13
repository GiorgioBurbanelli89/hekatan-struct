/**
 * END RELEASES: una barra con el momento liberado en un extremo tiene que
 * comportarse como articulada aunque el APOYO sea un empotramiento.
 *
 * Este caso existe porque el motor no los aplicaba en ningun solver.
 * `getLocalStiffnessMatrix.cpp` traia la condensacion estatica escrita desde el
 * principio, pero nada rellenaba `elementInputs.momentReleases` por el camino
 * WASM: `deformCpp.ts` preparaba los punteros y justo debajo ponia
 * *"rigidOffsets, releases are handled by the TS solver"* — y todo va por WASM.
 * O sea que una barra biarticulada entraba EMPOTRADA, en el estatico y en el
 * modal. Es el sexto dato de la lista de los que no llegaban, y el peor: los
 * otros cinco al menos llegaban por un camino.
 *
 * El arbitro es la viga con los DOS APOYOS EMPOTRADOS y carga en el centro.
 * Lo unico que cambia entre los dos modelos es el release, asi que la
 * diferencia solo puede venir de ahi:
 *
 *     sin liberar (empotrada-empotrada):  d = PL^3 / (192*E*I)
 *     liberando M3 en los dos extremos:   d = PL^3 / (48*E*I)   (4 veces mas)
 *
 * Y lo mismo en frecuencia, para que no se repita lo de siempre —que el dato
 * llegue al estatico y no al modal—:
 *
 *     empotrada-empotrada: beta*L = 4.730041
 *     biapoyada:           beta*L = pi
 *     razon f_bi / f_emp = (pi / 4.730041)^2 = 0.44145
 *
 * La viga va a lo largo de X y flecta en vertical. Con la convencion CSI el eje
 * 2 de una barra horizontal apunta hacia arriba, asi que la flexion vertical es
 * la del plano 1-2: el momento que hay que soltar es M3, o sea las banderas 5
 * (nudo I) y 11 (nudo J).
 */
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { resolverHeks } from "../lib/heks.mjs";
import { modal } from "../lib/wasm.mjs";

const L = 8.0;            // m, luz total
const N = 8;              // tramos (par: hay nudo en el centro)
const E = 2.0e8;          // kPa
const NU = 0.3;
const A = 0.2;            // m2 — esbelta, para que el cortante no ensucie
const I = 1.0e-4;         // m4
const J = 1.0e-6;
const RHO = 7.85;         // t/m3
const P = 100;            // kN hacia abajo, en el centro

const CENTRO = N / 2 + 1;

/** `sueltos` = true -> se articulan los DOS extremos de la viga (M3). */
function guion(sueltos, formaCorta) {
  const l = [];
  for (let i = 0; i <= N; i++) l.push(`node ${i + 1} ${(i * L) / N} 0 0`);
  for (let i = 0; i < N; i++)
    l.push(`frame ${i + 1} ${i + 1} ${i + 2} ${E} ${A} ${I} ${I} ${J} ${NU} ${RHO}`);
  // los DOS apoyos empotrados en los dos modelos: lo unico que cambia es el
  // release, asi que la diferencia no puede venir de otro sitio
  l.push("support 1 fixed");
  l.push(`support ${N + 1} fixed`);
  for (let i = 1; i < N; i++) l.push(`support ${i + 1} 0 1 0 1 0 1`);
  if (sueltos) {
    if (formaCorta) {
      // `pin` en el extremo I de la primera barra y en el J de la ultima
      l.push(`release 1 pin fix`);
      l.push(`release ${N} fix pin`);
    } else {
      //          U1 U2 U3 R1 R2 R3 | U1 U2 U3 R1 R2 R3
      l.push(`release 1 0 0 0 0 0 1  0 0 0 0 0 0`);
      l.push(`release ${N} 0 0 0 0 0 0  0 0 0 0 0 1`);
    }
  }
  l.push(`load ${CENTRO} 0 0 ${-P}`);
  l.push("solve");
  return l.join("\n") + "\n";
}

async function flecha(dir, sueltos, formaCorta, nombre) {
  const ruta = join(dir, `${nombre}.heks`);
  writeFileSync(ruta, guion(sueltos, formaCorta), "utf-8");
  const r = await resolverHeks(ruta);
  const d = r.deformOutputs?.deformations?.get?.(CENTRO - 1);
  return d ? -d[2] : NaN;
}

// ── el mismo modelo, pero por el camino del MODAL ──
const nodes = [];
for (let i = 0; i <= N; i++) nodes.push([(i * L) / N, 0, 0]);
const elements = [];
for (let i = 0; i < N; i++) elements.push([i, i + 1]);
const cada = (v) => new Map(elements.map((_, i) => [i, v]));
const eiBase = {
  elasticities: cada(E), areas: cada(A),
  momentsOfInertiaZ: cada(I), momentsOfInertiaY: cada(I),
  shearModuli: cada(E / (2 * (1 + NU))), torsionalConstants: cada(J),
  densities: cada(RHO),
  // Bernoulli puro (As < 0): el arbitro es Euler-Bernoulli
  shearAreasY: cada(-1), shearAreasZ: cada(-1),
};
// solo puede flectar en vertical: libres Uz y Ry, lo demas tomado
const soportes = new Map();
for (let i = 0; i <= N; i++)
  soportes.set(i, i === 0 || i === N
    ? [true, true, true, true, true, true]
    : [true, true, false, true, false, true]);
const niModal = { supports: soportes };

export const nombre = "end-releases";
export const descripcion =
  "Una barra con el momento liberado se comporta como articulada, aunque el apoyo sea empotramiento";

export async function correr() {
  const dir = mkdtempSync(join(tmpdir(), "hkRel-"));
  const filas = [];

  const dEmp = await flecha(dir, false, false, "empotrada");
  const dRel = await flecha(dir, true, false, "liberada");
  const dCorta = await flecha(dir, true, true, "liberada_corta");

  const teoEmp = (P * L ** 3) / (192 * E * I);
  const teoArt = (P * L ** 3) / (48 * E * I);

  // 1) control: sin releases tiene que dar la empotrada
  filas.push({
    que: "sin release vs PL^3/192EI",
    medido: (100 * (dEmp - teoEmp)) / teoEmp, limite: 1.5,
    ok: Math.abs((100 * (dEmp - teoEmp)) / teoEmp) <= 1.5,
    detalle: `${(dEmp * 1000).toFixed(3)} mm vs ${(teoEmp * 1000).toFixed(3)}`,
  });

  // 2) LA QUE DECIDE en el estatico: con los momentos sueltos tiene que dar la
  //    biapoyada. Si el motor tira los releases, sale la de arriba y esto falla
  //    por un factor de 4.
  const e2 = (100 * (dRel - teoArt)) / teoArt;
  filas.push({
    que: "con release vs PL^3/48EI",
    medido: Number.isFinite(e2) ? e2 : 1e9, limite: 1.5,
    ok: Number.isFinite(e2) && Math.abs(e2) <= 1.5,
    detalle: `${(dRel * 1000).toFixed(3)} mm vs ${(teoArt * 1000).toFixed(3)} (si los ignora: ${(dEmp * 1000).toFixed(3)})`,
  });

  // 3) la forma corta `pin fix` tiene que decir lo mismo que las 12 banderas
  const e3 = (100 * (dCorta - dRel)) / dRel;
  filas.push({
    que: "'release N pin fix' = 12 banderas",
    medido: Number.isFinite(e3) ? e3 : 1e9, limite: 0.01,
    ok: Number.isFinite(e3) && Math.abs(e3) <= 0.01,
    detalle: `${(dCorta * 1000).toFixed(4)} mm vs ${(dRel * 1000).toFixed(4)}`,
  });

  // 4) y AHORA EL MODAL, que es donde se cae siempre. Mismo modelo, mismo
  //    release, por el otro camino del C++.
  const rel = new Map();
  const b = () => new Array(12).fill(false);
  const r0 = b(); r0[5] = true;             // M3 en el nudo I de la 1a barra
  const rN = b(); rN[11] = true;            // M3 en el nudo J de la ultima
  rel.set(0, r0);
  rel.set(N - 1, rN);

  const fEmp = (await modal(nodes, elements, niModal, eiBase, 4, 0))[0];
  const fRel = (await modal(nodes, elements, niModal,
                            { ...eiBase, momentReleases: rel }, 4, 0))[0];
  const razon = fRel / fEmp;
  const esperada = (Math.PI / 4.730041) ** 2;
  filas.push({
    que: "modal: f_biapoyada / f_empotrada = (pi/4.730)^2",
    medido: (100 * (razon - esperada)) / esperada, limite: 2.0,
    ok: Number.isFinite(razon) && Math.abs((100 * (razon - esperada)) / esperada) <= 2.0,
    detalle: `${razon.toFixed(4)} vs ${esperada.toFixed(4)} (si el modal los ignora sale 1.0)`,
  });

  return filas;
}
