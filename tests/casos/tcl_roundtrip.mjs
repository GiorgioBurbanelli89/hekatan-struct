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
  filas.push({
    que: "exporta .tcl", crudo: true,
    medido: `${tcl.split(/\r?\n/).length} lineas`, limite: "> 100 lineas",
    ok: tcl.split(/\r?\n/).length > 100,
    detalle: `${(tcl.match(/^\s*node\s/gm) ?? []).length} node, ` +
             `${(tcl.match(/element\s+elasticBeamColumn/g) ?? []).length} elasticBeamColumn`,
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
