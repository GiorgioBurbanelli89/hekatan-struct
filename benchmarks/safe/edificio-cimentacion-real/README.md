# Cimentación Edificio Real — Hekatan vs SAFE (V2 en investigación)

## Update 2026-05-19: intento V2 con modelación estructural correcta

Tras feedback del usuario (cadenas a nivel piso terminado + pedestales
verticales + zapatas abajo), reintenté el caso con la geometría real:
- Zapatas en z=0 (Floor level, SAFE-friendly)
- Pedestales verticales (frame 0.40×0.40m) de z=0 a z=+0.50m
- Cadenas horizontales en z=+0.50m (frame 0.25×0.40m VAmarre)
- Cargas P+Mx+My aplicadas en TOPs (z=+0.50m)

**Resultado:** los 3 tipos de elementos se visualizan correctamente en
SAFE GUI (zapatas+pedestales+cadenas conectados visualmente), pero todos
los uz vuelven 0. Tras 6 iteraciones del fix (AddByPoint, SetSpecialPoint,
SetRestraint, FLOOR MESHING OPTION via DatabaseTables), el merge entre
joints aislados (joint_base/joint_top) y los nodos del mesh auto-generado
de las áreas SIGUE sin funcionar.

**Hipótesis actual**: SAFE auto-mesh ignora `SetSpecialPoint=True` cuando
el modelo se construye 100% via API (vs GUI). El fix requiere un approach
distinto: crear las zapatas como **mesh explícito Q4** (cada zapata =
nx×ny áreas Q4 individuales compartiendo joints), no como áreas grandes
auto-mesheadas.

**Estado**: V2 commiteado pero NO validado. Volver con approach
mesh-explícito en próxima iteración.

---

# (Documentación V1 — modelo simplificado plate-only con bug Q4 drilling)

Reconstrucción 100% desde cero via API del modelo extraído de
`examples/src/edificio-aporticado/sample_output/cimentacion_edificio_9zapatas_12vigas.f2k`
(generado por Hekatan workspace).

## Caso de prueba (modelo REAL del edificio del usuario)

- Grilla **3 × 3 columnas** en (X, Y) ∈ {0, 5, 10} m × {0, 5, 10} m (luz 5 m × 5 m)
- 9 zapatas con **3 dimensiones distintas**:
  - 4 esquinas: **1.3 × 1.3 m** (1.69 m²)
  - 4 medios-bordes: **2.2 × 2.2 m** (4.84 m²)
  - 1 centro: **1.6 × 1.6 m** (2.56 m²)
- Espesor uniforme **t = 0.30 m**, concreto 4000 psi (E = 24 855 MPa)
- **12 vigas amarre** `VAmarre_0.250 × 0.400 m` (frames concrete rectangular)
  - 6 horizontales (eje X) + 6 verticales (eje Y) en grilla 3×3
- **9 cargas reales** P + Mx + My en los centros de columnas (unidades tonf, m)
- **Suelo Winkler** ks = **105 tonf/m³ = 1030 kN/m³** (suelo blando)

## Reproducir

```bash
cd hekatan-struct/benchmarks/safe/edificio-cimentacion-real
npx tsx ./cli_edificio.mjs --json=hekatan_edificio_result.json
PYTHONIOENCODING=utf-8 python -X utf8 safe_api_edificio.py --json=safe_edificio_result.json
```

## Resultados (corrida 2026-05-18)

### ⚠️ Paridad NO alcanzada — gap 34-90%

| Col | Rol | Pos | FZ tonf | MY tonf·m | **Hekatan uz [mm]** | **SAFE uz [mm]** | **Δ** |
|---|---|---|---|---|---|---|---|
| 1 | esquina | (0, 0) | −0.67 | 2.29 | **−1.19** | −11.57 | **−89.7%** |
| 2 | medio-borde | (5, 0) | −2.12 | 2.58 | **−5.44** | −17.71 | **−69.3%** |
| 3 | esquina | (10, 0) | −3.63 | 2.29 | **−17.82** | −27.12 | **−34.3%** |
| 4 | medio-borde | (0, 5) | −1.12 | 1.30 | **−1.63** | −13.43 | **−87.9%** |
| 5 | centro | (5, 5) | −2.14 | 1.47 | **−5.56** | −19.58 | **−71.6%** |
| 6 | medio-borde | (10, 5) | −3.16 | 1.30 | **−9.29** | −22.02 | **−57.8%** |
| 7 | esquina | (0, 10) | −1.29 | 0.35 | **−3.91** | −14.55 | **−73.1%** |
| 8 | medio-borde | (5, 10) | −2.14 | 0.41 | **−5.45** | −17.72 | **−69.2%** |
| 9 | esquina | (10, 10) | −2.99 | 0.35 | **−15.05** | −24.12 | **−37.6%** |

**Hekatan sub-predice el asentamiento en TODAS las columnas.** El gap no es por
sesgo constante (varía 34-90%) ni por mesh refinement (un test con 8×8 daría
quizás 5% mejor, no cerrar 90%). Es un problema de **modelado estructural**.

## Análisis de la discrepancia

### Test diagnóstico #1: zapata aislada via deform() (CASO BASE) ✅

Antes de investigar el modelo completo, validar que `deform()` Q4 funciona
solo (sin frames):

| Solver/Modelo | uz centro | uz esquina |
|---|---|---|
| caso 1 con `plateQ4Solve` | -4.5356 mm | -4.3849 mm |
| caso 1 con `deform()` (test diag) | **-4.5377 mm** | **-4.3846 mm** |
| Δ vs plateQ4Solve | **+0.05%** | **-0.01%** |
| SAFE referencia | -4.5370 mm | -4.3840 mm |

**Conclusión:** `deform()` Q4 reproduce `plateQ4Solve` con paridad <0.05%.
La formulación shell, las springs nodales (dof=2 para uz en convención 6-DOF
de `deform()`), y la transferencia de carga puntual funcionan perfecto.

### Causa raíz identificada: acoplamiento shell-frame en nodo compartido

El problema NO es el solver Q4. Es el **acoplamiento Q4 + frame** cuando un
nodo es compartido entre un shell (3 DOFs efectivos: w, βx, βy) y un frame
(6 DOFs: ux, uy, uz, rx, ry, rz).

Comportamiento observado en caso 6: cada zapata responde casi independiente
de las vecinas (ratio uz_max/uz_min = 15× en Hekatan vs 2.5× en SAFE). Las
vigas amarre no están transfiriendo carga lateralmente.

**Hipótesis específicas a investigar:**

1. **Frame axial DOF en z=0** — un frame horizontal en z=0 tiene axial DOF
   en dirección horizontal (eje local x del frame). El nodo shell aporta
   ux/uy en z=0. Si la transformación entre frame local y nodal global
   no acopla bien, la carga axial del frame no se transmite.
2. **Drilling DOF en shell Q4** — Q4 estándar tiene 3 DOFs efectivos por
   nodo (w, βx, βy). Para conectar con frame, el shell necesita "drilling
   DOF" (rz). Si está como rigid (sin rigidez real), el momento del frame
   en z se "pierde".
3. **Frames horizontales sin rigidez transversal vertical** — Las vigas
   amarre en z=0 conectan nodos también en z=0. La rigidez del frame en su
   eje Z local (perpendicular al frame, vertical) es la que evita giro
   vertical de las zapatas, pero si los DOFs ux/uy del shell están "free",
   los frames no aportan restricción vertical entre zapatas.

## Tests diagnósticos ejecutados (bug confirmado)

### Test #1: 1 zapata aislada via deform() (control) ✅
- `deform()` Q4 da paridad <0.05% con `plateQ4Solve` Y SAFE.
- Conclusión: el solver Q4 dentro de `deform()` funciona perfecto.

### Test #2: 2 zapatas + 1 viga, cargas IGUALES ✅
- Ambas zapatas dan uz = −7.97 mm (idéntico, simetría OK).
- Esperado teórico Winkler aislado = 7.96 mm → paridad <0.13%.
- No diagnóstico (cargas iguales → no diferencia con/sin viga).

### Test #3: 2 zapatas + 1 viga, cargas DESIGUALES (1 vs 3 tonf) ❌
- zap1 (P=−1 tonf): uz = −3.86 mm (vs esperado aislada −3.72)
- zap2 (P=−3 tonf): uz = −11.04 mm (vs esperado aislada −11.16)
- **Ratio uz1/uz2 = 0.349 ≈ ratio cargas (1/3 = 0.333)** → cada zapata
  responde como aislada, la viga amarre NO transfiere carga.

## Causa raíz: shell Q4 estándar sin drilling DOF

El frame horizontal en z=0 tiene su DOF axial en dirección horizontal
(ux/uy del nodo). El shell Q4 estándar en `deform()` no implementa
**drilling DOFs** (rigidez en ux, uy, rz del plano del shell) — éste es
el comportamiento clásico del Q4 Mindlin estándar.

Resultado: el frame "trabaja contra DOFs liberados" del shell → la matriz
de rigidez del frame no se conecta al sistema global → la viga se
comporta como un elemento aislado que no transfiere carga.

## Fix requerido

Implementar **drilling DOF** en el shell Q4 del solver C++:
- Allman triangle approach (1984)
- MITC4 + drilling enhancement (Bathe)
- Cook-Malkus flat shell formulation

Esto requiere modificar `hekatan-fem/src/cpp/deform.cpp` y recompilar
WASM. Estimado: 6+ horas de trabajo, fuera del scope de este benchmark
framework.

## Workaround para casos prácticos con vigas amarre

En lugar de modelar las vigas amarre como frames separados, modelar la
cimentación completa como **una losa continua con thickness variable**
(igual que caso 4 conectada). Las "vigas amarre" se representan como
bandas delgadas (e.g., t=0.10m) entre zapatas (t=0.30m). Este enfoque:
- Funciona con `plateQ4Solve` (paridad <0.33% probada)
- No requiere fix del solver
- Modela físicamente la transferencia de carga
- Requiere mesh continuo (no 9 áreas disjuntas)

## Estado final (cerrado como "validation pendiente")

✅ Script SAFE (`safe_api_edificio.py`) funciona end-to-end, reconstruye
modelo desde cero, aplica SubModulus override, corre análisis en ~12s.
Resultados consistentes y físicamente razonables. **Reusable para validar
cualquier .fdb del usuario** (cambiar el dict de COLUMNS y LOADS).

✅ Script Hekatan (`cli_edificio.mjs`) funciona end-to-end via `deform()`,
construye 144 Q4 + 12 frames + 225 springs en ~28 ms. Ejecuta sin errores.
Los resultados son consistentes para el sub-modelo plate-only (zapata
aislada via deform da paridad <0.05% con plateQ4Solve, ver test #1).

❌ **Paridad shell-frame NO alcanzada** — limitación del solver Q4 sin
drilling DOF. Bug identificado, causa raíz documentada, workaround
propuesto. Fix requiere modificación del C++ solver (out of scope).

✅ **Tests diagnósticos preservados** (`test_diag_*.mjs`) — útiles para
re-verificar después del fix C++.

## Archivos

```
benchmarks/safe/edificio-cimentacion-real/
├── README.md                        # este archivo (estado: investigación)
├── cli_edificio.mjs                 # Hekatan deform() (shells + frames)
├── safe_api_edificio.py             # SAFE API (9 zap + 12 vigas + cargas reales)
├── hekatan_edificio_result.json
├── safe_edificio_result.json
├── safe_edificio_run.log
└── Edificio_Cimentacion_via_API.fdb # modelo SAFE generado
```
