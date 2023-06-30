import { useEffect, useState } from 'react';
import { NextSeo } from "next-seo";
import HomeLayout from "@/components/ui/Layout";
import RecentPosts from "@/components/blog/index/recent";
import AllPosts from "@/components/blog/index/all";
import { Blog } from "@/types/types";
import { fetchBlogs, subscribeToBlogs } from '@/firebase/controllers/blog.controller';

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    // Fetch initial blogs
    fetchBlogs().then((fetchedBlogs) => {
      setBlogs(fetchedBlogs);
    });

    // Subscribe to real-time updates
    const unsubscribe = subscribeToBlogs((updatedBlogs) => {
      setBlogs(updatedBlogs);
    });

    // Clean up the subscription when component unmounts
    console.log(blogs);
    return () => {
      unsubscribe();
    };

    
  }, []);

  return (
    <>
      <NextSeo title="Blog" />
      <HomeLayout>
        <RecentPosts posts={blogs.slice(0, 3)} />
        <AllPosts posts={blogs} />
      </HomeLayout>
    </>
  );
}
