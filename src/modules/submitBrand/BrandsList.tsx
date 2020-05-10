import React from 'react';
import { Brand } from './SubmitBrandTypes';

interface BrandsListProps {
  brandsList: Brand[];
  updateBrandHandler: (e: React.ChangeEvent<HTMLInputElement>, brand: Brand, ...argsImg: number[]) => void;
}

const BrandsList: React.FC<BrandsListProps> = ({ brandsList, updateBrandHandler }) => {
  return (
    <div className="brands-list">
      {brandsList.map((brand, i) => (
        <div className="form-check brand-item" key={brand.id}>
          <input
            onChange={(e) => updateBrandHandler(e, brand)}
            type="checkbox"
            name="checkAll"
            className="form-check-input"
            id={`brandIndex-${i}`}
            checked={brand.checked}
          />
          <label className="form-check-label" htmlFor={`brandIndex-${i}`}>
            {brand.name}
          </label>
        </div>
      ))}
    </div>
  );
};
export default BrandsList;
