/**
 * Cotas 3D — etiquetas de texto flotantes (Sprites) para dimensiones.
 * Las marcas se renderizan como canvas con texto y siempre miran a la cámara.
 * Cada Object3D tiene userData.isCota=true para que el viewer lo toggle
 * con el setting "Cotas" (independiente de custom3D).
 */
import * as THREE from "three";

/** Crea un Sprite con texto nítido (alta resolución + filtros anisotrópicos). */
export function makeLabel(text: string, x: number, y: number, z: number, color = "#00e5ff"): THREE.Sprite {
  // Render en alta resolución (×4 devicePixelRatio) para evitar pixelado al hacer zoom.
  const SUPERSAMPLE = 4;
  const fontPxLogical = 24;
  const paddingLogical = 8;
  const fontPx = fontPxLogical * SUPERSAMPLE;
  const padding = paddingLogical * SUPERSAMPLE;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  ctx.font = `bold ${fontPx}px system-ui, -apple-system, sans-serif`;
  const textWidth = Math.ceil(ctx.measureText(text).width);
  canvas.width = textWidth + padding * 2;
  canvas.height = fontPx + padding * 2;
  // Re-set font after resize (canvas resize reset context)
  ctx.font = `bold ${fontPx}px system-ui, -apple-system, sans-serif`;

  // Fondo pill semi-transparente redondeado
  ctx.fillStyle = "rgba(0,0,0,0.75)";
  const r = canvas.height / 2;
  ctx.beginPath();
  ctx.moveTo(r, 0);
  ctx.arcTo(canvas.width, 0, canvas.width, r, r);
  ctx.arcTo(canvas.width, canvas.height, canvas.width - r, canvas.height, r);
  ctx.arcTo(0, canvas.height, 0, canvas.height - r, r);
  ctx.arcTo(0, 0, r, 0, r);
  ctx.closePath();
  ctx.fill();

  // Texto nítido (anti-aliased)
  ctx.fillStyle = color;
  ctx.textBaseline = "middle";
  ctx.fillText(text, padding, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  // Filtros anisotrópicos para zoom nítido
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = 16;
  texture.needsUpdate = true;

  const material = new THREE.SpriteMaterial({
    map: texture, depthTest: false, depthWrite: false, transparent: true,
  });
  const sprite = new THREE.Sprite(material);
  sprite.position.set(x, y, z);
  // Escala del sprite en unidades del mundo. El canvas es SUPERSAMPLE veces más
  // grande, pero el sprite se escala al tamaño visual deseado.
  const worldHeight = 0.45;
  const aspect = canvas.width / canvas.height;
  sprite.scale.set(worldHeight * aspect, worldHeight, 1);
  (sprite.userData as any).isCota = true;
  return sprite;
}

/** Línea entre dos puntos con userData.isCota=true (para líneas de cota). */
export function makeCotaLine(p1: [number,number,number], p2: [number,number,number], color = 0x00e5ff): THREE.Line {
  const mat = new THREE.LineBasicMaterial({ color, depthTest: false });
  const geom = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(...p1),
    new THREE.Vector3(...p2),
  ]);
  const line = new THREE.Line(geom, mat);
  line.renderOrder = 999;
  (line.userData as any).isCota = true;
  return line;
}

/**
 * Genera cotas de luces X/Y y alturas de piso para un edificio con grid.
 * @param xCoords coordenadas en X (ejes)
 * @param yCoords coordenadas en Y (ejes)
 * @param zCoords coordenadas en Z (pisos, incluye z=0 y cumbreras)
 */
export function buildEdificioCotas(
  xCoords: number[],
  yCoords: number[],
  zCoords: number[]
): THREE.Object3D[] {
  const out: THREE.Object3D[] = [];
  const yBase = yCoords[yCoords.length - 1] + 1.0;  // cotas X en el borde Y-alto
  const xBase = xCoords[xCoords.length - 1] + 1.0;  // cotas Y en el borde X-alto
  const zGround = zCoords[0];

  // Cotas X — distancias entre ejes consecutivos
  for (let i = 0; i < xCoords.length - 1; i++) {
    const x0 = xCoords[i], x1 = xCoords[i + 1];
    const dx = x1 - x0;
    // Línea entre los ejes
    out.push(makeCotaLine([x0, yBase, zGround], [x1, yBase, zGround]));
    // Marcas verticales en los extremos
    out.push(makeCotaLine([x0, yBase - 0.15, zGround], [x0, yBase + 0.15, zGround]));
    out.push(makeCotaLine([x1, yBase - 0.15, zGround], [x1, yBase + 0.15, zGround]));
    // Texto: distancia
    out.push(makeLabel(`${dx.toFixed(2)} m`, (x0 + x1) / 2, yBase + 0.35, zGround));
  }
  // Cotas Y
  for (let i = 0; i < yCoords.length - 1; i++) {
    const y0 = yCoords[i], y1 = yCoords[i + 1];
    const dy = y1 - y0;
    out.push(makeCotaLine([xBase, y0, zGround], [xBase, y1, zGround]));
    out.push(makeCotaLine([xBase - 0.15, y0, zGround], [xBase + 0.15, y0, zGround]));
    out.push(makeCotaLine([xBase - 0.15, y1, zGround], [xBase + 0.15, y1, zGround]));
    out.push(makeLabel(`${dy.toFixed(2)} m`, xBase + 0.35, (y0 + y1) / 2, zGround));
  }
  // Cotas Z — alturas por piso (en un lateral)
  const xSide = xCoords[0] - 1.0;
  const ySide = yCoords[0];
  for (let k = 0; k < zCoords.length - 1; k++) {
    const z0 = zCoords[k], z1 = zCoords[k + 1];
    const dz = z1 - z0;
    out.push(makeCotaLine([xSide, ySide, z0], [xSide, ySide, z1]));
    out.push(makeCotaLine([xSide - 0.15, ySide, z0], [xSide + 0.15, ySide, z0]));
    out.push(makeCotaLine([xSide - 0.15, ySide, z1], [xSide + 0.15, ySide, z1]));
    out.push(makeLabel(`Piso ${k + 1}: ${dz.toFixed(2)} m`, xSide - 0.5, ySide, (z0 + z1) / 2));
  }
  // Etiqueta de sección de columna típica en el piso 1
  return out;
}
