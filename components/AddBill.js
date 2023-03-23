import React, { useState } from 'react';
import { db } from '../firebase';

const AddBill = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.collection('bills').add({
      title,
      content,
      tags: tags.split(',').map((tag) => tag.trim()),
    });
    setTitle('');
    setContent('');
    setTags('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Content:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <label>
        Tags:
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </label>
      <button type="submit">Add Bill</button>
</form>
);
};

export default AddBill;
