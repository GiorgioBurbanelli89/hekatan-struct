# Validación Hekatan ↔ ETABS — Workflow con Claude

Guía operativa para validar el solver Hekatan-FEM contra ETABS API usando Claude
como asistente en sesiones iterativas. Documenta los **caminos que funcionan** y
los **errores comunes** descubiertos en producción.

---

## Arquitectura del workflow

```
   Hekatan-Struct (Web)             ETABS 22 (Local)
   ╔═══════════════════╗           ╔═══════════════════╗
   ║ benchmark.ts      ║   ←──→    ║ .EDB / .e2k       ║
   ║ build() FEM       ║           ║ API .NET          ║
   ╚═══════════════════╝           ╚═══════════════════╝
            │                              │
            └──────────┐         ┌─────────┘
                       ▼         ▼
              ┌──────────────────────┐
              │ Python pythonnet     │
              │ ETABSv1.dll  + clr   │ ← Claude orquesta acá
              │ analítico vs ETABS   │
              └──────────────────────┘
                       │
                       ▼
              ┌──────────────────────┐
              │ validate_*.log       │ ← Claude lee resultados
              │ → benchmark passes   │
              └──────────────────────┘
```

---

## Decisiones de arquitectura (qué funciona y qué NO)

### ✅ Lo que funciona

| Tecnología | Estado | Notas |
|---|---|---|
| **pythonnet + clr** | ✅ Recomendado | Carga `ETABSv1.dll` via .NET, bypassa COM IPC bugs |
| **`load("coreclr")`** | ✅ | .NET 8 runtime — más estable que `netfx` |
| **Cast wrappers** `cHelper(Helper())`, `cOAPI(...)`, etc. | ✅ Obligatorio | Sin esto los métodos no aparecen en Python |
| **`System.Array[float/bool]`** | ✅ Obligatorio | Para parámetros array .NET (NOT Python lists) |
| **`time.sleep(3-5)` tras `ApplicationStart`** | ✅ Obligatorio | ETABS necesita inicializar |
| **`SetGeneral`** para fijar A, I, As, J exactos | ✅ Mejor que SetISection | ETABS no recalcula desde geometría |
| **`Replace=True` en `SetLoadForce`** | ✅ | Sin esto la carga es acumulativa |
| **Conectarse a instancia abierta** via `helper.GetObject(...)` | ✅ | Útil cuando el user editó manualmente |

### ❌ Lo que NO funciona / a evitar

| Tecnología | Por qué falla | Solución |
|---|---|---|
| `comtypes` COM bridge | "No se pudo instalar un puerto IPC" | Usar pythonnet en su lugar |
| `PointObj.GetPoints(frameName)` | Crashea con `0xC0000005` (access violation) | Usar `GetNameList()` + `GetCoordCartesian()` por nodo |
| `File.OpenFile(e2k)` con loads del exporter de hekatan | POINTLOAD plan-point + Level_X no resuelve, cargas se pierden silenciosamente | Fix en `e2kExporter.ts`: `SELFWEIGHT=1` o POINTASSIGN por (pt, story) |
| `LoadPatterns.Add("LIVE", LIVE=3, ..., True)` | ret=1 (conflicto con default Live) | Usar nombres únicos o `eLoadPatternType.OTHER` |
| ETABS auto-restraints en story "Base" | Restraina UX/UY/UZ automático en ambos nodos | Colocar viga en Story1 (no Base) ó eliminar restraint del nodo libre manualmente |
| `SetISection` para validación analítica | ETABS recomputa A/I con fillets internos → discrepancia ~5-15% | Usar `SetGeneral` con A, I, As pin-eados |
| Reusar `ETABSObject` entre runs sin `ApplicationExit` | Estado zombie, hangs en `InitializeNewModel` | Kill `ETABS.exe` process antes de cada run + `ApplicationExit(False)` al final |

---

## Plantilla canónica del script de validación

```python
# -*- coding: utf-8 -*-
"""Plantilla validación Hekatan vs ETABS via pythonnet."""
import os, time

HERE = os.path.dirname(os.path.abspath(__file__))
LOG = os.path.join(HERE, "validate_XXX.log")
if os.path.exists(LOG): os.remove(LOG)
_fh = open(LOG, "w", encoding="utf-8", buffering=1)
def p(*a):
    line = " ".join(str(x) for x in a); print(line, flush=True)
    _fh.write(line + "\n"); _fh.flush()

from pythonnet import load; load("coreclr")
import clr
DLL = r"C:\Program Files\Computers and Structures\ETABS 22\ETABSv1.dll"
clr.AddReference(DLL)
from ETABSv1 import (Helper, cHelper, cOAPI, cSapModel, cFile,
                     cPropMaterial, cPropFrame, cFrameObj, cPointObj,
                     cLoadPatterns, cAnalyze, cAnalysisResults,
                     cAnalysisResultsSetup, eUnits, eMatType,
                     eLoadPatternType, eItemTypeElm)
import System

# ── Iniciar ETABS (o attach a instancia abierta) ──
p("[1] ETABS start...")
helper = cHelper(Helper())
try:
    # Intentar attach a instancia abierta primero (más rápido si ya está corriendo)
    ETABS = cOAPI(helper.GetObject("CSI.ETABS.API.ETABSObject"))
    p("    Attached a instancia existente")
except Exception:
    ETABS = cOAPI(helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject"))
    ETABS.ApplicationStart()
    time.sleep(5)  # Importante: dejar inicializar
    p("    Started new instance")

sap = cSapModel(ETABS.SapModel)
sap.InitializeNewModel(eUnits(6))   # 6 = kN_m_C
File = cFile(sap.File)
ret = File.NewBlank(); p(f"  NewBlank ret={ret}")
time.sleep(2)

# ── Material (use SetWeightAndMass for accurate γ) ──
matName = "MAT_test"
PropMaterial = cPropMaterial(sap.PropMaterial)
PropMaterial.SetMaterial(matName, eMatType(2))  # 1=Steel, 2=Concrete, 3=Rebar
PropMaterial.SetMPIsotropic(matName, E_kN_m2, nu, alpha)
PropMaterial.SetWeightAndMass(matName, 1, gamma_kN_m3)  # 1 = weight per unit volume

# ── Sección — USAR SetGeneral para validación exacta ──
PropFrame = cPropFrame(sap.PropFrame)
# Argumentos: name, mat, T3, T2, A, As2, As3, J, I22, I33, S22, S33, Z22, Z33, R22, R33
PropFrame.SetGeneral(secName, matName, 0.30, 0.15, A, As2, As3, J, I22, I33,
                     S22, S33, Z22, Z33, R22, R33)

# ── Frame ──
FrameObj = cFrameObj(sap.FrameObj)
FrameName = " "
[ret, FrameName] = FrameObj.AddByCoord(x0, y0, z0, x1, y1, z1,
                                        FrameName, secName, "OBJ", "Global")

# ── Identificar nodos por coords (NO usar GetPoints — crashea) ──
PointObj = cPointObj(sap.PointObj)
NR=0; Names=[]
[ret, NR, Names] = PointObj.GetNameList(NR, Names)
for pt in list(Names):
    X=0.0; Y=0.0; Z=0.0
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(pt, X, Y, Z)
    # ...comparar coords con target...

# ── Restraints ──
Rest = System.Array[bool]([True]*6)
PointObj.SetRestraint(base_pt, Rest)

# ── Cargas — SIEMPRE con Replace=True ──
PointLoad = System.Array[float]([Fx, Fy, Fz, Mx, My, Mz])
PointObj.SetLoadForce(tip_pt, "Live", PointLoad, True)  # 4to arg = Replace

# ── Save + Run ──
File.Save(EDB_PATH)
cAnalyze(sap.Analyze).RunAnalysis()

# ── Read results ──
Results = cAnalysisResults(sap.Results)
Setup = cAnalysisResultsSetup(Results.Setup)
Setup.DeselectAllCasesAndCombosForOutput()
Setup.SetCaseSelectedForOutput("Live")  # ó "Dead", "Modal", etc.

NR=0; Obj=[]; Elm=[]; AC=[]; ST=[]; SN=[]
U1=[]; U2=[]; U3=[]; R1=[]; R2=[]; R3=[]
[ret, NR, Obj, Elm, AC, ST, SN, U1, U2, U3, R1, R2, R3] = \
    Results.JointDispl(tip_pt, eItemTypeElm(0), NR, Obj, Elm, AC, ST, SN, U1, U2, U3, R1, R2, R3)
etabs_ux_mm = U1[0]*1000 if NR > 0 else float('nan')

# ── Cerrar limpio ──
ETABS.ApplicationExit(False)
```

---

## Convenciones de los benchmarks W##

Cada benchmark tiene la estructura:

```
validacion/Etabs/W##_nombre/
├── W##_nombre_template.e2k       ← E2K listo para abrir en ETABS (manual edit)
├── W##_nombre_template.EDB       ← EDB editable por el usuario en GUI
├── open_template.py              ← Abre template en ETABS automáticamente
├── validate_XXX.py               ← Script de validación (Python pythonnet)
└── validate_XXX.log              ← Salida de la última corrida
```

| Categoría | Convención | Ejemplo |
|---|---|---|
| **W1** Columnas | Cantilever vertical, peso propio axial | `benchmark-concrete-cantilever` |
| **W2** Vigas axial | Horizontal, Fx puntual, SELFWEIGHT=0 | `W2_viga_axial_*` |
| **W2** Vigas flexión | Horizontal, peso propio o q vertical, SELFWEIGHT=1 | `W2_viga_flexion_*` |
| **W3+** Multi-DOF | Pórticos 2D/3D, biaxial, etc. | (pendientes) |

Naming en hekatan-struct (`category` en cada `ExampleDef`):

```typescript
// Jerarquía 3 niveles:
"🏁 Benchmarks · 1️⃣ Frames · 🏛 Columnas · 🎯 1 DOF Axial"
"🏁 Benchmarks · 1️⃣ Frames · 🏗 Vigas · 🎯 1 DOF Axial"
"🏁 Benchmarks · 1️⃣ Frames · 🏗 Vigas · 🎯 2 DOF Flexión"
"🏁 Benchmarks · 1️⃣ Frames · 🏗 Vigas · 🎯 n DOF Sistemas"
```

---

## Flujo iterativo con Claude

### Paso 1 — Usuario diseña la sección en ETABS GUI
1. Claude crea `W##_template.e2k` con geometría base + materiales pre-cargados
2. Claude ejecuta `open_template.py` que abre ETABS con el template
3. **Usuario edita** la sección via Define → Section Property → Modify/Show
4. Guarda el EDB

### Paso 2 — Claude valida automáticamente
1. Claude lee el `.e2k` (modificado por el usuario o por ETABS al guardar)
2. Extrae parámetros editados (D, B, TF, TW, materiales, etc.)
3. Genera analítico en Python (`u = P·L/(E·A)`, `w = q·L⁴/(8·E·I)`, etc.)
4. Script `validate_*.py`:
   - Attach a la instancia ETABS abierta
   - Aplica cargas (`SetLoadForce(... True)` con Replace)
   - `RunAnalysis()` + lee `JointDispl` + `JointReact`
   - Compara ETABS vs analítico → log con `[PASS]`/`[FAIL]`

### Paso 3 — Claude crea el benchmark en hekatan-struct
1. Si Δ% < 1%: crea `examples/src/W##_nombre/benchmark.ts` con MISMOS parámetros del E2K validado
2. Registra en `exampleRegistry.ts` con la categoría jerárquica correcta
3. Agrega entrada en `vite.config.ts`
4. `npm run build:deploy` → sync `website/src/examples` → gh-pages worktree
5. `git push hekatan-struct gh-pages` (deploy independiente del push a main)

### Paso 4 — Commits
- `main`: source code change (no assets)
- `gh-pages`: bundled assets (auto-deploy a `giorgioburbanelli89.github.io/hekatan-struct/`)

---

## Errores comunes diagnosticados

### "ETABS reporta Ux = 2× el esperado"
**Causa**: `SetLoadForce` default es `Replace=False` (acumulativo). Si el script
corrió antes, las cargas se suman.
**Fix**: pasar `True` como 4to argumento: `SetLoadForce(name, pat, val, True)`
o usar `DeleteLoadForce(name, pat)` primero.

### "PowerShell python no encuentra el log file (PermissionError)"
**Causa**: instancia python anterior aún tiene el `.log` abierto en buffer.
**Fix**: `Get-Process python,pythonw | Stop-Process -Force` antes de re-correr.

### "ETABS instance is zombie — hangs en InitializeNewModel"
**Causa**: ETABS quedó en estado intermedio (license check, dialog, etc.).
**Fix**: Kill ETABS process + relanzar script. `ApplicationExit(False)` siempre
al final del script para evitar zombies.

### "JointDispl devuelve NR=1 pero Ux=0"
**Causa**: El case seleccionado no tiene cargas asociadas (POINT OBJECT LOADS
vacío o pattern wrong). ETABS corrió, pero sin cargas → resultado nulo.
**Fix**: Verificar con `SetCaseSelectedForOutput("Live")` que el case usa el
pattern correcto + reaction match esperado.

### "comtypes import fails (StartService import error)"
**Causa**: cache stale de comtypes.gen.
**Fix**: `rm -rf comtypes/gen/ETABSv1*.py _542F7A9D*.py` o migrar a pythonnet.

---

## Validaciones existentes — estado

| W | Tipo | Mat | u esperado | u ETABS | Δ% |
|---|---|---|---:|---:|---:|
| W1 | Columna cantilever peso propio | Hormigón 30×30 | -0.00424 mm | -0.00424 mm | -0.10% ✅ |
| W1 | Columna cantilever peso propio | Acero HSS 30×30 | -0.00173 mm | -0.00173 mm | -0.11% ✅ |
| W1 | Columna cantilever peso propio | CFT equiv | -0.00276 mm | -0.00276 mm | -0.14% ✅ |
| W2 | Viga axial Hormigón (P=100, no SW) | rect 30×30 | 0.1334 mm | (no validado web) | – |
| W2 | Viga axial Acero I-450 (P=100, no SW) | I 45×25 + A36 | 0.0848 mm | 0.085 mm | 0.27% ✅ |
| W2 | Viga axial Compuesta Slab (P=100, no SW) | IPE+losa 80×12 | 0.0864 mm | (no validado web) | – |
| W2 | Viga axial Compuesta SRC Encased (P=100, no SW) | 90×60 + IPE | 0.02084 mm | 0.02084 mm | 0.000% ✅ |
| W2 | Viga flexión Hormigón (peso propio) | rect 30×60 | 0.33054 mm | 0.33054 mm | 0.000% ✅ |
| W2 | Viga flexión Acero IPE 300 (peso propio) | IPE 300 SetGen | 0.26230 mm | 0.26230 mm | 0.000% ✅ |

---

## Para futuras sesiones de Claude

Cuando el usuario abra una nueva sesión y diga "validemos X benchmark", el flujo
estándar es:

1. **Leer este README** para entender el patrón canónico
2. **Identificar la categoría W## adecuada** (Columnas / Vigas, axial / flexión / biaxial / multiaxial)
3. **Crear `W##_template.e2k`** con materiales pre-cargados + geometría base
4. **`open_template.py` → abrir ETABS** para que el usuario diseñe la sección
5. **Esperar al usuario** ("avisame cuando termines")
6. **Leer el e2k editado**, extraer parámetros
7. **`validate_*.py` → correr + leer log**
8. **Si Δ% < 1% → crear benchmark en `examples/src/W##_nombre/`**
9. **Registrar** en `exampleRegistry.ts` + `vite.config.ts`
10. **Build + deploy** (`npm run build:deploy` + sync worktree gh-pages + push)

Templates clave a reutilizar:
- `validacion/Etabs/W2_viga_cantilever/open_template_in_etabs.py` (abrir EDB)
- `validacion/Etabs/W2_viga_cantilever/validate_compuesta_encased.py` (validar)
- `examples/src/W2_viga_axial_composite_encased_cantilever/*` (benchmark hekatan)

---

## Stack Tecnológico (resumen rápido)

| Componente | Versión | Path |
|---|---|---|
| ETABS | 22.6.0 Ultimate | `C:\Program Files\Computers and Structures\ETABS 22\` |
| ETABSv1.dll (API) | bundled con ETABS | `…\ETABS 22\ETABSv1.dll` |
| Python | 3.10+ | system PATH |
| pythonnet | 3.0+ | `pip install pythonnet` |
| .NET Runtime | Core 8.0 | bundled |
| Node.js | 22+ | para hekatan-fem build |
| TypeScript | 5.x | hekatan-struct examples |
