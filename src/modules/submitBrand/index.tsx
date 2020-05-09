import React, { useState } from 'react';
import data from 'data/data';
import './SubmitBrand.sass';
import { Image, Brand } from './SubmitBrandTypes';
import CheckboxList from './CheckboxList';
const SubmitBrand: React.FC = () => {
  const [images, setImages] = useState<Image[]>(data.images);

  const updateBrand = (e: React.ChangeEvent<HTMLInputElement>, brand: Brand, imageId: number, imageIndex: number) => {
    const checked = e.currentTarget.checked;
    let selectImage = { ...images[imageIndex] };
    const brandIndexSelected = selectImage.brands.findIndex((br) => br.id === brand.id);
    const updateBrand = selectImage.brands[brandIndexSelected];
    const updateBrandsCheckbox = selectImage.brands.map((br, i) =>
      br.id === brand.id ? { ...updateBrand, checked } : br,
    );
    selectImage = { ...selectImage, brands: updateBrandsCheckbox };
    setImages(images.map((image) => (image.id === imageId ? selectImage : image)));
  };
  console.log(images);

  return (
    <div className="container-home">
      {images.map((image, index) => (
        <div key={image.id}>
          <img src={image.link} alt="img" />
          <CheckboxList image={image} imgIndex={index} updateBrand={updateBrand} />
        </div>
      ))}
    </div>
  );
};
export default SubmitBrand;
