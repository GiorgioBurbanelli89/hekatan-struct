/**
 * Gráficos 3D de histéresis M-θ y protocolo de carga K3.
 *
 * Renderiza directamente en el canvas Three.js del viewer (sin Plotly), lo
 * que permite ver los resultados sin abrir paneles HTML adicionales.
 *
 * - buildHysteresisChart3D: curva M (vertical) vs θ (horizontal). La histéresis
 *   produce loops cerrados al ir-volver. Líneas horizontales en ±0.80·Mp marcan
 *   el criterio AISC 358-22 §5 para precalificación.
 *
 * - buildLoadingProtocolChart3D: drift θ (vertical) vs número de step. Replica
 *   el protocolo AISC 341-22 App. K3 con sus 30 ciclos crecientes.
 */
import * as THREE from "three";

export interface HysteresisChartInput {
  theta: number[];
  M: number[];
  Mp: number;
  targetDrift: number;
  /** Centro del plot en coords globales */
  center: [number, number, number];
  /** Tamaño total del plot (cuadrado) */
  size: number;
  /** Plano del plot: "xy" | "xz" | "yz". Default "xz" */
  plane?: "xy" | "xz" | "yz";
}

export function buildHysteresisChart3D(inp: HysteresisChartInput): THREE.Object3D[] {
  const out: THREE.Object3D[] = [];
  const n = inp.theta.length;
  if (n < 2) return out;

  const plane = inp.plane ?? "xz";
  const size = inp.size;

  const thetaMax = Math.max(...inp.theta.map((v) => Math.abs(v)), 1e-9);
  const mMax = Math.max(...inp.M.map((v) => Math.abs(v)), 1e-9);

  // (u, v) ∈ [-size/2, +size/2]
  const xs = inp.theta.map((t) => (t / thetaMax) * (size / 2));
  const ys = inp.M.map((m) => (m / mMax) * (size / 2));

  const [cx, cy, cz] = inp.center;
  const mapTo3D = (u: number, v: number): THREE.Vector3 => {
    if (plane === "xy") return new THREE.Vector3(cx + u, cy + v, cz);
    if (plane === "yz") return new THREE.Vector3(cx, cy + u, cz + v);
    return new THREE.Vector3(cx + u, cy, cz + v);
  };

  // Marco / fondo
  const frameMat = new THREE.LineBasicMaterial({ color: 0x666666 });
  const half = size / 2;
  const frame = [
    mapTo3D(-half, -half), mapTo3D(+half, -half),
    mapTo3D(+half, +half), mapTo3D(-half, +half),
    mapTo3D(-half, -half),
  ];
  out.push(new THREE.Line(new THREE.BufferGeometry().setFromPoints(frame), frameMat));

  // Ejes 0 (cruz)
  const axisMat = new THREE.LineBasicMaterial({ color: 0xaaaaaa });
  out.push(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([mapTo3D(-half, 0), mapTo3D(+half, 0)]),
    axisMat,
  ));
  out.push(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([mapTo3D(0, -half), mapTo3D(0, +half)]),
    axisMat,
  ));

  // Líneas de criterio AISC 358-22: M = ±0.80·Mp
  const critM = (0.80 * inp.Mp) / mMax * (size / 2);
  if (Math.abs(critM) <= half) {
    const critMat = new THREE.LineBasicMaterial({ color: 0x00aa00 });
    out.push(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([mapTo3D(-half, +critM), mapTo3D(+half, +critM)]),
      critMat,
    ));
    out.push(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([mapTo3D(-half, -critM), mapTo3D(+half, -critM)]),
      critMat,
    ));
  }

  // Líneas de target drift θ = ±targetDrift
  const tD = (inp.targetDrift / thetaMax) * (size / 2);
  if (Math.abs(tD) <= half) {
    const tDMat = new THREE.LineBasicMaterial({ color: 0xff8800, transparent: true, opacity: 0.6 });
    out.push(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([mapTo3D(+tD, -half), mapTo3D(+tD, +half)]),
      tDMat,
    ));
    out.push(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([mapTo3D(-tD, -half), mapTo3D(-tD, +half)]),
      tDMat,
    ));
  }

  // Curva M-θ (histéresis con loops)
  const curvePts: THREE.Vector3[] = [];
  for (let i = 0; i < n; i++) curvePts.push(mapTo3D(xs[i], ys[i]));
  const curveMat = new THREE.LineBasicMaterial({ color: 0x00ffcc });
  out.push(new THREE.Line(new THREE.BufferGeometry().setFromPoints(curvePts), curveMat));

  return out;
}

export interface LoadingProtocolInput {
  drifts: number[];
  /** Centro del plot */
  center: [number, number, number];
  size: number;
  plane?: "xy" | "xz" | "yz";
}

export function buildLoadingProtocolChart3D(inp: LoadingProtocolInput): THREE.Object3D[] {
  const out: THREE.Object3D[] = [];
  const n = inp.drifts.length;
  if (n < 2) return out;

  const plane = inp.plane ?? "xz";
  const size = inp.size;
  const driftMax = Math.max(...inp.drifts.map((v) => Math.abs(v)), 1e-9);

  const xs = inp.drifts.map((_, i) => (i / (n - 1)) * size);
  const ys = inp.drifts.map((d) => (d / driftMax) * (size / 2));

  const [cx, cy, cz] = inp.center;
  const mapTo3D = (u: number, v: number): THREE.Vector3 => {
    if (plane === "xy") return new THREE.Vector3(cx + u, cy + v, cz);
    if (plane === "yz") return new THREE.Vector3(cx, cy + u, cz + v);
    return new THREE.Vector3(cx + u, cy, cz + v);
  };

  // Marco
  const frameMat = new THREE.LineBasicMaterial({ color: 0x666666 });
  const half = size / 2;
  out.push(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([
      mapTo3D(0, -half), mapTo3D(size, -half),
      mapTo3D(size, +half), mapTo3D(0, +half), mapTo3D(0, -half),
    ]),
    frameMat,
  ));

  // Eje 0 horizontal
  out.push(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([mapTo3D(0, 0), mapTo3D(size, 0)]),
    new THREE.LineBasicMaterial({ color: 0xaaaaaa }),
  ));

  // Curva del protocolo (drift vs step)
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < n; i++) pts.push(mapTo3D(xs[i], ys[i]));
  out.push(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(pts),
    new THREE.LineBasicMaterial({ color: 0xffaa00 }),
  ));

  return out;
}
