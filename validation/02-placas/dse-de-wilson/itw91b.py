# -*- coding: utf-8 -*-
r"""ITW (1991) IJNME 31 — el thick shell QUE ESTA EN SAP, con las convenciones
LEIDAS del PDF (p-11 y p-12), no supuestas.

(74) n_JK = (cos a_JK ; sin a_JK) es la NORMAL SALIENTE del lado — en la Fig. 2
     se ve n_12 con simbolo de angulo recto sobre el lado. Por tanto `a` es el
     angulo de la NORMAL, y **no hay nada que invertir**: la normal saliente no
     depende del orden de los nudos. (Ese era el error: se usaba el angulo del
     LADO, que si cambia de signo al invertirlo.)
(75) J = I-4;  K = mod(I,4)+1        (para I = 5..8, los de punto medio)
(71) w = sum N_I w_I  -  sum_{I=5..8} N_I (l_JK/8) n^T_JK (theta_K - theta_J)
(76) symm grad(beta) = B_I e theta_I,  con e la matriz alternante
(77) B_I = [N_I,x1  0     ]
           [0       N_I,x2]
           [N_I,x2  N_I,x1]
(79) b_I = <N_I,x1 ; N_I,x2>
(80) G_I, con a_IJ y a_IK los angulos de las NORMALES de los dos lados del nudo
(81) I=1..4; M=I+4; L=M-1+4*aint(1/I); K=mod(M,4)+1; J=L-4
     -> J = el ANTERIOR, K = el SIGUIENTE; L = serendipity del lado I-J,
        M = la del lado I-K
(96) G_bar_I = G_I - (1/Omega) int G_I dOmega          <- B-barra sobre EL CORTANTE
"""
import numpy as np
G2=1/np.sqrt(3); GP=[(-G2,-G2),(G2,-G2),(G2,G2),(-G2,G2)]
def N4(r,s): return np.array([(1-r)*(1-s),(1+r)*(1-s),(1+r)*(1+s),(1-r)*(1+s)])/4.0
def dN4(r,s): return (np.array([-(1-s),(1-s),(1+s),-(1+s)])/4.0,
                      np.array([-(1-r),-(1+r),(1+r),(1-r)])/4.0)
def dNS(r,s):   # (72)(73), indices 0..3 = lados 0..3 (nudo e -> e+1)
    return (np.array([-r*(1-s), (1-s*s)/2, -r*(1+s), -(1-s*s)/2]),
            np.array([-(1-r*r)/2, -s*(1+r), (1-r*r)/2, -s*(1-r)]))
def K_itw91b(pts,E,nu,t,bbar=True,esign=1.0,wsign=-1.0):
    x=np.array([p[0] for p in pts],float); y=np.array([p[1] for p in pts],float)
    nx=np.zeros(4); ny=np.zeros(4); LL=np.zeros(4)
    for e in range(4):
        j=(e+1)%4; dx=x[j]-x[e]; dy=y[j]-y[e]; L=np.hypot(dx,dy); LL[e]=L
        nx[e]= dy/L; ny[e]=-dx/L          # normal SALIENTE (poligono CCW)
    D0=E*t**3/(12*(1-nu*nu))
    CB=np.array([[D0,nu*D0,0],[nu*D0,D0,0],[0,0,D0*(1-nu)/2]])
    CS=np.eye(2)*(E*t*(5/6)/(2*(1+nu)))
    ee=np.array([[0.0,esign],[-esign,0.0]])       # (76) la alternante
    def GB(r,s,Ji):
        """G de (80) y b de (79), juntos: gamma = [b^T G] u."""
        N=N4(r,s); d1,d2=dN4(r,s); h1,h2=dNS(r,s)
        gx=Ji[0,0]*d1+Ji[0,1]*d2; gy=Ji[1,0]*d1+Ji[1,1]*d2
        hx=Ji[0,0]*h1+Ji[0,1]*h2; hy=Ji[1,0]*h1+Ji[1,1]*h2
        Bs=np.zeros((2,12)); G=np.zeros((2,12))
        for I in range(4):
            Bs[0,3*I]=gx[I]; Bs[1,3*I]=gy[I]           # (79)
            eM=I; eL=(I-1)%4                            # lado I-K y lado I-J
            cJ=nx[eL]; sJ=ny[eL]; lJ=LL[eL]
            cK=nx[eM]; sK=ny[eM]; lK=LL[eM]
            f=wsign/8.0
            # ⚠️ RESTA, no suma. El PDF parte la linea de la (80) y el segundo
            # termino arranca con «-». Y tiene que ser resta: en la (71) el
            # termino jerarquico va con (theta_K - theta_J), asi que al
            # reagrupar por NUDO cada theta_I aparece con signos OPUESTOS en sus
            # dos lados. Con suma, un giro CONSTANTE no se cancela y el elemento
            # pierde modos de solido rigido (salian 1 en vez de 3).
            G[0,3*I+1] = f*(lJ*cJ*hx[eL] - lK*cK*hx[eM])
            G[0,3*I+2] = N[I] + f*(lJ*sJ*hx[eL] - lK*sK*hx[eM])
            G[1,3*I+1] = -N[I] + f*(lJ*cJ*hy[eL] - lK*cK*hy[eM])
            G[1,3*I+2] = f*(lJ*sJ*hy[eL] - lK*sK*hy[eM])
        return Bs,G
    Gm=np.zeros((2,12)); A=0.0
    for r,s in GP:
        d1,d2=dN4(r,s); Jm=np.array([[d1@x,d1@y],[d2@x,d2@y]])
        dJ=np.linalg.det(Jm); _,G=GB(r,s,np.linalg.inv(Jm))
        Gm+=G*abs(dJ); A+=abs(dJ)
    Gm/=A
    K=np.zeros((12,12))
    for r,s in GP:
        d1,d2=dN4(r,s); Jm=np.array([[d1@x,d1@y],[d2@x,d2@y]])
        dJ=np.linalg.det(Jm); Ji=np.linalg.inv(Jm)
        gx=Ji[0,0]*d1+Ji[0,1]*d2; gy=Ji[1,0]*d1+Ji[1,1]*d2
        B=np.zeros((3,12))
        for I in range(4):                 # (77) x (76): B_I e
            Bi=np.array([[gx[I],0.0],[0.0,gy[I]],[gy[I],gx[I]]])@ee
            B[:,3*I+1:3*I+3]=Bi
        K+=B.T@CB@B*abs(dJ)
        Bs,G=GB(r,s,Ji)
        if bbar: G=G-Gm                    # (96)
        Bg=Bs+G
        K+=Bg.T@CS@Bg*abs(dJ)
    return K
