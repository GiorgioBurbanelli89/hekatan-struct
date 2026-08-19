# Wrapper PowerShell que invoca el CLI nativo de Hekatan Struct desde validacion/
#
# Uso:
#   .\run.ps1                    # todos los casos, output legible
#   .\run.ps1 plate_thin         # un caso, output legible
#   .\run.ps1 --json > out.json  # todos los casos, output JSON

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$HekatanRoot = Resolve-Path "$ScriptDir\..\.."
$CLI = Join-Path $HekatanRoot "cli_fem_benchmark.mjs"

if (-not (Test-Path $CLI)) {
    Write-Error "Error: no se encontro $CLI"
    Write-Error "Verifica que cli_fem_benchmark.mjs este en la raiz de hekatan-struct/"
    exit 1
}

node $CLI @args
