import { readFileSync } from "node:fs";
import { empaquetar, R } from "./lib/bundle.mjs";
import { fuerzasDeBarra } from "./lib/heks.mjs";

const JSON_ETABS = process.argv[2];
const { mesaTorsion } = await empaquetar(
  `export { mesaTorsion } from "${R}/examples/src/mesa-torsion/mesaTorsion";\n`, "mesaT");
const p = {};
for (const [k, def] of Object.entries(mesaTorsion.params)) p[k] = def.default;
p.activeCase = 0; p.rigidOffsets = 0;
const st = (v) => ({ val: v });
const states = { nodes: st([]), elements: st([]), nodeInputs: st({}), elementInputs: st({}),
  deformOutputs: st({}), analyzeOutputs: st({}), objects3D: st([]) };
mesaTorsion.build(p, states);
const struct = fuerzasDeBarra({ nodes: states.nodes.val, elements: states.elements.val,
  analyzeOutputs: states.analyzeOutputs.val });
const etabs = JSON.parse(readFileSync(JSON_ETABS, "utf-8"));

const r3 = (v) => v.map(x => Math.round(x * 1000) / 1000);
const key = (a, b) => { const ra = r3(a), rb = r3(b);
  const menor = ra[0] < rb[0] || (ra[0]===rb[0] && (ra[1]<rb[1] || (ra[1]===rb[1] && ra[2]<=rb[2])));
  return menor ? `${ra}|${rb}` : `${rb}|${ra}`; };
const eMap = new Map(); for (const e of etabs) eMap.set(key(e.i, e.j), e);

const esCol = (e) => Math.abs(e.i[2] - e.j[2]) > 1e-6;
const f2 = (a) => a.map(x => x.toFixed(3).padStart(9)).join(" ");

console.log("=== COLUMNAS: struct end-forces (N Vy Vz T My Mz) vs etabs (P V2 V3 T M2 M3) ===");
for (const s of struct.filter(esCol)) {
  const e = eMap.get(key(s.i, s.j)); if (!e) continue;
  console.log(`\nbarra i=${r3(s.i)} j=${r3(s.j)}`);
  console.log(`  struct N =${f2(s.N)}  Vy=${f2(s.Vy)}  Vz=${f2(s.Vz)}`);
  console.log(`  struct T =${f2(s.T)}  My=${f2(s.My)}  Mz=${f2(s.Mz)}`);
  console.log(`  etabs  P =${f2(e.P)}  V2=${f2(e.V2)}  V3=${f2(e.V3)}`);
  console.log(`  etabs  T =${f2(e.T)}  M2=${f2(e.M2)}  M3=${f2(e.M3)}`);
}
console.log("\n=== 2 VIGAS (segmento extremo lado S) ===");
let shown = 0;
for (const s of struct.filter(x => !esCol(x))) {
  const e = eMap.get(key(s.i, s.j)); if (!e) continue;
  if (Math.abs(s.i[1]) > 1e-6 || Math.abs(s.j[1]) > 1e-6) continue; // lado y=0
  console.log(`\nbarra i=${r3(s.i)} j=${r3(s.j)}`);
  console.log(`  struct N =${f2(s.N)}  Vy=${f2(s.Vy)}  Vz=${f2(s.Vz)}`);
  console.log(`  struct T =${f2(s.T)}  My=${f2(s.My)}  Mz=${f2(s.Mz)}`);
  console.log(`  etabs  P =${f2(e.P)}  V2=${f2(e.V2)}  V3=${f2(e.V3)}`);
  console.log(`  etabs  T =${f2(e.T)}  M2=${f2(e.M2)}  M3=${f2(e.M3)}`);
  if (++shown >= 2) break;
}
