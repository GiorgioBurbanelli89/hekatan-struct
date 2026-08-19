"""
Debug: inspect AreaForceShell tuple structure in SAP2000 v24 API.
Conecta a la instancia abierta de SAP (con el modelo plate_thin ya cargado)
y printea el resultado de AreaForceShell para 1 elemento, indice por indice.
"""
import sys
import comtypes.client as cc

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

helper = cc.CreateObject("SAP2000v1.Helper")
try:
    import comtypes
    helper = helper.QueryInterface(comtypes.gen.SAP2000v1.cHelper)
except Exception:
    pass

SapObject = helper.GetObject("CSI.SAP2000.API.SapObject")
SapModel = SapObject.SapModel

# Asegurar caso seleccionado
SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
SapModel.Results.Setup.SetCaseSelectedForOutput("Q")

# Tomar primer area
NA = 0; AN = []
[NA, AN, _] = SapModel.AreaObj.GetNameList(NA, AN)
print(f"Total areas: {NA}")
target = AN[len(AN)//2]   # tomar uno del medio
print(f"Target area: {target}")

# Llamar AreaForceShell con argumentos por defecto
NumberResults = 0
Obj = Elm = PointElm = LoadCase = StepType = []
StepNum = F11 = F22 = F12 = FMax = FMin = FAng = M11 = M22 = M12 = []
VMax = V13 = V23 = MaxV = []

args = [NumberResults, Obj, Elm, PointElm, LoadCase, StepType, StepNum,
        F11, F22, F12, FMax, FMin, FAng, M11, M22, M12, VMax, V13, V23, MaxV]
res = SapModel.Results.AreaForceShell(target, 0, *args)

print(f"\nReturned tuple length: {len(res)}")
print("=" * 70)

# Nombres esperados segun la firma del API
expected_names = [
    "NumberResults", "Obj", "Elm", "PointElm", "LoadCase", "StepType", "StepNum",
    "F11", "F22", "F12", "FMax", "FMin", "FAng",
    "M11", "M22", "M12",
    "VMax", "V13", "V23", "MaxV",
    "ret",
]

# Printear cada item con su tipo y contenido
for i, item in enumerate(res):
    label = expected_names[i] if i < len(expected_names) else f"item_{i}"
    if isinstance(item, (tuple, list)):
        contents = list(item)
        if len(contents) <= 6:
            print(f"  [{i:2}] {label:14} = {contents} (type: {type(item).__name__}, len={len(contents)})")
        else:
            print(f"  [{i:2}] {label:14} = first 3: {contents[:3]} ... last: {contents[-1]} (len={len(contents)})")
    elif isinstance(item, (int, float)):
        print(f"  [{i:2}] {label:14} = {item}  (type: {type(item).__name__})")
    else:
        print(f"  [{i:2}] {label:14} = {item}  (type: {type(item).__name__})")
