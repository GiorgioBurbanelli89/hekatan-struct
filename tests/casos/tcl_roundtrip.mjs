/**
 * OpenSees .tcl — round-trip de ida y vuelta sobre un modelo REAL.
 *
 * La pregunta concreta: ¿los .tcl de OpenSees «ya funcionan»? No basta con que
 * el boton exista en el panel; hay que comprobar que lo que sale y vuelve a
 * entrar es el MISMO modelo. Se mide con el galpon de bodega electoral, que es
 * el modelo grande que ya esta validado contra ETABS al 0.3 %.
 *
 *   .heks  --exportTclFromCli-->  .tcl  --importTclToCli-->  .heks'
 *
 * Y se comparan RESULTADOS, no texto: mismo numero de nudos y barras, y misma
 * flecha. Comparar el texto no dice nada — el formato puede cambiar y el modelo
 * ser el mismo, o al reves.
 *
 * Lo que el round-trip NO tiene por que preservar (y por eso no se exige):
 * los shells. `tclIO` los pasa como `ElasticMembranePlateSection`, pero el
 * galpon entrega la carga de las areas por `frameload` y sus shells no entran
 * a la matriz, asi que el modelo de barras es el que manda.
 */
import { readFileSync, existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { empaquetar, R } from "../lib/bundle.mjs";
import { resolverHeks } from "../lib/heks.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
const DATOS = join(AQUI, "..", "datos");
const GALPON = join(AQUI, "..", "..", "..", "galpon-bodega-electoral");

export const nombre = "tcl-roundtrip";
export const descripcion =
  "OpenSees .tcl — exportar e importar el galpon y comprobar que es el mismo modelo";

const cargarTcl = async () =>
  empaquetar(`export { exportTclFromCli, importTclToCli } from "${R}/examples/src/shared/tclIO";\n`,
             "tclIO");

/** Cuenta nudos y barras de un guion .heks, sin resolverlo. */
function contar(txt) {
  let n = 0, f = 0;
  for (const l of txt.split(/\r?\n/)) {
    const c = l.trim().split(/\s+/)[0];
    if (c === "node") n++;
    else if (c === "frame") f++;
  }
  return { n, f };
}

/**
 * `ang` y `as` de cada barra, indexados por el ORDEN en que aparece el `frame`
 * (el id del CLI se renumera al reimportar, el orden no).
 *
 * Se comprueban aparte de la flecha a proposito: la flecha es UN numero, y un
 * giro perdido en una barra se puede compensar con otro en la de al lado sin
 * que se note. Aqui perder un solo `ang` de 723 canta.
 */
function orientaciones(txt) {
  const orden = new Map();          // id del .heks -> indice del frame
  const ang = new Map(), as = new Map();
  let k = 0;
  for (const l of txt.split(/\r?\n/)) {
    const t = l.trim().split(/\s+/);
    if (t[0] === "frame") orden.set(parseInt(t[1], 10), k++);
    else if (t[0] === "ang") ang.set(parseInt(t[1], 10), parseFloat(t[2]));
    else if (t[0] === "as") as.set(parseInt(t[1], 10), [parseFloat(t[2]), parseFloat(t[3])]);
  }
  const A = new Map(), S = new Map();
  for (const [id, v] of ang) if (orden.has(id)) A.set(orden.get(id), v);
  for (const [id, v] of as) if (orden.has(id)) S.set(orden.get(id), v);
  return { ang: A, as: S };
}

/**
 * Barras cuyo `ang` no coincide dentro de 0.01 grados, comparando MODULO 360.
 * El galpon escribe `ang 269 270` y el .tcl no guarda el numero: guarda el
 * vector, del que `atan2` devuelve el mismo giro como -90. Son el mismo giro
 * (270 = -90 + 360) y la seccion queda igual colocada; exigir el mismo numero
 * seria medir la notacion, no la estructura.
 */
function difAng(a, b) {
  const idx = new Set([...a.keys(), ...b.keys()]);
  let malas = 0;
  for (const i of idx) {
    let d = ((a.get(i) ?? 0) - (b.get(i) ?? 0)) % 360;
    if (d > 180) d -= 360;
    if (d < -180) d += 360;
    if (Math.abs(d) > 0.01) malas++;
  }
  return malas;
}

/**
 * Lee el .tcl y comprueba que el `vecxz` de cada barra no sea paralelo a su
 * propio eje. Se mide sobre el TEXTO exportado, no sobre el modelo: es lo que
 * leeria OpenSees.
 */
function vecxzParalelos(tcl) {
  const nodo = new Map(), tr = new Map();
  const barras = [];
  for (const l of tcl.split(/\r?\n/)) {
    const t = l.trim().split(/\s+/);
    if (t[0] === "node") nodo.set(+t[1], [+t[2], +t[3], +t[4]]);
    else if (t[0] === "geomTransf") tr.set(+t[2], [+t[3], +t[4], +t[5]]);
    else if (t[0] === "element" && /beam/i.test(t[1] ?? ""))
      barras.push({ i: +t[3], j: +t[4], tr: +t[t.length - 1] });
  }
  let malas = 0, peor = 0;
  for (const b of barras) {
    const a = nodo.get(b.i), c = nodo.get(b.j), v = tr.get(b.tr);
    if (!a || !c || !v) { malas++; continue; }
    const d = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
    const nd = Math.hypot(...d) || 1, nv = Math.hypot(...v) || 1;
    const cos = Math.abs((d[0] * v[0] + d[1] * v[1] + d[2] * v[2]) / (nd * nv));
    if (cos > peor) peor = cos;
    if (cos > 1e-6) malas++;
  }
  return { malas, peor, total: barras.length };
}

/** Barras cuyas areas de cortante no coinciden dentro del 0.1 %. */
function difAs(a, b) {
  const idx = new Set([...a.keys(), ...b.keys()]);
  let malas = 0;
  for (const i of idx) {
    const x = a.get(i), y = b.get(i);
    if (!x || !y) { malas++; continue; }
    for (let k = 0; k < 2; k++)
      if (Math.abs(x[k] - y[k]) > Math.abs(x[k]) * 1e-3) { malas++; break; }
  }
  return malas;
}

export async function correr() {
  const filas = [];
  const origen = join(GALPON, "galpon_bodega.heks");
  if (!existsSync(origen)) {
    return [{ que: "falta galpon_bodega.heks", crudo: true, medido: "no existe",
              limite: "existe", ok: false,
              detalle: "correr galpon-bodega-electoral/a_heks.py" }];
  }
  const heks = readFileSync(origen, "utf-8");
  const { exportTclFromCli, importTclToCli } = await cargarTcl();

  // ── ida ──
  const tcl = exportTclFromCli(heks);
  const nBarras = (tcl.match(/element\s+(elasticBeamColumn|ElasticTimoshenkoBeam3d)/g) ?? []).length;
  filas.push({
    que: "exporta .tcl", crudo: true,
    medido: `${tcl.split(/\r?\n/).length} lineas`, limite: "> 100 lineas",
    ok: tcl.split(/\r?\n/).length > 100,
    detalle: `${(tcl.match(/^\s*node\s/gm) ?? []).length} node, ${nBarras} barras, ` +
             `${(tcl.match(/^geomTransf/gm) ?? []).length} geomTransf`,
  });
  // El vector del geomTransf es lo UNICO que orienta la seccion. Antes salia uno
  // solo, `geomTransf Linear 1 1 0 0`, que ademas es PARALELO al eje de toda
  // barra que corra segun +X, y ahi OpenSees no puede ni armar la triada: no es
  // que oriente mal, es que el .tcl no corre. Se mide el seno del angulo entre
  // el vecxz y el eje de cada barra; tiene que ser 1 (perpendicular).
  const paralelas = vecxzParalelos(tcl);
  filas.push({
    que: "vecxz perpendicular al eje de la barra", medido: paralelas.malas,
    limite: 0, ok: paralelas.malas === 0,
    detalle: `${paralelas.total} barras, peor |cos| = ${paralelas.peor.toExponential(2)}`,
  });

  // ── vuelta ──
  const heks2 = importTclToCli(tcl);
  const a = contar(heks), b = contar(heks2);
  filas.push({
    que: "nudos ida y vuelta", medido: Math.abs(b.n - a.n), limite: 0,
    ok: b.n === a.n, detalle: `${a.n} -> ${b.n}`,
  });
  filas.push({
    que: "barras ida y vuelta", medido: Math.abs(b.f - a.f), limite: 0,
    ok: b.f === a.f, detalle: `${a.f} -> ${b.f}`,
  });

  // La ORIENTACION y el CORTANTE, barra a barra. El .tcl no los llevaba: el
  // `geomTransf` era uno solo para las 723 barras y `elasticBeamColumn` no
  // tiene hueco para las areas de cortante. Se perdian los 156 giros de 90
  // grados del galpon (-12.4 % de flecha) y las 723 As (-1.25 %).
  const oa = orientaciones(heks), ob = orientaciones(heks2);
  const mAng = difAng(oa.ang, ob.ang);
  filas.push({
    que: "giros `ang` ida y vuelta", medido: mAng, limite: 0, ok: mAng === 0,
    detalle: `${oa.ang.size} barras giradas -> ${ob.ang.size} (tolerancia 0.01 grados)`,
  });
  const mAs = difAs(oa.as, ob.as);
  filas.push({
    que: "areas de cortante `as` ida y vuelta", medido: mAs, limite: 0, ok: mAs === 0,
    detalle: `${oa.as.size} barras con As -> ${ob.as.size} (tolerancia 0.1 %)`,
  });

  // ── y lo que de verdad importa: que CALCULE lo mismo ──
  const tmp = join(DATOS, "tcl_roundtrip.heks");
  writeFileSync(tmp, heks2, "utf-8");
  const r1 = await resolverHeks(origen);
  const r2 = await resolverHeks(tmp);
  const uz = (r) => {
    let m = 0;
    r.deformOutputs?.deformations?.forEach((d) => { if (d[2] < m) m = d[2]; });
    return m;
  };
  const u1 = uz(r1), u2 = uz(r2);
  const dif = u1 ? Math.abs((u2 - u1) / u1) * 100 : (u2 ? 100 : 0);
  filas.push({
    que: "flecha maxima", medido: dif, limite: 1.0, ok: dif <= 1.0,
    detalle: `${(u1 * 1000).toFixed(3)} mm -> ${(u2 * 1000).toFixed(3)} mm`,
  });
  return filas;
}
