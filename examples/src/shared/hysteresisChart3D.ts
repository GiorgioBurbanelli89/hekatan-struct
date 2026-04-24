/**
 * Gráficos 3D animados de histéresis M-θ y protocolo de carga K3.
 *
 * Cada chart retorna objetos 3D + función `moveCursor(stepIdx)` para
 * sincronizar un cursor (esfera roja) con la animación del protocolo.
 * También retorna `setProgress(stepIdx)` que dibuja la curva incrementalmente
 * (solo hasta el índice indicado), simulando la curva creciendo en el tiempo.
 */
import * as THREE from "three";

export interface ChartHandle {
  objects: THREE.Object3D[];
  /** Posiciona el cursor (esfera) en el step `i` */
  moveCursor: (i: number) => void;
  /** Redibuja la curva mostrando solo los primeros `i+1` puntos */
  setProgress: (i: number) => void;
}

export interface HysteresisChartInput {
  theta: number[];
  M: number[];
  Mp: number;
  targetDrift: number;
  center: [number, number, number];
  size: number;
  plane?: "xy" | "xz" | "yz";
}

export function buildHysteresisChart3D(inp: HysteresisChartInput): ChartHandle {
  const objects: THREE.Object3D[] = [];
  const n = inp.theta.length;
  if (n < 2) {
    return { objects, moveCursor: () => {}, setProgress: () => {} };
  }

  const plane = inp.plane ?? "xz";
  const size = inp.size;

  const thetaMax = Math.max(...inp.theta.map((v) => Math.abs(v)), 1e-9);
  const mMax = Math.max(...inp.M.map((v) => Math.abs(v)), 1e-9);

  const xs = inp.theta.map((t) => (t / thetaMax) * (size / 2));
  const ys = inp.M.map((m) => (m / mMax) * (size / 2));

  const [cx, cy, cz] = inp.center;
  const mapTo3D = (u: number, v: number): THREE.Vector3 => {
    if (plane === "xy") return new THREE.Vector3(cx + u, cy + v, cz);
    if (plane === "yz") return new THREE.Vector3(cx, cy + u, cz + v);
    return new THREE.Vector3(cx + u, cy, cz + v);
  };

  // Marco
  const half = size / 2;
  const frameMat = new THREE.LineBasicMaterial({ color: 0x666666 });
  objects.push(
    new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        mapTo3D(-half, -half), mapTo3D(+half, -half),
        mapTo3D(+half, +half), mapTo3D(-half, +half),
        mapTo3D(-half, -half),
      ]),
      frameMat,
    ),
  );

  // Ejes 0
  const axisMat = new THREE.LineBasicMaterial({ color: 0xaaaaaa });
  objects.push(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([mapTo3D(-half, 0), mapTo3D(+half, 0)]),
    axisMat,
  ));
  objects.push(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([mapTo3D(0, -half), mapTo3D(0, +half)]),
    axisMat,
  ));

  // Líneas de criterio AISC 358-22 ±0.80·Mp
  const critM = ((0.80 * inp.Mp) / mMax) * (size / 2);
  if (Math.abs(critM) <= half) {
    const critMat = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    objects.push(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([mapTo3D(-half, +critM), mapTo3D(+half, +critM)]),
      critMat,
    ));
    objects.push(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([mapTo3D(-half, -critM), mapTo3D(+half, -critM)]),
      critMat,
    ));
  }

  // Líneas target drift
  const tD = (inp.targetDrift / thetaMax) * (size / 2);
  if (Math.abs(tD) <= half) {
    const tDMat = new THREE.LineBasicMaterial({ color: 0xff8800, transparent: true, opacity: 0.6 });
    objects.push(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([mapTo3D(+tD, -half), mapTo3D(+tD, +half)]),
      tDMat,
    ));
    objects.push(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([mapTo3D(-tD, -half), mapTo3D(-tD, +half)]),
      tDMat,
    ));
  }

  // CURVA ANIMABLE
  // BufferGeometry con max n puntos; usamos drawRange para mostrar solo los primeros k
  const positionsArr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const v = mapTo3D(xs[i], ys[i]);
    positionsArr[i * 3 + 0] = v.x;
    positionsArr[i * 3 + 1] = v.y;
    positionsArr[i * 3 + 2] = v.z;
  }
  const curveGeom = new THREE.BufferGeometry();
  curveGeom.setAttribute("position", new THREE.BufferAttribute(positionsArr, 3));
  curveGeom.setDrawRange(0, n); // por defecto, mostrar todo
  const curveMat = new THREE.LineBasicMaterial({ color: 0x00ffcc, linewidth: 3 });
  const curveLine = new THREE.Line(curveGeom, curveMat);
  objects.push(curveLine);

  // CURSOR (esfera roja brillante)
  const cursorMat = new THREE.MeshBasicMaterial({ color: 0xff0044 });
  const cursor = new THREE.Mesh(new THREE.SphereGeometry(size * 0.025, 12, 8), cursorMat);
  cursor.position.copy(mapTo3D(xs[0], ys[0]));
  objects.push(cursor);

  return {
    objects,
    moveCursor: (i: number) => {
      const idx = Math.max(0, Math.min(n - 1, i));
      cursor.position.copy(mapTo3D(xs[idx], ys[idx]));
    },
    setProgress: (i: number) => {
      const k = Math.max(1, Math.min(n, i + 1));
      curveGeom.setDrawRange(0, k);
    },
  };
}

export interface LoadingProtocolInput {
  drifts: number[];
  center: [number, number, number];
  size: number;
  plane?: "xy" | "xz" | "yz";
}

export function buildLoadingProtocolChart3D(inp: LoadingProtocolInput): ChartHandle {
  const objects: THREE.Object3D[] = [];
  const n = inp.drifts.length;
  if (n < 2) {
    return { objects, moveCursor: () => {}, setProgress: () => {} };
  }

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

  const half = size / 2;
  // Marco
  objects.push(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([
      mapTo3D(0, -half), mapTo3D(size, -half),
      mapTo3D(size, +half), mapTo3D(0, +half), mapTo3D(0, -half),
    ]),
    new THREE.LineBasicMaterial({ color: 0x666666 }),
  ));
  // Eje 0
  objects.push(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([mapTo3D(0, 0), mapTo3D(size, 0)]),
    new THREE.LineBasicMaterial({ color: 0xaaaaaa }),
  ));

  // Curva animable
  const positionsArr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const v = mapTo3D(xs[i], ys[i]);
    positionsArr[i * 3 + 0] = v.x;
    positionsArr[i * 3 + 1] = v.y;
    positionsArr[i * 3 + 2] = v.z;
  }
  const curveGeom = new THREE.BufferGeometry();
  curveGeom.setAttribute("position", new THREE.BufferAttribute(positionsArr, 3));
  curveGeom.setDrawRange(0, n);
  const curveLine = new THREE.Line(
    curveGeom,
    new THREE.LineBasicMaterial({ color: 0xffaa00, linewidth: 2 }),
  );
  objects.push(curveLine);

  // Cursor
  const cursorMat = new THREE.MeshBasicMaterial({ color: 0xff0044 });
  const cursor = new THREE.Mesh(new THREE.SphereGeometry(size * 0.022, 12, 8), cursorMat);
  cursor.position.copy(mapTo3D(xs[0], ys[0]));
  objects.push(cursor);

  return {
    objects,
    moveCursor: (i: number) => {
      const idx = Math.max(0, Math.min(n - 1, i));
      cursor.position.copy(mapTo3D(xs[idx], ys[idx]));
    },
    setProgress: (i: number) => {
      const k = Math.max(1, Math.min(n, i + 1));
      curveGeom.setDrawRange(0, k);
    },
  };
}
