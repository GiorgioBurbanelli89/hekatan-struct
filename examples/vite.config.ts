import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";
import path from "path";

export default defineConfig({
  server: {
    port: 4600,
    open: "workspace/index.html",
  },
  // Resolve base path. Fix MSYS/Git-Bash path mangling: si DEPLOY_BASE fue
  // convertido a "C:/Program Files/Git/hekatan-struct/" (conversión POSIX→Windows
  // de la shell de Git Bash), lo restauramos al path que esperamos.
  // También soporta DEPLOY_BASE con doble slash inicial ("//hekatan-struct/")
  // que evita la conversión.
  base: (() => {
    let b = process.env.DEPLOY_BASE || "./";
    // 1) Quitar prefijo "C:/Program Files/Git" o similar (conversión MSYS)
    b = b.replace(/^[A-Z]:\/Program Files\/Git/i, "");
    // 2) Normalizar doble slash inicial ("//hekatan-struct/" → "/hekatan-struct/")
    b = b.replace(/^\/\//, "/");
    return b || "./";
  })(), // to resolve assets
  root: "./src",
  publicDir: path.resolve(__dirname, "public"),
  resolve: {
    // Force single instance of vanjs-core (avoids symlink duplication)
    alias: [
      { find: /^vanjs-core$/, replacement: path.resolve(__dirname, "../node_modules/vanjs-core") },
      { find: /^mathjs$/, replacement: path.resolve(__dirname, "../awatif-fem/node_modules/mathjs") },
    ],
    dedupe: ["vanjs-core", "three", "mathjs"],
    preserveSymlinks: false,
  },
  build: {
    outDir: "../../website/src/examples",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        "3d-structure": "src/3d-structure/index.html",
        "advanced-truss": "src/advanced-truss/index.html",
        beams: "src/beams/index.html",
        workspace: "src/workspace/index.html",
        curves: "src/curves/index.html",
        "1d-mesh": "src/1d-mesh/index.html",
        truss: "src/truss/index.html",
        tables: "src/tables/index.html",
        "2d-mesh": "src/2d-mesh/index.html",
        drawing: "src/drawing/index.html",
        report: "src/report/index.html",
        plate: "src/plate/index.html",
        building: "src/building/index.html",
        "slab-designer": "src/slab-designer/index.html",
        "color-map": "src/color-map/index.html",
        "cad-editor": "src/cad-editor/index.html",
        "axial-bar": "src/axial-bar/index.html",
        "plate-q4": "src/plate-q4/index.html",
        "plate-q4-report": "src/plate-q4/report.html",
        "fem-explained": "src/fem-explained/index.html",
        "zapata-viga-amarre": "src/zapata-viga-amarre/index.html",
        "zapata-aislada": "src/zapata-aislada/index.html",
        "zapata-aislada-validacion": "src/zapata-aislada-validacion/index.html",
        "edificio-con-losa": "src/edificio-con-losa/index.html",
        "edificio-con-muros": "src/edificio-con-muros/index.html",
        "plane": "src/plane/index.html",
        "membrana-csi": "src/membrana-csi/index.html",
        "edificio-aporticado": "src/edificio-aporticado/index.html",
        "edificio-hormigon": "src/edificio-hormigon/index.html",
        "edificio-acero-v2": "src/edificio-acero-v2/index.html",
        "edificio-mixto": "src/edificio-mixto/index.html",
        "edificio-muros": "src/edificio-muros/index.html",
        "edificio-dual": "src/edificio-dual/index.html",
        "columna-cft": "src/columna-cft/index.html",
        "triangular-plate": "src/triangular-plate/index.html",
        "truss-gen": "src/truss-gen/index.html",
        "barra-axial": "src/barra-axial/index.html",
        "portico-2d": "src/portico-2d/index.html",
        "tower-3d": "src/tower-3d/index.html",
        "galpon": "src/galpon/index.html",
        "edif-acero": "src/edif-acero/index.html",
        "mezanine": "src/mezanine/index.html",
        "plate-thin": "src/plate-thin/index.html",
        "plate-thick": "src/plate-thick/index.html",
        "membrana-pstress": "src/membrana-pstress/index.html",
        "shell-thin": "src/shell-thin/index.html",
        "shell-thick": "src/shell-thick/index.html",
      },
    },
  },
  optimizeDeps: {
    exclude: ["awatif-fem", "awatif-mesh", "awatif-ui"],
  },
  plugins: [topLevelAwait()], // used by awatif-fem & awatif-mesh to load wasm at top level
});
