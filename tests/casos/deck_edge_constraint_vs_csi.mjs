/**
 * EL DECK EN ETABS Y SAP2000 CON LA MISMA MALLA (4-sep-2026). Lo que separa a los dos
 * programas con un pano de 4 nudos NO es el elemento: es que ETABS conecta el pano a todo
 * nudo que toca (edge constraint en los inclinados, cookie-cut en las vigas que cruzan un
 * piso horizontal) y ademas lleva el peso de la membrana a las vigas de borde por area
 * tributaria. SAP2000 y Hekatan solo conectan lo que se malla y pesan la membrana en sus 4
 * esquinas. Referencias: validation/modelos/deck-edge (csi_desde_dump.py por OAPI, misma
 * malla y cargas nodales; patrones separados Dead/SCM/Live/Ex).
 *
 *   galpon (609 nudos), misma malla: ETABS --noedge = Hekatan = SAP2000 (0.001 %)
 *   galpon partido en los nudos de borde: SAP 3e-4 %, ETABS --noedge 2e-5 %
 *   mezanine 1x1, 4 patrones: ETABS y SAP a 1e-9 %; Dead SAP 0.0000 % (peso propio
 *   CONSISTENTE: fuerzas + momentos), Dead ETABS 0.04 % contra el peso del deck en lineas
 *   mezanine 2x1 continuo: SAP = Hekatan 1e-13 (ninguno corta el pano); ETABS lo corta
 *   en la viga que cruza: 0.47 % en SCM y 75 % en Dead. Por vano: ETABS 1e-9 %.
 *   3x1 de 2 pisos y 3x2 de 3 pisos por vano: ETABS 1e-9 %; Dead 0.11-0.12 % vs lineas.
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { resolverHeks } from "../lib/heks.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
const V = join(AQUI, "..", "..", "validation", "modelos", "deck-edge");
const DATOS = join(AQUI, "..", "datos");
export const nombre = "deck-edge-constraint-vs-csi";
export const descripcion = "deck con la misma malla: edge constraint / cookie-cut de ETABS, peso del deck a lineas; SAP2000 y ETABS por OAPI";

const cache = new Map();
async function hek(ruta) {
  if (!cache.has(ruta)) {
    const r = await resolverHeks(ruta);
    const fr = new Set();
    for (const e of r.elements) if (e.length === 2) { fr.add(e[0]); fr.add(e[1]); }
    cache.set(ruta, { U: r.deformOutputs.deformations, n: r.nodes.length, fr });
  }
  return cache.get(ruta);
}
/** peor % del maximo entre un caso de CSI y el .heks resuelto, SOLO en nudos con barra
 *  (los que solo tocan membrana no tienen gdl fuera de plano y cada programa hace lo suyo). */
function comparar(H, J, caso) {
  const nudos = J.casos ? J.casos[caso].nudos : J.nudos;
  let umax = 0;
  for (const [, u] of H.U) umax = Math.max(umax, ...u.slice(0, 3).map(Math.abs));
  let peor = 0, n = 0;
  for (const q of nudos) {
    if (!H.fr.has(q.i)) continue;
    const uh = H.U.get(q.i);
    if (!uh) continue;
    n++;
    for (let c = 0; c < 3; c++) peor = Math.max(peor, Math.abs(uh[c] - q.u[c]) / umax * 100);
  }
  return { peor, n, umax };
}
const J = (f) => JSON.parse(readFileSync(join(V, f), "utf-8"));

export async function correr() {
  const filas = [];
  const fila = (que, r, lim) => filas.push({ que, medido: r.peor, limite: lim, ok: r.n > 0 && r.peor <= lim, detalle: `${r.n} nudos con barra; u_max ${r.umax.toExponential(4)} m` });
  const existe = (que, r, minimo, detalle) => filas.push({ que, medido: r.peor, limite: `>= ${minimo}`, ok: r.peor >= minimo, crudo: true, detalle });

  // 1. galpon, misma malla de 4 nudos por pano
  const gal = await hek(join(DATOS, "galpon_lc.heks"));
  fila("galpon 609 nudos, misma malla: ETABS con el edge constraint APAGADO (--noedge) = Hekatan", comparar(gal, J("galpon_etabs_noedge.json"), "Dead"), 0.01);
  const zinc = await hek(join(V, "galpon_solozinc.heks"));
  const rz = comparar(zinc, J("galpon_solozinc_etabs_edge.json"), "Dead");
  existe("galpon solo zinc, ETABS con el edge constraint ENCENDIDO (su defecto): la diferencia existe y es lateral", rz, 3, `${rz.peor.toFixed(2)} %: 96 nudos de correa caen sobre el borde de las 12 franjas de 26.6 x 1.23 m sin ser suyos`);
  // 2. galpon con los panos partidos en los nudos que caen en sus bordes
  const par = await hek(join(V, "galpon_partido.heks"));
  fila("galpon PARTIDO en los nudos de borde (partir_panos_en_nudos.py): SAP2000 = Hekatan", comparar(par, J("galpon_partido_sap.json"), "DEAD"), 0.001);
  fila("galpon PARTIDO: ETABS --noedge = Hekatan", comparar(par, J("galpon_partido_etabs_noedge.json"), "Dead"), 0.001);
  // 3. mezanine 1x1 con los 4 patrones separados
  const m1 = {};
  for (const p of ["pp", "scm", "cv", "ex", "ppL"]) m1[p] = await hek(join(V, `mez1_${p}.heks`));
  for (const [prog, f, dead] of [["ETABS", "mez1_etabs.json", "Dead"], ["SAP2000", "mez1_sap.json", "DEAD"]]) {
    const R = J(f);
    fila(`mezanine 1x1 ${prog}: SCM (nodal, one-way por viguetas)`, comparar(m1.scm, R, "SCM"), 1e-6);
    fila(`mezanine 1x1 ${prog}: Live`, comparar(m1.cv, R, "Live"), 1e-6);
    fila(`mezanine 1x1 ${prog}: Ex (sismo, 10 kN en cabezas de columna)`, comparar(m1.ex, R, "Ex"), 1e-6);
    if (prog === "SAP2000") {
      fila("mezanine 1x1 SAP2000: Dead (peso propio que calcula SAP) = peso propio CONSISTENTE de Hekatan", comparar(m1.pp, R, dead), 1e-4);
    } else {
      fila("mezanine 1x1 ETABS: Dead = Hekatan con el peso de la membrana en LINEAS tributarias sobre las vigas de borde (deck_a_lineas.py)", comparar(m1.ppL, R, dead), 0.1);
      const rc = comparar(m1.pp, R, dead);
      existe("mezanine 1x1 ETABS: Dead contra el peso en las 4 esquinas (como SAP y Hekatan) NO cierra", rc, 0.3, `${rc.peor.toFixed(3)} %: ETABS reparte el peso de la membrana a las vigas por area tributaria`);
    }
  }
  // 4. mezanine 2x1: pano continuo de 12 m (4 nudos) vs pano por vano
  const c = {};
  for (const p of ["scm", "pp"]) c[p] = await hek(join(V, `mez2x1p1_continuo_${p}.heks`));
  const v = {};
  for (const p of ["scm", "ppL"]) v[p] = await hek(join(V, `mez2x1p1_vano_${p}.heks`));
  fila("mezanine 2x1 pano CONTINUO, SAP2000: SCM = Hekatan (ninguno corta el pano en la viga que lo cruza)", comparar(c.scm, J("mez2x1p1_continuo_sap.json"), "SCM"), 1e-6);
  fila("mezanine 2x1 pano CONTINUO, SAP2000: Dead = Hekatan (peso en las 4 esquinas, consistente)", comparar(c.pp, J("mez2x1p1_continuo_sap.json"), "DEAD"), 1e-4);
  const cc = comparar(c.scm, J("mez2x1p1_continuo_etabs.json"), "SCM");
  existe("mezanine 2x1 pano CONTINUO, ETABS: lo COOKIE-CUT en la viga Y que lo cruza (2 elementos por pano; --noedge no cambia nada)", cc, 0.3, `${cc.peor.toFixed(3)} % en SCM`);
  fila("mezanine 2x1 pano POR VANO (= lo que ETABS corta), ETABS: SCM = Hekatan", comparar(v.scm, J("mez2x1p1_vano_etabs.json"), "SCM"), 1e-6);
  fila("mezanine 2x1 pano POR VANO, ETABS: Dead = Hekatan con el peso del deck en lineas tributarias", comparar(v.ppL, J("mez2x1p1_vano_etabs.json"), "Dead"), 0.3);
  // 5. mas pisos y mas vanos, por vano
  for (const [m, que] of [["mez3x1p2_vano", "3x1 de 2 pisos"], ["mez3x2p3_vano", "3x2 de 3 pisos"]]) {
    const R = J(`${m}_etabs.json`);
    fila(`mezanine ${que} por vano, ETABS: SCM = Hekatan`, comparar(await hek(join(V, `${m}_scm.heks`)), R, "SCM"), 1e-6);
    fila(`mezanine ${que} por vano, ETABS: Ex = Hekatan`, comparar(await hek(join(V, `${m}_ex.heks`)), R, "Ex"), 1e-6);
    fila(`mezanine ${que} por vano, ETABS: Dead = Hekatan con el peso del deck en lineas`, comparar(await hek(join(V, `${m}_ppL.heks`)), R, "Dead"), 0.3);
  }
  // 6. SAP2000 en el 2x1 por vano (cuando no se colgo): igual que Hekatan en los 4 patrones
  const Rs = J("mez2x1p1_vano_sap.json");
  fila("mezanine 2x1 por vano, SAP2000: SCM = Hekatan", comparar(v.scm, Rs, "SCM"), 1e-6);
  fila("mezanine 2x1 por vano, SAP2000: Dead = peso propio CONSISTENTE de Hekatan", comparar(await hek(join(V, "mez2x1p1_vano_pp.heks")), Rs, "DEAD"), 1e-4);
  const Rs3 = J("mez3x1p2_vano_sap.json");
  fila("mezanine 3x1 de 2 pisos por vano, SAP2000: SCM = Hekatan", comparar(await hek(join(V, "mez3x1p2_vano_scm.heks")), Rs3, "SCM"), 1e-6);
  fila("mezanine 3x1 de 2 pisos por vano, SAP2000: Dead = peso propio CONSISTENTE de Hekatan", comparar(await hek(join(V, "mez3x1p2_vano_pp.heks")), Rs3, "DEAD"), 1e-4);
  const Rs4 = J("mez3x2p3_vano_sap.json");
  fila("mezanine 3x2 de 3 pisos por vano, SAP2000: SCM = Hekatan", comparar(await hek(join(V, "mez3x2p3_vano_scm.heks")), Rs4, "SCM"), 1e-6);
  fila("mezanine 3x2 de 3 pisos por vano, SAP2000: Dead = peso propio CONSISTENTE de Hekatan", comparar(await hek(join(V, "mez3x2p3_vano_pp.heks")), Rs4, "DEAD"), 1e-4);
  // 7. La directiva `deck etabs` del motor (TS y Python iguales a 1e-11): parte los panos en sus
  //    nudos de borde y lleva el peso de la membrana a las barras de borde (tributario exacto,
  //    Hermite). Con ella Hekatan reproduce a ETABS SIN tocar el .heks a mano.
  fila("`deck etabs` mezanine 1x1: Dead = ETABS", comparar(await hek(join(V, "mez1_pp_DE.heks")), J("mez1_etabs.json"), "Dead"), 1e-3);
  fila("`deck etabs` mezanine 2x1 pano CONTINUO: SCM = ETABS (el motor lo corta en la viga como ETABS)", comparar(await hek(join(V, "mez2x1p1_continuo_scm_DE.heks")), J("mez2x1p1_continuo_etabs.json"), "SCM"), 1e-3);
  fila("`deck etabs` mezanine 2x1 pano CONTINUO: Dead = ETABS", comparar(await hek(join(V, "mez2x1p1_continuo_pp_DE.heks")), J("mez2x1p1_continuo_etabs.json"), "Dead"), 1e-3);
  fila("`deck etabs` mezanine 3x2 de 3 pisos: Dead = ETABS", comparar(await hek(join(V, "mez3x2p3_vano_pp_DE.heks")), J("mez3x2p3_vano_etabs.json"), "Dead"), 1e-3);
  fila("`deck etabs` galpon: = ETABS --noedge sobre la malla partida (mismos 231 sub-panos que partir_panos_en_nudos.py)", comparar(await hek(join(V, "galpon_lc_DE.heks")), J("galpon_partido_etabs_noedge.json"), "Dead"), 1e-3);
  // 8. Carga de AREA (`areaload` 2 kN/m2 en los 5 panos): ETABS recibe la carga de area y hace SU
  //    transferencia (tributaria a las vigas de borde). `deck etabs` la reproduce; el reparto a las
  //    4 esquinas (SAP2000 / Hekatan sin directiva) no.
  const Ra = J("mez1_area_etabs.json");
  fila("areaload en ETABS (SetLoadUniform, transferencia de ETABS) = Hekatan `deck etabs`", comparar(await hek(join(V, "mez1_area_DE.heks")), Ra, "Live"), 1e-3);
  const ra = comparar(await hek(join(V, "mez1_area.heks")), Ra, "Live");
  existe("areaload en ETABS contra el reparto a las 4 esquinas (sin directiva) NO cierra", ra, 0.3, `${ra.peor.toFixed(3)} %`);
  // 9. `deck etabs oneway`: resuelve, mismo peso total que el bidireccional; TS = Python (pytest test_deck_etabs)
  const ow = await hek(join(V, "mez1_pp_OW.heks"));
  filas.push({ que: "`deck etabs oneway` (vano = eje local 1 girado shellang 90): resuelve con 16 nudos", crudo: true, medido: ow.n, limite: "16", ok: ow.n === 16, detalle: "reparto en un sentido: cada vigueta recibe la mitad de la franja (analitico en pytest)" });
  return filas;
}
