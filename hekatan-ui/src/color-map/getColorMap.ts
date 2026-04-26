import * as THREE from "three";
import { Node, Element } from "hekatan-fem";

import { Lut } from "three/addons/math/Lut.js";
import van, { State } from "vanjs-core";
import { fixedColorMapRange } from "../viewer/getViewer";

// SAP2000 default contour colormap — replica EXACTA del "Display Deformed Shape →
// Contours" de SAP2000/CSiBridge/ETABS. 14 stops del clásico industrial:
//   min(t=0)=magenta → rosa → rojo → naranja → amarillo → verde → cian → azul oscuro(t=1)
// Adaptado de calcpad-viz/src/utils/colormap.ts (Calcpad-Symbolic).
const SAP2000_PALETTE: [number, number, number, number][] = [
  [0.000, 255,   0, 255],  // magenta (min)
  [0.077, 255,   0, 180],  // rosa
  [0.154, 255,   0,   0],  // rojo
  [0.231, 255,  80,   0],  // rojo-naranja
  [0.308, 255, 140,   0],  // naranja
  [0.385, 255, 190,   0],  // amarillo-naranja
  [0.462, 255, 255,   0],  // amarillo
  [0.538, 180, 255,   0],  // amarillo-verde
  [0.615,   0, 255,   0],  // verde
  [0.692,   0, 255, 180],  // verde-cian
  [0.769,   0, 255, 255],  // cian
  [0.846,   0, 180, 255],  // cian-azul
  [0.923,   0,   0, 255],  // azul
  [1.000,   0,   0, 180],  // azul oscuro (max)
];

/** Lookup en la palette interpolando linealmente entre stops. */
function sap2000Color(t: number): [number, number, number] {
  t = Math.max(0, Math.min(1, t));
  for (let i = 0; i < SAP2000_PALETTE.length - 1; i++) {
    const [t0, r0, g0, b0] = SAP2000_PALETTE[i];
    const [t1, r1, g1, b1] = SAP2000_PALETTE[i + 1];
    if (t <= t1) {
      const f = (t - t0) / (t1 - t0);
      return [r0 + (r1 - r0) * f, g0 + (g1 - g0) * f, b0 + (b1 - b0) * f];
    }
  }
  const last = SAP2000_PALETTE[SAP2000_PALETTE.length - 1];
  return [last[1], last[2], last[3]];
}

/** Construye textura 1D 256-pixel del colormap SAP2000 para el shader. */
function buildSap2000Texture(): THREE.DataTexture {
  const N = 256;
  const data = new Uint8Array(N * 4);
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    const [r, g, b] = sap2000Color(t);
    data[i * 4 + 0] = r;
    data[i * 4 + 1] = g;
    data[i * 4 + 2] = b;
    data[i * 4 + 3] = 255;
  }
  const tex = new THREE.DataTexture(data, N, 1, THREE.RGBAFormat);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;
  return tex;
}

export function getColorMap(
  nodes: State<Node[]>,
  elements: State<Element[]>,
  values: State<number[]>
): THREE.Mesh {
  // Fallback Lut (no usado pero conservado para compatibilidad)
  const lut = new Lut();
  void lut;

  // ── ShaderMaterial estilo Calcpad: interpolación POR VALOR + lookup en
  // textura 1D del colormap. Esto da bandas NÍTIDAS (no gradiente RGB feo).
  const cmapTex = buildSap2000Texture();
  const material = new THREE.ShaderMaterial({
    uniforms: {
      cmap: { value: cmapTex },
      ambient: { value: 0.95 },
    },
    vertexShader: `
      attribute float scalar;
      varying float vScalar;
      void main() {
        vScalar = scalar;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D cmap;
      uniform float ambient;
      varying float vScalar;
      void main() {
        // Si NaN (vScalar < -0.5 sentinel), gris neutro
        if (vScalar < -0.5) {
          gl_FragColor = vec4(0.5, 0.5, 0.5, 1.0);
          return;
        }
        vec3 color = texture2D(cmap, vec2(clamp(vScalar, 0.0, 1.0), 0.5)).rgb;
        gl_FragColor = vec4(color * ambient, 1.0);
      }
    `,
    side: THREE.DoubleSide,
    transparent: false,
  });

  const colorMap = new THREE.Mesh(new THREE.BufferGeometry(), material);
  colorMap.renderOrder = -1;
  colorMap.frustumCulled = false;

  // Update — al cambiar nodes/elements/values, regenerar geometría + scalar attribute
  van.derive(() => {
    // Update geometry
    colorMap.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(nodes.val.flat(), 3)
    );
    // Triangulate Q4/Q3 → triangles
    const triIndices: number[] = [];
    for (const e of elements.val) {
      if (e.length === 3) {
        triIndices.push(e[0], e[1], e[2]);
      } else if (e.length === 4) {
        triIndices.push(e[0], e[1], e[2]);
        triIndices.push(e[0], e[2], e[3]);
      }
    }
    colorMap.geometry.setIndex(
      new THREE.Uint32BufferAttribute(triIndices, 1)
    );

    // Min/max ignorando NaN
    const validValues = values.val.filter((v) => Number.isFinite(v));
    let vMax: number;
    let vMin: number;
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
    const userInverted = (rng && rng[0] > rng[1]);
    const minActual = Math.min(vMin, vMax);
    const maxActual = Math.max(vMin, vMax);
    const range = maxActual - minActual;

    // Scalar attribute por vértice (en [0, 1], o -1 si NaN)
    const scalars = new Float32Array(values.val.length);
    for (let i = 0; i < values.val.length; i++) {
      const v = values.val[i];
      if (!Number.isFinite(v)) {
        scalars[i] = -1; // sentinel NaN → gris neutro en shader
        continue;
      }
      const vLookup = userInverted ? (maxActual + minActual - v) : v;
      const t = (vLookup - minActual) / range;
      scalars[i] = Math.max(0, Math.min(1, t));
    }
    colorMap.geometry.setAttribute("scalar", new THREE.BufferAttribute(scalars, 1));
  });

  return colorMap;
}
