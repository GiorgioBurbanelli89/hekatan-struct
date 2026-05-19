#!/usr/bin/env python3
"""
Mindlin-Reissner Q4 plate FEM solver — production-ready Python implementation.

Implementa exactamente la misma formulación que SAP 2000 DSE (Discrete Shear
Element) basado en CSI Analysis Reference Manual Chapter 10:
  - MITC4 (Bathe-Dvorkin 1985) para shear locking
  - 4 modos incompatibles Wilson (Yuan-Dickens 1982) en rotaciones
  - Cook-Malkus-Plesha extrapolation para moment recovery

Validado contra SAP 2000 v24 Plate-Thick (ShellType=4):
  Caso: a=6, b=4, t=0.1, E=35GPa, ν=0.15, q=10 kN/m², SS hard
  Resultados con mesh 12×8:
    w_centro     -6.6161 mm  vs SAP -6.4567  (+2.5%)
    Mxy esquina   7.6891     vs SAP  7.7089  (-0.26%) ✅

Uso:
    from mindlin_q4_solver import MindlinPlate
    plate = MindlinPlate(a=6, b=4, t=0.1, E=35e6, nu=0.15, q=10,
                         n_a=12, n_b=8)
    res = plate.solve()
    print(f"w_centro = {res['w_centro']:.4f} mm")
    print(f"Mxy esq  = {res['Mxy_esquina']:.4f} kN*m/m")

    # Plot:
    plate.plot()
"""
import sys
import numpy as np
from numpy.linalg import solve
from time import perf_counter

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')


class MindlinPlate:
    """Rectangular SS plate FEM solver with Mindlin-Reissner Q4 element."""

    def __init__(self, a=6.0, b=4.0, t=0.10, E=35e6, nu=0.15, q=10.0,
                 n_a=12, n_b=8, kappa=5/6, bc='hard'):
        """bc: 'hard' (w=0 + rotación tangencial=0, igual SAP) o 'soft' (w=0 solo)"""
        """
        Parameters
        ----------
        a, b : float
            Plate dimensions [m]
        t : float
            Plate thickness [m]
        E : float
            Young's modulus [kN/m²]
        nu : float
            Poisson ratio
        q : float
            Uniform load [kN/m²] (positive = downward)
        n_a, n_b : int
            Mesh: number of elements in x, y direction
        kappa : float
            Shear correction factor (5/6 for plates, Reissner)
        """
        self.a, self.b, self.t = a, b, t
        self.E, self.nu, self.q = E, nu, q
        self.n_a, self.n_b = n_a, n_b
        self.kappa = kappa
        self.bc = bc
        self.G = E / (2*(1 + nu))

        self.n_e = n_a * n_b
        self.n_j = (n_a + 1) * (n_b + 1)
        self.a_1 = a / n_a
        self.b_1 = b / n_b
        self.n_dof = 3
        self.n_g = self.n_dof * self.n_j

        # Constitutive matrices
        D11 = E * t**3 / (12 * (1 - nu**2))
        self.D_b = D11 * np.array([[1, nu, 0],
                                    [nu, 1, 0],
                                    [0, 0, (1-nu)/2]])
        self.D_s = kappa * self.G * t * np.eye(2)

        # Build mesh
        self._build_mesh()

        # Gauss 2x2
        gp = 1/np.sqrt(3)
        self.gps = [(-gp, -gp), (gp, -gp), (gp, gp), (-gp, gp)]
        self.dV = self.a_1 * self.b_1 / 4

        # Cook-Malkus-Plesha extrapolation matrix (Gauss → corners)
        sq3 = np.sqrt(3)
        self.E_extrap = np.array([
            [1+sq3/2,   -0.5,    1-sq3/2,   -0.5],
            [-0.5,      1+sq3/2, -0.5,      1-sq3/2],
            [1-sq3/2,   -0.5,    1+sq3/2,   -0.5],
            [-0.5,      1-sq3/2, -0.5,      1+sq3/2]
        ])

    def _build_mesh(self):
        """Build nodal coordinates, element connectivity, and SS boundary list."""
        n_j, n_a, n_b = self.n_j, self.n_a, self.n_b
        a_1, b_1 = self.a_1, self.b_1
        a, b = self.a, self.b

        self.x_j = np.zeros(n_j)
        self.y_j = np.zeros(n_j)
        xv, yv = 0, 0
        for j in range(n_j):
            self.x_j[j], self.y_j[j] = xv, yv
            yv += b_1
            if yv > b + 1e-9:
                yv, xv = 0, xv + a_1

        self.e_j = np.zeros((self.n_e, 4), dtype=int)
        for ia in range(n_a):
            for ib in range(n_b):
                e = ib + n_b*ia
                j0 = e + ia
                self.e_j[e] = [j0, j0+n_b+1, j0+n_b+2, j0+1]

        # Boundary nodes (4 edges)
        self.s_j = set()
        for j in range(n_j):
            if (abs(self.x_j[j]) < 1e-9 or abs(self.x_j[j] - a) < 1e-9
                or abs(self.y_j[j]) < 1e-9 or abs(self.y_j[j] - b) < 1e-9):
                self.s_j.add(j)

    # ─── Shape functions ────────────────────────────────────────────────
    @staticmethod
    def _N(xi, eta):
        return np.array([0.25*(1-xi)*(1-eta), 0.25*(1+xi)*(1-eta),
                         0.25*(1+xi)*(1+eta), 0.25*(1-xi)*(1+eta)])

    @staticmethod
    def _dN_dxi(eta):
        return np.array([-0.25*(1-eta),  0.25*(1-eta),
                          0.25*(1+eta), -0.25*(1+eta)])

    @staticmethod
    def _dN_deta(xi):
        return np.array([-0.25*(1-xi), -0.25*(1+xi),
                          0.25*(1+xi),  0.25*(1-xi)])

    # ─── B matrices ──────────────────────────────────────────────────────
    def _B_bend(self, xi, eta):
        dNx = (2/self.a_1) * self._dN_dxi(eta)
        dNy = (2/self.b_1) * self._dN_deta(xi)
        B = np.zeros((3, 12))
        for i in range(4):
            B[0, i*3 + 1] = -dNx[i]
            B[1, i*3 + 2] = -dNy[i]
            B[2, i*3 + 1] = -dNy[i]
            B[2, i*3 + 2] = -dNx[i]
        return B

    def _B_bend_incomp(self, xi, eta):
        """6 modos incompatibles bending:
           θ_x_extra = a1·(1-ξ²) + a2·(1-η²) + a5·ξ·η
           θ_y_extra = a3·(1-ξ²) + a4·(1-η²) + a6·ξ·η
        Las cross terms ξ·η reducen Mxy error de -8.25% a -6.41% @ mesh 6×4 HARD SS.
        """
        dN1_dx = (2/self.a_1) * (-2*xi)
        dN2_dy = (2/self.b_1) * (-2*eta)
        dN3_dx = (2/self.a_1) * eta   # d(ξ·η)/dx = η
        dN3_dy = (2/self.b_1) * xi    # d(ξ·η)/dy = ξ
        B = np.zeros((3, 6))
        # Modes 1-4 (4 originales)
        B[0, 0] = -dN1_dx
        B[1, 3] = -dN2_dy
        B[2, 1] = -dN2_dy
        B[2, 2] = -dN1_dx
        # Modes 5-6 (cross term ξ·η)
        B[0, 4] = -dN3_dx   # theta_x_extra contribution to kappa_xx
        B[1, 5] = -dN3_dy   # theta_y_extra contribution to kappa_yy
        B[2, 4] = -dN3_dy   # 2*kappa_xy from theta_x cross
        B[2, 5] = -dN3_dx   # 2*kappa_xy from theta_y cross
        return B

    def _B_shear_MITC4(self, xi, eta):
        """MITC4 (Bathe-Dvorkin 1985) — interpolate γ from edge tying points."""
        tying = [(0, -1), (1, 0), (0, 1), (-1, 0)]
        dirs = [1, 2, 1, 2]
        Bt = np.zeros((4, 12))
        for k in range(4):
            xt, et = tying[k]
            Nw = self._N(xt, et)
            dNx = (2/self.a_1) * self._dN_dxi(et)
            dNy = (2/self.b_1) * self._dN_deta(xt)
            if dirs[k] == 1:
                for i in range(4):
                    Bt[k, i*3 + 0] = dNx[i]
                    Bt[k, i*3 + 1] = -Nw[i]
            else:
                for i in range(4):
                    Bt[k, i*3 + 0] = dNy[i]
                    Bt[k, i*3 + 2] = -Nw[i]
        hA = 0.5*(1 - eta); hC = 0.5*(1 + eta)
        hD = 0.5*(1 - xi);  hB = 0.5*(1 + xi)
        B = np.zeros((2, 12))
        B[0, :] = hA*Bt[0] + hC*Bt[2]
        B[1, :] = hD*Bt[3] + hB*Bt[1]
        return B

    # ─── Element stiffness K_e + load F_e ───────────────────────────────
    def _build_Ke_Fe(self):
        """MITC4 + 6 Wilson incompatible bending modes via static condensation."""
        K_uu = np.zeros((12, 12))
        K_ua = np.zeros((12, 6))
        K_aa = np.zeros((6, 6))
        F_e = np.zeros(12)
        for xi, eta in self.gps:
            Bb = self._B_bend(xi, eta)
            Bba = self._B_bend_incomp(xi, eta)
            Bs = self._B_shear_MITC4(xi, eta)
            K_uu += (Bb.T @ self.D_b @ Bb + Bs.T @ self.D_s @ Bs) * self.dV
            K_ua += Bb.T @ self.D_b @ Bba * self.dV
            K_aa += Bba.T @ self.D_b @ Bba * self.dV
            Nw = self._N(xi, eta)
            for i in range(4):
                F_e[i*3 + 0] -= self.q * Nw[i] * self.dV
        # Static condensation
        K_e = K_uu - K_ua @ solve(K_aa, K_ua.T)
        self._K_aa = K_aa  # cache for stress recovery if needed
        self._K_ua = K_ua
        return K_e, F_e

    # ─── Solve ──────────────────────────────────────────────────────────
    def solve(self, verbose=True):
        """Assemble global K and F, apply SS BCs, solve, recover moments."""
        t0 = perf_counter()
        K_e, F_e = self._build_Ke_Fe()
        t_ke = perf_counter() - t0

        # Assembly
        t0 = perf_counter()
        K = np.zeros((self.n_g, self.n_g))
        F = np.zeros(self.n_g)
        for e in range(self.n_e):
            for ni in range(4):
                ji = self.e_j[e, ni]
                for nj in range(4):
                    jj = self.e_j[e, nj]
                    for di in range(3):
                        for dj in range(3):
                            K[3*ji + di, 3*jj + dj] += K_e[3*ni + di, 3*nj + dj]
                for di in range(3):
                    F[3*ji + di] += F_e[3*ni + di]
        # Boundary conditions — match SAP 2000 BC pattern
        # SAP: corner restrict w + R1 + R2 ; edge x=const w + R1 ; edge y=const w + R2
        # R1 = theta_x (rotation about x-axis), R2 = theta_y (rotation about y-axis)
        # DOF layout: 0=w, 1=theta_x, 2=theta_y per node
        eps = 1e-9
        for j in range(self.n_j):
            on_x = abs(self.x_j[j]) < eps or abs(self.x_j[j] - self.a) < eps
            on_y = abs(self.y_j[j]) < eps or abs(self.y_j[j] - self.b) < eps
            if on_x or on_y:
                K[3*j + 0, 3*j + 0] += 1e20   # w = 0
                if self.bc == 'hard':
                    # SS HARD: restraint = rotación normal a la arista.
                    # Edge x=const (arista vertical, eje a lo largo de Y):
                    #   rotación normal = rotación about Y axis = "theta_y" en mi convención
                    #   (en mi B_bend, kappa_yy = -d(theta_y_DOF)/dy → theta_y DOF index 2)
                    # Edge y=const (arista horizontal, eje a lo largo de X):
                    #   rotación normal = rotación about X axis = "theta_x" en mi convención
                    if on_x:
                        K[3*j + 2, 3*j + 2] += 1e20   # restraint theta_y on x=const
                    if on_y:
                        K[3*j + 1, 3*j + 1] += 1e20   # restraint theta_x on y=const
        t_assembly = perf_counter() - t0

        # Solve
        t0 = perf_counter()
        Z = solve(K, F)
        t_solve = perf_counter() - t0

        # Recovery
        t0 = perf_counter()
        Mxx_n, Myy_n, Mxy_n = self._recover_moments(Z)
        t_recovery = perf_counter() - t0

        # Center node
        n_center = (self.n_a//2) * (self.n_b + 1) + (self.n_b//2)
        w_centro_mm = Z[3*n_center + 0] * 1000

        if verbose:
            print(f"  K_e+F_e        {t_ke*1000:>7.1f} ms")
            print(f"  Assembly       {t_assembly*1000:>7.1f} ms")
            print(f"  Solve K\\F      {t_solve*1000:>7.1f} ms")
            print(f"  Recovery       {t_recovery*1000:>7.1f} ms")
            print(f"  TOTAL          {(t_ke+t_assembly+t_solve+t_recovery)*1000:>7.1f} ms")

        return {
            'Z': Z,
            'w_centro': w_centro_mm,
            'Mxx_nodal': Mxx_n,
            'Myy_nodal': Myy_n,
            'Mxy_nodal': Mxy_n,
            'Mx_centro': abs(Mxx_n[n_center]),
            'My_centro': abs(Myy_n[n_center]),
            'Mxy_esquina': abs(Mxy_n[0]),
            'Mxy_max': float(np.max(np.abs(Mxy_n))),
            'mesh': f'{self.n_a}x{self.n_b}',
            'n_dofs': self.n_g,
            't_solve_ms': t_solve * 1000,
        }

    def _recover_moments(self, Z):
        """Cook-Malkus-Plesha: eval M at 2×2 Gauss + extrapolate to corners."""
        Mxx_n = np.zeros(self.n_j)
        Myy_n = np.zeros(self.n_j)
        Mxy_n = np.zeros(self.n_j)
        count = np.zeros(self.n_j)
        for e in range(self.n_e):
            Z_e = np.zeros(12)
            for i in range(4):
                for k in range(3):
                    Z_e[i*3 + k] = Z[3*self.e_j[e, i] + k]
            M_gp = np.zeros((3, 4))
            for k, (xi, eta) in enumerate(self.gps):
                M_gp[:, k] = self.D_b @ self._B_bend(xi, eta) @ Z_e
            M_corner = M_gp @ self.E_extrap.T
            for i in range(4):
                gn = self.e_j[e, i]
                Mxx_n[gn] += M_corner[0, i]
                Myy_n[gn] += M_corner[1, i]
                Mxy_n[gn] += M_corner[2, i]
                count[gn] += 1
        Mxx_n /= np.maximum(count, 1)
        Myy_n /= np.maximum(count, 1)
        Mxy_n /= np.maximum(count, 1)
        return Mxx_n, Myy_n, Mxy_n


def compare_with_sap(result, sap_ref=None):
    """Print comparison vs SAP 2000 reference."""
    if sap_ref is None:
        sap_ref = {
            'w_centro': -6.4567,
            'Mx_centro': 6.4435,
            'My_centro': 12.4305,
            'Mxy_esquina': 7.7089,
        }
    print()
    print("=" * 74)
    print(f"  Comparativa Calcpad-Lab Python vs SAP 2000 v24 DSE")
    print(f"  Mesh: {result['mesh']} ({result['n_dofs']} DOFs)")
    print("=" * 74)
    rows = [
        ('w_centro [mm]',       'w_centro',    result['w_centro']),
        ('Mx_centro [kN*m/m]',  'Mx_centro',   result['Mx_centro']),
        ('My_centro [kN*m/m]',  'My_centro',   result['My_centro']),
        ('Mxy_esquina [kN*m/m]','Mxy_esquina', result['Mxy_esquina']),
    ]
    print(f"  {'Variable':<25}{'Calcpad':>12}{'SAP DSE':>12}{'Delta %':>10}")
    print("  " + "-" * 60)
    for label, key, val in rows:
        ref = sap_ref[key]
        delta = (abs(val) - abs(ref))/abs(ref) * 100
        marker = " ✅" if abs(delta) < 1 else (" ⚠️" if abs(delta) < 5 else "  ")
        print(f"  {label:<25}{val:>12.4f}{ref:>12.4f}{delta:>+9.2f}%{marker}")
    print(f"\n  Tiempo Calcpad: {result['t_solve_ms']:.0f} ms")
    print(f"  Tiempo SAP:     ~14000 ms")
    print("=" * 74)


# ─── CLI ─────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    print("\n" + "=" * 74)
    print("  Mindlin-Reissner Q4 Plate Solver — Calcpad-Lab Python")
    print("  MITC4 + Wilson Incompatible Modes + Cook-Malkus-Plesha Recovery")
    print("=" * 74 + "\n")

    # Caso benchmark (mesh 12x8 → match SAP)
    plate = MindlinPlate(a=6, b=4, t=0.1, E=35e6, nu=0.15, q=10,
                         n_a=12, n_b=8)
    res = plate.solve()
    compare_with_sap(res)
