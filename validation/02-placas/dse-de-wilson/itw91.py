# -*- coding: utf-8 -*-
r"""ITW (1991), IJNME 31:1393-1414 — el thick shell QUE ESTA EN SAP.

  «All the numerical results reported in the foregoing are obtained with the
   computer program SAP»                                              — §4

Ecuaciones leidas del PNG (p-12 y el Apendice):

  (77) B_I = [N_I,x1  0      ]        <- curvaturas, con beta = e.theta
             [0       N_I,x2 ]
             [N_I,x2  N_I,x1 ]

  (78) gamma = b_I^T w_I + G_I theta_I
  (79) b_I   = < N_I,x1 ; N_I,x2 >
  (80) G_I = [ -1/8(l_IJ cosA_IJ NS_L,x1 + l_IK cosA_IK NS_M,x1)
                          N_I - 1/8(l_IJ sinA_IJ NS_L,x1 + l_IK sinA_IK NS_M,x1) ]
             [ -N_I - 1/8(l_IJ cosA_IJ NS_L,x2 + l_IK cosA_IK NS_M,x2)
                        -1/8(l_IJ sinA_IJ NS_L,x2 + l_IK sinA_IK NS_M,x2) ]

  (81) I=1..4; M=I+4; L=M-1+4*aint(1/I); K=mod(M,4)+1; J=L-4
       -> J = el ANTERIOR, K = el SIGUIENTE; L = serendipity del lado I-J,
          M = la del lado I-K.

  (96) LA CORRECCION B-BARRA, que es la pieza que faltaba:
          G_bar_I = G_I - (1/Omega) * integral G_I dOmega
       «Both G corrections are performed by utilizing the CORRECTED SERENDIPITY
        SHAPE FUNCTIONS in the expressions (40) and (78)»

  (82) K = int B^T C_B B + int [b^T G]^T C_S [b^T G]
"""
import numpy as np
G2=1/np.sqrt(3); GP=[(-G2,-G2),(G2,-G2),(G2,G2),(-G2,G2)]
def N4(r,s): return np.array([(1-r)*(1-s),(1+r)*(1-s),(1+r)*(1+s),(1-r)*(1+s)])/4.0
def dN4(r,s): return (np.array([-(1-s),(1-s),(1+s),-(1+s)])/4.0,
                      np.array([-(1-r),-(1+r),(1+r),(1-r)])/4.0)
def dNS(r,s):    # serendipity de lado, indices 0..3 = lados 0..3
    return (np.array([-r*(1-s), (1-s*s)/2, -r*(1+s), -(1-s*s)/2]),
            np.array([-(1-r*r)/2, -s*(1+r), (1-r*r)/2, -s*(1-r)]))
def K_itw91(pts,E,nu,t,bbar=True,inv=True):
    x=np.array([p[0] for p in pts],float); y=np.array([p[1] for p in pts],float)
    ca=np.zeros(4); sa=np.zeros(4); LL=np.zeros(4)
    for e in range(4):
        j=(e+1)%4; dx=x[j]-x[e]; dy=y[j]-y[e]; L=np.hypot(dx,dy)
        ca[e]=dx/L; sa[e]=dy/L; LL[e]=L
    D0=E*t**3/(12*(1-nu*nu))
    CB=np.array([[D0,nu*D0,0],[nu*D0,D0,0],[0,0,D0*(1-nu)/2]])
    CS=np.eye(2)*(E*t*(5/6)/(2*(1+nu)))
    def Gmat(r,s,Ji):
        N=N4(r,s); h1,h2=dNS(r,s)
        hx=Ji[0,0]*h1+Ji[0,1]*h2; hy=Ji[1,0]*h1+Ji[1,1]*h2
        G=np.zeros((2,12))
        for I in range(4):
            eK=I; eL=(I-1)%4                 # lado hacia el SIGUIENTE / ANTERIOR
            sg=-1.0 if inv else 1.0          # el lado I->J va al reves del lado eL
            cJ=sg*ca[eL]; sJ=sg*sa[eL]; lJ=LL[eL]
            cK=ca[eK];    sK=sa[eK];    lK=LL[eK]
            G[0,3*I+1] = -(lJ*cJ*hx[eL] + lK*cK*hx[eK])/8.0
            G[0,3*I+2] = N[I] - (lJ*sJ*hx[eL] + lK*sK*hx[eK])/8.0
            G[1,3*I+1] = -N[I] - (lJ*cJ*hy[eL] + lK*cK*hy[eK])/8.0
            G[1,3*I+2] = -(lJ*sJ*hy[eL] + lK*sK*hy[eK])/8.0
        return G
    # (96) la media de G para la correccion B-barra
    Gm=np.zeros((2,12)); A=0.0
    for r,s in GP:
        d1,d2=dN4(r,s); Jm=np.array([[d1@x,d1@y],[d2@x,d2@y]])
        dJ=np.linalg.det(Jm); Gm+=Gmat(r,s,np.linalg.inv(Jm))*abs(dJ); A+=abs(dJ)
    Gm/=A
    K=np.zeros((12,12))
    for r,s in GP:
        d1,d2=dN4(r,s); Jm=np.array([[d1@x,d1@y],[d2@x,d2@y]])
        dJ=np.linalg.det(Jm); Ji=np.linalg.inv(Jm)
        gx=Ji[0,0]*d1+Ji[0,1]*d2; gy=Ji[1,0]*d1+Ji[1,1]*d2
        B=np.zeros((3,12))
        for I in range(4):                   # (77) con beta = e.theta
            B[0,3*I+2]-=gx[I]
            B[1,3*I+1]+=gy[I]
            B[2,3*I+1]+=gx[I]; B[2,3*I+2]-=gy[I]
        K+=B.T@CB@B*abs(dJ)
        G=Gmat(r,s,Ji)
        if bbar: G=G-Gm                      # (96)
        Bs=np.zeros((2,12))
        for I in range(4):
            Bs[0,3*I]=gx[I]; Bs[1,3*I]=gy[I] # (79) b_I
        Bs=Bs+G
        K+=Bs.T@CS@Bs*abs(dJ)
    return K
