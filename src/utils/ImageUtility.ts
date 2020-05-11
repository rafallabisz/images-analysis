const toBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    }
    return;
  });

const scaleImage = (img: HTMLImageElement, canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const ratio = img.width / img.height;
  let newWidth = canvasRef.current!.width;
  let newHeight = newWidth / ratio;
  if (newHeight > canvasRef.current!.height) {
    newHeight = canvasRef.current!.height;
    newWidth = newHeight * ratio;
  }
  canvasRef.current!.width = newWidth;
  canvasRef.current!.height = newHeight;
  return {
    newWidth,
    newHeight,
  };
};

const imageUtility = {
  toBase64,
  scaleImage,
};

export default imageUtility;
