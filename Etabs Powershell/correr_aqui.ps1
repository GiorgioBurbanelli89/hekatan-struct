# ============================================================================
#  correr_aqui.ps1 — Copialo a la carpeta de tu modelo .EDB y dale click derecho
#                    "Ejecutar con PowerShell". Detecta el .EDB de la carpeta y
#                    extrae los resultados a un JSON al lado.
# ============================================================================

# IMPORTANTE: ajustá esta ruta UNA vez si moves la carpeta hekatan-struct-lineal.
$ScriptPath = "C:\Users\Backup-PC\Documents\Hekatan Corporacion\Heka\hekatan-struct-lineal\Etabs Powershell\etabs_extract.ps1"

if (-not (Test-Path $ScriptPath)) {
    Write-Host "ERROR: no se encuentra etabs_extract.ps1 en:" -ForegroundColor Red
    Write-Host "  $ScriptPath" -ForegroundColor Red
    Write-Host ""
    Write-Host "Edita esta linea (5) en correr_aqui.ps1 con la ruta correcta." -ForegroundColor Yellow
    pause; exit 1
}

# Detecta el primer .EDB en la carpeta donde vive este script
$Edb = Get-ChildItem -Path $PSScriptRoot -Filter *.EDB -ErrorAction SilentlyContinue | Select-Object -First 1
if (-not $Edb) {
    Write-Host "ERROR: no hay ningun archivo .EDB en esta carpeta:" -ForegroundColor Red
    Write-Host "  $PSScriptRoot" -ForegroundColor Red
    Write-Host ""
    Write-Host "Movele este script a la carpeta de tu modelo." -ForegroundColor Yellow
    pause; exit 1
}

$Out = Join-Path $PSScriptRoot ($Edb.BaseName + "_results.json")

Write-Host ""
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host " EXTRACCION DE RESULTADOS ETABS — hekatan-struct-lineal" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Modelo:  $($Edb.Name)" -ForegroundColor Green
Write-Host "Salida:  $($Edb.BaseName)_results.json"
Write-Host ""
Write-Host "Conectando a ETABS via OAPI..." -ForegroundColor Yellow
Write-Host ""

& powershell -ExecutionPolicy Bypass -File $ScriptPath -EdbPath $Edb.FullName -OutPath $Out

Write-Host ""
if (Test-Path $Out) {
    $sizeMB = (Get-Item $Out).Length / 1MB
    Write-Host "============================================================" -ForegroundColor Green
    Write-Host (" LISTO — JSON generado: {0:N1} MB" -f $sizeMB) -ForegroundColor Green
    Write-Host "============================================================" -ForegroundColor Green
    Write-Host "  $Out"
} else {
    Write-Host "ERROR: el JSON no se genero. Revisa los mensajes arriba." -ForegroundColor Red
}
Write-Host ""
pause
