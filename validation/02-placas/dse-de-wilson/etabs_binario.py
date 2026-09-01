# -*- coding: utf-8 -*-
r"""LA PLACA DEL SHELL-THICK DE ETABS, tal como se LEYO del binario.

Fuente: CsiGo2.dll (ETABS 19), FUN_180973630 (kernel) + FUN_18078b730 (forma/jacobiano).
Desensamblado, no decompilado (el decompilado de Ghidra esta incompleto).

  * 15 GDL   = 12 nodales (w,tx,ty en 4 esquinas) + 3 INTERNOS
  * formas   = 4 bilineales + burbuja central (1-r^2)(1-s^2) con el VALOR A CERO
               (solo entran sus derivadas: -2r(1-s^2), -2s(1-r^2))
  * jacobiano= bilineal, SOLO con los 4 nudos de esquina
  * 5 deform.= kxx, kyy, kxy, gxz, gyz   (D es 5x5: 3x3 flexion + 2x2 cortante)
  * seccion  = flexion  t^3/12 * w_i*detJ_i ;  cortante  (5/6)*t * w_i*detJ_i
  * cuadratura = IRONS de 8 puntos (grado 5), NO Gauss:
        (+-A,+-A) peso 9/49  con A=sqrt(7/9) ; (0,+-B),(+-B,0) peso 40/49 con B=sqrt(7/15)
  * correccion B-barra: a las 3 filas INTERNAS se les resta la media de las
    3 componentes de FLEXION  (Bint -= sum(B w detJ)/sum(w detJ))
  * los 3 internos se condensan
"""
import numpy as np

A=np.sqrt(7.0/9.0); B=np.sqrt(7.0/15.0)
IRONS=[(-A,-A,9/49.),(A,-A,9/49.),(A,A,9/49.),(-A,A,9/49.),
       (0.,-B,40/49.),(B,0.,40/49.),(0.,B,40/49.),(-B,0.,40/49.)]
G2=1/np.sqrt(3.0)
GAUSS=[(-G2,-G2,1.),(G2,-G2,1.),(G2,G2,1.),(-G2,G2,1.)]

def formas(r,s):
    """Las 27 salidas de FUN_18078b730 que usa la placa: 4 esquinas + burbuja 9."""
    N =np.array([(1-r)*(1-s),(1+r)*(1-s),(1+r)*(1+s),(1-r)*(1+s)])/4.0
    Nr=np.array([-(1-s), (1-s), (1+s),-(1+s)])/4.0
    Ns=np.array([-(1-r),-(1+r), (1+r), (1-r)])/4.0
    # burbuja 9: valor 0.0 (asi lo escribe el binario), derivadas de (1-r^2)(1-s^2)
    Nb, Nbr, Nbs = 0.0, -2*r*(1-s*s), -2*s*(1-r*r)
    return N,Nr,Ns,Nb,Nbr,Nbs

def K_etabs_placa(pts,E,nu,t,rule=IRONS,bbar=True,condensar=True):
    x=np.array([p[0] for p in pts],float); y=np.array([p[1] for p in pts],float)
    # D 5x5 : 3x3 flexion (tension plana) + 2x2 cortante
    c=E/(1-nu*nu)
    Cb=np.array([[c,nu*c,0],[nu*c,c,0],[0,0,E/(2*(1+nu))]])
    Cs=np.eye(2)*(E/(2*(1+nu)))
    ndof=15
    Bs=[];  WD=[]
    for r,s,w in rule:
        N,Nr,Ns,Nb,Nbr,Nbs=formas(r,s)
        J=np.array([[Nr@x,Nr@y],[Ns@x,Ns@y]]); dJ=np.linalg.det(J); Ji=np.linalg.inv(J)
        gx=Ji[0,0]*Nr+Ji[0,1]*Ns; gy=Ji[1,0]*Nr+Ji[1,1]*Ns
        bx=Ji[0,0]*Nbr+Ji[0,1]*Nbs; by=Ji[1,0]*Nbr+Ji[1,1]*Nbs
        Bg=np.zeros((5,ndof))
        for i in range(4):
            w_,tx,ty=3*i,3*i+1,3*i+2
            Bg[0,ty]+= gx[i]                 # kxx = ty,x
            Bg[1,tx]-= gy[i]                 # kyy = -tx,y
            Bg[2,ty]+= gy[i]; Bg[2,tx]-=gx[i]# kxy = ty,y - tx,x
            Bg[3,w_]+= gx[i]; Bg[3,ty]+=N[i] # gxz = w,x + ty
            Bg[4,w_]+= gy[i]; Bg[4,tx]-=N[i] # gyz = w,y - tx
        wb,txb,tyb=12,13,14
        Bg[0,tyb]+= bx
        Bg[1,txb]-= by
        Bg[2,tyb]+= by; Bg[2,txb]-= bx
        Bg[3,wb ]+= bx; Bg[3,tyb]+= Nb
        Bg[4,wb ]+= by; Bg[4,txb]-= Nb
        Bs.append(Bg); WD.append(w*abs(dJ))
    if bbar:                       # la media SOLO de las 3 de flexion, SOLO filas internas
        num=np.zeros((3,3)); den=0.0
        for Bg,wd in zip(Bs,WD):
            num+=Bg[0:3,12:15]*wd; den+=wd
        Bm=num/den
        for Bg in Bs: Bg[0:3,12:15]-=Bm
    K=np.zeros((ndof,ndof))
    for (r,s,w),Bg,wd in zip(rule,Bs,WD):
        # la seccion la aplica por punto: t^3/12 y (5/6)t, ya con w*detJ dentro
        Db=Cb*(t**3/12.0)*wd
        Ds=Cs*(5.0/6.0*t)*wd
        K+=Bg[0:3].T@Db@Bg[0:3]+Bg[3:5].T@Ds@Bg[3:5]
    if not condensar: return K
    K11=K[:12,:12]; K12=K[:12,12:]; K22=K[12:,12:]
    return K11-K12@np.linalg.solve(K22,K12.T)

if __name__=="__main__":
    import json,os,itertools
    GAL=r"C:\Users\j-b-j\Documents\Hekatan Calc 1.0.0\galpon-bodega-electoral"
    kd=json.load(open(os.path.join(GAL,"k_directa.json"),encoding="utf-8"))
    for caso in ("k_thick_nu00","k_thick_cuad","k_thick_rect","k_thick_trape"):
        v=kd[caso]; E,nu,t,pts=v["E"],v["nu"],v["t"],v["pts"]
        D0=E*t**3/(12*(1-nu*nu))
        Ke=np.array(v["K"]); Ke=(Ke+Ke.T)/2; we=np.sort(np.linalg.eigvalsh(Ke))/D0
        print("\n== %-14s nu=%.2f t=%.2f"%(caso,nu,t))
        print("   %-4s %13s %13s %9s %13s %9s"%("modo","ETABS","IRONS8","dif","Gauss2x2","dif"))
        Ki=K_etabs_placa(pts,E,nu,t,IRONS); wi=np.sort(np.linalg.eigvalsh((Ki+Ki.T)/2))/D0
        Kg=K_etabs_placa(pts,E,nu,t,GAUSS); wg=np.sort(np.linalg.eigvalsh((Kg+Kg.T)/2))/D0
        nok=0
        for i in range(3,12):
            di=abs(wi[i]/we[i]-1)*100; dg=abs(wg[i]/we[i]-1)*100
            nok+= di<=1
            print("   %-4d %13.6f %13.6f %8.3f%% %13.6f %8.3f%% %s"%(i+1,we[i],wi[i],di,wg[i],dg,"OK" if di<=1 else ""))
        print("   ||dK||  Irons=%.2f %%  Gauss=%.2f %%   (%d/9 <1%%)"%(
            np.linalg.norm(Ke-Ki)/np.linalg.norm(Ke)*100,
            np.linalg.norm(Ke-Kg)/np.linalg.norm(Ke)*100,nok))
