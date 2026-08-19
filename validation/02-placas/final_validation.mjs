/**
 * Validacion final placa: hekatan-fem vs SAP2000 a multiples mallas
 * Confirmar que TODOS los tipos pasan el 5% con malla apropiada
 */
import { plateQ4Solve, deform, analyze, modalAnalysis } from "../hekatan-fem/src/index.ts";

const L = 4.0, t = 0.20, E = 21500000, nu = 0.20, q = 10, rho = 2.4;

// SAP2000 reference values
const SAP = {
  "Shell-Thin":  { w_mm: 0.6959, M11: 7.1441, f1: 34.211 },
  "Shell-Thick": { w_mm: 0.7237, M11: 7.4440, f1: 33.514 },
  "Plate-Thin":  { w_mm: 0.6959, M11: 7.1441, f1: 0 },
  "Plate-Thick": { w_mm: 0.7237, M11: 7.4440, f1: 0 },
};

console.log("============================================================");
console.log(" VALIDACION FINAL — HEKATAN-FEM vs SAP2000 (post-fix)");
console.log("============================================================");
console.log("");

const meshes = [8, 16];
console.log("Malla    Tipo                   w[mm]      M11        H-vs-SAP w%   M%");
console.log("─".repeat(85));

for (const N of meshes) {
  // Plate-Thin / Plate-Thick
  for (const [name, theory] of [["Plate-Thin", 1], ["Plate-Thick", 0]]) {
    const out = plateQ4Solve({
      E, nu, thickness: t,
      theoryType: theory,
      meshLx: L, meshLy: L, meshNx: N, meshNy: N,
      bcType: "simply-supported",
      pressure: -q,
    });
    const w = Math.abs(out.maxW) * 1000;
    const M = Math.abs(out.maxMxx);
    const sap = SAP[name];
    const dW = ((w - sap.w_mm) / sap.w_mm) * 100;
    const dM = ((M - sap.M11) / sap.M11) * 100;
    console.log(
      `${N}x${N}`.padEnd(9) + name.padEnd(20) +
      w.toFixed(4).padStart(10) + " " +
      M.toFixed(4).padStart(10) + "    " +
      `${dW >= 0 ? "+" : ""}${dW.toFixed(2)}%`.padStart(7) + " " +
      `${dM >= 0 ? "+" : ""}${dM.toFixed(2)}%`.padStart(7) +
      (Math.abs(dW) < 5 && Math.abs(dM) < 5 ? "  ✅" : "  ⚠")
    );
  }

  // Shell-Thin / Shell-Thick (deform+analyze)
  const dx = L / N;
  const nodes = [];
  for (let j = 0; j <= N; j++)
    for (let i = 0; i <= N; i++)
      nodes.push([i * dx, j * dx, 0]);
  const elements = [];
  for (let j = 0; j < N; j++)
    for (let i = 0; i < N; i++) {
      const n0 = j * (N + 1) + i;
      elements.push([n0, n0 + 1, n0 + 1 + (N + 1), n0 + (N + 1)]);
    }

  const supports = new Map();
  for (let j = 0; j <= N; j++)
    for (let i = 0; i <= N; i++) {
      const isPerim = (i === 0 || i === N || j === 0 || j === N);
      if (!isPerim) continue;
      const idx = j * (N + 1) + i;
      if (i === 0 && j === 0) supports.set(idx, [true, true, true, false, false, true]);
      else if (i === N && j === 0) supports.set(idx, [false, true, true, false, false, true]);
      else supports.set(idx, [false, false, true, false, false, true]);
    }

  const loads = new Map();
  const F_per_elem_node = (q * dx * dx) / 4;
  for (let j = 0; j <= N; j++) {
    for (let i = 0; i <= N; i++) {
      const idx = j * (N + 1) + i;
      const isCorner = (i === 0 || i === N) && (j === 0 || j === N);
      const isEdge = (i === 0 || i === N || j === 0 || j === N) && !isCorner;
      let nElems = 4;
      if (isCorner) nElems = 1;
      else if (isEdge) nElems = 2;
      loads.set(idx, [0, 0, -F_per_elem_node * nElems, 0, 0, 0]);
    }
  }

  const G = E / (2 * (1 + nu));
  const ei = {
    elasticities: new Map(elements.map((_, i) => [i, E])),
    poissonsRatios: new Map(elements.map((_, i) => [i, nu])),
    thicknesses: new Map(elements.map((_, i) => [i, t])),
    densities: new Map(elements.map((_, i) => [i, rho])),
    shearModuli: new Map(elements.map((_, i) => [i, G])),
  };
  const ni = { supports, loads };

  const dout = deform(nodes, elements, ni, ei);
  const aout = analyze(nodes, elements, ei, dout);

  let maxUz = 0;
  dout.deformations.forEach((d) => {
    if (Math.abs(d[2]) > Math.abs(maxUz)) maxUz = d[2];
  });
  let maxM11 = 0;
  aout.bendingXX.forEach((arr) => {
    for (const v of arr) if (Math.abs(v) > Math.abs(maxM11)) maxM11 = v;
  });

  const w = Math.abs(maxUz) * 1000;
  const M = Math.abs(maxM11);

  // Modal
  let f1 = 0;
  try {
    const mout = modalAnalysis(nodes, elements, ni, ei, 9);
    f1 = mout.frequencies[0];
  } catch {}

  for (const name of ["Shell-Thin", "Shell-Thick"]) {
    const sap = SAP[name];
    const dW = ((w - sap.w_mm) / sap.w_mm) * 100;
    const dM = ((M - sap.M11) / sap.M11) * 100;
    const dF = ((f1 - sap.f1) / sap.f1) * 100;
    console.log(
      `${N}x${N}`.padEnd(9) + name.padEnd(20) +
      w.toFixed(4).padStart(10) + " " +
      M.toFixed(4).padStart(10) + "    " +
      `${dW >= 0 ? "+" : ""}${dW.toFixed(2)}%`.padStart(7) + " " +
      `${dM >= 0 ? "+" : ""}${dM.toFixed(2)}%`.padStart(7) +
      (Math.abs(dW) < 5 && Math.abs(dM) < 5 ? "  ✅" : "  ⚠") +
      `  f1=${f1.toFixed(2)}Hz (${dF >= 0 ? "+" : ""}${dF.toFixed(2)}%)`
    );
  }
}

console.log("");
console.log("============================================================");
console.log(" CRITERIO: |Hekatan vs SAP2000| < 5%");
console.log("============================================================");
