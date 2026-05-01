@echo off
REM ============================================================================
REM  extraer_sap2000.bat — Drag-and-drop launcher para SAP2000
REM ============================================================================
REM  Acepta .sdb (binario) y .s2k (texto, auto-RunAnalysis).
REM  Uso 1: doble click → te pide arrastrar el archivo
REM  Uso 2: arrastra un .sdb o .s2k sobre este .bat
REM ============================================================================

setlocal EnableDelayedExpansion

set "PS1=%~dp0sap2000_extract.ps1"

if not "%~1"=="" (
    set "MODEL=%~1"
    goto :PROCESAR
)

echo.
echo ============================================================
echo   EXTRACCION DE RESULTADOS SAP2000 — hekatan-struct
echo ============================================================
echo.
echo  Arrastra tu archivo .sdb (analizado) o .s2k (texto)
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
echo Conectando a SAP2000 via OAPI ...
echo.

powershell -ExecutionPolicy Bypass -File "%PS1%" -ModelPath "%MODEL%" -OutPath "%OUT%"

echo.
if exist "%OUT%" (
    echo ============================================================
    echo  LISTO: JSON generado
    echo    %OUT%
    echo ============================================================
) else (
    echo ERROR: no se genero el JSON. Revisa los mensajes arriba.
)
echo.
pause
