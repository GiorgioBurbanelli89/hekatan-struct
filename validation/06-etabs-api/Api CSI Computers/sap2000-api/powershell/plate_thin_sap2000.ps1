#region Plate Thin — SAP2000 API verification (PowerShell 7+)
<#
.SYNOPSIS
  Reproduce FE02 (SS Mindlin t=0.05) via SAP2000 API.
.DESCRIPTION
  Construye el modelo, corre análisis, extrae w_max, compara contra
  HekatanLab Web (1.371347e-2) y Navier (1.247232e-2).
.REQUIREMENTS
  SAP2000 v21+ con SAP2000v1.dll
  PowerShell 7+ (también funciona con PS 5.1)
.EXAMPLE
  pwsh -File plate_thin_sap2000.ps1
#>
#endregion

# ── Configuración ──────────────────────────────────────────────
$APIDLLPath     = "C:\Program Files\Computers and Structures\SAP2000 21\SAP2000v1.dll"
$ModelDirectory = "C:\CSi_SAP2000_API_PlateThin"
if (-not (Test-Path $ModelDirectory)) { New-Item -ItemType Directory -Path $ModelDirectory | Out-Null }
$ModelPath = Join-Path $ModelDirectory "plate_thin.sdb"

# ── Inputs FE02 ────────────────────────────────────────────────
$W_m, $H_m, $t_m = 1.0, 1.0, 0.05
$E_m, $nu_m, $q  = 30000, 0.2, 1.0
$nx, $ny         = 4, 4

# ── Cargar DLL y conectar ─────────────────────────────────────
Add-Type -Path $APIDLLPath
$helper    = New-Object SAP2000v1.Helper
$SapObject = $helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
$SapObject.ApplicationStart()

$SapModel = $SapObject.SapModel
[void] $SapModel.InitializeNewModel(6)        # 6 = N_m_C
[void] $SapModel.File.NewBlank()

# Material
[void] $SapModel.PropMaterial.SetMaterial("PLATE_MAT", 2)   # 2=Concrete
[void] $SapModel.PropMaterial.SetMPIsotropic("PLATE_MAT", $E_m, $nu_m, 0)

# Sección Plate-Thin (ShellType=2)
[void] $SapModel.PropArea.SetShell_1("PLATE_THIN", 2, $false, "PLATE_MAT", 0, $t_m, $t_m)

# Malla
$dx = $W_m / $nx
$dy = $H_m / $ny
for ($jj = 0; $jj -lt $ny; $jj++) {
    for ($ii = 0; $ii -lt $nx; $ii++) {
        $X = [double[]] @($ii*$dx, ($ii+1)*$dx, ($ii+1)*$dx, $ii*$dx)
        $Y = [double[]] @($jj*$dy, $jj*$dy, ($jj+1)*$dy, ($jj+1)*$dy)
        $Z = [double[]] @(0.0, 0.0, 0.0, 0.0)
        $name = ""
        [void] $SapModel.AreaObj.AddByCoord(4, [ref] $X, [ref] $Y, [ref] $Z, [ref] $name, "PLATE_THIN", "", "Global")
    }
}

# BCs SS
$NumberPoints = 0
$PointNames   = [string[]] @()
[void] $SapModel.PointObj.GetNameList([ref] $NumberPoints, [ref] $PointNames)
foreach ($p in $PointNames) {
    $X = 0.0; $Y = 0.0; $Z = 0.0
    [void] $SapModel.PointObj.GetCoordCartesian($p, [ref] $X, [ref] $Y, [ref] $Z)
    if ([math]::Abs($X) -lt 1e-6 -or [math]::Abs($X - $W_m) -lt 1e-6 -or `
        [math]::Abs($Y) -lt 1e-6 -or [math]::Abs($Y - $H_m) -lt 1e-6) {
        $r = [bool[]] @($false, $false, $true, $false, $false, $false)
        [void] $SapModel.PointObj.SetRestraint($p, [ref] $r)
    }
}

# Carga uniforme
[void] $SapModel.LoadPatterns.Add("Q", 8, 0, $true)   # 8=Other
$NumberAreas = 0
$AreaNames   = [string[]] @()
[void] $SapModel.AreaObj.GetNameList([ref] $NumberAreas, [ref] $AreaNames)
foreach ($a in $AreaNames) {
    [void] $SapModel.AreaObj.SetLoadUniform($a, "Q", -$q, 10, $true, "Global")
}

# Análisis
[void] $SapModel.File.Save($ModelPath)
[void] $SapModel.Analyze.RunAnalysis()

# Extraer w_max
[void] $SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
[void] $SapModel.Results.Setup.SetCaseSelectedForOutput("Q")

$w_max_sap = 0.0
foreach ($p in $PointNames) {
    $NumRes = 0
    $Obj=$Elm=$ACase=$StepType=@(); $StepNum=$U1=$U2=$U3=$R1=$R2=$R3=@()
    [void] $SapModel.Results.JointDispl($p, 0, [ref]$NumRes,
        [ref]$Obj, [ref]$Elm, [ref]$ACase, [ref]$StepType, [ref]$StepNum,
        [ref]$U1, [ref]$U2, [ref]$U3, [ref]$R1, [ref]$R2, [ref]$R3)
    if ($NumRes -gt 0 -and [math]::Abs($U3[0]) -gt $w_max_sap) {
        $w_max_sap = [math]::Abs($U3[0])
    }
}

[void] $SapObject.ApplicationExit($false)

# ── Comparación ───────────────────────────────────────────────
$D_ref   = $E_m * [math]::Pow($t_m, 3) / (12 * (1 - $nu_m*$nu_m))
$w_navier = 0.00406 * $q * [math]::Pow($W_m, 4) / $D_ref
$w_heklab = 1.371347e-2

Write-Output ""
Write-Output ("═" * 60)
Write-Output "  PLATE THIN (ShellType=2) — SAP2000 vs HekatanLab vs Navier"
Write-Output ("═" * 60)
Write-Output "  Geometría: $W_m x $H_m, t=$t_m, q=$q, malla $nx x $ny"
Write-Output ("─" * 58)
"  {0,-18}{1,-20:e6}{2,+10:f2}%" -f "SAP2000 API", $w_max_sap, (($w_max_sap/$w_heklab - 1)*100)
"  {0,-18}{1,-20:e6}---" -f "HekatanLab Web", $w_heklab
"  {0,-18}{1,-20:e6}{2,+10:f2}%" -f "Navier teórica", $w_navier, (($w_navier/$w_heklab - 1)*100)
Write-Output ("─" * 58)

$SapResult_thin   = $w_max_sap
$IndResult_thin   = $w_navier
$PercentDiff_thin = ($w_max_sap / $w_navier) - 1
"`nSapResult_thin   = {0:e6}" -f $SapResult_thin
"IndResult_thin   = {0:e6} (Navier alpha=0.00406)" -f $IndResult_thin
"PercentDiff_thin = {0,+8:f4}" -f $PercentDiff_thin
