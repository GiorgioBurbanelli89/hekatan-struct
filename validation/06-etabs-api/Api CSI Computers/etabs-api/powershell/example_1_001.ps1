# ETABS Example 1-001 — Portal Frame, 7 load patterns (PowerShell translation)

$APIDLLPath     = "C:\Program Files\Computers and Structures\ETABS 18\ETABSv1.dll"
$ModelDirectory = "C:\CSi_ETABS_API_Example"
if (-not (Test-Path $ModelDirectory)) { New-Item -ItemType Directory -Path $ModelDirectory | Out-Null }
$ModelPath = Join-Path $ModelDirectory "API_1-001.edb"

Add-Type -Path $APIDLLPath
$helper      = New-Object ETABSv1.Helper
$ETABSObject = $helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
$ETABSObject.ApplicationStart()
$SapModel    = $ETABSObject.SapModel

[void] $SapModel.InitializeNewModel()
[void] $SapModel.File.NewBlank()

[void] $SapModel.PropMaterial.SetMaterial("CONC", 2)
[void] $SapModel.PropMaterial.SetMPIsotropic("CONC", 3600, 0.2, 0.0000055)
[void] $SapModel.PropFrame.SetRectangle("R1", "CONC", 12, 12)

$ModValue = [double[]] @(1000, 0, 0, 1, 1, 1, 1, 1)
[void] $SapModel.PropFrame.SetModifiers("R1", [ref]$ModValue)
[void] $SapModel.SetPresentUnits(5)   # kip-ft-F

# Frames
$FrameName1 = ""; $FrameName2 = ""; $FrameName3 = ""
[void] $SapModel.FrameObj.AddByCoord(0,0,0, 0,0,10, [ref]$FrameName1, "R1", "1", "Global")
[void] $SapModel.FrameObj.AddByCoord(0,0,10, 8,0,16, [ref]$FrameName2, "R1", "2", "Global")
[void] $SapModel.FrameObj.AddByCoord(-4,0,10, 0,0,10, [ref]$FrameName3, "R1", "3", "Global")

$PointName1 = ""; $PointName2 = ""
[void] $SapModel.FrameObj.GetPoints($FrameName1, [ref]$PointName1, [ref]$PointName2)
$r_base = [bool[]] @($true,$true,$true,$true,$false,$false)
[void] $SapModel.PointObj.SetRestraint($PointName1, [ref]$r_base)

[void] $SapModel.FrameObj.GetPoints($FrameName2, [ref]$PointName1, [ref]$PointName2)
$r_top = [bool[]] @($true,$true,$false,$false,$false,$false)
[void] $SapModel.PointObj.SetRestraint($PointName2, [ref]$r_top)

[void] $SapModel.View.RefreshView(0, $false)

# 7 Load Patterns
[void] $SapModel.LoadPatterns.Add("1", 8, 1, $true)
for ($i=2; $i -le 7; $i++) { [void] $SapModel.LoadPatterns.Add($i.ToString(), 8, 0, $true) }

# LP 2
[void] $SapModel.FrameObj.GetPoints($FrameName3, [ref]$PointName1, [ref]$PointName2)
$pl = [double[]] @(0,0,-10,0,0,0)
[void] $SapModel.PointObj.SetLoadForce($PointName1, "2", [ref]$pl)
[void] $SapModel.FrameObj.SetLoadDistributed($FrameName3, "2", 1, 10, 0, 1, 1.8, 1.8)

# LP 3
[void] $SapModel.FrameObj.GetPoints($FrameName3, [ref]$PointName1, [ref]$PointName2)
$pl = [double[]] @(0,0,-17.2,0,-54.4,0)
[void] $SapModel.PointObj.SetLoadForce($PointName2, "3", [ref]$pl)

# LP 4-7
[void] $SapModel.FrameObj.SetLoadDistributed($FrameName2, "4", 1, 11, 0, 1, 2, 2)
[void] $SapModel.FrameObj.SetLoadDistributed($FrameName1, "5", 1, 2, 0, 1, 2, 2, "Local")
[void] $SapModel.FrameObj.SetLoadDistributed($FrameName2, "5", 1, 2, 0, 1, -2, -2, "Local")
[void] $SapModel.FrameObj.SetLoadDistributed($FrameName1, "6", 1, 2, 0, 1, 0.9984, 0.3744, "Local")
[void] $SapModel.FrameObj.SetLoadDistributed($FrameName2, "6", 1, 2, 0, 1, -0.3744, 0, "Local")
[void] $SapModel.FrameObj.SetLoadPoint($FrameName2, "7", 1, 2, 0.5, -15, "Local")

[void] $SapModel.SetPresentUnits(1)   # kip-in-F
[void] $SapModel.File.Save($ModelPath)
[void] $SapModel.Analyze.RunAnalysis()

# Resultados
$ETABSResult = New-Object double[] 7
[void] $SapModel.FrameObj.GetPoints($FrameName2, [ref]$PointName1, [ref]$PointName2)

for ($i=1; $i -le 7; $i++) {
    $NumRes = 0; $Obj=$Elm=$ACase=$StepType=@(); $StepNum=$U1=$U2=$U3=$R1=$R2=$R3=@()
    [void] $SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
    [void] $SapModel.Results.Setup.SetCaseSelectedForOutput($i.ToString())
    $target = if ($i -le 4) { $PointName2 } else { $PointName1 }
    [void] $SapModel.Results.JointDispl($target, 0, [ref]$NumRes,
        [ref]$Obj, [ref]$Elm, [ref]$ACase, [ref]$StepType, [ref]$StepNum,
        [ref]$U1, [ref]$U2, [ref]$U3, [ref]$R1, [ref]$R2, [ref]$R3)
    $ETABSResult[$i-1] = if ($i -le 4) { $U3[0] } else { $U1[0] }
}
[void] $ETABSObject.ApplicationExit($false)

$IndResult = [double[]] @(-0.02639, 0.06296, 0.06296, -0.2963, 0.3125, 0.11556, 0.00651)
$PercentDiff = New-Object double[] 7
for ($i=0; $i -lt 7; $i++) {
    $PercentDiff[$i] = ($ETABSResult[$i] / $IndResult[$i]) - 1
}

Write-Output ("═" * 60)
Write-Output "  ETABS Example 1-001 (PowerShell)"
Write-Output ("═" * 60)
"  {0,-7}{1,-16}{2,-16}{3}" -f "Case", "ETABSResult", "IndResult", "PercentDiff"
for ($i=0; $i -lt 7; $i++) {
    "  {0,-7}{1,14:f6}  {2,14:f6}  {3,+10:f4}%" -f ($i+1), $ETABSResult[$i], $IndResult[$i], ($PercentDiff[$i]*100)
}
$maxDiff = ($PercentDiff | ForEach-Object { [math]::Abs($_) } | Measure-Object -Maximum).Maximum
"`n  Max |PercentDiff| = {0:f4}%" -f ($maxDiff*100)
