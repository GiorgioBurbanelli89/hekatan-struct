/**
 * La zapata sobre Winkler contra SAP2000 24 — y los DOS caminos del deploy.
 *
 * Jorge: *"has una comparacion de una zapata shell thin vs una zapata shellthick
 * de espesor de 40 cm ... de 1.50 1.50m y carga de 100 tonf ... En safe primero
 * luego en sap 2000 y etabs"*, y despues *"nosotros tenemos unas cimentaciones
 * en categorias en el deploy publico revisalas tambien si concuerdan con lo que
 * estamos comprobando aqui"*.
 *
 * ## El caso, y por que este
 *
 * Zapata 1.50 × 1.50 m, espesor 0.40 m -> **t/B = 0.267**. Es una placa GRUESA
 * de verdad, o sea el unico sitio donde Thin y Thick TIENEN que separarse. En el
 * escalon B (`t/L = 0.033`) ETABS da `Thick/Thin = 1.000021` y ahi no se
 * distingue nada.
 *
 * Carga 100 tonf repartida sobre la huella de columna 0.30 × 0.30 (4 celdas de
 * la malla 10 × 10), suelo de Winkler `ks = 2000 tonf/m³` como muelle nodal por
 * area tributaria (borde/2, esquina/4), hormigon `f'c = 210` -> `E = 2 188 198
 * tonf/m²`, `ν = 0.20`. Todo en tonf-m.
 *
 * ## El arbitro
 *
 * **SAP2000 24**, mismo modelo nudo a nudo, montado por
 * `validacion/safe-api/sap2000_cli.py` (una sola instancia para los dos tipos,
 * cambiando el `ShellType` en caliente: asi es literalmente el mismo modelo).
 *
 *     Thin   -2.233391e-2      Thick  -2.240827e-2      Thick/Thin = 1.00333
 *
 * Y el asiento medio tiene ademas respuesta cerrada: `P/(ks·B²)` = 0.022222 m.
 * El centro tiene que salir POR ENCIMA de eso, porque una zapata flexible baja
 * mas en el centro que la media. SAP2000 da 100.50 %.
 *
 * ## Lo que este caso vigila, y por que son tres cosas y no una
 *
 * En el deploy las cimentaciones NO van todas por el mismo solver:
 *
 * | camino | quien lo usa |
 * |---|---|
 * | `deform` (C++/WASM, el del producto) | zapata-viga-amarre, zapata-aislada-validacion, viga-medio-elastico, viga-cim-guerra-ej7, safe-bench-viga-cimentacion |
 * | `plateQ4Solve` (solver de placa aparte) | las 8 de Guerra y casi todas las safe-bench-* |
 *
 * Son dos implementaciones distintas de la misma teoria. Que las dos digan
 * "Mindlin" no prueba que den lo mismo: hay que medirlo. Por eso aqui se cruza
 * **cada camino contra SAP2000** y ademas **los dos entre si**.
 *
 * ⚠️ El defecto de `deform` cuando no se pasa `plateFormulations` es **thick**
 * (`getLocalStiffnessMatrix.cpp` solo desvia a Kirchhoff con `== 1` y a DKMQ con
 * `== 3`). O sea que un ejemplo del deploy que no lo declare esta resolviendo
 * Shell-Thick, no Thin.
 */
import { empaquetar, R } from "../lib/bundle.mjs";

// ── el caso, en tonf-m ────────────────────────────────────────────────────
const B = 1.5, T = 0.40, P = 100, KS = 2000, NU = 0.20, N = 10;
const COL = 0.30;
const E = 15100 * Math.sqrt(210) * 10;        // ACI, kg/cm2 -> tonf/m2
const TEO = P / (KS * B * B);                 // asiento medio, respuesta cerrada

// SAP2000 24, medido 2026-08-20 con sap2000_cli.py
const SAP = { thin: -2.233391e-2, thick: -2.240827e-2 };

/**
 * ✅ CERRADO el 31-ago-2026. Estuvo en PENDIENTE [0.55, 0.85] % mientras la rama
 * Kirchhoff de `plateQ4Solve` daba 0.69 % de mas que la Thin de `deform`. Se
 * achacaba a que no son la misma formulacion (DKE de Batoz & Tahar contra un Q4
 * de Mindlin con SRI) y a que `t/B = 0.267` es placa GRUESA, donde el limite
 * delgado no aplica.
 *
 * Era otra cosa: el **MITC4 de `plate_q4/kirchhoff_q4.cpp` interpolaba el
 * cortante CARTESIANO** en vez del covariante. Se destapo con el patch test
 * 2-001 de SAP2000 (ver `tests/casos/patch_test_sap2000.mjs`). Consecuencia
 * medida: la matriz del elemento **cambiaba segun por que nudo empezases a
 * numerar** — 39.7 % entre arrancar en el nudo 0 y en el 1, sobre un CUADRADO.
 * Por eso movia tambien en malla regular. Arreglado: 9e-17.
 *
 *     antes  0.686 %      ahora  0.259 %
 *
 * La banda se quita y el limite baja al 0.5 % normal.
 */
const PENDIENTE = {};

export const nombre = "zapata-winkler-sap2000";
export const descripcion =
  "zapata 1.5x1.5 t=0.40 sobre Winkler vs SAP2000, por los DOS caminos del deploy";

/** Malla, muelles y carga. Lo monta UNA vez para que los dos solvers reciban
 *  exactamente el mismo modelo — si cada uno se arma por su lado, lo que se
 *  compara son dos modelos parecidos y no dos solvers. */
function modelo() {
  const d = B / N, idx = new Map(), xy = [];
  for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
    idx.set(`${i},${j}`, xy.length);
    xy.push([i * d, j * d]);
  }
  const elements = [];
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++)
    elements.push([idx.get(`${i},${j}`), idx.get(`${i + 1},${j}`),
                   idx.get(`${i + 1},${j + 1}`), idx.get(`${i},${j + 1}`)]);

  // el suelo: k = ks * A_tributaria, borde/2 y esquina/4
  const springs = [];
  for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
    const fx = (i === 0 || i === N) ? 0.5 : 1;
    const fy = (j === 0 || j === N) ? 0.5 : 1;
    springs.push({ node: idx.get(`${i},${j}`), k: KS * d * d * fx * fy });
  }

  // la columna: presion uniforme sobre su huella, llevada a los nudos con el
  // vector consistente del Q4 (q*A/4 por esquina). SAP2000 hace lo mismo con
  // `SetLoadUniform`, asi que la carga es identica y no mete diferencia.
  const q = P / (COL * COL);
  const c0 = (B - COL) / 2, c1 = (B + COL) / 2;
  const fz = new Map();
  const huella = new Set();       // los nudos que tocan la huella de la columna
  let nCel = 0;
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    const xc = (i + 0.5) * d, yc = (j + 0.5) * d;
    if (xc < c0 || xc > c1 || yc < c0 || yc > c1) continue;
    nCel++;
    for (const [a, b] of [[i, j], [i + 1, j], [i + 1, j + 1], [i, j + 1]]) {
      const nd = idx.get(`${a},${b}`);
      huella.add(nd);
      fz.set(nd, (fz.get(nd) ?? 0) - q * d * d / 4);
    }
  }
  // El tope: si la huella no cae en la malla la zapata sale sin carga y la
  // flecha es 0 — un cero que se leeria como "salio bien".
  if (Math.abs(nCel * d * d - COL * COL) > 1e-9)
    throw new Error(`la huella no cae en malla: ${nCel} celdas`);

  return { idx, xy, elements, springs, fz, huella,
           centro: idx.get(`${N / 2},${N / 2}`) };
}

export async function correr() {
  const { deform, plateQ4Solve } = await empaquetar(
    `export { deform, plateQ4Solve } from "${R}/hekatan-fem/src/index";\n`,
    "zapatawinkler");

  const M = modelo();

  // ── camino 1: `deform` — el del producto, el que valida SAP2000 ──────────
  function porDeform(pf) {
    const nodes = M.xy.map(([x, y]) => [x, y, 0]);
    const supports = new Map(), loads = new Map();
    for (let n = 0; n < nodes.length; n++)
      // los 3 GDL que el suelo no sujeta. No es fisica del problema: sin ellos
      // el sistema es singular y el fallo sale como NaN, no como aviso.
      supports.set(n, [true, true, false, false, false, true]);
    for (const [n, v] of M.fz) loads.set(n, [0, 0, v, 0, 0, 0]);
    const m = (v) => new Map(M.elements.map((_, k) => [k, v]));
    const d = deform(nodes, M.elements, { supports, loads },
      { thicknesses: m(T), elasticities: m(E), poissonsRatios: m(NU),
        densities: m(0), plateFormulations: m(pf) },
      M.springs.map((s) => ({ node: s.node, dof: 2, k: s.k })));
    return d.deformations?.get(M.centro)?.[2] ?? NaN;
  }

  // ── camino 2: `plateQ4Solve` — el de las 8 zapatas de Guerra ─────────────
  function porPlaca(theory) {
    const r = plateQ4Solve({
      E, nu: NU, thickness: T, theoryType: theory,
      nodes: M.xy, elements: M.elements, bcType: "none",
      springs: M.springs.map((s) => ({ node: s.node, dof: 0, k: s.k })),
      pointLoads: [...M.fz].map(([node, value]) => ({ node, dof: 0, value })),
    });
    return r.nodeResults[M.centro].w;
  }

  const filas = [];
  const dif = (a, b) => Math.abs(a / b - 1) * 100;

  for (const [etiq, pf, th] of [["Thin", 1, 1], ["Thick", 0, 0]]) {
    const wd = porDeform(pf), wp = porPlaca(th), ref = SAP[etiq.toLowerCase()];
    const pend = PENDIENTE[etiq];

    filas.push({
      que: `${etiq} · deform vs SAP2000`,
      medido: dif(wd, ref), limite: 0.5, ok: dif(wd, ref) <= 0.5,
      detalle: `${wd.toExponential(6)} vs ${ref.toExponential(6)}`,
    });
    filas.push({
      que: `${etiq} · plateQ4Solve vs SAP2000`
         + (pend ? " [PENDIENTE, ver cabecera]" : ""),
      medido: dif(wp, ref), limite: pend ? pend[1] : 0.5,
      ok: dif(wp, ref) <= (pend ? pend[1] : 0.5),
      detalle: `${wp.toExponential(6)} — el camino de las 8 zapatas de Guerra`,
    });
    filas.push({
      // Si los dos caminos se separan, el deploy esta dando dos respuestas
      // distintas al mismo problema segun por que ejemplo entres.
      que: `${etiq} · los dos caminos entre si`
         + (pend ? " [PENDIENTE, ver cabecera]" : ""),
      medido: dif(wd, wp), limite: pend ? pend[1] : 0.5,
      ok: dif(wd, wp) <= (pend ? pend[1] : 0.5),
      detalle: `deform ${wd.toExponential(6)} · placa ${wp.toExponential(6)}`,
    });
    if (pend) filas.push({
      // Esta fila es la que impide que un PENDIENTE se convierta en un numero
      // que nadie vuelve a mirar: falla igual si EMPEORA y si se ARREGLA.
      que: `${etiq} · el PENDIENTE sigue donde se midio (${pend[0]}–${pend[1]} %)`,
      medido: dif(wd, wp), limite: pend[1],
      ok: dif(wd, wp) >= pend[0] && dif(wd, wp) <= pend[1],
      detalle: dif(wd, wp) < pend[0]
        ? "ya cierra: quitalo de PENDIENTE y baja el limite a 0.5 %"
        : dif(wd, wp) > pend[1]
        ? "ha EMPEORADO: mira que cambio en la rama Kirchhoff"
        : "sigue igual que cuando se midio (DKE de deform vs Q4-SRI de placa)",
      crudo: true,
    });
  }

  // ── como se mete la carga de la columna: TRES formas en el deploy ───────
  // Jorge: *"cargas puntuales y de area es otra"*. Y tiene razon: en el deploy
  // la misma columna entra de tres maneras distintas.
  //
  //   a) `areaload` — la integral consistente `f_i = ∫N_i·q·dA` sobre la huella.
  //      Es lo que hacen SAFE y SAP2000 con `SetLoadUniform`, y lo que hace el
  //      `.heks` (Gauss 2x2 con jacobiano real). ES LA REFERENCIA.
  //   b) `P / nº de nudos de la huella` — las 8 zapatas de Guerra. Reparte a
  //      partes iguales, pero el vector consistente NO es a partes iguales: los
  //      nudos del borde de la huella cargan menos que los de dentro.
  //   c) TODA la P en UN nudo — `safe-bench-zapata-comparativa`. Una carga
  //      puntual sobre una placa es una SINGULARIDAD: la flecha del centro no
  //      converge, crece al refinar. Contra SAFE, que la reparte, no compara.
  function conCarga(mapa) {
    const nodes = M.xy.map(([x, y]) => [x, y, 0]);
    const supports = new Map(), loads = new Map();
    for (let n = 0; n < nodes.length; n++)
      supports.set(n, [true, true, false, false, false, true]);
    for (const [n, v] of mapa) loads.set(n, [0, 0, v, 0, 0, 0]);
    const m = (v) => new Map(M.elements.map((_, k) => [k, v]));
    const d = deform(nodes, M.elements, { supports, loads },
      { thicknesses: m(T), elasticities: m(E), poissonsRatios: m(NU),
        densities: m(0), plateFormulations: m(0) },
      M.springs.map((s) => ({ node: s.node, dof: 2, k: s.k })));
    return d.deformations?.get(M.centro)?.[2] ?? NaN;
  }
  const wArea = conCarga(M.fz);
  const wGuerra = conCarga(new Map([...M.huella].map((n) => [n, -P / M.huella.size])));
  const wPunto = conCarga(new Map([[M.centro, -P]]));

  filas.push({
    que: "carga: repartir entre los nudos de la huella (estilo Guerra) vs ∫N·q·dA",
    medido: dif(wGuerra, wArea), limite: 1.0, ok: dif(wGuerra, wArea) <= 1.0,
    detalle: `${wGuerra.toExponential(6)} vs ${wArea.toExponential(6)}`
           + ` — ${M.huella.size} nudos a partes iguales`,
  });
  filas.push({
    // Este NO tiene que pasar: esta puesto para que el numero quede a la vista.
    // Una carga puntual sobre placa es singular y no converge.
    que: "carga: TODA la P en un nudo (safe-bench-comparativa) vs ∫N·q·dA",
    medido: dif(wPunto, wArea), limite: 1.0, ok: dif(wPunto, wArea) <= 1.0,
    detalle: `${wPunto.toExponential(6)} vs ${wArea.toExponential(6)}`
           + " — carga puntual = singularidad, la flecha crece al refinar",
  });

  // El primer filtro de todos: ¿esta bien montado? El asiento medio tiene
  // respuesta cerrada y ademas se sabe el SIGNO — el centro de una zapata
  // flexible baja MAS que la media.
  const wThin = porDeform(1);
  filas.push({
    que: "el centro por encima del asiento medio teorico P/(ks·B²)",
    medido: Math.abs(wThin) / TEO * 100, limite: 100, ok: Math.abs(wThin) >= TEO,
    detalle: `${(Math.abs(wThin) / TEO * 100).toFixed(2)} % de ${TEO.toFixed(6)} m`
           + " — por debajo del 100 % el modelo estaria mal montado",
    crudo: true,
  });

  return filas;
}
