import React from 'react';
import { Image, Brand } from 'modules/submitBrand/SubmitBrandTypes';

interface CheckboxListProps {
  image: Image;
  imgIndex: number;
  updateBrand: (e: React.ChangeEvent<HTMLInputElement>, brand: Brand, imageId: number, imageIndex: number) => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ image, imgIndex, updateBrand }) => {
  return (
    <>
      {image.brands.map((brand, index) => (
        <div className="form-check" key={brand.id}>
          <input
            onChange={(e) => updateBrand(e, brand, image.id, imgIndex)}
            checked={brand.checked}
            type="checkbox"
            name={brand.name}
            className="form-check-input"
          />
          <label className="form-check-label">{brand.name}</label>
        </div>
      ))}
    </>
  );
};
export default CheckboxList;
