import React, { useState } from 'react';
import data from 'data/data';
import './SubmitBrand.sass';
import { Image, Brand } from './SubmitBrandTypes';
import CheckboxList from './CheckboxList';
import ViewJson from './ViewJson';
const SubmitBrand: React.FC = () => {
  const [images, setImages] = useState<Image[]>(data.images);

  const updateBrandHandler = (e: React.ChangeEvent<HTMLInputElement>, brand: Brand, ...argsImg: number[]) => {
    const checked = e.currentTarget.checked;
    const [imageId, imageIndex] = argsImg;
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
          <CheckboxList image={image} imgIndex={index} updateBrandHandler={updateBrandHandler} />
          <ViewJson image={image} />
        </div>
      ))}
    </div>
  );
};
export default SubmitBrand;
