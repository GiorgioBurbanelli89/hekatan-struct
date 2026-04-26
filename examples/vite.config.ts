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
      { find: /^mathjs$/, replacement: path.resolve(__dirname, "../hekatan-fem/node_modules/mathjs") },
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
        "edificio-comparativa-fem": "src/edificio-comparativa-fem/index.html",
        "edificio-hormigon": "src/edificio-hormigon/index.html",
        "edificio-acero-v2": "src/edificio-acero-v2/index.html",
        "edificio-mixto": "src/edificio-mixto/index.html",
        "edificio-muros": "src/edificio-muros/index.html",
        "edificio-dual": "src/edificio-dual/index.html",
        "columna-cft": "src/columna-cft/index.html",
        "triangular-plate": "src/triangular-plate/index.html",
        "conexion-rbs": "src/conexion-rbs/index.html",
        "conexion-bfp": "src/conexion-bfp/index.html",
        "conexion-end-plate": "src/conexion-end-plate/index.html",
        "placa-base": "src/placa-base/index.html",
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
        // ── Iconic structures (extraídas de getCad3d.ts a awatif v2 pattern) ──
        "gateway-arch": "src/gateway-arch/index.html",
        "cable-stayed-bridge": "src/cable-stayed-bridge/index.html",
        "twisted-tower": "src/twisted-tower/index.html",
        "burj-khalifa": "src/burj-khalifa/index.html",
        "sydney-opera": "src/sydney-opera/index.html",
        "diagrid": "src/diagrid/index.html",
        "pergola": "src/pergola/index.html",
        // ── FEM demos Q4 (validación) ──
        "shear-wall-q4": "src/shear-wall-q4/index.html",
        "cantilever-beam-q4": "src/cantilever-beam-q4/index.html",
        "placa-cantilever-q4": "src/placa-cantilever-q4/index.html",
        // ── Geotécnico ──
        "slope-stability": "src/slope-stability/index.html",
        // ── Conexión placa base con columna H (CBFEM-style) ──
        "placa-base-h": "src/placa-base-h/index.html",
        // ── Detalle perno + orificio (concentración tensiones) ──
        "bolt-hole-detail": "src/bolt-hole-detail/index.html",
        // ── FEM 3D Sólido H8 (TS puro, validación CalculiX/CodeAster/FEniCS) ──
        "solid-cube-fem": "src/solid-cube-fem/index.html",
        // ── Viga doble T ASIMÉTRICA (patines sup/inf independientes) ──
        "viga-doble-t": "src/viga-doble-t/index.html",
        // ── Columna CFT MIXTA (HSS shells Q4 + concreto H8 sólidos) ──
        "columna-cft-h8": "src/columna-cft-h8/index.html",
        // ── Conexión viga-columna con diafragma (Cervantes / CIDECT México) ──
        "conexion-diafragma-cft": "src/conexion-diafragma-cft/index.html",
        // ── Placa base con columna HSS hueca + pernos de anclaje ──
        "placa-base-hueca": "src/placa-base-hueca/index.html",
        // ── Placa base con columna CFT + pernos de anclaje ──
        "placa-base-cft": "src/placa-base-cft/index.html",
        // ── Bulbo de presiones bajo carga rectangular (Serquen SF-70, hex8) ──
        "bulbo-presiones-suelo": "src/bulbo-presiones-suelo/index.html",
      },
    },
  },
  optimizeDeps: {
    exclude: ["hekatan-fem", "hekatan-mesh", "hekatan-ui"],
  },
  plugins: [topLevelAwait()], // used by hekatan-fem & hekatan-mesh to load wasm at top level
});
