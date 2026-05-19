# -*- coding: utf-8 -*-
"""
Mesa de Torsión — Extracción esfuerzos en frames N, V2, V3, T, M2, M3

Nota ETABS 19.1: tras auto-mesh, los Objects (C1..B4) son discretizados en
LineElements con IDs numéricos '1'..'24'. `Results.FrameForce` solo acepta
los nombres de Line ELEMENTS (analytical), no de Objects (geometric).

Convención CSI:
    P    = axial (tracción +)
    V2   = corte en eje local 2  (≈ corte vertical para vigas/horizontal cols)
    V3   = corte en eje local 3  (perp al eje 2)
    T    = M1 = torsor (sobre eje longitudinal)
    M2   = flexión sobre eje 2  (eje débil para sección rectangular)
    M3   = flexión sobre eje 3  (eje fuerte)
"""
import sys, os, json
import comtypes.client

sys.stdout.reconfigure(encoding="utf-8")
HERE = os.path.dirname(os.path.abspath(__file__))

obj = comtypes.client.GetActiveObject("CSI.ETABS.API.ETABSObject")
SM = obj.SapModel

# Line ELEMENTS numerados 1..24 (4 cols + 20 segmentos viga, todos generados por auto-mesh)
n_line_elm = SM.LineElm.Count()
print(f"LineElements totales post-auto-mesh: {n_line_elm}")
line_names = [str(i + 1) for i in range(n_line_elm)]

# Para mapear back a Object: obtener cada LineElement → Object asociado
line_to_obj = {}
for name in line_names:
    try:
        r = SM.LineElm.GetObj(name)  # devuelve (Obj, Index, ret)
        if isinstance(r, tuple) and len(r) >= 1:
            line_to_obj[name] = r[0]
    except Exception:
        line_to_obj[name] = "?"

# Conteo de cuántos LineElm por cada Object original
obj_count = {}
for k, v in line_to_obj.items():
    obj_count[v] = obj_count.get(v, 0) + 1
print(f"  Auto-mesh segments per Object: {obj_count}")

# Casos
loadCases = ["Dead", "Live", "SCP"]
combos = ["UDCon1", "UDCon2"]

results = {}

def fmt(v):
    return f"{v:+.3f}"

for case_name in loadCases + combos:
    SM.Results.Setup.DeselectAllCasesAndCombosForOutput()
    is_combo = case_name in combos
    if is_combo:
        SM.Results.Setup.SetComboSelectedForOutput(case_name)
    else:
        SM.Results.Setup.SetCaseSelectedForOutput(case_name)

    print(f"\n{'='*108}")
    print(f"  CASO: {case_name}")
    print(f"{'='*108}")

    case_results = {}
    print(f"\n  {'Elem':<5} {'Obj':<5} {'Sta(m)':<8} {'P(tonf)':<10} {'V2(tonf)':<10} {'V3(tonf)':<10} {'T(t·m)':<10} {'M2(t·m)':<10} {'M3(t·m)':<10}")

    for el_name in line_names:
        try:
            ret = SM.Results.FrameForce(el_name, 0)
            n = ret[0]
            if n == 0:
                continue
            obj_sta = list(ret[2])
            P_arr   = list(ret[8])
            V2_arr  = list(ret[9])
            V3_arr  = list(ret[10])
            T_arr   = list(ret[11])
            M2_arr  = list(ret[12])
            M3_arr  = list(ret[13])

            obj_name = line_to_obj.get(el_name, "?")
            for i in range(n):
                print(f"  {el_name:<5} {obj_name:<5} {obj_sta[i]:<8.3f} {fmt(P_arr[i]):<10} {fmt(V2_arr[i]):<10} {fmt(V3_arr[i]):<10} {fmt(T_arr[i]):<10} {fmt(M2_arr[i]):<10} {fmt(M3_arr[i]):<10}")

            case_results[el_name] = {
                "obj_name": obj_name,
                "stations":   obj_sta,
                "P":          P_arr,
                "V2":         V2_arr,
                "V3":         V3_arr,
                "T":          T_arr,
                "M2":         M2_arr,
                "M3":         M3_arr,
                "max_abs": {
                    "P":  max(abs(p) for p in P_arr),
                    "V2": max(abs(v) for v in V2_arr),
                    "V3": max(abs(v) for v in V3_arr),
                    "T":  max(abs(t) for t in T_arr),
                    "M2": max(abs(m) for m in M2_arr),
                    "M3": max(abs(m) for m in M3_arr),
                },
            }
        except Exception as e:
            print(f"  {el_name:<5} ERR: {e}")

    results[case_name] = case_results

# Resumen: picos por Object original (agregando segmentos de auto-mesh)
print(f"\n{'='*108}")
print(f"  RESUMEN — Picos (|max|) agrupados por Object original")
print(f"{'='*108}")
print(f"  {'Case':<8} {'Obj':<6} {'|P|max':<10} {'|V2|max':<10} {'|V3|max':<10} {'|T|max':<10} {'|M2|max':<10} {'|M3|max':<10}")

obj_summary = {}
for case_name, case_data in results.items():
    obj_picos = {}
    for el_name, el_data in case_data.items():
        oname = el_data["obj_name"]
        if oname not in obj_picos:
            obj_picos[oname] = {"P":0,"V2":0,"V3":0,"T":0,"M2":0,"M3":0}
        for k in ["P", "V2", "V3", "T", "M2", "M3"]:
            obj_picos[oname][k] = max(obj_picos[oname][k], el_data["max_abs"][k])
    obj_summary[case_name] = obj_picos
    for oname in sorted(obj_picos.keys()):
        p = obj_picos[oname]
        print(f"  {case_name:<8} {oname:<6} {p['P']:<10.3f} {p['V2']:<10.3f} {p['V3']:<10.3f} {p['T']:<10.4f} {p['M2']:<10.4f} {p['M3']:<10.4f}")

# Save JSON
out_path = os.path.join(HERE, "mesa_torsion_etabs_frame_forces.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump({"by_element": results, "by_object_max": obj_summary,
               "n_line_elm": n_line_elm, "object_segments": obj_count},
              f, indent=2, default=str)
print(f"\n  JSON: {os.path.basename(out_path)}")
print("\n  Done.")
