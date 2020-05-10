import React, { useState } from 'react';
import imageUtility from 'utils/ImageUtility';

const LoadImage: React.FC = () => {
  const [loadImage, setLoadImage] = useState<string>();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files;
    if (file) {
      const image = await imageUtility.toBase64(file[0]);
      setLoadImage(image);
    }
  };

  return (
    <div>
      LOAD IMAGE
      <div className="form-group">
        <input
          type="file"
          className="input-file"
          placeholder="Image"
          name="image"
          onChange={(e) => handleImageChange(e)}
        />
      </div>
      {loadImage && <img src={loadImage} alt="load-images" />}
    </div>
  );
};
export default LoadImage;
