import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";
import path from "path";

export default defineConfig({
  server: {
    port: 4600,
    open: "workspace/index.html",
  },
  base: process.env.DEPLOY_BASE || "./", // to resolve assets
  root: "./src",
  resolve: {
    // Force single instance of vanjs-core (avoids symlink duplication)
    alias: [
      { find: /^vanjs-core$/, replacement: path.resolve(__dirname, "../node_modules/vanjs-core") },
    ],
    dedupe: ["vanjs-core", "three"],
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
      },
    },
  },
  plugins: [topLevelAwait()], // used by awatif-fem & awatif-mesh to load wasm at top level
});
