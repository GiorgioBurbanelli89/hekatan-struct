"""awatif — Parametric structural FEM (Python port of awatif v2).

API espejo del JS:

    import { deform, analyze, modalAnalysis } from "awatif-fem";

    →  from awatif import deform, analyze, modal_analysis

Uso minimal:

    from awatif import deform, analyze, NodeInputs, ElementInputs

    nodes = [(0, 0, 0), (0, 0, 4)]
    elements = [[0, 1]]
    node_inputs = NodeInputs(
        supports={0: (True, True, True, True, True, True)},
        loads={1: (10, 0, 0, 0, 0, 0)},
    )
    element_inputs = ElementInputs(
        elasticities={0: 200e6},
        areas={0: 0.15},
        moments_of_inertia_y={0: 0.001125},
        moments_of_inertia_z={0: 0.003125},
        torsional_constants={0: 0.000391},
        shear_moduli={0: 76923000},
    )
    out = deform(nodes, elements, node_inputs, element_inputs)
"""
from .data_model import (
    Node, Element,
    SectionShape, SupportFlags, NodeLoad,
    NodeInputs, ElementInputs,
    DeformOutputs, AnalyzeOutputs, ModalOutputs,
)
from .solver import deform, analyze, modal_analysis

__version__ = "0.1.0"
__all__ = [
    # Types
    "Node", "Element",
    "SectionShape", "SupportFlags", "NodeLoad",
    "NodeInputs", "ElementInputs",
    "DeformOutputs", "AnalyzeOutputs", "ModalOutputs",
    # Functions (espejo awatif v2)
    "deform", "analyze", "modal_analysis",
]
