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

const imageUtility = {
  toBase64,
};

export default imageUtility;
