import { deform } from './awatif-fem/src/deform.js';

// Test with 1x1, 2x2, 4x4, 8x8 mesh and distributed load on top edge
for (const nDiv of [1, 2, 4, 8]) {
  const nodes: [number,number,number][] = [];
  for (let j = 0; j <= nDiv; j++) {
    for (let i = 0; i <= nDiv; i++) {
      nodes.push([i / nDiv, j / nDiv, 0]);
    }
  }
  const elements: number[][] = [];
  for (let j = 0; j < nDiv; j++) {
    for (let i = 0; i < nDiv; i++) {
      const n0 = j * (nDiv + 1) + i;
      elements.push([n0, n0 + 1, n0 + nDiv + 2, n0 + nDiv + 1]);
    }
  }

  // Fix bottom row
  const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
  for (let i = 0; i <= nDiv; i++) {
    supports.set(i, [true,true,true,true,true,true]);
  }

  // Distribute 10 tonf uniformly on top edge (nDiv+1 nodes)
  // Consistent nodal loads for uniform traction:
  // Corner nodes get w*L/(2*nDiv), interior nodes get w*L/nDiv
  // Total = 2 * w*L/(2*nDiv) + (nDiv-1) * w*L/nDiv = w*L = 10 tonf
  const loads = new Map<number, [number,number,number,number,number,number]>();
  const totalForce = 10; // tonf
  const segLen = 1 / nDiv;
  for (let i = 0; i <= nDiv; i++) {
    const topNode = nDiv * (nDiv + 1) + i;
    let f: number;
    if (i === 0 || i === nDiv) {
      f = totalForce * segLen / 2; // corner: half tributary
    } else {
      f = totalForce * segLen; // interior: full tributary
    }
    loads.set(topNode, [f, 0, 0, 0, 0, 0]);
  }

  const elementInputs: any = {
    elasticities: new Map(elements.map((_, i) => [i, 2e7])),
    thicknesses: new Map(elements.map((_, i) => [i, 0.1])),
    poissonsRatios: new Map(elements.map((_, i) => [i, 0.2])),
  };

  try {
    const result = deform(nodes, elements, { supports, loads }, elementInputs);
    // Get max Ux on top edge
    let maxUx = 0;
    for (let i = 0; i <= nDiv; i++) {
      const topNode = nDiv * (nDiv + 1) + i;
      const ux = Math.abs(result?.deformations?.get(topNode)?.[0] ?? 0);
      if (ux > maxUx) maxUx = ux;
    }
    const etabs = 2.6036e-5;
    const err = (Math.abs(maxUx - etabs) / etabs * 100).toFixed(1);
    console.log(`${nDiv}x${nDiv} (${elements.length} elem): Ux_max=${maxUx.toExponential(4)} m  ETABS=${etabs.toExponential(4)}  err=${err}%`);
  } catch (e: any) {
    console.log(`${nDiv}x${nDiv}: ERROR - ${e.message}`);
  }
}
