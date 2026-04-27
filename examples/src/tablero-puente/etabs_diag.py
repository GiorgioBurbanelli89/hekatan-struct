# Diagnostic: lista todos los joints restrained en el ETABS abierto
import comtypes.client
sm = comtypes.client.GetActiveObject("CSI.ETABS.API.ETABSObject").SapModel
n, names, px, py, pz, cs = sm.PointObj.GetAllPoints()
print(f"Total joints: {n}")

restrained = []
for i in range(n):
    try:
        # GetRestraint(name, dof[6]) — dof es out param
        r = sm.PointObj.GetRestraint(names[i], [False]*6)
        # r puede ser ([restraints], ret) o ([dof_array], ret)
        if isinstance(r, tuple) and len(r) >= 1:
            dof = r[0]
            if any(dof):
                restrained.append((names[i], px[i], py[i], pz[i], list(dof)))
    except Exception as e:
        pass

print(f"\nTotal restrained: {len(restrained)}")
for j in restrained[:20]:
    print(f"  Joint={j[0]} at ({j[1]:.2f}, {j[2]:.2f}, {j[3]:.2f}) DOF={j[4]}")
if len(restrained) > 20:
    print(f"  ... y {len(restrained)-20} mas")
