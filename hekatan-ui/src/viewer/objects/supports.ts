import * as THREE from "three";
import van, { State } from "vanjs-core";
import { Node } from "hekatan-fem";
import { Structure } from "hekatan-fem";
import { Settings } from "../settings/getSettings";

export function supports(
  structure: Structure,
  settings: Settings,
  derivedNodes: State<Node[]>,
  derivedDisplayScale: State<number>
): THREE.Group {
  const group = new THREE.Group();
  const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const material = new THREE.MeshBasicMaterial({ color: 0x9b2226 });
  // on settings.support & deformedShape, and model clear and create visuals
  van.derive(() => {
    settings.deformedShape.val; // triggers update

    if (!settings.supports.val) return;

    group.clear();

    // Factor 0.18 (vs 0.05 default) hace que los símbolos de apoyo sean
    // ~3.6× más grandes — visibles incluso con displayScale negativo (común
    // cuando el usuario reduce el tamaño de markers para ver el modelo). Los
    // apoyos son anclas conceptuales gruesas, no merecen el size de un nodo.
    const size = 0.18 * settings.gridSize.val * 0.6;
    structure.nodeInputs?.val.supports?.forEach((_, index) => {
      const position = derivedNodes.val[index];
      if (!position) return; // do not create if node does not exist

      const sphere = new THREE.Mesh(geometry, material);

      sphere.position.set(...position);
      const scale = size * derivedDisplayScale.rawVal;
      sphere.scale.set(scale, scale, scale);

      group.add(sphere);
    });
  });

  // on derivedDisplayScale or gridSize update scale
  van.derive(() => {
    derivedDisplayScale.val; // triggers update

    if (!settings.supports.rawVal) return;

    // Factor 0.18 (vs 0.05 default) hace que los símbolos de apoyo sean
    // ~3.6× más grandes — visibles incluso con displayScale negativo (común
    // cuando el usuario reduce el tamaño de markers para ver el modelo). Los
    // apoyos son anclas conceptuales gruesas, no merecen el size de un nodo.
    const size = 0.18 * settings.gridSize.val * 0.6;
    const scale = size * derivedDisplayScale.rawVal;
    group.children.forEach((c) => c.scale.set(scale, scale, scale));
  });

  // on settings.supports update visibility
  van.derive(() => {
    group.visible = settings.supports.val;
  });

  return group;
}
