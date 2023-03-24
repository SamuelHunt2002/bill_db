import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const TAG_OPTIONS = [
  'Business',
  'Constitutional Reform',
  'Culture, Media and Sports',
  'Defence',
  'Devolution and Local Gov',
  'Economy',
  'Education',
  'Energy',
  'Environment and Food Policy',
  'Europe/Brexit',
  'Foreign',
  'Health',
  'Home',
  'Housing',
  'International Development',
  'Science and Tech',
  'Transport'
];


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
        tags,
      });
      setBillNumber('');
      setTitle('');
      setLongTitle('');
      setContent('');
      setTags([]);
    } catch (error) {
      console.error('Error adding bill:', error);
      alert('Error adding bill: ' + error.message);
    }
  };
  

  return (
    <div>
      <h1>Add Bill</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Bill Number:
          <input
  type="number"
  value={billNumber}
  onChange={(e) => setBillNumber(parseInt(e.target.value))}
  required
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
        Tags:
<select
multiple
value={tags}
onChange={(e) =>
setTags(Array.from(e.target.selectedOptions, (option) => option.value))
}
required
>
{TAG_OPTIONS.map((tag) => (
<option key={tag} value={tag}>
{tag}
</option>
))}
</select>
        </label>
        <button type="submit">Add Bill</button>
      </form>
    </div>
  );
};

export default AddBill;

