@echo off
REM Asocia las extensiones CSI text formats al csi_launcher.bat
REM REQUIERE EJECUTAR COMO ADMINISTRADOR
REM
REM ⚠ Esto reescribe las file associations existentes de Windows.
REM   ETABS/SAP/SAFE manejan los binarios (.EDB/.SDB/.FDB) nativos.
REM   Este launcher se asocia solo a los TEXT formats (.e2k/.s2k/.f2k).

setlocal
set LAUNCHER=%~dp0csi_launcher.bat

echo Asociando extensiones CSI text al launcher:
echo   %LAUNCHER%
echo.

REM Test si tenemos privilegios admin
net session >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Este script REQUIERE permisos de administrador.
    echo         Click-derecho en el .bat y "Ejecutar como administrador".
    pause
    exit /b 1
)

REM .e2k → ETABS text
assoc .e2k=CSIFile.ETABStext
ftype CSIFile.ETABStext="%LAUNCHER%" "%%1" --etabs
echo  ✓ .e2k → ETABS

REM .s2k → SAP2000 text
assoc .s2k=CSIFile.SAPtext
ftype CSIFile.SAPtext="%LAUNCHER%" "%%1" --sap
echo  ✓ .s2k → SAP2000

REM .f2k → SAFE text
assoc .f2k=CSIFile.SAFEtext
ftype CSIFile.SAFEtext="%LAUNCHER%" "%%1" --safe
echo  ✓ .f2k → SAFE

echo.
echo Asociaciones instaladas. Ahora doble-click en un .e2k/.s2k/.f2k abre
echo automáticamente la app CSI correcta.
echo.
echo Para deshacer: usá "Abrir con..." → "Elegir otra aplicación" → ETABS/SAP/SAFE.
pause
