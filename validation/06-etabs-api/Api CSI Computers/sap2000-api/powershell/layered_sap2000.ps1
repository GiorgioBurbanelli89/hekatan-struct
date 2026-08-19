# Layered Plate [0/90/90/0] — SAP2000 API (PowerShell) — FE04

$APIDLLPath     = "C:\Program Files\Computers and Structures\SAP2000 21\SAP2000v1.dll"
$ModelDirectory = "C:\CSi_SAP2000_API_Layered"
if (-not (Test-Path $ModelDirectory)) { New-Item -ItemType Directory -Path $ModelDirectory | Out-Null }
$ModelPath = Join-Path $ModelDirectory "plate_layered.sdb"

$W_m, $H_m       = 1.0, 1.0
$E_m, $nu_m, $q  = 30000, 0.2, 1.0
$nx, $ny         = 4, 4
$nLayers         = 4
$layerThick      = 0.05
$layerAngles     = @(0, 90, 90, 0)
$tTotal          = $nLayers * $layerThick
$layerDistance   = New-Object double[] $nLayers
$zEdge           = -$tTotal / 2
for ($k=0; $k -lt $nLayers; $k++) {
    $layerDistance[$k] = $zEdge + $layerThick/2
    $zEdge += $layerThick
}

Add-Type -Path $APIDLLPath
$helper    = New-Object SAP2000v1.Helper
$SapObject = $helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
$SapObject.ApplicationStart()
$SapModel  = $SapObject.SapModel
[void] $SapModel.InitializeNewModel(6)
[void] $SapModel.File.NewBlank()

[void] $SapModel.PropMaterial.SetMaterial("LAYER_MAT", 2)
[void] $SapModel.PropMaterial.SetMPIsotropic("LAYER_MAT", $E_m, $nu_m, 0)
[void] $SapModel.PropArea.SetShell_1("PLATE_LAYERED", 1, $false, "LAYER_MAT", 0, $tTotal, $tTotal)

# Definir capas
$LayerName    = [string[]] @("L1","L2","L3","L4")
$DistArr      = [double[]] $layerDistance
$ThickArr     = [double[]] @($layerThick, $layerThick, $layerThick, $layerThick)
$MyType       = [int[]] @(1, 1, 1, 1)
$NumIntegPts  = [int[]] @(3, 3, 3, 3)
$MatPropArr   = [string[]] @("LAYER_MAT","LAYER_MAT","LAYER_MAT","LAYER_MAT")
$MatAngleArr  = [double[]] $layerAngles
$S11Type      = [int[]] @(1, 1, 1, 1)
$S22Type      = [int[]] @(1, 1, 1, 1)
$S12Type      = [int[]] @(1, 1, 1, 1)
[void] $SapModel.PropArea.SetShellLayer_1("PLATE_LAYERED", $nLayers,
    [ref]$LayerName, [ref]$DistArr, [ref]$ThickArr, [ref]$MyType,
    [ref]$NumIntegPts, [ref]$MatPropArr, [ref]$MatAngleArr,
    [ref]$S11Type, [ref]$S22Type, [ref]$S12Type)

# Malla
$dx = $W_m/$nx; $dy = $H_m/$ny
for ($jj = 0; $jj -lt $ny; $jj++) {
    for ($ii = 0; $ii -lt $nx; $ii++) {
        $X = [double[]] @($ii*$dx, ($ii+1)*$dx, ($ii+1)*$dx, $ii*$dx)
        $Y = [double[]] @($jj*$dy, $jj*$dy, ($jj+1)*$dy, ($jj+1)*$dy)
        $Z = [double[]] @(0.0,0.0,0.0,0.0)
        $name = ""
        [void] $SapModel.AreaObj.AddByCoord(4, [ref]$X, [ref]$Y, [ref]$Z, [ref]$name, "PLATE_LAYERED", "", "Global")
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

$D_ref   = $E_m * [math]::Pow($tTotal,3) / (12*(1-$nu_m*$nu_m))
$w_navier = 0.00406 * $q * [math]::Pow($W_m,4) / $D_ref

Write-Output ("═" * 60)
Write-Output "  LAYERED [0/90/90/0] — SAP2000 vs Navier isotrópica"
Write-Output ("═" * 60)
"  SAP2000 API       w_max = {0:e6}" -f $w_max_sap
"  Navier iso        w_max = {0:e6}" -f $w_navier
"  Diff = {0:f2}%" -f ((($w_max_sap/$w_navier)-1)*100)
"`nSapResult_lay = {0:e6}" -f $w_max_sap
"IndResult_lay = {0:e6}" -f $w_navier
"PercentDiff_lay = {0:f4}" -f (($w_max_sap/$w_navier)-1)
