# ============================================================================
#  benchmark_placa_sap2000.ps1
# ============================================================================
#  Construye una placa cuadrada en SAP2000 via OAPI (todas las firmas con
#  args completos), corre estatico + modal, extrae w_max, M11_max, modal.
#  Compara contra analitica Timoshenko.
#
#  Firmas OAPI confirmadas via introspeccion:
#    AddCartesian(X, Y, Z, ref Name, UserName, CSys, MergeOff, MergeNumber)
#    AddByPoint(NumberPoints, ref Point[], ref Name, PropName, UserName)
#    SetLoadUniform(Name, LoadPat, Value, Dir, Replace, CSys, ItemType)
#    SetRestraint(Name, ref Value[], ItemType)
#    SetShell_1(Name, ShellType, IncludeDrillingDOF, MatProp, MatAng,
#               Thickness, Bending, Color, Notes, GUID)
#    SetMaterial(Name, MatType, Color, Notes, GUID)
#    SetMPIsotropic(Name, E, U, A, Temp)
#    LoadPatterns.Add(Name, MyType, SelfWTMultiplier, AddAnalysisCase)
# ============================================================================

param(
    [string] $OutPath = "$PSScriptRoot\sap2000_placa_results.json",
    [int] $NDiv = 8,
    [double] $L = 4.0,
    [double] $t = 0.20,
    [double] $E = 21500000.0,
    [double] $nu = 0.20,
    [double] $q = 10.0,
    [double] $rho = 2.4,
    [int] $PlateType = 4,
    [string] $PlateTypeName = "Plate-Thick",
    [switch] $Visible,
    [switch] $KeepOpen
)

$ErrorActionPreference = "Continue"

Write-Output "============================================================"
Write-Output (" BENCHMARK PLACA " + $PlateTypeName + " - SAP2000")
Write-Output "============================================================"

# === 1. Conectar (warm reuse) ============================================
$helper = New-Object -ComObject "SAP2000v1.Helper"
$Sap = $null
$wasRunning = $false

try {
    $Sap = $helper.GetObject("CSI.SAP2000.API.SapObject")
    if ($Sap -ne $null) {
        $wasRunning = $true
        Write-Output "[1] Warm reuse: usando instancia existente"
    }
} catch { $Sap = $null }

if ($Sap -eq $null) {
    Write-Output "[1] Arrancando SAP2000..."
    $Sap = $helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
    $isVisible = $false
    if ($Visible) { $isVisible = $true }
    $ret = $Sap.ApplicationStart(6, $isVisible, "")
}

$Mdl = $Sap.SapModel

# === 2. Modelo blank =====================================================
Write-Output "[2] Modelo blank kN_m_C..."
$Mdl.InitializeNewModel(6) | Out-Null
$Mdl.File.NewBlank() | Out-Null
$Mdl.SetPresentUnits(6) | Out-Null

# === 3. Material (5 args: Name, MatType, Color, Notes, GUID) =============
Write-Output "[3] Material..."
$matName = "ConcHek"
# eMatType=2 = Concrete, Color=-1 (auto), Notes="", GUID=""
$ret = $Mdl.PropMaterial.SetMaterial($matName, 2, -1, "", "")
Write-Output ("    SetMaterial ret=" + $ret)
# SetMPIsotropic(Name, E, U, A, Temp=0)
$ret = $Mdl.PropMaterial.SetMPIsotropic($matName, $E, $nu, 0, 0)
Write-Output ("    SetMPIsotropic ret=" + $ret)
# SetWeightAndMass tiene bugs en algunas versiones — retorna 1 error.
# En su lugar asignamos masa nodal directamente despues de crear los nodos
# (paso 7.5 abajo).

# === 4. Seccion shell (10 args) ==========================================
Write-Output ("[4] Seccion shell type=" + $PlateType + " (" + $PlateTypeName + ")...")
$secName = "PlacaSec"
# SetShell_1(Name, ShellType, IncludeDrillingDOF, MatProp, MatAng, Thickness, Bending, Color, Notes, GUID)
$ret = $Mdl.PropArea.SetShell_1($secName, $PlateType, $false, $matName, 0, $t, $t, -1, "", "")
Write-Output ("    SetShell_1 ret=" + $ret)

# === 5. Crear nodos (8 args en AddCartesian) ===========================
Write-Output ("[5] Creando " + ($NDiv + 1) + "x" + ($NDiv + 1) + " nodos...")
$dx = $L / $NDiv
$nodes = @{}
$createdNodes = 0
for ($j = 0; $j -le $NDiv; $j++) {
    for ($i = 0; $i -le $NDiv; $i++) {
        $nm = ""
        # AddCartesian(X, Y, Z, ref Name, UserName, CSys, MergeOff, MergeNumber)
        $r = $Mdl.PointObj.AddCartesian($i * $dx, $j * $dx, 0.0, [ref] $nm, "", "Global", $false, 0)
        if ($r -eq 0 -and $nm -ne "") {
            $nodes["${i}_${j}"] = $nm
            $createdNodes++
        }
    }
}
Write-Output ("    " + $createdNodes + " nodos creados")

# === 6. Crear areas Q4 (5 args en AddByPoint) ==========================
Write-Output "[6] Creando areas Q4..."
$areaNames = @()
for ($j = 0; $j -lt $NDiv; $j++) {
    for ($i = 0; $i -lt $NDiv; $i++) {
        [string[]] $pts = @($nodes["${i}_${j}"], $nodes["$($i+1)_${j}"], $nodes["$($i+1)_$($j+1)"], $nodes["${i}_$($j+1)"])
        $aName = ""
        # AddByPoint(NumberPoints, ref Point[], ref Name, PropName, UserName)
        $r = $Mdl.AreaObj.AddByPoint(4, [ref] $pts, [ref] $aName, $secName, "")
        if ($r -eq 0 -and $aName -ne "") {
            $areaNames += $aName
        }
    }
}
Write-Output ("    " + $areaNames.Count + " areas creadas")

# === 7. Masa: SAP usa Element Self Mass automaticamente cuando el ========
# material concreto tiene densidad asignada (default 2.4 ton/m^3 para
# concrete). NO usamos SetMass para evitar doble conteo (Mass Source
# de SAP por default = Elements + AdditionalMass, y SetMass es el
# AdditionalMass que SUMA al Element Self Mass).
#
# Verificacion: si llamamos GetWeightAndMass post-SetMaterial concrete,
# weight=23.56 kN/m^3 y mass=2.40 ton/m^3 (default SAP).
Write-Output "[7] Masa via material self-mass (sin SetMass para evitar doble conteo)"

# === 7b. Restraints (3 args en SetRestraint) ============================
Write-Output "[7b] Restraints simply supported (Uz=0 perimetro)..."
$cntR = 0
for ($j = 0; $j -le $NDiv; $j++) {
    for ($i = 0; $i -le $NDiv; $i++) {
        $isPerim = ($i -eq 0 -or $i -eq $NDiv -or $j -eq 0 -or $j -eq $NDiv)
        if (-not $isPerim) { continue }

        if ($i -eq 0 -and $j -eq 0) {
            [bool[]] $rest = @($true, $true, $true, $false, $false, $false)
        } elseif ($i -eq $NDiv -and $j -eq 0) {
            [bool[]] $rest = @($false, $true, $true, $false, $false, $false)
        } else {
            [bool[]] $rest = @($false, $false, $true, $false, $false, $false)
        }
        # SetRestraint(Name, ref Value[], ItemType=0=Objects)
        $r = $Mdl.PointObj.SetRestraint($nodes["${i}_${j}"], [ref] $rest, 0)
        if ($r -eq 0) { $cntR++ }
    }
}
Write-Output ("    " + $cntR + " nodos con restraint")

# === 8. Carga uniforme (7 args en SetLoadUniform) ======================
Write-Output ("[8] Carga uniforme q=" + $q + " kPa hacia abajo (Dir=10=Gravity)...")
$loadName = "Q"
# Add(Name, MyType, SelfWTMultiplier, AddAnalysisCase)
$r = $Mdl.LoadPatterns.Add($loadName, 8, 0, $true)  # 8 = Other type
$cntL = 0
foreach ($a in $areaNames) {
    # SetLoadUniform(Name, LoadPat, Value, Dir, Replace, CSys, ItemType=0)
    $r = $Mdl.AreaObj.SetLoadUniform($a, $loadName, $q, 10, $true, "Global", 0)
    if ($r -eq 0) { $cntL++ }
}
Write-Output ("    " + $cntL + " areas cargadas")

# === 9. Modal case (9 modos Eigen) =====================================
Write-Output "[9] Modal Eigen 9 modos..."
try {
    $r = $Mdl.LoadCases.ModalEigen.SetNumberModes("MODAL", 9, 1)
    Write-Output ("    SetNumberModes ret=" + $r)
} catch {
    Write-Warning $_.Exception.Message
}

# === 10. Save ============================================================
$sdbPath = "$env:TEMP\bench_placa_sap_$PlateType.sdb"
if (Test-Path $sdbPath) { Remove-Item $sdbPath -Force }
$ret = $Mdl.File.Save($sdbPath)
Write-Output ("[10] Save ret=" + $ret)

# === 11. RunAnalysis ====================================================
Write-Output "[11] Corriendo analisis..."
$t0 = Get-Date
$ret = $Mdl.Analyze.RunAnalysis()
$dt = ((Get-Date) - $t0).TotalSeconds
Write-Output ("    RunAnalysis ret=" + $ret + " en " + $dt.ToString("N1") + "s")

# === 12. Extraer resultados =============================================
Write-Output "[12] Extrayendo..."
$Mdl.Results.Setup.DeselectAllCasesAndCombosForOutput() | Out-Null
$Mdl.Results.Setup.SetCaseSelectedForOutput($loadName, $true) | Out-Null

$Num = 0; $Obj = $Elm = $LC = $StepType = $StepNum = $null
$U1 = $U2 = $U3 = $R1 = $R2 = $R3 = $null
$ret = $Mdl.Results.JointDispl("All", 2,
    [ref] $Num, [ref] $Obj, [ref] $Elm, [ref] $LC,
    [ref] $StepType, [ref] $StepNum,
    [ref] $U1, [ref] $U2, [ref] $U3,
    [ref] $R1, [ref] $R2, [ref] $R3)

$maxUz = 0; $maxNode = ""
for ($i = 0; $i -lt $Num; $i++) {
    if ([Math]::Abs($U3[$i]) -gt [Math]::Abs($maxUz)) {
        $maxUz = $U3[$i]; $maxNode = $Obj[$i]
    }
}
Write-Output ("    JointDispl: " + $Num + " filas, |Uz|max = " + ([Math]::Abs($maxUz)*1000).ToString("N4") + " mm @ joint " + $maxNode)

# Area Force Shell
$Num = 0
$Obj = $Elm = $PointElm = $LC = $StepType = $StepNum = $null
$F11 = $F22 = $F12 = $FMax = $FMin = $FAngle = $FVM = $null
$M11 = $M22 = $M12 = $MMax = $MMin = $MAngle = $null
$V13 = $V23 = $VMax = $VAngle = $null
$ret = $Mdl.Results.AreaForceShell("All", 2,
    [ref] $Num, [ref] $Obj, [ref] $Elm, [ref] $PointElm,
    [ref] $LC, [ref] $StepType, [ref] $StepNum,
    [ref] $F11, [ref] $F22, [ref] $F12, [ref] $FMax, [ref] $FMin, [ref] $FAngle, [ref] $FVM,
    [ref] $M11, [ref] $M22, [ref] $M12, [ref] $MMax, [ref] $MMin, [ref] $MAngle,
    [ref] $V13, [ref] $V23, [ref] $VMax, [ref] $VAngle)

$maxM11 = 0; $maxM22 = 0
for ($i = 0; $i -lt $Num; $i++) {
    if ([Math]::Abs($M11[$i]) -gt [Math]::Abs($maxM11)) { $maxM11 = $M11[$i] }
    if ([Math]::Abs($M22[$i]) -gt [Math]::Abs($maxM22)) { $maxM22 = $M22[$i] }
}
Write-Output ("    AreaForce: " + $Num + " filas, |M11|max = " + $maxM11.ToString("N4") + " kN.m/m")

# Modal periods
$Mdl.Results.Setup.DeselectAllCasesAndCombosForOutput() | Out-Null
$Mdl.Results.Setup.SetCaseSelectedForOutput("MODAL", $true) | Out-Null

$NumM = 0; $LCM = $StepTypeM = $StepNumM = $null
$Period = $Frequency = $CircFreq = $EigenValue = $null
$ret = $Mdl.Results.ModalPeriod(
    [ref] $NumM, [ref] $LCM, [ref] $StepTypeM, [ref] $StepNumM,
    [ref] $Period, [ref] $Frequency, [ref] $CircFreq, [ref] $EigenValue)

$modes = @()
for ($i = 0; $i -lt $NumM; $i++) {
    $modes += [ordered]@{
        mode = [int] $StepNumM[$i]
        period_s = $Period[$i]
        freq_Hz = $Frequency[$i]
    }
}
Write-Output ("    Modal: " + $NumM + " modos, f1 = " + $modes[0].freq_Hz.ToString("N3") + " Hz")

# === 13. Analitica =======================================================
$D = $E * [Math]::Pow($t, 3) / (12 * (1 - $nu*$nu))
$wAnalytic = 0.00406 * $q * [Math]::Pow($L, 4) / $D
$mAnalytic = 0.0479 * $q * [Math]::Pow($L, 2)
$mu = $rho * $t
$baseFreq = ([Math]::PI / 2) * [Math]::Sqrt($D / $mu) / ($L * $L)
$f11 = $baseFreq * 2

# === 14. Reporte ========================================================
Write-Output ""
Write-Output "============================================================"
Write-Output (" RESULTADOS: SAP2000 " + $PlateTypeName)
Write-Output "============================================================"
Write-Output "                       SAP2000     Analitica     Diff%"
$wDiffPct = 0
if ($wAnalytic -gt 0 -and $maxUz -ne 0) { $wDiffPct = ((([Math]::Abs($maxUz) - $wAnalytic) / $wAnalytic) * 100) }
$mDiffPct = 0
if ($mAnalytic -gt 0 -and $maxM11 -ne 0) { $mDiffPct = ((($maxM11 - $mAnalytic) / $mAnalytic) * 100) }
Write-Output ("w_max [mm]            " + ([Math]::Abs($maxUz)*1000).ToString("N4").PadLeft(8) + "    " + ($wAnalytic*1000).ToString("N4").PadLeft(8) + "    " + $wDiffPct.ToString("N2").PadLeft(7) + "%")
Write-Output ("M11_max [kN.m/m]      " + $maxM11.ToString("N4").PadLeft(8) + "    " + $mAnalytic.ToString("N4").PadLeft(8) + "    " + $mDiffPct.ToString("N2").PadLeft(7) + "%")
if ($modes.Count -ge 1) {
    $f11DiffPct = ((($modes[0].freq_Hz - $f11) / $f11) * 100)
    Write-Output ("f11 [Hz]              " + $modes[0].freq_Hz.ToString("N3").PadLeft(8) + "    " + $f11.ToString("N3").PadLeft(8) + "    " + $f11DiffPct.ToString("N2").PadLeft(7) + "%")
}

# === 15. JSON ===========================================================
$out = [ordered]@{
    program = "SAP2000"; plate_type = $PlateType; plate_type_name = $PlateTypeName
    case = [ordered]@{ L_m=$L; t_m=$t; E_kPa=$E; nu=$nu; q_kPa=$q; mesh="${NDiv}x${NDiv}"; rho_ton_m3=$rho }
    analytical = [ordered]@{ w_max_m=$wAnalytic; M_max_kNm_m=$mAnalytic; f11_Hz=$f11 }
    sap2000 = [ordered]@{
        w_max_m=$maxUz; max_uz_node=$maxNode
        M11_max_kNm_m=$maxM11; M22_max_kNm_m=$maxM22
        modes=$modes; runtime_s=$dt
    }
}
$out | ConvertTo-Json -Depth 10 | Set-Content -Path $OutPath -Encoding UTF8
Write-Output ("JSON: " + $OutPath)

if (-not $KeepOpen -and -not $wasRunning) {
    $Sap.ApplicationExit($false) | Out-Null
}
Write-Output "[DONE]"
