import { Node } from ".././data-model";
import {
  cross,
  dot,
  identity,
  kron,
  MathCollection,
  Matrix,
  norm,
  subtract,
  zeros,
} from "mathjs";
import { getTransformationMatrixShellQ4 } from "./shellQ4";

// from global to local
export function getTransformationMatrix(nodes: Node[]): number[][] {
  if (nodes.length === 2) return getTransformationMatrixFrame(nodes);
  if (nodes.length === 3) return getTransformationMatrixShell(nodes);
  if (nodes.length === 4) return getTransformationMatrixShellQ4(nodes);
}

/**
 * Ejes locales de barra, convención CSI (SAP2000 / ETABS):
 *
 *   eje 1 (x) = del nudo i al nudo j
 *   eje 2 (y) = en el plano vertical que contiene la barra, hacia ARRIBA.
 *               Si la barra es vertical no hay tal plano: se toma el +X global.
 *   eje 3 (z) = eje1 × eje2  (queda horizontal en barras no verticales)
 *
 * Antes la tríada era otra: y = (-m/D, l/D, 0) horizontal y z hacia arriba.
 * Las dos son dextrógiras y las dos resuelven igual, pero respecto a CSI la
 * vieja giraba 90° EN UN SENTIDO en las vigas y en el CONTRARIO en las
 * columnas (viga: y=-eje3, z=+eje2; columna: y=+eje3, z=-eje2). O sea que no
 * había un mapeo único para leer las fuerzas de barra contra ETABS, y el
 * signo de V y M cambiaba según el tipo de barra. Medido contra
 * FrameObj.GetTransformationMatrix del propio ETABS.
 *
 * CONSECUENCIA EN LOS DATOS DE ENTRADA: al girar los ejes, la inercia que
 * gobierna cada plano cambia de casillero.
 *   momentsOfInertiaZ = I33 (flexión en el plano 1-2: V2 y M3)
 *   momentsOfInertiaY = I22 (flexión en el plano 1-3: V3 y M2)
 * Con la tríada vieja era justo al revés. Los modelos que pasan las dos
 * inercias distintas hay que cruzarlos.
 */
function getTransformationMatrixFrame(nodes: Node[]): number[][] {
  const vector = subtract(nodes[1], nodes[0]) as number[];
  const length = norm(vector) as number;
  const l = dot(vector, [1, 0, 0]) / length;
  const m = dot(vector, [0, 1, 0]) / length;
  const n = dot(vector, [0, 0, 1]) / length;
  const D = Math.sqrt(l ** 2 + m ** 2);

  // Vertical: el plano vertical no define nada, CSI fija el eje 2 en +X global.
  // Se compara con tolerancia, no con ===: un nudo escrito con 6 decimales deja
  // n = 0.9999999999 y caía en la rama general, que con D→0 da infinitos.
  if (D < 1e-9) {
    const s = n > 0 ? 1 : -1;
    const lambda = [
      [0, 0, s],        // eje 1: a lo largo de la barra
      [1, 0, 0],        // eje 2: +X global
      [0, s, 0],        // eje 3 = eje1 × eje2
    ];
    return kron(identity(4) as MathCollection, lambda).toArray() as number[][];
  }

  const lambda = [
    [l, m, n],
    [(-l * n) / D, (-m * n) / D, D],
    [m / D, -l / D, 0],
  ];

  return kron(identity(4) as MathCollection, lambda).toArray() as number[][];
}

function getTransformationMatrixShell(nodes: Node[]): number[][] {
  const nodesCount = 3;
  const dimensions = 3;
  const dof = 6;
  const totalDof = nodesCount * dof;

  const globalCoordinates = [nodes[0], nodes[1], nodes[2]];
  const localCoordinates = (
    zeros(dimensions, nodesCount) as Matrix
  ).toArray() as number[][];

  for (let i = 0; i < dimensions; i++) {
    for (let j = 0; j < nodesCount; j++) {
      localCoordinates[i][j] = globalCoordinates[j][i];
    }
  }

  const dN_dxi = [-1.0, 1.0, 0.0];
  const dN_det = [-1.0, 0.0, 1.0];
  const jacobianMatrix = (
    zeros(dimensions, 2) as Matrix
  ).toArray() as number[][];

  for (let i = 0; i < dimensions; i++) {
    for (let k = 0; k < nodesCount; k++) {
      jacobianMatrix[i][0] += localCoordinates[i][k] * dN_dxi[k];
      jacobianMatrix[i][1] += localCoordinates[i][k] * dN_det[k];
    }
  }

  const dX_dxi = jacobianMatrix.map((row) => row[0]);
  const dX_det = jacobianMatrix.map((row) => row[1]);
  let normalVector = cross(dX_dxi, dX_det) as number[];
  let length = norm(normalVector) as number;

  if (length === 0) {
    console.warn("Degenerate triangle: nodes are collinear or coincident.");
    return (zeros(totalDof, totalDof) as Matrix).toArray() as number[][];
  }

  normalVector = normalVector.map((v) => v / length);
  const localZ = [...normalVector];

  const globalIdentityMatrix = (
    identity(dimensions) as Matrix
  ).toArray() as number[][];
  const dotProductWithGlobalX = normalVector[0];
  let localX: number[];

  if (Math.abs(dotProductWithGlobalX) > 1 - 1e-10) {
    const dotProductWithGlobalZ = normalVector[2];
    localX = globalIdentityMatrix.map(
      (row, l) => row[2] - dotProductWithGlobalZ * normalVector[l]
    );
  } else {
    localX = globalIdentityMatrix.map(
      (row, l) => row[0] - dotProductWithGlobalX * normalVector[l]
    );
  }

  length = norm(localX) as number;
  if (length === 0) {
    console.warn("Degenerate local X-axis detected.");
    return (zeros(totalDof, totalDof) as Matrix).toArray() as number[][];
  }
  localX = localX.map((v) => v / length);

  let localY = cross(localZ, localX) as number[];
  length = norm(localY) as number;
  if (length === 0) {
    console.warn("Degenerate local Y-axis detected.");
    return (zeros(totalDof, totalDof) as Matrix).toArray() as number[][];
  }
  localY = localY.map((v) => v / length);

  const transformationMatrixLocal = [localX, localY, localZ];

  const transformationMatrixGlobal = (
    zeros(totalDof, totalDof) as Matrix
  ).toArray() as number[][];

  for (let nodeIdx = 0; nodeIdx < nodesCount; nodeIdx++) {
    const translationalDofOffset = nodeIdx * dof;
    const rotationalDofOffset = translationalDofOffset + dimensions;

    for (let i = 0; i < dimensions; i++) {
      for (let j = 0; j < dimensions; j++) {
        transformationMatrixGlobal[translationalDofOffset + i][
          translationalDofOffset + j
        ] = transformationMatrixLocal[i][j];
        transformationMatrixGlobal[rotationalDofOffset + i][
          rotationalDofOffset + j
        ] = transformationMatrixLocal[i][j];
      }
    }
  }

  return transformationMatrixGlobal;
}
