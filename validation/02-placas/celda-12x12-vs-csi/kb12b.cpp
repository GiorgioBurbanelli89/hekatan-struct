// Igual que kb12 pero con MODIFICADORES y eleccion de formulacion, para poder
// barrer las piezas por separado:
//   kb12b <form 0=thick(MITC4) 1=thin(DKQ) 3=DKMQ> E nu t  m11 m22 m12 v13 v23  x1 y1 ... x4 y4
// m* multiplican la CONSTITUTIVA de flexion Db, v* la de cortante Ds.
#include <Eigen/Dense>
#include <iostream>
#include <iomanip>
#include <vector>
#include <cstdlib>
#include "data-model.h"
Eigen::MatrixXd getLocalStiffnessMatrixShellQ4(const std::vector<Node>&, const ElementInputs&, int);
Eigen::MatrixXd getLocalStiffnessMatrixShellThin(const std::vector<Node>&, const ElementInputs&, int);
Eigen::MatrixXd getLocalStiffnessMatrixShellQ4_DKMQ(const std::vector<Node>&, const ElementInputs&, int);
Eigen::MatrixXd getTransformationMatrixShellQ4(const Node&, const Node&, const Node&, const Node&);
int main(int argc, char** argv){
  if (argc < 18) { std::cerr << "faltan argumentos\n"; return 1; }
  int form = atoi(argv[1]);
  double E=atof(argv[2]), nu=atof(argv[3]), t=atof(argv[4]);
  std::vector<double> mod(8, 1.0);
  for (int i=0;i<5;i++) mod[3+i] = atof(argv[5+i]);   // m11 m22 m12 v13 v23
  std::vector<Node> nd(4);
  for (int i=0;i<4;i++) nd[i] = { atof(argv[10+2*i]), atof(argv[11+2*i]), 0.0 };
  ElementInputs ei;
  ei.elasticities[0]=E; ei.poissonsRatios[0]=nu; ei.thicknesses[0]=t;
  bool sinMod = true;
  for (double v : mod) if (v != 1.0) sinMod = false;
  if (!sinMod) ei.shellModifiers[0] = mod;
  Eigen::MatrixXd Kl = form==1 ? getLocalStiffnessMatrixShellThin(nd, ei, 0)
                     : form==3 ? getLocalStiffnessMatrixShellQ4_DKMQ(nd, ei, 0)
                               : getLocalStiffnessMatrixShellQ4(nd, ei, 0);
  Eigen::MatrixXd T = getTransformationMatrixShellQ4(nd[0],nd[1],nd[2],nd[3]);
  Eigen::MatrixXd Kg = T.transpose()*Kl*T;
  std::cout << std::setprecision(17);
  for (int a=0;a<4;a++) for(int i=0;i<3;i++){
    for (int b=0;b<4;b++) for(int j=0;j<3;j++)
      std::cout << Kg(a*6+2+i, b*6+2+j) << (b==3&&j==2 ? "\n" : " ");
  }
  return 0;
}
