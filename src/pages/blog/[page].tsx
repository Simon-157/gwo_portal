import React from 'react';
import { useRouter } from 'next/router';

const  BlogPost = () => {
  const router = useRouter();
  const { page } = router.query; // Access the dynamic parameter value

  return (
    <>
      <div>This is a blog post for page {page}</div>
    </>
  );
};


export default  BlogPost