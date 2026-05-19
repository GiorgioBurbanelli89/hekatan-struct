#!/usr/bin/env python3
"""
End-to-end validation: Calcpad-Lab Python vs SAP 2000 v24.

Corre ambos solvers (Calcpad-Lab Python rapido, SAP 2000 v24 via OAPI)
y compara los resultados directamente. Util para regression testing.

Uso:
    python validate_e2e.py                # corre ambos
    python validate_e2e.py --skip-sap     # solo Python (con SAP cached)
    python validate_e2e.py --mesh 16,10   # custom mesh
"""
import sys, argparse, os, json
from pathlib import Path

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

# Import del solver
sys.path.insert(0, str(Path(__file__).parent))
from mindlin_q4_solver import MindlinPlate, compare_with_sap

# SAP 2000 cached reference (mesh 6x4, caso 6×4×0.10)
SAP_REF_CACHED = {
    'mesh_used':   '6x4 (SAP)',
    'w_centro':    -6.4567,
    'Mx_centro':    6.4435,
    'My_centro':   12.4305,
    'Mxy_esquina': -7.7089,
    'time_ms':     14030,
    'shell_type':  'Plate-Thick (ShellType=4) MITC4',
}

SAP_SCRIPT = Path(__file__).parent.parent.parent / "Api CSI Computers" / "sap2000-api" / "python" / "benchmark_platethick" / "sap2000_platethick_direct_M.py"


def run_sap(verbose=True):
    """Ejecuta el script SAP 2000 v24 via subprocess y parsea su output."""
    import subprocess
    if not SAP_SCRIPT.exists():
        if verbose: print(f"  ⚠️  SAP script no existe: {SAP_SCRIPT}")
        return None
    if verbose: print(f"\n  Lanzando SAP 2000 v24 (puede tardar ~15s)...")
    try:
        result = subprocess.run(
            ["python", str(SAP_SCRIPT)],
            capture_output=True, text=True, timeout=120,
            encoding='utf-8', errors='replace'
        )
    except subprocess.TimeoutExpired:
        if verbose: print("  ❌ SAP timeout (>120s)")
        return None
    except Exception as e:
        if verbose: print(f"  ❌ SAP error: {e}")
        return None
    if verbose:
        print(f"  SAP exit code: {result.returncode}")
    out = result.stdout
    # Parse: "w_max         = X.XXXX mm"
    import re
    data = {}
    for pattern, key in [
        (r"w_max\s*=\s*(-?\d+\.\d+)\s*mm",                 'w_centro'),
        (r"Mx centro\s*=\s*(-?\d+\.\d+)",                  'Mx_centro'),
        (r"My centro\s*=\s*(-?\d+\.\d+)",                  'My_centro'),
        (r"Mxy esquina\s*=\s*(-?\d+\.\d+)",                'Mxy_esquina'),
        (r"Tiempo SAP\s*=\s*(\d+)\s*ms",                   'time_ms'),
    ]:
        m = re.search(pattern, out)
        if m:
            data[key] = float(m.group(1))
    # SAP returns w_max as positive — convertir a negativo (carga -z)
    if 'w_centro' in data and data['w_centro'] > 0:
        data['w_centro'] = -data['w_centro']
    if data.get('Mxy_esquina', 0) > 0:
        # check actual sign from raw output
        sign_match = re.search(r"Mxy esquina\s*=\s*(-?)(\d+\.\d+)", out)
        if sign_match and sign_match.group(1) == '-':
            data['Mxy_esquina'] = -data['Mxy_esquina']
    return data


def main():
    parser = argparse.ArgumentParser(description="E2E validation Calcpad-Lab vs SAP 2000")
    parser.add_argument('--mesh', default='12,8',
                        help='Mesh n_a,n_b (default: 12,8)')
    parser.add_argument('--skip-sap', action='store_true',
                        help='No lanzar SAP, usar valores cached')
    parser.add_argument('--json', metavar='FILE',
                        help='Guardar resultados en JSON')
    args = parser.parse_args()

    n_a, n_b = [int(x) for x in args.mesh.split(',')]

    print("\n" + "=" * 76)
    print("  E2E Validation — Mindlin-Reissner Q4 Plate")
    print("  Caso: a=6, b=4, t=0.10, E=35e6, nu=0.15, q=10, SS hard")
    print("=" * 76)

    # 1) Calcpad-Lab Python
    print(f"\n[1/2] Calcpad-Lab Python (mesh {n_a}x{n_b}, MITC4+Wilson+Cook)")
    print("-" * 76)
    plate = MindlinPlate(a=6, b=4, t=0.10, E=35e6, nu=0.15, q=10,
                         n_a=n_a, n_b=n_b)
    res_cl = plate.solve()

    # 2) SAP 2000 (real o cached)
    print(f"\n[2/2] SAP 2000 v24 — {'(skipping, using cached)' if args.skip_sap else 'running OAPI'}")
    print("-" * 76)
    if args.skip_sap:
        res_sap = SAP_REF_CACHED
        print(f"  Cached: mesh {res_sap['mesh_used']}, time ~{res_sap['time_ms']} ms")
    else:
        res_sap = run_sap()
        # Validar que SAP devolvio todos los campos esperados
        required_keys = ('w_centro', 'Mx_centro', 'My_centro', 'Mxy_esquina')
        if res_sap is None or not all(k in res_sap for k in required_keys):
            print(f"\n  ⚠️  SAP no devolvio resultados completos — usando cached:")
            res_sap = SAP_REF_CACHED

    # 3) Comparativa
    compare_with_sap(res_cl, sap_ref={
        'w_centro':    res_sap['w_centro'],
        'Mx_centro':   abs(res_sap.get('Mx_centro', 0)),
        'My_centro':   abs(res_sap.get('My_centro', 0)),
        'Mxy_esquina': abs(res_sap.get('Mxy_esquina', 0)),
    })

    # 4) Speed
    sap_t = res_sap.get('time_ms', 14000)
    speedup = sap_t / res_cl['t_solve_ms']
    print(f"\n  Speedup Calcpad/SAP: {speedup:.1f}x")

    if args.json:
        with open(args.json, 'w') as f:
            json.dump({
                'calcpad': {k: v for k, v in res_cl.items()
                            if k not in ('Z', 'Mxx_nodal', 'Myy_nodal', 'Mxy_nodal')},
                'sap': res_sap,
            }, f, indent=2)
        print(f"\n  JSON saved to: {args.json}")


if __name__ == '__main__':
    main()
