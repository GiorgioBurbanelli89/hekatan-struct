import { multiply, matrix, Matrix, mean } from "mathjs";
import {
  Node,
  Element,
  AnalyzeOutputs,
  DeformOutputs,
  ElementInputs,
} from "./data-model";
import { getTransformationMatrix } from "./utils/getTransformationMatrix";
import {
  getLocalStiffnessMatrix,
  getIsotropicInPlaneConstitutiveMatrix,
  getOrthotropicInPlaneConstitutiveMatrix,
} from "./utils/getLocalStiffnessMatrix";

export function analyze(
  nodes: Node[],
  elements: Element[],
  elementInputs: ElementInputs,
  deformOutputs: DeformOutputs
): AnalyzeOutputs {
  const analyzeOutputs: AnalyzeOutputs = {
    normals: new Map(),
    shearsY: new Map(),
    shearsZ: new Map(),
    torsions: new Map(),
    bendingsY: new Map(),
    bendingsZ: new Map(),
    bendingXX: new Map(),
    bendingYY: new Map(),
    bendingXY: new Map(),
    membraneXX: new Map(),
    membraneYY: new Map(),
    membraneXY: new Map(),
    tranverseShearX: new Map(),
    tranverseShearY: new Map(),
    vonMises: new Map(),
  };

  const analyzeOutputsElements: {
    bendingXX: Map<number, number>;
    bendingYY: Map<number, number>;
    bendingXY: Map<number, number>;
    membraneXX: Map<number, number>;
    membraneYY: Map<number, number>;
    membraneXY: Map<number, number>;
    tranverseShearX: Map<number, number>;
    tranverseShearY: Map<number, number>;
    vonMises: Map<number, number>;
  } = {
    bendingXX: new Map(),
    bendingYY: new Map(),
    bendingXY: new Map(),
    membraneXX: new Map(),
    membraneYY: new Map(),
    membraneXY: new Map(),
    tranverseShearX: new Map(),
    tranverseShearY: new Map(),
    vonMises: new Map(),
  };

  elements.forEach((e, i) => {
    const elmNodes = e.map((e) => nodes[e]);

    const dxGlobal = e.reduce(
      (a, b) => {
        const d = deformOutputs.deformations?.get(b);
        return a.concat(d ?? [0, 0, 0, 0, 0, 0]);
      },
      [] as number[]
    );

    if (e.length === 2) {
      // Frame element
      const T = getTransformationMatrix(elmNodes);
      const dxLocal = multiply(T, dxGlobal);
      const kLocal = getLocalStiffnessMatrix(elmNodes, elementInputs, i);
      let fLocal = multiply(kLocal, dxLocal);

      analyzeOutputs.normals!.set(i, [fLocal[0], fLocal[6]]);
      analyzeOutputs.shearsY!.set(i, [fLocal[1], fLocal[7]]);
      analyzeOutputs.shearsZ!.set(i, [fLocal[2], fLocal[8]]);
      analyzeOutputs.torsions!.set(i, [fLocal[3], fLocal[9]]);
      analyzeOutputs.bendingsY!.set(i, [fLocal[4], fLocal[10]]);
      analyzeOutputs.bendingsZ!.set(i, [fLocal[5], fLocal[11]]);
    } else if (e.length === 4) {
      // Q4 shell element — stress recovery at centroid
      const q4Results = computeQ4ShellStresses(elmNodes, dxGlobal, elementInputs, i);
      analyzeOutputsElements.membraneXX.set(i, q4Results.Nx);
      analyzeOutputsElements.membraneYY.set(i, q4Results.Ny);
      analyzeOutputsElements.membraneXY.set(i, q4Results.Nxy);
      analyzeOutputsElements.bendingXX.set(i, q4Results.Mx);
      analyzeOutputsElements.bendingYY.set(i, q4Results.My);
      analyzeOutputsElements.bendingXY.set(i, q4Results.Mxy);
      analyzeOutputsElements.tranverseShearX.set(i, q4Results.Qx);
      analyzeOutputsElements.tranverseShearY.set(i, q4Results.Qy);
      analyzeOutputsElements.vonMises.set(i, q4Results.vonMises);
    } else if (e.length === 3) {
      // CST triangle element
      const T = getTransformationMatrix(elmNodes);
      const dxLocal = multiply(T, dxGlobal);

      const materialStiffness3x3Matrix = getMaterialStiffnessMatrix3x3(
        elementInputs,
        i
      );
      const linearFieldMatrix3x6 = getLinearFieldMatrix3x6(elmNodes);
      const displacmentMattrix6x2 = getDisplacementMatrix6x2(dxGlobal);
      const elementArea = getElementArea(elmNodes);

      const fLocal = multiply(
        1 / (2 * elementArea),
        multiply(
          multiply(materialStiffness3x3Matrix, linearFieldMatrix3x6),
          displacmentMattrix6x2
        )
      );

      const fGlobal = fLocal.toArray() as number[][];
      const thickness = elementInputs.thicknesses?.get(i) ?? 1;

      const Nx = fGlobal[0][0] * thickness;
      const Ny = fGlobal[1][0] * thickness;
      const Nxy = fGlobal[2][0] * thickness;

      const Mx = fGlobal[0][1] * (thickness ** 3 / 12);
      const My = fGlobal[1][1] * (thickness ** 3 / 12);
      const Mxy = fGlobal[2][1] * (thickness ** 3 / 12);

      analyzeOutputsElements.membraneXX.set(i, Nx);
      analyzeOutputsElements.membraneYY.set(i, Ny);
      analyzeOutputsElements.membraneXY.set(i, Nxy);
      analyzeOutputsElements.bendingXX.set(i, Mx);
      analyzeOutputsElements.bendingYY.set(i, My);
      analyzeOutputsElements.bendingXY.set(i, Mxy);
    }
  });

  const { nodeToCentroidNodesMap, nodeToCentroidElementIndiciesMap } =
    getCentroidsMaps(nodes, elements);

  elements.forEach((element, elementIndex) => {
    if (element.length !== 3 && element.length !== 4) return;
    const nNodes = element.length;
    const membraneXXs: number[] = new Array(nNodes).fill(0);
    const membraneYYs: number[] = new Array(nNodes).fill(0);
    const membraneXYs: number[] = new Array(nNodes).fill(0);
    const bendingXXs: number[] = new Array(nNodes).fill(0);
    const bendingYYs: number[] = new Array(nNodes).fill(0);
    const bendingXYs: number[] = new Array(nNodes).fill(0);
    const shearXs: number[] = new Array(nNodes).fill(0);
    const shearYs: number[] = new Array(nNodes).fill(0);
    const vmStress: number[] = new Array(nNodes).fill(0);

    element.forEach((nodeIndex, pos) => {
      const elementIndicies =
        nodeToCentroidElementIndiciesMap.get(nodeIndex) || [];

      const avgField = (field: Map<number, number>) =>
        mean(elementIndicies.map((ei) => field.get(ei) ?? 0));

      membraneXXs[pos] = avgField(analyzeOutputsElements.membraneXX);
      membraneYYs[pos] = avgField(analyzeOutputsElements.membraneYY);
      membraneXYs[pos] = avgField(analyzeOutputsElements.membraneXY);
      bendingXXs[pos] = avgField(analyzeOutputsElements.bendingXX);
      bendingYYs[pos] = avgField(analyzeOutputsElements.bendingYY);
      bendingXYs[pos] = avgField(analyzeOutputsElements.bendingXY);
      shearXs[pos] = avgField(analyzeOutputsElements.tranverseShearX);
      shearYs[pos] = avgField(analyzeOutputsElements.tranverseShearY);
      vmStress[pos] = avgField(analyzeOutputsElements.vonMises);
    });

    analyzeOutputs.membraneXX!.set(elementIndex, membraneXXs);
    analyzeOutputs.membraneYY!.set(elementIndex, membraneYYs);
    analyzeOutputs.membraneXY!.set(elementIndex, membraneXYs);
    analyzeOutputs.bendingXX!.set(elementIndex, bendingXXs);
    analyzeOutputs.bendingYY!.set(elementIndex, bendingYYs);
    analyzeOutputs.bendingXY!.set(elementIndex, bendingXYs);
    analyzeOutputs.tranverseShearX!.set(elementIndex, shearXs);
    analyzeOutputs.tranverseShearY!.set(elementIndex, shearYs);
    analyzeOutputs.vonMises!.set(elementIndex, vmStress);
  });

  return analyzeOutputs;
}

/**
 * Q4 Shell Stress Recovery — Isoparametric formulation at centroid
 * Projects 3D nodes to local shell plane, computes membrane forces (Nx,Ny,Nxy)
 * and bending moments (Mx,My,Mxy) using shape function derivatives at center.
 * Same local coordinate system as shellQ4.cpp (deform solver).
 */
function computeQ4ShellStresses(
  elmNodes: Node[],
  dxGlobal: number[],
  elementInputs: ElementInputs,
  elemIdx: number
): { Nx: number; Ny: number; Nxy: number; Mx: number; My: number; Mxy: number;
     Qx: number; Qy: number; vonMises: number } {
  const E = elementInputs.elasticities?.get(elemIdx) ?? 0;
  const nu = elementInputs.poissonsRatios?.get(elemIdx) ?? 0;
  const t = elementInputs.thicknesses?.get(elemIdx) ?? 1;

  // --- Project to local 2D shell frame (same as shellQ4.cpp) ---
  const p0 = elmNodes[0], p1 = elmNodes[1], p2 = elmNodes[2], p3 = elmNodes[3];
  const v01 = [p1[0]-p0[0], p1[1]-p0[1], p1[2]-p0[2]];
  const v32 = [p2[0]-p3[0], p2[1]-p3[1], p2[2]-p3[2]];
  let lxR = [v01[0]+v32[0], v01[1]+v32[1], v01[2]+v32[2]];
  let magLx = Math.sqrt(lxR[0]*lxR[0] + lxR[1]*lxR[1] + lxR[2]*lxR[2]);
  if (magLx < 1e-14) magLx = 1;
  let localX = [lxR[0]/magLx, lxR[1]/magLx, lxR[2]/magLx];

  const d02 = [p2[0]-p0[0], p2[1]-p0[1], p2[2]-p0[2]];
  const d13 = [p3[0]-p1[0], p3[1]-p1[1], p3[2]-p1[2]];
  let lzR = [
    d02[1]*d13[2] - d02[2]*d13[1],
    d02[2]*d13[0] - d02[0]*d13[2],
    d02[0]*d13[1] - d02[1]*d13[0]
  ];
  let magLz = Math.sqrt(lzR[0]*lzR[0] + lzR[1]*lzR[1] + lzR[2]*lzR[2]);
  if (magLz < 1e-14) magLz = 1;
  let localZ = [lzR[0]/magLz, lzR[1]/magLz, lzR[2]/magLz];

  let localY = [
    localZ[1]*localX[2] - localZ[2]*localX[1],
    localZ[2]*localX[0] - localZ[0]*localX[2],
    localZ[0]*localX[1] - localZ[1]*localX[0]
  ];
  let magLy = Math.sqrt(localY[0]*localY[0] + localY[1]*localY[1] + localY[2]*localY[2]);
  if (magLy < 1e-14) magLy = 1;
  localY = [localY[0]/magLy, localY[1]/magLy, localY[2]/magLy];

  // Re-orthogonalize localX
  localX = [
    localY[1]*localZ[2] - localY[2]*localZ[1],
    localY[2]*localZ[0] - localY[0]*localZ[2],
    localY[0]*localZ[1] - localY[1]*localZ[0]
  ];

  const cx = 0.25*(p0[0]+p1[0]+p2[0]+p3[0]);
  const cy = 0.25*(p0[1]+p1[1]+p2[1]+p3[1]);
  const cz = 0.25*(p0[2]+p1[2]+p2[2]+p3[2]);

  // Local 2D coordinates
  const xl: number[] = [], yl: number[] = [];
  for (let n = 0; n < 4; n++) {
    const dx = elmNodes[n][0] - cx, dy = elmNodes[n][1] - cy, dz = elmNodes[n][2] - cz;
    xl.push(dx*localX[0] + dy*localX[1] + dz*localX[2]);
    yl.push(dx*localY[0] + dy*localY[1] + dz*localY[2]);
  }

  // --- Transform global displacements to local shell frame ---
  const R = [localX, localY, localZ];
  const uLocal: number[] = new Array(24).fill(0);
  for (let n = 0; n < 4; n++) {
    const gi = n * 6;
    const li = n * 6;
    for (let r = 0; r < 3; r++) {
      uLocal[li + r] = R[r][0]*dxGlobal[gi] + R[r][1]*dxGlobal[gi+1] + R[r][2]*dxGlobal[gi+2];
    }
    for (let r = 0; r < 3; r++) {
      uLocal[li + 3 + r] = R[r][0]*dxGlobal[gi+3] + R[r][1]*dxGlobal[gi+4] + R[r][2]*dxGlobal[gi+5];
    }
  }

  // --- Material matrices ---
  const Dfactor = E / (1 - nu*nu);
  const Dm = [
    [Dfactor * t, Dfactor * nu * t, 0],
    [Dfactor * nu * t, Dfactor * t, 0],
    [0, 0, Dfactor * (1-nu)/2 * t]
  ];
  const t3_12 = t*t*t / 12;
  const Db = [
    [Dfactor * t3_12, Dfactor * nu * t3_12, 0],
    [Dfactor * nu * t3_12, Dfactor * t3_12, 0],
    [0, 0, Dfactor * (1-nu)/2 * t3_12]
  ];

  // --- Shape function derivatives at centroid (xi=0, eta=0) ---
  const dNdxi  = [-0.25, 0.25, 0.25, -0.25];
  const dNdeta = [-0.25, -0.25, 0.25, 0.25];

  let J00 = 0, J01 = 0, J10 = 0, J11 = 0;
  for (let n = 0; n < 4; n++) {
    J00 += dNdxi[n] * xl[n]; J01 += dNdxi[n] * yl[n];
    J10 += dNdeta[n] * xl[n]; J11 += dNdeta[n] * yl[n];
  }
  const detJ = J00*J11 - J01*J10;
  if (Math.abs(detJ) < 1e-20) {
    return { Nx: 0, Ny: 0, Nxy: 0, Mx: 0, My: 0, Mxy: 0, Qx: 0, Qy: 0, vonMises: 0 };
  }
  const invJ00 = J11/detJ, invJ01 = -J01/detJ, invJ10 = -J10/detJ, invJ11 = J00/detJ;

  const dNdx: number[] = [], dNdy: number[] = [];
  for (let n = 0; n < 4; n++) {
    dNdx.push(invJ00*dNdxi[n] + invJ01*dNdeta[n]);
    dNdy.push(invJ10*dNdxi[n] + invJ11*dNdeta[n]);
  }

  // --- Membrane strains ---
  let epsXX = 0, epsYY = 0, gammaXY = 0;
  for (let n = 0; n < 4; n++) {
    const u = uLocal[n*6 + 0];
    const v = uLocal[n*6 + 1];
    epsXX += dNdx[n] * u;
    epsYY += dNdy[n] * v;
    gammaXY += dNdy[n] * u + dNdx[n] * v;
  }

  const Nx = Dm[0][0]*epsXX + Dm[0][1]*epsYY;
  const Ny = Dm[1][0]*epsXX + Dm[1][1]*epsYY;
  const Nxy = Dm[2][2]*gammaXY;

  // --- Bending curvatures (Mindlin) ---
  let kappaXX = 0, kappaYY = 0, kappaXY = 0;
  for (let n = 0; n < 4; n++) {
    const thetaX = uLocal[n*6 + 3];
    const thetaY = uLocal[n*6 + 4];
    kappaXX += dNdx[n] * thetaY;
    kappaYY += -dNdy[n] * thetaX;
    kappaXY += dNdy[n] * thetaY - dNdx[n] * thetaX;
  }

  const Mx = Db[0][0]*kappaXX + Db[0][1]*kappaYY;
  const My = Db[1][0]*kappaXX + Db[1][1]*kappaYY;
  const Mxy = Db[2][2]*kappaXY;

  // --- Transverse shear ---
  const kappa_s = 5.0/6.0;
  const G = E / (2*(1+nu));
  const Ds = kappa_s * G * t;
  let gammaXZ = 0, gammaYZ = 0;
  const N_vals = [0.25, 0.25, 0.25, 0.25];
  for (let n = 0; n < 4; n++) {
    const w = uLocal[n*6 + 2];
    const thetaX = uLocal[n*6 + 3];
    const thetaY = uLocal[n*6 + 4];
    gammaXZ += dNdx[n] * w + N_vals[n] * thetaY;
    gammaYZ += dNdy[n] * w - N_vals[n] * thetaX;
  }
  const Qx = Ds * gammaXZ;
  const Qy = Ds * gammaYZ;

  // --- Von Mises stress (max of top/bottom fiber) ---
  const sigXX_top = Nx/t + 6*Mx/(t*t);
  const sigYY_top = Ny/t + 6*My/(t*t);
  const sigXY_top = Nxy/t + 6*Mxy/(t*t);
  const vonMises_top = Math.sqrt(sigXX_top*sigXX_top - sigXX_top*sigYY_top + sigYY_top*sigYY_top + 3*sigXY_top*sigXY_top);

  const sigXX_bot = Nx/t - 6*Mx/(t*t);
  const sigYY_bot = Ny/t - 6*My/(t*t);
  const sigXY_bot = Nxy/t - 6*Mxy/(t*t);
  const vonMises_bot = Math.sqrt(sigXX_bot*sigXX_bot - sigXX_bot*sigYY_bot + sigYY_bot*sigYY_bot + 3*sigXY_bot*sigXY_bot);

  const vonMises = Math.max(vonMises_top, vonMises_bot);

  return { Nx, Ny, Nxy, Mx, My, Mxy, Qx, Qy, vonMises };
}

function getMaterialStiffnessMatrix3x3(
  elementInputs: ElementInputs,
  index: number
): Matrix {
  const elasticityX = elementInputs.elasticities?.get(index) ?? 0;
  const elasticityY = elementInputs.elasticitiesOrthogonal?.get(index) ?? 0;
  const poissonRatio = elementInputs.poissonsRatios?.get(index) ?? 0;
  const shearModulus = elementInputs.shearModuli?.get(index) ?? 0;
  const thickness = elementInputs.thicknesses?.get(index) ?? 0;

  const isOrthotropic = elasticityY > 0;
  return isOrthotropic
    ? getOrthotropicInPlaneConstitutiveMatrix(
        elasticityX,
        elasticityY,
        shearModulus,
        poissonRatio
      )
    : getIsotropicInPlaneConstitutiveMatrix(elasticityX, poissonRatio);
}

function getLinearFieldMatrix3x6(nodeCoordinates: Node[]): Matrix {
  const [x1, y1] = nodeCoordinates[0];
  const [x2, y2] = nodeCoordinates[1];
  const [x3, y3] = nodeCoordinates[2];

  const y23 = y2 - y3;
  const y31 = y3 - y1;
  const y12 = y1 - y2;

  const x32 = x3 - x2;
  const x13 = x1 - x3;
  const x21 = x2 - x1;

  return matrix([
    [y23, y31, y12, 0, 0, 0],
    [0, 0, 0, x32, x13, x21],
    [x32, x13, x21, y23, y31, y12],
  ]);
}

function getDisplacementMatrix6x2(dxLocal: number[]): Matrix {
  const [u1, u2, u3] = [dxLocal[0], dxLocal[6], dxLocal[12]];
  const [v1, v2, v3] = [dxLocal[1], dxLocal[7], dxLocal[13]];
  const [theta_y1, theta_y2, theta_y3] = [dxLocal[4], dxLocal[10], dxLocal[16]];
  const [theta_x1, theta_x2, theta_x3] = [dxLocal[3], dxLocal[9], dxLocal[15]];
  return matrix([
    [u1, -theta_y1],
    [u2, -theta_y2],
    [u3, -theta_y3],
    [v1, theta_x1],
    [v2, theta_x2],
    [v3, theta_x3],
  ]);
}

function getElementArea(nodeCoordinates: Node[]) {
  const [x1, y1] = nodeCoordinates[0];
  const [x2, y2] = nodeCoordinates[1];
  const [x3, y3] = nodeCoordinates[2];

  const x21 = x2 - x1;
  const x31 = x3 - x1;
  const y31 = y3 - y1;
  const y12 = y1 - y2;

  return 0.5 * (x21 * y31 - x31 * -y12);
}

function getCentroidsMaps(
  nodes: Node[],
  elements: Element[]
): {
  nodeToCentroidNodesMap: Map<number, Node[]>;
  nodeToCentroidElementIndiciesMap: Map<number, number[]>;
} {
  const nodeToCentroidNodesMap: Map<number, Node[]> = new Map();
  const nodeToCentroidElementIndiciesMap: Map<number, number[]> = new Map();
  elements.forEach((element, elementIndex) => {
    const elmNodes = element.map((index) => nodes[index]);
    const centroidNode = getCentroidFromNodes(elmNodes) as Node;
    element.forEach((nodeIndex) => {
      if (!nodeToCentroidNodesMap.has(nodeIndex)) {
        nodeToCentroidNodesMap.set(nodeIndex, []);
      }
      nodeToCentroidNodesMap.get(nodeIndex)?.push(centroidNode);

      if (!nodeToCentroidElementIndiciesMap.has(nodeIndex)) {
        nodeToCentroidElementIndiciesMap.set(nodeIndex, []);
      }
      nodeToCentroidElementIndiciesMap.get(nodeIndex)?.push(elementIndex);
    });
  });
  return {
    nodeToCentroidNodesMap: nodeToCentroidNodesMap,
    nodeToCentroidElementIndiciesMap: nodeToCentroidElementIndiciesMap,
  };
}

function getCentroidFromNodes(
  nodeCoordinates: Node[]
): [number, number, number] {
  const x =
    nodeCoordinates.reduce((sum, n) => sum + n[0], 0) / nodeCoordinates.length;
  const y =
    nodeCoordinates.reduce((sum, n) => sum + n[1], 0) / nodeCoordinates.length;
  const z =
    nodeCoordinates.reduce((sum, n) => sum + n[2], 0) / nodeCoordinates.length;
  return [x, y, z];
}

function getLinearlyInterpolatedValueInTriangle(
  targetNode: Node,
  n1: Node,
  n2: Node,
  n3: Node,
  f1: number,
  f2: number,
  f3: number
): number {
  const [x, y] = targetNode;
  const [x1, y1] = n1;
  const [x2, y2] = n2;
  const [x3, y3] = n3;

  const denominator = (y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3);
  const lambda1 = ((y2 - y3) * (x - x3) + (x3 - x2) * (y - y3)) / denominator;
  const lambda2 = ((y3 - y1) * (x - x3) + (x1 - x3) * (y - y3)) / denominator;
  const lambda3 = 1 - lambda1 - lambda2;

  return lambda1 * f1 + lambda2 * f2 + lambda3 * f3;
}
