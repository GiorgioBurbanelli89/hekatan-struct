@echo off
REM ============================================================================
REM  extraer_safe.bat — Drag-and-drop launcher para SAFE
REM ============================================================================
REM  Acepta .FDB (binario) y .f2k (texto, auto-RunAnalysis).
REM  Extrae principalmente: presion de contacto, M11/M22 de losa, vigas amarre.
REM ============================================================================

setlocal EnableDelayedExpansion

set "PS1=%~dp0safe_extract.ps1"

if not "%~1"=="" (
    set "MODEL=%~1"
    goto :PROCESAR
)

echo.
echo ============================================================
echo   EXTRACCION DE RESULTADOS SAFE — hekatan-struct-lineal
echo ============================================================
echo.
echo  Arrastra tu archivo .FDB (analizado) o .f2k (texto)
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
echo Conectando a SAFE via OAPI ...
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
