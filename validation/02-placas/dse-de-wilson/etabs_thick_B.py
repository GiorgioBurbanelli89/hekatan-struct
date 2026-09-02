# -*- coding: utf-8 -*-
r"""Shell-Thick de ETABS 19, con la B MEDIDA en vivo (bp_montaB_v19.py) y
reproducida al 0.0000 % en cuadrado y trapecio:

  * curvaturas = DSE de Wilson (8.10) para los 12 nodales;
  * Delta_psi_k: giro jerarquico con direccion n'_k = eje NATURAL del lado
    (del jacobiano CENTRAL J0), no la direccion real del lado;
  * cortante de lado (8.7) con coeficiente de Delta_psi = -2/3 * (t_k . n'_k);
  * campo de cortante COVARIANTE tipo MITC desde los 4 cortantes de lado, con
    la parte lineal SIMETRIZADA:  g_xi = A + m*eta,  g_eta = C + m*xi,
    m = (b + d)/2 ;  fisico = J^-1 g_cov.
Pasos del kernel (leidos): cuadratura ITW8, B-barra (opcional) sobre las
columnas internas, condensacion de los 4 Delta_psi."""
import numpy as np
from dse_wilson import N4, dN4, dNh
A_=np.sqrt(7/9); B_=np.sqrt(7/15)
ITW8=[(-A_,-A_),(A_,-A_),(A_,A_),(-A_,A_),(0,-B_),(B_,0),(0,B_),(-B_,0)]
W8=[9/49]*4+[40/49]*4

def B_etabs(pts, r, s, geo=None):
    x=np.array([p[0] for p in pts],float); y=np.array([p[1] for p in pts],float)
    if geo is None: geo=geometria(pts)
    ca,sa,LL,ndir,Bl=geo
    N=N4(r,s); dx4,ds4=dN4(r,s); dxh,dsh=dNh(r,s)
    J=np.array([[dx4@x,dx4@y],[ds4@x,ds4@y]]); Ji=np.linalg.inv(J); dJ=np.linalg.det(J)
    gx=Ji[0,0]*dx4+Ji[0,1]*ds4; gy=Ji[1,0]*dx4+Ji[1,1]*ds4
    hx=Ji[0,0]*dxh+Ji[0,1]*dsh; hy=Ji[1,0]*dxh+Ji[1,1]*dsh
    B=np.zeros((5,16))
    for i in range(4):
        B[0,3*i+2]+=gx[i]; B[1,3*i+1]-=gy[i]; B[2,3*i+2]+=gy[i]; B[2,3*i+1]-=gx[i]
    for k in range(4):
        c,sn=ndir[k]
        B[0,12+k]+=(-c)*hx[k]; B[1,12+k]-=sn*hy[k]; B[2,12+k]+=(-c)*hy[k]-sn*hx[k]
    # cortante covariante desde los lados: k=0 eta=-1 (+xi), 1 xi=+1 (+eta), 2 eta=+1 (-xi), 3 xi=-1 (-eta)
    gb=Bl[0]*LL[0]/2; gt=-Bl[2]*LL[2]/2; gR=Bl[1]*LL[1]/2; gL=-Bl[3]*LL[3]/2
    A0=(gb+gt)/2; b=(gt-gb)/2; C0=(gL+gR)/2; d=(gR-gL)/2; m=(b+d)/2
    gcov=np.vstack([A0+m*s, C0+m*r])
    B[3:5]=np.linalg.solve(J,gcov)
    return B, dJ

def geometria(pts):
    x=np.array([p[0] for p in pts],float); y=np.array([p[1] for p in pts],float)
    ca=np.zeros(4); sa=np.zeros(4); LL=np.zeros(4)
    for k in range(4):
        j=(k+1)%4; dx=x[j]-x[k]; dy=y[j]-y[k]; L=np.hypot(dx,dy); ca[k]=dx/L; sa[k]=dy/L; LL[k]=L
    dx4,ds4=dN4(0,0); J0=np.array([[dx4@x,dx4@y],[ds4@x,ds4@y]])
    er=J0[0]/np.linalg.norm(J0[0]); es=J0[1]/np.linalg.norm(J0[1])
    ndir=[er,es,-er,-es]
    Bl=np.zeros((4,16))
    for k in range(4):
        j=(k+1)%4
        Bl[k,3*j]+=1/LL[k]; Bl[k,3*k]-=1/LL[k]
        Bl[k,3*k+1]-=sa[k]/2; Bl[k,3*j+1]-=sa[k]/2
        Bl[k,3*k+2]+=ca[k]/2; Bl[k,3*j+2]+=ca[k]/2
        Bl[k,12+k]-=2/3*(ca[k]*ndir[k][0]+sa[k]*ndir[k][1])
    return ca,sa,LL,ndir,Bl

def K_etabs(pts,E,nu,t,bbarra=True,condensar=True):
    D0=E*t**3/(12*(1-nu*nu))
    Db=np.array([[D0,nu*D0,0],[nu*D0,D0,0],[0,0,D0*(1-nu)/2]])
    Ds=np.eye(2)*(5*E*t/(12*(1+nu)))
    D=np.zeros((5,5)); D[:3,:3]=Db; D[3:,3:]=Ds
    geo=geometria(pts)
    Bs=[]; ws=[]
    for (r,s),w in zip(ITW8,W8):
        B,dJ=B_etabs(pts,r,s,geo); Bs.append(B); ws.append(w*abs(dJ))
    if bbarra:
        m=sum(B[:3,12:]*w for B,w in zip(Bs,ws))/sum(ws)
        for B in Bs: B[:3,12:]-=m
    K=sum(B.T@D@B*w for B,w in zip(Bs,ws))
    if not condensar: return K
    K11=K[:12,:12]; K12=K[:12,12:]; K22=K[12:,12:]
    return K11-K12@np.linalg.inv(K22)@K12.T

if __name__=="__main__":
    import json
    from dse_wilson import K_DSE
    d=json.load(open("k_directa.json"))
    for nm,c in d.items():
        Km=np.array(c["K"]); pts=c["pts"]; E=c["E"]; nu=c["nu"]; t=c["t"]
        if c.get("tipo","thick")=="thin" or "thin" in nm: continue
        print(f"\n== {nm}: pts={pts} nu={nu} t={t}")
        for lab,K in (("DSE",K_DSE(pts,E,nu,t)),("ETABS-B sin Bbarra",K_etabs(pts,E,nu,t,False)),("ETABS-B con Bbarra",K_etabs(pts,E,nu,t,True))):
            dK=100*np.linalg.norm(K-Km)/np.linalg.norm(Km)
            D0=E*t**3/(12*(1-nu*nu))
            w=np.sort(np.linalg.eigvalsh(K))[::-1]/D0; wm=np.sort(np.linalg.eigvalsh(Km))[::-1]/D0
            R=Km-K; er=np.linalg.eigvalsh(R); rango=int((np.abs(er)>1e-8*abs(er).max()).sum())
            print(f"  {lab:20s} |dK|/|K| = {dK:8.4f} %   rango resto={rango}  neg/max={er.min()/abs(er).max():.1e}")
            print("     eig/D  :", np.round(w[:9],4))
        print("     medido :", np.round(wm[:9],4))
