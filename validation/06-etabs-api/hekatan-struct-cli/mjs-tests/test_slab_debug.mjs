#!/usr/bin/env node
/**
 * Debug: verifica que los nodos de las losas son validos
 */

// Simula la generacion del edificio con losas (2x2 vanos, 3 pisos)
const xCoords = [0, 5, 10];
const yCoords = [0, 4, 8];
const zCoords = [0, 3, 6, 9];

const nodes = [];
const nid = {};
for (let iz = 0; iz < zCoords.length; iz++)
  for (let iy = 0; iy < yCoords.length; iy++)
    for (let ix = 0; ix < xCoords.length; ix++) {
      nid[`${ix},${iy},${iz}`] = nodes.length;
      nodes.push([xCoords[ix], yCoords[iy], zCoords[iz]]);
    }

console.log(`Joint nodes: ${nodes.length}`);

// Simula creacion de elementos frame (columnas + vigas)
const elements = [];
// Columns
for (let iz = 0; iz < 3; iz++)
  for (let iy = 0; iy < 3; iy++)
    for (let ix = 0; ix < 3; ix++)
      elements.push([nid[`${ix},${iy},${iz}`], nid[`${ix},${iy},${iz+1}`]]);

// Beams X
for (let iz = 1; iz < 4; iz++)
  for (let iy = 0; iy < 3; iy++)
    for (let ix = 0; ix < 2; ix++)
      elements.push([nid[`${ix},${iy},${iz}`], nid[`${ix+1},${iy},${iz}`]]);

// Beams Y
for (let iz = 1; iz < 4; iz++)
  for (let ix = 0; ix < 3; ix++)
    for (let iy = 0; iy < 2; iy++)
      elements.push([nid[`${ix},${iy},${iz}`], nid[`${ix},${iy+1},${iz}`]]);

console.log(`Frame elements: ${elements.length}`);

// Simula creacion de losas Q4 (subdiv 2x2)
const nSx = 2, nSy = 2;
const nodeIndex = new Map();
const nodeKey = (x, y, z) => `${Math.round(x*10000)},${Math.round(y*10000)},${Math.round(z*10000)}`;
for (let ni = 0; ni < nodes.length; ni++) {
  nodeIndex.set(nodeKey(nodes[ni][0], nodes[ni][1], nodes[ni][2]), ni);
}

let slabElems = 0;
let newNodes = 0;
let reusedNodes = 0;

for (let iz = 1; iz < 4; iz++) {
  const z = zCoords[iz];
  for (let bx = 0; bx < 2; bx++) {
    for (let by = 0; by < 2; by++) {
      const x0 = xCoords[bx], x1 = xCoords[bx+1];
      const y0 = yCoords[by], y1 = yCoords[by+1];

      const slabGrid = [];
      for (let jr = 0; jr <= nSy; jr++) {
        const row = [];
        for (let jc = 0; jc <= nSx; jc++) {
          const x = x0 + jc/nSx*(x1-x0);
          const y = y0 + jr/nSy*(y1-y0);

          if (jr===0 && jc===0) { row.push(nid[`${bx},${by},${iz}`]); reusedNodes++; }
          else if (jr===0 && jc===nSx) { row.push(nid[`${bx+1},${by},${iz}`]); reusedNodes++; }
          else if (jr===nSy && jc===0) { row.push(nid[`${bx},${by+1},${iz}`]); reusedNodes++; }
          else if (jr===nSy && jc===nSx) { row.push(nid[`${bx+1},${by+1},${iz}`]); reusedNodes++; }
          else {
            const key = nodeKey(x, y, z);
            const found = nodeIndex.get(key);
            if (found !== undefined) { row.push(found); reusedNodes++; }
            else {
              const ni2 = nodes.length;
              nodes.push([x, y, z]);
              nodeIndex.set(key, ni2);
              row.push(ni2);
              newNodes++;
            }
          }
        }
        slabGrid.push(row);
      }

      for (let jr = 0; jr < nSy; jr++) {
        for (let jc = 0; jc < nSx; jc++) {
          const n0 = slabGrid[jr][jc];
          const n1 = slabGrid[jr][jc+1];
          const n2 = slabGrid[jr+1][jc+1];
          const n3 = slabGrid[jr+1][jc];
          elements.push([n0, n1, n2, n3]);
          slabElems++;

          // Verify all indices are valid
          for (const ni of [n0,n1,n2,n3]) {
            if (ni < 0 || ni >= nodes.length) {
              console.error(`INVALID NODE INDEX: ${ni} (total nodes: ${nodes.length})`);
            }
          }
        }
      }
    }
  }
}

console.log(`Total nodes: ${nodes.length} (${newNodes} new slab nodes, ${reusedNodes} reused)`);
console.log(`Slab Q4 elements: ${slabElems}`);
console.log(`Total elements: ${elements.length}`);

// Check for duplicate node indices in Q4 elements
let dupes = 0;
for (const e of elements) {
  if (e.length === 4) {
    const set = new Set(e);
    if (set.size < 4) { dupes++; console.log(`  DUPLICATE nodes in Q4: [${e}]`); }
  }
}
console.log(`Q4 elements with duplicate nodes: ${dupes}`);

// Check node positions of slab elements
console.log(`\nSample slab element (first one):`);
const firstSlab = elements.find(e => e.length === 4);
if (firstSlab) {
  for (const ni of firstSlab) {
    console.log(`  node[${ni}] = [${nodes[ni].map(v=>v.toFixed(2)).join(', ')}]`);
  }
}
