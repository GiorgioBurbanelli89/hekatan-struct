# -*- coding: utf-8 -*-
r"""Ibrahimbegovic (1993) §3.1 — el elemento con interpolacion CUADRATICA.

Es el que faltaba probar: **NO tiene grados internos**, asi que no hay
condensacion y por tanto no hay ablandamiento.

  (3.11)  theta = sum N_I theta_I                        (bilineal)
  (3.12)  w = sum N_I w_I + sum_{L=5..8} N_L (l_JK/8) n_JK . (theta_K - theta_J)
  (3.21)  kappa = (-d(t2)/dx1 ; d(t1)/dx2 ; d(t1)/dx1 - d(t2)/dx2)
  (A.1)   gamma_IJ = (1/l)(w_J - w_I) - (1/2) n_IJ . (theta_J + theta_I)
  (A.5)   gamma_I  resolviendo el 2x2 de las proyecciones sobre los dos lados
  (3.22)  gamma(r,s) = sum N_I gamma_I                    (bilineal)
  (3.8)   C_B = Et^3/(12(1-nu^2))[[1,nu,0],[nu,1,0],[0,0,(1-nu)/2]]
          C_S = E t c /(2(1+nu)) I,  c = 5/6

Indices (3.19):  I=1..4, J=mod(I,4)+1, K=I-1+4*int(1/I)  -> el nudo anterior.
"""
import numpy as np
G2=1/np.sqrt(3); GP=[(-G2,-G2),(G2,-G2),(G2,G2),(-G2,G2)]
def N4(r,s): return np.array([(1-r)*(1-s),(1+r)*(1-s),(1+r)*(1+s),(1-r)*(1+s)])/4.0
def dN4(r,s): return (np.array([-(1-s),(1-s),(1+s),-(1+s)])/4.0,
                      np.array([-(1-r),-(1+r),(1+r),(1-r)])/4.0)
def K_ib31(pts,E,nu,t,cubico=False,f23=2.0/3.0):
    x=np.array([p[0] for p in pts],float); y=np.array([p[1] for p in pts],float)
    D0=E*t**3/(12*(1-nu*nu))
    CB=np.array([[D0,nu*D0,0],[nu*D0,D0,0],[0,0,D0*(1-nu)/2]])
    CS=np.eye(2)*(E*t*(5/6)/(2*(1+nu)))
    n=16 if cubico else 12
    # lados: el lado i va del nudo i al nudo (i+1)%4. n = normal SALIENTE
    nx=np.zeros(4); ny=np.zeros(4); LL=np.zeros(4)
    for k in range(4):
        j=(k+1)%4; dx=x[j]-x[k]; dy=y[j]-y[k]; L=np.hypot(dx,dy)
        LL[k]=L; nx[k]=dy/L; ny[k]=-dx/L      # normal saliente del lado
    # (A.1) el cortante CONSTANTE en cada lado, como fila
    gl=np.zeros((4,n))
    for k in range(4):
        j=(k+1)%4
        gl[k,3*j+0]+=1/LL[k]; gl[k,3*k+0]-=1/LL[k]
        # n_IJ . (theta_J + theta_I)  con theta=(theta1,theta2)=(tx,ty)
        for m in (k,j):
            gl[k,3*m+1]-=0.5*nx[k]; gl[k,3*m+2]-=0.5*ny[k]
        if cubico: gl[k,12+k]-=f23
    # (A.5) el gamma NODAL: proyecciones sobre los dos lados que concurren
    gn=np.zeros((4,2,n))
    for I in range(4):
        a=I; b=(I-1)%4                     # lado IJ (saliente) y lado KI
        M=np.array([[nx[a],ny[a]],[nx[b],ny[b]]])
        gn[I]=np.linalg.solve(M, np.vstack([gl[a],gl[b]]))
    K=np.zeros((n,n))
    for r,s in GP:
        N=N4(r,s); d1,d2=dN4(r,s)
        J=np.array([[d1@x,d1@y],[d2@x,d2@y]]); dJ=np.linalg.det(J)
        Ji=np.linalg.inv(J)
        gx=Ji[0,0]*d1+Ji[0,1]*d2; gy=Ji[1,0]*d1+Ji[1,1]*d2
        B=np.zeros((3,n))
        for I in range(4):                 # (3.21)
            B[0,3*I+2]-=gx[I]
            B[1,3*I+1]+=gy[I]
            B[2,3*I+1]+=gx[I]; B[2,3*I+2]-=gy[I]
        K+=B.T@CB@B*abs(dJ)
        Bg=np.zeros((2,n))                 # (3.22)
        for I in range(4): Bg+=N[I]*gn[I]
        K+=Bg.T@CS@Bg*abs(dJ)
    if not cubico: return K
    K11=K[:12,:12]; K12=K[:12,12:]; K22=K[12:,12:]
    return K11-K12@np.linalg.inv(K22)@K12.T
