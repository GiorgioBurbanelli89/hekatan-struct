/**
 * ============================================================================
 *  WASM Entry Point for Mindlin-Reissner Q4 Plate Element
 * ============================================================================
 *
 *  Bridges Emscripten (TypeScript) ↔ plate_q4::solve() C++ solver.
 *
 *  Input format (flat arrays from JS):
 *    nodes:          [x1,y1, x2,y2, ...]           (2 doubles per node)
 *    elements:       [n1,n2,n3,n4, n1,n2,n3,n4...] (4 ints per element)
 *    bcs:            [node,dof,value, ...]          (3 doubles per BC)
 *    point_loads:    [node,dof,value, ...]          (3 doubles per load)
 *    material:       E, nu, thickness               (3 scalars)
 *
 *  Output format (malloc'd arrays returned via pointer-to-pointer):
 *    displacements:      [w1,βx1,βy1, w2,βx2,βy2, ...]  (3 per node)
 *    stress_resultants:  [Mxx,Myy,Mxy,Qx,Qy, ...]       (5 per element)
 *
 * ============================================================================
 */

#include "plate_q4/kirchhoff_q4.h"
#include <cstdlib>
#include <cstring>
#include <iostream>

extern "C" {

void plate_q4_solve(
    // ── Geometry ──
    double* nodes_ptr, int num_nodes,           // [x1,y1, x2,y2, ...] 2*num_nodes doubles
    int* elements_ptr, int num_elements,        // [n1,n2,n3,n4, ...] 4*num_elements ints

    // ── Material (uniform) ──
    double E, double nu, double thickness,

    // ── Boundary conditions ──
    double* bcs_ptr, int num_bcs,               // [node,dof,value, ...] 3*num_bcs doubles

    // ── Loading ──
    double pressure,                            // uniform pressure (force/area)
    double* point_loads_ptr, int num_point_loads, // [node,dof,value,...] 3*num_pls doubles

    // ── Mesh generation mode ──
    // If mesh_Lx > 0 and mesh_Ly > 0, generate a rectangular mesh
    // and IGNORE nodes_ptr/elements_ptr. Otherwise use provided mesh.
    double mesh_Lx, double mesh_Ly, int mesh_nx, int mesh_ny,
    int bc_type,    // 0=none (use bcs_ptr), 1=simply supported, 2=clamped

    // ── Theory type ──
    int theory_type,  // 0=Mindlin (thick), 1=Kirchhoff (thin), 2=Membrane

    // ── Spring supports ──
    double* springs_ptr, int num_springs,  // [node,dof,k, ...] 3*num_springs doubles

    // ── Per-element thickness (layered) ──
    // If num_thicknesses > 0 and == num_elements, overrides global thickness per element.
    double* thicknesses_ptr, int num_thicknesses,

    // ── Outputs (allocated by C++, freed by JS) ──
    double** displacements_ptr_out, int* displacements_size_out,
    double** stress_resultants_ptr_out, int* stress_resultants_size_out
)
{
    using namespace plate_q4;

    // ── 1. Build mesh ──
    std::vector<Node2D> nodes;
    std::vector<Element> elements;

    bool generateMesh = (mesh_Lx > 0 && mesh_Ly > 0 && mesh_nx > 0 && mesh_ny > 0);

    if (generateMesh) {
        generateRectMesh(mesh_Lx, mesh_Ly, mesh_nx, mesh_ny, nodes, elements);
    } else {
        // Parse from flat arrays
        nodes.resize(num_nodes);
        for (int i = 0; i < num_nodes; i++) {
            nodes[i].x = nodes_ptr[2 * i];
            nodes[i].y = nodes_ptr[2 * i + 1];
        }
        elements.resize(num_elements);
        for (int e = 0; e < num_elements; e++) {
            for (int j = 0; j < 4; j++) {
                elements[e][j] = elements_ptr[4 * e + j];
            }
        }
    }

    // ── 2. Material ──
    Material mat{E, nu, thickness, static_cast<PlateTheory>(theory_type)};

    // ── 3. Boundary conditions ──
    std::vector<BC> bcs;
    if (bc_type == 1 && generateMesh) {
        bcs = bcSimplySupported(nodes, mesh_Lx, mesh_Ly);
    } else if (bc_type == 2 && generateMesh) {
        bcs = bcClamped(nodes, mesh_Lx, mesh_Ly);
    } else {
        // Parse from flat array
        bcs.resize(num_bcs);
        for (int i = 0; i < num_bcs; i++) {
            bcs[i].node  = static_cast<int>(bcs_ptr[3 * i]);
            bcs[i].dof   = static_cast<int>(bcs_ptr[3 * i + 1]);
            bcs[i].value = bcs_ptr[3 * i + 2];
        }
    }

    // ── 4. Point loads ──
    std::vector<PointLoad> pointLoads(num_point_loads);
    for (int i = 0; i < num_point_loads; i++) {
        pointLoads[i].node  = static_cast<int>(point_loads_ptr[3 * i]);
        pointLoads[i].dof   = static_cast<int>(point_loads_ptr[3 * i + 1]);
        pointLoads[i].value = point_loads_ptr[3 * i + 2];
    }

    // ── 5. Spring supports ──
    std::vector<Spring> springs(num_springs);
    for (int i = 0; i < num_springs; i++) {
        springs[i].node = static_cast<int>(springs_ptr[3 * i]);
        springs[i].dof  = static_cast<int>(springs_ptr[3 * i + 1]);
        springs[i].k    = springs_ptr[3 * i + 2];
    }

    // ── 5b. Per-element thicknesses (optional, for layered zones) ──
    std::vector<double> thicknesses;
    if (num_thicknesses > 0 && thicknesses_ptr) {
        thicknesses.resize(num_thicknesses);
        for (int i = 0; i < num_thicknesses; i++) thicknesses[i] = thicknesses_ptr[i];
    }

    // ── 6. Solve ──
    PlateResult result = solve(nodes, elements, mat, bcs, pressure, pointLoads, springs, thicknesses);

    // ── 6. Pack outputs ──

    // Displacements: 3 DOFs per node (w, βx, βy)
    int nNodes = static_cast<int>(nodes.size());
    int nElems = static_cast<int>(elements.size());

    // Output: [w1,bx1,by1, w2,bx2,by2, ...] + prepend node coords for visualization
    // Format: [num_nodes, num_elements, x1,y1,w1,bx1,by1, x2,y2,w2,bx2,by2, ...]
    //   header (2) + 5 per node
    int dispSize = 2 + nNodes * 5;
    *displacements_size_out = dispSize;
    *displacements_ptr_out = (double*)malloc(dispSize * sizeof(double));

    if (!(*displacements_ptr_out)) {
        std::cerr << "plate_q4_solve: malloc failed for displacements" << std::endl;
        *displacements_size_out = 0;
        *stress_resultants_ptr_out = nullptr;
        *stress_resultants_size_out = 0;
        return;
    }

    (*displacements_ptr_out)[0] = static_cast<double>(nNodes);
    (*displacements_ptr_out)[1] = static_cast<double>(nElems);

    for (int i = 0; i < nNodes; i++) {
        int base = 2 + i * 5;
        (*displacements_ptr_out)[base]     = nodes[i].x;
        (*displacements_ptr_out)[base + 1] = nodes[i].y;
        (*displacements_ptr_out)[base + 2] = result.displacements(3 * i);       // w
        (*displacements_ptr_out)[base + 3] = result.displacements(3 * i + 1);   // βx
        (*displacements_ptr_out)[base + 4] = result.displacements(3 * i + 2);   // βy
    }

    // Stress resultants: 5 per element (Mxx, Myy, Mxy, Qx, Qy)
    // Format: [elem_n1,elem_n2,elem_n3,elem_n4, Mxx,Myy,Mxy,Qx,Qy, ...] = 9 per element
    int srSize = nElems * 9;
    *stress_resultants_size_out = srSize;
    *stress_resultants_ptr_out = (double*)malloc(srSize * sizeof(double));

    if (!(*stress_resultants_ptr_out)) {
        std::cerr << "plate_q4_solve: malloc failed for stress resultants" << std::endl;
        *stress_resultants_size_out = 0;
        return;
    }

    for (int e = 0; e < nElems; e++) {
        int base = e * 9;
        (*stress_resultants_ptr_out)[base]     = static_cast<double>(elements[e][0]);
        (*stress_resultants_ptr_out)[base + 1] = static_cast<double>(elements[e][1]);
        (*stress_resultants_ptr_out)[base + 2] = static_cast<double>(elements[e][2]);
        (*stress_resultants_ptr_out)[base + 3] = static_cast<double>(elements[e][3]);
        (*stress_resultants_ptr_out)[base + 4] = result.Mxx[e];
        (*stress_resultants_ptr_out)[base + 5] = result.Myy[e];
        (*stress_resultants_ptr_out)[base + 6] = result.Mxy[e];
        (*stress_resultants_ptr_out)[base + 7] = result.Qx[e];
        (*stress_resultants_ptr_out)[base + 8] = result.Qy[e];
    }
}

} // extern "C"
