# ============================================================================
#  batch_extraer.ps1 — Procesa TODOS los .EDB de una carpeta en lote.
#                      Genera un .json al lado de cada .EDB.
# ============================================================================

param(
    [Parameter(Mandatory=$true)]
    [string] $Folder
)

$ScriptPath = "C:\Users\Backup-PC\Documents\Hekatan Corporacion\Heka\hekatan-struct\Etabs Powershell\etabs_extract.ps1"

if (-not (Test-Path $Folder)) {
    Write-Error "No existe la carpeta: $Folder"
    exit 1
}

$edbs = Get-ChildItem -Path $Folder -Filter *.EDB -Recurse
if ($edbs.Count -eq 0) {
    Write-Host "No se encontraron archivos .EDB en $Folder" -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "Encontrados $($edbs.Count) archivos .EDB" -ForegroundColor Green
Write-Host ""

$ok = 0; $fail = 0
foreach ($edb in $edbs) {
    $out = $edb.FullName -replace "\.EDB$", "_results.json"
    Write-Host "[$($edbs.IndexOf($edb)+1)/$($edbs.Count)] $($edb.Name)" -ForegroundColor Cyan
    try {
        & powershell -ExecutionPolicy Bypass -File $ScriptPath `
            -EdbPath $edb.FullName -OutPath $out 2>&1 | Out-Null
        if (Test-Path $out) {
            $size = (Get-Item $out).Length / 1KB
            Write-Host ("    OK  ({0:N1} KB)" -f $size) -ForegroundColor Green
            $ok++
        } else {
            Write-Host "    FAIL" -ForegroundColor Red
            $fail++
        }
    } catch {
        Write-Host "    ERROR: $($_.Exception.Message)" -ForegroundColor Red
        $fail++
    }
}

Write-Host ""
Write-Host "============================================================"
Write-Host (" Resumen: {0} OK, {1} fallidos de {2} totales" -f $ok, $fail, $edbs.Count)
Write-Host "============================================================"
