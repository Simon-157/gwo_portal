import React from 'react';
import { useState } from 'react';

// Reusable Input component
interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-1">{label}</label>
      <input
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

// Reusable Textarea component
interface TextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-1">{label}</label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};



// Reusable Checkbox component
interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
  }
  
  const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-1">
          <input
            type="checkbox"
            className="mr-2 leading-tight"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
          />
          {label}
        </label>
      </div>
    );
  };

  


  // Reusable Select component
interface SelectProps {
    label: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
  }
  
  const Select: React.FC<SelectProps> = ({ label, value, options, onChange }) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-1">{label}</label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };
  

// CreateBlogPostPage component
const CreateBlogPostPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [avatar, setAvatar] = useState('');
  const [background, setBackground] = useState('');
  const [type, setType] = useState('');
  const [author, setAuthor] = useState('');
  const [link, setLink] = useState('');
  const [date, setDate] = useState('');
  const [slug, setSlug] = useState('');
  const [featured, setFeatured] = useState(false);
  const [published, setPublished] = useState(false);

  const handleTitleChange = (value: string) => {
    setTitle(value);
  };

  const handleTagsChange = (value: string) => {
    setTags(value);
  };

  const handleAvatarChange = (value: string) => {
    setAvatar(value);
  };

  const handleBackgroundChange = (value: string) => {
    setBackground(value);
  };

  const handleTypeChange = (value: string) => {
    setType(value);
  };

  const handleAuthorChange = (value: string) => {
    setAuthor(value);
  };

  const handleLinkChange = (value: string) => {
    setLink(value);
  };

  const handleDateChange = (value: string) => {
    setDate(value);
  };

  const handleSlugChange = (value: string) => {
    setSlug(value);
  };

  const handleFeaturedChange = (checked: boolean) => {
    setFeatured(checked);
  };

  const handlePublishedChange = (checked: boolean) => {
    setPublished(checked);
  };

  const handleSubmit = () => {
    // Handle form submission here
    const blogPostData = {
      title,
      tags: tags.split('\n').map((tag) => tag.trim()),
      avatar,
      background,
      type,
      author,
      link,
      date: new Date(date).getTime() / 1000,
      slug,
      featured,
      published,
    };

    console.log(blogPostData);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Create Blog Post</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Title" value={title} onChange={handleTitleChange} />
        <Textarea label="Tags" value={tags} onChange={handleTagsChange} />
        <Input label="Avatar" value={avatar} onChange={handleAvatarChange} />
        <Input label="Background" value={background} onChange={handleBackgroundChange} />
        <Select
          label="Type"
          value={type}
          options={['Article', 'News', 'Tutorial']}
          onChange={handleTypeChange}
        />
        <Input label="Author" value={author} onChange={handleAuthorChange} />
        <Input label="Link" value={link} onChange={handleLinkChange} />
        <Input label="Date" value={date} onChange={handleDateChange} />
        <Input label="Slug" value={slug} onChange={handleSlugChange} />
        <Checkbox label="Featured" checked={featured} onChange={handleFeaturedChange} />
        <Checkbox label="Published" checked={published} onChange={handlePublishedChange} />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPostPage;
