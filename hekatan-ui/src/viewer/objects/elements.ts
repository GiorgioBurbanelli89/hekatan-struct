import * as THREE from "three";
import van, { State } from "vanjs-core";
import { Mesh, Element, Node } from "hekatan-fem";
import { Settings } from "../settings/getSettings";
import { getTheme, onThemeChange } from "../../theme";

export function elements(
  mesh: Mesh,
  settings: Settings,
  derivedNodes: State<Node[]>
): THREE.Group {
  const t = getTheme();
  const group = new THREE.Group();

  // Wireframe lines (delimitación visual entre sólidos H8 / áreas Q4)
  const lines = new THREE.LineSegments(
    new THREE.BufferGeometry(),
    new THREE.LineBasicMaterial({ color: t.elementLine })
  );
  onThemeChange((_n, c) => { lines.material.color.setHex(c.elementLine); });
  lines.frustumCulled = false;
  // Render order alto + sin polygon offset → líneas siempre encima de cualquier
  // fill (incluyendo colormap) sin Z-fighting (las líneas son 1D, no compiten
  // por píxeles con triángulos rellenos).
  lines.renderOrder = 2;
  group.add(lines);

  // Solid faces for shell elements (Q4 = 4 nodes, CST = 3 nodes)
  // Uses vertex colors to differentiate walls (vertical) vs slabs (horizontal)
  const shellMat = new THREE.MeshBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: t.shellOpacity,
    side: THREE.DoubleSide,
    depthWrite: false,
    // ── Polygon offset POSITIVO: empuja el shellMesh LEVÍSIMAMENTE hacia
    // ATRÁS en profundidad, evitando Z-fighting con el colormap (que ocupa
    // los mismos planos Q4). Patrón estándar Three.js: fill atrás, wireframe
    // adelante. Esto elimina los puntitos pixelados que aparecían cuando
    // colormap y shellMesh peleaban por el z-buffer.
    polygonOffset: true,
    polygonOffsetFactor: 1.0,
    polygonOffsetUnits: 1.0,
  });
  const shellMesh = new THREE.Mesh(new THREE.BufferGeometry(), shellMat);
  shellMesh.frustumCulled = false;
  group.add(shellMesh);

  // Colors from theme (mutable — updated on theme change)
  let wallColor = new THREE.Color(t.shellWall);
  let slabColor = new THREE.Color(t.shellSlab);
  let triColor  = new THREE.Color(t.shellTri);

  // React to theme changes
  onThemeChange((_n, c) => {
    wallColor = new THREE.Color(c.shellWall);
    slabColor = new THREE.Color(c.shellSlab);
    triColor  = new THREE.Color(c.shellTri);
    shellMat.opacity = c.shellOpacity;
    shellMat.needsUpdate = true;
  });

  // Helper: detect vertical (column) element
  function isVertical(n1: Node, n2: Node): boolean {
    const dx = Math.abs(n2[0] - n1[0]);
    const dy = Math.abs(n2[1] - n1[1]);
    const dz = Math.abs(n2[2] - n1[2]);
    return (dz > dx && dz > dy) || (dy > dx && dy > dz);
  }

  // on nodes, elements, and deformedShape update visuals
  van.derive(() => {
    settings.deformedShape.val;
    settings.elemColumns.val;
    settings.elemBeams.val;

    if (!settings.elements.val) return;

    const showCols = settings.elemColumns.rawVal;
    const showBeams = settings.elemBeams.rawVal;
    const nodes = derivedNodes.val;
    const elems = mesh.elements?.val || [];

    // Wireframe buffer
    const buffer = elems
      .filter((e) => {
        if (e.length !== 2) return true;
        const n1 = nodes[e[0]], n2 = nodes[e[1]];
        if (!n1 || !n2) return true;
        const isCol = isVertical(n1, n2);
        if (isCol && !showCols) return false;
        if (!isCol && !showBeams) return false;
        return true;
      })
      .map((e) =>
        elementToEdges(e)
          .map((edge) => [
            ...nodes[edge[0]],
            ...nodes[edge[1]],
          ])
          .flat()
      )
      .flat();

    lines.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(buffer, 3)
    );

    // Solid shell faces (triangulate Q4 and CST elements)
    // With per-vertex colors: walls=brown, slabs=blue, triangles=green
    const faceVerts: number[] = [];
    const faceColors: number[] = [];

    // Helper: detect if a Q4 element is vertical (wall) or horizontal (slab)
    function isVerticalQ4(n0: Node, n1: Node, n2: Node, n3: Node): boolean {
      // Compute normal of the quad
      const v01 = [n1[0]-n0[0], n1[1]-n0[1], n1[2]-n0[2]];
      const v03 = [n3[0]-n0[0], n3[1]-n0[1], n3[2]-n0[2]];
      // Cross product → normal
      const nx = v01[1]*v03[2] - v01[2]*v03[1];
      const ny = v01[2]*v03[0] - v01[0]*v03[2];
      const nz = v01[0]*v03[1] - v01[1]*v03[0];
      const len = Math.sqrt(nx*nx + ny*ny + nz*nz);
      if (len < 1e-12) return false;
      // If normal is mostly horizontal (nz small) → wall (vertical surface)
      return Math.abs(nz / len) < 0.5;
    }

    for (const e of elems) {
      if (e.length === 3) {
        const [a, b, c] = e;
        if (nodes[a] && nodes[b] && nodes[c]) {
          faceVerts.push(...nodes[a], ...nodes[b], ...nodes[c]);
          for (let v = 0; v < 3; v++) faceColors.push(triColor.r, triColor.g, triColor.b);
        }
      } else if (e.length === 4) {
        const [a, b, c, d] = e;
        if (nodes[a] && nodes[b] && nodes[c] && nodes[d]) {
          const col = isVerticalQ4(nodes[a], nodes[b], nodes[c], nodes[d]) ? wallColor : slabColor;
          faceVerts.push(...nodes[a], ...nodes[b], ...nodes[c]);
          faceVerts.push(...nodes[a], ...nodes[c], ...nodes[d]);
          for (let v = 0; v < 6; v++) faceColors.push(col.r, col.g, col.b);
        }
      }
    }
    if (faceVerts.length > 0) {
      shellMesh.geometry.dispose();
      shellMesh.geometry = new THREE.BufferGeometry();
      shellMesh.geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(faceVerts, 3)
      );
      shellMesh.geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(faceColors, 3)
      );
      shellMesh.geometry.computeVertexNormals();
      // Visibilidad final = hay geometria AND toggle faces ON
      shellMesh.visible = settings.faces ? settings.faces.rawVal : true;
    } else {
      shellMesh.visible = false;
    }
  });

  // on settings.elements update visibility
  van.derive(() => {
    group.visible = settings.elements.val;
  });

  // ── Toggle independiente para wireframe edges (delim. sólidos/áreas) ──
  // Permite ver el colormap "limpio" sin las líneas de delimitación, o ver
  // sólo las líneas sin el shellMesh fill, etc.
  van.derive(() => {
    if (settings.edges) lines.visible = settings.edges.val;
  });

  // ── Toggle independiente para Caras (shellMesh fill) ──
  // Cuando faces=OFF, las superficies coloreadas se ocultan pero edges/nodos
  // siguen visibles. Util para ver lineas frame detras de un shell.
  // CRITICO: leemos `.val` PRIMERO (registra dependencia reactiva) y solo
  // despues chequeamos si hay geometria. Sino la derive nunca re-corre.
  van.derive(() => {
    if (!settings.faces) return;
    const facesOn = settings.faces.val;  // <- registra dependencia reactiva
    if (shellMesh.geometry.attributes.position) {
      shellMesh.visible = facesOn;
    } else if (!facesOn) {
      // Aunque no haya geometria todavia, marcar invisible para cuando llegue
      shellMesh.visible = false;
    }
  });

  return group;
}

// Utils
function elementToEdges(element: Element): Element[] {
  if (element.length === 2) return [element];

  const edges: [number, number][] = [];

  for (let i = 0; i < element.length; i++) {
    edges.push([element[i], element[(i + 1) % element.length]]);
  }

  return edges;
}
