# -*- coding: utf-8 -*-
r"""Ibrahimbegovic (1993), los DOS elementos, con las ecuaciones leidas del PNG
(el OCR del texto las destroza).

Indices (3.19):  I=1..4,  J=mod(I,4)+1 (el siguiente),  K=I-1+4*int(1/I) (el
anterior),  L=K+4,  M=I+4.

(3.21) B_I = [ 0   0            -dN_I/dx1 ]
             [ 0   dN_I/dx2      0        ]
             [ 0   dN_I/dx1     -dN_I/dx2 ]

(3.23) gamma*_I = 1/(t^t_IJ n_IK) [ (1/l_IK) n_IJ w_K + (1/l_IJ) n_IK w_J
                                  - ((1/l_IK) n_IJ + (1/l_IJ) n_IK) w_I
                                  + 1/2 n_IJ n^t_IK theta_K
                                  - 1/2 n_IK n^t_IJ theta_J
                                  + 1/2 (n_IJ n^t_IK - n_IK n^t_IJ) theta_I ]

(3.29) theta = sum N_I theta_I + sum_{L=5..8} N_L n_JK Dtheta_JK
(3.33) gamma_I = gamma*_I + 1/(t^t_IJ n_IK) [ 2/3 n_IJ Dtheta_IK
                                            - 2/3 n_IK Dtheta_IJ ]
(3.22) gamma(r,s) = sum N_I(r,s) gamma_I
"""
import numpy as np
G2=1/np.sqrt(3); GP=[(-G2,-G2),(G2,-G2),(G2,G2),(-G2,G2)]
RL=[-1,1,1,-1]; SL=[-1,-1,1,1]
def N4(r,s): return np.array([(1-r)*(1-s),(1+r)*(1-s),(1+r)*(1+s),(1-r)*(1+s)])/4.0
def dN4(r,s): return (np.array([-(1-s),(1-s),(1+s),-(1+s)])/4.0,
                      np.array([-(1-r),-(1+r),(1+r),(1-r)])/4.0)
def N8(r,s):   # (3.15)(3.16): L=5,7 -> (1-r^2)(1+s_L s)/2 ; L=6,8 -> (1-s^2)(1+r_L r)/2
    return np.array([(1-r*r)*(1-s)/2,(1-s*s)*(1+r)/2,(1-r*r)*(1+s)/2,(1-s*s)*(1-r)/2])
def dN8(r,s):
    return (np.array([-r*(1-s), (1-s*s)/2, -r*(1+s), -(1-s*s)/2]),
            np.array([-(1-r*r)/2, -s*(1+r), (1-r*r)/2, -s*(1-r)]))
def M8(r,s):   # (3.31)(3.32)
    return np.array([0.5*(1-s)*r*(1-r*r), 0.5*(1+r)*s*(1-s*s),
                     0.5*(1+s)*r*(1-r*r), 0.5*(1-r)*s*(1-s*s)])

def K_ib93(pts,E,nu,t,cubico=False,ntang=False):
    """ntang=False -> n del lado = su TANGENTE (como sugiere (3.13): [cos a; sin a])
       ntang=True  -> n del lado = su NORMAL saliente."""
    x=np.array([p[0] for p in pts],float); y=np.array([p[1] for p in pts],float)
    # lado e va del nudo e al (e+1)%4
    nn=np.zeros((4,2)); tt=np.zeros((4,2)); LL=np.zeros(4)
    for e in range(4):
        j=(e+1)%4; dx=x[j]-x[e]; dy=y[j]-y[e]; L=np.hypot(dx,dy); LL[e]=L
        tv=np.array([dx/L,dy/L]); tt[e]=tv
        nn[e]= np.array([tv[1],-tv[0]]) if ntang else tv
    D0=E*t**3/(12*(1-nu*nu))
    CB=np.array([[D0,nu*D0,0],[nu*D0,D0,0],[0,0,D0*(1-nu)/2]])
    CS=np.eye(2)*(E*t*(5/6)/(2*(1+nu)))
    n=16 if cubico else 12
    # ── (3.23) y (3.33): gamma NODAL, como filas 2 x n ───────────────────
    gI=np.zeros((4,2,n))
    for I in range(4):
        J=(I+1)%4; K=(I-1)%4          # siguiente y anterior
        eIJ=I; eIK=K                  # lado I->J y lado K->I
        nIJ=nn[eIJ]; nIK=nn[eIK]; lIJ=LL[eIJ]; lIK=LL[eIK]
        den=float(tt[eIJ]@nIK)
        B=np.zeros((2,n))
        B[:,3*K+0]+= nIJ/lIK
        B[:,3*J+0]+= nIK/lIJ
        B[:,3*I+0]-= nIJ/lIK + nIK/lIJ
        B[:,3*K+1:3*K+3]+= 0.5*np.outer(nIJ,nIK)
        B[:,3*J+1:3*J+3]-= 0.5*np.outer(nIK,nIJ)
        B[:,3*I+1:3*I+3]+= 0.5*(np.outer(nIJ,nIK)-np.outer(nIK,nIJ))
        if cubico:                    # (3.33)
            B[:,12+eIK]+= (2.0/3.0)*nIJ
            B[:,12+eIJ]-= (2.0/3.0)*nIK
        gI[I]=B/den
    K=np.zeros((n,n))
    for r,s in GP:
        N=N4(r,s); d1,d2=dN4(r,s)
        Jm=np.array([[d1@x,d1@y],[d2@x,d2@y]]); dJ=np.linalg.det(Jm)
        Ji=np.linalg.inv(Jm)
        gx=Ji[0,0]*d1+Ji[0,1]*d2; gy=Ji[1,0]*d1+Ji[1,1]*d2
        B=np.zeros((3,n))
        for I in range(4):            # (3.21)
            B[0,3*I+2]-=gx[I]
            B[1,3*I+1]+=gy[I]
            B[2,3*I+1]+=gx[I]; B[2,3*I+2]-=gy[I]
        if cubico:                    # las Dtheta tambien curvan: (3.29)
            h1,h2=dN8(r,s)
            hx=Ji[0,0]*h1+Ji[0,1]*h2; hy=Ji[1,0]*h1+Ji[1,1]*h2
            for e in range(4):
                t1,t2=nn[e]           # theta = N_L * n_e * Dtheta_e
                B[0,12+e]-= hx[e]*t2
                B[1,12+e]+= hy[e]*t1
                B[2,12+e]+= hx[e]*t1 - hy[e]*t2
        K+=B.T@CB@B*abs(dJ)
        Bg=np.zeros((2,n))            # (3.22)
        for I in range(4): Bg+=N[I]*gI[I]
        K+=Bg.T@CS@Bg*abs(dJ)
    if not cubico: return K
    K11=K[:12,:12]; K12=K[:12,12:]; K22=K[12:,12:]
    if abs(np.linalg.det(K22))<1e-30: return None
    return K11-K12@np.linalg.inv(K22)@K12.T
