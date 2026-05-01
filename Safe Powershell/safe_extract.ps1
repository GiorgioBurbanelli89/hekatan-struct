# ============================================================================
# safe_extract.ps1 — CLI PowerShell para extraer resultados de SAFE OAPI
# ============================================================================
# Uso:
#   powershell -ExecutionPolicy Bypass -File safe_extract.ps1 `
#     -ModelPath "ruta\al\modelo.FDB" -OutPath "resultados.json"
#   powershell -ExecutionPolicy Bypass -File safe_extract.ps1 `
#     -ModelPath "ruta\al\modelo.f2k" -OutPath "resultados.json"
#
# Auto-detecta formato:
#   .FDB  → modelo binario (puede o no estar analizado, usar -RunAnalysis si no)
#   .f2k  → modelo en TEXTO, fuerza -RunAnalysis automaticamente
#
# Requiere: SAFE 16+ instalado. Sin Python, sin .NET extra.
# Tipico para: cimentaciones (zapatas, vigas amarre, losa raft, slabs Winkler).
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
    Write-Output "[INFO] Formato .f2k detectado — forzando RunAnalysis"
    $RunAnalysis = $true
}

Write-Output "[INFO] MODEL: $ModelPath ($ext)"
Write-Output "[INFO] OUT:   $OutPath"

# === 1. Conectar a SAFE via COM ============================================
# Nota: aunque dice "SAFE", el ProgID es CSI.SAFE.API.ETABSObject (legacy de
# CSI — todos los productos exponen el "SapModel" via clase ETABSObject-like).
Write-Output "[INFO] Conectando a SAFE via OAPI..."
$helper = New-Object -ComObject "SAFEv1.Helper"
$SAFEObject = $helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject")
$ret = $SAFEObject.ApplicationStart()
if ($ret -ne 0) { Write-Warning "ApplicationStart retorno $ret" }

$SapModel = $SAFEObject.SapModel

if ($ext -eq ".f2k") {
    $SapModel.InitializeNewModel(6) | Out-Null
}

# === 2. Abrir / importar archivo ===========================================
Write-Output "[INFO] Abriendo $ModelPath..."
$ret = $SapModel.File.OpenFile($ModelPath)
if ($ret -ne 0) { Write-Warning "OpenFile retorno $ret" }

$SapModel.SetPresentUnits(6) | Out-Null

# === 3. Run analysis si se pidio ===========================================
if ($RunAnalysis) {
    Write-Output "[INFO] Corriendo RunAnalysis..."
    $t0 = Get-Date
    $ret = $SapModel.Analyze.RunAnalysis()
    $dt = ((Get-Date) - $t0).TotalSeconds
    Write-Output ("[INFO] RunAnalysis ret={0} en {1:N1}s" -f $ret, $dt)
}

# === 4. Inicializar output =================================================
$out = [ordered]@{
    source_model  = $ModelPath
    source_format = $ext
    extracted_at  = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
    units         = "kN, m, C"
    program       = "SAFE via OAPI"
    auto_analyzed = [bool] $RunAnalysis
}

# === 5. Model info =========================================================
Write-Output "[INFO] Extrayendo model info..."

$nPts = 0; $ptNames = $null
try { $ret = $SapModel.PointObj.GetNameList([ref] $nPts, [ref] $ptNames) } catch {}

$nFr = 0; $frNames = $null
try { $ret = $SapModel.FrameObj.GetNameList([ref] $nFr, [ref] $frNames) } catch {}

$nAr = 0; $arNames = $null
try { $ret = $SapModel.AreaObj.GetNameList([ref] $nAr, [ref] $arNames) } catch {}

$nLP = 0; $lpNames = $null
try { $ret = $SapModel.LoadPatterns.GetNameList([ref] $nLP, [ref] $lpNames) } catch {}

# Iterar tipos de case
$nLC = 0; $lcNames = @()
$caseTypes = @(1, 2, 3, 4, 6, 9)
foreach ($t in $caseTypes) {
    $nT = 0; $namesT = $null
    try {
        $ret = $SapModel.LoadCases.GetNameList([ref] $nT, [ref] $namesT, $t)
        if ($nT -gt 0 -and $namesT) {
            foreach ($n in $namesT) { $lcNames += $n }
            $nLC += $nT
        }
    } catch {}
}

$nCB = 0; $cbNames = $null
try { $ret = $SapModel.RespCombo.GetNameList([ref] $nCB, [ref] $cbNames) } catch {}

$out.model_info = [ordered]@{
    n_points = $nPts; n_frames = $nFr; n_areas = $nAr
    n_load_patterns = $nLP; n_load_cases = $nLC; n_combos = $nCB
    load_patterns = $lpNames; load_cases = $lcNames; combos = $cbNames
}
Write-Output "[INFO] Model: $nPts points, $nFr frames, $nAr areas, $nLC cases, $nCB combos"

# === 6. Joint coordinates ==================================================
Write-Output "[INFO] Extrayendo coordenadas de nodos..."
$coords = @()
if ($ptNames -and $nPts -gt 0) {
    foreach ($name in $ptNames) {
        $x = [double] 0.0; $y = [double] 0.0; $z = [double] 0.0
        try {
            $ret = $SapModel.PointObj.GetCoordCartesian($name, [ref] $x, [ref] $y, [ref] $z, "Global")
            $coords += [ordered]@{ name = $name; x = $x; y = $y; z = $z }
        } catch {
            try {
                $ret = $SapModel.PointObj.GetCoordCartesian($name, [ref] $x, [ref] $y, [ref] $z)
                $coords += [ordered]@{ name = $name; x = $x; y = $y; z = $z }
            } catch {}
        }
    }
}
$out.joint_coordinates = $coords
Write-Output "[INFO] $($coords.Count) coords extraidas"

# === 7. Seleccionar casos ==================================================
Write-Output "[INFO] Seleccionando casos para output..."
try { $SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput() | Out-Null } catch {}
$selCases = 0; $selCombos = 0
foreach ($lc in $lcNames) {
    try { $SapModel.Results.Setup.SetCaseSelectedForOutput($lc, $true) | Out-Null; $selCases++ } catch {}
}
if ($cbNames) {
    foreach ($cb in $cbNames) {
        try { $SapModel.Results.Setup.SetComboSelectedForOutput($cb, $true) | Out-Null; $selCombos++ } catch {}
    }
}
Write-Output "[INFO] Seleccionados: $selCases cases + $selCombos combos"

# === 8. Joint Reactions ====================================================
Write-Output "[INFO] Extrayendo joint reactions..."
$Num = 0; $Obj = $Elm = $LC = $StepType = $StepNum = $null
$F1 = $F2 = $F3 = $M1 = $M2 = $M3 = $null
$reactions = @()
try {
    $ret = $SapModel.Results.JointReact("All", 2,
        [ref] $Num, [ref] $Obj, [ref] $Elm, [ref] $LC,
        [ref] $StepType, [ref] $StepNum,
        [ref] $F1, [ref] $F2, [ref] $F3,
        [ref] $M1, [ref] $M2, [ref] $M3)
    for ($i = 0; $i -lt $Num; $i++) {
        $reactions += [ordered]@{
            joint = $Obj[$i]; load_case = $LC[$i]; step_num = $StepNum[$i]
            Fx = $F1[$i]; Fy = $F2[$i]; Fz = $F3[$i]
            Mx = $M1[$i]; My = $M2[$i]; Mz = $M3[$i]
        }
    }
    Write-Output "[INFO] $Num reactions extraidas"
} catch { Write-Warning "JointReact: $($_.Exception.Message)" }
$out.joint_reactions = $reactions

# === 9. Joint Displacements ================================================
Write-Output "[INFO] Extrayendo joint displacements..."
$Num = 0; $Obj = $Elm = $LC = $StepType = $StepNum = $null
$U1 = $U2 = $U3 = $R1 = $R2 = $R3 = $null
$displ = @()
try {
    $ret = $SapModel.Results.JointDispl("All", 2,
        [ref] $Num, [ref] $Obj, [ref] $Elm, [ref] $LC,
        [ref] $StepType, [ref] $StepNum,
        [ref] $U1, [ref] $U2, [ref] $U3,
        [ref] $R1, [ref] $R2, [ref] $R3)
    for ($i = 0; $i -lt $Num; $i++) {
        $displ += [ordered]@{
            joint = $Obj[$i]; load_case = $LC[$i]
            Ux = $U1[$i]; Uy = $U2[$i]; Uz = $U3[$i]
            Rx = $R1[$i]; Ry = $R2[$i]; Rz = $R3[$i]
        }
    }
    Write-Output "[INFO] $Num displacements extraidos"
} catch { Write-Warning "JointDispl: $($_.Exception.Message)" }
$out.joint_displacements = $displ

# === 10. Soil Pressure (presion de contacto Winkler) ⭐ ====================
# Lo MAS RELEVANTE en SAFE — la razon de existir del software.
Write-Output "[INFO] Extrayendo presion de contacto del suelo (Winkler)..."
$Num = 0
$Obj = $Elm = $PointElm = $LC = $StepType = $StepNum = $null
$Pressure = $null
$soilPress = @()
try {
    # AreaJointForce + soil pressure subtable
    $ret = $SapModel.Results.AreaJointForceShell("All", 2,
        [ref] $Num, [ref] $Obj, [ref] $Elm, [ref] $PointElm,
        [ref] $LC, [ref] $StepType, [ref] $StepNum,
        [ref] $Pressure)
    $sample = [Math]::Min($Num, 2000)
    for ($i = 0; $i -lt $sample; $i++) {
        $soilPress += [ordered]@{
            area = $Obj[$i]; point = $PointElm[$i]; load_case = $LC[$i]
            pressure = $Pressure[$i]
        }
    }
    Write-Output "[INFO] $Num soil pressures extraidas (guardadas $sample)"
    $out.soil_pressure_count = $Num
    $out.soil_pressure_sample = $soilPress
} catch {
    Write-Warning "AreaJointForceShell: $($_.Exception.Message)"
}

# === 11. Area Force Shell (M11/M22/M12 — momentos en losa) ⭐⭐ ============
# Critico para diseño de zapatas y losas — Mxx para refuerzo top/bot.
Write-Output "[INFO] Extrayendo area force shell (M11/M22 momentos)..."
$Num = 0
$Obj = $Elm = $PointElm = $LC = $StepType = $StepNum = $null
$F11 = $F22 = $F12 = $FMax = $FMin = $FAngle = $FVM = $null
$M11 = $M22 = $M12 = $MMax = $MMin = $MAngle = $null
$V13 = $V23 = $VMax = $VAngle = $null
$areaForces = @()
try {
    $ret = $SapModel.Results.AreaForceShell("All", 2,
        [ref] $Num, [ref] $Obj, [ref] $Elm, [ref] $PointElm,
        [ref] $LC, [ref] $StepType, [ref] $StepNum,
        [ref] $F11, [ref] $F22, [ref] $F12, [ref] $FMax, [ref] $FMin, [ref] $FAngle, [ref] $FVM,
        [ref] $M11, [ref] $M22, [ref] $M12, [ref] $MMax, [ref] $MMin, [ref] $MAngle,
        [ref] $V13, [ref] $V23, [ref] $VMax, [ref] $VAngle)
    $sample = [Math]::Min($Num, 2000)
    for ($i = 0; $i -lt $sample; $i++) {
        $areaForces += [ordered]@{
            area = $Obj[$i]; point = $PointElm[$i]; load_case = $LC[$i]
            F11 = $F11[$i]; F22 = $F22[$i]; F12 = $F12[$i]; FvM = $FVM[$i]
            M11 = $M11[$i]; M22 = $M22[$i]; M12 = $M12[$i]
            V13 = $V13[$i]; V23 = $V23[$i]
        }
    }
    Write-Output "[INFO] $Num area forces extraidas (guardadas $sample primeras)"
    $out.area_forces_count = $Num
    $out.area_forces_sample = $areaForces
} catch { Write-Warning "AreaForceShell: $($_.Exception.Message)" }

# === 12. Frame Forces (vigas de amarre, vigas de cimentacion) ============
Write-Output "[INFO] Extrayendo frame forces (vigas de amarre)..."
$Num = 0; $Obj = $ObjSta = $Elm = $ElmSta = $LC = $StepType = $StepNum = $null
$P = $V2 = $V3 = $T = $M2 = $M3 = $null
$frFc = @()
try {
    $ret = $SapModel.Results.FrameForce("All", 2,
        [ref] $Num, [ref] $Obj, [ref] $ObjSta, [ref] $Elm, [ref] $ElmSta,
        [ref] $LC, [ref] $StepType, [ref] $StepNum,
        [ref] $P, [ref] $V2, [ref] $V3, [ref] $T, [ref] $M2, [ref] $M3)
    $sample = [Math]::Min($Num, 1000)
    for ($i = 0; $i -lt $sample; $i++) {
        $frFc += [ordered]@{
            frame = $Obj[$i]; station = $ObjSta[$i]; load_case = $LC[$i]
            P = $P[$i]; V2 = $V2[$i]; V3 = $V3[$i]
            T = $T[$i]; M2 = $M2[$i]; M3 = $M3[$i]
        }
    }
    Write-Output "[INFO] $Num frame forces extraidas (guardadas $sample primeras)"
    $out.frame_forces_count = $Num
    $out.frame_forces_sample = $frFc
} catch { Write-Warning "FrameForce: $($_.Exception.Message)" }

# === 13. Base Reactions ====================================================
Write-Output "[INFO] Extrayendo base reactions totales..."
$Num = 0; $LC = $StepType = $StepNum = $null
$Fx = $Fy = $Fz = $Mx = $My = $Mz = $null
$gx = $gy = $gz = $null
$base = @()
try {
    $ret = $SapModel.Results.BaseReact(
        [ref] $Num, [ref] $LC, [ref] $StepType, [ref] $StepNum,
        [ref] $Fx, [ref] $Fy, [ref] $Fz, [ref] $Mx, [ref] $My, [ref] $Mz,
        [ref] $gx, [ref] $gy, [ref] $gz)
    for ($i = 0; $i -lt $Num; $i++) {
        $base += [ordered]@{
            load_case = $LC[$i]
            Fx_total = $Fx[$i]; Fy_total = $Fy[$i]; Fz_total = $Fz[$i]
            Mx_total = $Mx[$i]; My_total = $My[$i]; Mz_total = $Mz[$i]
        }
    }
    Write-Output "[INFO] $Num base reactions extraidas"
} catch { Write-Warning "BaseReact: $($_.Exception.Message)" }
$out.base_reactions = $base

# === 14. Escribir JSON =====================================================
Write-Output "[INFO] Serializando JSON..."
$json = $out | ConvertTo-Json -Depth 10
Set-Content -Path $OutPath -Value $json -Encoding UTF8
$size = (Get-Item $OutPath).Length / 1024
Write-Output ("[OK] JSON guardado en {0} ({1:N1} KB)" -f (Resolve-Path $OutPath), $size)

# === 15. Cerrar SAFE =======================================================
Write-Output "[INFO] Cerrando SAFE..."
$SAFEObject.ApplicationExit($false) | Out-Null
Write-Output "[DONE]"
