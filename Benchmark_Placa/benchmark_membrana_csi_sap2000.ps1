# ============================================================================
#  benchmark_membrana_csi_sap2000.ps1
# ============================================================================
#  Replica el ejemplo `membrana-csi` del workspace en SAP2000 via OAPI:
#    - Losa Lx x Ly con Membrane (ShellType=5)
#    - 4 vigas perimetrales (frames concreto bViga x hViga)
#    - 4 apoyos esquinas (simply supported)
#    - Carga uniforme q (auto-distribuye via tri/trap a vigas)
#  Output: δ_max, σVM, frecuencias modales (12 modos)
# ============================================================================

param(
    [string] $OutPath = "$PSScriptRoot\sap2000_membrana_csi_results.json",
    [double] $Lx = 5.0, [double] $Ly = 4.0,
    [double] $t = 0.15,
    [double] $E = 25000000,    # kPa
    [double] $nu = 0.20,
    [double] $q = 8.0,         # kN/m^2 (downward)
    [double] $bViga = 0.30, [double] $hViga = 0.50,
    [int] $Nx = 10, [int] $Ny = 8,
    [double] $rho = 2.4,
    [switch] $Visible, [switch] $KeepOpen
)

$ErrorActionPreference = "Continue"

Write-Output "============================================================"
Write-Output " BENCHMARK MEMBRANA CSI (losa+vigas+modal) - SAP2000"
Write-Output "============================================================"
Write-Output ("Lx=" + $Lx + " Ly=" + $Ly + " t=" + $t + " E=" + $E + " q=" + $q + " malla=" + $Nx + "x" + $Ny)

# Conectar
$helper = New-Object -ComObject "SAP2000v1.Helper"
$Sap = $null; $wasRunning = $false
try { $Sap = $helper.GetObject("CSI.SAP2000.API.SapObject"); if ($Sap) { $wasRunning = $true; Write-Output "[1] Warm reuse" } } catch {}
if ($Sap -eq $null) {
    $Sap = $helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
    $Sap.ApplicationStart(6, $Visible.IsPresent, "") | Out-Null
}

$Mdl = $Sap.SapModel
$Mdl.InitializeNewModel(6) | Out-Null
$Mdl.File.NewBlank() | Out-Null
$Mdl.SetPresentUnits(6) | Out-Null

# Material
$matName = "ConcMem"
$Mdl.PropMaterial.SetMaterial($matName, 2, -1, "", "") | Out-Null
$Mdl.PropMaterial.SetMPIsotropic($matName, $E, $nu, 0, 0) | Out-Null
Write-Output "[2] Material OK"

# NOTA IMPORTANTE: el ejemplo `membrana-csi` de hekatan-fem usa shellQ4 con
# DRILLING DOF (Rz) + bending Mindlin internamente. Eso es equivalente al
# Shell-Thin de SAP2000 (ShellType=1), no al Membrane Pure (ShellType=5).
# El Membrane Pure NO tiene Uz DOF y haria δ→∞ con carga vertical.
$secShell = "LosaShellThin"
$ret = $Mdl.PropArea.SetShell_1($secShell, 1, $false, $matName, 0, $t, $t, -1, "", "")
Write-Output ("[3] Shell-Thin section (equivalente a hekatan membrana-csi) ret=" + $ret)

# Seccion viga rectangular b x h
$secViga = "VigaR"
$ret = $Mdl.PropFrame.SetRectangle($secViga, $matName, $hViga, $bViga, -1, "", "")
Write-Output ("[4] Viga rect ret=" + $ret)

# Crear nodos (plano XY, Z=0)
$dx = $Lx / $Nx
$dy = $Ly / $Ny
$nodes = @{}
for ($j = 0; $j -le $Ny; $j++) {
    for ($i = 0; $i -le $Nx; $i++) {
        $nm = ""
        $r = $Mdl.PointObj.AddCartesian($i * $dx, $j * $dy, 0.0, [ref] $nm, "", "Global", $false, 0)
        if ($r -eq 0) { $nodes["${i}_${j}"] = $nm }
    }
}
Write-Output ("[5] " + $nodes.Count + " nodos creados")

# Crear areas Q4 (membrane)
$areaNames = @()
for ($j = 0; $j -lt $Ny; $j++) {
    for ($i = 0; $i -lt $Nx; $i++) {
        [string[]] $pts = @($nodes["${i}_${j}"], $nodes["$($i+1)_${j}"], $nodes["$($i+1)_$($j+1)"], $nodes["${i}_$($j+1)"])
        $aName = ""
        $r = $Mdl.AreaObj.AddByPoint(4, [ref] $pts, [ref] $aName, $secShell, "")
        if ($r -eq 0) { $areaNames += $aName }
    }
}
Write-Output ("[6] " + $areaNames.Count + " areas membrana creadas")

# Crear vigas perimetrales: 4 lados (Sur Norte Oeste Este)
$frameNames = @()
# Sur (j=0)
for ($i = 0; $i -lt $Nx; $i++) {
    $fn = ""; $n1 = $nodes["${i}_0"]; $n2 = $nodes["$($i+1)_0"]
    $r = $Mdl.FrameObj.AddByPoint($n1, $n2, [ref] $fn, $secViga, "")
    if ($r -eq 0) { $frameNames += $fn }
}
# Norte (j=Ny)
for ($i = 0; $i -lt $Nx; $i++) {
    $fn = ""; $n1 = $nodes["${i}_$Ny"]; $n2 = $nodes["$($i+1)_$Ny"]
    $r = $Mdl.FrameObj.AddByPoint($n1, $n2, [ref] $fn, $secViga, "")
    if ($r -eq 0) { $frameNames += $fn }
}
# Oeste (i=0)
for ($j = 0; $j -lt $Ny; $j++) {
    $fn = ""; $n1 = $nodes["0_$j"]; $n2 = $nodes["0_$($j+1)"]
    $r = $Mdl.FrameObj.AddByPoint($n1, $n2, [ref] $fn, $secViga, "")
    if ($r -eq 0) { $frameNames += $fn }
}
# Este (i=Nx)
for ($j = 0; $j -lt $Ny; $j++) {
    $fn = ""; $n1 = $nodes["${Nx}_$j"]; $n2 = $nodes["${Nx}_$($j+1)"]
    $r = $Mdl.FrameObj.AddByPoint($n1, $n2, [ref] $fn, $secViga, "")
    if ($r -eq 0) { $frameNames += $fn }
}
Write-Output ("[7] " + $frameNames.Count + " vigas perimetrales creadas")

# Restraints: 4 esquinas simply supported (Ux Uy Uz)
$corners = @("0_0", "${Nx}_0", "0_$Ny", "${Nx}_$Ny")
foreach ($c in $corners) {
    [bool[]] $rest = @($true, $true, $true, $false, $false, $false)
    $Mdl.PointObj.SetRestraint($nodes[$c], [ref] $rest, 0) | Out-Null
}
Write-Output "[8] 4 esquinas simply supported"

# Carga: Membrane no tiene Uz, asi que aplicamos q via JOINT LOADS por area
# tributaria (mismo approach que el ejemplo membrana-csi de hekatan-fem).
# Esto simula el "CSI Apportionment by area" pero a nivel nodal.
$loadName = "Q"
$Mdl.LoadPatterns.Add($loadName, 8, 0, $true) | Out-Null
$cellArea = $dx * $dy
$cntL = 0
for ($j = 0; $j -le $Ny; $j++) {
    for ($i = 0; $i -le $Nx; $i++) {
        $isCorner = ($i -eq 0 -or $i -eq $Nx) -and ($j -eq 0 -or $j -eq $Ny)
        $isEdge = ($i -eq 0 -or $i -eq $Nx -or $j -eq 0 -or $j -eq $Ny) -and -not $isCorner
        $factor = 1.0
        if ($isCorner) { $factor = 0.25 }
        elseif ($isEdge) { $factor = 0.5 }
        $Fz = -$q * $cellArea * $factor   # negativo = hacia abajo
        [double[]] $loadArr = @(0.0, 0.0, $Fz, 0.0, 0.0, 0.0)
        $r = $Mdl.PointObj.SetLoadForce($nodes["${i}_${j}"], $loadName, [ref] $loadArr, $true, "Global", 0)
        if ($r -eq 0) { $cntL++ }
    }
}
Write-Output ("[9] " + $cntL + " nodos cargados (q=" + $q + " kN/m^2 via apportionment)")

# Modal
$Mdl.LoadCases.ModalEigen.SetNumberModes("MODAL", 12, 1) | Out-Null

# Save y RunAnalysis
$sdbPath = "$env:TEMP\bench_membrana_csi.sdb"
if (Test-Path $sdbPath) { Remove-Item $sdbPath -Force }
$Mdl.File.Save($sdbPath) | Out-Null

$t0 = Get-Date
$ret = $Mdl.Analyze.RunAnalysis()
$dt = ((Get-Date) - $t0).TotalSeconds
Write-Output ("[10] RunAnalysis ret=" + $ret + " en " + $dt.ToString("N1") + "s")

# Resultados estaticos
$Mdl.Results.Setup.DeselectAllCasesAndCombosForOutput() | Out-Null
$Mdl.Results.Setup.SetCaseSelectedForOutput($loadName, $true) | Out-Null

$Num = 0; $Obj = $Elm = $LC = $StepType = $StepNum = $null
$U1 = $U2 = $U3 = $R1 = $R2 = $R3 = $null
$ret = $Mdl.Results.JointDispl("All", 2,
    [ref] $Num, [ref] $Obj, [ref] $Elm, [ref] $LC,
    [ref] $StepType, [ref] $StepNum,
    [ref] $U1, [ref] $U2, [ref] $U3,
    [ref] $R1, [ref] $R2, [ref] $R3)

$maxUz = 0
for ($i = 0; $i -lt $Num; $i++) {
    if ([Math]::Abs($U3[$i]) -gt [Math]::Abs($maxUz)) { $maxUz = $U3[$i] }
}
$delta_max_mm = [Math]::Abs($maxUz) * 1000
Write-Output ("[11] delta_max = " + $delta_max_mm.ToString("N4") + " mm")

# Modal
$Mdl.Results.Setup.DeselectAllCasesAndCombosForOutput() | Out-Null
$Mdl.Results.Setup.SetCaseSelectedForOutput("MODAL", $true) | Out-Null

$NumM = 0; $LCM = $StepTypeM = $StepNumM = $Period = $Frequency = $CircFreq = $EigenValue = $null
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
Write-Output ("[12] " + $NumM + " modos extraidos")
Write-Output ""
Write-Output "Modal:"
for ($i = 0; $i -lt [Math]::Min(6, $NumM); $i++) {
    Write-Output ("  Mode " + $modes[$i].mode + ": T=" + $modes[$i].period_s.ToString("N4") + "s  f=" + $modes[$i].freq_Hz.ToString("N3") + " Hz")
}

# Modal Mass Participation
$NumP = 0; $LCP = $StepTypeP = $StepNumP = $PeriodP = $null
$UX = $UY = $UZ = $SumUX = $SumUY = $SumUZ = $null
$RX = $RY = $RZ = $SumRX = $SumRY = $SumRZ = $null
try {
    $ret = $Mdl.Results.ModalParticipatingMassRatios(
        [ref] $NumP, [ref] $LCP, [ref] $StepTypeP, [ref] $StepNumP, [ref] $PeriodP,
        [ref] $UX, [ref] $UY, [ref] $UZ, [ref] $SumUX, [ref] $SumUY, [ref] $SumUZ,
        [ref] $RX, [ref] $RY, [ref] $RZ, [ref] $SumRX, [ref] $SumRY, [ref] $SumRZ)
    Write-Output ""
    Write-Output ("Sum mass participation: Ux=" + ($SumUX[$NumP-1]*100).ToString("N1") + "% Uy=" + ($SumUY[$NumP-1]*100).ToString("N1") + "% Uz=" + ($SumUZ[$NumP-1]*100).ToString("N1") + "%")
} catch { Write-Output "MPR: $($_.Exception.Message)" }

# JSON
$out = [ordered]@{
    program = "SAP2000"
    case = [ordered]@{
        Lx = $Lx; Ly = $Ly; t = $t; E = $E; nu = $nu; q = $q
        bViga = $bViga; hViga = $hViga; mesh = "${Nx}x${Ny}"
    }
    sap2000 = [ordered]@{
        delta_max_mm = $delta_max_mm
        modes = $modes
        runtime_s = $dt
    }
}
$out | ConvertTo-Json -Depth 10 | Set-Content -Path $OutPath -Encoding UTF8
Write-Output ""
Write-Output ("JSON: " + $OutPath)

if (-not $KeepOpen -and -not $wasRunning) { $Sap.ApplicationExit($false) | Out-Null }
Write-Output "[DONE]"
