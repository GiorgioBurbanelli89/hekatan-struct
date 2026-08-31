// Saca NUESTRA matriz de flexion 12x12 (w, theta_x, theta_y por nudo) en ejes
// GLOBALES, por el camino REAL del motor: getLocalStiffnessMatrix* -> 24x24
// local -> T^T K T -> se extraen los GDL 2,3,4 de cada nudo.
// Asi se compara termino a termino con la 12x12 medida de ETABS/SAP/SAFE, que
// esta en U3/R1/R2 globales.
//
//   kb12  <tipo 0=thick 1=thin>  E nu t  x1 y1 x2 y2 x3 y3 x4 y4
// imprime 144 numeros.
#include <Eigen/Dense>
#include <iostream>
#include <iomanip>
#include <vector>
#include <cstdlib>
#include "data-model.h"
Eigen::MatrixXd getLocalStiffnessMatrixShellQ4(const std::vector<Node>&, const ElementInputs&, int);
Eigen::MatrixXd getLocalStiffnessMatrixShellThin(const std::vector<Node>&, const ElementInputs&, int);
Eigen::MatrixXd getTransformationMatrixShellQ4(const Node&, const Node&, const Node&, const Node&);

int main(int argc, char** argv){
  if (argc < 13) { std::cerr << "faltan argumentos\n"; return 1; }
  int tipo = atoi(argv[1]);
  double E = atof(argv[2]), nu = atof(argv[3]), t = atof(argv[4]);
  std::vector<Node> nd(4);
  for (int i = 0; i < 4; i++)
    nd[i] = { atof(argv[5 + 2*i]), atof(argv[6 + 2*i]), 0.0 };
  ElementInputs ei;
  ei.elasticities[0]=E; ei.poissonsRatios[0]=nu; ei.thicknesses[0]=t;
  Eigen::MatrixXd Kl = tipo == 1 ? getLocalStiffnessMatrixShellThin(nd, ei, 0)
                                 : getLocalStiffnessMatrixShellQ4  (nd, ei, 0);
  Eigen::MatrixXd T = getTransformationMatrixShellQ4(nd[0],nd[1],nd[2],nd[3]);
  Eigen::MatrixXd Kg = T.transpose()*Kl*T;
  std::cout << std::setprecision(17);
  for (int a=0;a<4;a++) for(int i=0;i<3;i++){
    for (int b=0;b<4;b++) for(int j=0;j<3;j++)
      std::cout << Kg(a*6+2+i, b*6+2+j) << (b==3&&j==2 ? "\n" : " ");
  }
  return 0;
}
