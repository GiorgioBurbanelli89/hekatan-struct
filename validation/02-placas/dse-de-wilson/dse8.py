# -*- coding: utf-8 -*-
r"""DSE con OCHO grados internos: Wilson anula las rotaciones TANGENCIALES de
punto medio (§8.2, «The tangential rotations are set to zero»). Si CSI no las
anula, quedan 8 internos en vez de 4 — y eso explicaria el RANGO 7-8 que se
midio en su A11 (el nuestro tiene 3).
"""
import numpy as np
G2=1/np.sqrt(3); GP=[(-G2,-G2),(G2,-G2),(G2,G2),(-G2,G2)]
def N4(r,s): return np.array([(1-r)*(1-s),(1+r)*(1-s),(1+r)*(1+s),(1-r)*(1+s)])/4.0
def dN4(r,s): return (np.array([-(1-s),(1-s),(1+s),-(1+s)])/4.0,
                      np.array([-(1-r),-(1+r),(1+r),(1-r)])/4.0)
def Nh(r,s): return np.array([(1-r*r)*(1-s)/2,(1+r)*(1-s*s)/2,
                              (1-r*r)*(1+s)/2,(1-r)*(1-s*s)/2])
def dNh(r,s): return (np.array([-r*(1-s),(1-s*s)/2,-r*(1+s),-(1-s*s)/2]),
                      np.array([-(1-r*r)/2,-s*(1+r),(1-r*r)/2,-s*(1-r)]))

def K_DSE8(pts,E,nu,t,nint=8,f23=2.0/3.0,pt=True):
    x=np.array([p[0] for p in pts],float); y=np.array([p[1] for p in pts],float)
    ca=np.zeros(4); sa=np.zeros(4); LL=np.zeros(4)
    for k in range(4):
        j=(k+1)%4; dx=x[j]-x[k]; dy=y[j]-y[k]; L=np.hypot(dx,dy)
        ca[k]=dx/L; sa[k]=dy/L; LL[k]=L
    D0=E*t**3/(12*(1-nu*nu))
    Db=np.array([[D0,nu*D0,0],[nu*D0,D0,0],[0,0,D0*(1-nu)/2]])
    Ds=np.eye(2)*(5*E*t/(12*(1+nu)))
    n=12+nint
    # cortante de lado (8.7); el interno tangencial NO aporta al cortante normal
    Bl=np.zeros((4,n))
    for k in range(4):
        j=(k+1)%4
        Bl[k,3*j]+=1/LL[k]; Bl[k,3*k]-=1/LL[k]
        Bl[k,3*k+1]-=sa[k]/2; Bl[k,3*j+1]-=sa[k]/2
        Bl[k,3*k+2]+=ca[k]/2; Bl[k,3*j+2]+=ca[k]/2
        Bl[k,12+k]-=f23
    Bn=np.zeros((4,2,n))
    for i in range(4):
        a=i; b=(i-1)%4
        det=ca[a]*sa[b]-ca[b]*sa[a]
        M=np.array([[sa[b],-ca[b]],[-sa[a],ca[a]]])/det
        Bn[i]=M@np.vstack([Bl[a],Bl[b]])
    def curv(r,s,Ji):
        dx4,ds4=dN4(r,s); dxh,dsh=dNh(r,s)
        gx=Ji[0,0]*dx4+Ji[0,1]*ds4; gy=Ji[1,0]*dx4+Ji[1,1]*ds4
        hx=Ji[0,0]*dxh+Ji[0,1]*dsh; hy=Ji[1,0]*dxh+Ji[1,1]*dsh
        B=np.zeros((3,n))
        for i in range(4):
            B[0,3*i+2]+=gx[i]; B[1,3*i+1]-=gy[i]
            B[2,3*i+2]+=gy[i]; B[2,3*i+1]-=gx[i]
        for k in range(4):     # interno NORMAL: tx=+sa*d, ty=-ca*d
            B[0,12+k]+=(-ca[k])*hx[k]; B[1,12+k]-=(sa[k])*hy[k]
            B[2,12+k]+=(-ca[k])*hy[k]-(sa[k])*hx[k]
        if nint==8:            # interno TANGENCIAL: tx=+ca*d, ty=+sa*d
            for k in range(4):
                B[0,16+k]+=( sa[k])*hx[k]; B[1,16+k]-=(ca[k])*hy[k]
                B[2,16+k]+=( sa[k])*hy[k]-(ca[k])*hx[k]
        return B
    bm=np.zeros((3,nint)); A=0.0
    for r,s in GP:
        dx4,ds4=dN4(r,s); J=np.array([[dx4@x,dx4@y],[ds4@x,ds4@y]])
        dJ=np.linalg.det(J); Ji=np.linalg.inv(J)
        bm+=curv(r,s,Ji)[:,12:]*abs(dJ); A+=abs(dJ)
    bm/=A
    K=np.zeros((n,n))
    for r,s in GP:
        N=N4(r,s); dx4,ds4=dN4(r,s)
        J=np.array([[dx4@x,dx4@y],[ds4@x,ds4@y]]); dJ=np.linalg.det(J)
        Ji=np.linalg.inv(J)
        B=curv(r,s,Ji)
        if pt: B[:,12:]-=bm
        K+=B.T@Db@B*abs(dJ)
        Bs=np.zeros((2,n))
        for i in range(4): Bs+=N[i]*Bn[i]
        K+=Bs.T@Ds@Bs*abs(dJ)
    K11=K[:12,:12]; K12=K[:12,12:]; K22=K[12:,12:]
    if abs(np.linalg.det(K22))<1e-30: return K11
    return K11-K12@np.linalg.inv(K22)@K12.T
