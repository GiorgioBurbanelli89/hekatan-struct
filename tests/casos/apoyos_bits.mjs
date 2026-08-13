/**
 * Un apoyo escrito en BITS SEPARADOS tiene que sujetar igual que escrito con
 * palabra: `support 1 1 1 1 1 1 1` = `support 1 fixed`.
 *
 * Este caso existe porque no era asi. `parseSupportSpec` probaba el patron
 * compacto con /^[01]+$/ sobre la cadena ENTERA, asi que "1 1 1 1 1 1" —con
 * espacios— no encajaba, ninguno de los seis tokens era un nombre de GDL
 * conocido, y la funcion devolvia SEIS FALSE. O sea: el apoyo se leia, se
 * guardaba, y no sujetaba nada. Sin un aviso.
 *
 * Y esa es justo la forma que escribe el importador de ETABS, que copia tal
 * cual el Restraint de la OAPI. El CIMENTAC del GAD RIOCHICO llegaba al solver
 * con sus 29 apoyos convertidos en aire: el modal daba tres modos de frecuencia
 * ~0 con participacion UX 0.99, UY 0.99 y RZ 0.79 —el edificio entero
 * trasladando y girando como un solido libre— y el estatico ni chistaba, porque
 * los resortes de balasto le daban rigidez vertical de sobra para "resolver".
 *
 * El arbitro es la viga biapoyada con carga central, que tiene solucion cerrada
 * y —esto es lo importante— DOS respuestas distintas segun el apoyo:
 *
 *     empotrada-empotrada:  d = P*L^3 / (192*E*I)
 *     articulada-articulada: d = P*L^3 / (48*E*I)      (4 veces mas)
 *
 * Comparar las dos formas de escribir el mismo apoyo no basta: si el lector
 * devolviera SIEMPRE los seis true, las dos coincidirian y el test pasaria
 * estando roto. Por eso ademas se exige que la razon articulada/empotrada sea 4:
 * eso solo sale si cada bit se lee en SU sitio.
 */
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { resolverHeks } from "../lib/heks.mjs";

const L = 6.0;            // m, luz total
const N = 8;              // tramos (par, para que haya nudo en el centro)
const E = 2.0e8;          // kPa
// Seccion ESBELTA a proposito: con un area chica el cortante pesa (Hekatan usa
// Timoshenko) y la flecha se va un 2 % por encima de la formula de
// Euler-Bernoulli, que es la del arbitro. Con A = 0.2 el cortante baja al 0.2 %
// y la teorica vuelve a ser comparable.
const A = 0.2;            // m2
const I = 1.0e-4;         // m4
const P = 100;            // kN, hacia abajo en el centro

const CENTRO = N / 2 + 1; // id del nudo central (los ids empiezan en 1)

/** Guion .heks de la viga con los dos apoyos escritos como diga `spec`. */
function guion(spec) {
  const l = [];
  for (let i = 0; i <= N; i++) l.push(`node ${i + 1} ${(i * L) / N} 0 0`);
  for (let i = 0; i < N; i++) l.push(`frame ${i + 1} ${i + 1} ${i + 2} ${E} ${A} ${I}`);
  l.push(`support 1 ${spec}`);
  l.push(`support ${N + 1} ${spec}`);
  // Solo puede flectar en vertical: sin esto la viga es un mecanismo fuera del
  // plano cuando los apoyos son articulados.
  for (let i = 1; i < N; i++) l.push(`support ${i + 1} 0 1 0 1 0 1`);
  l.push(`load ${CENTRO} 0 0 ${-P}`);
  l.push("solve");
  return l.join("\n") + "\n";
}

/** Flecha vertical del centro, en metros (positiva hacia abajo). */
async function flecha(dir, spec, nombre) {
  const ruta = join(dir, `${nombre}.heks`);
  writeFileSync(ruta, guion(spec), "utf-8");
  const r = await resolverHeks(ruta);
  const d = r.deformOutputs?.deformations?.get?.(CENTRO - 1);
  if (!d) return NaN;
  return -d[2];
}

export const nombre = "apoyos-bits";
export const descripcion =
  "Un apoyo en bits separados ('1 1 1 0 0 0') tiene que sujetar como la palabra";

export async function correr() {
  const dir = mkdtempSync(join(tmpdir(), "hkApoyos-"));
  const filas = [];

  const empPalabra = await flecha(dir, "fixed", "emp_palabra");
  const empBits = await flecha(dir, "1 1 1 1 1 1", "emp_bits");
  const empComas = await flecha(dir, "1,1,1,1,1,1", "emp_comas");
  const artPalabra = await flecha(dir, "pinned", "art_palabra");
  const artBits = await flecha(dir, "1 1 1 0 0 0", "art_bits");

  const teoEmp = (P * L ** 3) / (192 * E * I);
  const teoArt = (P * L ** 3) / (48 * E * I);

  // 1) la palabra tiene que dar la teorica (control: si esto falla, el fallo no
  //    esta en el lector del apoyo y el resto del caso no dice nada)
  filas.push({
    que: "empotrada 'fixed' vs PL^3/192EI",
    medido: (100 * (empPalabra - teoEmp)) / teoEmp, limite: 1.0,
    ok: Math.abs((100 * (empPalabra - teoEmp)) / teoEmp) <= 1.0,
    detalle: `${(empPalabra * 1000).toFixed(4)} mm vs ${(teoEmp * 1000).toFixed(4)}`,
  });

  // 2) los BITS SEPARADOS tienen que dar lo mismo que la palabra. Con el fallo
  //    salia un mecanismo: flecha enorme o NaN.
  const dEmp = (100 * (empBits - empPalabra)) / empPalabra;
  filas.push({
    que: "'1 1 1 1 1 1' = 'fixed'",
    medido: Number.isFinite(dEmp) ? dEmp : 1e9, limite: 0.01,
    ok: Number.isFinite(dEmp) && Math.abs(dEmp) <= 0.01,
    detalle: `${(empBits * 1000).toFixed(4)} mm vs ${(empPalabra * 1000).toFixed(4)} (roto: mecanismo)`,
  });

  // 3) y con COMAS igual — el comentario del codigo decia que "1,1,1,0,0,0"
  //    valia, y tampoco: la coma tumbaba el mismo regex.
  const dComas = (100 * (empComas - empPalabra)) / empPalabra;
  filas.push({
    que: "'1,1,1,1,1,1' = 'fixed'",
    medido: Number.isFinite(dComas) ? dComas : 1e9, limite: 0.01,
    ok: Number.isFinite(dComas) && Math.abs(dComas) <= 0.01,
    detalle: `${(empComas * 1000).toFixed(4)} mm vs ${(empPalabra * 1000).toFixed(4)}`,
  });

  // 4) articulada en bits = articulada en palabra
  const dArt = (100 * (artBits - artPalabra)) / artPalabra;
  filas.push({
    que: "'1 1 1 0 0 0' = 'pinned'",
    medido: Number.isFinite(dArt) ? dArt : 1e9, limite: 0.01,
    ok: Number.isFinite(dArt) && Math.abs(dArt) <= 0.01,
    detalle: `${(artBits * 1000).toFixed(4)} mm vs ${(artPalabra * 1000).toFixed(4)}`,
  });

  // 5) LA QUE DECIDE: cada bit en SU sitio. Si el lector devolviera los seis
  //    true (o los seis false) las cuatro filas de arriba coincidirian y este
  //    caso pasaria estando roto. La razon 4 solo sale si los tres ceros del
  //    final se leen como ceros y los tres unos del principio como unos.
  const razon = artBits / empBits;
  filas.push({
    que: "razon articulada/empotrada = 4",
    medido: (100 * (razon - 4)) / 4, limite: 2.0,
    ok: Number.isFinite(razon) && Math.abs((100 * (razon - 4)) / 4) <= 2.0,
    detalle: `${razon.toFixed(4)} vs 4 (si lee los 6 bits iguales sale 1.0)`,
  });

  return filas;
}
