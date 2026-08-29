#!/usr/bin/env node
/**
 * El diagnostico de un .e2k importado, en DXF, PARA VERLO.
 *
 *   node cli/diagnostico_dxf.mjs <modelo.e2k> [salida.dxf]
 *
 * «124 trozos, 359 nudos» no dice donde esta el problema. Esto si: se abre en
 * el visor, se apaga la capa MODELO, se corta por un eje y se ve que en el eje
 * B falta la columna entre N+3.65 y N+7.10.
 *
 * Capas: MODELO · AREAS · EJES · PLANTAS · APOYOS · MUELLES · SUELTOS ·
 * MECANISMO. Las dos ultimas son las que hay que mirar.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, basename, join } from "node:path";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const mod = await empaquetar(`
const g = globalThis; g.window = g;
g.document = { createElement: () => ({ style:{}, getContext:()=>null }), body:{}, head:{},
  querySelector:()=>null, querySelectorAll:()=>[], addEventListener(){}, getElementById:()=>null };
g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} };
g.addEventListener = () => {}; g.matchMedia = () => ({ matches:false, addEventListener(){} });
const { parseE2k } = await import("${R}/examples/src/shared/e2kParser");
const { coserModelo } = await import("${R}/examples/src/shared/e2kCoser");
const { muellesDelModelo } = await import("${R}/examples/src/shared/e2kMuelles");
const { prepararAnalisis } = await import("${R}/examples/src/shared/e2kAnalisis");
const { diagnosticoDxf } = await import("${R}/examples/src/shared/e2kDiagnosticoDxf");
const { deform } = await import("${R}/hekatan-fem/src/index");

export function generar(t) {
  const m = parseE2k(t);
  coserModelo(m);
  const muelles = muellesDelModelo(m).muelles;
  const conMuelle = new Set(muelles.map(s => s.node));

  // Los trozos que no llegan a un apoyo POR TRASLACION.
  const ady = new Map();
  const une = (a,b) => { if(!ady.has(a)) ady.set(a,[]); ady.get(a).push(b); };
  for (const el of m.elements) for (const a of el) for (const b of el) if (a!==b) une(a,b);
  const usado = new Set(); for (const el of m.elements) for (const n of el) usado.add(n);
  const anclado = new Set();
  for (const [k,v] of (m.nodeInputs.supports ?? new Map()))
    if (v[0]||v[1]||v[2]) anclado.add(k);
  for (const s of muelles) if (s.dof < 3) anclado.add(s.node);
  const visto = new Set(); const sueltos = new Set();
  for (const s of usado) { if (visto.has(s)) continue;
    const pila=[s], c=[]; visto.add(s);
    while(pila.length){ const v=pila.pop(); c.push(v);
      for (const w of ady.get(v)??[]) if(!visto.has(w)){visto.add(w);pila.push(w);} }
    if (!c.some(x=>anclado.has(x))) for (const x of c) sueltos.add(x); }

  // Y el MODO de mecanismo: los nudos que aparta la tuberia para poder
  // resolver. Son los que, ya conectados, siguen sin sujecion.
  const antes = new Set(m.nodes.map((_, i) => i));
  const { listo, informe } = prepararAnalisis(parseE2k(t),
    { podar: true, vueltasMecanismo: 6 }, deform);
  const quedan = new Set([...listo.mapa.keys()]);
  const mecanismo = new Set();
  for (const n of usado) if (!quedan.has(n) && !sueltos.has(n)) mecanismo.add(n);

  // ── Las uniones que se quedaron a un palmo ──
  //
  // Una barra que pasa a 16 cm de un nudo y no lo toca es una union que no
  // existe, y el dibujo parece correcto. Se busca por barra contra todos los
  // nudos: si la distancia esta entre la tolerancia de cosido y medio metro,
  // es sospechosa — mas cerca ya lo habria cosido, y mas lejos no pretendia
  // tocarse.
  const casiUnidas = [];
  const N2 = m.nodes;
  m.elements.forEach((el, i) => {
    if (el.length !== 2) return;
    const a = N2[el[0]], b = N2[el[1]];
    if (!a || !b) return;
    const d = [b[0]-a[0], b[1]-a[1], b[2]-a[2]];
    const L2 = d[0]**2 + d[1]**2 + d[2]**2;
    if (L2 < 1e-9) return;
    for (let k = 0; k < N2.length; k++) {
      if (k === el[0] || k === el[1]) continue;
      const p = N2[k], w = [p[0]-a[0], p[1]-a[1], p[2]-a[2]];
      const s2 = (w[0]*d[0] + w[1]*d[1] + w[2]*d[2]) / L2;
      if (s2 <= 0.02 || s2 >= 0.98) continue;
      const q = [a[0]+s2*d[0], a[1]+s2*d[1], a[2]+s2*d[2]];
      const dist = Math.hypot(p[0]-q[0], p[1]-q[1], p[2]-q[2]);
      if (dist > 0.01 && dist < 0.5)
        casiUnidas.push({ a, b, p, d: dist, nombre: m.elementNames?.[i] });
    }
  });

  return { dxf: diagnosticoDxf(m, { sueltos, mecanismo, conMuelle, casiUnidas }),
           nCasi: casiUnidas.length,
           casiPeores: [...casiUnidas].sort((x,y)=>x.d-y.d).slice(0,6)
             .map(c => ({ nombre: c.nombre, d: +c.d.toFixed(3) })),
           nSueltos: sueltos.size, nMecanismo: mecanismo.size,
           nMuelles: conMuelle.size, informe,
           nEjes: (m.grids ?? []).length, nPlantas: (m.stories ?? []).length };
}`, "diag-dxf");

const f = process.argv[2];
if (!f) { console.error("uso: node cli/diagnostico_dxf.mjs <modelo.e2k> [salida.dxf]"); process.exit(2); }
const salida = process.argv[3] ||
  join(dirname(f), basename(f).replace(/\.e2k$/i, "") + "_diagnostico.dxf");

const r = mod.generar(readFileSync(f, "utf-8"));
mkdirSync(dirname(salida), { recursive: true });
writeFileSync(salida, r.dxf, "latin1");

console.log(`\n── ${basename(f)} ──`);
console.log(`  ${r.nEjes} ejes · ${r.nPlantas} plantas · ${r.nMuelles} nudos con muelle`);
console.log(`  capa SUELTOS   ${String(r.nSueltos).padStart(5)} nudos  (trozos que no llegan a ningun apoyo)`);
console.log(`  capa MECANISMO ${String(r.nMecanismo).padStart(5)} nudos  (siguen sin sujecion aun estando conectados)`);
console.log(`  capa CASI_UNIDAS ${String(r.nCasi).padStart(3)} casos  (una barra pasa a un palmo de un nudo y NO lo toca)`);
for (const c of r.casiPeores)
  console.log(`      ${String(c.nombre).padEnd(12)} se queda a ${(c.d*100).toFixed(0)} cm`);
console.log(`  y lo que queda resuelve con ${r.informe.nudos} nudos y ${r.informe.barras} barras`);
console.log(`\n-> ${salida}`);
console.log(`   abrelo, apaga la capa MODELO y deja EJES + SUELTOS: ahi esta el problema.`);
