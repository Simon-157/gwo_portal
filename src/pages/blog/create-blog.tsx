import React, { useState } from "react";
import Button from "@/components/button/Button";
import Input from "@/components/input-field/Input";
import { Blog } from "@/types/types";
import { addBlog } from "@/firebase/controllers/blog.controller";

const BlogForm = () => {
  const [formData, setFormData] = useState<Blog>({
    title: "",
    tags: [],
    avatar: "",
    background: "",
    content: "",
    type: "",
    author: "",
    link: "",
    date: 0,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTagChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const tags = value.split(",").map((tag) => tag.trim());
    setFormData((prevData) => ({
      ...prevData,
      tags,
    }));
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Call the addBlog function from the controller
    addBlog(formData)
      .then(() => {
        console.log("Blog added successfully");
        // Reset form data after successful submission
        setFormData({
          title: "",
          tags: [],
          avatar: "",
          background: "",
          content: "",
          type: "",
          author: "",
          link: "",
          date: 0,
        });
      })
      .catch((error) => {
        console.error("Error adding blog:", error);
        alert(error)
      });
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create a Blog Post</h1>
        <Input
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter the blog title"
        />
        <Input
          label="Tags"
          name="tags"
          value={formData.tags.join(", ")}
          onChange={handleTagChange}
          placeholder="Enter tags separated by commas"
        />

        <Input
          label="Background URL"
          name="background"
          value={formData.background}
          onChange={handleInputChange}
          placeholder="Enter the background URL"
        />
        <Input
          label="Type"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          placeholder="Select the type"
          type="select"
          selectOptions={["Education", "Social", "Entertainment"]}
        />
        <Input
          label="Link"
          name="link"
          value={formData.link}
          onChange={handleInputChange}
          placeholder="Enter the link"
        />
        <Input
          label="content"
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          placeholder="Enter the content"
          type="text"
        />

        <Button type="solid"  onClick={handleSubmit}>
          Submit
        </Button>
    </div>
  );
};

export default BlogForm;
