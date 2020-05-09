import React from 'react';
import { Image, Brand } from 'modules/submitBrand/SubmitBrandTypes';

interface CheckboxListProps {
  image: Image;
  imgIndex: number;
  updateBrandHandler: (e: React.ChangeEvent<HTMLInputElement>, brand: Brand, ...argsImg: number[]) => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ image, imgIndex, updateBrandHandler }) => {
  return (
    <>
      {image.brands.map((brand, index) => (
        <div className="form-check checkbox-list" key={brand.id}>
          <input
            onChange={(e) => updateBrandHandler(e, brand, image.id, imgIndex)}
            checked={brand.checked}
            type="checkbox"
            name={brand.name}
            className="form-check-input"
          />
          <label className="form-check-label"></label>
        </div>
      ))}
    </>
  );
};
export default CheckboxList;
