import React from 'react';
import { Brand } from './SubmitBrandTypes';

interface BrandsListProps {
  brandsList: Brand[];
}

const BrandsList: React.FC<BrandsListProps> = ({ brandsList }) => {
  return (
    <div className="brands-list">
      SELECT ALL BRANDS
      {brandsList.map((brand, i) => (
        <div className="form-check" key={brand.id}>
          <input
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
