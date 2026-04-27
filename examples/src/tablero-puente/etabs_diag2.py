import comtypes.client
sm = comtypes.client.GetActiveObject("CSI.ETABS.API.ETABSObject").SapModel
n, names, px, py, pz, cs = sm.PointObj.GetAllPoints()
print(f"Total joints: {n}")
print(f"\nPrimeros 5 names: {[names[i] for i in range(min(5,n))]}")
print(f"Tipo names: {type(names)}, type names[0]: {type(names[0])}")
print(f"\nBuscando joints en x=0 o x=15, y in [1,3,5]:")
matches = []
for i in range(n):
    if abs(pz[i]) > 1e-3: continue
    if abs(px[i]) < 1e-3 or abs(px[i] - 15.0) < 1e-3:
        for yc in [1.0, 3.0, 5.0]:
            if abs(py[i] - yc) < 1e-3:
                matches.append((names[i], px[i], py[i], pz[i]))
                break
print(f"Matches: {len(matches)}")
for m in matches:
    print(f"  Joint={m[0]} at ({m[1]:.3f}, {m[2]:.3f}, {m[3]:.3f})")

# Probar SetRestraint en uno
if matches:
    print(f"\nProbando SetRestraint en {matches[0][0]}:")
    ret = sm.PointObj.SetRestraint(matches[0][0], [True, True, True, False, False, False])
    print(f"  ret={ret}")
    # Verificar
    n2, names2, px2, py2, pz2, cs2 = sm.PointObj.GetAllPoints()
    r = sm.PointObj.GetRestraint(matches[0][0], [False]*6)
    print(f"  GetRestraint despues: {r}")
