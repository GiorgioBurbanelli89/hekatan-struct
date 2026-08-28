import * as THREE from "three";
import van, { State } from "vanjs-core";
import { Node, Structure } from "hekatan-fem";
import { Settings } from "../settings/getSettings";
import { getTransformationMatrixBeam } from "./utils/getTransformationMatrixBeam";

/**
 * 🧱 VISTA EXTRUIDA — las barras con su sección real y las cáscaras con su
 * espesor, no líneas y planos.
 *
 * ## Cómo lo hace ETABS, leído del binario
 *
 * `CSIOpenGL.dll` —el módulo que dibuja— trae `DTSweep`, `DTSweepContext`,
 * `AddHole`, `AddSteinerPoint`, `AddTriangle`: es **Poly2Tri**, una
 * triangulación de Delaunay con restricciones. O sea que ETABS **triangula el
 * polígono de la sección**, huecos incluidos, y barre esos triángulos a lo
 * largo de la barra. No tiene una malla por tipo de perfil: tiene el contorno.
 *
 * Aquí se hace igual, y encaja con el Section Designer, que ya devuelve
 * contornos: `THREE.Shape` con sus `holes` + `ExtrudeGeometry` triangula
 * (earcut, el mismo problema resuelto igual) y extruye. Una forma nueva no
 * necesita nada: si sabe dar su contorno, se extruye.
 *
 * ## Los ejes
 *
 * ⏳ ESTADO: escrito y compila, pero **NO se ha visto funcionar**. Encendiendo
 * `extruded` en el visor, el modelo se sigue dibujando en líneas
 * (`cli/shot_extrusion.mjs`, capturas en `cli/shots/extrusion/`). Falta
 * averiguar por qué: los candidatos son que `structure.elementInputs` no llegue
 * con ese nombre desde `getViewer`, o que el `van.derive` no se vuelva a
 * disparar al cambiar el ajuste. NO está terminado y no hay que darlo por
 * bueno hasta ver una barra extruida en un PNG.
 *
 * La sección se dibuja en el plano local 2-3 y se barre a lo largo del eje 1.
 * La tríada es la de CSI (eje 1 = i→j, eje 2 = en el plano vertical hacia
 * arriba, eje 3 = 1×2), la misma que usa el solver: si la extrusión usara otra,
 * enseñaría una viga tumbada donde el modelo tiene una de canto — y eso es
 * justo lo que hay que poder ver de un vistazo.
 */

/** Contorno y huecos de una sección, en el plano local (3, 2) y en metros. */
export interface ContornoSeccion {
  contorno: Array<[number, number]>;
  huecos?: Array<Array<[number, number]>>;
}

/** El contorno de las formas del catálogo. Devuelve null si no se sabe dibujar. */
export function contornoDeSeccion(sh: any): ContornoSeccion | null {
  if (!sh) return null;
  const t = sh.type as string;
  const rect = (b: number, d: number): Array<[number, number]> =>
    [[-b / 2, -d / 2], [b / 2, -d / 2], [b / 2, d / 2], [-b / 2, d / 2]];
  if (t === "rect" && sh.b && sh.h) return { contorno: rect(sh.b, sh.h) };
  if (t === "circ" && sh.d) {
    const r = sh.d / 2, p: Array<[number, number]> = [];
    for (let i = 0; i < 24; i++) {
      const a = (2 * Math.PI * i) / 24;
      p.push([r * Math.cos(a), r * Math.sin(a)]);
    }
    return { contorno: p };
  }
  if ((t === "I" || t === "C" || t === "coldC" || t === "2C") && sh.d && sh.b) {
    const d = sh.d, b = sh.b, tf = sh.tf ?? d / 20, tw = sh.tw ?? b / 20;
    const a = (b - tw) / 2;
    if (t === "I") {
      return { contorno: [
        [-b / 2, -d / 2], [b / 2, -d / 2], [b / 2, -d / 2 + tf], [tw / 2, -d / 2 + tf],
        [tw / 2, d / 2 - tf], [b / 2, d / 2 - tf], [b / 2, d / 2], [-b / 2, d / 2],
        [-b / 2, d / 2 - tf], [-tw / 2, d / 2 - tf], [-tw / 2, -d / 2 + tf], [-b / 2, -d / 2 + tf],
      ] };
    }
    // C / conformada: el alma a la izquierda y las dos alas a la derecha.
    return { contorno: [
      [-b / 2, -d / 2], [b / 2, -d / 2], [b / 2, -d / 2 + tf], [-b / 2 + tw, -d / 2 + tf],
      [-b / 2 + tw, d / 2 - tf], [b / 2, d / 2 - tf], [b / 2, d / 2], [-b / 2, d / 2],
    ] };
  }
  if (t === "tube" && sh.b && sh.d) {
    const tf = sh.tf ?? sh.d / 20, tw = sh.tw ?? sh.b / 20;
    return { contorno: rect(sh.b, sh.d),
             huecos: [rect(sh.b - 2 * tw, sh.d - 2 * tf)] };
  }
  // Sin contorno conocido, el rectángulo que la envuelve — pero solo si hay
  // cotas. Inventar una sección donde no se sabe nada seria enseñar algo falso.
  if (sh.b && sh.h) return { contorno: rect(sh.b, sh.h) };
  return null;
}

/** Un `THREE.Shape` con sus huecos, listo para extruir. */
function aShape(c: ContornoSeccion): THREE.Shape {
  const s = new THREE.Shape();
  c.contorno.forEach(([x, y], i) => (i ? s.lineTo(x, y) : s.moveTo(x, y)));
  s.closePath();
  for (const h of c.huecos ?? []) {
    const p = new THREE.Path();
    h.forEach(([x, y], i) => (i ? p.lineTo(x, y) : p.moveTo(x, y)));
    p.closePath();
    s.holes.push(p);
  }
  return s;
}

/**
 * La vista extruida del modelo.
 *
 * Se recalcula cuando cambian los nudos (para que siga a la deformada) o el
 * ajuste `extruded`.
 */
export function extrusion(
  structure: Structure,
  settings: Settings,
  derivedNodes: State<Node[]>,
): THREE.Group {
  const group = new THREE.Group();
  const matBarra = new THREE.MeshLambertMaterial({
    color: 0x7fb3ff, transparent: true, opacity: 0.92, side: THREE.DoubleSide });
  const matShell = new THREE.MeshLambertMaterial({
    color: 0xb0bec5, transparent: true, opacity: 0.85, side: THREE.DoubleSide });

  van.derive(() => {
    const on = settings.extruded?.val ?? false;
    group.visible = on;
    // Fuera lo anterior: una malla extruida por barra se acumula rápido y en un
    // modelo de mil barras eso es memoria que no se suelta.
    for (const h of [...group.children]) {
      group.remove(h);
      (h as THREE.Mesh).geometry?.dispose?.();
    }
    if (!on) return;

    const nodes = derivedNodes.val;
    const elements = structure.elements.val;
    const ei: any = structure.elementInputs?.val ?? {};
    const formas: Map<number, any> = ei.sectionShapes ?? new Map();
    const espesores: Map<number, number> = ei.thicknesses ?? new Map();

    elements.forEach((el: number[], i: number) => {
      // ── BARRAS: el contorno barrido a lo largo del eje 1 ──
      if (el.length === 2) {
        const c = contornoDeSeccion(formas.get(i));
        if (!c) return;                       // sin contorno no se inventa nada
        const n1 = nodes[el[0]], n2 = nodes[el[1]];
        if (!n1 || !n2) return;
        const L = Math.hypot(n2[0] - n1[0], n2[1] - n1[1], n2[2] - n1[2]);
        if (L < 1e-9) return;
        const geo = new THREE.ExtrudeGeometry(aShape(c), {
          depth: L, bevelEnabled: false, curveSegments: 4 });
        // ExtrudeGeometry crece en +Z local; hay que llevar ese +Z al eje 1 de
        // la barra con la MISMA tríada del solver.
        const T = getTransformationMatrixBeam(n1, n2);
        const m = new THREE.Matrix4();
        // filas de T: e1, e2, e3 (CSI). Las columnas de la matriz de Three son
        // los ejes locales x,y,z → x=e3, y=e2, z=e1 para que +Z caiga en e1.
        m.set(
          T[2][0], T[1][0], T[0][0], n1[0],
          T[2][1], T[1][1], T[0][1], n1[1],
          T[2][2], T[1][2], T[0][2], n1[2],
          0, 0, 0, 1);
        const mesh = new THREE.Mesh(geo, matBarra);
        mesh.applyMatrix4(m);
        group.add(mesh);
        return;
      }
      // ── CÁSCARAS: el polígono con su espesor, medio arriba y medio abajo ──
      if (el.length === 3 || el.length === 4) {
        const t = espesores.get(i);
        if (!t || t <= 0) return;
        const p = el.map((k) => nodes[k]).filter(Boolean);
        if (p.length < 3) return;
        // Normal del polígono, para saber hacia dónde dar el espesor.
        const u = [p[1][0] - p[0][0], p[1][1] - p[0][1], p[1][2] - p[0][2]];
        const v = [p[2][0] - p[0][0], p[2][1] - p[0][1], p[2][2] - p[0][2]];
        const nx = u[1] * v[2] - u[2] * v[1];
        const ny = u[2] * v[0] - u[0] * v[2];
        const nz = u[0] * v[1] - u[1] * v[0];
        const ln = Math.hypot(nx, ny, nz);
        if (ln < 1e-12) return;
        const n = [nx / ln, ny / ln, nz / ln];
        const pos: number[] = [];
        const cara = (s: number) => p.map((q) => [q[0] + n[0] * s, q[1] + n[1] * s, q[2] + n[2] * s]);
        const A = cara(+t / 2), B = cara(-t / 2);
        const tri = (a: number[], b: number[], c: number[]) => pos.push(...a, ...b, ...c);
        // dos tapas
        for (const f of [A, B]) {
          tri(f[0], f[1], f[2]);
          if (f.length === 4) tri(f[0], f[2], f[3]);
        }
        // y el canto
        for (let k = 0; k < p.length; k++) {
          const k2 = (k + 1) % p.length;
          tri(A[k], B[k], B[k2]);
          tri(A[k], B[k2], A[k2]);
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
        geo.computeVertexNormals();
        group.add(new THREE.Mesh(geo, matShell));
      }
    });
  });

  return group;
}
