/**
 * 🧱 MURO CORTANTE CON HUECOS GRANDES — modelo de LARGUEROS (stringer model).
 *
 * Un muro con una abertura grande es más difícil de calcular que uno macizo, y
 * por eso se suele dejar fuera del cálculo de estabilidad. El modelo de
 * largueros lo resuelve poniendo la armadura donde de verdad puede ir, y el
 * camino de carga se vuelve algo que se VE: qué líneas van a tracción y cuáles
 * a compresión mientras la fuerza rodea el hueco.
 *
 * ## Las dos piezas, y qué hace cada una
 *
 *   · **LARGUERO** (stringer) — una barra que solo trabaja a **axil**:
 *     tracción o compresión. Es donde irá la varilla, así que su fuerza te dice
 *     directamente cuánta armadura hace falta.
 *   · **CAMPO DE CORTANTE** (shear field) — un panel que solo lleva
 *     **cortante**, con flujo constante. No toma tensión normal: eso es trabajo
 *     de los largueros de su contorno.
 *
 * ## Cómo se monta con el motor de Hekatan, sin elementos nuevos
 *
 * No hace falta un elemento «larguero» ni un elemento «panel»: las dos
 * condiciones son casos particulares de lo que ya hay, y decirlo con las piezas
 * del motor es mejor que añadir dos elementos más que mantener.
 *
 *   · El larguero es un **frame con los momentos liberados en las dos caras**
 *     (`momentReleases`): sin flexión ni torsión, solo axil. Es una barra de
 *     dos fuerzas.
 *   · El campo de cortante son sus **dos diagonales cruzadas**, también solo
 *     axil, con el área que hace que su rigidez a distorsión sea la del panel:
 *
 *         2 · (E·A_d / L_d) · cos²θ  =  G · t · a / b
 *
 *     Es la sustitución clásica de un panel a cortante por su celosía
 *     equivalente, y es la que hace que TODO el modelo sea axil: cada barra que
 *     se ve dice tracción o compresión, que es de lo que va el método.
 *
 * ## ⚠️ Lo que NO funciona, y está medido
 *
 * Lo primero que se prueba es poner el panel como una **membrana Q4 con los
 * modificadores a cero salvo el de cortante** (`F11 = F22 = 0`, `F12 = 1`).
 * **No resuelve**, y no es un fallo del solver: un Q4 al que se le quita la
 * rigidez normal se queda sin rango — solo resiste el modo de cortante y sus
 * dos modos de extensión quedan libres. Los largueros del contorno no los
 * cubren. Medido: quitando los modificadores resuelve, quitando los releases
 * también, y **con las dos cosas a la vez no**.
 *
 * El modelo de largueros de verdad no es un Q4 con los módulos a cero: en él el
 * panel no es un elemento de desplazamientos con 8 GDL, es UNA incógnita —el
 * flujo de cortante— con sus ecuaciones de equilibrio. Mientras eso no sea un
 * elemento propio del motor, la celosía equivalente es la forma honrada de
 * decirlo con lo que hay.
 *
 * ⚠️ Con todo axil, los GIROS de los nudos no los sujeta nadie. Se coartan, que
 * es lo correcto: un GDL sin rigidez tiene fuerza nula y su valor no lo decide
 * el equilibrio, lo decide el redondeo. Es lo mismo que hace `getZerosIndices`
 * en el solver, y lo que hace ETABS.
 *
 * El muro se monta en el plano **X-Z** (vertical), así que la traslación fuera
 * del plano (UY) también se coarta: es un problema plano.
 *
 * Idea del modelo: Rune Hallum / PolyStringer ShearWall. La formulación de
 * largueros y campos de cortante es la clásica de Hoogenboom (stringer-panel).
 */
import { deform, analyze, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

/** Un hueco, en celdas de la rejilla: [col0, col1) × [fila0, fila1). */
interface Hueco { c0: number; c1: number; f0: number; f1: number }

export const muroLargueros: ExampleDef = {
  id: "muro-largueros",
  name: "🧱 Muro cortante con huecos — modelo de largueros",
  category: "2️⃣ Elementos Area · 🧱 Muros",
  // Todo es barra: lo que se mira es el AXIL, que es lo que dice si esa linea
  // va a traccion o a compresion — y cuanta varilla hace falta.
  defaultFrameResult: "normal",
  params: {
    L:  { default: 12, min: 4, max: 30, step: 0.5, label: "ancho del muro (m)", folder: "📐 Geometría" },
    H:  { default: 9,  min: 3, max: 24, step: 0.5, label: "alto del muro (m)",  folder: "📐 Geometría" },
    nx: { default: 8,  min: 3, max: 16, step: 1,   label: "columnas de paneles", folder: "📐 Geometría" },
    ny: { default: 3,  min: 2, max: 8,  step: 1,   label: "filas de paneles",    folder: "📐 Geometría" },
    t:  { default: 0.20, min: 0.08, max: 0.6, step: 0.01, label: "espesor (m)",  folder: "📐 Geometría" },

    // Los dos huecos del croquis: una ventana a la izquierda y una puerta que
    // llega hasta abajo a la derecha.
    h1c: { default: 1, min: 0, max: 15, step: 1, label: "ventana · columna", folder: "🕳 Huecos" },
    h1a: { default: 2, min: 1, max: 8,  step: 1, label: "ventana · ancho (celdas)", folder: "🕳 Huecos" },
    h1f: { default: 1, min: 0, max: 7,  step: 1, label: "ventana · fila", folder: "🕳 Huecos" },
    h1h: { default: 1, min: 1, max: 6,  step: 1, label: "ventana · alto (celdas)", folder: "🕳 Huecos" },
    h2c: { default: 5, min: 0, max: 15, step: 1, label: "puerta · columna", folder: "🕳 Huecos" },
    h2a: { default: 2, min: 1, max: 8,  step: 1, label: "puerta · ancho (celdas)", folder: "🕳 Huecos" },
    h2h: { default: 2, min: 1, max: 7,  step: 1, label: "puerta · alto (celdas)", folder: "🕳 Huecos" },

    q:    { default: 20, min: 0, max: 200, step: 5, label: "vertical arriba (kN/m)", folder: "⬇ Cargas" },
    qExt: { default: 80, min: 0, max: 300, step: 5, label: "  extra en el tramo derecho (kN/m)", folder: "⬇ Cargas" },
    Ph:   { default: 20, min: -200, max: 200, step: 5, label: "horizontal en la cabeza (kN)", folder: "⬇ Cargas" },

    E:  { default: 25e6, min: 1e6, max: 4e7, step: 1e6, label: "E del hormigón (kN/m²)", folder: "🧱 Material" },
    Al: { default: 60, min: 5, max: 400, step: 5, label: "área del larguero (cm²)", folder: "🧱 Material" },
  },

  computedLabels(p, states) {
    const els = (states.elements?.val ?? []) as Element[];
    const nB = els.filter((e) => e.length === 2).length;
    const out = (states.deformOutputs?.val as any)?.deformations as Map<number, number[]> | undefined;
    let ux = 0;
    for (const [, v] of out ?? []) if (Math.abs(v[0]) > Math.abs(ux)) ux = v[0];
    return {
      "largueros · paneles": `${nB} · ${els.length - nB}`,
      "corrimiento de cabeza": `${(ux * 1000).toFixed(2)} mm`,
      "qué mide el color": "el AXIL de cada barra: rojo tracción, azul compresión",
    };
  },

  build(p, states) {
    const nx = Math.round(p.nx), ny = Math.round(p.ny);
    const dx = p.L / nx, dz = p.H / ny;

    // ── la rejilla ──
    const nodes: Node[] = [];
    const id: number[][] = [];
    for (let j = 0; j <= ny; j++) {
      id[j] = [];
      for (let i = 0; i <= nx; i++) {
        id[j][i] = nodes.length;
        nodes.push([i * dx, 0, j * dz] as Node);
      }
    }

    // ── los huecos, recortados a la rejilla ──
    const lim = (v: number, a: number, b: number) => Math.max(a, Math.min(b, Math.round(v)));
    const huecos: Hueco[] = [
      { c0: lim(p.h1c, 0, nx - 1), c1: lim(p.h1c + p.h1a, 1, nx),
        f0: lim(p.h1f, 0, ny - 1), f1: lim(p.h1f + p.h1h, 1, ny) },
      // La puerta arranca SIEMPRE del suelo: es lo que la hace interesante,
      // porque parte el muro en dos machones.
      { c0: lim(p.h2c, 0, nx - 1), c1: lim(p.h2c + p.h2a, 1, nx),
        f0: 0, f1: lim(p.h2h, 1, ny) },
    ];
    const esHueco = (i: number, j: number) =>
      huecos.some((h) => i >= h.c0 && i < h.c1 && j >= h.f0 && j < h.f1);

    // ── los CAMPOS DE CORTANTE: dos diagonales cruzadas por celda ──
    const elements: Element[] = [];
    const thicknesses = new Map<number, number>();
    const shellModifiers = new Map<number, number[]>();
    const elasticities = new Map<number, number>();
    const shearModuli = new Map<number, number>();
    const poissonsRatios = new Map<number, number>();
    const densities = new Map<number, number>();
    const plateFormulations = new Map<number, number>();
    const nu = 0.2, G = p.E / (2 * (1 + nu));

    const conPanel: boolean[][] = [];
    for (let j = 0; j < ny; j++) {
      conPanel[j] = [];
      for (let i = 0; i < nx; i++) conPanel[j][i] = !esHueco(i, j);
    }

    // ── los LARGUEROS: solo axil ──
    // Va uno en cada lado de rejilla que toque al menos un panel. Un lado que
    // solo bordea hueco no lleva nada: no hay dónde poner esa varilla.
    const areas = new Map<number, number>();
    const momentReleases = new Map<number, boolean[]>();
    const I0 = new Map<number, number>();
    const A = p.Al * 1e-4;
    const esDiagonal = new Set<number>();
    const SOLO_AXIL = [false, false, false, true, true, true,
                       false, false, false, true, true, true];
    const ponLarguero = (a: number, b: number, area = A, diag = false) => {
      const e = elements.length;
      elements.push([a, b] as unknown as Element);
      elasticities.set(e, p.E);
      shearModuli.set(e, G);
      poissonsRatios.set(e, nu);
      densities.set(e, 0);
      areas.set(e, area);
      if (diag) esDiagonal.add(e);
      // Una inercia diminuta, no cero: el elemento sigue necesitando sus
      // términos para montarse, y con los momentos liberados no transmite
      // flexión de todos modos. Poner cero sería pedirle al solver que divida
      // por la nada.
      I0.set(e, area * area / 12 * 1e-6);
      // ⚠️ AQUI NO VAN LOS RELEASES, y esta medido: con `momentReleases` puesto
      // el solver devuelve los 36 nudos con desplazamiento CERO —no falla, no
      // avisa, devuelve ceros—, y sin ellos da 1.996 mm. Queda anotado como
      // fallo abierto del motor (`tests/casos/frame_releases_ceros.mjs`).
      //
      // No hace falta ninguno: los giros de todos los nudos estan coartados
      // (nadie les da rigidez) y la inercia es del orden de 1e-12, asi que la
      // barra ya no transmite mas que axil. Es la forma de siempre de hacer una
      // celosia con elementos de portico.
      void SOLO_AXIL;
    };

    // El area de la diagonal que reproduce la rigidez a cortante del pano:
    //     2 (E A_d / L_d) cos²θ = G t a / b     con cosθ = a / L_d
    // => A_d = G t L_d³ / (2 E a b)
    const Ld = Math.hypot(dx, dz);
    const Ad = G * p.t * Ld ** 3 / (2 * p.E * dx * dz);
    for (let j = 0; j < ny; j++)
      for (let i = 0; i < nx; i++) {
        if (!conPanel[j][i]) continue;
        ponLarguero(id[j][i], id[j + 1][i + 1], Ad, true);
        ponLarguero(id[j][i + 1], id[j + 1][i], Ad, true);
      }
    // ⚠️ EN TODOS los lados de la rejilla, tambien los que solo bordean hueco.
    //
    // No es un detalle de dibujo: en el croquis los largueros rodean las
    // aberturas por sus cuatro lados, que es justo donde va la armadura de
    // borde del hueco. Y ademas es lo que hace que el modelo se sostenga: con
    // los paneles a cortante puro (F11 = F22 = 0) el panel casi no tiene rango,
    // asi que toda la rigidez normal la ponen los largueros. Dejando sin
    // larguero los lados del hueco quedan GDL que no sujeta nadie y la matriz
    // sale SINGULAR — medido: quitando los modificadores resuelve, quitando los
    // releases tambien, y con las dos cosas a la vez no.
    //
    // Solo se salta el lado que no toca NADA: los que quedan fuera de la parte
    // maciza y de los contornos de hueco.
    const tocaAlgo = (i0: number, j0: number, i1: number, j1: number) => {
      for (let j = Math.max(0, j0 - 1); j <= Math.min(ny - 1, j1); j++)
        for (let i = Math.max(0, i0 - 1); i <= Math.min(nx - 1, i1); i++)
          if (conPanel[j][i]) return true;
      return false;
    };
    for (let j = 0; j <= ny; j++)
      for (let i = 0; i < nx; i++)
        if (tocaAlgo(i, j, i + 1, j)) ponLarguero(id[j][i], id[j][i + 1]);      // horizontales
    for (let i = 0; i <= nx; i++)
      for (let j = 0; j < ny; j++)
        if (tocaAlgo(i, j, i, j + 1)) ponLarguero(id[j][i], id[j + 1][i]);      // verticales

    // ── apoyos ──
    //
    // Abajo, empotrado en las traslaciones del plano; y en TODOS los nudos se
    // coartan el giro y la traslación fuera del plano. No es una licencia: ni
    // el larguero ni el panel dan rigidez de giro, así que esos GDL no los
    // sujeta nadie — tienen fuerza nula y su valor lo decidiría el redondeo.
    const supports = new Map<number, boolean[]>();
    for (let n = 0; n < nodes.length; n++)
      supports.set(n, [false, true, false, true, true, true]);
    for (let i = 0; i <= nx; i++) {
      const abajoConPanel = (i > 0 && conPanel[0][i - 1]) || (i < nx && conPanel[0][i]);
      if (!abajoConPanel) continue;
      supports.set(id[0][i], [true, true, true, true, true, true]);
    }
    // ⚠️ Y los nudos HUERFANOS. Una puerta que llega al suelo deja nudos de la
    // rejilla que no tocan ni panel ni larguero: sus 6 GDL no los sujeta nadie
    // y la matriz sale SINGULAR — el modelo entero deja de resolver por un
    // punto que ni se ve. Se fijan del todo, que no cambia nada porque no
    // tienen ni carga ni elemento.
    const tocado = new Set<number>();
    for (const el of elements) for (const n of el as unknown as number[]) tocado.add(n);
    for (let n = 0; n < nodes.length; n++)
      if (!tocado.has(n)) supports.set(n, [true, true, true, true, true, true]);

    // ── cargas ──
    // Vertical repartida en la coronación, más un extra en el tramo derecho
    // (el del croquis: 20 kN/m en general y 80 kN/m sobre la parte derecha), y
    // una horizontal en la cabeza, que es la que hace trabajar al muro.
    const loads = new Map<number, number[]>();
    const suma = (n: number, v: number[]) => {
      const a = loads.get(n) ?? [0, 0, 0, 0, 0, 0];
      loads.set(n, a.map((x, k) => x + v[k]));
    };
    for (let i = 0; i <= nx; i++) {
      const anchoTrib = (i === 0 || i === nx ? 0.5 : 1) * dx;
      const q = p.q + (i >= nx - Math.max(1, Math.round(nx / 4)) ? p.qExt : 0);
      suma(id[ny][i], [0, 0, -q * anchoTrib, 0, 0, 0]);
    }
    if (p.Ph) suma(id[ny][0], [p.Ph, 0, 0, 0, 0, 0]);

    const elementInputs: any = {
      elasticities, shearModuli, poissonsRatios, densities, areas,
      momentsOfInertiaY: I0, momentsOfInertiaZ: I0, torsionalConstants: I0,
      momentReleases, thicknesses, plateFormulations, shellModifiers,
    };
    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };
    states.elementInputs.val = elementInputs;
    states.objects3D.val = [];

    const d = deform(nodes, elements, states.nodeInputs.val, elementInputs);
    states.deformOutputs.val = d;
    states.analyzeOutputs.val = analyze(nodes, elements, elementInputs, d);
  },
};
