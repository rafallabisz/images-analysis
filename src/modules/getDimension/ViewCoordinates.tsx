import React from 'react';
import { CoordinatesOfRectangle } from './GetDimensionTypes';

interface ViewCoordinatesProps {
  coordinatesOfRectangle: CoordinatesOfRectangle;
}

const ViewCoordinates: React.FC<ViewCoordinatesProps> = ({ coordinatesOfRectangle }) => {
  const { A, B, C, D } = coordinatesOfRectangle;
  return (
    <div>
      <div>{`{ `}</div>
      <div>{`"A": { "x": ${A.x}, "y": ${A.y}},`}</div>
      <div>{`"B": { "x": ${B.x}, "y": ${B.y}},`}</div>
      <div>{`"C": { "x": ${C.x}, "y": ${C.y}},`}</div>
      <div>{`"D": { "x": ${D.x}, "y": ${D.y}}`}</div>
      <div>{`}`}</div>
    </div>
  );
};
export default ViewCoordinates;
