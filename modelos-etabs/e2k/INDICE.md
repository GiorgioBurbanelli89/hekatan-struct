# Modelos .e2k de los ejemplos de Hekatan Struct Lineal

Generado con `node cli/exportar_todos_e2k.mjs` — **no editar a mano**.
Mismo árbol que el selector del workspace. Cada fichero sale del mismo
`exportE2k` que usa el botón de la interfaz, con `weightMode: "manual"`
(SELFWEIGHT 0 y las cargas como POINTLOAD) para que ETABS no meta su propio
peso propio y se comparen dos cosas distintas.

**85 modelos.**

| categoría | ejemplo | nudos | elementos | fichero |
|---|---|---|---|---|
| 🧪 Utilidades | CLI Modeler (comandos) | 4 | 3 | `utilidades/cli-modeler.e2k` |
| 1️⃣ Frames · 🎯 1 GDL Axial | 🏁 🏁 Frame · Columna CFT Cantilever | 11 | 10 | `1-frames/1-gdl-axial/benchmark-cft-cantilever.e2k` |
| 1️⃣ Frames · 🎯 1 GDL Axial | Columna CFT (AISC 360-22 §I2) | 11 | 10 | `1-frames/1-gdl-axial/columna-cft.e2k` |
| 1️⃣ Frames · 🎯 1 GDL Axial | 🏁 W1 — Barra axial (1 DOF) | 4 | 3 | `1-frames/1-gdl-axial/W1_barra_axial.e2k` |
| 1️⃣ Frames · 🎯 1 GDL Axial | 🏁 Viga axial Acero I-450 cantilever (1 DOF) | 2 | 1 | `1-frames/1-gdl-axial/W2_viga_axial_cantilever.e2k` |
| 1️⃣ Frames · 🎯 1 GDL Axial | 🏁 Viga axial Compuesta Slab colaborante (Acero+Losa) cantilever (1 DOF) | 2 | 1 | `1-frames/1-gdl-axial/W2_viga_axial_composite_cantilever.e2k` |
| 1️⃣ Frames · 🎯 1 GDL Axial | 🏁 Viga axial Compuesta SRC Encased cantilever (1 DOF) | 2 | 1 | `1-frames/1-gdl-axial/W2_viga_axial_composite_encased_cantilever.e2k` |
| 1️⃣ Frames · 🎯 1 GDL Axial | 🏁 Viga axial Hormigón 30×30 cantilever (1 DOF) | 2 | 1 | `1-frames/1-gdl-axial/W2_viga_axial_concrete_cantilever.e2k` |
| 1️⃣ Frames · 🎯 2 GDL Flexión | 🏁 🏁 Frame · Columna HORMIGÓN Cantilever | 11 | 10 | `1-frames/2-gdl-flexion/benchmark-concrete-cantilever.e2k` |
| 1️⃣ Frames · 🎯 2 GDL Flexión | 🏁 🏁 Frame · Columna ACERO Cantilever | 11 | 10 | `1-frames/2-gdl-flexion/benchmark-steel-cantilever.e2k` |
| 1️⃣ Frames · 🎯 2 GDL Flexión | Ej.7 · Viga Cimentación (T invertida + pedestales) | 53 | 52 | `1-frames/2-gdl-flexion/viga-cim-guerra-ej7-tinv.e2k` |
| 1️⃣ Frames · 🎯 2 GDL Flexión | Viga sobre Medio Elástico (Winkler) | 17 | 16 | `1-frames/2-gdl-flexion/viga-medio-elastico.e2k` |
| 1️⃣ Frames · 🎯 2 GDL Flexión | 🏁 Viga flexión Compuesta SRC Encased cantilever (2 DOF) | 11 | 10 | `1-frames/2-gdl-flexion/W2_viga_flexion_composite_encased_cantilever.e2k` |
| 1️⃣ Frames · 🎯 2 GDL Flexión | 🏁 Viga flexión Compuesta Slab colaborante cantilever (2 DOF) | 11 | 10 | `1-frames/2-gdl-flexion/W2_viga_flexion_composite_slab_cantilever.e2k` |
| 1️⃣ Frames · 🎯 2 GDL Flexión | 🏁 Viga flexión Hormigón 30×60 cantilever (2 DOF) | 11 | 10 | `1-frames/2-gdl-flexion/W2_viga_flexion_concrete_cantilever.e2k` |
| 1️⃣ Frames · 🎯 2 GDL Flexión | 🏁 Viga flexión Acero IPE 300 cantilever (2 DOF) | 11 | 10 | `1-frames/2-gdl-flexion/W2_viga_flexion_steel_cantilever.e2k` |
| 1️⃣ Frames · 🎯 3 GDL Pórtico plano | 🏁 🏁 Frame · Paz 10.7 (fixed-fixed beam — 4 elementos) | 5 | 4 | `1-frames/3-gdl-portico-plano/benchmark-paz-10-7.e2k` |
| 1️⃣ Frames · 🎯 3 GDL Pórtico plano | 🏁 🏁 Frame · Paz 11.1 (plane frame inclinado 45°) | 3 | 2 | `1-frames/3-gdl-portico-plano/benchmark-paz-11-1.e2k` |
| 1️⃣ Frames · 🎯 3 GDL Pórtico plano | 🏁 🏁 Frame · Paz 12.1 (grid frame 3D — L horizontal) | 3 | 2 | `1-frames/3-gdl-portico-plano/benchmark-paz-12-1.e2k` |
| 1️⃣ Frames · 🎯 3 GDL Pórtico plano | 🏁 🏁 Frame · Paz 4.1 (1-DOF rectangular impulse) | 4 | 3 | `1-frames/3-gdl-portico-plano/benchmark-paz-4-1.e2k` |
| 1️⃣ Frames · 🎯 3 GDL Pórtico plano | 🏁 🏁 Frame · Paz 6.1 (Newmark-β canónico 1-DOF) | 4 | 3 | `1-frames/3-gdl-portico-plano/benchmark-paz-6-1.e2k` |
| 1️⃣ Frames · 🎯 3 GDL Pórtico plano | 🏁 🏁 Frame · Paz 7.1 (2-story shear building) | 6 | 6 | `1-frames/3-gdl-portico-plano/benchmark-paz-7-1.e2k` |
| 1️⃣ Frames · 🎯 3 GDL Pórtico plano | 🏁 🏁 Frame · Paz 8.1 (2-DOF triangular impulse) | 6 | 6 | `1-frames/3-gdl-portico-plano/benchmark-paz-8-1.e2k` |
| 1️⃣ Frames · 🎯 3 GDL Pórtico plano | 🏁 🏁 Frame · Paz 9.3 (4-story uniform shear bldg) | 10 | 12 | `1-frames/3-gdl-portico-plano/benchmark-paz-9-3.e2k` |
| 1️⃣ Frames · 🎯 3 GDL Pórtico plano | Pórtico 2D (un piso) | 7 | 6 | `1-frames/3-gdl-portico-plano/portico-2d.e2k` |
| 1️⃣ Frames · 🎯 6 GDL Espacial | 🏁 🏁 Frame · Paz 13.1 (Space Frame 3D — 4 vigas radiando) | 5 | 4 | `1-frames/6-gdl-espacial/benchmark-paz-13-1.e2k` |
| 1️⃣ Frames · 🎯 6 GDL Espacial | Torre 3D (con diagonales) | 46 | 69 | `1-frames/6-gdl-espacial/tower-3d.e2k` |
| 1️⃣ Frames · 🎯 6 GDL Espacial | Cercha (Warren) | 14 | 25 | `1-frames/6-gdl-espacial/truss-gen.e2k` |
| 1️⃣ Frames · 🎯 n GDL Sistemas | Cerramiento (pórtico plano N vanos) | 8 | 7 | `1-frames/n-gdl-sistemas/cerramiento.e2k` |
| 1️⃣ Frames · 🎯 n GDL Sistemas | Edificio Aporticado | 36 | 63 | `1-frames/n-gdl-sistemas/edificio-aporticado.e2k` |
| 1️⃣ Frames · 🎯 n GDL Sistemas | 🏁 Edificio · Comparativa FEM cruzada | 64 | 120 | `1-frames/n-gdl-sistemas/edificio-comparativa-fem.e2k` |
| 1️⃣ Frames · 🎯 n GDL Sistemas | Edificio pórtico · carga lateral NEC | 72 | 145 | `1-frames/n-gdl-sistemas/edificio-frame-nec.e2k` |
| 1️⃣ Frames · 🎯 n GDL Sistemas | Edificio en Ladera | 57 | 113 | `1-frames/n-gdl-sistemas/edificio-ladera.e2k` |
| 1️⃣ Frames · 🎯 n GDL Sistemas | Galpón (nave industrial) | 55 | 102 | `1-frames/n-gdl-sistemas/galpon.e2k` |
| 1️⃣ Frames · 🎯 n GDL Sistemas | Galpon bodega 2 plantas (analitico del DWG) | 448 | 992 | `1-frames/n-gdl-sistemas/galpon-bodega.e2k` |
| 1️⃣ Frames · 🎯 n GDL Sistemas | 🎓 Test M — Solo pórticos (sin losa) | 45 | 84 | `1-frames/n-gdl-sistemas/test-m-portico.e2k` |
| 2️⃣ Shells · 🐚 Cáscaras | 🏁 Shell Thin (Kirchhoff-Love) — Hekatan vs SAP δ+4.31% M+0.47% | 81 | 64 | `2-shells/cascaras/shell-thin.e2k` |
| 2️⃣ Shells · 🔩 Conexiones | Conexión BFP (Bolted Flange Plate · AISC 358 §7) | 514 | 432 | `2-shells/conexiones/conexion-bfp.e2k` |
| 2️⃣ Shells · 🔩 Conexiones | Conexión End Plate 4E/4ES (AISC 358 §6) | 515 | 440 | `2-shells/conexiones/conexion-end-plate.e2k` |
| 2️⃣ Shells · 🔩 Conexiones | Conexión RBS (AISC 358-22 · Protocolo K3) | 611 | 540 | `2-shells/conexiones/conexion-rbs.e2k` |
| 2️⃣ Shells · 🔩 Conexiones | Placa base anclada (AISC 360-22 §J8 + ACI 318) | 2493 | 2350 | `2-shells/conexiones/placa-base.e2k` |
| 2️⃣ Shells · 🕸 Membranas | 🏁 Membrana (Plane Stress) — Hekatan vs SAP -0.23% | 99 | 80 | `2-shells/membranas/membrana.e2k` |
| 2️⃣ Shells · 🕸 Membranas | Plane Element (Q4 plane stress) | 153 | 128 | `2-shells/membranas/plane.e2k` |
| 2️⃣ Shells · 🕸 Membranas | 🏁 Shell Thick (MITC4) — Hekatan vs SAP +0.30% | 117 | 96 | `2-shells/membranas/shell-thick.e2k` |
| 2️⃣ Shells · 🥞 Layered | 🏁 Layered Shell (CLT/ABBD) — Hekatan vs SAP layered (ratios 0.7%) | 121 | 100 | `2-shells/layered/layered-shell.e2k` |
| 2️⃣ Shells · 🧰 Cimentaciones | 🏁 Ej.1 · Zapata Aislada Cuadrada (3.45×3.45×0.45) | 289 | 256 | `2-shells/cimentaciones/guerra-ej1-zapata-cuadrada.e2k` |
| 2️⃣ Shells · 🧰 Cimentaciones | 🏁 Ej.2 · Zapata Rectangular + Sismo (4.60×4.00×0.55) | 323 | 288 | `2-shells/cimentaciones/guerra-ej2-zapata-rectangular-sismo.e2k` |
| 2️⃣ Shells · 🧰 Cimentaciones | 🏁 Ej.3 · Zapata Rectangular EXCENTRICIDAD GRANDE (4.60×4.00×0.55) | 323 | 288 | `2-shells/cimentaciones/guerra-ej3-zapata-rectangular-eccentricidad-grande.e2k` |
| 2️⃣ Shells · 🧰 Cimentaciones | 🏁 Ej.4 · Zapata Combinada Rectangular (7.50×2.50) | 341 | 300 | `2-shells/cimentaciones/guerra-ej4-zapata-combinada-rectangular.e2k` |
| 2️⃣ Shells · 🧰 Cimentaciones | 🏁 Ej.5 · Zapata Trapezoidal (L=5, B1=3.75→B2=1.60) | 375 | 336 | `2-shells/cimentaciones/guerra-ej5-zapata-combinada-trapezoidal.e2k` |
| 2️⃣ Shells · 🧰 Cimentaciones | 🏁 Ej.7 NEW · Viga Cimentación L=17.20m (4 cols) | 297 | 256 | `2-shells/cimentaciones/guerra-ej7-viga-cimentacion-new.e2k` |
| 2️⃣ Shells · 🧰 Cimentaciones | 🏁 Ej.8 · Losa de Cimentación (Raft 23×21m, 16 cols) | 1517 | 1440 | `2-shells/cimentaciones/guerra-ej8-losa-cimentacion.e2k` |
| 2️⃣ Shells · 🧰 Cimentaciones | 🏁 SAFE Benchmark · Zapata Combinada 4×2×0.40m, 2 cols (Δ +0.08%) | 153 | 128 | `2-shells/cimentaciones/safe-bench-zapata-combinada.e2k` |
| 2️⃣ Shells · 🧰 Cimentaciones | 🏁 🎓 Zapata ISSE Comparativa: Empotrada vs Winkler vs Vesic (5 autores) | 169 | 144 | `2-shells/cimentaciones/safe-bench-zapata-comparativa.e2k` |
| 2️⃣ Shells · 🧰 Cimentaciones | 🏁 SAFE Benchmark · Zapata Conectada 5×1m t variable (Δ -0.25%) | 105 | 80 | `2-shells/cimentaciones/safe-bench-zapata-conectada.e2k` |
| 2️⃣ Shells · 🧱 Placas | 🏁 SAFE Ex.1 · Placa SS rectangular (Timoshenko) | 81 | 64 | `2-shells/placas/benchmark-safe-ex01-plate.e2k` |
| 2️⃣ Shells · 🧱 Placas | 🏁 Plate Thick (Mindlin-Reissner) — Hekatan vs SAP +0.30% | 121 | 100 | `2-shells/placas/plate-thick.e2k` |
| 2️⃣ Shells · 🧱 Placas | 🏁 Plate Thin (Kirchhoff) — Hekatan vs SAP -0.32% | 121 | 100 | `2-shells/placas/plate-thin.e2k` |
| 2️⃣ Shells · 🧱 Placas | Placa Triangular MITC3 (Bathe) | 81 | 128 | `2-shells/placas/triangular-plate.e2k` |
| 4️⃣ Mixtos · 🏢 Edificios | Edificio de Acero (W + deck) | 1368 | 1287 | `4-mixtos/edificios/edif-acero.e2k` |
| 4️⃣ Mixtos · 🏢 Edificios | Edificio Acero (W profiles) | 1332 | 1263 | `4-mixtos/edificios/edificio-acero-v2.e2k` |
| 4️⃣ Mixtos · 🏢 Edificios | Edificio con Losa (sin muros) | 1332 | 1263 | `4-mixtos/edificios/edificio-con-losa.e2k` |
| 4️⃣ Mixtos · 🏢 Edificios | Edificio con Muros de corte | 2655 | 2574 | `4-mixtos/edificios/edificio-con-muros.e2k` |
| 4️⃣ Mixtos · 🏢 Edificios | Edificio Dual (Mixto + Muros + Diagonales) | 3987 | 4450 | `4-mixtos/edificios/edificio-dual.e2k` |
| 4️⃣ Mixtos · 🏢 Edificios | Edificio Hormigón (puro) | 1332 | 1263 | `4-mixtos/edificios/edificio-hormigon.e2k` |
| 4️⃣ Mixtos · 🏢 Edificios | Edificio Mixto (Col Hormigón + Viga Acero) | 1332 | 1263 | `4-mixtos/edificios/edificio-mixto.e2k` |
| 4️⃣ Mixtos · 🏢 Edificios | Edificio con Muros de Corte (Hormigón) | 2661 | 5220 | `4-mixtos/edificios/edificio-muros.e2k` |
| 4️⃣ Mixtos · 🏢 Edificios | Mezanine (1 piso acero + deck) | 805 | 801 | `4-mixtos/edificios/mezanine.e2k` |
| 4️⃣ Mixtos · 🏢 Edificios | 🎓 Test M — Dual (pórtico + losa + muros) | 1011 | 1268 | `4-mixtos/edificios/test-m-dual.e2k` |
| 4️⃣ Mixtos · 🏢 Edificios | 🎓 Test M — Solo con losa (pórtico + losa) | 909 | 1156 | `4-mixtos/edificios/test-m-losa.e2k` |
| 4️⃣ Mixtos · 🔀 Losas con vigas | 🏁 🏁 Benchmark 3-way (Shell+Frame DOF mismatch) | 29 | 36 | `4-mixtos/losas-con-vigas/benchmark-3way.e2k` |
| 4️⃣ Mixtos · 🔀 Losas con vigas | 🏁 🏁 Benchmark CFT (cols + I-beams + losa) | 85 | 100 | `4-mixtos/losas-con-vigas/benchmark-cft.e2k` |
| 4️⃣ Mixtos · 🔀 Losas con vigas | Drilling DOF — 2 muros + viga de acople | 92 | 67 | `4-mixtos/losas-con-vigas/drilling-dof.e2k` |
| 4️⃣ Mixtos · 🔀 Losas con vigas | Membrana CSI (Shell-Membrane + tri/trap load) | 99 | 116 | `4-mixtos/losas-con-vigas/membrana-csi.e2k` |
| 4️⃣ Mixtos · 🔀 Losas con vigas | 🏁 🌀 Mesa de Torsión (ETABS Gabriela/Seproinca) | 40 | 49 | `4-mixtos/losas-con-vigas/mesa-torsion.e2k` |
| 4️⃣ Mixtos · 🔀 Losas con vigas | 🏁 Plate + Perimeter Beams (vs SAP) | 35 | 44 | `4-mixtos/losas-con-vigas/plate-with-beams.e2k` |
| 4️⃣ Mixtos · 🔀 Losas con vigas | 🏁 Slab + Vigas + Columnas (1 piso completo) | 47 | 56 | `4-mixtos/losas-con-vigas/slab-beams-columns.e2k` |
| 4️⃣ Mixtos · 🧰 Cimentaciones | 🏁 SAFE Ex.4 · Placa SS + vigas elásticas (Timoshenko, λ=4) | 81 | 80 | `4-mixtos/cimentaciones/benchmark-safe-ex04-plate-beams.e2k` |
| 4️⃣ Mixtos · 🧰 Cimentaciones | Ej.6 · Zapata Unida con Viga de Amarre (Guerra MDI pag.113) | 162 | 141 | `4-mixtos/cimentaciones/guerra-ej6-zapata-unida-viga-amarre.e2k` |
| 4️⃣ Mixtos · 🧰 Cimentaciones | 🏁 SAFE Benchmark · Losa Cimentación 6×8×0.50m, 6 cols (Δ +0.33%) | 227 | 198 | `4-mixtos/cimentaciones/safe-bench-losa-cimentacion.e2k` |
| 4️⃣ Mixtos · 🧰 Cimentaciones | 🏁 Viga de Cimentación · Zapata corrida + Viga + Pedestales | 169 | 164 | `4-mixtos/cimentaciones/safe-bench-viga-cimentacion.e2k` |
| 4️⃣ Mixtos · 🧰 Cimentaciones | Ej.7 · Viga Cimentación (L=17.20m, 4 cols c/M) | 347 | 340 | `4-mixtos/cimentaciones/viga-cim-guerra-ej7.e2k` |
| 4️⃣ Mixtos · 🧰 Cimentaciones | Zapata Aislada (Ecuador q_adm tonf/m²) | 122 | 101 | `4-mixtos/cimentaciones/zapata-aislada.e2k` |
| 4️⃣ Mixtos · 🧰 Cimentaciones | 🏁 Zapata Aislada — Hekatan vs SAFE/Calcpad (Bowles) | 122 | 101 | `4-mixtos/cimentaciones/zapata-aislada-validacion.e2k` |
| 4️⃣ Mixtos · 🧰 Cimentaciones | Zapata + Viga de Amarre + Pedestal | 162 | 147 | `4-mixtos/cimentaciones/zapata-viga-amarre.e2k` |

## Sin exportar

Los ejemplos heredados del upstream abren una página aparte y no tienen
`build()`, así que no hay modelo que exportar:

- `beams` — Paz 6.3 Space Frame (validación 4 solvers)
- `solid-cube-fem` — Cubo Sólido H8 (validación CalculiX)
- `bulbo-presiones-suelo` — Bulbo de Presiones — Serquen SF-70
- `1d-mesh` — Hekatan – 1D Mesh
- `2d-mesh` — Hekatan – 2D Mesh
- `3d-structure` — Hekatan – 3D Structure
- `axial-bar` — Hekatan – Axial Bar
- `truss` — Hekatan – Truss
- `advanced-truss` — Hekatan – Advanced Truss
- `building` — Hekatan – Building (upstream)
- `plate` — Hekatan – Plate (legacy)
- `plate-q4` — Hekatan – Plate Q4 Studio
- `color-map` — Hekatan – Color Map demo
- `curves` — Hekatan – Curves demo
- `drawing` — Hekatan – Drawing canvas
- `tables` — Hekatan – Tables demo
- `cad-editor` — Hekatan – CAD Editor
- `calc-editor` — Hekatan – Calc Editor
- `slab-designer` — Hekatan – Slab Designer
- `fem-explained` — Hekatan – FEM Explained
- `report` — Hekatan – Report (Calcpad)
- `gateway-arch` — Gateway Arch
- `cable-stayed-bridge` — Puente Atirantado
- `twisted-tower` — Torre Retorcida
- `burj-khalifa` — Burj Khalifa style
- `sydney-opera` — Sydney Opera House
- `diagrid` — Diagrid (Gherkin) style
- `pergola` — Pérgola de acero
- `shear-wall-q4` — Muro de Corte Q4
- `cantilever-beam-q4` — Viga Cantilever Q4
- `placa-cantilever-q4` — Placa Cantilever XY Q4
- `slope-stability` — Estabilidad de Talud (SRM)
- `placa-base-h` — Placa Base + Columna H (CBFEM)
- `bolt-hole-detail` — Detalle Perno + Orificio (Kirsch)
- `conexion-diafragma-cft` — Conexión Viga-Columna CFT con Diafragma (Cervantes)
- `placa-base-hueca` — Placa Base + Columna HSS Hueca (acero)
- `placa-base-cft` — Placa Base + Columna CFT (rellena de concreto)
- `columna-cft-h8` — Columna CFT con sólidos H8
- `viga-doble-t` — Viga Doble-T (perfil W)
- `tablero-puente` — Tablero Puente (3 vigas+losa, test Solar)

Sin elementos (utilidades y lienzos vacíos): `new-blank`, `csi-importer`, `cad-draw`
