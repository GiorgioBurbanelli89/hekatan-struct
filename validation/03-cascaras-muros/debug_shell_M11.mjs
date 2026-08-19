/**
 * Debug: por que analyze() para shellQ4 da M11 con 33% de error
 *
 * Compara:
 *   1. M11 directo del computeQ4ShellStresses (analyze.ts)
 *   2. M11 calculado manualmente desde uLocal del elemento central
 *   3. M11 esperado por curvatura de Navier modo (1,1)
 */
import { deform, analyze } from "../hekatan-fem/src/index.ts";

const L = 4.0, t = 0.20, E = 21500000, nu = 0.20, q = 10, rho = 2.4;
const NDiv = 8;
const dx = L / NDiv;

const nodes = [];
for (let j = 0; j <= NDiv; j++)
  for (let i = 0; i <= NDiv; i++)
    nodes.push([i * dx, j * dx, 0]);

const elements = [];
for (let j = 0; j < NDiv; j++)
  for (let i = 0; i < NDiv; i++) {
    const n0 = j * (NDiv + 1) + i;
    elements.push([n0, n0 + 1, n0 + 1 + (NDiv + 1), n0 + (NDiv + 1)]);
  }

const supports = new Map();
for (let j = 0; j <= NDiv; j++)
  for (let i = 0; i <= NDiv; i++) {
    const isPerim = (i === 0 || i === NDiv || j === 0 || j === NDiv);
    if (!isPerim) continue;
    const idx = j * (NDiv + 1) + i;
    if (i === 0 && j === 0) supports.set(idx, [true, true, true, false, false, true]);
    else if (i === NDiv && j === 0) supports.set(idx, [false, true, true, false, false, true]);
    else supports.set(idx, [false, false, true, false, false, true]);
  }

const loads = new Map();
const F_per_elem_node = (q * dx * dx) / 4;
for (let j = 0; j <= NDiv; j++) {
  for (let i = 0; i <= NDiv; i++) {
    const idx = j * (NDiv + 1) + i;
    const isCorner = (i === 0 || i === NDiv) && (j === 0 || j === NDiv);
    const isEdge = (i === 0 || i === NDiv || j === 0 || j === NDiv) && !isCorner;
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

console.log("Resolviendo placa 8x8...");
const dout = deform(nodes, elements, ni, ei);
const aout = analyze(nodes, elements, ei, dout);

// Encontrar el elemento mas cercano al centro de la placa
// Placa centro = (2, 2). Elementos centrales tienen indices (3,3), (3,4), (4,3), (4,4)
// En la lista linealizada: idx = j*8 + i para elemento (i,j)
const centerElem = 4 * 8 + 3;  // i=3, j=4 → centroide en (1.75, 2.25)
console.log(`\nElemento central indice ${centerElem}, nodos:`, elements[centerElem]);

// Mostrar deformaciones de los 4 nodos del elemento
const elemNodes = elements[centerElem];
console.log("\nDeformaciones de los 4 nodos del elemento:");
elemNodes.forEach((idx, k) => {
  const d = dout.deformations.get(idx);
  console.log(`  Nodo ${idx}  (x=${nodes[idx][0]}, y=${nodes[idx][1]}):  w=${d[2].toExponential(3)}  thetaX=${d[3].toExponential(3)}  thetaY=${d[4].toExponential(3)}`);
});

// Mostrar bendingXX del elemento desde analyze()
const M11_arr = aout.bendingXX.get(centerElem);
console.log(`\naout.bendingXX[${centerElem}] = [${M11_arr.map(v => v.toFixed(4)).join(", ")}] kN.m/m`);
console.log(`Max abs: ${Math.max(...M11_arr.map(Math.abs)).toFixed(4)}`);

// Calculo manual de M11 al centroide del elemento (xi=eta=0):
// M11 = D × kappaXX  donde kappaXX = sum(dNdx[n] × thetaY[n])
const D_b = E * Math.pow(t, 3) / (12 * (1 - nu * nu));
console.log(`\nD bending = ${D_b.toFixed(4)} kN.m`);

// Coords locales (placa horizontal: local = global)
const p = elemNodes.map(idx => nodes[idx]);
const cx = (p[0][0] + p[1][0] + p[2][0] + p[3][0]) / 4;
const cy = (p[0][1] + p[1][1] + p[2][1] + p[3][1]) / 4;
console.log(`Centroide: (${cx}, ${cy})`);

const xl = p.map(pn => pn[0] - cx);
const yl = p.map(pn => pn[1] - cy);

const dNdxi = [-0.25, 0.25, 0.25, -0.25];
const dNdeta = [-0.25, -0.25, 0.25, 0.25];

let J00 = 0, J01 = 0, J10 = 0, J11 = 0;
for (let n = 0; n < 4; n++) {
  J00 += dNdxi[n] * xl[n]; J01 += dNdxi[n] * yl[n];
  J10 += dNdeta[n] * xl[n]; J11 += dNdeta[n] * yl[n];
}
const detJ = J00 * J11 - J01 * J10;
const invJ00 = J11 / detJ, invJ01 = -J01 / detJ, invJ10 = -J10 / detJ, invJ11 = J00 / detJ;

const dNdx = [], dNdy = [];
for (let n = 0; n < 4; n++) {
  dNdx.push(invJ00 * dNdxi[n] + invJ01 * dNdeta[n]);
  dNdy.push(invJ10 * dNdxi[n] + invJ11 * dNdeta[n]);
}

let kappaXX = 0, kappaYY = 0, kappaXY = 0;
elemNodes.forEach((idx, k) => {
  const d = dout.deformations.get(idx);
  const thetaX = d[3];
  const thetaY = d[4];
  kappaXX += dNdx[k] * thetaY;
  kappaYY += -dNdy[k] * thetaX;
  kappaXY += dNdy[k] * thetaY - dNdx[k] * thetaX;
});

const Dfactor = E / (1 - nu * nu);
const t3_12 = t * t * t / 12;
const Mxx_manual = Dfactor * t3_12 * kappaXX + Dfactor * nu * t3_12 * kappaYY;
const Myy_manual = Dfactor * nu * t3_12 * kappaXX + Dfactor * t3_12 * kappaYY;
const Mxy_manual = Dfactor * (1 - nu) / 2 * t3_12 * kappaXY;

console.log(`\nCalculo manual (siguiendo formula de analyze.ts):`);
console.log(`  kappaXX = ${kappaXX.toExponential(3)}`);
console.log(`  kappaYY = ${kappaYY.toExponential(3)}`);
console.log(`  Mxx     = ${Mxx_manual.toFixed(4)} kN.m/m`);
console.log(`  Myy     = ${Myy_manual.toFixed(4)} kN.m/m`);

// Esperado al centroide (1.75, 2.25) para Navier modo (1,1):
// w = w_max * sin(pi*x/L) * sin(pi*y/L)
// Mxx = -D * d²w/dx² = D * w_max * (pi/L)² * sin(pi*x/L) * sin(pi*y/L)
const w_max_navier = 0.00406 * q * Math.pow(L, 4) / D_b;
const sinX = Math.sin(Math.PI * 1.75 / L);
const sinY = Math.sin(Math.PI * 2.25 / L);
const Mxx_navier_centroide = D_b * w_max_navier * Math.pow(Math.PI / L, 2) * sinX * sinY;
console.log(`\nNavier 1-modo en centroide (1.75, 2.25):`);
console.log(`  w_max  = ${w_max_navier.toExponential(3)}`);
console.log(`  Mxx    = ${Mxx_navier_centroide.toFixed(4)} kN.m/m  (esperado en centroide)`);

// Theoria al CENTRO de la placa: Mxx_max = 0.0479 q L²
console.log(`\nTimoshenko al CENTRO de la placa: Mxx_max = ${(0.0479 * q * L * L).toFixed(4)} kN.m/m`);
