# Plate Thin — ETABS API (PowerShell 7+) — FE02 SS Mindlin t=0.05, q=1, 4x4

$APIDLLPath     = "C:\Program Files\Computers and Structures\ETABS 18\ETABSv1.dll"
$ModelDirectory = "C:\CSi_ETABS_API_PlateThin"
if (-not (Test-Path $ModelDirectory)) { New-Item -ItemType Directory -Path $ModelDirectory | Out-Null }
$ModelPath = Join-Path $ModelDirectory "plate_thin.edb"

$W_m, $H_m, $t_m = 1.0, 1.0, 0.05
$E_m, $nu_m, $q  = 30000, 0.2, 1.0
$nx, $ny         = 4, 4

Add-Type -Path $APIDLLPath
$helper      = New-Object ETABSv1.Helper
$ETABSObject = $helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
$ETABSObject.ApplicationStart()
$SapModel    = $ETABSObject.SapModel
[void] $SapModel.InitializeNewModel()
[void] $SapModel.File.NewBlank()
[void] $SapModel.SetPresentUnits(6)   # N, m, C

[void] $SapModel.PropMaterial.SetMaterial("PLATE_MAT", 2)
[void] $SapModel.PropMaterial.SetMPIsotropic("PLATE_MAT", $E_m, $nu_m, 0)

# eSlabType.Slab=1, eShellType.ShellThin=1
[void] $SapModel.PropArea.SetSlab("PLATE_THIN", 1, 1, "PLATE_MAT", $t_m)

$dx = $W_m/$nx; $dy = $H_m/$ny
for ($jj = 0; $jj -lt $ny; $jj++) {
    for ($ii = 0; $ii -lt $nx; $ii++) {
        $X = [double[]] @($ii*$dx, ($ii+1)*$dx, ($ii+1)*$dx, $ii*$dx)
        $Y = [double[]] @($jj*$dy, $jj*$dy, ($jj+1)*$dy, ($jj+1)*$dy)
        $Z = [double[]] @(0.0, 0.0, 0.0, 0.0)
        $name = ""
        [void] $SapModel.AreaObj.AddByCoord(4, [ref]$X, [ref]$Y, [ref]$Z, [ref]$name, "PLATE_THIN", "", "Global")
    }
}

$NumberPoints = 0; $PointNames = [string[]]@()
[void] $SapModel.PointObj.GetNameList([ref]$NumberPoints, [ref]$PointNames)
foreach ($p in $PointNames) {
    $X=0.0; $Y=0.0; $Z=0.0
    [void] $SapModel.PointObj.GetCoordCartesian($p, [ref]$X, [ref]$Y, [ref]$Z)
    if ([math]::Abs($X) -lt 1e-6 -or [math]::Abs($X-$W_m) -lt 1e-6 -or `
        [math]::Abs($Y) -lt 1e-6 -or [math]::Abs($Y-$H_m) -lt 1e-6) {
        $r = [bool[]] @($false,$false,$true,$false,$false,$false)
        [void] $SapModel.PointObj.SetRestraint($p, [ref]$r)
    }
}

[void] $SapModel.LoadPatterns.Add("Q", 8, 0, $true)
$NumberAreas = 0; $AreaNames = [string[]]@()
[void] $SapModel.AreaObj.GetNameList([ref]$NumberAreas, [ref]$AreaNames)
foreach ($a in $AreaNames) {
    [void] $SapModel.AreaObj.SetLoadUniform($a, "Q", -$q, 10, $true, "Global")
}

[void] $SapModel.File.Save($ModelPath)
[void] $SapModel.Analyze.RunAnalysis()
[void] $SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
[void] $SapModel.Results.Setup.SetCaseSelectedForOutput("Q")

$w_max = 0.0
foreach ($p in $PointNames) {
    $NumRes = 0
    $Obj=$Elm=$ACase=$StepType=@(); $StepNum=$U1=$U2=$U3=$R1=$R2=$R3=@()
    [void] $SapModel.Results.JointDispl($p, 0, [ref]$NumRes,
        [ref]$Obj, [ref]$Elm, [ref]$ACase, [ref]$StepType, [ref]$StepNum,
        [ref]$U1, [ref]$U2, [ref]$U3, [ref]$R1, [ref]$R2, [ref]$R3)
    if ($NumRes -gt 0 -and [math]::Abs($U3[0]) -gt $w_max) {
        $w_max = [math]::Abs($U3[0])
    }
}
[void] $ETABSObject.ApplicationExit($false)

$D_ref   = $E_m * [math]::Pow($t_m,3) / (12*(1-$nu_m*$nu_m))
$w_navier = 0.00406 * $q * [math]::Pow($W_m,4) / $D_ref
$w_heklab = 1.371347e-2

Write-Output ("═" * 60)
Write-Output "  PLATE THIN (eShellType.ShellThin) — ETABS vs HekatanLab vs Navier"
Write-Output ("═" * 60)
"  ETABS API       w_max = {0:e6}  ({1:f2}%)" -f $w_max, (($w_max/$w_heklab-1)*100)
"  HekatanLab Web  w_max = {0:e6}  ---" -f $w_heklab
"  Navier teórica  w_max = {0:e6}  ({1:f2}%)" -f $w_navier, (($w_navier/$w_heklab-1)*100)
"`nETABSResult_thin = {0:e6}" -f $w_max
"IndResult_thin   = {0:e6}" -f $w_navier
"PercentDiff_thin = {0:f4}" -f (($w_max/$w_navier)-1)
