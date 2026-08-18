# Hekatan Struct Lineal

**Structural FEM analysis platform that runs entirely in the browser.** No installation, no server — C++/Eigen solver compiled to WebAssembly, Three.js 3D visualization, reactive UI with VanJS + Tweakpane.

Hekatan Struct Lineal started as a fork of [awatif v2.0.0](https://github.com/madil4/awatif/tree/v2.0.0) by Mohamed Adil (thanks for the original UI framework and viewer, ~10% of the current codebase). Everything else — modal analysis, Winkler springs, native Q4 plane-stress solver, unified Tweakpane workspace, 25+ parametric examples, reactive unit system, modal animation, foundation workflows, CSI membrane, draggable panes, and more — was added for this project.

🌐 **Live:** [https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/)

Jump directly to any example with `?t=<id>` (122 examples total). The most relevant grouped by category:

**Plates & Shells**
- [`?t=plane`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=plane) — Plane Q4 cantilever wall (plane stress) w/ Wilson incompatible modes
- [`?t=plate-thin`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=plate-thin) — Kirchhoff thin plate (BFS Q4, 16-DOF)
- [`?t=plate-thick`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=plate-thick) — Mindlin-Reissner (MITC4)
- [`?t=plate-thick-validacion`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=plate-thick-validacion) — MITC4 validation vs SAP 2000
- [`?t=plate-q4`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=plate-q4) — Generic Q4 plate solver
- [`?t=triangular-plate`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=triangular-plate) — DKT triangular plate element
- [`?t=shell-thin`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=shell-thin) / [`?t=shell-thick`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=shell-thick) — Thin/Thick shell elements
- [`?t=layered-shell`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=layered-shell) — Composite layered shell
- [`?t=membrana-csi`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=membrana-csi) — CSI Shell-Membrane with drilling DOF
- [`?t=membrana-pstress`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=membrana-pstress) — Plane-stress membrane
- [`?t=shear-wall-q4`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=shear-wall-q4) — Shear wall meshed with Q4
- [`?t=cantilever-beam-q4`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=cantilever-beam-q4) / [`?t=placa-cantilever-q4`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=placa-cantilever-q4) — Cantilever benchmarks
- [`?t=membrana`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=membrana) — Membrane (plane stress) — Hekatan vs SAP -0.23%
- [`?t=plate-with-beams`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=plate-with-beams) — Plate + perimeter beams (vs SAP benchmark)
- [`?t=slab-beams-columns`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=slab-beams-columns) — Slab + perimeter beams + columns (1-story benchmark)
- [`?t=benchmark-safe-ex01-plate`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-safe-ex01-plate) — SAFE Ex.1 · Rectangular SS plate (Timoshenko)
- [`?t=benchmark-safe-ex04-plate-beams`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-safe-ex04-plate-beams) — SAFE Ex.4 · Plate + elastic beams (Timoshenko, λ=4)
- [`?t=plate`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=plate) — Generic plate (legacy)

**Foundations & Soil**
- [`?t=zapata-aislada`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=zapata-aislada) — Isolated footing + Winkler springs (11 soil types, NEC-SE-GC)
- [`?t=zapata-aislada-validacion`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=zapata-aislada-validacion) — Isolated footing validation vs SAFE
- [`?t=zapata-viga-amarre`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=zapata-viga-amarre) — Strap-beam footing
- [`?t=safe-bench-viga-cimentacion`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=safe-bench-viga-cimentacion) — Strip footing: shell + frame beam + pedestals (composite model)
- [`?t=viga-cim-guerra-ej7`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=viga-cim-guerra-ej7) — **Ejercicio 7 Libro Guerra MDI** (L=17.20m, 4 cols c/M, shell+frame model)
- [`?t=viga-cim-guerra-ej7-tinv`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=viga-cim-guerra-ej7-tinv) — **Ej.7 Guerra, variante T invertida** (Hetényi · frame T-section + pedestales, sin shell)
- [`?t=safe-bench-losa-cimentacion`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=safe-bench-losa-cimentacion) — Mat foundation 6×8m (cross-validated vs SAFE)
- [`?t=safe-bench-zapata-combinada`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=safe-bench-zapata-combinada) — Combined footing 4×2m
- [`?t=safe-bench-zapata-conectada`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=safe-bench-zapata-conectada) — Connected footings 5×1m, variable t
- [`?t=safe-bench-zapata-comparativa`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=safe-bench-zapata-comparativa) — 🎓 ISSE comparativa: Empotrada vs Winkler vs Vesic (5 autores)

**📚 Libros · SAFE - Marcelo Guerra MDI** (cimentaciones validadas contra libro Guerra)
- [`?t=guerra-ej1-zapata-cuadrada`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=guerra-ej1-zapata-cuadrada) — Ej.1 · Zapata aislada cuadrada 3.45×3.45×0.45m
- [`?t=guerra-ej2-zapata-rectangular-sismo`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=guerra-ej2-zapata-rectangular-sismo) — Ej.2 · Zapata rectangular + sismo 4.60×4.00 (e>L/6)
- [`?t=guerra-ej3-zapata-rectangular-eccentricidad-grande`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=guerra-ej3-zapata-rectangular-eccentricidad-grande) — Ej.3 · Excentricidad GRANDE (e=1.29m, M_live=96 t·m)
- [`?t=guerra-ej4-zapata-combinada-rectangular`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=guerra-ej4-zapata-combinada-rectangular) — Ej.4 · Combinada rectangular (2 cols 90/100, L=7.50m)
- [`?t=guerra-ej5-zapata-combinada-trapezoidal`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=guerra-ej5-zapata-combinada-trapezoidal) — Ej.5 · Combinada **trapezoidal** (B1=3.75 → B2=1.60)
- [`?t=guerra-ej6-zapata-unida-viga-amarre`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=guerra-ej6-zapata-unida-viga-amarre) — Ej.6 · Zapata unida con **viga de amarre** (2 zapatas + frame V45×95)
- [`?t=guerra-ej7-viga-cimentacion-new`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=guerra-ej7-viga-cimentacion-new) — Ej.7 NEW · Viga de cimentación L=17.20m, 4 cols (shell único)
- [`?t=viga-cim-guerra-ej7`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=viga-cim-guerra-ej7) — Ej.7 · Variante shell+frame+pedestal
- [`?t=viga-cim-guerra-ej7-tinv`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=viga-cim-guerra-ej7-tinv) — Ej.7 · Variante **T invertida** (Hetényi)
- [`?t=guerra-ej8-losa-cimentacion`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=guerra-ej8-losa-cimentacion) — Ej.8 · Losa de cimentación (raft 23×21m, 16 cols grid 4×4)

- [`?t=placa-base`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=placa-base) — Steel column base plate
- [`?t=placa-base-cft`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=placa-base-cft) — CFT column base plate
- [`?t=placa-base-h`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=placa-base-h) / [`?t=placa-base-hueca`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=placa-base-hueca) — H + hollow profile bases
- [`?t=viga-medio-elastico`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=viga-medio-elastico) — Beam on elastic foundation (Winkler)
- [`?t=bulbo-presiones-suelo`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=bulbo-presiones-suelo) — Soil pressure bulb diagram
- [`?t=slope-stability`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=slope-stability) — Slope stability analysis

**Convención de modelado para cimentaciones compuestas (z=0 cara inferior):**
Para `safe-bench-viga-cimentacion`, `viga-cim-guerra-ej7` y `viga-cim-guerra-ej7-tinv` (modelos shell+frame y T-section), todos los frames y el shell de la zapata comparten el plano `z=0` (cara INFERIOR de la cimentación, donde se anclan los aceros longitudinal de viga y vertical de columna). Cada elemento se extruye HACIA ARRIBA con sus dimensiones reales: zapata → z=t_zap, viga → z=h_viga, pedestal → z=h_viga+h_ped. La unión es automática por compartir nodos en z=0 (sin rigid links). Las cargas P,M se aplican en el TOP del pedestal. Ver `insertion-points-preview.html` para diagramas explicativos de la sección transversal y vista lateral.

**Building variants** (AISC 360-22 / ACI 318-22 / ASCE 7-22)
- [`?t=edificio-hormigon`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=edificio-hormigon) — Concrete moment frame (IMF/SMF)
- [`?t=edificio-acero-v2`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=edificio-acero-v2) — Steel W moment frame (OMF/IMF/SMF)
- [`?t=edificio-mixto`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=edificio-mixto) — Composite (concrete columns + steel W beams)
- [`?t=edificio-muros`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=edificio-muros) — Concrete + Special RC shear walls (ACI 318-22 §18.10)
- [`?t=edificio-dual`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=edificio-dual) — Dual system (composite + walls + braces, R=7)
- [`?t=edificio-aporticado`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=edificio-aporticado) — Generic frame building
- [`?t=edificio-con-losa`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=edificio-con-losa) — Building with slab membrane
- [`?t=edificio-con-muros`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=edificio-con-muros) — Variant with embedded walls
- [`?t=edificio-ladera`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=edificio-ladera) — Building on slope (asymmetric supports)
- [`?t=edificio-comparativa-fem`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=edificio-comparativa-fem) — Side-by-side FEM comparison
- [`?t=edif-acero`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=edif-acero) — Steel building (legacy)
- [`?t=mezanine`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=mezanine) / [`?t=galpon`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=galpon) — Mezzanine + industrial warehouse

All buildings support the **Rigid Diaphragm** toggle (ASCE 7-22 §12.3.1) in the *Avanzado* folder, adjustable *Secciones por Piso* / *Luces por Vano* via `dynamicParams`, and separate XY / Z deform scales in Settings.

**Frames, beams & trusses**
- [`?t=1d-mesh`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=1d-mesh) / [`?t=2d-mesh`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=2d-mesh) / [`?t=3d-structure`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=3d-structure) — Mesh tutorials (1D/2D/3D)
- [`?t=truss`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=truss) / [`?t=advanced-truss`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=advanced-truss) / [`?t=truss-gen`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=truss-gen) — Truss systems
- [`?t=portico-2d`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=portico-2d) — 2D portal frame
- [`?t=beams`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=beams) / [`?t=viga-doble-t`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=viga-doble-t) — Beam elements
- [`?t=axial-bar`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=axial-bar) / [`?t=barra-axial`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=barra-axial) — Axial bar elements
- [`?t=releases-demo`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=releases-demo) — Member end releases
- [`?t=cerramiento`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=cerramiento) — Cerramiento (pórtico plano N vanos, construcción cotidiana)

**CFT (Concrete-Filled Tubes)**
- [`?t=columna-cft`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=columna-cft) — CFT column (beam element, AISC 360-22 §I)
- [`?t=columna-cft-h8`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=columna-cft-h8) — CFT column with H8 solid elements
- [`?t=benchmark-cft`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-cft) / [`?t=benchmark-cft-cantilever`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-cft-cantilever) — Validation vs ETABS

**Steel & RC connections**
- [`?t=conexion-bfp`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=conexion-bfp) — Bolted Flange Plate (AISC 358 §7)
- [`?t=conexion-rbs`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=conexion-rbs) — Reduced Beam Section (AISC 358 §5)
- [`?t=conexion-end-plate`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=conexion-end-plate) — End-Plate Moment Connection
- [`?t=conexion-diafragma-cft`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=conexion-diafragma-cft) — Diaphragm-through CFT connection
- [`?t=bolt-hole-detail`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=bolt-hole-detail) — Bolt hole detail visualization

**Benchmarks (validation against textbooks + commercial software)**
- [`?t=benchmark-3way`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-3way) — 3-way comparison (Hekatan / ETABS / hand calc)
- [`?t=benchmark-concrete-beam`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-concrete-beam) / [`?t=benchmark-concrete-cantilever`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-concrete-cantilever) — Concrete beam tests
- [`?t=benchmark-steel-beam`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-steel-beam) / [`?t=benchmark-steel-cantilever`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-steel-cantilever) — Steel beam tests

*Vigas W1 / W2 — n-DOF axial & flexion benchmarks*
- [`?t=W1_barra_axial`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=W1_barra_axial) — W1 · Barra axial genérica (1 DOF)
- [`?t=W2_viga_axial_concrete_cantilever`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=W2_viga_axial_concrete_cantilever) — Viga axial Hormigón 30×30 (1 DOF)
- [`?t=W2_viga_axial_cantilever`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=W2_viga_axial_cantilever) — Viga axial Acero I-450 (1 DOF)
- [`?t=W2_viga_axial_composite_cantilever`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=W2_viga_axial_composite_cantilever) — Viga axial Compuesta Slab (IPE+losa colaborante) (1 DOF)
- [`?t=W2_viga_axial_composite_encased_cantilever`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=W2_viga_axial_composite_encased_cantilever) — Viga axial Compuesta SRC Encased (1 DOF)
- [`?t=W2_viga_flexion_concrete_cantilever`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=W2_viga_flexion_concrete_cantilever) — Viga flexión Hormigón 30×60 (2 DOF)
- [`?t=W2_viga_flexion_steel_cantilever`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=W2_viga_flexion_steel_cantilever) — Viga flexión Acero IPE 300 (2 DOF)
- [`?t=W2_viga_flexion_composite_slab_cantilever`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=W2_viga_flexion_composite_slab_cantilever) — Viga flexión Compuesta Slab (2 DOF)
- [`?t=W2_viga_flexion_composite_encased_cantilever`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=W2_viga_flexion_composite_encased_cantilever) — Viga flexión Compuesta SRC Encased (2 DOF)

*Mario Paz "Structural Dynamics" 6ª ed.*
- [`?t=benchmark-paz-4-1`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-paz-4-1) — Paz 4.1 (1-DOF rectangular impulse)
- [`?t=benchmark-paz-6-1`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-paz-6-1) — Paz 6.1 (Newmark-β canónico 1-DOF)
- [`?t=benchmark-paz-7-1`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-paz-7-1) — Paz 7.1 (2-story shear building)
- [`?t=benchmark-paz-8-1`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-paz-8-1) — Paz 8.1 (2-DOF triangular impulse)
- [`?t=benchmark-paz-9-3`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-paz-9-3) — Paz 9.3 (4-story uniform shear building)
- [`?t=benchmark-paz-10-7`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-paz-10-7) — Paz 10.7 (fixed-fixed beam, 4 elementos)
- [`?t=benchmark-paz-11-1`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-paz-11-1) — Paz 11.1 (plane frame inclinado 45°)
- [`?t=benchmark-paz-12-1`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-paz-12-1) — Paz 12.1 (grid frame 3D horizontal)
- [`?t=benchmark-paz-13-1`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=benchmark-paz-13-1) — Paz 13.1 (space frame 3D, 5 nodos)

**Iconic 3D structures**
- [`?t=burj-khalifa`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=burj-khalifa) / [`?t=twisted-tower`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=twisted-tower) / [`?t=tower-3d`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=tower-3d) — Tower models
- [`?t=cable-stayed-bridge`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=cable-stayed-bridge) / [`?t=tablero-puente`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=tablero-puente) — Bridge models
- [`?t=sydney-opera`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=sydney-opera) — Sydney Opera House shells
- [`?t=gateway-arch`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=gateway-arch) — Gateway Arch catenary
- [`?t=diagrid`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=diagrid) — Diagrid structural system
- [`?t=pergola`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=pergola) — Pergola / canopy

**Slabs & design**
- [`?t=slab-designer`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=slab-designer) — Slab design module
- [`?t=building`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=building) — Generic building generator
- [`?t=solid-cube-fem`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=solid-cube-fem) — Solid H8 cube FEM

**CAD & Modeling tools**
- [`?t=new-blank`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=new-blank) — **Blank canvas** for drawing from scratch (see CAD Tools section below)
- [`?t=cad-draw`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=cad-draw) / [`?t=cad-editor`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=cad-editor) — CAD-style drawing tools
- [`?t=drawing`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=drawing) — Basic 2D drawing
- [`?t=cli-modeler`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=cli-modeler) — CLI-style parametric modeling

**Utilities & tutorials**
- [`?t=fem-explained`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=fem-explained) — Step-by-step FEM explainer
- [`?t=calc-editor`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=calc-editor) — Calc editor (Calcpad integration)
- [`?t=report`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=report) — Auto-generated reports
- [`?t=color-map`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=color-map) / [`?t=curves`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=curves) / [`?t=tables`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=tables) — UI components
- [`?t=tutorials`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=tutorials) — Tutorial index
- [`?t=csi-importer`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=csi-importer) — Import E2K / S2K files

## 📐 CAD Tools (new — NewBlank canvas)

[`?t=new-blank`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=new-blank) — **Lienzo CAD 2D/3D** for drawing structures from scratch with mouse + Tweakpane controls.

**Tools** (folder `✏ Herramientas CAD`):
- 🖱 Seleccionar / ● Nodo / ／ Línea (frame) / ▭ Área (shell Q4)
- ⌒ Polilínea / ▭ Rectángulo / ○ Círculo / ⌒ Arco (3 ptos)
- ┊ Línea auxiliar / ↗ Prolongar línea
- **ORTO (90°)** + **POLAR (45°)** modes
- **Segmentos arc/círc** slider (4–64) — discretizes any non-linear element to N straight segments at FEM export

**Work planes:** XY (planta) / XZ (elevación frontal) / YZ (elevación lateral) — sync with raycaster so mouse clicks fall on the active plane.

**Snap:** separate **Snap 2D** + **Snap 3D** sliders. Snap 3D Indicator (sphere + RGB axes cross) follows the cursor on the work plane to help orient in 3D.

**Views** (folder `Vista`):
- 🏗 Isométrica / ⬇ Planta (X-Y) / → Elevación X / ↑ Elevación Y
- 📍 **Ejes (frames individuales):** auto-generated buttons per unique X (Eje A, B, C…) and Y (Eje 1, 2, 3…) coordinate of the model — click to view that frame in elevation (FEM Studio style)
- 👁 **Toggle ejes en escena** — draws dashed gridlines + labels A/B/C (blue) + 1/2/3 (red) at each gridline for CAD-style reference
- 🎬 **Demo simulador CAD** — animates a virtual cursor through CAD tools and draws a portico in the canvas (visible mouse simulation)

**Sections (Tweakpane params):** material (Hormigón/Acero), b/h column, b/h beam, shell thickness — applied to drawn elements automatically.

**Supports/Loads (auto):** apoyo type at z_min nodes (Empotrado / Articulado / Rótula / sin apoyo), Fz/Fx loads at z_max nodes — toggleable.

**Public TS API** (exposed on `window` for scripting/demos):
```ts
__hekatanDrawAt(x, y, z)         // add point (= mouse click)
__hekatanDrawNewPoly()           // start new polyline (= right-click)
__hekatanDrawCircle(cx, cy, cz, r, segs, plane)
__hekatanDrawArc([p1], [p2], [p3], segs)
__hekatanDrawRect([p1], [p2])
__hekatanShowSnap(x, y, z) / __hekatanHideSnap()
__hekatanShowAxes(xs, ys, zMax) / __hekatanHideAxes()
__hekatanShowRefPlanes(zLevels, sizeM, cx, cy)
```

## 🏁 Benchmarks unificados (W##)

Naming canonical para validación cruzada hekatan-struct-lineal ↔ ETABS / SAP2000 / SAFE / Octave / MATLAB / Calcpad-Lab. Cada **W##** vive con el mismo nombre en cada plataforma para encontrar el mismo benchmark en cualquier lado.

| ID | Nombre | Wilson cap | Categoría | URL hekatan-web |
|---|---|---|---|---|
| **W1** | Barra axial 1D | 2/4 | Frames 1D | [`?t=W1_barra_axial`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=W1_barra_axial) |
| **W2** | Viga Euler-Bernoulli | 4 | Frames 1D | (pendiente migración) |
| **W3** | Armadura plana 2D | 2 | Trusses | (pendiente migración) |
| **W4** | Pórtico plano 2D | 4 | Frames 2D | (pendiente migración) |
| **W5** | Torre espacial 3D | — | Frames 3D | (pendiente migración) |
| **W6** | Placa flexión Q4 | — | Shells | (pendiente migración) |

**Mapa de archivos por benchmark** (ejemplo W1):

| Plataforma | Path |
|---|---|
| hekatan-struct-lineal registry | `examples/src/W1_barra_axial/barraAxial.ts` |
| hekatan-struct-lineal web | `?t=W1_barra_axial` |
| ETABS API + E2K | `validacion/Etabs/W1_barra_axial/` (E2K + Python pythonnet validator) |
| Calcpad-Lab | `Calcpad-Lab/Examples/Finite Elements/W1_barra_axial.cpd` |
| Calcpad-Symbolic | `Calcpad-Symbolic/Examples/Finite Elements/W1_barra_axial.cpd` |
| Octave reference | `validation/octave/W1_barra_axial.m` |
| Markdown doc | `markdown/benchmarks/W1_BARRA_AXIAL.md` |
| Files index | `markdown/benchmarks/W1_FILES_INDEX.md` |

**Validación cruzada W1** (todos coinciden con 0% error):
- Analítica Hooke 1D: δ = F·L/(A·E) = 0.250000 mm
- ETABS API (pythonnet, .NET InterOp): 0.250000 mm ✓
- ETABS via E2K → API: 0.250000 mm ✓
- hekatan-struct-lineal FEM 1D: ✓

## 🔌 SAP2000 / ETABS / SAFE integration (PowerShell)

**Imports (file → Hekatan):**
- E2K (ETABS) — **NEW**: any benchmark workspace now has 📥 Importar E2K button (in ETABS folder). Click → pick file → auto-redirect to `?t=new-blank` with the imported model loaded as drawing geometry. Round-trip: export from a benchmark, modify externally, import back.
- S2K (SAP2000) — same flow with 📥 Importar S2K in SAP folder
- F2K (SAFE) — for foundation benchmarks via `📥 Importar F2K cimentación COMPLETA` in Cimentación folder
- Mesh, sections, loads, releases, supports parsed from text format
- Round-trip implementation: `examples/src/workspace/main.ts` (handlers) + `examples/src/new-blank/newBlank.ts` (consumer)

**Exports (Hekatan → file):**
- E2K full export (compatible with ETABS 22+)
- S2K full export
- F2K (SAFE) — foundation models with Winkler springs + reactions

**Cross-validation pipeline** (Windows + PowerShell + CSI OAPI):
- `Benchmark_Placa/safe_debug_zapata.ps1` — diagnostic tool that opens .FDB in SAFE, runs analysis, extracts settlement + Mxx via OAPI
- `Benchmark_Placa/safe_extract_zapata.py` — Python OAPI version with SetRunCaseFlag + post-import joint count
- Validated: zapata-aislada (Hekatan Q4 + Winkler) vs SAFE 21 — 96.7 mm SAFE vs 84 mm analytical (acceptable for Boussinesq deep formulation differences)
- ETABS validation: ratio = 1.0000 for frames + modal, 0.99–1.003 for shells (full table at `/validation/python-etabs-verificado/`)

**Known issue:** SAFE OAPI `File.OpenFile(.f2k)` returns `ret=0` but model is empty. **Workaround**: open .f2k in SAFE GUI manually → File → Save As → .FDB → OAPI reads .FDB correctly. Documented in `Benchmark_Placa/REPORTE_SAFE_F2K_BUG.md`.

**Build & deploy in PowerShell** (Windows native, no MSYS):
```powershell
# Build
$env:DEPLOY_BASE="/hekatan-struct-lineal/"; npm run build -w examples

# Deploy (no MSYS_NO_PATHCONV needed in pure PowerShell)
$env:GIT_AUTHOR_NAME="Your Name"
$env:GIT_AUTHOR_EMAIL="you@example.com"
npx gh-pages --dist website/src/examples `
  --repo https://github.com/GiorgioBurbanelli89/hekatan-struct-lineal.git `
  --branch gh-pages --dotfiles `
  --message "your commit message"
```

## What Hekatan Struct Lineal adds on top of Awatif

| Feature | Awatif v2.0.0 | Hekatan Struct Lineal |
|---------|:---:|:---:|
| Modal analysis (eigenvalue) | ❌ | ✅ Eigen C++/WASM, mass participation, validated 0.00% vs OpenSees/SciPy |
| Modal animation (live mode shapes) | ❌ | ✅ Shared helper — works in EVERY example with `hasModal: true` |
| Winkler springs (native C++) | ❌ | ✅ `deform()` extended with `springsList: {node, dof, k}[]`, assembled into K |
| Plane Q4 plane-stress solver | ❌ | ✅ Pure-TS `planeQ4Solve`: 2 DOFs/node, 2×2 Gauss, LU dense, stress recovery |
| Wilson incompatible modes (Q4 bending) | ❌ | ✅ Taylor-Beresford-Wilson 1976; reduces cantilever error ~10% → <2% |
| Rigid diaphragm (ASCE 7-22 §12.3.1) | ❌ | ✅ Integrated in all 5 building variants via toggle *Avanzado → Diafragma rígido* |
| Separate deform scale XY / Z (axial rigidity respect) | ❌ | ✅ Auto-detects Edificio vs Placa; user-adjustable in Settings |
| Dynamic per-floor params (regenOnChange) | ❌ | ✅ `ExampleDef.dynamicParams(currentParams)` — Secciones/Alturas/Luces por piso |
| Bathe composite time integration (α-dissipative) | ❌ | ✅ TS scaffold `batheStep()` + `newmarkStep()` for ASCE 7-22 §16 RHA |
| ETABS-style slab discretization (25-50 cm per bay) | ❌ | ✅ `etabsDiscretize2D()` — each bay meshed to target size, like ETABS default |
| Materials helper (Hormigón/Acero/CFT × Rect/Circ/W/HSS) | ❌ | ✅ `materials.ts` w/ ACI 318-22 Ec=15100√f'c, AISC/A992 steel, composite |
| Mindlin-Reissner plates | ❌ | ✅ MITC4 shear tying via `plateQ4Solve(theoryType: 0)` |
| Kirchhoff thin plates | ❌ | ✅ `plateQ4Solve(theoryType: 1)` |
| CSI Shell-Membrane formulation | ❌ | ✅ Membrane Q4 with drilling DOF (`membrana-csi` example) |
| Timoshenko beams | ❌ Euler-Bernoulli only | ✅ φ = 12EI/GA_sL² |
| Shell Q4 incompatible modes | ❌ | ✅ Wilson + drilling DOF |
| Nonlinear pushover | ❌ | ✅ Newton-Raphson |
| Rigid end offsets | ❌ | ✅ R^T·K·R |
| Moment releases | ❌ | ✅ Static condensation |
| **Unified Tweakpane workspace** | ❌ | ✅ Hub at `?t=<id>` loads any example; draggable + position persisted |
| **Reactive unit system** | ❌ | ✅ kN/tonf/kip × mm/cm/m/in; sliders + colormap legend + values cascade |
| **Dynamic slider ranges** | ❌ | ✅ Folder "📏 Rangos": user can extend min/max of load sliders in-session |
| Import E2K (ETABS) | ❌ | ✅ |
| Import S2K (SAP2000) | ❌ | ✅ |
| Import IFC (Revit/ArchiCAD) | ❌ | ✅ web-ifc WASM |
| Export E2K / S2K | ❌ | ✅ |
| Export OpenSees (Py/Tcl) | ❌ | ✅ |
| Didactic FEM solver | ❌ | ✅ K_local, T, K_global per element |
| Calc panel (math.js + KaTeX) | ❌ | ✅ MATLAB-like with symbolic math |
| Parametric building generator | Basic | ✅ Per-axis spans, per-floor heights, overhangs, shear walls, braces |
| Foundation examples (zapatas) | ❌ | ✅ Isolated, strap-beam, validation vs hand calc |
| ETABS-style releases UI | ❌ | ✅ 6 DOFs × 2 ends + springs |
| Section assignment dialog | ❌ | ✅ Rect, circular, I-shape, HSS, CFT |
| Mobile responsive | ❌ | ✅ Hamburger menu |
| Validated vs ETABS 22.6 | ❌ | ✅ Frames 1.0000, Shells 0.99-1.003 |

## Workspace architecture

```
examples/src/
├── workspace/                  ← unified hub (Tweakpane-based)
│   ├── main.ts                 Selector + params + modal + units + ranges
│   ├── exampleRegistry.ts      ExampleDef interface + list of all 25+ examples
│   ├── runExampleStandalone.ts Runner for individual pages /<id>/
│   ├── units.ts                Reactive forceUnit/dispUnit (localStorage)
│   └── exampleVersion.ts       Version counter (invalidates stale van.derive)
├── shared/
│   ├── animateMode.ts          Modal mode-shape animator (reusable)
│   ├── renderModalTable.ts     Modal frequencies table
│   └── ...
└── <example-id>/               each example self-contained
    ├── <name>.ts               exports ExampleDef
    ├── main.ts                 runExampleStandalone(<def>)
    └── index.html
```

Every example exports an `ExampleDef` with:
```ts
{ id, name, category, params, build,
  hasModal?, runModal?, onParamChange?, computedLabels?, inlineComputed?,
  defaultShellResult?, availableShellResults? }
```

`ParamDef` supports:
- Standard sliders (`min`, `max`, `step`, `default`)
- Dropdowns (`options: {label: value}`)
- Checkboxes (`boolean: true`)
- **Typed units** (`unitType: "force" | "moment" | "disp"`) — auto-convert + label suffix
- **Dynamic ranges** (`rangeAdjustable: true`) — folder "📏 Rangos" lets user extend min/max

## Architecture

```
┌──────────────────────────────────────────────────────┐
│                    Browser                            │
│                                                      │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────┐ │
│  │  hekatan-ui  │  │  hekatan-fem  │  │   examples  │ │
│  │  Three.js   │  │  C++/WASM    │  │  Workspace  │ │
│  │  VanJS      │  │  Eigen 3.4   │  │  Tweakpane  │ │
│  │  Tweakpane  │  │  SparseLU    │  │  25+ demos  │ │
│  └──────┬──────┘  └──────┬───────┘  └──────┬──────┘ │
│         │    signals       │                 │        │
│         └─────────────────┼─────────────────┘        │
│                           │                          │
│                    ┌──────┴───────┐                   │
│                    │  deform.wasm │ ~350 KB           │
│                    │  (Eigen C++) │                   │
│                    └──────────────┘                   │
└──────────────────────────────────────────────────────┘
```

### Packages

| Package | Description |
|---------|-------------|
| `hekatan-fem` | FEM solver: `deform()`, `analyze()`, `modalAnalysis()`, `plateQ4Solve()`, `planeQ4Solve()`, C++/WASM bindings |
| `hekatan-ui` | UI: `getViewer()` (Three.js + colormap + legend), `getToolbar()`; exports reactive `colorMapForceUnit`, `colorMapDispUnit` |
| `examples` | Unified workspace + 25+ self-contained examples + `getCad3d.ts` legacy FEM Studio (being phased out) |
| `awatif-py` | **Python port de awatif v2** — pure numpy/scipy, API 1:1 (deform/analyze/modal_analysis), PyVista viewer, Qt + trame GUIs, 8 tests pytest |
| `hekatan-struct-py` | **Hekatan extensions sobre awatif-py** — selfweight automation, rigid diaphragm constraint, Cardinal Point offsets, MZC Kirchhoff plate, stiffness modifiers, Mesa Torsión paramétrica, iterator framework |

### C++ Solver (hekatan-fem/src/cpp/)

| File | Description |
|------|-------------|
| `deform.cpp` | Static analysis entry point; supports Winkler springs via 5th arg |
| `modal.cpp` | Eigenvalue analysis (K·φ = ω²·M·φ) |
| `didactic.cpp` | Didactic solver — returns all intermediate steps |
| `nonlinear.cpp` | Newton-Raphson nonlinear static |
| `cyclic_pushover.cpp` | Cyclic pushover analysis |
| `utils/getLocalStiffnessMatrix.cpp` | K_local 12×12 (Timoshenko) + Q4 shell |
| `utils/getTransformationMatrix.cpp` | T matrix (3D rotation) |
| `utils/getGlobalStiffnessMatrix.cpp` | Assembly with rigid offsets + releases |
| `utils/shellQ4.cpp` | Shell Q4: membrane (Wilson incompatible modes) + Mindlin plate + drilling DOF — **= ETABS Shell-Thick (DSE Wilson Ch10)** |
| `utils/shellThin.cpp` | **NUEVO: Shell Q4 Kirchhoff** = ETABS Shell-Thin (DKE Wilson Ch10), MZC plate bending puro, libre de shear locking. Validated <1.5% vs ETABS Mesa Torsión |
| `plate_q4/kirchhoff_q4.cpp` | Dedicated Mindlin / Kirchhoff plate solver (legacy, separate API) |

### Pure-TS solvers (no WASM)

| File | Description |
|------|-------------|
| `hekatan-fem/src/planeQ4.ts` | Q4 plane-stress element (`planeQ4Solve`): 2 DOFs/node, 2×2 Gauss, LU dense with partial pivoting, stress recovery (σxx, σyy, τxy, von Mises, principal) |

### Import/Export

| Format | Import | Export | Software |
|--------|:---:|:---:|----------|
| E2K | ✅ | ✅ | ETABS |
| S2K | ✅ | ✅ | SAP2000 |
| IFC | ✅ | — | Revit, ArchiCAD |
| OpenSeesPy | ✅ | ✅ | OpenSees |
| OpenSees Tcl | ✅ | ✅ | OpenSees |

## Getting Started

```bash
git clone https://github.com/GiorgioBurbanelli89/hekatan-struct-lineal.git
cd hekatan-struct-lineal
npm install
npm run dev:examples    # opens localhost:4600 (workspace auto-opens)
```

### Compile C++ → WASM (only needed if modifying C++)

```bash
# Install emsdk (one time)
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk && ./emsdk install latest && ./emsdk activate latest
source ./emsdk_env.sh

# Compile solver
cd hekatan-fem/src/cpp
em++ -O2 -Ieigen -I. \
  didactic.cpp utils/*.cpp \
  -sEXPORTED_FUNCTIONS=[_didactic_solve,_malloc,_free] \
  -sALLOW_MEMORY_GROWTH=1 -sMODULARIZE=1 -sEXPORT_ES6=1 \
  --no-entry -o built/deform.js
```

> The compiled `.wasm` and `.js` are **versioned in git** — you only need emsdk to modify C++ code.

### Deploy to GitHub Pages

```bash
# Build (MSYS_NO_PATHCONV prevents git-bash from mangling the deploy base)
MSYS_NO_PATHCONV=1 DEPLOY_BASE=/hekatan-struct-lineal/ npm run build -w examples

# Push the compiled bundle to gh-pages branch
npx gh-pages --dist website/src/examples \
  --repo https://github.com/GiorgioBurbanelli89/hekatan-struct-lineal.git \
  --branch gh-pages --dotfiles \
  --message "<commit message>"
```

## Validation

Solver validated against ETABS 22.6 via Python API (comtypes), plus Paz & Leigh Example 6.3 vs four solvers (browser-WASM, CLI-WASM, native C++, Python/SciPy — all 0.00% difference):

| Test | awatif/ETABS Ratio |
|------|:---:|
| Cantilever Timoshenko | 1.0000 |
| Portal frame | 1.0000 |
| 3D Space frame | 1.0000 |
| Shell Q4 membrane | 0.99–1.003 |
| Shell Q4 plate bending | 0.99–1.01 |
| Modal analysis (6 modes) | 1.0000 |
| Plane Q4 cantilever (flex+shear) | 1.10 FEM/teórico (expected for Q4 without incompatible modes) |

### Cross-validation framework against SAFE 20 (automated via API)

End-to-end framework that runs Hekatan `plateQ4Solve` and SAFE 20 (vía `SAFEv1.dll` + pythonnet) on the **exact same model** and compares N sampled points. Live in [`benchmarks/`](./benchmarks/) (índice y guía de uso) + [`benchmarks/safe/`](./benchmarks/safe/) (casos resueltos).

| # | Caso | Mesh | Cols | w_max Hekatan | w_max SAFE | Δ |
|---|------|:---:|:---:|:---:|:---:|:---:|
| 1 | [Zapata aislada 1.5×1.5×0.30m](./benchmarks/safe/zapata-aislada/) | 12×12 (144 Q4) | 1 | −4.5356 mm | −4.5370 mm | **+0.03%** |
| 2 | [Losa cimentación 6×8×0.50m, 6 cols 2×3](./benchmarks/safe/losa-cimentacion/) | 12×16 (192 Q4) | 6 | −1.5824 mm | −1.5870 mm | **+0.29%** |
| 3 | [Zapata combinada 4×2×0.40m, 2 cols alineadas](./benchmarks/safe/zapata-combinada/) | 16×8 (128 Q4) | 2 | −3.8458 mm | −3.8490 mm | **+0.08%** |
| 4 | [Zapata conectada 5×1m, t variable (0.40/0.20)](./benchmarks/safe/zapata-conectada/) | 20×4 (80 Q4) | 2 | −8.9003 mm | −8.898 mm | **−0.07%** |
| 5 | [Viga de cimentación 8×1×0.50m, 4 cols alineadas](./benchmarks/safe/viga-cimentacion/) | 32×4 (128 Q4) | 4 | −5.1093 mm | −5.1100 mm | **+0.01%¹** |
| 6 | [Edificio real 9 zap + 12 vigas amarre](./benchmarks/safe/edificio-cimentacion-real/) | 144 Q4 + 12 frames | 9 | −16.33 mm (col 3) | −27.12 mm | **no comparable²** |

**Casos 1-5 (plate-only): promedio Δ máx 0.14%, todos <0.33%.**

² **Caso 6 — resuelto el 2026-08-18, y NO era del solver.** Estuvo tres meses
marcado como «límite del Q4 sin drilling DOF». El motor ya lleva MITC4 +
drilling de Hughes-Brezzi + modos de Wilson, y el gap no venía de ahí: **los
dos modelos no tienen la misma carga**. En un suelo de Winkler la reacción
total tiene que igualar a la carga aplicada, y sumando `q·A` de las nueve
zapatas:

| | reacción del suelo | carga aplicada | |
|---|---|---|---|
| Hekatan | **19.31 tonf** | 19.27 tonf | **1.00 ×** ✔ |
| SAFE | **55.01 tonf** | 19.27 tonf | **2.85 ×** ✘ |

Hekatan cierra el equilibrio al **0.2 %**; el modelo de SAFE mete casi tres
veces la carga. Esas 55 t son el **peso propio** (zapatas 20.65 + vigas 14.40 +
pedestales 1.73 + cargas 19.27 = 56.05 t, o sea 1.9 % de lo medido), que SAFE
aplica aunque el script pida `SelfWeight = 0`. Para dar el caso por medido hay
que igualar la hipótesis de carga, no tocar el solver. Detalle en el
[README del caso 6](./benchmarks/safe/edificio-cimentacion-real/README.md).

⚠️ La lección: **antes de tocar el solver, comprobar el equilibrio**. Tres meses
de «bug de drilling» que se cerraban con una suma. Documentación API SAFE (con 8 gotchas críticos, incluyendo el bug silencioso de `SubModulus` que produce gap del 38% si se usa `SetAreaSpringProp(U3=ks)` ingenuamente): [`benchmarks/safe/README.md`](./benchmarks/safe/README.md).

¹ **Nota caso 5**: el modelo workspace `?t=safe-bench-viga-cimentacion` evolucionó al modelo compuesto realista (zapata corrida shell + viga frame + 4 pedestales frames), distinto al benchmark original de losa 8×1×0.50m pura. El benchmark `Δ +0.01%` se preserva en `/benchmarks/safe/viga-cimentacion/` (CLI standalone) y dejó de aplicar al workspace que muestra el modelo de viga de cimentación realista.

### 🌀 Mesa de Torsión — validación ETABS 19.1 Shell-Thin (DKE Kirchhoff)

Modelo CSI ETABS 19.1 (Gabriela/Seproinca 2020): pórtico 6×6 m × 4 m alto,
4 columnas C40×40 pinned-base, 4 vigas V30×50 perimetrales, losa 10 cm ShellThin,
diafragma rígido. Validado end-to-end vs ETABS API (modal + frame forces).

**Discretización auto-confirmada vía API**: 25 Q4 (5×5), 24 LineElm (4 cols + 4×5 vigas), 40 nodos.

| Componente | Hekatan (Shell-Thin DKE) | ETABS 19.1 | Δ% |
|---|---|---|---|
| T₁ lateral X | 0.343 s | 0.343 s | < 1% ✓ |
| T₂ lateral Y | 0.343 s | 0.343 s | < 1% ✓ |
| T₃ torsión Rz | 0.288 s | 0.288 s | < 1% ✓ |
| Dead V₂/V₃ | 0.444 t | 0.450 t | **−1.3% ✓** |
| Dead M₃ | 2.407 t·m | 2.430 t·m | −0.9% ✓ |
| UDCon2 P axial | 24.11 t | 24.86 t | −3% ✓ |
| UDCon2 M₃ | 15.49 t·m | 15.48 t·m | +0.05% ✓ |
| Live M₂ col (nudo z=4.0) | 2.461 t·m | 2.434 t·m | **+1.1% ✓** |
| Live M₂ col (cara z=3.5) | 2.153 t·m | 2.130 t·m | **+1.1% ✓** |

**Score: todas las cantidades dentro de ±5%.**

> **Resuelto el histórico "+15% en M₂ de columna"** (2026-06-03): no era un bug del
> solver sino una comparación inconsistente — Hekatan reportaba en el **nudo** (z=4.0)
> mientras ETABS reporta en la **cara del soporte** (z=3.5). El e2k tiene
> `CARDINALPT 8` (eje de viga en el tope) + `PZENDOFFSETSRIGID No`: el offset
> (peralte completo de viga = 0.50 m) **no rigidiza K**, sólo desplaza el punto de
> reporte. Reportando en la cara, M₂ cae a **+1.1%** en los 5 patrones de carga
> (Dead/Live/SCP/UDCon1/UDCon2, todos en −4%…+1%). Verificado por tres vías
> independientes: `hekatan-fem-py` (MZC), **Python DKE** (Batoz DKQ) y **Calcpad DKE**.

| Componente C++/WASM | Rol |
|---|---|
| `shellQ4.cpp` | Mindlin-Reissner = ETABS Shell-Thick (DSE Wilson Ch10) — default |
| `shellThin.cpp` ← NUEVO | MZC Kirchhoff = ETABS Shell-Thin (DKE Wilson Ch10) |
| `getLocalStiffnessMatrix.cpp` | Dispatcher según `ElementInputs.plateFormulations[idx]` (0/1) |
| `plate_mzc.py` (`hekatan-struct-py`) | Reference implementation puro numpy — validada primero |

**Live**:
- Workspace: [`?t=mesa-torsion`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=mesa-torsion)
- Standalone: [`/mesa-torsion/`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/mesa-torsion/)
- Validación cruzada Python: [`hekatan-struct-py/examples/mesa_torsion_iterate.py`](./hekatan-struct-py/examples/mesa_torsion_iterate.py)
- Validación M₂ < 5% (Python DKE vs Calcpad DKE vs ETABS): [`validacion/Calcpad/mesa_torsion/validar_mesa_torsion_python.py`](./validacion/Calcpad/mesa_torsion/validar_mesa_torsion_python.py) · Calcpad: [`mesa_torsion_DKE_completo.cpd`](./validacion/Calcpad/mesa_torsion/mesa_torsion_DKE_completo.cpd)
- ETABS API scripts: [`validacion/Api CSI Computers/etabs-api/python-verificado/`](./validacion/Api%20CSI%20Computers/etabs-api/python-verificado/) (15_mesa_torsion.py + 16_mesa_torsion_frame_forces.py)
- Reporte completo: [`validacion/Api CSI Computers/etabs-api/GUIA_API_ETABS.md`](./validacion/Api%20CSI%20Computers/etabs-api/GUIA_API_ETABS.md)

### Benchmarks libro Marcelo Guerra Avendaño MDI — Catálogo completo

Ejemplos de ejercicios resueltos del libro **"Cimentaciones Sismo Resistentes utilizando SAFE"** (Ing. Marcelo Guerra Avendaño MDI, 2013), referencia ecuatoriana de cimentaciones. Cada ejemplo tiene:
- ✅ Implementación Hekatan-struct con datos exactos del libro
- ✅ Script Python SAFE-API correspondiente en `validacion/Api CSI Computers/safe-api/ejN_*.py`
- ✅ `safe-reference.json` con valores del libro + bloque `safe_api_live` con corrida real de SAFE 20

Categoría en workspace: **📚 Libros · SAFE - Marcelo Guerra**

| Ej | Tema | ID workspace | Pag. libro | Modelo Hekatan | σ_max validado |
|---|---|---|---|---|---|
| **1** | Zapata aislada cuadrada (3.45×3.45×0.45) | [`guerra-ej1-zapata-cuadrada`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=guerra-ej1-zapata-cuadrada) | 17-42 | Shell Q4 Winkler + self-weight + load distribuido en huella columna | **13.27 t/m²** vs libro 13.163 (+0.8%) ✅ triple cross con Python FEM |
| **2** | Zapata rectangular + sismo (4.60×4.00, e>L/6) | [`guerra-ej2-zapata-rectangular-sismo`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=guerra-ej2-zapata-rectangular-sismo) | 42-58 | + combos servicio/último D+L y D+L+S | 14.62 servicio (q_adm=14 cumple) |
| **3** | Rectangular EXCENTRICIDAD GRANDE (e=1.29m >> L/6) | [`guerra-ej3-zapata-rectangular-eccentricidad-grande`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=guerra-ej3-zapata-rectangular-eccentricidad-grande) | 69-72 | M_live=96 t·m vs Ej.2 de 36 | 18.81 (q_adm=20 cumple) |
| **4** | Combinada rectangular (2 cols 90/100, L=7.50m) | [`guerra-ej4-zapata-combinada-rectangular`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=guerra-ej4-zapata-combinada-rectangular) | 74-90 | Shell único + cols distribuidas | 25.70 FEM (libro rígido 16.02) |
| **5** | Combinada TRAPEZOIDAL (B1=3.75 → B2=1.60) | [`guerra-ej5-zapata-combinada-trapezoidal`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=guerra-ej5-zapata-combinada-trapezoidal) | 93-112 | Mesh bbox + máscara trapezoidal | σ_uniforme≈19.96 libro |
| **6** | Zapata unida con viga amarre (2 zapatas + frame) | [`guerra-ej6-zapata-unida-viga-amarre`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=guerra-ej6-zapata-unida-viga-amarre) | 113-130 | Wrapper sobre `zapata-viga-amarre` con Hp≈0 (sin pedestal frame). 2 shells + viga V45×95 frame entre cols. SAFE-API: σ_max=23.77 t/m² | libro Fig.180: 26.18 (-9.2%) |
| **7** | Viga de cimentación L=17.20m, 4 cols c/M (NEW formato) | [`guerra-ej7-viga-cimentacion-new`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=guerra-ej7-viga-cimentacion-new) | 135-148 | Shell único + 4 cols distribuidas | mismo libro 18 |
| **7-old** | Viga cimentación L=17.20m (formato shell+frame+pedestal) | [`viga-cim-guerra-ej7`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=viga-cim-guerra-ej7) | 135-148 | Shell zapata + frame viga + 4 frames pedestal | ✓ validado |
| **7-T** | Viga cimentación variante **T-invertida** (Hetényi) | [`viga-cim-guerra-ej7-tinv`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=viga-cim-guerra-ej7-tinv) | 135-148 | Frame T-section (ala B×t_zap + alma b_viga×h_viga) + frames pedestal · Winkler 1D | ✓ validado |
| **8** | Losa de cimentación (raft 23×21m, 16 cols grid 4×4) | [`guerra-ej8-losa-cimentacion`](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=guerra-ej8-losa-cimentacion) | 149-170 | Shell único raft + 16 cargas col en grid | σ_promedio libro 5.85 |

**Convención**: todos los ejemplos usan datos exactos del libro (P_CM, P_CV, M_CM, M_CV por columna; f'c según ejercicio; q_adm y ks por tipo de suelo). El folder "📊 Calculados" muestra σ_max/σ_min Hekatan vs valores del libro y vs SAFE-API live, con `Δ%` automático.

**Validación cruzada SAFE-API**: cada ejercicio tiene un script Python en `validacion/Api CSI Computers/safe-api/` que arma el modelo SAFE 20 desde cero via `pythonnet`, corre análisis, y dumpea resultados a JSON. Esto permite triple cross-check Hekatan ↔ Python FEM ↔ SAFE 20 nativo. Validado a <1% en Ej.1, <10% en los demás (diff principal: SAFE usa frame coupling completo de viga amarre + pedestales, Hekatan modelos simplificados).

**PowerShell extractor** (opcional): `Safe Powershell/safe_extract_clean.ps1` permite abrir cualquier `.fdb` o `.f2k` desde CLI y extraer resultados a JSON sin pasar por Python:
```powershell
powershell -ExecutionPolicy Bypass -File "Safe Powershell\safe_extract_clean.ps1" `
  -ModelPath "C:\CSi_SAFE_API_Example\guerra_ej6.f2k" `
  -OutPath "results.json"
```

## Stack

| Technology | Purpose |
|-----------|---------|
| **C++ / Eigen 3.4** | FEM solver (SparseLU, eigenvalues) |
| **Emscripten** | C++ → WebAssembly compiler |
| **Three.js** | 3D rendering (WebGL) |
| **VanJS** | Reactive state management (1.5 KB) |
| **Tweakpane** | Unified UI — *single source of truth, no custom panels* |
| **math.js** | Matrix operations in calc panel |
| **KaTeX** | LaTeX equation rendering |
| **nerdamer** | Symbolic math (derivatives, integrals) |
| **web-ifc** | IFC geometry parser (WASM) |
| **Vite** | Build tool / dev server |

## Author

**Jorge Burbano** — Structural Engineer, Ecuador
- LinkedIn: [jorge-burbano-213741138](https://www.linkedin.com/in/jorge-burbano-213741138/)
- Also creator of [Hekatan Calc](https://github.com/GiorgioBurbanelli89) — math/engineering desktop app (.NET/WPF)

## Credits

- [awatif v2.0.0](https://github.com/madil4/awatif/tree/v2.0.0) by Mohamed Adil — original UI framework and viewer (~10% of the current codebase; thank you!)
- [Eigen 3.4](https://eigen.tuxfamily.org/) — C++ linear algebra
- [web-ifc](https://github.com/ThatOpen/engine_web-ifc) — IFC parser by That Open Company
- Dr. Roberto Aguiar — Timoshenko beam formulation and parametric building methodology
- Edward Wilson — Shell element formulation (incompatible modes, drilling DOF)

## License

MIT (inherited from awatif). See [LICENSE](LICENSE) for details.
