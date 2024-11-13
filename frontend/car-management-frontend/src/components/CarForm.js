import React, { useState } from 'react';

const CarForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [tags, setTags] = useState(initialData.tags ? initialData.tags.join(', ') : '');
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('tags', tags.split(',').map(tag => tag.trim()));
    images.forEach(image => formData.append('images', image));
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <input
        type="file"
        multiple
        onChange={(e) => setImages([...e.target.files])}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarForm;
