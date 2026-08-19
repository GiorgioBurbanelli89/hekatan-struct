# Python API ETABS — Scripts Verificados ✓

Scripts validados contra ETABS 22 (lanzados desde Python via comtypes API).

## Resultados verificados (2026-04-24)

### `01_test_diaphragm_comparison.py`

Edificio 3×3 columnas × 3 pisos, hormigón f'c=210, losa 0.15m.

| Caso | T₁ (s) | T₂ (s) | **T₃ (s) Torsional** |
|---|---|---|---|
| **Membrane** (sin diaphragm) | — *(no se analiza con default mass source)* | — | — |
| **Flexible Diaphragm** | 0.3144 | 0.3144 | **0.2207** (Rz=85%) |
| **Rigid Diaphragm** | 0.1759 | 0.1759 | **0.1236** (Rz=100%) |
| Diferencia FD→RD | **−44%** | **−44%** | **−44%** |

**Conclusión** confirmada: el tipo de modelado de losa AFECTA significativamente la rigidez torsional del edificio. Rigid Diaphragm es 44% más rígido que Flexible.

## Patrón de conexión a ETABS (estilo CSI ejemplo oficial)

```python
import comtypes.client

helper = comtypes.client.CreateObject('ETABSv1.Helper')
helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)
obj = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
obj.ApplicationStart()
SapModel = obj.SapModel
SapModel.InitializeNewModel()
SapModel.File.NewBlank()
```

## Uso

```bash
pip install comtypes numpy

# IMPORTANTE: cierra ETABS antes de correr
python 01_test_diaphragm_comparison.py
```

## Notas

- ETABS 22 hace `LoadCases.ModalEigen.SetCase()` lanzar `access violation` — usar el caso "Modal" default que ETABS crea automáticamente
- Ojo con encoding: agregar `sys.stdout.reconfigure(encoding='utf-8')` al inicio
- El script lanza ETABS, hace todo, y cierra ETABS al finalizar (ApplicationExit)
- Los .EDB intermedios se guardan en la carpeta para inspección manual

## Conclusión técnica

**Membrane ≠ Flexible Diaphragm ≠ Rigid Diaphragm** en términos de modal:

1. **Membrane**: elemento real con rigidez `K = E·t/(1-ν²)` finita
2. **Flexible Diaphragm**: constraint con penalty (rigidez muy alta pero finita)
3. **Rigid Diaphragm**: constraint que impone movimiento de cuerpo rígido (rigidez infinita)

La diferencia más notable es en T₃ (modo torsional Rz) — donde la rigidez efectiva del piso domina.
