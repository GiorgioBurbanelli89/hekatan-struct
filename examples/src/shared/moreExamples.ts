/**
 * Batch de ejemplos simples de FEM Studio (icónicos, Q4 placas, edif variantes).
 * Usa makeSimpleExample para generar ExampleDefs compactos.
 */
import { edificioAporticado } from "../edificio-aporticado/edificioAporticado";
import { makeSimpleExample } from "./simpleExampleTemplates";
import type { Node, Element } from "awatif-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

const P = (folder: string, label: string, def: number, min: number, max: number, step: number) =>
  ({ default: def, min, max, step, label, folder });

// ═══════════════════════════════════════════════════════════════════════════
// ── ICONIC STRUCTURES ──
// ═══════════════════════════════════════════════════════════════════════════

/** Torre Eiffel — 4 patas que convergen hacia el tope */
export const eiffel = makeSimpleExample({
  id: "eiffel",
  name: "Torre Eiffel",
  category: "Icónicos",
  params: {
    H:     P("Geometría", "Altura total (m)", 30, 10, 80, 1),
    baseW: P("Geometría", "Base (m)", 15, 5, 30, 1),
    topW:  P("Geometría", "Tope (m)", 2, 0.5, 8, 0.5),
    nLv:   P("Geometría", "Niveles", 8, 4, 20, 1),
    CM:    P("Cargas", "CM tope (kN)", -100, -1000, 0, 10),
  },
  gen: (p) => {
    const nLv = Math.round(p.nLv);
    const nodes: Node[] = [];
    for (let k = 0; k <= nLv; k++) {
      const t = k / nLv;
      const w = p.baseW + (p.topW - p.baseW) * t;
      const z = p.H * t;
      const h = w / 2;
      nodes.push([-h, -h, z], [h, -h, z], [h, h, z], [-h, h, z]);
    }
    const elements: Element[] = [];
    // Columnas (4 patas) + diagonales por piso
    for (let k = 0; k < nLv; k++) {
      const o = k * 4;
      for (let c = 0; c < 4; c++) elements.push([o + c, o + 4 + c]);
      // Diagonales
      elements.push([o, o + 5], [o + 1, o + 6], [o + 2, o + 7], [o + 3, o + 4]);
      // Vigas horizontales (marco) cada piso
      const of = o + 4;
      elements.push([of, of + 1], [of + 1, of + 2], [of + 2, of + 3], [of + 3, of]);
    }
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    for (let c = 0; c < 4; c++) supports.set(c, [true, true, true, true, true, true]);
    const loads = new Map<number, [number,number,number,number,number,number]>();
    const topStart = nLv * 4;
    for (let c = 0; c < 4; c++) loads.set(topStart + c, [0, 0, p.CM / 4, 0, 0, 0]);
    return { nodes, elements, supports, loads, material: "acero" };
  },
});

/** Arco parabólico (Gateway Arch-like) */
export const arco = makeSimpleExample({
  id: "arco",
  name: "Arco (Gateway)",
  category: "Icónicos",
  params: {
    span:  P("Geometría", "Luz (m)", 40, 10, 100, 2),
    rise:  P("Geometría", "Flecha (m)", 20, 5, 60, 1),
    nDiv:  P("Geometría", "Divisiones arco", 20, 8, 60, 1),
    CM:    P("Cargas", "CM centro (kN)", -200, -2000, 0, 10),
  },
  gen: (p) => {
    const n = Math.round(p.nDiv);
    const nodes: Node[] = [];
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const x = -p.span / 2 + p.span * t;
      const z = p.rise * (1 - Math.pow(2 * t - 1, 2));
      nodes.push([x, 0, z]);
    }
    const elements: Element[] = [];
    for (let i = 0; i < n; i++) elements.push([i, i + 1]);
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>([
      [0, [true, true, true, true, true, true]],
      [n, [true, true, true, true, true, true]],
    ]);
    const loads = new Map<number, [number,number,number,number,number,number]>();
    loads.set(Math.round(n / 2), [0, 0, p.CM, 0, 0, 0]);
    return { nodes, elements, supports, loads, material: "acero", barA: 0.05 };
  },
});

/** Puente de vigas reticulares 2D (simple) */
export const puente = makeSimpleExample({
  id: "puente",
  name: "Puente reticular",
  category: "Icónicos",
  params: {
    span:   P("Geometría", "Luz (m)", 30, 10, 80, 2),
    height: P("Geometría", "Canto (m)", 4, 1, 10, 0.5),
    nDiv:   P("Geometría", "Paneles", 8, 4, 20, 1),
    CM:     P("Cargas", "CM tablero (kN)", -50, -300, 0, 5),
  },
  gen: (p) => {
    const n = Math.round(p.nDiv);
    const dx = p.span / n;
    const nodes: Node[] = [];
    for (let i = 0; i <= n; i++) nodes.push([dx * i, 0, 0]);            // tablero inferior
    for (let i = 0; i <= n; i++) nodes.push([dx * i, 0, p.height]);     // cuerda superior
    const b = n + 1;
    const elements: Element[] = [];
    for (let i = 0; i < n; i++) elements.push([i, i + 1]);
    for (let i = 0; i < n; i++) elements.push([b + i, b + i + 1]);
    for (let i = 0; i <= n; i++) elements.push([i, b + i]);
    // Diagonales Warren
    for (let i = 0; i < n; i++) {
      if (i < n / 2) elements.push([i, b + i + 1]); else elements.push([b + i, i + 1]);
    }
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>([
      [0, [true, true, true, true, true, true]],
      [n, [true, true, true, true, true, true]],
    ]);
    const loads = new Map<number, [number,number,number,number,number,number]>();
    for (let i = 0; i <= n; i++) loads.set(i, [0, 0, p.CM, 0, 0, 0]);
    return { nodes, elements, supports, loads, material: "acero", barA: 0.008 };
  },
});

/** Torre Burj — esbelta con diagonales */
export const burj = makeSimpleExample({
  id: "burj",
  name: "Burj (torre esbelta)",
  category: "Icónicos",
  params: {
    H:       P("Geometría", "Altura (m)", 100, 30, 300, 5),
    baseW:   P("Geometría", "Base (m)", 20, 5, 40, 1),
    nLv:     P("Geometría", "Pisos", 20, 5, 50, 1),
    taper:   P("Geometría", "Estrechamiento (%)", 40, 0, 80, 5),
    Ex:      P("Cargas", "Viento (kN)", 100, 0, 1000, 10),
  },
  gen: (p) => {
    const nLv = Math.round(p.nLv);
    const nodes: Node[] = [];
    for (let k = 0; k <= nLv; k++) {
      const t = k / nLv;
      const w = p.baseW * (1 - p.taper / 100 * t);
      const z = (p.H / nLv) * k;
      const h = w / 2;
      nodes.push([-h, -h, z], [h, -h, z], [h, h, z], [-h, h, z]);
    }
    const elements: Element[] = [];
    for (let k = 0; k < nLv; k++) {
      const o = k * 4;
      for (let c = 0; c < 4; c++) elements.push([o + c, o + 4 + c]);
      const of = o + 4;
      elements.push([of, of + 1], [of + 1, of + 2], [of + 2, of + 3], [of + 3, of]);
      // X-braces cada 3 pisos para rigidez
      if (k % 3 === 0) elements.push([o, o + 5], [o + 2, o + 7]);
    }
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    for (let c = 0; c < 4; c++) supports.set(c, [true, true, true, true, true, true]);
    const loads = new Map<number, [number,number,number,number,number,number]>();
    const topStart = nLv * 4;
    loads.set(topStart, [p.Ex, 0, 0, 0, 0, 0]);
    return { nodes, elements, supports, loads, material: "acero", barA: 0.015 };
  },
});

/** Twisted tower (Turning Torso) — cada piso rotado */
export const twisted = makeSimpleExample({
  id: "twisted",
  name: "Twisted (Turning Torso)",
  category: "Icónicos",
  params: {
    H:         P("Geometría", "Altura (m)", 80, 20, 200, 5),
    baseW:     P("Geometría", "Lado (m)", 15, 5, 30, 1),
    nLv:       P("Geometría", "Pisos", 20, 5, 40, 1),
    totalTwist: P("Geometría", "Giro total (°)", 90, 0, 180, 5),
    Ex:        P("Cargas", "Viento (kN)", 80, 0, 500, 5),
  },
  gen: (p) => {
    const nLv = Math.round(p.nLv);
    const dz = p.H / nLv;
    const h = p.baseW / 2;
    const nodes: Node[] = [];
    for (let k = 0; k <= nLv; k++) {
      const t = k / nLv;
      const ang = (p.totalTwist * Math.PI / 180) * t;
      const c = Math.cos(ang), s = Math.sin(ang);
      const z = dz * k;
      const rot = (x: number, y: number): [number, number] => [x * c - y * s, x * s + y * c];
      const [x1, y1] = rot(-h, -h); nodes.push([x1, y1, z]);
      const [x2, y2] = rot(h, -h); nodes.push([x2, y2, z]);
      const [x3, y3] = rot(h, h);  nodes.push([x3, y3, z]);
      const [x4, y4] = rot(-h, h); nodes.push([x4, y4, z]);
    }
    const elements: Element[] = [];
    for (let k = 0; k < nLv; k++) {
      const o = k * 4;
      for (let c = 0; c < 4; c++) elements.push([o + c, o + 4 + c]);
      const of = o + 4;
      elements.push([of, of + 1], [of + 1, of + 2], [of + 2, of + 3], [of + 3, of]);
    }
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    for (let c = 0; c < 4; c++) supports.set(c, [true, true, true, true, true, true]);
    const loads = new Map<number, [number,number,number,number,number,number]>();
    loads.set(nLv * 4, [p.Ex, 0, 0, 0, 0, 0]);
    return { nodes, elements, supports, loads, material: "acero", barA: 0.012 };
  },
});

/** Diagrid — tubo externo en patrón X triangular (Gherkin/30 St Mary Axe) */
export const diagrid = makeSimpleExample({
  id: "diagrid",
  name: "Diagrid (Gherkin)",
  category: "Icónicos",
  params: {
    H:      P("Geometría", "Altura (m)", 60, 20, 150, 5),
    R:      P("Geometría", "Radio base (m)", 10, 3, 30, 0.5),
    nSides: P("Geometría", "Lados", 8, 4, 16, 1),
    nLv:    P("Geometría", "Niveles", 10, 4, 30, 1),
    Ex:     P("Cargas", "Viento (kN)", 60, 0, 400, 5),
  },
  gen: (p) => {
    const nSides = Math.round(p.nSides);
    const nLv = Math.round(p.nLv);
    const dz = p.H / nLv;
    const nodes: Node[] = [];
    for (let k = 0; k <= nLv; k++) {
      const z = dz * k;
      const r = p.R * (1 - 0.15 * Math.pow(2 * (k / nLv) - 1, 2));  // estrechado tipo elipsoide
      for (let s = 0; s < nSides; s++) {
        const a = (2 * Math.PI * s) / nSides;
        nodes.push([r * Math.cos(a), r * Math.sin(a), z]);
      }
    }
    const elements: Element[] = [];
    // Anillos horizontales
    for (let k = 0; k <= nLv; k++) {
      const o = k * nSides;
      for (let s = 0; s < nSides; s++) elements.push([o + s, o + (s + 1) % nSides]);
    }
    // Diagrids (diagonales X entre niveles)
    for (let k = 0; k < nLv; k++) {
      const o = k * nSides;
      const of = (k + 1) * nSides;
      for (let s = 0; s < nSides; s++) {
        elements.push([o + s, of + (s + 1) % nSides]);
        elements.push([o + (s + 1) % nSides, of + s]);
      }
    }
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    for (let s = 0; s < nSides; s++) supports.set(s, [true, true, true, true, true, true]);
    const loads = new Map<number, [number,number,number,number,number,number]>();
    for (let s = 0; s < nSides; s++) loads.set(nLv * nSides + s, [p.Ex / nSides, 0, 0, 0, 0, 0]);
    return { nodes, elements, supports, loads, material: "acero", barA: 0.008 };
  },
});

/** Opera de Sydney — conchas reticulares (esquemático, 3 arcos) */
export const opera = makeSimpleExample({
  id: "opera",
  name: "Opera Sydney (esquemático)",
  category: "Icónicos",
  params: {
    span:    P("Geometría", "Luz concha (m)", 30, 10, 60, 2),
    rise:    P("Geometría", "Altura concha (m)", 20, 5, 40, 1),
    nArcs:   P("Geometría", "N° conchas", 3, 1, 6, 1),
    nDiv:    P("Geometría", "Div. por arco", 12, 6, 30, 1),
    CM:      P("Cargas", "CM techo (kN)", -30, -200, 0, 5),
  },
  gen: (p) => {
    const nA = Math.round(p.nArcs);
    const nD = Math.round(p.nDiv);
    const nodes: Node[] = [];
    const elements: Element[] = [];
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    const loads = new Map<number, [number,number,number,number,number,number]>();
    for (let a = 0; a < nA; a++) {
      const y0 = a * p.span * 1.2;
      const base = nodes.length;
      for (let i = 0; i <= nD; i++) {
        const t = i / nD;
        const x = p.span * t;
        const z = p.rise * Math.sin(Math.PI * t);
        nodes.push([x, y0, z]);
      }
      for (let i = 0; i < nD; i++) elements.push([base + i, base + i + 1]);
      supports.set(base, [true, true, true, true, true, true]);
      supports.set(base + nD, [true, true, true, true, true, true]);
      loads.set(base + Math.round(nD / 2), [0, 0, p.CM, 0, 0, 0]);
    }
    return { nodes, elements, supports, loads, material: "acero", barA: 0.025 };
  },
});

// ═══════════════════════════════════════════════════════════════════════════
// ── EDIFICIO VARIANTES (wrappers de edificio-aporticado) ──
// ═══════════════════════════════════════════════════════════════════════════

const cloneEdificioParams = (overrides: Record<string, number>): typeof edificioAporticado.params => {
  const out: any = {};
  for (const [k, v] of Object.entries(edificioAporticado.params)) {
    out[k] = { ...v, default: overrides[k] ?? v.default };
  }
  return out;
};

/** Edificio acero con diagonales */
export const edifAceroDiag: ExampleDef = {
  ...edificioAporticado,
  id: "edif-acero-diag",
  name: "Edificio Acero + Diagonales",
  params: cloneEdificioParams({
    matCol: 1, matViga: 1, colSize: 0.30, vigaB: 0.20, vigaH: 0.45,
    vSecOn: 1, nVSec: 2, slabOn: 1, slabT: 0.08,
    bracesMode: 1,  // perimetrales
  }),
};

/** Edificio con muros de corte (aproximados como diagonales por ahora) */
export const edifMuros: ExampleDef = {
  ...edificioAporticado,
  id: "edif-muros",
  name: "Edificio con Muros (diagonales equivalentes)",
  params: cloneEdificioParams({
    matCol: 0, matViga: 0, slabOn: 1, slabT: 0.15,
    bracesMode: 1,  // perimetrales como sustituto visual de muros
    Ex: 100, Ey: 100,
  }),
};

/** Edificio mixto (hormigón + acero vigas) */
export const edifMixto: ExampleDef = {
  ...edificioAporticado,
  id: "edif-mixto",
  name: "Edificio Mixto (cols hormigón + vigas acero)",
  params: cloneEdificioParams({
    matCol: 0, matViga: 1, colSize: 0.45, vigaB: 0.20, vigaH: 0.50,
    vSecOn: 1, slabOn: 1, slabT: 0.12,
  }),
};

// ═══════════════════════════════════════════════════════════════════════════
// ── PLACAS Q4 SIMPLIFICADAS ──
// ═══════════════════════════════════════════════════════════════════════════

/** Losa rectangular simplemente apoyada */
export const losaRect = makeSimpleExample({
  id: "losa-rect",
  name: "Losa Rectangular",
  category: "Placas Q4",
  params: {
    Lx: P("Geometría", "Lx (m)", 6, 2, 15, 0.5),
    Ly: P("Geometría", "Ly (m)", 4, 2, 15, 0.5),
    t:  P("Sección", "espesor (m)", 0.15, 0.08, 0.40, 0.01),
    nx: P("Malla", "nx", 10, 4, 20, 1),
    ny: P("Malla", "ny", 8, 4, 20, 1),
    CM: P("Cargas", "CM (kN/m²)", -5, -30, 0, 0.5),
  },
  gen: (p) => {
    const nx = Math.round(p.nx), ny = Math.round(p.ny);
    const nodes: Node[] = [];
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) nodes.push([(i * p.Lx) / nx, (j * p.Ly) / ny, 0]);
    const elements: Element[] = [];
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const n0 = j * (nx + 1) + i;
      elements.push([n0, n0 + 1, n0 + 1 + (nx + 1), n0 + (nx + 1)]);
    }
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    for (let i = 0; i <= nx; i++) {
      supports.set(i, [true, true, true, false, false, false]);
      supports.set(ny * (nx + 1) + i, [true, true, true, false, false, false]);
    }
    for (let j = 0; j <= ny; j++) {
      supports.set(j * (nx + 1), [true, true, true, false, false, false]);
      supports.set(j * (nx + 1) + nx, [true, true, true, false, false, false]);
    }
    const A_trib = (p.Lx / nx) * (p.Ly / ny);
    const loads = new Map<number, [number,number,number,number,number,number]>();
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) {
      const idx = j * (nx + 1) + i;
      const corner = (i === 0 || i === nx) && (j === 0 || j === ny);
      const edge = (i === 0 || i === nx || j === 0 || j === ny);
      const f = corner ? 0.25 : edge ? 0.5 : 1.0;
      loads.set(idx, [0, 0, p.CM * A_trib * f, 0, 0, 0]);
    }
    return { nodes, elements, supports, loads, material: "hormigon", thickness: p.t };
  },
  hasShellResults: true,
});

/** Viga alta (deep beam) — Q4 con carga distribuida arriba */
export const vigaAlta = makeSimpleExample({
  id: "viga-alta",
  name: "Viga alta (Deep Beam)",
  category: "Placas Q4",
  params: {
    L:  P("Geometría", "Luz (m)", 4, 1, 10, 0.5),
    H:  P("Geometría", "Altura (m)", 2, 0.5, 5, 0.1),
    t:  P("Sección", "espesor (m)", 0.20, 0.05, 0.50, 0.01),
    nx: P("Malla", "nx", 16, 4, 30, 1),
    ny: P("Malla", "ny", 8, 4, 20, 1),
    CM: P("Cargas", "q arriba (kN/m)", -100, -500, 0, 5),
  },
  gen: (p) => {
    const nx = Math.round(p.nx), ny = Math.round(p.ny);
    const nodes: Node[] = [];
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) nodes.push([(i * p.L) / nx, 0, (j * p.H) / ny]);
    const elements: Element[] = [];
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const n0 = j * (nx + 1) + i;
      elements.push([n0, n0 + 1, n0 + 1 + (nx + 1), n0 + (nx + 1)]);
    }
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    // Apoyos en los 2 extremos inferiores
    supports.set(0, [true, true, true, true, true, true]);
    supports.set(nx, [true, true, true, true, true, true]);
    // Todo bloqueado en Y (plane stress en X-Z)
    for (let i = 0; i < nodes.length; i++) {
      if (supports.has(i)) continue;
      supports.set(i, [false, true, false, true, true, true]);
    }
    const topBase = ny * (nx + 1);
    const loads = new Map<number, [number,number,number,number,number,number]>();
    const F = p.CM * (p.L / nx);
    for (let i = 0; i <= nx; i++) {
      const corner = (i === 0 || i === nx);
      loads.set(topBase + i, [0, 0, corner ? F * 0.5 : F, 0, 0, 0]);
    }
    return { nodes, elements, supports, loads, material: "hormigon", thickness: p.t };
  },
  hasShellResults: true,
});

/** Muro de contención cantiléver */
export const muroContencion = makeSimpleExample({
  id: "muro-contencion",
  name: "Muro de contención",
  category: "Placas Q4",
  params: {
    H:  P("Geometría", "H (m)", 4, 2, 10, 0.25),
    W:  P("Geometría", "Ancho base (m)", 3, 1, 8, 0.25),
    t:  P("Sección", "espesor muro (m)", 0.30, 0.15, 0.80, 0.05),
    nx: P("Malla", "nx", 8, 4, 20, 1),
    nz: P("Malla", "nz", 12, 4, 30, 1),
    qSuelo: P("Cargas", "q suelo (kN/m²)", 30, 5, 100, 2),
  },
  gen: (p) => {
    const nx = Math.round(p.nx), nz = Math.round(p.nz);
    const nodes: Node[] = [];
    for (let k = 0; k <= nz; k++) for (let i = 0; i <= nx; i++) nodes.push([(i * p.W) / nx, 0, (k * p.H) / nz]);
    const elements: Element[] = [];
    for (let k = 0; k < nz; k++) for (let i = 0; i < nx; i++) {
      const n0 = k * (nx + 1) + i;
      elements.push([n0, n0 + 1, n0 + 1 + (nx + 1), n0 + (nx + 1)]);
    }
    // Base empotrada
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    for (let i = 0; i <= nx; i++) supports.set(i, [true, true, true, true, true, true]);
    // Resto bloquea Y
    for (let i = 0; i < nodes.length; i++) if (!supports.has(i)) supports.set(i, [false, true, false, true, true, true]);
    // Carga horizontal lateral (presión del suelo, triangular)
    const loads = new Map<number, [number,number,number,number,number,number]>();
    const dz = p.H / nz;
    for (let k = 1; k <= nz; k++) {
      const z = (p.H * k) / nz;
      const q = p.qSuelo * (p.H - z) / p.H;  // triangular
      const Fx = q * dz;
      const idx = k * (nx + 1); // cara X=0
      loads.set(idx, [Fx, 0, 0, 0, 0, 0]);
    }
    return { nodes, elements, supports, loads, material: "hormigon", thickness: p.t };
  },
  hasShellResults: true,
});

/** Muro Q4 cantiléver (shear wall) */
export const muroQ4 = makeSimpleExample({
  id: "muro-q4",
  name: "Muro Q4 (cantiléver)",
  category: "Placas Q4",
  params: {
    W:  P("Geometría", "Ancho (m)", 3, 1, 8, 0.25),
    H:  P("Geometría", "Altura (m)", 5, 2, 15, 0.5),
    t:  P("Sección", "espesor (m)", 0.25, 0.1, 0.5, 0.05),
    nx: P("Malla", "nx", 6, 4, 16, 1),
    nz: P("Malla", "nz", 12, 4, 30, 1),
    F:  P("Cargas", "F lateral (kN)", 200, 0, 2000, 20),
  },
  gen: (p) => {
    const nx = Math.round(p.nx), nz = Math.round(p.nz);
    const nodes: Node[] = [];
    for (let k = 0; k <= nz; k++) for (let i = 0; i <= nx; i++) nodes.push([(i * p.W) / nx, 0, (k * p.H) / nz]);
    const elements: Element[] = [];
    for (let k = 0; k < nz; k++) for (let i = 0; i < nx; i++) {
      const n0 = k * (nx + 1) + i;
      elements.push([n0, n0 + 1, n0 + 1 + (nx + 1), n0 + (nx + 1)]);
    }
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    for (let i = 0; i <= nx; i++) supports.set(i, [true, true, true, true, true, true]);
    for (let i = 0; i < nodes.length; i++) if (!supports.has(i)) supports.set(i, [false, true, false, true, true, true]);
    const loads = new Map<number, [number,number,number,number,number,number]>();
    const topBase = nz * (nx + 1);
    const Fint = p.F / nx;
    for (let i = 0; i <= nx; i++) {
      const corner = (i === 0 || i === nx);
      loads.set(topBase + i, [corner ? Fint * 0.5 : Fint, 0, 0, 0, 0, 0]);
    }
    return { nodes, elements, supports, loads, material: "hormigon", thickness: p.t };
  },
  hasShellResults: true,
});

/** Viga Q4 cantiléver */
export const vigaQ4 = makeSimpleExample({
  id: "viga-q4",
  name: "Viga Q4 (cantiléver)",
  category: "Placas Q4",
  params: {
    L:  P("Geometría", "L (m)", 4, 1, 10, 0.5),
    H:  P("Geometría", "H (m)", 0.6, 0.2, 2, 0.1),
    t:  P("Sección", "espesor (m)", 0.25, 0.1, 0.5, 0.05),
    nx: P("Malla", "nx", 20, 4, 40, 1),
    ny: P("Malla", "ny", 6, 2, 16, 1),
    F:  P("Cargas", "F punta (kN)", 10, -100, 100, 1),
  },
  gen: (p) => {
    const nx = Math.round(p.nx), ny = Math.round(p.ny);
    const nodes: Node[] = [];
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) nodes.push([(i * p.L) / nx, 0, (j * p.H) / ny]);
    const elements: Element[] = [];
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const n0 = j * (nx + 1) + i;
      elements.push([n0, n0 + 1, n0 + 1 + (nx + 1), n0 + (nx + 1)]);
    }
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    for (let j = 0; j <= ny; j++) supports.set(j * (nx + 1), [true, true, true, true, true, true]);
    for (let i = 0; i < nodes.length; i++) if (!supports.has(i)) supports.set(i, [false, true, false, true, true, true]);
    const loads = new Map<number, [number,number,number,number,number,number]>();
    for (let j = 0; j <= ny; j++) loads.set(j * (nx + 1) + nx, [0, 0, p.F / (ny + 1), 0, 0, 0]);
    return { nodes, elements, supports, loads, material: "hormigon", thickness: p.t };
  },
  hasShellResults: true,
});

/** Pérgola simple — marco con techo inclinado */
export const pergola = makeSimpleExample({
  id: "pergola",
  name: "Pérgola",
  category: "Estructuras varias",
  params: {
    W:  P("Geometría", "Ancho (m)", 4, 2, 10, 0.25),
    L:  P("Geometría", "Largo (m)", 5, 2, 12, 0.5),
    H1: P("Geometría", "H frontal (m)", 3, 2, 5, 0.1),
    H2: P("Geometría", "H trasera (m)", 4, 2, 6, 0.1),
    nSub: P("Geometría", "Div. vigas", 2, 1, 6, 1),
    CM: P("Cargas", "CM techo (kN)", -5, -30, 0, 0.5),
  },
  gen: (p) => {
    const nodes: Node[] = [
      [0, 0, 0], [p.W, 0, 0], [p.W, p.L, 0], [0, p.L, 0],       // base 0-3
      [0, 0, p.H1], [p.W, 0, p.H1], [p.W, p.L, p.H2], [0, p.L, p.H2], // tope 4-7
    ];
    const elements: Element[] = [];
    // Columnas
    for (let c = 0; c < 4; c++) elements.push([c, c + 4]);
    // Vigas perimetrales techo
    elements.push([4, 5], [5, 6], [6, 7], [7, 4]);
    // Vigas cruzadas (para rigidez)
    elements.push([4, 6]);
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    for (let c = 0; c < 4; c++) supports.set(c, [true, true, true, true, true, true]);
    const loads = new Map<number, [number,number,number,number,number,number]>();
    for (let c = 4; c < 8; c++) loads.set(c, [0, 0, p.CM / 4, 0, 0, 0]);
    return { nodes, elements, supports, loads, material: "hormigon", barA: 0.16 };
  },
});

/** Columna con placa base */
export const colPlacaBase = makeSimpleExample({
  id: "col-placa",
  name: "Columna + Placa Base",
  category: "Placas Q4",
  params: {
    Lx: P("Geometría", "Lx placa (m)", 0.40, 0.20, 1.0, 0.05),
    Ly: P("Geometría", "Ly placa (m)", 0.40, 0.20, 1.0, 0.05),
    t:  P("Sección", "espesor placa (m)", 0.025, 0.010, 0.05, 0.005),
    Hc: P("Geometría", "Altura columna (m)", 3, 1, 8, 0.5),
    nx: P("Malla", "nx", 6, 4, 16, 1),
    ny: P("Malla", "ny", 6, 4, 16, 1),
    P:  P("Cargas", "P axial tope (kN)", -100, -1000, 100, 10),
  },
  gen: (p) => {
    const nx = Math.round(p.nx), ny = Math.round(p.ny);
    const nodes: Node[] = [];
    // Placa base (z=0)
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) nodes.push([(i * p.Lx) / nx - p.Lx / 2, (j * p.Ly) / ny - p.Ly / 2, 0]);
    // Nodo tope columna
    const topIdx = nodes.length;
    nodes.push([0, 0, p.Hc]);
    // Nodo centro placa
    const centerIdx = nodes.length;
    nodes.push([0, 0, 0]);
    // Elements: placa Q4 + columna
    const elements: Element[] = [];
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const n0 = j * (nx + 1) + i;
      elements.push([n0, n0 + 1, n0 + 1 + (nx + 1), n0 + (nx + 1)]);
    }
    elements.push([centerIdx, topIdx]);
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    // Anclajes en esquinas de la placa
    supports.set(0, [true, true, true, true, true, true]);
    supports.set(nx, [true, true, true, true, true, true]);
    supports.set(ny * (nx + 1), [true, true, true, true, true, true]);
    supports.set(ny * (nx + 1) + nx, [true, true, true, true, true, true]);
    const loads = new Map<number, [number,number,number,number,number,number]>();
    loads.set(topIdx, [0, 0, p.P, 0, 0, 0]);
    return { nodes, elements, supports, loads, material: "hormigon", thickness: p.t, barA: 0.01 };
  },
  hasShellResults: true,
});

/** Placa con orificios (placa base) */
export const placaOrificios = makeSimpleExample({
  id: "placa-orificios",
  name: "Placa con orificios",
  category: "Placas Q4",
  params: {
    Lx: P("Geometría", "Lx (m)", 0.50, 0.2, 1.5, 0.05),
    Ly: P("Geometría", "Ly (m)", 0.50, 0.2, 1.5, 0.05),
    t:  P("Sección", "espesor (m)", 0.025, 0.010, 0.05, 0.005),
    nx: P("Malla", "nx", 10, 4, 20, 1),
    ny: P("Malla", "ny", 10, 4, 20, 1),
    CM: P("Cargas", "q presión (kN/m²)", -10, -100, 0, 1),
  },
  gen: (p) => {
    const nx = Math.round(p.nx), ny = Math.round(p.ny);
    const nodes: Node[] = [];
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) nodes.push([(i * p.Lx) / nx, (j * p.Ly) / ny, 0]);
    const elements: Element[] = [];
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      // Saltar la celda central (orificio)
      if (i === Math.floor(nx / 2) && j === Math.floor(ny / 2)) continue;
      const n0 = j * (nx + 1) + i;
      elements.push([n0, n0 + 1, n0 + 1 + (nx + 1), n0 + (nx + 1)]);
    }
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    // 4 esquinas ancladas (para pernos)
    supports.set(0, [true, true, true, true, true, true]);
    supports.set(nx, [true, true, true, true, true, true]);
    supports.set(ny * (nx + 1), [true, true, true, true, true, true]);
    supports.set(ny * (nx + 1) + nx, [true, true, true, true, true, true]);
    const A = (p.Lx / nx) * (p.Ly / ny);
    const loads = new Map<number, [number,number,number,number,number,number]>();
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) {
      const idx = j * (nx + 1) + i;
      loads.set(idx, [0, 0, p.CM * A, 0, 0, 0]);
    }
    return { nodes, elements, supports, loads, material: "hormigon", thickness: p.t };
  },
  hasShellResults: true,
});

/** Placa XY — cantiléver (un borde empotrado, otro libre) */
export const placaXY = makeSimpleExample({
  id: "placa-xy",
  name: "Placa XY (cantiléver)",
  category: "Placas Q4",
  params: {
    Lx: P("Geometría", "Lx (m)", 4, 1, 10, 0.5),
    Ly: P("Geometría", "Ly (m)", 2, 1, 6, 0.25),
    t:  P("Sección", "espesor (m)", 0.15, 0.08, 0.40, 0.01),
    nx: P("Malla", "nx", 10, 4, 20, 1),
    ny: P("Malla", "ny", 6, 4, 16, 1),
    CM: P("Cargas", "q (kN/m²)", -5, -30, 0, 0.5),
  },
  gen: (p) => {
    const nx = Math.round(p.nx), ny = Math.round(p.ny);
    const nodes: Node[] = [];
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) nodes.push([(i * p.Lx) / nx, (j * p.Ly) / ny, 0]);
    const elements: Element[] = [];
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const n0 = j * (nx + 1) + i;
      elements.push([n0, n0 + 1, n0 + 1 + (nx + 1), n0 + (nx + 1)]);
    }
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    // Empotrado solo en x=0
    for (let j = 0; j <= ny; j++) supports.set(j * (nx + 1), [true, true, true, true, true, true]);
    const A = (p.Lx / nx) * (p.Ly / ny);
    const loads = new Map<number, [number,number,number,number,number,number]>();
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) {
      const idx = j * (nx + 1) + i;
      loads.set(idx, [0, 0, p.CM * A, 0, 0, 0]);
    }
    return { nodes, elements, supports, loads, material: "hormigon", thickness: p.t };
  },
  hasShellResults: true,
});

/** Losa plana (similar a losa-rect pero con 2 apoyos internos tipo columna) */
export const losaPlana = makeSimpleExample({
  id: "losa-plana",
  name: "Losa plana (con columnas internas)",
  category: "Placas Q4",
  params: {
    Lx: P("Geometría", "Lx (m)", 8, 3, 16, 0.5),
    Ly: P("Geometría", "Ly (m)", 6, 3, 16, 0.5),
    t:  P("Sección", "espesor (m)", 0.20, 0.10, 0.40, 0.01),
    nx: P("Malla", "nx", 12, 4, 24, 1),
    ny: P("Malla", "ny", 8, 4, 20, 1),
    CM: P("Cargas", "q (kN/m²)", -8, -30, 0, 0.5),
  },
  gen: (p) => {
    const nx = Math.round(p.nx), ny = Math.round(p.ny);
    const nodes: Node[] = [];
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) nodes.push([(i * p.Lx) / nx, (j * p.Ly) / ny, 0]);
    const elements: Element[] = [];
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const n0 = j * (nx + 1) + i;
      elements.push([n0, n0 + 1, n0 + 1 + (nx + 1), n0 + (nx + 1)]);
    }
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    // Columnas: 4 interiores (puntos) + bordes de 4 lados simplemente apoyados
    // Bordes: apoyo simple (solo Z)
    for (let i = 0; i <= nx; i++) {
      supports.set(i, [false, false, true, false, false, false]);
      supports.set(ny * (nx + 1) + i, [false, false, true, false, false, false]);
    }
    for (let j = 0; j <= ny; j++) {
      supports.set(j * (nx + 1), [false, false, true, false, false, false]);
      supports.set(j * (nx + 1) + nx, [false, false, true, false, false, false]);
    }
    // 2 columnas interiores (fijas en X,Y,Z)
    supports.set(Math.round(ny / 3) * (nx + 1) + Math.round(nx / 3), [true, true, true, false, false, false]);
    supports.set(Math.round(2 * ny / 3) * (nx + 1) + Math.round(2 * nx / 3), [true, true, true, false, false, false]);
    const A = (p.Lx / nx) * (p.Ly / ny);
    const loads = new Map<number, [number,number,number,number,number,number]>();
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) {
      const idx = j * (nx + 1) + i;
      loads.set(idx, [0, 0, p.CM * A, 0, 0, 0]);
    }
    return { nodes, elements, supports, loads, material: "hormigon", thickness: p.t };
  },
  hasShellResults: true,
});

/** Talud — malla Q4 inclinada (slope analysis simplificado) */
export const talud = makeSimpleExample({
  id: "talud",
  name: "Talud (slope)",
  category: "Placas Q4",
  params: {
    L:  P("Geometría", "Longitud (m)", 20, 5, 50, 1),
    H:  P("Geometría", "Altura (m)", 10, 2, 30, 0.5),
    angle: P("Geometría", "Pendiente (°)", 30, 15, 60, 1),
    t:  P("Sección", "espesor slab (m)", 0.30, 0.1, 1.0, 0.05),
    nx: P("Malla", "nx", 12, 4, 24, 1),
    ny: P("Malla", "ny", 4, 2, 10, 1),
    CM: P("Cargas", "q (kN/m²)", -20, -100, 0, 2),
  },
  gen: (p) => {
    const nx = Math.round(p.nx), ny = Math.round(p.ny);
    const nodes: Node[] = [];
    const aRad = p.angle * Math.PI / 180;
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) {
      const s = p.L * (i / nx);
      nodes.push([s * Math.cos(aRad), (j * 5) / ny, s * Math.sin(aRad)]);
    }
    const elements: Element[] = [];
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const n0 = j * (nx + 1) + i;
      elements.push([n0, n0 + 1, n0 + 1 + (nx + 1), n0 + (nx + 1)]);
    }
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    // Base (i=0) empotrada
    for (let j = 0; j <= ny; j++) supports.set(j * (nx + 1), [true, true, true, true, true, true]);
    const A = (p.L / nx) * (5 / ny);
    const loads = new Map<number, [number,number,number,number,number,number]>();
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) {
      const idx = j * (nx + 1) + i;
      loads.set(idx, [0, 0, p.CM * A, 0, 0, 0]);
    }
    return { nodes, elements, supports, loads, material: "hormigon", thickness: p.t };
  },
  hasShellResults: true,
});
