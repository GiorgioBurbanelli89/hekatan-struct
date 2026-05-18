#!/usr/bin/env node
/**
 * test_iconic.mjs — Test all iconic structures via WASM CLI
 * Verifies that each generator produces valid models and the solver runs
 */
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const wasmPath = join(__dirname, "hekatan-fem", "src", "cpp", "built", "deform.wasm");
const jsPath = join(__dirname, "hekatan-fem", "src", "cpp", "built", "deform.js");
const createModule = (await import(pathToFileURL(jsPath).href)).default;
const mod = await createModule({ wasmBinary: readFileSync(wasmPath) });

function allocDouble(arr) {
  const ptr = mod._malloc(arr.length * 8);
  mod.HEAPF64.set(new Float64Array(arr), ptr / 8);
  return ptr;
}
function allocUint(arr) {
  const ptr = mod._malloc(arr.length * 4);
  mod.HEAPU32.set(new Uint32Array(arr), ptr / 4);
  return ptr;
}
function allocBool(arr) {
  const ptr = mod._malloc(arr.length);
  for (let i = 0; i < arr.length; i++) mod.HEAPU8[ptr + i] = arr[i] ? 1 : 0;
  return ptr;
}

function solveDeform(nodes, elements, supports, loads, elemProps) {
  const nodesFlat = nodes.flat();
  const elemFlat = elements.flat();
  const elemSizes = elements.map(e => e.length);

  const supKeys = [], supVals = [];
  for (const [k, v] of supports) { supKeys.push(k); for (const b of v) supVals.push(b ? 1 : 0); }
  const loadKeys = [], loadVals = [];
  for (const [k, v] of loads) { loadKeys.push(k); for (const x of v) loadVals.push(x); }

  const makeMap = (m) => {
    const keys = [], vals = [];
    if (m) for (const [k, v] of m) { keys.push(k); vals.push(v); }
    return { k: allocUint(keys), v: allocDouble(vals), n: keys.length };
  };

  const pN = allocDouble(nodesFlat);
  const pE = allocUint(elemFlat);
  const pS = allocUint(elemSizes);
  const pSK = allocUint(supKeys);
  const pSV = allocBool(supVals);
  const pLK = allocUint(loadKeys);
  const pLV = allocDouble(loadVals);
  const E = makeMap(elemProps.elasticities);
  const A = makeMap(elemProps.areas);
  const Iz = makeMap(elemProps.momentsOfInertiaZ);
  const Iy = makeMap(elemProps.momentsOfInertiaY);
  const G = makeMap(elemProps.shearModuli);
  const J = makeMap(elemProps.torsionalConstants);
  const T = makeMap(elemProps.thicknesses);
  const Nu = makeMap(elemProps.poissonsRatios);
  const Eo = makeMap(elemProps.elasticitiesOrthogonal);
  const pDO = mod._malloc(4), pDS = mod._malloc(4), pRO = mod._malloc(4), pRS = mod._malloc(4);

  try {
    mod._deform(pN, nodes.length, pE, elemFlat.length, pS, elements.length,
      pSK, pSV, supKeys.length, pLK, pLV, loadKeys.length,
      E.k, E.v, E.n, A.k, A.v, A.n, Iz.k, Iz.v, Iz.n,
      Iy.k, Iy.v, Iy.n, G.k, G.v, G.n, J.k, J.v, J.n,
      T.k, T.v, T.n, Nu.k, Nu.v, Nu.n, Eo.k, Eo.v, Eo.n,
      pDO, pDS, pRO, pRS);

    const size = new Int32Array(mod.HEAPU8.buffer, pDS, 1)[0];
    const ptr = mod.HEAPU32[pDO / 4];
    const data = size > 0 ? Array.from(mod.HEAPF64.subarray(ptr / 8, ptr / 8 + size)) : [];

    let maxDisp = 0;
    for (let i = 0; i < data.length; i += 7) {
      const dx = data[i+1], dy = data[i+2], dz = data[i+3];
      maxDisp = Math.max(maxDisp, Math.sqrt(dx*dx + dy*dy + dz*dz));
    }
    if (ptr) mod._free(ptr);
    return { maxDisp, nDeforms: Math.floor(data.length / 7) };
  } catch (e) {
    return { error: e.message };
  }
}

// ═══════════════════════════════════════════════════
// Generate and test each iconic structure
// ═══════════════════════════════════════════════════
console.log("=".repeat(60));
console.log("  ICONIC STRUCTURES — SOLVER TESTS");
console.log("=".repeat(60));

let passed = 0, failed = 0;

function testStructure(name, genFn) {
  try {
    const { nodes, elements, supports, loads, elemProps } = genFn();
    const result = solveDeform(nodes, elements, supports, loads, elemProps);
    if (result.error) {
      console.log(`  FAIL  ${name}: ${result.error}`);
      failed++;
    } else {
      console.log(`  PASS  ${name}: ${nodes.length} nodes, ${elements.length} elem, max|u|=${result.maxDisp.toExponential(3)}`);
      passed++;
    }
  } catch (e) {
    console.log(`  FAIL  ${name}: ${e.message}`);
    failed++;
  }
}

// Helper for frame properties
const steelProps = (elements) => ({
  elasticities: new Map(elements.map((_,i) => [i, 200e6])),
  shearModuli: new Map(elements.map((_,i) => [i, 77e6])),
  areas: new Map(elements.map((_,i) => [i, 50e-4])),
  momentsOfInertiaZ: new Map(elements.map((_,i) => [i, 200e-8])),
  momentsOfInertiaY: new Map(elements.map((_,i) => [i, 200e-8])),
  torsionalConstants: new Map(elements.map((_,i) => [i, 100e-8])),
});

// 1. EIFFEL
testStructure("Torre Eiffel", () => {
  const H = 30, baseW = 12, nLv = 8;
  const nodes = [], elements = [];
  for (let iz = 0; iz <= nLv; iz++) {
    const t = iz/nLv, z = H*t, w = baseW*(1-t)*(1-t*0.3), hw = w/2;
    const b = nodes.length;
    nodes.push([-hw,-hw,z],[hw,-hw,z],[hw,hw,z],[-hw,hw,z]);
    for (let j=0;j<4;j++) elements.push([b+j, b+(j+1)%4]);
    if (iz>0) { const p=b-4; for(let j=0;j<4;j++) { elements.push([p+j,b+j]); elements.push([p+j,b+(j+1)%4]); } }
  }
  const supports = new Map(); for(let j=0;j<4;j++) supports.set(j,[true,true,true,true,true,true]);
  const loads = new Map(); const top=nodes.length-4; for(let j=0;j<4;j++) loads.set(top+j,[0,0,-50,0,0,0]);
  return { nodes, elements, supports, loads, elemProps: steelProps(elements) };
});

// 2. ARCO GATEWAY
testStructure("Arco Gateway", () => {
  const H=20,span=20,nDiv=20, nodes=[],elements=[];
  for(let i=0;i<=nDiv;i++){const t=i/nDiv,x=span*t,z=H*(1-Math.pow(2*t-1,2));nodes.push([x,-1,z],[x,1,z]);}
  for(let i=0;i<nDiv;i++){elements.push([i*2,(i+1)*2],[i*2+1,(i+1)*2+1],[i*2,i*2+1],[i*2,(i+1)*2+1]);}
  elements.push([nDiv*2,nDiv*2+1]);
  const supports=new Map(); supports.set(0,[true,true,true,true,true,true]); supports.set(1,[true,true,true,true,true,true]); supports.set(nDiv*2,[true,true,true,true,true,true]); supports.set(nDiv*2+1,[true,true,true,true,true,true]);
  const loads=new Map(); for(let i=0;i<=nDiv;i++){loads.set(i*2,[0,0,-20,0,0,0]);loads.set(i*2+1,[0,0,-20,0,0,0]);}
  return { nodes, elements, supports, loads, elemProps: steelProps(elements) };
});

// 3. PUENTE
testStructure("Puente Atirantado", () => {
  const span=40,nDiv=12,tH=15,dH=6,dW=4,nodes=[],elements=[];
  for(let i=0;i<=nDiv;i++){const x=span*i/nDiv;nodes.push([x,-dW/2,dH],[x,dW/2,dH]);}
  for(let i=0;i<nDiv;i++){elements.push([i*2,(i+1)*2],[i*2+1,(i+1)*2+1],[i*2,i*2+1]);}
  elements.push([nDiv*2,nDiv*2+1]);
  // Tower at midspan
  const tp=Math.round(nDiv/2),tx=span*tp/nDiv;
  const bL=nodes.length;nodes.push([tx,-dW/2,0]);const bR=nodes.length;nodes.push([tx,dW/2,0]);
  const tL=nodes.length;nodes.push([tx,-dW/2,tH+dH]);const tR=nodes.length;nodes.push([tx,dW/2,tH+dH]);
  elements.push([bL,tp*2],[tp*2,tL],[bR,tp*2+1],[tp*2+1,tR],[tL,tR]);
  // Cables
  for(let i=0;i<=nDiv;i+=2){if(Math.abs(i-tp)>1)elements.push([tL,i*2]);if(Math.abs(i-tp)>1)elements.push([tR,i*2+1]);}
  const supports=new Map();
  supports.set(0,[true,true,true,false,false,false]);supports.set(1,[true,true,true,false,false,false]);
  supports.set(nDiv*2,[false,true,true,false,false,false]);supports.set(nDiv*2+1,[false,true,true,false,false,false]);
  supports.set(bL,[true,true,true,true,true,true]);supports.set(bR,[true,true,true,true,true,true]);
  const loads=new Map();for(let i=0;i<=nDiv;i++){loads.set(i*2,[0,0,-20,0,0,0]);loads.set(i*2+1,[0,0,-20,0,0,0]);}
  return { nodes, elements, supports, loads, elemProps: steelProps(elements) };
});

// 4. TWISTED TOWER
testStructure("Torre Twist", () => {
  const nF=10,hF=3.5,R=5,nC=6,tw=5,nodes=[],elements=[];
  for(let iz=0;iz<=nF;iz++){const a0=iz*tw*Math.PI/180;for(let ic=0;ic<nC;ic++){const a=a0+2*Math.PI*ic/nC;nodes.push([R*Math.cos(a),R*Math.sin(a),iz*hF]);}}
  for(let iz=0;iz<=nF;iz++){const b=iz*nC;for(let ic=0;ic<nC;ic++)elements.push([b+ic,b+(ic+1)%nC]);if(iz<nF){const n=(iz+1)*nC;for(let ic=0;ic<nC;ic++){elements.push([b+ic,n+ic]);elements.push([b+ic,n+(ic+1)%nC]);}}}
  const supports=new Map();for(let ic=0;ic<nC;ic++)supports.set(ic,[true,true,true,true,true,true]);
  const loads=new Map();for(let iz=1;iz<=nF;iz++){const b=iz*nC;for(let ic=0;ic<nC;ic+=2)loads.set(b+ic,[3,0,-5,0,0,0]);}
  return { nodes, elements, supports, loads, elemProps: steelProps(elements) };
});

// 5. BURJ KHALIFA
testStructure("Burj Khalifa", () => {
  const nF=15,hF=3,bR=6,nW=3,nodes=[],elements=[];
  for(let iz=0;iz<=nF;iz++){const t=iz/nF,R=bR*(1-t*0.7),cI=nodes.length;nodes.push([0,0,iz*hF]);
    for(let w=0;w<nW;w++){const a=w*2*Math.PI/nW-Math.PI/2;const tI=nodes.length;nodes.push([R*Math.cos(a),R*Math.sin(a),iz*hF]);elements.push([cI,tI]);}
    for(let w=0;w<nW;w++){const t1=cI+1+w,t2=cI+1+(w+1)%nW;elements.push([t1,t2]);}
    if(iz<nF){const npf=1+nW,nc=cI+npf;elements.push([cI,nc]);for(let w=0;w<nW;w++)elements.push([cI+1+w,nc+1+w]);}
  }
  const npf=1+nW;const supports=new Map();for(let i=0;i<npf;i++)supports.set(i,[true,true,true,true,true,true]);
  const loads=new Map();for(let iz=1;iz<=nF;iz++)loads.set(iz*npf,[3*iz/nF,0,-10,0,0,0]);
  const ep=steelProps(elements);ep.elasticities=new Map(elements.map((_,i)=>[i,35e6]));ep.shearModuli=new Map(elements.map((_,i)=>[i,14e6]));
  return { nodes, elements, supports, loads, elemProps: ep };
});

// 6. DIAGRID (GHERKIN)
testStructure("Diagrid (Gherkin)", () => {
  const nF=12,hF=3.5,nC=10,nodes=[],elements=[];
  for(let iz=0;iz<=nF;iz++){const t=iz/nF,R=4*(0.6+0.4*Math.sin(Math.PI*t));
    for(let ic=0;ic<nC;ic++){const a=2*Math.PI*ic/nC;nodes.push([R*Math.cos(a),R*Math.sin(a),iz*hF]);}}
  for(let iz=0;iz<nF;iz++){const b=iz*nC,n=(iz+1)*nC;for(let ic=0;ic<nC;ic++){elements.push([b+ic,b+(ic+1)%nC]);const s=iz%2===0?1:-1;elements.push([b+ic,n+((ic+s+nC)%nC)]);elements.push([b+ic,n+ic]);}}
  for(let ic=0;ic<nC;ic++)elements.push([nF*nC+ic,nF*nC+(ic+1)%nC]);
  const supports=new Map();for(let ic=0;ic<nC;ic++)supports.set(ic,[true,true,true,true,true,true]);
  const loads=new Map();for(let iz=1;iz<=nF;iz++){const b=iz*nC;for(let ic=0;ic<nC;ic+=3)loads.set(b+ic,[2,0,-5,0,0,0]);}
  return { nodes, elements, supports, loads, elemProps: steelProps(elements) };
});

// 7. SHELL Q4 (Opera - simplified as flat plate to test Q4)
testStructure("Opera Shell Q4", () => {
  const nodes=[],elements=[];
  const nX=8,nY=4,span=15,depth=6,H=10;
  for(let iy=0;iy<=nY;iy++){for(let ix=0;ix<=nX;ix++){
    const t=ix/nX,tY=iy/nY;const x=span*t,y=-depth/2+depth*tY;
    const z=H*Math.sin(Math.PI*t)*(1-tY*tY*0.5);nodes.push([x,y,z]);
  }}
  for(let iy=0;iy<nY;iy++){for(let ix=0;ix<nX;ix++){
    const n0=iy*(nX+1)+ix,n1=n0+1,n2=n0+nX+2,n3=n0+nX+1;elements.push([n0,n1,n2,n3]);
  }}
  const supports=new Map();for(let i=0;i<nodes.length;i++){if(nodes[i][2]<0.3)supports.set(i,[true,true,true,true,true,true]);}
  const loads=new Map();for(let i=0;i<nodes.length;i++){if(nodes[i][2]>1)loads.set(i,[0,0,-3,0,0,0]);}
  return{nodes,elements,supports,loads,elemProps:{
    elasticities:new Map(elements.map((_,i)=>[i,35e6])),poissonsRatios:new Map(elements.map((_,i)=>[i,0.2])),
    thicknesses:new Map(elements.map((_,i)=>[i,0.15])),shearModuli:new Map(elements.map((_,i)=>[i,14.6e6])),
  }};
});

console.log("\n" + "=".repeat(60));
console.log(`  RESULTS: ${passed} passed, ${failed} failed out of ${passed+failed}`);
console.log("=".repeat(60));
process.exit(failed > 0 ? 1 : 0);
