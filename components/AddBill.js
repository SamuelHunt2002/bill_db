import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const AddBill = () => {
  const [billNumber, setBillNumber] = useState('');
  const [title, setTitle] = useState('');
  const [longTitle, setLongTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'bills'), {
        billNumber,
        title,
        longTitle,
        content,
        tags: tags.split(',').map((tag) => tag.trim()),
      });
      setBillNumber('');
      setTitle('');
      setLongTitle('');
      setContent('');
      setTags('');
      } catch (error) {
      console.error('Error adding bill:', error);
      }
      };
      return (
        <div>
        <h1>Add Bill</h1>
        <form onSubmit={handleSubmit}>
        <label>
        Bill Number:
        <input
        type="text"
        value={billNumber}
        onChange={(e) => setBillNumber(e.target.value)}
        />
        </label>
        <label>
        Title:
        <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        </label>
        <label>
        Long Title:
        <input
        type="text"
        value={longTitle}
        onChange={(e) => setLongTitle(e.target.value)}
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
        Tags (comma-separated):
        <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        />
        </label>
        <button type="submit">Add Bill</button>
        </form>
        </div>
        );
        };
        
        export default AddBill;
