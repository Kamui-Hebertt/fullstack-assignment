import React, { useState } from 'react';

const FilterAgents = ({ agents, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search by Practice Areas:</label>
      <input
        type="text"
        id="search"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Enter practice areas"
      />
    </div>
  );
};

export default FilterAgents;
