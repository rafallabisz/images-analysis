import React, { useState } from 'react';
import data from 'data/data';
import './SubmitBrandStyles.sass';
import { Image, Brand } from './SubmitBrandTypes';
import CheckboxList from './CheckboxList';
import ViewJson from './ViewJson';
import BrandsList from './BrandsList';

const SubmitBrand: React.FC = () => {
  const [images, setImages] = useState<Image[]>(data.images);
  const [brandsList, setBrandsList] = useState<Brand[]>([...images[0].brands]);

  const updateBrandHandler = (e: React.ChangeEvent<HTMLInputElement>, brand: Brand, ...argsImg: number[]) => {
    const [imageId, imageIndex] = argsImg;
    const name = e.currentTarget.name;
    if (name === 'checkAll') {
      const { updateCheckboxList, updateBrandsList } = updateAllBrand(e, brand);
      setBrandsList(updateBrandsList);
      setImages(updateCheckboxList);
      return;
    }
    const updateImage = updateSingleBrand(e, brand, imageIndex);
    setImages(images.map((image) => (image.id === imageId ? updateImage : image)));
  };

  const updateSingleBrand = (e: React.ChangeEvent<HTMLInputElement>, brand: Brand, imageIndex: number) => {
    const checked = e.currentTarget.checked;
    let selectImage = { ...images[imageIndex] };
    const brandIndexSelected = selectImage.brands.findIndex((br) => br.id === brand.id);
    const brandSelected = selectImage.brands[brandIndexSelected];
    const updateBrandsCheckbox = selectImage.brands.map((br, i) =>
      br.id === brand.id ? { ...brandSelected, checked } : br,
    );
    return (selectImage = { ...selectImage, brands: updateBrandsCheckbox });
  };

  const updateAllBrand = (e: React.ChangeEvent<HTMLInputElement>, brand: Brand) => {
    const checked = e.currentTarget.checked;
    const updateCheckboxList: Image[] = images.map((image) => {
      const updBrands = image.brands.map((br) => (br.id === brand.id ? { ...br, checked } : br));
      return { ...image, brands: updBrands };
    });
    const updateBrandsList = brandsList.map((br) => (br.id === brand.id ? { ...br, checked } : br));
    return { updateCheckboxList, updateBrandsList };
  };

  return (
    <div className="container-home">
      <BrandsList brandsList={brandsList} updateBrandHandler={updateBrandHandler} />
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
