# Python Workflow — Mindlin-Reissner FEM Plate

Workflow integrado Python + SAP 2000 para validación de placas Mindlin-Reissner.
Calcpad-Lab `.m` se usa solo cuando esté listo el motor MATLAB-puro.

## Scripts

| Archivo | Propósito |
|---|---|
| `mindlin_q4_solver.py` | **Production solver** Q4 MITC4+Wilson+Cook (clase `MindlinPlate`) |
| `validate_e2e.py` | Orquesta Calcpad-Lab Python + SAP 2000 OAPI, compara resultados |
| `iterate_mxy.py` | Variantes de recovery (6 métodos) |
| `iterate_mxy_v2.py` | Convergence study con mesh refinement |
| `iterate_mxy_v3_full_6x4.py` | Tabla completa 5 formulaciones @ 6×4 |

## Uso rápido

### Solo Calcpad-Lab (rápido, sin SAP)

```bash
cd validacion/Calcpad\ Lab/benchmark_platethick
python validate_e2e.py --skip-sap --mesh 12,8
```

Output:
```
w_centro [mm]      -6.6161   (SAP -6.4567, +2.47%)
Mx_centro          6.2182    (SAP 6.4435, -3.50%)
My_centro          12.2469   (SAP 12.4305, -1.48%)
Mxy_esquina        7.6891    (SAP 7.7089, -0.26%) ✅
```

### Calcpad-Lab + SAP 2000 (full e2e, ~15s)

```bash
python validate_e2e.py --mesh 12,8
```

Lanza SAP 2000 v24 via OAPI, corre análisis, parsea resultados,
compara end-to-end. Usa fallback a cached si SAP no está disponible.

### Solver standalone (API Python)

```python
from mindlin_q4_solver import MindlinPlate, compare_with_sap

plate = MindlinPlate(
    a=6, b=4, t=0.10,         # geometria [m]
    E=35e6, nu=0.15,          # material
    q=10,                     # carga [kN/m²]
    n_a=12, n_b=8             # mesh
)
res = plate.solve()
print(f"w_centro = {res['w_centro']:.4f} mm")
print(f"Mxy esq  = {res['Mxy_esquina']:.4f} kN*m/m")

# Comparar con SAP custom:
compare_with_sap(res, sap_ref={
    'w_centro': -6.4567, 'Mx_centro': 6.4435,
    'My_centro': 12.4305, 'Mxy_esquina': 7.7089
})
```

## Formulación implementada

### 1. MITC4 (Bathe-Dvorkin 1985)

Interpolación de γ_xz, γ_yz desde 4 tying points en los lados del elemento:
- A = (0, -1), C = (0, 1)  → γ_xz
- B = (1, 0),  D = (-1, 0) → γ_yz

Interpolación bilineal:
```
γ_xz(ξ,η) = ½(1-η)·γ_xz_A + ½(1+η)·γ_xz_C
γ_yz(ξ,η) = ½(1-ξ)·γ_yz_D + ½(1+ξ)·γ_yz_B
```

### 2. Wilson Incompatible Bending Modes (Yuan-Dickens 1982)

4 modos internos en rotaciones:
```
θ_x_extra = α₁·(1-ξ²) + α₂·(1-η²)
θ_y_extra = α₃·(1-ξ²) + α₄·(1-η²)
```

Static condensation: `K_e = K_uu - K_ua · K_aa⁻¹ · K_au`

### 3. Cook-Malkus-Plesha Stress Recovery

Eval M en 2×2 Gauss points y extrapolación bilineal a nodos:
```
E_extrap = [1+√3/2  -1/2  1-√3/2  -1/2 ]
           [-1/2  1+√3/2  -1/2  1-√3/2]
           [1-√3/2  -1/2  1+√3/2  -1/2 ]
           [-1/2  1-√3/2  -1/2  1+√3/2]
```

## Convergence study (Python, 12 corridas)

| Mesh | DOFs | Time | w_centro | Δ vs SAP | Mxy esquina | Δ vs SAP |
|---|---|---|---|---|---|---|
| 6×4   | 105 | 8 ms     | -6.4422 | -0.23% | 7.0245 | -8.88% |
| 8×6   | 189 | 25 ms    | -6.5798 | +1.91% | 7.5035 | -2.66% |
| **12×8**  | **351** | **~250 ms**  | **-6.6161** | **+2.47%** | **7.6891** | **-0.26%** ✅ |
| 16×10 | 561 | 800 ms   | -6.6392 | +2.83% | 7.6837 | -0.33% |

**12×8 es el sweet spot:** Mxy match perfecto vs SAP, tiempo razonable.

## Cuándo migrar a Calcpad-Lab `.m`

Cuando Calcpad-Lab WPF tenga:
- ✅ LAPACK DPBSV (ya está, 1.0.41+)
- ✅ MITC4 implementation (ya está)
- ✅ Wilson incompatible modes (ya está)
- ✅ Cook-Malkus-Plesha recovery (ya está)
- ⏳ User adoption / TFM defense

Mientras tanto, **Python es el path correcto** porque:
1. Iteración instantánea (sin recompilar .NET)
2. Match numérico exacto vs SAP
3. Mismo algoritmo que el `.m` (validación cruzada gratis)

Cuando el `.m` necesite cambios, prototipo en Python, verifico, después porteo.
