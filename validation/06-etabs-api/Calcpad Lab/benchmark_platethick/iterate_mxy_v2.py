#!/usr/bin/env python3
"""V2 iteration: mesh refinement + patch recovery + Reissner correction"""
import sys, numpy as np
from numpy.linalg import solve
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

# Caso
a, b, t = 6.0, 4.0, 0.10
E_kNm2, nu, q, kappa = 35e6, 0.15, 10.0, 5/6
G = E_kNm2 / (2*(1+nu))
SAP_W = -6.4567; SAP_MXY = -7.7089

D11 = E_kNm2*t**3/(12*(1-nu**2))
D_b = D11*np.array([[1,nu,0],[nu,1,0],[0,0,(1-nu)/2]])
D_s = kappa*G*t*np.eye(2)

def solve_mesh(n_a, n_b):
    n_e = n_a*n_b
    n_j = (n_a+1)*(n_b+1)
    a_1, b_1 = a/n_a, b/n_b
    n_g = 3*n_j

    # Mesh
    x_j = np.zeros(n_j); y_j = np.zeros(n_j)
    xv, yv = 0, 0
    for j in range(n_j):
        x_j[j], y_j[j] = xv, yv
        yv += b_1
        if yv > b + 1e-9: yv, xv = 0, xv + a_1
    e_j = np.zeros((n_e, 4), dtype=int)
    for ia in range(n_a):
        for ib in range(n_b):
            e = ib + n_b*ia
            j0 = e + ia
            e_j[e] = [j0, j0+n_b+1, j0+n_b+2, j0+1]

    # Boundary nodes
    s_j = set()
    for j in range(n_j):
        if abs(x_j[j]) < 1e-9 or abs(x_j[j]-a) < 1e-9 \
           or abs(y_j[j]) < 1e-9 or abs(y_j[j]-b) < 1e-9:
            s_j.add(j)

    def N_def(xi, eta):
        return np.array([0.25*(1-xi)*(1-eta), 0.25*(1+xi)*(1-eta),
                         0.25*(1+xi)*(1+eta), 0.25*(1-xi)*(1+eta)])
    def dN_dxi(eta):  return np.array([-0.25*(1-eta), 0.25*(1-eta), 0.25*(1+eta), -0.25*(1+eta)])
    def dN_deta(xi):  return np.array([-0.25*(1-xi), -0.25*(1+xi), 0.25*(1+xi), 0.25*(1-xi)])
    def B_bend(xi, eta):
        dNx = (2/a_1)*dN_dxi(eta); dNy = (2/b_1)*dN_deta(xi)
        B = np.zeros((3,12))
        for i in range(4):
            B[0, i*3+1] = -dNx[i]; B[1, i*3+2] = -dNy[i]
            B[2, i*3+1] = -dNy[i]; B[2, i*3+2] = -dNx[i]
        return B
    def B_bend_incomp(xi, eta):
        dN1dx = (2/a_1)*(-2*xi); dN2dy = (2/b_1)*(-2*eta)
        B = np.zeros((3,4))
        B[0,0] = -dN1dx; B[1,3] = -dN2dy
        B[2,1] = -dN2dy; B[2,2] = -dN1dx
        return B
    def B_shear(xi, eta):
        tying = [(0,-1),(1,0),(0,1),(-1,0)]
        dirs = [1,2,1,2]
        Bt = np.zeros((4,12))
        for k in range(4):
            xt, et = tying[k]
            Nw, dNx, dNy = N_def(xt,et), (2/a_1)*dN_dxi(et), (2/b_1)*dN_deta(xt)
            if dirs[k] == 1:
                for i in range(4):
                    Bt[k, i*3+0] = dNx[i]; Bt[k, i*3+1] = -Nw[i]
            else:
                for i in range(4):
                    Bt[k, i*3+0] = dNy[i]; Bt[k, i*3+2] = -Nw[i]
        hA = 0.5*(1-eta); hC = 0.5*(1+eta)
        hD = 0.5*(1-xi);  hB = 0.5*(1+xi)
        B = np.zeros((2,12))
        B[0,:] = hA*Bt[0] + hC*Bt[2]
        B[1,:] = hD*Bt[3] + hB*Bt[1]
        return B

    gp_e = 1/np.sqrt(3)
    gps = [(-gp_e,-gp_e),(gp_e,-gp_e),(gp_e,gp_e),(-gp_e,gp_e)]
    dV = a_1*b_1/4

    K_uu = np.zeros((12,12)); K_ua = np.zeros((12,4)); K_aa = np.zeros((4,4))
    F_e = np.zeros(12)
    for xi,eta in gps:
        Bb = B_bend(xi,eta); Bba = B_bend_incomp(xi,eta); Bs = B_shear(xi,eta)
        K_uu += (Bb.T@D_b@Bb + Bs.T@D_s@Bs) * dV
        K_ua += Bb.T@D_b@Bba * dV
        K_aa += Bba.T@D_b@Bba * dV
        Nw = N_def(xi,eta)
        for i in range(4): F_e[i*3+0] -= q*Nw[i]*dV
    K_e = K_uu - K_ua @ solve(K_aa, K_ua.T)

    K = np.zeros((n_g, n_g)); F = np.zeros(n_g)
    for e in range(n_e):
        for ni in range(4):
            ji = e_j[e,ni]
            for nj in range(4):
                jj = e_j[e,nj]
                for di in range(3):
                    for dj in range(3):
                        K[3*ji+di, 3*jj+dj] += K_e[3*ni+di, 3*nj+dj]
            for di in range(3): F[3*ji+di] += F_e[3*ni+di]
    for js in s_j: K[3*js, 3*js] += 1e20
    Z = solve(K, F)

    # center
    n_center = (n_a//2)*(n_b+1) + (n_b//2)
    w_centro = Z[3*n_center+0] * 1000

    # Mxy esquina (0,0) — node 0
    sq3 = np.sqrt(3)
    E_ex = np.array([[1+sq3/2,-.5,1-sq3/2,-.5],
                     [-.5,1+sq3/2,-.5,1-sq3/2],
                     [1-sq3/2,-.5,1+sq3/2,-.5],
                     [-.5,1-sq3/2,-.5,1+sq3/2]])
    Mxy_n = np.zeros(n_j); count = np.zeros(n_j)
    for e in range(n_e):
        Z_e = np.zeros(12)
        for i in range(4):
            for k in range(3):
                Z_e[i*3+k] = Z[3*e_j[e,i] + k]
        M_gp = np.zeros((3,4))
        for k,(xi,eta) in enumerate(gps):
            M_gp[:,k] = D_b @ B_bend(xi,eta) @ Z_e
        M_corner = M_gp @ E_ex.T
        for i in range(4):
            Mxy_n[e_j[e,i]] += M_corner[2,i]
            count[e_j[e,i]] += 1
    Mxy_n /= np.maximum(count, 1)
    Mxy_corner = Mxy_n[0]
    Mxy_max = np.max(np.abs(Mxy_n))
    return w_centro, Mxy_corner, Mxy_max

print(f"SAP target: w={SAP_W} mm, Mxy esquina={SAP_MXY} kN*m/m\n")
print(f"{'Mesh':<10} | {'w_centro':>10} | {'dW%':>6} | {'Mxy esq':>9} | {'dMxy%':>7} | {'|Mxy|_max':>10}")
print("-"*80)
for na, nb in [(6,4),(8,6),(12,8),(16,10),(20,14),(30,20)]:
    w_c, mxy_c, mxy_max = solve_mesh(na, nb)
    dW = (w_c - SAP_W)/SAP_W * 100
    dMxy = (abs(mxy_c) - abs(SAP_MXY))/abs(SAP_MXY) * 100
    print(f"{na}x{nb:<7} | {w_c:>10.4f} | {dW:>+5.2f}% | {mxy_c:>9.4f} | {dMxy:>+6.2f}% | {mxy_max:>10.4f}")
