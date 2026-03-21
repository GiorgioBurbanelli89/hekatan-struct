import * as THREE from "three";
import van, { State } from "vanjs-core";
import { Node } from "awatif-fem";
import { Structure } from "awatif-fem";
import { Settings } from "../settings/getSettings";

export function loads(
  structure: Structure,
  settings: Settings,
  derivedNodes: State<Node[]>,
  derivedDisplayScale: State<number>
): THREE.Group {
  const group = new THREE.Group();
  group.name = "loadsGroup";

  /** Compute arrow size based on actual model extent (5% of bounding box diagonal) */
  function getArrowSize(nodes: Node[]): number {
    if (nodes.length < 2) return 0.12 * settings.gridSize.rawVal;
    const mins = [Infinity, Infinity, Infinity];
    const maxs = [-Infinity, -Infinity, -Infinity];
    for (const n of nodes) {
      for (let i = 0; i < 3; i++) {
        mins[i] = Math.min(mins[i], n[i]);
        maxs[i] = Math.max(maxs[i], n[i]);
      }
    }
    const extent = Math.max(maxs[0] - mins[0], maxs[1] - mins[1], maxs[2] - mins[2], 0.1);
    return 0.08 * extent;
  }

  // on settings.loads & deformedShape, and model clear and create visuals
  van.derive(() => {
    settings.deformedShape.val; // trigger update

    if (!settings.loads.val) return;

    group.children.forEach((o) => (o as THREE.ArrowHelper).dispose());
    group.clear();

    const nodes = derivedNodes.val;
    const size = getArrowSize(nodes);

    structure.nodeInputs?.val?.loads?.forEach((load, index) => {
      const position = nodes[index];
      if (!position) return;

      const dir = new THREE.Vector3(...load.slice(0, 3));
      if (dir.lengthSq() < 1e-30) return; // skip zero loads
      dir.normalize();

      const arrow = new THREE.ArrowHelper(
        dir,
        new THREE.Vector3(...position),
        1,
        0xee9b00,
        0.3,
        0.3
      );

      const scale = size * derivedDisplayScale.rawVal;
      arrow.scale.set(scale, scale, scale);

      group.add(arrow);
    });
  });

  // on derivedDisplayScale update scale
  van.derive(() => {
    derivedDisplayScale.val; // triggers update

    if (!settings.loads.rawVal) return;

    const size = getArrowSize(derivedNodes.rawVal);
    const scale = size * derivedDisplayScale.rawVal;
    group.children.forEach((c) => c.scale.set(scale, scale, scale));
  });

  // on settings.loads update update visibility
  van.derive(() => {
    group.visible = settings.loads.val;
  });

  return group;
}
