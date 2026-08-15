# Hekatan Struct Lineal vs ETABS — qué concuerda y qué no

Este archivo es **el hilo**: se actualiza cada vez que se mide algo contra ETABS
(o contra SAFE / analítico), y dice de un vistazo por dónde va cada capa. Cada
número de aquí es **medido y reproducible**, no un límite del test ni una cuenta
a mano. La columna «cómo repetirlo» tiene el comando exacto.

**Última medida: 2026-08-15** · suite `npm test` → **103/103** · WASM y C++
nativo idénticos a 13 decimales.

**Regla de oro** para que la comparación signifique algo: mismo modelo, misma
malla nudo a nudo, **brazos rígidos anulados** (`SetEndLengthOffset(nm, False,
0,0,0)`) y **la misma hipótesis de masa** (`INCLUDEELEMENTS` /
`INCLUDEVERTICALMASS` / `LUMPATSTORIES`). Sin eso se miden dos estructuras
distintas.

⚠️ Y **`grep RIGIDZONE` sobre el `.e2k` NO sirve para saber si hay brazos
rígidos**: el automático es el defecto de ETABS y no se escribe en el fichero.
Hay que preguntárselo al modelo con `FrameObj.GetEndLengthOffset`. Creerle al
`grep` costó dar por bueno un +0.545 % de masa como si fuera un defecto de
Hekatan, cuando eran los 78.6876 m de viga que ETABS no pesa.

---

## 1. Lo que YA concuerda

| capa | qué se midió | modelo · árbitro | medido | cómo repetirlo |
|---|---|---|---|---|
| **Modal — frecuencias** | 6 modos, camino de subespacio | Paz & Leigh 6.3 · ETABS 22 (offsets = 0) | **0.0000 %** a 4 decimales en los 6 | `node tests/run.mjs paz` |
| **Modal — frecuencias** | 6 modos, camino denso | Paz 6.3 · ETABS 22 | −0.045 a +0.063 % | ídem |
| **Modal — formas** | MAC de los 12 modos | `pm` (mezanine) · ETABS 22, masa 3D | **MAC ≥ 0.9987**, sin cruces | `python mac_modal.py pm_wasm_3d_12.json pm_etabs_3d_formas.json` |
| **Modal — periodos** | 12 modos, masa 3D | `pm` · ETABS 22 | −0.22 a **+1.66 %** | `node modal_headless.mjs pm_nomasa.heks 12 …` |
| **Masa — dónde está** | masa fuera de cota de piso | galpón · `AssembledJointMass` | **0.0000 t** (ETABS: 0.0000) | `node tests/run.mjs masa` |
| **Masa — total** | Σ masa Ux | galpón · `AssembledJointMass`, offsets = 0 | **+0.00004 %** (140.755089 vs 140.755038 t) | `node tests/run.mjs masa` |
| **Masa — por planta** | 4 cotas de piso | galpón · ETABS 22, offsets = 0 | −0.12 / +0.30 / −0.04 / **+0.00 %** | ídem |
| **Masa — nudo a nudo** | reparto de LUMPATSTORIES | galpón · ETABS 22, offsets = 0 | **76.0 %** de los nudos dentro del **0.1 %**, 84.1 % dentro del 5 % | ídem |
| **Fuerzas de barra** | P V2 V3 T M2 M3, 133 barras | mezanine · ETABS 22 | error medio 0.01–1.71 %, **máx 2.54 %** | `node tests/run.mjs mezanine` |
| **Fuerzas de barra** | P V2 V3 M2 M3, 24 barras | mesa-torsión · ETABS 19.1 | medio 0.04–0.39 %, **máx 0.79 %** | `node tests/run.mjs mesa` |
| **Losas — tipo de área** | flecha máxima, 6 tipos | mezanine · ETABS 22 | deck 0.25 · maciza-mem 0.24 · thin 0.81 · thick 0.12 · nervada 0.61 % | `node tests/run.mjs losas` |
| **Carga total** | ΣRz de cada tipo de losa | mezanine · ETABS 22 | **0.000 %** en los 6 | ídem |
| **Cáscara — flexión** | matriz término a término | 1 celda 1×1×0.20 · ETABS 22 | **idéntica** hasta la última cifra | `python shell_una_celda2.py` |
| **Placa** | flecha y momentos | Navier analítico + SAFE 8×8 | −0.04 a +2.34 % | `node tests/run.mjs safe` |
| **Ejes locales, `ang`, `as`** | frecuencia contra fórmula | voladizo · analítico | −0.48 / −0.33 % | `node tests/run.mjs modal-as-ang` |
| **End releases** | flecha y frecuencia | viga · analítico | 0.03 / 0.01 % | `node tests/run.mjs end-releases` |
| **UI — botón «Correr modal + animar»** | ¿el modelo se mueve de verdad? | bundle de deploy · Test M — Dual | **sí**: 8/8 frames distintos, panel con Modo 1/24, 2.0726 Hz, T = 0.4825 s, Ux 84 % | `node cli/shot_modal_anim.mjs local` |

## 2. Lo que TODAVÍA no

| capa | qué se midió | modelo · árbitro | medido | por qué / qué falta |
|---|---|---|---|---|
| **Cáscara — membrana** | rigidez en su plano | muro 4 cáscaras · ETABS | **−8.0 / −4.6 %** (antes −21.7 / −25.8) | El Q4 de Hekatan no lleva los modos incompatibles completos de CSI. Sale más RÍGIDO en su plano. |
| **Cáscara — drilling** | penalty del giro normal | 1 celda · ETABS | Hekatan **2.03×** el de ETABS | Equivale a `gamma_scale ≈ 0.49`, pero **ni con la misma forma**: no basta con cambiar el defecto, hay que saber qué penalty usa ETABS. Mueve poco (0.03 % en el modo torsional del `pm`). |
| **Modal — galpón entero** | 4 primeros modos con masa | galpón · ETABS 22 (lateral + lump), **offsets = 0** | −1.60 / −0.58 / +0.78 / **−2.99 %** · MAC 0.970 / 0.902 / 0.929 / **0.723** | Con la masa cerrada al 0.00004 %, lo que queda es rigidez. Y el MAC dice que el −2.99 % del modo 4 **no es una frecuencia mal calculada**: Hekatan PARTE en dos el modo 4 de ETABS — sus modos 4 (4.2821) y 5 (4.6424) apuntan los dos al mismo, con MAC **0.723 + 0.271 = 0.994**. Arreglar eso es arreglar la malla (nudos colgados de un solo paño), no el solver. |
| **Modal — galpón, modos altos** | emparejados por forma | galpón · ETABS 22, offsets = 0 | modo 11 Hek ↔ modo 7 ETABS: **MAC 0.9997**, −0.06 % | Cuando la forma es la misma, la frecuencia coincide. Lo de abajo es reordenamiento por modos locales, no error del solver. |
| **Modal — galpón, modos bajos** | uno a uno en 4–6 Hz | galpón · ETABS 22, masa 3D | **Hekatan parte en dos** lo que ETABS da como un modo | Nudos del entrepiso colgados de un solo paño (giros casi sin rigidez). Es un defecto de la MALLA del modelo, y lo delatan los dos programas. Lo limpio es arreglar la malla. |
| **Torsión de barra** | T, 24 barras | mesa-torsión · ETABS 19.1 | medio 2.09 %, **máx 3.72 %** | `J` de Saint-Venant contra el que usa ETABS. |
| **Losa waffle 2D** | flecha máxima | mezanine · ETABS 22 | **3.99 %** | El único tipo de losa por encima del 2 %. |
| **Masa — el resto de recetas** | — | — | sin medir | Falta decidir **qué receta usar en producción** según el `MASSSOURCE` de cada modelo, en vez de elegirla a mano por corrida. |

## 3. Cosas que ya NO hay que perseguir (medidas y descartadas)

| sospecha | veredicto |
|---|---|
| «`Ip = Iy+Iz` vs `J` en la masa torsional» | **No aplica.** El modal usa masa LUMPED (`getGlobalMassMatrix.cpp`), con masa rotacional `1e-9·m`. La masa consistente —la del `Ip`— hoy no la toca el modal. |
| «los shellmods de ETABS cambian la masa» | **No en estos modelos.** `galpon_bodega.e2k` no trae ni un `MASSMODIFIER` ni `WEIGHTMODIFIER`; los `shellmod` del `.heks` son de rigidez. |
| «los shells no aportan masa» | **Sí aportan.** `getGlobalMassMatrix.cpp` pesa Q4 y triángulos (`ρ·t·A`, repartido entre sus nudos). |
| «el solver está mal» | **No.** Paz 6.3 cierra al 0.0000 % por subespacio, y en el galpón (1256 elementos) los modos altos van del 0.01 al 1.3 %. |
| «se acumula memoria / es el WASM» | **No.** El heap sigue el pico del modelo actual; y el C++ nativo da lo mismo que el WASM a 13 decimales. |
| «la ref del Paz 6.3 (9.6780 / 16.9874 …)» | **Falsa.** Solo la reproduce un `.exe` del 17-may compilado de código que nunca se subió; sus modos 5–6 no existen. |
| «los brazos rígidos explican el +0.545 % del galpón» | **SÍ, y era eso.** El primer veredicto (`grep RIGIDZONE` = 0) estaba MAL: el brazo automático es el **defecto** de ETABS y no se escribe en el `.e2k`. Preguntado al modelo, los **1028** objetos lo traen, con 78.6876 m de barra dentro del brazo, y ETABS no pesa el tramo de **viga** que cae ahí (los de columna sí). Anulados, la masa cierra al **0.00004 %**. |
| «ETABS usa una masa de material distinta de `w/g`» | **No.** Preguntado con `PropMaterial.GetWeightAndMass` (`masa_material_etabs.py`): en los 7 materiales `m = w/g` **exacto**, y los valores son los mismos del `.heks` hasta la última cifra (ACERO 7.951071 · ZINC 7.953786 · hormigón 2.402770). Parecía prometedor —explicaba 0.549 de las 0.763 t— y es falso. |
| «Hekatan cubre más metros cuadrados de cáscara» | **No.** Sumando los `AreaElm` de la malla de análisis (`area_cascaras_etabs.py`): **785.6131 m² los dos**, hasta la última cifra. |

## 4. Dónde está el detalle de cada cosa

| tema | archivo |
|---|---|
| Modal: las dos hipótesis de masa, MAC, cáscara término a término, **la báscula (§10)** | `../galpon-bodega-electoral/VALIDACION_SOLVER_MODAL.md` |
| Convención de ejes CSI, `ang`, `as`, suite de regresión | `CLAUDE.md` |
| Por qué «offsets = 0» y el Paz 6.3 | `CLAUDE.md` § *ETABS no pesa el brazo rígido* |
| Comparar masa nudo a nudo | `../galpon-bodega-electoral/comparar_masa_nativa.py` |
| Probar reglas de reparto sin recompilar | `../galpon-bodega-electoral/probar_reglas_lump.py` |
