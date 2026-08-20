// ─── kelem_native — la matriz de rigidez de UN elemento, en C++ nativo ───────
//
// Por que existe: para iterar una formulacion hace falta ver la MATRIZ, no un
// desplazamiento. Un desplazamiento es la matriz ya resuelta y mezclada con los
// apoyos y las cargas: si sale mal, no dice DONDE.
//
// Y por que NATIVO y no por el WASM: porque asi se compila con g++ en dos
// segundos, se depura con gdb, y de paso se comprueba que emscripten no mete
// nada de su cosecha (los dos tienen que dar la misma matriz hasta la ultima
// cifra).
//
// A diferencia del resto de mains de cli/native/, este NO declara la firma C a
// mano. Incluye `data-model.h` y llama a la funcion tal cual: si alguien le
// cambia los argumentos, esto NO COMPILA en vez de leer memoria de mas. Ese
// error ya costo caro — `cli.mjs` armaba los 111 punteros de `_deform` a mano,
// se quedo en 43 y reventaba con «memory access out of bounds».
//
// Uso:
//     bash cli/native/build_kelem_native.sh
//     cli/native/kelem_native.exe  x0 y0 z0  x1 y1 z1  x2 y2 z2  x3 y3 z3 \
//                                  E nu t  [tipoDrilling] [gammaFac] [tipoPlaca]
//
//     tipoDrilling : la formulacion del giro normal. Todas pasan el patch
//                    test EXACTO (1.500000 / 0.600000) y tienen 3 modos de
//                    energia nula; lo que cambia es contra que cierran:
//
//                      tipo  matriz 12x12   drilling    hemisferio  mezanine
//                            de ETABS       vs ETABS       8x8       axil
//                        2       —          +11.46 %      -3.6 %   0.30/1.15
//                        3     15.97 %       +5.45 %     -34.07 %  0.62/3.47  (defecto)
//                        7     17.84 %       +6.46 %      -4.07 %  0.86/8.27
//                        8      1.42 %       +3.09 %     -33.26 %  0.30/1.15
//                        9      7.41 %       +7.65 %      -0.50 %  0.30/1.15
//
//                      2 = Hughes-Brezzi (el viejo, NO pasa el patch test)
//                      3 = ITW 1990 (Allman + burbuja, Gauss 3x3)
//                      7 = ITW 1991: la regla de OCHO puntos, ec. (30)
//                      8 = + PROYECCION del drilling (la via de FEAP/Taylor)
//                      9 = proyeccion + regla de ocho
//                      1/0 = legacy
//     gammaFac     : gamma/mu del ITW (defecto 0.4, lo medido de ETABS)
//     tipoPlaca    : 0 = Shell-Thick (Mindlin, defecto) · 1 = Shell-Thin
//
// Escribe la K 24x24 por stdout, una fila por linea, en %.12e — lista para
// comparar con la de Python termino a termino.
//
// Ejemplo (la celda de 1x1x0.20 con la que se midio ETABS):
//     kelem_native.exe 0 0 0  1 0 0  1 1 0  0 1 0  2.2e7 0.2 0.20
#include <cstdio>
#include <cstdlib>
#include <vector>
#include <string>
#include "data-model.h"

Eigen::MatrixXd getLocalStiffnessMatrixShellQ4(
    const std::vector<Node> &nodes, const ElementInputs &elementInputs, int index);
Eigen::MatrixXd getLocalStiffnessMatrixShellThin(
    const std::vector<Node> &nodes, const ElementInputs &elementInputs, int index);

int main(int argc, char **argv)
{
    if (argc < 16) {
        std::fprintf(stderr,
            "uso: kelem_native x0 y0 z0 x1 y1 z1 x2 y2 z2 x3 y3 z3 E nu t"
            " [tipoDrilling=3] [gammaFac=0.4] [tipoPlaca=0]\n");
        return 2;
    }
    std::vector<Node> nodes;
    for (int i = 0; i < 4; i++)
        nodes.push_back({std::atof(argv[1 + 3*i]),
                         std::atof(argv[2 + 3*i]),
                         std::atof(argv[3 + 3*i])});
    const double E  = std::atof(argv[13]);
    const double nu = std::atof(argv[14]);
    const double t  = std::atof(argv[15]);
    const int tipoDrill = (argc > 16) ? std::atoi(argv[16]) : 3;
    const double gammaFac = (argc > 17) ? std::atof(argv[17]) : 0.4;
    const int tipoPlaca = (argc > 18) ? std::atoi(argv[18]) : 0;

    ElementInputs ei;
    ei.elasticities[0]   = E;
    ei.poissonsRatios[0] = nu;
    ei.thicknesses[0]    = t;
    ei.densities[0]      = 0.0;
    ei.drillingTypes[0]  = tipoDrill;
    ei.drillingPenaltyScales[0] = gammaFac;
    ei.plateFormulations[0] = tipoPlaca;

    Eigen::MatrixXd K = (tipoPlaca == 1)
        ? getLocalStiffnessMatrixShellThin(nodes, ei, 0)
        : getLocalStiffnessMatrixShellQ4(nodes, ei, 0);

    for (int i = 0; i < K.rows(); i++) {
        for (int j = 0; j < K.cols(); j++)
            std::printf("%.12e%s", K(i, j), (j + 1 == K.cols()) ? "" : " ");
        std::printf("\n");
    }
    return 0;
}
