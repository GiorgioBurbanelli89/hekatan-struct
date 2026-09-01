# -*- coding: utf-8 -*-
"""Prueba de la regla de ITW8 de 8 puntos que SE LEYO DEL BINARIO de ETABS 19.

Del kernel FUN_180973630 de CsiGo2.dll, rama kTypeThick in {2,4}:
   4 esquinas (+-A,+-A) con peso 9/49,  A = sqrt(7/9)
   4 medios   (0,+-B),(+-B,0) con peso 40/49, B = sqrt(7/15)
   suma de pesos = 4  (grado 5 exacto)
Frente a la Gauss 2x2 (4 puntos, peso 1, +-1/sqrt(3)) que usa hoy el DSE.
"""
import json, os, sys
import numpy as np
import dse_wilson as W

A=np.sqrt(7.0/9.0); B=np.sqrt(7.0/15.0)
ITW8=[(-A,-A,9/49.),(A,-A,9/49.),(A,A,9/49.),(-A,A,9/49.),
       (0.,-B,40/49.),(B,0.,40/49.),(0.,B,40/49.),(-B,0.,40/49.)]
G=1/np.sqrt(3)
GAUSS=[(-G,-G,1.),(G,-G,1.),(G,G,1.),(-G,G,1.)]

def K_DSE_q(pts,E,nu,t,rule,thin=False):
    """Copia de W.K_DSE con la cuadratura como parametro."""
    x=np.array([p[0] for p in pts],float); y=np.array([p[1] for p in pts],float)
    ca=np.zeros(4); sa=np.zeros(4); LL=np.zeros(4)
    for k in range(4):
        j=(k+1)%4; dx=x[j]-x[k]; dy=y[j]-y[k]; L=np.hypot(dx,dy)
        ca[k]=dx/L; sa[k]=dy/L; LL[k]=L
    D0=E*t**3/(12*(1-nu*nu))
    Db=np.array([[D0,nu*D0,0],[nu*D0,D0,0],[0,0,D0*(1-nu)/2]])
    Ds=np.eye(2)*(5*E*t/(12*(1+nu)))
    Bl=np.zeros((4,16))
    for k in range(4):
        j=(k+1)%4
        Bl[k,3*j+0]+=1.0/LL[k]; Bl[k,3*k+0]-=1.0/LL[k]
        Bl[k,3*k+1]-=sa[k]/2.0; Bl[k,3*j+1]-=sa[k]/2.0
        Bl[k,3*k+2]+=ca[k]/2.0; Bl[k,3*j+2]+=ca[k]/2.0
        Bl[k,12+k]-=2.0/3.0
    Bn=np.zeros((4,2,16))
    for i in range(4):
        kij=i; kki=(i-1)%4
        det=ca[kij]*sa[kki]-ca[kki]*sa[kij]
        M=np.array([[sa[kki],-ca[kki]],[-sa[kij],ca[kij]]])/det
        Bn[i]=M@np.vstack([Bl[kij],Bl[kki]])
    K=np.zeros((16,16))
    b12m=np.zeros((3,4)); A_=0.0
    for r,s,w in rule:
        dx4,ds4=W.dN4(r,s); dxh,dsh=W.dNh(r,s)
        J=np.array([[dx4@x,dx4@y],[ds4@x,ds4@y]]); dJ=np.linalg.det(J)
        Ji=np.linalg.inv(J)
        hx=Ji[0,0]*dxh+Ji[0,1]*dsh; hy=Ji[1,0]*dxh+Ji[1,1]*dsh
        b12=np.zeros((3,4))
        for k in range(4):
            b12[0,k]=(-ca[k])*hx[k]
            b12[1,k]=-(sa[k])*hy[k]
            b12[2,k]=(-ca[k])*hy[k]-(sa[k])*hx[k]
        b12m+=b12*abs(dJ)*w; A_+=abs(dJ)*w
    b12m/=A_
    for r,s,w in rule:
        N=W.N4(r,s); dx4,ds4=W.dN4(r,s); dxh,dsh=W.dNh(r,s)
        J=np.array([[dx4@x,dx4@y],[ds4@x,ds4@y]]); dJ=np.linalg.det(J)
        Ji=np.linalg.inv(J)
        gx=Ji[0,0]*dx4+Ji[0,1]*ds4; gy=Ji[1,0]*dx4+Ji[1,1]*ds4
        hx=Ji[0,0]*dxh+Ji[0,1]*dsh; hy=Ji[1,0]*dxh+Ji[1,1]*dsh
        Bb=np.zeros((3,16))
        for i in range(4):
            Bb[0,3*i+2]+=gx[i]; Bb[1,3*i+1]-=gy[i]
            Bb[2,3*i+2]+=gy[i]; Bb[2,3*i+1]-=gx[i]
        for k in range(4):
            Bb[0,12+k]+=(-ca[k])*hx[k]
            Bb[1,12+k]-=(sa[k])*hy[k]
            Bb[2,12+k]+=(-ca[k])*hy[k]-(sa[k])*hx[k]
        Bb[:,12:]-=b12m
        K+=Bb.T@Db@Bb*abs(dJ)*w
        if not thin:
            Bs=np.zeros((2,16))
            for i in range(4): Bs+=N[i]*Bn[i]
            K+=Bs.T@Ds@Bs*abs(dJ)*w
    if thin:
        T=np.zeros((16,12)); T[:12,:12]=np.eye(12)
        for k in range(4):
            j=(k+1)%4
            T[12+k,3*j+0]+=1.5/LL[k]; T[12+k,3*k+0]-=1.5/LL[k]
            T[12+k,3*k+1]-=0.75*sa[k]; T[12+k,3*j+1]-=0.75*sa[k]
            T[12+k,3*k+2]+=0.75*ca[k]; T[12+k,3*j+2]+=0.75*ca[k]
        return T.T@K@T
    K11=K[:12,:12]; K12_=K[:12,12:]; K22=K[12:,12:]
    return K11-K12_@np.linalg.inv(K22)@K12_.T

GAL=r"C:\Users\j-b-j\Documents\Hekatan Calc 1.0.0\galpon-bodega-electoral"
kd=json.load(open(os.path.join(GAL,"k_directa.json"),encoding="utf-8"))
for caso in ("k_thick_nu00","k_thick_cuad","k_thick_rect","k_thick_trape","k_thin_cuad"):
    v=kd[caso]; E,nu,t,pts=v["E"],v["nu"],v["t"],v["pts"]
    thin = caso.startswith("k_thin")
    D=E*t**3/(12*(1-nu*nu))
    Ke=np.array(v["K"]); Ke=(Ke+Ke.T)/2
    we=np.sort(np.linalg.eigvalsh(Ke))/D
    Kg=K_DSE_q(pts,E,nu,t,GAUSS,thin); wg=np.sort(np.linalg.eigvalsh((Kg+Kg.T)/2))/D
    Ki=K_DSE_q(pts,E,nu,t,ITW8,thin); wi=np.sort(np.linalg.eigvalsh((Ki+Ki.T)/2))/D
    print("\n== %-14s nu=%.2f t=%.2f %s" % (caso,nu,t,"THIN" if thin else "THICK"))
    print("   %-4s %13s %13s %9s %13s %9s"%("modo","ETABS","DSE-Gauss2x2","dif","DSE-ITW88","dif"))
    for i in range(3,12):
        dg=abs(wg[i]/we[i]-1)*100 if abs(we[i])>1e-12 else float('nan')
        di=abs(wi[i]/we[i]-1)*100 if abs(we[i])>1e-12 else float('nan')
        print("   %-4d %13.6f %13.6f %8.3f%% %13.6f %8.3f%% %s"%(i+1,we[i],wg[i],dg,wi[i],di,"OK" if di<=1 else ""))
    print("   ||dK||/||K||  Gauss=%.2f %%   ITW8=%.2f %%"%(
        np.linalg.norm(Ke-Kg)/np.linalg.norm(Ke)*100,
        np.linalg.norm(Ke-Ki)/np.linalg.norm(Ke)*100))
