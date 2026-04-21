import * as THREE from "three";
import { Node, Element } from "awatif-fem";

import { Lut } from "three/addons/math/Lut.js";
import van, { State } from "vanjs-core";
import { fixedColorMapRange } from "../viewer/getViewer";

export function getColorMap(
  nodes: State<Node[]>,
  elements: State<Element[]>,
  values: State<number[]>
): THREE.Mesh {
  // Init
  const lut = new Lut();
  const color = new THREE.Color();

  const colorMap = new THREE.Mesh(
    new THREE.BufferGeometry(),
    new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      vertexColors: true,
    })
  );

  // Update
  lut.setColorMap("rainbow");
  colorMap.renderOrder = -1; // to ensure that it always set behind the mesh
  colorMap.frustumCulled = false;

  // Events
  // When nodes, elements or values change, update the color map
  van.derive(() => {
    // Update geometry
    colorMap.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(nodes.val.flat(), 3)
    );
    // Triangulate: Three.js only supports triangle faces in indexed geometry.
    // Triangles (3-node) pass through. Quads (4-node) → 2 triangles: [n1,n2,n3] + [n1,n3,n4].
    const triIndices: number[] = [];
    for (const e of elements.val) {
      if (e.length === 3) {
        triIndices.push(e[0], e[1], e[2]);
      } else if (e.length === 4) {
        triIndices.push(e[0], e[1], e[2]);  // triangle 1
        triIndices.push(e[0], e[2], e[3]);  // triangle 2
      }
      // skip 2-node (frame) elements
    }
    colorMap.geometry.setIndex(
      new THREE.Uint32BufferAttribute(triIndices, 1) // Uint32 for meshes > 65535 nodes
    );

    colorMap.geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(nodes.val.map(() => [0, 0, 0]).flat(), 3)
    );

    // Update colors — ignorar NaN (nodos sin dato) al calcular min/max
    const validValues = values.val.filter((v) => Number.isFinite(v));
    let vMax: number;
    let vMin: number;
    // Si el ejemplo definió override (ej. zapata: [0, 1.5×q_adm]), usar ESE rango fijo.
    // Al variar cargas, el color cambia visiblemente contra esa referencia.
    const rng = fixedColorMapRange.val;
    if (rng) {
      vMin = rng[0];
      vMax = rng[1];
    } else {
      vMax = validValues.length ? Math.max(...validValues) : 1;
      vMin = validValues.length ? Math.min(...validValues) : 0;
      if (vMin >= 0 && vMax > 0) vMin = 0;
    }
    if (vMax === vMin) {
      const eps = Math.max(Math.abs(vMax) * 1e-6, 1e-9);
      vMax += eps;
      vMin -= eps;
    }
    // Three.js Lut requiere minV < maxV (hace Math.max/Math.min clamping).
    // Si el usuario pidió rango invertido (ej. zapata: [0, -q_adm]), swap y refleja la lectura:
    //   v_lookup = minActual + maxActual − v  (invierte el mapeo azul↔rojo)
    // Así: v = -q_adm → v_lookup = 0 → alpha = 0 → blue clamped... NO — invertimos el sentido.
    // Hacemos: v_lookup = maxActual - (v - minActual). Para [0,-20] con v=-20:
    //   minActual=-20, maxActual=0, v_lookup = 0 - (-20 - (-20)) = 0 − 0 = 0 → blue. MAL.
    // Correcto: SIN invertir — solo swap + LEER directo. Para v=-20 con minActual=-20, maxActual=0:
    //   alpha = (-20 − (-20)) / (0 − (-20)) = 0 → blue. Queremos RED aquí.
    // Solución: tras swap, invertir color = lookup(maxActual + minActual − v).
    //   v=-20: lookup(0 + -20 − (-20)) = lookup(0) → alpha=1 → red ✓
    //   v=0:   lookup(0 + -20 − 0) = lookup(-20) → alpha=0 → blue ✓
    const userInverted = (rng && rng[0] > rng[1]);
    const minActual = Math.min(vMin, vMax);
    const maxActual = Math.max(vMin, vMax);
    lut.setMin(minActual);
    lut.setMax(maxActual);

    for (let i = 0; i < values.val.length; i++) {
      const v = values.val[i];
      if (!Number.isFinite(v)) {
        colorMap.geometry.attributes.color.setXYZ(i, 0.3, 0.3, 0.3);
        continue;
      }
      // Si rango fue invertido por el usuario (ej. presión negativa), reflejar para mantener semántica
      const vLookup = userInverted ? (maxActual + minActual - v) : v;
      const lutColor = lut.getColor(vLookup) ?? new THREE.Color(0, 0, 0);
      color.copy(lutColor).convertSRGBToLinear();
      color.multiplyScalar(0.6);
      colorMap.geometry.attributes.color.setXYZ(i, color.r, color.g, color.b);
    }
  });

  return colorMap;
}
