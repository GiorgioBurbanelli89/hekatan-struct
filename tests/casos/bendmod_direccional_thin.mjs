/**
 * Los modificadores DIRECCIONALES de FLEXION tienen que llegar a Shell-Thin.
 *
 * `shellmod ID f11 f22 f12 m11 m22 m12 v13 v23` son los 8 de ETABS. Shell-Thick
 * los metia en su matriz constitutiva desde hace tiempo; Shell-Thin metia solo
 * los TRES de membrana y la flexion se la despachaba con un ESCALAR — y el
 * escalar que le llegaba era el promedio `(m11 + m22) / 2` que arma
 * `cliModeler.ts`. Con eso, un deck declarado `m11 = 1, m22 = 0.01` (rigido a lo
 * largo del nervio, casi nulo cruzado) y su opuesto `m11 = 0.01, m22 = 1` salian
 * EXACTAMENTE IGUALES: los dos con 0.505. Una losa nervada modelada con
 * Shell-Thin flexionaba igual en las dos direcciones.
 *
 * El arbitro aqui es la propia direccionalidad, que no necesita otro programa:
 * una FRANJA en voladizo (4 m en X, 1 m en Y) flexiona con curvatura en X, o sea
 * que su rigidez la manda `m11` y `m22` casi no interviene.
 *
 *     m11 = 1,    m22 = 0.01   →  flecha ~ la del isotropo
 *     m11 = 0.01, m22 = 1      →  flecha ~ 100 veces mayor
 *
 * Antes del arreglo esos dos numeros eran el MISMO. El test se probo contra el
 * motor viejo y falla ahi, que es lo unico que lo hace valer.
 *
 * Y dos controles mas: que el `shellmod` unitario no mueva nada de lo ya
 * validado (la ruta con modificadores tiene que ser transparente cuando valen 1)
 * y que Shell-Thin y Shell-Thick reaccionen al mismo dato en la misma
 * proporcion, que es como se comportan en ETABS.
 */
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { resolverHeks } from "../lib/heks.mjs";

const LX = 4.0;    // m, largo del voladizo (en X) — la direccion que flexiona
const LY = 1.0;    // m, ancho de la franja (en Y)
const T = 0.20;    // m, espesor
const N = 4;       // cascaras a lo largo
const E = 2.2e7;   // kPa
const NU = 0.20;
const P = 10;      // kN en la punta, en Z

/**
 * Franja en el plano XY, empotrada en x = 0 y cargada en Z en la punta.
 * Nudo (columna i, fila j) → id = 2*i + j + 1, con j = 0 en y = 0.
 *
 * `mod`: null (sin `shellmod`) o los 8 valores direccionales.
 */
function guion(tipo, mod) {
  const l = [];
  for (let i = 0; i <= N; i++) {
    const x = (i * LX) / N;
    l.push(`node ${2 * i + 1} ${x} 0 0`);
    l.push(`node ${2 * i + 2} ${x} ${LY} 0`);
  }
  l.push("support 1 fixed");
  l.push("support 2 fixed");
  // Una placa plana sola no sujeta u, v ni el giro normal: son mecanismos que
  // no tienen nada que ver con lo que se mide. Se atan para que el problema sea
  // EXACTAMENTE el de flexion y no dependa del drilling.
  for (let i = 1; i <= N; i++) {
    l.push(`support ${2 * i + 1} 1 1 0 0 0 1`);
    l.push(`support ${2 * i + 2} 1 1 0 0 0 1`);
  }
  for (let i = 0; i < N; i++) {
    const n1 = 2 * i + 1, n2 = 2 * i + 3, n3 = 2 * i + 4, n4 = 2 * i + 2;
    l.push(`shell ${i + 1} ${n1} ${n2} ${n3} ${n4} ${T} ${E} ${NU} 2.4`);
    if (tipo) l.push(`shelltype ${i + 1} ${tipo}`);
    if (mod) l.push(`shellmod ${i + 1} ${mod.join(" ")}`);
  }
  l.push(`load ${2 * N + 1} 0 0 ${-P / 2}`);
  l.push(`load ${2 * N + 2} 0 0 ${-P / 2}`);
  l.push("solve");
  return l.join("\n") + "\n";
}

/** Flecha (|Uz|, en metros) de la punta. */
async function flecha(dir, tipo, mod, nombre) {
  const ruta = join(dir, `${nombre}.heks`);
  writeFileSync(ruta, guion(tipo, mod), "utf-8");
  const r = await resolverHeks(ruta);
  const a = r.deformOutputs?.deformations?.get?.(2 * N);
  const b = r.deformOutputs?.deformations?.get?.(2 * N + 1);
  if (!a || !b) return NaN;
  return Math.abs((a[2] + b[2]) / 2);
}

const ISO = [1, 1, 1, 1, 1, 1, 1, 1];
const FUERTE = [1, 1, 1, 1, 0.01, 1, 1, 1];   // m11 = 1,    m22 = 0.01
const FLOJO  = [1, 1, 1, 0.01, 1, 1, 1, 1];   // m11 = 0.01, m22 = 1

export const nombre = "bendmod-direccional-thin";
export const descripcion =
  "Los modificadores direccionales de flexion (M11/M22) tienen que llegar a Shell-Thin";

export async function correr() {
  const dir = mkdtempSync(join(tmpdir(), "hkBendMod-"));
  const filas = [];

  const sinMod   = await flecha(dir, "thin", null,   "thin_sinmod");
  const iso      = await flecha(dir, "thin", ISO,    "thin_iso");
  const fuerte   = await flecha(dir, "thin", FUERTE, "thin_fuerte");
  const flojo    = await flecha(dir, "thin", FLOJO,  "thin_flojo");
  const tkIso    = await flecha(dir, "thick", ISO,    "thick_iso");
  const tkFuerte = await flecha(dir, "thick", FUERTE, "thick_fuerte");
  const tkFlojo  = await flecha(dir, "thick", FLOJO,  "thick_flojo");

  // 1) EL invariante: el voladizo flexiona en X, asi que m11 = 0.01 tiene que
  //    ablandarlo y m22 = 0.01 casi no. Con el promedio escalar de antes los
  //    dos daban lo mismo (razon = 1.000) y esta fila fallaba.
  const razon = flojo / fuerte;
  filas.push({
    que: "thin: m11 manda en un voladizo que flexiona en X",
    medido: Number.isFinite(razon) ? razon : 0, limite: 50.0,
    ok: Number.isFinite(razon) && razon >= 50.0,
    detalle: `m11=0.01 → ${(flojo * 1000).toFixed(4)} mm vs m22=0.01 → ${(fuerte * 1000).toFixed(4)} mm`,
  });

  // 2) `shellmod` unitario = sin `shellmod`. La ruta con modificadores tiene
  //    que ser transparente: si no, el arreglo movería todo lo ya validado.
  const dIso = (100 * (iso - sinMod)) / sinMod;
  filas.push({
    que: "thin: shellmod unitario no cambia nada",
    medido: Number.isFinite(dIso) ? dIso : 1e9, limite: 0.01,
    ok: Number.isFinite(dIso) && Math.abs(dIso) <= 0.01,
    detalle: `${(iso * 1000).toFixed(5)} mm vs ${(sinMod * 1000).toFixed(5)} mm`,
  });

  // 3) la franja con m22 = 0.01 apenas se entera: lo unico que quita es el
  //    acoplamiento de Poisson, que en un voladizo estrecho es de segundo orden.
  const dFuerte = (100 * (fuerte - iso)) / iso;
  filas.push({
    que: "thin: m22 casi no interviene (flexion en X)",
    medido: Number.isFinite(dFuerte) ? dFuerte : 1e9, limite: 6.0,
    ok: Number.isFinite(dFuerte) && Math.abs(dFuerte) <= 6.0,
    detalle: `m22=0.01 → ${(fuerte * 1000).toFixed(4)} mm vs iso ${(iso * 1000).toFixed(4)} mm`,
  });

  // 4) thin y thick tienen que reaccionar al MISMO dato en la misma proporcion.
  //    No se les pide la misma flecha (thick lleva cortante transversal y el
  //    thin no), sino el mismo factor de ablandamiento.
  const rThin = flojo / iso;
  const rThick = tkFlojo / tkIso;
  const dR = (100 * (rThin - rThick)) / rThick;
  filas.push({
    que: "thin y thick se ablandan igual con m11 = 0.01",
    medido: Number.isFinite(dR) ? dR : 1e9, limite: 5.0,
    ok: Number.isFinite(dR) && Math.abs(dR) <= 5.0,
    detalle: `thin ×${rThin.toFixed(2)} vs thick ×${rThick.toFixed(2)}`,
  });

  // 5) el mismo control de direccionalidad en thick, que ya lo tenia: si algun
  //    dia se rompe ahi, que no parezca culpa de thin.
  const razonTk = tkFlojo / tkFuerte;
  filas.push({
    que: "thick: m11 manda (control, ya funcionaba)",
    medido: Number.isFinite(razonTk) ? razonTk : 0, limite: 50.0,
    ok: Number.isFinite(razonTk) && razonTk >= 50.0,
    detalle: `m11=0.01 → ${(tkFlojo * 1000).toFixed(4)} mm vs m22=0.01 → ${(tkFuerte * 1000).toFixed(4)} mm`,
  });

  return filas;
}
