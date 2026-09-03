#pragma once
// DIAFRAGMA RIGIDO en el plano, como el "Rigid" de ETABS: los nudos de un grupo
// comparten ux, uy y rz respecto a un MAESTRO VIRTUAL en el centro del grupo
// (uz, rx, ry quedan libres). Se expresa como una transformacion T (dof_completo
// x dof_reducido): u = T u_red, K_red = T^T K T, F_red = T^T F.
//
//   ux_i = ux_c - (y_i - yc) rz_c
//   uy_i = uy_c + (x_i - xc) rz_c
//   rz_i = rz_c
//
// El maestro es VIRTUAL y va en el centro (de masa si se da la masa nodal, si
// no geometrico): con un nudo real de esquina como maestro la M reducida lleva
// el acoplamiento ux-rz (sum m*dy != 0) que el modal, que solo mira la diagonal
// de M, pierde. Medido el 3-sep-2026: T_x 0.348 s contra 0.189 s.
//
// "Flexible" (el "Semi-rigid" de ETABS) es no poner diafragma: la losa mallada
// aporta su rigidez en el plano y nada mas.
#include <Eigen/Sparse>
#include <array>
#include <map>
#include <vector>

struct DiafragmaT {
    bool hay = false;
    int dofReducido = 0;
    Eigen::SparseMatrix<double> T;     // dof_completo x dof_reducido
    std::vector<int> colDe;            // GDL completo -> columna reducida (-1 = atado)
};

/**
 * @param nodes        coordenadas
 * @param numNodes     cuantos
 * @param diaph        nudo -> grupo (0 = ninguno)
 * @param masaNodal    masa traslacional por nudo para el centro de masa (puede ir vacia)
 */
inline DiafragmaT armarDiafragma(const std::vector<std::array<double, 3>> &nodes, int numNodes,
                                 const std::map<int, double> &diaph,
                                 const std::vector<double> &masaNodal) {
    DiafragmaT d;
    const int dof = 6 * numNodes;
    std::map<int, std::vector<int>> grupos;
    std::vector<int> diaDe(numNodes, -1);
    for (const auto &kv : diaph) {
        if (kv.first < 0 || kv.first >= numNodes) continue;
        const int g = (int)std::llround(kv.second);
        if (g <= 0) continue;
        grupos[g].push_back(kv.first);
        diaDe[kv.first] = g;
    }
    for (auto it = grupos.begin(); it != grupos.end();) {
        if (it->second.size() < 2) { for (int i : it->second) diaDe[i] = -1; it = grupos.erase(it); }
        else ++it;
    }
    d.colDe.assign(dof, -1);
    if (grupos.empty()) { d.dofReducido = dof; for (int i = 0; i < dof; ++i) d.colDe[i] = i; return d; }
    d.hay = true;
    std::map<int, std::array<double, 2>> centro;
    for (const auto &g : grupos) {
        double sm = 0.0, sx = 0.0, sy = 0.0;
        for (int i : g.second) {
            const double mi = (i < (int)masaNodal.size() && masaNodal[i] > 0.0) ? masaNodal[i] : 0.0;
            sm += mi; sx += mi * nodes[i][0]; sy += mi * nodes[i][1];
        }
        if (sm <= 0.0) { sm = sx = sy = 0.0; for (int i : g.second) { sm += 1.0; sx += nodes[i][0]; sy += nodes[i][1]; } }
        centro[g.first] = { sx / sm, sy / sm };
    }
    int nred = 0;
    for (int i = 0; i < numNodes; ++i)
        for (int k = 0; k < 6; ++k) {
            const bool atado = (diaDe[i] > 0) && (k == 0 || k == 1 || k == 5);
            if (!atado) d.colDe[i * 6 + k] = nred++;
        }
    std::map<int, int> colMaestro;
    for (const auto &g : grupos) { colMaestro[g.first] = nred; nred += 3; }
    std::vector<Eigen::Triplet<double>> tt;
    tt.reserve(dof * 2);
    for (int i = 0; i < numNodes; ++i) {
        const int g = diaDe[i];
        for (int k = 0; k < 6; ++k) {
            const int fila = i * 6 + k;
            if (d.colDe[fila] >= 0) { tt.emplace_back(fila, d.colDe[fila], 1.0); continue; }
            const int cm = colMaestro[g];
            const double dx = nodes[i][0] - centro[g][0], dy = nodes[i][1] - centro[g][1];
            if (k == 0)      { tt.emplace_back(fila, cm + 0, 1.0); tt.emplace_back(fila, cm + 2, -dy); }
            else if (k == 1) { tt.emplace_back(fila, cm + 1, 1.0); tt.emplace_back(fila, cm + 2, dx); }
            else             { tt.emplace_back(fila, cm + 2, 1.0); }
        }
    }
    d.dofReducido = nred;
    d.T.resize(dof, nred);
    d.T.setFromTriplets(tt.begin(), tt.end());
    return d;
}
