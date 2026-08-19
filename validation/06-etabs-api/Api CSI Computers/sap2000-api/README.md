# validacion/sap2000-api/ — SAP2000 v21+ API verification

Cada caso FEM está implementado en **3 lenguajes** que invocan la misma
API .NET de SAP2000 (`SAP2000v1.dll`). Los 3 producen resultados idénticos
porque hablan con el mismo solver SAP2000.

## Estructura

```
sap2000-api/
├── matlab/          MATLAB R2017a (NET.addAssembly)
├── python/          Python 3.8+ (comtypes.client)
└── powershell/      PowerShell 7+ (Add-Type)
```

## Scripts por caso (cada uno disponible en los 3 lenguajes)

| Caso              | HekatanLab | ShellType API   | Archivo               |
|-------------------|-----------|-----------------|-----------------------|
| Plate Thin        | FE02      | 2 (Plate-Thin)  | `plate_thin_sap2000.{m,py,ps1}` |
| Plate Thick       | FE03      | 3 (Plate-Thick) | `plate_thick_sap2000.{m,py,ps1}` |
| Membrane (wall)   | FE01b     | 4 (Membrane)    | `membrane_sap2000.{m,py,ps1}` |
| Layered           | FE04      | 1 + `SetShellLayer_1` | `layered_sap2000.{m,py,ps1}` |
| Shell Thin        | FE05      | 1 (Shell, thin) | `shell_thin_sap2000.{m,py,ps1}` |
| Shell Thick       | FE06      | 1 (Shell, thick) | `shell_thick_sap2000.{m,py,ps1}` |
| Example 1-001     | (frame ref) | n/a (SetRectangle) | `example_1_001.{m,py,ps1}` |

## Requisitos comunes

- SAP2000 v21+ instalado
- Ajustar `APIDLLPath` al path real de `SAP2000v1.dll`

## Cómo correr cada lenguaje

### MATLAB R2017a+

```bash
cd matlab/
matlab -batch "plate_thin_sap2000"
matlab -batch "plate_thick_sap2000"
matlab -batch "membrane_sap2000"
matlab -batch "layered_sap2000"
matlab -batch "shell_thin_sap2000"
matlab -batch "shell_thick_sap2000"
matlab -batch "example_1_001"
```

Conexión vía `NET.addAssembly(APIDLLPath)` + `NET.explicitCast(...)`.

### Python 3.8+

```bash
cd python/
pip install comtypes
python plate_thin_sap2000.py
python plate_thick_sap2000.py
python membrane_sap2000.py
python layered_sap2000.py
python shell_thin_sap2000.py
python shell_thick_sap2000.py
python example_1_001.py
```

Conexión vía `comtypes.client.CreateObject("SAP2000v1.Helper")` +
`helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")`. El registry COM
de Windows debe tener registrado el ProgID — instalar SAP2000 lo registra
automáticamente.

### PowerShell 7+ (compatible PS 5.1)

```bash
cd powershell/
pwsh -File plate_thin_sap2000.ps1
pwsh -File plate_thick_sap2000.ps1
pwsh -File membrane_sap2000.ps1
pwsh -File layered_sap2000.ps1
pwsh -File shell_thin_sap2000.ps1
pwsh -File shell_thick_sap2000.ps1
pwsh -File example_1_001.ps1
```

Conexión vía `Add-Type -Path $APIDLLPath` + `New-Object SAP2000v1.Helper`.

## Patrón compartido (los 3 lenguajes)

Cada script ejecuta los mismos 10 pasos:

1. **Conectar** a SAP2000 (CreateObject / CreateObjectProgID)
2. **Inicializar modelo** con unidades (N_m_C = 6 para FEM,
   kip-ft-F = 5 / kip-in-F = 1 para Example 1-001)
3. **Definir material** (`PropMaterial.SetMaterial`, `SetMPIsotropic`)
4. **Definir sección** (`PropArea.SetShell_1` con ShellType correcto)
5. **Generar malla** (`AreaObj.AddByCoord` rectángulo a rectángulo)
6. **Aplicar BC** (`PointObj.SetRestraint`)
7. **Aplicar cargas** (`AreaObj.SetLoadUniform` o `PointObj.SetLoadForce`)
8. **Correr análisis** (`Analyze.RunAnalysis`)
9. **Extraer resultados** (`AnalysisResults.JointDispl`)
10. **Imprimir tabla de paridad** vs HekatanLab + referencia teórica

## Variables clave de output

Cada script termina imprimiendo:

```
SapResult_<caso>   = <valor extraído del API>
IndResult_<caso>   = <valor de referencia analítica>
PercentDiff_<caso> = <ratio - 1>
```

Idéntico al patrón del CSi Example 1-001 oficial.

## Diferencias entre lenguajes

| Aspecto              | MATLAB                       | Python (comtypes)            | PowerShell                  |
|----------------------|------------------------------|------------------------------|-----------------------------|
| Cargar DLL           | `NET.addAssembly`            | (auto via ProgID)            | `Add-Type -Path`            |
| Crear helper         | `Helper` cast con `explicitCast` | `CreateObject(...)`      | `New-Object`                |
| Out parameters       | `[ret, X, ...] = func(...)`  | `[...] = func(..., X, ...)`  | `[ref]$X`                   |
| Arrays               | `NET.createArray('System.Double', 4)` | `[a, b, c, d]` lista | `[double[]] @(a,b,c,d)`     |
| Boolean              | `true()` / `false()`         | `True` / `False`             | `$true` / `$false`          |

**Python es el más conciso** (menos boilerplate de cast/ref), seguido por
**PowerShell**. **MATLAB** tiene la sintaxis más verbosa por los `NET.createArray`.

## Configuración avanzada

Variables al inicio de cada script:
- `AttachToInstance = true` — adjuntarse a SAP2000 ya abierto
- `SpecifyPath = true` + `ProgramPath` — usar versión SAP específica
- Comentar `ApplicationExit(False)` al final para inspeccionar el modelo en GUI

## Próximos pasos

- [ ] Correr los 7 casos en cada lenguaje con SAP2000 v21+ real
- [ ] Verificar que los 3 lenguajes producen el MISMO output (deberían, hablan al mismo solver)
- [ ] Documentar diferencias por versión SAP2000 (códigos `eShellType` pueden variar)
