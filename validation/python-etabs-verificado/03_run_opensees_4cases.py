# -*- coding: utf-8 -*-
"""
Wrapper que importa los 4 modelos OpenSeesPy del usuario y corre Modal Analysis
en cada uno. Imprime tabla comparativa.

Modelos:
  1. perimeter_walls_rigid_element_mass     — Rigid Diaphragm + masa de elementos
  2. perimeter_walls_rigid_nodal_mass       — Rigid Diaphragm + masa nodal
  3. perimeter_walls_semi_rigid_element_mass — Semi-Rigid + masa de elementos
  4. perimeter_walls_semi_rigid_nodal_mass   — Semi-Rigid + masa nodal
"""
import sys, importlib, math
import numpy as np

sys.stdout.reconfigure(encoding='utf-8')

# Importar OpenSeesPy una vez
import openseespy.opensees as ops

MODULES = [
    "perimeter_walls_rigid_element_mass",
    "perimeter_walls_rigid_nodal_mass",
    "perimeter_walls_semi_rigid_element_mass",
    "perimeter_walls_semi_rigid_nodal_mass",
]


def run_modal(num_modes=10):
    """Corre eigenanalysis y retorna lista de períodos."""
    try:
        eig_vals = ops.eigen("-fullGenLapack", num_modes)
    except Exception as e:
        print(f"  [ERROR] eigen falló: {e}")
        return []
    periods = []
    for ev in eig_vals:
        if ev > 1e-12:
            omega = math.sqrt(ev)
            T = 2 * math.pi / omega
            periods.append(T)
        else:
            periods.append(float('inf'))
    return periods


print("=" * 90)
print("  COMPARATIVA OpenSeesPy — Edificio perimeter_walls (10×8m, 3 pisos)")
print("=" * 90)

results = {}
for modname in MODULES:
    print(f"\n--- {modname} ---")
    try:
        # Recargar el módulo en cada iteración (ops.wipe limpia, pero por si acaso)
        if modname in sys.modules:
            del sys.modules[modname]
        mod = importlib.import_module(modname)
        ops.wipe()
        mod.build_model()
        periods = run_modal(10)
        results[modname] = periods
        for i, T in enumerate(periods[:6]):
            print(f"  Modo {i+1}: T = {T:.4f} s, f = {1/T if T>0 and T!=float('inf') else 0:.4f} Hz")
    except Exception as e:
        print(f"  [ERROR] {e}")
        results[modname] = []

# Tabla
print("\n" + "=" * 90)
print(f"  {'Modo':<5} {'Rigid+Elm':<14} {'Rigid+Nodal':<14} {'SemiR+Elm':<14} {'SemiR+Nodal':<14}")
print("  " + "-" * 80)
n_modes = 6
for i in range(n_modes):
    cells = [f"{i+1:<5}"]
    for m in MODULES:
        ts = results.get(m, [])
        if i < len(ts):
            v = ts[i]
            cells.append(f"{v:<14.4f}" if v != float('inf') else f"{'inf':<14}")
        else:
            cells.append(f"{'—':<14}")
    print("  " + " ".join(cells))

print("\n  Diferencia Rigid vs Semi-Rigid (con masa elementos):")
if results.get("perimeter_walls_rigid_element_mass") and results.get("perimeter_walls_semi_rigid_element_mass"):
    Tr = results["perimeter_walls_rigid_element_mass"]
    Ts = results["perimeter_walls_semi_rigid_element_mass"]
    for i in range(min(3, len(Tr), len(Ts))):
        if Tr[i] > 0 and Ts[i] > 0 and Tr[i] != float('inf'):
            d = (Ts[i] - Tr[i]) / Tr[i] * 100
            print(f"    Modo {i+1}:  T_Rigid = {Tr[i]:.4f}  T_SemiRigid = {Ts[i]:.4f}  Δ = {d:+.2f}%")
