/**
 * Renderiza una curva P-δ como objeto 3D flotante en el viewer.
 *
 * Útil para mostrar los resultados del pushover directamente en el mismo
 * canvas de Three.js sin necesidad de un panel HTML separado. El gráfico
 * se compone de:
 *   - Ejes X (desplazamiento) e Y (factor de carga λ)
 *   - Curva conectando los puntos (λ_i, δ_i) en orden
 *   - Marcadores en cada punto (esferas pequeñas)
 *   - Marcador del primer yield (esfera amarilla)
 *   - Marcadores de grid (líneas de referencia horizontales cada 0.2 λ)
 */
import * as THREE from "three";

export interface PushoverChart3DInput {
  lambdas: number[];
  displacements: number[];
  firstYieldStep: number;
  /** Centro del gráfico en coords globales (para colocarlo al lado del modelo) */
  center: [number, number, number];
  /** Tamaño del gráfico (cuadrado). Default 1.5 */
  size?: number;
  /** Eje del plano del gráfico: "xy" | "xz" | "yz". Default "xy" (plano horizontal) */
  plane?: "xy" | "xz" | "yz";
}

export function buildPushoverChart3D(inp: PushoverChart3DInput): THREE.Object3D[] {
  const size = inp.size ?? 1.5;
  const plane = inp.plane ?? "xz";
  const out: THREE.Object3D[] = [];
  const n = inp.lambdas.length;
  if (n === 0) return out;

  const maxDelta = Math.max(...inp.displacements, 1e-9);
  const maxLambda = Math.max(...inp.lambdas, 1e-9);

  // Normalizar a [0, size]
  const xs = inp.displacements.map((d) => (d / maxDelta) * size);
  const ys = inp.lambdas.map((l) => (l / maxLambda) * size);

  // Transform (u, v) de plano local al 3D según la orientación
  const [cx, cy, cz] = inp.center;
  const mapTo3D = (u: number, v: number): THREE.Vector3 => {
    if (plane === "xy") return new THREE.Vector3(cx + u, cy + v, cz);
    if (plane === "yz") return new THREE.Vector3(cx, cy + u, cz + v);
    return new THREE.Vector3(cx + u, cy, cz + v); // xz
  };

  // Ejes
  const axisMat = new THREE.LineBasicMaterial({ color: 0xaaaaaa });
  const axisGeomX = new THREE.BufferGeometry().setFromPoints([
    mapTo3D(0, 0),
    mapTo3D(size * 1.05, 0),
  ]);
  const axisGeomY = new THREE.BufferGeometry().setFromPoints([
    mapTo3D(0, 0),
    mapTo3D(0, size * 1.05),
  ]);
  out.push(new THREE.Line(axisGeomX, axisMat));
  out.push(new THREE.Line(axisGeomY, axisMat));

  // Grid horizontal cada 20%
  const gridMat = new THREE.LineBasicMaterial({
    color: 0x555555, transparent: true, opacity: 0.4,
  });
  for (let i = 1; i <= 5; i++) {
    const yG = (i / 5) * size;
    const g = new THREE.BufferGeometry().setFromPoints([
      mapTo3D(0, yG),
      mapTo3D(size, yG),
    ]);
    out.push(new THREE.Line(g, gridMat));
  }

  // Curva P-δ (línea + puntos)
  const curveMat = new THREE.LineBasicMaterial({ color: 0x00ffcc, linewidth: 3 });
  const pts: THREE.Vector3[] = [mapTo3D(0, 0)]; // origen
  for (let i = 0; i < n; i++) pts.push(mapTo3D(xs[i], ys[i]));
  const curveGeom = new THREE.BufferGeometry().setFromPoints(pts);
  out.push(new THREE.Line(curveGeom, curveMat));

  // Marcadores (esferas) en cada paso
  const sphereGeom = new THREE.SphereGeometry(size * 0.015, 8, 6);
  for (let i = 0; i < n; i++) {
    const isYield = i === inp.firstYieldStep;
    const color = isYield ? 0xffff00 : 0x00ffcc;
    const mat = new THREE.MeshBasicMaterial({ color });
    const sph = new THREE.Mesh(sphereGeom, mat);
    sph.position.copy(mapTo3D(xs[i], ys[i]));
    out.push(sph);
  }

  // Etiqueta de yield (pequeña cruz roja)
  if (inp.firstYieldStep >= 0) {
    const y = inp.firstYieldStep;
    const xy = mapTo3D(xs[y], ys[y]);
    const crossMat = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const cs = size * 0.04;
    const g1 = new THREE.BufferGeometry().setFromPoints([
      xy.clone().add(new THREE.Vector3(-cs, 0, -cs)),
      xy.clone().add(new THREE.Vector3(+cs, 0, +cs)),
    ]);
    const g2 = new THREE.BufferGeometry().setFromPoints([
      xy.clone().add(new THREE.Vector3(-cs, 0, +cs)),
      xy.clone().add(new THREE.Vector3(+cs, 0, -cs)),
    ]);
    out.push(new THREE.Line(g1, crossMat));
    out.push(new THREE.Line(g2, crossMat));
  }

  return out;
}
