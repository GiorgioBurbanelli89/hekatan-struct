#pragma once
#include "../data-model.h"
#include <vector>
#include <array>
#include <cmath>
#include <algorithm>
#include <Eigen/Sparse>

// ── La union viga-muro de ETABS (medida el 2-sep-2026, drilling_min*.py) ──
// En cada nudo de una cascara VERTICAL (muro) al que llega una barra, y por
// cada elemento de muro que contiene el nudo, ETABS suma c * v v^T con
//     v = (w_h - w_n) - theta_n * ((p_h - p_n) . e1)
//     c = E * t * (H/L)^3 / 32
// e1 = la arista HORIZONTAL del elemento que sale del nudo (L su longitud), h
// el vecino por esa arista, H la altura, w el desplazamiento en el plano
// transversal a la arista (e2 = n x e1) y theta el giro alrededor de la
// normal. Es "colgar" el vecino del nudo como solido rigido con un muelle c:
// ata el drilling al giro de la arista. Con esto Hekatan reproduce el
// drilling-dof (2 muros + viga de acople, 92 nudos) a 2e-6 %; sin esto es
// SAP2000. Las losas horizontales NO lo llevan (medido con Slab y con Wall).
// Espejo de `etabs_wall_joint_penalties` (hekatan-struct-py/solver.py).
inline void addEtabsWallJoint(Eigen::SparseMatrix<double> &K,
                              const std::vector<Node> &nodes,
                              const std::vector<unsigned int> &element_indices,
                              const std::vector<unsigned int> &element_sizes,
                              const ElementInputs &ei)
{
    std::vector<char> conBarra(nodes.size(), 0);
    size_t off = 0;
    for (size_t e = 0; e < element_sizes.size(); ++e) {
        if (element_sizes[e] == 2) { conBarra[element_indices[off]] = 1; conBarra[element_indices[off + 1]] = 1; }
        off += element_sizes[e];
    }
    auto sub = [](const Node &a, const Node &b) { return std::array<double, 3>{a[0] - b[0], a[1] - b[1], a[2] - b[2]}; };
    auto cross = [](const std::array<double, 3> &a, const std::array<double, 3> &b) {
        return std::array<double, 3>{a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]}; };
    auto norm = [](const std::array<double, 3> &a) { return std::sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]); };
    off = 0;
    for (size_t e = 0; e < element_sizes.size(); ++e) {
        const unsigned int sz = element_sizes[e];
        const unsigned int *el = &element_indices[off];
        off += sz;
        if (sz != 4) continue;
        bool alguno = false;
        for (int a = 0; a < 4; ++a) if (conBarra[el[a]]) alguno = true;
        if (!alguno) continue;
        std::array<double, 3> nrm = cross(sub(nodes[el[2]], nodes[el[0]]), sub(nodes[el[3]], nodes[el[1]]));
        double nn = norm(nrm);
        if (nn < 1e-12) continue;
        for (auto &v : nrm) v /= nn;
        if (std::fabs(nrm[2]) > 1e-6) continue;           // no es vertical: no es un muro
        auto itE = ei.elasticities.find(static_cast<int>(e));
        auto itT = ei.thicknesses.find(static_cast<int>(e));
        if (itE == ei.elasticities.end() || itT == ei.thicknesses.end()) continue;
        const double E = itE->second, t = itT->second;
        if (E <= 0 || t <= 0) continue;
        for (int a = 0; a < 4; ++a) {
            const int nd = el[a];
            if (!conBarra[nd]) continue;
            const int prev_ = el[(a + 3) % 4], next_ = el[(a + 1) % 4];
            // la arista mas HORIZONTAL de las dos que salen del nudo
            std::array<double, 3> dp = sub(nodes[prev_], nodes[nd]), dn = sub(nodes[next_], nodes[nd]);
            double hp = std::fabs(dp[2]) / std::max(norm(dp), 1e-12), hn = std::fabs(dn[2]) / std::max(norm(dn), 1e-12);
            const int h = (hp <= hn) ? prev_ : next_;
            const int hv = (hp <= hn) ? next_ : prev_;
            std::array<double, 3> d = sub(nodes[h], nodes[nd]);
            const double L = norm(d), H = norm(sub(nodes[hv], nodes[nd]));
            if (L < 1e-12 || H < 1e-12) continue;
            std::array<double, 3> e1 = {d[0] / L, d[1] / L, d[2] / L};
            std::array<double, 3> e2 = cross(nrm, e1);
            const double c = E * t * std::pow(H / L, 3.0) / 32.0;
            const double de1 = d[0] * e1[0] + d[1] * e1[1] + d[2] * e1[2];
            // v: {gdl, coef}
            std::vector<std::pair<int, double>> v;
            for (int comp = 0; comp < 3; ++comp) {
                if (std::fabs(e2[comp]) > 1e-14) { v.push_back({6 * h + comp, e2[comp]}); v.push_back({6 * nd + comp, -e2[comp]}); }
                if (std::fabs(nrm[comp]) > 1e-14) v.push_back({6 * nd + 3 + comp, -de1 * nrm[comp]});
            }
            for (auto &vi : v) for (auto &vj : v) K.coeffRef(vi.first, vj.first) += c * vi.second * vj.second;
        }
    }
}

