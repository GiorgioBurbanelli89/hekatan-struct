@echo off
REM ============================================================================
REM  extraer_etabs.bat — Drag-and-drop launcher para ETABS
REM ============================================================================
REM  Acepta .EDB (binario) y .e2k (texto, auto-RunAnalysis).
REM  Uso 1: doble click → te pide arrastrar el archivo
REM  Uso 2: arrastra un .EDB o .e2k sobre este .bat
REM ============================================================================

setlocal EnableDelayedExpansion

set "PS1=%~dp0etabs_extract.ps1"

if not "%~1"=="" (
    set "MODEL=%~1"
    goto :PROCESAR
)

echo.
echo ============================================================
echo   EXTRACCION DE RESULTADOS ETABS — hekatan-struct-lineal
echo ============================================================
echo.
echo  Arrastra tu archivo .EDB (analizado) o .e2k (texto)
echo  a esta ventana y presiona Enter
echo.

set /p MODEL_RAW="MODEL: "
set "MODEL=%MODEL_RAW:"=%"

:PROCESAR
if not exist "%MODEL%" (
    echo.
    echo ERROR: no existe el archivo "%MODEL%"
    echo.
    pause
    exit /b 1
)

for %%F in ("%MODEL%") do (
    set "DIR=%%~dpF"
    set "BASE=%%~nF"
)
set "OUT=%DIR%%BASE%_results.json"

echo.
echo Modelo:    %MODEL%
echo Salida:    %OUT%
echo.
echo Conectando a ETABS via OAPI ... (puede tardar 20-60 segundos por la RAM)
echo.

powershell -ExecutionPolicy Bypass -File "%PS1%" -ModelPath "%MODEL%" -OutPath "%OUT%"

echo.
if exist "%OUT%" (
    echo ============================================================
    echo  LISTO: JSON generado en
    echo    %OUT%
    echo ============================================================
) else (
    echo ERROR: no se genero el JSON. Revisa los mensajes arriba.
)
echo.
pause
