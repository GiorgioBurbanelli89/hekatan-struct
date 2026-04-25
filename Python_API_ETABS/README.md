# Python_API_ETABS

Scripts Python validados que usan la API COM de ETABS (v22 / v19) para crear
modelos desde cero, correr análisis estático y modal, y leer resultados.

**Probado en:** ETABS 22 + Python 3.13 + comtypes 1.4.14 (Windows).

## Pre-requisitos

```bash
pip install comtypes
```

ETABS 22 o ETABS 19 instalado en
`C:\Program Files\Computers and Structures\ETABS XX\ETABS.exe`.

## Patrón canónico de conexión

Tomado del ejemplo oficial CSI. NO mezclar `CreateObject(path)` con
`ApplicationStart()` (da `-2146233077: No se pudo instalar puerto IPC`).

```python
import comtypes.client

helper = comtypes.client.CreateObject("ETABSv1.Helper")
helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)

# Lanzar nueva instancia (última versión instalada)
etabs_obj = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
etabs_obj.ApplicationStart()

SapModel = etabs_obj.SapModel
SapModel.InitializeNewModel(6)   # 6 = kN_m_C — siempre pasar unidades
SapModel.File.NewBlank()
```

**Códigos de unidades:** 1=lb-in, 2=lb-ft, 3=kip-in, 4=kip-ft, 5=kN-mm,
**6=kN-m**, 7=kgf-mm, 8=kgf-m, 9=N-mm, 10=N-m, 11=Tonf-mm, 12=Tonf-m.

> ⚠️ Si llamas `InitializeNewModel()` sin argumento ETABS arranca en
> kip-in por defecto y al guardar el .EDB queda con esa preferencia,
> aunque la geometría se haya creado en metros — la GUI lo abre en pies.

## Scripts incluidos

### `ejemplo_basico_ETABS.py`
Quick start: detecta versión instalada, conecta, crea pórtico 2D simple
(1 vano × 2 pisos, hormigón f'c=21 MPa), corre estático LIVE, lee
desplazamientos y reacciones.

### `python_etabs_pruebas_validas3/`

Suite de 6 ejemplos secuenciales, cada uno con logging detallado a
`logs/*.log` (timestamp + flush inmediato para seguir el progreso en vivo
con `tail -F`).

| # | Script | Descripción | T1 (s) |
|---|---|---|---|
| 01 | `01_ejemplo_oficial_CSI.py` | Validación oficial CSI: 7 casos de carga vs handbook (≤0.08% error) | — |
| 02 | `02_edificio_membrana_diafragma_flexible.py` | 2×2 vanos × 2 pisos, losas Membrane, sin diafragma rígido | 0.2071 |
| 03 | `03_edificio_shellthin_diafragma_rigido.py` | Mismo edificio, ShellThin + diafragma rígido por piso | 0.2058 |
| 04 | `04_comparativa_5pisos_4x4.py` | Comparativa Memb+Flex vs Shell+Rig en edificio grande (5 pisos × 4×4 vanos) | 0.4171 / 0.4142 |
| 05 | `05_edificio_muros_shellthick.py` | Edificio + 2 muros de corte Shell-Thick en perímetro Y, piers P1/P2 | 0.4134 / **0.1861 / 0.1505** |
| 06 | `06_edificio_un_muro_membrana.py` | UN solo muro modelado como Membrane (asimétrico) | 0.4110 / **0.3792 / 0.1649** |

Cada script imprime y registra en log:
- Períodos T1 a T6
- Frecuencias f (Hz) y ω (rad/s)
- Participación modal **traslacional** Ux/Uy/Uz y **rotacional** Rx/Ry/Rz
- Acumulado SumU* y SumR*
- Verificación contra criterio NEC-SE-DS / ASCE 7-22 §12.9 (≥90% por dirección)

## Lecciones aprendidas (debugging)

| Bug | Síntoma | Fix |
|---|---|---|
| `print()` con buffer | No se ve el progreso, parece colgado | `print(..., flush=True)` + log file con timestamp + `python -u` |
| E concreto = 681 GPa | Deflexiones absurdas | `E = 4700·√f'c` con f'c en **MPa**, no kN/m² |
| `AreaObj.AddByPoint` retorna >2 valores | `ValueError: too many values to unpack` | `res = call(...); ret = res[-1]` |
| `SetMassSource_1` con SafeArray | `TypeError: object of type 'int' has no len()` | Try-except con paths alternos + fallback al default ETABS (peso propio) |
| `InitializeNewModel()` sin argumento | El .EDB queda en kip-ft | Siempre pasar `InitializeNewModel(6)` para kN-m-C |
| `CreateObject(path)` + `ApplicationStart()` | `-2146233077: No se pudo instalar puerto IPC` | Usar `CreateObjectProgID(...)` + `ApplicationStart()`, o `CreateObject(path)` solo |
| Stdout Unicode (→ é ñ) | `UnicodeEncodeError: cp1252` | `sys.stdout.reconfigure(encoding="utf-8")` al inicio |

## Ejecutar un script

```bash
cd python_etabs_pruebas_validas3
python -u 01_ejemplo_oficial_CSI.py     # -u = unbuffered output
```

El log queda en `logs/<NN>_<descripcion>_<YYYYMMDD_HHMMSS>.log`.
El `.EDB` se guarda en `modelos/<nombre>.EDB`.

Ambas carpetas están en `.gitignore` — los binarios de ETABS se regeneran
corriendo el script y no necesitan estar en el repo.
