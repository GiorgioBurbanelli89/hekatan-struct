import { empaquetar, R } from "./lib/bundle.mjs";
const { mesaTorsion } = await empaquetar(
  `export { mesaTorsion } from "${R}/examples/src/mesa-torsion/mesaTorsion";\n`, "mesaT");
const { modalAnalysis } = await empaquetar(`export { modalAnalysis } from "${R}/hekatan-fem/src/index";\n`, "fem");
const p = {}; for (const [k, d] of Object.entries(mesaTorsion.params)) p[k] = d.default;
p.activeCase = 0; p.rigidOffsets = 0;
const st = (v) => ({ val: v });
const states = { nodes: st([]), elements: st([]), nodeInputs: st({}), elementInputs: st({}),
  deformOutputs: st({}), analyzeOutputs: st({}), objects3D: st([]) };
mesaTorsion.build(p, states);
const out = modalAnalysis(states.nodes.val, states.elements.val, states.nodeInputs.val, states.elementInputs.val, 6);
console.log("periodos Hekatan (offsets=0):");
for (let i = 0; i < 3; i++) console.log(`  T${i+1} = ${(1/out.frequencies[i]).toFixed(5)} s`);
console.log("ETABS ref: T1=T2=0.34337 (lateral)  T3=0.28756 (torsion Rz)");
