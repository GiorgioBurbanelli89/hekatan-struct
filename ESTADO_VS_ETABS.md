# Hekatan Struct Lineal vs ETABS — qué concuerda y qué no

Este archivo es **el hilo**: se actualiza cada vez que se mide algo contra ETABS
(o contra SAFE / analítico), y dice de un vistazo por dónde va cada capa. Cada
número de aquí es **medido y reproducible**, no un límite del test ni una cuenta
a mano. La columna «cómo repetirlo» tiene el comando exacto.

**Última medida: 2026-08-15** · suite `npm test` → **130/130** · WASM y C++
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
| **Placa — convergencia contra Navier** | `w` del centro refinando 4×4 → 32×32 | placa SS 4×4 m, t = 0.20 · **serie de Navier + MYSTRAN** | thin **−2.00 %** · thick +3.28 % · **MYSTRAN CQUAD4 +5.72 %** | `python fem-libre/casos/gen_placa_bdf.py 32` |
| **Cáscara — membrana en su plano** | `ux` de la punta, malla de 4 cáscaras | muro en voladizo · **ETABS 19.1 corrido por OAPI** | Hekatan **5.9139** vs ETABS **5.8664** mm → **+0.81 %** (antes: 5.3728, −8.0/−4.6 %) | `python galpon-bodega-electoral/muro_membrana_etabs.py 4 1` |
| **Cáscara — membrana, CONVERGENCIA** | `ux` de la punta refinando la malla | viga-muro en voladizo · viga de Timoshenko (flexión + cortante) | 4 elem −11.63 % → 16: −3.97 → 64: −1.30 → 256: **−0.51 %** · 576: −0.35 % | `node tests/run.mjs membrana-conv` |
| **Unidades de la masa** | `c = √(E/ρ)` de cada ejemplo con modal | 39 ejemplos · velocidad de onda del material + voladizo Euler-Bernoulli | los 39 dentro de **1500–8000 m/s**; el voladizo de acero cierra al **1.5 %** | `node tests/run.mjs unidades` |
| **UI — botón «Correr modal + animar»** | ¿el modelo se mueve de verdad? | bundle de deploy · Test M — Dual | **sí**: 8/8 frames distintos, panel con Modo 1/24, 2.0726 Hz, T = 0.4825 s, Ux 84 % | `node cli/shot_modal_anim.mjs local` |

### Cáscara: los TRES tipos, en los TRES escalones (2026-08-18)

`edificios-slab/banco_shell.py A B C` — se sube un escalón cada vez y solo se
pasa al siguiente cuando el anterior cierra:

```
A  solo AREA          placa sola, sin una barra
B  AREA + FRAMES      la misma placa con vigas de borde
C  3D                 pórtico con losa
```

| tipo | A (solo área) | B (+ vigas) | C (3D) | peor | |
|---|---|---|---|---|---|
| **Thin** (Kirchhoff) | 0.72 % | 0.93 % | 0.54 % | **0.93 %** | ✅ **cerrado** |
| **Membrane** | 0.06 % | 0.85 % | 0.00 % | **0.85 %** | ✅ **cerrado** |
| **Thick** (Mindlin) | 1.42 % | **11.28 %** | 6.97 % | **11.28 %** | ❌ abierto |

**Thin y Membrane cierran por debajo del 1 % en los tres escalones.** Con malla
fina (445 elementos) bajan a 0.037 % y 0.00016 %.

⚠️ El −2.00 % de `thin` contra **Navier** que aparece más arriba no contradice
esto: Navier es la solución de **Kirchhoff sin cortante**, y ningún
cuadrilátero de 4 nodos converge a ella. Contra **ETABS**, que es el mismo tipo
de elemento, `thin` cierra.

**Y `Thick` SÍ es la malla.** Barriendo la malla en el
escalón B (`banco_shell.py B --malla=N`):

| malla | Thin | **Thick** | Membrane |
|---|---|---|---|
| 2×2 | 1.17 % | **57.73 %** | 2.46 % |
| 4×4 | 0.93 % | **11.28 %** | 0.85 % |
| 8×8 | 0.15 % | **2.68 %** | 0.08 % |

⚠️ **El 8×8 hay que sacarlo del BANCO, no del calibrador.** `calibrar_shell.py`
pone `NX = NY = 8` pero compara contra el ETABS guardado en `banco_shell.json`,
que se generó con **4×4**: mide Hekatan de 8×8 contra ETABS de 4×4 y daba un
0.02 % que no significa nada. El dato bueno es el del banco, que corre ETABS
con la misma malla en la misma pasada.

Lo que lo delata no es el porcentaje, es el **signo del error**:

```
malla 2x2   Hekatan -4.96e-4   ETABS -1.173e-3   -> Hekatan 2.4x MAS RIGIDO
malla 4x4   Hekatan -1.134e-3  ETABS -1.278e-3   -> 1.13x
malla 8x8   Hekatan -1.279e-3  ETABS -1.314e-3   -> 1.03x
```

**Hekatan sale rígido de más y el exceso se va al refinar.** Solo lo sufre
`Thick`, el único con deformación por cortante transversal.

**No es κ**, y está medido: barriendo κ de 5/6 a 5.0 (`calibrar_shell.py`)
ningún valor cierra los tres escalones a la vez — A empeora cuando B mejora, y
el mejor deja un 2.10 % de peor caso. La regla del propio calibrador: *un
número que solo arregla un caso es un parche.*

### El árbitro que no necesita ETABS: `Thick/Thin` ≥ 1

El árbitro
no necesita otro programa, basta la termodinámica del elemento: **una placa de
Mindlin tiene que salir siempre igual o más flexible que una de Kirchhoff — el
cortante solo puede ablandar.** Así que la razón `Thick/Thin` tiene que ser
≥ 1, y si baja hay error sin nada que discutir.
`python edificios-slab/thick_por_que_rigido.py`:

| t/a | n=2 | n=4 | n=8 | n=12 |
|---|---|---|---|---|
| 0.1000 | 0.5668 | 0.9498 | 1.0939 | 1.1216 |
| 0.0333 | 0.6481 | 0.8677 | 0.9741 | 0.9976 |
| 0.0100 | **0.1485** | 0.7862 | 0.9349 | 0.9698 |
| 0.0033 | **0.0071** | 0.7427 | 0.9200 | 0.9603 |
| 0.0010 | **0.0002** | **0.7401** | **0.9189** | **0.9595** |

Y el barrido que lo cierra, en el límite delgado con vigas:

| variante | n=4 | n=8 |
|---|---|---|
| tal cual | 0.7401 | 0.9189 |
| `alpha_drill` de 0.01 a 20 | **0.7401** | **0.9189** |
| **κ ×10, ×100, ×1000** | **0.7401** | **0.9188** |

⚠️ **Y aquí hubo un razonamiento INVÁLIDO que hay que tirar**: *«κ ×1000 no
mueve el número, luego no es el cortante»*. **Subir κ no puede decir nada
cuando la atadura ya está saturada.** Al bloqueo hay que quitarle rigidez, no
ponerle más. Bajando κ el número **sí** se mueve, y muchísimo:

| κ | n=4 | n=8 |
|---|---|---|
| ×1e-6 | 34.20 | 44.34 |
| **×1e-4** | **1.0997** | 1.3776 |
| ×1e-2 | 0.7438 | 0.9237 |
| ×1 | 0.7401 | 0.9189 |
| ×1000 | 0.7401 | 0.9188 |

(Bajar κ tampoco arregla nada: ablanda **quitando** la atadura.)

### La depuración dinámica, que sí lo resuelve

`python edificios-slab/thick_depuracion_dinamica.py` instrumenta el elemento por
dentro en vez de mirarlo desde fuera. Cuatro medidas:

**1 · El MITC4 está BIEN.** Patch test con los campos de placa exactos:

| campo | E_cortante/D | E_flexión/D |
|---|---|---|
| flexión x² | **0.00** | 0.8767 |
| flexión y² | **0.00** | 0.8767 |
| **torsión xy** | **0.00** | 0.6244 |
| girar sin flechar | 62500 | 0 |

Los tres campos de placa dan **cero exacto** — no hay bug en los puntos de
atadura. El cuarto tiene cortante y **debe** tenerlo: es físico.

**2 · El bloque de cortante tiene rango EXACTAMENTE 4** y escala como **1/t²**
(156 → 15625 → 173611 para t = 0.20 / 0.02 / 0.006).

**3 · Espectro del elemento en el límite delgado:**

| | rígidos | **útiles** | bloqueados |
|---|---|---|---|
| Mindlin + MITC4 | 3 | **5** | 4 |
| MZC Kirchhoff | 3 | **9** | 0 |

Un Mindlin Q4 con integración **completa** ataría 2 componentes × 4 puntos de
Gauss = 8 → 12−3−8 = **1** modo útil: el locking bruto. El MITC4 baja las
ataduras a 4 → **5**. Funciona, pero le quedan **cuatro modos menos que al MZC**.

**4 · Reparto de energía en la solución REAL** (placa + vigas):

| malla | t/a = 0.0333 | t/a = 0.001 |
|---|---|---|
| **2×2** | 4.4 % cortante | **99.95 % cortante** |
| 4×4 | 3.7 % | **0.005 %** |
| 8×8 | 3.2 % | **0.005 %** |

### Son DOS cosas distintas, y antes las junté en una

- **2×2: locking real.** El cortante se lleva el **99.95 %** de la energía: la
  solución **pelea** contra la atadura y no puede. Por eso la razón se hunde a
  0.0002.
- **4×4 y más fino: ya no pelea** (0.005 %). La solución **vive dentro** del
  espacio atado, y lo que sobra **no es energía de cortante: son los 4 modos que
  faltan** — 5 útiles contra 9.

Y las mallas que se usan de verdad son 4×4 y 8×8, o sea el segundo caso: el
**11.28 %** y el **2.68 %** contra ETABS son **el precio de las 4 ataduras del
MITC4**, no un error de implementación. O sea: **el `Thick` de ETABS no es un Q4
de Mindlin con MITC4 a secas** — converge casi como su `Thin`, y el nuestro no.

**Probado ya, y no vale tal cual:** añadir modos incompatibles de Wilson a los
**giros** (4 internos, condensados) sube de **5 a 7** modos útiles, pero se pasa
de blando — los dos más suaves caen a 0.319 contra 0.465 del MZC. Hace falta la
versión que pase el patch test, no la ingenua.

⚠️ **Descartado midiendo**: κ (arriba **y** abajo), α del drilling, el espesor,
y la conexión genérica con vigas. Y **no** es el MITC4: está bien implementado.

## 2. Lo que TODAVÍA no

| capa | qué se midió | modelo · árbitro | medido | por qué / qué falta |
|---|---|---|---|---|
| **Cáscara — drilling** | penalty del giro normal | 1 celda · ETABS | Hekatan **2.03×** el de ETABS | Equivale a `gamma_scale ≈ 0.49`, pero **ni con la misma forma**: no basta con cambiar el defecto, hay que saber qué penalty usa ETABS. Mueve poco (0.03 % en el modo torsional del `pm`). |
| **Modal — galpón entero** | 4 primeros modos con masa | galpón · ETABS 22 (lateral + lump), **offsets = 0** | −1.60 / −0.58 / +0.78 / **−2.99 %** · MAC 0.970 / 0.902 / 0.929 / **0.723** | Con la masa cerrada al 0.00004 %, lo que queda es rigidez. Y el MAC dice que el −2.99 % del modo 4 **no es una frecuencia mal calculada**: Hekatan PARTE en dos el modo 4 de ETABS — sus modos 4 (4.2821) y 5 (4.6424) apuntan los dos al mismo, con MAC **0.723 + 0.271 = 0.994**. Arreglar eso es arreglar la malla (nudos colgados de un solo paño), no el solver. |
| **Modal — galpón, modos altos** | emparejados por forma | galpón · ETABS 22, offsets = 0 | modo 11 Hek ↔ modo 7 ETABS: **MAC 0.9997**, −0.06 % | Cuando la forma es la misma, la frecuencia coincide. Lo de abajo es reordenamiento por modos locales, no error del solver. |
| **Modal — galpón, modos bajos** | uno a uno en 4–6 Hz | galpón · ETABS 22, masa 3D | **Hekatan parte en dos** lo que ETABS da como un modo | Nudos del entrepiso colgados de un solo paño (giros casi sin rigidez). Es un defecto de la MALLA del modelo, y lo delatan los dos programas. Lo limpio es arreglar la malla. |
| **Masa por material en los edificios** | `c = √(E/ρ)` | `edif-acero`, `edificio-acero-v2`, `edificio-mixto`, `edificio-dual`, `mezanine` | **9042 m/s** (acero real: 5048) | `edificioAporticado.ts` pone `rho_c` a TODAS las barras sin mirar `matCol`/`matViga`: el acero entra pesando 2.446 t/m³ en vez de 7.951, o sea **3.25× menos**. Los cinco heredan ese `build`. |
| **Modal de los `benchmark-paz-*`** | f₁ contra el libro | Paz & Leigh 11.1 | libro **4.02 Hz** · ejemplo **0.0858 Hz** | Dos cosas a la vez: pasan `rho_kgm3` con E en kN/m² (**1000×**) y, aun corrigiendo eso (2.71 Hz), el libro usa masa **consistente** (156 / 22L / 4L²) y el motor **lumped**; encima el ejemplo se inventa `Iz = 0.3·I` y `J = 0.05·I`. |
| **Torsión de barra** | T, 24 barras | mesa-torsión · ETABS 19.1 | medio 2.09 %, **máx 3.72 %** | `J` de Saint-Venant contra el que usa ETABS. |
| **Losa waffle 2D** | flecha máxima | mezanine · ETABS 22 | **3.99 %** | El único tipo de losa por encima del 2 %. |
| **Masa — el resto de recetas** | — | — | sin medir | Falta decidir **qué receta usar en producción** según el `MASSSOURCE` de cada modelo, en vez de elegirla a mano por corrida. |

## 3. Cosas que ya NO hay que perseguir (medidas y descartadas)

| sospecha | veredicto |
|---|---|
| «los ejemplos del workspace dan periodos raros porque hay un mecanismo» | **Falso en el `galpon`.** El modo 1 a 0.0855 Hz (T = 11.7 s) movía **45 de 55 nudos en bloque**, con el 98.3 % de la forma en X: eso es el modo lateral global, no un nudo suelto. Eran dos cosas y ninguna del solver: `densities = 78` (peso, no masa → 9.81× → f/3.13) e `I = A²/12`, la inercia de un cuadrado macizo de 4.47 cm de lado (un IPE 160 de la misma área tiene **26×** más). Con las dos arregladas: **T₁ = 0.73 s**, visto en el PNG de la app. |
| «el −2 % de la placa contra Navier es un fallo nuestro» | **No.** Ningún cuadrilátero de 4 nodos converge a Navier, porque **Navier no es el árbitro correcto**: es la solución de Kirchhoff, sin deformación por cortante, y estos elementos sí la llevan. Con t/a = 0.05 la placa real es ≈ 1 % más flexible que Kirchhoff. Medido refinando hasta 32×32: Hekatan thin se planta en −2.00 %, Hekatan thick en +3.28 % y **MYSTRAN en +5.72 %** — o sea que de los tres, el nuestro es el que menos se aleja. Lo que sí queda pendiente es que `thin`, siendo Kirchhoff puro, debería ir a 0 % y no a −2 %. |
| «`Ip = Iy+Iz` vs `J` en la masa torsional» | **No aplica.** El modal usa masa LUMPED (`getGlobalMassMatrix.cpp`), con masa rotacional `1e-9·m`. La masa consistente —la del `Ip`— hoy no la toca el modal. |
| «los shellmods de ETABS cambian la masa» | **No en estos modelos.** `galpon_bodega.e2k` no trae ni un `MASSMODIFIER` ni `WEIGHTMODIFIER`; los `shellmod` del `.heks` son de rigidez. |
| «los shells no aportan masa» | **Sí aportan.** `getGlobalMassMatrix.cpp` pesa Q4 y triángulos (`ρ·t·A`, repartido entre sus nudos). |
| «el solver está mal» | **No.** Paz 6.3 cierra al 0.0000 % por subespacio, y en el galpón (1256 elementos) los modos altos van del 0.01 al 1.3 %. |
| «se acumula memoria / es el WASM» | **No.** El heap sigue el pico del modelo actual; y el C++ nativo da lo mismo que el WASM a 13 decimales. |
| «la ref del Paz 6.3 (9.6780 / 16.9874 …)» | **Falsa.** Solo la reproduce un `.exe` del 17-may compilado de código que nunca se subió; sus modos 5–6 no existen. |
| «ETABS no pesa el tramo de VIGA dentro del brazo rígido» | **CIERTO, probado con un caso mínimo** (`test_offsets_masa.py`): pórtico de un vano hecho desde cero, columnas 0.40×0.40 y viga 0.30×0.50, acero de 78 kN/m³. La viga recibe brazo `0.20 m` en cada extremo y pesa `78·0.15·5.60 = 65.520 kN` en vez de `·6.00 = 70.200` → razón **0.933333 = 5.60/6.00** exacta. La columna **también tiene brazo** (0.50 m) y su peso **no se mueve**: razón **1.000000** (si se descontara daría 0.916667). Ojo: el brazo de la columna es el **canto entero** de la viga, no la mitad — la regla de la longitud no es simétrica, aunque para la masa da igual. |
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
