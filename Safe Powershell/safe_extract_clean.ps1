# ============================================================================
# safe_extract_clean.ps1 - ASCII-only version (sin chars Unicode problematicos)
# Extract SAFE OAPI results from FDB or F2K file -> JSON
# ============================================================================
# Uso:
#   powershell -ExecutionPolicy Bypass -File safe_extract_clean.ps1 `
#     -ModelPath "C:\path\to\model.f2k" -OutPath "results.json"
# ============================================================================

param(
    [Parameter(Mandatory=$true)] [string] $ModelPath,
    [Parameter(Mandatory=$false)] [string] $OutPath = "safe_results.json",
    [Parameter(Mandatory=$false)] [switch] $RunAnalysis
)

$ErrorActionPreference = "Continue"

if (-not (Test-Path $ModelPath)) {
    Write-Error "No existe el archivo: $ModelPath"
    exit 1
}

$ModelPath = (Resolve-Path $ModelPath).Path
$ext = [System.IO.Path]::GetExtension($ModelPath).ToLower()

if ($ext -eq ".f2k") {
    Write-Output "[INFO] Formato .f2k detectado - forzando RunAnalysis"
    $RunAnalysis = $true
}

Write-Output "[INFO] MODEL: $ModelPath ($ext)"
Write-Output "[INFO] OUT:   $OutPath"

# Conectar a SAFE
Write-Output "[INFO] Conectando a SAFE via OAPI..."
$helper = New-Object -ComObject "SAFEv1.Helper"
$SAFEObject = $helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject")
$ret = $SAFEObject.ApplicationStart()
if ($ret -ne 0) { Write-Warning "ApplicationStart retorno $ret" }

$SapModel = $SAFEObject.SapModel

if ($ext -eq ".f2k") {
    $SapModel.InitializeNewModel(6) | Out-Null
}

Write-Output "[INFO] Abriendo $ModelPath..."
$ret = $SapModel.File.OpenFile($ModelPath)
if ($ret -ne 0) { Write-Warning "OpenFile retorno $ret" }

$SapModel.SetPresentUnits(6) | Out-Null

if ($RunAnalysis) {
    Write-Output "[INFO] Corriendo RunAnalysis..."
    $t0 = Get-Date
    $ret = $SapModel.Analyze.RunAnalysis()
    $dt = ((Get-Date) - $t0).TotalSeconds
    Write-Output ("[INFO] RunAnalysis ret={0} en {1:N1}s" -f $ret, $dt)
}

# Output JSON
$out = [ordered]@{
    source_model  = $ModelPath
    source_format = $ext
    extracted_at  = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
    units         = "tonf, m, C"
    program       = "SAFE via OAPI"
    auto_analyzed = [bool] $RunAnalysis
}

# Model counts
$nPts = 0; $ptNames = $null
try { $ret = $SapModel.PointObj.GetNameList([ref] $nPts, [ref] $ptNames) } catch {}
$nFr = 0; $frNames = $null
try { $ret = $SapModel.FrameObj.GetNameList([ref] $nFr, [ref] $frNames) } catch {}
$nAr = 0; $arNames = $null
try { $ret = $SapModel.AreaObj.GetNameList([ref] $nAr, [ref] $arNames) } catch {}
$nLP = 0; $lpNames = $null
try { $ret = $SapModel.LoadPatterns.GetNameList([ref] $nLP, [ref] $lpNames) } catch {}

$nCB = 0; $cbNames = $null
try { $ret = $SapModel.RespCombo.GetNameList([ref] $nCB, [ref] $cbNames) } catch {}

$out.model_info = [ordered]@{
    n_points = $nPts
    n_frames = $nFr
    n_areas = $nAr
    n_load_patterns = $nLP
    n_combos = $nCB
}
Write-Output "[INFO] Model: $nPts points, $nFr frames, $nAr areas, $nLP patterns, $nCB combos"

# Joint coords
$coords = @()
if ($ptNames -and $nPts -gt 0) {
    foreach ($name in $ptNames) {
        $x = [double] 0.0; $y = [double] 0.0; $z = [double] 0.0
        try {
            $ret = $SapModel.PointObj.GetCoordCartesian($name, [ref] $x, [ref] $y, [ref] $z, "Global")
            $coords += [ordered]@{ name = $name; x = $x; y = $y; z = $z }
        } catch {}
    }
}
$out.joint_coordinates = $coords

# Areas (zapatas)
$areas = @()
if ($arNames -and $nAr -gt 0) {
    foreach ($name in $arNames) {
        $nPtsArea = 0; $ptsList = $null
        try {
            $ret = $SapModel.AreaObj.GetPoints($name, [ref] $nPtsArea, [ref] $ptsList)
            $areas += [ordered]@{ name = $name; n_points = $nPtsArea; points = $ptsList }
        } catch {}
    }
}
$out.areas = $areas

# Frames (vigas amarre)
$frames = @()
if ($frNames -and $nFr -gt 0) {
    foreach ($name in $frNames) {
        $pt1 = ""; $pt2 = ""
        try {
            $ret = $SapModel.FrameObj.GetPoints($name, [ref] $pt1, [ref] $pt2)
            $frames += [ordered]@{ name = $name; pt1 = $pt1; pt2 = $pt2 }
        } catch {}
    }
}
$out.frames = $frames

# Try to extract soil pressures from "Soil Pressures" table
try {
    $SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput() | Out-Null
    if ($cbNames) {
        foreach ($cb in $cbNames) {
            try { $SapModel.Results.Setup.SetComboSelectedForOutput($cb, $true) | Out-Null } catch {}
        }
    }
    $db = $SapModel.DatabaseTables
    $tname = "Soil Pressures"
    $tver = 0; $fields = $null; $nRec = 0; $tdata = $null; $fkl = @()
    try {
        $ret = $db.GetTableForDisplayArray($tname, [ref] $fkl, "", [ref] $tver, [ref] $fields, [ref] $nRec, [ref] $tdata)
        $out.soil_pressures = [ordered]@{
            table_name = $tname
            n_records = $nRec
            fields = $fields
            sample_first_20 = if ($tdata -and $tdata.Length -gt 0) { $tdata[0..([Math]::Min(19, $tdata.Length - 1))] } else { @() }
        }
        Write-Output "[INFO] Soil Pressures: $nRec records"
    } catch {
        Write-Warning "No se pudo extraer Soil Pressures: $($_.Exception.Message)"
    }
} catch {}

# Write JSON
$out | ConvertTo-Json -Depth 10 | Out-File -FilePath $OutPath -Encoding UTF8
Write-Output "[OK] JSON guardado: $OutPath"

# Close SAFE
try { $SAFEObject.ApplicationExit($false) | Out-Null } catch {}
