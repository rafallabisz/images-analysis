import React from 'react';
import imageUtility from 'utils/ImageUtility';

interface LoadImageProps {
  handleDrawOnImage: (imgLink: string) => void;
}

const LoadImage: React.FC<LoadImageProps> = ({ handleDrawOnImage }) => {
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files;
    if (file) {
      const imgLink = await imageUtility.toBase64(file[0]);
      handleDrawOnImage(imgLink);
    } else return;
  };

  return (
    <div className="form-group">
      <input
        type="file"
        className="input-file"
        placeholder="Image"
        name="image"
        onChange={(e) => handleImageChange(e)}
      />
    </div>
  );
};
export default LoadImage;
