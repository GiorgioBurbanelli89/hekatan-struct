import { Node, Element, ElementInputs } from "../data-model";
import { multiply, transpose, norm, subtract } from "mathjs";
import { getTransformationMatrix } from "./getTransformationMatrix";
import { getLocalStiffnessMatrix } from "./getLocalStiffnessMatrix";

export function getGlobalStiffnessMatrix(
  nodes: Node[],
  elements: Element[],
  elementInputs: ElementInputs,
  dof: number
): number[][] {
  let stiffnessMatrix = Array(dof)
    .fill(0)
    .map(() => Array(dof).fill(0));

  elements.forEach((e, i) => {
    const elmNodes = e.map((e) => nodes[e]);
    const kLocal = getLocalStiffnessMatrix(elmNodes, elementInputs, i);
    const T = getTransformationMatrix(elmNodes);

    let kGlobal = multiply(transpose(T), multiply(kLocal, T)) as number[][];

    // Apply rigid end offsets: K_offset = R^T * K * R
    // rigidOffsets[i] = [factorI, factorJ] where factor is fraction of clear length
    if (e.length === 2) {
      const offsets = elementInputs?.rigidOffsets?.get(i);
      if (offsets && (offsets[0] > 0 || offsets[1] > 0)) {
        const L = norm(subtract(nodes[e[0]], nodes[e[1]])) as number;
        const oI = offsets[0] * L; // rigid offset length at node I
        const oJ = offsets[1] * L; // rigid offset length at node J
        const R = buildRigidOffsetMatrix(oI, oJ);
        kGlobal = matMul12(matMulT12(R, kGlobal), R);
      }
    }

    stiffnessMatrix = assemble(stiffnessMatrix, kGlobal, e);
  });

  return stiffnessMatrix;
}

/**
 * Build 12x12 rigid offset transformation matrix.
 * Relates DOFs at member ends (with offsets) to DOFs at joint nodes.
 * R maps: u_joint = R * u_member_end
 *
 * For offset at node I (distance oI along element axis from joint to member end):
 *   u_member_I = u_joint_I + cross(theta_joint_I, offset_vector)
 * In local coords, offset vector = [oI, 0, 0] (along element axis)
 * So: uy_member = uy_joint - oI * rz_joint (cross product terms)
 *     uz_member = uz_joint + oI * ry_joint
 *
 * R = [I  R_I;  0  0 ]
 *     [0   I;   0  0 ]
 *     [0   0;   I  R_J]
 *     [0   0;   0   I ]
 *
 * Where R_I and R_J are the coupling sub-matrices from rotations to translations
 */
function buildRigidOffsetMatrix(oI: number, oJ: number): number[][] {
  // 12x12 identity with coupling terms
  const R: number[][] = Array.from({ length: 12 }, (_, i) =>
    Array.from({ length: 12 }, (_, j) => i === j ? 1 : 0)
  );
  // Node I coupling: offset along +x from joint I to member end I
  // uy_end = uy_joint + 0 (no coupling from rx) + 0 (no from ry) - oI*rz
  // uz_end = uz_joint + 0 + oI*ry + 0
  if (Math.abs(oI) > 1e-12) {
    R[1][5] = -oI;  // uy couples with -oI * rz
    R[2][4] = oI;   // uz couples with +oI * ry
  }
  // Node J coupling: offset along -x from joint J to member end J
  if (Math.abs(oJ) > 1e-12) {
    R[7][11] = oJ;   // uy_J couples with +oJ * rz_J (offset in -x direction)
    R[8][10] = -oJ;  // uz_J couples with -oJ * ry_J
  }
  return R;
}

function matMul12(A: number[][], B: number[][]): number[][] {
  const n = 12;
  const C: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      for (let k = 0; k < n; k++)
        C[i][j] += A[i][k] * B[k][j];
  return C;
}

function matMulT12(A: number[][], B: number[][]): number[][] {
  // A^T * B
  const n = 12;
  const C: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      for (let k = 0; k < n; k++)
        C[i][j] += A[k][i] * B[k][j];
  return C;
}

function assemble(
  stiffnessMatrix: number[][],
  kGlobal: number[][],
  element: number[]
): number[][] {
  const isN2 = element.length === 3;
  const offset0 = 6 * element[0];
  const offset1 = 6 * element[1];
  const offset2 = isN2 ? 6 * element[2] : undefined;

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      stiffnessMatrix[offset0 + i][offset0 + j] += kGlobal[i][j];
      stiffnessMatrix[offset1 + i][offset0 + j] += kGlobal[i + 6][j];
      if (isN2) stiffnessMatrix[offset2 + i][offset0 + j] += kGlobal[i + 12][j];

      stiffnessMatrix[offset0 + i][offset1 + j] += kGlobal[i][j + 6];
      stiffnessMatrix[offset1 + i][offset1 + j] += kGlobal[i + 6][j + 6];
      if (isN2)
        stiffnessMatrix[offset2 + i][offset1 + j] += kGlobal[i + 12][j + 6];

      if (isN2) {
        stiffnessMatrix[offset0 + i][offset2 + j] += kGlobal[i][j + 12];
        stiffnessMatrix[offset1 + i][offset2 + j] += kGlobal[i + 6][j + 12];
        stiffnessMatrix[offset2 + i][offset2 + j] += kGlobal[i + 12][j + 12];
      }
    }
  }

  return stiffnessMatrix;
}
