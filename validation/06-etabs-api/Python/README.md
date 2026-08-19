# validacion/Python/ — Iteración de formulaciones FEM en OpenSeesPy

Ciclo de validación cruzada: cuando el ejemplo Hekatan no matchea ETABS,
iteramos en Python sobre el producto cartesiano de variantes de formulación
(shell element, mass model, diaphragm constraint, mesh, base support) y
guardamos la que mejor reproduce ETABS.

## Workflow

```
1. ETABS open + manual            ↓
2. Run  …/python-verificado/15_mesa_torsion.py
   → mesa_torsion_etabs_results.json (periodos + MPF reales)
                                   ↓
3. Run  validacion/Python/iterate_mesa_torsion.py
   → ranking de 144 variantes OpenSeesPy vs ETABS
   → mesa_torsion_best.py (formulación ganadora standalone)
   → mesa_torsion_iteration_summary.md (top 10 + ganador)
                                   ↓
4. Aplicar parámetros del ganador a examples/src/mesa-torsion/mesaTorsion.ts
   (densidad, mass model, diaphragm) y re-deploy
```

Si no hay ETABS reference disponible, el script usa **target SDOF teórico**
(período aproximado del oscilador 4-col en paralelo) como fallback —
útil para verificar que la mecánica de iteración corre sin errores antes
de tener ETABS levantado.

## Archivos

| Archivo | Contenido |
|---|---|
| `iterate_mesa_torsion.py` | Itera 144 variantes OpenSeesPy, rankea contra ETABS |
| `mesa_torsion_iteration_report.json` | Ranking completo (todas las variantes con score) |
| `mesa_torsion_iteration_summary.md` | Top 10 humanamente legible |
| `mesa_torsion_best.py` | Script standalone con la combinación ganadora |

## Variantes iteradas

```
shellType   : ShellMITC4 / ShellDKGQ / ShellNLDKGQ   (3 opciones)
massModel   : consistent / lumped                    (2)
diaphragm   : rigid / equalDOF / none                (3)
nMesh       : 4 / 5 / 6 / 8                          (4)
baseSupport : pinned / fixed                         (2)
colElem     : elastic                                (1)
─────────────────────────────────────────────────
Total = 3 × 2 × 3 × 4 × 2 × 1 = 144 combinaciones
```

OpenSeesPy 3.7.1 corre cada variante en < 1 s → iteración completa
~2 minutos total.

## Re-correr

```bash
cd validacion/Python
python iterate_mesa_torsion.py
```
