# ============================================================================
#  benchmark_losa_4esquinas_sap.ps1
# ============================================================================
#  Test aislado: losa shell-thin 5x4x0.15 apoyada SOLO en 4 esquinas (puntual),
#  SIN vigas perimetrales. Carga uniforme via apportionment nodal.
#
#  Si Hekatan vs SAP coinciden -> problema es frame-shell coupling
#  Si NO coinciden -> problema es shellQ4 con BCs puntuales (vs Shell-Thin)
# ============================================================================

param(
    [string] $OutPath = "$PSScriptRoot\sap2000_losa_4esquinas.json",
    [double] $Lx = 5.0, [double] $Ly = 4.0,
    [double] $t = 0.15,
    [double] $E = 25000000,
    [double] $nu = 0.20,
    [double] $q = 8.0,
    [int] $Nx = 10, [int] $Ny = 8,
    [double] $rho = 2.4,
    [int] $ShellType = 1,    # 1=Shell-Thin, 2=Shell-Thick
    [string] $ShellName = "Shell-Thin",
    [switch] $Visible, [switch] $KeepOpen
)

$ErrorActionPreference = "Continue"

Write-Output "============================================================"
Write-Output (" BENCHMARK LOSA 4-ESQUINAS - " + $ShellName + " - SAP2000")
Write-Output "============================================================"
Write-Output ("Lx=" + $Lx + " Ly=" + $Ly + " t=" + $t + " E=" + $E + " q=" + $q + " malla=" + $Nx + "x" + $Ny)
Write-Output "Sin vigas, solo 4 apoyos esquinas"

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

$matName = "ConcLosa"
$Mdl.PropMaterial.SetMaterial($matName, 2, -1, "", "") | Out-Null
$Mdl.PropMaterial.SetMPIsotropic($matName, $E, $nu, 0, 0) | Out-Null

$secName = "LosaSec_$ShellType"
$Mdl.PropArea.SetShell_1($secName, $ShellType, $false, $matName, 0, $t, $t, -1, "", "") | Out-Null

# Crear nodos
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
Write-Output ("[2] " + $nodes.Count + " nodos")

# Crear areas (solo shells, NO frames)
$areaNames = @()
for ($j = 0; $j -lt $Ny; $j++) {
    for ($i = 0; $i -lt $Nx; $i++) {
        [string[]] $pts = @($nodes["${i}_${j}"], $nodes["$($i+1)_${j}"], $nodes["$($i+1)_$($j+1)"], $nodes["${i}_$($j+1)"])
        $aName = ""
        $r = $Mdl.AreaObj.AddByPoint(4, [ref] $pts, [ref] $aName, $secName, "")
        if ($r -eq 0) { $areaNames += $aName }
    }
}
Write-Output ("[3] " + $areaNames.Count + " areas - SIN VIGAS")

# Restraints SOLO 4 esquinas
$corners = @("0_0", "${Nx}_0", "0_$Ny", "${Nx}_$Ny")
foreach ($c in $corners) {
    [bool[]] $rest = @($true, $true, $true, $false, $false, $false)
    $Mdl.PointObj.SetRestraint($nodes[$c], [ref] $rest, 0) | Out-Null
}
Write-Output "[4] 4 esquinas Uz=Ux=Uy=0 (simply supported puntual)"

# Carga apportionment nodal
$loadName = "Q"
$Mdl.LoadPatterns.Add($loadName, 8, 0, $true) | Out-Null
$cellArea = $dx * $dy
for ($j = 0; $j -le $Ny; $j++) {
    for ($i = 0; $i -le $Nx; $i++) {
        $isCorner = ($i -eq 0 -or $i -eq $Nx) -and ($j -eq 0 -or $j -eq $Ny)
        $isEdge = ($i -eq 0 -or $i -eq $Nx -or $j -eq 0 -or $j -eq $Ny) -and -not $isCorner
        $factor = 1.0
        if ($isCorner) { $factor = 0.25 }
        elseif ($isEdge) { $factor = 0.5 }
        $Fz = -$q * $cellArea * $factor
        [double[]] $loadArr = @(0.0, 0.0, $Fz, 0.0, 0.0, 0.0)
        $Mdl.PointObj.SetLoadForce($nodes["${i}_${j}"], $loadName, [ref] $loadArr, $true, "Global", 0) | Out-Null
    }
}
Write-Output "[5] Cargas nodales aplicadas"

$Mdl.LoadCases.ModalEigen.SetNumberModes("MODAL", 12, 1) | Out-Null

$sdbPath = "$env:TEMP\bench_losa_4esq_$ShellType.sdb"
if (Test-Path $sdbPath) { Remove-Item $sdbPath -Force }
$Mdl.File.Save($sdbPath) | Out-Null

$t0 = Get-Date
$ret = $Mdl.Analyze.RunAnalysis()
$dt = ((Get-Date) - $t0).TotalSeconds
Write-Output ("[6] RunAnalysis ret=" + $ret + " en " + $dt.ToString("N1") + "s")

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
Write-Output ("[7] delta_max = " + $delta_max_mm.ToString("N4") + " mm")

# Modal
$Mdl.Results.Setup.DeselectAllCasesAndCombosForOutput() | Out-Null
$Mdl.Results.Setup.SetCaseSelectedForOutput("MODAL", $true) | Out-Null
$NumM = 0; $LCM = $StepTypeM = $StepNumM = $Period = $Frequency = $CircFreq = $EigenValue = $null
$Mdl.Results.ModalPeriod(
    [ref] $NumM, [ref] $LCM, [ref] $StepTypeM, [ref] $StepNumM,
    [ref] $Period, [ref] $Frequency, [ref] $CircFreq, [ref] $EigenValue) | Out-Null

$modes = @()
for ($i = 0; $i -lt $NumM; $i++) {
    $modes += [ordered]@{ mode = [int] $StepNumM[$i]; period_s = $Period[$i]; freq_Hz = $Frequency[$i] }
}
Write-Output ""
Write-Output ("[8] " + $NumM + " modos:")
for ($i = 0; $i -lt [Math]::Min(6, $NumM); $i++) {
    Write-Output ("  Mode " + $modes[$i].mode + ": T=" + $modes[$i].period_s.ToString("N4") + "s  f=" + $modes[$i].freq_Hz.ToString("N3") + " Hz")
}

$out = [ordered]@{
    program = "SAP2000"; shell_type = $ShellType; shell_name = $ShellName
    case = [ordered]@{ Lx=$Lx; Ly=$Ly; t=$t; E=$E; nu=$nu; q=$q; mesh="${Nx}x${Ny}" }
    sap2000 = [ordered]@{ delta_max_mm = $delta_max_mm; modes = $modes; runtime_s = $dt }
}
$out | ConvertTo-Json -Depth 10 | Set-Content -Path $OutPath -Encoding UTF8
Write-Output ("JSON: " + $OutPath)

if (-not $KeepOpen -and -not $wasRunning) { $Sap.ApplicationExit($false) | Out-Null }
Write-Output "[DONE]"
