/**
 * frameColorMap.ts — Renders frame elements as colored cylinders using
 * per-vertex colors based on analysis results (normals, shears, bendings, etc.)
 * Similar to shell contour colors but for 2-node frame elements.
 */
import * as THREE from "three";
import van, { State } from "vanjs-core";
import { Mesh, Node, AnalyzeOutputs } from "awatif-fem";
import { Settings } from "../settings/getSettings";
import { Lut } from "three/addons/math/Lut.js";

const TUBE_SEGMENTS = 6; // circumferential
const LENGTH_SEGMENTS = 10; // along element axis for color interpolation
const TUBE_RADIUS_FRACTION = 0.012; // fraction of model extent

/** Extract the contour result type from settings (e.g. "contour:normals" → "normals") */
function getContourKey(val: string): string | null {
  if (!val.startsWith("contour:")) return null;
  return val.slice(8); // "contour:".length = 8
}

/** Get [start, end] values for an element from AnalyzeOutputs */
function getElementValues(
  key: string,
  elementIndex: number,
  analyzeOutputs: AnalyzeOutputs | undefined,
  deformOutputs: any
): [number, number] | null {
  if (!analyzeOutputs && !deformOutputs) return null;

  // Frame internal forces: normals, shearsY, shearsZ, torsions, bendingsY, bendingsZ
  const frameKeys = ["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"];
  if (frameKeys.includes(key) && analyzeOutputs) {
    const map = (analyzeOutputs as any)[key] as Map<number, [number, number]> | undefined;
    if (map && map.has(elementIndex)) {
      return map.get(elementIndex)!;
    }
  }
  return null;
}

export function frameColorMap(
  mesh: Mesh,
  settings: Settings,
  derivedNodes: State<Node[]>,
  derivedDisplayScale?: State<number>
): THREE.Group {
  const group = new THREE.Group();
  const lut = new Lut();
  lut.setColorMap("rainbow");
  const tmpColor = new THREE.Color();

  // Legend state — exposed for external legend component
  const valuesState: State<number[]> = van.state([]);

  van.derive(() => {
    settings.deformedShape.val; // trigger
    const nodes = derivedNodes.val;
    const elements = mesh.elements?.val ?? [];
    const contourKey = getContourKey(settings.frameResults.val);

    // Clear previous
    group.children.forEach((c: any) => {
      if (c.geometry) c.geometry.dispose();
      if (c.material) c.material.dispose();
    });
    group.clear();

    if (!contourKey || elements.length === 0 || nodes.length === 0) {
      valuesState.val = [];
      return;
    }

    const analyzeOutputs = mesh.analyzeOutputs?.val;
    const deformOutputs = mesh.deformOutputs?.val;

    // Collect all values for min/max
    const allValues: number[] = [];
    const elementData: { idx: number; vals: [number, number] }[] = [];

    for (let i = 0; i < elements.length; i++) {
      const e = elements[i];
      if (e.length !== 2) continue; // only frames
      const vals = getElementValues(contourKey, i, analyzeOutputs, deformOutputs);
      if (!vals) continue;
      allValues.push(vals[0], vals[1]);
      elementData.push({ idx: i, vals });
    }

    if (allValues.length === 0) {
      valuesState.val = [];
      return;
    }

    const vMin = Math.min(...allValues);
    const vMax = Math.max(...allValues);
    lut.setMin(vMin);
    lut.setMax(vMax);
    valuesState.val = allValues;

    // Compute model extent for tube radius
    const mins = [Infinity, Infinity, Infinity];
    const maxs = [-Infinity, -Infinity, -Infinity];
    for (const n of nodes) {
      for (let j = 0; j < 3; j++) {
        mins[j] = Math.min(mins[j], n[j]);
        maxs[j] = Math.max(maxs[j], n[j]);
      }
    }
    const extent = Math.max(maxs[0] - mins[0], maxs[1] - mins[1], maxs[2] - mins[2], 1);
    const radius = extent * TUBE_RADIUS_FRACTION;

    // Build one merged geometry for all frame elements
    const positions: number[] = [];
    const colors: number[] = [];
    const indices: number[] = [];
    let vertexOffset = 0;

    for (const { idx, vals } of elementData) {
      const e = elements[idx];
      const n1 = nodes[e[0]];
      const n2 = nodes[e[1]];
      if (!n1 || !n2) continue;

      const dir = new THREE.Vector3(n2[0] - n1[0], n2[1] - n1[1], n2[2] - n1[2]);
      const len = dir.length();
      if (len < 1e-10) continue;
      dir.normalize();

      // Find perpendicular vectors
      const up = Math.abs(dir.y) < 0.99
        ? new THREE.Vector3(0, 1, 0)
        : new THREE.Vector3(1, 0, 0);
      const perp1 = new THREE.Vector3().crossVectors(dir, up).normalize();
      const perp2 = new THREE.Vector3().crossVectors(dir, perp1).normalize();

      const nLen = LENGTH_SEGMENTS + 1; // vertices along length
      const nCirc = TUBE_SEGMENTS;

      // Generate tube vertices
      for (let li = 0; li < nLen; li++) {
        const t = li / LENGTH_SEGMENTS;
        const px = n1[0] + dir.x * len * t;
        const py = n1[1] + dir.y * len * t;
        const pz = n1[2] + dir.z * len * t;

        // Interpolate value
        const val = vals[0] + (vals[1] - vals[0]) * t;
        const lutColor = lut.getColor(val) ?? new THREE.Color(0, 0, 0);
        tmpColor.copy(lutColor).convertSRGBToLinear();

        for (let ci = 0; ci < nCirc; ci++) {
          const angle = (ci / nCirc) * Math.PI * 2;
          const cos = Math.cos(angle);
          const sin = Math.sin(angle);

          positions.push(
            px + (perp1.x * cos + perp2.x * sin) * radius,
            py + (perp1.y * cos + perp2.y * sin) * radius,
            pz + (perp1.z * cos + perp2.z * sin) * radius
          );
          colors.push(tmpColor.r, tmpColor.g, tmpColor.b);
        }
      }

      // Generate tube faces (triangles)
      for (let li = 0; li < LENGTH_SEGMENTS; li++) {
        for (let ci = 0; ci < nCirc; ci++) {
          const ciNext = (ci + 1) % nCirc;
          const a = vertexOffset + li * nCirc + ci;
          const b = vertexOffset + li * nCirc + ciNext;
          const c = vertexOffset + (li + 1) * nCirc + ci;
          const d = vertexOffset + (li + 1) * nCirc + ciNext;

          indices.push(a, b, d);
          indices.push(a, d, c);
        }
      }

      vertexOffset += nLen * nCirc;
    }

    if (positions.length === 0) return;

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    const material = new THREE.MeshBasicMaterial({
      vertexColors: true,
      side: THREE.DoubleSide,
    });

    const tubeMesh = new THREE.Mesh(geometry, material);
    tubeMesh.frustumCulled = false;
    group.add(tubeMesh);
  });

  // Store values state for legend access
  (group as any).__colorMapValues = valuesState;

  return group;
}
