# Hekatan vs SAFE — Benchmarks de Validación

Framework end-to-end para validar el solver `plateQ4Solve` de Hekatan
(Mindlin Q4 + Winkler springs, WASM) contra **SAFE 20** vía API .NET
(`SAFEv1.dll` + pythonnet). Cada caso construye el mismo modelo en ambos
solvers, los corre, extrae resultados nodales en puntos clave, y compara.

## Resumen de paridad alcanzada

| # | Caso | Mesh | Cols | w_max Hekatan | w_max SAFE | Δ máx | Runtime |
|---|------|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | [zapata-aislada](safe/zapata-aislada/) — 1.5×1.5×0.30m, P=20tonf | 12×12 (144 Q4) | 1 | −4.5356 mm | −4.5370 mm | **+0.03%** | 11 ms / 55 s |
| 2 | [losa-cimentacion](safe/losa-cimentacion/) — 6×8×0.50m, 6 cols 2×3 | 12×16 (192 Q4) | 6 | −1.5824 mm | −1.5870 mm | **+0.33%** | 12 ms / 46 s |
| 3 | [zapata-combinada](safe/zapata-combinada/) — 4×2×0.40m, 2 cols alineadas | 16×8 (128 Q4) | 2 | −3.8458 mm | −3.8490 mm | **+0.08%** | 8 ms / 12 s |
| 4 | [zapata-conectada](safe/zapata-conectada/) — 5×1m, t variable (0.40/0.20) | 20×4 (80 Q4) | 2 | −8.9003 mm⁺ | −8.8980 mm⁺ | **−0.25%** | 6 ms / 30 s |
| 5 | [viga-cimentacion](safe/viga-cimentacion/) — 8×1×0.50m, 4 cols alineadas | 32×4 (128 Q4) | 4 | −5.1093 mm | −5.1100 mm | **+0.01%** | 7 ms / 22 s |

⁺ El w_max en zapata-conectada es en las esquinas (NO bajo columnas) por
rotación de zapatas con viga delgada. Ver
[zapata-conectada/README.md](safe/zapata-conectada/README.md) para análisis
físico — paridad del solver es excelente, pero el diseño con t_viga=0.20m
es sub-óptimo y se manifiesta en w >> teórico Winkler.

**Promedio Δ max: 0.14%, todos los casos <0.33%.** Validación de solver
completa para placa sobre Winkler (Mindlin-Reissner thick) con cargas
puntuales, geometrías variadas (cuadrada, rectangular alargada, con
espesor variable) y distribución de columnas variada (1, 2, 4, 6, en
línea o grilla).

### Tabla detallada por punto — todos los casos

#### Caso 1: Zapata aislada (1.5×1.5×0.30m, P=20tonf central)
| Punto | Hekatan | SAFE | Δ |
|---|---|---|---|
| 4 esquinas (todas) | −4.3849 mm | −4.3840 mm | −0.02% |
| 4 medios-bordes (todos) | −4.4263 mm | −4.4270 mm | +0.02% |
| centro | −4.5356 mm | −4.5370 mm | +0.03% |

#### Caso 2: Losa de cimentación (6×8×0.50m, 6 columnas grilla 2×3)
| Punto | Hekatan | SAFE | Δ |
|---|---|---|---|
| 4 esquinas | −0.6981 mm | −0.6960 mm | −0.30% |
| col extremos (1,2,5,6) | −1.3526 mm | −1.3570 mm | +0.33% |
| col centrales (3,4) | −1.5824 mm | −1.5870 mm | +0.29% |
| centro losa | −1.5532 mm | −1.5530 mm | −0.01% |
| entre cols | −1.32 a −1.50 | −1.32 a −1.50 | <0.1% |

#### Caso 3: Zapata combinada (4×2×0.40m, 2 cols alineadas, P=30tonf c/u)
| Punto | Hekatan | SAFE | Δ |
|---|---|---|---|
| 4 esquinas | −3.6138 mm | −3.6120 mm | −0.05% |
| col_1 / col_2 (alineadas) | −3.8458 mm | −3.8490 mm | +0.08% |
| centro | −3.8030 mm | −3.8030 mm | 0.00% |
| voladizos izq/der | −3.6597 mm | −3.6600 mm | +0.01% |

#### Caso 4: Zapata conectada (5×1m, ext t=0.40 / viga t=0.20, P=20tonf c/u)
| Punto | Hekatan | SAFE | Δ |
|---|---|---|---|
| esquinas extremos | −8.9003 mm | −8.894 a −8.898 | <0.07% |
| bajo columnas | −6.7579 mm | −6.7600 mm | +0.03% |
| bordes zap-viga | −4.5478 mm | −4.5510 mm | +0.07% |
| centro viga | −0.9444 mm | −0.9420 mm | −0.25% |
| 1/4 y 3/4 viga | −1.9040 mm | −1.9020 mm | −0.10% |

#### Caso 5: Viga de cimentación (8×1×0.50m, 4 cols alineadas, P=20tonf c/u)
| Punto | Hekatan | SAFE | Δ |
|---|---|---|---|
| 4 esquinas | −4.7754 mm | −4.7750 mm | −0.01% |
| col extremas (1, 4) | −4.9644 mm | −4.9650 mm | +0.01% |
| col interiores (2, 3) | −5.1093 mm | −5.1100 mm | +0.01% |
| entre cols vecinas | −5.0195 mm | −5.0190 mm | −0.01% |
| centro de viga (entre 2-3) | −5.0856 mm | −5.0850 mm | −0.01% |
| voladizos | −4.7755 mm | −4.7750 mm | −0.01% |

## Cómo usar el código para obtener valores de SAFE

### Setup una vez

| Requisito | Verificación |
|---|---|
| SAFE 20 instalado | `ls "C:/Program Files/Computers and Structures/SAFE 20/SAFEv1.dll"` |
| Python 3 + pythonnet | `python -c "import clr; print('OK')"` |
| Node 22+ + npx tsx | `node --version && npx tsx --version` |

### Workflow típico (3 comandos por caso)

```bash
cd hekatan-struct/benchmarks/safe/<caso>

# 1) Hekatan (WASM, ~10 ms): genera modelo + resuelve + JSON
npx tsx ./cli_<caso>.mjs --json=hekatan_<caso>_result.json

# 2) SAFE (abre GUI, ~30-90 s): construye mismo modelo via API + resuelve + JSON
PYTHONIOENCODING=utf-8 python -X utf8 safe_api_<caso>.py --json=safe_<caso>_result.json

# 3) Comparar:
jq '.results.samples_11pts' hekatan_<caso>_result.json
jq '.results.samples_11pts' safe_<caso>_result.json
```

### Estructura común de cada script SAFE (`safe_api_*.py`)

```python
# 1. Conectar a SAFE 20
helper = cHelper(Helper())
safe_obj = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
safe_obj.ApplicationStart()                          # abre GUI ~10s
sap = cSapModel(safe_obj.SapModel)
sap.InitializeNewModel()
cFile(sap.File).NewBlank()
sap.SetPresentUnits_2(eForce.kN, eLength.m, eTemperature.C)

# 2. Material concreto
mat = cPropMaterial(sap.PropMaterial)
mat.SetMaterial("Conc25", eMatType.Concrete, -1, "", "")
mat.SetMPIsotropic("Conc25", E_kNm2, nu, 1.0e-5, 0.0)

# 3. Slab property (Mindlin/Reissner = ShellThick)
parea = cPropArea(sap.PropArea)
parea.SetSlab("Slab", eSlabType.Mat, eShellType.ShellThick, "Conc25", t, -1, "", "")

# 4. Spring property (placeholder — el ks real va via DatabaseTables más abajo)
psp = cPropAreaSpring(sap.PropAreaSpring)
psp.SetAreaSpringProp("AS", 0, 0, ks_placeholder, 0, 0, "", 1, 1, -1, "", "")

# 5. Load pattern
cLoadPatterns(sap.LoadPatterns).Add("P_Test", eLoadPatternType.Other, 0.0, True)

# 6. Grid Q4 explícito (nx × ny áreas, matchea mesh Hekatan)
ao = cAreaObj(sap.AreaObj)
for j in range(ny):
    for i in range(nx):
        # ... 4 vértices del Q4 ...
        ret, _x, _y, _z, name = ao.AddByCoord(4, xs, ys, zs, "", "Slab", "...", "Global")
        ao.SetSpringAssignment(name, "AS", eItemType.Objects)

# 7. Joints + carga puntual
po = cPointObj(sap.PointObj)
ret, pt = po.AddCartesian(x, y, 0, "", "PCol", "Global", False, 0)
po.SetLoadForce(pt, "P_Test", Array[Double]([0,0,-P,0,0,0]), True, "Global", eItemType.Objects)

# 8. Save .fdb (necesario antes de RunAnalysis)
cFile(sap.File).Save("modelo.fdb")

# 9. CRÍTICO: forzar SubModulus correcto via DatabaseTables
# (SetAreaSpringProp ignora U3 y aplica default 100 lb/in³ — bug silencioso)
db = cDatabaseTables(sap.DatabaseTables)
ret, ver, fi, n, td = db.GetTableForEditingArray(
    "Spring Property Definitions - Area Springs", "", 0, [], 0, [])
fi = list(fi); td = list(td)
td[1] = str(ks_real_kNm3)   # columna "SubModulus"
db.SetTableForEditingArray("Spring Property...", ver, fi, n, td)
db.ApplyEditedTables(True, 0, 0, 0, 0, "")

# 10. RunAnalysis
cAnalyze(sap.Analyze).RunAnalysis()

# 11. Extraer Joint Displacements + sample por coords
ret, group, ver, fi, n, td = db.GetTableForDisplayArray("Joint Displacements", [], "", 0, [], 0, [])
# ... parsear rows + extraer Uz por joint ...

# 12. Cerrar
safe_obj.ApplicationExit(False)
```

### Gotchas críticos (resumidos)

8 gotchas documentados en [`safe/README.md`](safe/README.md). Los más
importantes:

1. **`SetAreaSpringProp(U3=ks)` es trampa** — SAFE ignora U3 y aplica
   default 100 lb/in³ (= 27145 kN/m³). Fix: editar tabla
   `Spring Property Definitions - Area Springs` campo `SubModulus`
   via `DatabaseTables`.
2. **`clr.Reference` no existe en pythonnet 3.x** — usar tuple-return:
   `ret, name = obj.Method(..., "", ...)`.
3. **.NET arrays no soportan slicing Python** — convertir con `list(td)`
   antes de `td[i*cols:(i+1)*cols]`.
4. **Signatures requieren enums, no ints** — `eSlabType.Mat`,
   `eShellType.ShellThick`, `eItemType.Objects`, etc.
5. **`OpenFile` solo abre `.fdb`** — no acepta `.f2k`. Construir modelo
   desde cero via API (como en estos scripts).

### Cómo adaptar a tu propio caso

1. Copiar `benchmarks/safe/zapata-aislada/` a `benchmarks/safe/<tu-caso>/`
2. Editar `cli_*.mjs`:
   - Cambiar dict `params` con tus dimensiones, cargas, malla
   - Adaptar `samplePoints[]` a los puntos que querés medir
3. Editar `safe_api_*.py`:
   - Mismo dict `P` con paridad de parámetros
   - Mismas `COLUMNS = [(x, y), ...]` o tu equivalente
   - Mismos `sample_targets` para extracción comparable
4. Correr ambos, comparar `samples_*pts` en los JSONs

### Cómo validar paridad

Sanity check obligatorio: corrida con carga **distribuida** uniforme
`q = P/A` debe dar `w_uniform = q/ks` exacto en ambos solvers. Si no
matchea → spring stiffness mal aplicado.

```bash
# (modificar cli y safe_api para reemplazar pointLoads/SetLoadForce
#  por uniform pressure / SetLoadUniform con q = P/A)
# Ambos deben dar w = q/ks ± 0.1% en TODOS los nodos
```

## Cómo usar SOLO los valores de SAFE (sin Hekatan)

Si querés correr únicamente SAFE para tu propio análisis (sin comparar
contra Hekatan), el script Python es standalone:

```bash
# Editás dict P al inicio de safe_api_<caso>.py con tu modelo
# Después:
PYTHONIOENCODING=utf-8 python -X utf8 safe_api_<caso>.py --json=mi_caso.json --keep-open
```

`--keep-open` deja SAFE GUI abierto para revisar el modelo visualmente.
El `.fdb` queda guardado en la carpeta y se puede reabrir desde SAFE
manualmente.

El JSON output tiene:
- `results.w_max_m`: desplazamiento vertical máximo
- `results.w_max_joint`: joint donde ocurre
- `results.q_max_calc_ks_w_kNm2`: presión del suelo máxima (= ks·|w|)
- `results.samples_*pts`: lista de puntos sampleados por coordenada,
  cada uno con `{label, joint, x, y, w_mm, q_kNm2}`
- `theory.w_avg_winkler_teo_mm`: w teórico Winkler (= P_total / (A·ks))
  como sanity check

## Próximos casos (roadmap — modelos 3D mixtos frame+shell)

Los 4 casos actuales son **plate-only** (zapata o losa modelada solo
como elemento de área Q4). Para modelos reales con columnas y vigas
estructurales como frames, necesitamos cambiar de API:

| API actual (plate-only) | API extendida (frame+shell) |
|---|---|
| Hekatan: `plateQ4Solve()` | Hekatan: `deform()` (frames + shells) |
| SAFE: `cAreaObj` + `cPropArea` | SAFE: `cAreaObj` + `cLineObj` + `cPropFrame` |

- [ ] **zapata-pedestal-frame** — zapata losa + pedestal corto (column
  hormigón 0.40m de alto) como frame vertical sobre la losa, con
  carga aplicada en el TOP del pedestal (más realista que carga
  puntual sobre la losa). Captura el efecto de poste/momento de
  cabeza de columna.
- [ ] **2-zapatas-viga-superior** — 2 zapatas independientes con
  columnas frame que se unen arriba a una viga horizontal (caso
  típico de edificios). Modelo 3D mixto: shell foundations + frame
  columns + frame beam. Es el caso que el usuario pidió específicamente.
- [ ] **zapata-viga-amarre** — 2 zapatas + viga amarre baja que conecta
  zapatas directamente (sin columnas como frames separados). Usado para
  evitar empujes laterales entre zapatas vecinas.

## Estructura

```
benchmarks/
├── README.md                                 # este archivo (índice + guía)
└── safe/
    ├── README.md                             # documentación detallada API SAFE (8 gotchas)
    ├── zapata-aislada/
    │   ├── README.md                         # tabla + debug trail 13 versiones
    │   ├── cli_zapata.mjs                    # Hekatan WASM CLI
    │   ├── safe_api_zapata.py                # SAFE API runner
    │   ├── {hekatan,safe}_zapata_result.json
    │   ├── safe_run.log
    │   └── Zapata_Hekatan_via_API.fdb
    ├── losa-cimentacion/                     # 6 cols 2×3
    │   └── …
    ├── zapata-combinada/                     # 2 cols alineadas
    │   └── …
    └── zapata-conectada/                     # t variable
        └── …
```
