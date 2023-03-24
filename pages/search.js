import React, { useState } from 'react';
import BillList from '../components/BillList';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>Search Bills</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by title"
      />
      <BillList searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
