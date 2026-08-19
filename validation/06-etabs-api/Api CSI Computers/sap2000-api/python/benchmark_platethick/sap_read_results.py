"""
Script CORTO — conecta a SAP 2000 abierto y solo LEE los resultados del modelo
plate_thick_t40 ya cargado. No re-corre el análisis.
"""
import sys
import comtypes.client as cc
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

print("Conectando a SAP 2000 v24...", flush=True)
SapObject = cc.GetActiveObject("CSI.SAP2000.API.SapObject")
SapModel = SapObject.SapModel
print(f"  [OK] Conectado", flush=True)

# Resultados
SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
SapModel.Results.Setup.SetCaseSelectedForOutput("Q")

a_m, b_m = 6.0, 4.0
TONF_TO_KN = 9.80665

# w por nodo
NumberPoints, PointNames = 0, []
[NumberPoints, PointNames, ret] = SapModel.PointObj.GetNameList(NumberPoints, PointNames)
print(f"  Puntos: {NumberPoints}", flush=True)

w_dict = {}
pos = {}
for pName in PointNames:
    [X, Y, Z, ret] = SapModel.PointObj.GetCoordCartesian(pName, 0.0, 0.0, 0.0)
    pos[pName] = (X, Y)
    NR = 0; Obj = Elm = ACase = StepType = []; StepNum = U1 = U2 = U3 = R1 = R2 = R3 = []
    [NR, Obj, Elm, ACase, StepType, StepNum,
     U1, U2, U3, R1, R2, R3, ret] = SapModel.Results.JointDispl(
        pName, 0, NR, Obj, Elm, ACase, StepType, StepNum, U1, U2, U3, R1, R2, R3)
    if NR > 0:
        w_dict[pName] = U3[0]

w_max_mm = max(abs(w) for w in w_dict.values()) * 1000
print(f"  w_max = {w_max_mm:.4f} mm", flush=True)

# Momentos via AreaForceShell — solo elemento central
NA, AN = 0, []
[NA, AN, ret] = SapModel.AreaObj.GetNameList(NA, AN)
print(f"  Areas: {NA}", flush=True)

nodal_Mxx = {p: [] for p in PointNames}
nodal_Myy = {p: [] for p in PointNames}
nodal_Mxy = {p: [] for p in PointNames}

for k, aName in enumerate(AN):
    NR = 0; Obj = Elm = PE = LC = ST = []; SN = []
    F11=F22=F12=FMax=FMin=FAng=FVM=[]; M11=M22=M12=MMax=MMin=MAng=[]; V13=V23=VMax=VAng=[]
    [NR, Obj, Elm, PE, LC, ST, SN, F11, F22, F12, FMax, FMin, FAng, FVM,
     M11, M22, M12, MMax, MMin, MAng, V13, V23, VMax, VAng, ret] = SapModel.Results.AreaForceShell(
        aName, 0, NR, Obj, Elm, PE, LC, ST, SN, F11, F22, F12, FMax, FMin, FAng, FVM,
        M11, M22, M12, MMax, MMin, MAng, V13, V23, VMax, VAng)
    if ret == 0 and NR > 0:
        for i in range(NR):
            p = PE[i]
            if p in nodal_Mxx:
                nodal_Mxx[p].append(M11[i] * TONF_TO_KN)
                nodal_Myy[p].append(M22[i] * TONF_TO_KN)
                nodal_Mxy[p].append(M12[i] * TONF_TO_KN)

j_centro = None; j_esq = None
for p, (X, Y) in pos.items():
    if abs(X - a_m/2) < 1e-6 and abs(Y - b_m/2) < 1e-6:
        j_centro = p
    if abs(X) < 1e-6 and abs(Y) < 1e-6:
        j_esq = p

def avg(xs):
    return sum(xs)/len(xs) if xs else float('nan')

print(flush=True)
print("=" * 60, flush=True)
print("SAP 2000 v24 — Plate-Thick — t = 0.40 m", flush=True)
print("=" * 60, flush=True)
print(f"  w_max     = {w_max_mm:.4f} mm", flush=True)
if j_centro:
    print(f"  Mx centro = {avg(nodal_Mxx[j_centro]):.4f} kN*m/m", flush=True)
    print(f"  My centro = {avg(nodal_Myy[j_centro]):.4f} kN*m/m", flush=True)
if j_esq:
    print(f"  Mxy esq.  = {avg(nodal_Mxy[j_esq]):.4f} kN*m/m", flush=True)
print(f"  |Mxy|_max = {max(abs(avg(nodal_Mxy[p])) for p in PointNames):.4f} kN*m/m", flush=True)
print("=" * 60, flush=True)
print("SAP queda abierto.", flush=True)
