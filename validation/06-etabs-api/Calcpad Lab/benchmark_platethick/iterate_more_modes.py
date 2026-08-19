#!/usr/bin/env python3
"""Try 8 incompatible modes + bubble enhanced strain."""
import sys, numpy as np
from numpy.linalg import solve
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

a, b, t = 6.0, 4.0, 0.10
E_kNm2, nu, q, kappa = 35e6, 0.15, 10.0, 5/6
G = E_kNm2 / (2*(1+nu))
SAP_W = -6.4567; SAP_MX = 6.4435; SAP_MY = 12.4305; SAP_MXY = 7.7089
n_a, n_b = 6, 4
n_e = n_a*n_b; n_j = (n_a+1)*(n_b+1)
a_1, b_1 = a/n_a, b/n_b
n_g = 3*n_j

D11 = E_kNm2*t**3/(12*(1-nu**2))
D_b = D11*np.array([[1,nu,0],[nu,1,0],[0,0,(1-nu)/2]])
D_s = kappa*G*t*np.eye(2)

x_j = np.zeros(n_j); y_j = np.zeros(n_j)
xv, yv = 0, 0
for j in range(n_j):
    x_j[j], y_j[j] = xv, yv
    yv += b_1
    if yv > b + 1e-9: yv, xv = 0, xv + a_1
e_j = np.zeros((n_e, 4), dtype=int)
for ia in range(n_a):
    for ib in range(n_b):
        e = ib + n_b*ia; j0 = e + ia
        e_j[e] = [j0, j0+n_b+1, j0+n_b+2, j0+1]

def N_def(xi,eta):
    return np.array([0.25*(1-xi)*(1-eta),0.25*(1+xi)*(1-eta),0.25*(1+xi)*(1+eta),0.25*(1-xi)*(1+eta)])
def dN_dxi(eta):  return np.array([-0.25*(1-eta),0.25*(1-eta),0.25*(1+eta),-0.25*(1+eta)])
def dN_deta(xi):  return np.array([-0.25*(1-xi),-0.25*(1+xi),0.25*(1+xi),0.25*(1-xi)])
def B_bend(xi,eta):
    dNx=(2/a_1)*dN_dxi(eta); dNy=(2/b_1)*dN_deta(xi)
    B = np.zeros((3,12))
    for i in range(4):
        B[0,i*3+1]=-dNx[i]; B[1,i*3+2]=-dNy[i]
        B[2,i*3+1]=-dNy[i]; B[2,i*3+2]=-dNx[i]
    return B

def B_bend_incomp_8(xi,eta):
    """8 incompatible modes:
       theta_x_extra = a1*(1-xi^2) + a2*(1-eta^2) + a3*xi*eta + a4*xi*eta*(1-xi^2-eta^2)
       theta_y_extra = a5*(1-xi^2) + a6*(1-eta^2) + a7*xi*eta + a8*xi*eta*(1-xi^2-eta^2)
       (modes 4,8 son bubbles para hourglass control)
    """
    # Derivatives wrt physical x,y (jacobian factor included)
    fx = 2/a_1; fy = 2/b_1
    # Mode 1: (1-xi^2) → dx = fx*(-2*xi), dy = 0
    d1x, d1y = fx*(-2*xi), 0
    # Mode 2: (1-eta^2) → dx = 0, dy = fy*(-2*eta)
    d2x, d2y = 0, fy*(-2*eta)
    # Mode 3: xi*eta → dx = fx*eta, dy = fy*xi
    d3x, d3y = fx*eta, fy*xi
    # Mode 4 (bubble): xi*eta*(1-xi^2-eta^2)
    # d/dxi = eta*(1-3*xi^2-eta^2); d/deta = xi*(1-xi^2-3*eta^2)
    d4x = fx*eta*(1 - 3*xi**2 - eta**2)
    d4y = fy*xi*(1 - xi**2 - 3*eta**2)

    B = np.zeros((3,8))
    # theta_x_extra → modes 1-4 → kappa_xx = -d(theta_x)/dx
    for k, (dx,dy) in enumerate([(d1x,d1y),(d2x,d2y),(d3x,d3y),(d4x,d4y)]):
        B[0,k] = -dx     # kappa_xx
        B[2,k] = -dy     # 2*kappa_xy contrib from theta_x
    # theta_y_extra → modes 5-8 → kappa_yy = -d(theta_y)/dy
    for k, (dx,dy) in enumerate([(d1x,d1y),(d2x,d2y),(d3x,d3y),(d4x,d4y)]):
        B[1,4+k] = -dy   # kappa_yy
        B[2,4+k] = -dx   # 2*kappa_xy contrib from theta_y
    return B

def B_shear_MITC4(xi,eta):
    tying=[(0,-1),(1,0),(0,1),(-1,0)]; dirs=[1,2,1,2]
    Bt = np.zeros((4,12))
    for k in range(4):
        xt,et=tying[k]
        Nw,dNx,dNy=N_def(xt,et),(2/a_1)*dN_dxi(et),(2/b_1)*dN_deta(xt)
        if dirs[k]==1:
            for i in range(4): Bt[k,i*3+0]=dNx[i]; Bt[k,i*3+1]=-Nw[i]
        else:
            for i in range(4): Bt[k,i*3+0]=dNy[i]; Bt[k,i*3+2]=-Nw[i]
    hA=0.5*(1-eta); hC=0.5*(1+eta); hD=0.5*(1-xi); hB=0.5*(1+xi)
    B = np.zeros((2,12))
    B[0,:] = hA*Bt[0]+hC*Bt[2]
    B[1,:] = hD*Bt[3]+hB*Bt[1]
    return B

s_j_data = []
for j in range(n_j):
    on_x = abs(x_j[j])<1e-9 or abs(x_j[j]-a)<1e-9
    on_y = abs(y_j[j])<1e-9 or abs(y_j[j]-b)<1e-9
    if on_x or on_y: s_j_data.append((j, on_x, on_y))

gp_e = 1/np.sqrt(3)
gps2 = [(-gp_e,-gp_e),(gp_e,-gp_e),(gp_e,gp_e),(-gp_e,gp_e)]
dV = a_1*b_1/4
sq3 = np.sqrt(3)
E_ex = np.array([[1+sq3/2,-.5,1-sq3/2,-.5],
                 [-.5,1+sq3/2,-.5,1-sq3/2],
                 [1-sq3/2,-.5,1+sq3/2,-.5],
                 [-.5,1-sq3/2,-.5,1+sq3/2]])

def solve_full(n_a_dof, Binc_fn, gauss_order):
    K_uu = np.zeros((12,12))
    K_ua = np.zeros((12,n_a_dof))
    K_aa = np.zeros((n_a_dof,n_a_dof))
    F_e = np.zeros(12)
    # Bending Gauss
    if gauss_order == 2:
        bend_pts = [(g[0],g[1],1.0) for g in gps2]
    elif gauss_order == 3:
        gp3 = np.array([-np.sqrt(3/5), 0, np.sqrt(3/5)])
        gw3 = np.array([5/9, 8/9, 5/9])
        bend_pts = [(gp3[i],gp3[j],gw3[i]*gw3[j]) for i in range(3) for j in range(3)]
    for xi, eta, wg in bend_pts:
        Bb = B_bend(xi,eta); Bba = Binc_fn(xi,eta)
        K_uu += Bb.T@D_b@Bb * dV * wg
        K_ua += Bb.T@D_b@Bba * dV * wg
        K_aa += Bba.T@D_b@Bba * dV * wg
    for xi,eta in gps2:
        Bs = B_shear_MITC4(xi,eta)
        K_uu += Bs.T@D_s@Bs * dV
        Nw = N_def(xi,eta)
        for i in range(4): F_e[i*3+0] -= q*Nw[i]*dV
    K_e = K_uu - K_ua@solve(K_aa,K_ua.T)
    K = np.zeros((n_g,n_g)); F = np.zeros(n_g)
    for e in range(n_e):
        for ni in range(4):
            ji = e_j[e,ni]
            for nj in range(4):
                jj = e_j[e,nj]
                for di in range(3):
                    for dj in range(3):
                        K[3*ji+di, 3*jj+dj] += K_e[3*ni+di, 3*nj+dj]
            for di in range(3): F[3*ji+di] += F_e[3*ni+di]
    for j, on_x, on_y in s_j_data:
        K[3*j,3*j] += 1e20
        if on_x: K[3*j+2, 3*j+2] += 1e20
        if on_y: K[3*j+1, 3*j+1] += 1e20
    Z = solve(K,F)
    # Recovery
    n_center = (n_a//2)*(n_b+1) + (n_b//2)
    w_c = Z[3*n_center+0] * 1000
    Mxx_n = np.zeros(n_j); Myy_n = np.zeros(n_j); Mxy_n = np.zeros(n_j); count = np.zeros(n_j)
    for e in range(n_e):
        Z_e = np.array([Z[3*e_j[e,i]+k] for i in range(4) for k in range(3)])
        M_gp = np.array([D_b @ B_bend(g[0],g[1]) @ Z_e for g in gps2]).T
        M_corner = M_gp @ E_ex.T
        for i in range(4):
            Mxx_n[e_j[e,i]] += M_corner[0,i]
            Myy_n[e_j[e,i]] += M_corner[1,i]
            Mxy_n[e_j[e,i]] += M_corner[2,i]
            count[e_j[e,i]] += 1
    Mxx_n /= np.maximum(count,1); Myy_n /= np.maximum(count,1); Mxy_n /= np.maximum(count,1)
    return w_c, abs(Mxx_n[n_center]), abs(Myy_n[n_center]), abs(Mxy_n[0])

# Modes 4 (baseline): just dN1dx, dN2dy
def B_inc4(xi,eta):
    dN1dx=(2/a_1)*(-2*xi); dN2dy=(2/b_1)*(-2*eta)
    B = np.zeros((3,4))
    B[0,0]=-dN1dx; B[1,3]=-dN2dy
    B[2,1]=-dN2dy; B[2,2]=-dN1dx
    return B
# Modes 6
def B_inc6(xi,eta):
    dN1dx=(2/a_1)*(-2*xi); dN2dy=(2/b_1)*(-2*eta)
    dN3dx=(2/a_1)*eta; dN3dy=(2/b_1)*xi
    B = np.zeros((3,6))
    B[0,0]=-dN1dx; B[1,3]=-dN2dy
    B[2,1]=-dN2dy; B[2,2]=-dN1dx
    B[0,4]=-dN3dx; B[1,5]=-dN3dy
    B[2,4]=-dN3dy; B[2,5]=-dN3dx
    return B

print(f"\n{'Variante':<55} | {'w':>9} | {'dW%':>7} | {'Mx':>9} | {'dMx%':>7} | "
      f"{'My':>9} | {'dMy%':>7} | {'Mxy':>9} | {'dMxy%':>7}")
print("-"*125)
variants = [
    ("4 modes (a1,a2 → theta_x,theta_y, separados)",       4, B_inc4, 2),
    ("6 modes (+ cross xi*eta)",                            6, B_inc6, 2),
    ("8 modes (+ cross + bubble xi*eta*(1-xi²-eta²))",      8, B_bend_incomp_8, 2),
    ("8 modes + 3x3 over-integrate bending",                8, B_bend_incomp_8, 3),
]
for name, n_dof, fn, go in variants:
    w_c, mx, my, mxy = solve_full(n_dof, fn, go)
    dw = (w_c-SAP_W)/SAP_W*100
    dmx = (mx-SAP_MX)/SAP_MX*100
    dmy = (my-SAP_MY)/SAP_MY*100
    dmxy = (mxy-SAP_MXY)/SAP_MXY*100
    print(f"{name:<55} | {w_c:>9.4f} | {dw:>+6.2f}% | {mx:>9.4f} | {dmx:>+6.2f}% | "
          f"{my:>9.4f} | {dmy:>+6.2f}% | {mxy:>9.4f} | {dmxy:>+6.2f}%")
print(f"\nSAP target: w={SAP_W}, Mx={SAP_MX}, My={SAP_MY}, Mxy={SAP_MXY}")
