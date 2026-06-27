import * as THREE from "three";
import { Node, Element } from "hekatan-fem";

import { Lut } from "three/addons/math/Lut.js";
import van, { State } from "vanjs-core";
import { fixedColorMapRange } from "../viewer/getViewer";

// CSI contour colormap — el MISMO en ETABS, SAFE y SAP2000 (confirmado con la leyenda
// real de ETABS: F11 va de magenta(−4.00, extremo negativo) a azul(+1.20)). 14 bandas:
//   t=0 = MAGENTA (extremo / máx compresión) → rosa → rojo → naranja → amarillo → verde
//   → cian → azul → azul oscuro (t=1, mín). Para presión (rango invertido) t=0 = máx
//   compresión = magenta, igual que SAFE/ETABS. (El magenta SÍ es del colormap CSI; el
//   exceso de magenta en un ejemplo = rango de colormap mal ajustado, no la paleta.)
const SAP2000_PALETTE: [number, number, number, number][] = [
  [0.000, 255,   0, 255],  // magenta (extremo / máx compresión)
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
  [1.000,   0,   0, 180],  // azul oscuro (mín compresión)
];

// Paletas seleccionables. "csi" = la de SAFE/ETABS (magenta→azul, el colormap CSI real).
// Las demás son alternativas perceptuales/clásicas para quien prefiera.
const PALETTES: Record<string, [number, number, number, number][]> = {
  csi: SAP2000_PALETTE,                                  // SAFE · ETABS (magenta→azul)
  jet_r: [                                               // rojo(máx)→azul(mín), sin magenta
    [0.0, 200, 0, 0], [0.15, 255, 80, 0], [0.32, 255, 200, 0], [0.48, 180, 255, 0],
    [0.6, 0, 230, 90], [0.74, 0, 220, 230], [0.88, 0, 110, 255], [1.0, 0, 0, 180]],
  jet: [                                                 // azul(mín)→rojo(máx)
    [0.0, 0, 0, 180], [0.12, 0, 110, 255], [0.26, 0, 220, 230], [0.4, 0, 230, 90],
    [0.52, 180, 255, 0], [0.68, 255, 200, 0], [0.85, 255, 80, 0], [1.0, 200, 0, 0]],
  viridis: [
    [0.0, 68, 1, 84], [0.25, 59, 82, 139], [0.5, 33, 145, 140], [0.75, 94, 201, 98], [1.0, 253, 231, 37]],
};
/** Paleta activa (seleccionable desde Settings). Por defecto la CSI de SAFE/ETABS. */
export const colorMapPalette: State<string> = van.state("csi");

/** Lookup en la palette ACTIVA interpolando linealmente entre stops. */
function sap2000Color(t: number): [number, number, number] {
  t = Math.max(0, Math.min(1, t));
  const pal = PALETTES[colorMapPalette.val] ?? SAP2000_PALETTE;
  for (let i = 0; i < pal.length - 1; i++) {
    const [t0, r0, g0, b0] = pal[i];
    const [t1, r1, g1, b1] = pal[i + 1];
    if (t <= t1) {
      const f = (t - t0) / (t1 - t0);
      return [r0 + (r1 - r0) * f, g0 + (g1 - g0) * f, b0 + (b1 - b0) * f];
    }
  }
  const last = pal[pal.length - 1];
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

  // Reconstruir la textura del colormap cuando el usuario cambia la paleta en Settings.
  van.derive(() => {
    void colorMapPalette.val;  // dependencia
    const old = material.uniforms.cmap.value as THREE.DataTexture;
    material.uniforms.cmap.value = buildSap2000Texture();
    old?.dispose?.();
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
