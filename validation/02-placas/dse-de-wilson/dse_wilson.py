# -*- coding: utf-8 -*-
r"""EL DSE DE WILSON, con sus ecuaciones exactas (cap. 8 de su libro, gratis).

    Shell-THICK de CSI = DSE   ·   Shell-THIN de CSI = DKE

Padre de 8 nudos -> giros de punto medio girados a normal/tangencial -> las
tangenciales a cero (12 GDL) -> los lados CUBICOS en u_z -> los 4 Delta_psi
condensados. Ecuaciones (8.1)-(8.19).
"""
import numpy as np
G2=1/np.sqrt(3); GP=[(-G2,-G2),(G2,-G2),(G2,G2),(-G2,G2)]

def N4(r,s):
    return np.array([(1-r)*(1-s),(1+r)*(1-s),(1+r)*(1+s),(1-r)*(1+s)])/4.0
def dN4(r,s):
    return (np.array([-(1-s),(1-s),(1+s),-(1+s)])/4.0,
            np.array([-(1-r),-(1+r),(1+r),(1-r)])/4.0)
def Nh(r,s):
    """N5..N8 jerarquicas: lado 5=1-2, 6=2-3, 7=3-4, 8=4-1."""
    return np.array([(1-r*r)*(1-s)/2.0, (1+r)*(1-s*s)/2.0,
                     (1-r*r)*(1+s)/2.0, (1-r)*(1-s*s)/2.0])
def dNh(r,s):
    return (np.array([-2*r*(1-s)/2.0, (1-s*s)/2.0, -2*r*(1+s)/2.0, -(1-s*s)/2.0]),
            np.array([-(1-r*r)/2.0, -2*s*(1+r)/2.0, (1-r*r)/2.0, -2*s*(1-r)/2.0]))

def K_DSE(pts, E, nu, t, thin=False):
    x=np.array([p[0] for p in pts],float); y=np.array([p[1] for p in pts],float)
    # geometria de los 4 lados: k va de k a (k+1)%4
    ca=np.zeros(4); sa=np.zeros(4); LL=np.zeros(4)
    for k in range(4):
        j=(k+1)%4
        dx=x[j]-x[k]; dy=y[j]-y[k]; L=np.hypot(dx,dy)
        ca[k]=dx/L; sa[k]=dy/L; LL[k]=L
    D0=E*t**3/(12*(1-nu*nu))
    Db=np.array([[D0,nu*D0,0],[nu*D0,D0,0],[0,0,D0*(1-nu)/2]])
    Ds=np.eye(2)*(5*E*t/(12*(1+nu)))          # (8.15): D44=D55=5Eh/(12(1+nu))

    # ── (8.7) el cortante a lo largo de cada lado, como fila de 16 ────────
    #   gamma_k = (1/L)(w_j - w_i) - (sa/2)(tx_i+tx_j) + (ca/2)(ty_i+ty_j)
    #             - (2/3) Dpsi_k
    Bl=np.zeros((4,16))
    for k in range(4):
        j=(k+1)%4
        Bl[k,3*j+0]+= 1.0/LL[k];  Bl[k,3*k+0]-= 1.0/LL[k]
        Bl[k,3*k+1]-= sa[k]/2.0;  Bl[k,3*j+1]-= sa[k]/2.0
        Bl[k,3*k+2]+= ca[k]/2.0;  Bl[k,3*j+2]+= ca[k]/2.0
        Bl[k,12+k] -= 2.0/3.0
    # ── (8.9) los cortantes NODALES desde los dos lados que concurren ─────
    Bn=np.zeros((4,2,16))
    for i in range(4):
        kij=i; kki=(i-1)%4                     # lado saliente y lado entrante
        det=ca[kij]*sa[kki]-ca[kki]*sa[kij]
        M=np.array([[ sa[kki], -ca[kki]],
                    [-sa[kij],  ca[kij]]])/det
        Bn[i]=M@np.vstack([Bl[kij],Bl[kki]])

    K=np.zeros((16,16))
    # ── pasada 1: la media de b12 para la correccion (8.17) ──────────────
    b12m=np.zeros((3,4)); A=0.0
    for r,s in GP:
        dx4,ds4=dN4(r,s); dxh,dsh=dNh(r,s)
        J=np.array([[dx4@x,dx4@y],[ds4@x,ds4@y]]); dJ=np.linalg.det(J)
        Ji=np.linalg.inv(J)
        hx=Ji[0,0]*dxh+Ji[0,1]*dsh; hy=Ji[1,0]*dxh+Ji[1,1]*dsh
        b12=np.zeros((3,4))
        for k in range(4):
            b12[0,k]=(-ca[k])*hx[k]            # kx = ty,x   con ty=-ca*Dpsi
            b12[1,k]=-( sa[k])*hy[k]           # ky = -tx,y  con tx=+sa*Dpsi
            b12[2,k]=(-ca[k])*hy[k]-(sa[k])*hx[k]   # kxy = ty,y - tx,x
        b12m+=b12*abs(dJ); A+=abs(dJ)
    b12m/=A
    # ── pasada 2: ensamblar ──────────────────────────────────────────────
    for gi,(r,s) in enumerate(GP):
        N=N4(r,s); dx4,ds4=dN4(r,s); dxh,dsh=dNh(r,s)
        J=np.array([[dx4@x,dx4@y],[ds4@x,ds4@y]]); dJ=np.linalg.det(J)
        Ji=np.linalg.inv(J)
        gx=Ji[0,0]*dx4+Ji[0,1]*ds4; gy=Ji[1,0]*dx4+Ji[1,1]*ds4
        hx=Ji[0,0]*dxh+Ji[0,1]*dsh; hy=Ji[1,0]*dxh+Ji[1,1]*dsh
        B=np.zeros((3,16))
        for i in range(4):                      # (8.10) con los 12 nodales
            B[0,3*i+2]+= gx[i]                  # kx  = +ty,x
            B[1,3*i+1]-= gy[i]                  # ky  = -tx,y
            B[2,3*i+2]+= gy[i]; B[2,3*i+1]-= gx[i]   # kxy = ty,y - tx,x
        for k in range(4):
            B[0,12+k]+=(-ca[k])*hx[k]
            B[1,12+k]-=( sa[k])*hy[k]
            B[2,12+k]+=(-ca[k])*hy[k]-(sa[k])*hx[k]
        B[:,12:]-=b12m                          # (8.17) patch test
        K+=B.T@Db@B*abs(dJ)
        if not thin:
            Bs=np.zeros((2,16))                 # cortantes nodales, bilineal
            for i in range(4): Bs+=N[i]*Bn[i]
            K+=Bs.T@Ds@Bs*abs(dJ)
    if thin:
        # (8.21): el cortante de lado se ANULA -> Dpsi sale directo
        T=np.zeros((16,12))
        T[:12,:12]=np.eye(12)
        for k in range(4):
            j=(k+1)%4
            T[12+k,3*j+0]+= 1.5/LL[k]; T[12+k,3*k+0]-= 1.5/LL[k]
            T[12+k,3*k+1]-= 0.75*sa[k]; T[12+k,3*j+1]-= 0.75*sa[k]
            T[12+k,3*k+2]+= 0.75*ca[k]; T[12+k,3*j+2]+= 0.75*ca[k]
        return T.T@K@T
    K11=K[:12,:12]; K12=K[:12,12:]; K22=K[12:,12:]
    return K11-K12@np.linalg.inv(K22)@K12.T     # (8.18)-(8.19)
