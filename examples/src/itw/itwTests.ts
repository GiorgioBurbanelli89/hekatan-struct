/**
 * Los seis casos del elemento ITW-1990 (membrana con **drilling**), en el deploy.
 *
 * Vienen de `calcpad-ceinci-lab/*.cpd`, donde estaban escritos a mano en Calcpad
 * —montando la K entera y resolviendo con `lsolve`— para poder ver la
 * formulación paso a paso. Aquí resuelven con el **motor de Hekatan Struct**, o
 * sea el mismo C++/WASM que da los números del producto. Que el `.cpd` didáctico
 * y el motor den lo mismo es justo lo que hay que poder comprobar.
 *
 * ## Qué es el drilling y por qué estos seis casos
 *
 * Un Q4 clásico de membrana tiene 2 GDL por nudo (`ux`, `uz`) y **no sabe girar**
 * sobre su propia normal. Eso rompe dos cosas:
 *
 * 1. Es **demasiado rígido a flexión** — no puede curvarse bien con pocos
 *    elementos (Tests I, II y III lo miden).
 * 2. Al unirle una **viga**, la unión sale rótula: la viga mete momento y el muro
 *    no tiene dónde recibirlo. Los dos muros lo enseñan, y es el caso que da
 *    nombre al asunto.
 *
 * Ibrahimbegović, Taylor y Wilson (1990, IJNME 30:445-457) meten el giro normal
 * **en el campo de desplazamientos** (interpolación de Allman por los lados, más
 * una burbuja que se condensa), no como una penalización pegada aparte.
 *
 * | caso | qué mide | referencia |
 * |---|---|---|
 * | Test I · Flexión pura | que el elemento reproduzca flexión EXACTA | 3.0 (teoría de vigas) |
 * | Test II · Voladizo corto | flexión + cortante en malla gruesa | 0.3553 |
 * | Test III · Cook | malla distorsionada (trapecio) | 23.91 |
 * | Test IV · Hemisferio | cáscara curva, doble curvatura | 0.094 (MacNeal-Harder) |
 * | Muro de acople | dos muros unidos por viga: el momento entra por `rz` | — |
 * | Muro + frame | viga en voladizo colgada del muro | — |
 *
 * ## Ejes
 *
 * Los cuatro tests son planos y van en el plano **X-Z** (X = largo, Z = alto,
 * Y = normal), que es la convención de ETABS/SAP para un muro. Por eso el GDL de
 * drilling es el giro sobre **Y**, o sea el hueco `[4]` del vector de nudo.
 *
 * Los dos muros van **también en X-Z**. En el `.cpd` estaban en X-Y porque aquel
 * dibujo era plano; aquí el visor es 3D y un muro en X-Y sale **tumbado**, que se
 * lee como una losa y no como un muro. De pie se entiende solo.
 *
 * ## Exportar a ETABS y SAP2000
 *
 * Los seis se exportan con los botones **ETABS (.e2k)** y **SAP (.s2k)** del
 * panel, como cualquier otro ejemplo del workspace: son `states.nodes` +
 * `states.elements` normales. Así el mismo modelo se puede abrir en el programa
 * de CSI y comparar nudo a nudo, que es la única forma de arbitrar de verdad.
 */
import { deform, analyze, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

const CAT = "2️⃣ Shells · 🌀 Drilling ITW";
// Los dos muros NO son shells puros: llevan la viga, o sea barras + cáscaras en
// el mismo modelo. El árbol lo manda el TIPO DE ELEMENTO, no el tema, y la suite
// lo comprueba contando los elementos de cada ExampleDef.
const CAT_MIX = "4️⃣ Mixtos · 🌀 Drilling ITW";
const VER: string[] = ["vonMises", "membraneXX", "membraneYY", "membraneXY",
                       "displacementX", "displacementY", "displacementZ"];

type Sup = [boolean, boolean, boolean, boolean, boolean, boolean];
type Car = [number, number, number, number, number, number];

/** Malla rectangular en el plano X-Z (Y = normal), como un muro de ETABS. */
function mallaXZ(L: number, H: number, na: number, nb: number) {
  const nodes: Node[] = [];
  for (let j = 0; j <= nb; j++)
    for (let i = 0; i <= na; i++) nodes.push([i * L / na, 0, j * H / nb]);
  const elements: Element[] = [];
  for (let j = 0; j < nb; j++)
    for (let i = 0; i < na; i++) {
      const n0 = j * (na + 1) + i;
      elements.push([n0, n0 + 1, n0 + na + 2, n0 + na + 1]);
    }
  return { nodes, elements, idx: (i: number, j: number) => j * (na + 1) + i };
}

/** Propiedades de cáscara iguales en todos los elementos. */
function props(elements: Element[], t: number, E: number, nu: number) {
  const m = <T,>(v: T) => new Map<number, T>(elements.map((_, i) => [i, v]));
  return { thicknesses: m(t), elasticities: m(E), poissonsRatios: m(nu),
           densities: m(0) };
}

/**
 * Un caso plano: se sujeta el fuera-de-plano en TODOS los nudos y se empotra un
 * borde. Lo primero no es física del problema — es que esto es una membrana, y
 * si se deja suelto el fuera-de-plano el sistema queda mal condicionado.
 */
function planoXZ(nodes: Node[], sujetarBorde: (n: number) => boolean) {
  const supports = new Map<number, Sup>();
  for (let n = 0; n < nodes.length; n++)
    supports.set(n, sujetarBorde(n)
      ? [true, true, true, true, true, true]
      : [false, true, false, true, false, true]);   // libres: ux, uz y ry (drilling)
  return supports;
}

function resolver(states: any, nodes: Node[], elements: Element[],
                  supports: Map<number, Sup>, loads: Map<number, Car>, ei: any) {
  states.nodes.val = nodes;
  states.elements.val = elements;
  states.nodeInputs.val = { supports, loads };
  states.elementInputs.val = ei;
  states.objects3D.val = [];
  states.deformOutputs.val = deform(nodes, elements, { supports, loads }, ei);
  states.analyzeOutputs.val = analyze(nodes, elements, ei,
                                      states.deformOutputs.val);
}

const u = (states: any, n: number, k: number) =>
  states.deformOutputs.val?.deformations?.get(n)?.[k] ?? NaN;

/** La fila de siempre: medido, referencia y error en %. */
function fila(medido: number, ref: number) {
  return {
    "δ calculado": medido.toExponential(5),
    "δ referencia": ref.toExponential(5),
    "error": `${((medido / ref - 1) * 100).toFixed(3)} %`,
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// Test I — Flexión pura
// ═══════════════════════════════════════════════════════════════════════════
/**
 * Viga 10 × 1 con un MOMENTO en el extremo. Es el caso más exigente de todos y
 * a la vez el más simple: bajo momento constante la solución exacta es un arco
 * de circunferencia, y un elemento que reproduzca flexión pura tiene que dar la
 * flecha **exacta** con la malla que sea.
 *
 * Un Q4 clásico NO puede: sin el giro normal no hay forma de meter el momento en
 * el extremo, y aunque se meta como par de fuerzas sale rígido de más
 * (*shear locking*). Con drilling el momento entra directo por el GDL.
 */
export const itwTest1: ExampleDef = {
  id: "itw-test-1-flexion-pura",
  name: "ITW Test I · Flexión pura (δ = 3.0 exacto)",
  category: CAT,
  benchmark: true,
  defaultShellResult: "membraneXX",
  availableShellResults: VER,
  params: {
    L:  { default: 10,  min: 4,  max: 30,  step: 1,    label: "L largo X" },
    H:  { default: 1,   min: 0.5, max: 4,  step: 0.25, label: "H canto Z" },
    E:  { default: 100, min: 10, max: 1000, step: 10,  label: "E" },
    nu: { default: 0,   min: 0,  max: 0.45, step: 0.05, label: "ν" },
    t:  { default: 1,   min: 0.1, max: 2,  step: 0.1,  label: "t espesor" },
    M:  { default: 0.5, min: 0.1, max: 5,  step: 0.1,  label: "M en el extremo" },
    na: { default: 10,  min: 2,  max: 40,  step: 1,    label: "divisiones X" },
    nb: { default: 2,   min: 1,  max: 10,  step: 1,    label: "divisiones Z" },
  },
  build(p, states) {
    const na = Math.round(p.na), nb = Math.round(p.nb);
    const { nodes, elements, idx } = mallaXZ(p.L, p.H, na, nb);
    const supports = planoXZ(nodes, (n) => n % (na + 1) === 0);   // borde x = 0
    // El momento se reparte entre los nudos del extremo libre y entra POR EL
    // GDL DE DRILLING. Ahí está la gracia del elemento: sin ese GDL no habría
    // dónde aplicarlo, y habría que fabricar un par de fuerzas equivalente.
    const loads = new Map<number, Car>();
    for (let j = 0; j <= nb; j++)
      loads.set(idx(na, j), [0, 0, 0, 0, p.M / (nb + 1), 0]);
    resolver(states, nodes, elements, supports, loads,
             props(elements, p.t, p.E, p.nu));
  },
  computedLabels(p, states) {
    const na = Math.round(p.na), nb = Math.round(p.nb);
    // Flecha exacta de flexión pura: δ = M·L²/(2·E·I)
    const I = p.t * Math.pow(p.H, 3) / 12;
    const ref = p.M * p.L * p.L / (2 * p.E * I);
    return { ...fila(Math.abs(u(states, nb * (na + 1) + na, 2)), ref),
             "por qué": "flexión pura = solución EXACTA con cualquier malla" };
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// Test II — Voladizo corto a cortante
// ═══════════════════════════════════════════════════════════════════════════
/**
 * Voladizo 48 × 12 (relación 4:1, o sea CORTO) con cortante en el extremo, malla
 * 8 × 3. Aquí flexión y cortante pesan los dos, y con tan pocos elementos es
 * donde un Q4 sin drilling se queda corto.
 *
 * Referencia **0.3553**, la del propio paper.
 */
export const itwTest2: ExampleDef = {
  id: "itw-test-2-voladizo",
  name: "ITW Test II · Voladizo corto a cortante (δ = 0.3553)",
  category: CAT,
  benchmark: true,
  defaultShellResult: "vonMises",
  availableShellResults: VER,
  params: {
    L:  { default: 48,    min: 12, max: 96,  step: 4,    label: "L largo X" },
    H:  { default: 12,    min: 3,  max: 24,  step: 1,    label: "H canto Z" },
    E:  { default: 30000, min: 1000, max: 1e5, step: 1000, label: "E" },
    nu: { default: 0.25,  min: 0,  max: 0.45, step: 0.05, label: "ν" },
    t:  { default: 1,     min: 0.1, max: 2,  step: 0.1,  label: "t espesor" },
    V:  { default: 40,    min: 5,  max: 200, step: 5,    label: "V cortante total" },
    na: { default: 8,     min: 2,  max: 32,  step: 1,    label: "divisiones X" },
    nb: { default: 3,     min: 1,  max: 12,  step: 1,    label: "divisiones Z" },
  },
  build(p, states) {
    const na = Math.round(p.na), nb = Math.round(p.nb);
    const { nodes, elements, idx } = mallaXZ(p.L, p.H, na, nb);
    const supports = planoXZ(nodes, (n) => n % (na + 1) === 0);
    // Cortante repartido en el borde libre; las esquinas se llevan la mitad,
    // que es el vector consistente de una carga uniforme sobre ese borde.
    const loads = new Map<number, Car>();
    for (let j = 0; j <= nb; j++) {
      const f = (j === 0 || j === nb) ? p.V / (2 * nb) : p.V / nb;
      loads.set(idx(na, j), [0, 0, -f, 0, 0, 0]);
    }
    resolver(states, nodes, elements, supports, loads,
             props(elements, p.t, p.E, p.nu));
  },
  computedLabels(p, states) {
    const na = Math.round(p.na), nb = Math.round(p.nb);
    const medio = Math.round(nb / 2);
    return { ...fila(Math.abs(u(states, medio * (na + 1) + na, 2)), 0.3553),
             "por qué": "4:1 y malla 8×3: donde un Q4 sin drilling se queda corto" };
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// Test III — Membrana de Cook
// ═══════════════════════════════════════════════════════════════════════════
/**
 * El trapecio de Cook: A(0,0) B(48,44) C(48,60) D(0,44), empotrado en x = 0 y con
 * cortante repartido en el borde libre x = 48.
 *
 * Es el banco clásico de **malla distorsionada**: ningún elemento es rectangular,
 * así que mide si la formulación aguanta jacobianos que varían dentro del
 * elemento. Referencia **23.91**.
 */
export const itwTest3: ExampleDef = {
  id: "itw-test-3-cook",
  name: "ITW Test III · Membrana de Cook (δ = 23.91)",
  category: CAT,
  benchmark: true,
  defaultShellResult: "vonMises",
  availableShellResults: VER,
  params: {
    E:  { default: 1,    min: 0.5, max: 10, step: 0.5,  label: "E" },
    nu: { default: 1 / 3, min: 0,  max: 0.45, step: 0.01, label: "ν" },
    t:  { default: 1,    min: 0.1, max: 2,  step: 0.1,  label: "t espesor" },
    V:  { default: 1,    min: 0.1, max: 10, step: 0.1,  label: "V cortante total" },
    na: { default: 4,    min: 2,  max: 24,  step: 1,    label: "divisiones X" },
    nb: { default: 4,    min: 2,  max: 24,  step: 1,    label: "divisiones Z" },
  },
  build(p, states) {
    const na = Math.round(p.na), nb = Math.round(p.nb);
    // El trapecio se malla interpolando entre el borde izquierdo (0→44) y el
    // derecho (44→60): por eso NINGÚN elemento sale rectangular, que es
    // exactamente lo que este banco quiere medir.
    const nodes: Node[] = [];
    for (let j = 0; j <= nb; j++)
      for (let i = 0; i <= na; i++) {
        const x = 48 * i / na;
        const zAbajo = 44 * i / na;              // A(0,0) → B(48,44)
        const zArriba = 44 + 16 * i / na;        // D(0,44) → C(48,60)
        nodes.push([x, 0, zAbajo + (zArriba - zAbajo) * j / nb]);
      }
    const elements: Element[] = [];
    for (let j = 0; j < nb; j++)
      for (let i = 0; i < na; i++) {
        const n0 = j * (na + 1) + i;
        elements.push([n0, n0 + 1, n0 + na + 2, n0 + na + 1]);
      }
    const supports = planoXZ(nodes, (n) => n % (na + 1) === 0);
    const loads = new Map<number, Car>();
    for (let j = 0; j <= nb; j++) {
      const f = (j === 0 || j === nb) ? p.V / (2 * nb) : p.V / nb;
      loads.set(j * (na + 1) + na, [0, 0, f, 0, 0, 0]);   // hacia ARRIBA
    }
    resolver(states, nodes, elements, supports, loads,
             props(elements, p.t, p.E, p.nu));
  },
  computedLabels(p, states) {
    const na = Math.round(p.na), nb = Math.round(p.nb);
    const medio = Math.round(nb / 2);
    return { ...fila(Math.abs(u(states, medio * (na + 1) + na, 2)), 23.91),
             "por qué": "malla distorsionada: ningún elemento es rectangular" };
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// Test IV — Hemisferio pinchado
// ═══════════════════════════════════════════════════════════════════════════
/**
 * Hemisferio con hueco de 18° apretado por dos fuerzas opuestas en el ecuador
 * (MacNeal-Harder). Se modela **un cuarto** por simetría, R = 10, t = 0.04 — o
 * sea `R/t = 250`, una cáscara muy delgada con doble curvatura y casi sin
 * membrana: el caso duro de verdad.
 *
 * Referencia **0.094**.
 *
 * ⚠️ **Aquí el elemento BLOQUEA en malla gruesa, y no está roto: converge.**
 * Es el *membrane locking* del que avisa el propio paper (§4). Medido con este
 * mismo motor (2026-08-20):
 *
 * | malla | δ | error |
 * |---|---|---|
 * | 4×4 | 1.0114e−2 | −89.24 % |
 * | 8×8 | 5.9249e−2 | −36.97 % |
 * | 12×12 | 8.3555e−2 | −11.11 % |
 * | 16×16 | 8.9954e−2 | −4.30 % |
 * | 20×20 | 9.1924e−2 | −2.21 % |
 *
 * ## Y ojo con comparar esto contra el `.cpd`: NO dan lo mismo, y se sabe por qué
 *
 * El `.cpd` didáctico anota «Calcpad = MATLAB = Python (8×8 = 0.0894)», o sea
 * −5 % donde este motor da −37 %. **No es que uno esté mal: integran distinto.**
 *
 * * El `.cpd` usa **Gauss 2×2** (su `gp` tiene 4 puntos).
 * * Este motor usa **Gauss 3×3**, que es la ec. (33) del paper.
 *
 * El 2×2 desbloquea el hemisferio, pero deja el elemento con **4 modos de
 * energía nula** — y eso se ve en el propio `.cpd`: antes de resolver tiene que
 * **parchear a mano las diagonales casi nulas** de la K
 * (`si K(ii,ii) < 1e-9·dmx entonces súmale 0.001·dmx`). Ese parche es la firma
 * del mecanismo. Un elemento con modos de energía nula da buen número en este
 * banco y puede dar cualquier cosa en un modelo de verdad.
 *
 * Así que aquí manda el 3×3: peor número en malla gruesa, elemento sano, y
 * converge. Que es exactamente el compromiso que describe el paper.
 */
export const itwTest4: ExampleDef = {
  id: "itw-test-4-hemisferio",
  name: "ITW Test IV · Hemisferio pinchado (δ = 0.094)",
  category: CAT,
  benchmark: true,
  defaultShellResult: "displacementX",
  availableShellResults: VER,
  params: {
    R:  { default: 10,       min: 5,   max: 20,   step: 1,    label: "R radio" },
    E:  { default: 68250000, min: 1e6, max: 1e8,  step: 1e6,  label: "E" },
    nu: { default: 0.3,      min: 0,   max: 0.45, step: 0.05, label: "ν" },
    t:  { default: 0.04,     min: 0.01, max: 0.5, step: 0.01, label: "t espesor" },
    P:  { default: 1,        min: 0.1, max: 10,   step: 0.1,  label: "P (pinza)" },
    na: { default: 8,        min: 2,   max: 24,   step: 1,    label: "divisiones φ" },
    nb: { default: 8,        min: 2,   max: 24,   step: 1,    label: "divisiones polar" },
  },
  build(p, states) {
    const na = Math.round(p.na), nb = Math.round(p.nb);
    const rad = Math.PI / 180;
    const nodes: Node[] = [];
    for (let j = 0; j <= nb; j++)
      for (let i = 0; i <= na; i++) {
        const phi = (i / na) * 90 * rad;            // 0 … 90° (el cuarto)
        const pol = (18 + (j / nb) * 72) * rad;     // 18° (hueco) … 90° (ecuador)
        nodes.push([p.R * Math.sin(pol) * Math.cos(phi),
                    p.R * Math.sin(pol) * Math.sin(phi),
                    p.R * Math.cos(pol)]);
      }
    const elements: Element[] = [];
    for (let j = 0; j < nb; j++)
      for (let i = 0; i < na; i++) {
        const n0 = j * (na + 1) + i;
        elements.push([n0, n0 + 1, n0 + na + 2, n0 + na + 1]);
      }
    // Simetría, no empotramiento: el borde φ=0 está en el plano X-Z (se fija uy,
    // rx, rz) y el borde φ=90° en el plano Y-Z (se fija ux, ry, rz). El hueco de
    // 18° y el ecuador quedan LIBRES — la cáscara solo se sujeta por simetría.
    const supports = new Map<number, Sup>();
    for (let n = 0; n < nodes.length; n++)
      supports.set(n, [false, false, false, false, false, false]);
    for (let j = 0; j <= nb; j++) {
      supports.set(j * (na + 1) + 0,  [false, true, false, true, false, true]);
      supports.set(j * (na + 1) + na, [true, false, false, false, true, true]);
    }
    // Las dos fuerzas del ecuador: hacia fuera en +X, hacia dentro en +Y.
    const eq = nb * (na + 1);
    const loads = new Map<number, Car>([
      [eq + 0,  [p.P, 0, 0, 0, 0, 0]],
      [eq + na, [0, -p.P, 0, 0, 0, 0]],
    ]);
    resolver(states, nodes, elements, supports, loads,
             props(elements, p.t, p.E, p.nu));
  },
  computedLabels(p, states) {
    const na = Math.round(p.na), nb = Math.round(p.nb);
    return { ...fila(Math.abs(u(states, nb * (na + 1) + 0, 0)), 0.094),
             "ojo": "bloquea en malla gruesa y CONVERGE: sube las divisiones",
             "16×16 da": "−4.3 % · 20×20 da −2.2 %",
             "vs el .cpd": "el .cpd integra 2×2 y da −5 %, pero con 4 modos nulos" };
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// Muro de acople — dos muros unidos por una viga
// ═══════════════════════════════════════════════════════════════════════════
/**
 * Dos muros de corte de 2 × 4 m separados 1.5 m, unidos arriba por una **viga de
 * acople** de 0.25 × 0.80. Bases empotradas, carga lateral y gravedad en los
 * topes.
 *
 * **Este es el caso que justifica el drilling entero.** La viga de acople trabaja
 * metiendo momento en la cabeza de cada muro. Si el muro no tiene GDL de giro
 * normal, ese momento **no tiene dónde entrar**: la unión es una rótula, los dos
 * muros trabajan como si estuvieran sueltos y la deriva sale mucho mayor. Con
 * drilling, la viga acopla de verdad y el conjunto se comporta como una pieza.
 *
 * Va en el plano **X-Y** (X = ancho, Y = alto), tal como estaba en el `.cpd`, así
 * que aquí el drilling es `rz`.
 */
export const muroAcopleITW: ExampleDef = {
  id: "itw-muro-acople",
  name: "ITW · Muros acoplados (el momento entra por el drilling)",
  category: CAT_MIX,
  defaultShellResult: "vonMises",
  availableShellResults: VER,
  params: {
    W:    { default: 2,        min: 1,   max: 6,   step: 0.25, label: "ancho de cada muro (m)" },
    H:    { default: 4,        min: 2,   max: 12,  step: 0.5,  label: "altura (m)" },
    gap:  { default: 1.5,      min: 0.5, max: 5,   step: 0.25, label: "hueco entre muros (m)" },
    t:    { default: 0.25,     min: 0.1, max: 0.6, step: 0.05, label: "espesor del muro (m)" },
    E:    { default: 24850000, min: 1e6, max: 4e7, step: 1e6,  label: "E (kN/m²)" },
    nu:   { default: 0.20,     min: 0,   max: 0.45, step: 0.05, label: "ν" },
    b_b:  { default: 0.25,     min: 0.1, max: 0.6, step: 0.05, label: "ancho viga (m)" },
    h_b:  { default: 0.80,     min: 0.2, max: 1.5, step: 0.05, label: "canto viga (m)" },
    FLAT: { default: 100,      min: 0,   max: 500, step: 10,   label: "carga lateral (kN)" },
    GRAV: { default: 200,      min: 0,   max: 800, step: 10,   label: "gravedad (kN)" },
    nx:   { default: 3,        min: 1,   max: 10,  step: 1,    label: "divisiones X por muro" },
    nz:   { default: 6,        min: 2,   max: 20,  step: 1,    label: "divisiones Y" },
    NB:   { default: 4,        min: 1,   max: 10,  step: 1,    label: "elementos de la viga" },
  },
  build(p, states) {
    const nx = Math.round(p.nx), nz = Math.round(p.nz), NB = Math.round(p.NB);
    const nodes: Node[] = [];
    const npp = (nx + 1) * (nz + 1);
    for (let pp = 0; pp < 2; pp++) {
      const x0 = pp * (p.W + p.gap);
      for (let j = 0; j <= nz; j++)
        for (let i = 0; i <= nx; i++)
          nodes.push([x0 + i * p.W / nx, 0, j * p.H / nz]);
    }
    // Los nudos INTERMEDIOS de la viga (los dos extremos son las cabezas de los
    // muros, que ya existen).
    const nViga: number[] = [];
    for (let ib = 1; ib < NB; ib++) {
      nViga.push(nodes.length);
      nodes.push([p.W + p.gap * ib / NB, 0, p.H]);
    }

    const elements: Element[] = [];
    for (let pp = 0; pp < 2; pp++)
      for (let j = 0; j < nz; j++)
        for (let i = 0; i < nx; i++) {
          const b = pp * npp + j * (nx + 1) + i;
          elements.push([b, b + 1, b + nx + 2, b + nx + 1]);
        }
    const nShell = elements.length;
    // La viga: de la cabeza del muro 1 (esquina derecha) a la del muro 2
    // (esquina izquierda), pasando por los intermedios.
    const cab1 = 0 * npp + nz * (nx + 1) + nx;
    const cab2 = 1 * npp + nz * (nx + 1) + 0;
    const cadena = [cab1, ...nViga, cab2];
    for (let k = 0; k < cadena.length - 1; k++)
      elements.push([cadena[k], cadena[k + 1]] as unknown as Element);

    const supports = new Map<number, Sup>();
    for (let n = 0; n < nodes.length; n++)
      // Muro en el plano X-Z: libres ux, uz y el drilling ry.
      supports.set(n, [false, true, false, true, false, true]);
    for (let pp = 0; pp < 2; pp++)
      for (let i = 0; i <= nx; i++)
        supports.set(pp * npp + i, [true, true, true, true, true, true]);

    const loads = new Map<number, Car>();
    const tops = 2 * (nx + 1);
    for (let pp = 0; pp < 2; pp++)
      for (let i = 0; i <= nx; i++)
        loads.set(pp * npp + nz * (nx + 1) + i,
                  [p.FLAT / tops, 0, -p.GRAV / tops, 0, 0, 0]);

    const A = p.b_b * p.h_b, I = p.b_b * Math.pow(p.h_b, 3) / 12;
    const ei: any = props(elements.slice(0, nShell), p.t, p.E, p.nu);
    // Los frames van DESPUÉS de las cáscaras en el mismo array, así que sus
    // propiedades se meten en los índices que les tocan.
    ei.areas = new Map<number, number>();
    ei.momentsOfInertiaY = new Map<number, number>();
    ei.momentsOfInertiaZ = new Map<number, number>();
    ei.torsionalConstants = new Map<number, number>();
    for (let k = nShell; k < elements.length; k++) {
      ei.elasticities.set(k, p.E);
      ei.poissonsRatios.set(k, p.nu);
      ei.densities.set(k, 0);
      ei.areas.set(k, A);
      ei.momentsOfInertiaY.set(k, I);
      ei.momentsOfInertiaZ.set(k, I);
      ei.torsionalConstants.set(k, 2 * I);
    }
    resolver(states, nodes, elements, supports, loads, ei);
    (states as any).__itwCab = [cab1, cab2];
  },
  computedLabels(p, states) {
    const nx = Math.round(p.nx), nz = Math.round(p.nz);
    const npp = (nx + 1) * (nz + 1);
    const cab1 = nz * (nx + 1) + nx;
    const dx = u(states, cab1, 0);
    return {
      "deriva de la cabeza (mm)": (dx * 1000).toFixed(4),
      "deriva / H": (dx / p.H).toExponential(4),
      "por qué importa": "sin drilling la viga sería una rótula y la deriva se dispararía",
      "giro de la cabeza (drilling)": u(states, cab1, 4).toExponential(4),
    };
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// Muro + frame — viga en voladizo colgada del muro
// ═══════════════════════════════════════════════════════════════════════════
/**
 * Muro de 2 × 4 m con una **viga en voladizo** de 2 m colgada de su esquina
 * superior, cargada en la punta.
 *
 * Es el caso clave del paper, y el más fácil de ver: la viga solo se sujeta por
 * un punto. Sin GDL de giro normal en el muro, esa unión **es una rótula** y el
 * conjunto es un **mecanismo** — la viga giraría libre y el sistema sería
 * singular. Con drilling, el muro recibe el momento y la viga trabaja.
 */
export const muroFrameITW: ExampleDef = {
  id: "itw-muro-frame",
  name: "ITW · Muro + viga en voladizo (sin drilling sería un mecanismo)",
  category: CAT_MIX,
  defaultShellResult: "vonMises",
  availableShellResults: VER,
  params: {
    W:   { default: 2,        min: 1,   max: 6,   step: 0.25, label: "ancho del muro (m)" },
    H:   { default: 4,        min: 2,   max: 12,  step: 0.5,  label: "altura (m)" },
    t:   { default: 0.25,     min: 0.1, max: 0.6, step: 0.05, label: "espesor (m)" },
    E:   { default: 24850000, min: 1e6, max: 4e7, step: 1e6,  label: "E (kN/m²)" },
    nu:  { default: 0.20,     min: 0,   max: 0.45, step: 0.05, label: "ν" },
    b_b: { default: 0.25,     min: 0.1, max: 0.6, step: 0.05, label: "ancho viga (m)" },
    h_b: { default: 0.50,     min: 0.2, max: 1.2, step: 0.05, label: "canto viga (m)" },
    L_b: { default: 2,        min: 0.5, max: 6,   step: 0.25, label: "vuelo de la viga (m)" },
    P_v: { default: 50,       min: 0,   max: 300, step: 5,    label: "P en la punta (kN)" },
    nx:  { default: 4,        min: 1,   max: 12,  step: 1,    label: "divisiones X" },
    nz:  { default: 8,        min: 2,   max: 24,  step: 1,    label: "divisiones Y" },
    NB:  { default: 5,        min: 1,   max: 12,  step: 1,    label: "elementos de la viga" },
  },
  build(p, states) {
    const nx = Math.round(p.nx), nz = Math.round(p.nz), NB = Math.round(p.NB);
    const nodes: Node[] = [];
    for (let j = 0; j <= nz; j++)
      for (let i = 0; i <= nx; i++) nodes.push([i * p.W / nx, 0, j * p.H / nz]);
    const esquina = nz * (nx + 1) + nx;            // esquina superior derecha
    const cadena = [esquina];
    for (let k = 1; k <= NB; k++) {
      cadena.push(nodes.length);
      nodes.push([p.W + p.L_b * k / NB, 0, p.H]);
    }
    const punta = cadena[cadena.length - 1];

    const elements: Element[] = [];
    for (let j = 0; j < nz; j++)
      for (let i = 0; i < nx; i++) {
        const n0 = j * (nx + 1) + i;
        elements.push([n0, n0 + 1, n0 + nx + 2, n0 + nx + 1]);
      }
    const nShell = elements.length;
    for (let k = 0; k < cadena.length - 1; k++)
      elements.push([cadena[k], cadena[k + 1]] as unknown as Element);

    const supports = new Map<number, Sup>();
    for (let n = 0; n < nodes.length; n++)
      supports.set(n, [false, true, false, true, false, true]);   // X-Z: ux, uz, ry
    for (let i = 0; i <= nx; i++)
      supports.set(i, [true, true, true, true, true, true]);   // base empotrada

    const loads = new Map<number, Car>([[punta, [0, 0, -p.P_v, 0, 0, 0]]]);

    const A = p.b_b * p.h_b, I = p.b_b * Math.pow(p.h_b, 3) / 12;
    const ei: any = props(elements.slice(0, nShell), p.t, p.E, p.nu);
    ei.areas = new Map<number, number>();
    ei.momentsOfInertiaY = new Map<number, number>();
    ei.momentsOfInertiaZ = new Map<number, number>();
    ei.torsionalConstants = new Map<number, number>();
    for (let k = nShell; k < elements.length; k++) {
      ei.elasticities.set(k, p.E);
      ei.poissonsRatios.set(k, p.nu);
      ei.densities.set(k, 0);
      ei.areas.set(k, A);
      ei.momentsOfInertiaY.set(k, I);
      ei.momentsOfInertiaZ.set(k, I);
      ei.torsionalConstants.set(k, 2 * I);
    }
    resolver(states, nodes, elements, supports, loads, ei);
  },
  computedLabels(p, states) {
    const nx = Math.round(p.nx), nz = Math.round(p.nz), NB = Math.round(p.NB);
    const esquina = nz * (nx + 1) + nx;
    const punta = (nz + 1) * (nx + 1) + NB - 1;
    const A = p.b_b * p.h_b, I = p.b_b * Math.pow(p.h_b, 3) / 12;
    // Si el muro fuese INFINITAMENTE rígido, la viga sería un voladizo puro:
    // δ = P·L³/(3EI). Lo que salga de MÁS es lo que cede el muro por su GDL de
    // giro — o sea la medida directa de para qué sirve el drilling.
    const soloViga = p.P_v * Math.pow(p.L_b, 3) / (3 * p.E * I);
    const dv = Math.abs(u(states, punta, 2));
    return {
      "δ punta (mm)": (dv * 1000).toFixed(4),
      "voladizo puro (mm)": (soloViga * 1000).toFixed(4),
      "lo que cede el muro": `${((dv / soloViga - 1) * 100).toFixed(2)} %`,
      "giro de la esquina (drilling)": u(states, esquina, 4).toExponential(4),
    };
  },
};

export const itwTodos = [itwTest1, itwTest2, itwTest3, itwTest4,
                         muroAcopleITW, muroFrameITW];
