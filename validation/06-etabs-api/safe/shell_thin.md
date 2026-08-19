# Shell Thin (Cantilever) — SAFE 2016+

⚠️ **SAFE no es la herramienta apropiada**: SAFE no soporta cantilever
shells planos cargados in-plane. Es para losas horizontales.

## Recomendación

Usar **ETABS** (`shell_thin_etabs.m`) o **SAP2000** (`shell_thin_sap2000.m`).

## Valor esperado de referencia

| Entorno         | u_max [m]      |
|-----------------|----------------|
| HekatanLab FE05 | 1.261058e-03   |
| Membrana axial  | 1.000000e-03   |
| Ratio FEM/axial | 1.261          |
