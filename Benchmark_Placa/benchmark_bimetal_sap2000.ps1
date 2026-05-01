# ============================================================================
#  benchmark_bimetal_sap2000.ps1
# ============================================================================
#  Construye una placa BIMETALICA en SAP2000 via OAPI con 2 capas de E distinto
#  (mismo caso que el preset "Bimetálico" del layered-shell de Hekatan).
#
#  Caso default: L=4m, t_total=0.30m (= 2 × 0.15m),
#                Capa1 (z<0): E1=30e6 kPa
#                Capa2 (z>0): E2=15e6 kPa  (50% de E1, igual que preset Hekatan)
#                nu=0.30 (común), q=10 kPa, rho=2.4 ton/m^3
#                Mesh 10x10, simply supported.
#
#  Esperado: w mayor que homogeneo iso por coupling membrane-bending B != 0.
# ============================================================================

param(
    [string] $OutPath = "$PSScriptRoot\sap2000_bimetal_results.json",
    [int] $NDiv = 10,
    [double] $L = 4.0,
    [double] $t_total = 0.30,
    [double] $E1 = 30000000.0,
    [double] $E2 = 15000000.0,
    [double] $nu = 0.30,
    [double] $q = 10.0,
    [double] $rho = 2.4,
    [double] $t1_frac = 0.5,
    [switch] $KeepOpen
)

$ErrorActionPreference = "Continue"

Write-Output "============================================================"
Write-Output (" BENCHMARK BIMETALICO - SAP2000 LAYERED SHELL")
Write-Output "============================================================"
Write-Output ("L=" + $L + "m  t_tot=" + $t_total + "m  E1=" + $E1 + "  E2=" + $E2 + "  nu=" + $nu + "  q=" + $q + "  malla=" + $NDiv + "x" + $NDiv)

$helper = New-Object -ComObject "SAP2000v1.Helper"
$Sap = $null
$wasRunning = $false
try {
    $Sap = $helper.GetObject("CSI.SAP2000.API.SapObject")
    if ($Sap -ne $null) { $wasRunning = $true; Write-Output "[1] Warm reuse OK" }
} catch { $Sap = $null }
if ($Sap -eq $null) {
    $Sap = $helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
    $Sap.ApplicationStart(6, $false, "") | Out-Null
}

$Mdl = $Sap.SapModel
$Mdl.InitializeNewModel(6) | Out-Null
$tempBlank = "$env:TEMP\bench_bimetal_blank.sdb"
if (Test-Path $tempBlank) { Remove-Item $tempBlank -Force }
$Mdl.File.NewBlank() | Out-Null
$Mdl.File.Save($tempBlank) | Out-Null
$Mdl.SetPresentUnits(6) | Out-Null

# === Materiales (2: Mat1 con E1, Mat2 con E2) ===
$mat1 = "MatE1"
$mat2 = "MatE2"
$Mdl.PropMaterial.SetMaterial($mat1, 2, -1, "", "") | Out-Null
$Mdl.PropMaterial.SetMPIsotropic($mat1, $E1, $nu, 0, 0) | Out-Null
$Mdl.PropMaterial.SetMaterial($mat2, 2, -1, "", "") | Out-Null
$Mdl.PropMaterial.SetMPIsotropic($mat2, $E2, $nu, 0, 0) | Out-Null
Write-Output ("[2] Materiales: $mat1 (E=$E1) y $mat2 (E=$E2)")

# === Layered Shell con 2 capas, materiales distintos ===
$secName = "PlacaBimetal"
$E_avg = ($E1 + $E2) / 2  # placeholder para SetShell_1, se sobreescribe con SetShellLayer_1
$ret = $Mdl.PropArea.SetShell_1($secName, 2, $false, $mat1, 0, $t_total, $t_total, -1, "", "")
Write-Output ("    SetShell_1 base ret=" + $ret)

$NLayers = 2
$t_layer1 = $t_total * $t1_frac
$t_layer2 = $t_total * (1 - $t1_frac)
$layerNames = New-Object 'string[]' $NLayers
$dists      = New-Object 'double[]' $NLayers
$thks       = New-Object 'double[]' $NLayers
$mats       = New-Object 'string[]' $NLayers
$myType     = New-Object 'int[]' $NLayers
$angs       = New-Object 'double[]' $NLayers
$nints      = New-Object 'int[]' $NLayers
$s11        = New-Object 'int[]' $NLayers
$s22        = New-Object 'int[]' $NLayers
$s12        = New-Object 'int[]' $NLayers

# Capa 1 (inferior, z negativo): mat1 (E1)
$layerNames[0] = "Layer1_E1"
$dists[0]      = -$t_total/2 + $t_layer1/2
$thks[0]       = $t_layer1
$mats[0]       = $mat1
$myType[0]     = 1
$angs[0]       = 0.0
$nints[0]      = 2
$s11[0] = 0; $s22[0] = 0; $s12[0] = 0

# Capa 2 (superior, z positivo): mat2 (E2)
$layerNames[1] = "Layer2_E2"
$dists[1]      = +$t_total/2 - $t_layer2/2
$thks[1]       = $t_layer2
$mats[1]       = $mat2
$myType[1]     = 1
$angs[1]       = 0.0
$nints[1]      = 2
$s11[1] = 0; $s22[1] = 0; $s12[1] = 0

Write-Output ("[3] Capa 1: dist=" + $dists[0].ToString("N4") + "m t=" + $thks[0].ToString("N3") + "m mat=$mat1 (E=$E1)")
Write-Output ("    Capa 2: dist=" + $dists[1].ToString("N4") + "m t=" + $thks[1].ToString("N3") + "m mat=$mat2 (E=$E2)")

$nL = $NLayers
$ret = $Mdl.PropArea.SetShellLayer_1($secName,
    [ref] $nL, [ref] $layerNames, [ref] $dists, [ref] $thks,
    [ref] $myType, [ref] $nints,
    [ref] $mats, [ref] $angs,
    [ref] $s11, [ref] $s22, [ref] $s12)
Write-Output ("    SetShellLayer_1 ret=" + $ret)

# === Nodos / Areas ===
$dx = $L / $NDiv
$nodes = @{}
for ($j = 0; $j -le $NDiv; $j++) {
    for ($i = 0; $i -le $NDiv; $i++) {
        $nm = ""
        $r = $Mdl.PointObj.AddCartesian($i * $dx, $j * $dx, 0.0, [ref] $nm, "", "Global", $false, 0)
        if ($r -eq 0) { $nodes["${i}_${j}"] = $nm }
    }
}
$areaNames = @()
for ($j = 0; $j -lt $NDiv; $j++) {
    for ($i = 0; $i -lt $NDiv; $i++) {
        [string[]] $pts = @($nodes["${i}_${j}"], $nodes["$($i+1)_${j}"], $nodes["$($i+1)_$($j+1)"], $nodes["${i}_$($j+1)"])
        $aName = ""
        $r = $Mdl.AreaObj.AddByPoint(4, [ref] $pts, [ref] $aName, $secName, "")
        if ($r -eq 0) { $areaNames += $aName }
    }
}
Write-Output ("[4] Mesh: " + $nodes.Count + " nodos, " + $areaNames.Count + " areas")

# Restraints SS
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

# Carga
$loadName = "Q"
$Mdl.LoadPatterns.Add($loadName, 8, 0, $true) | Out-Null
foreach ($a in $areaNames) {
    $Mdl.AreaObj.SetLoadUniform($a, $loadName, $q, 10, $true, "Global", 0) | Out-Null
}

# Save + RunAnalysis
$sdbPath = "$env:TEMP\bench_bimetal.sdb"
if (Test-Path $sdbPath) { Remove-Item $sdbPath -Force }
$Mdl.File.Save($sdbPath) | Out-Null

Write-Output "[5] Corriendo analisis..."
$t0 = Get-Date
$ret = $Mdl.Analyze.RunAnalysis()
$dt = ((Get-Date) - $t0).TotalSeconds
Write-Output ("    RunAnalysis ret=" + $ret + " en " + $dt.ToString("N1") + "s")

# Extraer
$Mdl.Results.Setup.DeselectAllCasesAndCombosForOutput() | Out-Null
$Mdl.Results.Setup.SetCaseSelectedForOutput($loadName, $true) | Out-Null

$Num = 0; $Obj = $Elm = $LC = $StepType = $StepNum = $null
$U1 = $U2 = $U3 = $R1 = $R2 = $R3 = $null
$ret = $Mdl.Results.JointDispl("All", 2,
    [ref] $Num, [ref] $Obj, [ref] $Elm, [ref] $LC,
    [ref] $StepType, [ref] $StepNum,
    [ref] $U1, [ref] $U2, [ref] $U3,
    [ref] $R1, [ref] $R2, [ref] $R3)
$maxUz = 0; $maxU = 0; $maxV = 0
for ($i = 0; $i -lt $Num; $i++) {
    if ([Math]::Abs($U3[$i]) -gt [Math]::Abs($maxUz)) { $maxUz = $U3[$i] }
    if ([Math]::Abs($U1[$i]) -gt [Math]::Abs($maxU)) { $maxU = $U1[$i] }
    if ([Math]::Abs($U2[$i]) -gt [Math]::Abs($maxV)) { $maxV = $U2[$i] }
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

$maxM11 = 0; $maxM22 = 0; $maxN11 = 0
for ($i = 0; $i -lt $Num; $i++) {
    if ([Math]::Abs($M11[$i]) -gt [Math]::Abs($maxM11)) { $maxM11 = $M11[$i] }
    if ([Math]::Abs($M22[$i]) -gt [Math]::Abs($maxM22)) { $maxM22 = $M22[$i] }
    if ([Math]::Abs($F11[$i]) -gt [Math]::Abs($maxN11)) { $maxN11 = $F11[$i] }
}

Write-Output ""
Write-Output "============================================================"
Write-Output (" RESULTADOS BIMETALICO - SAP2000 LAYERED")
Write-Output "============================================================"
Write-Output ("w_max  [mm]     " + ([Math]::Abs($maxUz)*1000).ToString("N4"))
Write-Output ("u_max  [mm]     " + ([Math]::Abs($maxU)*1000).ToString("N5") + "  (membrane displacement)")
Write-Output ("v_max  [mm]     " + ([Math]::Abs($maxV)*1000).ToString("N5"))
Write-Output ("M11_max [kN.m/m] " + $maxM11.ToString("N4"))
Write-Output ("M22_max [kN.m/m] " + $maxM22.ToString("N4"))
Write-Output ("N11_max [kN/m]   " + $maxN11.ToString("N4") + "  (membrane force, indicador de coupling)")

# JSON
$out = [ordered]@{
    program = "SAP2000 Layered Bimetalico"
    case = [ordered]@{
        L_m = $L; t_total_m = $t_total; t1_frac = $t1_frac
        E1_kPa = $E1; E2_kPa = $E2; nu = $nu
        q_kPa = $q; rho_ton_m3 = $rho; mesh = "${NDiv}x${NDiv}"
    }
    sap2000 = [ordered]@{
        w_max_m = $maxUz; u_max_m = $maxU; v_max_m = $maxV
        M11_max_kNm_m = $maxM11; M22_max_kNm_m = $maxM22
        N11_max_kN_m = $maxN11
        runtime_s = $dt
    }
}
$out | ConvertTo-Json -Depth 10 | Set-Content -Path $OutPath -Encoding UTF8
Write-Output ("JSON: " + $OutPath)

if (-not $KeepOpen -and -not $wasRunning) { $Sap.ApplicationExit($false) | Out-Null }
Write-Output "[DONE]"
