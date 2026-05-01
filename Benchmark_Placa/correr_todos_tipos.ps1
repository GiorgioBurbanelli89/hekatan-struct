# ============================================================================
#  correr_todos_tipos.ps1 — Corre el benchmark para 5 tipos de placa SAP2000
# ============================================================================

$ps1 = Join-Path $PSScriptRoot "benchmark_placa_sap2000.ps1"

$tipos = @(
    @{ Type = 1; Name = "Shell-Thin" }
    @{ Type = 2; Name = "Shell-Thick" }
    @{ Type = 3; Name = "Plate-Thin" }
    @{ Type = 4; Name = "Plate-Thick" }
    @{ Type = 5; Name = "Membrane" }
)

$resultados = @()

foreach ($t in $tipos) {
    Write-Output ""
    Write-Output ("############# Tipo " + $t.Type + " " + $t.Name + " #############")
    $jsonOut = Join-Path $PSScriptRoot ("sap2000_results_type" + $t.Type + ".json")
    $tmpLog = "$env:TEMP\sap_t$($t.Type).log"

    & powershell -ExecutionPolicy Bypass -File $ps1 -KeepOpen `
        -PlateType $t.Type -PlateTypeName $t.Name `
        -OutPath $jsonOut *> $tmpLog

    if (Test-Path $jsonOut) {
        $j = Get-Content $jsonOut -Raw | ConvertFrom-Json
        $maxUz = $j.sap2000.w_max_m
        $M11 = $j.sap2000.M11_max_kNm_m
        $f11 = if ($j.sap2000.modes.Count -gt 0) { $j.sap2000.modes[0].freq_Hz } else { 0 }

        # Encontrar primer modo dominante en Uz (puede no ser el modo 1)
        # Membrane no tiene Uz — su modo 1 sera membrane mode, esperado
        $resultados += [ordered]@{
            type = $t.Type
            name = $t.Name
            w_max_mm = [Math]::Abs($maxUz) * 1000
            M11_max = $M11
            f1_Hz = $f11
        }
    } else {
        Write-Output "  FAIL - no se genero JSON"
    }
}

# Tabla comparativa
Write-Output ""
Write-Output "============================================================"
Write-Output " TABLA COMPARATIVA SAP2000 - 5 TIPOS DE PLACA"
Write-Output "============================================================"
Write-Output ""
Write-Output "Caso: L=4m, t=0.20m, E=21.5e6 kPa, nu=0.20, q=10 kPa, malla 8x8"
Write-Output "Analitica Timoshenko (simply supported):"
Write-Output "  w_max = 0.6961 mm   M_max = 7.6640 kN.m/m   f11 = 34.63 Hz"
Write-Output ""
Write-Output "Tipo                   w_max[mm]    M11[kN.m/m]    f1[Hz]"
Write-Output "-----------------------------------------------------------"
foreach ($r in $resultados) {
    $line = $r.name.PadRight(18) + " " + $r.w_max_mm.ToString("N4").PadLeft(12) + " " + $r.M11_max.ToString("N4").PadLeft(14) + " " + $r.f1_Hz.ToString("N3").PadLeft(9)
    Write-Output $line
}
Write-Output ""

# JSON consolidado
$consolidado = [ordered]@{
    benchmark = "Placa cuadrada simply supported - 5 tipos SAP2000"
    case = "L=4m t=0.20m E=21.5e6kPa nu=0.20 q=10kPa malla=8x8"
    analytical = [ordered]@{
        w_max_mm = 0.6961
        M_max_kNm_m = 7.6640
        f11_Hz = 34.63
    }
    sap2000_results = $resultados
}
$outConsolidado = Join-Path $PSScriptRoot "sap2000_consolidado.json"
$consolidado | ConvertTo-Json -Depth 10 | Set-Content -Path $outConsolidado -Encoding UTF8
Write-Output ("JSON consolidado: " + $outConsolidado)
