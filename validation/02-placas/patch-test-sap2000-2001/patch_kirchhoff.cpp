// Patch test 2-001 contra elementStiffness de plate_q4/kirchhoff_q4.cpp.
// GDL por nudo: [w, betax, betay] con betax = dw/dx, betay = dw/dy (pendientes).
#include "plate_q4/kirchhoff_q4.h"
#include <Eigen/Dense>
#include <iostream>
#include <iomanip>
namespace plate_q4 {
Eigen::Matrix<double,12,12> elementStiffness(const std::array<Node2D,4>&, const Material&);
}
using namespace plate_q4;
static const double X[8]={0,0,0.04,0.08,0.18,0.16,0.24,0.24};
static const double Y[8]={0,0.12,0.02,0.08,0.03,0.08,0,0.12};
static const int C[5][4]={{1,0,2,3},{0,6,4,2},{6,7,5,4},{7,1,3,5},{2,4,5,3}};
int main(){
  Material m; m.E=1e6; m.nu=0.25; m.t=0.001; m.theory=PlateTheory::MINDLIN;
  Eigen::MatrixXd K=Eigen::MatrixXd::Zero(24,24);
  for(int e=0;e<5;e++){
    std::array<Node2D,4> nd;
    for(int i=0;i<4;i++) nd[i]={X[C[e][i]],Y[C[e][i]]};
    auto Ke=elementStiffness(nd,m);
    for(int a=0;a<4;a++)for(int b=0;b<4;b++)for(int i=0;i<3;i++)for(int j=0;j<3;j++)
      K(C[e][a]*3+i,C[e][b]*3+j)+=Ke(a*3+i,b*3+j);
  }
  Eigen::VectorXd ut(24);
  for(int n=0;n<8;n++){ double x=X[n],y=Y[n];
    ut(n*3+0)=1e-3*(x*x+x*y+y*y)/2; ut(n*3+1)=1e-3*(x+y/2); ut(n*3+2)=1e-3*(x/2+y); }
  std::vector<int> lib; std::vector<bool> fijo(24,false);
  for(int n:{0,1,6,7}) for(int i=0;i<3;i++) fijo[n*3+i]=true;
  for(int i=0;i<24;i++) if(!fijo[i]) lib.push_back(i);
  int nf=lib.size();
  Eigen::MatrixXd Kff(nf,nf); Eigen::VectorXd rhs(nf);
  for(int a=0;a<nf;a++){ double s=0;
    for(int j=0;j<24;j++) if(fijo[j]) s+=K(lib[a],j)*ut(j);
    rhs(a)=-s; for(int b=0;b<nf;b++) Kff(a,b)=K(lib[a],lib[b]); }
  Eigen::VectorXd uf=Kff.fullPivLu().solve(rhs);
  double peor=0;
  for(int a=0;a<nf;a++){ double ref=std::max(std::abs(ut(lib[a])),1e-6);
    peor=std::max(peor,std::abs(uf(a)-ut(lib[a]))/ref); }
  Eigen::VectorXd r=K*ut; double rn=0;
  for(int a=0;a<nf;a++) rn+=r(lib[a])*r(lib[a]);
  std::cout<<std::scientific<<std::setprecision(4)
    <<"kirchhoff_q4 (MINDLIN/MITC4)  peor error interior = "<<peor*100<<" %\n"
    <<"  ||K u_teorico||_libres/(||K|| ||u||) = "
    <<std::sqrt(rn)/(K.norm()*ut.norm())<<"\n";
  return 0;
}
