# ============================================================================
# correr_paz_13_1.ps1 - Abre Paz_13_1.e2k en ETABS y corre el analisis
# ============================================================================
# Uso (en PowerShell desde esta carpeta):
#   .\correr_paz_13_1.ps1
#
# Lo que hace:
#   1) Lanza ETABS via OAPI (COM CSI.ETABS.API.ETABSObject)
#   2) Inicializa modelo blank en unidades tonf-m-C
#   3) Carga Paz_13_1.e2k (el archivo .e2k del benchmark)
#   4) Guarda como .EDB al lado del .e2k
#   5) Corre el analisis modal + estatico
#   6) Muestra las 6 primeras frecuencias modales
#
# Requiere: ETABS 17 o superior con OAPI (CSI.ETABS.API.ETABSObject).
# ============================================================================

$ErrorActionPreference = "Stop"

# 1) Localizar el .e2k al lado de este script
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$e2kPath = Join-Path $scriptDir "Paz_13_1.e2k"

if (-not (Test-Path $e2kPath)) {
    Write-Error "[correr_paz_13_1] No se encontro Paz_13_1.e2k en $scriptDir"
    exit 1
}
$e2kPath = (Resolve-Path $e2kPath).Path
Write-Host "[correr_paz_13_1] Archivo: $e2kPath" -ForegroundColor Cyan

# 2) Conectar a ETABS via OAPI
Write-Host "[correr_paz_13_1] Lanzando ETABS..." -ForegroundColor Cyan
$helper = New-Object -ComObject "ETABSv1.Helper"
$etabs  = $helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
$etabs.ApplicationStart() | Out-Null

# 3) Inicializar modelo blank (necesario antes de leer .e2k de texto)
$model = $etabs.SapModel
$model.InitializeNewModel(12) | Out-Null   # 12 = tonf-m-C

# 4) Cargar el .e2k
Write-Host "[correr_paz_13_1] Cargando modelo en ETABS..." -ForegroundColor Cyan
$ret = $model.File.OpenFile($e2kPath)
if ($ret -ne 0) { Write-Warning "File.OpenFile devolvio $ret" }

# 5) Convertir a .EDB
$edbPath = [System.IO.Path]::ChangeExtension($e2kPath, ".EDB")
$model.File.Save($edbPath) | Out-Null
Write-Host "[correr_paz_13_1] Convertido a EDB: $edbPath" -ForegroundColor Green

# 6) Correr analisis
Write-Host "[correr_paz_13_1] Corriendo analisis modal + estatico..." -ForegroundColor Cyan
$model.Analyze.RunAnalysis() | Out-Null
Write-Host "[correr_paz_13_1] Analisis terminado" -ForegroundColor Green

# 7) Leer frecuencias modales
$model.Results.Setup.DeselectAllCasesAndCombosForOutput() | Out-Null
$model.Results.Setup.SetCaseSelectedForOutput("Modal") | Out-Null

$numberResults = 0
$loadCase    = [string[]]::new(1)
$stepType    = [string[]]::new(1)
$stepNum     = [double[]]::new(1)
$period      = [double[]]::new(1)
$frequency   = [double[]]::new(1)
$circFreq    = [double[]]::new(1)
$eigenValue  = [double[]]::new(1)

$ret = $model.Results.ModalPeriod(
    [ref] $numberResults,
    [ref] $loadCase,
    [ref] $stepType,
    [ref] $stepNum,
    [ref] $period,
    [ref] $frequency,
    [ref] $circFreq,
    [ref] $eigenValue
)

Write-Host ""
Write-Host "============================================================" -ForegroundColor Yellow
Write-Host "   FRECUENCIAS MODALES - Paz 13.1" -ForegroundColor Yellow
Write-Host "============================================================" -ForegroundColor Yellow
Write-Host ("   {0,-6} {1,12} {2,12}" -f "Modo", "Periodo (s)", "Frec (Hz)") -ForegroundColor White
Write-Host "------------------------------------------------------------"
for ($i = 0; $i -lt $numberResults; $i++) {
    Write-Host ("   {0,-6} {1,12:F4} {2,12:F4}" -f ($i + 1), $period[$i], $frequency[$i]) -ForegroundColor Cyan
}
Write-Host "============================================================" -ForegroundColor Yellow
Write-Host ""
Write-Host "[correr_paz_13_1] OK - ETABS abierto con el modelo y resultados." -ForegroundColor Green
Write-Host "             Cierra ETABS manualmente cuando termines la demo." -ForegroundColor Yellow
