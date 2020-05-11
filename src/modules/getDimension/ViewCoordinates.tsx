import React from 'react';
import { CoordinatesOfRectangle } from './GetDimensionTypes';

interface ViewCoordinatesProps {
  coordinatesOfRectangle?: CoordinatesOfRectangle;
}

const ViewCoordinates: React.FC<ViewCoordinatesProps> = ({ coordinatesOfRectangle }) => {
  const initCooardinatesOfRectangle = {
    A: { x: 0, y: 0 },
    B: { x: 0, y: 0 },
    C: { x: 0, y: 0 },
    D: { x: 0, y: 0 },
  };
  const { A, B, C, D } = coordinatesOfRectangle ? coordinatesOfRectangle : initCooardinatesOfRectangle;
  return (
    <>
      {coordinatesOfRectangle && (
        <div>
          <div>{`{ `}</div>
          <div>{`"A": { "x": ${A.x}, "y": ${A.y}},`}</div>
          <div>{`"B": { "x": ${B.x}, "y": ${B.y}},`}</div>
          <div>{`"C": { "x": ${C.x}, "y": ${C.y}},`}</div>
          <div>{`"D": { "x": ${D.x}, "y": ${D.y}}`}</div>
          <div>{`}`}</div>
        </div>
      )}
    </>
  );
};
export default ViewCoordinates;
