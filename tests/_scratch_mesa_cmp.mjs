// Prueba de arbitraje barra a barra de mesa-torsion (Dead, offsets=0).
import { readFileSync } from "node:fs";
import { empaquetar, R } from "./lib/bundle.mjs";
import { fuerzasDeBarra } from "./lib/heks.mjs";
import { compararFuerzas, CAMPOS } from "./lib/comparar.mjs";

const JSON_ETABS = process.argv[2];
const CASE = process.argv[3] || "Dead";
const CASE_IDX = { Dead: 0, Live: 1, SCP: 2, UDCon1: 3, UDCon2: 4 }[CASE];

const { mesaTorsion } = await empaquetar(
  `export { mesaTorsion } from "${R}/examples/src/mesa-torsion/mesaTorsion";\n`, "mesaT");

// params = defaults, con activeCase=CASE y offsets OFF
const p = {};
for (const [k, def] of Object.entries(mesaTorsion.params)) p[k] = def.default;
p.activeCase = CASE_IDX;
p.rigidOffsets = 0;

const st = (v) => ({ val: v });
const states = {
  nodes: st([]), elements: st([]), nodeInputs: st({}), elementInputs: st({}),
  deformOutputs: st({}), analyzeOutputs: st({}), objects3D: st([]),
};
mesaTorsion.build(p, states);

const struct = fuerzasDeBarra({
  nodes: states.nodes.val,
  elements: states.elements.val,
  analyzeOutputs: states.analyzeOutputs.val,
});
const etabsAll = JSON.parse(readFileSync(JSON_ETABS, "utf-8"));
const esCol = (e) => Math.abs(e.i[2] - e.j[2]) > 1e-6;

function reporte(nombre, structF, etabsF) {
  const r = compararFuerzas(structF, etabsF);
  console.log(`\n=== ${nombre}: struct=${r.nStruct} etabs=${r.nEtabs} emparejadas=${r.emparejadas} ===`);
  console.log("campo   pico(ETABS)   medio%   max%    peor(struct vs etabs)");
  for (const c of CAMPOS) {
    const x = r.campos[c];
    const peor = x.peor ? `${x.peor.struct.toFixed(3)} vs ${x.peor.etabs.toFixed(3)}` : "";
    console.log(`${c.padEnd(4)} ${x.pico.toFixed(3).padStart(10)} ${x.medio.toFixed(2).padStart(9)} ${x.max.toFixed(2).padStart(8)}   ${peor}`);
  }
}

reporte(`${CASE} TODO`, struct, etabsAll);
reporte(`${CASE} COLUMNAS`, struct.filter(esCol), etabsAll.filter(esCol));
reporte(`${CASE} VIGAS`, struct.filter(s => !esCol(s)), etabsAll.filter(e => !esCol(e)));
