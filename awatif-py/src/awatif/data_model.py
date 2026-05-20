"""Data model — 1:1 port de awatif v2 data-model.ts.

Convención DOFs por nodo: [Ux, Uy, Uz, Rx, Ry, Rz] (6).
Sin Model builder, sin Section/Material helpers — solo data raw.

Espejo del TypeScript:
    type Node = [number, number, number]
    type Element = number[]
    type NodeInputs = { supports?: Map<>, loads?: Map<> }
    type ElementInputs = { elasticities?: Map<>, areas?: Map<>, ... }
    type DeformOutputs = { deformations?: Map<>, reactions?: Map<> }
    type AnalyzeOutputs = { normals?: Map<>, shearsY?: Map<>, ... }
    type ModalOutputs = { frequencies?: number[], modeShapes?: number[][], ... }
"""
from __future__ import annotations
from dataclasses import dataclass, field
from typing import Optional, Literal


# ─── Geometry ───────────────────────────────────────────────────────────────
Node = tuple[float, float, float]   # [x, y, z]
Element = list[int]                  # indices a nodes


# ─── SectionShape (visualization metadata) ──────────────────────────────────
SectionType = Literal["rect", "circ", "I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"]


@dataclass
class SectionShape:
    """Sección visual (solo metadata para renderer 3D, no usado en K assembly)."""
    type: SectionType = "rect"
    b: Optional[float] = None
    h: Optional[float] = None
    d: Optional[float] = None
    tw: Optional[float] = None
    tf: Optional[float] = None
    t: Optional[float] = None
    r: Optional[float] = None
    lip: Optional[float] = None
    dis: Optional[float] = None
    name: Optional[str] = None


# ─── NodeInputs ─────────────────────────────────────────────────────────────
SupportFlags = tuple[bool, bool, bool, bool, bool, bool]    # [Ux, Uy, Uz, Rx, Ry, Rz]
NodeLoad     = tuple[float, float, float, float, float, float]  # [Fx, Fy, Fz, Mx, My, Mz]


@dataclass
class NodeInputs:
    supports: dict[int, SupportFlags] = field(default_factory=dict)
    loads:    dict[int, NodeLoad]     = field(default_factory=dict)


# ─── ElementInputs (mirrors awatif v2) ─────────────────────────────────────
@dataclass
class ElementInputs:
    elasticities:              dict[int, float] = field(default_factory=dict)
    elasticities_orthogonal:   dict[int, float] = field(default_factory=dict)
    shear_moduli:              dict[int, float] = field(default_factory=dict)
    areas:                     dict[int, float] = field(default_factory=dict)
    moments_of_inertia_z:      dict[int, float] = field(default_factory=dict)
    moments_of_inertia_y:      dict[int, float] = field(default_factory=dict)
    torsional_constants:       dict[int, float] = field(default_factory=dict)
    thicknesses:               dict[int, float] = field(default_factory=dict)
    poissons_ratios:           dict[int, float] = field(default_factory=dict)
    densities:                 dict[int, float] = field(default_factory=dict)
    polar_moments_of_inertia:  dict[int, float] = field(default_factory=dict)
    shear_areas_y:             dict[int, float] = field(default_factory=dict)
    shear_areas_z:             dict[int, float] = field(default_factory=dict)
    rigid_offsets:             dict[int, tuple[float, float]] = field(default_factory=dict)
    moment_releases:           dict[int, list[bool]] = field(default_factory=dict)
    partial_fixity_springs:    dict[int, list[float]] = field(default_factory=dict)
    insertion_points:          dict[int, tuple[float, float]] = field(default_factory=dict)
    section_shapes:            dict[int, SectionShape] = field(default_factory=dict)


# ─── Outputs ────────────────────────────────────────────────────────────────
@dataclass
class DeformOutputs:
    deformations: dict[int, NodeLoad] = field(default_factory=dict)
    reactions:    dict[int, NodeLoad] = field(default_factory=dict)


@dataclass
class AnalyzeOutputs:
    # Frame element outputs (en local frame CSI): map element_idx → (val_I, val_J)
    normals:    dict[int, tuple[float, float]] = field(default_factory=dict)  # P
    shears_y:   dict[int, tuple[float, float]] = field(default_factory=dict)  # V2
    shears_z:   dict[int, tuple[float, float]] = field(default_factory=dict)  # V3
    torsions:   dict[int, tuple[float, float]] = field(default_factory=dict)  # T = M1
    bendings_y: dict[int, tuple[float, float]] = field(default_factory=dict)  # M2
    bendings_z: dict[int, tuple[float, float]] = field(default_factory=dict)  # M3
    # Shell element outputs: map element_idx → array (4,)
    bending_xx:  dict[int, list[float]] = field(default_factory=dict)
    bending_yy:  dict[int, list[float]] = field(default_factory=dict)
    bending_xy:  dict[int, list[float]] = field(default_factory=dict)
    membrane_xx: dict[int, list[float]] = field(default_factory=dict)
    membrane_yy: dict[int, list[float]] = field(default_factory=dict)
    membrane_xy: dict[int, list[float]] = field(default_factory=dict)
    transverse_shear_x: dict[int, list[float]] = field(default_factory=dict)
    transverse_shear_y: dict[int, list[float]] = field(default_factory=dict)
    von_mises:  dict[int, list[float]] = field(default_factory=dict)
    pressure:   dict[int, list[float]] = field(default_factory=dict)


@dataclass
class ModalOutputs:
    frequencies:        list[float] = field(default_factory=list)   # Hz
    periods:            list[float] = field(default_factory=list)   # s
    omega:              list[float] = field(default_factory=list)   # rad/s
    mode_shapes:        list[list[float]] = field(default_factory=list)  # [mode_idx][dof_idx]
    mass_participation: list[list[float]] = field(default_factory=list)  # [mode_idx][6]
