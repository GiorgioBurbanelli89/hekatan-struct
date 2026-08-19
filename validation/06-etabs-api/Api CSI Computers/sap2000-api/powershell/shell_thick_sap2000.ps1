# Shell Thick Cantilever — SAP2000 API (PowerShell) — FE06

$APIDLLPath     = "C:\Program Files\Computers and Structures\SAP2000 21\SAP2000v1.dll"
$ModelDirectory = "C:\CSi_SAP2000_API_ShellThick"
if (-not (Test-Path $ModelDirectory)) { New-Item -ItemType Directory -Path $ModelDirectory | Out-Null }
$ModelPath = Join-Path $ModelDirectory "shell_thick.sdb"

$E, $nu, $t = 200000, 0.3, 0.05
$W, $H, $P  = 0.5, 0.5, 100
$nx, $ny    = 3, 3

Add-Type -Path $APIDLLPath
$helper    = New-Object SAP2000v1.Helper
$SapObject = $helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
$SapObject.ApplicationStart()
$SapModel = $SapObject.SapModel
[void] $SapModel.InitializeNewModel(6)
[void] $SapModel.File.NewBlank()

[void] $SapModel.PropMaterial.SetMaterial("SHELL_MAT", 1)
[void] $SapModel.PropMaterial.SetMPIsotropic("SHELL_MAT", $E, $nu, 0)
[void] $SapModel.PropArea.SetShell_1("SHELL_THICK", 1, $false, "SHELL_MAT", 0, $t, $t)

$dx = $W/$nx; $dy = $H/$ny
for ($jj=0; $jj -lt $ny; $jj++) {
    for ($ii=0; $ii -lt $nx; $ii++) {
        $X = [double[]] @($ii*$dx, ($ii+1)*$dx, ($ii+1)*$dx, $ii*$dx)
        $Y = [double[]] @($jj*$dy, $jj*$dy, ($jj+1)*$dy, ($jj+1)*$dy)
        $Z = [double[]] @(0.0,0.0,0.0,0.0)
        $name = ""
        [void] $SapModel.AreaObj.AddByCoord(4, [ref]$X, [ref]$Y, [ref]$Z, [ref]$name, "SHELL_THICK", "", "Global")
    }
}

$NumberPoints = 0; $PointNames = [string[]]@()
[void] $SapModel.PointObj.GetNameList([ref]$NumberPoints, [ref]$PointNames)
$Rfix = [bool[]] @($true,$true,$true,$true,$true,$true)
foreach ($p in $PointNames) {
    $X=0.0; $Y=0.0; $Z=0.0
    [void] $SapModel.PointObj.GetCoordCartesian($p, [ref]$X, [ref]$Y, [ref]$Z)
    if ([math]::Abs($X) -lt 1e-6) {
        [void] $SapModel.PointObj.SetRestraint($p, [ref]$Rfix)
    }
}

[void] $SapModel.LoadPatterns.Add("P", 8, 0, $true)
$P_per = $P / ($ny + 1)
foreach ($p in $PointNames) {
    $X=0.0; $Y=0.0; $Z=0.0
    [void] $SapModel.PointObj.GetCoordCartesian($p, [ref]$X, [ref]$Y, [ref]$Z)
    if ([math]::Abs($X - $W) -lt 1e-6) {
        $pl = [double[]] @($P_per,0.0,0.0,0.0,0.0,0.0)
        [void] $SapModel.PointObj.SetLoadForce($p, "P", [ref]$pl, $false, "Global")
    }
}

[void] $SapModel.File.Save($ModelPath)
[void] $SapModel.Analyze.RunAnalysis()
[void] $SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
[void] $SapModel.Results.Setup.SetCaseSelectedForOutput("P")

$u_max_sap = 0.0
foreach ($p in $PointNames) {
    $NumRes = 0
    $Obj=$Elm=$ACase=$StepType=@(); $StepNum=$U1=$U2=$U3=$R1=$R2=$R3=@()
    [void] $SapModel.Results.JointDispl($p, 0, [ref]$NumRes,
        [ref]$Obj, [ref]$Elm, [ref]$ACase, [ref]$StepType, [ref]$StepNum,
        [ref]$U1, [ref]$U2, [ref]$U3, [ref]$R1, [ref]$R2, [ref]$R3)
    if ($NumRes -gt 0 -and [math]::Abs($U1[0]) -gt $u_max_sap) {
        $u_max_sap = [math]::Abs($U1[0])
    }
}
[void] $SapObject.ApplicationExit($false)

$delta_mem = $P * $W / ($E * $H * $t)
$u_heklab  = 1.2528e-2

Write-Output ("═" * 60)
Write-Output "  SHELL THICK (ShellType=1) — SAP2000 vs HekatanLab vs Membrana"
Write-Output ("═" * 60)
"  SAP2000 API     u_max = {0:e6}  ({1:f2}%)" -f $u_max_sap, (($u_max_sap/$u_heklab-1)*100)
"  HekatanLab Web  u_max = {0:e6}  ---" -f $u_heklab
"  Membrana axial  u_max = {0:e6}  ({1:f2}%)" -f $delta_mem, (($delta_mem/$u_heklab-1)*100)
"`nSapResult_sthk = {0:e6}" -f $u_max_sap
"IndResult_sthk = {0:e6}" -f $delta_mem
"PercentDiff_sthk = {0:f4}" -f (($u_max_sap/$delta_mem)-1)
