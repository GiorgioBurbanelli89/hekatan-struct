# Validación contra SAFE 20 vía API .NET

Este directorio documenta cómo automatizar la validación contra **SAFE 20**
usando su API .NET pública (`SAFEv1.dll`) desde Python (vía pythonnet).
El script de referencia es `hekatan-struct/cli/safe_api_zapata.py`.

## ¿Por qué API y no manual?

Originalmente la validación contra SAFE se hacía manualmente siguiendo los
procedimientos descritos en `plate_thin.md`, `plate_thick.md`, etc.
La nota antigua decía "SAFE no expone API .NET pública" — **eso era
incorrecto**. SAFE 20 (al menos desde la versión 20.3.0) expone una API
completa idéntica en estructura a ETABS/SAP2000:

```python
import clr
clr.AddReference(r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll")
from SAFEv1 import cHelper, Helper, cOAPI, cSapModel, cFile, cAnalyze, ...
```

Con esto puedo construir modelos desde cero, correr el solver, y extraer
resultados sin clicar la GUI.

## Setup

| Requisito                                        | Verificación                                                       |
|--------------------------------------------------|--------------------------------------------------------------------|
| SAFE 20 instalado                                | `ls "C:/Program Files/Computers and Structures/SAFE 20/SAFEv1.dll"` |
| Python 3 (probado 3.12)                          | `python --version`                                                  |
| `pythonnet` (módulo `clr`)                       | `python -c "import clr; print('OK')"`                               |
| Encoding UTF-8 en consola                        | `PYTHONIOENCODING=utf-8` + `python -X utf8`                         |

## Patrón mínimo: lanzar SAFE + crear modelo

```python
import clr
clr.AddReference(r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll")
from SAFEv1 import cHelper, Helper, cOAPI, cSapModel, cFile, cAnalyze

helper   = cHelper(Helper())
safe_obj = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
safe_obj.ApplicationStart()                # ABRE LA GUI DE SAFE (~10 s)

sap      = cSapModel(safe_obj.SapModel)
sap.InitializeNewModel()

file_api = cFile(sap.File)
file_api.NewBlank()                        # modelo en blanco
sap.SetPresentUnits_2(eForce.kN, eLength.m, eTemperature.C)

# … construir geometría/cargas/etc. …

analyze = cAnalyze(sap.Analyze)
analyze.RunAnalysis()                      # solver SAFE

# … extraer resultados via cDatabaseTables …

safe_obj.ApplicationExit(False)            # cierra SAFE sin salvar
```

Notas:
- `ApplicationStart()` siempre abre la ventana visible de SAFE — no hay modo
  headless público.
- `CreateObjectProgID("CSI.SAFE.API.ETABSObject")` — el ProgID dice "ETABS"
  porque SAFE comparte infraestructura COM con ETABS/SAP2000 (de ahí los
  alias `cOAPI`, `cSapModel`, etc.).

## Crear un modelo de zapata desde cero

El flujo completo (referencia: `safe_api_zapata.py`):

1. **Material** (`cPropMaterial`)
   ```python
   mat = cPropMaterial(sap.PropMaterial)
   mat.SetMaterial("Conc25", eMatType.Concrete, -1, "", "")
   mat.SetMPIsotropic("Conc25", E_kNm2, nu, alpha_thermal, 0.0)
   mat.SetWeightAndMass("Conc25", 1, rho_kNm3, 0.0)   # MyOption=1 = weight/vol
   ```

2. **Slab property** (`cPropArea`)
   ```python
   parea = cPropArea(sap.PropArea)
   parea.SetSlab("Footing", eSlabType.Footing, eShellType.ShellThin,
                 "Conc25", thickness_m, -1, "", "")
   ```

3. **Area spring (Winkler)** (`cPropAreaSpring` + `cDatabaseTables`)

   ⚠️ **TRAMPA**: `SetAreaSpringProp(U1, U2, U3, ...)` parece controlar
   el stiffness del spring, pero en la práctica **SAFE IGNORA U3** y aplica
   un default `Subgrade Modulus = 100 lb/in³ = 27145 kN/m³`. Esto produce
   un gap silencioso ~38% en w_max contra la teoría de Winkler.

   El campo real que el solver SAFE usa se llama `SubModulus` y vive en la
   tabla `Spring Property Definitions - Area Springs`. Hay que crear el
   spring property primero (con U3 placeholder) y después **editar
   `SubModulus` vía `DatabaseTables`**:

   ```python
   from SAFEv1 import cPropAreaSpring, cDatabaseTables

   psp = cPropAreaSpring(sap.PropAreaSpring)
   # Step 1: crear el spring property (el U3 es placeholder ignorado)
   psp.SetAreaSpringProp("AS_Winkler", 0, 0, ks_kNm3,    # U1, U2, U3 (ignored)
                         0,                              # 0=Linear
                         0,                              # SpringOption (ignored too)
                         "",                             # SoilProfile vacío
                         1.0, 1.0, -1, "", "")

   # Step 2: editar SubModulus en la tabla via DatabaseTables — este SÍ se aplica
   db = cDatabaseTables(sap.DatabaseTables)
   spring_table = "Spring Property Definitions - Area Springs"
   fk=[]; group=""; ver=0; fi=[]; n=0; td=[]
   ret, ver, fi, n, td = db.GetTableForEditingArray(spring_table, group, ver, fi, n, td)
   fi = list(fi); td = list(td)
   # headers retornados: ['Name', 'SubModulus', 'NonlinOpt', 'EPCompStiff',
   #                       'EPCompStrength', 'EPTensStiff', 'EPTensStrength',
   #                       'Color', 'GUID', 'Notes']
   td[1] = str(ks_kNm3)    # SubModulus en CurrUnits (kN/m³ si SetUnits=kN,m,C)
   db.SetTableForEditingArray(spring_table, ver, fi, n, td)
   nfe=nem=nwm=nim=0; ilog=""
   db.ApplyEditedTables(True, nfe, nem, nwm, nim, ilog)
   ```

   Verificación: tras correr análisis, `w_uniform` con carga distribuida
   `q=P/A` debe dar `w = q/ks` exacto. Si NO matchea, SAFE no aceptó tu
   override de `SubModulus`.

4. **Load pattern** (`cLoadPatterns`)
   ```python
   lpat = cLoadPatterns(sap.LoadPatterns)
   lpat.Add("P_Test", eLoadPatternType.Other, 0.0, True)  # SelfWeight=0, AddCase=True
   ```

5. **Área por coordenadas** (`cAreaObj`) — pythonnet 3.x: out-params via tuple-return
   ```python
   ao = cAreaObj(sap.AreaObj)
   xs = Array[Double]([0, Lz, Lz, 0])
   ys = Array[Double]([0, 0, Bz, Bz])
   zs = Array[Double]([0, 0, 0, 0])
   ret, _xs, _ys, _zs, area_name = ao.AddByCoord(4, xs, ys, zs, "",
                                                  "Footing", "MyArea", "Global")
   ao.SetSpringAssignment(area_name, "AS_Winkler", eItemType.Objects)
   ```

6. **Joint + carga puntual** (`cPointObj`)
   ```python
   po = cPointObj(sap.PointObj)
   ret, pt_name = po.AddCartesian(x, y, 0, "", "PCenter", "Global", False, 0)
   load_vec = Array[Double]([0, 0, -P_kN, 0, 0, 0])
   po.SetLoadForce(pt_name, "P_Test", load_vec, True, "Global", eItemType.Objects)
   ```

7. **Save + Run**
   ```python
   file_api.Save(r"C:\path\to\model.fdb")
   analyze.RunAnalysis()
   ```

8. **Extraer resultados** (`cDatabaseTables`)
   ```python
   db = cDatabaseTables(sap.DatabaseTables)
   ret, group, ver, fields, n, td = db.GetTableForDisplayArray(
       "Joint Displacements", [], "", 0, [], 0, [])
   # td es .NET array — convertir a list de Python ANTES de slicing!
   td = list(td); fields = list(fields)
   cols = len(fields)
   rows = [td[i*cols:(i+1)*cols] for i in range(n)]
   ```

## Gotchas (los que me hicieron perder horas)

1. **`clr.Reference` no existe en pythonnet 3.x.** El ejemplo CHM antiguo
   usa esa sintaxis para out-params; ya no funciona. Patrón nuevo: pasar
   placeholder y leer del tuple-return.
   ```python
   # MAL (pythonnet 2.x):
   name_ref = clr.Reference[str](); name_ref.Value = ""
   obj.AddCartesian(x, y, z, name_ref, ...)
   name = name_ref.Value

   # BIEN (pythonnet 3.x):
   ret, name = obj.AddCartesian(x, y, z, "", ...)
   ```

2. **Los .NET arrays NO soportan slicing Python.**
   `td[i*cols:(i+1)*cols]` lanza `TypeError: array index has type slice`.
   Solución: `td = list(td)` ANTES del slice.

3. **Las signaturas de métodos requieren enums, no ints.**
   Probaste `SetSlab(name, 4, 1, mat, t)` con ints → `TypeError: No method
   matches`. La signature real es `(String, eSlabType, eShellType, String,
   Double, Int32, String, String)`. Usá enums:
   ```python
   from SAFEv1 import eSlabType, eShellType, eMatType, eItemType, eLoadPatternType
   parea.SetSlab("Footing", eSlabType.Footing, eShellType.ShellThin, ...)
   ```
   Lista completa de enums relevantes: `eSlabType` (Slab/Drop/Stiff_DO_NOT_USE/
   Ribbed/Waffle/Mat/Footing), `eShellType` (ShellThin/ShellThick/Membrane/
   Layered), `eItemType` (Objects/Group/SelectedObjects), `eMatType` (Steel/
   Concrete/NoDesign/...), `eLoadPatternType` (Dead/SuperDead/Live/.../Other/...).

4. **Pythonnet imports vacíos**: `dir(SAFEv1)` retorna `[]` incluso después
   de importar — esto es normal por cómo CSI declara los tipos. Usá
   `System.Reflection.Assembly.GetAssembly(SAFEv1.cFile).GetTypes()` para
   descubrirlos.

5. **`SAFEv1.dll` NO acepta `.f2k` en `OpenFile`** — solo `.fdb`. El método
   `OpenFile(.f2k)` retorna 0 pero el modelo queda vacío. Para importar un
   `.f2k` hay que convertirlo a `.fdb` manualmente en la GUI primero, o
   construir el modelo desde cero como hacemos aquí.

6. **`ApplicationStart()` toma ~10 s** y abre la ventana. El primer
   `RunAnalysis` posterior toma otros ~10–30 s. Total ~30–45 s por corrida.
   No paralelizar; cada llamada nueva intenta abrir otra instancia de SAFE.

7. **Encoding**: usar siempre `PYTHONIOENCODING=utf-8 python -X utf8` —
   sin esto los `print` con caracteres unicode (→, ✓, ñ) crashean con
   `UnicodeEncodeError: charmap codec...` en consolas Windows.

8. **`SetAreaSpringProp(U3=ks)` ES UNA TRAMPA** — SAFE ignora U3 y
   aplica default `Subgrade Modulus = 100 lb/in³ ≈ 27145 kN/m³`. La
   diferencia entre lo que pides y lo que SAFE guarda silenciosamente
   produce un gap ~38% en deflexiones contra teoría Winkler. El fix
   correcto es editar la tabla `Spring Property Definitions - Area
   Springs` campo `SubModulus` via `cDatabaseTables.SetTableForEditingArray`
   + `ApplyEditedTables` (ver sección "Area spring" arriba). **Validación
   obligatoria**: corrida de carga distribuida `q=P/A` debe dar
   `w_uniform = q/ks` exacto. Si NO matchea, el override no se aplicó.

## Estructura del script `safe_api_zapata.py`

```
1. Parsear args (--json=path, --keep-open)
2. ApplicationStart() → conectar a SAFE
3. NewBlank + SetUnits(kN, m, C)
4. Crear material concreto
5. Crear slab property Footing
6. Crear area spring Winkler
7. Crear load pattern P_Test
8. AddByCoord (4 vértices) → área
9. SetSpringAssignment al área
10. AddCartesian (centro) → point
11. SetLoadForce P en centro
12. Save .fdb
13. RunAnalysis
14. GetTableForDisplayArray("Joint Displacements") → w_max
15. Sampling de 9 puntos (esquinas/medios/centro) via GetCoordCartesian
16. GetTableForDisplayArray("Element Forces - Areas") → Mxx, Myy, Mxy
17. Output JSON + tabla en consola
18. ApplicationExit(False)
```

## Extender a otros casos

Para validar **otra geometría / suelo / carga**, editar solo el dict `P` al
inicio de `safe_api_zapata.py`:

```python
P = {
    "Lz": 2.50, "Bz": 2.50, "tz": 0.40,  # zapata mayor
    "E_kNm2": 24855e3, "nu": 0.20, "rho_kNm3": 24.0,
    "ks_kNm3": 30000.0,                  # suelo más rígido
    "P_kN": 50 * 9.80665,                # 50 tonf
}
```

Y editar el mismo dict `params` en `cli_zapata.mjs` para mantener paridad
en ambos lados.

## Comparar resultados

El script genera `safe_zapata_result.json` con el mismo schema que
`hekatan_zapata_result.json`. Para comparar manualmente:

```bash
cd hekatan-struct/cli
diff <(jq .results.samples_9pts hekatan_zapata_result.json) \
     <(jq .results.samples_9pts safe_zapata_result.json)
```

La tabla side-by-side está en `validacion/safe/zapata-aislada.md`.

## Referencias

- Ejemplo CHM oficial: `Api Safe/CSI API SAFE v1.chm` (abrir con
  `hh.exe "<path>"`). El ejemplo Python que viene en el CHM usa
  `NewSteelDeck()` + ediciones via DatabaseTables — útil pero distinto
  patrón al de este script.
- CSI Developer site: https://www.csiamerica.com/developer
- ETABS API docs (signaturas compatibles): https://docs.csiamerica.com/help-files/etabs-api-2016/

## Roadmap

- [x] Caso zapata aislada (este directorio).
- [ ] Caso zapata viga-amarre (medianera + viga + centrada con Winkler 3D).
- [ ] Caso losa de cimentación con malla refinada controlada.
- [ ] Patrones de carga con momentos (Mx, My) además de P puro.
- [ ] Captura headless del 3D Three.js de Hekatan via puppeteer para
      side-by-side visual contra screenshot SAFE.
