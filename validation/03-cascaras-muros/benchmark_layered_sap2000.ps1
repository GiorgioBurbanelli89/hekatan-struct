# ============================================================================
#  benchmark_layered_sap2000.ps1
# ============================================================================
#  Construye una placa LAYERED en SAP2000 via OAPI con 2 capas identicas
#  (sanity check: layered con capas iguales = shell homogeneo equivalente).
#
#  Caso: L=4m, t_total=0.20m (= 2 × 0.10m), E=21.5e6kPa, nu=0.20, q=10kPa
#  Mesh 16x16, simply supported.
#
#  Esperado: w_max y M11 ≈ Shell-Thick (validado a -3.57% con SAP previo).
# ============================================================================

param(
    [string] $OutPath = "$PSScriptRoot\sap2000_layered_results.json",
    [int] $NDiv = 16,
    [double] $L = 4.0,
    [double] $t_total = 0.20,
    [double] $E = 21500000.0,
    [double] $nu = 0.20,
    [double] $q = 10.0,
    [double] $rho = 2.4,
    [int] $NLayers = 2,
    [switch] $KeepOpen
)

$ErrorActionPreference = "Continue"

Write-Output "============================================================"
Write-Output (" BENCHMARK PLACA LAYERED - SAP2000")
Write-Output "============================================================"
Write-Output ("L=" + $L + "m  t_total=" + $t_total + "m (" + $NLayers + " capas)  E=" + $E + "kPa  q=" + $q + "kPa  malla=" + $NDiv + "x" + $NDiv)

# Conectar (warm reuse)
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
    $Sap = $helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
    $Sap.ApplicationStart(6, $false, "") | Out-Null
}

$Mdl = $Sap.SapModel
$Mdl.InitializeNewModel(6) | Out-Null
# Forzar reset completo (en warm reuse, modelos previos pueden tener
# secciones que conflictan con SetShellLayer)
$tempBlank = "$env:TEMP\bench_layered_blank.sdb"
if (Test-Path $tempBlank) { Remove-Item $tempBlank -Force }
$Mdl.File.NewBlank() | Out-Null
$Mdl.File.Save($tempBlank) | Out-Null
$Mdl.SetPresentUnits(6) | Out-Null

# Material
$matName = "ConcHek"
$Mdl.PropMaterial.SetMaterial($matName, 2, -1, "", "") | Out-Null
$Mdl.PropMaterial.SetMPIsotropic($matName, $E, $nu, 0, 0) | Out-Null
Write-Output "[2] Material OK"

# === Definir Layered Shell ===
# IMPORTANTE: la seccion DEBE crearse primero como Shell normal
# usando SetShell_1, y LUEGO se agregan las capas con SetShellLayer.
# Si no existe la base, SetShellLayer retorna 1.
$secName = "PlacaLayered2k"  # nombre fresco para evitar conflictos
# Crear seccion base (Shell-Thick) primero
$ret = $Mdl.PropArea.SetShell_1($secName, 2, $false, $matName, 0, $t_total, $t_total, -1, "", "")
Write-Output ("    SetShell_1 base ret=" + $ret)

$t_layer = $t_total / $NLayers
$layerNames = New-Object 'string[]' $NLayers
$dists = New-Object 'double[]' $NLayers
$thks = New-Object 'double[]' $NLayers
$mats = New-Object 'string[]' $NLayers
$myType = New-Object 'int[]' $NLayers
$angs = New-Object 'double[]' $NLayers
$nints = New-Object 'int[]' $NLayers
$s11 = New-Object 'int[]' $NLayers
$s22 = New-Object 'int[]' $NLayers
$s12 = New-Object 'int[]' $NLayers

for ($k = 0; $k -lt $NLayers; $k++) {
    $layerNames[$k] = "Layer$($k+1)"
    # Para shell-membrane behavior, dist debe ser >= -t/2 y <= +t/2
    # Capa k entre [-t/2 + k*t_layer, -t/2 + (k+1)*t_layer], midplane ahi
    $dists[$k] = -$t_total/2 + ($k + 0.5) * $t_layer
    $thks[$k] = $t_layer
    $mats[$k] = $matName
    $myType[$k] = 1     # 1 = Shell (membrane + plate behavior, like Shell-Thick)
    $angs[$k] = 0.0
    $nints[$k] = 2
    $s11[$k] = 0        # 0 = linear
    $s22[$k] = 0
    $s12[$k] = 0
}

Write-Output ("[3] Definiendo Layered Shell con " + $NLayers + " capas (SetShellLayer_1):")
for ($k = 0; $k -lt $NLayers; $k++) {
    Write-Output ("    Capa $($k+1): dist=" + $dists[$k].ToString("N4") + "m, t=" + $thks[$k].ToString("N4") + "m, type=Shell, intPts=2")
}

# SetShellLayer_1(Name, ref NumberLayers, ref LayerName[], ref Dist[],
#                 ref Thickness[], ref MyType[], ref NumIntegrationPts[],
#                 ref MatProp[], ref MatAng[], ref S11Type[], ref S22Type[], ref S12Type[])
$nL = $NLayers
$ret = $Mdl.PropArea.SetShellLayer_1($secName,
    [ref] $nL, [ref] $layerNames, [ref] $dists, [ref] $thks,
    [ref] $myType, [ref] $nints,
    [ref] $mats, [ref] $angs,
    [ref] $s11, [ref] $s22, [ref] $s12)
Write-Output ("    SetShellLayer_1 ret=" + $ret)

# === Crear nodos y areas (igual que benchmark anterior) ===
Write-Output ("[4] Creando " + ($NDiv + 1) + "x" + ($NDiv + 1) + " nodos...")
$dx = $L / $NDiv
$nodes = @{}
for ($j = 0; $j -le $NDiv; $j++) {
    for ($i = 0; $i -le $NDiv; $i++) {
        $nm = ""
        $r = $Mdl.PointObj.AddCartesian($i * $dx, $j * $dx, 0.0, [ref] $nm, "", "Global", $false, 0)
        if ($r -eq 0) { $nodes["${i}_${j}"] = $nm }
    }
}
Write-Output ("    " + $nodes.Count + " nodos")

$areaNames = @()
for ($j = 0; $j -lt $NDiv; $j++) {
    for ($i = 0; $i -lt $NDiv; $i++) {
        [string[]] $pts = @($nodes["${i}_${j}"], $nodes["$($i+1)_${j}"], $nodes["$($i+1)_$($j+1)"], $nodes["${i}_$($j+1)"])
        $aName = ""
        $r = $Mdl.AreaObj.AddByPoint(4, [ref] $pts, [ref] $aName, $secName, "")
        if ($r -eq 0) { $areaNames += $aName }
    }
}
Write-Output ("[5] " + $areaNames.Count + " areas creadas")

# Restraints simply supported
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
        $Mdl.PointObj.SetRestraint($nodes["${i}_${j}"], [ref] $rest, 0) | Out-Null
    }
}
Write-Output "[6] Restraints aplicados"

# Carga uniforme
$loadName = "Q"
$Mdl.LoadPatterns.Add($loadName, 8, 0, $true) | Out-Null
foreach ($a in $areaNames) {
    $Mdl.AreaObj.SetLoadUniform($a, $loadName, $q, 10, $true, "Global", 0) | Out-Null
}
Write-Output ("[7] Carga q=" + $q + " kPa aplicada")

# Modal
$Mdl.LoadCases.ModalEigen.SetNumberModes("MODAL", 9, 1) | Out-Null

# Save y RunAnalysis
$sdbPath = "$env:TEMP\bench_placa_layered.sdb"
if (Test-Path $sdbPath) { Remove-Item $sdbPath -Force }
$Mdl.File.Save($sdbPath) | Out-Null

$t0 = Get-Date
$ret = $Mdl.Analyze.RunAnalysis()
$dt = ((Get-Date) - $t0).TotalSeconds
Write-Output ("[8] RunAnalysis ret=" + $ret + " en " + $dt.ToString("N1") + "s")

# Resultados
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

# Modal
$Mdl.Results.Setup.DeselectAllCasesAndCombosForOutput() | Out-Null
$Mdl.Results.Setup.SetCaseSelectedForOutput("MODAL", $true) | Out-Null
$NumM = 0; $LCM = $StepTypeM = $StepNumM = $Period = $Frequency = $CircFreq = $EigenValue = $null
$ret = $Mdl.Results.ModalPeriod(
    [ref] $NumM, [ref] $LCM, [ref] $StepTypeM, [ref] $StepNumM,
    [ref] $Period, [ref] $Frequency, [ref] $CircFreq, [ref] $EigenValue)

$f1 = if ($NumM -gt 0) { $Frequency[0] } else { 0 }

# Analitica
$D = $E * [Math]::Pow($t_total, 3) / (12 * (1 - $nu*$nu))
$wAna = 0.00406 * $q * [Math]::Pow($L, 4) / $D
$mAna = 0.0479 * $q * [Math]::Pow($L, 2)

# SAP Shell-Thick reference (de benchmark previo, malla 16x16 hipotetico)
$SAP_THICK_W = 0.7237  # del benchmark 8x8, OK como aprox
$SAP_THICK_M = 7.4440

Write-Output ""
Write-Output "============================================================"
Write-Output (" RESULTADOS: SAP2000 Layered (" + $NLayers + " capas iguales)")
Write-Output "============================================================"
Write-Output "                       Layered     ShellThick   Analit    diff%"
$wDA = (([Math]::Abs($maxUz) * 1000 - $wAna * 1000) / ($wAna * 1000)) * 100
$mDA = (($maxM11 - $mAna) / $mAna) * 100
$wDS = (([Math]::Abs($maxUz) * 1000 - $SAP_THICK_W) / $SAP_THICK_W) * 100
$mDS = (($maxM11 - $SAP_THICK_M) / $SAP_THICK_M) * 100
Write-Output ("w_max [mm]            " + ([Math]::Abs($maxUz) * 1000).ToString("N4").PadLeft(8) + "      " + $SAP_THICK_W.ToString("N4").PadLeft(8) + "    " + ($wAna * 1000).ToString("N4").PadLeft(8) + "  " + $wDS.ToString("N2").PadLeft(7) + "%")
Write-Output ("M11_max [kN.m/m]      " + $maxM11.ToString("N4").PadLeft(8) + "      " + $SAP_THICK_M.ToString("N4").PadLeft(8) + "    " + $mAna.ToString("N4").PadLeft(8) + "  " + $mDS.ToString("N2").PadLeft(7) + "%")
Write-Output ("f1 [Hz]               " + $f1.ToString("N3").PadLeft(8))

# JSON
$out = [ordered]@{
    program = "SAP2000 Layered"; n_layers = $NLayers; t_total_m = $t_total
    case = [ordered]@{ L_m = $L; mesh = "${NDiv}x${NDiv}"; E_kPa = $E; nu = $nu; q_kPa = $q }
    sap2000 = [ordered]@{
        w_max_m = $maxUz; max_node = $maxNode
        M11_max_kNm_m = $maxM11; M22_max_kNm_m = $maxM22
        f1_Hz = $f1
    }
}
$out | ConvertTo-Json -Depth 10 | Set-Content -Path $OutPath -Encoding UTF8
Write-Output ("JSON: " + $OutPath)

if (-not $KeepOpen -and -not $wasRunning) {
    $Sap.ApplicationExit($false) | Out-Null
}
Write-Output "[DONE]"
