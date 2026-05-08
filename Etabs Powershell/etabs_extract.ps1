# ============================================================================
# etabs_extract.ps1 — CLI PowerShell para extraer resultados de ETABS via OAPI
# ============================================================================
# Uso:
#   powershell -ExecutionPolicy Bypass -File etabs_extract.ps1 `
#     -ModelPath "ruta\al\modelo.EDB" -OutPath "resultados.json"
#   powershell -ExecutionPolicy Bypass -File etabs_extract.ps1 `
#     -ModelPath "ruta\al\modelo.e2k" -OutPath "resultados.json"
#
# Auto-detecta formato:
#   .EDB  → modelo binario (puede o no estar analizado, usar -RunAnalysis si no)
#   .e2k  → modelo en TEXTO, fuerza -RunAnalysis automaticamente
#
# Requiere: ETABS instalado (cualquier version 17+). Sin Python, sin .NET extra.
# Output: JSON con todos los resultados clave para benchmark contra hekatan-fem.
# ============================================================================

param(
    [Parameter(Mandatory=$true, ParameterSetName="Model")] [string] $ModelPath,
    [Parameter(Mandatory=$false, ParameterSetName="Edb")]   [string] $EdbPath,
    [Parameter(Mandatory=$false)] [string] $OutPath = "etabs_results.json",
    [Parameter(Mandatory=$false)] [switch] $RunAnalysis
)

$ErrorActionPreference = "Continue"

# Backward compat: -EdbPath sigue funcionando
if (-not $ModelPath -and $EdbPath) { $ModelPath = $EdbPath }
if (-not $ModelPath) { Write-Error "Pasa -ModelPath con la ruta al .EDB o .e2k"; exit 1 }

if (-not (Test-Path $ModelPath)) {
    Write-Error "No existe el archivo: $ModelPath"
    exit 1
}

$ModelPath = (Resolve-Path $ModelPath).Path
$ext = [System.IO.Path]::GetExtension($ModelPath).ToLower()

# Auto-forzar RunAnalysis si es .e2k (texto, no analizado)
if ($ext -eq ".e2k") {
    Write-Output "[INFO] Formato .e2k detectado — forzando RunAnalysis"
    $RunAnalysis = $true
}

Write-Output "[INFO] MODEL: $ModelPath ($ext)"
Write-Output "[INFO] OUT:   $OutPath"

# === 1. Conectar a ETABS via COM ===========================================
Write-Output "[INFO] Conectando a ETABS via OAPI..."
$helper = New-Object -ComObject "ETABSv1.Helper"
$ETABSObject = $helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
$ret = $ETABSObject.ApplicationStart()
if ($ret -ne 0) { Write-Warning "ApplicationStart retorno $ret" }

$SapModel = $ETABSObject.SapModel

# Si vamos a importar .e2k, inicializar modelo blank primero
if ($ext -eq ".e2k") {
    $SapModel.InitializeNewModel(6) | Out-Null
}

# === 2. Abrir archivo y configurar unidades ===============================
# OpenFile auto-detecta formato por extension (.EDB binario / .e2k texto)
Write-Output "[INFO] Abriendo $ModelPath..."
$ret = $SapModel.File.OpenFile($ModelPath)
if ($ret -ne 0) { Write-Warning "OpenFile retorno $ret" }

# Unidades: kN, m, C  (eUnits_kN_m_C = 6)
$SapModel.SetPresentUnits(6) | Out-Null

# Si importamos un .e2k, ETABS necesita el modelo guardado como .EDB binario
# para poder correr el analisis. Hacemos SaveAs hacia el mismo nombre con .EDB.
if ($ext -eq ".e2k") {
    $edbPath = [System.IO.Path]::ChangeExtension($ModelPath, ".EDB")
    Write-Output "[INFO] Guardando como .EDB: $edbPath"
    try {
        $ret = $SapModel.File.Save($edbPath)
        if ($ret -ne 0) { Write-Warning "File.Save retorno $ret" }
    } catch { Write-Warning "File.Save excepcion: $($_.Exception.Message)" }
}

# === 3. Run analysis si se pidio ==========================================
if ($RunAnalysis) {
    Write-Output "[INFO] Corriendo RunAnalysis..."
    $t0 = Get-Date
    $ret = $SapModel.Analyze.RunAnalysis()
    $dt = ((Get-Date) - $t0).TotalSeconds
    Write-Output ("[INFO] RunAnalysis ret={0} en {1:N1}s" -f $ret, $dt)
    if ($ret -ne 0) {
        Write-Warning "RunAnalysis fallo (ret=$ret). Reintentando despues de Save..."
        try {
            $SapModel.File.Save($edbPath) | Out-Null
            $ret = $SapModel.Analyze.RunAnalysis()
            Write-Output "[INFO] Reintento RunAnalysis ret=$ret"
        } catch {}
    }
}

# === 4. Inicializar output ================================================
$out = [ordered]@{
    source_edb    = $EdbPath
    extracted_at  = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
    units         = "kN, m, C"
    program       = "ETABS via OAPI"
}

# === 5. Model info ========================================================
Write-Output "[INFO] Extrayendo model info..."

# Helper para llamadas que devuelven multiples values con ByRef
$nPts = 0; $ptNames = $null
try {
    $ret = $SapModel.PointObj.GetNameList([ref] $nPts, [ref] $ptNames)
} catch { $nPts = 0 }

$nFr = 0; $frNames = $null
try {
    $ret = $SapModel.FrameObj.GetNameList([ref] $nFr, [ref] $frNames)
} catch { $nFr = 0 }

$nAr = 0; $arNames = $null
try {
    $ret = $SapModel.AreaObj.GetNameList([ref] $nAr, [ref] $arNames)
} catch { $nAr = 0 }

$nLP = 0; $lpNames = $null
try {
    $ret = $SapModel.LoadPatterns.GetNameList([ref] $nLP, [ref] $lpNames)
} catch { $nLP = 0 }

$nLC = 0; $lcNames = @()
# OAPI requiere iterar TODOS los tipos de case porque GetNameList sin tipo NO lista todo.
# Tipos: 1=LinearStatic, 2=NonlinearStatic, 3=ModalRitz, 4=ResponseSpectrum,
#        6=LinearTimeHistory, 9=Modal
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
try {
    $ret = $SapModel.RespCombo.GetNameList([ref] $nCB, [ref] $cbNames)
} catch { $nCB = 0 }

$out.model_info = [ordered]@{
    n_points           = $nPts
    n_frames           = $nFr
    n_areas            = $nAr
    n_load_patterns    = $nLP
    n_load_cases       = $nLC
    n_combos           = $nCB
    load_patterns      = $lpNames
    load_cases         = $lcNames
    combos             = $cbNames
}

Write-Output "[INFO] Model: $nPts points, $nFr frames, $nAr areas, $nLC cases, $nCB combos"

# === 6. Joint coordinates =================================================
Write-Output "[INFO] Extrayendo coordenadas de nodos..."
$coords = @()
if ($ptNames -and $nPts -gt 0) {
    foreach ($name in $ptNames) {
        # OAPI: GetCoordCartesian(Name, ref x, ref y, ref z, [CSys="Global"])
        # PowerShell COM requiere todos los args, incluido el opcional.
        $x = [double] 0.0; $y = [double] 0.0; $z = [double] 0.0
        try {
            $ret = $SapModel.PointObj.GetCoordCartesian($name, [ref] $x, [ref] $y, [ref] $z, "Global")
            $coords += [ordered]@{ name = $name; x = $x; y = $y; z = $z }
        } catch {
            # Fallback sin el arg CSys
            try {
                $ret = $SapModel.PointObj.GetCoordCartesian($name, [ref] $x, [ref] $y, [ref] $z)
                $coords += [ordered]@{ name = $name; x = $x; y = $y; z = $z }
            } catch {}
        }
    }
}
$out.joint_coordinates = $coords
Write-Output "[INFO] $($coords.Count) coords extraidas"

# === 7. Configurar output: seleccionar todos los casos ====================
# OAPI requiere 2 args: SetCaseSelectedForOutput(name, Selected=true)
# PowerShell COM no aplica defaults — hay que pasar ambos explícitamente.
Write-Output "[INFO] Seleccionando casos para output..."
try { $SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput() | Out-Null } catch {}
$selCases = 0; $selCombos = 0
if ($lcNames) {
    foreach ($lc in $lcNames) {
        try {
            $SapModel.Results.Setup.SetCaseSelectedForOutput($lc, $true) | Out-Null
            $selCases++
        } catch { Write-Warning "SetCase $lc : $($_.Exception.Message)" }
    }
}
if ($cbNames) {
    foreach ($cb in $cbNames) {
        try {
            $SapModel.Results.Setup.SetComboSelectedForOutput($cb, $true) | Out-Null
            $selCombos++
        } catch { Write-Warning "SetCombo $cb : $($_.Exception.Message)" }
    }
}
Write-Output "[INFO] Seleccionados: $selCases cases + $selCombos combos para output"

# === 8. Joint Reactions ===================================================
Write-Output "[INFO] Extrayendo joint reactions..."
$Num = 0; $Obj = $null; $Elm = $null; $LC = $null
$StepType = $null; $StepNum = $null
$F1 = $null; $F2 = $null; $F3 = $null
$M1 = $null; $M2 = $null; $M3 = $null
$reactions = @()
try {
    # ItemTypeElm=2 (GroupElm), Name="All" (group por defecto que ETABS crea)
    $ret = $SapModel.Results.JointReact("All", 2,
        [ref] $Num, [ref] $Obj, [ref] $Elm, [ref] $LC,
        [ref] $StepType, [ref] $StepNum,
        [ref] $F1, [ref] $F2, [ref] $F3,
        [ref] $M1, [ref] $M2, [ref] $M3)
    for ($i = 0; $i -lt $Num; $i++) {
        $reactions += [ordered]@{
            joint = $Obj[$i]
            load_case = $LC[$i]
            step_num = $StepNum[$i]
            Fx = $F1[$i]; Fy = $F2[$i]; Fz = $F3[$i]
            Mx = $M1[$i]; My = $M2[$i]; Mz = $M3[$i]
        }
    }
    Write-Output "[INFO] $Num reactions extraidas"
} catch {
    Write-Warning "JointReact: $($_.Exception.Message)"
}
$out.joint_reactions = $reactions

# === 9. Joint Displacements ===============================================
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
            joint = $Obj[$i]
            load_case = $LC[$i]
            Ux = $U1[$i]; Uy = $U2[$i]; Uz = $U3[$i]
            Rx = $R1[$i]; Ry = $R2[$i]; Rz = $R3[$i]
        }
    }
    Write-Output "[INFO] $Num displacements extraidos"
} catch {
    Write-Warning "JointDispl: $($_.Exception.Message)"
}
$out.joint_displacements = $displ

# === 10. Modal Periods ====================================================
Write-Output "[INFO] Extrayendo modal periods..."
$Num = 0; $LC = $StepType = $StepNum = $Period = $null
$Frequency = $CircFreq = $EigenValue = $null
$modal = @()
try {
    $ret = $SapModel.Results.ModalPeriod(
        [ref] $Num, [ref] $LC, [ref] $StepType, [ref] $StepNum,
        [ref] $Period, [ref] $Frequency, [ref] $CircFreq, [ref] $EigenValue)
    for ($i = 0; $i -lt $Num; $i++) {
        $modal += [ordered]@{
            case = $LC[$i]
            mode = [int] $StepNum[$i]
            period_s = $Period[$i]
            freq_Hz = $Frequency[$i]
            circ_freq = $CircFreq[$i]
            eigenvalue = $EigenValue[$i]
        }
    }
    Write-Output "[INFO] $Num modos extraidos"
} catch {
    Write-Warning "ModalPeriod: $($_.Exception.Message)"
}
$out.modal_periods = $modal

# === 11. Modal Mass Participation Ratios ==================================
Write-Output "[INFO] Extrayendo modal participation ratios..."
$Num = 0; $LC = $StepType = $StepNum = $Period = $null
$UX = $UY = $UZ = $SumUX = $SumUY = $SumUZ = $null
$RX = $RY = $RZ = $SumRX = $SumRY = $SumRZ = $null
$mpr = @()
try {
    $ret = $SapModel.Results.ModalParticipatingMassRatios(
        [ref] $Num, [ref] $LC, [ref] $StepType, [ref] $StepNum, [ref] $Period,
        [ref] $UX, [ref] $UY, [ref] $UZ,
        [ref] $SumUX, [ref] $SumUY, [ref] $SumUZ,
        [ref] $RX, [ref] $RY, [ref] $RZ,
        [ref] $SumRX, [ref] $SumRY, [ref] $SumRZ)
    for ($i = 0; $i -lt $Num; $i++) {
        $mpr += [ordered]@{
            mode = [int] $StepNum[$i]
            period_s = $Period[$i]
            Ux = $UX[$i]; Uy = $UY[$i]; Uz = $UZ[$i]
            sum_Ux = $SumUX[$i]; sum_Uy = $SumUY[$i]; sum_Uz = $SumUZ[$i]
            Rx = $RX[$i]; Ry = $RY[$i]; Rz = $RZ[$i]
        }
    }
    Write-Output "[INFO] $Num MPRs extraidos"
} catch {
    Write-Warning "ModalParticipatingMassRatios: $($_.Exception.Message)"
}
$out.modal_participation = $mpr

# === 12. Base Reactions (totales) =========================================
Write-Output "[INFO] Extrayendo base reactions totales..."
$Num = 0; $LC = $StepType = $StepNum = $null
$Fx = $Fy = $Fz = $Mx = $My = $Mz = $null
$gx = $gy = $gz = $null
$base = @()
try {
    $ret = $SapModel.Results.BaseReact(
        [ref] $Num, [ref] $LC, [ref] $StepType, [ref] $StepNum,
        [ref] $Fx, [ref] $Fy, [ref] $Fz,
        [ref] $Mx, [ref] $My, [ref] $Mz,
        [ref] $gx, [ref] $gy, [ref] $gz)
    for ($i = 0; $i -lt $Num; $i++) {
        $base += [ordered]@{
            load_case = $LC[$i]
            Fx_total = $Fx[$i]; Fy_total = $Fy[$i]; Fz_total = $Fz[$i]
            Mx_total = $Mx[$i]; My_total = $My[$i]; Mz_total = $Mz[$i]
        }
    }
    Write-Output "[INFO] $Num base reactions extraidas"
} catch {
    Write-Warning "BaseReact: $($_.Exception.Message)"
}
$out.base_reactions = $base

# === 13. Story Drifts =====================================================
Write-Output "[INFO] Extrayendo story drifts..."
$Num = 0; $Story = $LC = $StepType = $StepNum = $Direction = $null
$Drift = $MaxLocLabel = $null
$MaxLocX = $MaxLocY = $MaxLocZ = $null
$drifts = @()
try {
    $ret = $SapModel.Results.StoryDrifts(
        [ref] $Num, [ref] $Story, [ref] $LC, [ref] $StepType, [ref] $StepNum,
        [ref] $Direction, [ref] $Drift,
        [ref] $MaxLocLabel, [ref] $MaxLocX, [ref] $MaxLocY, [ref] $MaxLocZ)
    for ($i = 0; $i -lt $Num; $i++) {
        $drifts += [ordered]@{
            story = $Story[$i]
            load_case = $LC[$i]
            direction = $Direction[$i]
            drift = $Drift[$i]
            max_label = $MaxLocLabel[$i]
        }
    }
    Write-Output "[INFO] $Num drifts extraidos"
} catch {
    Write-Warning "StoryDrifts: $($_.Exception.Message)"
}
$out.story_drifts = $drifts

# === 14. Frame Forces (resumido — primeros 1000) ==========================
Write-Output "[INFO] Extrayendo frame forces..."
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
            frame = $Obj[$i]
            station = $ObjSta[$i]
            load_case = $LC[$i]
            P = $P[$i]; V2 = $V2[$i]; V3 = $V3[$i]
            T = $T[$i]; M2 = $M2[$i]; M3 = $M3[$i]
        }
    }
    Write-Output "[INFO] $Num frame forces extraidas (guardadas $sample primeras)"
    $out.frame_forces_count = $Num
    $out.frame_forces_sample = $frFc
} catch {
    Write-Warning "FrameForce: $($_.Exception.Message)"
}

# === 15. Escribir JSON ====================================================
Write-Output "[INFO] Serializando JSON..."
$json = $out | ConvertTo-Json -Depth 10
Set-Content -Path $OutPath -Value $json -Encoding UTF8
$size = (Get-Item $OutPath).Length / 1024
Write-Output ("[OK] JSON guardado en {0} ({1:N1} KB)" -f (Resolve-Path $OutPath), $size)

# === 16. Cerrar ETABS =====================================================
Write-Output "[INFO] Cerrando ETABS..."
$ETABSObject.ApplicationExit($false) | Out-Null
Write-Output "[DONE]"
