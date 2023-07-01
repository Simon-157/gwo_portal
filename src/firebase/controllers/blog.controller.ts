import { Blog } from "@/types/types";
import { collection, doc, onSnapshot, addDoc, updateDoc, deleteDoc, getDocs, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../config/firebase";


const db = getFirestore(firebaseApp);

const addBlog = async (blog: Blog): Promise<void> => {
  try {
    const blogsCollection = collection(db, 'blogs');
    await addDoc(blogsCollection, blog);
    console.log('Blog added successfully');
  } catch (error) {
    console.error('Error adding blog:', error);
  }
}

const fetchBlogs = async (): Promise<Blog[]> => {
  try {
    const blogsCollection = collection(db, 'blogs');
    const blogsSnapshot = await getDocs(blogsCollection);
    const blogs: Blog[] = [];

    blogsSnapshot.forEach((doc) => {
      blogs.push(doc.data() as Blog);
    });

    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

const updateBlog = async (blogId: string, updatedData: Partial<Blog>): Promise<void> => {
  try {
    const blogDocRef = doc(db, 'blogs', blogId);
    await updateDoc(blogDocRef, updatedData);
    console.log('Blog updated successfully');
  } catch (error) {
    console.error('Error updating blog:', error);
  }
}

const deleteBlog = async (blogId: string): Promise<void> => {
  try {
    const blogDocRef = doc(db, 'blogs', blogId);
    await deleteDoc(blogDocRef);
    console.log('Blog deleted successfully');
  } catch (error) {
    console.error('Error deleting blog:', error);
  }
}

const subscribeToBlogs = (callback: (blogs: Blog[]) => void): (() => void) => {
  const blogsCollection = collection(db, 'blogs');
  const unsubscribe = onSnapshot(blogsCollection, (snapshot) => {
    const blogs: Blog[] = [];
    snapshot.forEach((doc) => {
      blogs.push(doc.data() as Blog);
    });
    callback(blogs);
  });

  return unsubscribe;
}

export {
  addBlog,
  fetchBlogs,
  updateBlog,
  deleteBlog,
  subscribeToBlogs
};
