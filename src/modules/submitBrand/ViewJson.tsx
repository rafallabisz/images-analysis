import React from 'react';
import { Image } from 'modules/submitBrand/SubmitBrandTypes';

interface ViewJsonProps {
  image: Image;
}

const ViewJson: React.FC<ViewJsonProps> = ({ image }) => {
  return (
    <>
      <span>{`{ 
      "imageId": ${image.id},
      "brands":[`}</span>
      {image.brands.map((brand) => (
        <div key={brand.id}>
          {`{"brandId": ${brand.id},
              "checked":${brand.checked}},
    `}
        </div>
      ))}
      <div>]};</div>
    </>
  );
};
export default ViewJson;
