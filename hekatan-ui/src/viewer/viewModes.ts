/**
 * 🎯 View Modes — vistas ortogonales 3D / Plan / EX / EY + Ejes / Plantas
 *
 *  Vistas globales:
 *    • setView3D()           — isométrica
 *    • setViewPlan(z)        — top-down a una elevación Z
 *    • setViewElevationX(x)  — elevación mirando en X (planos YZ)
 *    • setViewElevationY(y)  — elevación mirando en Y (planos XZ)
 *
 *  Vistas POR EJE (estilo ETABS):
 *    • detectGridAxes()      — encuentra ejes únicos X (A, B, C, ...) e Y (1, 2, 3, ...)
 *    • detectStories()       — encuentra elevaciones únicas Z (Base, P1, P2, ...)
 *    • setViewAxisX(idx)     — elevación en eje X = X_axes[idx] (A, B, C...)
 *    • setViewAxisY(idx)     — elevación en eje Y = Y_axes[idx] (1, 2, 3...)
 *    • setViewPlanta(idx)    — top-down a la planta Z_levels[idx] (P1, P2...)
 *
 *  Filtros (clipping):
 *    • setAxisClip(x)        — solo muestra elementos en plano X = const
 *    • setStoryClip(zMin, zMax)
 *    • clearStoryClip()
 *
 *  Etiquetas:
 *    • axisLabelX(idx)       — "A", "B", "C", ..., "Z", "AA", ...
 *    • axisLabelY(idx)       — "1", "2", "3", ...
 *    • plantaLabel(idx)      — "Base", "P1", "P2", ...
 *
 *  TS limpio, integrable en cualquier ejemplo del workspace via getViewer().
 */
import * as THREE from "three";

export interface ViewerCtxLike {
  scene: THREE.Scene;
  camera: THREE.Camera;
  controls: any;
  render: () => void;
  setActiveCamera?: (cam: THREE.Camera) => void;
}

export interface BoundingInfo {
  /** Centro del bbox del modelo */
  center: THREE.Vector3;
  /** Diagonal del bbox */
  extent: number;
  /** Z mínimo y máximo (para detectar pisos) */
  zMin: number;
  zMax: number;
}

/** Mide el bounding box del modelo recorriendo nodes/elements en la escena. */
export function measureModelBounds(scene: THREE.Scene): BoundingInfo {
  const box = new THREE.Box3();
  scene.traverse((o: any) => {
    if (!o.geometry?.attributes?.position) return;
    if (!o.visible) return;
    if (o.userData?.isFrameSection || o.userData?.isShellArea ||
        o.name === "__hekatan_shell_colormap" || o.userData?.isNodes) {
      o.updateMatrixWorld();
      const localBox = new THREE.Box3().setFromBufferAttribute(o.geometry.attributes.position);
      localBox.applyMatrix4(o.matrixWorld);
      box.union(localBox);
    }
  });
  if (box.isEmpty()) {
    return { center: new THREE.Vector3(0, 0, 0), extent: 10, zMin: 0, zMax: 1 };
  }
  const center = new THREE.Vector3();
  box.getCenter(center);
  const size = new THREE.Vector3();
  box.getSize(size);
  return {
    center,
    extent: Math.max(size.length(), 1),
    zMin: box.min.z,
    zMax: box.max.z,
  };
}

/** Vista isométrica 3D estándar */
export function setView3D(ctx: ViewerCtxLike): void {
  const b = measureModelBounds(ctx.scene);
  const d = b.extent;
  const cam = ctx.camera as THREE.PerspectiveCamera;
  cam.position.set(
    b.center.x + d * 0.7,
    b.center.y + d * 0.7,
    b.center.z + d * 0.7,
  );
  cam.up.set(0, 0, 1);  // Z-up convention
  cam.lookAt(b.center);
  if (ctx.controls?.target) ctx.controls.target.copy(b.center);
  if (ctx.controls?.update) ctx.controls.update();
  ctx.render();
}

/** Vista en planta — top-down a una elevación Z específica.
 *  Si `z` no se da, usa el centro del modelo. */
export function setViewPlan(ctx: ViewerCtxLike, z?: number): void {
  const b = measureModelBounds(ctx.scene);
  const targetZ = z ?? b.center.z;
  const cam = ctx.camera as THREE.PerspectiveCamera;
  cam.position.set(b.center.x, b.center.y, targetZ + b.extent);
  cam.up.set(0, 1, 0);  // Y up cuando vemos desde arriba
  cam.lookAt(b.center.x, b.center.y, targetZ);
  if (ctx.controls?.target) ctx.controls.target.set(b.center.x, b.center.y, targetZ);
  if (ctx.controls?.update) ctx.controls.update();
  ctx.render();
}

/** Elevación mirando en +X (planos YZ visibles) */
export function setViewElevationX(ctx: ViewerCtxLike, x?: number): void {
  const b = measureModelBounds(ctx.scene);
  const targetX = x ?? b.center.x;
  const cam = ctx.camera as THREE.PerspectiveCamera;
  cam.position.set(targetX + b.extent, b.center.y, b.center.z);
  cam.up.set(0, 0, 1);
  cam.lookAt(targetX, b.center.y, b.center.z);
  if (ctx.controls?.target) ctx.controls.target.set(targetX, b.center.y, b.center.z);
  if (ctx.controls?.update) ctx.controls.update();
  ctx.render();
}

/** Elevación mirando en +Y (planos XZ visibles) */
export function setViewElevationY(ctx: ViewerCtxLike, y?: number): void {
  const b = measureModelBounds(ctx.scene);
  const targetY = y ?? b.center.y;
  const cam = ctx.camera as THREE.PerspectiveCamera;
  cam.position.set(b.center.x, targetY + b.extent, b.center.z);
  cam.up.set(0, 0, 1);
  cam.lookAt(b.center.x, targetY, b.center.z);
  if (ctx.controls?.target) ctx.controls.target.set(b.center.x, targetY, b.center.z);
  if (ctx.controls?.update) ctx.controls.update();
  ctx.render();
}

export type ViewMode = "3D" | "Plan" | "EX" | "EY";

/** Aplica una vista por nombre */
export function applyViewMode(ctx: ViewerCtxLike, mode: ViewMode, anchor?: number): void {
  switch (mode) {
    case "3D":   setView3D(ctx); break;
    case "Plan": setViewPlan(ctx, anchor); break;
    case "EX":   setViewElevationX(ctx, anchor); break;
    case "EY":   setViewElevationY(ctx, anchor); break;
  }
}

/** Detecta automáticamente las elevaciones únicas Z del modelo (pisos).
 *  Si pasa `nodes` directo (más confiable que escanear la escena), las usa. */
export function detectStories(
  sceneOrNodes: THREE.Scene | Array<[number, number, number] | number[]>,
  tolerance: number = 0.05,
): number[] {
  const zs = new Set<number>();
  if (Array.isArray(sceneOrNodes)) {
    for (const n of sceneOrNodes) {
      const z = Math.round((n[2] ?? 0) / tolerance) * tolerance;
      zs.add(z);
    }
  } else {
    sceneOrNodes.traverse((o: any) => {
      if (!o.userData?.isNodes) return;
      const pos = o.geometry?.attributes?.position;
      if (!pos) return;
      for (let i = 0; i < pos.count; i++) {
        const z = Math.round(pos.getZ(i) / tolerance) * tolerance;
        zs.add(z);
      }
    });
  }
  return Array.from(zs).sort((a, b) => a - b);
}

/**
 * Detecta los ejes verticales únicos del modelo:
 *   • xAxes: lista de coordenadas X distintas (líneas de columnas en X)
 *            → labels "A", "B", "C", ... (ETABS convention)
 *   • yAxes: lista de coordenadas Y distintas (líneas de columnas en Y)
 *            → labels "1", "2", "3", ...
 *
 * Solo considera nodos en la base (Z = zMin) o nodos con varios pisos (líneas
 * de columnas verticales) — un nodo aislado en planta no es un eje.
 */
export function detectGridAxes(
  sceneOrNodes: THREE.Scene | Array<[number, number, number] | number[]>,
  tolerance: number = 0.1,
): { xAxes: number[]; yAxes: number[] } {
  const xs = new Set<number>(), ys = new Set<number>();
  const collect = (x: number, y: number) => {
    xs.add(Math.round(x / tolerance) * tolerance);
    ys.add(Math.round(y / tolerance) * tolerance);
  };
  if (Array.isArray(sceneOrNodes)) {
    for (const n of sceneOrNodes) collect(n[0] ?? 0, n[1] ?? 0);
  } else {
    sceneOrNodes.traverse((o: any) => {
      if (!o.userData?.isNodes) return;
      const pos = o.geometry?.attributes?.position;
      if (!pos) return;
      for (let i = 0; i < pos.count; i++) {
        collect(pos.getX(i), pos.getY(i));
      }
    });
  }
  return {
    xAxes: Array.from(xs).sort((a, b) => a - b),
    yAxes: Array.from(ys).sort((a, b) => a - b),
  };
}

/** Etiqueta de eje X (líneas de columnas): A, B, C, ..., Z, AA, AB, ... */
export function axisLabelX(idx: number): string {
  let label = "";
  let n = idx;
  do {
    label = String.fromCharCode(65 + (n % 26)) + label;
    n = Math.floor(n / 26) - 1;
  } while (n >= 0);
  return label;
}

/** Etiqueta de eje Y: "1", "2", "3", ... */
export function axisLabelY(idx: number): string {
  return String(idx + 1);
}

/** Etiqueta de planta: "Base" para piso 0, "P1", "P2", ... después */
export function plantaLabel(idx: number): string {
  return idx === 0 ? "Base" : `P${idx}`;
}

/** Vista por eje X: cámara mirando perpendicular al plano X = xCoord (eje vertical Z).
 *  Equivalente a setViewElevationX(xCoord) pero acepta el ÍNDICE del eje detectado. */
export function setViewAxisX(
  ctx: ViewerCtxLike,
  axisIdx: number,
  xAxes?: number[],
): void {
  const axes = xAxes ?? detectGridAxes(ctx.scene).xAxes;
  if (axes.length === 0) { setViewElevationX(ctx); return; }
  const idx = Math.max(0, Math.min(axes.length - 1, axisIdx));
  setViewElevationX(ctx, axes[idx]);
}

/** Vista por eje Y: cámara mirando perpendicular al plano Y = yCoord. */
export function setViewAxisY(
  ctx: ViewerCtxLike,
  axisIdx: number,
  yAxes?: number[],
): void {
  const axes = yAxes ?? detectGridAxes(ctx.scene).yAxes;
  if (axes.length === 0) { setViewElevationY(ctx); return; }
  const idx = Math.max(0, Math.min(axes.length - 1, axisIdx));
  setViewElevationY(ctx, axes[idx]);
}

/** Vista por planta: cámara top-down a la elevación Z[plantaIdx].
 *  plantaIdx 0 = "Base" (Z mínimo), 1 = "P1", etc. */
export function setViewPlanta(
  ctx: ViewerCtxLike,
  plantaIdx: number,
  stories?: number[],
): void {
  const zs = stories ?? detectStories(ctx.scene);
  if (zs.length === 0) { setViewPlan(ctx); return; }
  const idx = Math.max(0, Math.min(zs.length - 1, plantaIdx));
  setViewPlan(ctx, zs[idx]);
}

/** Clipping vertical: solo muestra elementos cerca del plano X = const (eje X). */
export function setAxisClipX(
  renderer: THREE.WebGLRenderer,
  x: number,
  thickness: number = 0.5,
): void {
  renderer.localClippingEnabled = true;
  renderer.clippingPlanes = [
    new THREE.Plane(new THREE.Vector3(1, 0, 0), -(x - thickness)),
    new THREE.Plane(new THREE.Vector3(-1, 0, 0), (x + thickness)),
  ];
}

/** Clipping vertical: solo muestra elementos cerca del plano Y = const (eje Y). */
export function setAxisClipY(
  renderer: THREE.WebGLRenderer,
  y: number,
  thickness: number = 0.5,
): void {
  renderer.localClippingEnabled = true;
  renderer.clippingPlanes = [
    new THREE.Plane(new THREE.Vector3(0, 1, 0), -(y - thickness)),
    new THREE.Plane(new THREE.Vector3(0, -1, 0), (y + thickness)),
  ];
}

/** Limpia cualquier clipping activo (vuelve a vista completa) */
export function clearClipping(renderer: THREE.WebGLRenderer): void {
  renderer.clippingPlanes = [];
}

/** Configura clipping planes para mostrar SOLO los elementos en una franja de Z. */
export function setStoryClip(
  renderer: THREE.WebGLRenderer,
  zMin: number, zMax: number,
): void {
  renderer.localClippingEnabled = true;
  // Plane normal pointing +Z, constant = -zMin → "todo lo que tenga Z >= zMin"
  const planes = [
    new THREE.Plane(new THREE.Vector3(0, 0, 1), -zMin),
    new THREE.Plane(new THREE.Vector3(0, 0, -1), zMax),
  ];
  renderer.clippingPlanes = planes;
}

/** Limpia clipping (vuelve a vista completa) */
export function clearStoryClip(renderer: THREE.WebGLRenderer): void {
  renderer.clippingPlanes = [];
}
