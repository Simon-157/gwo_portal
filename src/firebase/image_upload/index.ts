import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { firebaseApp } from '../config/firebase';

// Create a storage instance
const storage = getStorage(firebaseApp);

// Function to upload user image to Firebase Storage
export const uploadUserImage = async (userId: string, file: File): Promise<string> => {
  try {
    const storageRef = ref(storage, `userImages/${userId}/${file.name}`);
    await uploadBytes(storageRef, file);
    const imageUrl = await getDownloadURL(storageRef);
    return imageUrl;
  } catch (error) {
    console.error('Error uploading user image:', error);
    throw error;
  }
};

// Function to delete user image from Firebase Storage
export const deleteUserImage = async (imageUrl: string): Promise<void> => {
  try {
    const storageRef = ref(storage, imageUrl);
    await deleteObject(storageRef);
  } catch (error) {
    console.error('Error deleting user image:', error);
    throw error;
  }
};

