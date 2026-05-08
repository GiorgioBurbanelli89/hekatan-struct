import * as THREE from "three";
import van, { State } from "vanjs-core";
import { Node } from "hekatan-fem";
import { Settings } from "../settings/getSettings";
import { getTheme, onThemeChange } from "../../theme";

export function nodes(
  settings: Settings,
  derivedNodes: State<Node[]>,
  derivedDisplayScale: State<number>
): THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial> {
  const t = getTheme();
  const points = new THREE.Points(
    new THREE.BufferGeometry(),
    new THREE.PointsMaterial({ color: t.nodePoint })
  );
  onThemeChange((_n, c) => { points.material.color.setHex(c.nodePoint); });
  points.frustumCulled = false;

  // on settings.nodes, and derivedNodes update visuals
  van.derive(() => {
    if (!settings.nodes.val) return;

    points.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(derivedNodes.val.flat(), 3)
    );
  });

  // on derivedDisplayScale, gridSize or nodes change update scale
  // Tamaño proporcional al EXTENT del modelo (consistente con loads/supports
  // que usan 8% del extent). Antes era proporcional a gridSize (constante)
  // lo que hacía los nodos minúsculos vs flechas en modelos pequeños.
  van.derive(() => {
    derivedDisplayScale.val; // trigger update
    derivedNodes.val;        // trigger update cuando cambia geometría

    if (!settings.nodes.rawVal) return;

    // Calcular extent del modelo
    const ns = derivedNodes.rawVal ?? [];
    let extent = settings.gridSize.val * 0.5;  // fallback inicial
    if (ns.length >= 2) {
      const mins = [Infinity, Infinity, Infinity];
      const maxs = [-Infinity, -Infinity, -Infinity];
      for (const n of ns) {
        for (let i = 0; i < 3; i++) {
          mins[i] = Math.min(mins[i], n[i]);
          maxs[i] = Math.max(maxs[i], n[i]);
        }
      }
      extent = Math.max(maxs[0]-mins[0], maxs[1]-mins[1], maxs[2]-mins[2], 0.1);
    }
    // 3% del extent (vs flechas que usan 8% — los nodos quedan ~40% del tamaño
    // de las flechas, proporcionalmente visibles sin dominar)
    const size = 0.03 * extent;
    points.material.size = size * derivedDisplayScale.rawVal;
  });

  // on settings.nodes update visibility
  van.derive(() => {
    points.visible = settings.nodes.val;
  });

  return points;
}
