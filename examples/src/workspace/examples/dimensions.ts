/**
 * Utility: dimension lines (cotas) for 3D viewer.
 * Genera THREE.Object3D con líneas de cota + flechas + label canvas.
 */
import * as THREE from "three";

const MAT_DIM = new THREE.LineBasicMaterial({ color: 0x0ea5e9 });
const ARROW_LEN = 0.15;

function makeTextSprite(txt: string, color = "#0ea5e9"): THREE.Sprite {
  const canvas = document.createElement("canvas");
  canvas.width = 256; canvas.height = 64;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, canvas.width - 2, canvas.height - 2);
  ctx.font = "bold 32px system-ui, sans-serif";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(txt, canvas.width / 2, canvas.height / 2);
  const tex = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({ map: tex, depthTest: false });
  const sp = new THREE.Sprite(mat);
  sp.scale.set(0.8, 0.2, 1);
  return sp;
}

/**
 * Línea de cota horizontal entre p1 y p2, con offset perpendicular.
 * @param p1 punto inicial [x,y,z]
 * @param p2 punto final [x,y,z]
 * @param label texto (ej. "2.50 m")
 * @param offsetVec vector perpendicular unitario × magnitude (dirección cota)
 */
export function makeDimensionLine(
  p1: [number, number, number],
  p2: [number, number, number],
  label: string,
  offsetVec: [number, number, number] = [0, 0, -0.5],
): THREE.Object3D[] {
  const group: THREE.Object3D[] = [];
  const v1 = new THREE.Vector3(...p1);
  const v2 = new THREE.Vector3(...p2);
  const off = new THREE.Vector3(...offsetVec);
  const a = v1.clone().add(off);
  const b = v2.clone().add(off);

  // Extensión líneas (vertical de referencia)
  const ext1 = new THREE.BufferGeometry().setFromPoints([v1, a]);
  const ext2 = new THREE.BufferGeometry().setFromPoints([v2, b]);
  group.push(new THREE.Line(ext1, MAT_DIM));
  group.push(new THREE.Line(ext2, MAT_DIM));

  // Línea de cota principal
  const main = new THREE.BufferGeometry().setFromPoints([a, b]);
  group.push(new THREE.Line(main, MAT_DIM));

  // Flechas en extremos (triangulitos 45°)
  const dir = b.clone().sub(a).normalize();
  const perp = new THREE.Vector3(-dir.y, dir.x, 0).normalize().multiplyScalar(ARROW_LEN * 0.3);
  for (const [anchor, d] of [[a, dir.clone().multiplyScalar(ARROW_LEN)], [b, dir.clone().multiplyScalar(-ARROW_LEN)]] as const) {
    const tip = anchor.clone();
    const tail1 = anchor.clone().add(d).add(perp);
    const tail2 = anchor.clone().add(d).sub(perp);
    const ag = new THREE.BufferGeometry().setFromPoints([tail1, tip, tail2]);
    group.push(new THREE.Line(ag, MAT_DIM));
  }

  // Label en medio
  const mid = a.clone().add(b).multiplyScalar(0.5);
  const sprite = makeTextSprite(label);
  sprite.position.copy(mid);
  group.push(sprite);

  return group;
}
