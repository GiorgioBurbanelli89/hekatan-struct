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

  // on derivedDisplayScale or gridSize update scale
  // Reducido de 0.05 → 0.02 (factor base más chico, 40% del original)
  // para que los node markers (cuadrados naranjas) no dominen el modelo.
  van.derive(() => {
    derivedDisplayScale.val; // trigger update
    const size = 0.02 * settings.gridSize.val * 0.5;

    if (!settings.nodes.rawVal) return;

    points.material.size = size * derivedDisplayScale.rawVal;
  });

  // on settings.nodes update visibility
  van.derive(() => {
    points.visible = settings.nodes.val;
  });

  return points;
}
