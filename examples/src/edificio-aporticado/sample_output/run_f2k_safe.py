"""
Ejecuta un .f2k en SAFE 20.x via OAPI (Open API) y extrae resultados.

Requiere:
- SAFE 20.x instalado en Windows (con OAPI registrada)
- Python con comtypes:  pip install comtypes

Uso:
    python run_f2k_safe.py [path_al_f2k]

Si no se pasa argumento, usa el F2K muestra del repo.

Lo que hace:
1. Abre SAFE (vía COM)
2. Carga el F2K
3. Corre análisis estático
4. Lee desplazamientos en cada joint
5. Lee fuerzas en springs (presiones de contacto)
6. Lee momentos M11/M22 en slabs (zapatas)
7. Exporta tabla CSV con resumen
8. Cierra SAFE
"""
import os
import sys
import csv
from pathlib import Path

try:
    import comtypes.client
except ImportError:
    print("ERROR: instala comtypes con: pip install comtypes")
    sys.exit(1)

# ── Path al F2K ──
F2K_DEFAULT = Path(__file__).parent / "cimentacion_edificio_9zapatas_12vigas.f2k"
F2K_PATH = Path(sys.argv[1]) if len(sys.argv) > 1 else F2K_DEFAULT
if not F2K_PATH.exists():
    print(f"ERROR: archivo no existe: {F2K_PATH}")
    sys.exit(1)
F2K_PATH = F2K_PATH.absolute()
OUT_CSV = F2K_PATH.with_suffix(".results.csv")
OUT_LOG = F2K_PATH.with_suffix(".log")

print(f"=== SAFE OAPI runner ===")
print(f"F2K input  : {F2K_PATH}")
print(f"CSV output : {OUT_CSV}")
print()

# ── Conectar a SAFE ──
# Diferentes versiones usan diferentes ProgIDs:
#   SAFEv1.Helper  — versiones SAFE 12+
#   SafeAPI.Helper — algunas versiones legacy
PROG_IDS = ["SAFEv1.Helper", "SafeAPI.Helper", "CSI.SAFE.API.ETABSObject"]
helper = None
for pid in PROG_IDS:
    try:
        print(f"Probando ProgID: {pid}")
        helper = comtypes.client.CreateObject(pid)
        print(f"   [OK] {pid} encontrado")
        break
    except Exception as e:
        print(f"   [FAIL] {pid}: {e}")

if helper is None:
    print("\nERROR: No se pudo conectar a SAFE OAPI.")
    print("Verifica que SAFE 20.x esté instalado y la OAPI registrada.")
    print("Alternativa manual: abrir SAFE, File → Import → SAFE .f2k File")
    sys.exit(1)

# Crear instancia SAFE
mySafe = helper.CreateObject(r"C:\Program Files\Computers and Structures\SAFE 20\SAFE.exe")
mySafe.ApplicationStart()
sapModel = mySafe.SapModel

print("\n=== Importando F2K ===")
ret = sapModel.File.OpenFile(str(F2K_PATH))
if ret != 0:
    print(f"ERROR: OpenFile retornó {ret}")
    mySafe.ApplicationExit(False)
    sys.exit(1)
print("   [OK] F2K cargado")

# Set units a tonf, m, C
sapModel.SetPresentUnits(8)  # 8 = tonf, m, C en SAFE

# ── Correr análisis ──
print("\n=== Corriendo análisis ===")
ret = sapModel.Analyze.RunAnalysis()
if ret != 0:
    print(f"ERROR: RunAnalysis retornó {ret}")
else:
    print("   [OK] Análisis completado")

# ── Leer resultados ──
print("\n=== Leyendo resultados ===")
results = []

# 1) Desplazamientos en joints especiales (centros de columnas, IDs 9, 18, 27, ...)
joint_ids_carga = [9, 18, 27, 36, 45, 54, 63, 72, 81]
sapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
sapModel.Results.Setup.SetCaseSelectedForOutput("Dead")

for jid in joint_ids_carga:
    try:
        # JointDispl: NumberResults, Obj, Elm, LoadCase, StepType, StepNum, U1, U2, U3, R1, R2, R3
        ret = sapModel.Results.JointDispl(str(jid), 0, 0,
            [], [], [], [], [], [], [], [], [], [])
        n = ret[0]
        if n > 0:
            # Tomar el primer (y único) resultado
            results.append({
                "Tipo": "JointDispl",
                "Nodo": jid,
                "U1_m": ret[6][0],
                "U2_m": ret[7][0],
                "U3_m": ret[8][0],
                "R1": ret[9][0],
                "R2": ret[10][0],
                "R3": ret[11][0],
            })
    except Exception as e:
        print(f"   [WARN] Joint {jid}: {e}")

# 2) Reacciones en springs
print("\n   Reacciones spring (q de contacto):")
try:
    ret = sapModel.Results.JointReact("ALL", 1, 0, [], [], [], [], [], [], [], [], [], [])
    n = ret[0]
    print(f"   {n} reacciones leídas")
except Exception as e:
    print(f"   [WARN] {e}")

# 3) Áreas: M11, M22 (momentos por unidad de longitud)
print("\n   Momentos en slabs (zapatas):")
slab_names = [str(i+1) for i in range(9)]
for name in slab_names:
    try:
        # AreaForceShell devuelve M11, M22, M12 etc por elemento de la malla
        ret = sapModel.Results.AreaForceShell(name, 0, 0,
            [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [])
        n = ret[0]
        if n > 0:
            # Reportar solo el máximo |M11| de los elementos del slab
            M11s = ret[8]
            M22s = ret[9]
            M11_max = max([abs(v) for v in M11s], default=0)
            M22_max = max([abs(v) for v in M22s], default=0)
            results.append({
                "Tipo": "SlabMoment",
                "Slab": name,
                "M11_max_tonf_m_per_m": M11_max,
                "M22_max_tonf_m_per_m": M22_max,
                "n_elementos_mesh": n,
            })
            print(f"   Zapata {name}: |M11|max={M11_max:.3f}, |M22|max={M22_max:.3f} tonf·m/m, mesh={n}")
    except Exception as e:
        print(f"   [WARN] Zapata {name}: {e}")

# ── Guardar CSV ──
print(f"\n=== Guardando CSV ===")
if results:
    with open(OUT_CSV, "w", newline="", encoding="utf-8") as f:
        # Tomar todas las claves únicas
        all_keys = set()
        for r in results:
            all_keys.update(r.keys())
        writer = csv.DictWriter(f, fieldnames=sorted(all_keys))
        writer.writeheader()
        for r in results:
            writer.writerow(r)
    print(f"   [OK] {OUT_CSV}")
else:
    print("   [WARN] Sin resultados")

# ── Salir ──
mySafe.ApplicationExit(False)
print("\n=== Listo ===")
print(f"   Output: {OUT_CSV}")
print(f"   F2K mantenido: {F2K_PATH}")
