# -*- coding: utf-8 -*-
r"""PATCH TEST de MacNeal & Harder 1985, tal como lo publica CSI.

Fuente: SAP2000 24, Manuals/Verification/Analysis/Shells/Problem 2-001.pdf
        ("SHELL - PATCH TEST WITH PRESCRIBED DISPLACEMENTS"), leido del PNG en
        registros/libros/sap2000_verif_shells/Problem_2_001/pag/

5 elementos IRREGULARES, 8 nudos. E=1e6, nu=0.25, t=0.001.
Campo impuesto en los nudos 1,2,7,8 (y aqui, para el residuo, en los 8):

    Uz = (x^2 + x y + y^2)/2000     Rx = (y + x/2)/1000     Ry = (-x - y/2)/1000

Rx = dw/dy  y  Ry = -dw/dx  -> cortante NULO y curvatura CONSTANTE.
CSI lo da al 0.000 % con Thin Y con Thick.

Prueba: se impone el campo EXACTO en los 8 nudos y se mira el residuo K*u en los
GDL libres (nudos 3,4,5,6). Si el elemento pasa el patch test, es CERO.
"""
import numpy as np

XY = {1:(0.00,0.00), 2:(0.00,0.12), 3:(0.04,0.02), 4:(0.08,0.08),
      5:(0.18,0.03), 6:(0.16,0.08), 7:(0.24,0.00), 8:(0.24,0.12)}
ELE = [(1,3,4,2), (1,7,5,3), (3,5,6,4), (2,4,6,8), (5,7,8,6)]
BORDE = [1,2,7,8]
E, NU, T = 1.0e6, 0.25, 0.001

def campo(x,y):
    w  = (x*x + x*y + y*y)/2000.0
    tx = (y + x/2.0)/1000.0          # Rx =  dw/dy
    ty = (-x - y/2.0)/1000.0         # Ry = -dw/dx
    return w,tx,ty

def corre(Kelem, nombre):
    n=8; N=3*n
    K=np.zeros((N,N))
    for e in ELE:
        pts=[XY[j] for j in e]
        ke=Kelem(pts,E,NU,T)
        idx=[]
        for j in e: idx += [3*(j-1),3*(j-1)+1,3*(j-1)+2]
        for a in range(12):
            for b in range(12):
                K[idx[a],idx[b]] += ke[a,b]
    u=np.zeros(N)
    for j,(x,y) in XY.items():
        w,tx,ty=campo(x,y); u[3*(j-1):3*(j-1)+3]=[w,tx,ty]
    r=K@u
    libres=[i for j in (3,4,5,6) for i in (3*(j-1),3*(j-1)+1,3*(j-1)+2)]
    esc=np.abs(K@u).max() if np.abs(K@u).max()>0 else 1.0
    esc=max(np.abs(K).max()*np.abs(u).max(), 1e-30)
    print("%-34s  residuo libre max = %.3e   (relativo %.2e)  %s"
          % (nombre, np.abs(r[libres]).max(), np.abs(r[libres]).max()/esc,
             "PASA" if np.abs(r[libres]).max()/esc < 1e-10 else "NO PASA"))
    return np.abs(r[libres]).max()/esc

if __name__=="__main__":
    import dse_wilson as W
    import etabs_binario as B
    import itw8_test as I
    print("Patch test de MacNeal-Harder (SAP2000 Problem 2-001), 5 elementos irregulares")
    print("CSI lo da al 0.000 % con Thin y con Thick.\n")
    corre(lambda p,E,nu,t: W.K_DSE(p,E,nu,t,thin=False), "DSE de Wilson (thick)")
    corre(lambda p,E,nu,t: W.K_DSE(p,E,nu,t,thin=True),  "DKE de Wilson (thin)")
    corre(lambda p,E,nu,t: I.K_DSE_q(p,E,nu,t,I.ITW8),   "DSE + 8 puntos ITW")
    corre(lambda p,E,nu,t: B.K_etabs_placa(p,E,nu,t,B.ITW8,bbar=True),  "Q4+burbuja, 8 pt, con B-barra")
    corre(lambda p,E,nu,t: B.K_etabs_placa(p,E,nu,t,B.ITW8,bbar=False), "Q4+burbuja, 8 pt, SIN B-barra")
