# Membrane Wall — ETABS API (PowerShell) — FE01b. SetWall + eShellType.Membrane

$APIDLLPath     = "C:\Program Files\Computers and Structures\ETABS 18\ETABSv1.dll"
$ModelDirectory = "C:\CSi_ETABS_API_Membrane"
if (-not (Test-Path $ModelDirectory)) { New-Item -ItemType Directory -Path $ModelDirectory | Out-Null }
$ModelPath = Join-Path $ModelDirectory "membrane_wall.edb"

$W, $H, $t  = 5, 3, 0.2
$P, $E, $nu = 100, 25000, 0.2
$nx, $ny    = 6, 4

Add-Type -Path $APIDLLPath
$helper      = New-Object ETABSv1.Helper
$ETABSObject = $helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
$ETABSObject.ApplicationStart()
$SapModel = $ETABSObject.SapModel
[void] $SapModel.InitializeNewModel(); [void] $SapModel.File.NewBlank(); [void] $SapModel.SetPresentUnits(6)

[void] $SapModel.PropMaterial.SetMaterial("WALL_MAT", 2)
[void] $SapModel.PropMaterial.SetMPIsotropic("WALL_MAT", $E, $nu, 0)
# eWallPropType.Specified=2, eShellType.Membrane=3
[void] $SapModel.PropArea.SetWall("WALL_MEM", 2, 3, "WALL_MAT", $t)

$dx = $W/$nx; $dz = $H/$ny
for ($jj=0; $jj -lt $ny; $jj++) {
    for ($ii=0; $ii -lt $nx; $ii++) {
        $X = [double[]] @($ii*$dx, ($ii+1)*$dx, ($ii+1)*$dx, $ii*$dx)
        $Y = [double[]] @(0.0,0.0,0.0,0.0)
        $Z = [double[]] @($jj*$dz, $jj*$dz, ($jj+1)*$dz, ($jj+1)*$dz)
        $name = ""
        [void] $SapModel.AreaObj.AddByCoord(4, [ref]$X, [ref]$Y, [ref]$Z, [ref]$name, "WALL_MEM", "", "Global")
    }
}

$NumberPoints = 0; $PointNames = [string[]]@()
[void] $SapModel.PointObj.GetNameList([ref]$NumberPoints, [ref]$PointNames)
$Rfix = [bool[]] @($true,$true,$true,$true,$true,$true)
$Roop = [bool[]] @($false,$true,$false,$false,$false,$false)
foreach ($p in $PointNames) {
    $X=0.0; $Y=0.0; $Z=0.0
    [void] $SapModel.PointObj.GetCoordCartesian($p, [ref]$X, [ref]$Y, [ref]$Z)
    if ([math]::Abs($Z) -lt 1e-6) {
        [void] $SapModel.PointObj.SetRestraint($p, [ref]$Rfix)
    } else {
        [void] $SapModel.PointObj.SetRestraint($p, [ref]$Roop)
    }
}

[void] $SapModel.LoadPatterns.Add("P", 8, 0, $true)
$P_per = $P / ($nx + 1)
foreach ($p in $PointNames) {
    $X=0.0; $Y=0.0; $Z=0.0
    [void] $SapModel.PointObj.GetCoordCartesian($p, [ref]$X, [ref]$Y, [ref]$Z)
    if ([math]::Abs($Z - $H) -lt 1e-6) {
        $pl = [double[]] @($P_per,0.0,0.0,0.0,0.0,0.0)
        [void] $SapModel.PointObj.SetLoadForce($p, "P", [ref]$pl, $false, "Global")
    }
}

[void] $SapModel.File.Save($ModelPath)
[void] $SapModel.Analyze.RunAnalysis()
[void] $SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
[void] $SapModel.Results.Setup.SetCaseSelectedForOutput("P")

$u_max = 0.0
foreach ($p in $PointNames) {
    $X=0.0; $Y=0.0; $Z=0.0
    [void] $SapModel.PointObj.GetCoordCartesian($p, [ref]$X, [ref]$Y, [ref]$Z)
    if ([math]::Abs($Z - $H) -lt 1e-6) {
        $NumRes = 0; $Obj=$Elm=$ACase=$StepType=@(); $StepNum=$U1=$U2=$U3=$R1=$R2=$R3=@()
        [void] $SapModel.Results.JointDispl($p, 0, [ref]$NumRes,
            [ref]$Obj, [ref]$Elm, [ref]$ACase, [ref]$StepType, [ref]$StepNum,
            [ref]$U1, [ref]$U2, [ref]$U3, [ref]$R1, [ref]$R2, [ref]$R3)
        if ($NumRes -gt 0 -and [math]::Abs($U1[0]) -gt $u_max) { $u_max = [math]::Abs($U1[0]) }
    }
}
[void] $ETABSObject.ApplicationExit($false)

$I_w        = $t * [math]::Pow($W,3) / 12
$delta_beam = $P * [math]::Pow($H,3) / (3*$E*$I_w)
$u_heklab   = 5.7417e-2

Write-Output ("═" * 60)
Write-Output "  MEMBRANE Q4 — ETABS vs HekatanLab vs Viga"
Write-Output ("═" * 60)
"  ETABS API       u_max = {0:e6}  ({1:f2}%)" -f $u_max, (($u_max/$u_heklab-1)*100)
"  HekatanLab Web  u_max = {0:e6}  ---" -f $u_heklab
"  Viga Euler-B    u_max = {0:e6}  ({1:f2}%)" -f $delta_beam, (($delta_beam/$u_heklab-1)*100)
"`nETABSResult_mem = {0:e6}" -f $u_max
"IndResult_mem   = {0:e6}" -f $delta_beam
"PercentDiff_mem = {0:f4}" -f (($u_max/$delta_beam)-1)
