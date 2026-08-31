// Diagnostico del Shell-THICK: por que falla el patch test de flexion.
// Dos sospechosos, los dos "cartesiano vs natural", los dos INVISIBLES en un
// rectangulo (por eso nunca se habian visto):
//   A) los modos incompatibles alfa sin la correccion de Taylor detJ0/detJ
//      -> integral(Ba dA) != 0  -> el patch test de curvatura constante falla
//   B) el MITC4 interpolando el cortante CARTESIANO en vez del COVARIANTE
//      -> gamma != 0 con un campo de Kirchhoff exacto
#include "utils/shellQ4.cpp"
#include <iostream>
#include <iomanip>

static const double X[8] = {0, 0,    0.04, 0.08, 0.18, 0.16, 0.24, 0.24};
static const double Y[8] = {0, 0.12, 0.02, 0.08, 0.03, 0.08, 0,    0.12};
static const int CONN[5][4] = {{1,0,2,3},{0,6,4,2},{6,7,5,4},{7,1,3,5},{2,4,5,3}};

int main(){
  std::cout<<std::scientific<<std::setprecision(4);
  for(int e=0;e<5;e++){
    // coords locales del elemento, igual que hace el motor (centradas)
    double cx=0,cy=0;
    for(int i=0;i<4;i++){cx+=X[CONN[e][i]]/4;cy+=Y[CONN[e][i]]/4;}
    double x[4],y[4];
    for(int i=0;i<4;i++){x[i]=X[CONN[e][i]]-cx; y[i]=Y[CONN[e][i]]-cy;}
    // campo teorico en coordenadas GLOBALES; como el elemento es plano y el
    // eje local x del motor puede estar girado, se evalua en global y se
    // proyecta... aqui el eje local coincide salvo giro; para el diagnostico
    // basta un campo de curvatura CONSTANTE cualquiera en locales:
    //   w = (x^2 + xy + y^2)/2 * 1e-3, theta_x=+dw/dy, theta_y=-dw/dx
    double u[12];
    for(int i=0;i<4;i++){
      double xi=x[i], yi=y[i];
      u[3*i+0]=1e-3*(xi*xi+xi*yi+yi*yi)/2.0;
      u[3*i+1]= 1e-3*(xi/2.0+yi);
      u[3*i+2]=-1e-3*(xi+yi/2.0);
    }
    Eigen::VectorXd ue(12); for(int i=0;i<12;i++) ue(i)=u[i];

    // ---- A) integral de Ba sobre el elemento (tiene que ser CERO) ----
    double Jinv0[2][2];
    { double N0[4],a[4],b[4]; shapeFunctionsQ4(0,0,N0,a,b); jacobian2D(x,y,a,b,Jinv0); }
    double detJ0;
    { double N0[4],a[4],b[4]; shapeFunctionsQ4(0,0,N0,a,b);
      double J[2][2]; detJ0=jacobian2D(x,y,a,b,J); }
    Eigen::MatrixXd intBa = Eigen::MatrixXd::Zero(3,4);
    Eigen::MatrixXd intBaT= Eigen::MatrixXd::Zero(3,4);   // con la correccion
    double area=0;
    for(int gp=0;gp<4;gp++){
      double xi=gp2x2[gp][0], et=gp2x2[gp][1];
      double N[4],dx[4],de[4]; shapeFunctionsQ4(xi,et,N,dx,de);
      double Ji[2][2]; double detJ=jacobian2D(x,y,dx,de,Ji);
      area+=std::abs(detJ);
      double d5xi=-2*xi,d5et=0,d6xi=0,d6et=-2*et;
      double d5x=Jinv0[0][0]*d5xi+Jinv0[0][1]*d5et, d5y=Jinv0[1][0]*d5xi+Jinv0[1][1]*d5et;
      double d6x=Jinv0[0][0]*d6xi+Jinv0[0][1]*d6et, d6y=Jinv0[1][0]*d6xi+Jinv0[1][1]*d6et;
      Eigen::MatrixXd Ba=Eigen::MatrixXd::Zero(3,4);
      Ba(0,2)=-d5x; Ba(0,3)=-d6x; Ba(1,0)=d5y; Ba(1,1)=d6y;
      Ba(2,0)=d5x;  Ba(2,1)=d6x;  Ba(2,2)=-d5y; Ba(2,3)=-d6y;
      intBa  += Ba*std::abs(detJ);
      intBaT += Ba*(detJ0/detJ)*std::abs(detJ);   // Taylor 1976
    }

    // ---- B) el cortante MITC4 con el campo de Kirchhoff exacto ----
    auto shearBat=[&](double xp,double ep){
      double N[4],dx[4],de[4]; shapeFunctionsQ4(xp,ep,N,dx,de);
      double Jp[2][2]; jacobian2D(x,y,dx,de,Jp);
      Eigen::MatrixXd B=Eigen::MatrixXd::Zero(2,12);
      for(int i=0;i<4;i++){
        double ddx=Jp[0][0]*dx[i]+Jp[0][1]*de[i];
        double ddy=Jp[1][0]*dx[i]+Jp[1][1]*de[i];
        B(0,3*i)=ddx; B(0,3*i+2)=N[i];
        B(1,3*i)=ddy; B(1,3*i+1)=-N[i];
      } return B; };
    auto BA=shearBat(0,-1), BC=shearBat(0,1), BB=shearBat(-1,0), BD=shearBat(1,0);
    double gmax=0;
    for(int gp=0;gp<4;gp++){
      double xi=gp2x2[gp][0], et=gp2x2[gp][1];
      Eigen::MatrixXd Bs=Eigen::MatrixXd::Zero(2,12);
      Bs.row(0)=0.5*(1-et)*BA.row(0)+0.5*(1+et)*BC.row(0);
      Bs.row(1)=0.5*(1-xi)*BB.row(1)+0.5*(1+xi)*BD.row(1);
      Eigen::VectorXd g=Bs*ue;
      gmax=std::max(gmax,std::max(std::abs(g(0)),std::abs(g(1))));
    }
    // referencia: la pendiente tipica del campo, para saber si gmax es grande
    double slope=0; for(int i=0;i<4;i++) slope=std::max(slope,std::abs(u[3*i+1]));

    std::cout<<"elem "<<e+1
      <<"  ||int Ba||= "<<intBa.norm()/area
      <<"  (con Taylor detJ0/detJ: "<<intBaT.norm()/area<<")"
      <<"  gamma_max/pendiente= "<<gmax/slope<<"\n";
  }
  return 0;
}
