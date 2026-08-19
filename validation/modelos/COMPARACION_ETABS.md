# El e2k de Hekatan, leído por ETABS — modelo a modelo

Generado con `node cli/comparar_e2k_etabs.mjs`. Los datos salen de abrir
cada `.e2k` en **ETABS de verdad** (`e2k_lote_etabs.py`) y leer lo que ETABS
entendió, no de releer el fichero: el `.e2k` no guarda cotas, las deduce de
la planta del objeto, y releerlo con el mismo criterio con que se escribe
mide una copia.

**52 de 85 cuadran.**

«Barras» no exige igualdad una a una: el exportador junta una columna de
varios tramos en una sola LINE (`MINNUMSTA`) y ETABS la vuelve a partir. Se
pide que cada barra del modelo esté DENTRO de alguna de ETABS.

«Sueltos» son los joints que ETABS crea de más **y que además tocan algo**:
esos añaden grados de libertad. Un joint suelto sin nada conectado no aporta
rigidez ni masa y no cambia el análisis.

| ✓ | ejemplo | categoría | nudos | barras | apoyos | ΣFZ | sección |
|---|---|---|---|---|---|---|---|
| ✗ | `cli-modeler` | 🧪 Utilidades | 80.0 % (5 joints) | 100.0 % de 3 | 2/2 | 0.000 % | 0.000 % |
| ✓ | `benchmark-cft-cantilever` | 1️⃣ Frames · 🎯 1 GDL Axial | 100.0 % (12 joints) | 100.0 % de 10 | 1/1 | 0.000 % | 0.000 % |
| ✓ | `columna-cft` | 1️⃣ Frames · 🎯 1 GDL Axial | 100.0 % (3 joints) | 100.0 % de 10 | 1/1 | 0.000 % | 0.000 % |
| ✓ | `W1_barra_axial` | 1️⃣ Frames · 🎯 1 GDL Axial | 100.0 % (4 joints) | 100.0 % de 3 | 1/1 | 0.000 % | 0.000 % |
| ✓ | `W2_viga_axial_cantilever` | 1️⃣ Frames · 🎯 1 GDL Axial | 100.0 % (2 joints) | 100.0 % de 1 | 1/1 | 0.000 % | 0.000 % |
| ✓ | `W2_viga_axial_composite_cantilever` | 1️⃣ Frames · 🎯 1 GDL Axial | 100.0 % (2 joints) | 100.0 % de 1 | 1/1 | 0.000 % | 0.000 % |
| ✓ | `W2_viga_axial_composite_encased_cantilever` | 1️⃣ Frames · 🎯 1 GDL Axial | 100.0 % (2 joints) | 100.0 % de 1 | 1/1 | 0.000 % | 0.000 % |
| ✓ | `W2_viga_axial_concrete_cantilever` | 1️⃣ Frames · 🎯 1 GDL Axial | 100.0 % (2 joints) | 100.0 % de 1 | 1/1 | 0.000 % | 0.000 % |
| ✓ | `benchmark-concrete-cantilever` | 1️⃣ Frames · 🎯 2 GDL Flexión | 100.0 % (12 joints) | 100.0 % de 10 | 1/1 | 0.000 % | 0.000 % |
| ✓ | `benchmark-steel-cantilever` | 1️⃣ Frames · 🎯 2 GDL Flexión | 100.0 % (12 joints) | 100.0 % de 10 | 1/1 | 0.000 % | 0.000 % |
| ✓ | `viga-cim-guerra-ej7-tinv` | 1️⃣ Frames · 🎯 2 GDL Flexión | 100.0 % (53 joints) | 100.0 % de 52 | 0/0 | 0.000 % | 0.000 % |
| ✓ | `viga-medio-elastico` | 1️⃣ Frames · 🎯 2 GDL Flexión | 100.0 % (17 joints) | 100.0 % de 16 | 2/2 | 0.000 % | 0.000 % |
| ✓ | `W2_viga_flexion_composite_encased_cantilever` | 1️⃣ Frames · 🎯 2 GDL Flexión | 100.0 % (11 joints) | 100.0 % de 10 | 1/1 | 0.000 % | 0.000 % |
| ✓ | `W2_viga_flexion_composite_slab_cantilever` | 1️⃣ Frames · 🎯 2 GDL Flexión | 100.0 % (11 joints) | 100.0 % de 10 | 1/1 | 0.000 % | 0.000 % |
| ✓ | `W2_viga_flexion_concrete_cantilever` | 1️⃣ Frames · 🎯 2 GDL Flexión | 100.0 % (11 joints) | 100.0 % de 10 | 1/1 | 0.000 % | 0.000 % |
| ✓ | `W2_viga_flexion_steel_cantilever` | 1️⃣ Frames · 🎯 2 GDL Flexión | 100.0 % (11 joints) | 100.0 % de 10 | 1/1 | 0.000 % | 0.000 % |
| ✓ | `benchmark-paz-10-7` | 1️⃣ Frames · 🎯 3 GDL Pórtico plano | 100.0 % (5 joints) | 100.0 % de 4 | 2/2 | 0.000 % | 0.000 % |
| ✓ | `benchmark-paz-11-1` | 1️⃣ Frames · 🎯 3 GDL Pórtico plano | 100.0 % (3 joints) | 100.0 % de 2 | 2/2 | 0.000 % | 0.000 % |
| ✓ | `benchmark-paz-12-1` | 1️⃣ Frames · 🎯 3 GDL Pórtico plano | 100.0 % (3 joints) | 100.0 % de 2 | 2/2 | 0.000 % | 0.000 % |
| ✗ | `benchmark-paz-4-1` | 1️⃣ Frames · 🎯 3 GDL Pórtico plano | 80.0 % (5 joints) | 100.0 % de 3 | 2/2 | 0.000 % | 0.000 % |
| ✗ | `benchmark-paz-6-1` | 1️⃣ Frames · 🎯 3 GDL Pórtico plano | 80.0 % (5 joints) | 100.0 % de 3 | 2/2 | 0.000 % | 0.000 % |
| ✗ | `benchmark-paz-7-1` | 1️⃣ Frames · 🎯 3 GDL Pórtico plano | 75.0 % (8 joints) | 100.0 % de 6 | 2/2 | 0.000 % | 0.000 % |
| ✗ | `benchmark-paz-8-1` | 1️⃣ Frames · 🎯 3 GDL Pórtico plano | 75.0 % (8 joints) | 100.0 % de 6 | 2/2 | 0.000 % | 0.000 % |
| ✗ | `benchmark-paz-9-3` | 1️⃣ Frames · 🎯 3 GDL Pórtico plano | 90.9 % (11 joints) | 100.0 % de 12 | 2/2 | 0.000 % | 0.000 % |
| ✓ | `portico-2d` | 1️⃣ Frames · 🎯 3 GDL Pórtico plano | 100.0 % (8 joints) | 100.0 % de 6 | 2/2 | 0.000 % | 0.000 % |
| ✓ | `benchmark-paz-13-1` | 1️⃣ Frames · 🎯 6 GDL Espacial | 100.0 % (6 joints) | 100.0 % de 4 | 4/4 | 0.000 % | 0.000 % |
| ✗ | `tower-3d` | 1️⃣ Frames · 🎯 6 GDL Espacial | 97.9 % (47 joints) | 100.0 % de 69 | 4/4 | 0.000 % | 0.000 % |
| ✓ | `truss-gen` | 1️⃣ Frames · 🎯 6 GDL Espacial | 100.0 % (15 joints) | 100.0 % de 25 | 2/2 | 0.000 % | 0.000 % |
| ✗ | `cerramiento` | 1️⃣ Frames · 🎯 n GDL Sistemas | 88.9 % (9 joints) | 100.0 % de 7 | 4/4 | 0.000 % | 0.000 % |
| ✓ | `edificio-aporticado` | 1️⃣ Frames · 🎯 n GDL Sistemas | 100.0 % (37 joints) | 100.0 % de 63 | 9/9 | 0.000 % | 0.000 % |
| ✗ | `edificio-comparativa-fem` | 1️⃣ Frames · 🎯 n GDL Sistemas | 98.5 % (65 joints) | 100.0 % de 120 | 16/16 | 0.000 % | 0.000 % |
| ✗ | `edificio-frame-nec` | 1️⃣ Frames · 🎯 n GDL Sistemas | 98.6 % (73 joints) | 100.0 % de 145 | 12/12 | 0.000 % | 0.000 % |
| ✗ | `edificio-ladera` | 1️⃣ Frames · 🎯 n GDL Sistemas | 98.3 % (58 joints) | 100.0 % de 113 | 12/12 | 0.000 % | 0.000 % |
| ✗ | `galpon` | 1️⃣ Frames · 🎯 n GDL Sistemas | 98.2 % (56 joints) | 100.0 % de 102 | 10/10 | 0.000 % | 0.000 % |
| ✗ | `galpon-bodega` | 1️⃣ Frames · 🎯 n GDL Sistemas | 99.3 % (451 joints) | 100.0 % de 992 | 24/24 | 0.000 % | 0.000 % |
| ✓ | `test-m-portico` | 1️⃣ Frames · 🎯 n GDL Sistemas | 100.0 % (46 joints) | 100.0 % de 84 | 9/9 | 0.000 % | 0.000 % |
| ✓ | `shell-thin` | 2️⃣ Shells · 🐚 Cáscaras | 100.0 % (81 joints) | 100.0 % de 0 | 32/32 | 0.000 % | — |
| ✗ | `conexion-bfp` | 2️⃣ Shells · 🔩 Conexiones | 58.0 % (762 joints, 319 de más conectados) | 100.0 % de 0 | 32/33 | 0.000 % | — |
| ✗ | `conexion-end-plate` | 2️⃣ Shells · 🔩 Conexiones | 58.5 % (840 joints, 348 de más conectados) | 100.0 % de 0 | 32/33 | 0.000 % | — |
| ✗ | `conexion-rbs` | 2️⃣ Shells · 🔩 Conexiones | 47.1 % (884 joints, 467 de más conectados) | 100.0 % de 0 | 17/21 | 0.000 % | — |
| ✗ | `placa-base` | 2️⃣ Shells · 🔩 Conexiones | 96.8 % (2566 joints, 82 de más conectados) | 100.0 % de 0 | 48/48 | 0.000 % | — |
| ✗ | `membrana` | 2️⃣ Shells · 🕸 Membranas | 55.0 % (180 joints, 81 de más conectados) | 100.0 % de 0 | 9/9 | 0.000 % | — |
| ✗ | `plane` | 2️⃣ Shells · 🕸 Membranas | 53.1 % (288 joints, 135 de más conectados) | 100.0 % de 0 | 9/9 | 0.000 % | — |
| ✗ | `shell-thick` | 2️⃣ Shells · 🕸 Membranas | 54.2 % (216 joints, 99 de más conectados) | 100.0 % de 0 | 9/9 | 0.000 % | — |
| ✓ | `layered-shell` | 2️⃣ Shells · 🥞 Layered | 100.0 % (121 joints) | 100.0 % de 0 | 40/40 | 0.000 % | — |
| ✗ | `guerra-ej1-zapata-cuadrada` | 2️⃣ Shells · 🧰 Cimentaciones | 88.6 % (290 joints, 33 de más conectados) | 100.0 % de 0 | 0/0 | 0.000 % | — |
| ✓ | `guerra-ej2-zapata-rectangular-sismo` | 2️⃣ Shells · 🧰 Cimentaciones | 100.0 % (324 joints) | 100.0 % de 0 | 0/0 | 0.000 % | — |
| ✓ | `guerra-ej3-zapata-rectangular-eccentricidad-grande` | 2️⃣ Shells · 🧰 Cimentaciones | 100.0 % (324 joints) | 100.0 % de 0 | 0/0 | 0.000 % | — |
| ✓ | `guerra-ej4-zapata-combinada-rectangular` | 2️⃣ Shells · 🧰 Cimentaciones | 100.0 % (342 joints) | 100.0 % de 0 | 0/0 | 0.000 % | — |
| ✓ | `guerra-ej5-zapata-combinada-trapezoidal` | 2️⃣ Shells · 🧰 Cimentaciones | 100.0 % (376 joints) | 100.0 % de 0 | 0/0 | 0.000 % | — |
| ✗ | `guerra-ej7-viga-cimentacion-new` | 2️⃣ Shells · 🧰 Cimentaciones | 81.5 % (298 joints, 54 de más conectados) | 100.0 % de 0 | 0/0 | 0.000 % | — |
| ✗ | `guerra-ej8-losa-cimentacion` | 2️⃣ Shells · 🧰 Cimentaciones | 99.9 % (1518 joints) | 100.0 % de 0 | 0/0 | 0.000 % | — |
| ✓ | `safe-bench-zapata-combinada` | 2️⃣ Shells · 🧰 Cimentaciones | 100.0 % (154 joints) | 100.0 % de 0 | 0/0 | 0.000 % | — |
| ✓ | `safe-bench-zapata-comparativa` | 2️⃣ Shells · 🧰 Cimentaciones | 100.0 % (170 joints) | 100.0 % de 0 | 0/0 | 0.000 % | — |
| ✓ | `safe-bench-zapata-conectada` | 2️⃣ Shells · 🧰 Cimentaciones | 100.0 % (106 joints) | 100.0 % de 0 | 0/0 | 0.000 % | — |
| ✓ | `benchmark-safe-ex01-plate` | 2️⃣ Shells · 🧱 Placas | 100.0 % (81 joints) | 100.0 % de 0 | 32/32 | 0.000 % | — |
| ✓ | `plate-thick` | 2️⃣ Shells · 🧱 Placas | 100.0 % (121 joints) | 100.0 % de 0 | 40/40 | 0.000 % | — |
| ✓ | `plate-thin` | 2️⃣ Shells · 🧱 Placas | 100.0 % (121 joints) | 100.0 % de 0 | 40/40 | 0.000 % | — |
| ✓ | `triangular-plate` | 2️⃣ Shells · 🧱 Placas | 100.0 % (32 joints) | 100.0 % de 0 | 32/32 | 0.000 % | — |
| ✓ | `edif-acero` | 4️⃣ Mixtos · 🏢 Edificios | 100.0 % (1371 joints) | 100.0 % de 87 | 9/9 | 0.000 % | 0.000 % |
| ✓ | `edificio-acero-v2` | 4️⃣ Mixtos · 🏢 Edificios | 100.0 % (1335 joints) | 100.0 % de 63 | 9/9 | 0.000 % | 0.000 % |
| ✓ | `edificio-con-losa` | 4️⃣ Mixtos · 🏢 Edificios | 100.0 % (1335 joints) | 100.0 % de 63 | 9/9 | 0.000 % | 0.000 % |
| ✓ | `edificio-con-muros` | 4️⃣ Mixtos · 🏢 Edificios | 100.0 % (2661 joints) | 100.0 % de 174 | 9/9 | 0.000 % | 0.000 % |
| ✓ | `edificio-hormigon` | 4️⃣ Mixtos · 🏢 Edificios | 100.0 % (1335 joints) | 100.0 % de 63 | 9/9 | 0.000 % | 0.000 % |
| ✓ | `edificio-mixto` | 4️⃣ Mixtos · 🏢 Edificios | 100.0 % (1335 joints) | 100.0 % de 63 | 9/9 | 0.000 % | 0.000 % |
| ✓ | `edificio-muros` | 4️⃣ Mixtos · 🏢 Edificios | 100.0 % (2661 joints) | 100.0 % de 2820 | 9/9 | 0.000 % | 0.000 % |
| ✓ | `mezanine` | 4️⃣ Mixtos · 🏢 Edificios | 100.0 % (806 joints) | 100.0 % de 81 | 12/12 | 0.000 % | 0.000 % |
| ✓ | `test-m-dual` | 4️⃣ Mixtos · 🏢 Edificios | 100.0 % (1012 joints) | 100.0 % de 372 | 15/15 | 0.000 % | 0.000 % |
| ✓ | `test-m-losa` | 4️⃣ Mixtos · 🏢 Edificios | 100.0 % (910 joints) | 100.0 % de 372 | 9/9 | 0.000 % | 0.000 % |
| ✓ | `benchmark-3way` | 4️⃣ Mixtos · 🔀 Losas con vigas | 100.0 % (30 joints) | 100.0 % de 20 | 4/4 | 0.000 % | 0.000 % |
| ✓ | `benchmark-cft` | 4️⃣ Mixtos · 🔀 Losas con vigas | 100.0 % (86 joints) | 100.0 % de 36 | 4/4 | 0.000 % | 0.000 % |
| ✗ | `drilling-dof` | 4️⃣ Mixtos · 🔀 Losas con vigas | 100.0 % (92 joints) | 100.0 % de 3 | 10/10 | 0.000 % | 71.377 % |
| ✗ | `membrana-csi` | 4️⃣ Mixtos · 🔀 Losas con vigas | 100.0 % (99 joints) | 100.0 % de 36 | 4/4 | 0.000 % | 177.778 % |
| ✗ | `mesa-torsion` | 4️⃣ Mixtos · 🔀 Losas con vigas | 97.6 % (41 joints) | 100.0 % de 24 | 4/4 | 0.000 % | 0.000 % |
| ✓ | `plate-with-beams` | 4️⃣ Mixtos · 🔀 Losas con vigas | 100.0 % (35 joints) | 100.0 % de 20 | 4/4 | 0.000 % | 0.000 % |
| ✓ | `slab-beams-columns` | 4️⃣ Mixtos · 🔀 Losas con vigas | 100.0 % (40 joints) | 100.0 % de 32 | 4/4 | 0.000 % | 0.000 % |
| ✗ | `benchmark-safe-ex04-plate-beams` | 4️⃣ Mixtos · 🧰 Cimentaciones | 100.0 % (81 joints) | 100.0 % de 16 | 18/18 | 0.000 % | 148067594.132 % |
| ✗ | `guerra-ej6-zapata-unida-viga-amarre` | 4️⃣ Mixtos · 🧰 Cimentaciones | 93.9 % (163 joints, 9 de más conectados) | 100.0 % de 13 | 0/0 | 0.000 % | 0.000 % |
| ✗ | `safe-bench-losa-cimentacion` | 4️⃣ Mixtos · 🧰 Cimentaciones | 99.6 % (229 joints) | 100.0 % de 6 | 0/0 | 0.000 % | 0.000 % |
| ✓ | `safe-bench-viga-cimentacion` | 4️⃣ Mixtos · 🧰 Cimentaciones | 100.0 % (170 joints) | 100.0 % de 36 | 0/0 | 0.000 % | 0.000 % |
| ✓ | `viga-cim-guerra-ej7` | 4️⃣ Mixtos · 🧰 Cimentaciones | 100.0 % (348 joints) | 100.0 % de 52 | 0/0 | 0.000 % | 0.000 % |
| ✗ | `zapata-aislada` | 4️⃣ Mixtos · 🧰 Cimentaciones | 100.0 % (124 joints) | 100.0 % de 1 | 0/0 | 0.000 % | 0.632 % |
| ✗ | `zapata-aislada-validacion` | 4️⃣ Mixtos · 🧰 Cimentaciones | 100.0 % (124 joints) | 100.0 % de 1 | 0/0 | 0.000 % | 0.632 % |
| ✗ | `zapata-viga-amarre` | 4️⃣ Mixtos · 🧰 Cimentaciones | 99.4 % (163 joints) | 100.0 % de 19 | 0/0 | 0.000 % | 0.000 % |
| ✗ | `edificio-dual` | — | ETABS leyó coordenadas NaN del e2k | | | | |
