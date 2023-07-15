import React, { useState, ChangeEvent } from 'react';
import { StorageReference } from 'firebase/storage';
import { uploadUserImage } from '@/firebase/image_upload';
import Input from '../input-field/Input';
import Button from '../button/Button';

const ImageUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const imageUrl = await uploadUserImage('userId', selectedFile);
        console.log('Image uploaded successfully. Image URL:', imageUrl);
        // saving it to the user's profile
      } catch (error) {
        console.error('Error uploading image:', error);
        // Handle the error appropriately
      }
    }
  };

  return (
    <div className="w-full flex flex-col justify-center place-content-center">
      <label className="block mb-2">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{backgroundColor: 'var(--app-background-2)', padding: '0.8rem', color: '#aaa', fontSize:'1rem',fontFamily: 'var(--app-font-primary)'}}
        />
      </label>
      
      <Button
        onClick={handleUpload}
        disabled={!selectedFile} type={''}    style={{"width":"50%"}}  >
        Upload Image
      </Button>
    </div>
  );
};

export default ImageUploader;