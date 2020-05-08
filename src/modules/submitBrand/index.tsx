import React, { useState } from 'react';
import data from 'data/data';
import { Image } from './SubmitBrandTypes';
const SubmitBrand: React.FC = () => {
  const [images, setImages] = useState<Image[]>(data.images);
  return (
    <div>
      <div>
        {images.map((image, index) => (
          <div key={image.id}>
            <img src={image.link} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SubmitBrand;
