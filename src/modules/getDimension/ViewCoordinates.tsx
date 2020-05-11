import React from 'react';
import { CoordinatesOfRectangle } from './GetDimensionTypes';

interface ViewCoordinatesProps {
  coordinatesOfRectangle?: CoordinatesOfRectangle;
}

const ViewCoordinates: React.FC<ViewCoordinatesProps> = ({ coordinatesOfRectangle }) => {
  return (
    <>
      {coordinatesOfRectangle && (
        <div>
          <span>{`A(${coordinatesOfRectangle.A.x}, ${coordinatesOfRectangle.A.y}); `}</span>
          <span>{`B(${coordinatesOfRectangle.B.x}, ${coordinatesOfRectangle.B.y}); `}</span>
          <span>{`C(${coordinatesOfRectangle.C.x}, ${coordinatesOfRectangle.C.y}); `}</span>
          <span>{`D(${coordinatesOfRectangle.D.x}, ${coordinatesOfRectangle.D.y}); `}</span>
        </div>
      )}
    </>
  );
};
export default ViewCoordinates;
