# Mesa de Torsión — Iteración FEM en Python (OpenSeesPy)

Target (`SDOF analítico (sin ETABS)`):

- **T₁ (lateral X)** = 0.09650 s
- **T₂ (lateral Y)** = 0.09650 s
- **T₃ (torsión Rz)** = 0.04144 s

Variantes evaluadas: **144** (144 válidas, 0 con error)

## Top 10 — mejor match con ETABS

| Rank | Shell        | Mass       | Diaphragm | nMesh | Base    | T₁(s)   | T₂(s)   | T₃(s)   | err T₁ | err T₂ | err T₃ | Score |
|------|--------------|------------|-----------|-------|---------|---------|---------|---------|--------|--------|--------|-------|
| 1 | ShellDKGQ    | lumped     | equalDOF  |     5 | fixed   | 0.0733 | 0.0733 | 0.0416 | +24.06% | +24.06% | +0.50% | 0.4861 |
| 2 | ShellNLDKGQ  | lumped     | equalDOF  |     5 | fixed   | 0.0733 | 0.0733 | 0.0416 | +24.06% | +24.06% | +0.50% | 0.4861 |
| 3 | ShellMITC4   | lumped     | equalDOF  |     6 | fixed   | 0.0731 | 0.0731 | 0.0411 | +24.21% | +24.21% | +0.87% | 0.4929 |
| 4 | ShellDKGQ    | lumped     | equalDOF  |     4 | fixed   | 0.0733 | 0.0733 | 0.0408 | +24.07% | +24.07% | +1.57% | 0.4972 |
| 5 | ShellNLDKGQ  | lumped     | equalDOF  |     4 | fixed   | 0.0733 | 0.0733 | 0.0408 | +24.07% | +24.07% | +1.57% | 0.4972 |
| 6 | ShellDKGQ    | lumped     | equalDOF  |     6 | fixed   | 0.0733 | 0.0733 | 0.0422 | +24.05% | +24.05% | +1.90% | 0.5000 |
| 7 | ShellNLDKGQ  | lumped     | equalDOF  |     6 | fixed   | 0.0733 | 0.0733 | 0.0422 | +24.05% | +24.05% | +1.90% | 0.5000 |
| 8 | ShellMITC4   | lumped     | equalDOF  |     8 | fixed   | 0.0732 | 0.0732 | 0.0424 | +24.10% | +24.10% | +2.27% | 0.5046 |
| 9 | ShellDKGQ    | lumped     | equalDOF  |     8 | fixed   | 0.0733 | 0.0733 | 0.0430 | +24.04% | +24.04% | +3.68% | 0.5175 |
| 10 | ShellNLDKGQ  | lumped     | equalDOF  |     8 | fixed   | 0.0733 | 0.0733 | 0.0430 | +24.04% | +24.04% | +3.68% | 0.5175 |

## 🏆 Ganador

- Shell: **ShellDKGQ**
- Mass model: **lumped**
- Diaphragm constraint: **equalDOF**
- Mesh: **5×5**
- Base support: **fixed**

Script standalone: `mesa_torsion_best.py`
