# ============================================================================
# sap2000_extract.ps1 — CLI PowerShell para extraer resultados de SAP2000 OAPI
# ============================================================================
# Uso:
#   powershell -ExecutionPolicy Bypass -File sap2000_extract.ps1 `
#     -ModelPath "ruta\al\modelo.sdb"  -OutPath "resultados.json"
#   powershell -ExecutionPolicy Bypass -File sap2000_extract.ps1 `
#     -ModelPath "ruta\al\modelo.s2k"  -OutPath "resultados.json"
#
# Auto-detecta formato:
#   .sdb  → modelo binario (puede o no estar analizado, usar -RunAnalysis si no)
#   .s2k  → modelo en texto, fuerza -RunAnalysis automaticamente
#
# Requiere: SAP2000 instalado (cualquier version 17+). Sin Python, sin .NET extra.
# ============================================================================

param(
    [Parameter(Mandatory=$true)] [string] $ModelPath,
    [Parameter(Mandatory=$false)] [string] $OutPath = "sap2000_results.json",
    [Parameter(Mandatory=$false)] [switch] $RunAnalysis
)

$ErrorActionPreference = "Continue"

if (-not (Test-Path $ModelPath)) {
    Write-Error "No existe el archivo: $ModelPath"
    exit 1
}

$ModelPath = (Resolve-Path $ModelPath).Path
$ext = [System.IO.Path]::GetExtension($ModelPath).ToLower()

# Auto-forzar RunAnalysis si es .s2k (texto, no analizado)
if ($ext -eq ".s2k") {
    Write-Output "[INFO] Formato .s2k detectado — forzando RunAnalysis"
    $RunAnalysis = $true
}

Write-Output "[INFO] MODEL: $ModelPath ($ext)"
Write-Output "[INFO] OUT:   $OutPath"

# === 1. Conectar a SAP2000 via COM ========================================
Write-Output "[INFO] Conectando a SAP2000 via OAPI..."
$helper = New-Object -ComObject "SAP2000v1.Helper"
$SapObject = $helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
# SAP2000 ApplicationStart(eUnits, visible, fileName) — 3 args obligatorios
$ret = $SapObject.ApplicationStart(6, $false, "")
if ($ret -ne 0) { Write-Warning "ApplicationStart retorno $ret" }

$SapModel = $SapObject.SapModel
# Inicializar nuevo modelo blank por si vamos a importar texto
if ($ext -eq ".s2k") {
    $SapModel.InitializeNewModel(6) | Out-Null
}

# === 2. Abrir / importar archivo ==========================================
Write-Output "[INFO] Abriendo $ModelPath..."
$ret = $SapModel.File.OpenFile($ModelPath)
if ($ret -ne 0) { Write-Warning "OpenFile retorno $ret" }

# Unidades: kN, m, C  (eUnits_kN_m_C = 6)
$SapModel.SetPresentUnits(6) | Out-Null

# === 3. Run analysis si se pidio ==========================================
if ($RunAnalysis) {
    Write-Output "[INFO] Corriendo RunAnalysis..."
    $t0 = Get-Date
    $ret = $SapModel.Analyze.RunAnalysis()
    $dt = ((Get-Date) - $t0).TotalSeconds
    Write-Output ("[INFO] RunAnalysis ret={0} en {1:N1}s" -f $ret, $dt)
}

# === 4. Inicializar output ================================================
$out = [ordered]@{
    source_model  = $ModelPath
    source_format = $ext
    extracted_at  = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
    units         = "kN, m, C"
    program       = "SAP2000 via OAPI"
    auto_analyzed = [bool] $RunAnalysis
}

# === 5. Model info ========================================================
Write-Output "[INFO] Extrayendo model info..."

$nPts = 0; $ptNames = $null
try { $ret = $SapModel.PointObj.GetNameList([ref] $nPts, [ref] $ptNames) } catch {}

$nFr = 0; $frNames = $null
try { $ret = $SapModel.FrameObj.GetNameList([ref] $nFr, [ref] $frNames) } catch {}

$nAr = 0; $arNames = $null
try { $ret = $SapModel.AreaObj.GetNameList([ref] $nAr, [ref] $arNames) } catch {}

$nSol = 0; $solNames = $null
try { $ret = $SapModel.SolidObj.GetNameList([ref] $nSol, [ref] $solNames) } catch {}

$nLink = 0; $linkNames = $null
try { $ret = $SapModel.LinkObj.GetNameList([ref] $nLink, [ref] $linkNames) } catch {}

$nLP = 0; $lpNames = $null
try { $ret = $SapModel.LoadPatterns.GetNameList([ref] $nLP, [ref] $lpNames) } catch {}

# Iterar todos los tipos de case
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
    n_solids = $nSol; n_links = $nLink
    n_load_patterns = $nLP; n_load_cases = $nLC; n_combos = $nCB
    load_patterns = $lpNames; load_cases = $lcNames; combos = $cbNames
}
Write-Output "[INFO] Model: $nPts points, $nFr frames, $nAr areas, $nSol solids, $nLink links, $nLC cases, $nCB combos"

# === 6. Joint coordinates =================================================
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

# === 7. Configurar output: seleccionar todos los casos ====================
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

# === 8. Joint Reactions ===================================================
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
            joint = $Obj[$i]; load_case = $LC[$i]
            Ux = $U1[$i]; Uy = $U2[$i]; Uz = $U3[$i]
            Rx = $R1[$i]; Ry = $R2[$i]; Rz = $R3[$i]
        }
    }
    Write-Output "[INFO] $Num displacements extraidos"
} catch { Write-Warning "JointDispl: $($_.Exception.Message)" }
$out.joint_displacements = $displ

# === 10. Modal Periods ====================================================
Write-Output "[INFO] Extrayendo modal periods..."
$Num = 0; $LC = $StepType = $StepNum = $Period = $Frequency = $CircFreq = $EigenValue = $null
$modal = @()
try {
    $ret = $SapModel.Results.ModalPeriod(
        [ref] $Num, [ref] $LC, [ref] $StepType, [ref] $StepNum,
        [ref] $Period, [ref] $Frequency, [ref] $CircFreq, [ref] $EigenValue)
    for ($i = 0; $i -lt $Num; $i++) {
        $modal += [ordered]@{
            case = $LC[$i]; mode = [int] $StepNum[$i]
            period_s = $Period[$i]; freq_Hz = $Frequency[$i]
            circ_freq = $CircFreq[$i]; eigenvalue = $EigenValue[$i]
        }
    }
    Write-Output "[INFO] $Num modos extraidos"
} catch { Write-Warning "ModalPeriod: $($_.Exception.Message)" }
$out.modal_periods = $modal

# === 11. Modal Mass Participation =========================================
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
            mode = [int] $StepNum[$i]; period_s = $Period[$i]
            Ux = $UX[$i]; Uy = $UY[$i]; Uz = $UZ[$i]
            sum_Ux = $SumUX[$i]; sum_Uy = $SumUY[$i]; sum_Uz = $SumUZ[$i]
            Rx = $RX[$i]; Ry = $RY[$i]; Rz = $RZ[$i]
        }
    }
    Write-Output "[INFO] $Num MPRs extraidos"
} catch { Write-Warning "ModalParticipatingMassRatios: $($_.Exception.Message)" }
$out.modal_participation = $mpr

# === 12. Base Reactions ===================================================
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

# === 13. Frame Forces (resumido) ==========================================
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
            frame = $Obj[$i]; station = $ObjSta[$i]; load_case = $LC[$i]
            P = $P[$i]; V2 = $V2[$i]; V3 = $V3[$i]
            T = $T[$i]; M2 = $M2[$i]; M3 = $M3[$i]
        }
    }
    Write-Output "[INFO] $Num frame forces extraidas (guardadas $sample primeras)"
    $out.frame_forces_count = $Num
    $out.frame_forces_sample = $frFc
} catch { Write-Warning "FrameForce: $($_.Exception.Message)" }

# === 14. Soil Pressure: 2 caminos ⭐ =======================================
# SAP2000 tiene DOS tipos de spring que se relacionan con suelo:
#   - Joint Spring (puntual, K en kN/m) → output: reaction
#   - Area Spring (Winkler distribuido, ks en kN/m^3) → output: PRESSURE (kPa)
#
# Solo Area Spring devuelve "pressure" directamente via AreaJointForceShell.
# Si solo hay Joint Springs, mostramos las reactions (que SON el pressure ×
# A_tributaria). El usuario puede convertir manualmente o asignar Area Spring.
Write-Output "[INFO] Extrayendo soil pressure (Area Spring) y joint spring forces..."
$Num = 0
$Obj = $Elm = $PointElm = $LC = $StepType = $StepNum = $null
$Pressure = $null
$soilPress = @()
$hasAreaSpring = $false
try {
    $ret = $SapModel.Results.AreaJointForceShell("All", 2,
        [ref] $Num, [ref] $Obj, [ref] $Elm, [ref] $PointElm,
        [ref] $LC, [ref] $StepType, [ref] $StepNum,
        [ref] $Pressure)
    if ($Num -gt 0) {
        $hasAreaSpring = $true
        $sample = [Math]::Min($Num, 2000)
        for ($i = 0; $i -lt $sample; $i++) {
            $soilPress += [ordered]@{
                area = $Obj[$i]; point = $PointElm[$i]; load_case = $LC[$i]
                pressure_kPa = $Pressure[$i]
            }
        }
        Write-Output "[INFO] $Num pressures extraidas — AreaSpring (Winkler) DETECTADO"
    } else {
        Write-Output "[INFO] 0 pressures — sin AreaSpring asignado en el modelo"
    }
    $out.soil_pressure_count = $Num
    $out.soil_pressure_sample = $soilPress
} catch {
    Write-Warning "AreaJointForceShell: $($_.Exception.Message)"
}

# Detectar Joint Springs y reportarlos por separado
# AssignedSpring info via PointObj.GetSpring()
Write-Output "[INFO] Detectando Joint Springs en el modelo..."
$jointSprings = @()
$springsCount = 0
if ($ptNames -and $nPts -gt 0) {
    foreach ($pn in $ptNames) {
        $K = New-Object 'double[]' 6
        $IsLocalCSys = $false
        try {
            $ret = $SapModel.PointObj.GetSpring($pn, [ref] $K, [ref] $IsLocalCSys)
            # Si alguna componente es no-cero, hay joint spring asignada
            $hasSpring = ($K[0] -ne 0) -or ($K[1] -ne 0) -or ($K[2] -ne 0) -or
                         ($K[3] -ne 0) -or ($K[4] -ne 0) -or ($K[5] -ne 0)
            if ($hasSpring) {
                $jointSprings += [ordered]@{
                    joint = $pn
                    K_Ux_kNm = $K[0]; K_Uy_kNm = $K[1]; K_Uz_kNm = $K[2]
                    K_Rx_kNmrad = $K[3]; K_Ry_kNmrad = $K[4]; K_Rz_kNmrad = $K[5]
                    is_local = $IsLocalCSys
                }
                $springsCount++
            }
        } catch {}
    }
}
$out.joint_springs_count = $springsCount
$out.joint_springs = $jointSprings
$out.has_area_spring = $hasAreaSpring
$out.has_joint_spring = ($springsCount -gt 0)
$out.soil_pressure_note = @"
SOIL PRESSURE en SAP2000:
  - Solo aparece como 'pressure' (kPa) si hay AreaSpring (Winkler distribuido).
  - Joint Springs (K en kN/m) NO dan pressure — solo reactions en JointReact.
  - Conversion: pressure_kPa = K_joint_kNm * u_m / A_tributaria_m2
                                = ks_kNm3 * u_m
  - Con AreaSpring: hasAreaSpring=$hasAreaSpring
  - Con Joint Springs: $springsCount nodos con springs asignadas
"@
Write-Output "[INFO] $springsCount joints con springs asignadas (K kN/m)"
if (-not $hasAreaSpring -and $springsCount -gt 0) {
    Write-Output "[INFO] -> Para ver pressure (kPa) en SAP2000 GUI, asigna Area Spring"
    Write-Output "[INFO]    Equivalencia: K_joint = ks * A_tributaria"
}

# === 15. Area Force Shell =================================================
Write-Output "[INFO] Extrayendo area force shell..."
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
    $sample = [Math]::Min($Num, 500)
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

# === 15. Escribir JSON ====================================================
Write-Output "[INFO] Serializando JSON..."
$json = $out | ConvertTo-Json -Depth 10
Set-Content -Path $OutPath -Value $json -Encoding UTF8
$size = (Get-Item $OutPath).Length / 1024
Write-Output ("[OK] JSON guardado en {0} ({1:N1} KB)" -f (Resolve-Path $OutPath), $size)

# === 16. Cerrar SAP2000 ===================================================
Write-Output "[INFO] Cerrando SAP2000..."
$SapObject.ApplicationExit($false) | Out-Null
Write-Output "[DONE]"
