/**
 * Marcador 3D del componente gobernante (estilo IDEA StatiCa).
 *
 * En IDEA, cuando seleccionás un resultado, el solver resalta con un halo
 * rojo la zona donde se concentra la plastificación ("governing component").
 * Esto replica ese comportamiento generando un objeto 3D transparente que
 * envuelve los shells de la zona gobernante.
 */
import * as THREE from "three";
import type { Node, Element } from "hekatan-fem";
import type { ZoneKey } from "./componentZones";

export function buildGoverningMarker(
  nodes: Node[],
  elements: Element[],
  zoneMap: Map<number, ZoneKey>,
  governingZone: ZoneKey | null,
): THREE.Object3D[] {
  if (!governingZone) return [];
  // Buscar bounding box de todos los shells de esa zona
  let xmin = Infinity, ymin = Infinity, zmin = Infinity;
  let xmax = -Infinity, ymax = -Infinity, zmax = -Infinity;
  let count = 0;
  for (const [ei, zone] of zoneMap.entries()) {
    if (zone !== governingZone) continue;
    const e = elements[ei];
    for (const ni of e) {
      const [x, y, z] = nodes[ni];
      if (x < xmin) xmin = x;
      if (y < ymin) ymin = y;
      if (z < zmin) zmin = z;
      if (x > xmax) xmax = x;
      if (y > ymax) ymax = y;
      if (z > zmax) zmax = z;
    }
    count++;
  }
  if (count === 0) return [];
  const pad = 0.015;
  xmin -= pad; ymin -= pad; zmin -= pad;
  xmax += pad; ymax += pad; zmax += pad;

  const geom = new THREE.BoxGeometry(xmax - xmin, ymax - ymin, zmax - zmin);
  const mat = new THREE.MeshBasicMaterial({
    color: 0xff0044,
    transparent: true,
    opacity: 0.15,
    wireframe: false,
  });
  const mesh = new THREE.Mesh(geom, mat);
  mesh.position.set((xmin + xmax) / 2, (ymin + ymax) / 2, (zmin + zmax) / 2);

  // Wireframe edges para que se vea el contorno
  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(geom),
    new THREE.LineBasicMaterial({ color: 0xff0044, linewidth: 2 }),
  );
  edges.position.copy(mesh.position);

  return [mesh, edges];
}
