// Un elemento CUADRADO. Misma geometria fisica, cuatro numeraciones (rotando
// el nudo de arranque). La matriz de rigidez tiene que ser LA MISMA una vez
// se reordenan las filas/columnas. Si no, el elemento depende de por donde
// empieces a contar los nudos, que es un bug puro.
#include "plate_q4/kirchhoff_q4.h"
#include <Eigen/Dense>
#include <iostream>
#include <iomanip>
namespace plate_q4 {
Eigen::Matrix<double,12,12> elementStiffness(const std::array<Node2D,4>&, const Material&);
}
using namespace plate_q4;
int main(){
  Material m; m.E=1e6; m.nu=0.25; m.t=0.10; m.theory=PlateTheory::MINDLIN;
  double px[4]={0,1,1,0}, py[4]={0,0,1,1};      // cuadrado 1x1
  std::array<Node2D,4> n0; for(int i=0;i<4;i++) n0[i]={px[i],py[i]};
  auto K0=elementStiffness(n0,m);
  std::cout<<std::scientific<<std::setprecision(4);
  for(int r=1;r<4;r++){
    std::array<Node2D,4> nr;
    for(int i=0;i<4;i++) nr[i]={px[(i+r)%4],py[(i+r)%4]};
    auto Kr=elementStiffness(nr,m);
    // devolver Kr al orden original
    Eigen::MatrixXd Kb=Eigen::MatrixXd::Zero(12,12);
    for(int a=0;a<4;a++)for(int b=0;b<4;b++)for(int i=0;i<3;i++)for(int j=0;j<3;j++)
      Kb(((a+r)%4)*3+i,((b+r)%4)*3+j)=Kr(a*3+i,b*3+j);
    std::cout<<"arranque en nudo "<<r<<": ||K-K0||/||K0|| = "
             <<(Kb-K0).norm()/K0.norm()<<"\n";
  }
  return 0;
}
