# Guía: Cómo conectar PowerShell a productos CSI (ETABS / SAP2000 / SAFE)

Tutorial técnico paso a paso del proceso usado para extraer y comparar resultados FEM. Cero Python, cero compilación — solo PowerShell + COM nativo de Windows.

---

## 🎯 Índice

1. [Por qué PowerShell + COM (no Python)](#1-por-qué-powershell--com)
2. [Anatomía de la conexión OAPI](#2-anatomía-de-la-conexión-oapi)
3. [ProgIDs y diferencias entre productos](#3-progids-y-diferencias-entre-productos)
4. [Descubrir firmas de métodos (introspección)](#4-descubrir-firmas-de-métodos)
5. [Patrones de uso con ejemplos](#5-patrones-de-uso)
6. [Trampas comunes y soluciones](#6-trampas-comunes)
7. [Construir un modelo desde cero](#7-construir-un-modelo-desde-cero)
8. [Extraer resultados](#8-extraer-resultados)
9. [Análisis modal](#9-análisis-modal)
10. [Workflows reales (warm reuse, batch)](#10-workflows-reales)

---

## 1. Por qué PowerShell + COM

CSI publica su **OAPI** (Open Application Programming Interface) como objeto **COM** (Component Object Model). Cualquier lenguaje que hable COM puede usar OAPI:

| Lenguaje | Pros | Contras |
|---|---|---|
| **PowerShell** | ✅ Nativo Windows, sin instalar nada | Sintaxis [ref] verbosa |
| C# / VB.NET | API tipada, IntelliSense | Requiere Visual Studio (~5 GB) |
| Python | Documentación abundante | `pip install comtypes`, encoding issues |
| MATLAB | Toolbox específico CSI | Licencia $$$ |
| C++ | Performance | COM headers complejos |
| **Visual Fortran** | Soportado oficialmente | Intel Fortran $$$ |

**PowerShell ganó** porque:
- ✅ Ya viene con Windows (cero instalación)
- ✅ Acceso directo a COM via `New-Object -ComObject`
- ✅ JSON output natural con `ConvertTo-Json`
- ✅ Get-Member para introspección de tipos en runtime

---

## 2. Anatomía de la conexión OAPI

### Estructura conceptual

```
PowerShell                         CSI Product (ETABS/SAP/SAFE)
    │                                       │
    │  1. New-Object -ComObject "ETABSv1.Helper"
    │ ────────────────────────────────────►│
    │                                       │
    │  2. helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
    │ ────────────────────────────────────►│
    │                                       │  ← arranca proceso ETABS
    │                                       │     (sin GUI si visible=false)
    │  3. ETABSObject.ApplicationStart()
    │ ────────────────────────────────────►│
    │                                       │
    │  4. SapModel = ETABSObject.SapModel
    │ ◄──── reference al modelo activo ───│
    │                                       │
    │  5. SapModel.File.OpenFile(...)       │
    │ ────────────────────────────────────►│  ← carga modelo
    │                                       │
    │  6. SapModel.Analyze.RunAnalysis()    │
    │ ────────────────────────────────────►│  ← corre análisis
    │                                       │
    │  7. SapModel.Results.JointReact(...)  │
    │ ◄──── arrays de resultados ──────────│
    │                                       │
    │  8. ETABSObject.ApplicationExit()     │
    │ ────────────────────────────────────►│
    │                                       │  ← cierra ETABS
```

### El "Helper" object

Todos los productos CSI exponen un **Helper** como entry point:

```powershell
# Crear el helper (esto NO arranca aún el programa CSI)
$helper = New-Object -ComObject "ETABSv1.Helper"

# El helper sirve para:
# - CreateObjectProgID: arrancar nueva instancia del programa
# - GetObject: conectarse a una instancia ya corriendo
```

---

## 3. ProgIDs y diferencias entre productos

| Producto | Helper ProgID | Object name |
|---|---|---|
| **ETABS** | `ETABSv1.Helper` | `CSI.ETABS.API.ETABSObject` |
| **SAP2000** | `SAP2000v1.Helper` | `CSI.SAP2000.API.SapObject` |
| **SAFE** | `SAFEv1.Helper` | `CSI.SAFE.API.ETABSObject` ⚠ |

⚠ **SAFE usa "ETABSObject"** en su ProgID por legacy de CSI — no es typo, así está registrado.

### Verificar qué ProgIDs tienes registrados

```powershell
Get-ChildItem "HKLM:\SOFTWARE\Classes" |
  Where-Object { $_.Name -match "SAFE|SAP2000|ETABS" } |
  Select-Object -ExpandProperty PSChildName | Sort-Object | Get-Unique
```

Salida ejemplo:
```
CSI.ETABS.API.ETABSObject
CSI.SAFE.API.ETABSObject
CSI.SAP2000.API.SapObject
ETABSv1.Helper
SAFEv1.Helper
SAP2000v1.Helper
```

### `ApplicationStart` — DIFERENTES firmas según producto

```powershell
# ETABS — SIN args
$ETABSObject.ApplicationStart()

# SAP2000 — CON 3 args (eUnits, visible, fileName)
$SapObject.ApplicationStart(6, $false, "")
#                            ^   ^      ^
#                            |   |      └─ archivo a abrir (vacío = ninguno)
#                            |   └─ visible=$true muestra GUI, $false invisible
#                            └─ unidades: 6 = kN, m, C

# SAFE — depende de versión (v16+ generalmente sin args, v20 puede ser igual a SAP)
$SAFEObject.ApplicationStart()
```

### Conectar a instancia ya abierta (warm reuse)

```powershell
# Intentar atachar a instancia ya corriendo (~5s vs 30-60s startup nuevo)
try {
    $Sap = $helper.GetObject("CSI.SAP2000.API.SapObject")
    $wasRunning = $true
} catch {
    # No hay instancia, arrancar nueva
    $Sap = $helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
    $Sap.ApplicationStart(6, $false, "")
    $wasRunning = $false
}
```

---

## 4. Descubrir firmas de métodos (introspección)

PowerShell + COM permite **inspeccionar la API en tiempo real** sin buscar docs:

```powershell
# Conectarse al objeto activo
$Sap = (New-Object -ComObject "SAP2000v1.Helper").GetObject("CSI.SAP2000.API.SapObject")
$Mdl = $Sap.SapModel

# Listar TODOS los métodos del PointObj
$Mdl.PointObj | Get-Member -MemberType Method | Format-Table Name, Definition

# Buscar métodos específicos
$Mdl.PropArea | Get-Member -Name "*Shell*" | Format-List Definition

# Ver firma exacta de un método
$Mdl.Results | Get-Member -Name "JointReact" | Format-List Definition
```

Output ejemplo:
```
Definition : int cPropArea.SetShell_1(string Name, int ShellType,
             bool IncludeDrillingDOF, string MatProp, double MatAng,
             double Thickness, double Bending, int Color,
             string Notes, string GUID)
```

**Esto te dice EXACTAMENTE** los args necesarios — sin abrir el `.chm` de OAPI.

### Helper para introspección rápida

```powershell
function Get-OAPIMethod {
    param([object] $Object, [string] $Pattern)
    $Object | Get-Member -MemberType Method |
        Where-Object { $_.Name -match $Pattern } |
        Format-List Name, Definition
}

# Uso:
Get-OAPIMethod $Mdl.PointObj "Set"
Get-OAPIMethod $Mdl.AreaObj "Load"
Get-OAPIMethod $Mdl.Results "Modal"
```

---

## 5. Patrones de uso

### Patrón 1: Parámetros [ref] (output via reference)

OAPI devuelve **arrays grandes vía parámetros `[ref]`** (igual que C#). En PowerShell:

```powershell
# Declarar variables vacías
$Num = 0
$Obj = $null
$LC = $null
$F1 = $F2 = $F3 = $null
$M1 = $M2 = $M3 = $null

# Llamar método con [ref]
$ret = $Mdl.Results.JointReact("All", 2,
    [ref] $Num,                          # número de filas
    [ref] $Obj,  [ref] $Elm,             # nombres
    [ref] $LC,   [ref] $StepType,        # caso, step type
    [ref] $StepNum,                      # step num
    [ref] $F1,   [ref] $F2,   [ref] $F3, # fuerzas Fx, Fy, Fz
    [ref] $M1,   [ref] $M2,   [ref] $M3) # momentos Mx, My, Mz

# Después de la llamada, $Obj, $F1, etc. son arrays con $Num elementos
for ($i = 0; $i -lt $Num; $i++) {
    Write-Output ("Joint=" + $Obj[$i] + " Fz=" + $F3[$i])
}
```

### Patrón 2: Parámetros opcionales (PowerShell COM NO los aplica)

C#/VB tienen defaults para parámetros opcionales. **PowerShell COM exige TODOS los args**:

```powershell
# ❌ MAL — falla porque "AddCartesian" tiene 8 args, pasaste solo 5
$Mdl.PointObj.AddCartesian(0, 0, 0, [ref] $name, "")

# ✅ BIEN — pasar todos los args explícitamente
$Mdl.PointObj.AddCartesian(0, 0, 0, [ref] $name, "", "Global", $false, 0)
#                           x  y  z  Name        UserName CSys     MergeOff MergeNumber
```

**Regla**: si una llamada falla con `MethodCountCouldNotFindBest`, falta un argumento opcional. Usá `Get-Member` para ver la firma completa.

### Patrón 3: Arrays tipados (`[bool[]]`, `[double[]]`)

Para arrays como input a OAPI, **declarar tipo explícito** evita conversiones erróneas:

```powershell
# Restraints: 6 booleanos [Ux, Uy, Uz, Rx, Ry, Rz]
[bool[]] $rest = @($true, $true, $true, $false, $false, $false)
$Mdl.PointObj.SetRestraint("nodo1", [ref] $rest, 0)
#                                   ^^^^^^^^^^^^  ^
#                                   tipo correcto  eItemType=0=Objects

# Cargas: 6 doubles [Fx, Fy, Fz, Mx, My, Mz]
[double[]] $loadArr = @(0.0, 0.0, -100.0, 0.0, 0.0, 0.0)
$Mdl.PointObj.SetLoadForce("nodo1", "Q", [ref] $loadArr, $true, "Global", 0)
```

### Patrón 4: Encoding (evitar Unicode en scripts)

PowerShell parser puede romperse con caracteres no-ASCII (em-dash —, acentos):

```powershell
# ❌ MAL
Write-Output "Nodo restringido — listo"   # em-dash rompe parser a veces

# ✅ BIEN — ASCII puro
Write-Output "Nodo restringido - listo"
```

Si es necesario escribir comentarios en español con acentos, **guardar archivo como UTF-8 sin BOM** o usar solo ASCII.

---

## 6. Trampas comunes

### Trampa 1: `MethodCountCouldNotFindBest`

**Síntoma**: PowerShell rechaza la llamada porque no puede elegir entre overloads.

**Causa**: faltan parámetros opcionales O número de args incorrecto.

**Solución**: usar `Get-Member` para ver firma exacta y pasar TODOS los args:

```powershell
# Ver firmas disponibles
$Mdl.PropMaterial | Get-Member -Name "SetWeightAndMass" | fl Definition
# Output: int cPropMaterial.SetWeightAndMass(string Name, int MyOption,
#                                             double Value, double Temp)

# Usar exactamente esos args:
$Mdl.PropMaterial.SetWeightAndMass("ConcHek", 2, 2.4, 0)
#                                              ^   ^   ^
#                                  MyOption  Value Temp (no es opcional!)
```

### Trampa 2: ApplicationStart firma cambia entre productos

```powershell
# ETABS
$ETABSObject.ApplicationStart()                     # SIN args

# SAP2000
$SapObject.ApplicationStart(6, $false, "")          # 3 args obligatorios

# SAFE — depende versión
$SAFEObject.ApplicationStart()                      # generalmente sin args
```

Si falla, verificar firma con:
```powershell
$Object | Get-Member -Name "ApplicationStart" | fl Definition
```

### Trampa 3: ProgID `ETABSv1` vs `ETABS` puro

```powershell
# ❌ ProgID antiguo (versiones <17)
New-Object -ComObject "ETABS.Helper"

# ✅ ProgID moderno (versiones 17+)
New-Object -ComObject "ETABSv1.Helper"
```

Sufijo `v1` indica versión de la API (no del programa). API v1 cubre ETABS 17–22.

### Trampa 4: Modelo invisible con dialog modal escondido

Si el script se cuelga sin error, probablemente hay un dialog modal de SAP/ETABS que no podés ver:

```powershell
# Solución 1: arrancar VISIBLE para diagnosticar
$Sap.ApplicationStart(6, $true, "")  # ← visible=$true

# Solución 2: matar procesos colgados
Get-Process | Where-Object { $_.Name -match "ETABS|SAP2000|SAFE" } |
    Stop-Process -Force
```

### Trampa 5: Drilling DOF y Membrane

**SAP2000 Membrane (ShellType=5) NO tiene Uz DOF**. Si aplicás `SetLoadUniform` con dirección Gravity sobre membrane, los nodos interiores → δ → ∞.

**Solución**: usar Shell-Thin (ShellType=1) si necesitás resistencia vertical, o aplicar tri/trap manual a frames perimetrales.

### Trampa 6: Modal con masa cero

Si modal devuelve `f1 = 0` o periodos enormes (10⁶ s), la masa no está bien asignada:

```powershell
# Verificar masa del material
$weight = 0.0; $mass = 0.0
$Mdl.PropMaterial.GetWeightAndMass("ConcHek", [ref] $weight, [ref] $mass, 0)
Write-Output ("weight=" + $weight + " mass=" + $mass)

# Si mass = 0, asignar:
$Mdl.PropMaterial.SetWeightAndMass("ConcHek", 2, 2.4, 0)
#                                              ^  ^
#                            MyOption=2: density (ton/m³)
#                                                Value
```

**SAP por default** asigna densidad correcta cuando creás Concrete (`SetMaterial`), pero después `SetWeightAndMass` retorna 1 (warning, no error). El valor SÍ está correcto.

---

## 7. Construir un modelo desde cero

Ejemplo: placa cuadrada simply supported con malla 8×8.

### Paso 1: Inicializar

```powershell
$helper = New-Object -ComObject "SAP2000v1.Helper"
$Sap = $helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
$Sap.ApplicationStart(6, $false, "") | Out-Null    # invisible, kN/m/C
$Mdl = $Sap.SapModel
$Mdl.InitializeNewModel(6) | Out-Null              # 6 = eUnits_kN_m_C
$Mdl.File.NewBlank() | Out-Null
```

### Paso 2: Material (concreto)

```powershell
$matName = "Conc"
# eMatType = 2 (Concrete)
$Mdl.PropMaterial.SetMaterial($matName, 2, -1, "", "") | Out-Null
# E, ν, α térmico
$Mdl.PropMaterial.SetMPIsotropic($matName, 21500000, 0.20, 0, 0) | Out-Null
# La densidad SAP la asigna automáticamente al crear concrete (~2.4 ton/m³)
```

### Paso 3: Sección área (Shell-Thin)

```powershell
$secName = "Losa20"
# Args: name, ShellType, IncludeDrillingDOF, MatProp, MatAng, MembraneThk, BendingThk, Color, Notes, GUID
$Mdl.PropArea.SetShell_1($secName, 1, $false, $matName, 0, 0.20, 0.20, -1, "", "") | Out-Null
# ShellType: 1=Shell-Thin, 2=Shell-Thick, 3=Plate-Thin, 4=Plate-Thick, 5=Membrane
```

### Paso 4: Crear nodos (grid 9×9)

```powershell
$L = 4.0; $NDiv = 8
$dx = $L / $NDiv
$nodes = @{}                                       # diccionario para lookup
for ($j = 0; $j -le $NDiv; $j++) {
    for ($i = 0; $i -le $NDiv; $i++) {
        $nm = ""
        $Mdl.PointObj.AddCartesian(
            $i * $dx, $j * $dx, 0.0,               # x, y, z
            [ref] $nm,                              # nombre asignado
            "", "Global", $false, 0                 # UserName, CSys, MergeOff, MergeNumber
        ) | Out-Null
        $nodes["${i}_${j}"] = $nm                  # guardar mapeo (i,j) → nombre
    }
}
```

### Paso 5: Crear áreas Q4

```powershell
for ($j = 0; $j -lt $NDiv; $j++) {
    for ($i = 0; $i -lt $NDiv; $i++) {
        [string[]] $pts = @(
            $nodes["${i}_${j}"],
            $nodes["$($i+1)_${j}"],
            $nodes["$($i+1)_$($j+1)"],
            $nodes["${i}_$($j+1)"]
        )
        $aName = ""
        $Mdl.AreaObj.AddByPoint(
            4,                                      # número de puntos
            [ref] $pts, [ref] $aName,
            $secName,                               # sección
            ""                                      # UserName
        ) | Out-Null
    }
}
```

### Paso 6: Restraints (simply supported)

```powershell
for ($j = 0; $j -le $NDiv; $j++) {
    for ($i = 0; $i -le $NDiv; $i++) {
        $isPerim = ($i -eq 0 -or $i -eq $NDiv -or $j -eq 0 -or $j -eq $NDiv)
        if (-not $isPerim) { continue }

        # Tipos de restraint: simply supported = Uz=0 en perímetro
        # En 1 esquina: agregamos Ux,Uy=0 para evitar rigid body
        if ($i -eq 0 -and $j -eq 0) {
            [bool[]] $rest = @($true, $true, $true, $false, $false, $false)
        } elseif ($i -eq $NDiv -and $j -eq 0) {
            [bool[]] $rest = @($false, $true, $true, $false, $false, $false)
        } else {
            [bool[]] $rest = @($false, $false, $true, $false, $false, $false)
        }
        $Mdl.PointObj.SetRestraint($nodes["${i}_${j}"], [ref] $rest, 0) | Out-Null
        #                                                                ^
        #                                       eItemType: 0=Objects, 1=Group, 2=Selected
    }
}
```

### Paso 7: Cargar (uniforme via área)

```powershell
$loadName = "Q"
# Add(name, type, selfWtMult, addAnalysisCase)
# type: 8 = Other (no auto self-weight)
$Mdl.LoadPatterns.Add($loadName, 8, 0, $true) | Out-Null

# Aplicar carga uniforme a cada área
foreach ($a in $areaNames) {
    # SetLoadUniform(name, loadPat, value, dir, replace, csys, itemType)
    # dir: 10 = Gravity (auto -Z global)
    $Mdl.AreaObj.SetLoadUniform($a, $loadName, 10, 10, $true, "Global", 0) | Out-Null
}
```

### Paso 8: Guardar y correr análisis

```powershell
# DEBES guardar antes de RunAnalysis
$Mdl.File.Save("$env:TEMP\modelo.sdb") | Out-Null

# Análisis
$ret = $Mdl.Analyze.RunAnalysis()
# ret = 0 si OK
```

---

## 8. Extraer resultados

### Setup: seleccionar casos para output

```powershell
# Antes de extraer, hay que seleccionar CASOS para que SAP los exporte
$Mdl.Results.Setup.DeselectAllCasesAndCombosForOutput() | Out-Null

# IMPORTANTE: SetCaseSelectedForOutput requiere 2 args (PowerShell COM no aplica defaults)
$Mdl.Results.Setup.SetCaseSelectedForOutput("Q", $true) | Out-Null
$Mdl.Results.Setup.SetCaseSelectedForOutput("MODAL", $true) | Out-Null
```

### Extraer joint displacements

```powershell
$Num = 0
$Obj = $Elm = $LC = $StepType = $StepNum = $null
$U1 = $U2 = $U3 = $R1 = $R2 = $R3 = $null

$ret = $Mdl.Results.JointDispl(
    "All", 2,                                       # name="All", ItemTypeElm=2 (GroupElm)
    [ref] $Num,
    [ref] $Obj, [ref] $Elm, [ref] $LC,
    [ref] $StepType, [ref] $StepNum,
    [ref] $U1, [ref] $U2, [ref] $U3,
    [ref] $R1, [ref] $R2, [ref] $R3
)

# Procesar resultados
$displacements = @()
for ($i = 0; $i -lt $Num; $i++) {
    $displacements += [ordered]@{
        joint = $Obj[$i]
        load_case = $LC[$i]
        Ux = $U1[$i]; Uy = $U2[$i]; Uz = $U3[$i]
        Rx = $R1[$i]; Ry = $R2[$i]; Rz = $R3[$i]
    }
}

# Encontrar el máximo absoluto Uz
$maxUz = 0
for ($i = 0; $i -lt $Num; $i++) {
    if ([Math]::Abs($U3[$i]) -gt [Math]::Abs($maxUz)) { $maxUz = $U3[$i] }
}
Write-Output ("Max |Uz| = " + ([Math]::Abs($maxUz) * 1000).ToString("N4") + " mm")
```

### Extraer joint reactions

```powershell
$Num = 0
$Obj = $Elm = $LC = $StepType = $StepNum = $null
$F1 = $F2 = $F3 = $M1 = $M2 = $M3 = $null

$Mdl.Results.JointReact(
    "All", 2,
    [ref] $Num,
    [ref] $Obj, [ref] $Elm, [ref] $LC,
    [ref] $StepType, [ref] $StepNum,
    [ref] $F1, [ref] $F2, [ref] $F3,
    [ref] $M1, [ref] $M2, [ref] $M3
) | Out-Null
```

### Truco crucial: `Name="All"` con `ItemTypeElm=2` (GroupElm)

```powershell
# ✅ ESTE es el truco que descubrí esta sesión
$Mdl.Results.JointReact("All", 2, ...)
#                       ^^^^^  ^
#                       group  GroupElm (ItemTypeElm=2)
#                       "All" es el grupo default que crea SAP
```

### Extraer area force shell (M11, M22, V13, V23)

```powershell
$Num = 0
$Obj = $Elm = $PointElm = $LC = $StepType = $StepNum = $null
$F11 = $F22 = $F12 = $FMax = $FMin = $FAngle = $FVM = $null
$M11 = $M22 = $M12 = $MMax = $MMin = $MAngle = $null
$V13 = $V23 = $VMax = $VAngle = $null

$Mdl.Results.AreaForceShell(
    "All", 2,
    [ref] $Num,
    [ref] $Obj, [ref] $Elm, [ref] $PointElm,
    [ref] $LC, [ref] $StepType, [ref] $StepNum,
    [ref] $F11, [ref] $F22, [ref] $F12,
    [ref] $FMax, [ref] $FMin, [ref] $FAngle, [ref] $FVM,
    [ref] $M11, [ref] $M22, [ref] $M12,
    [ref] $MMax, [ref] $MMin, [ref] $MAngle,
    [ref] $V13, [ref] $V23, [ref] $VMax, [ref] $VAngle
) | Out-Null
```

---

## 9. Análisis modal

### Configurar caso modal

```powershell
# El caso "MODAL" existe por default en SAP. Solo configurar nro de modos:
$Mdl.LoadCases.ModalEigen.SetNumberModes("MODAL", 12, 1) | Out-Null
#                                         caso     n_modes  min_modes
```

### Extraer periods + frequencies

```powershell
$Mdl.Results.Setup.DeselectAllCasesAndCombosForOutput() | Out-Null
$Mdl.Results.Setup.SetCaseSelectedForOutput("MODAL", $true) | Out-Null

$NumM = 0
$LCM = $StepTypeM = $StepNumM = $null
$Period = $Frequency = $CircFreq = $EigenValue = $null

$Mdl.Results.ModalPeriod(
    [ref] $NumM,
    [ref] $LCM, [ref] $StepTypeM, [ref] $StepNumM,
    [ref] $Period, [ref] $Frequency, [ref] $CircFreq, [ref] $EigenValue
) | Out-Null

for ($i = 0; $i -lt $NumM; $i++) {
    Write-Output ("Mode " + $StepNumM[$i] +
                  ": T=" + $Period[$i].ToString("N4") + "s" +
                  "  f=" + $Frequency[$i].ToString("N3") + " Hz")
}
```

### Extraer mass participation ratios (NEC ≥ 90%)

```powershell
$NumP = 0
$LCP = $StepTypeP = $StepNumP = $PeriodP = $null
$UX = $UY = $UZ = $SumUX = $SumUY = $SumUZ = $null
$RX = $RY = $RZ = $SumRX = $SumRY = $SumRZ = $null

$Mdl.Results.ModalParticipatingMassRatios(
    [ref] $NumP,
    [ref] $LCP, [ref] $StepTypeP, [ref] $StepNumP, [ref] $PeriodP,
    [ref] $UX, [ref] $UY, [ref] $UZ,
    [ref] $SumUX, [ref] $SumUY, [ref] $SumUZ,
    [ref] $RX, [ref] $RY, [ref] $RZ,
    [ref] $SumRX, [ref] $SumRY, [ref] $SumRZ
) | Out-Null

# El último valor de SumUX/UY/UZ es el total acumulado
$lastIdx = $NumP - 1
Write-Output ("Sum mass: Ux=" + ($SumUX[$lastIdx] * 100).ToString("N1") +
              "% Uy=" + ($SumUY[$lastIdx] * 100).ToString("N1") +
              "% Uz=" + ($SumUZ[$lastIdx] * 100).ToString("N1") + "%")
```

---

## 10. Workflows reales

### ⭐ Cuándo abre NUEVA instancia vs CONECTA a existente

Esta es la pregunta clave. El comportamiento depende de **DOS factores**:

```
┌─────────────────────────────────────────────────────────────────┐
│  Factor 1: ¿Qué método usás?                                    │
│  ──────────────────────────────                                 │
│  helper.GetObject(...)         → REUSA si existe, ERROR si no   │
│  helper.CreateObjectProgID(...)→ SIEMPRE crea NUEVA instancia   │
└─────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────┐
│  Factor 2: ¿Hay instancia ETABS/SAP/SAFE corriendo?             │
│  ────────────────────────────────────────────                   │
│  Verificás con: Get-Process | ? Name -match "ETABS|SAP|SAFE"    │
└─────────────────────────────────────────────────────────────────┘
```

### Diagrama de decisión (lo que hace nuestro script)

```
                ┌──────────────────────┐
                │ Inicio del script    │
                └──────────┬───────────┘
                           ▼
           ┌────────────────────────────────────┐
           │ Try: helper.GetObject(...)         │
           └──────────┬─────────────────────────┘
                      │
              ¿Hay instancia abierta?
                      │
            ┌─────────┴──────────┐
            ▼ SÍ                 ▼ NO (excepción)
    ┌──────────────┐      ┌──────────────────────────┐
    │ wasRunning = │      │ Try: CreateObjectProgID  │
    │   $true      │      │ + ApplicationStart()     │
    │              │      └──────────┬───────────────┘
    │ Usar misma   │                 ▼
    │ instancia    │      ┌──────────────────────────┐
    │ (warm)       │      │ wasRunning = $false      │
    │              │      │ (nueva instancia, cold)  │
    │ Tiempo: <1s  │      │ Tiempo: 30-60s startup   │
    └──────┬───────┘      └──────────┬───────────────┘
           │                         │
           └────────┬────────────────┘
                    ▼
        ┌─────────────────────────┐
        │ ... trabajar con SapModel
        └──────────┬──────────────┘
                   ▼
       ┌─────────────────────────────┐
       │ ¿Cerrar al terminar?        │
       │   if (-not $wasRunning) {   │
       │     ApplicationExit($false) │
       │   }                         │
       │                             │
       │ Si era warm reuse: NO cerrar│
       │ (la instancia era del user) │
       │                             │
       │ Si era nueva: SÍ cerrar     │
       │ (limpiar lo que abrimos)    │
       └─────────────────────────────┘
```

### Tabla resumen

| Escenario | `GetObject` resultado | `CreateObjectProgID` resultado |
|---|---|---|
| **Sin instancia abierta** | ❌ Excepción `0x800401E3` | ✅ Crea nueva (30-60s) |
| **Con 1 instancia abierta** | ✅ Conecta a existente (<1s) | ❌ Error o conflicto |
| **Con 2+ instancias abiertas** | ⚠ Conecta a una (no determinístico) | ❌ Conflicto |

### Código del patrón completo (qué hace cada línea)

```powershell
# ═══════════════════════════════════════════════════════════════
# PASO 1: Crear el Helper (NO arranca CSI, solo crea wrapper COM)
# ═══════════════════════════════════════════════════════════════
$helper = New-Object -ComObject "ETABSv1.Helper"
# ↑ En este punto NADA pasa con ETABS — solo tenemos el helper

# ═══════════════════════════════════════════════════════════════
# PASO 2: Intentar conectar a instancia existente (warm reuse)
# ═══════════════════════════════════════════════════════════════
$ETABS = $null
$wasRunning = $false

try {
    $ETABS = $helper.GetObject("CSI.ETABS.API.ETABSObject")
    #              ^^^^^^^^^^
    #              GetObject busca un OBJETO COM ya REGISTRADO en
    #              "Running Object Table" (ROT). Si ETABS está abierto,
    #              registró su SapObject → lo encontramos.

    if ($ETABS -ne $null) {
        $wasRunning = $true
        Write-Output "✅ Warm reuse: instancia existente encontrada"
    }
} catch {
    # GetObject lanza excepción si NO hay instancia. La capturamos.
    Write-Output "ℹ No hay instancia abierta"
    $ETABS = $null
}

# ═══════════════════════════════════════════════════════════════
# PASO 3: Si no había instancia, arrancar UNA NUEVA
# ═══════════════════════════════════════════════════════════════
if ($ETABS -eq $null) {
    Write-Output "🚀 Arrancando nueva instancia ETABS..."

    $ETABS = $helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
    #                ^^^^^^^^^^^^^^^^^^^
    #                CreateObjectProgID SIEMPRE crea proceso nuevo.
    #                NO chequea si ya hay uno corriendo.

    $ret = $ETABS.ApplicationStart()
    #              ^^^^^^^^^^^^^^^^
    #              Esto LANZA el proceso ETABS.exe en background.
    #              Toma ~30-60s la primera vez (carga DLLs).

    if ($ret -ne 0) {
        Write-Warning "ApplicationStart retornó $ret"
    }
    # wasRunning sigue $false → al terminar, cerraremos esta instancia
}

# ═══════════════════════════════════════════════════════════════
# PASO 4: Trabajar con el modelo (mismo código sea warm o cold)
# ═══════════════════════════════════════════════════════════════
$Mdl = $ETABS.SapModel
# ... abrir archivo, correr análisis, extraer resultados ...

# ═══════════════════════════════════════════════════════════════
# PASO 5: Cerrar SOLO si la abrimos NOSOTROS
# ═══════════════════════════════════════════════════════════════
if (-not $wasRunning) {
    # NOSOTROS abrimos esta instancia → la cerramos
    $ETABS.ApplicationExit($false) | Out-Null
    #                      ^^^^^^
    #                      false = NO guardar el modelo automáticamente
    Write-Output "🔻 Instancia que abrimos cerrada"
} else {
    # Era una instancia del USUARIO → NO la cerramos
    Write-Output "✋ Instancia preexistente queda abierta"
}
```

### ¿Cuándo conviene warm reuse vs nueva?

| Caso | Recomendación |
|---|---|
| **Test rápido / debugging** | Warm reuse (abrí ETABS manualmente, después corrés varios scripts) |
| **Procesar 50 modelos en batch** | 1 warm reuse para los 50 (ahorrás 25 min de startup) |
| **CI / automatización** | Cold start (cada job aislado, sin dependencia de estado externo) |
| **Productivo en oficina** | Warm reuse (el usuario YA tiene ETABS abierto haciendo otra cosa) |
| **Sandbox / pruebas paralelas** | Cold start (evitar conflicto entre múltiples scripts) |

### Cómo verificar si hay instancia corriendo

```powershell
# Listar procesos CSI activos
Get-Process | Where-Object { $_.Name -match "ETABS|SAP2000|SAFE" } |
    Format-Table Name, Id, WorkingSet64 -AutoSize

# Output ejemplo:
# Name      Id  WorkingSet64
# ----      --  ------------
# ETABS  21444     558280704   ← ~558 MB RAM, instancia abierta
```

Si el output es vacío → no hay instancia → el script arrancará una nueva.

### Cómo "limpiar" si una instancia quedó colgada

```powershell
# Matar TODAS las instancias CSI (cuidado: pierde modelos no guardados)
Get-Process | Where-Object { $_.Name -match "ETABS|SAP2000|SAFE" } |
    Stop-Process -Force

# Verificar que cerró
Start-Sleep -Seconds 2
Get-Process | Where-Object { $_.Name -match "ETABS|SAP2000|SAFE" }
# Si no devuelve nada → todo cerrado
```

### Caso especial: 2+ instancias abiertas

Si tenés 2 ETABS abiertos al mismo tiempo, `GetObject` se conecta a **una de las dos** pero no es determinístico (depende del orden de registro en ROT). Para evitar ambigüedad:

```powershell
# Opción A: cerrar todas y arrancar limpia
Get-Process ETABS* | Stop-Process -Force
Start-Sleep -Seconds 3

$ETABS = $helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
$ETABS.ApplicationStart() | Out-Null

# Opción B: usar SetActiveProgram (si tenés el helper de la versión correcta)
# (no siempre disponible en helper API)
```

### Patrón compacto para reuso (sin verbose)

```powershell
function Connect-CSI {
    param(
        [Parameter(Mandatory)] [string] $HelperProgID,    # ETABSv1.Helper
        [Parameter(Mandatory)] [string] $ObjectProgID,    # CSI.ETABS.API.ETABSObject
        [int[]] $StartArgs = @()                           # ETABS=@(), SAP=@(6,$false,"")
    )
    $h = New-Object -ComObject $HelperProgID
    $obj = $null; $wasRunning = $false
    try {
        $obj = $h.GetObject($ObjectProgID)
        if ($obj) { $wasRunning = $true }
    } catch { }
    if (-not $obj) {
        $obj = $h.CreateObjectProgID($ObjectProgID)
        if ($StartArgs.Count -eq 0) {
            $obj.ApplicationStart() | Out-Null
        } else {
            $obj.ApplicationStart.Invoke($StartArgs) | Out-Null
        }
    }
    return @{ Obj = $obj; WasRunning = $wasRunning }
}

# Uso ETABS:
$conn = Connect-CSI "ETABSv1.Helper" "CSI.ETABS.API.ETABSObject"

# Uso SAP2000:
$conn = Connect-CSI "SAP2000v1.Helper" "CSI.SAP2000.API.SapObject" @(6, $false, "")

# Uso SAFE:
$conn = Connect-CSI "SAFEv1.Helper" "CSI.SAFE.API.ETABSObject"

# Después:
$Mdl = $conn.Obj.SapModel
# ... trabajar ...
if (-not $conn.WasRunning) { $conn.Obj.ApplicationExit($false) | Out-Null }
```

---

### Warm reuse pattern (ahorrar 30s startup)

```powershell
function Connect-SAP {
    param([switch] $Visible)

    $helper = New-Object -ComObject "SAP2000v1.Helper"
    $Sap = $null
    $wasRunning = $false

    # Intentar warm reuse
    try {
        $Sap = $helper.GetObject("CSI.SAP2000.API.SapObject")
        if ($Sap -ne $null) {
            $wasRunning = $true
            Write-Verbose "Warm reuse: instancia existente"
        }
    } catch { $Sap = $null }

    # Si no hay instancia, arrancar nueva
    if ($Sap -eq $null) {
        $Sap = $helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
        $Sap.ApplicationStart(6, $Visible.IsPresent, "") | Out-Null
        Write-Verbose "Instancia nueva arrancada"
    }

    return @{ Sap = $Sap; WasRunning = $wasRunning }
}

# Uso
$conn = Connect-SAP
$Mdl = $conn.Sap.SapModel
# ... trabajar ...
if (-not $conn.WasRunning) { $conn.Sap.ApplicationExit($false) | Out-Null }
```

### Batch processing (procesar muchos modelos)

```powershell
$folder = "C:\proyectos\edificios"
$edbs = Get-ChildItem -Path $folder -Filter *.EDB -Recurse

$conn = Connect-ETABS
$Mdl = $conn.ETABS.SapModel

foreach ($edb in $edbs) {
    Write-Host "Procesando: $($edb.Name)" -ForegroundColor Cyan

    # Abrir modelo
    $Mdl.File.OpenFile($edb.FullName) | Out-Null

    # Análisis (si necesario)
    if (-not $modelHasResults) {
        $Mdl.Analyze.RunAnalysis() | Out-Null
    }

    # Extraer + guardar JSON
    $jsonPath = $edb.FullName -replace "\.EDB$", "_results.json"
    Export-CSIResults -Model $Mdl -OutPath $jsonPath
}

$conn.ETABS.ApplicationExit($false) | Out-Null
```

### Output JSON estandarizado

```powershell
$out = [ordered]@{
    program = "SAP2000"
    extracted_at = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
    units = "kN, m, C"
    case = [ordered]@{
        L_m = $L; t_m = $t; E_kPa = $E; nu = $nu
        mesh = "${NDiv}x${NDiv}"
    }
    results = [ordered]@{
        delta_max_mm = $maxUz * 1000
        modes = $modes              # array de objetos {mode, period_s, freq_Hz}
        joint_reactions = $reactions
    }
}

# Guardar como JSON UTF-8
$out | ConvertTo-Json -Depth 10 | Set-Content -Path $OutPath -Encoding UTF8
```

---

## 📚 Referencias

| Recurso | Ubicación |
|---|---|
| OAPI .chm oficial | `C:\Program Files\Computers and Structures\ETABS 19\CSI API ETABS v1.chm` |
| SAP OAPI .chm | `C:\Program Files\Computers and Structures\SAP2000 24\CSI_OAPI_Documentation.chm` |
| SAFE OAPI .chm | `C:\Program Files\Computers and Structures\SAFE 20\CSI API SAFE v1.chm` |

Los archivos `.chm` son **HTML Help compilados** — abrílos con doble click para ver TODA la API documentada con ejemplos VBA/C#.

---

## 🎯 Lecciones aprendidas (de esta sesión)

1. **PowerShell COM > Python comtypes** para CSI: cero install, introspección nativa, Windows-friendly
2. **Get-Member es tu mejor amigo**: descubrí TODAS las firmas correctas con introspección, sin abrir el .chm
3. **Pasar TODOS los args explícitamente**: PowerShell no aplica defaults a parámetros opcionales en COM
4. **`Name="All"` con `ItemTypeElm=2`**: el patrón mágico para extraer "todos los elementos"
5. **Warm reuse vs cold start**: 5s vs 30-60s — siempre intentar `GetObject` primero
6. **ApplicationStart difiere por producto**: ETABS sin args, SAP con 3, verificar siempre
7. **ProgID de SAFE dice "ETABSObject"**: legacy de CSI, no es typo
8. **Membrane no acepta carga vertical**: usar Shell-Thin si necesitás Uz
9. **Modal con masa = 0**: SAP asigna densidad por default a Concrete, `SetWeightAndMass` retorna 1 pero el valor SÍ se aplica
10. **Encoding UTF-8 sin BOM**: para evitar parser errors con acentos en scripts

---

## 🚀 Para empezar (TL;DR)

```powershell
# 1. Conectar
$Sap = (New-Object -ComObject "SAP2000v1.Helper").CreateObjectProgID("CSI.SAP2000.API.SapObject")
$Sap.ApplicationStart(6, $false, "") | Out-Null
$Mdl = $Sap.SapModel

# 2. Abrir modelo
$Mdl.File.OpenFile("C:\modelo.sdb") | Out-Null

# 3. Extraer
$Num = 0; $Obj = $LC = $F1 = $F2 = $F3 = $M1 = $M2 = $M3 = $null
$Mdl.Results.Setup.SetCaseSelectedForOutput("Dead", $true) | Out-Null
$Mdl.Results.JointReact("All", 2,
    [ref] $Num, [ref] $Obj, [ref] $null, [ref] $LC,
    [ref] $null, [ref] $null,
    [ref] $F1, [ref] $F2, [ref] $F3,
    [ref] $M1, [ref] $M2, [ref] $M3) | Out-Null

# 4. Procesar
for ($i = 0; $i -lt $Num; $i++) {
    Write-Output ("Joint=" + $Obj[$i] + " Fz=" + $F3[$i].ToString("N2") + " kN")
}

# 5. Cerrar
$Sap.ApplicationExit($false) | Out-Null
```
