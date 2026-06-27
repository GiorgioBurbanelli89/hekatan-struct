import * as THREE from "three";
import { Node, Element } from "hekatan-fem";

import { Lut } from "three/addons/math/Lut.js";
import van, { State } from "vanjs-core";
import { fixedColorMapRange } from "../viewer/getViewer";

// SAFE / CSI soil-pressure contour colormap — MUESTREADO de la leyenda real de SAFE
// (libro Guerra "Cimentaciones Sismo Resistentes utilizando SAFE", Soil Pressure Diagram
// Figura 180, p.128). Es un JET_r SIN magenta: el extremo (t=0) = ROJO → naranja →
// amarillo → verde → cian → AZUL (t=1). La paleta anterior (magenta→azul-oscuro) NO
// coincidía con SAFE; ésta replica el contorno real para que las cimentaciones se vean
// idénticas a SAFE. Convención: para presión (rango invertido), t=0 = MÁX compresión.
const SAP2000_PALETTE: [number, number, number, number][] = [
  [0.000, 222,  20,  55],  // rojo (extremo / máx compresión)
  [0.083, 248,  62,  42],  // rojo-naranja
  [0.166, 253, 112,  45],  // naranja
  [0.250, 254, 152,  46],  // naranja-amarillo
  [0.333, 248, 196,  50],  // amarillo-naranja
  [0.416, 236, 232,  48],  // amarillo
  [0.500, 200, 226,  22],  // amarillo-verde
  [0.583, 100, 212,  28],  // verde
  [0.666,   8, 202,  62],  // verde-cian
  [0.750,   0, 196, 150],  // cian-verde
  [0.833,   0, 188, 218],  // cian
  [0.916,   6, 158, 230],  // celeste
  [1.000,  10, 125, 205],  // azul (mín compresión)
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
  // Incluye chunks de Three.js para soporte de clipping planes (cortes X/Y/Z).
  const cmapTex = buildSap2000Texture();
  const material = new THREE.ShaderMaterial({
    uniforms: {
      cmap: { value: cmapTex },
      ambient: { value: 0.95 },
    },
    vertexShader: `
      #include <common>
      #include <clipping_planes_pars_vertex>
      attribute float scalar;
      varying float vScalar;
      void main() {
        vScalar = scalar;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <clipping_planes_vertex>
      }
    `,
    fragmentShader: `
      #include <common>
      #include <clipping_planes_pars_fragment>
      uniform sampler2D cmap;
      uniform float ambient;
      varying float vScalar;
      void main() {
        #include <clipping_planes_fragment>
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
    clipping: true,  // habilitar soporte de clipping planes en ShaderMaterial
    depthWrite: true,
    depthTest: true,
  });

  const colorMap = new THREE.Mesh(new THREE.BufferGeometry(), material);
  colorMap.renderOrder = -1;
  colorMap.frustumCulled = false;
  // Marcar como área shell con colormap para que setupShellHoverTooltip filtre
  // SOLO los Q4 reales (no cilindros de frames con userData.isFrameSection).
  colorMap.userData.isShellArea = true;
  colorMap.name = "__hekatan_shell_colormap";

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
