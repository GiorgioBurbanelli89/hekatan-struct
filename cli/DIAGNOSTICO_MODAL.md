# Diagnóstico — bug del modal con muchos pisos/vanos (deploy `?t=test-m-dual`)

Reproducción con los scripts de `cli/`, todos fieles a `examples/src/test-m/testM.ts`:

| script | qué hace |
|---|---|
| `sweep_case.mjs` / `sweep_run.mjs` | barrido pisos × vanos × malla, midiendo cada fase por separado |
| `mem_probe.mjs` / `mem_run.mjs`   | consumo de heap WASM por fase, busca el techo de 2 GB |
| `accum_probe.mjs`                 | sesión única (como el navegador): subir sliders sin recargar |
| `abort_recovery.mjs`              | ¿el módulo WASM sobrevive a un OOM? |
| `modes_probe.mjs`                 | ¿alcanzan 12 modos para el 90% de masa NEC según los pisos? |
| `hekatan_vs_etabs.mjs`            | compara periodos y masa modal contra ETABS 22 |

Referencia ETABS 22 (OAPI headless): `validacion/etabs-api/testm_sweep_etabs22.py`.

---

## Contraste con ETABS 22 (mismos modelos, Eigen, 12 modos)

| caso (vanos×pisos) | GDL Hek | T₁ Hek | T₁ ETABS | dif | T₂ Hek | T₂ ETABS | dif | ΣUy Hek | ΣUy ETABS | t modal Hek | t ETABS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 2×2×4 | 3 270  | 0.4825 | 0.4832 | −0.14 % | 0.4317 | 0.4387 | −1.6 % | 96.9 | 99.3 | 0.16 s | 72 s |
| 2×2×6 | 4 866  | 0.7307 | 0.7321 | −0.19 % | 0.6483 | 0.6592 | −1.7 % | 83.5 | 84.0 | 0.32 s | 55 s |
| 2×2×8 | 6 462  | 0.9842 | 0.9861 | −0.20 % | 0.8692 | 0.8836 | −1.6 % | 92.8 | 82.8 | 0.18 s | 62 s |
| 3×3×8 | 12 984 | 1.0291 | 1.0329 | −0.37 % | 0.9503 | 0.9582 | −0.8 % | 93.7 | 94.2 | 0.44 s | 74 s |
| 4×4×8 | 21 918 | 1.0568 | 1.0616 | −0.45 % | 0.9961 | 1.0024 | −0.6 % | 94.2 | 94.6 | 1.05 s | 121 s |
| 6×6×8 | 47 022 | 1.0883 | 1.0943 | −0.55 % | 1.0464 | 1.0523 | −0.6 % | 94.9 | 95.2 | 4.12 s | 66 s |

**El motor está bien en todo el rango**: T₁ dentro de 0.6 % de ETABS 22 incluso en el
modelo más grande, y la masa modal reproduce a ETABS. Y el modal de 6×6×8 (47 022 GDL)
**corre en 4.1 s** — pero el código lo bloquea con un tope de 8 000 GDL.

## Lo que NO es

- **No es un error del solver.** Ver tabla de arriba.
- **No es acumulación de memoria.** `accum_probe.mjs` sube de 2×2×4 a 6×6×8 sin recargar:
  el heap sigue el pico del modelo actual (1111 MB), no se acumula.
- **No es la caída de masa modal.** Con 6 pisos Hekatan da ΣUy = 83.4 %; **ETABS 22 da
  84.04 %** en el mismo modelo con 12 modos. Hekatan reproduce a ETABS, incluso en el
  caso raro. Lo que falta son modos, no precisión.

## Las 4 causas reales

### 1. El aviso "Modal omitido" se escribe en un panel oculto

`testM.ts:239-252` — con el método modal 3 (default) el tope es `dofCap = 8000` GDL.
La malla del modal es `ms = 1.0` m, así que:

| vanos | GDL modal (4 pisos) | ¿pasa el tope? |
|---|---|---|
| 2×2 | 3 270 | sí |
| 3×3 | 6 552 | sí |
| **4×4** | **11 046** | **no** |
| 6×6 | 23 670 | no |

**Desde 4×4 vanos el modal se omite siempre.** El mensaje va a `modalPanel.render(...)`,
pero `main.ts:529` tiene `__modalTableShown = false` por defecto y `main.ts:5157` oculta
ese panel. **El usuario aprieta "Correr modal + animar" y no ve absolutamente nada** — ni
resultado ni error. Además `runModalEdificio` ya reemplazó el modelo del viewer por la
malla `ms=1.0` (más gruesa que la de display) y no lo restaura, así que lo único que se
percibe es que el modelo cambió de malla y el modal no corrió.

### 1-bis. El modal "se apaga solo" y la tabla desaparece

Comportamiento esperado: una vez apretado "Correr modal", el modo modal queda **activo**;
al cambiar pisos o vanos se recalcula con las dimensiones nuevas y, si la tabla está
abierta, **solo se actualiza**.

Lo que hay: no existe un estado explícito "modal activo". Se infiere de si hay una
animación corriendo — `animateMode.ts:286`: `isPlaying() { return rafId !== 0 }`. En
`main.ts:913` el disparador del rebuild es `if ((isModalCase || modalPlaying) && …)`, y
la rama `else` (`main.ts:925`) hace `modalPanel.div.style.display = "none"`.

La cadena que lo rompe:

1. `runModalAnimate` (`main.ts:5155`) arranca con `modalAnimator.stop()` → `rafId = 0`.
2. Corre el modal. Si se pasa del tope de GDL, devuelve `frequencies: []`.
3. `captureModalPanel.render` (`main.ts:5138`) solo llama `setResults` + `play()` **si
   `out.frequencies.length`** → con el arreglo vacío, el animador nunca arranca y
   `rafId` queda en 0.
4. Al siguiente movimiento de slider, `modalPlaying` es `false` → cae al `else` → **el
   modal ya no se re-corre y la tabla se oculta**.

O sea: en cuanto se cruza el tope una vez, el modal queda apagado **de forma permanente**
— no vuelve ni bajando los pisos otra vez; hay que apretar el botón de nuevo. Lo mismo
pasa si el usuario simplemente pausa la animación: `isPlaying()` cae a `false` y el modal
deja de seguir a los sliders.

El arreglo de fondo es un flag explícito (`modalActivo`) que se prenda con el botón y se
apague solo al cambiar de caso, en vez de leer `rafId`; y que la rama `else` no oculte la
tabla si el usuario la dejó abierta.

### 2. El tope de 8000 GDL está puesto sobre la fase equivocada

El eigensolver con condensación de Guyan es la parte **barata**. Medido sin tope:

| modelo | GDL | modal (Guyan) | heap modal | estático (`deform`) | heap estático |
|---|---|---|---|---|---|
| 4×4×4 | 20 946 | 72 MB | 1 615 ms | 301 MB | 1 185 ms |
| 6×6×8 | 90 234 | 317 MB | 21 287 ms | 1 230 MB | 19 489 ms |

El modal usa **4× menos memoria** que el estático. El cuello de botella es `deform`, que
**no tiene ningún tope**. Peor: `runModalEdificio` llama a `buildEdificio` (que corre
`deform` + `analyze` completos, `testM.ts:176-179`) **antes** de evaluar `dof > dofCap`
— se paga el análisis entero y recién después se decide omitir el modal.

### 3. `deform.cpp` usa `SparseLU` donde corresponde `SimplicialLDLT`

`deform.cpp:139` factoriza con `Eigen::SparseLU`, un solver para matrices **no simétricas**
(guarda L y U por separado, reordena con COLAMD). K es simétrica y definida positiva.
`modal.cpp:169` ya usa `SimplicialLDLT` — y por eso gasta 317 MB donde el estático gasta
1230 MB para la misma malla.

Consecuencia: a malla fina el WASM revienta su techo:

```
Cannot enlarge memory, requested 2390740992 bytes, but the limit is 2147483648 bytes!
Aborted(Assertion failed: Exception thrown, but exception catching is not enabled.)
```

El build (`hekatan-fem/package.json`) usa `-s ALLOW_MEMORY_GROWTH` **sin**
`MAXIMUM_MEMORY` → techo por defecto de 2 GB en wasm32, y **sin** exception catching, así
que un `std::bad_alloc` de Eigen no se puede atrapar: es `abort()`. En Node el módulo se
recupera para el modelo siguiente (verificado en `abort_recovery.mjs`), pero la pestaña
queda con 1–2 GB reservados que emscripten nunca devuelve.

### 4. Todo corre en el hilo principal, sin Web Workers

No hay un solo `new Worker` en `examples/src` ni en `hekatan-fem/src`. Un 6×6×8 son
**~30 s de bloqueo total** (18 s de estático + 11.6 s de modal): el navegador muestra
"la página no responde". En una máquina de 5–6 GB con Chrome, sumado al 1.1 GB del heap,
el resultado esperable es que la pestaña muera.

### 5 (bonus). 12 modos fijos no escalan con los pisos

`nModes` default = 12 (`testM.ts:444`). NEC-15 §6.2.2 exige ≥90 % de masa participativa:

| pisos | ΣUx | ΣUy | ¿cumple? |
|---|---|---|---|
| 2 | 95.6 | 94.3 | sí |
| 4 | 97.5 | 96.9 | sí |
| **6** | 98.2 | **83.4** | **no** |
| 8 | 97.5 | 92.8 | sí (raspando) |

Con 18 modos, los 6 pisos suben a ΣUy = 98.0 %. **ETABS 22 da 84.04 % en el mismo caso**,
así que el motor está bien — falta subir los modos y avisar cuando no se llega al 90 %.

---

## ¿Sirve usar más modos? Sí — medido

`modes_scale.mjs`, regla 3 modos por piso (la habitual de ETABS):

| caso | ΣUy con 12 modos | ΣUy con 3·pisos | t modal |
|---|---|---|---|
| 2×2×4 | 96.9 % | — (12 ya es 3·4) | 0.25 s |
| 2×2×6 | **83.4 %** | 98.0 % (18 modos) | 0.35 s |
| 2×2×8 | 92.8 % | 98.5 % (24) | 0.67 s |
| 3×3×8 | 93.7 % | 98.8 % (24) | 3.7 s |
| 4×4×8 | 94.2 % | 99.0 % (24) | 6.5 s |
| 6×6×8 | 94.9 % | 99.2 % (24) | 19.6 s |

Con 24 modos **todos** los tamaños superan el 98 %. Como el ejemplo topa en `MAXF = 8`
pisos, 24 = 3 × 8 cubre el rango completo. Costo: ~2× el tiempo del eigen.

## ¿Hasta dónde aguanta el WASM en el navegador? (medido, sin topes inventados)

`browser_limit_run.mjs` — Chrome headless, el **mismo `deform.wasm` del bundle**, una
pestaña nueva por caso (el heap de emscripten sólo crece; reusar la pestaña contaminaría
la medición del siguiente).

**Estático (`deform`, malla de display):**

| caso | GDL | heap | tiempo | estado |
|---|---|---|---|---|
| 4×4×8 | 41 706 | 599 MB | 7.2 s | ok |
| 6×6×8 | 90 234 | 1 230 MB | 38 s | ok |
| **8×8×8** | **157 626** | **2 048 MB** | **109 s** | **ok — al filo del techo** |
| 6×6×8 @0.5 | 181 596 | — | — | OOM: pidió 2.39 GB |
| 10×10×8 | 243 882 | — | — | OOM: pidió 2.60 GB |
| 12×12×8 | 349 002 | — | — | OOM |

**Modal (Eigen + Guyan, malla 1.0 m, 24 modos):**

| caso | GDL | heap | tiempo | T₁ | ΣUy |
|---|---|---|---|---|---|
| 4×4×8 | 21 918 | 106 MB | 3.2 s | 1.0568 | 99.0 % |
| 6×6×8 | 47 022 | 220 MB | 9.9 s | 1.0883 | 99.2 % |
| 8×8×8 | 81 774 | 454 MB | 54 s | 1.1056 | 99.3 % |
| 10×10×8 | 126 174 | 704 MB | 152 s | 1.1164 | 99.3 % |
| 12×12×8 | — | — | >180 s | — | tiempo excedido (timeout del harness, **no** OOM) |

**El modal nunca se queda sin memoria.** A 126 174 GDL usa 704 MB — le sobra techo. El que
topa es el estático: a 157 626 GDL ya está en los 2 048 MB. Es la confirmación directa del
`SparseLU` vs `SimplicialLDLT`.

**El límite real es el TIEMPO, no la memoria.** El 8×8×8 estático entró en memoria pero
tardó 109 s con la UI congelada, y el modal de 10×10×8 tardó 152 s. El rango usable está
en torno a **40 000 GDL** (4×4×8: 7 s estático + 3 s modal), no en los 157 000 que la
memoria permite.

## Cambios aplicados

1. `testM.ts` — `nModes` default **12 → 24**.
2. `renderModalTable.ts` — **la tabla es solo la tabla**: se quitaron el bloque "Modos
   sísmicos principales" y las líneas de texto de `config.properties` (NEC, cortante,
   derivas, combos) y el espectro. Queda el aviso técnico de masa participativa + tabla.
3. `renderModalTable.ts` — el aviso dice **cuánta masa falta** para el 90 % y en qué
   dirección, citando NEC-15 §6.2.2, en vez del genérico anterior.
4. `renderModalTable.ts` — sin modos ya no muestra un `"Modal: no results"` mudo: imprime
   el **motivo técnico** (el "Modal omitido: N GDL > tope" que antes se perdía).
5. `main.ts` — flag explícito `__modalActivo` en lugar de deducirlo de `rafId !== 0`: una
   vez corrido el modal queda activo y sigue a los sliders; se apaga solo al elegir un caso
   estático o un combo.
6. `main.ts` — la tabla ya no se oculta sola si el usuario la dejó abierta.

## Tanda 2 — solver y binding (recompilando el WASM)

**`deform.cpp`: `SparseLU` → `SimplicialLDLT`** (con fallback a LU si K no resulta
definida positiva, para no romper nada que hoy funcione). Resultados **numéricamente
idénticos** — diferencia relativa 1e-13…1e-14 (redondeo de doble precisión) y T₁ con
diferencia exactamente 0. La comparación contra ETABS 22 no se movió (−0.19 %…−0.55 %).

| caso | GDL | heap antes → después | deform antes → después |
|---|---|---|---|
| 2×2×4 | 6 066 | 87 → **16 MB** (5.4×) | 224 → 164 ms |
| 3×3×4 | 12 324 | 149 → **30 MB** (5.0×) | 367 → 198 ms |
| 4×4×8 | 41 706 | 602 → **132 MB** (4.6×) | 2 249 → 809 ms (2.8×) |
| 6×6×8 | 90 234 | 1 104 → **274 MB** (4.0×) | 16 715 → 5 047 ms (3.3×) |

La memoria es determinista y se repite exacta entre corridas; **los tiempos varían
bastante** según lo que esté haciendo la máquina (el 6×6×8 dio 5.0 s y 9.4 s en dos
corridas), así que tómense como orden de magnitud.

**Techo del estático: 157 626 → 349 002 GDL** (12×12×8 con 1 376 MB). Y el fallo pasó de
`Aborted(… exception catching is not enabled)` — irrecuperable — a un **`std::bad_alloc`**
atrapable, gracias a `-fexceptions`.

**Bug del binding JS (encontrado buscando el techo nuevo).** En los 5 archivos
`*Cpp.ts` (`deform`, `modal`, `modalPaz`, `didactic`, `plateQ4`):

```ts
const nodesPtr = allocate(nodes.flat(), Float64Array, mod.HEAPF64);
//                                                    ↑ se evalúa ANTES de entrar
```

Dentro de `allocate`, `_malloc` puede hacer crecer el heap; con `ALLOW_MEMORY_GROWTH`
emscripten crea un **ArrayBuffer nuevo** y la vista ya pasada queda *detached* → el `.set()`
lanza `Cannot perform %TypedArray%.prototype.set on a detached ArrayBuffer`. **Se dispara
justo con los modelos grandes**, que son los que obligan a crecer el heap. Es un fallo
distinto del OOM. Arreglado releyendo la vista después del `malloc`, sin tocar las 51
llamadas.

**Pendiente**: Web Worker (lo único que queda para que la UI no se congele).

## Arreglos propuestos (por orden de impacto)

1. **Mostrar el aviso siempre.** Que "Modal omitido…" y el chequeo de masa <90 % salgan
   como toast/banner, no dentro de un panel que está oculto por defecto.
2. **Chequear el tope ANTES de construir y resolver**, no después: calcular los GDL de la
   malla del modal a partir de `nbx/nby/nFloors/ms` y abortar temprano.
3. **Subir el tope del modal.** Con Guyan, 90 k GDL corren en 21 s y 317 MB; 8000 es
   demasiado conservador. Un tope de ~40 k GDL es realista.
4. **`SimplicialLDLT` en `deform.cpp`** en lugar de `SparseLU` (K es SPD): baja la memoria
   ~4× y elimina el OOM en el rango de uso normal.
5. **Compilar con `-s MAXIMUM_MEMORY=4GB` y exception catching**, para que un OOM sea un
   error atrapable con mensaje y no un `abort()`.
6. **Mover el solver a un Web Worker** para no congelar la UI.
7. **`nModes` por defecto = 3 × nPisos** (regla habitual en ETABS), con aviso si ΣU < 90 %.
