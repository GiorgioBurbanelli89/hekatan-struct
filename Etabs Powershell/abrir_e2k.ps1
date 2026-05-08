# ============================================================================
# abrir_e2k.ps1 - Abre el ultimo .e2k descargado en ETABS
# ============================================================================
# Uso:
#   .\abrir_e2k.ps1                    -> abre el ultimo .e2k de Downloads
#   .\abrir_e2k.ps1 -Path "x.e2k"      -> abre uno especifico
#   .\abrir_e2k.ps1 -RunAnalysis       -> tambien corre el analisis
#
# Requiere: ETABS instalado (cualquier version 17+) con OAPI.
# ============================================================================

param(
    [Parameter(Mandatory=$false)] [string] $Path,
    [Parameter(Mandatory=$false)] [string] $DownloadsDir = "$env:USERPROFILE\Downloads",
    [Parameter(Mandatory=$false)] [switch] $RunAnalysis
)

$ErrorActionPreference = "Stop"

# 1) Localizar el .e2k
if (-not $Path) {
    $latest = Get-ChildItem -Path $DownloadsDir -Filter *.e2k -ErrorAction SilentlyContinue |
              Sort-Object LastWriteTime -Descending | Select-Object -First 1
    if (-not $latest) { Write-Error "No hay .e2k en $DownloadsDir"; exit 1 }
    $Path = $latest.FullName
}
$Path = (Resolve-Path $Path).Path
Write-Host "[abrir_e2k] Archivo: $Path" -ForegroundColor Cyan

# 2) Conectar a ETABS via OAPI
Write-Host "[abrir_e2k] Lanzando ETABS..." -ForegroundColor Cyan
$helper = New-Object -ComObject "ETABSv1.Helper"
$etabs  = $helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
$etabs.ApplicationStart() | Out-Null

# 3) Inicializar modelo blank (necesario antes de leer .e2k de texto)
$model = $etabs.SapModel
$model.InitializeNewModel(12) | Out-Null   # 12 = tonf-m-C

# 4) Cargar el .e2k
Write-Host "[abrir_e2k] Cargando modelo en ETABS..." -ForegroundColor Cyan
$ret = $model.File.OpenFile($Path)
if ($ret -ne 0) { Write-Warning "File.OpenFile devolvio $ret" }

# 5) Convertir a .EDB
$edbPath = [System.IO.Path]::ChangeExtension($Path, ".EDB")
$model.File.Save($edbPath) | Out-Null
Write-Host "[abrir_e2k] Convertido a EDB: $edbPath" -ForegroundColor Green

# 6) (Opcional) correr analisis
if ($RunAnalysis) {
    Write-Host "[abrir_e2k] Corriendo analisis..." -ForegroundColor Cyan
    $model.Analyze.RunAnalysis() | Out-Null
    Write-Host "[abrir_e2k] Analisis terminado" -ForegroundColor Green
}

Write-Host "[abrir_e2k] OK - ETABS abierto con el modelo cargado." -ForegroundColor Green
Write-Host "             Cierra ETABS manualmente cuando termines la demo." -ForegroundColor Yellow
