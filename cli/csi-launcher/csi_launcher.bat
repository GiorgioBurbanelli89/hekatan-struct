@echo off
REM CSI File Launcher — wrapper Windows para doble-click o file association
REM
REM Uso:
REM   csi_launcher.bat                       → GUI
REM   csi_launcher.bat archivo.e2k            → abre en ETABS (auto-detect)
REM   csi_launcher.bat archivo.s2k --sap      → fuerza SAP2000
REM
REM Para asociar extensiones a este launcher:
REM   1. Click derecho en un archivo .e2k → "Abrir con..." → Elegí este .bat
REM   2. ó ejecutá install_associations.bat (admin)

cd /d "%~dp0"
python -X utf8 -u csi_launcher.py %*
