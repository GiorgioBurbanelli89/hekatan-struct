import * as THREE from "three";
import van, { State } from "vanjs-core";
import { Mesh, Element, Node } from "hekatan-fem";
import { Settings } from "../settings/getSettings";
import { getTheme, onThemeChange } from "../../theme";

// Colores por tipo (activos cuando settings.colorByType=true)
// Pensados para alto contraste sobre fondo oscuro Y claro.
const COLOR_COLUMN  = new THREE.Color(0xFF8800);  // naranja — frames verticales
const COLOR_BEAM    = new THREE.Color(0x00CCCC);  // cyan — frames horizontales
const COLOR_ZAPATA  = new THREE.Color(0x00CC44);  // verde — shells de cimentación (z≤0)
const COLOR_LOSA    = new THREE.Color(0x3388FF);  // azul — shells de losa (z>0)
const COLOR_TRI     = new THREE.Color(0xFFCC00);  // amarillo — elementos triangulares

// Clasificación por geometría
function isVerticalFrame(n1: Node, n2: Node): boolean {
  const dx = Math.abs(n2[0] - n1[0]);
  const dy = Math.abs(n2[1] - n1[1]);
  const dz = Math.abs(n2[2] - n1[2]);
  return (dz > dx && dz > dy) || (dy > dx && dy > dz);
}
function isVerticalQ4(n0: Node, n1: Node, n2: Node, n3: Node): boolean {
  const v01 = [n1[0]-n0[0], n1[1]-n0[1], n1[2]-n0[2]];
  const v03 = [n3[0]-n0[0], n3[1]-n0[1], n3[2]-n0[2]];
  const nx = v01[1]*v03[2] - v01[2]*v03[1];
  const ny = v01[2]*v03[0] - v01[0]*v03[2];
  const nz = v01[0]*v03[1] - v01[1]*v03[0];
  const len = Math.sqrt(nx*nx + ny*ny + nz*nz);
  if (len < 1e-12) return false;
  return Math.abs(nz / len) < 0.5;
}
function isFooting(zAvg: number): boolean {
  // Cimentación: shell con centro a z ≤ 0 (o muy cerca). Convención Hekatan:
  // los slabs de zapatas se sitúan en z=0 o por debajo (pedestales subiendo).
  // Tolerancia ε para tratar shells exactamente en z=0 (zapatas planas) como
  // cimentación.
  return zAvg <= 1e-3;
}

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
    new THREE.LineBasicMaterial({ color: t.elementLine, vertexColors: false })
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
  // Marcar para que setupShellHoverTooltip filtre SOLO esto y no cilindros de
  // frames (que tienen muchos vertices y pueden engañar al raycaster).
  shellMesh.userData.isShellArea = true;
  shellMesh.name = "__hekatan_shell_area";
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

  // on nodes, elements, deformedShape, y todos los toggles de tipo → update
  van.derive(() => {
    settings.deformedShape.val;
    settings.elemColumns.val;
    settings.elemBeams.val;
    settings.elemFrames?.val;
    settings.elemZapatas?.val;
    settings.elemLosas?.val;
    settings.colorByType?.val;

    if (!settings.elements.val) return;

    const showFrames  = settings.elemFrames  ? settings.elemFrames.rawVal  : true;
    const showCols    = settings.elemColumns.rawVal;
    const showBeams   = settings.elemBeams.rawVal;
    const showZapatas = settings.elemZapatas ? settings.elemZapatas.rawVal : true;
    const showLosas   = settings.elemLosas   ? settings.elemLosas.rawVal   : true;
    const colorByType = settings.colorByType ? settings.colorByType.rawVal : false;
    const nodes = derivedNodes.val;
    const elems = mesh.elements?.val || [];

    // Helper: para cada elemento, decide si se muestra según los toggles.
    const showElement = (e: Element): boolean => {
      if (e.length === 2) {
        // Frame: filtrar por toggle padre Frames + sub-toggle Col/Beam
        if (!showFrames) return false;
        const n1 = nodes[e[0]], n2 = nodes[e[1]];
        if (!n1 || !n2) return true;
        const isCol = isVerticalFrame(n1, n2);
        return isCol ? showCols : showBeams;
      }
      if (e.length === 4) {
        // Q4 shell: filtrar por Zapata (z≤0) vs Losa (z>0)
        const ns = e.map(i => nodes[i]).filter(Boolean) as Node[];
        if (ns.length < 4) return true;
        const zAvg = (ns[0][2] + ns[1][2] + ns[2][2] + ns[3][2]) / 4;
        return isFooting(zAvg) ? showZapatas : showLosas;
      }
      if (e.length === 3) {
        // Triangle (CST): tratar como losa o zapata según z
        const ns = e.map(i => nodes[i]).filter(Boolean) as Node[];
        if (ns.length < 3) return true;
        const zAvg = (ns[0][2] + ns[1][2] + ns[2][2]) / 3;
        return isFooting(zAvg) ? showZapatas : showLosas;
      }
      return true;
    };

    // Wireframe buffer + colores por edge (cuando colorByType=ON)
    const wireVerts: number[] = [];
    const wireCols: number[] = [];
    for (const e of elems) {
      if (!showElement(e)) continue;
      let edgeColor: THREE.Color | null = null;
      if (colorByType) {
        if (e.length === 2) {
          const n1 = nodes[e[0]], n2 = nodes[e[1]];
          if (n1 && n2) edgeColor = isVerticalFrame(n1, n2) ? COLOR_COLUMN : COLOR_BEAM;
        } else if (e.length === 4) {
          const ns = e.map(i => nodes[i]).filter(Boolean) as Node[];
          if (ns.length === 4) {
            const zAvg = (ns[0][2] + ns[1][2] + ns[2][2] + ns[3][2]) / 4;
            edgeColor = isFooting(zAvg) ? COLOR_ZAPATA : COLOR_LOSA;
          }
        } else if (e.length === 3) {
          edgeColor = COLOR_TRI;
        }
      }
      for (const edge of elementToEdges(e)) {
        const a = nodes[edge[0]], b = nodes[edge[1]];
        if (!a || !b) continue;
        wireVerts.push(...a, ...b);
        if (colorByType && edgeColor) {
          wireCols.push(edgeColor.r, edgeColor.g, edgeColor.b);
          wireCols.push(edgeColor.r, edgeColor.g, edgeColor.b);
        }
      }
    }
    lines.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(wireVerts, 3)
    );
    if (colorByType && wireCols.length === wireVerts.length) {
      lines.geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(wireCols, 3)
      );
      (lines.material as THREE.LineBasicMaterial).vertexColors = true;
      (lines.material as THREE.LineBasicMaterial).needsUpdate = true;
    } else {
      lines.geometry.deleteAttribute("color");
      (lines.material as THREE.LineBasicMaterial).vertexColors = false;
      (lines.material as THREE.LineBasicMaterial).needsUpdate = true;
    }

    // Solid shell faces (triangulate Q4 y CST elements) — solo elementos
    // que pasan el filtro de tipo (Zapata/Losa).
    const faceVerts: number[] = [];
    const faceColors: number[] = [];

    for (const e of elems) {
      if (!showElement(e)) continue;
      if (e.length === 3) {
        const [a, b, c] = e;
        if (nodes[a] && nodes[b] && nodes[c]) {
          faceVerts.push(...nodes[a], ...nodes[b], ...nodes[c]);
          const col = colorByType ? COLOR_TRI : triColor;
          for (let v = 0; v < 3; v++) faceColors.push(col.r, col.g, col.b);
        }
      } else if (e.length === 4) {
        const [a, b, c, d] = e;
        if (nodes[a] && nodes[b] && nodes[c] && nodes[d]) {
          let col: THREE.Color;
          if (colorByType) {
            const zAvg = (nodes[a][2] + nodes[b][2] + nodes[c][2] + nodes[d][2]) / 4;
            col = isFooting(zAvg) ? COLOR_ZAPATA : COLOR_LOSA;
          } else {
            col = isVerticalQ4(nodes[a], nodes[b], nodes[c], nodes[d]) ? wallColor : slabColor;
          }
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
