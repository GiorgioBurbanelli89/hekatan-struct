// Patch test 2-001 de SAP2000 (MacNeal & Harder 1985) contra el motor de Hekatan.
//   u = 1e-3 (x + y/2)          v = 1e-3 (y + x/2)
//   w = 1e-3 (x^2 + xy + y^2)/2   Rx = +dw/dy   Ry = -dw/dx
// Se impone el campo EXACTO en los nudos 1,2,7,8 y se resuelve el interior.
// Si el elemento es completo, los nudos 3,4,5,6 tienen que salir EXACTOS.
#include <Eigen/Dense>
#include <iostream>
#include <iomanip>
#include <vector>
#include <map>
#include "data-model.h"

Eigen::MatrixXd getLocalStiffnessMatrixShellQ4(const std::vector<Node>&, const ElementInputs&, int);
Eigen::MatrixXd getLocalStiffnessMatrixShellThin(const std::vector<Node>&, const ElementInputs&, int);
Eigen::MatrixXd getTransformationMatrixShellQ4(const Node&, const Node&, const Node&, const Node&);

static const double X[8] = {0, 0,    0.04, 0.08, 0.18, 0.16, 0.24, 0.24};
static const double Y[8] = {0, 0.12, 0.02, 0.08, 0.03, 0.08, 0,    0.12};
// conectividad de MacNeal-Harder: 4 elementos de borde + 1 central
static const int CONN[5][4] = {
    {1,0,2,3},   // izquierda   (nudos 2-1-3-4)
    {0,6,4,2},   // abajo       (1-7-5-3)
    {6,7,5,4},   // derecha     (7-8-6-5)
    {7,1,3,5},   // arriba      (8-2-4-6)
    {2,4,5,3}    // centro      (3-5-6-4)
};
static const int PRESC[4] = {0,1,6,7};   // nudos 1,2,7,8

static void campo(double x, double y, double d[6], int caso) {
    for (int i=0;i<6;i++) d[i]=0;
    if (caso==0) {                       // Membrana
        d[0] = 1e-3*(x + y/2.0);
        d[1] = 1e-3*(y + x/2.0);
    } else {                             // Flexion
        d[2] = 1e-3*(x*x + x*y + y*y)/2.0;
        d[3] = 1e-3*(x/2.0 + y);         // Rx = +dw/dy
        d[4] = -1e-3*(x + y/2.0);        // Ry = -dw/dx
    }
}

int main() {
    const double E=1e6, nu=0.25, t=0.001;
    for (int formulacion=0; formulacion<2; formulacion++) {
        const char* nom = formulacion==0 ? "Shell-THIN  (DKQ Kirchhoff)"
                                         : "Shell-THICK (MITC4 Mindlin)";
        Eigen::MatrixXd K = Eigen::MatrixXd::Zero(48,48);
        double areaTot = 0;
        for (int e=0; e<5; e++) {
            std::vector<Node> nd(4);
            for (int i=0;i<4;i++) nd[i] = {X[CONN[e][i]], Y[CONN[e][i]], 0.0};
            // area por la formula del zapatero (control de conectividad)
            double a=0; for(int i=0;i<4;i++){int j=(i+1)%4;
                a += nd[i][0]*nd[j][1] - nd[j][0]*nd[i][1];}
            areaTot += 0.5*a;
            ElementInputs ei;
            ei.elasticities[e]=E; ei.poissonsRatios[e]=nu; ei.thicknesses[e]=t;
            Eigen::MatrixXd Kl = formulacion==0
                ? getLocalStiffnessMatrixShellThin(nd, ei, e)
                : getLocalStiffnessMatrixShellQ4  (nd, ei, e);
            Eigen::MatrixXd T = getTransformationMatrixShellQ4(nd[0],nd[1],nd[2],nd[3]);
            Eigen::MatrixXd Kg = T.transpose()*Kl*T;
            for (int a2=0;a2<4;a2++) for(int b=0;b<4;b++)
              for(int i=0;i<6;i++) for(int j=0;j<6;j++)
                K(CONN[e][a2]*6+i, CONN[e][b]*6+j) += Kg(a2*6+i, b*6+j);
        }
        std::cout << "\n=== " << nom << " ===\n";
        std::cout << "area ensamblada = " << areaTot << "  (teorica 0.0288)\n";

        for (int caso=0; caso<2; caso++) {
            // vector teorico completo
            Eigen::VectorXd ut = Eigen::VectorXd::Zero(48);
            for (int n=0;n<8;n++){ double d[6]; campo(X[n],Y[n],d,caso);
                for(int i=0;i<6;i++) ut(n*6+i)=d[i]; }
            // GDL impuestos: en los nudos 1,2,7,8, los 5 de ese caso (theta_z libre)
            std::vector<bool> fijo(48,false);
            for (int k=0;k<4;k++){ int n=PRESC[k];
                if (caso==0){ fijo[n*6+0]=fijo[n*6+1]=true; }
                else        { fijo[n*6+2]=fijo[n*6+3]=fijo[n*6+4]=true; } }
            // los GDL que este caso no toca se bloquean a cero (desacoplados)
            for (int n=0;n<8;n++){
                if (caso==0){ fijo[n*6+2]=fijo[n*6+3]=fijo[n*6+4]=true; }
                else        { fijo[n*6+0]=fijo[n*6+1]=true; } }
            std::vector<int> libres;
            for (int i=0;i<48;i++) if(!fijo[i]) libres.push_back(i);
            int nf = libres.size();
            Eigen::MatrixXd Kff(nf,nf); Eigen::VectorXd rhs(nf);
            for (int a=0;a<nf;a++){
                double s=0;
                for (int j=0;j<48;j++) if (fijo[j]) s += K(libres[a],j)*ut(j);
                rhs(a) = -s;
                for (int b=0;b<nf;b++) Kff(a,b)=K(libres[a],libres[b]);
            }
            Eigen::VectorXd uf = Kff.fullPivLu().solve(rhs);
            Eigen::VectorXd u = ut;
            for (int a=0;a<nf;a++) u(libres[a]) = uf(a);

            const char* cn = caso==0 ? "MEMBRANA (Ux,Uy)" : "FLEXION (Uz,Rx,Ry)";
            std::cout << "\n-- caso " << cn << " --\n";
            const char* gdl[6]={"Ux","Uy","Uz","Rx","Ry","Rz"};
            int lista[3]; int nl;
            if (caso==0){ lista[0]=0; lista[1]=1; nl=2; }
            else        { lista[0]=2; lista[1]=3; lista[2]=4; nl=3; }
            double peor=0;
            std::cout << std::scientific << std::setprecision(6);
            for (int n=2;n<6;n++){          // nudos interiores 3,4,5,6
                std::cout << "  nudo " << n+1 << ": ";
                for (int q=0;q<nl;q++){ int i=n*6+lista[q];
                    double err = std::abs(u(i)-ut(i));
                    double rel = std::abs(ut(i))>1e-14 ? err/std::abs(ut(i)) : err/1e-4;
                    if (rel>peor) peor=rel;
                    std::cout << gdl[lista[q]] << "=" << u(i)
                              << " (teor " << ut(i) << ")  ";
                }
                std::cout << "\n";
            }
            std::cout << "  >> peor error relativo = " << peor*100 << " %\n";
            // residuo con el campo teorico exacto: K*u_teorico en los GDL libres
            Eigen::VectorXd r = K*ut;
            double rn=0, kn=K.norm()*ut.norm();
            for (int a=0;a<nf;a++) rn += r(libres[a])*r(libres[a]);
            std::cout << "  >> ||K*u_teorico||_libres / (||K||*||u||) = "
                      << std::sqrt(rn)/kn << "\n";
            if (caso==0){
                std::cout << "  >> theta_z nudos interiores: ";
                for(int n=2;n<6;n++) std::cout << u(n*6+5) << " ";
                std::cout << " (teorico 0)\n";
            }
        }
    }
    return 0;
}
