"""Quick comparison: OpenSees MITC4 vs Navier for losa-rect params"""
import openseespy.opensees as ops
import numpy as np

a, b = 6.0, 4.0
nx, ny = 12, 8
t = 0.1
E, nu = 35e6, 0.15
q = -10.0

# Navier
D = E * t**3 / (12 * (1 - nu**2))
w_nav = 0
for m in range(1, 20, 2):
    for n in range(1, 20, 2):
        mn = (m**2/a**2 + n**2/b**2)
        w_nav += 1/(m*n*mn**2)
w_nav *= 16*abs(q)/(np.pi**6*D)
print(f"Navier: {w_nav:.6e} m = {w_nav*1000:.4f} mm")

# OpenSees
ops.wipe()
ops.model('basic', '-ndm', 3, '-ndf', 6)
dx, dy = a/nx, b/ny
nid = 1; nm = {}
for j in range(ny+1):
    for i in range(nx+1):
        ops.node(nid, i*dx, j*dy, 0.0); nm[(i,j)] = nid; nid += 1
ops.nDMaterial('ElasticIsotropic', 1, E, nu)
ops.section('PlateFiber', 1, 1, t)
eid = 1
for j in range(ny):
    for i in range(nx):
        ops.element('ShellMITC4', eid, nm[(i,j)], nm[(i+1,j)], nm[(i+1,j+1)], nm[(i,j+1)], 1)
        eid += 1
# SS on all edges
for j in range(ny+1):
    for i in range(nx+1):
        if i==0 or i==nx or j==0 or j==ny:
            ops.fix(nm[(i,j)], 1, 1, 1, 0, 0, 0)
ops.timeSeries('Constant', 1)
ops.pattern('Plain', 1, 1)
for j in range(ny+1):
    for i in range(nx+1):
        fx = dx; fy = dy
        if i==0 or i==nx: fx = dx/2
        if j==0 or j==ny: fy = dy/2
        ops.load(nm[(i,j)], 0, 0, q*fx*fy, 0, 0, 0)
ops.system('BandSPD'); ops.numberer('RCM'); ops.constraints('Plain')
ops.integrator('LoadControl', 1.0); ops.algorithm('Linear')
ops.analysis('Static'); ops.analyze(1)
w_os = ops.nodeDisp(nm[(nx//2, ny//2)], 3)
err_os = abs((abs(w_os) - w_nav)/w_nav*100)
print(f"OpenSees MITC4: {w_os:.6e} m = {w_os*1000:.4f} mm, error = {err_os:.2f}%")
print(f"WASM MITC4:     -6.604875e-3 m, error = 7.42%")
ops.wipe()
