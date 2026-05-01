# ============================================================================
#  benchmark_muro_cantilever_sap2000.ps1
# ============================================================================
#  Construye un muro en cantilever (XZ plane, base empotrada, carga lateral
#  en el top) en SAP2000 via OAPI. Usa Membrane (ShellType=5) para validar
#  comportamiento plane stress.
#
#  Caso de prueba:
#    W = 4 m (X)   H = 4 m (Z)   t = 0.20 m (Y)
#    E = 21,500,000 kPa   nu = 0.20   F = 100 kN distribuido al top (X)
#    Mesh 8x8, base empotrada.
#
#  Solucion analitica (cantilever con shear correction):
#    delta_flex = F*H^3 / (3*E*I)    I = t*W^3/12
#    delta_shear = 1.2 * F*H / (G*A)  A = t*W
#    delta_total = delta_flex + delta_shear
# ============================================================================

param(
    [string] $OutPath = "$PSScriptRoot\sap2000_muro_cantilever.json",
    [int] $NDiv = 8,
    [double] $W = 4.0,
    [double] $H = 4.0,
    [double] $t = 0.20,
    [double] $E = 21500000.0,
    [double] $nu = 0.20,
    [double] $F = 100.0,
    [int] $PlateType = 5,
    [string] $PlateTypeName = "Membrane",
    [switch] $Visible,
    [switch] $KeepOpen
)

$ErrorActionPreference = "Continue"

Write-Output "============================================================"
Write-Output (" BENCHMARK MURO CANTILEVER " + $PlateTypeName + " - SAP2000")
Write-Output "============================================================"
Write-Output ("W=" + $W + "m  H=" + $H + "m  t=" + $t + "m  E=" + $E + "kPa  F=" + $F + "kN  malla=" + $NDiv + "x" + $NDiv)

# === 1. Conectar (warm reuse) ============================================
$helper = New-Object -ComObject "SAP2000v1.Helper"
$Sap = $null
$wasRunning = $false

try {
    $Sap = $helper.GetObject("CSI.SAP2000.API.SapObject")
    if ($Sap -ne $null) {
        $wasRunning = $true
        Write-Output "[1] Warm reuse OK"
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
$Mdl.InitializeNewModel(6) | Out-Null
$Mdl.File.NewBlank() | Out-Null
$Mdl.SetPresentUnits(6) | Out-Null

# === 2. Material ==========================================================
$matName = "ConcHek"
$Mdl.PropMaterial.SetMaterial($matName, 2, -1, "", "") | Out-Null
$Mdl.PropMaterial.SetMPIsotropic($matName, $E, $nu, 0, 0) | Out-Null
Write-Output "[2] Material OK"

# === 3. Seccion area =====================================================
$secName = "MuroSec"
$ret = $Mdl.PropArea.SetShell_1($secName, $PlateType, $false, $matName, 0, $t, $t, -1, "", "")
Write-Output ("[3] Seccion shell type=" + $PlateType + " ret=" + $ret)

# === 4. Crear nodos en plano XZ (Y=0) ===================================
Write-Output ("[4] Creando " + ($NDiv + 1) + "x" + ($NDiv + 1) + " nodos en plano XZ...")
$dx = $W / $NDiv
$dz = $H / $NDiv
$nodes = @{}
$createdNodes = 0
for ($j = 0; $j -le $NDiv; $j++) {  # j = Z direction
    for ($i = 0; $i -le $NDiv; $i++) {  # i = X direction
        $nm = ""
        $r = $Mdl.PointObj.AddCartesian($i * $dx, 0.0, $j * $dz, [ref] $nm, "", "Global", $false, 0)
        if ($r -eq 0 -and $nm -ne "") {
            $nodes["${i}_${j}"] = $nm
            $createdNodes++
        }
    }
}
Write-Output ("    " + $createdNodes + " nodos")

# === 5. Areas Q4 ==========================================================
$areaNames = @()
for ($j = 0; $j -lt $NDiv; $j++) {
    for ($i = 0; $i -lt $NDiv; $i++) {
        [string[]] $pts = @($nodes["${i}_${j}"], $nodes["$($i+1)_${j}"], $nodes["$($i+1)_$($j+1)"], $nodes["${i}_$($j+1)"])
        $aName = ""
        $r = $Mdl.AreaObj.AddByPoint(4, [ref] $pts, [ref] $aName, $secName, "")
        if ($r -eq 0) { $areaNames += $aName }
    }
}
Write-Output ("[5] " + $areaNames.Count + " areas Q4 creadas")

# === 6. Restraints: base empotrada ======================================
Write-Output "[6] Restraints base empotrada (j=0)..."
$cntR = 0
for ($i = 0; $i -le $NDiv; $i++) {
    [bool[]] $rest = @($true, $true, $true, $true, $true, $true)
    $r = $Mdl.PointObj.SetRestraint($nodes["${i}_0"], [ref] $rest, 0)
    if ($r -eq 0) { $cntR++ }
}
Write-Output ("    " + $cntR + " nodos empotrados en base")

# === 7. Cargas en top: F distribuido en X ===============================
Write-Output ("[7] Cargas en top: F=" + $F + " kN distribuido en X...")
$loadName = "Q"
$Mdl.LoadPatterns.Add($loadName, 8, 0, $true) | Out-Null
$F_per_node = $F / $NDiv  # F dividido entre NDiv nodos interiores
$F_corner = $F_per_node * 0.5  # Esquinas: mitad
$cntL = 0
for ($i = 0; $i -le $NDiv; $i++) {
    $isCorner = ($i -eq 0 -or $i -eq $NDiv)
    $Fx = if ($isCorner) { $F_corner } else { $F_per_node }
    [double[]] $loadArr = @($Fx, 0.0, 0.0, 0.0, 0.0, 0.0)
    # SetLoadForce(Name, LoadPat, ref Value[], Replace, CSys, ItemType)
    $r = $Mdl.PointObj.SetLoadForce($nodes["${i}_$NDiv"], $loadName, [ref] $loadArr, $true, "Global", 0)
    if ($r -eq 0) { $cntL++ }
}
Write-Output ("    " + $cntL + " nodos cargados (F_int=" + $F_per_node.ToString("N3") + " F_corner=" + $F_corner.ToString("N3") + ")")

# === 8. Modal ===========================================================
$Mdl.LoadCases.ModalEigen.SetNumberModes("MODAL", 9, 1) | Out-Null

# === 9. Save y RunAnalysis ==============================================
$sdbPath = "$env:TEMP\bench_muro_sap_$PlateType.sdb"
if (Test-Path $sdbPath) { Remove-Item $sdbPath -Force }
$ret = $Mdl.File.Save($sdbPath)
Write-Output ("[9] Save ret=" + $ret)

$t0 = Get-Date
$ret = $Mdl.Analyze.RunAnalysis()
$dt = ((Get-Date) - $t0).TotalSeconds
Write-Output ("[10] RunAnalysis ret=" + $ret + " en " + $dt.ToString("N1") + "s")

# === 11. Resultados ======================================================
Write-Output "[11] Extrayendo..."
$Mdl.Results.Setup.DeselectAllCasesAndCombosForOutput() | Out-Null
$Mdl.Results.Setup.SetCaseSelectedForOutput($loadName, $true) | Out-Null

$Num = 0; $Obj = $Elm = $LC = $StepType = $StepNum = $null
$U1 = $U2 = $U3 = $R1 = $R2 = $R3 = $null
$ret = $Mdl.Results.JointDispl("All", 2,
    [ref] $Num, [ref] $Obj, [ref] $Elm, [ref] $LC,
    [ref] $StepType, [ref] $StepNum,
    [ref] $U1, [ref] $U2, [ref] $U3,
    [ref] $R1, [ref] $R2, [ref] $R3)

# Tomar el desplazamiento Ux del nodo del medio del top
# topMid = nodo a mitad del top (i=NDiv/2, j=NDiv)
$topMidName = $nodes[(([int] ($NDiv / 2)).ToString() + "_" + $NDiv.ToString())]
$ux_top = 0
for ($i = 0; $i -lt $Num; $i++) {
    if ($Obj[$i] -eq $topMidName) {
        $ux_top = $U1[$i]
        break
    }
}
$ux_top_mm = $ux_top * 1000
Write-Output ("    delta_top (nodo " + $topMidName + ") Ux = " + $ux_top_mm.ToString("N4") + " mm")

# Maxima |Ux| del top
$ux_top_max = 0
for ($i = 0; $i -lt $Num; $i++) {
    foreach ($k in $nodes.Keys) {
        if ($k -match "_$NDiv$" -and $nodes[$k] -eq $Obj[$i]) {
            if ([Math]::Abs($U1[$i]) -gt [Math]::Abs($ux_top_max)) {
                $ux_top_max = $U1[$i]
            }
        }
    }
}
Write-Output ("    delta_top (max nodal) Ux = " + ($ux_top_max * 1000).ToString("N4") + " mm")

# Modal
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
$f1 = if ($modes.Count -gt 0) { $modes[0].freq_Hz } else { 0 }
Write-Output ("    f1 = " + $f1.ToString("N3") + " Hz")

# === 12. Analitica =======================================================
$I_sec = $t * [Math]::Pow($W, 3) / 12
$A_sec = $t * $W
$G = $E / (2 * (1 + $nu))
$delta_flex = $F * [Math]::Pow($H, 3) / (3 * $E * $I_sec)
$delta_shear = 1.2 * $F * $H / ($G * $A_sec)
$delta_total = $delta_flex + $delta_shear

Write-Output ""
Write-Output "============================================================"
Write-Output (" RESULTADOS: SAP2000 " + $PlateTypeName + " (cantilever wall)")
Write-Output "============================================================"
Write-Output "                               SAP2000      Analitica       Diff%"
$dPct = (($ux_top_mm - $delta_total*1000) / ($delta_total*1000)) * 100
Write-Output ("delta_top centro [mm]      " + $ux_top_mm.ToString("N4").PadLeft(10) + "    " + ($delta_total*1000).ToString("N4").PadLeft(10) + "      " + $dPct.ToString("N2").PadLeft(7) + "%")
Write-Output ("  flex [mm]                                  " + ($delta_flex*1000).ToString("N4").PadLeft(10))
Write-Output ("  shear [mm]                                 " + ($delta_shear*1000).ToString("N4").PadLeft(10))
Write-Output ("f1 [Hz]                    " + $f1.ToString("N3").PadLeft(10))

# === 13. JSON ===========================================================
$out = [ordered]@{
    program = "SAP2000"; plate_type = $PlateType; plate_type_name = $PlateTypeName
    case = [ordered]@{
        W_m = $W; H_m = $H; t_m = $t; E_kPa = $E; nu = $nu; F_kN = $F
        mesh = "${NDiv}x${NDiv}"
    }
    analytical = [ordered]@{
        delta_total_mm = $delta_total * 1000
        delta_flex_mm = $delta_flex * 1000
        delta_shear_mm = $delta_shear * 1000
    }
    sap2000 = [ordered]@{
        delta_top_center_mm = $ux_top_mm
        delta_top_max_mm = $ux_top_max * 1000
        f1_Hz = $f1
        modes = $modes
        runtime_s = $dt
    }
}
$out | ConvertTo-Json -Depth 10 | Set-Content -Path $OutPath -Encoding UTF8
Write-Output ("JSON: " + $OutPath)

if (-not $KeepOpen -and -not $wasRunning) {
    $Sap.ApplicationExit($false) | Out-Null
}
Write-Output "[DONE]"
